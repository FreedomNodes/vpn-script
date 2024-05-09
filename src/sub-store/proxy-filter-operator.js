/*
 fullhash:34830ced8dbf84302b85, chunkhash:0a74203a158a7bf08287, file:sub-store/proxy-filter-operator.js
 author: Kien Tran
 */
(()=>{(()=>{"use strict";var k={3183:(_,p,o)=>{var m;typeof window!="undefined"?m=window:typeof o.g!="undefined"?m=o.g:typeof self!="undefined"?m=self:m={},_.exports=m},8475:(_,p,o)=>{o.d(p,{A:()=>c});const m=$substore;class a{constructor(e,u){this.key=e,this.expires=u;const s=m.read(e);s?this.resourceCache=JSON.parse(s):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let e=!1;const u=new Date().getTime();Object.keys(this.resourceCache).forEach(s=>{const C=this.resourceCache[s];(!C.time||u-C.time>this.expires)&&(delete this.resourceCache[s],m.delete(`#${s}`),e=!0)}),e&&this._persist()}revokeIds(e){let u=!1;for(const s of e)delete this.resourceCache[s],u=!0;u&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){m.write(JSON.stringify(this.resourceCache),this.key)}get(e){const u=this.resourceCache[e]&&this.resourceCache[e].time;return u&&new Date().getTime()-u<=this.expires?this.resourceCache[e].data:null}set(e,u){this.resourceCache[e]={time:new Date().getTime(),data:u},this._persist()}}const c=a},423:(_,p,o)=>{o.d(p,{ru:()=>a});var m=(e,u,s)=>new Promise((C,v)=>{var P=E=>{try{S(s.next(E))}catch(T){v(T)}},I=E=>{try{S(s.throw(E))}catch(T){v(T)}},S=E=>E.done?C(E.value):Promise.resolve(E.value).then(P,I);S((s=s.apply(e,u)).next())});function a(){return m(this,null,function*(){const e=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(e)})}function c(){return m(this,null,function*(){const e=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(e)})}function O(e){return m(this,null,function*(){const u=normalizeString(e),s=yield c();let C="";for(const v in s)if(containsIgnoreCase(u,normalizeString(v))){C=v;break}return s[C]})}},1500:(_,p,o)=>{o.d(p,{Dq:()=>O,Mi:()=>C,S9:()=>P,Vo:()=>s,l0:()=>e,qu:()=>u,sY:()=>S,u6:()=>E});var m=Math.pow,a=(d,g,l)=>new Promise((h,f)=>{var w=t=>{try{M(l.next(t))}catch(n){f(n)}},R=t=>{try{M(l.throw(t))}catch(n){f(n)}},M=t=>t.done?h(t.value):Promise.resolve(t.value).then(w,R);M((l=l.apply(d,g)).next())});const c=$substore,O={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"]};function e(d){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(d)}function u(d){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(d)}function s(d,g){const l=d.split("."),h=g.split(".");if(l.length<3||h.length<3)return!1;for(let f=0;f<3;f++)if(l[f]!==h[f])return!1;return!0}function C(d){const g=d.split(".");return g[g.length-1]}function v(d){return a(this,null,function*(){const g=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(d)}&type=A`,l={Accept:"application/dns-json"};try{const h=yield c.http.get({url:g,headers:l}),f=JSON.parse(h.body);if(f.Status!==0)throw new Error(`HTTP error! status: ${f.Status}`);return f.Answer?f.Answer.map(w=>`${w.data}`)[0]:""}catch(h){return""}})}function P(d){return a(this,null,function*(){return yield c.http.get(`https://dns.google/resolve?name=${d}`).then(l=>{const h=JSON.parse(l.body);if(h.Status===0){const f=h.Answer.find(w=>w.type===1);return f?f.data:""}return""})})}function I(d){return a(this,null,function*(){return yield c.http.get(`http://ip-api.com/json/${d}?fields=country`).then(l=>JSON.parse(l.body).country||"")})}function S(d){return a(this,null,function*(){return yield c.http.get(`http://ip-api.com/json/${d}?fields=region,regionName`).then(l=>{const h=JSON.parse(l.body);return`${h.regionName} (${h.region})`||""})})}function E(d){return a(this,null,function*(){return yield c.http.get(`http://ip-api.com/json/${d}?fields=isp`).then(l=>JSON.parse(l.body).isp||"")})}function T(d){return a(this,null,function*(){return yield c.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(d)}).then(l=>JSON.parse(l.body).map(f=>f.isp))})}function x(d,g){let l,h;const f=V(d);if((l=g.match(/^(.*?)\/(\d{1,2})$/))&&(h=V(l[1]))>=0){const w=m(2,32-parseInt(l[2]));return f>=h&&f<=h+w-1}return!1}function V(d){let g;if(g=d.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let l=0,h=1;for(let f=4;f>=1;f-=1)l+=h*parseInt(g[f]),h*=256;return l}return-1}},9085:(_,p,o)=>{o.d(p,{G:()=>m});function m(c){return c&&c!=="null"&&c!=="undefined"}function a(c,O){return c.reduce((e,u)=>{const s=u[O];return e[s]||(e[s]=[]),e[s].push(u),e},{})}},4173:(_,p,o)=>{o.d(p,{$S:()=>g,Ck:()=>x,Hd:()=>d,eD:()=>V,um:()=>l,xG:()=>T});var m=o(1058),a=o(1500),c=o(8475),O=Math.pow,e=(t,n,i)=>new Promise((r,y)=>{var L=D=>{try{b(i.next(D))}catch(G){y(G)}},N=D=>{try{b(i.throw(D))}catch(G){y(G)}},b=D=>D.done?r(D.value):Promise.resolve(D.value).then(L,N);b((i=i.apply(t,n)).next())});const u="#sub-store-cached-dns",s="#sub-store-cached-isp",C="#sub-store-cached-region",v=7*24*60*60*1e3,P=new c.A(u,v),I=new c.A(s,v),S=new c.A(C,v);function E(t,n){t.type==="vmess"&&t.network==="ws"&&(t["ws-opts"]=t["ws-opts"]||{},t["ws-opts"].headers=t["ws-opts"].headers||{},t["ws-opts"].headers.Host=n),t.sni=n,isRealValue(t["skip-cert-verify"])||(t["skip-cert-verify"]=!0)}const T=(t,n)=>(0,m.r)(t.regex).test(n.name),x=(t,n)=>t.ports.some(i=>i===n.port),V=(t,n)=>e(void 0,null,function*(){return(yield Promise.all(t.ips.map(r=>w(n.server,r)))).some(r=>r)}),d=(t,n)=>e(void 0,null,function*(){return(yield Promise.all(t.isps.map(r=>f(n.server,r)))).some(r=>r)}),g=(t,n)=>e(void 0,null,function*(){return(yield Promise.all(t.regions.map(r=>h(n.server,r)))).some(r=>r)});function l(t,n,i){return e(this,null,function*(){return(yield Promise.all(t.map(y=>y(n,i)))).every(y=>y)})}function h(t,n){return e(this,null,function*(){const i=R(t);let r="";const y=S.get(i);y?r=y:(r=yield(0,a.sY)(i),r&&S.set(i,r));const L=(0,m.Z)(r);if(L){const{name:N,code:b}=L;if(n.toLowerCase()===N.toLowerCase()||n.toLowerCase()===b.toLowerCase())return!0}return!1})}function f(t,n){return e(this,null,function*(){const i=R(t);let r="";const y=I.get(i);return y?r=y:(r=yield(0,a.u6)(i),r&&I.set(i,r)),!!a.Dq[n].some(N=>RegExp(`${N}`,"i").test(r))})}function w(t,n){return e(this,null,function*(){const i=R(t);if(!(0,a.qu)(i))return!1;if(n.indexOf("/")<0)return!!(i===n||(0,a.Vo)(i,n)&&(0,a.Mi)(n)==="*");let r,y;const L=M(i);if((r=n.match(/^(.*?)\/(\d{1,2})$/))&&(y=M(r[1]))>=0){const N=O(2,32-parseInt(r[2]));return L>=y&&L<=y+N-1}return!1})}function R(t){return e(this,null,function*(){let n=t;if((0,a.l0)(t)){const i=P.get(t);if(i)n=i;else{const r=yield(0,a.S9)(t);n=r,r&&P.set(t,r)}}return n})}function M(t){let n;if(n=t.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let i=0,r=1;for(let y=4;y>=1;y-=1)i+=r*parseInt(n[y]),r*=256;return i}return-1}},1058:(_,p,o)=>{o.d(p,{Z:()=>a,r:()=>m});function m(c){const O=c.lastIndexOf("/");return new RegExp(c.slice(1,O),c.slice(O+1))}function a(c){const O=/^([^\(]+) \(([^)]+)\)$/,e=c.match(O);return e?{name:e[1].trim(),code:e[2]}:null}}},$={};function A(_){var p=$[_];if(p!==void 0)return p.exports;var o=$[_]={exports:{}};return k[_](o,o.exports,A),o.exports}A.n=_=>{var p=_&&_.__esModule?()=>_.default:()=>_;return A.d(p,{a:p}),p},A.d=(_,p)=>{for(var o in p)A.o(p,o)&&!A.o(_,o)&&Object.defineProperty(_,o,{enumerable:!0,get:p[o]})},A.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(_){if(typeof window=="object")return window}}(),A.o=(_,p)=>Object.prototype.hasOwnProperty.call(_,p);var U={};(()=>{var _=A(3183),p=A.n(_),o=A(9085),m=A(423),a=A(4173),c=(e,u,s)=>new Promise((C,v)=>{var P=E=>{try{S(s.next(E))}catch(T){v(T)}},I=E=>{try{S(s.throw(E))}catch(T){v(T)}},S=E=>E.done?C(E.value):Promise.resolve(E.value).then(P,I);S((s=s.apply(e,u)).next())});function O(e){return c(this,null,function*(){const{type:u}=$arguments,s=yield(0,m.ru)(),C=(0,o.G)(u)?s[u]:s[e[0].collectionName];if(!(0,o.G)(C))return e;const v=[];for(const P of e){const I=[];if((0,o.G)(C.regex)&&I.push(a.xG),(0,o.G)(C.ports)&&I.push(a.Ck),(0,o.G)(C.ips)&&I.push(a.eD),(0,o.G)(C.isps)&&I.push(a.Hd),(0,o.G)(C.regions)&&I.push(a.$S),I.length===0){v.push(P);continue}(yield(0,a.um)(I,C,P))&&v.push(P)}return v})}p().operator=O})()})();})();
