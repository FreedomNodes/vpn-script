
 /*
 fullhash:e1370f1030e67aed30a4, chunkhash:717edae2369a6b14aa98, file:surge/Quizlet/scripts/quizlet.js
 author: Kien Tran
 */
(()=>{(()=>{"use strict";var g={};t('"_isEligibleForFreeTrial":\\w+@"type":\\d','"_isEligibleForFreeTrial":false@"type":1');function t(){let{body:e}=$response;if(arguments[0].includes("@")){const s=arguments[0].split("@"),n=arguments[1].split("@");for(let r=0;r<s.length;r++){const l=new RegExp(s[r],"g");e=e.replace(l,n[r])}}else{const s=new RegExp(arguments[0],"g");e=e.replace(s,arguments[1])}$done({body:e})}})();})();
