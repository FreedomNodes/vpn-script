/*
 fullhash:344ad5fb64a5d7471216, chunkhash:490128f998a7c032e721, file:surge/Panels/scripts/net_info.js
 author: Kien Tran
 */
(()=>{(()=>{"use strict";var u={417:function(){var m=(o,r,t)=>new Promise((c,n)=>{var s=e=>{try{p(t.next(e))}catch(l){n(l)}},a=e=>{try{p(t.throw(e))}catch(l){n(l)}},p=e=>e.done?c(e.value):Promise.resolve(e.value).then(s,a);p((t=t.apply(o,r)).next())});m(this,null,function*(){const o=y(),r=yield i("/v1/policy_groups"),t=[];for(const s in r)t.push(s);const{group:c}=o;let n=(yield i(`/v1/policy_groups/select?group_name=${encodeURIComponent(c)}`)).policy;for(;t.includes(n)===!0;)n=(yield i(`/v1/policy_groups/select?group_name=${encodeURIComponent(n)}`)).policy;$httpClient.get("http://ip-api.com/json/?lang=en",(s,a,p)=>{const e=JSON.parse(p);$done({title:n,content:`Country/Region: ${e.country} - ${e.city}
Operator: ${e.isp}
Data Center: ${e.org}`,icon:o.icon,"icon-color":o.color})})});function i(o="",r="GET",t=null){return new Promise(c=>{$httpAPI(r,o,t,n=>{c(n)})})}function y(){return Object.fromEntries($argument.split("&").map(o=>o.split("=")).map(([o,r])=>[o,decodeURIComponent(r)]))}}},_={};u[417]()})();})();
