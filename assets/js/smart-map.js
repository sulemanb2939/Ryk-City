/**
 * SMART MAP ENGINE
 * Landscape Grid Based Layout + Installment Calculator Modal
 */

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    setupModalListeners();
});

function initMap() {
    const mapGrid = document.getElementById('mapGrid');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');

    // Config
    let scale = 1;

    // Generate Blocks
    generateBlock(mapGrid, 'A', 50, 50, 5, 2);
    generateBlock(mapGrid, 'B', 800, 50, 5, 2);
    generateBlock(mapGrid, 'C', 50, 400, 6, 2);
    generateBlock(mapGrid, 'D', 900, 400, 4, 2);

    createRoad(mapGrid, 'h', 0, 300, 2000);
    createRoad(mapGrid, 'v', 700, 0, 1200);

    // Zoom Logic
    zoomInBtn.addEventListener('click', () => {
        if (scale < 1.5) {
            scale += 0.1;
            mapGrid.style.transform = `scale(${scale})`;
        }
    });

    zoomOutBtn.addEventListener('click', () => {
        if (scale > 0.5) {
            scale -= 0.1;
            mapGrid.style.transform = `scale(${scale})`;
        }
    });

    // Mobile Scroll Hint
    const viewport = document.getElementById('mapViewport');
    if (viewport) {
        viewport.scrollLeft = (2000 - viewport.clientWidth) / 2;
    }
}

function generateBlock(container, blockId, startX, startY, cols, rows) {
    const block = document.createElement('div');
    block.className = 'block-section';
    block.style.left = `${startX}px`;
    block.style.top = `${startY}px`;
    block.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    const label = document.createElement('div');
    label.style.position = 'absolute';
    label.style.top = '-30px';
    label.style.left = '0';
    label.style.color = 'var(--gold)';
    label.style.fontWeight = 'bold';
    label.textContent = `BLOCK ${blockId}`;
    block.appendChild(label);

    let plotCount = 1;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const plotNum = `${blockId}-${String(plotCount).padStart(2, '0')}`;
            const status = getRandomStatus();
            const marla = [3, 5, 7, 10][Math.floor(Math.random() * 4)];

            const plot = document.createElement('div');
            plot.className = 'plot';
            plot.dataset.status = status;
            plot.dataset.id = plotNum;
            plot.style.width = '120px';
            plot.style.height = '80px';

            plot.innerHTML = `<span>${plotNum}<br><small>${marla} Marla</small></span>`;

            plot.addEventListener('click', () => openPlotModal(plotNum, marla, status, blockId));

            block.appendChild(plot);
            plotCount++;
        }
    }

    container.appendChild(block);
}

function createRoad(container, type, x, y, length) {
    const road = document.createElement('div');
    road.className = type === 'h' ? 'road-h' : 'road-v';
    road.style.left = `${x}px`;
    road.style.top = `${y}px`;

    if (type === 'h') road.style.width = `${length}px`;
    else road.style.height = `${length}px`;

    container.appendChild(road);
}

function getRandomStatus() {
    const r = Math.random();
    if (r > 0.7) return 'sold';
    if (r > 0.5) return 'reserved';
    return 'available';
}

// ==========================================
// NEW MODAL LOGIC with INSTALLMENT CALCULATOR
// ==========================================

function openPlotModal(id, marla, status, block) {
    const overlay = document.getElementById('plotModalOverlay');
    const content = document.getElementById('modalContent');

    // Financial Data
    const pricePerMarla = 700000;
    const totalPrice = marla * pricePerMarla;
    const downPayment = totalPrice * 0.20;
    const remainingAmount = totalPrice - downPayment;

    const statusLabel = status.charAt(0).toUpperCase() + status.slice(1);
    const statusColor = status === 'available' ? '#28a745' : (status === 'reserved' ? '#ffc107' : '#dc3545');

    // Build Modal HTML
    content.innerHTML = `
        <div class="modal-header">
            <h2>Plot ${id}</h2>
            <span class="status-badge" style="background:${statusColor}">${statusLabel}</span>
        </div>

        <div class="modal-body">
            <div class="detail-grid">
                <div class="detail-item">
                    <label>Plot Size</label>
                    <span>${marla} Marla</span>
                </div>
                <div class="detail-item">
                    <label>Dimensions</label>
                    <span>30 x 60 ft</span>
                </div>
                <div class="detail-item">
                    <label>Location</label>
                    <span>Main Boulevard</span>
                </div>
                <div class="detail-item">
                    <label>Block</label>
                    <span>Sector ${block}</span>
                </div>
            </div>

            <div class="price-section">
                <label>Total Price</label>
                <div class="amount">PKR ${(totalPrice / 100000).toFixed(1)} Lakh</div>
            </div>

            <div class="calculator-section">
                <div class="calc-row">
                    <span>Down Payment (20%)</span>
                    <span>PKR ${downPayment.toLocaleString()}</span>
                </div>

                <div class="duration-selector">
                    <button class="duration-btn active" data-years="1">1 Year</button>
                    <button class="duration-btn" data-years="2">2 Years</button>
                    <button class="duration-btn" data-years="3">3 Years</button>
                </div>

                <div class="calc-row highlight">
                    <span>Monthly Installment</span>
                    <span id="monthlyAmount" style="font-weight:bold; color:var(--text-white);">Calculated...</span>
                </div>
            </div>

            ${status === 'available'
            ? `<a href="https://wa.me/923006752225?text=I'm interested in Plot ${id} (${marla} Marla)" target="_blank" class="btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> Contact on WhatsApp
                   </a>`
            : `<button class="btn-whatsapp" style="background:#555; cursor:not-allowed;">Currently Unavailable</button>`
        }
        </div>
    `;

    overlay.classList.add('active');

    // Attach Calculator Logic
    const monthlyDisplay = document.getElementById('monthlyAmount');
    const buttons = document.querySelectorAll('.duration-btn');

    // Initial Calculation (Default 1 year)
    updateInstallment(1, remainingAmount, monthlyDisplay);

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // UI Toggle
            buttons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Calculation
            const years = parseInt(e.target.dataset.years);
            updateInstallment(years, remainingAmount, monthlyDisplay);
        });
    });
}

function updateInstallment(years, remainingAmount, displayElement) {
    const months = years * 12;
    const monthly = remainingAmount / months;
    displayElement.textContent = `PKR ${Math.floor(monthly).toLocaleString()}`;
}

function setupModalListeners() {
    const overlay = document.getElementById('plotModalOverlay');
    const closeBtn = document.getElementById('closeModal');

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
}
