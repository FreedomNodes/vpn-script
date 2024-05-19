/*!
 substore-tools - version: 1.8.1
 Build fullhash:21d96bbaf966acf05890, chunkhash:68358b59f138ac12ac3b (2024-05-20 02:35:47)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var d={7375:function(){var u=(n,i,t)=>new Promise((r,e)=>{var o=l=>{try{c(t.next(l))}catch(a){e(a)}},f=l=>{try{c(t.throw(l))}catch(a){e(a)}},c=l=>l.done?r(l.value):Promise.resolve(l.value).then(o,f);c((t=t.apply(n,i)).next())});u(this,null,function*(){const n={title:"Flush DNS"};let i=!0,t;if(typeof $argument!="undefined"){const e=Object.fromEntries($argument.split("&").map(o=>o.split("=")));e.title&&(n.title=e.title),e.icon&&(n.icon=e.icon),e.color&&(n["icon-color"]=e.color),e.server=="false"&&(i=!1)}i&&(t=(yield s("/v1/dns","GET")).dnsCache,t=[...new Set(t.map(e=>e.server))].toString().replace(/,/g,`
`)),$trigger=="button"&&(yield s("/v1/dns/flush"));const r=((yield s("/v1/test/dns_delay")).delay*1e3).toFixed(0);n.content=`DNS latency: ${r}ms${t?`
server:
${t}`:""}`,$done(n)});function s(n="",i="POST",t=null){return new Promise(r=>{$httpAPI(i,n,t,e=>{r(e)})})}}},v={};d[7375]()})();})();
