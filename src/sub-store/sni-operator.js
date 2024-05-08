(()=>{(()=>{"use strict";var M={183:(c,l,f)=>{var C;typeof window!="undefined"?C=window:typeof f.g!="undefined"?C=f.g:typeof self!="undefined"?C=self:C={},c.exports=C}},A={};function m(c){var l=A[c];if(l!==void 0)return l.exports;var f=A[c]={exports:{}};return M[c](f,f.exports,m),f.exports}m.n=c=>{var l=c&&c.__esModule?()=>c.default:()=>c;return m.d(l,{a:l}),l},m.d=(c,l)=>{for(var f in l)m.o(l,f)&&!m.o(c,f)&&Object.defineProperty(c,f,{enumerable:!0,get:l[f]})},m.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(c){if(typeof window=="object")return window}}(),m.o=(c,l)=>Object.prototype.hasOwnProperty.call(c,l);var X={};(()=>{var c=m(183),l=m.n(c);const f=$substore;class C{constructor(n,t){this.key=n,this.expires=t;const r=f.read(n);r?this.resourceCache=JSON.parse(r):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let n=!1;const t=new Date().getTime();Object.keys(this.resourceCache).forEach(r=>{const s=this.resourceCache[r];(!s.time||t-s.time>this.expires)&&(delete this.resourceCache[r],f.delete(`#${r}`),n=!0)}),n&&this._persist()}revokeIds(n){let t=!1;for(const r of n)delete this.resourceCache[r],t=!0;t&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){f.write(JSON.stringify(this.resourceCache),this.key)}get(n){const t=this.resourceCache[n]&&this.resourceCache[n].time;return t&&new Date().getTime()-t<=this.expires?this.resourceCache[n].data:null}set(n,t){this.resourceCache[n]={time:new Date().getTime(),data:t},this._persist()}}const T=C;function d(e){return e&&e!=="null"&&e!=="undefined"}function Q(e,n){return e.reduce((t,r)=>{const s=r[n];return t[s]||(t[s]=[]),t[s].push(r),t},{})}function R(e){const n=e.lastIndexOf("/");return new RegExp(e.slice(1,n),e.slice(n+1))}var k=Math.pow,I=(e,n,t)=>new Promise((r,s)=>{var u=i=>{try{p(t.next(i))}catch(o){s(o)}},y=i=>{try{p(t.throw(i))}catch(o){s(o)}},p=i=>i.done?r(i.value):Promise.resolve(i.value).then(u,y);p((t=t.apply(e,n)).next())});const v=$substore,D={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"]};function w(e){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(e)}function x(e){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(e)}function G(e,n){const t=e.split("."),r=n.split(".");if(t.length<3||r.length<3)return!1;for(let s=0;s<3;s++)if(t[s]!==r[s])return!1;return!0}function Y(e){const n=e.split(".");return n[n.length-1]}function N(e){return I(this,null,function*(){return yield v.http.get(`https://dns.google/resolve?name=${e}`).then(t=>{const r=JSON.parse(t.body);if(r.Status===0){const s=r.Answer.find(u=>u.type===1);return s?s.data:""}return""})})}function Z(e){return I(this,null,function*(){return yield v.http.get(`http://ip-api.com/json/${e}?fields=country`).then(t=>JSON.parse(t.body).country||"")})}function $(e){return I(this,null,function*(){return yield v.http.get(`http://ip-api.com/json/${e}?fields=isp`).then(t=>JSON.parse(t.body).isp||"")})}function ee(e){return I(this,null,function*(){return yield v.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(e)}).then(t=>JSON.parse(t.body).map(s=>s.isp))})}function te(e,n){let t,r;const s=O(e);if((t=n.match(/^(.*?)\/(\d{1,2})$/))&&(r=O(t[1]))>=0){const u=k(2,32-parseInt(t[2]));return s>=r&&s<=r+u-1}return!1}function O(e){let n;if(n=e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let t=0,r=1;for(let s=4;s>=1;s-=1)t+=r*parseInt(n[s]),r*=256;return t}return-1}var _=(e,n,t)=>new Promise((r,s)=>{var u=i=>{try{p(t.next(i))}catch(o){s(o)}},y=i=>{try{p(t.throw(i))}catch(o){s(o)}},p=i=>i.done?r(i.value):Promise.resolve(i.value).then(u,y);p((t=t.apply(e,n)).next())});function F(){return _(this,null,function*(){const e=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(e)})}function H(){return _(this,null,function*(){const e=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(e)})}function ne(e){return _(this,null,function*(){const n=normalizeString(e),t=yield H();let r="";for(const s in t)if(containsIgnoreCase(n,normalizeString(s))){r=s;break}return t[r]})}function L(e,n){e.type==="vmess"&&e.network==="ws"&&(e["ws-opts"]=e["ws-opts"]||{},e["ws-opts"].headers=e["ws-opts"].headers||{},e["ws-opts"].headers.Host=n),e.sni=n,d(e["skip-cert-verify"])||(e["skip-cert-verify"]=!0)}var U=Math.pow,g=(e,n,t)=>new Promise((r,s)=>{var u=i=>{try{p(t.next(i))}catch(o){s(o)}},y=i=>{try{p(t.throw(i))}catch(o){s(o)}},p=i=>i.done?r(i.value):Promise.resolve(i.value).then(u,y);p((t=t.apply(e,n)).next())});const J="#sub-store-cached-dns",B="#sub-store-cached-isp",P=7*24*60*60*1e3,E=new T(J,P),V=new T(B,P);function j(e){return g(this,null,function*(){const{ignoreRule:n,type:t}=$arguments,r=yield F(),s=(i,o)=>R(i.regex).test(o.name),u=(i,o)=>i.ports.some(h=>h===o.port),y=(i,o)=>g(this,null,function*(){return(yield Promise.all(i.ips.map(a=>W(o.server,a)))).some(a=>a)}),p=(i,o)=>g(this,null,function*(){return(yield Promise.all(i.isps.map(a=>z(o.server,a)))).some(a=>a)});if(d(t))for(const i of e){const o=r[t];if(!d(o))break;const h=[];d(o.regex)&&h.push(s),d(o.ports)&&h.push(u),d(o.ips)&&h.push(y),d(o.isps)&&h.push(p),((yield b(h,o,i))||h.length===0)&&L(i,o.sni)}else for(const i of e){let o="";for(const h in r){const a=r[h];if(d(a)){if(h==="default"){o=a.sni;continue}if((!n||!/true/i.test(n))&&(!d(a.skip)||!a.skip)){const S=[];if(d(a.regex)&&S.push(s),d(a.ports)&&S.push(u),d(a.ips)&&S.push(y),d(a.isps)&&S.push(p),yield b(S,a,i)){o=a.sni;break}}}}L(i,o)}return e})}function b(e,n,t){return g(this,null,function*(){return(yield Promise.all(e.map(s=>s(n,t)))).every(s=>s)})}function z(e,n){return g(this,null,function*(){let t=e;if(w(e)){const r=E.get(e);if(r)t=r;else{const s=yield N(e);t=s,s&&E.set(e,s)}}return K(t,n)})}function K(e,n){return g(this,null,function*(){let t="";const r=V.get(e);return r?t=r:(t=yield $(e),t&&V.set(e,t)),!!D[n].some(u=>RegExp(`${u}`,"i").test(t))})}function W(e,n){return g(this,null,function*(){let t=e;if(w(e)){const r=E.get(e);if(r)t=r;else{const s=yield N(e);t=s,s&&E.set(e,s)}}return q(t,n)})}function q(e,n){if(!x(e))return!1;if(n.indexOf("/")<0)return!!(e===n||G(e,n)&&Y(n)==="*");let t,r;const s=O(e);if((t=n.match(/^(.*?)\/(\d{1,2})$/))&&(r=O(t[1]))>=0){const u=U(2,32-parseInt(t[2]));return s>=r&&s<=r+u-1}return!1}l().operator=j})()})();})();
