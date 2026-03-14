/**
 * ADMIN AUTHENTICATION
 * Handles secure admin login
 */

document.addEventListener('DOMContentLoaded', () => {

    // Login Form
    const loginForm = document.getElementById('adminLoginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Check Credentials against simulated DB
            const result = window.RYK_DB.AuthDB.adminLogin(username, password);

            if (result.success) {
                window.location.href = 'admin-dashboard.html';
            } else {
                alert('Invalid Admin Credentials');
            }
        });
    } else {
        // Protect Admin Routes
        checkAdminAuth();

        // Logout
        const logoutBtn = document.getElementById('adminLogout');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.RYK_DB.AuthDB.logout();
                window.location.href = 'admin-login.html';
            });
        }
    }
});

function checkAdminAuth() {
    const user = window.RYK_DB.AuthDB.getCurrentUser();

    // Strict check for admin role
    if (!user || user.role !== 'admin') {
        window.location.href = 'admin-login.html';
    }
}
