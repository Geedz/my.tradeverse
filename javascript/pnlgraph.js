document.addEventListener("DOMContentLoaded", function () {
  // Set up Chart.js for SyncVerse P/L
  const ctx = document.getElementById('syncversePnlChart').getContext('2d');

  // Example data, replace with your own data
  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  const pnlData = [100, 120, 140, 160, 150, 170, 160];

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
        label: 'P/L (€)',
        data: pnlData,
        borderColor: '#8C07DD',
        backgroundColor: 'rgba(140, 7, 221, 0.1)',
        borderWidth: 2,
        tension: 0.3, // Smooth curve
        fill: true, // Fill the area under the line
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: false,
            text: 'Days',
            color: '#2f2f2f'
          },
          ticks: {
            color: '#2f2f2f'
          }
        },
        y: {
          title: {
            display: false,
            text: 'Profit/Loss (€)',
            color: '#2f2f2f'
          },
          ticks: {
            color: '#2f2f2f'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#2f2f2f'
          }
        }
      }
    }
  });
});
