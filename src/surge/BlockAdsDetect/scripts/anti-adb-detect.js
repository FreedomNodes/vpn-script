/*!
 substore-tools - version: 1.1.0
 Build fullhash:27fa4bb060a71beb3668, chunkhash:9ac90c4b3aa5505548f0 (2024-05-10 08:10:27)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var r={};const o=/(Adblock|blocking|deblocker|pagead)/g;let{body:e}=$response;const s=/(<|%3C)script[\s\S]*?(>|%3E)[\s\S]*?(<|%3C)(\/|%2F)script[\s\S]*?(>|%3E)/g;let t=(e==null?void 0:e.match(s))||[];t=(t==null?void 0:t.filter(c=>c.match(o)))||[];for(const c in t)e=e.replace(t[c],"");$done({body:e})})();})();
