/*!
 substore-tools - version: 1.2.3
 Build fullhash:084113a448a1c331f0d6, chunkhash:c880e97631479f66ebbf (2024-05-11 22:22:51)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var l={};$httpClient.get("http://ip-api.com/json",(n,e,o)=>{const t=JSON.parse(o),{country:c}=t,r=s(t.countryCode),{city:i}=t,{isp:a}=t,p={title:"IP Check",content:`IP: ${t.query}
Operator: ${a}
Location: ${i} - ${c}${r}`,icon:"globe.asia.australia.fill"};$done(p)});function s(n){const e=n.toUpperCase().split("").map(o=>127397+o.charCodeAt());return String.fromCodePoint(...e)}})();})();
