/**
 * AUTHENTICATION MODULE
 * Handles login, registration, and route protection
 */

// On Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on an auth page or dashboard
    const isAuthPage = document.body.classList.contains('auth-body');

    if (isAuthPage) {
        initAuthForms();
    } else {
        checkAuth();
        initLogout();
    }
});

function initAuthForms() {
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Basic Validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }

            // Attempt Login
            const result = window.RYK_DB.AuthDB.userLogin(email, password);

            if (result.success) {
                // Redirect based on role or to dashboard
                window.location.href = 'dashboard.html';
            } else {
                alert(result.message);
            }
        });
    }

    // Register Form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPass = document.getElementById('confirmPassword').value;

            if (password !== confirmPass) {
                alert('Passwords do not match');
                return;
            }

            // Check if user exists
            if (window.RYK_DB.UserDB.getByEmail(email)) {
                alert('Email already registered');
                return;
            }

            // Create User
            try {
                window.RYK_DB.UserDB.create({
                    name,
                    email,
                    password
                });
                alert('Registration successful! Please login.');
                window.location.href = 'login.html';
            } catch (err) {
                console.error(err);
                alert('Registration failed');
            }
        });
    }

    // Auto-fill from URL params (e.g. from Plot Booking)
    const urlParams = new URLSearchParams(window.location.search);
    const plotId = urlParams.get('plot');
    if (plotId && document.getElementById('plot-info')) {
        // Only if we build a tailored registration page logic
        console.log('Booking attempt for plot:', plotId);
    }
}

function checkAuth() {
    const user = window.RYK_DB.AuthDB.getCurrentUser();

    if (!user || !user.isAuthenticated) {
        // Redirect to login
        window.location.href = 'login.html';
    } else {
        // Update User Info in UI
        const nameElements = document.querySelectorAll('.user-name-display');
        nameElements.forEach(el => el.textContent = user.name);
    }
}

function initLogout() {
    const logoutBtns = document.querySelectorAll('.logout-btn');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.RYK_DB.AuthDB.logout();
            window.location.href = 'login.html';
        });
    });
}
