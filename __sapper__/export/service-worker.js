!function(){"use strict";const s=["client/chunk.ae9bbe36.js","client/rush.aca48f86.js","client/faq.e815e7c5.js","client/[slug].8f74add4.js","client/index.9556d3e3.js","client/chunk.744eb7d4.js","client/chunk.75583514.js","client/about.bd665994.js","client/index.d08ce268.js","client/client.cb4f5364.js","client/members.56708ecf.js"].concat(["service-worker-index.html","data/epsilon_delta_roster.csv","data/epsilon_delta_roster.json","favicon.ico","global.css","icons/garnett-unfilled.svg","icons/garnett.svg","icons/pillar-white.png","icons/pillar-white.xcf","icons/pillar.png","icons/pillar.svg","images/classes/0charter_class.jpg","images/classes/10kappa_class.jpg","images/classes/11lambda_class.jpg","images/classes/12mu_class.jpg","images/classes/13nu_class.jpg","images/classes/14xi_class.jpg","images/classes/15omicron_class.jpg","images/classes/16pi_class.jpg","images/classes/17rho_class.jpg","images/classes/18sigma_class.jpg","images/classes/19tau_class.jpg","images/classes/1alpha_class.jpg","images/classes/20upsilon_class.jpg","images/classes/2beta_class.jpg","images/classes/3gamma_class.jpg","images/classes/4delta_class.jpg","images/classes/5epsilon_class.jpg","images/classes/6zeta_class.jpg","images/classes/7eta_class.jpg","images/classes/8theta_class.jpg","images/classes/9iota_class.jpg","images/founders.jpg","images/hamntongs.png","images/pi_fun.jpg","images/sigma_fun.jpg","images/tau_cute.jpg","images/upsilon_class_2.jpg","manifest.json"]),e=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1562366733449").then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(async s=>{for(const e of s)"cache1562366733449"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const a=new URL(s.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&e.has(a.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline1562366733449").then(async e=>{try{const a=await fetch(s.request);return e.put(s.request,a.clone()),a}catch(a){const c=await e.match(s.request);if(c)return c;throw a}}))))})}();
