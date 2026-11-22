/* Recolleat Build 44.2: offline-first, network-first HTML and install metadata. */
const CACHE='recolleat-mobile-v44-2';
const CORE=['./','./index.html','./recolleat-v44.css','./recolleat-v44.js'];
const OPTIONAL=['./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png','./install-check.html'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.addAll(CORE);
  await Promise.all(OPTIONAL.map(async path=>{
    try{await cache.add(path)}catch(err){console.warn('Optional offline asset unavailable',path,err)}
  }));
  await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key.startsWith('recolleat-')&&key!==CACHE).map(key=>caches.delete(key)));
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  const freshFirst=event.request.mode==='navigate'||/\.(?:webmanifest|png)$/.test(url.pathname);
  if(freshFirst){event.respondWith((async()=>{
    try{
      const response=await fetch(event.request);
      if(response.ok){const cache=await caches.open(CACHE);cache.put(event.request.mode==='navigate'?'./index.html':event.request,response.clone()).catch(()=>{});}
      return response;
    }catch{
      return await caches.match(event.request)||
      (event.request.mode==='navigate'?await caches.match('./index.html'):null)||Response.error();
    }
  })());return;}
  event.respondWith((async()=>{
    const cached=await caches.match(event.request);if(cached)return cached;
    const response=await fetch(event.request);
    if(response.ok){const cache=await caches.open(CACHE);cache.put(event.request,response.clone()).catch(()=>{});}
    return response;
  })());
});
