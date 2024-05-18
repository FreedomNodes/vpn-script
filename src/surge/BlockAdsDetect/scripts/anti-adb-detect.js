/*!
 substore-tools - version: 1.8.1
 Build fullhash:978b3a58eee77459663a, chunkhash:9ac90c4b3aa5505548f0 (2024-05-19 02:33:53)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var r={};const o=/(Adblock|blocking|deblocker|pagead)/g;let{body:e}=$response;const s=/(<|%3C)script[\s\S]*?(>|%3E)[\s\S]*?(<|%3C)(\/|%2F)script[\s\S]*?(>|%3E)/g;let t=(e==null?void 0:e.match(s))||[];t=(t==null?void 0:t.filter(c=>c.match(o)))||[];for(const c in t)e=e.replace(t[c],"");$done({body:e})})();})();
