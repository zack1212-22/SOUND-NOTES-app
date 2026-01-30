self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});