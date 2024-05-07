(()=>{(()=>{"use strict";var x={183:(a,l,u)=>{var h;typeof window!="undefined"?h=window:typeof u.g!="undefined"?h=u.g:typeof self!="undefined"?h=self:h={},a.exports=h}},E={};function d(a){var l=E[a];if(l!==void 0)return l.exports;var u=E[a]={exports:{}};return x[a](u,u.exports,d),u.exports}d.n=a=>{var l=a&&a.__esModule?()=>a.default:()=>a;return d.d(l,{a:l}),l},d.d=(a,l)=>{for(var u in l)d.o(l,u)&&!d.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:l[u]})},d.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(a){if(typeof window=="object")return window}}(),d.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l);var W={};(()=>{var a=d(183),l=d.n(a);const u=$substore;class h{constructor(n,e){this.key=n,this.expires=e;const o=u.read(n);o?this.resourceCache=JSON.parse(o):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let n=!1;const e=new Date().getTime();Object.keys(this.resourceCache).forEach(o=>{const r=this.resourceCache[o];(!r.time||e-r.time>this.expires)&&(delete this.resourceCache[o],u.delete(`#${o}`),n=!0)}),n&&this._persist()}revokeIds(n){let e=!1;for(const o of n)delete this.resourceCache[o],e=!0;e&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){u.write(JSON.stringify(this.resourceCache),this.key)}get(n){const e=this.resourceCache[n]&&this.resourceCache[n].time;return e&&new Date().getTime()-e<=this.expires?this.resourceCache[n].data:null}set(n,e){this.resourceCache[n]={time:new Date().getTime(),data:e},this._persist()}}const v=h;function g(t){return t&&t!=="null"&&t!=="undefined"}function X(t,n){return t.reduce((e,o)=>{const r=o[n];return e[r]||(e[r]=[]),e[r].push(o),e},{})}function M(t){const n=t.lastIndexOf("/");return new RegExp(t.slice(1,n),t.slice(n+1))}var b=Math.pow,I=(t,n,e)=>new Promise((o,r)=>{var p=s=>{try{c(e.next(s))}catch(i){r(i)}},m=s=>{try{c(e.throw(s))}catch(i){r(i)}},c=s=>s.done?o(s.value):Promise.resolve(s.value).then(p,m);c((e=e.apply(t,n)).next())});const S=$substore,R={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"]};function A(t){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(t)}function D(t){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(t)}function k(t,n){const e=t.split("."),o=n.split(".");if(e.length<3||o.length<3)return!1;for(let r=0;r<3;r++)if(e[r]!==o[r])return!1;return!0}function G(t){const n=t.split(".");return n[n.length-1]}function T(t){return I(this,null,function*(){return yield S.http.get(`https://dns.google/resolve?name=${t}`).then(e=>{const o=JSON.parse(e.body);if(o.Status===0){const r=o.Answer.find(p=>p.type===1);return r?r.data:""}return""})})}function Q(t){return I(this,null,function*(){return yield S.http.get(`http://ip-api.com/json/${t}?fields=country`).then(e=>JSON.parse(e.body).country||"")})}function Y(t){return I(this,null,function*(){return yield S.http.get(`http://ip-api.com/json/${t}?fields=isp`).then(e=>JSON.parse(e.body).isp||"")})}function Z(t){return I(this,null,function*(){return yield S.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(t)}).then(e=>JSON.parse(e.body).map(r=>r.isp))})}function ee(t,n){let e,o;const r=L(t);if((e=n.match(/^(.*?)\/(\d{1,2})$/))&&(o=L(e[1]))>=0){const p=b(2,32-parseInt(e[2]));return r>=o&&r<=o+p-1}return!1}function L(t){let n;if(n=t.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let e=0,o=1;for(let r=4;r>=1;r-=1)e+=o*parseInt(n[r]),o*=256;return e}return-1}var w=(t,n,e)=>new Promise((o,r)=>{var p=s=>{try{c(e.next(s))}catch(i){r(i)}},m=s=>{try{c(e.throw(s))}catch(i){r(i)}},c=s=>s.done?o(s.value):Promise.resolve(s.value).then(p,m);c((e=e.apply(t,n)).next())});function $(){return w(this,null,function*(){const t=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(t)})}function te(){return w(this,null,function*(){const t=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(t)})}var F=Math.pow,y=(t,n,e)=>new Promise((o,r)=>{var p=s=>{try{c(e.next(s))}catch(i){r(i)}},m=s=>{try{c(e.throw(s))}catch(i){r(i)}},c=s=>s.done?o(s.value):Promise.resolve(s.value).then(p,m);c((e=e.apply(t,n)).next())});const U="#sub-store-cached-dns",H="#sub-store-cached-isp",N=7*24*60*60*1e3,_=new v(U,N),P=new v(H,N);function J(t){return y(this,null,function*(){const{type:n}=$arguments,e=yield $(),o=(i,f)=>M(i.regex).test(f.name),r=(i,f)=>i.ports.some(O=>O===f.port),p=(i,f)=>y(this,null,function*(){return(yield Promise.all(i.ips.map(C=>z(f.server,C)))).some(C=>C)}),m=(i,f)=>y(this,null,function*(){return(yield Promise.all(i.isps.map(C=>K(f.server,C)))).some(C=>C)}),c=e[n],s=[];for(const i of t){const f=[];g(c.regex)&&f.push(o),g(c.ports)&&f.push(r),g(c.ips)&&f.push(p),g(c.isps)&&f.push(m),((yield B(f,c,i))||f.length===0)&&s.push(i)}return s})}function B(t,n,e){return y(this,null,function*(){return(yield Promise.all(t.map(r=>r(n,e)))).every(r=>r)})}function K(t,n){return y(this,null,function*(){let e=t;if(A(t)){const o=_.get(t);if(o)e=o;else{const r=yield T(t);e=r,r&&_.set(t,r)}}return j(e,n)})}function j(t,n){return y(this,null,function*(){let e="";const o=P.get(t);return o?e=o:(e=yield Y(t),e&&P.set(t,e)),!!R[n].some(p=>RegExp(`${p}`,"i").test(e))})}function z(t,n){return y(this,null,function*(){let e=t;if(A(t)){const o=_.get(t);if(o)e=o;else{const r=yield T(t);e=r,r&&_.set(t,r)}}return q(e,n)})}function q(t,n){if(!D(t))return!1;if(n.indexOf("/")<0)return!!(t===n||k(t,n)&&G(n)==="*");let e,o;const r=V(t);if((e=n.match(/^(.*?)\/(\d{1,2})$/))&&(o=V(e[1]))>=0){const p=F(2,32-parseInt(e[2]));return r>=o&&r<=o+p-1}return!1}function V(t){let n;if(n=t.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let e=0,o=1;for(let r=4;r>=1;r-=1)e+=o*parseInt(n[r]),o*=256;return e}return-1}l().operator=J})()})();})();
