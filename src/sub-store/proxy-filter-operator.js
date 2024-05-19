/*!
 substore-tools - version: 1.8.1
 Build fullhash:978b3a58eee77459663a, chunkhash:30eadcc7290dd9a027d3 (2024-05-19 18:05:28)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var k={3183:(m,f,l)=>{var E;typeof window!="undefined"?E=window:typeof l.g!="undefined"?E=l.g:typeof self!="undefined"?E=self:E={},m.exports=E},8475:(m,f,l)=>{l.d(f,{A:()=>D});const E=$substore;class h{constructor(i,_){this.key=i,this.expires=_;const o=E.read(i);o?this.resourceCache=JSON.parse(o):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let i=!1;const _=new Date().getTime();Object.keys(this.resourceCache).forEach(o=>{const C=this.resourceCache[o];(!C.time||_-C.time>this.expires)&&(delete this.resourceCache[o],E.delete(`#${o}`),i=!0)}),i&&this._persist()}revokeIds(i){let _=!1;for(const o of i)delete this.resourceCache[o],_=!0;_&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){E.write(JSON.stringify(this.resourceCache),this.key)}get(i){const _=this.resourceCache[i]&&this.resourceCache[i].time;return _&&new Date().getTime()-_<=this.expires?this.resourceCache[i].data:null}set(i,_){this.resourceCache[i]={time:new Date().getTime(),data:_},this._persist()}}const D=h},5254:(m,f,l)=>{l.d(f,{KK:()=>_,Kh:()=>i,Vs:()=>D});var E=l(8475),h=l(9468);const D=new E.A(h.Mn,h.i5),g=new E.A(h.Dh,h.i5),i=new E.A(h.dT,h.i5),_=new E.A(h.v9,h.i5)},423:(m,f,l)=>{l.d(f,{ru:()=>h});var E=(i,_,o)=>new Promise((C,S)=>{var y=v=>{try{P(o.next(v))}catch(K){S(K)}},T=v=>{try{P(o.throw(v))}catch(K){S(K)}},P=v=>v.done?C(v.value):Promise.resolve(v.value).then(y,T);P((o=o.apply(i,_)).next())});function h(){return E(this,null,function*(){const i=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(i)})}function D(){return E(this,null,function*(){const i=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(i)})}function g(i){return E(this,null,function*(){const _=normalizeString(i),o=yield D();let C="";for(const S in o)if(containsIgnoreCase(_,normalizeString(S))){C=S;break}return o[C]})}},9468:(m,f,l)=>{l.d(f,{Dh:()=>T,Mn:()=>C,dT:()=>S,i5:()=>P,v9:()=>y});const E="schemaVersion",h="settings",D="subs",g="collections",i="files",_="modules",o="artifacts",C="#sub-store-cached-dns",S="#sub-store-cached-isp",y="#sub-store-cached-region",T="#sub-store-cached-country",P=7*24*60*60*1e3},8599:(m,f,l)=>{l.d(f,{fs:()=>g,ik:()=>i});const E={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["\u6D41\u91CF","\u65F6\u95F4","\u8FC7\u671F","Bandwidth","Expire"],"\u{1F1F8}\u{1F1F1}":["\u5E94\u6025","\u6D4B\u8BD5\u8282\u70B9"],"\u{1F1E6}\u{1F1E9}":["Andorra","\u5B89\u9053\u5C14"],"\u{1F1E6}\u{1F1EA}":["United Arab Emirates","\u963F\u8054\u914B","\u8FEA\u62DC"],"\u{1F1E6}\u{1F1EB}":["Afghanistan","\u963F\u5BCC\u6C57"],"\u{1F1E6}\u{1F1F1}":["Albania","\u963F\u5C14\u5DF4\u5C3C\u4E9A","\u963F\u723E\u5DF4\u5C3C\u4E9E"],"\u{1F1E6}\u{1F1F2}":["Armenia","\u4E9A\u7F8E\u5C3C\u4E9A"],"\u{1F1E6}\u{1F1F7}":["Argentina","\u963F\u6839\u5EF7"],"\u{1F1E6}\u{1F1F9}":["Austria","\xDAc","\u5965\u5730\u5229","\u5967\u5730\u5229","\u7EF4\u4E5F\u7EB3"],"\u{1F1E6}\u{1F1FA}":["Australia","\u6FB3\u5927\u5229\u4E9A","\u6FB3\u6D32","\u58A8\u5C14\u672C","\u6089\u5C3C","\u571F\u6FB3","\u4EAC\u6FB3","\u5EE3\u6FB3","\u6EEC\u6FB3","\u6CAA\u6FB3","\u5E7F\u6FB3","Sydney"],"\u{1F1E6}\u{1F1FF}":["Azerbaijan","\u963F\u585E\u62DC\u7586"],"\u{1F1E7}\u{1F1E6}":["Bosnia and Herzegovina","\u6CE2\u9ED1\u5171\u548C\u56FD","\u6CE2\u9ED1"],"\u{1F1E7}\u{1F1E9}":["Bangladesh","\u5B5F\u52A0\u62C9\u56FD","\u5B5F\u52A0\u62C9"],"\u{1F1E7}\u{1F1EA}":["Belgium","\u6BD4\u5229\u65F6","\u6BD4\u5229\u6642"],"\u{1F1E7}\u{1F1EC}":["Bulgaria","\u4FDD\u52A0\u5229\u4E9A","\u4FDD\u52A0\u5229\u4E9E"],"\u{1F1E7}\u{1F1ED}":["Bahrain","\u5DF4\u6797"],"\u{1F1E7}\u{1F1F7}":["Brazil","\u5DF4\u897F","\u5723\u4FDD\u7F57"],"\u{1F1E7}\u{1F1FE}":["Belarus","\u767D\u4FC4\u7F57\u65AF","\u767D\u4FC4"],"\u{1F1E8}\u{1F1E6}":["Canada","\u52A0\u62FF\u5927","\u8499\u7279\u5229\u5C14","\u6E29\u54E5\u534E","\u6953\u8449","\u67AB\u53F6","\u6ED1\u94C1\u5362","\u591A\u4F26\u591A","Waterloo"],"\u{1F1E8}\u{1F1ED}":["Switzerland","\u745E\u58EB","\u82CF\u9ECE\u4E16","Zurich"],"\u{1F1E8}\u{1F1F1}":["Chile","\u667A\u5229"],"\u{1F1E8}\u{1F1F4}":["Colombia","\u54E5\u4F26\u6BD4\u4E9A"],"\u{1F1E8}\u{1F1F7}":["Costa Rica","\u54E5\u65AF\u8FBE\u9ECE\u52A0"],"\u{1F1E8}\u{1F1FE}":["Cyprus","\u585E\u6D66\u8DEF\u65AF"],"\u{1F1E8}\u{1F1FF}":["Czechia","\u6377\u514B"],"\u{1F1E9}\u{1F1EA}":["German","\u5FB7\u56FD","\u5FB7\u570B","\u4EAC\u5FB7","\u6EEC\u5FB7","\u5EE3\u5FB7","\u6CAA\u5FB7","\u5E7F\u5FB7","\u6CD5\u5170\u514B\u798F","Frankfurt"],"\u{1F1E9}\u{1F1F0}":["Denmark","\u4E39\u9EA6","\u4E39\u9EA5"],"\u{1F1EA}\u{1F1E8}":["Ecuador","\u5384\u74DC\u591A\u5C14"],"\u{1F1EA}\u{1F1EA}":["Estonia","\u7231\u6C99\u5C3C\u4E9A"],"\u{1F1EA}\u{1F1EC}":["Egypt","\u57C3\u53CA"],"\u{1F1EA}\u{1F1F8}":["Spain","\u897F\u73ED\u7259"],"\u{1F1EA}\u{1F1FA}":["European Union","\u6B27\u76DF","\u6B27\u7F57\u5DF4"],"\u{1F1EB}\u{1F1EE}":["Finland","\u82AC\u5170","\u82AC\u862D","\u8D6B\u5C14\u8F9B\u57FA"],"\u{1F1EB}\u{1F1F7}":["France","\u6CD5\u56FD","\u6CD5\u570B","\u5DF4\u9ECE"],"\u{1F1EC}\u{1F1E7}":["Great Britain","\u82F1\u56FD","England","United Kingdom","\u4F26\u6566","\u82F1","London"],"\u{1F1EC}\u{1F1EA}":["Georgia","\u683C\u9C81\u5409\u4E9A","\u683C\u9B6F\u5409\u4E9E"],"\u{1F1EC}\u{1F1F7}":["Greece","\u5E0C\u814A","\u5E0C\u81D8"],"\u{1F1ED}\u{1F1F0}":["Hong Kong","Hongkong","\u9999\u6E2F","HongKong","HONG KONG","\u6DF1\u6E2F","\u6CAA\u6E2F","\u547C\u6E2F","\u7A57\u6E2F","\u4EAC\u6E2F","\u6E2F"],"\u{1F1ED}\u{1F1F7}":["Croatia","\u514B\u7F57\u5730\u4E9A","\u514B\u7F85\u5730\u4E9E"],"\u{1F1ED}\u{1F1FA}":["Hungary","\u5308\u7259\u5229"],"\u{1F1EF}\u{1F1F4}":["Jordan","\u7EA6\u65E6"],"\u{1F1EF}\u{1F1F5}":["Japan","\u65E5\u672C","\u4E1C\u4EAC","\u5927\u962A","\u57FC\u7389","\u6CAA\u65E5","\u7A57\u65E5","\u5DDD\u65E5","\u4E2D\u65E5","\u6CC9\u65E5","\u676D\u65E5","\u6DF1\u65E5","\u8FBD\u65E5","\u5E7F\u65E5","\u5927\u5742","Osaka","Tokyo"],"\u{1F1F0}\u{1F1EA}":["Kenya","\u80AF\u5C3C\u4E9A"],"\u{1F1F0}\u{1F1EC}":["Kyrgyzstan","\u5409\u5C14\u5409\u65AF\u65AF\u5766"],"\u{1F1F0}\u{1F1ED}":["Cambodia","\u67EC\u57D4\u5BE8"],"\u{1F1F0}\u{1F1F5}":["North Korea","\u671D\u9C9C"],"\u{1F1F0}\u{1F1F7}":["Korea","\u97E9\u56FD","\u97D3\u570B","\u97E9","\u97D3","\u9996\u5C14","\u6625\u5DDD","Chuncheon","Seoul"],"\u{1F1F0}\u{1F1FF}":["Kazakhstan","\u54C8\u8428\u514B\u65AF\u5766","\u54C8\u8428\u514B"],"\u{1F1EE}\u{1F1E9}":["Indonesia","\u5370\u5C3C","\u5370\u5EA6\u5C3C\u897F\u4E9A","\u96C5\u52A0\u8FBE"],"\u{1F1EE}\u{1F1EA}":["Ireland","\u7231\u5C14\u5170","\u611B\u723E\u862D","\u90FD\u67CF\u6797"],"\u{1F1EE}\u{1F1F1}":["Israel","\u4EE5\u8272\u5217"],"\u{1F1EE}\u{1F1F2}":["Isle of Man","\u9A6C\u6069\u5C9B","\u99AC\u6069\u5CF6"],"\u{1F1EE}\u{1F1F3}":["India","\u5370\u5EA6","\u5B5F\u4E70","MFumbai"],"\u{1F1EE}\u{1F1F7}":["Iran","\u4F0A\u6717"],"\u{1F1EE}\u{1F1F8}":["Iceland","\u51B0\u5C9B","\u51B0\u5CF6"],"\u{1F1EE}\u{1F1F9}":["Italy","\u610F\u5927\u5229","\u7FA9\u5927\u5229","\u7C73\u5170","Nachash"],"\u{1F1F1}\u{1F1F9}":["Lithuania","\u7ACB\u9676\u5B9B"],"\u{1F1F1}\u{1F1FA}":["Luxembourg","\u5362\u68EE\u5821"],"\u{1F1F1}\u{1F1FB}":["Latvia","\u62C9\u8131\u7EF4\u4E9A","Latvija"],"\u{1F1F2}\u{1F1E6}":["Morocco","\u6469\u6D1B\u54E5"],"\u{1F1F2}\u{1F1E9}":["Moldova","\u6469\u5C14\u591A\u74E6","\u6469\u723E\u591A\u74E6"],"\u{1F1F3}\u{1F1EC}":["Nigeria","\u5C3C\u65E5\u5229\u4E9A","\u5C3C\u65E5\u5229\u4E9E"],"\u{1F1F2}\u{1F1F0}":["Macedonia","\u9A6C\u5176\u987F","\u99AC\u5176\u9813"],"\u{1F1F2}\u{1F1F3}":["Mongolia","\u8499\u53E4"],"\u{1F1F2}\u{1F1F4}":["Macao","\u6FB3\u95E8","\u6FB3\u9580","CTM"],"\u{1F1F2}\u{1F1F9}":["Malta","\u9A6C\u8033\u4ED6"],"\u{1F1F2}\u{1F1FD}":["Mexico","\u58A8\u897F\u54E5"],"\u{1F1F2}\u{1F1FE}":["Malaysia","\u9A6C\u6765","\u99AC\u4F86","\u5409\u9686\u5761","\u5927\u99AC"],"\u{1F1F3}\u{1F1F1}":["Netherlands","\u8377\u5170","\u8377\u862D","\u5C3C\u5FB7\u862D","\u963F\u59C6\u65AF\u7279\u4E39"],"\u{1F1F3}\u{1F1F4}":["Norway","\u632A\u5A01"],"\u{1F1F3}\u{1F1F5}":["Nepal","\u5C3C\u6CCA\u5C14"],"\u{1F1F3}\u{1F1FF}":["New Zealand","\u65B0\u897F\u5170","\u65B0\u897F\u862D"],"\u{1F1F5}\u{1F1E6}":["Panama","\u5DF4\u62FF\u9A6C"],"\u{1F1F5}\u{1F1EA}":["Peru","\u79D8\u9C81","\u7955\u9B6F"],"\u{1F1F5}\u{1F1ED}":["Philippines","\u83F2\u5F8B\u5BBE","\u83F2\u5F8B\u8CD3"],"\u{1F1F5}\u{1F1F0}":["Pakistan","\u5DF4\u57FA\u65AF\u5766"],"\u{1F1F5}\u{1F1F1}":["Poland","\u6CE2\u5170","\u6CE2\u862D"],"\u{1F1F5}\u{1F1F7}":["Puerto Rico","\u6CE2\u591A\u9ECE\u5404"],"\u{1F1F5}\u{1F1F9}":["Portugal","\u8461\u8404\u7259"],"\u{1F1F5}\u{1F1FE}":["Paraguay","\u5DF4\u62C9\u572D"],"\u{1F1F7}\u{1F1F4}":["Romania","\u7F57\u9A6C\u5C3C\u4E9A"],"\u{1F1F7}\u{1F1F8}":["Serbia","\u585E\u5C14\u7EF4\u4E9A"],"\u{1F1F7}\u{1F1EA}":["R\xE9union","\u7559\u5C3C\u6C6A","\u6CD5\u5C5E\u7559\u5C3C\u6C6A"],"\u{1F1F7}\u{1F1FA}":["Russia","\u4FC4\u7F57\u65AF","\u4FC4\u56FD","\u4FC4\u7F85\u65AF","\u4F2F\u529B","\u83AB\u65AF\u79D1","\u5723\u5F7C\u5F97\u5821","\u897F\u4F2F\u5229\u4E9A","\u4EAC\u4FC4","\u676D\u4FC4","\u5EE3\u4FC4","\u6EEC\u4FC4","\u5E7F\u4FC4","\u6CAA\u4FC4","Moscow"],"\u{1F1F8}\u{1F1E6}":["Saudi","\u6C99\u7279\u963F\u62C9\u4F2F","\u6C99\u7279"],"\u{1F1F8}\u{1F1EA}":["Sweden","\u745E\u5178"],"\u{1F1F8}\u{1F1EC}":["Singapore","Singapo","\u65B0\u52A0\u5761","\u72EE\u57CE","\u6CAA\u65B0","\u4EAC\u65B0","\u4E2D\u65B0","\u6CC9\u65B0","\u7A57\u65B0","\u6DF1\u65B0","\u676D\u65B0","\u5E7F\u65B0","\u5EE3\u65B0","\u6EEC\u65B0"],"\u{1F1F8}\u{1F1EE}":["Slovenia","\u65AF\u6D1B\u6587\u5C3C\u4E9A"],"\u{1F1F8}\u{1F1F0}":["Slovakia","\u65AF\u6D1B\u4F10\u514B"],"\u{1F1F9}\u{1F1ED}":["Thailand","\u6CF0\u56FD","\u6CF0\u570B","\u66FC\u8C37"],"\u{1F1F9}\u{1F1F3}":["Tunisia","\u7A81\u5C3C\u65AF"],"\u{1F1F9}\u{1F1F7}":["Turkey","T\xFCrkiye","\u571F\u8033\u5176","\u4F0A\u65AF\u5766\u5E03\u5C14"],"\u{1F1F9}\u{1F1FC}":["Taiwan","\u53F0\u6E7E","\u81FA\u7063","\u53F0\u7063","\u4E2D\u83EF\u6C11\u570B","\u4E2D\u534E\u6C11\u56FD","\u53F0\u5317","\u53F0\u4E2D","\u65B0\u5317","\u5F70\u5316","\u53F0","\u81FA","Taipei"],"\u{1F1FA}\u{1F1E6}":["Ukraine","\u4E4C\u514B\u5170","\u70CF\u514B\u862D"],"\u{1F1FA}\u{1F1F8}":["United States","\u7F8E\u56FD","America","\u7F8E","\u4EAC\u7F8E","\u6CE2\u7279\u5170","\u8FBE\u62C9\u65AF","\u4FC4\u52D2\u5188","\u51E4\u51F0\u57CE","\u8D39\u5229\u8499","\u7845\u8C37","\u77FD\u8C37","\u62C9\u65AF\u7EF4\u52A0\u65AF","\u6D1B\u6749\u77F6","\u5723\u4F55\u585E","\u5723\u514B\u62C9\u62C9","\u897F\u96C5\u56FE","\u829D\u52A0\u54E5","\u6CAA\u7F8E","\u54E5\u4F26\u5E03","\u7EBD\u7EA6","Los Angeles","San Jose","Sillicon Valley","Michigan"],"\u{1F1FA}\u{1F1FE}":["Uruguay","\u4E4C\u62C9\u572D"],"\u{1F1FB}\u{1F1EA}":["Venezuela","\u59D4\u5185\u745E\u62C9"],"\u{1F1FB}\u{1F1F3}":["Viet Nam","Vietnam","Vi\u1EC7t Nam","\u8D8A\u5357","\u80E1\u5FD7\u660E"],"\u{1F1FF}\u{1F1E6}":["South Africa","\u5357\u975E"],"\u{1F1E8}\u{1F1F3}":["China","\u4E2D\u56FD","\u4E2D\u570B","\u56DE\u56FD","\u56DE\u570B","\u56FD\u5185","\u570B\u5167","\u534E\u4E1C","\u534E\u897F","\u534E\u5357","\u534E\u5317","\u534E\u4E2D","\u6C5F\u82CF","\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733","\u676D\u5DDE","\u5F90\u5DDE","\u9752\u5C9B","\u5B81\u6CE2","\u9547\u6C5F"]},h={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["EXP","BAND"],"\u{1F1F8}\u{1F1F1}":["TEST","SOS"],"\u{1F1E6}\u{1F1E9}":["AD","AND"],"\u{1F1E6}\u{1F1EA}":["AE","ARE"],"\u{1F1E6}\u{1F1EB}":["AF","AFG"],"\u{1F1E6}\u{1F1F1}":["AL","ALB"],"\u{1F1E6}\u{1F1F2}":["AM","ARM"],"\u{1F1E6}\u{1F1F7}":["AR","ARG"],"\u{1F1E6}\u{1F1F9}":["AT","AUT"],"\u{1F1E6}\u{1F1FA}":["AU","AUS"],"\u{1F1E6}\u{1F1FF}":["AZ","AZE"],"\u{1F1E7}\u{1F1E6}":["BA","BIH"],"\u{1F1E7}\u{1F1E9}":["BD","BGD"],"\u{1F1E7}\u{1F1EA}":["BE","BEL"],"\u{1F1E7}\u{1F1EC}":["BG","BGR"],"\u{1F1E7}\u{1F1ED}":["BH","BHR"],"\u{1F1E7}\u{1F1F7}":["BR","BRA"],"\u{1F1E7}\u{1F1FE}":["BY","BLR"],"\u{1F1E8}\u{1F1E6}":["CA","CAN"],"\u{1F1E8}\u{1F1ED}":["CH","CHE"],"\u{1F1E8}\u{1F1F1}":["CL","CHL"],"\u{1F1E8}\u{1F1F4}":["CO","COL"],"\u{1F1E8}\u{1F1F7}":["CR","CRI"],"\u{1F1E8}\u{1F1FE}":["CY","CYP"],"\u{1F1E8}\u{1F1FF}":["CZ","CZE"],"\u{1F1E9}\u{1F1EA}":["DE","DEU"],"\u{1F1E9}\u{1F1F0}":["DK","DNK"],"\u{1F1EA}\u{1F1E8}":["EC","ECU"],"\u{1F1EA}\u{1F1EA}":["EE","EST"],"\u{1F1EA}\u{1F1EC}":["EG","EGY"],"\u{1F1EA}\u{1F1F8}":["ES","ESP"],"\u{1F1EA}\u{1F1FA}":["EU"],"\u{1F1EB}\u{1F1EE}":["FI","FIN"],"\u{1F1EB}\u{1F1F7}":["FR","FRA"],"\u{1F1EC}\u{1F1E7}":["GB","GBR","UK"],"\u{1F1EC}\u{1F1EA}":["GE","GEO"],"\u{1F1EC}\u{1F1F7}":["GR","GRC"],"\u{1F1ED}\u{1F1F0}":["HK","HKG","HKT","HKBN","HGC","WTT","CMI"],"\u{1F1ED}\u{1F1F7}":["HR","HRV"],"\u{1F1ED}\u{1F1FA}":["HU","HUN"],"\u{1F1EF}\u{1F1F4}":["JO","JOR"],"\u{1F1EF}\u{1F1F5}":["JP","JPN"],"\u{1F1F0}\u{1F1EA}":["KE","KEN"],"\u{1F1F0}\u{1F1EC}":["KG","KGZ"],"\u{1F1F0}\u{1F1ED}":["KH","KGZ"],"\u{1F1F0}\u{1F1F5}":["KP","PRK"],"\u{1F1F0}\u{1F1F7}":["KR","KOR"],"\u{1F1F0}\u{1F1FF}":["KZ","KAZ"],"\u{1F1EE}\u{1F1E9}":["ID","IDN"],"\u{1F1EE}\u{1F1EA}":["IE","IRL"],"\u{1F1EE}\u{1F1F1}":["IL","ISR"],"\u{1F1EE}\u{1F1F2}":["IM","IMN"],"\u{1F1EE}\u{1F1F3}":["IN","IND"],"\u{1F1EE}\u{1F1F7}":["IR","IRN"],"\u{1F1EE}\u{1F1F8}":["IS","ISL"],"\u{1F1EE}\u{1F1F9}":["IT","ITA"],"\u{1F1F1}\u{1F1F9}":["LT","LTU"],"\u{1F1F1}\u{1F1FA}":["LU","LUX"],"\u{1F1F1}\u{1F1FB}":["LV","LVA"],"\u{1F1F2}\u{1F1E6}":["MA","MAR"],"\u{1F1F2}\u{1F1E9}":["MD","MDA"],"\u{1F1F3}\u{1F1EC}":["NG","NGA"],"\u{1F1F2}\u{1F1F0}":["MK","MKD"],"\u{1F1F2}\u{1F1F3}":["MN","MNG"],"\u{1F1F2}\u{1F1F4}":["MO","MAC","CTM"],"\u{1F1F2}\u{1F1F9}":["MT","MLT"],"\u{1F1F2}\u{1F1FD}":["MX","MEX"],"\u{1F1F2}\u{1F1FE}":["MY","MYS"],"\u{1F1F3}\u{1F1F1}":["NL","NLD"],"\u{1F1F3}\u{1F1F4}":["NO","NOR"],"\u{1F1F3}\u{1F1F5}":["NP","NPL"],"\u{1F1F3}\u{1F1FF}":["NZ","NZL"],"\u{1F1F5}\u{1F1E6}":["PA","PAN"],"\u{1F1F5}\u{1F1EA}":["PE","PER"],"\u{1F1F5}\u{1F1ED}":["PH","PHL"],"\u{1F1F5}\u{1F1F0}":["PK","PAK"],"\u{1F1F5}\u{1F1F1}":["PL","POL"],"\u{1F1F5}\u{1F1F7}":["PR","PRI"],"\u{1F1F5}\u{1F1F9}":["PT","PRT"],"\u{1F1F5}\u{1F1FE}":["PY","PRY"],"\u{1F1F7}\u{1F1F4}":["RO","ROU"],"\u{1F1F7}\u{1F1F8}":["RS","SRB"],"\u{1F1F7}\u{1F1EA}":["RE","REU"],"\u{1F1F7}\u{1F1FA}":["RU","RUS"],"\u{1F1F8}\u{1F1E6}":["SA","SAU"],"\u{1F1F8}\u{1F1EA}":["SE","SWE"],"\u{1F1F8}\u{1F1EC}":["SG","SGP"],"\u{1F1F8}\u{1F1EE}":["SI","SVN"],"\u{1F1F8}\u{1F1F0}":["SK","SVK"],"\u{1F1F9}\u{1F1ED}":["TH","THA"],"\u{1F1F9}\u{1F1F3}":["TN","TUN"],"\u{1F1F9}\u{1F1F7}":["TR","TUR"],"\u{1F1F9}\u{1F1FC}":["TW","TWN","CHT","HINET","ROC"],"\u{1F1FA}\u{1F1E6}":["UA","UKR"],"\u{1F1FA}\u{1F1F8}":["US","USA","LAX","SFO"],"\u{1F1FA}\u{1F1FE}":["UY","URY"],"\u{1F1FB}\u{1F1EA}":["VE","VEN"],"\u{1F1FB}\u{1F1F3}":["VN","VNM"],"\u{1F1FF}\u{1F1E6}":["ZA","ZAF"],"\u{1F1E8}\u{1F1F3}":["CN","CHN","BACK"]};function D(o){var C;let S=((C=o.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/))==null?void 0:C[0])||"";for(const y of Object.keys(E))if(E[y].some(P=>RegExp(`${P}`,"i").test(o)))return S=y;for(const y of Object.keys(h))if(h[y].some(P=>RegExp(`(^|[^a-zA-Z:])${P}([^a-zA-Z:]|$)`).test(o)&&!/(\d+)\s*([MG]B)/.test(o)))return S=y;return S}function g(o){return/^(\uD83C[\uDDE6-\uDDFF]){2}$/.test(o)}function i(o){return/^[A-Z]{2}$/.test(o)}function _(o){return o.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g,"").trim()}},1500:(m,f,l)=>{l.d(f,{B8:()=>U,BE:()=>C,Dq:()=>_,Mi:()=>O,Vo:()=>I,Zg:()=>o,qu:()=>p,sY:()=>v});var E=l(5254),h=l(8599),D=Math.pow,g=(n,c,r)=>new Promise((t,a)=>{var N=s=>{try{e(r.next(s))}catch(F){a(F)}},u=s=>{try{e(r.throw(s))}catch(F){a(F)}},e=s=>s.done?t(s.value):Promise.resolve(s.value).then(N,u);e((r=r.apply(n,c)).next())});const i=$substore,_={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"],vpsmmo:["Vpsmmo Technology Company Limited","1mcloud Technology Company Limited","AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],litespeed:["LITESPEED-COM","Litespeed Technology Company Limited","AS140810 Megacore Technology Company Limited"],m247:["M247 Europe SRL","3NT SOLUTIONS LLP","AS9009 M247 Europe SRL"]},o={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function C(n){return g(this,null,function*(){let c=n;if(A(n)){const r=E.Vs.get(n);if(r)c=r;else{const t=yield T(n);c=t,t&&E.Vs.set(n,t)}}return c})}function S(n){return g(this,null,function*(){const c=yield C(n);let r="";const t=COUNTRY_CACHE.get(c);if(t)r=getFlag(t);else{const a=yield P(c);r=getFlag(a),r&&COUNTRY_CACHE.set(c,a)}return r})}function y(n){return g(this,null,function*(){const c=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(n)}&type=A`,r={Accept:"application/dns-json"};try{const t=yield i.http.get({url:c,headers:r}),a=JSON.parse(t.body);if(a.Status!==0)throw new Error(`HTTP error! status: ${a.Status}`);return a.Answer?a.Answer.map(N=>`${N.data}`)[0]:""}catch(t){return""}})}function T(n){return g(this,null,function*(){return yield i.http.get(`https://dns.google/resolve?name=${n}`).then(r=>{const t=JSON.parse(r.body);if(t.Status===0){const a=t.Answer.find(N=>N.type===1);return a?a.data:""}return""})})}function P(n){return g(this,null,function*(){return yield i.http.get(`http://ip-api.com/json/${n}?fields=country`).then(r=>JSON.parse(r.body).country||"")})}function v(n){return g(this,null,function*(){return yield i.http.get(`http://ip-api.com/json/${n}?fields=region,regionName`).then(r=>{const t=JSON.parse(r.body);return t.regionName&&t.region?`${t.regionName} (${t.region})`:""})})}function K(n){return g(this,null,function*(){return yield i.http.get(`http://ip-api.com/json/${n}?fields=isp`).then(r=>JSON.parse(r.body).isp||"")})}function V(n){return g(this,null,function*(){return yield i.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(n)}).then(r=>JSON.parse(r.body).map(a=>a.isp))})}function U(n){return g(this,null,function*(){return yield i.http.get(`http://ip-api.com/json/${n}?fields=isp,org`).then(r=>{const t=JSON.parse(r.body);return[t.isp||"",t.org||""].join(",")})})}function H(n,c){let r,t;const a=d(n);if((r=c.match(/^(.*?)\/(\d{1,2})$/))&&(t=d(r[1]))>=0){const N=D(2,32-parseInt(r[2]));return a>=t&&a<=t+N-1}return!1}function d(n){let c;if(c=n.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let r=0,t=1;for(let a=4;a>=1;a-=1)r+=t*parseInt(c[a]),t*=256;return r}return-1}function A(n){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(n)}function p(n){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(n)}function I(n,c){const r=n.split("."),t=c.split(".");if(r.length<3||t.length<3)return!1;for(let a=0;a<3;a++)if(r[a]!==t[a])return!1;return!0}function O(n){const c=n.split(".");return c[c.length-1]}},9085:(m,f,l)=>{l.d(f,{Fq:()=>D,Gz:()=>E,Kg:()=>i});function E(C){return C&&C!=="null"&&C!=="undefined"}function h(C,S){return C.reduce((y,T)=>{const P=T[S];return y[P]||(y[P]=[]),y[P].push(T),y},{})}function D(C){return Number.isInteger(C)}function g(C){return typeof C=="number"&&!Number.isNaN(C)}function i(C){return typeof C=="string"}function _(C){return typeof C=="boolean"}function o(C){return typeof C=="object"&&C!==null}},4173:(m,f,l)=>{l.d(f,{AH:()=>y,um:()=>T});var E=l(9085),h=l(1058),D=l(1500),g=l(8599),i=l(5254),_=Math.pow,o=(u,e,s)=>new Promise((F,B)=>{var L=M=>{try{b(s.next(M))}catch(G){B(G)}},w=M=>{try{b(s.throw(M))}catch(G){B(G)}},b=M=>M.done?F(M.value):Promise.resolve(M.value).then(L,w);b((s=s.apply(u,e)).next())});function C(u,e){for(const s of u)S(s,e)}function S(u,e){(u.type==="vmess"||u.type==="vless"||u.type==="trojan")&&(u.network==="ws"&&(u["ws-opts"]=u["ws-opts"]||{},u["ws-opts"].headers=u["ws-opts"].headers||{},u["ws-opts"].headers.Host=e),u.network==="grpc"&&(u["grpc-opts"]=u["grpc-opts"]||{},u["grpc-opts"]["grpc-service-name"]=u["grpc-opts"]["grpc-service-name"]||"",u.servername=e),u.network==="tcp"&&(u.servername=e),u.sni=e),isRealValue(u["skip-cert-verify"])||(u["skip-cert-verify"]=!0)}function y(u){const e=[];return(0,E.Gz)(u.regex)&&e.push(P),(0,E.Gz)(u.ports)&&e.push(v),(0,E.Gz)(u.ips)&&e.push(K),(0,E.Gz)(u.isps)&&e.push(V),(0,E.Gz)(u.regions)&&e.push(U),(0,E.Gz)(u.countries)&&e.push(H),(0,E.Gz)(u.subs)&&e.push(d),(0,E.Gz)(u.tags)&&e.push(A),(0,E.Gz)(u.types)&&e.push(p),e}function T(u,e,s){return o(this,null,function*(){return(yield Promise.all(u.map(B=>B(e,s)))).every(B=>B)})}function P(u,e){return(0,h.r)(u.regex).test(e.name)}function v(u,e){return u.ports.some(s=>{if((0,E.Fq)(s))return s===e.port;const F=/^(\d+)\.\.(\d+)$/,B=s.match(F);if((0,E.Kg)(s)&&B){const L=parseInt(B[1],10),w=parseInt(B[2],10);if(L<w)return e.port>=L&&e.port<=w}return!1})}function K(u,e){return o(this,null,function*(){return(yield Promise.all(u.ips.map(F=>a(e.server,F)))).some(F=>F)})}function V(u,e){return o(this,null,function*(){return(yield Promise.all(u.isps.map(F=>t(e.server,F)))).some(F=>F)})}function U(u,e){return o(this,null,function*(){return(yield Promise.all(u.regions.map(F=>r(e.server,F)))).some(F=>F)})}function H(u,e){return o(this,null,function*(){return(yield Promise.all(u.countries.map(F=>c(e,F)))).some(F=>F)})}function d(u,e){return o(this,null,function*(){return(yield Promise.all(u.subs.map(F=>n(e,F)))).some(F=>F)})}function A(u,e){return o(this,null,function*(){return(yield Promise.all(u.tags.map(F=>O(e,F)))).some(F=>F)})}function p(u,e){return o(this,null,function*(){return(yield Promise.all(u.types.map(F=>I(e,F)))).some(F=>F)})}function I(u,e){return o(this,null,function*(){return u.type.toLowerCase()===e.toLowerCase()})}function O(u,e){return o(this,null,function*(){return u.tags&&u.tags.some(s=>RegExp(`${s}`,"i").test(e))})}function n(u,e){return o(this,null,function*(){return u.subName===e})}function c(u,e){return o(this,null,function*(){return(0,g.fs)(e)?u.countryFlag===e:(0,g.ik)(e)?u.countryCode===e:!1})}function r(u,e){return o(this,null,function*(){const s=yield(0,D.BE)(u);try{let F="";const B=i.KK.get(s);B?F=B:(F=yield(0,D.sY)(s),F&&i.KK.set(s,F));const L=(0,h.Z)(F);if(L){const{name:w,code:b}=L,M=D.Zg[e.toLowerCase()];if((0,E.Gz)(M)&&(M.some(G=>RegExp(`${G}`,"i").test(b))||M.some(G=>RegExp(`${G}`,"i").test(w))))return!0}}catch(F){return!1}return!1})}function t(u,e){return o(this,null,function*(){const s=yield(0,D.BE)(u);let F="";const B=i.Kh.get(s);B?F=B:(F=yield(0,D.B8)(s),F&&i.Kh.set(s,F));const L=D.Dq[e],w=F.split(",");for(const b of w)if(b&&L.some(M=>RegExp(`${M}`,"i").test(b)))return!0;return!1})}function a(u,e){return o(this,null,function*(){const s=yield(0,D.BE)(u);if(!(0,D.qu)(s))return!1;if(e.indexOf("/")<0)return!!(s===e||(0,D.Vo)(s,e)&&(0,D.Mi)(e)==="*");let F,B;const L=N(s);if((F=e.match(/^(.*?)\/(\d{1,2})$/))&&(B=N(F[1]))>=0){const w=_(2,32-parseInt(F[2]));return L>=B&&L<=B+w-1}return!1})}function N(u){let e;if(e=u.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let s=0,F=1;for(let B=4;B>=1;B-=1)s+=F*parseInt(e[B]),F*=256;return s}return-1}},1058:(m,f,l)=>{l.d(f,{Z:()=>h,r:()=>E});function E(D){const g=D.lastIndexOf("/");return new RegExp(D.slice(1,g),D.slice(g+1))}function h(D){const g=/^([^\(]+) \(([^)]+)\)$/,i=D.match(g);return i?{name:i[1].trim(),code:i[2]}:null}}},Y={};function R(m){var f=Y[m];if(f!==void 0)return f.exports;var l=Y[m]={exports:{}};return k[m](l,l.exports,R),l.exports}R.n=m=>{var f=m&&m.__esModule?()=>m.default:()=>m;return R.d(f,{a:f}),f},R.d=(m,f)=>{for(var l in f)R.o(f,l)&&!R.o(m,l)&&Object.defineProperty(m,l,{enumerable:!0,get:f[l]})},R.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(m){if(typeof window=="object")return window}}(),R.o=(m,f)=>Object.prototype.hasOwnProperty.call(m,f);var $={};(()=>{var m=R(3183),f=R.n(m),l=R(9085),E=R(423),h=R(4173),D=Object.defineProperty,g=Object.defineProperties,i=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,S=(d,A)=>(A=Symbol[d])?A:Symbol.for("Symbol."+d),y=(d,A,p)=>A in d?D(d,A,{enumerable:!0,configurable:!0,writable:!0,value:p}):d[A]=p,T=(d,A)=>{for(var p in A||(A={}))o.call(A,p)&&y(d,p,A[p]);if(_)for(var p of _(A))C.call(A,p)&&y(d,p,A[p]);return d},P=(d,A)=>g(d,i(A)),v=(d,A,p)=>new Promise((I,O)=>{var n=t=>{try{r(p.next(t))}catch(a){O(a)}},c=t=>{try{r(p.throw(t))}catch(a){O(a)}},r=t=>t.done?I(t.value):Promise.resolve(t.value).then(n,c);r((p=p.apply(d,A)).next())}),K=(d,A,p)=>(A=d[S("asyncIterator")])?A.call(d):(d=d[S("iterator")](),A={},p=(I,O)=>(O=d[I])&&(A[I]=n=>new Promise((c,r,t)=>(n=O.call(d,n),t=n.done,Promise.resolve(n.value).then(a=>c({value:a,done:t}),r)))),p("next"),p("return"),A);function V(){return v(this,arguments,function*(d=[],A,p){const{type:I,mode:O}=$arguments;return/all/i.test(O)?yield U(d):yield H(d,I)})}function U(d){return v(this,null,function*(){const A=[],p=yield(0,E.ru)();for(const r in p){const t=p[r];if(!(r==="default"||!(0,l.Gz)(t)))try{for(var I=K(d),O,n,c;O=!(n=yield I.next()).done;O=!1){const a=n.value,N=(0,h.AH)(t),u=P(T({},a),{filterType:r});if(N.length===0){A.push(u);continue}(yield(0,h.um)(N,t,u))&&A.push(u)}}catch(a){c=[a]}finally{try{O&&(n=I.return)&&(yield n.call(I))}finally{if(c)throw c[0]}}}return A})}function H(d,A){return v(this,null,function*(){const p=[],I=yield(0,E.ru)(),O=(0,l.Gz)(A)?I[A]:I[d[0].collectionName];if(!(0,l.Gz)(O))return d;try{for(var n=K(d),c,r,t;c=!(r=yield n.next()).done;c=!1){const a=r.value,N=(0,h.AH)(O);if(N.length===0){p.push(a);continue}(yield(0,h.um)(N,O,a))&&p.push(a)}}catch(a){t=[a]}finally{try{c&&(r=n.return)&&(yield r.call(n))}finally{if(t)throw t[0]}}return p})}f().operator=V})()})();})();
