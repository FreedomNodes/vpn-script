/*!
 substore-tools - version: 1.3.0
 Build fullhash:03ee405b98dac987496a, chunkhash:98d7d1984e67eecaaa28 (2024-05-12 16:42:41)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var s={};if($response.body.includes("adEvents")){const e=JSON.parse($response.body);e.data.subredditInfoByName?(e.data.subredditInfoByName.elements.edges=e.data.subredditInfoByName.elements.edges.filter(d=>!d.node.adEvents),$done({body:JSON.stringify(e)})):e.data.home?(e.data.home.elements.edges=e.data.home.elements.edges.filter(d=>!d.node.adEvents),$done({body:JSON.stringify(e)})):$done({})}else $done({})})();})();
