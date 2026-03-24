// popup.js

// Functionality for popup operations including theme switching and stats display.

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');
    const statsDisplay = document.getElementById('stats');

    // Function to switch themes
    themeSwitch.addEventListener('click', function () {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        }
    });

    // Function to fetch and display stats
    function fetchStats() {
        // Simulating stats fetching
        const stats = { clicks: 42, views: 100 };  // Example stats
        statsDisplay.innerText = `Clicks: ${stats.clicks}, Views: ${stats.views}`;
    }

    // Initial stats display
    fetchStats();
});
