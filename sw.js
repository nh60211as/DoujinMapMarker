if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-DSJrd9ru.css",revision:null},{url:"assets/index-DWkQCtfO.js",revision:null},{url:"assets/PF42_circle_map-5JZBnACI.jpg",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"e4c978efe2e47263509b31401d3317ff"},{url:"manifest.webmanifest",revision:"b175613dfec398a8a210ea1cdb4cb890"},{url:"vite.svg",revision:"3682eca4fdab7d807d3042f21b6bfbc7"},{url:"vite.svg",revision:"3682eca4fdab7d807d3042f21b6bfbc7"},{url:"manifest.webmanifest",revision:"b175613dfec398a8a210ea1cdb4cb890"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
