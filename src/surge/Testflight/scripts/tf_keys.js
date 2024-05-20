/*!
 substore-tools - version: 1.8.1
 Build fullhash:21d96bbaf966acf05890, chunkhash:98da6f94b1cfc5c0c6db (2024-05-21 05:48:24)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var r={};$persistentStore.write(null,"request_id");const e=$request.url.replace(/(.*accounts\/)(.*)(\/apps)/,"$2"),s=$request.headers["x-session-id"]||$request.headers["X-Session-Id"],t=$request.headers["x-session-digest"]||$request.headers["X-Session-Digest"],i=$request.headers["x-request-id"]||$request.headers["X-Request-Id"];$persistentStore.write(e,"key"),$persistentStore.write(s,"session_id"),$persistentStore.write(t,"session_digest"),$persistentStore.write(i,"request_id"),$persistentStore.read("request_id")!==null?$notification.post("Please close this script","Information obtained successfully",""):$notification.post("Failed to obtain information","Please turn on the MITM H2 switch and add testflight.apple.com",""),$done({})})();})();
