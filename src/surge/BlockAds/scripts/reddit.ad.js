/*!
 Made with ❤️ in Hanoi
 Build fullhash:2af83bd1581f295b28b6, chunkhash:37c9b9d6c6fcbeb7aebd (2024-05-18 19:15:03)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var s={};if($response.body.includes("adEvents")){const e=JSON.parse($response.body);e.data.subredditInfoByName?(e.data.subredditInfoByName.elements.edges=e.data.subredditInfoByName.elements.edges.filter(d=>!d.node.adEvents),$done({body:JSON.stringify(e)})):e.data.home?(e.data.home.elements.edges=e.data.home.elements.edges.filter(d=>!d.node.adEvents),$done({body:JSON.stringify(e)})):$done({})}else $done({})})();})();
