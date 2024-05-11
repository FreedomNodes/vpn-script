/*!
 substore-tools - version: 1.2.3
 Build fullhash:a82ebb81c7401aee1176, chunkhash:dfd79c1a88a03668f5fa (2024-05-11 22:34:22)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var w={3183:(s,c,u)=>{var m;typeof window!="undefined"?m=window:typeof u.g!="undefined"?m=u.g:typeof self!="undefined"?m=self:m={},s.exports=m}},y={};function p(s){var c=y[s];if(c!==void 0)return c.exports;var u=y[s]={exports:{}};return w[s](u,u.exports,p),u.exports}p.n=s=>{var c=s&&s.__esModule?()=>s.default:()=>s;return p.d(c,{a:c}),c},p.d=(s,c)=>{for(var u in c)p.o(c,u)&&!p.o(s,u)&&Object.defineProperty(s,u,{enumerable:!0,get:c[u]})},p.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(s){if(typeof window=="object")return window}}(),p.o=(s,c)=>Object.prototype.hasOwnProperty.call(s,c);var k={};(()=>{var s=p(3183),c=p.n(s);function u(e){return e&&e!=="null"&&e!=="undefined"}function m(e,r){return e.reduce((t,n)=>{const o=n[r];return t[o]||(t[o]=[]),t[o].push(n),t},{})}var P=Math.pow,g=(e,r,t)=>new Promise((n,o)=>{var a=i=>{try{f(t.next(i))}catch(l){o(l)}},d=i=>{try{f(t.throw(i))}catch(l){o(l)}},f=i=>i.done?n(i.value):Promise.resolve(i.value).then(a,d);f((t=t.apply(e,r)).next())});const C=null,H={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"],vpsmmo:["Vpsmmo Technology Company Limited","1mcloud Technology Company Limited","AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"]},j={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function J(e){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(e)}function U(e){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(e)}function B(e,r){const t=e.split("."),n=r.split(".");if(t.length<3||n.length<3)return!1;for(let o=0;o<3;o++)if(t[o]!==n[o])return!1;return!0}function K(e){const r=e.split(".");return r[r.length-1]}function q(e){return g(this,null,function*(){const r=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(e)}&type=A`,t={Accept:"application/dns-json"};try{const n=yield C.http.get({url:r,headers:t}),o=JSON.parse(n.body);if(o.Status!==0)throw new Error(`HTTP error! status: ${o.Status}`);return o.Answer?o.Answer.map(a=>`${a.data}`)[0]:""}catch(n){return""}})}function z(e){return g(this,null,function*(){return yield C.http.get(`https://dns.google/resolve?name=${e}`).then(t=>{const n=JSON.parse(t.body);if(n.Status===0){const o=n.Answer.find(a=>a.type===1);return o?o.data:""}return""})})}function x(e){return g(this,null,function*(){return yield C.http.get(`http://ip-api.com/json/${e}?fields=country`).then(t=>JSON.parse(t.body).country||"")})}function W(e){return g(this,null,function*(){return yield C.http.get(`http://ip-api.com/json/${e}?fields=region,regionName`).then(t=>{const n=JSON.parse(t.body);return n.regionName&&n.region?`${n.regionName} (${n.region})`:""})})}function X(e){return g(this,null,function*(){return yield C.http.get(`http://ip-api.com/json/${e}?fields=isp`).then(t=>JSON.parse(t.body).isp||"")})}function Q(e){return g(this,null,function*(){return yield C.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(e)}).then(t=>JSON.parse(t.body).map(o=>o.isp))})}function Z(e,r){let t,n;const o=_(e);if((t=r.match(/^(.*?)\/(\d{1,2})$/))&&(n=_(t[1]))>=0){const a=P(2,32-parseInt(t[2]));return o>=n&&o<=n+a-1}return!1}function _(e){let r;if(r=e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let t=0,n=1;for(let o=4;o>=1;o-=1)t+=n*parseInt(r[o]),n*=256;return t}return-1}const I=$substore;class L{constructor(r,t){this.key=r,this.expires=t;const n=I.read(r);n?this.resourceCache=JSON.parse(n):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let r=!1;const t=new Date().getTime();Object.keys(this.resourceCache).forEach(n=>{const o=this.resourceCache[n];(!o.time||t-o.time>this.expires)&&(delete this.resourceCache[n],I.delete(`#${n}`),r=!0)}),r&&this._persist()}revokeIds(r){let t=!1;for(const n of r)delete this.resourceCache[n],t=!0;t&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){I.write(JSON.stringify(this.resourceCache),this.key)}get(r){const t=this.resourceCache[r]&&this.resourceCache[r].time;return t&&new Date().getTime()-t<=this.expires?this.resourceCache[r].data:null}set(r,t){this.resourceCache[r]={time:new Date().getTime(),data:t},this._persist()}}const S=L;var V=Math.pow,h=(e,r,t)=>new Promise((n,o)=>{var a=i=>{try{f(t.next(i))}catch(l){o(l)}},d=i=>{try{f(t.throw(i))}catch(l){o(l)}},f=i=>i.done?n(i.value):Promise.resolve(i.value).then(a,d);f((t=t.apply(e,r)).next())});const R="#sub-store-cached-dns",M="#sub-store-cached-isp",D="#sub-store-cached-region",O=7*24*60*60*1e3,A=new S(R,O),v=new S(M,O),N=new S(D,O);function b(e,r){(e.type==="vmess"||e.type==="vless"||e.type==="trojan")&&(e.network==="ws"&&(e["ws-opts"]=e["ws-opts"]||{},e["ws-opts"].headers=e["ws-opts"].headers||{},e["ws-opts"].headers.Host=r),e.network==="grpc"&&(e["grpc-opts"]=e["grpc-opts"]||{},e["grpc-opts"]["grpc-service-name"]=e["grpc-opts"]["grpc-service-name"]||"",e.servername=r),e.network==="tcp"&&(e.servername=r),e.sni=r),u(e["skip-cert-verify"])||(e["skip-cert-verify"]=!0)}function ee(e,r){return parseRegex(e.regex).test(r.name)}function te(e,r){return e.ports.some(t=>t===r.port)}function ne(e,r){return h(this,null,function*(){return(yield Promise.all(e.ips.map(n=>F(r.server,n)))).some(n=>n)})}function re(e,r){return h(this,null,function*(){return(yield Promise.all(e.isps.map(n=>G(r.server,n)))).some(n=>n)})}function oe(e,r){return h(this,null,function*(){return(yield Promise.all(e.regions.map(n=>$(r.server,n)))).some(n=>n)})}function ie(e,r,t){return h(this,null,function*(){return(yield Promise.all(e.map(o=>o(r,t)))).every(o=>o)})}function $(e,r){return h(this,null,function*(){const t=yield E(e);try{let n="";const o=N.get(t);o?n=o:(n=yield getRegionFromIp(t),n&&N.set(t,n));const a=parseNameAndCode(n);if(a){const{name:d,code:f}=a,i=REGION[r.toLowerCase()];if(isRealValue(i)&&(i.some(l=>RegExp(`${l}`,"i").test(f))||i.some(l=>RegExp(`${l}`,"i").test(d))))return!0}}catch(n){return!1}return!1})}function G(e,r){return h(this,null,function*(){const t=yield E(e);let n="";const o=v.get(t);return o?n=o:(n=yield getISPFromIp(t),n&&v.set(t,n)),!!ISP[r].some(d=>RegExp(`${d}`,"i").test(n))})}function F(e,r){return h(this,null,function*(){const t=yield E(e);if(!isValidIpAddress(t))return!1;if(r.indexOf("/")<0)return!!(t===r||areFirstThreePartsEqual(t,r)&&getLastPartOfIP(r)==="*");let n,o;const a=T(t);if((n=r.match(/^(.*?)\/(\d{1,2})$/))&&(o=T(n[1]))>=0){const d=V(2,32-parseInt(n[2]));return a>=o&&a<=o+d-1}return!1})}function E(e){return h(this,null,function*(){let r=e;if(isDomain(e)){const t=A.get(e);if(t)r=t;else{const n=yield getIpFromDomain(e);r=n,n&&A.set(e,n)}}return r})}function T(e){let r;if(r=e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let t=0,n=1;for(let o=4;o>=1;o-=1)t+=n*parseInt(r[o]),n*=256;return t}return-1}function Y(e){const{sni:r}=$arguments;return e.map(t=>(b(t,r),t))}c().operator=Y})()})();})();
