const CACHE_NAME = 'electronics-exam-v4002-force';
const ASSETS = [
  './',
  './index.html?v=4001',
  './css/styles.css?v=4001',
  './js/app.js?v=4001',
  './js/circuitSVGs.js',
  './js/summaryData.js',
  './js/data/subject1.js',
  './js/data/subject2.js',
  './js/data/subject3.js',
  './js/data/subject4.js',
  './manifest.json'
];

// Install Event - Force activate immediately
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Activate Event - Delete old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network First strategy to ensure latest 4000 questions update
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
