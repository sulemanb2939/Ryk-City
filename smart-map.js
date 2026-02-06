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
    // {
    //     type: 'block',
    //     id: 'block-ext-h', // New ID for CSS styling
    //     name: 'Block H Ext',
    //     gridArea: '1 / 3 / 3 / 4', // Takes up Row 1 and 2
    //     style: 'display: block; position: relative;', // Allow absolute positioning inside
    //     plots: [
    //         // === Z-SERIES (LEFT SIDE - 62' ROAD) ===
    //         // Start from bottom-left corner going up
    //         { id: '1-Z', size: '5 Marla', dim: 'Odd', price: 3500000, status: 'sold', type: 'residential' },
    //         { id: '2-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '3-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '4-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '5-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '6-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '7-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '8-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'sold', type: 'residential' },
    //         { id: '9-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '10-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '11-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '12-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '13-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '14-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '15-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '16-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '17-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '18-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '19-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '20-Z', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '21-Z', size: '5 Marla', dim: 'Odd', price: 3500000, status: 'available', type: 'residential' },

    //         // === E-SERIES (RIGHT SIDE - 30' ROAD) ===
    //         // Start from top going down
    //         { id: '51-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '50-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'sold', type: 'residential' },
    //         { id: '49-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '48-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '47-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '46-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '45-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '44-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '43-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '42-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '41-E', size: '5 Marla', dim: '25x45', price: 3500000, status: 'available', type: 'residential' },
    //         { id: '40-E', size: '5 Marla', dim: 'Odd', price: 3500000, status: 'available', type: 'residential' },

    //         // === E-SERIES (BOTTOM ROW) ===
    //         { id: '39-E', size: '10 Marla', dim: '35x70', price: 7000000, status: 'reserved', type: 'residential' },
    //         { id: '38-E', size: '10 Marla', dim: '35x70', price: 7000000, status: 'available', type: 'residential' },
    //         { id: '37-E', size: '10 Marla', dim: '35x70', price: 7000000, status: 'available', type: 'residential' },
    //         { id: '36-E', size: '10 Marla', dim: '35x70', price: 7000000, status: 'available', type: 'residential' },
    //         { id: '35-E', size: '8 Marla', dim: '30x60', price: 5500000, status: 'available', type: 'residential' },
    //         { id: '34-E', size: '7.8 Marla', dim: 'Odd', price: 5400000, status: 'available', type: 'residential' }
    //     ]
    // },

    // ===== MOVED BLOCK H (RIGHT - ROW 3) =====
    // {
    //     type: 'block',
    //     id: 'block-top-right',
    //     name: 'Block H',
    //     gridArea: '3 / 3 / 4 / 4', // Shifted down by 2
    //     plots: Array.from({ length: 10 }, (_, i) => ({ id: `H-${i + 1}`, size: '5 Marla', dim: '25x45', price: 3000000, status: 'available', type: 'residential' }))
    // },

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
        gridArea: '14 / 3 / 15 / 4' // Shifted to row 14
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
        id: 'block-c-ext',
        name: 'Block C',
        gridArea: '11 / 3 / 12 / 4',
        style: 'height: 1650px; width: 1600px; position: relative;',
        roads: [
            // === NEW TOP ROADS ===
            // Top Road 40' Wide
            { name: "ROAD 40' WIDE", x: 80, y: 20, width: 1470, height: 40, isVertical: false },

            // Bottom Road 40' Wide (Separating from old)
            { name: "ROAD 40' WIDE", x: 80, y: 450, width: 1470, height: 40, isVertical: false },

            // Vertical: Left of Park (Between Left Plots and Park)
            { name: "ROAD 30' WIDE", x: 250, y: 60, width: 30, height: 390, isVertical: true },

            // Vertical: Right of Park (Between Park and Right Col 1)
            { name: "ROAD 30' WIDE", x: 780, y: 60, width: 30, height: 390, isVertical: true },

            // Vertical: Between Combined Col (298-309) and Col 2 (310-318)
            { name: "ROAD 30' WIDE", x: 1040, y: 60, width: 30, height: 390, isVertical: true },
            { name: "ROAD1 30' WIDE ", x: 80, y: 775, width: 1470, height: 30, isVertical: false },

            { name: "ROAD2 30' WIDE", x: 1360, y: 550, width: 60, height: 215, isVertical: true },

            { name: "ROAD3 30' WIDE", y: 1040, width: 1010, x: 80 },

            { name: "ROAD4 30' WIDE", x: 1055, y: 820, width: 40, height: 467, isVertical: true },

            { name: "ROAD5 30' WIDE", x: 1245, y: 836, width: 40, height: 156, isVertical: true },

            { name: "ROAD6 30' WIDE", x: 1440, y: 783, width: 40, height: 209, isVertical: true }

        ],
        plots: [
            // LEFT PORTRAIT STACK (4-E-1 to 1-E)
            { id: '4-E-1', size: '10 Marla', x: 80, y: 65, width: 160, height: 70, price: 5500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '4-E-2', size: '10 Marla', x: 80, y: 140, width: 160, height: 70, price: 5500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '3-E', size: '10 Marla', x: 80, y: 215, width: 160, height: 70, price: 5500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '2-E', size: '10 Marla', x: 80, y: 290, width: 160, height: 70, price: 5500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '1-E', size: '10 Marla', x: 80, y: 365, width: 160, height: 70, price: 5500000, status: 'available', type: 'residential', block: 'Block C' },
            // CENTER PARK
            {
                id: 'PARK-C-MIXED',
                size: '177.33-M',
                dim: "235'-6\" x 205'",
                x: 300,
                y: 80,
                width: 460,
                height: 350,
                status: 'park',
                type: 'park',
                style: 'background: radial-gradient(circle, #eaffea 50%, #c8e6c9 100%); border: 2px dashed #4caf50; display: flex; align-items: center; justify-content: center; text-align: center; color: #1b5e20; font-weight: 800; z-index: 1; white-space: pre-wrap;'
            },
            // COL 1 (301-C to 298-C)
            { id: '301-C', size: '8 Marla', x: 820, y: 65, width: 147, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '300-C', size: '8 Marla', x: 820, y: 160, width: 147, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '299-C', size: '8 Marla', x: 820, y: 255, width: 147, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '298-C', size: '8 Marla', x: 820, y: 350, width: 147, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            // NEW COL (302-C to 309-C)
            { id: '302-C', size: '5 Marla', x: 972, y: 65, width: 55, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '303-C', size: '5 Marla', x: 972, y: 113, width: 55, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '304-C', size: '5 Marla', x: 972, y: 161, width: 55, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '305-C', size: '5 Marla', x: 972, y: 209, width: 55, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '306-C', size: '5 Marla', x: 972, y: 257, width: 55, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '307-C', size: '5 Marla', x: 972, y: 305, width: 55, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '308-C', size: '5 Marla', x: 972, y: 353, width: 55, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '309-C', size: '5 Marla', x: 972, y: 401, width: 55, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            // COL 2 (310-318) - adjusted position
            { id: '310-C', size: '5 Marla', x: 1080, y: 65, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '311-C', size: '5 Marla', x: 1080, y: 107, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '312-C', size: '5 Marla', x: 1080, y: 149, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '313-C', size: '5 Marla', x: 1080, y: 191, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '314-C', size: '5 Marla', x: 1080, y: 233, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '315-C', size: '5 Marla', x: 1080, y: 275, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '316-C', size: '5 Marla', x: 1080, y: 317, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '317-C', size: '5 Marla', x: 1080, y: 359, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '318-C', size: '5 Marla', x: 1080, y: 401, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            // COL 3 (319-327) - adjusted position
            { id: '319-C', size: '5 Marla', x: 1290, y: 65, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '320-C', size: '5 Marla', x: 1290, y: 107, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '321-C', size: '5 Marla', x: 1290, y: 149, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '322-C', size: '5 Marla', x: 1290, y: 191, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '323-C', size: '5 Marla', x: 1290, y: 233, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '324-C', size: '5 Marla', x: 1290, y: 275, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '325-C', size: '5 Marla', x: 1290, y: 317, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '326-C', size: '5 Marla', x: 1290, y: 359, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '327-C', size: '5 Marla', x: 1290, y: 401, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '57-S', size: '5 Marla', x: 85, y: 530, width: 100, height: 32, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '58-S', size: '5 Marla', x: 85, y: 565, width: 100, height: 32, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '59-S', size: '5 Marla', x: 85, y: 600, width: 100, height: 32, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '60-S', size: '5 Marla', x: 85, y: 635, width: 100, height: 32, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '61-S', size: '5 Marla', x: 85, y: 670, width: 100, height: 32, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '62-S', size: '5 Marla', x: 85, y: 705, width: 100, height: 32, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '63-S', size: '5 Marla', x: 85, y: 740, width: 100, height: 32, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '282-C', size: '8 Marla', x: 200, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '283-C', size: '8 Marla', x: 272, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '284-C', size: '8 Marla', x: 344, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '285-C', size: '8 Marla', x: 416, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '286-C', size: '8 Marla', x: 488, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '287-C', size: '8 Marla', x: 559, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '288-C', size: '8 Marla', x: 631, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '289-C', size: '8 Marla', x: 703, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '290-C', size: '8 Marla', x: 775, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '291-C', size: '8 Marla', x: 847, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '292-C', size: '8 Marla', x: 919, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '293-C', size: '8 Marla', x: 991, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '294-C', size: '8 Marla', x: 1062, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '295-C', size: '8 Marla', x: 1134, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '296-C', size: '8 Marla', x: 1206, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '297-C', size: '8 Marla', x: 1278, y: 530, width: 69, height: 120, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '281-C', size: '8 Marla', x: 200, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '280-C', size: '8 Marla', x: 264, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '279-C', size: '8 Marla', x: 328, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '278-C', size: '8 Marla', x: 392, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '277-C', size: '8 Marla', x: 456, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '276-C', size: '8 Marla', x: 519, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '275-C', size: '8 Marla', x: 583, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '274-C', size: '8 Marla', x: 647, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '273-C', size: '8 Marla', x: 711, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '272-C', size: '8 Marla', x: 775, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '271-C', size: '8 Marla', x: 839, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '270-C', size: '8 Marla', x: 903, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '269-C', size: '8 Marla', x: 967, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '268-C', size: '8 Marla', x: 1031, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '267-C', size: '8 Marla', x: 1094, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '266-C', size: '8 Marla', x: 1158, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '265-C', size: '8 Marla', x: 1222, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '264-C', size: '8 Marla', x: 1286, y: 655, width: 61, height: 115, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '298-C', size: '8 Marla', x: 1440, y: 535, width: 100, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '299-C', size: '8 Marla', x: 1440, y: 575, width: 100, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '300-C', size: '8 Marla', x: 1440, y: 615, width: 100, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '301-C', size: '8 Marla', x: 1440, y: 655, width: 100, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '302-C', size: '8 Marla', x: 1440, y: 695, width: 100, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '303-C', size: '8 Marla', x: 1440, y: 735, width: 100, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '56-S', size: '5 Marla', x: 80, y: 820, width: 60, height: 30, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '55-S', size: '5 Marla', x: 80, y: 854, width: 60, height: 30, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '54-S', size: '5 Marla', x: 80, y: 888, width: 60, height: 30, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '53-S', size: '5 Marla', x: 80, y: 922, width: 60, height: 30, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '52-S', size: '5 Marla', x: 80, y: 956, width: 60, height: 30, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '51-S', size: '5 Marla', x: 80, y: 990, width: 60, height: 30, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '236-C', size: '5 Marla', x: 150, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '237-C', size: '5 Marla', x: 210, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '238-C', size: '5 Marla', x: 270, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '239-C', size: '5 Marla', x: 330, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '240-C', size: '5 Marla', x: 390, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '241-C', size: '5 Marla', x: 450, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '242-C', size: '5 Marla', x: 510, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '243-C', size: '5 Marla', x: 570, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '244-C', size: '5 Marla', x: 630, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '245-C', size: '5 Marla', x: 690, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '246-C', size: '5 Marla', x: 750, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '247-C', size: '5 Marla', x: 810, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '248-C', size: '5 Marla', x: 870, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '249-C', size: '5 Marla', x: 930, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '250-C', size: '5 Marla', x: 990, y: 820, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '235-C', size: '5 Marla', x: 150, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '234-C', size: '5 Marla', x: 210, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '233-C', size: '5 Marla', x: 270, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '232-C', size: '5 Marla', x: 330, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '231-C', size: '5 Marla', x: 390, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '230-C', size: '5 Marla', x: 450, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '229-C', size: '5 Marla', x: 510, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '228-C', size: '5 Marla', x: 570, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '227-C', size: '5 Marla', x: 630, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '226-C', size: '5 Marla', x: 690, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '225-C', size: '5 Marla', x: 750, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '224-C', size: '5 Marla', x: 810, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '223-C', size: '5 Marla', x: 870, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '222-C', size: '5 Marla', x: 930, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '221-C', size: '5 Marla', x: 990, y: 925, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '202-C', size: '5 Marla', x: 150, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '203-C', size: '5 Marla', x: 210, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '204-C', size: '5 Marla', x: 270, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '205-C', size: '5 Marla', x: 330, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '206-C', size: '5 Marla', x: 390, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '207-C', size: '5 Marla', x: 450, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '208-C', size: '5 Marla', x: 510, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '209-C', size: '5 Marla', x: 570, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '210-C', size: '5 Marla', x: 630, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '211-C', size: '5 Marla', x: 690, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '212-C', size: '5 Marla', x: 750, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '213-C', size: '5 Marla', x: 810, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '214-C', size: '5 Marla', x: 870, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '215-C', size: '5 Marla', x: 930, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '216-C', size: '5 Marla', x: 990, y: 1100, width: 55, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '45-S', size: '5 Marla', x: 150, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '44-S', size: '5 Marla', x: 200, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '43-S', size: '5 Marla', x: 250, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '42-S', size: '5 Marla', x: 300, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '41-S', size: '5 Marla', x: 350, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '40-S', size: '5 Marla', x: 400, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '39-S', size: '5 Marla', x: 450, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '38-S', size: '5 Marla', x: 500, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '37-S', size: '5 Marla', x: 550, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '36-S', size: '5 Marla', x: 600, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '35-S', size: '5 Marla', x: 650, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '34-S', size: '5 Marla', x: 700, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '33-S', size: '5 Marla', x: 750, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '32-S', size: '5 Marla', x: 800, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '31-S', size: '5 Marla', x: 850, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '30-S', size: '5 Marla', x: 900, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '29-S', size: '5 Marla', x: 950, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '28-S', size: '5 Marla', x: 1000, y: 1200, width: 44, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '50-S', size: '5 Marla', x: 80, y: 1100, width: 60, height: 35, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '49-S', size: '5 Marla', x: 80, y: 1138, width: 60, height: 35, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '48-S', size: '5 Marla', x: 80, y: 1176, width: 60, height: 35, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '47-S', size: '5 Marla', x: 80, y: 1214, width: 60, height: 35, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '46-S', size: '5 Marla', x: 80, y: 1252, width: 60, height: 35, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '220-C', size: '5 Marla', x: 1105, y: 995, width: 80, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '219-C', size: '5 Marla', x: 1105, y: 1049, width: 80, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '218-C', size: '5 Marla', x: 1105, y: 1103, width: 80, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '217-C', size: '5 Marla', x: 1105, y: 1157, width: 80, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '27-S', size: '5 Marla', x: 1105, y: 1210, width: 38, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '26-S', size: '5 Marla', x: 1148, y: 1210, width: 38, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '250-C', size: '5 Marla', x: 1105, y: 836, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '249-C', size: '5 Marla', x: 1105, y: 889, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '248-C', size: '5 Marla', x: 1105, y: 942, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '254-C', size: '5 Marla', x: 1295, y: 942, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '255-C', size: '5 Marla', x: 1295, y: 889, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '256-C', size: '5 Marla', x: 1295, y: 836, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '253-C', size: '5 Marla', x: 1175, y: 942, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '252-C', size: '5 Marla', x: 1175, y: 889, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '251-C', size: '5 Marla', x: 1175, y: 836, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '257-C', size: '5 Marla', x: 1370, y: 836, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '258-C', size: '5 Marla', x: 1370, y: 889, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '259-C', size: '5 Marla', x: 1370, y: 942, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '262-C', size: '5 Marla', x: 1485, y: 836, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '261-C', size: '5 Marla', x: 1485, y: 889, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '260-C', size: '5 Marla', x: 1485, y: 942, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '263-C', size: '5 Marla', x: 1485, y: 783, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' }

        ]
    },

    {
        type: 'road',
        name: "ROAD 73' WIDE",
        direction: 'horizontal',
        gridArea: '12 / 3 / 13 / 4'
    },

    {
        type: 'custom-block',
        id: 'block-g-ext',
        name: 'Block A',
        gridArea: '13 / 3 / 14 / 4',
        style: 'height: 1900px; width: 1100px; position: relative;', // Increased Height (+250px)
        roads: [
            // ========================
            // NEW EXTENSION 3 (Plots 83-96)
            // ========================
            // { name: "ROAD 73' WIDE", y: 50, width: 750, x: 100 }, // Top Road Unchanged
            { name: "ROAD 30' WIDE", y: 325, width: 750, x: 100 }, // Shifted +60

            // ========================
            // PREVIOUS EXTENSION (Plots 67-82)
            // ========================
            // Shifted +60
            { name: "ROAD 30' WIDE", y: 620, width: 750, x: 100 },

            // ========================
            // PREVIOUS UPPER SECTION (Plots 54-66)
            // ========================
            // Shifted +60
            { name: "ROAD 40' WIDE", y: 900, width: 500, x: 100 },

            // ========================
            // PREVIOUS SECTION ROADS (Plots 24-42)
            // ========================
            // Shifted +60
            { name: "ROAD 40' WIDE", y: 1180, width: 500, x: 100 },

            // ========================
            // EXISTING ROADS (Block A Original)
            // ========================
            // Shifted +60
            { name: "ROAD 50' WIDE", y: 1470, width: 485, x: 100 },

            // Shifted +60
            // { name: "ROAD 50' WIDE", y: 1737, width: 485, x: 100 },

            // Shifted +60
            { name: "ROAD 40' WIDE", y: 1737, width: 200, x: 100 }
        ],
        plots: [
            // ========================
            // NEW LANDSCAPE ROW (06-S to 23-S)
            // ========================
            // 15 Plots on Left (06-20), 3 Plots on Right (21-23)
            { id: '06-S', size: '5 Marla', x: 175, y: 130, width: 33, height: 70, status: 'available' },
            { id: '07-S', size: '5 Marla', x: 212, y: 130, width: 33, height: 70, status: 'available' },
            { id: '08-S', size: '5 Marla', x: 249, y: 130, width: 33, height: 70, status: 'available' },
            { id: '09-S', size: '5 Marla', x: 286, y: 130, width: 33, height: 70, status: 'available' },
            { id: '10-S', size: '5 Marla', x: 323, y: 130, width: 33, height: 70, status: 'available' },
            { id: '11-S', size: '5 Marla', x: 360, y: 130, width: 33, height: 70, status: 'available' },
            { id: '12-S', size: '5 Marla', x: 397, y: 130, width: 33, height: 70, status: 'available' },
            { id: '13-S', size: '5 Marla', x: 434, y: 130, width: 33, height: 70, status: 'available' },
            { id: '14-S', size: '5 Marla', x: 471, y: 130, width: 33, height: 70, status: 'available' },
            { id: '15-S', size: '5 Marla', x: 508, y: 130, width: 33, height: 70, status: 'available' },
            { id: '16-S', size: '5 Marla', x: 545, y: 130, width: 33, height: 70, status: 'available' },
            { id: '17-S', size: '5 Marla', x: 582, y: 130, width: 33, height: 70, status: 'available' },
            { id: '18-S', size: '5 Marla', x: 619, y: 130, width: 33, height: 70, status: 'available' },
            { id: '19-S', size: '5 Marla', x: 656, y: 130, width: 33, height: 70, status: 'available' },
            { id: '20-S', size: '5 Marla', x: 693, y: 130, width: 33, height: 70, status: 'available' },

            { id: '21-S', size: '5 Marla', x: 730, y: 130, width: 33, height: 70, status: 'available' },
            { id: '22-S', size: '5 Marla', x: 767, y: 130, width: 33, height: 70, status: 'available' },
            { id: '23-S', size: '5 Marla', x: 804, y: 130, width: 33, height: 70, status: 'available' },

            // SIDE ROADS (Unchanged)
            {
                id: 'ROAD-R', type: 'road-label', size: '', status: 'road',
                x: 840, y: -41, width: 40, height: 930,
                style: 'background: #222; border: 2px dashed rgba(255,255,255,0.2); color: #ccc; writing-mode: vertical-rl; text-orientation: mixed; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;',
                dim: "ROAD 30' WIDE"
            },

            // ========================
            // RIGHT SIDE EXTENSION (shifted +60)
            // ========================
            { id: '97-A', size: '5 Marla', x: 890, y: 151, width: 70, height: 50, status: 'available' },
            { id: '98-A', size: '5 Marla', x: 890, y: 204, width: 70, height: 50, status: 'available' },
            { id: '99-A', size: '5 Marla', x: 890, y: 257, width: 70, height: 50, status: 'available' },
            { id: '100-A', size: '5 Marla', x: 890, y: 310, width: 70, height: 50, status: 'available' },
            { id: '101-A', size: '5 Marla', x: 890, y: 363, width: 70, height: 50, status: 'available' },
            { id: '102-A', size: '5 Marla', x: 890, y: 416, width: 70, height: 50, status: 'available' },
            { id: '103-A', size: '5 Marla', x: 890, y: 469, width: 70, height: 50, status: 'available' },
            { id: '104-A', size: '5 Marla', x: 890, y: 522, width: 70, height: 50, status: 'available' },
            { id: '105-A', size: '5 Marla', x: 890, y: 575, width: 70, height: 50, status: 'available' },
            { id: '106-A', size: '5 Marla', x: 890, y: 628, width: 70, height: 50, status: 'available' },
            { id: '107-A', size: '5 Marla', x: 890, y: 681, width: 70, height: 50, status: 'available' },
            { id: '108-A', size: '5 Marla', x: 890, y: 734, width: 70, height: 50, status: 'available' },
            { id: '109-A', size: '5 Marla', x: 890, y: 787, width: 70, height: 50, status: 'available' },
            { id: '110-A', size: '5 Marla', x: 890, y: 840, width: 70, height: 50, status: 'available' },

            // PLOTS 83-A to 96-A (Shifted +60)
            { id: '83-A', size: '5 Marla', x: 175, y: 210, width: 40, height: 100, status: 'available' },
            { id: '84-A', size: '5 Marla', x: 220, y: 210, width: 40, height: 100, status: 'available' },
            { id: '85-A', size: '5 Marla', x: 265, y: 210, width: 40, height: 100, status: 'available' },
            { id: '86-A', size: '5 Marla', x: 310, y: 210, width: 40, height: 100, status: 'available' },
            { id: '87-A', size: '5 Marla', x: 355, y: 210, width: 40, height: 100, status: 'available' },
            { id: '88-A', size: '5 Marla', x: 400, y: 210, width: 40, height: 100, status: 'available' },
            { id: '89-A', size: '5 Marla', x: 445, y: 210, width: 40, height: 100, status: 'available' },
            { id: '90-A', size: '5 Marla', x: 490, y: 210, width: 40, height: 100, status: 'available' },
            { id: '91-A', size: '5 Marla', x: 535, y: 210, width: 40, height: 100, status: 'available' },
            { id: '92-A', size: '5 Marla', x: 580, y: 210, width: 40, height: 100, status: 'available' },
            { id: '93-A', size: '5 Marla', x: 625, y: 210, width: 40, height: 100, status: 'available' },
            { id: '94-A', size: '5 Marla', x: 670, y: 210, width: 40, height: 100, status: 'available' },
            { id: '95-A', size: '5 Marla', x: 715, y: 210, width: 40, height: 100, status: 'available' },
            { id: '96-A', size: '5 Marla', x: 760, y: 210, width: 75, height: 100, status: 'available' },


            // ========================
            // PREVIOUS EXTENSION (Plots 67-A to 82-A & Park)
            // ========================
            // Shifted +60

            // --- LEFT SIDE (Top Row) ---
            { id: '75-A', size: 'Wide', x: 100, y: 390, width: 90, height: 100, status: 'available' },
            { id: '76-A', size: '6 Marla', x: 195, y: 390, width: 50, height: 100, status: 'available' },
            { id: '77-A', size: '6 Marla', x: 250, y: 390, width: 50, height: 100, status: 'available' },
            { id: '78-A', size: '6 Marla', x: 305, y: 390, width: 50, height: 100, status: 'available' },

            // --- LEFT SIDE (Bottom Row) ---
            { id: '74-A', size: 'Wide', x: 100, y: 495, width: 90, height: 95, status: 'available' },
            { id: '73-A', size: '6 Marla', x: 195, y: 495, width: 50, height: 95, status: 'available' },
            { id: '72-A', size: '6 Marla', x: 250, y: 495, width: 50, height: 95, status: 'available' },
            { id: '71-A', size: '6 Marla', x: 305, y: 495, width: 50, height: 95, status: 'available' },

            // --- PARK (Center) ---
            {
                id: 'PARK-EXT',
                size: '84.05-M',
                dim: "195'-7\"x117'",
                x: 360,
                y: 390,
                width: 205,
                height: 200,
                status: 'park',
                type: 'park',
                style: 'background: radial-gradient(circle, #eaffea 50%, #c8e6c9 100%); border: 2px dashed #4caf50; display: flex; align-items: center; justify-content: center; text-align: center; color: #1b5e20; font-weight: 800; z-index: 1;'
            },

            // --- RIGHT SIDE (Top Row) ---
            { id: '79-A', size: '6 Marla', x: 570, y: 390, width: 50, height: 100, status: 'available' },
            { id: '80-A', size: '6 Marla', x: 625, y: 390, width: 50, height: 100, status: 'available' },
            { id: '81-A', size: '6 Marla', x: 680, y: 390, width: 50, height: 100, status: 'available' },
            { id: '82-A', size: 'Wide', x: 735, y: 390, width: 90, height: 100, status: 'available' },

            // --- RIGHT SIDE (Bottom Row) ---
            { id: '70-A', size: '6 Marla', x: 570, y: 495, width: 50, height: 95, status: 'available' },
            { id: '69-A', size: '6 Marla', x: 625, y: 495, width: 50, height: 95, status: 'available' },
            { id: '68-A', size: '6 Marla', x: 680, y: 495, width: 50, height: 95, status: 'available' },
            { id: '67-A', size: 'Wide', x: 735, y: 495, width: 90, height: 95, status: 'available' },


            // ========================
            // PREVIOUS UPPER SECTION (Plots 54-66)
            // ========================
            // Shifted +60

            // --- LEFT COLUMN (Wider Plots) ---
            { id: '54-A', size: '20.69 Marla', x: 100, y: 690, width: 100, height: 80, status: 'available' },
            { id: '53-A', size: '14.01 Marla', x: 100, y: 775, width: 100, height: 60, status: 'available' },

            // Split Plots 52-A(A) & 52-A(B)
            { id: '52-A(A)', size: '6.25 Marla', x: 100, y: 840, width: 48, height: 50, status: 'available' },
            { id: '52-A(B)', size: '6.24 Marla', x: 152, y: 840, width: 48, height: 50, status: 'available' },

            // --- TOP ROW (55-A to 66-A) ---
            { id: '55-A', size: '6 Marla', x: 205, y: 690, width: 45, height: 100, status: 'available' },
            { id: '56-A', size: '6 Marla', x: 255, y: 690, width: 45, height: 100, status: 'available' },
            { id: '57-A', size: '6 Marla', x: 305, y: 690, width: 45, height: 100, status: 'available' },
            { id: '58-A', size: '6 Marla', x: 355, y: 690, width: 45, height: 100, status: 'available' },
            { id: '59-A', size: '6 Marla', x: 405, y: 690, width: 45, height: 100, status: 'available' },
            { id: '60-A', size: '6 Marla', x: 455, y: 690, width: 45, height: 100, status: 'available' },
            { id: '61-A', size: '6 Marla', x: 505, y: 690, width: 45, height: 100, status: 'available' },
            { id: '62-A', size: '6 Marla', x: 555, y: 690, width: 45, height: 100, status: 'available' },
            { id: '63-A', size: '6 Marla', x: 605, y: 690, width: 45, height: 100, status: 'available' },
            { id: '64-A', size: '6 Marla', x: 655, y: 690, width: 45, height: 100, status: 'available' },

            // Right Side Wider/Different
            { id: '65-A', size: '6 Marla', x: 705, y: 690, width: 45, height: 100, status: 'available' },
            { id: '66-A', size: '10.08 Marla', x: 755, y: 690, width: 55, height: 100, status: 'available' },


            // --- BOTTOM ROW (51-A to 43-A) ---
            { id: '51-A', size: '10.03 Marla', x: 205, y: 795, width: 62, height: 95, status: 'available' },
            { id: '50-A', size: '10.03 Marla', x: 273, y: 795, width: 62, height: 95, status: 'available' },
            { id: '49-A', size: '10.03 Marla', x: 341, y: 795, width: 62, height: 95, status: 'available' },
            { id: '48-A', size: '10.03 Marla', x: 409, y: 795, width: 62, height: 95, status: 'available' },
            { id: '47-A', size: '10.03 Marla', x: 477, y: 795, width: 62, height: 95, status: 'available' },
            { id: '46-A', size: '10.03 Marla', x: 545, y: 795, width: 62, height: 95, status: 'available' },
            { id: '45-A', size: '10.03 Marla', x: 613, y: 795, width: 62, height: 95, status: 'available' },
            { id: '44-A', size: '10.03 Marla', x: 681, y: 795, width: 62, height: 95, status: 'available' },

            { id: '43-A', size: '10.80 Marla', x: 749, y: 795, width: 62, height: 95, status: 'available' },


            // ========================
            // PREVIOUS SECTION (Plots 24-42)
            // ========================
            // Shifted +60

            // Left Column (Wider ~70px)
            { id: '34-A', size: '12.45 Marla', x: 100, y: 960, width: 70, height: 63, status: 'available' },
            { id: '33-A', size: '10.01 Marla', x: 100, y: 1025, width: 70, height: 63, status: 'available' },
            { id: '32-A', size: '12.50 Marla', x: 100, y: 1090, width: 70, height: 63, status: 'available' },

            // Top Row
            { id: '35-A', size: '10.03 Marla', x: 175, y: 960, width: 50, status: 'available' },
            { id: '36-A', size: '10.03 Marla', x: 230, y: 960, width: 50, status: 'available' },
            { id: '37-A', size: '10.03 Marla', x: 285, y: 960, width: 50, status: 'available' },
            { id: '38-A', size: '10.03 Marla', x: 340, y: 960, width: 50, status: 'available' },
            { id: '39-A', size: '10.03 Marla', x: 395, y: 960, width: 50, status: 'available' },
            { id: '40-A', size: '10.03 Marla', x: 450, y: 960, width: 50, status: 'available' },
            { id: '41-A', size: '10.03 Marla', x: 505, y: 960, width: 50, status: 'available' },
            { id: '42-A', size: '6 Marla', x: 560, y: 960, width: 40, status: 'available' },

            // Bottom Row
            { id: '31-A', size: '10.03 Marla', x: 175, y: 1060, width: 50, status: 'available' },
            { id: '30-A', size: '10.03 Marla', x: 230, y: 1060, width: 50, status: 'available' },
            { id: '29-A', size: '10.03 Marla', x: 285, y: 1060, width: 50, status: 'available' },
            { id: '28-A', size: '10.03 Marla', x: 340, y: 1060, width: 50, status: 'available' },
            { id: '27-A', size: '10.03 Marla', x: 395, y: 1060, width: 50, status: 'available' },
            { id: '26-A', size: '10.03 Marla', x: 450, y: 1060, width: 50, status: 'available' },
            { id: '25-A', size: '10.03 Marla', x: 505, y: 1060, width: 50, status: 'available' },
            { id: '24-A', size: '6 Marla', x: 560, y: 1060, width: 40, status: 'available' },

            // ========================
            // ORIGINAL SECTION (Plots 14-23 & Park)
            // ========================
            // Shifted +60

            // --- TOP ROW (Above Park) ---
            { id: '19-A', size: '30 Marla', x: 100, y: 1260, status: 'available' },
            { id: '20-A', size: '8.74 Marla', x: 165, y: 1260, status: 'available' },

            // CENTER PARK
            {
                id: 'PARK',
                size: '53.00-M',
                dim: "98'-2\" x 147'",
                x: 235,
                y: 1260,
                width: 160,
                height: 200,
                status: 'park',
                type: 'park',
                style: 'background: radial-gradient(circle, #eaffea 50%, #c8e6c9 100%); border: 2px dashed #4caf50; display: flex; align-items: center; justify-content: center; text-align: center; color: #1b5e20; font-weight: 800; z-index: 1;'
            },

            { id: '21-A', size: '12.38 Marla', x: 395, y: 1260, status: 'available' },
            { id: '22-A', size: '10.03 Marla', x: 460, y: 1260, status: 'available' },
            { id: '23-A', size: '5.09 Marla', x: 525, y: 1260, status: 'available' },

            // --- BOTTOM ROW (Below Park) ---
            { id: '18-A', size: '18.62 Marla', x: 100, y: 1365, status: 'available' },
            { id: '17-A', size: '12 Marla', x: 165, y: 1365, status: 'available' },

            { id: '16-A', size: '12 Marla', x: 395, y: 1365, status: 'available' },
            { id: '15-A', size: '12.66 Marla', x: 460, y: 1365, status: 'available' },
            { id: '14-A', size: '12 Marla', x: 525, y: 1365, status: 'available' },

            // ========================
            // NEW LANDSCAPE PLOTS (01-S to 05-S)
            // ========================
            { id: '05-S', size: '5 Marla', x: 100, y: 130, width: 70, height: 35, status: 'available' },
            { id: '04-S', size: '5 Marla', x: 100, y: 167, width: 70, height: 35, status: 'available' },
            { id: '03-S', size: '5 Marla', x: 100, y: 204, width: 70, height: 35, status: 'available' },
            { id: '02-S', size: '5 Marla', x: 100, y: 241, width: 70, height: 35, status: 'available' },
            { id: '01-S', size: '5 Marla', x: 100, y: 278, width: 70, height: 35, status: 'available' },

            // ========================
            // EXISTING BLOCK A (Plots 01-13)
            // ========================
            // TOP ROW (Road 50') (Now Middle)
            // Shifted +60
            { id: '07-A', size: '15.62 Marla', x: 100, y: 1530, status: 'available' },
            { id: '08-A', size: '6.25 Marla', x: 165, y: 1530, status: 'available' },
            { id: '09-A', size: '6.25 Marla', x: 230, y: 1530, status: 'available' },
            // Service Gap
            { id: '10-A', size: '14.04 Marla', x: 330, y: 1530, status: 'available' },
            { id: '11-A', size: '14.04 Marla', x: 395, y: 1530, status: 'available' },
            { id: '12-A', size: '14.04 Marla', x: 460, y: 1530, status: 'available' },
            { id: '13-A', size: '14.04 Marla', x: 525, y: 1530, status: 'available' },

            // MIDDLE ROW (Inside Corner)
            // Shifted +60
            { id: '06-A', size: '15.02 Marla', x: 100, y: 1635, status: 'available' },
            { id: '05-A', size: '15.02 Marla', x: 165, y: 1635, status: 'available' },
            { id: '04-A', size: '15.02 Marla', x: 230, y: 1635, status: 'available' },

            // BOTTOM ROW (Road 40')
            // Shifted +60
            { id: '01-A', size: '15.51 Marla', x: 100, y: 1795, status: 'available' },
            { id: '02-A', size: '15.09 Marla', x: 165, y: 1795, status: 'available' },
            { id: '03-A', size: '15.02 Marla', x: 230, y: 1795, status: 'available' }
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

            // Add Horizontal and Vertical Roads via Config
            if (section.roads) {
                section.roads.forEach(road => {
                    const roadEl = document.createElement('div');
                    roadEl.style.position = 'absolute';
                    roadEl.style.left = road.x ? `${road.x}px` : '20px';
                    roadEl.style.top = `${road.y}px`;
                    roadEl.style.backgroundColor = '#222';
                    roadEl.style.display = 'flex';
                    roadEl.style.alignItems = 'center';
                    roadEl.style.justifyContent = 'center';
                    roadEl.style.color = '#ccc';
                    roadEl.style.fontSize = '0.75rem';
                    roadEl.style.fontWeight = '600';
                    roadEl.style.letterSpacing = '1px';
                    roadEl.style.zIndex = '0';

                    // Check if vertical road
                    if (road.isVertical) {
                        roadEl.style.width = road.width ? `${road.width}px` : '40px';
                        roadEl.style.height = road.height ? `${road.height}px` : '400px';
                        roadEl.style.borderLeft = '2px dashed rgba(255, 255, 255, 0.2)';
                        roadEl.style.borderRight = '2px dashed rgba(255, 255, 255, 0.2)';
                        roadEl.style.writingMode = 'vertical-rl';
                        roadEl.style.textOrientation = 'mixed';
                    } else {
                        // Horizontal road (default)
                        roadEl.style.width = road.width ? `${road.width}px` : '210px';
                        roadEl.style.height = '50px';
                        roadEl.style.borderTop = '2px dashed rgba(255, 255, 255, 0.2)';
                        roadEl.style.borderBottom = '2px dashed rgba(255, 255, 255, 0.2)';
                    }

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
                } else if (plot.type === 'road-label') {
                    // Display the 'dim' text for road labels
                    plotEl.textContent = plot.dim;
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






