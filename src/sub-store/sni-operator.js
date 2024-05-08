(()=>{(()=>{"use strict";var k={183:(f,c,u)=>{var i;typeof window!="undefined"?i=window:typeof u.g!="undefined"?i=u.g:typeof self!="undefined"?i=self:i={},f.exports=i},475:(f,c,u)=>{u.d(c,{A:()=>r});const i=$substore;class g{constructor(t,l){this.key=t,this.expires=l;const n=i.read(t);n?this.resourceCache=JSON.parse(n):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let t=!1;const l=new Date().getTime();Object.keys(this.resourceCache).forEach(n=>{const E=this.resourceCache[n];(!E.time||l-E.time>this.expires)&&(delete this.resourceCache[n],i.delete(`#${n}`),t=!0)}),t&&this._persist()}revokeIds(t){let l=!1;for(const n of t)delete this.resourceCache[n],l=!0;l&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){i.write(JSON.stringify(this.resourceCache),this.key)}get(t){const l=this.resourceCache[t]&&this.resourceCache[t].time;return l&&new Date().getTime()-l<=this.expires?this.resourceCache[t].data:null}set(t,l){this.resourceCache[t]={time:new Date().getTime(),data:l},this._persist()}}const r=g},423:(f,c,u)=>{u.d(c,{ru:()=>g});var i=(t,l,n)=>new Promise((E,w)=>{var b=O=>{try{P(n.next(O))}catch(T){w(T)}},L=O=>{try{P(n.throw(O))}catch(T){w(T)}},P=O=>O.done?E(O.value):Promise.resolve(O.value).then(b,L);P((n=n.apply(t,l)).next())});function g(){return i(this,null,function*(){const t=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(t)})}function r(){return i(this,null,function*(){const t=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(t)})}function N(t){return i(this,null,function*(){const l=normalizeString(t),n=yield r();let E="";for(const w in n)if(containsIgnoreCase(l,normalizeString(w))){E=w;break}return n[E]})}},500:(f,c,u)=>{u.d(c,{Dq:()=>N,GQ:()=>T,Mi:()=>E,S9:()=>w,Vo:()=>n,l0:()=>t,qu:()=>l,u6:()=>L});var i=Math.pow,g=(d,C,p)=>new Promise((_,e)=>{var a=o=>{try{m(p.next(o))}catch(v){e(v)}},s=o=>{try{m(p.throw(o))}catch(v){e(v)}},m=o=>o.done?_(o.value):Promise.resolve(o.value).then(a,s);m((p=p.apply(d,C)).next())});const r=$substore,N={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"]};function t(d){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(d)}function l(d){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(d)}function n(d,C){const p=d.split("."),_=C.split(".");if(p.length<3||_.length<3)return!1;for(let e=0;e<3;e++)if(p[e]!==_[e])return!1;return!0}function E(d){const C=d.split(".");return C[C.length-1]}function w(d){return g(this,null,function*(){return yield r.http.get(`https://dns.google/resolve?name=${d}`).then(p=>{const _=JSON.parse(p.body);if(_.Status===0){const e=_.Answer.find(a=>a.type===1);return e?e.data:""}return""})})}function b(d){return g(this,null,function*(){return yield r.http.get(`http://ip-api.com/json/${d}?fields=country`).then(p=>JSON.parse(p.body).country||"")})}function L(d){return g(this,null,function*(){return yield r.http.get(`http://ip-api.com/json/${d}?fields=isp`).then(p=>JSON.parse(p.body).isp||"")})}function P(d){return g(this,null,function*(){return yield r.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(d)}).then(p=>JSON.parse(p.body).map(e=>e.isp))})}function O(d,C){let p,_;const e=T(d);if((p=C.match(/^(.*?)\/(\d{1,2})$/))&&(_=T(p[1]))>=0){const a=i(2,32-parseInt(p[2]));return e>=_&&e<=_+a-1}return!1}function T(d){let C;if(C=d.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let p=0,_=1;for(let e=4;e>=1;e-=1)p+=_*parseInt(C[e]),_*=256;return p}return-1}},85:(f,c,u)=>{u.d(c,{G:()=>i});function i(r){return r&&r!=="null"&&r!=="undefined"}function g(r,N){return r.reduce((t,l)=>{const n=l[N];return t[n]||(t[n]=[]),t[n].push(l),t},{})}},58:(f,c,u)=>{u.d(c,{A:()=>i});function i(g){const r=g.lastIndexOf("/");return new RegExp(g.slice(1,r),g.slice(r+1))}}},M={};function y(f){var c=M[f];if(c!==void 0)return c.exports;var u=M[f]={exports:{}};return k[f](u,u.exports,y),u.exports}y.n=f=>{var c=f&&f.__esModule?()=>f.default:()=>f;return y.d(c,{a:c}),c},y.d=(f,c)=>{for(var u in c)y.o(c,u)&&!y.o(f,u)&&Object.defineProperty(f,u,{enumerable:!0,get:c[u]})},y.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(f){if(typeof window=="object")return window}}(),y.o=(f,c)=>Object.prototype.hasOwnProperty.call(f,c);var D={};(()=>{var f=y(183),c=y.n(f),u=y(475),i=y(85),g=y(58),r=y(500),N=y(423);function t(e,a){e.type==="vmess"&&e.network==="ws"&&(e["ws-opts"]=e["ws-opts"]||{},e["ws-opts"].headers=e["ws-opts"].headers||{},e["ws-opts"].headers.Host=a),e.sni=a,(0,i.G)(e["skip-cert-verify"])||(e["skip-cert-verify"]=!0)}var l=Math.pow,n=(e,a,s)=>new Promise((m,o)=>{var v=I=>{try{S(s.next(I))}catch(h){o(h)}},A=I=>{try{S(s.throw(I))}catch(h){o(h)}},S=I=>I.done?m(I.value):Promise.resolve(I.value).then(v,A);S((s=s.apply(e,a)).next())});const E="#sub-store-cached-dns",w="#sub-store-cached-isp",b=7*24*60*60*1e3,L=new u.A(E,b),P=new u.A(w,b);function O(e){return n(this,null,function*(){const a=(A,S)=>(0,g.A)(A.regex).test(S.name),s=(A,S)=>A.ports.some(I=>I===S.port),m=(A,S)=>n(this,null,function*(){return(yield Promise.all(A.ips.map(h=>p(S.server,h)))).some(h=>h)}),o=(A,S)=>n(this,null,function*(){return(yield Promise.all(A.isps.map(h=>d(S.server,h)))).some(h=>h)}),v=yield(0,N.ru)();for(const A of e){let S="";for(const I in v){const h=v[I];if((0,i.G)(h)){if(I==="default"){S=h.sni;continue}if(!(0,i.G)(h.skip)||!h.skip){const V=[];if((0,i.G)(h.regex)&&V.push(a),(0,i.G)(h.ports)&&V.push(s),(0,i.G)(h.ips)&&V.push(m),(0,i.G)(h.isps)&&V.push(o),(yield T(V,h,A))||V.length===0){S=h.sni;break}}}}t(A,S)}return e})}function T(e,a,s){return n(this,null,function*(){return(yield Promise.all(e.map(o=>o(a,s)))).every(o=>o)})}function d(e,a){return n(this,null,function*(){let s=e;if((0,r.l0)(e)){const m=L.get(e);if(m)s=m;else{const o=yield(0,r.S9)(e);s=o,o&&L.set(e,o)}}return C(s,a)})}function C(e,a){return n(this,null,function*(){let s="";const m=P.get(e);return m?s=m:(s=yield(0,r.u6)(e),s&&P.set(e,s)),!!r.Dq[a].some(v=>RegExp(`${v}`,"i").test(s))})}function p(e,a){return n(this,null,function*(){let s=e;if((0,r.l0)(e)){const m=L.get(e);if(m)s=m;else{const o=yield(0,r.S9)(e);s=o,o&&L.set(e,o)}}return _(s,a)})}function _(e,a){if(!(0,r.qu)(e))return!1;if(a.indexOf("/")<0)return!!(e===a||(0,r.Vo)(e,a)&&(0,r.Mi)(a)==="*");let s,m;const o=(0,r.GQ)(e);if((s=a.match(/^(.*?)\/(\d{1,2})$/))&&(m=(0,r.GQ)(s[1]))>=0){const v=l(2,32-parseInt(s[2]));return o>=m&&o<=m+v-1}return!1}c().operator=O})()})();})();
