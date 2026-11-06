// The static build replaces this version when its assets change.
const CACHE_VERSION = '35ebce683256';
const scope = self.registration.scope;
const CACHE = `aimforge-offline-${encodeURIComponent(scope)}-${CACHE_VERSION}`;
self.addEventListener('install', event => {
  event.waitUntil ( (async () => {
    const cache = await caches.open(CACHE);
    const response = await fetch(scope);
    if (!response.ok) throw new Error('Unable to cache game');
    await cache.put(scope, response.clone());
    const html = await response.text();
    const assets = [...new Set([...html.matchAll(/(?:src|href)="([^" ]+)"/g)]
      .map(match => new URL(match[1].replace(/&amp;/g, '&'), scope).href)
      .filter(url => url.startsWith(scope) && (url.includes('/_next/static/') || url.includes('/assets/'))))];
    const isStatic = assets.some(url => url.includes('/assets/'));
    const fonts = ['Barlow-Regular.ttf', 'BarlowCondensed-Bold.ttf'].map(name => new URL(`${isStatic ? 'public/' : ''}fonts/${name}`, scope).href);
    await cache.addAll([...assets, ...fonts]);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => event.waitUntil((async () => {
  const prefix = `aimforge-offline-${encodeURIComponent(scope)}-`;
  await Promise.all((await caches.keys()).filter(key => key.startsWith(prefix) && key !== CACHE).map(key => caches.delete(key)));
  await self.clients.claim();
})()));
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || !url.href.startsWith(scope)) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then(response => {
      if (response.ok) { const copy = response.clone(); void caches.open(CACHE).then(cache => cache.put(scope, copy)); }
      return response;
    }).catch(() => caches.match(scope)));
    return;
  }
  if (url.pathname.includes('/_next/static/') || url.pathname.includes('/assets/') || url.pathname.includes('/fonts/')) {
    event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      if (response.ok) { const copy = response.clone(); void caches.open(CACHE).then(cache => cache.put(event.request, copy)); }
      return response;
    })));
  }
});
