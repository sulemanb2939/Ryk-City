// Smart Map Logic & Data

// Data Structure - Road Fix Implementation
const mapConfig = [

    // ===== CONTINUOUS MAIN VERTICAL ROAD =====
    {
        type: 'road',
        name: 'Main Boulevard', // Continuous Vertical Road
        direction: 'vertical',
        gridArea: '1 / 2 / 14 / 3' // Spans from Top (Row 1) to Bottom (Row 14 - Extended)
    },

    // ===== TOP TRIANGLE AREA (LEFT) =====
    {
        type: 'block',
        id: 'block-top-left',
        name: 'Block G',
        gridArea: '1 / 1 / 2 / 2',
        plots: Array.from({ length: 10 }, (_, i) => ({ id: `G-${i + 1}`, size: '5 Marla', dim: '25x45', price: 3000000, status: 'available', type: 'residential' }))
    },

    // ===== NEW EXTENSION BLOCK (RIGHT - TOP) =====
    {
        type: 'block',
        id: 'block-ext-h', // New ID for CSS styling
        name: 'Block H Ext',
        gridArea: '1 / 3 / 3 / 4', // Takes up Row 1 and 2
        style: 'display: block; position: relative;', // Allow absolute positioning inside
        plots: [
            // === Z-SERIES (LEFT SIDE - 62' ROAD) ===
            // Start from bottom-left corner going up
            { id: '1-Z', size: '5 Marla', dim: 'Odd', price: 3500000, status: 'sold', type: 'residential' },
            { id: '2-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '3-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '4-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '5-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '6-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '7-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '8-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'sold', type: 'residential' },
            { id: '9-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '10-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '11-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '12-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '13-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '14-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '15-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '16-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '17-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '18-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '19-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '20-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '21-Z', size: '5 Marla', dim: 'Odd', price: 3500000, status: 'available', type: 'residential' },

            // === E-SERIES (RIGHT SIDE - 30' ROAD) ===
            // Start from top going down
            { id: '51-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '50-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'sold', type: 'residential' },
            { id: '49-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '48-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '47-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '46-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '45-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '44-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '43-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '42-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '41-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
            { id: '40-E', size: '5 Marla', dim: 'Odd', price: 3500000, status: 'available', type: 'residential' },

            // === E-SERIES (BOTTOM ROW) ===
            { id: '39-E', size: '10 Marla', dim: '35x70', price: 7000000, status: 'reserved', type: 'residential' },
            { id: '38-E', size: '10 Marla', dim: '35x70', price: 7000000, status: 'available', type: 'residential' },
            { id: '37-E', size: '10 Marla', dim: '35x70', price: 7000000, status: 'available', type: 'residential' },
            { id: '36-E', size: '10 Marla', dim: '35x70', price: 7000000, status: 'available', type: 'residential' },
            { id: '35-E', size: '8 Marla', dim: '30x60', price: 5500000, status: 'available', type: 'residential' },
            { id: '34-E', size: '7.8 Marla', dim: 'Odd', price: 5400000, status: 'available', type: 'residential' }
        ]
    },

    // ===== MOVED BLOCK H (RIGHT - ROW 3) =====
    {
        type: 'block',
        id: 'block-top-right',
        name: 'Block H',
        gridArea: '3 / 3 / 4 / 4', // Shifted down by 2
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
        gridArea: '5 / 3 / 6 / 4' // Shifted down by 2 (3->5, 4->6)
    },

    {
        type: 'block',
        id: 'block-a',
        name: 'Block v',
        gridArea: '4 / 1 / 5 / 2',
        plots: Array.from({ length: 24 }, (_, i) => ({ id: `v-${i + 1}`, size: '1 Kanal', dim: '50x90', price: 16000000, status: i % 3 === 0 ? 'sold' : 'available', type: 'residential' }))
    },

    {
        type: 'block',
        id: 'block-d',
        name: 'Commercial', // Right Side
        gridArea: '6 / 3 / 7 / 4', // Shifted down by 2 (4->6, 5->7)
        plots: Array.from({ length: 20 }, (_, i) => ({ id: `C-${i + 1}`, size: '4 Marla', dim: 'Commercial', price: 12000000, status: 'available', type: 'commercial' }))
    },

    {
        type: 'block',
        id: 'block-b',
        name: 'Block B',
        gridArea: '7 / 3 / 8 / 4',
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
        gridArea: '8 / 3 / 9 / 4' // Shifted +2 (6->8, 7->9)
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
        gridArea: '9 / 3 / 10 / 4', // Shifted +2 (7->9, 8->10)
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
        gridArea: '11 / 3 / 12 / 4' // Shifted +2 (9->11, 10->12)
    },

    {
        type: 'block',
        id: 'block-f',
        name: 'Block F',
        gridArea: '10 / 1 / 11 / 2',
        plots: Array.from({ length: 30 }, (_, i) => ({ id: `E-${i + 1}`, size: '5 Marla', dim: '25x45', price: 3200000, status: 'available', type: 'residential' }))
    },

    {
        type: 'custom-block',
        id: 'block-g-ext',
        name: 'Block A',
        gridArea: '12 / 3 / 13 / 4',
        style: 'height: 1380px; position: relative;', // Increased Height again to accommodate new upper section
        roads: [
            // NEW UPPER SECTION ROADS
            { name: "ROAD 30' WIDE", y: 20, width: 485 },
            { name: "ROAD 40' WIDE", y: 290, width: 485 },

            // PREVIOUS SECTION ROADS (Shifted +300px)
            { name: "ROAD 40' WIDE", y: 320 + 270, width: 485 }, // Was y=320, now 590

            // EXISTING ROADS (Shifted +300px again)
            { name: "ROAD 40' WIDE", y: 320 + 300 + 270, width: 485 }, // Was y=320 -> 590 -> 890
            { name: "ROAD 50' WIDE", y: 590 + 300 + 270, width: 485 }, // Was y=590 -> 890 -> 1160
            { name: "ROAD 40' WIDE", y: 865 + 300 + 270, width: 210, x: 20 } // Was y=865 -> 1165 -> 1435
        ],
        plots: [
            // ========================
            // NEW UPPER SECTION (Plots 54-A to 43-A)
            // ========================

            // --- LEFT COLUMN (Wider Plots) ---
            { id: '54-A', size: '20.69 Marla', x: 20, y: 80, width: 100, height: 80, status: 'available' },
            { id: '53-A', size: '14.01 Marla', x: 20, y: 165, width: 100, height: 60, status: 'available' },

            // Split Plots 52-A(A) & 52-A(B)
            { id: '52-A(A)', size: '6.25 Marla', x: 20, y: 230, width: 48, height: 50, status: 'available' },
            { id: '52-A(B)', size: '6.24 Marla', x: 72, y: 230, width: 48, height: 50, status: 'available' },

            // --- TOP ROW (55-A to 66-A) ---
            // Standard width ~30px based on count (12 plots in remaining space ~365px) -> ~30px
            // Start x = 125
            { id: '55-A', size: '6 Marla', x: 125, y: 80, width: 50, height: 100, status: 'available' },
            { id: '56-A', size: '6 Marla', x: 155, y: 80, width: 50, height: 100, status: 'available' },
            { id: '57-A', size: '6 Marla', x: 185, y: 80, width: 50, height: 100, status: 'available' },
            { id: '58-A', size: '6 Marla', x: 215, y: 80, width: 50, height: 100, status: 'available' },
            { id: '59-A', size: '6 Marla', x: 245, y: 80, width: 50, height: 100, status: 'available' },
            { id: '60-A', size: '6 Marla', x: 275, y: 80, width: 50, height: 100, status: 'available' },
            { id: '61-A', size: '6 Marla', x: 305, y: 80, width: 50, height: 100, status: 'available' },
            { id: '62-A', size: '6 Marla', x: 335, y: 80, width: 50, height: 100, status: 'available' },
            { id: '63-A', size: '6 Marla', x: 365, y: 80, width: 50, height: 100, status: 'available' },
            { id: '64-A', size: '6 Marla', x: 395, y: 80, width: 50, height: 100, status: 'available' },

            // Right Side Wider/Different
            { id: '65-A', size: '6 Marla', x: 425, y: 80, width: 50, height: 100, status: 'available' },
            { id: '66-A', size: '10.08 Marla', x: 455, y: 80, width: 50, height: 100, status: 'available' },


            // --- BOTTOM ROW (51-A to 43-A) ---
            // Same alignment as top (except fewer plots?)
            // 51-A to 44-A (8 plots) + 43-A
            // 51-A starts at 125
            { id: '51-A', size: '10.03 Marla', x: 125, y: 185, width: 50, height: 95, status: 'available' },
            { id: '50-A', size: '10.03 Marla', x: 162, y: 185, width: 50, height: 95, status: 'available' },
            { id: '49-A', size: '10.03 Marla', x: 199, y: 185, width: 50, height: 95, status: 'available' },
            { id: '48-A', size: '10.03 Marla', x: 236, y: 185, width: 50, height: 95, status: 'available' },
            { id: '47-A', size: '10.03 Marla', x: 273, y: 185, width: 50, height: 95, status: 'available' },
            { id: '46-A', size: '10.03 Marla', x: 310, y: 185, width: 50, height: 95, status: 'available' },
            { id: '45-A', size: '10.03 Marla', x: 347, y: 185, width: 50, height: 95, status: 'available' },
            { id: '44-A', size: '10.03 Marla', x: 384, y: 185, width: 50, height: 95, status: 'available' },

            { id: '43-A', size: '10.80 Marla', x: 421, y: 185, width: 79, height: 95, status: 'available' },


            // ========================
            // PREVIOUS SECTION (Shifted +270px)
            // ========================
            // Left Column (Wider ~70px)
            { id: '34-A', size: '12.45 Marla', x: 20, y: 80 + 270, width: 70, height: 63, status: 'available' },
            { id: '33-A', size: '10.01 Marla', x: 20, y: 145 + 270, width: 70, height: 63, status: 'available' },
            { id: '32-A', size: '12.50 Marla', x: 20, y: 210 + 270, width: 70, height: 63, status: 'available' },

            // Top Row
            { id: '35-A', size: '10.03 Marla', x: 95, y: 80 + 270, width: 50, status: 'available' },
            { id: '36-A', size: '10.03 Marla', x: 150, y: 80 + 270, width: 50, status: 'available' },
            { id: '37-A', size: '10.03 Marla', x: 205, y: 80 + 270, width: 50, status: 'available' },
            { id: '38-A', size: '10.03 Marla', x: 260, y: 80 + 270, width: 50, status: 'available' },
            { id: '39-A', size: '10.03 Marla', x: 315, y: 80 + 270, width: 50, status: 'available' },
            { id: '40-A', size: '10.03 Marla', x: 370, y: 80 + 270, width: 50, status: 'available' },
            { id: '41-A', size: '10.03 Marla', x: 425, y: 80 + 270, width: 50, status: 'available' },
            { id: '42-A', size: '6 Marla', x: 480, y: 80 + 270, width: 40, status: 'available' },

            // Bottom Row
            { id: '31-A', size: '10.03 Marla', x: 95, y: 180 + 270, width: 50, status: 'available' },
            { id: '30-A', size: '10.03 Marla', x: 150, y: 180 + 270, width: 50, status: 'available' },
            { id: '29-A', size: '10.03 Marla', x: 205, y: 180 + 270, width: 50, status: 'available' },
            { id: '28-A', size: '10.03 Marla', x: 260, y: 180 + 270, width: 50, status: 'available' },
            { id: '27-A', size: '10.03 Marla', x: 315, y: 180 + 270, width: 50, status: 'available' },
            { id: '26-A', size: '10.03 Marla', x: 370, y: 180 + 270, width: 50, status: 'available' },
            { id: '25-A', size: '10.03 Marla', x: 425, y: 180 + 270, width: 50, status: 'available' },
            { id: '24-A', size: '6 Marla', x: 480, y: 180 + 270, width: 40, status: 'available' },

            // ========================
            // ORIGINAL SECTION (Shifted +270 + 300 = +570px)
            // ========================
            // --- TOP ROW (Above Park) ---
            { id: '19-A', size: '30 Marla', x: 20, y: 380 + 270, status: 'available' },
            { id: '20-A', size: '8.74 Marla', x: 85, y: 380 + 270, status: 'available' },

            // CENTER PARK
            {
                id: 'PARK',
                size: '53.00-M',
                dim: "98'-2\" x 147'",
                x: 155,
                y: 380 + 270,
                width: 160,
                height: 200,
                status: 'park',
                type: 'park',
                style: 'background: radial-gradient(circle, #eaffea 50%, #c8e6c9 100%); border: 2px dashed #4caf50; display: flex; align-items: center; justify-content: center; text-align: center; color: #1b5e20; font-weight: 800; z-index: 1;'
            },

            { id: '21-A', size: '12.38 Marla', x: 315, y: 380 + 270, status: 'available' },
            { id: '22-A', size: '10.03 Marla', x: 380, y: 380 + 270, status: 'available' },
            { id: '23-A', size: '5.09 Marla', x: 445, y: 380 + 270, status: 'available' },

            // --- BOTTOM ROW (Below Park) ---
            { id: '18-A', size: '18.62 Marla', x: 20, y: 485 + 270, status: 'available' },
            { id: '17-A', size: '12 Marla', x: 85, y: 485 + 270, status: 'available' },

            { id: '16-A', size: '12 Marla', x: 315, y: 485 + 270, status: 'available' },
            { id: '15-A', size: '12.66 Marla', x: 380, y: 485 + 270, status: 'available' },
            { id: '14-A', size: '12 Marla', x: 445, y: 485 + 270, status: 'available' },

            // ========================
            // EXISTING BLOCK A (Shifted +570 + 300?? No, was +300, now +270 more)
            // ========================
            // TOP ROW (Road 50') (Now Middle)
            { id: '07-A', size: '15.62 Marla', x: 20, y: 650 + 270, status: 'available' },
            { id: '08-A', size: '6.25 Marla', x: 85, y: 650 + 270, status: 'available' },
            { id: '09-A', size: '6.25 Marla', x: 150, y: 650 + 270, status: 'available' },
            // Service Gap
            { id: '10-A', size: '14.04 Marla', x: 250, y: 650 + 270, status: 'available' },
            { id: '11-A', size: '14.04 Marla', x: 315, y: 650 + 270, status: 'available' },
            { id: '12-A', size: '14.04 Marla', x: 380, y: 650 + 270, status: 'available' },
            { id: '13-A', size: '14.04 Marla', x: 445, y: 650 + 270, status: 'available' },

            // MIDDLE ROW (Inside Corner)
            { id: '06-A', size: '15.02 Marla', x: 20, y: 755 + 270, status: 'available' },
            { id: '05-A', size: '15.02 Marla', x: 85, y: 755 + 270, status: 'available' },
            { id: '04-A', size: '15.02 Marla', x: 150, y: 755 + 270, status: 'available' },

            // BOTTOM ROW (Road 40')
            { id: '01-A', size: '15.51 Marla', x: 20, y: 915 + 270, status: 'available' },
            { id: '02-A', size: '15.09 Marla', x: 85, y: 915 + 270, status: 'available' },
            { id: '03-A', size: '15.02 Marla', x: 150, y: 915 + 270, status: 'available' }
        ]
    },

    // Vertical Main Road continues implicitly to row 14 as defined at top.

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
        } else if (section.type === 'custom-block') {
            el.className = 'block-sector custom-block';
            el.id = section.id;
            if (section.style) el.style.cssText = section.style;

            // Add block label
            const label = document.createElement('div');
            label.className = 'block-label';
            label.textContent = section.name;
            el.appendChild(label);

            // Add Horizontal Roads via Config
            if (section.roads) {
                section.roads.forEach(road => {
                    const roadEl = document.createElement('div');
                    roadEl.style.position = 'absolute';
                    roadEl.style.left = road.x ? `${road.x}px` : '20px';
                    roadEl.style.top = `${road.y}px`;
                    roadEl.style.width = road.width ? `${road.width}px` : '210px';
                    roadEl.style.height = '50px';
                    roadEl.style.backgroundColor = '#222';
                    roadEl.style.borderTop = '2px dashed rgba(255, 255, 255, 0.2)';
                    roadEl.style.borderBottom = '2px dashed rgba(255, 255, 255, 0.2)';
                    roadEl.style.display = 'flex';
                    roadEl.style.alignItems = 'center';
                    roadEl.style.justifyContent = 'center';
                    roadEl.style.color = '#ccc';
                    roadEl.style.fontSize = '0.75rem';
                    roadEl.style.fontWeight = '600';
                    roadEl.style.letterSpacing = '1px';
                    roadEl.style.zIndex = '0';
                    roadEl.textContent = road.name;
                    el.appendChild(roadEl);
                });
            }

            section.plots.forEach(plot => {
                const plotEl = document.createElement('div');
                plotEl.className = `plot ${plot.status} ${plot.type || 'residential'}`;
                plotEl.dataset.id = plot.id;
                plotEl.style.position = 'absolute';
                plotEl.style.left = `${plot.x}px`;
                plotEl.style.top = `${plot.y}px`;

                // Allow custom dimensions
                plotEl.style.width = plot.width ? `${plot.width}px` : '60px';
                plotEl.style.height = plot.height ? `${plot.height}px` : '95px';

                // Allow custom inline styles
                if (plot.style) plotEl.style.cssText += plot.style;

                if (plot.rotate) plotEl.style.transform = `rotate(${plot.rotate}deg)`;

                // Add default props for modal
                const plotData = {
                    ...plot,
                    block: section.name,
                    dim: plot.dim || '25x45',
                    price: plot.price || 3500000,
                    type: plot.type || 'residential'
                };
                allPlots.push(plotData);

                // Custom HTML for special types (like Park)
                if (plot.type === 'park') {
                    plotEl.innerHTML = `
                        <span style="font-size:1.2rem; display:block; margin-bottom:5px;">PARK</span>
                        <span style="font-size:0.8rem; font-weight:normal;">${plot.dim}</span>
                        <span style="font-size:0.9rem; display:block; margin-top:5px;">${plot.size}</span>
                    `;
                } else {
                    plotEl.innerHTML = `<span class="plot-number">${plot.id}</span>`;
                }

                plotEl.addEventListener('click', () => openModal(plot.id));
                el.appendChild(plotEl);
            });
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
