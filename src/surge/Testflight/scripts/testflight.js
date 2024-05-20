/*!
 substore-tools - version: 1.8.1
 Build fullhash:21d96bbaf966acf05890, chunkhash:41a0d3165d160b523103 (2024-05-21 05:48:24)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var p={};function o(s){const t=s.match(/^\/(.*?)\/([gims]*)$/);return t?new RegExp(t[1],t[2]):new RegExp(s)}let e;typeof $argument=="undefined"?console.log("requires $argument"):$script.type==="http-response"?e=$response.body:$script.type==="http-request"?e=$request.body:console.log("script type error"),e?($argument.split("&").forEach(s=>{const[t,r]=s.split("->"),n=o(t);e=e.replace(n,r)}),$done({body:e})):(console.log("Not Modify"),$done({}))})();})();
