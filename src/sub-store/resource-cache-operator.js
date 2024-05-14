/*!
 substore-tools - version: 1.5.0
 Build fullhash:e7b7807fee7eb5d15a3a, chunkhash:4290024271e8f13e3c42 (2024-05-14 12:22:25)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var T={3183:(i,s,a)=>{var p;typeof window!="undefined"?p=window:typeof a.g!="undefined"?p=a.g:typeof self!="undefined"?p=self:p={},i.exports=p}},C={};function u(i){var s=C[i];if(s!==void 0)return s.exports;var a=C[i]={exports:{}};return T[i](a,a.exports,u),a.exports}u.n=i=>{var s=i&&i.__esModule?()=>i.default:()=>i;return u.d(s,{a:s}),s},u.d=(i,s)=>{for(var a in s)u.o(s,a)&&!u.o(i,a)&&Object.defineProperty(i,a,{enumerable:!0,get:s[a]})},u.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(i){if(typeof window=="object")return window}}(),u.o=(i,s)=>Object.prototype.hasOwnProperty.call(i,s);var P={};(()=>{var i=u(3183),s=u.n(i);const a=$substore;class p{constructor(n,e){this.key=n,this.expires=e;const t=a.read(n);t?this.resourceCache=JSON.parse(t):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let n=!1;const e=new Date().getTime();Object.keys(this.resourceCache).forEach(t=>{const o=this.resourceCache[t];(!o.time||e-o.time>this.expires)&&(delete this.resourceCache[t],a.delete(`#${t}`),n=!0)}),n&&this._persist()}revokeIds(n){let e=!1;for(const t of n)delete this.resourceCache[t],e=!0;e&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){a.write(JSON.stringify(this.resourceCache),this.key)}get(n){const e=this.resourceCache[n]&&this.resourceCache[n].time;return e&&new Date().getTime()-e<=this.expires?this.resourceCache[n].data:null}set(n,e){this.resourceCache[n]={time:new Date().getTime(),data:e},this._persist()}}const A=p;var E=Math.pow,d=(r,n,e)=>new Promise((t,o)=>{var l=c=>{try{f(e.next(c))}catch(m){o(m)}},S=c=>{try{f(e.throw(c))}catch(m){o(m)}},f=c=>c.done?t(c.value):Promise.resolve(c.value).then(l,S);f((e=e.apply(r,n)).next())});const h=$substore,w={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"],vpsmmo:["Vpsmmo Technology Company Limited","1mcloud Technology Company Limited","AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],litespeed:["LITESPEED-COM","Litespeed Technology Company Limited","AS140810 Megacore Technology Company Limited"],m247:["M247 Europe SRL","3NT SOLUTIONS LLP","AS9009 M247 Europe SRL"]},M={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function y(r){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(r)}function b(r){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(r)}function D(r,n){const e=r.split("."),t=n.split(".");if(e.length<3||t.length<3)return!1;for(let o=0;o<3;o++)if(e[o]!==t[o])return!1;return!0}function R(r){const n=r.split(".");return n[n.length-1]}function G(r){return d(this,null,function*(){const n=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(r)}&type=A`,e={Accept:"application/dns-json"};try{const t=yield h.http.get({url:n,headers:e}),o=JSON.parse(t.body);if(o.Status!==0)throw new Error(`HTTP error! status: ${o.Status}`);return o.Answer?o.Answer.map(l=>`${l.data}`)[0]:""}catch(t){return""}})}function N(r){return d(this,null,function*(){return yield h.http.get(`https://dns.google/resolve?name=${r}`).then(e=>{const t=JSON.parse(e.body);if(t.Status===0){const o=t.Answer.find(l=>l.type===1);return o?o.data:""}return""})})}function $(r){return d(this,null,function*(){return yield h.http.get(`http://ip-api.com/json/${r}?fields=country`).then(e=>JSON.parse(e.body).country||"")})}function Y(r){return d(this,null,function*(){return yield h.http.get(`http://ip-api.com/json/${r}?fields=region,regionName`).then(e=>{const t=JSON.parse(e.body);return t.regionName&&t.region?`${t.regionName} (${t.region})`:""})})}function F(r){return d(this,null,function*(){return yield h.http.get(`http://ip-api.com/json/${r}?fields=isp`).then(e=>JSON.parse(e.body).isp||"")})}function k(r){return d(this,null,function*(){return yield h.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(r)}).then(e=>JSON.parse(e.body).map(o=>o.isp))})}function H(r){return d(this,null,function*(){return yield h.http.get(`http://ip-api.com/json/${r}?fields=isp,org`).then(e=>{const t=JSON.parse(e.body);return[t.isp||"",t.org||""].join(",")})})}function j(r,n){let e,t;const o=O(r);if((e=n.match(/^(.*?)\/(\d{1,2})$/))&&(t=O(e[1]))>=0){const l=E(2,32-parseInt(e[2]));return o>=t&&o<=t+l-1}return!1}function O(r){let n;if(n=r.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let e=0,t=1;for(let o=4;o>=1;o-=1)e+=t*parseInt(n[o]),t*=256;return e}return-1}var I=(r,n,e)=>new Promise((t,o)=>{var l=c=>{try{f(e.next(c))}catch(m){o(m)}},S=c=>{try{f(e.throw(c))}catch(m){o(m)}},f=c=>c.done?t(c.value):Promise.resolve(c.value).then(l,S);f((e=e.apply(r,n)).next())});const L="#sub-store-cached-dns",_=7*24*60*60*1e3,g=new A(L,_);function v(){return I(this,arguments,function*(r=[],n,e){const t=r.filter(o=>y(o.server)).map(o=>o.server);t.length>0&&g.revokeIds(t);for(const o of t)yield V(o);return r})}function V(r){return I(this,null,function*(){if(y(r)&&!g.get(r)){const e=yield N(r);e&&g.set(r,e)}})}s().operator=v})()})();})();
