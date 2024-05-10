/*!
 substore-tools - version: 1.2.0
 Build fullhash:2cbf25194291235b58d5, chunkhash:74d91bd0778eb75d8383 (2024-05-10 18:55:09)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var k={3183:(h,l,s)=>{var _;typeof window!="undefined"?_=window:typeof s.g!="undefined"?_=s.g:typeof self!="undefined"?_=self:_={},h.exports=_},8475:(h,l,s)=>{s.d(l,{A:()=>i});const _=$substore;class m{constructor(t,o){this.key=t,this.expires=o;const a=_.read(t);a?this.resourceCache=JSON.parse(a):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let t=!1;const o=new Date().getTime();Object.keys(this.resourceCache).forEach(a=>{const g=this.resourceCache[a];(!g.time||o-g.time>this.expires)&&(delete this.resourceCache[a],_.delete(`#${a}`),t=!0)}),t&&this._persist()}revokeIds(t){let o=!1;for(const a of t)delete this.resourceCache[a],o=!0;o&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){_.write(JSON.stringify(this.resourceCache),this.key)}get(t){const o=this.resourceCache[t]&&this.resourceCache[t].time;return o&&new Date().getTime()-o<=this.expires?this.resourceCache[t].data:null}set(t,o){this.resourceCache[t]={time:new Date().getTime(),data:o},this._persist()}}const i=m},423:(h,l,s)=>{s.d(l,{ru:()=>m});var _=(t,o,a)=>new Promise((g,I)=>{var S=y=>{try{P(a.next(y))}catch(N){I(N)}},v=y=>{try{P(a.throw(y))}catch(N){I(N)}},P=y=>y.done?g(y.value):Promise.resolve(y.value).then(S,v);P((a=a.apply(t,o)).next())});function m(){return _(this,null,function*(){const t=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(t)})}function i(){return _(this,null,function*(){const t=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(t)})}function O(t){return _(this,null,function*(){const o=normalizeString(t),a=yield i();let g="";for(const I in a)if(containsIgnoreCase(o,normalizeString(I))){g=I;break}return a[g]})}},1500:(h,l,s)=>{s.d(l,{Dq:()=>O,Mi:()=>I,S9:()=>v,Vo:()=>g,Zg:()=>t,l0:()=>o,qu:()=>a,sY:()=>y,u6:()=>N});var _=Math.pow,m=(p,C,c)=>new Promise((d,f)=>{var w=e=>{try{R(c.next(e))}catch(r){f(r)}},b=e=>{try{R(c.throw(e))}catch(r){f(r)}},R=e=>e.done?d(e.value):Promise.resolve(e.value).then(w,b);R((c=c.apply(p,C)).next())});const i=$substore,O={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"]},t={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function o(p){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(p)}function a(p){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(p)}function g(p,C){const c=p.split("."),d=C.split(".");if(c.length<3||d.length<3)return!1;for(let f=0;f<3;f++)if(c[f]!==d[f])return!1;return!0}function I(p){const C=p.split(".");return C[C.length-1]}function S(p){return m(this,null,function*(){const C=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(p)}&type=A`,c={Accept:"application/dns-json"};try{const d=yield i.http.get({url:C,headers:c}),f=JSON.parse(d.body);if(f.Status!==0)throw new Error(`HTTP error! status: ${f.Status}`);return f.Answer?f.Answer.map(w=>`${w.data}`)[0]:""}catch(d){return""}})}function v(p){return m(this,null,function*(){return yield i.http.get(`https://dns.google/resolve?name=${p}`).then(c=>{const d=JSON.parse(c.body);if(d.Status===0){const f=d.Answer.find(w=>w.type===1);return f?f.data:""}return""})})}function P(p){return m(this,null,function*(){return yield i.http.get(`http://ip-api.com/json/${p}?fields=country`).then(c=>JSON.parse(c.body).country||"")})}function y(p){return m(this,null,function*(){return yield i.http.get(`http://ip-api.com/json/${p}?fields=region,regionName`).then(c=>{const d=JSON.parse(c.body);return d.regionName&&d.region?`${d.regionName} (${d.region})`:""})})}function N(p){return m(this,null,function*(){return yield i.http.get(`http://ip-api.com/json/${p}?fields=isp`).then(c=>JSON.parse(c.body).isp||"")})}function x(p){return m(this,null,function*(){return yield i.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(p)}).then(c=>JSON.parse(c.body).map(f=>f.isp))})}function U(p,C){let c,d;const f=G(p);if((c=C.match(/^(.*?)\/(\d{1,2})$/))&&(d=G(c[1]))>=0){const w=_(2,32-parseInt(c[2]));return f>=d&&f<=d+w-1}return!1}function G(p){let C;if(C=p.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let c=0,d=1;for(let f=4;f>=1;f-=1)c+=d*parseInt(C[f]),d*=256;return c}return-1}},9085:(h,l,s)=>{s.d(l,{G:()=>_});function _(i){return i&&i!=="null"&&i!=="undefined"}function m(i,O){return i.reduce((t,o)=>{const a=o[O];return t[a]||(t[a]=[]),t[a].push(o),t},{})}},4173:(h,l,s)=>{s.d(l,{$S:()=>C,Ck:()=>U,Hd:()=>p,eD:()=>G,um:()=>c,xG:()=>x});var _=s(9085),m=s(1058),i=s(1500),O=s(8475),t=Math.pow,o=(e,r,u)=>new Promise((n,E)=>{var L=T=>{try{V(u.next(T))}catch(M){E(M)}},D=T=>{try{V(u.throw(T))}catch(M){E(M)}},V=T=>T.done?n(T.value):Promise.resolve(T.value).then(L,D);V((u=u.apply(e,r)).next())});const a="#sub-store-cached-dns",g="#sub-store-cached-isp",I="#sub-store-cached-region",S=7*24*60*60*1e3,v=new O.A(a,S),P=new O.A(g,S),y=new O.A(I,S);function N(e,r){e.type==="vmess"&&e.network==="ws"&&(e["ws-opts"]=e["ws-opts"]||{},e["ws-opts"].headers=e["ws-opts"].headers||{},e["ws-opts"].headers.Host=r),e.sni=r,isRealValue(e["skip-cert-verify"])||(e["skip-cert-verify"]=!0)}function x(e,r){return(0,m.r)(e.regex).test(r.name)}function U(e,r){return e.ports.some(u=>u===r.port)}function G(e,r){return o(this,null,function*(){return(yield Promise.all(e.ips.map(n=>w(r.server,n)))).some(n=>n)})}function p(e,r){return o(this,null,function*(){return(yield Promise.all(e.isps.map(n=>f(r.server,n)))).some(n=>n)})}function C(e,r){return o(this,null,function*(){return(yield Promise.all(e.regions.map(n=>d(r.server,n)))).some(n=>n)})}function c(e,r,u){return o(this,null,function*(){return(yield Promise.all(e.map(E=>E(r,u)))).every(E=>E)})}function d(e,r){return o(this,null,function*(){const u=yield b(e);try{let n="";const E=y.get(u);E?n=E:(n=yield(0,i.sY)(u),n&&y.set(u,n));const L=(0,m.Z)(n);if(L){const{name:D,code:V}=L,T=i.Zg[r.toLowerCase()];if((0,_.G)(T)&&(T.some(M=>RegExp(`${M}`,"i").test(V))||T.some(M=>RegExp(`${M}`,"i").test(D))))return!0}}catch(n){return!1}return!1})}function f(e,r){return o(this,null,function*(){const u=yield b(e);let n="";const E=P.get(u);return E?n=E:(n=yield(0,i.u6)(u),n&&P.set(u,n)),!!i.Dq[r].some(D=>RegExp(`${D}`,"i").test(n))})}function w(e,r){return o(this,null,function*(){const u=yield b(e);if(!(0,i.qu)(u))return!1;if(r.indexOf("/")<0)return!!(u===r||(0,i.Vo)(u,r)&&(0,i.Mi)(r)==="*");let n,E;const L=R(u);if((n=r.match(/^(.*?)\/(\d{1,2})$/))&&(E=R(n[1]))>=0){const D=t(2,32-parseInt(n[2]));return L>=E&&L<=E+D-1}return!1})}function b(e){return o(this,null,function*(){let r=e;if((0,i.l0)(e)){const u=v.get(e);if(u)r=u;else{const n=yield(0,i.S9)(e);r=n,n&&v.set(e,n)}}return r})}function R(e){let r;if(r=e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let u=0,n=1;for(let E=4;E>=1;E-=1)u+=n*parseInt(r[E]),n*=256;return u}return-1}},1058:(h,l,s)=>{s.d(l,{Z:()=>m,r:()=>_});function _(i){const O=i.lastIndexOf("/");return new RegExp(i.slice(1,O),i.slice(O+1))}function m(i){const O=/^([^\(]+) \(([^)]+)\)$/,t=i.match(O);return t?{name:t[1].trim(),code:t[2]}:null}}},$={};function A(h){var l=$[h];if(l!==void 0)return l.exports;var s=$[h]={exports:{}};return k[h](s,s.exports,A),s.exports}A.n=h=>{var l=h&&h.__esModule?()=>h.default:()=>h;return A.d(l,{a:l}),l},A.d=(h,l)=>{for(var s in l)A.o(l,s)&&!A.o(h,s)&&Object.defineProperty(h,s,{enumerable:!0,get:l[s]})},A.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(h){if(typeof window=="object")return window}}(),A.o=(h,l)=>Object.prototype.hasOwnProperty.call(h,l);var Y={};(()=>{var h=A(3183),l=A.n(h),s=A(9085),_=A(423),m=A(4173),i=(t,o,a)=>new Promise((g,I)=>{var S=y=>{try{P(a.next(y))}catch(N){I(N)}},v=y=>{try{P(a.throw(y))}catch(N){I(N)}},P=y=>y.done?g(y.value):Promise.resolve(y.value).then(S,v);P((a=a.apply(t,o)).next())});function O(t){return i(this,null,function*(){const{type:o}=$arguments,a=yield(0,_.ru)(),g=(0,s.G)(o)?a[o]:a[t[0].collectionName];if(!(0,s.G)(g))return t;const I=[];for(const S of t){const v=[];if((0,s.G)(g.regex)&&v.push(m.xG),(0,s.G)(g.ports)&&v.push(m.Ck),(0,s.G)(g.ips)&&v.push(m.eD),(0,s.G)(g.isps)&&v.push(m.Hd),(0,s.G)(g.regions)&&v.push(m.$S),v.length===0){I.push(S);continue}(yield(0,m.um)(v,g,S))&&I.push(S)}return I})}l().operator=O})()})();})();
