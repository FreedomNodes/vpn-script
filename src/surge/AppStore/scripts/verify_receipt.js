/*!
 substore-tools - version: 1.3.0
 Build fullhash:03ee405b98dac987496a, chunkhash:714bfcd9729421d78ad1 (2024-05-12 16:18:52)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var i={};r('("expires_date"):"\\w{4}@("expires_date_pst"):"\\w{4}@("expires_date_ms"):"\\w+"@("is_trial_period"):"\\w+"','$1:"2099@$1:"2099@$1:"4096019658000"@$1:"false"');function r(){let{body:e}=$response;if(e||$done({}),arguments[0].includes("@")){const s=arguments[0].split("@"),n=arguments[1].split("@");for(let t=0;t<s.length;t++){const a=new RegExp(s[t],"g");e=e.replace(a,n[t])}}else{const s=new RegExp(arguments[0],"g");e=e.replace(s,arguments[1])}$done({body:e})}})();})();
