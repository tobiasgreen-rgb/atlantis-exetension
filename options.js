// options.js

// Function to load settings from chrome.storage.sync
function loadSettings() {
    chrome.storage.sync.get(['setting1', 'setting2'], function(items) {
        // Update UI with the loaded settings
        document.getElementById('setting1').value = items.setting1 || '';
        document.getElementById('setting2').value = items.setting2 || '';
        showStatusMessage('Settings loaded successfully.');
    });
}

// Function to save settings to chrome.storage.sync
function saveSettings() {
    const setting1 = document.getElementById('setting1').value;
    const setting2 = document.getElementById('setting2').value;

    chrome.storage.sync.set({setting1, setting2}, function() {
        showStatusMessage('Settings saved successfully.');
    });
}

// Function to reset settings to default
function resetSettings() {
    document.getElementById('setting1').value = '';
    document.getElementById('setting2').value = '';
    chrome.storage.sync.clear(function() {
        showStatusMessage('Settings reset to default.');
    });
}

// Function to export settings
function exportSettings() {
    chrome.storage.sync.get(null, function(items) {
        const jsonSettings = JSON.stringify(items);
        // You may present this data as a downloadable file or in a way the user can use.
        showStatusMessage('Settings exported.');
    });
}

// Function to clear cache
function clearCache() {
    // Add your cache clearing logic if any
    showStatusMessage('Cache cleared.');
}

// Function to show status messages
function showStatusMessage(message) {
    const statusElement = document.getElementById('status');
    statusElement.textContent = message;
    setTimeout(() => { statusElement.textContent = ''; }, 3000);
}

// Initialize the options page
document.addEventListener('DOMContentLoaded', loadSettings);

document.getElementById('saveButton').addEventListener('click', saveSettings);
document.getElementById('resetButton').addEventListener('click', resetSettings);
document.getElementById('exportButton').addEventListener('click', exportSettings);
document.getElementById('clearCacheButton').addEventListener('click', clearCache);