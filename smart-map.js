// Smart Map Logic & Data

// Data Structure - Road Fix Implementation
const mapConfig = [

    // ===== CONTINUOUS MAIN VERTICAL ROAD =====
    {
        type: 'road',
        name: 'Main Boulevard', // Continuous Vertical Road
        direction: 'vertical',
        gridArea: '1 / 2 / 12 / 3' // Spans from Top (Row 1) to Bottom (Row 12)
    },

    // ===== TOP TRIANGLE AREA =====
    {
        type: 'block',
        id: 'block-top-left',
        name: 'Block G',
        gridArea: '1 / 1 / 2 / 2',
        plots: Array.from({ length: 10 }, (_, i) => ({ id: `G-${i + 1}`, size: '5 Marla', dim: '25x45', price: 3000000, status: 'available', type: 'residential' }))
    },

    {
        type: 'block',
        id: 'block-top-right',
        name: 'Block H',
        gridArea: '1 / 3 / 2 / 4',
        plots: Array.from({ length: 10 }, (_, i) => ({ id: `H-${i + 1}`, size: '5 Marla', dim: '25x45', price: 3000000, status: 'available', type: 'residential' }))
    },

    // ===== CENTER MAIN AREA =====
    // Split Main Ave (Horizontal)
    {
        type: 'road',
        name: 'Main Ave (L)',
        direction: 'horizontal',
        gridArea: '3 / 1 / 4 / 2'
    },
    {
        type: 'road',
        name: 'Main Ave (R)',
        direction: 'horizontal',
        gridArea: '3 / 3 / 4 / 4'
    },

    {
        type: 'block',
        id: 'block-a',
        name: 'Block A',
        gridArea: '4 / 1 / 5 / 2',
        plots: Array.from({ length: 24 }, (_, i) => ({ id: `A-${i + 1}`, size: '1 Kanal', dim: '50x90', price: 16000000, status: i % 3 === 0 ? 'sold' : 'available', type: 'residential' }))
    },

    {
        type: 'block',
        id: 'block-d',
        name: 'Commercial', // Right Side
        gridArea: '4 / 3 / 5 / 4',
        plots: Array.from({ length: 20 }, (_, i) => ({ id: `C-${i + 1}`, size: '4 Marla', dim: 'Commercial', price: 12000000, status: 'available', type: 'commercial' }))
    },

    {
        type: 'block',
        id: 'block-b',
        name: 'Block B',
        gridArea: '5 / 3 / 6 / 4',
        plots: Array.from({ length: 24 }, (_, i) => ({ id: `B-${i + 1}`, size: '10 Marla', dim: '35x70', price: 8000000, status: 'reserved', type: 'residential' }))
    },

    // Split Park Avenue (Horizontal)
    {
        type: 'road',
        name: 'Park Ave (L)',
        direction: 'horizontal',
        gridArea: '6 / 1 / 7 / 2'
    },
    {
        type: 'road',
        name: 'Park Ave (R)',
        direction: 'horizontal',
        gridArea: '6 / 3 / 7 / 4'
    },

    {
        type: 'block',
        id: 'block-c',
        name: 'Block C',
        gridArea: '7 / 1 / 8 / 2',
        plots: Array.from({ length: 28 }, (_, i) => ({ id: `C-${i + 1}`, size: '7 Marla', dim: '30x60', price: 4900000, status: 'available', type: 'residential' }))
    },

    {
        type: 'block',
        id: 'block-e',
        name: 'Block E',
        gridArea: '7 / 3 / 8 / 4',
        plots: Array.from({ length: 28 }, (_, i) => ({ id: `D-${i + 1}`, size: '5 Marla', dim: '25x45', price: 3300000, status: i % 5 === 0 ? 'sold' : 'available', type: 'residential' }))
    },

    // ===== BOTTOM AREA =====
    // Split Boulevard (Horizontal)
    {
        type: 'road',
        name: 'Boulevard (L)',
        direction: 'horizontal',
        gridArea: '9 / 1 / 10 / 2'
    },
    {
        type: 'road',
        name: 'Boulevard (R)',
        direction: 'horizontal',
        gridArea: '9 / 3 / 10 / 4'
    },

    {
        type: 'block',
        id: 'block-f',
        name: 'Block F',
        gridArea: '10 / 1 / 11 / 2',
        plots: Array.from({ length: 30 }, (_, i) => ({ id: `E-${i + 1}`, size: '5 Marla', dim: '25x45', price: 3200000, status: 'available', type: 'residential' }))
    },

    {
        type: 'block',
        id: 'block-g',
        name: 'Block G (Ext)',
        gridArea: '10 / 3 / 11 / 4',
        plots: Array.from({ length: 30 }, (_, i) => ({ id: `F-${i + 1}`, size: '5 Marla', dim: '25x45', price: 3100000, status: 'reserved', type: 'residential' }))
    },

    // Vertical Main Road continues implicitly to row 12 as defined at top.

];

let allPlots = [];
let currentPlot = null;
const mapContainer = document.getElementById('mapContainer');
const modalOverlay = document.getElementById('plotModal');
const installmentSelect = document.getElementById('installmentYears');

// --- RENDER MAP ---
function renderMap() {
    mapContainer.innerHTML = '';
    allPlots = [];

    mapConfig.forEach(section => {
        const el = document.createElement('div');
        if (section.type === 'road') {
            el.className = section.direction === 'vertical' ? 'road-v' : 'road-h';
            // Use styled label span
            el.innerHTML = `<span class="road-label">${section.name}</span>`;
        } else if (section.type === 'block') {
            el.className = 'block-sector';
            if (section.style) el.style.cssText = section.style;

            const label = document.createElement('div');
            label.className = 'block-label';
            label.textContent = section.name;
            el.appendChild(label);

            const grid = document.createElement('div');
            grid.className = 'plots-grid';
            section.plots.forEach(plot => {
                const plotEl = document.createElement('div');
                plotEl.className = `plot ${plot.status} ${plot.type}`;
                plotEl.dataset.id = plot.id;
                allPlots.push({ ...plot, block: section.name });
                plotEl.innerHTML = `<span class="plot-number">${plot.id}</span><span class="plot-size">${plot.size}</span>`;
                plotEl.addEventListener('click', () => openModal(plot.id));
                grid.appendChild(plotEl);
            });
            el.appendChild(grid);
        }
        if (section.gridArea) el.style.gridArea = section.gridArea;
        mapContainer.appendChild(el);
    });

    // Center map after render
    centerMap();
}

// --- TRANSFORM LOGIC (Zoom & Pan) ---
let currentZoom = 0.7; // Initial Zoom
let currentX = 0;
let currentY = 0;
let isDragging = false;
let startX, startY;

const viewport = document.querySelector('.map-viewport');

// Center Logic
function centerMap() {
    const vpW = viewport.clientWidth;
    const vpH = viewport.clientHeight;
    // Assume map container width approx 1800 (from CSS)
    const mapW = 1800; // Match CSS width

    // Calculate X to center: (Viewport Width - (Map Width * Scale)) / 2
    // But since transform-origin is 0 0, we simply move X.
    // Actually, easier logic:
    // Initial X = (Viewport Width - Map Width) / 2

    if (vpW < mapW) {
        currentX = (vpW - mapW * currentZoom) / 2;
    } else {
        currentX = (vpW - mapW) / 2;
    }

    currentY = 50; // Top padding
    updateTransform();
}

function updateTransform() {
    mapContainer.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentZoom})`;
}

// Zoom Controls
function updateZoom(delta) {
    const newZoom = currentZoom + delta;
    if (newZoom >= 0.3 && newZoom <= 2.5) {
        currentZoom = newZoom;
        updateTransform();
    }
}
document.getElementById('zoomIn').addEventListener('click', () => updateZoom(0.1));
document.getElementById('zoomOut').addEventListener('click', () => updateZoom(-0.1));
document.getElementById('zoomReset').addEventListener('click', () => {
    currentZoom = 0.7;
    centerMap();
});


// Drag Events
viewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    viewport.classList.add('active');
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    viewport.classList.remove('active');
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    updateTransform();
});

// Mobile/Touch Support
viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX - currentX;
        startY = e.touches[0].clientY - currentY;
    }
});

window.addEventListener('touchend', () => isDragging = false);
window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX - startX;
    currentY = e.touches[0].clientY - startY;
    updateTransform();
});


// --- POPUP & FILTERS (Standard) ---
function openModal(plotId) {
    const plot = allPlots.find(p => p.id === plotId);
    if (!plot) return;
    currentPlot = plot;

    document.getElementById('modalPlotNo').textContent = `Plot ${plot.id}`;
    const statusEl = document.getElementById('modalStatus');
    statusEl.className = `status-badge ${plot.status}`;
    statusEl.textContent = plot.status;

    document.getElementById('modalBlock').textContent = plot.block;
    document.getElementById('modalSize').textContent = plot.size;
    document.getElementById('modalDimensions').textContent = plot.dim;
    document.getElementById('modalCategory').textContent = plot.type === 'commercial' ? 'Commercial' : 'Residential';

    const priceFormatted = formatCurrency(plot.price);
    const downPayment = plot.price * 0.20;

    document.getElementById('modalPrice').textContent = priceFormatted;
    document.getElementById('modalDownPayment').textContent = formatCurrency(downPayment);

    installmentSelect.value = "3";
    calculateInstallment(3);

    modalOverlay.classList.add('active');
}

function calculateInstallment(years) {
    if (!currentPlot) return;
    const total = currentPlot.price;
    const down = total * 0.20;
    const remaining = total - down;
    const months = years * 12;
    const monthly = remaining / months;
    document.getElementById('modalMonthly').textContent = formatCurrency(monthly);
}

installmentSelect.addEventListener('change', (e) => calculateInstallment(parseInt(e.target.value)));
document.getElementById('closeModal').addEventListener('click', () => modalOverlay.classList.remove('active'));
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) modalOverlay.classList.remove('active'); });

function formatCurrency(num) { return 'PKR ' + Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('plotSearch');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilter();
    });
});

searchInput.addEventListener('input', applyFilter);

function applyFilter() {
    const filter = document.querySelector('.filter-btn.active').dataset.filter;
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll('.plot').forEach(el => {
        const id = el.dataset.id;
        const plot = allPlots.find(p => p.id === id);
        if (!plot) return;
        const matchStatus = filter === 'all' || plot.status === filter;
        const matchSearch = id.toLowerCase().includes(query);
        el.style.display = (matchStatus && matchSearch) ? 'flex' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', renderMap);
window.addEventListener('resize', centerMap); // Re-center on resize
