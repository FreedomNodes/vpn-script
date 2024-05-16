/*!
 substore-tools - version: 1.7.0
 Build fullhash:4938ccb7ce90c8a5cd2c, chunkhash:e9a2816886e4d29a5570 (2024-05-16 21:44:35)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var y={3183:(s,i,a)=>{var p;typeof window!="undefined"?p=window:typeof a.g!="undefined"?p=a.g:typeof self!="undefined"?p=self:p={},s.exports=p}},E={};function u(s){var i=E[s];if(i!==void 0)return i.exports;var a=E[s]={exports:{}};return y[s](a,a.exports,u),a.exports}u.n=s=>{var i=s&&s.__esModule?()=>s.default:()=>s;return u.d(i,{a:i}),i},u.d=(s,i)=>{for(var a in i)u.o(i,a)&&!u.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:i[a]})},u.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(s){if(typeof window=="object")return window}}(),u.o=(s,i)=>Object.prototype.hasOwnProperty.call(s,i);var M={};(()=>{var s=u(3183),i=u.n(s);const a=$substore;class p{constructor(o,e){this.key=o,this.expires=e;const t=a.read(o);t?this.resourceCache=JSON.parse(t):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let o=!1;const e=new Date().getTime();Object.keys(this.resourceCache).forEach(t=>{const r=this.resourceCache[t];(!r.time||e-r.time>this.expires)&&(delete this.resourceCache[t],a.delete(`#${t}`),o=!0)}),o&&this._persist()}revokeIds(o){let e=!1;for(const t of o)delete this.resourceCache[t],e=!0;e&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){a.write(JSON.stringify(this.resourceCache),this.key)}get(o){const e=this.resourceCache[o]&&this.resourceCache[o].time;return e&&new Date().getTime()-e<=this.expires?this.resourceCache[o].data:null}set(o,e){this.resourceCache[o]={time:new Date().getTime(),data:e},this._persist()}}const T=p;var A=Math.pow,d=(n,o,e)=>new Promise((t,r)=>{var l=c=>{try{f(e.next(c))}catch(S){r(S)}},C=c=>{try{f(e.throw(c))}catch(S){r(S)}},f=c=>c.done?t(c.value):Promise.resolve(c.value).then(l,C);f((e=e.apply(n,o)).next())});const h=$substore,P={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"],vpsmmo:["Vpsmmo Technology Company Limited","1mcloud Technology Company Limited","AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],litespeed:["LITESPEED-COM","Litespeed Technology Company Limited","AS140810 Megacore Technology Company Limited"],m247:["M247 Europe SRL","3NT SOLUTIONS LLP","AS9009 M247 Europe SRL"]},w={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function O(n){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(n)}function b(n){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(n)}function R(n,o){const e=n.split("."),t=o.split(".");if(e.length<3||t.length<3)return!1;for(let r=0;r<3;r++)if(e[r]!==t[r])return!1;return!0}function D(n){const o=n.split(".");return o[o.length-1]}function Y(n){return d(this,null,function*(){const o=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(n)}&type=A`,e={Accept:"application/dns-json"};try{const t=yield h.http.get({url:o,headers:e}),r=JSON.parse(t.body);if(r.Status!==0)throw new Error(`HTTP error! status: ${r.Status}`);return r.Answer?r.Answer.map(l=>`${l.data}`)[0]:""}catch(t){return""}})}function _(n){return d(this,null,function*(){return yield h.http.get(`https://dns.google/resolve?name=${n}`).then(e=>{const t=JSON.parse(e.body);if(t.Status===0){const r=t.Answer.find(l=>l.type===1);return r?r.data:""}return""})})}function G(n){return d(this,null,function*(){return yield h.http.get(`http://ip-api.com/json/${n}?fields=country`).then(e=>JSON.parse(e.body).country||"")})}function $(n){return d(this,null,function*(){return yield h.http.get(`http://ip-api.com/json/${n}?fields=region,regionName`).then(e=>{const t=JSON.parse(e.body);return t.regionName&&t.region?`${t.regionName} (${t.region})`:""})})}function F(n){return d(this,null,function*(){return yield h.http.get(`http://ip-api.com/json/${n}?fields=isp`).then(e=>JSON.parse(e.body).isp||"")})}function H(n){return d(this,null,function*(){return yield h.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(n)}).then(e=>JSON.parse(e.body).map(r=>r.isp))})}function U(n){return d(this,null,function*(){return yield h.http.get(`http://ip-api.com/json/${n}?fields=isp,org`).then(e=>{const t=JSON.parse(e.body);return[t.isp||"",t.org||""].join(",")})})}function k(n,o){let e,t;const r=g(n);if((e=o.match(/^(.*?)\/(\d{1,2})$/))&&(t=g(e[1]))>=0){const l=A(2,32-parseInt(e[2]));return r>=t&&r<=t+l-1}return!1}function g(n){let o;if(o=n.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let e=0,t=1;for(let r=4;r>=1;r-=1)e+=t*parseInt(o[r]),t*=256;return e}return-1}const K="schemaVersion",j="settings",x="subs",J="collections",B="files",z="modules",q="artifacts",N="#sub-store-cached-dns",W="#sub-store-cached-isp",X="#sub-store-cached-region",Q="#sub-store-cached-country",L=7*24*60*60*1e3;var I=(n,o,e)=>new Promise((t,r)=>{var l=c=>{try{f(e.next(c))}catch(S){r(S)}},C=c=>{try{f(e.throw(c))}catch(S){r(S)}},f=c=>c.done?t(c.value):Promise.resolve(c.value).then(l,C);f((e=e.apply(n,o)).next())});const m=new T(N,L);function v(){return I(this,arguments,function*(n=[],o,e){const t=n.filter(r=>O(r.server)).map(r=>r.server);t.length>0&&m.revokeIds(t);for(const r of t)yield V(r);return n})}function V(n){return I(this,null,function*(){if(O(n)&&!m.get(n)){const e=yield _(n);e&&m.set(n,e)}})}i().operator=v})()})();})();
