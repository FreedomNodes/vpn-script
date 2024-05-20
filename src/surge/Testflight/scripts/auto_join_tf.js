/*!
 substore-tools - version: 1.8.1
 Build fullhash:21d96bbaf966acf05890, chunkhash:855607e113957bfcf92e (2024-05-20 11:32:32)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var f={3145:function(){var p=(e,s)=>(s=Symbol[e])?s:Symbol.for("Symbol."+e),$=(e,s,n)=>new Promise((a,o)=>{var t=r=>{try{i(n.next(r))}catch(c){o(c)}},l=r=>{try{i(n.throw(r))}catch(c){o(c)}},i=r=>r.done?a(r.value):Promise.resolve(r.value).then(t,l);i((n=n.apply(e,s)).next())}),h=(e,s,n)=>(s=e[p("asyncIterator")])?s.call(e):(e=e[p("iterator")](),s={},n=(a,o)=>(o=e[a])&&(s[a]=t=>new Promise((l,i,r)=>(t=o.call(e,t),r=t.done,Promise.resolve(t.value).then(c=>l({value:c,done:r}),i)))),n("next"),n("return"),s);if(typeof $request!="undefined"&&$request){const e=$request.url,s=/^https:\/\/testflight\.apple\.com\/v3\/accounts\/(.*?)\/apps/,n=e.match(s)?e.match(s)[1]:null,a=o=>{if(o&&o[1]){const t=o[1],l=$persistentStore.read("APP_ID"),i=new Set(l?l.split(","):[]);i.has(t)?($notification.post("APP_ID is duplicated","",`APP_ID: ${t} It already exists, no need to add it again.`,{"auto-dismiss":2}),console.log(`APP_ID: ${t} It already exists, no need to add it again.`)):(i.add(t),$persistentStore.write(Array.from(i).join(","),"APP_ID"),$notification.post("APP_ID captured","",`APP_ID captured and stored: ${t}`,{"auto-dismiss":2}),console.log(`APP_ID captured and stored: ${t}`))}else console.log("No valid TestFlight APP_ID captured")};if(/^https:\/\/testflight\.apple\.com\/v3\/accounts\/.*\/apps$/.test(e)&&n){const o=Object.fromEntries(Object.entries($request.headers).map(([c,u])=>[c.toLowerCase(),u])),t=o["x-session-id"],l=o["x-session-digest"],i=o["x-request-id"];$persistentStore.write(t,"session_id"),$persistentStore.write(l,"session_digest"),$persistentStore.write(i,"request_id"),$persistentStore.write(n,"key"),$persistentStore.read("APP_ID")||$notification.post("Information obtained successfully \u{1F389}","","Please obtain the APP_ID and edit the module parameters to disable the script.",{"auto-dismiss":10}),console.log(`Information obtained successfully: session_id=${t}, session_digest=${l}, request_id=${i}, key=${n}`)}else if(/^https:\/\/testflight\.apple\.com\/join\/([A-Za-z0-9]+)$/.test(e)){const o=e.match(/^https:\/\/testflight\.apple\.com\/join\/([A-Za-z0-9]+)$/);a(o)}else if(/v3\/accounts\/.*\/ru/.test(e)){const o=e.match(/v3\/accounts\/.*\/ru\/(.*)/);a(o)}$done({})}else $(this,null,function*(){let e=$persistentStore.read("APP_ID");if(!e)console.log("APP_ID not detected"),$done();else{e=e.split(",");try{for(var s=h(e),n,a,o;n=!(a=yield s.next()).done;n=!1){const t=a.value;yield _(t,e)}}catch(t){o=[t]}finally{try{n&&(a=s.return)&&(yield a.call(s))}finally{if(o)throw o[0]}}e.length===0?($notification.post("All TestFlights have been added \u{1F389}","","The module has automatically shut down and stopped running.",{sound:!0}),$done($httpAPI("POST","/v1/modules",{\u516C\u6D4B\u76D1\u63A7:!1}))):$done()}});function _(e,s){return $(this,null,function*(){const a=`https://testflight.apple.com/v3/accounts/${$persistentStore.read("key")}/ru/`,o={"X-Session-Id":$persistentStore.read("session_id"),"X-Session-Digest":$persistentStore.read("session_digest"),"X-Request-Id":$persistentStore.read("request_id")};return new Promise(t=>{$httpClient.get({url:a+e,headers:o},(l,i,r)=>{if(l){console.log(`${e} Network request failed: ${l}\uFF0CKeep APP_ID`),t();return}if(i.status===500){console.log(`${e} Server error, status code 500, reserved APP_ID`),t();return}if(i.status!==200){console.log(`${e} Not a valid link: status code ${i.status}\uFF0CRemove APP_ID`),s.splice(s.indexOf(e),1),$persistentStore.write(s.join(","),"APP_ID"),$notification.post("Not a valid TestFlight link","",`${e} has been removed`,{"auto-dismiss":2}),t();return}let c;try{c=JSON.parse(r)}catch(u){console.log(`${e} Response parsing failed: ${u}\uFF0Ckeep APP_ID`),t();return}if(!c||!c.data){console.log(`${e} Unable to accept invitation, keep APP_ID`),t();return}if(c.data.status==="FULL"){console.log(`${e} Test is full, keep APP_ID`),t();return}$httpClient.post({url:`${a+e}/accept`,headers:o},(u,P,A)=>{if(!u&&P.status===200){let d;try{d=JSON.parse(A)}catch(g){console.log(`${e} Join request response parsing failed: ${g}\uFF0CKeep APP_ID`),t();return}console.log(`${d.data.name} TestFlight joined successfully`),s.splice(s.indexOf(e),1),$persistentStore.write(s.join(","),"APP_ID"),s.length>0?$notification.post(`${d.data.name} TestFlight joined successfully`,"",`Continue to execute APP ID\uFF1A${s.join(",")}`,{sound:!0}):$notification.post(`${d.data.name} TestFlight joined successfully`,"","All APP IDs have been processed",{sound:!0})}else console.log(`${e} Failed to join: ${u||`status code ${P.status}`}\uFF0CKeep APP_ID`);t()})})})})}}},y={};f[3145]()})();})();
