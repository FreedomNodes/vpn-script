/*!
 substore-tools - version: 1.8.1
 Build fullhash:978b3a58eee77459663a, chunkhash:26d09a469707f52313da (2024-05-19 02:25:01)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var a={};const i={},e=JSON.parse(typeof $response!="undefined"&&$response.body||null),n=$request.headers["User-Agent"]||$request.headers["user-agent"],s={VSCO:{name:"membership",id:"com.circles.fin.premium.yearly"},"1Blocker":{name:"premium",id:"blocker.ios.subscription.yearly"},Anybox:{name:"pro",id:"cc.anybox.Anybox.annual"},Fileball:{name:"filebox_pro",id:"com.premium.yearly"},ipTV:{name:"ipTV +",id:"iptv_9.99_1y_7d_free"}},t={expires_date:"2099-02-18T07:52:54Z",original_purchase_date:"2020-02-11T07:52:55Z",purchase_date:"2020-02-11T07:52:54Z"};if(typeof $response=="undefined")delete $request.headers["x-revenuecat-etag"],delete $request.headers["X-RevenueCat-ETag"],i.headers=$request.headers;else if(e&&e.subscriber){e.subscriber.subscriptions=e.subscriber.subscriptions||{},e.subscriber.entitlement=e.subscriber.entitlement||{};for(const r in s)if(new RegExp(`^${r}`,"i").test(n)){e.subscriber.subscriptions[s[r].id]=t,e.subscriber.entitlements[s[r].name]=JSON.parse(JSON.stringify(t)),e.subscriber.entitlements[s[r].name].product_identifier=s[r].id;break}i.body=JSON.stringify(e).replace(/\"expires_date\":\"\w{4}/g,'"expires_date":"2099').replace(/\"period_type\":\"\w+\"/g,'"period_type":"active"')}$done(i)})();})();
