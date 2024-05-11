/*!
 substore-tools - version: 1.2.3
 Build fullhash:64991d5a0116e1941681, chunkhash:c971a252a0c1e06f47d5 (2024-05-12 01:25:44)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var $={7248:function(){var d=Math.pow,F=(t,o,e)=>new Promise((n,i)=>{var r=s=>{try{c(e.next(s))}catch(l){i(l)}},f=s=>{try{c(e.throw(s))}catch(l){i(l)}},c=s=>s.done?n(s.value):Promise.resolve(s.value).then(r,f);c((e=e.apply(t,o)).next())});const B=E();F(this,null,function*(){const o=(yield S("/v1/traffic")).interface,e=[];for(const u in o)e.push(u);e.includes("lo0")===!0&&_(e,"lo0");let n,i;if($persistentStore.read("NETWORK")==null||e.includes($persistentStore.read("NETWORK"))===!1)i=0;else{n=$persistentStore.read("NETWORK");for(let u=0;u<e.length;++u)n===e[u]&&(i=u)}$trigger==="button"&&(e.length>1&&(i+=1),i>=e.length&&(i=0),$persistentStore.write(e[i],"NETWORK")),n=e[i];const r=o[n],f=a(r.outCurrentSpeed),c=a(r.outMaxSpeed),s=h(r.in),l=h(r.out),M=a(r.inMaxSpeed),m=a(r.inCurrentSpeed);let p;n==="en0"?p="WiFi":p="Cellular",$done({title:`Traffic Statistics | ${p}`,content:`Traffic \u279F \u2B07\uFE0F${s} | \u2B06\uFE0F${l}
Speed \u279F \u2B07\uFE0F${m} | \u2B06\uFE0F${f}
Peak \u279F \u2B07\uFE0F${M} | \u2B06\uFE0F${c}`,icon:B.icon,"icon-color":B.color})});function h(t){if(t===0)return"0B";const o=1024,e=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(t)/Math.log(o));return`${(t/d(o,n)).toFixed(2)} ${e[n]}`}function a(t){if(t===0)return"0B/s";const o=1024,e=["B/s","KB/s","MB/s","GB/s","TB/s","PB/s","EB/s","ZB/s","YB/s"],n=Math.floor(Math.log(t)/Math.log(o));return`${(t/d(o,n)).toFixed(2)} ${e[n]}`}function S(t="",o="GET",e=null){return new Promise(n=>{$httpAPI(o,t,e,i=>{n(i)})})}function E(){return Object.fromEntries($argument.split("&").map(t=>t.split("=")).map(([t,o])=>[t,decodeURIComponent(o)]))}function _(t,o){const e=t.length;for(let n=0;n<e;n++)t[0]!==o&&t.push(t[0]),t.shift(t[0]);return t}}},T={};$[7248]()})();})();
