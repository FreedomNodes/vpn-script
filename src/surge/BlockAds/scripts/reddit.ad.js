/*!
 substore-tools - version: 1.6.0
 Build fullhash:d580f5aa2c62c68065d9, chunkhash:98d7d1984e67eecaaa28 (2024-05-16 15:33:18)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var s={};if($response.body.includes("adEvents")){const e=JSON.parse($response.body);e.data.subredditInfoByName?(e.data.subredditInfoByName.elements.edges=e.data.subredditInfoByName.elements.edges.filter(d=>!d.node.adEvents),$done({body:JSON.stringify(e)})):e.data.home?(e.data.home.elements.edges=e.data.home.elements.edges.filter(d=>!d.node.adEvents),$done({body:JSON.stringify(e)})):$done({})}else $done({})})();})();
