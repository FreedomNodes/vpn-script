/*!
 substore-tools - version: 1.2.1
 Build fullhash:19201e3fd76f66b30241, chunkhash:22491d1740ba73ec4648 (2024-05-11 13:48:29)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var p={9023:function(){var s=(n,e,t)=>new Promise((i,a)=>{var u=o=>{try{_(t.next(o))}catch(r){a(r)}},y=o=>{try{_(t.throw(o))}catch(r){a(r)}},_=o=>o.done?i(o.value):Promise.resolve(o.value).then(u,y);_((t=t.apply(n,e)).next())});const l={"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36","Accept-Language":"en"};s(this,null,function*(){const n={title:"Delay test",content:""};yield Promise.all([c(),m()]).then(e=>{const t=e.join("");n.content=t}).finally(()=>{$done(n)})});function c(){return s(this,null,function*(){const n=()=>new Promise(e=>{const t={url:"https://www.youtube.com",headers:l};youtube_startTime=Date.now(),$httpClient.post(t,(i,a,u)=>{youtube_endTime=Date.now(),e("1")})});return youtube_test_result="\xA0YouTube \u279F ",yield n().then(e=>{youtube_Delay=`${youtube_endTime-youtube_startTime}`,e==="1"&&(youtube_test_result+=`${youtube_Delay}ms\xA0  `)}),youtube_test_result})}function m(){return s(this,null,function*(){const n=()=>new Promise(e=>{const t={url:"https://openai.app2022.ml",headers:l};openai_team_startTime=Date.now(),$httpClient.post(t,(i,a,u)=>{openai_team_endTime=Date.now(),e("1")})});return openai_team_test_result="\xA0openai_team \u279F ",yield n().then(e=>{openai_team_Delay=`${openai_team_endTime-openai_team_startTime}`,e==="1"&&(openai_team_test_result+=`${openai_team_Delay}ms`)}),openai_team_test_result})}}},h={};p[9023]()})();})();
