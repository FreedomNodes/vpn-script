/*
 fullhash:e50b882721b13a1d2455, chunkhash:19674aab70a1ef87956a, file:sub-store/resource-cache-operator.js
 author: Kien Tran
 */
(()=>{(()=>{"use strict";var A={3183:(i,s,a)=>{var p;typeof window!="undefined"?p=window:typeof a.g!="undefined"?p=a.g:typeof self!="undefined"?p=self:p={},i.exports=p}},y={};function u(i){var s=y[i];if(s!==void 0)return s.exports;var a=y[i]={exports:{}};return A[i](a,a.exports,u),a.exports}u.n=i=>{var s=i&&i.__esModule?()=>i.default:()=>i;return u.d(s,{a:s}),s},u.d=(i,s)=>{for(var a in s)u.o(s,a)&&!u.o(i,a)&&Object.defineProperty(i,a,{enumerable:!0,get:s[a]})},u.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(i){if(typeof window=="object")return window}}(),u.o=(i,s)=>Object.prototype.hasOwnProperty.call(i,s);var V={};(()=>{var i=u(3183),s=u.n(i);const a=$substore;class p{constructor(t,e){this.key=t,this.expires=e;const n=a.read(t);n?this.resourceCache=JSON.parse(n):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let t=!1;const e=new Date().getTime();Object.keys(this.resourceCache).forEach(n=>{const o=this.resourceCache[n];(!o.time||e-o.time>this.expires)&&(delete this.resourceCache[n],a.delete(`#${n}`),t=!0)}),t&&this._persist()}revokeIds(t){let e=!1;for(const n of t)delete this.resourceCache[n],e=!0;e&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){a.write(JSON.stringify(this.resourceCache),this.key)}get(t){const e=this.resourceCache[t]&&this.resourceCache[t].time;return e&&new Date().getTime()-e<=this.expires?this.resourceCache[t].data:null}set(t,e){this.resourceCache[t]={time:new Date().getTime(),data:e},this._persist()}}const T=p;var E=Math.pow,f=(r,t,e)=>new Promise((n,o)=>{var l=c=>{try{d(e.next(c))}catch(h){o(h)}},g=c=>{try{d(e.throw(c))}catch(h){o(h)}},d=c=>c.done?n(c.value):Promise.resolve(c.value).then(l,g);d((e=e.apply(r,t)).next())});const m=$substore,P={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"]};function S(r){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(r)}function b(r){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(r)}function M(r,t){const e=r.split("."),n=t.split(".");if(e.length<3||n.length<3)return!1;for(let o=0;o<3;o++)if(e[o]!==n[o])return!1;return!0}function D(r){const t=r.split(".");return t[t.length-1]}function R(r){return f(this,null,function*(){const t=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(r)}&type=A`,e={Accept:"application/dns-json"};try{const n=yield m.http.get({url:t,headers:e}),o=JSON.parse(n.body);if(o.Status!==0)throw new Error(`HTTP error! status: ${o.Status}`);return o.Answer?o.Answer.map(l=>`${l.data}`)[0]:""}catch(n){return""}})}function N(r){return f(this,null,function*(){return yield m.http.get(`https://dns.google/resolve?name=${r}`).then(e=>{const n=JSON.parse(e.body);if(n.Status===0){const o=n.Answer.find(l=>l.type===1);return o?o.data:""}return""})})}function $(r){return f(this,null,function*(){return yield m.http.get(`http://ip-api.com/json/${r}?fields=country`).then(e=>JSON.parse(e.body).country||"")})}function G(r){return f(this,null,function*(){return yield m.http.get(`http://ip-api.com/json/${r}?fields=region,regionName`).then(e=>{const n=JSON.parse(e.body);return n.regionName&&n.region?`${n.regionName} (${n.region})`:""})})}function F(r){return f(this,null,function*(){return yield m.http.get(`http://ip-api.com/json/${r}?fields=isp`).then(e=>JSON.parse(e.body).isp||"")})}function Y(r){return f(this,null,function*(){return yield m.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(r)}).then(e=>JSON.parse(e.body).map(o=>o.isp))})}function k(r,t){let e,n;const o=I(r);if((e=t.match(/^(.*?)\/(\d{1,2})$/))&&(n=I(e[1]))>=0){const l=E(2,32-parseInt(e[2]));return o>=n&&o<=n+l-1}return!1}function I(r){let t;if(t=r.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let e=0,n=1;for(let o=4;o>=1;o-=1)e+=n*parseInt(t[o]),n*=256;return e}return-1}var O=(r,t,e)=>new Promise((n,o)=>{var l=c=>{try{d(e.next(c))}catch(h){o(h)}},g=c=>{try{d(e.throw(c))}catch(h){o(h)}},d=c=>c.done?n(c.value):Promise.resolve(c.value).then(l,g);d((e=e.apply(r,t)).next())});const _="#sub-store-cached-dns",L=7*24*60*60*1e3,C=new T(_,L);function v(r){return O(this,null,function*(){const t=r.filter(e=>S(e.server)).map(e=>e.server);t.length>0&&C.revokeIds(t);for(const e of t)yield w(e);return r})}function w(r){return O(this,null,function*(){if(S(r)&&!C.get(r)){const e=yield N(r);e&&C.set(r,e)}})}s().operator=v})()})();})();
