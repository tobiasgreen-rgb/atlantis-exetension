// background.js

// Notification Handling
chrome.notifications.onCreated = function(notificationId) {
    console.log("Notification created:", notificationId);
};

// Cache Management with Expiry
const cacheName = 'my-cache';
const cacheExpiryTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

async function cacheData(url, data) {
    const cacheStorage = await caches.open(cacheName);
    await cacheStorage.put(url, new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    }));
    setTimeout(() => { 
        cacheStorage.delete(url); // Remove cache after expiry time
    }, cacheExpiryTime);
}

// Periodic Sync Functionality
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'syncData') {
        // Sync your data here
        console.log('Doing periodic sync...');
    }
});

// Register a one-time event to start periodic sync
chrome.alarms.create('syncData', { periodInMinutes: 60 });

// Message Listeners
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Message received:", request);
    sendResponse({ response: "Message received!" });
});
