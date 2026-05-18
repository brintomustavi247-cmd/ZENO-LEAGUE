// Minimal service worker for development
// Keeps install/activate simple so registration succeeds in dev server
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// Optional fetch handler — passthrough by default
// No fetch handler — avoid no-op fetch listeners that add navigation overhead
