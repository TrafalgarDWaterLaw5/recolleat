/* Recolleat Build 47: retain Android installation assets, refresh the offline cache for the new layout. */
const CACHE='recolleat-mobile-v47';
const CORE=['./','./index.html','./recolleat-v45.css','./recolleat-v47.js','./recolleat-v46.css','./recolleat-v47.css'];
const OPTIONAL=['./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png','./install-check.html','./recolleat-release.txt'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await cache.addAll(CORE);
 await Promise.all(OPTIONAL.map(async path=>{try{await cache.add(path)}catch(error){console.warn('Optional offline asset unavailable',path,error)}}));
})()));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
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
