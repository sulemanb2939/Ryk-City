/**
 * RYK CITY SYSTEM - SMART MAP ENGINE
 * Handles map rendering, interactions, and filtering
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Database
    if (window.RYK_DB) {
        window.RYK_DB.initializeDatabase();
        initMap();
    } else {
        console.error('Database module not loaded');
    }
});

// Map State
const MapState = {
    zoom: 1,
    panX: 0,
    panY: 0,
    isDragging: false,
    startX: 0,
    startY: 0,
    currentFilter: 'all',
    currentView: 'map', // 'map' or 'list'
    plots: []
};

// Colors
const STATUS_COLORS = {
    available: '#28a745',
    reserved: '#ffc107',
    sold: '#dc3545'
};

function initMap() {
    console.log('Initializing Map Engine...');

    // Get Elements
    const mapCanvas = document.getElementById('mapCanvas');
    const plotsGrid = document.getElementById('plotsGrid');
    const mapView = document.getElementById('mapView');
    const searchInput = document.getElementById('searchPlot');

    // Load Plots from DB
    MapState.plots = window.RYK_DB.PlotDB.getAll();
    updateStats();

    // Initial Render
    renderMap(mapCanvas);
    renderList(plotsGrid);

    // Setup Controls
    setupFilters();
    setupViewToggle();
    setupSearch(searchInput);
    setupMapInteractions(mapView, mapCanvas);
}

// ===============================
// RENDERERS
// ===============================

function renderMap(container) {
    if (!container) return;

    // Generate SVG Content
    let svgContent = `
        <svg width="100%" height="100%" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <!-- Background / Roads -->
            <rect x="0" y="0" width="1200" height="800" fill="#1a1a1a" />
            
            <!-- Main Road (Horizontal) -->
            <rect x="50" y="380" width="1100" height="40" fill="#333" />
            <line x1="50" y1="400" x2="1150" y2="400" stroke="#555" stroke-width="2" stroke-dasharray="10,10" />

            <!-- Vertical Roads -->
            <rect x="250" y="50" width="40" height="700" fill="#333" />
            <rect x="550" y="50" width="40" height="700" fill="#333" />
            <rect x="850" y="50" width="40" height="700" fill="#333" />
            
            <!-- Plots -->
            <g id="plotsLayer">
    `;

    // Render each plot rect
    // In a real system, coordinates would come from a proper GIS system
    // Here we use the simulated coordinates from our DB
    MapState.plots.forEach(plot => {
        const { x, y } = plot.location.coordinates;
        // Adjust coordinate mapping for visual representation
        // Assuming coordinates in DB are somewhat logical for a grid

        const width = 40; // Base width
        const height = 30; // Base height

        let color = STATUS_COLORS[plot.status] || '#999';

        svgContent += `
            <g class="plot-group" data-id="${plot.id}" data-status="${plot.status}" transform="translate(${x}, ${y})">
                <rect width="${width}" height="${height}" fill="${color}" stroke="#000" stroke-width="1" rx="2" />
                <text x="${width / 2}" y="${height / 2}" fill="white" font-size="8">${plot.plotNumber}</text>
            </g>
        `;
    });

    svgContent += `
            </g>
        </svg>
    `;

    container.innerHTML = svgContent;

    // Add Click Events to Plots
    document.querySelectorAll('.plot-group').forEach(group => {
        group.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent drag start
            const plotId = group.getAttribute('data-id');
            showPlotDetails(plotId);
        });
    });
}

function renderList(container) {
    if (!container) return;

    container.innerHTML = '';

    const filteredPlots = MapState.plots.filter(plot => {
        // Apply status filter
        if (MapState.currentFilter !== 'all' && plot.status !== MapState.currentFilter) {
            return false;
        }
        return true;
    });

    if (filteredPlots.length === 0) {
        container.innerHTML = '<div class="no-results" style="color:#aaa; text-align:center; grid-column: 1/-1;">No plots found matching criteria.</div>';
        return;
    }

    filteredPlots.forEach(plot => {
        const statusClass = `status-${plot.status}`;
        const price = new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumSignificantDigits: 3 }).format(plot.pricing.totalPrice);

        const html = `
            <div class="plot-card">
                <div class="plot-img">
                    <img src="assets/images/plots/plot-placeholder.jpg" alt="Plot ${plot.plotNumber}" onerror="this.src='https://via.placeholder.com/300x150?text=RYK+City+Plot'">
                    <span class="plot-status ${statusClass}">${plot.status}</span>
                </div>
                <div class="plot-info">
                    <h3>${plot.plotNumber} <span class="type">${plot.type}</span></h3>
                    <span class="size">${plot.size.marla} Marla (${plot.size.sqft} sqft)</span>
                    <span class="location">${plot.location.block}, ${plot.location.phase}</span>
                    <span class="price">${price}</span>
                    <button class="btn btn-sm btn-outline btn-block" onclick="showPlotDetails('${plot.id}')">View Details</button>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

// ===============================
// INTERACTIONS
// ===============================

function setupMapInteractions(container, canvas) {
    // Zoom (Wheel)
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        const newZoom = MapState.zoom * delta;

        // Limit zoom
        if (newZoom >= 0.5 && newZoom <= 3) {
            MapState.zoom = newZoom;
            updateTransform(canvas);
        }
    });

    // Pan (Drag)
    container.addEventListener('mousedown', (e) => {
        MapState.isDragging = true;
        MapState.startX = e.clientX - MapState.panX;
        MapState.startY = e.clientY - MapState.panY;
        container.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', () => {
        MapState.isDragging = false;
        container.style.cursor = 'grab';
    });

    window.addEventListener('mousemove', (e) => {
        if (!MapState.isDragging) return;
        e.preventDefault();
        MapState.panX = e.clientX - MapState.startX;
        MapState.panY = e.clientY - MapState.startY;
        updateTransform(canvas);
    });
}

function updateTransform(element) {
    element.style.transform = `translate(${MapState.panX}px, ${MapState.panY}px) scale(${MapState.zoom})`;
}

function showPlotDetails(plotId) {
    const plot = window.RYK_DB.PlotDB.getById(plotId);
    if (!plot) return;

    const modal = document.getElementById('plotModal');
    const modalBody = document.getElementById('modalBody');
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');

    // Format Numbers
    const formatMoney = (amount) => new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumSignificantDigits: 3 }).format(amount);

    // Determine status color class
    const statusClass = `status-${plot.status}`;
    const statusBg = STATUS_COLORS[plot.status];

    // Build Modal Content
    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-gallery">
                <img src="https://via.placeholder.com/600x400?text=Plot+View" alt="Plot View">
            </div>
            
            <div class="modal-info">
                <h2>Plot ${plot.plotNumber}</h2>
                <span class="modal-subtitle">${plot.size.marla} Marla ${plot.type} Plot</span>
                
                <span class="modal-status" style="background-color: ${statusBg}; color: ${plot.status === 'reserved' ? '#000' : '#fff'}">${plot.status}</span>
                
                <div class="details-grid">
                    <div class="detail-item">
                        <label>Location</label>
                        <span>${plot.location.block}, ${plot.location.phase}</span>
                    </div>
                    <div class="detail-item">
                        <label>Dimensions</label>
                        <span>${plot.size.width} x ${plot.size.length} ft</span>
                    </div>
                    <div class="detail-item">
                        <label>Area</label>
                        <span>${plot.size.sqft} sq.ft</span>
                    </div>
                    <div class="detail-item">
                        <label>Facing</label>
                        <span>Park Facing</span>
                    </div>
                </div>
                
                <div class="price-box">
                    <div class="price-row">
                        <span>Rate per Marla</span>
                        <span>${formatMoney(plot.pricing.totalPrice / plot.size.marla)}</span>
                    </div>
                    <div class="price-row">
                        <span>Down Payment (25%)</span>
                        <span>${formatMoney(plot.pricing.downPayment)}</span>
                    </div>
                    <div class="price-row">
                        <span>Monthly Installment</span>
                        <span>${formatMoney(plot.pricing.monthlyInstallment)}</span>
                    </div>
                    <div class="price-row total">
                        <span>Total Price</span>
                        <span>${formatMoney(plot.pricing.totalPrice)}</span>
                    </div>
                </div>
                
                <div class="action-buttons">
                    ${plot.status === 'available' ?
            `<a href="user-dashboard/login.html?plot=${plot.id}" class="btn btn-primary btn-block">Book Now</a>` :
            `<button class="btn btn-outline btn-block" disabled>Not Available</button>`
        }
                    <a href="https://wa.me/923006752225?text=I am interested in Plot ${plot.plotNumber}" class="btn btn-whatsapp"><i class="fab fa-whatsapp"></i> Chat</a>
                </div>
            </div>
        </div>
    `;

    // Show Modal
    modal.classList.add('active');

    // Close Events
    const closeModal = () => modal.classList.remove('active');
    overlay.onclick = closeModal;
    closeBtn.onclick = closeModal;
}

// ===============================
// CONTROLS
// ===============================

function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI Toggle
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Set Filter
            const filter = btn.getAttribute('data-filter');
            MapState.currentFilter = filter;

            // Apply visual filter to Maps
            applyMapFilter(filter);

            // Refresh List
            const plotsGrid = document.getElementById('plotsGrid');
            renderList(plotsGrid);
        });
    });
}

function applyMapFilter(status) {
    const groups = document.querySelectorAll('.plot-group');

    groups.forEach(group => {
        const plotStatus = group.getAttribute('data-status');
        if (status === 'all' || plotStatus === status) {
            group.classList.remove('hidden');
        } else {
            group.classList.add('hidden');
        }
    });
}

function setupViewToggle() {
    const buttons = document.querySelectorAll('.view-btn');
    const mapView = document.getElementById('mapView');
    const listView = document.getElementById('listView');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI Toggle
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const view = btn.getAttribute('data-view');
            if (view === 'map') {
                mapView.style.display = 'flex';
                listView.style.display = 'none';
            } else {
                mapView.style.display = 'none';
                listView.style.display = 'block';
            }
        });
    });
}

function setupSearch(input) {
    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        // Find matching plot
        const matched = MapState.plots.find(p => p.plotNumber.toLowerCase().includes(query));

        // In List View, filter list
        const plotsGrid = document.getElementById('plotsGrid');

        // In Map View, highlight logic could go here
        if (matched) {
            // Simply update list for now
            const filtered = MapState.plots.filter(p => p.plotNumber.toLowerCase().includes(query));
            renderListFiltered(plotsGrid, filtered);
        } else if (query === '') {
            renderList(plotsGrid);
        }
    });
}

function renderListFiltered(container, plots) {
    container.innerHTML = '';
    plots.forEach(plot => {
        // Reuse render logic or extract card generation to helper
        // Quick dup for simplicity
        const statusClass = `status-${plot.status}`;
        const price = new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumSignificantDigits: 3 }).format(plot.pricing.totalPrice);

        const html = `
            <div class="plot-card">
                <div class="plot-img">
                     <img src="https://via.placeholder.com/300x150?text=Plot" alt="Plot">
                    <span class="plot-status ${statusClass}">${plot.status}</span>
                </div>
                <div class="plot-info">
                    <h3>${plot.plotNumber}</h3>
                    <span class="size">${plot.size.marla} Marla</span>
                    <span class="price">${price}</span>
                    <button class="btn btn-sm btn-outline btn-block" onclick="showPlotDetails('${plot.id}')">View Details</button>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

function updateStats() {
    const stats = window.RYK_DB.PlotDB.getStats();

    document.getElementById('statAvailable').innerText = stats.available;
    document.getElementById('statReserved').innerText = stats.reserved;
    document.getElementById('statSold').innerText = stats.sold;
    document.getElementById('statTotal').innerText = stats.total;
}

// Global scope for onclick handlers
window.showPlotDetails = showPlotDetails;
