/*!
 substore-tools - version: 1.2.1
 Build fullhash:233b68276705bfbb4b4a, chunkhash:09f9473146755cfa4910 (2024-05-11 14:09:42)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var Y={3183:(h,l,o)=>{var _;typeof window!="undefined"?_=window:typeof o.g!="undefined"?_=o.g:typeof self!="undefined"?_=self:_={},h.exports=_},8475:(h,l,o)=>{o.d(l,{A:()=>i});const _=$substore;class m{constructor(t,s){this.key=t,this.expires=s;const a=_.read(t);a?this.resourceCache=JSON.parse(a):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let t=!1;const s=new Date().getTime();Object.keys(this.resourceCache).forEach(a=>{const O=this.resourceCache[a];(!O.time||s-O.time>this.expires)&&(delete this.resourceCache[a],_.delete(`#${a}`),t=!0)}),t&&this._persist()}revokeIds(t){let s=!1;for(const a of t)delete this.resourceCache[a],s=!0;s&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){_.write(JSON.stringify(this.resourceCache),this.key)}get(t){const s=this.resourceCache[t]&&this.resourceCache[t].time;return s&&new Date().getTime()-s<=this.expires?this.resourceCache[t].data:null}set(t,s){this.resourceCache[t]={time:new Date().getTime(),data:s},this._persist()}}const i=m},423:(h,l,o)=>{o.d(l,{ru:()=>m});var _=(t,s,a)=>new Promise((O,A)=>{var g=E=>{try{P(a.next(E))}catch(T){A(T)}},I=E=>{try{P(a.throw(E))}catch(T){A(T)}},P=E=>E.done?O(E.value):Promise.resolve(E.value).then(g,I);P((a=a.apply(t,s)).next())});function m(){return _(this,null,function*(){const t=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(t)})}function i(){return _(this,null,function*(){const t=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(t)})}function v(t){return _(this,null,function*(){const s=normalizeString(t),a=yield i();let O="";for(const A in a)if(containsIgnoreCase(s,normalizeString(A))){O=A;break}return a[O]})}},1500:(h,l,o)=>{o.d(l,{Dq:()=>v,Mi:()=>A,S9:()=>I,Vo:()=>O,Zg:()=>t,l0:()=>s,qu:()=>a,sY:()=>E,u6:()=>T});var _=Math.pow,m=(p,C,c)=>new Promise((d,f)=>{var w=e=>{try{R(c.next(e))}catch(n){f(n)}},V=e=>{try{R(c.throw(e))}catch(n){f(n)}},R=e=>e.done?d(e.value):Promise.resolve(e.value).then(w,V);R((c=c.apply(p,C)).next())});const i=$substore,v={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"],vpsmmo:["Vpsmmo Technology Company Limited","1mcloud Technology Company Limited","AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"]},t={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function s(p){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(p)}function a(p){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(p)}function O(p,C){const c=p.split("."),d=C.split(".");if(c.length<3||d.length<3)return!1;for(let f=0;f<3;f++)if(c[f]!==d[f])return!1;return!0}function A(p){const C=p.split(".");return C[C.length-1]}function g(p){return m(this,null,function*(){const C=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(p)}&type=A`,c={Accept:"application/dns-json"};try{const d=yield i.http.get({url:C,headers:c}),f=JSON.parse(d.body);if(f.Status!==0)throw new Error(`HTTP error! status: ${f.Status}`);return f.Answer?f.Answer.map(w=>`${w.data}`)[0]:""}catch(d){return""}})}function I(p){return m(this,null,function*(){return yield i.http.get(`https://dns.google/resolve?name=${p}`).then(c=>{const d=JSON.parse(c.body);if(d.Status===0){const f=d.Answer.find(w=>w.type===1);return f?f.data:""}return""})})}function P(p){return m(this,null,function*(){return yield i.http.get(`http://ip-api.com/json/${p}?fields=country`).then(c=>JSON.parse(c.body).country||"")})}function E(p){return m(this,null,function*(){return yield i.http.get(`http://ip-api.com/json/${p}?fields=region,regionName`).then(c=>{const d=JSON.parse(c.body);return d.regionName&&d.region?`${d.regionName} (${d.region})`:""})})}function T(p){return m(this,null,function*(){return yield i.http.get(`http://ip-api.com/json/${p}?fields=isp`).then(c=>JSON.parse(c.body).isp||"")})}function k(p){return m(this,null,function*(){return yield i.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(p)}).then(c=>JSON.parse(c.body).map(f=>f.isp))})}function U(p,C){let c,d;const f=G(p);if((c=C.match(/^(.*?)\/(\d{1,2})$/))&&(d=G(c[1]))>=0){const w=_(2,32-parseInt(c[2]));return f>=d&&f<=d+w-1}return!1}function G(p){let C;if(C=p.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let c=0,d=1;for(let f=4;f>=1;f-=1)c+=d*parseInt(C[f]),d*=256;return c}return-1}},9085:(h,l,o)=>{o.d(l,{G:()=>_});function _(i){return i&&i!=="null"&&i!=="undefined"}function m(i,v){return i.reduce((t,s)=>{const a=s[v];return t[a]||(t[a]=[]),t[a].push(s),t},{})}},4173:(h,l,o)=>{o.d(l,{$S:()=>C,Ck:()=>U,Hd:()=>p,We:()=>T,eD:()=>G,um:()=>c,xG:()=>k});var _=o(9085),m=o(1058),i=o(1500),v=o(8475),t=Math.pow,s=(e,n,u)=>new Promise((r,y)=>{var L=N=>{try{b(u.next(N))}catch(D){y(D)}},M=N=>{try{b(u.throw(N))}catch(D){y(D)}},b=N=>N.done?r(N.value):Promise.resolve(N.value).then(L,M);b((u=u.apply(e,n)).next())});const a="#sub-store-cached-dns",O="#sub-store-cached-isp",A="#sub-store-cached-region",g=7*24*60*60*1e3,I=new v.A(a,g),P=new v.A(O,g),E=new v.A(A,g);function T(e,n){(e.type==="vmess"||e.type==="vless"||e.type==="trojan")&&(e.network==="ws"&&(e["ws-opts"]=e["ws-opts"]||{},e["ws-opts"].headers=e["ws-opts"].headers||{},e["ws-opts"].headers.Host=n),e.network==="grpc"&&(e["grpc-opts"]=e["grpc-opts"]||{},e["grpc-opts"]["grpc-service-name"]=e["grpc-opts"]["grpc-service-name"]||"",e.servername=n),e.network==="tcp"&&(e.servername=n),e.sni=n),(0,_.G)(e["skip-cert-verify"])||(e["skip-cert-verify"]=!0)}function k(e,n){return(0,m.r)(e.regex).test(n.name)}function U(e,n){return e.ports.some(u=>u===n.port)}function G(e,n){return s(this,null,function*(){return(yield Promise.all(e.ips.map(r=>w(n.server,r)))).some(r=>r)})}function p(e,n){return s(this,null,function*(){return(yield Promise.all(e.isps.map(r=>f(n.server,r)))).some(r=>r)})}function C(e,n){return s(this,null,function*(){return(yield Promise.all(e.regions.map(r=>d(n.server,r)))).some(r=>r)})}function c(e,n,u){return s(this,null,function*(){return(yield Promise.all(e.map(y=>y(n,u)))).every(y=>y)})}function d(e,n){return s(this,null,function*(){const u=yield V(e);try{let r="";const y=E.get(u);y?r=y:(r=yield(0,i.sY)(u),r&&E.set(u,r));const L=(0,m.Z)(r);if(L){const{name:M,code:b}=L,N=i.Zg[n.toLowerCase()];if((0,_.G)(N)&&(N.some(D=>RegExp(`${D}`,"i").test(b))||N.some(D=>RegExp(`${D}`,"i").test(M))))return!0}}catch(r){return!1}return!1})}function f(e,n){return s(this,null,function*(){const u=yield V(e);let r="";const y=P.get(u);return y?r=y:(r=yield(0,i.u6)(u),r&&P.set(u,r)),!!i.Dq[n].some(M=>RegExp(`${M}`,"i").test(r))})}function w(e,n){return s(this,null,function*(){const u=yield V(e);if(!(0,i.qu)(u))return!1;if(n.indexOf("/")<0)return!!(u===n||(0,i.Vo)(u,n)&&(0,i.Mi)(n)==="*");let r,y;const L=R(u);if((r=n.match(/^(.*?)\/(\d{1,2})$/))&&(y=R(r[1]))>=0){const M=t(2,32-parseInt(r[2]));return L>=y&&L<=y+M-1}return!1})}function V(e){return s(this,null,function*(){let n=e;if((0,i.l0)(e)){const u=I.get(e);if(u)n=u;else{const r=yield(0,i.S9)(e);n=r,r&&I.set(e,r)}}return n})}function R(e){let n;if(n=e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let u=0,r=1;for(let y=4;y>=1;y-=1)u+=r*parseInt(n[y]),r*=256;return u}return-1}},1058:(h,l,o)=>{o.d(l,{Z:()=>m,r:()=>_});function _(i){const v=i.lastIndexOf("/");return new RegExp(i.slice(1,v),i.slice(v+1))}function m(i){const v=/^([^\(]+) \(([^)]+)\)$/,t=i.match(v);return t?{name:t[1].trim(),code:t[2]}:null}}},$={};function S(h){var l=$[h];if(l!==void 0)return l.exports;var o=$[h]={exports:{}};return Y[h](o,o.exports,S),o.exports}S.n=h=>{var l=h&&h.__esModule?()=>h.default:()=>h;return S.d(l,{a:l}),l},S.d=(h,l)=>{for(var o in l)S.o(l,o)&&!S.o(h,o)&&Object.defineProperty(h,o,{enumerable:!0,get:l[o]})},S.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(h){if(typeof window=="object")return window}}(),S.o=(h,l)=>Object.prototype.hasOwnProperty.call(h,l);var H={};(()=>{var h=S(3183),l=S.n(h),o=S(9085),_=S(423),m=S(4173),i=(t,s,a)=>new Promise((O,A)=>{var g=E=>{try{P(a.next(E))}catch(T){A(T)}},I=E=>{try{P(a.throw(E))}catch(T){A(T)}},P=E=>E.done?O(E.value):Promise.resolve(E.value).then(g,I);P((a=a.apply(t,s)).next())});function v(t){return i(this,null,function*(){const s=yield(0,_.ru)();for(const a of t){let O="";for(const A in s){const g=s[A];if((0,o.G)(g)){if(A==="default"){O=g.sni;continue}if((0,o.G)(g.sni)&&(!(0,o.G)(g.skip)||!g.skip)){const I=[];if((0,o.G)(g.regex)&&I.push(m.xG),(0,o.G)(g.ports)&&I.push(m.Ck),(0,o.G)(g.ips)&&I.push(m.eD),(0,o.G)(g.isps)&&I.push(m.Hd),(0,o.G)(g.regions)&&I.push(m.$S),(yield(0,m.um)(I,g,a))||I.length===0){O=g.sni;break}}}}(0,m.We)(a,O)}return t})}l().operator=v})()})();})();
