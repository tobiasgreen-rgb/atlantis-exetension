// content.js

// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Advanced Filtering
const filterData = (data, criteria) => {
    return data.filter(item => item.matches(criteria));
};

// Calendar Export to iCal Format
const exportToICal = (events) => {
    let icalData = 'BEGIN:VCALENDAR\nVERSION:2.0\n';
    events.forEach(event => {
        icalData += 'BEGIN:VEVENT\n';
        icalData += `SUMMARY:${event.title}\n`;
        icalData += `DTSTART:${event.start}\n`;
        icalData += `DTEND:${event.end}\n`;
        icalData += 'END:VEVENT\n';
    });
    icalData += 'END:VCALENDAR';
    return icalData;
};

// Notifications
const showNotification = (message) => {
    if (Notification.permission === 'granted') {
        new Notification('Notification', { body: message });
    }
};

// Performance Optimization with Lazy Loading and Caching
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                imgObserver.unobserve(img);
            }
        });
    });
    images.forEach(img => imgObserver.observe(img));
};

const cacheData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getDataFromCache = (key) => {
    return JSON.parse(localStorage.getItem(key));
};