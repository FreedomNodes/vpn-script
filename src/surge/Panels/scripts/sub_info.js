/*!
 substore-tools - version: 1.8.1
 Build fullhash:fe452be1c47d9f6e6850, chunkhash:4e37224aaf73b99de58b (2024-05-21 11:24:59)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var y={5326:function(){var E=Math.pow,F=(t,e,n)=>new Promise((a,o)=>{var u=i=>{try{s(n.next(i))}catch(c){o(c)}},m=i=>{try{s(n.throw(i))}catch(c){o(c)}},s=i=>i.done?a(i.value):Promise.resolve(i.value).then(u,m);s((n=n.apply(t,e)).next())});const r=B(),$=r.urls.split("|");F(this,null,function*(){const t=[];for(let e=0;e<$.length;e++){const[n,a]=yield v($[e]).then(o=>[null,o]).catch(o=>[o,null]);if(n){console.log(n);continue}t.push(...a)}t.push("\u2500\u2500\u2500\u2500\u2500\u2500 \u22C6\u22C5\u2606\u22C5\u22C6 \u2500\u2500\u2500\u2500\u2500\u2500"),$done({title:`${r.title}`,content:t.join(`
`),icon:r.icon||"airplane.circle","icon-color":r.color||"#007aff"})});function v(t){const e={headers:{"User-Agent":"Quantumult%20X"},url:t},n=t.match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i),a=n&&n[1];return new Promise((o,u)=>$httpClient.head(e,(m,s,i)=>{if(!s||s.status!==200){u(m);return}const c=Object.keys(s.headers).find(p=>p.toLowerCase()==="subscription-userinfo");if(!c){u("Not Available");return}const l=Object.fromEntries(s.headers[c].match(/\w+=[\d.eE+-]+/g).map(p=>p.split("=")).map(([p,M])=>[p,Number(M)])),g=b(parseInt(r.reset_day)),w=l.download+l.upload,{total:_}=l;let d=r.expire||l.expire;const h=[D(`\u{1F4E1} ${a} \u{1F4E1}`,50),`Upload: ${f(l.upload)}`,`Download: ${f(l.download)}`,`Usage: ${f(w)} | ${f(_)} (${`${(w/_*100).toFixed(2)}%`})`];g&&h.push(`Reset: ${g} days remaining`),d&&d!=="false"?(/^[\d.]+$/.test(d)&&(d*=1e3),h.push(`Expiration: ${x(d)}`)):h.push("Expiration: \u267E\uFE0F\u2764\uFE0F\u200D\u{1F525}\u267E\uFE0F"),o(h)}))}function B(){return Object.fromEntries($argument.split("&").map(t=>t.split("=")).map(([t,e])=>[t,decodeURIComponent(e)]))}function b(t){if(!t)return;const e=new Date,n=e.getDate(),a=e.getMonth(),o=e.getFullYear();let u;return t>n?u=0:u=new Date(o,a+1,0).getDate(),u-n+t}function f(t){if(t===0)return"0B";const e=1024;sizes=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];const n=Math.floor(Math.log(t)/Math.log(e));return`${(t/E(e,n)).toFixed(2)} ${sizes[n]}`}function x(t){const e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1,o=e.getDate();return`${n}year${a}month${o}day`}function D(t,e,n=" "){return t.padStart((t.length+e)/2,n).padEnd(e,n)}}},C={};y[5326]()})();})();
