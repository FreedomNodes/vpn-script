/*
 fullhash:8078244a1c44f8b1932e, chunkhash:f632e5d94599d368caef, file:sub-store/set-sni.js
 author: Kien Tran
 */
(()=>{(()=>{"use strict";var N={3183:(i,a,c)=>{var m;typeof window!="undefined"?m=window:typeof c.g!="undefined"?m=c.g:typeof self!="undefined"?m=self:m={},i.exports=m}},O={};function l(i){var a=O[i];if(a!==void 0)return a.exports;var c=O[i]={exports:{}};return N[i](c,c.exports,l),c.exports}l.n=i=>{var a=i&&i.__esModule?()=>i.default:()=>i;return l.d(a,{a}),a},l.d=(i,a)=>{for(var c in a)l.o(a,c)&&!l.o(i,c)&&Object.defineProperty(i,c,{enumerable:!0,get:a[c]})},l.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(i){if(typeof window=="object")return window}}(),l.o=(i,a)=>Object.prototype.hasOwnProperty.call(i,a);var k={};(()=>{var i=l(3183),a=l.n(i);function c(n){return n&&n!=="null"&&n!=="undefined"}function m(n,r){return n.reduce((e,t)=>{const o=t[r];return e[o]||(e[o]=[]),e[o].push(t),e},{})}var L=Math.pow,C=(n,r,e)=>new Promise((t,o)=>{var s=u=>{try{d(e.next(u))}catch(h){o(h)}},p=u=>{try{d(e.throw(u))}catch(h){o(h)}},d=u=>u.done?t(u.value):Promise.resolve(u.value).then(s,p);d((e=e.apply(n,r)).next())});const g=null,H={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"]};function x(n){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(n)}function J(n){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(n)}function U(n,r){const e=n.split("."),t=r.split(".");if(e.length<3||t.length<3)return!1;for(let o=0;o<3;o++)if(e[o]!==t[o])return!1;return!0}function j(n){const r=n.split(".");return r[r.length-1]}function B(n){return C(this,null,function*(){const r=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(n)}&type=A`,e={Accept:"application/dns-json"};try{const t=yield g.http.get({url:r,headers:e}),o=JSON.parse(t.body);if(o.Status!==0)throw new Error(`HTTP error! status: ${o.Status}`);return o.Answer?o.Answer.map(s=>`${s.data}`)[0]:""}catch(t){return""}})}function K(n){return C(this,null,function*(){return yield g.http.get(`https://dns.google/resolve?name=${n}`).then(e=>{const t=JSON.parse(e.body);if(t.Status===0){const o=t.Answer.find(s=>s.type===1);return o?o.data:""}return""})})}function q(n){return C(this,null,function*(){return yield g.http.get(`http://ip-api.com/json/${n}?fields=country`).then(e=>JSON.parse(e.body).country||"")})}function z(n){return C(this,null,function*(){return yield g.http.get(`http://ip-api.com/json/${n}?fields=region,regionName`).then(e=>{const t=JSON.parse(e.body);return t.regionName&&t.region?`${t.regionName} (${t.region})`:""})})}function W(n){return C(this,null,function*(){return yield g.http.get(`http://ip-api.com/json/${n}?fields=isp`).then(e=>JSON.parse(e.body).isp||"")})}function X(n){return C(this,null,function*(){return yield g.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(n)}).then(e=>JSON.parse(e.body).map(o=>o.isp))})}function Q(n,r){let e,t;const o=_(n);if((e=r.match(/^(.*?)\/(\d{1,2})$/))&&(t=_(e[1]))>=0){const s=L(2,32-parseInt(e[2]));return o>=t&&o<=t+s-1}return!1}function _(n){let r;if(r=n.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let e=0,t=1;for(let o=4;o>=1;o-=1)e+=t*parseInt(r[o]),t*=256;return e}return-1}const I=$substore;class P{constructor(r,e){this.key=r,this.expires=e;const t=I.read(r);t?this.resourceCache=JSON.parse(t):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let r=!1;const e=new Date().getTime();Object.keys(this.resourceCache).forEach(t=>{const o=this.resourceCache[t];(!o.time||e-o.time>this.expires)&&(delete this.resourceCache[t],I.delete(`#${t}`),r=!0)}),r&&this._persist()}revokeIds(r){let e=!1;for(const t of r)delete this.resourceCache[t],e=!0;e&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){I.write(JSON.stringify(this.resourceCache),this.key)}get(r){const e=this.resourceCache[r]&&this.resourceCache[r].time;return e&&new Date().getTime()-e<=this.expires?this.resourceCache[r].data:null}set(r,e){this.resourceCache[r]={time:new Date().getTime(),data:e},this._persist()}}const y=P;var V=Math.pow,f=(n,r,e)=>new Promise((t,o)=>{var s=u=>{try{d(e.next(u))}catch(h){o(h)}},p=u=>{try{d(e.throw(u))}catch(h){o(h)}},d=u=>u.done?t(u.value):Promise.resolve(u.value).then(s,p);d((e=e.apply(n,r)).next())});const R="#sub-store-cached-dns",D="#sub-store-cached-isp",M="#sub-store-cached-region",S=7*24*60*60*1e3,A=new y(R,S),w=new y(D,S),v=new y(M,S);function b(n,r){n.type==="vmess"&&n.network==="ws"&&(n["ws-opts"]=n["ws-opts"]||{},n["ws-opts"].headers=n["ws-opts"].headers||{},n["ws-opts"].headers.Host=r),n.sni=r,c(n["skip-cert-verify"])||(n["skip-cert-verify"]=!0)}function Z(n,r){return parseRegex(n.regex).test(r.name)}function ee(n,r){return n.ports.some(e=>e===r.port)}function te(n,r){return f(this,null,function*(){return(yield Promise.all(n.ips.map(t=>G(r.server,t)))).some(t=>t)})}function ne(n,r){return f(this,null,function*(){return(yield Promise.all(n.isps.map(t=>F(r.server,t)))).some(t=>t)})}function re(n,r){return f(this,null,function*(){return(yield Promise.all(n.regions.map(t=>$(r.server,t)))).some(t=>t)})}function oe(n,r,e){return f(this,null,function*(){return(yield Promise.all(n.map(o=>o(r,e)))).every(o=>o)})}function $(n,r){return f(this,null,function*(){const e=yield E(n);try{let t="";const o=v.get(e);o?t=o:(t=yield getRegionFromIp(e),t&&v.set(e,t));const s=parseNameAndCode(t);if(s){const{name:p,code:d}=s;if(r.toLowerCase()===p.toLowerCase()||r.toLowerCase()===d.toLowerCase())return!0}}catch(t){return!1}return!1})}function F(n,r){return f(this,null,function*(){const e=yield E(n);let t="";const o=w.get(e);return o?t=o:(t=yield getISPFromIp(e),t&&w.set(e,t)),!!ISP[r].some(p=>RegExp(`${p}`,"i").test(t))})}function G(n,r){return f(this,null,function*(){const e=yield E(n);if(!isValidIpAddress(e))return!1;if(r.indexOf("/")<0)return!!(e===r||areFirstThreePartsEqual(e,r)&&getLastPartOfIP(r)==="*");let t,o;const s=T(e);if((t=r.match(/^(.*?)\/(\d{1,2})$/))&&(o=T(t[1]))>=0){const p=V(2,32-parseInt(t[2]));return s>=o&&s<=o+p-1}return!1})}function E(n){return f(this,null,function*(){let r=n;if(isDomain(n)){const e=A.get(n);if(e)r=e;else{const t=yield getIpFromDomain(n);r=t,t&&A.set(n,t)}}return r})}function T(n){let r;if(r=n.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let e=0,t=1;for(let o=4;o>=1;o-=1)e+=t*parseInt(r[o]),t*=256;return e}return-1}function Y(n){const{sni:r}=$arguments;return n.map(e=>(b(e,r),e))}a().operator=Y})()})();})();
