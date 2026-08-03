const CACHE_NAME = 'electronics-exam-v4011';
const ASSETS = [
  './',
  './index.html?v=4011',
  './css/styles.css?v=4011',
  './js/app.js?v=4011',
  './js/circuitSVGs.js?v=4011',
  './js/summaryData.js?v=4011',
  './js/data/subject1.js?v=4011',
  './js/data/subject2.js?v=4011',
  './js/data/subject3.js?v=4011',
  './js/data/subject4.js?v=4011',
  './manifest.json'
];

// Install Event - Force activate immediately
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Activate Event - Delete all old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network First, fallback to cache
self.addEventListener('fetch', (e) => {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;
  
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // Clone and put in cache if valid
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
