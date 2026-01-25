/**
 * RYK CITY HOUSING SCHEME - DATABASE SIMULATION
 * 
 * This file simulates the database using LocalStorage
 * In production, this will connect to MongoDB/PostgreSQL via REST API
 */

// Database keys
const DB_KEYS = {
    PLOTS: 'ryk_plots',
    USERS: 'ryk_users',
    PAYMENTS: 'ryk_payments',
    ADMIN: 'ryk_admin',
    CURRENT_USER: 'ryk_current_user'
};

// ===============================
// DATABASE INITIALIZATION
// ===============================

function initializeDatabase() {
    // Check if database already exists
    if (!localStorage.getItem(DB_KEYS.PLOTS)) {
        // Initialize with sample plots
        const samplePlots = generateSamplePlots();
        localStorage.setItem(DB_KEYS.PLOTS, JSON.stringify(samplePlots));
    }

    if (!localStorage.getItem(DB_KEYS.USERS)) {
        localStorage.setItem(DB_KEYS.USERS, JSON.stringify([]));
    }

    if (!localStorage.getItem(DB_KEYS.PAYMENTS)) {
        localStorage.setItem(DB_KEYS.PAYMENTS, JSON.stringify([]));
    }

    if (!localStorage.getItem(DB_KEYS.ADMIN)) {
        // Default admin account
        const admin = {
            username: 'admin',
            password: 'admin@123', // In production, this would be hashed
            email: 'admin@rykcity.com',
            role: 'admin'
        };
        localStorage.setItem(DB_KEYS.ADMIN, JSON.stringify(admin));
    }
}

// ===============================
// SAMPLE DATA GENERATOR
// ===============================

function generateSamplePlots() {
    const plots = [];
    let plotId = 1;

    // Residential Plots
    const residentialSizes = [
        { marla: 4, price: 2800000, downPayment: 700000, monthly: 58333, front: 30, depth: 60 },
        { marla: 5, price: 3500000, downPayment: 875000, monthly: 72917, front: 30, depth: 75 },
        { marla: 7, price: 4900000, downPayment: 1225000, monthly: 102083, front: 30, depth: 105 },
        { marla: 8, price: 5600000, downPayment: 1400000, monthly: 116667, front: 30, depth: 120 },
        { marla: 10, price: 8000000, downPayment: 2000000, monthly: 166667, front: 50, depth: 90 },
        { marla: 20, price: 16000000, downPayment: 4000000, monthly: 333333, front: 60, depth: 150 }
    ];

    // Generate residential plots (60 plots total, distributed across sizes)
    residentialSizes.forEach((size, idx) => {
        const count = idx === 1 ? 15 : 10; // More 5 marla plots
        for (let i = 0; i < count; i++) {
            plots.push({
                id: `PLOT-${String(plotId).padStart(4, '0')}`,
                plotNumber: `R-${size.marla}M-${String(i + 1).padStart(2, '0')}`,
                type: 'residential',
                size: {
                    marla: size.marla,
                    length: size.depth,
                    width: size.front,
                    sqft: size.marla * 225 // 1 marla = 225 sqft
                },
                pricing: {
                    totalPrice: size.price,
                    downPayment: size.downPayment,
                    monthlyInstallment: size.monthly,
                    installmentMonths: 36
                },
                status: i < 3 ? 'available' : (i < 5 ? 'reserved' : 'sold'),
                location: {
                    block: `Block ${String.fromCharCode(65 + (idx % 4))}`, // A, B, C, D
                    phase: 'Phase 1',
                    coordinates: {
                        x: (idx % 4) * 200 + (i % 5) * 50,
                        y: Math.floor(i / 5) * 80
                    }
                },
                images: [
                    'assets/images/plots/plot-sample-1.jpg',
                    'assets/images/plots/plot-sample-2.jpg'
                ],
                features: ['Corner Plot', 'Near Park', 'Wide Road Access', 'Underground Utilities'],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });
            plotId++;
        }
    });

    // Commercial Plots
    const commercialSizes = [
        { marla: 2.50, price: 2625000, monthly: 54688, front: 20, depth: 56 },
        { marla: 3.01, price: 3160500, monthly: 65844, front: 22, depth: 61 },
        { marla: 2.98, price: 3427000, monthly: 71396, front: 21, depth: 63 }
    ];

    // Generate commercial plots (15 plots)
    commercialSizes.forEach((size, idx) => {
        for (let i = 0; i < 5; i++) {
            plots.push({
                id: `PLOT-${String(plotId).padStart(4, '0')}`,
                plotNumber: `C-${size.marla}M-${String(i + 1).padStart(2, '0')}`,
                type: 'commercial',
                size: {
                    marla: size.marla,
                    length: size.depth,
                    width: size.front,
                    sqft: size.marla * 225
                },
                pricing: {
                    totalPrice: size.price,
                    downPayment: 0, // Can be customized
                    monthlyInstallment: size.monthly,
                    installmentMonths: 36
                },
                status: i < 2 ? 'available' : (i < 3 ? 'reserved' : 'sold'),
                location: {
                    block: 'Commercial Block',
                    phase: 'Phase 1',
                    coordinates: {
                        x: 600 + i * 40,
                        y: idx * 70
                    }
                },
                images: [
                    'assets/images/plots/commercial-sample-1.jpg',
                    'assets/images/plots/commercial-sample-2.jpg'
                ],
                features: ['Prime Location', 'Main Boulevard', 'High Footfall', 'Parking Available'],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });
            plotId++;
        }
    });

    return plots;
}

// ===============================
// PLOT OPERATIONS
// ===============================

const PlotDB = {
    // Get all plots
    getAll() {
        const plots = localStorage.getItem(DB_KEYS.PLOTS);
        return plots ? JSON.parse(plots) : [];
    },

    // Get plot by ID
    getById(id) {
        const plots = this.getAll();
        return plots.find(plot => plot.id === id);
    },

    // Get plot by plot number
    getByPlotNumber(plotNumber) {
        const plots = this.getAll();
        return plots.find(plot => plot.plotNumber === plotNumber);
    },

    // Get plots by status
    getByStatus(status) {
        const plots = this.getAll();
        return plots.filter(plot => plot.status === status);
    },

    // Get plots by type
    getByType(type) {
        const plots = this.getAll();
        return plots.filter(plot => plot.type === type);
    },

    // Create plot
    create(plotData) {
        const plots = this.getAll();
        const newPlot = {
            id: `PLOT-${String(plots.length + 1).padStart(4, '0')}`,
            ...plotData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        plots.push(newPlot);
        localStorage.setItem(DB_KEYS.PLOTS, JSON.stringify(plots));
        return newPlot;
    },

    // Update plot
    update(id, updateData) {
        const plots = this.getAll();
        const index = plots.findIndex(plot => plot.id === id);
        if (index !== -1) {
            plots[index] = {
                ...plots[index],
                ...updateData,
                updatedAt: new Date().toISOString()
            };
            localStorage.setItem(DB_KEYS.PLOTS, JSON.stringify(plots));
            return plots[index];
        }
        return null;
    },

    // Delete plot
    delete(id) {
        const plots = this.getAll();
        const filtered = plots.filter(plot => plot.id !== id);
        localStorage.setItem(DB_KEYS.PLOTS, JSON.stringify(filtered));
        return true;
    },

    // Update plot status
    updateStatus(id, status) {
        return this.update(id, { status });
    },

    // Get statistics
    getStats() {
        const plots = this.getAll();
        return {
            total: plots.length,
            available: plots.filter(p => p.status === 'available').length,
            sold: plots.filter(p => p.status === 'sold').length,
            reserved: plots.filter(p => p.status === 'reserved').length,
            residential: plots.filter(p => p.type === 'residential').length,
            commercial: plots.filter(p => p.type === 'commercial').length
        };
    }
};

// ===============================
// USER OPERATIONS
// ===============================

const UserDB = {
    // Get all users
    getAll() {
        const users = localStorage.getItem(DB_KEYS.USERS);
        return users ? JSON.parse(users) : [];
    },

    // Get user by ID
    getById(id) {
        const users = this.getAll();
        return users.find(user => user.id === id);
    },

    // Get user by email
    getByEmail(email) {
        const users = this.getAll();
        return users.find(user => user.email === email);
    },

    // Create user
    create(userData) {
        const users = this.getAll();
        const newUser = {
            id: `USER-${String(users.length + 1).padStart(4, '0')}`,
            ...userData,
            role: 'customer',
            purchasedPlots: [],
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
        };
        users.push(newUser);
        localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));
        return newUser;
    },

    // Update user
    update(id, updateData) {
        const users = this.getAll();
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users[index] = {
                ...users[index],
                ...updateData
            };
            localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));
            return users[index];
        }
        return null;
    },

    // Delete user
    delete(id) {
        const users = this.getAll();
        const filtered = users.filter(user => user.id !== id);
        localStorage.setItem(DB_KEYS.USERS, JSON.stringify(filtered));
        return true;
    },

    // Assign plot to user
    assignPlot(userId, plotId) {
        const user = this.getById(userId);
        if (user) {
            if (!user.purchasedPlots.includes(plotId)) {
                user.purchasedPlots.push(plotId);
                this.update(userId, { purchasedPlots: user.purchasedPlots });
                PlotDB.updateStatus(plotId, 'sold');
                return true;
            }
        }
        return false;
    }
};

// ===============================
// PAYMENT OPERATIONS
// ===============================

const PaymentDB = {
    // Get all payments
    getAll() {
        const payments = localStorage.getItem(DB_KEYS.PAYMENTS);
        return payments ? JSON.parse(payments) : [];
    },

    // Get payment by ID
    getById(id) {
        const payments = this.getAll();
        return payments.find(payment => payment.id === id);
    },

    // Get payments by user
    getByUser(userId) {
        const payments = this.getAll();
        return payments.filter(payment => payment.userId === userId);
    },

    // Get payments by plot
    getByPlot(plotId) {
        const payments = this.getAll();
        return payments.filter(payment => payment.plotId === plotId);
    },

    // Create payment
    create(paymentData) {
        const payments = this.getAll();
        const newPayment = {
            id: `PAY-${String(payments.length + 1).padStart(4, '0')}`,
            ...paymentData,
            createdAt: new Date().toISOString()
        };
        payments.push(newPayment);
        localStorage.setItem(DB_KEYS.PAYMENTS, JSON.stringify(payments));
        return newPayment;
    },

    // Update payment
    update(id, updateData) {
        const payments = this.getAll();
        const index = payments.findIndex(payment => payment.id === id);
        if (index !== -1) {
            payments[index] = {
                ...payments[index],
                ...updateData
            };
            localStorage.setItem(DB_KEYS.PAYMENTS, JSON.stringify(payments));
            return payments[index];
        }
        return null;
    },

    // Calculate payment details
    calculateDetails(plotId, userId) {
        const payments = this.getByPlot(plotId).filter(p => p.userId === userId && p.status === 'paid');
        const plot = PlotDB.getById(plotId);

        if (!plot) return null;

        const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);
        const remainingBalance = plot.pricing.totalPrice - totalPaid;
        const paidInstallments = payments.filter(p => p.paymentType === 'installment').length;
        const remainingInstallments = plot.pricing.installmentMonths - paidInstallments;

        return {
            totalPaid,
            remainingBalance,
            paidInstallments,
            remainingInstallments,
            totalInstallments: plot.pricing.installmentMonths,
            monthlyAmount: plot.pricing.monthlyInstallment,
            progressPercentage: ((totalPaid / plot.pricing.totalPrice) * 100).toFixed(2)
        };
    }
};

// ===============================
// AUTHENTICATION
// ===============================

const AuthDB = {
    // Admin login
    adminLogin(username, password) {
        const admin = JSON.parse(localStorage.getItem(DB_KEYS.ADMIN));
        if (admin && admin.username === username && admin.password === password) {
            localStorage.setItem(DB_KEYS.CURRENT_USER, JSON.stringify({ ...admin, isAuthenticated: true }));
            return { success: true, user: admin };
        }
        return { success: false, message: 'Invalid credentials' };
    },

    // User login
    userLogin(email, password) {
        const user = UserDB.getByEmail(email);
        if (user && user.password === password) {
            UserDB.update(user.id, { lastLogin: new Date().toISOString() });
            localStorage.setItem(DB_KEYS.CURRENT_USER, JSON.stringify({ ...user, isAuthenticated: true }));
            return { success: true, user };
        }
        return { success: false, message: 'Invalid credentials' };
    },

    // Get current user
    getCurrentUser() {
        const user = localStorage.getItem(DB_KEYS.CURRENT_USER);
        return user ? JSON.parse(user) : null;
    },

    // Check if authenticated
    isAuthenticated() {
        const user = this.getCurrentUser();
        return user && user.isAuthenticated;
    },

    // Logout
    logout() {
        localStorage.removeItem(DB_KEYS.CURRENT_USER);
    }
};

// ===============================
// INITIALIZE ON LOAD
// ===============================

// Initialize database when script loads
initializeDatabase();

// Export for use in other files
window.RYK_DB = {
    PlotDB,
    UserDB,
    PaymentDB,
    AuthDB,
    initializeDatabase
};
