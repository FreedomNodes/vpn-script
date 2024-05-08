
 /*
 fullhash:e1370f1030e67aed30a4, chunkhash:e96d57b3da30db9e1845, file:surge/BlockAds/scripts/reddit.ad.js
 author: Kien Tran
 */
(()=>{(()=>{"use strict";var s={};if($response.body.includes("adEvents")){const e=JSON.parse($response.body);e.data.subredditInfoByName?(e.data.subredditInfoByName.elements.edges=e.data.subredditInfoByName.elements.edges.filter(d=>!d.node.adEvents),$done({body:JSON.stringify(e)})):e.data.home?(e.data.home.elements.edges=e.data.home.elements.edges.filter(d=>!d.node.adEvents),$done({body:JSON.stringify(e)})):$done({})}else $done({})})();})();
