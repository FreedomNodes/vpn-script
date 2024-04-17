(()=>{(()=>{"use strict";var b={183:(o,i,a)=>{var l;typeof window!="undefined"?l=window:typeof a.g!="undefined"?l=a.g:typeof self!="undefined"?l=self:l={},o.exports=l}},v={};function u(o){var i=v[o];if(i!==void 0)return i.exports;var a=v[o]={exports:{}};return b[o](a,a.exports,u),a.exports}u.n=o=>{var i=o&&o.__esModule?()=>o.default:()=>o;return u.d(i,{a:i}),i},u.d=(o,i)=>{for(var a in i)u.o(i,a)&&!u.o(o,a)&&Object.defineProperty(o,a,{enumerable:!0,get:i[a]})},u.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(o){if(typeof window=="object")return window}}(),u.o=(o,i)=>Object.prototype.hasOwnProperty.call(o,i);var E={};(()=>{var o=u(183),i=u.n(o);const a=$substore;class l{constructor(t,e){this.key=t,this.expires=e;const s=a.read(t);s?this.resourceCache=JSON.parse(s):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let t=!1;const e=new Date().getTime();Object.keys(this.resourceCache).forEach(s=>{const n=this.resourceCache[s];(!n.time||e-n.time>this.expires)&&(delete this.resourceCache[s],a.delete(`#${s}`),t=!0)}),t&&this._persist()}revokeIds(t){let e=!1;for(const s of t)delete this.resourceCache[s],e=!0;e&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){a.write(JSON.stringify(this.resourceCache),this.key)}get(t){const e=this.resourceCache[t]&&this.resourceCache[t].time;return e&&new Date().getTime()-e<=this.expires?this.resourceCache[t].data:null}set(t,e){this.resourceCache[t]={time:new Date().getTime(),data:e},this._persist()}}const I=l;var S=Math.pow,d=(r,t,e)=>new Promise((s,n)=>{var p=c=>{try{f(e.next(c))}catch(h){n(h)}},y=c=>{try{f(e.throw(c))}catch(h){n(h)}},f=c=>c.done?s(c.value):Promise.resolve(c.value).then(p,y);f((e=e.apply(r,t)).next())});const _=$substore,F={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"]};function g(r){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(r)}function M(r){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(r)}function $(r,t){const e=r.split("."),s=t.split(".");if(e.length<3||s.length<3)return!1;for(let n=0;n<3;n++)if(e[n]!==s[n])return!1;return!0}function V(r){const t=r.split(".");return t[t.length-1]}function O(r){return d(this,null,function*(){return yield _.http.get(`https://dns.google/resolve?name=${r}`).then(e=>{const s=JSON.parse(e.body);if(s.Status===0){const n=s.Answer.find(p=>p.type===1);return n?n.data:""}return""})})}function x(r){return d(this,null,function*(){return yield _.http.get(`http://ip-api.com/json/${r}?fields=country`).then(e=>JSON.parse(e.body).country||"")})}function L(r){return d(this,null,function*(){return yield _.http.get(`http://ip-api.com/json/${r}?fields=isp`).then(e=>JSON.parse(e.body).isp||"")})}function k(r){return d(this,null,function*(){return yield _.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(r)}).then(e=>JSON.parse(e.body).map(n=>n.isp))})}function j(r,t){let e,s;const n=w(r);if((e=t.match(/^(.*?)\/(\d{1,2})$/))&&(s=w(e[1]))>=0){const p=S(2,32-parseInt(e[2]));return n>=s&&n<=s+p-1}return!1}function w(r){let t;if(t=r.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let e=0,s=1;for(let n=4;n>=1;n-=1)e+=s*parseInt(t[n]),s*=256;return e}return-1}var C=(r,t,e)=>new Promise((s,n)=>{var p=c=>{try{f(e.next(c))}catch(h){n(h)}},y=c=>{try{f(e.throw(c))}catch(h){n(h)}},f=c=>c.done?s(c.value):Promise.resolve(c.value).then(p,y);f((e=e.apply(r,t)).next())});const P="#sub-store-cached-dns",T=7*24*60*60*1e3,m=new I(P,T);function A(r){return C(this,null,function*(){const t=r.filter(e=>g(e.server)).map(e=>e.server);t.length>0&&m.revokeIds(t);for(const e of t)yield N(e);return r})}function N(r){return C(this,null,function*(){if(g(r)&&!m.get(r)){const e=yield O(r);e&&m.set(r,e)}})}i().operator=A})()})();})();
