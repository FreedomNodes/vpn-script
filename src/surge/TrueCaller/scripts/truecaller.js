/*!
 substore-tools - version: 1.1.0
 Build fullhash:27fa4bb060a71beb3668, chunkhash:466ed6a4073c35b85643 (2024-05-10 08:10:27)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var a={};function r(d){return d.test($request.url)?$request.url:""}const t=[{id:"siri_search",rank:1,status:"Included"},{id:"no_ads",rank:2,status:"Included"},{id:"spam_blocking",rank:-2147483648,status:"Included"},{id:"extended_spam_blocking",rank:3,status:"Included"},{id:"caller_id",rank:-2147483648,status:"Included"},{id:"ct_call_recording",rank:7,status:"Included"},{id:"who_viewed_my_profile",rank:9,status:"Included"},{id:"incognito_mode",rank:11,status:"Included"},{id:"premium_badge",rank:15,status:"Included"},{id:"premium_support",rank:16,status:"Included"},{id:"live_chat_support",rank:17,status:"Included"},{id:"premium_app_icon",rank:19,status:"Included"},{id:"gold_caller_id",rank:20,status:"Included"}];let e;switch($request.url){case r(/subscriptions\/status/):e={expire:"2030-01-01T01:01:01Z",start:"2024-01-07T02:32:04Z",paymentProvider:"Apple",isExpired:!1,isGracePeriodExpired:!1,subscriptionStatus:"INITIAL_BUY",inAppPurchaseAllowed:!0,product:{id:"renewable.gold.annual",sku:"renewable.gold.annual",contentType:"subscription",productType:"GoldYearly",isFreeTrial:!0},tier:{id:"gold",feature:t}};break;case r(/products\/apple/):e={tier:[{id:"gold",product:[{productType:"GoldYearly",id:"renewable.gold.annual",sku:"renewable.gold.annual",contentType:"subscription",rank:6,paymentProvider:"Apple",clientProductMetadata:{selectionRank:5,displayOrder:5,isEntitledPremiumScreenProduct:!1}}],feature:t,rank:5}]};break}$done({body:JSON.stringify(e)})})();})();
