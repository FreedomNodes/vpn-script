/*!
 substore-tools - version: 1.1.0
 Build fullhash:27fa4bb060a71beb3668, chunkhash:98d7d1984e67eecaaa28 (2024-05-10 08:10:27)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var s={};if($response.body.includes("adEvents")){const e=JSON.parse($response.body);e.data.subredditInfoByName?(e.data.subredditInfoByName.elements.edges=e.data.subredditInfoByName.elements.edges.filter(d=>!d.node.adEvents),$done({body:JSON.stringify(e)})):e.data.home?(e.data.home.elements.edges=e.data.home.elements.edges.filter(d=>!d.node.adEvents),$done({body:JSON.stringify(e)})):$done({})}else $done({})})();})();
