if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const f=e=>i(e,t),l={module:{uri:t},exports:o,require:f};s[t]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/2025_FF44_MAP_NEW_DAY1-DtQSo3EV.jpg",revision:null},{url:"assets/index-BRost_Va.js",revision:null},{url:"assets/index-DSJrd9ru.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"f5746138952e4acbc0ea0a3dd99fd7c3"},{url:"manifest.webmanifest",revision:"4251f55281e257ff31c58a109cbf68b3"},{url:"vite.svg",revision:"3682eca4fdab7d807d3042f21b6bfbc7"},{url:"vite.svg",revision:"3682eca4fdab7d807d3042f21b6bfbc7"},{url:"manifest.webmanifest",revision:"4251f55281e257ff31c58a109cbf68b3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
