!function(){"use strict";const e=["client/rush.2b47f994.js","client/members.6adcd93e.js","client/faq.c37f8f1c.js","client/about.41d628eb.js","client/index.3e0c7fd8.js","client/[slug].3ada3f7d.js","client/chunk.d81d6316.js","client/client.998075a1.js","client/index.82262ce7.js"].concat(["service-worker-index.html","favicon.ico","global.css","icons/garnett-unfilled.svg","icons/garnett.svg","icons/pillar-white.png","icons/pillar-white.xcf","icons/pillar.png","images/pi_fun.jpg","images/sigma_fun.jpg","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1561911608300").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1561911608300"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1561911608300").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
