/*
 fullhash:344ad5fb64a5d7471216, chunkhash:c797f57b44d3e4c1a14d, file:surge/Testflight/scripts/testflight.js
 author: Kien Tran
 */
(()=>{(()=>{"use strict";var p={};function o(s){const t=s.match(/^\/(.*?)\/([gims]*)$/);return t?new RegExp(t[1],t[2]):new RegExp(s)}let e;typeof $argument=="undefined"?console.log("requires $argument"):$script.type==="http-response"?e=$response.body:$script.type==="http-request"?e=$request.body:console.log("script type error"),e?($argument.split("&").forEach(s=>{const[t,r]=s.split("->"),n=o(t);e=e.replace(n,r)}),$done({body:e})):(console.log("Not Modify"),$done({}))})();})();
