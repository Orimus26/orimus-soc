// ORIMUS SOC Service Worker v2
// Fixes iOS standalone-launch blank screen.
// Strategy: precache on install, cache-first with network fallback and retry.

const CACHE_NAME = 'orimus-soc-v2';
const BASE = '/orimus-soc/';
const PRECACHE_URLS = [
  BASE,
  BASE + 'index.html',
  BASE + 'manifest.webmanifest',
  BASE + 'react.min.js',
  BASE + 'react-dom.min.js',
  BASE + 'app.compiled.js',
  BASE + 'icon-32.png',
  BASE + 'icon-180.png',
  BASE + 'icon-192.png',
  BASE + 'icon-512.png'
];

// Install: precache everything, force takeover
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Use individual cache.add calls so one 404 doesn't nuke the whole install
        return Promise.all(
          PRECACHE_URLS.map((url) =>
            cache.add(url).catch((err) => {
              console.warn('[SW] Failed to precache', url, err);
              // Continue anyway - we'll fetch live if needed
            })
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activate: clean old caches, take control of all clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: cache-first with network fallback, and on network success update cache
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        // Serve from cache, but refresh in background
        fetch(event.request).then((fresh) => {
          if (fresh && fresh.ok) {
            caches.open(CACHE_NAME).then((c) => c.put(event.request, fresh));
          }
        }).catch(() => {}); // ignore network errors in background refresh
        return cached;
      }

      // Not in cache - go to network, cache the response, return it
      return fetch(event.request).then((response) => {
        if (response && response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Network failed and nothing cached - for navigation requests, serve index.html
        if (event.request.mode === 'navigate') {
          return caches.match(BASE + 'index.html');
        }
        return new Response('', { status: 408, statusText: 'Offline and not cached' });
      });
    })
  );
});
