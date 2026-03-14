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






    // ===== BOTTOM AREA =====
    {
        type: 'road',
        name: 'Boulevard (R)',
        direction: 'horizontal',
        gridArea: '14 / 3 / 15 / 4' // Shifted to row 14
    },


    {
        type: 'custom-block',
        id: 'block-e',
        name: 'Block E',
        gridArea: '9 / 3 / 11 / 4',
        style: 'height: 878px; width: 1600px; position: relative; align-self: end;',
        roads: [
            // ========================
            // NEW EXTENSION #2 ROAD
            // ========================
            { name: "ROAD 50' WIDE", x: 80, y: 240, width: 930, height: 50, isVertical: false },

            { name: "ROAD 30' WIDE", x: 80, y: 514, width: 921, height: 30, isVertical: false },

            { name: "ROAD 40' WIDE", x: 1010, y: 20, width: 40, height: 858, isVertical: true }
        ],
        plots: [
            // ========================
            // SECOND TOP EXTENSION (ABOVE ALL)
            // ========================
            // Left Side Stacked (Landscape)
            { id: '30-E', size: '20-M', x: 80, y: 20, width: 184, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '29-E', size: '20-M', x: 80, y: 130, width: 184, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },

            // Center Park
            {
                id: 'PARK',
                size: '83.22-M',
                x: 268,
                y: 20,
                width: 386,
                height: 216,
                status: 'park',
                type: 'non-plot',
                style: 'background: radial-gradient(circle, #eaffea 50%, #c8e6c9 100%) !important; border: 2px dashed #4caf50 !important; display: flex !important; align-items: center !important; justify-content: center !important; text-align: center !important; color: #1b5e20 !important; font-weight: 800 !important; pointer-events: none !important; z-index: 1 !important;'
            },

            // Right Side Top Row (Portrait)
            { id: '31-E', size: '10-M', x: 658, y: 20, width: 114, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '32-E', size: '10-M', x: 776, y: 20, width: 114, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '33-E', size: '10-M', x: 894, y: 20, width: 116, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },

            // Right Side Bottom Row (Portrait)
            { id: '28-E', size: '10-M', x: 658, y: 130, width: 114, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '27-E', size: '10-M', x: 776, y: 130, width: 114, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '26-E', size: '10-M', x: 894, y: 130, width: 116, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },

            // ========================
            // NEW EXTENSION (TOP ROWS)
            // ========================
            // Left Side Top (y=294)
            { id: '412-C', size: '10.30-M', x: 80, y: 294, width: 144, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '17-E', size: '5.05-M', x: 228, y: 294, width: 70, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '18-E', size: '5.05-M', x: 302, y: 294, width: 70, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },

            // Left Side Bottom (y=404)
            { id: '411-C', size: '10.30-M', x: 80, y: 404, width: 144, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '410-C', size: '5.05-M', x: 228, y: 404, width: 70, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '409-C', size: '5.05-M', x: 302, y: 404, width: 70, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },

            // Right Side Top (y=294)
            { id: '19-E', size: '10-M', x: 376, y: 294, width: 90, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '20-E', size: '10-M', x: 470, y: 294, width: 90, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '21-E', size: '10-M', x: 564, y: 294, width: 90, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '22-E', size: '10-M', x: 658, y: 294, width: 90, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '23-E', size: '10-M', x: 752, y: 294, width: 90, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '24-E', size: '10-M', x: 846, y: 294, width: 90, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '25-E', size: '8.08-M', x: 940, y: 294, width: 70, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },

            // Right Side Bottom (y=404)
            { id: '16-E', size: '10-M', x: 376, y: 404, width: 90, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '15-E', size: '10-M', x: 470, y: 404, width: 90, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '14-E', size: '10-M', x: 564, y: 404, width: 90, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '13-E', size: '10-M', x: 658, y: 404, width: 90, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '12-E', size: '10-M', x: 752, y: 404, width: 90, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '11-E', size: '10-M', x: 846, y: 404, width: 90, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '10-E', size: '8.08-M', x: 940, y: 404, width: 70, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },

            // ========================
            // EXISTING BLOCK E (Shifted +260)
            // ========================
            // Left Side Top
            { id: '367-C', size: '11.72-M', x: 80, y: 554, width: 112, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '368-C', size: '5.05-M', x: 196, y: 554, width: 56, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '369-C', size: '5.05-M', x: 256, y: 554, width: 56, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '5-E', size: '5.05-M', x: 315, y: 554, width: 56, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },

            // Left Side Bottom
            { id: '366-C', size: '14.14-M', x: 80, y: 664, width: 136, height: 136, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '365-C', size: '10.03-M', x: 220, y: 664, width: 74, height: 136, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '364-C', size: '10.03-M', x: 298, y: 664, width: 74, height: 136, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },

            // Masjid Center
            {
                id: 'MASJID',
                size: '53.03-M',
                x: 376,
                y: 554,
                width: 246,
                height: 246,
                status: 'park',
                type: 'non-plot',
                style: `background-color: #fff0ff !important; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 90 L20 60 L30 50 L30 60 L40 60 L40 40 L50 20 L60 40 L60 60 L70 60 L70 50 L80 60 L80 90 Z M45 90 L45 70 A 5 5 0 0 1 55 70 L55 90 Z M25 90 L25 75 L35 75 L35 90 Z M65 90 L65 75 L75 75 L75 90 Z' fill='rgba(76, 175, 80, 0.4)' stroke='%2300ff00' stroke-width='2'/%3E%3Ccircle cx='50' cy='20' r='5' fill='none' stroke='%2300ff00' stroke-width='2'/%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg width='20' height='34.64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0L20 5.77v11.55L10 23.09 0 17.32V5.77z' fill='none' stroke='%23ff00ff' stroke-width='0.7' stroke-opacity='0.4' /%3E%3C/svg%3E") !important; background-size: 80% 80%, 20px 34.64px !important; background-position: center 20%, 0 0 !important; background-repeat: no-repeat, repeat !important; border: 2px dashed #4caf50 !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: flex-end !important; padding-bottom: 20px !important; color: #1b5e20 !important; font-weight: 800 !important; pointer-events: none !important; z-index: 1 !important;`
            },

            // Right Side Top
            { id: '6-E', size: '10-M', x: 626, y: 554, width: 95, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '7-E', size: '10-M', x: 725, y: 554, width: 95, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '8-E', size: '8.28-M', x: 824, y: 554, width: 78, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '9-E', size: '10-M', x: 906, y: 554, width: 95, height: 106, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },

            // Right Side Bottom
            { id: '363-C', size: '10.03-M', x: 626, y: 664, width: 74, height: 136, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '362-C', size: '10.03-M', x: 704, y: 664, width: 74, height: 136, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '361-C', size: '10.03-M', x: 782, y: 664, width: 74, height: 136, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '360-C', size: '10.03-M', x: 860, y: 664, width: 74, height: 136, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '359-C', size: '8.61-M', x: 938, y: 664, width: 63, height: 136, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },

            // ========================
            // NEW PLOTS RIGHT OF 40' ROAD
            // ========================
            { id: '457-E', size: '6 Marla', x: 1060, y: 20, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '456-E', size: '6 Marla', x: 1060, y: 75, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '455-E', size: '6 Marla', x: 1060, y: 130, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '454-E', size: '6 Marla', x: 1060, y: 185, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '453-E', size: '6 Marla', x: 1060, y: 240, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '452-E', size: '6 Marla', x: 1060, y: 295, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '451-E', size: '6 Marla', x: 1060, y: 350, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '450-E', size: '6 Marla', x: 1060, y: 405, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '449-E', size: '6 Marla', x: 1060, y: 460, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '448-E', size: '6 Marla', x: 1060, y: 515, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '447-E', size: '6 Marla', x: 1060, y: 570, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '446-E', size: '6 Marla', x: 1060, y: 625, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '445-E', size: '6 Marla', x: 1060, y: 680, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' },
            { id: '444-E', size: '6 Marla', x: 1060, y: 735, width: 130, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block E' }
        ]
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
            { name: "ROAD13 40' WIDE", x: 80, y: 15, width: 1470, height: 40, isVertical: false },

            // Bottom Road 40' Wide (Separating from old)
            { name: "ROAD12 40' WIDE", x: 80, y: 450, width: 1280, height: 40, isVertical: false },

            // Vertical: Left of Park (Between Left Plots and Park)
            { name: "ROAD11 30' WIDE", x: 250, y: 60, width: 40, height: 390, isVertical: true },

            // Vertical: Right of Park (Between Park and Right Col 1)
            { name: "ROAD10 30' WIDE", x: 768, y: 60, width: 40, height: 390, isVertical: true },

            // Vertical: Between Combined Col (298-309) and Col 2 (310-318)
            { name: "ROAD8 30' WIDE", x: 1080, y: 69, width: 40, height: 380, isVertical: true },
            // { name: "ROAD9 30' WIDE", x: 1355, y: 69, width: 45, height: 380, isVertical: true },
            { name: "ROAD1 30' WIDE ", x: 80, y: 775, width: 1375, height: 40, isVertical: false },

            { name: "ROAD2 30' WIDE", x: 1360, y: 60, width: 50, height: 715, isVertical: true },

            { name: "ROAD3 30' WIDE", y: 1040, width: 1010, x: 80 },

            { name: "ROAD4 30' WIDE", x: 1055, y: 820, width: 40, height: 467, isVertical: true },

            { name: "ROAD5 30' WIDE", x: 1240, y: 836, width: 30, height: 156, isVertical: true },

            { name: "ROAD6 30' WIDE", x: 1415, y: 825, width: 40, height: 165, isVertical: true },
            { name: "ROAD7 30' WIDE", x: 1135, y: 160, width: 215, height: 30, isVertical: false }

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
            { id: '302-C', size: '5 Marla', x: 972, y: 65, width: 90, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '303-C', size: '5 Marla', x: 972, y: 113, width: 90, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '304-C', size: '5 Marla', x: 972, y: 161, width: 90, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '305-C', size: '5 Marla', x: 972, y: 209, width: 90, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '306-C', size: '5 Marla', x: 972, y: 257, width: 90, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '307-C', size: '5 Marla', x: 972, y: 305, width: 90, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '308-C', size: '5 Marla', x: 972, y: 353, width: 90, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '309-C', size: '5 Marla', x: 972, y: 401, width: 90, height: 44, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            // COL 2 (310-318) - adjusted position
            { id: '343-C', size: '5 Marla', x: 1135, y: 67, width: 50, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '342-C', size: '5 Marla', x: 1190, y: 67, width: 50, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            // { id: '312-C', size: '5 Marla', x: 1080, y: 149, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            // { id: '313-C', size: '5 Marla', x: 1080, y: 191, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '317-C', size: '5 Marla', x: 1135, y: 210, width: 105, height: 45, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '313-C', size: '5 Marla', x: 1135, y: 258, width: 105, height: 45, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '312-C', size: '5 Marla', x: 1135, y: 306, width: 105, height: 45, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '311-C', size: '5 Marla', x: 1135, y: 354, width: 105, height: 45, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '310-C', size: '5 Marla', x: 1135, y: 402, width: 105, height: 45, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            // COL 3 (319-327) - adjusted position
            { id: '341-C', size: '5 Marla', x: 1245, y: 67, width: 50, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '340-C', size: '5 Marla', x: 1300, y: 67, width: 50, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            // { id: '321-C', size: '5 Marla', x: 1290, y: 149, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            // { id: '322-C', size: '5 Marla', x: 1290, y: 191, width: 200, height: 38, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '319-C', size: '5 Marla', x: 1242, y: 210, width: 105, height: 45, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '322-C', size: '5 Marla', x: 1242, y: 258, width: 105, height: 45, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '323-C', size: '5 Marla', x: 1242, y: 306, width: 105, height: 45, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '324-C', size: '5 Marla', x: 1242, y: 354, width: 105, height: 45, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '325-C', size: '5 Marla', x: 1242, y: 402, width: 105, height: 45, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            // NEW PLOTS RIGHT OF ROAD9 (339-C to 332-C)
            { id: '339-C', size: '5 Marla', x: 1420, y: 70, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '338-C', size: '5 Marla', x: 1420, y: 120, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '337-C', size: '5 Marla', x: 1420, y: 170, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '336-C', size: '5 Marla', x: 1420, y: 220, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '335-C', size: '5 Marla', x: 1420, y: 270, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '334-C', size: '5 Marla', x: 1420, y: 320, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '333-C', size: '5 Marla', x: 1420, y: 370, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '332-C', size: '5 Marla', x: 1420, y: 420, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
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

            { id: '331-C', size: '8 Marla', x: 1420, y: 470, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '330-C', size: '8 Marla', x: 1420, y: 520, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '329-C', size: '8 Marla', x: 1420, y: 570, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '328-C', size: '8 Marla', x: 1420, y: 620, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '327-C', size: '8 Marla', x: 1420, y: 670, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '326-C', size: '8 Marla', x: 1420, y: 720, width: 100, height: 47, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

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

            { id: '220-C', size: '5 Marla', x: 1100, y: 995, width: 80, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '219-C', size: '5 Marla', x: 1100, y: 1049, width: 80, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '218-C', size: '5 Marla', x: 1100, y: 1103, width: 80, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '217-C', size: '5 Marla', x: 1100, y: 1157, width: 80, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '27-S', size: '5 Marla', x: 1100, y: 1210, width: 38, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '26-S', size: '5 Marla', x: 1143, y: 1210, width: 38, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '250-C', size: '5 Marla', x: 1100, y: 836, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '249-C', size: '5 Marla', x: 1100, y: 889, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '248-C', size: '5 Marla', x: 1100, y: 942, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '254-C', size: '5 Marla', x: 1275, y: 942, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '255-C', size: '5 Marla', x: 1275, y: 889, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '256-C', size: '5 Marla', x: 1275, y: 836, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '253-C', size: '5 Marla', x: 1170, y: 942, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '252-C', size: '5 Marla', x: 1170, y: 889, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '251-C', size: '5 Marla', x: 1170, y: 836, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '257-C', size: '5 Marla', x: 1345, y: 836, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '258-C', size: '5 Marla', x: 1345, y: 889, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '259-C', size: '5 Marla', x: 1345, y: 942, width: 65, height: 50, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },

            { id: '263-C', size: '5 Marla', x: 1460, y: 775, width: 65, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '262-C', size: '5 Marla', x: 1460, y: 829, width: 65, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '261-C', size: '5 Marla', x: 1460, y: 882, width: 65, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block C' },
            { id: '260-C', size: '5 Marla', x: 1460, y: 935, width: 65, height: 52, price: 3500000, status: 'available', type: 'residential', block: 'Block C' }

        ]
    },

    {
        type: 'road',
        name: "ROAD 73' WIDE",
        direction: 'horizontal',
        gridArea: '12 / 1 / 13 / 4'
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
    // ========================
    // NEW BLOCK F & DIVIDING ROAD
    // ========================
    {
        type: 'road',
        name: "ROAD 30' WIDE",
        direction: 'horizontal',
        gridArea: '10 / 1 / 11 / 2',
        style: 'min-height: 40px; width: 840px; justify-self: right;'
    },
    {
        type: 'custom-block',
        id: 'block-f',
        name: 'Block F',
        gridArea: '9 / 1 / 10 / 2',
        style: 'height: 980px; width: max-content; display: grid; grid-auto-columns: max-content; position: relative; justify-self: end; align-self: end; overflow: visible;',
        roads: [
            // ============================================
            // NEW TOP ROAD EXTENSION
            // ============================================
            { name: "ROAD1 30' WIDE", x: 20, y: 120, with: 1032, height: 30, isVertical: false },

            // ============================================
            // NEW LEFT VERTICAL ROAD
            // ============================================
            { name: "ROAD2 30' WIDE", x: 150, y: 120, width: 78, height: 2340, isVertical: true },
            { name: "ROAD 30' WIDE", x: -250, y: 1860, width: 400, height: 40, isVertical: false },
            { name: "ROAD 30' WIDE", x: -250, y: 2140, width: 400, height: 40, isVertical: false },
            { name: "ROAD 30' WIDE", x: -290, y: 1740, width: 30, height: 560, isVertical: true }
        ],
        plots: [
            // ============================================
            // NEW LEFT SIDE UTILITY PLOTS
            // ============================================
            { id: '<div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.2;font-size:0.75rem;pointer-events:none;text-align:center;">SOLID<br>WASTE<span style="font-size:0.6rem;margin-top:2px;display:block">10-M</span></div>', size: '10-M', dim: '54\'-6"x50\'', x: 20, y: 20, width: 142, height: 100, type: 'utility', block: 'Block F', status: 'available', style: 'background: repeating-linear-gradient(45deg, rgba(0,255,255,0.05), rgba(0,255,255,0.05) 10px, rgba(0,255,255,0.2) 10px, rgba(0,255,255,0.2) 20px) !important; border: 2px dashed #0ff !important; pointer-events:none !important; color:#fff !important;' },
            { id: '<div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.2;font-size:0.75rem;pointer-events:none;text-align:center;">WATER<br>SUPPLY<span style="font-size:0.6rem;margin-top:2px;display:block">10-M</span></div>', size: '10-M', dim: '54\'-6"x50\'', x: 162, y: 20, width: 142, height: 100, type: 'utility', block: 'Block F', status: 'available', style: 'background: repeating-linear-gradient(45deg, rgba(0,255,255,0.05), rgba(0,255,255,0.05) 10px, rgba(0,255,255,0.2) 10px, rgba(0,255,255,0.2) 20px) !important; border: 2px dashed #0ff !important; pointer-events:none !important; color:#fff !important;' },

            // ============================================
            // NEW TOP ROW PLOTS (96-F to 87-F) - Portrait
            // ============================================
            { id: '96-F', size: '7.66-M', dim: '41\'-9"x50\'', x: 304, y: 20, width: 109, height: 100, price: 5000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '95-F', size: '5-M', dim: '27\'-3"x50\'', x: 413, y: 20, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '94-F', size: '5-M', dim: '27\'-3"x50\'', x: 484, y: 20, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '93-F', size: '5-M', dim: '27\'-3"x50\'', x: 555, y: 20, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '92-F', size: '5-M', dim: '27\'-3"x50\'', x: 626, y: 20, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '91-F', size: '5-M', dim: '27\'-3"x50\'', x: 697, y: 20, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '90-F', size: '5-M', dim: '27\'-3"x50\'', x: 768, y: 20, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '89-F', size: '5-M', dim: '27\'-3"x50\'', x: 839, y: 20, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '88-F', size: '5-M', dim: '27\'-3"x50\'', x: 910, y: 20, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '87-F', size: '5-M', dim: '27\'-3"x50\'', x: 981, y: 20, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },

            // ============================================
            // NEW TOP ROW PLOTS (76-F to 86-F) - Portrait
            // ============================================
            // --- LEFT SIDE PLOTS (97-F to 100-F) ---
            { id: '97-F', size: '5.10-M', dim: '27\'-9"x50\'', x: 20, y: 150, width: 130, height: 56, price: 3100000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '98-F', size: '5-M', dim: '27\'-3"x50\'', x: 20, y: 206, width: 130, height: 54, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '99-F', size: '5-M', dim: '27\'-3"x50\'', x: 20, y: 260, width: 130, height: 54, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '100-F', size: '5.10-M', dim: '27\'-9"x50\'', x: 20, y: 314, width: 130, height: 56, price: 3100000, status: 'available', type: 'residential', block: 'Block F' },

            { id: '76-F', size: '5-M', dim: '27\'-3"x50\'', x: 228, y: 150, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '77-F', size: '5-M', dim: '27\'-3"x50\'', x: 299, y: 150, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '78-F', size: '5-M', dim: '27\'-3"x50\'', x: 370, y: 150, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '79-F', size: '5-M', dim: '27\'-3"x50\'', x: 441, y: 150, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '80-F', size: '5-M', dim: '27\'-3"x50\'', x: 512, y: 150, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '81-F', size: '5-M', dim: '27\'-3"x50\'', x: 583, y: 150, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '82-F', size: '5-M', dim: '27\'-3"x50\'', x: 654, y: 150, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '83-F', size: '5-M', dim: '27\'-3"x50\'', x: 725, y: 150, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '84-F', size: '5-M', dim: '27\'-3"x50\'', x: 796, y: 150, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '85-F', size: '5-M', dim: '27\'-3"x50\'', x: 867, y: 150, width: 71, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '86-F', size: '7.80-M', dim: '42\'-6"x50\'', x: 938, y: 150, width: 114, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },

            // ============================================
            // NEW BOTTOM ROW PLOTS (75-F to 69-F) - Landscape
            // ============================================
            { id: '75-F', size: '9-M', dim: '40\'-9"x60\'', x: 228, y: 250, width: 106, height: 120, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '74-F', size: '7-M', dim: '31\'-9"x60\'', x: 334, y: 250, width: 83, height: 120, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '73-F', size: '7-M', dim: '31\'-9"x60\'', x: 417, y: 250, width: 83, height: 120, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '72-F', size: '11-M', dim: '49\'-11"x60\'', x: 500, y: 250, width: 131, height: 120, price: 3000000, status: 'available', type: 'residential', block: 'Block F', style: 'background: rgba(0, 255, 255, 0.2) !important;' },
            { id: '71-F', size: '11-M', dim: '49\'-11"x60\'', x: 631, y: 250, width: 131, height: 120, price: 3000000, status: 'available', type: 'residential', block: 'Block F', style: 'background: rgba(0, 255, 255, 0.2) !important;' },
            { id: '70-F', size: '11-M', dim: '49\'-11"x60\'', x: 762, y: 250, width: 131, height: 120, price: 3000000, status: 'available', type: 'residential', block: 'Block F', style: 'background: rgba(0, 255, 255, 0.2) !important;' },
            { id: '69-F', size: '13.44-M', dim: '61\'x60\'', x: 893, y: 250, width: 159, height: 120, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },

            // ============================================
            // NEW DIVIDING ROAD INSIDE BLOCK F
            // ============================================
            { name: "ROAD 40' WIDE", x: 150, y: 370, width: 902, height: 40, isVertical: false },

            // ============================================
            // NEW LEFT SIDE VERTICAL PLOTS (Symmetrical to 60-F..66-F)
            // ============================================
            { id: '52-F', size: '5 Marla', x: 25, y: 410, width: 125, height: 72, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '51-F', size: '5 Marla', x: 25, y: 484, width: 125, height: 72, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '50-F', size: '5 Marla', x: 25, y: 558, width: 125, height: 72, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '49-F', size: '5 Marla', x: 25, y: 632, width: 125, height: 72, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '48-F', size: '5 Marla', x: 25, y: 706, width: 125, height: 72, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '47-F', size: '5 Marla', x: 25, y: 780, width: 125, height: 72, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '46-F', size: '5 Marla', x: 25, y: 854, width: 125, height: 72, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: 'NEW-F', size: '5 Marla', x: 25, y: 990, width: 125, height: 72, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            // ============================================
            // NEW VERTICAL COLUMN (45-F to 30-F) - Aligned with Block D
            // ============================================
            { id: '45-F', size: '5 Marla', x: 25, y: 1080, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '44-F', size: '5 Marla', x: 25, y: 1121.25, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '43-F', size: '5 Marla', x: 25, y: 1162.5, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '42-F', size: '5 Marla', x: 25, y: 1203.75, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '41-F', size: '5 Marla', x: 25, y: 1245, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '40-F', size: '5 Marla', x: 25, y: 1286.25, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '39-F', size: '5 Marla', x: 25, y: 1327.5, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '38-F', size: '5 Marla', x: 25, y: 1368.75, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '37-F', size: '5 Marla', x: 25, y: 1410, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '36-F', size: '5 Marla', x: 25, y: 1451.25, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '35-F', size: '5 Marla', x: 25, y: 1492.5, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '34-F', size: '5 Marla', x: 25, y: 1533.75, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '33-F', size: '5 Marla', x: 25, y: 1575, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '32-F', size: '5 Marla', x: 25, y: 1616.25, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '31-F', size: '5 Marla', x: 25, y: 1657.5, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '30-F', size: '5 Marla', x: 25, y: 1698.75, width: 125, height: 41.25, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },

            // ============================================
            // NEW HORIZONTAL SUB-ROW (15-F to 19-F)
            // ============================================
            { id: '15-F', size: '5.32-M', x: -250, y: 1740, width: 90, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '16-F', size: '5-M', x: -160, y: 1740, width: 80, height: 100, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '17-F', size: '3.5-M', x: -80, y: 1740, width: 55, height: 100, price: 2100000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '18-F', size: '3.5-M', x: -25, y: 1740, width: 55, height: 100, price: 2100000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '19-F', size: '8.08-M', x: 30, y: 1740, width: 120, height: 110, price: 4000000, status: 'available', type: 'residential', block: 'Block F' },

            // ============================================
            // NEW LEFT SIDE VERTICAL PLOTS (Left of Road)
            // ============================================
            { id: '14-F', size: '5-M', x: -390, y: 1740, width: 100, height: 70, status: 'available', block: 'Block F' },
            { id: '13-F', size: '5-M', x: -390, y: 1810, width: 100, height: 70, status: 'available', block: 'Block F' },
            { id: '12-F', size: '5.37-M', x: -390, y: 1880, width: 100, height: 70, status: 'available', block: 'Block F' },
            { id: '11-F', size: '5-M', x: -390, y: 1950, width: 100, height: 70, status: 'available', block: 'Block F' },
            { id: '10-F', size: '5-M', x: -390, y: 2020, width: 100, height: 70, status: 'available', block: 'Block F' },
            { id: '9-F', size: '5-M', x: -390, y: 2090, width: 100, height: 70, status: 'available', block: 'Block F' },
            { id: '8-F', size: '5-M', x: -390, y: 2160, width: 100, height: 70, status: 'available', block: 'Block F' },
            { id: '7-F', size: '5-M', x: -390, y: 2230, width: 100, height: 70, status: 'available', block: 'Block F' },

            // ============================================
            // NEW PLOTS BELOW ROAD 30' WIDE
            // ============================================
            { id: '24-F', size: '5 Marla', x: -250, y: 1920, width: 90, height: 100, status: 'available', block: 'Block F' },
            { id: '23-F', size: '5 Marla', x: -160, y: 1920, width: 80, height: 100, status: 'available', block: 'Block F' },
            { id: '22-F', size: '5 Marla', x: -80, y: 1920, width: 55, height: 100, status: 'available', block: 'Block F' },
            { id: '21-F', size: '5 Marla', x: -25, y: 1920, width: 55, height: 100, status: 'available', block: 'Block F' },
            { id: '20-F', size: '5 Marla', x: 30, y: 1920, width: 120, height: 100, status: 'available', block: 'Block F' },
 
            { id: '25-F', size: '5 Marla', x: -250, y: 2020, width: 90, height: 100, status: 'available', block: 'Block F' },
            { id: '26-F', size: '5 Marla', x: -160, y: 2020, width: 80, height: 100, status: 'available', block: 'Block F' },
            { id: '27-F', size: '5 Marla', x: -80, y: 2020, width: 55, height: 100, status: 'available', block: 'Block F' },
            { id: '28-F', size: '5 Marla', x: -25, y: 2020, width: 55, height: 100, status: 'available', block: 'Block F' },
            { id: '29-F', size: '5 Marla', x: 30, y: 2020, width: 120, height: 100, status: 'available', block: 'Block F' },

            // ============================================
            // THIRD ROW BELOW SECOND ROAD
            // ============================================
            { id: '6-F', size: '5.32-M', x: -250, y: 2200, width: 90, height: 100, status: 'available', block: 'Block F' },
            { id: '5-F', size: '4-M', x: -160, y: 2200, width: 80, height: 100, status: 'available', block: 'Block F' },
            { id: '4-F', size: '4-M', x: -80, y: 2200, width: 55, height: 100, status: 'available', block: 'Block F' },
            { id: '3-F', size: '4-M', x: -25, y: 2200, width: 55, height: 100, status: 'available', block: 'Block F' },
            { id: '574-D', size: '7.25-M', x: 30, y: 2200, width: 120, height: 100, status: 'available', block: 'Block F' },
            { id: '573-D', size: '4.79-M', x: 30, y: 2300, width: 120, height: 70, status: 'available', block: 'Block F' },
            { id: '572-D', size: '6.01-M', x: 30, y: 2370, width: 120, height: 70, status: 'available', block: 'Block F' },
            { id: '571-D', size: '6.01-M', x: 30, y: 2440, width: 120, height: 70, status: 'available', block: 'Block F' },
            { id: '570-D', size: '6.01-M', x: 30, y: 2510, width: 120, height: 70, status: 'available', block: 'Block F' },
            { id: '83-S', size: 'Shop', x: 30, y: 2580, width: 40, height: 100, status: 'available', block: 'Block F' },
            { id: '84-S', size: 'Shop', x: 70, y: 2580, width: 40, height: 100, status: 'available', block: 'Block F' },
            { id: '85-S', size: 'Shop', x: 110, y: 2580, width: 40, height: 100, status: 'available', block: 'Block F' },

            // ============================================
            // OLD LEFT SIDE VERTICAL PLOTS (Shifted +230px + 170px = +400px relative to very original?)
            // ============================================
            { id: '66-F', size: '5 Marla', x: 228, y: 410, width: 125, height: 68, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '65-F', size: '5 Marla', x: 228, y: 478, width: 125, height: 68, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '64-F', size: '5 Marla', x: 228, y: 546, width: 125, height: 68, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '63-F', size: '5 Marla', x: 228, y: 614, width: 125, height: 68, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '62-F', size: '5 Marla', x: 228, y: 682, width: 125, height: 68, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '61-F', size: '4.93-M', x: 228, y: 750, width: 125, height: 67, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },

            // ============================================
            // OLD BOTTOM ROW PLOTS
            // ============================================
            { id: '60-F', size: '5.18-M', x: 228, y: 817, width: 75, height: 118, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '59-F', size: '5 Marla', x: 303, y: 817, width: 72, height: 118, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '58-F', size: '5 Marla', x: 375, y: 817, width: 73, height: 118, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '57-F', size: '5 Marla', x: 448, y: 817, width: 72, height: 118, price: 3000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '56-F', size: '20-M', x: 520, y: 660, width: 124, height: 275, price: 12000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '55-F', size: '20-M', x: 644, y: 660, width: 124, height: 275, price: 12000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '54-F', size: '20-M', x: 768, y: 660, width: 124, height: 275, price: 12000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '53-F', size: '20-M', x: 892, y: 660, width: 123, height: 275, price: 12000000, status: 'available', type: 'residential', block: 'Block F' },

            // ============================================
            // OLD RIGHT SIDE PLOTS
            // ============================================
            { id: '68-F', size: '13.50-M', x: 831, y: 410, width: 184, height: 125, price: 8000000, status: 'available', type: 'residential', block: 'Block F' },
            { id: '67-F', size: '13.50-M', x: 831, y: 535, width: 184, height: 125, price: 8000000, status: 'available', type: 'residential', block: 'Block F' },

            // ============================================
            // OLD CENTER AREA (PUBLIC BUILDING)
            // ============================================
            {
                id: 'PUBLIC BUILDING',
                size: 'LOCAL GOVT. (SCHOOL)\n86.72-M',
                x: 353, y: 410, width: 478, height: 407,
                status: 'park', type: 'public',
                style: 'background: repeating-linear-gradient(45deg, #ffccff, #ffccff 10px, #ffffff 10px, #ffffff 20px); display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding-top: 50px; text-align: center; color: #000; font-weight: 800; font-size: 1.2rem; z-index: 1; pointer-events: none; white-space: pre-wrap; clip-path: polygon(0% 0%, 100% 0%, 100% 61.4%, 34.9% 61.4%, 34.9% 100%, 0% 100%);'
            }
        ]
    },
    // ========================
    // BLOCK D â€” Above ROAD 73' WIDE (above Block B)
    // ========================
    {
        type: 'custom-block',
        id: 'block-d',
        name: 'Block D',
        gridArea: '11 / 1 / 12 / 2',
        style: 'height: 1405px; width: 826px; position: relative; justify-self: end; align-self: start; overflow: visible;',
        roads: [
            // ============================================================
            // NEWEST TOP ROAD â€” Separates 619-638-D from old 610-D section
            // ============================================================
            { name: "ROAD 30' WIDE", x: 20, y: 215, width: 786, height: 30, isVertical: false },

            // ============================================================
            // PREVIOUS TOP ROAD â€” Separates 610-D section from older section
            // ============================================================
            { name: "ROAD 30' WIDE", x: 20, y: 455, width: 786, height: 30, isVertical: false },

            // ============================================================
            // EXISTING ROADS
            // ============================================================
            { name: "ROAD 30' WIDE", x: 20, y: 680, width: 786, height: 30, isVertical: false },

            { name: "ROAD 30' WIDE", x: 20, y: 905, width: 786, height: 30, isVertical: false },

            { name: "ROAD 30' WIDE", x: 20, y: 1115, width: 786, height: 30, isVertical: false },

            { name: "ROAD 30' WIDE", x: 20, y: 1340, width: 786, height: 30, isVertical: false }
        ],
        plots: [
            // ============================================================
            // *** NEW SECTION: PLOTS 619-D to 638-D (ABOVE ROAD at y=195) ***
            // TOP ROW (638-D â†’ 629-D): Leftâ†’Right, portrait, y=10, h=85
            // BOTTOM ROW (619-D â†’ 628-D): Leftâ†’Right, portrait, y=95, h=100
            // ============================================================

            // --- TOP ROW: 638-D to 629-D (Right-to-Left numbering, Leftâ†’Right display) ---
            // 9 standard plots w=70, step=71 | 629-D wider w=76
            { id: '638-D', size: '5.00-M', x: 20, y: 20, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '637-D', size: '5.00-M', x: 91, y: 20, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '636-D', size: '5.00-M', x: 162, y: 20, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '635-D', size: '5.00-M', x: 233, y: 20, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '634-D', size: '5.00-M', x: 304, y: 20, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '633-D', size: '5.00-M', x: 375, y: 20, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '632-D', size: '5.00-M', x: 446, y: 20, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '631-D', size: '5.00-M', x: 517, y: 20, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '630-D', size: '5.00-M', x: 588, y: 20, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '629-D', size: '5.49-M', x: 659, y: 20, width: 147, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },

            // --- BOTTOM ROW: 619-D to 628-D (Leftâ†’Right display) ---
            // 9 standard plots w=70, step=71 | 628-D wider w=147 (same as 629-D)
            { id: '619-D', size: '5.00-M', x: 20, y: 110, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '620-D', size: '5.00-M', x: 91, y: 110, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '621-D', size: '5.00-M', x: 162, y: 110, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '622-D', size: '5.00-M', x: 233, y: 110, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '623-D', size: '5.00-M', x: 304, y: 110, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '624-D', size: '5.00-M', x: 375, y: 110, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '625-D', size: '5.00-M', x: 446, y: 110, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '626-D', size: '5.00-M', x: 517, y: 110, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '627-D', size: '5.00-M', x: 588, y: 110, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '628-D', size: '5.49-M', x: 659, y: 110, width: 147, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },

            // ============================================================
            // PREVIOUS UPPER PLOT SECTION (ABOVE ROAD at y=465)
            // Layout: Top Row (610-D..602-D) | Bottom Row (594-D..601-D) | Right Strip (133-S..129-S)
            // ============================================================

            // --- TOP ROW (Landscape) â€” 610-D to 602-D (Leftâ†’Right), y=260, h=85, w=78, step=79 ---
            { id: '610-D', size: '5.50-M', x: 20, y: 260, width: 78, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '609-D', size: '5.50-M', x: 99, y: 260, width: 78, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '608-D', size: '5.50-M', x: 178, y: 260, width: 78, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '607-D', size: '5.50-M', x: 257, y: 260, width: 78, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '606-D', size: '5.50-M', x: 336, y: 260, width: 78, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '605-D', size: '5.50-M', x: 415, y: 260, width: 78, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '604-D', size: '5.50-M', x: 494, y: 260, width: 78, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '603-D', size: '5.50-M', x: 573, y: 260, width: 78, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '602-D', size: '5.50-M', x: 652, y: 260, width: 78, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },

            // --- BOTTOM ROW (Landscape) â€” 594-D to 601-D (Leftâ†’Right), y=100, h=100, w=88, step=89 ---
            { id: '594-D', size: '6.01-M', x: 20, y: 350, width: 88, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '595-D', size: '6.01-M', x: 109, y: 350, width: 88, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '596-D', size: '6.01-M', x: 198, y: 350, width: 88, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '597-D', size: '6.01-M', x: 287, y: 350, width: 88, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '598-D', size: '6.01-M', x: 376, y: 350, width: 88, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '599-D', size: '6.01-M', x: 465, y: 350, width: 88, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '600-D', size: '6.01-M', x: 554, y: 350, width: 88, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '601-D', size: '6.01-M', x: 643, y: 350, width: 87, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },

            // --- FAR RIGHT VERTICAL STRIP (Portrait) â€” 133-S to 129-S | x=732, w=76, h=38, step=40 ---
            { id: '133-S', size: '3.01-M', x: 732, y: 260, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '132-S', size: '3.01-M', x: 732, y: 299, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '131-S', size: '3.01-M', x: 732, y: 338, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '130-S', size: '3.01-M', x: 732, y: 377, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '129-S', size: '3.01-M', x: 732, y: 416, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },

            // ============================================================
            // PREVIOUS UPPER PLOT SECTION â€” shifted +280 (562-D..553-D, 543-D..552-D, 128-S..124-S)
            // ============================================================

            // --- TOP ROW (Landscape) â€” 562-D to 553-D | y=290, h=85, w=70, step=71 ---
            { id: '562-D', size: '5.50-M', x: 20, y: 485, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '561-D', size: '5.50-M', x: 91, y: 485, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '560-D', size: '5.50-M', x: 162, y: 485, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '559-D', size: '5.50-M', x: 233, y: 485, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '558-D', size: '5.50-M', x: 304, y: 485, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '557-D', size: '5.50-M', x: 375, y: 485, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '556-D', size: '5.50-M', x: 446, y: 485, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '555-D', size: '5.50-M', x: 517, y: 485, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '554-D', size: '5.50-M', x: 588, y: 485, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '553-D', size: '5.50-M', x: 659, y: 485, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },

            // --- BOTTOM ROW (Landscape) â€” 543-D to 552-D | y=380, h=100, w=70, step=71 ---
            { id: '543-D', size: '6.01-M', x: 20, y: 575, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '544-D', size: '6.01-M', x: 91, y: 575, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '545-D', size: '6.01-M', x: 162, y: 575, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '546-D', size: '6.01-M', x: 233, y: 575, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '547-D', size: '6.01-M', x: 304, y: 575, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '548-D', size: '6.01-M', x: 375, y: 575, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '549-D', size: '6.01-M', x: 446, y: 575, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '550-D', size: '6.01-M', x: 517, y: 575, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '551-D', size: '6.01-M', x: 588, y: 575, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '552-D', size: '6.01-M', x: 659, y: 575, width: 70, height: 105, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },

            // --- RIGHT STRIP â€” 128-S to 124-S | x=732, y=290..450, w=76, h=38, step=40 ---
            { id: '128-S', size: '3.67-M', x: 732, y: 485, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '127-S', size: '3.67-M', x: 732, y: 524, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '126-S', size: '3.67-M', x: 732, y: 563, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '125-S', size: '3.67-M', x: 732, y: 602, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '124-S', size: '3.67-M', x: 732, y: 641, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },

            // ============================================================
            // EXISTING PARK SECTION â€” shifted +280 (original y + 280)
            // ============================================================

            // --- LEFT TOP ROW 533-D, 532-D, 531-D ---
            { id: '533-D', size: '5-M', dim: "27'-3\"x50'", x: 20, y: 710, width: 73, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '532-D', size: '5-M', dim: "27'-3\"x50'", x: 93, y: 710, width: 73, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '531-D', size: '5-M', dim: "27'-3\"x50'", x: 166, y: 710, width: 74, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },

            // --- MISSING PLOTS BENEATH 533-D TO 531-D ---
            { id: '2-F', size: '10.38-M', dim: "43'-9\"x64'-6\"", x: 20, y: 800, width: 95, height: 105, price: 4500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '1-F', size: '9-M', dim: "38'x64'-6\"", x: 115, y: 800, width: 119, height: 105, price: 4200000, status: 'available', type: 'residential', block: 'Block D' },

            // --- CENTER PARK ---
            {
                id: 'PARK-D',
                size: '46.89-M',
                dim: "111'-6\" x 114'-6\"",
                x: 240,
                y: 715,
                width: 300,
                height: 190,
                status: 'available',
                type: 'park',
                block: 'Block D'
            },

            // --- RIGHT TOP ROW 530-D, 529-D, 528-D ---
            { id: '530-D', size: '5-M', dim: "27'-3\"x50'", x: 540, y: 710, width: 64, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '529-D', size: '5-M', dim: "27'-3\"x50'", x: 604, y: 710, width: 64, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '528-D', size: '5-M', dim: "27'-3\"x50'", x: 668, y: 710, width: 64, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },

            // --- RIGHT BOTTOM ROW (Left side of Road) ---
            { id: '10.36-M', size: '10.36-M', dim: "43'-9\"x64'-6\"", x: 548, y: 800, width: 95, height: 105, price: 4500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '9-M', size: '9-M', dim: "38'x64'-6\"", x: 643, y: 800, width: 89, height: 105, price: 4200000, status: 'available', type: 'residential', block: 'Block D' },

            // --- FAR RIGHT STRIP â€” 123-S to 118-S | x=732, y=760..920 ---
            { id: '123S', size: '4-M', dim: "40'x27'-3\"", x: 732, y: 710, width: 76, height: 33, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '122S', size: '1.91-M', dim: "40'x13'", x: 732, y: 743, width: 76, height: 33, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '121S', size: '2.50-M', dim: "40'x17'", x: 732, y: 776, width: 76, height: 32, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '120S', size: '2.50-M', dim: "40'x17'", x: 732, y: 808, width: 76, height: 32, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '119S', size: '2.50-M', dim: "40'x17'", x: 732, y: 840, width: 76, height: 32, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '118S', size: '3.42-M', dim: "40'x23'-3\"", x: 732, y: 872, width: 76, height: 33, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },

            // ============================================================
            // MIDDLE SECTION â€” shifted +280 (original y + 280)
            // ============================================================

            // TOP ROW â€” 521-D to 508-D | y=740, h=85
            { id: '521-D', size: '5.49-M', x: 20, y: 935, width: 88, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '514-D', size: '5.49-M', x: 109, y: 935, width: 88, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '513-D', size: '5.49-M', x: 198, y: 935, width: 88, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '512-D', size: '5.49-M', x: 287, y: 935, width: 88, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '511-D', size: '5.49-M', x: 376, y: 935, width: 88, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '510-D', size: '5.49-M', x: 465, y: 935, width: 88, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '509-D', size: '5.49-M', x: 554, y: 935, width: 88, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '508-D', size: '5.49-M', x: 643, y: 935, width: 88, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },

            // BOTTOM ROW â€” 491-D to 507-D | y=830, h=85
            { id: '491-D', size: '5.49-M', x: 20, y: 1025, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '492-D', size: '5.49-M', x: 91, y: 1025, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '500-D', size: '5.49-M', x: 162, y: 1025, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '501-D', size: '5.49-M', x: 233, y: 1025, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '502-D', size: '5.49-M', x: 304, y: 1025, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '503-D', size: '5.49-M', x: 375, y: 1025, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '504-D', size: '5.49-M', x: 446, y: 1025, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '505-D', size: '5.49-M', x: 517, y: 1025, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '506-D', size: '5.49-M', x: 588, y: 1025, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '507-D', size: '5.49-M', x: 659, y: 1025, width: 70, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },

            // RIGHT STRIP â€” 117-S to 112-S | x=732, y=740..900, w=76, h=30, step=32
            { id: '117-S', size: '2.98-M', x: 732, y: 935, width: 76, height: 30, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '116-S', size: '2.98-M', x: 732, y: 965, width: 76, height: 30, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '115-S', size: '2.98-M', x: 732, y: 995, width: 76, height: 30, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '114-S', size: '2.98-M', x: 732, y: 1025, width: 76, height: 30, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '113-S', size: '2.98-M', x: 732, y: 1055, width: 76, height: 30, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '112-S', size: '2.98-M', x: 732, y: 1085, width: 76, height: 30, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },

            // ============================================================
            // BOTTOM SECTION â€” shifted +280 (original y + 280)
            // ============================================================

            // TOP LANDSCAPE ROW â€” 490-D to 474-D | y=970, h=75
            { id: '490-D', size: '5.49-M', x: 20, y: 1145, width: 69, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '482-D', size: '5.49-M', x: 90, y: 1145, width: 69, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '481-D', size: '5.49-M', x: 160, y: 1145, width: 69, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '480-D', size: '5.49-M', x: 230, y: 1145, width: 69, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '479-D', size: '5.49-M', x: 300, y: 1145, width: 69, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '478-D', size: '5.49-M', x: 370, y: 1145, width: 69, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '477-D', size: '5.49-M', x: 440, y: 1145, width: 69, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '476-D', size: '5.49-M', x: 510, y: 1145, width: 69, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '475-D', size: '5.49-M', x: 580, y: 1145, width: 69, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '474-D', size: '5.49-M', x: 650, y: 1145, width: 69, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block D' },

            // BOTTOM ROW â€” 86-S to 106-S | y=1050, h=100
            { id: '86-S', size: '2.50-M', x: 20, y: 1235, width: 55, height: 105, price: 2500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '87-S', size: '2.50-M', x: 78, y: 1235, width: 55, height: 105, price: 2500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '88-S', size: '2.50-M', x: 136, y: 1235, width: 55, height: 105, price: 2500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '89-S', size: '2.50-M', x: 194, y: 1235, width: 55, height: 105, price: 2500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '99-S', size: '2.50-M', x: 252, y: 1235, width: 55, height: 105, price: 2500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '100-S', size: '2.50-M', x: 310, y: 1235, width: 55, height: 105, price: 2500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '101-S', size: '2.50-M', x: 368, y: 1235, width: 55, height: 105, price: 2500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '102-S', size: '2.50-M', x: 426, y: 1235, width: 55, height: 105, price: 2500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '103-S', size: '2.50-M', x: 484, y: 1235, width: 55, height: 105, price: 2500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '104-S', size: '2.50-M', x: 542, y: 1235, width: 55, height: 105, price: 2500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '105-S', size: '2.50-M', x: 600, y: 1235, width: 55, height: 105, price: 2500000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '106-S', size: '2.50-M', x: 658, y: 1235, width: 55, height: 105, price: 2500000, status: 'available', type: 'residential', block: 'Block D' },

            // RIGHT VERTICAL STRIP â€” 111-S to 107-S | x=732, y=970, h=38, step=40
            { id: '111-S', size: '2.98-M', x: 732, y: 1145, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '110-S', size: '2.98-M', x: 732, y: 1184, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '109-S', size: '2.98-M', x: 732, y: 1223, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '108-S', size: '2.98-M', x: 732, y: 1262, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' },
            { id: '107-S', size: '2.98-M', x: 732, y: 1301, width: 76, height: 39, price: 2980000, status: 'available', type: 'residential', block: 'Block D' }
        ]
    },

    {
        type: 'custom-block',
        id: 'block-b-ext',
        name: 'Block B',
        gridArea: '13 / 1 / 14 / 2',
        style: 'height: 1900px; width: 890px; position: relative; justify-self: end; overflow: visible;',

        roads: [
            // --- LEFT VERTICAL ROAD (Full Height) ---
            { name: "ROAD 30' WIDE1", x: 100, y: 0, width: 40, height: 1310, isVertical: true },

            // --- NEW UPPER EXTENSION ROAD ---
            { name: "ROAD 40' WIDE2", x: 150, y: 750, width: 678, height: 40, isVertical: false },


            // Vertical road: LEFT of Masjid (between col-3 and col-4)
            { name: "ROAD 30' WIDE3", x: 326, y: 790, width: 50, height: 470, isVertical: true },
            // Horizontal road: BELOW the left grid and Masjid
            { name: "ROAD 30' WIDE4", x: 30, y: 1260, width: 420, height: 30, isVertical: false },

            // --- ROAD between new upper-upper extension and existing upper extension ---
            { name: "ROAD 30' WIDE5", x: 150, y: 510, width: 678, height: 40, isVertical: false },

            // --- ROAD between third extension (201-B) and second extension (184-B) ---
            { name: "ROAD 30' WIDE6", x: 150, y: 295, width: 678, height: 40, isVertical: false }
        ],
        plots: [
            // ========================
            // THIRD EXTENSION (TOPMOST) ï¿½ Engineering Reference Layout
            // ========================

            // --- Upper Row (landscape: 80 â†’ 69) â€” taller plots per design ---
            { id: '80-S', size: '3.63-M', x: 150, y: 130, width: 47, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '79-S', size: '2.98-M', x: 197, y: 130, width: 47, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '78-S', size: '2.98-M', x: 244, y: 130, width: 47, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '77-S', size: '2.98-M', x: 291, y: 130, width: 47, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '76-S', size: '2.98-M', x: 338, y: 130, width: 47, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '75-S', size: '2.98-M', x: 385, y: 130, width: 47, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '74-S', size: '2.98-M', x: 432, y: 130, width: 47, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '73-S', size: '2.98-M', x: 479, y: 130, width: 47, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '72-S', size: '2.98-M', x: 526, y: 130, width: 47, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '71-S', size: '2.98-M', x: 573, y: 130, width: 47, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '70-S', size: '2.98-M', x: 620, y: 130, width: 47, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '69-S', size: '2.98-M', x: 667, y: 130, width: 47, height: 80, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // --- Bottom Row (portrait: 201-B â†’ 193-B) â€” shorter per design ---
            { id: '201-B', size: '9.26-M', x: 150, y: 215, width: 76, height: 75, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '200-B', size: '5-M', x: 226, y: 215, width: 61, height: 75, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '199-B', size: '5-M', x: 287, y: 215, width: 61, height: 75, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '198-B', size: '5-M', x: 348, y: 215, width: 61, height: 75, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '197-B', size: '5-M', x: 409, y: 215, width: 61, height: 75, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '196-B', size: '5-M', x: 470, y: 215, width: 61, height: 75, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '195-B', size: '5-M', x: 531, y: 215, width: 61, height: 75, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '194-B', size: '5-M', x: 592, y: 215, width: 61, height: 75, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '193-B', size: '5-M', x: 653, y: 215, width: 61, height: 75, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // --- Small plot 689 (upper right, small height per design) ---
            { id: '68-S', size: '3-M', x: 714, y: 130, width: 110, height: 60, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // --- RYK CITY OFFICE (right side, spans more than bottom plots height) ---
            {
                id: 'RYK-OFFICE',
                size: '',
                x: 714,
                y: 192,
                width: 110,
                height: 100,
                status: 'park',
                type: 'non-plot',
                style: 'background: linear-gradient(135deg, #1a237e 0%, #283593 100%) !important; border: 2px solid #3f51b5 !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; text-align: center !important; color: #e8eaf6 !important; font-weight: 800 !important; font-size: 0.85rem !important; pointer-events: none !important; z-index: 1 !important; letter-spacing: 1px !important;',
                dim: 'RYK CITY\nOFFICE'
            },

            // ========================
            // SECOND EXTENSION (184-B ? 123-B, 176-B ? 122-B)
            // ========================

            // --- Top Row (184-B â†’ 192-B, 123-B) ---
            { id: '184-B', size: '6 Marla', x: 150, y: 340, width: 62, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '185-B', size: '6 Marla', x: 212, y: 340, width: 62, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '186-B', size: '6 Marla', x: 274, y: 340, width: 62, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '187-B', size: '6 Marla', x: 336, y: 340, width: 62, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '188-B', size: '6 Marla', x: 398, y: 340, width: 62, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '189-B', size: '6 Marla', x: 460, y: 340, width: 62, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '190-B', size: '6 Marla', x: 522, y: 340, width: 62, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '191-B', size: '6 Marla', x: 584, y: 340, width: 62, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '192-B', size: '6 Marla', x: 646, y: 340, width: 62, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '123-B', size: '10 Marla', x: 708, y: 340, width: 120, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // --- Bottom Row (176-B â†’ 168-B, 122-B) ---
            { id: '176-B', size: '6 Marla', x: 150, y: 415, width: 62, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '175-B', size: '6 Marla', x: 212, y: 415, width: 62, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '174-B', size: '6 Marla', x: 274, y: 415, width: 62, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '173-B', size: '6 Marla', x: 336, y: 415, width: 62, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '172-B', size: '6 Marla', x: 398, y: 415, width: 62, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '171-B', size: '6 Marla', x: 460, y: 415, width: 62, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '170-B', size: '6 Marla', x: 522, y: 415, width: 62, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '169-B', size: '6 Marla', x: 584, y: 415, width: 62, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '168-B', size: '6 Marla', x: 646, y: 415, width: 62, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '122-B', size: '10 Marla', x: 708, y: 415, width: 120, height: 90, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // ========================
            // PREVIOUS UPPER EXTENSION
            // ========================

            // --- LEFT GROUP (Top Row) â€” landscape ---
            { id: '162-B', size: '5 Marla', x: 150, y: 560, width: 52, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '163-B', size: '5 Marla', x: 202, y: 560, width: 52, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '164-B', size: '5 Marla', x: 254, y: 560, width: 52, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '165-B', size: '5 Marla', x: 306, y: 560, width: 52, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '166-B', size: '5 Marla', x: 358, y: 560, width: 52, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '167-B', size: '5 Marla', x: 410, y: 560, width: 52, height: 70, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // --- LEFT GROUP (Bottom Row) â€” portrait ---
            { id: '153-B', size: '5 Marla', x: 150, y: 635, width: 78, height: 110, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '152-B', size: '5 Marla', x: 228, y: 635, width: 78, height: 110, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '151-B', size: '5 Marla', x: 306, y: 635, width: 78, height: 110, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '150-B', size: '5 Marla', x: 384, y: 635, width: 78, height: 110, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // --- PARK AREA (Center Right) ---
            {
                id: 'PARK-EXT-B',
                size: '19.35-M',
                dim: "128' x 55'",
                x: 462,
                y: 560,
                width: 166,
                height: 185,
                status: 'park',
                type: 'park',
                style: 'flex-direction: column !important; background: radial-gradient(circle, #eaffea 50%, #c8e6c9 100%) !important; border: 2px dashed #4caf50 !important; display: flex !important; align-items: center !important; justify-content: center !important; text-align: center !important; color: #1b5e20 !important; font-weight: 800 !important; pointer-events: none !important; z-index: 1 !important;'
            },

            // --- RIGHT SIDE PLOTS ---
            { id: '121-B2', size: '2.5-M', x: 628, y: 560, width: 55, height: 63, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '121-B1', size: '2.5-M', x: 683, y: 560, width: 55, height: 63, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '121-B', size: '2.5-M', x: 738, y: 560, width: 90, height: 63, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '120-B', size: '15.50-M', x: 628, y: 628, width: 200, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '119-B', size: '15.01-M', x: 628, y: 689, width: 200, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // ========================
            // ZONE 1: LEFT COMPACT GRID
            // ========================

            // --- Column 1 Vertical Extension (183-B â†’ 154-B) â€” landscape, continuous above 149-B ---
            // height=46, step=47. 183-B top aligns with right-side plots at y=130. 154-B ends at y=787 (3px above 149-B).
            // h=56, step=59 â€” fills y=130 to y=1248 (just above horizontal road at y=1260)
            { id: '82-S', size: '2.98-M', x: 20, y: 80, width: 31, height: 50, status: 'available', block: 'Block B' },
            { id: '81-S', size: '3.63-M', x: 51, y: 80, width: 39, height: 50, status: 'available', block: 'Block B' },
            { id: '183-B', size: '5 Marla', x: 20, y: 130, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '182-B', size: '5 Marla', x: 20, y: 189, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '181-B', size: '5 Marla', x: 20, y: 248, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '180-B', size: '5 Marla', x: 20, y: 307, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '179-B', size: '5 Marla', x: 20, y: 366, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '178-B', size: '5 Marla', x: 20, y: 425, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '161-B', size: '5 Marla', x: 20, y: 484, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '160-B', size: '5 Marla', x: 20, y: 543, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '159-B', size: '5 Marla', x: 20, y: 602, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '158-B', size: '5 Marla', x: 20, y: 661, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '157-B', size: '5 Marla', x: 20, y: 720, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '156-B', size: '5 Marla', x: 20, y: 779, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '155-B', size: '5 Marla', x: 20, y: 838, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '154-B', size: '5 Marla', x: 20, y: 897, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // --- Column 1 (149-B..145-B) â€” portrait, leftmost ---
            { id: '149-B', size: '5.84-M', x: 20, y: 956, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '148-B', size: '3.75-M', x: 20, y: 1015, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '147-B', size: '3.75-M', x: 20, y: 1074, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '146-B', size: '3.75-M', x: 20, y: 1133, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '145-B', size: '3.75-M', x: 20, y: 1192, width: 70, height: 56, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // --- Column 2 (140-B..144-B) â€” x=80, w=73 ---
            { id: '140-B', size: '5.84-M', x: 150, y: 805, width: 80, height: 60, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '141-B', size: '3.75-M', x: 150, y: 873, width: 80, height: 95, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '142-B', size: '3.75-M', x: 150, y: 970, width: 80, height: 95, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '143-B', size: '3.75-M', x: 150, y: 1065, width: 80, height: 95, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '144-B', size: '3.75-M', x: 150, y: 1160, width: 80, height: 95, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // --- Column 3 (139-B..135-B) â€” x=153, w=73 ---
            { id: '139-B', size: '5.84-M', x: 240, y: 805, width: 80, height: 60, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '138-B', size: '3.75-M', x: 240, y: 873, width: 80, height: 95, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '137-B', size: '3.75-M', x: 240, y: 970, width: 80, height: 95, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '136-B', size: '3.75-M', x: 240, y: 1065, width: 80, height: 95, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '135-B', size: '3.75-M', x: 240, y: 1160, width: 80, height: 95, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // --- Column 4 (124-B..127-B) â€” x=276 ---
            { id: '124-B', size: '8-M', x: 376, y: 790, width: 84, height: 60, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '125-B', size: '5-M', x: 376, y: 855, width: 84, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '126-B', size: '5-M', x: 376, y: 960, width: 84, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '127-B', size: '7.33-M', x: 376, y: 1065, width: 84, height: 195, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // ========================
            // ZONE 2: MASJID (CENTER)
            // ========================
            {
                id: 'MASJID-B',
                size: '34.01-M',
                x: 460,
                y: 790,
                width: 168,
                height: 470,
                status: 'park',
                type: 'non-plot',
                style: `background-color: #fff0ff !important; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 90 L20 60 L30 50 L30 60 L40 60 L40 40 L50 20 L60 40 L60 60 L70 60 L70 50 L80 60 L80 90 Z M45 90 L45 70 A 5 5 0 0 1 55 70 L55 90 Z M25 90 L25 75 L35 75 L35 90 Z M65 90 L65 75 L75 75 L75 90 Z' fill='rgba(76, 175, 80, 0.4)' stroke='%2300ff00' stroke-width='2'/%3E%3Ccircle cx='50' cy='20' r='5' fill='none' stroke='%2300ff00' stroke-width='2'/%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg width='20' height='34.64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0L20 5.77v11.55L10 23.09 0 17.32V5.77z' fill='none' stroke='%23ff00ff' stroke-width='0.7' stroke-opacity='0.4' /%3E%3C/svg%3E") !important; background-size: 80% 80%, 20px 34.64px !important; background-position: center 20%, 0 0 !important; background-repeat: no-repeat, repeat !important; border: 2px dashed #4caf50 !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: flex-end !important; padding-bottom: 20px !important; color: #1b5e20 !important; font-weight: 800 !important; pointer-events: none !important; z-index: 1 !important;`
            },

            // ========================
            // ZONE 3: RIGHT PORTRAIT COLUMN (118-B..111-B) â€” 20-M each
            // ========================
            { id: '118-B', size: '20-M', x: 628, y: 790, width: 200, height: 113, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '117-B', size: '20-M', x: 628, y: 908, width: 200, height: 113, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '116-B', size: '20-M', x: 628, y: 1026, width: 200, height: 113, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '115-B', size: '20-M', x: 628, y: 1144, width: 200, height: 113, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '114-B', size: '20-M', x: 628, y: 1262, width: 200, height: 113, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '113-B', size: '20-M', x: 628, y: 1380, width: 200, height: 113, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '112-B', size: '20-M', x: 628, y: 1498, width: 200, height: 113, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '111-B', size: '20-M', x: 628, y: 1616, width: 200, height: 113, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },

            // ========================
            // BOTTOM ROW (134-B..128-B) â€” below horizontal road
            // ========================
            { id: '134-B', size: '4-M', x: 30, y: 1315, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '133-B', size: '4-M', x: 90, y: 1315, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '132-B', size: '4-M', x: 150, y: 1315, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '131-B', size: '4-M', x: 210, y: 1315, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '130-B', size: '4-M', x: 270, y: 1315, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '129-B', size: '5.07-M', x: 330, y: 1315, width: 55, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block B' },
            { id: '128-B', size: '4-M', x: 390, y: 1315, width: 58, height: 100, price: 3500000, status: 'available', type: 'residential', block: 'Block B' }
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
            if (section.style) el.style.cssText += section.style;
            // Use styled label span
            el.innerHTML = `<span class="road-label">${section.name}</span>`;
        } else if (section.type === 'block') {
            el.className = 'block-sector';
            if (section.style) el.style.cssText = section.style;
            // If no label, collapse padding vertically
            if (section.hideLabel) {
                el.style.paddingTop = '4px';
                el.style.paddingBottom = '4px';
            }

            if (!section.hideLabel) {
                const label = document.createElement('div');
                label.className = 'block-label';
                label.textContent = section.name;
                el.appendChild(label);
            }

            const grid = document.createElement('div');
            grid.className = 'plots-grid';
            if (section.hideLabel) grid.style.paddingTop = '0px';
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
            if (!section.hideLabel) {
                const label = document.createElement('div');
                label.className = 'block-label';
                label.textContent = section.name;
                el.appendChild(label);
            }

            let maxRight = 0;

            // Add Horizontal and Vertical Roads via Config
            if (section.roads) {
                section.roads.forEach(road => {
                    const roadEl = document.createElement('div');
                    roadEl.style.position = 'absolute';
                    const roadX = (road.x !== undefined && road.x !== null) ? road.x : 20;
                    roadEl.style.left = `${roadX}px`;
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

                    let roadWidthPx = 210;
                    // Check if vertical road
                    if (road.isVertical) {
                        roadWidthPx = road.width ? road.width : 40;
                        roadEl.style.width = `${roadWidthPx}px`;
                        roadEl.style.height = road.height ? `${road.height}px` : '400px';
                        roadEl.style.borderLeft = '2px dashed rgba(255, 255, 255, 0.2)';
                        roadEl.style.borderRight = '2px dashed rgba(255, 255, 255, 0.2)';
                        roadEl.style.writingMode = 'vertical-rl';
                        roadEl.style.textOrientation = 'mixed';
                    } else {
                        // Horizontal road (default)
                        roadWidthPx = road.width ? road.width : 210;
                        roadEl.style.width = `${roadWidthPx}px`;
                        roadEl.style.height = '50px';
                        roadEl.style.borderTop = '2px dashed rgba(255, 255, 255, 0.2)';
                        roadEl.style.borderBottom = '2px dashed rgba(255, 255, 255, 0.2)';
                    }

                    maxRight = Math.max(maxRight, roadX + roadWidthPx);

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

                const plotWidthPx = plot.width ? plot.width : 60;
                // Allow custom dimensions
                plotEl.style.width = `${plotWidthPx}px`;
                plotEl.style.height = plot.height ? `${plot.height}px` : '95px';

                maxRight = Math.max(maxRight, plot.x + plotWidthPx);

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

            // Dynamically ensure block is large enough for all children
            if (maxRight > 0) {
                // To keep some right padding and prevent exact edge collisions
                el.style.minWidth = (maxRight + 15) + 'px';
            }
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








