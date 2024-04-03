(()=>{(()=>{"use strict";var z={};const d=$substore;class v{constructor(s,t){this.key=s,this.expires=t;const n=d.read(s);n?this.resourceCache=JSON.parse(n):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let s=!1;const t=new Date().getTime();Object.keys(this.resourceCache).forEach(n=>{const r=this.resourceCache[n];(!r.time||t-r.time>this.expires)&&(delete this.resourceCache[n],d.delete(`#${n}`),s=!0)}),s&&this._persist()}revokeIds(s){let t=!1;for(const n of s)delete this.resourceCache[n],t=!0;t&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){d.write(JSON.stringify(this.resourceCache),this.key)}get(s){const t=this.resourceCache[s]&&this.resourceCache[s].time;return t&&new Date().getTime()-t<=this.expires?this.resourceCache[s].data:null}set(s,t){this.resourceCache[s]={time:new Date().getTime(),data:t},this._persist()}}const _=v;function l(e){return e&&e!=="null"&&e!=="undefined"}function w(e){const s=e.lastIndexOf("/");return new RegExp(e.slice(1,s),e.slice(s+1))}var C=Math.pow,g=(e,s,t)=>new Promise((n,r)=>{var u=i=>{try{a(t.next(i))}catch(o){r(o)}},c=i=>{try{a(t.throw(i))}catch(o){r(o)}},a=i=>i.done?n(i.value):Promise.resolve(i.value).then(u,c);a((t=t.apply(e,s)).next())});const y=$substore;function I(e){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(e)}function k(e){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(e)}function P(e,s){const t=e.split("."),n=s.split(".");if(t.length<3||n.length<3)return!1;for(let r=0;r<3;r++)if(t[r]!==n[r])return!1;return!0}function $(e){const s=e.split(".");return s[s.length-1]}function R(e){return g(this,null,function*(){return yield y.http.get(`https://dns.google/resolve?name=${e}`).then(t=>{const n=JSON.parse(t.body);if(n.Status===0){const r=n.Answer.find(u=>u.type===1);return r?r.data:""}return""})})}function H(e,s){let t,n;const r=f(e);if((t=s.match(/^(.*?)\/(\d{1,2})$/))&&(n=f(t[1]))>=0){const u=C(2,32-parseInt(t[2]));return r>=n&&r<=n+u-1}return!1}function f(e){let s;if(s=e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let t=0,n=1;for(let r=4;r>=1;r-=1)t+=n*parseInt(s[r]),n*=256;return t}return-1}var S=(e,s,t)=>new Promise((n,r)=>{var u=i=>{try{a(t.next(i))}catch(o){r(o)}},c=i=>{try{a(t.throw(i))}catch(o){r(o)}},a=i=>i.done?n(i.value):Promise.resolve(i.value).then(u,c);a((t=t.apply(e,s)).next())});function E(){return S(this,null,function*(){const e=yield produceArtifact({type:"file",name:"sni_management"});return ProxyUtils.yaml.safeLoad(e)})}function O(e,s){e.type==="vmess"&&e.network==="ws"&&(e["ws-opts"]=e["ws-opts"]||{},e["ws-opts"].headers=e["ws-opts"].headers||{},e["ws-opts"].headers.Host=s),e.sni=s,l(e["skip-cert-verify"])||(e["skip-cert-verify"]=!0)}var x=Math.pow,h=(e,s,t)=>new Promise((n,r)=>{var u=i=>{try{a(t.next(i))}catch(o){r(o)}},c=i=>{try{a(t.throw(i))}catch(o){r(o)}},a=i=>i.done?n(i.value):Promise.resolve(i.value).then(u,c);a((t=t.apply(e,s)).next())});const A="#sub-store-cached-dns",N=7*24*60*60*1e3,m=new _(A,N);function b(e){return h(this,null,function*(){const{ignoreRule:s}=$arguments,t=yield E(),n=(c,a)=>w(c.regex).test(a.name),r=(c,a)=>c.ports.some(i=>i===a.port),u=(c,a)=>h(this,null,function*(){return(yield Promise.all(c.ips.map(o=>T(a.server,o)))).some(o=>o)});for(const c of e){let a="";for(const i in t){const o=t[i];if(l(o)){if(i==="default"){a=o.sni;continue}if((!s||!/true/i.test(s))&&(!l(o.skip)||!o.skip)){const p=[];if(l(o.regex)&&p.push(n),l(o.ports)&&p.push(r),l(o.ips)&&p.push(u),yield D(p,o,c)){a=o.sni;break}}}}O(c,a)}return e})}function D(e,s,t){return h(this,null,function*(){return(yield Promise.all(e.map(r=>r(s,t)))).every(r=>r)})}function T(e,s){return h(this,null,function*(){let t=e;if(I(e)){const n=m.get(e);if(n)t=n;else{const r=yield R(e);t=r,r&&m.set(e,r)}}return M(t,s)})}function M(e,s){if(!k(e))return!1;if(s.indexOf("/")<0)return!!(e===s||P(e,s)&&$(s)==="*");let t,n;const r=f(e);if((t=s.match(/^(.*?)\/(\d{1,2})$/))&&(n=f(t[1]))>=0){const u=x(2,32-parseInt(t[2]));return r>=n&&r<=n+u-1}return!1}window.operator=b})();})();
