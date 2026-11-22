/* Recolleat Build 45: preserve working Android installation and update offline assets. */
const CACHE='recolleat-mobile-v45';
const CORE=['./','./index.html','./recolleat-v45.css','./recolleat-v45.js'];
const OPTIONAL=['./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png','./install-check.html','./recolleat-release.txt'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await cache.addAll(CORE);
 await Promise.all(OPTIONAL.map(async path=>{try{await cache.add(path)}catch(error){console.warn('Optional offline asset unavailable',path,error)}}));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(key=>key.startsWith('recolleat-')&&key!==CACHE).map(key=>caches.delete(key)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;
 const networkFirst=event.request.mode==='navigate'||/\.(?:webmanifest|png|txt)$/.test(url.pathname);
 if(networkFirst){event.respondWith((async()=>{
  try{const response=await fetch(event.request);
   if(response.ok){const cache=await caches.open(CACHE);cache.put(event.request,response.clone()).catch(()=>{})}
   return response;
  }catch{return await caches.match(event.request)||(event.request.mode==='navigate'?await caches.match('./index.html'):null)||Response.error()}
 })());return}
 event.respondWith((async()=>{
  const cached=await caches.match(event.request);if(cached)return cached;
  const response=await fetch(event.request);if(response.ok){const cache=await caches.open(CACHE);cache.put(event.request,response.clone()).catch(()=>{})}
  return response;
 })());
});
