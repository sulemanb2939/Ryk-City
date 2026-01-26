/**
 * DASHBOARD LOGIC
 * Populates dashboard with user data
 */

document.addEventListener('DOMContentLoaded', () => {
    // Auth check handles redirection automatically via auth.js
    // We just wait for data load

    // Allow a small delay to ensure DB is ready
    setTimeout(loadDashboardData, 100);
});

function loadDashboardData() {
    const user = window.RYK_DB.AuthDB.getCurrentUser();
    if (!user) return; // Should have been redirected

    // Get Elements
    const totalPlotsEl = document.getElementById('totalPlots');
    const totalPaidEl = document.getElementById('totalPaid');
    const remainingBalanceEl = document.getElementById('remainingBalance');
    const nextDueEl = document.getElementById('nextDue');
    const tableBody = document.getElementById('plotsTableBody');

    // Fetch User Data
    const purchasedPlotIds = user.purchasedPlots || [];
    const payments = window.RYK_DB.PaymentDB.getByUser(user.id);

    let totalPaid = 0;
    let totalRemaining = 0;

    // Calculate Totals
    payments.forEach(p => {
        if (p.status === 'paid') totalPaid += p.amount;
    });

    // Process Plots
    let plotsHtml = '';

    if (purchasedPlotIds.length === 0) {
        plotsHtml = '<tr><td colspan="6" class="text-center" style="padding: 30px; color: #aaa;">You haven\'t purchased any plots yet. <a href="../smart-map.html" style="color:var(--gold)">Browse Map</a></td></tr>';
    } else {
        purchasedPlotIds.forEach(plotId => {
            const plot = window.RYK_DB.PlotDB.getById(plotId);
            if (plot) {
                // Calculate Plot Specifics
                const plotPayments = payments.filter(p => p.plotId === plotId && p.status === 'paid');
                const paidForPlot = plotPayments.reduce((sum, p) => sum + p.amount, 0);
                const remaining = plot.pricing.totalPrice - paidForPlot;

                totalRemaining += remaining;

                // Format Currency
                const formatMoney = (amount) => new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumSignificantDigits: 3 }).format(amount);

                plotsHtml += `
                    <tr>
                        <td><strong>${plot.plotNumber}</strong></td>
                        <td>${plot.size.marla} Marla</td>
                        <td style="text-transform: capitalize">${plot.type}</td>
                        <td>${formatMoney(plot.pricing.totalPrice)}</td>
                        <td><span class="status-badge status-paid">Active</span></td>
                        <td><a href="my-plot.html?id=${plot.id}" class="btn btn-sm btn-outline">Details</a></td>
                    </tr>
                `;
            }
        });
    }

    // Update UI
    const formatter = new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumSignificantDigits: 3 });

    totalPlotsEl.textContent = purchasedPlotIds.length;
    totalPaidEl.textContent = formatter.format(totalPaid);
    remainingBalanceEl.textContent = formatter.format(totalRemaining);

    // Next Payment Logic (Mock)
    if (purchasedPlotIds.length > 0) {
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 15); // Random future date
        nextDueEl.textContent = nextDate.toLocaleDateString();
    } else {
        nextDueEl.textContent = 'None';
    }

    tableBody.innerHTML = plotsHtml;
}
