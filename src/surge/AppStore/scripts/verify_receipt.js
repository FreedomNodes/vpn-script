/*!
 substore-tools - version: 1.8.1
 Build fullhash:21d96bbaf966acf05890, chunkhash:714bfcd9729421d78ad1 (2024-05-20 13:59:27)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var i={};r('("expires_date"):"\\w{4}@("expires_date_pst"):"\\w{4}@("expires_date_ms"):"\\w+"@("is_trial_period"):"\\w+"','$1:"2099@$1:"2099@$1:"4096019658000"@$1:"false"');function r(){let{body:e}=$response;if(e||$done({}),arguments[0].includes("@")){const s=arguments[0].split("@"),n=arguments[1].split("@");for(let t=0;t<s.length;t++){const a=new RegExp(s[t],"g");e=e.replace(a,n[t])}}else{const s=new RegExp(arguments[0],"g");e=e.replace(s,arguments[1])}$done({body:e})}})();})();
