/*!
 substore-tools - version: 1.8.1
 Build fullhash:978b3a58eee77459663a, chunkhash:5d28928c92120aa07c8d (2024-05-19 02:02:24)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var g={};t('"_isEligibleForFreeTrial":\\w+@"type":\\d','"_isEligibleForFreeTrial":false@"type":1');function t(){let{body:e}=$response;if(arguments[0].includes("@")){const s=arguments[0].split("@"),n=arguments[1].split("@");for(let r=0;r<s.length;r++){const l=new RegExp(s[r],"g");e=e.replace(l,n[r])}}else{const s=new RegExp(arguments[0],"g");e=e.replace(s,arguments[1])}$done({body:e})}})();})();
