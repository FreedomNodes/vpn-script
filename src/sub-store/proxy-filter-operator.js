/*!
 substore-tools - version: 1.6.0
 Build fullhash:614ae63eb6136f9f99b3, chunkhash:f95e6ce01244788f0c4d (2024-05-16 15:09:33)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var Z={3183:(D,p,a)=>{var C;typeof window!="undefined"?C=window:typeof a.g!="undefined"?C=a.g:typeof self!="undefined"?C=self:C={},D.exports=C},8475:(D,p,a)=>{a.d(p,{A:()=>l});const C=$substore;class h{constructor(s,d){this.key=s,this.expires=d;const E=C.read(s);E?this.resourceCache=JSON.parse(E):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let s=!1;const d=new Date().getTime();Object.keys(this.resourceCache).forEach(E=>{const f=this.resourceCache[E];(!f.time||d-f.time>this.expires)&&(delete this.resourceCache[E],C.delete(`#${E}`),s=!0)}),s&&this._persist()}revokeIds(s){let d=!1;for(const E of s)delete this.resourceCache[E],d=!0;d&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){C.write(JSON.stringify(this.resourceCache),this.key)}get(s){const d=this.resourceCache[s]&&this.resourceCache[s].time;return d&&new Date().getTime()-d<=this.expires?this.resourceCache[s].data:null}set(s,d){this.resourceCache[s]={time:new Date().getTime(),data:d},this._persist()}}const l=h},423:(D,p,a)=>{a.d(p,{ru:()=>h});var C=(s,d,E)=>new Promise((f,S)=>{var O=I=>{try{N(E.next(I))}catch(L){S(L)}},R=I=>{try{N(E.throw(I))}catch(L){S(L)}},N=I=>I.done?f(I.value):Promise.resolve(I.value).then(O,R);N((E=E.apply(s,d)).next())});function h(){return C(this,null,function*(){const s=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(s)})}function l(){return C(this,null,function*(){const s=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(s)})}function y(s){return C(this,null,function*(){const d=normalizeString(s),E=yield l();let f="";for(const S in E)if(containsIgnoreCase(d,normalizeString(S))){f=S;break}return E[f]})}},9468:(D,p,a)=>{a.d(p,{Mn:()=>f,dT:()=>S,i5:()=>N,v9:()=>O});const C="schemaVersion",h="settings",l="subs",y="collections",s="files",d="modules",E="artifacts",f="#sub-store-cached-dns",S="#sub-store-cached-isp",O="#sub-store-cached-region",R="#sub-store-cached-country",N=7*24*60*60*1e3},8599:(D,p,a)=>{a.d(p,{fs:()=>y,ik:()=>s});const C={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["\u6D41\u91CF","\u65F6\u95F4","\u8FC7\u671F","Bandwidth","Expire"],"\u{1F1F8}\u{1F1F1}":["\u5E94\u6025","\u6D4B\u8BD5\u8282\u70B9"],"\u{1F1E6}\u{1F1E9}":["Andorra","\u5B89\u9053\u5C14"],"\u{1F1E6}\u{1F1EA}":["United Arab Emirates","\u963F\u8054\u914B","\u8FEA\u62DC"],"\u{1F1E6}\u{1F1EB}":["Afghanistan","\u963F\u5BCC\u6C57"],"\u{1F1E6}\u{1F1F1}":["Albania","\u963F\u5C14\u5DF4\u5C3C\u4E9A","\u963F\u723E\u5DF4\u5C3C\u4E9E"],"\u{1F1E6}\u{1F1F2}":["Armenia","\u4E9A\u7F8E\u5C3C\u4E9A"],"\u{1F1E6}\u{1F1F7}":["Argentina","\u963F\u6839\u5EF7"],"\u{1F1E6}\u{1F1F9}":["Austria","\xDAc","\u5965\u5730\u5229","\u5967\u5730\u5229","\u7EF4\u4E5F\u7EB3"],"\u{1F1E6}\u{1F1FA}":["Australia","\u6FB3\u5927\u5229\u4E9A","\u6FB3\u6D32","\u58A8\u5C14\u672C","\u6089\u5C3C","\u571F\u6FB3","\u4EAC\u6FB3","\u5EE3\u6FB3","\u6EEC\u6FB3","\u6CAA\u6FB3","\u5E7F\u6FB3","Sydney"],"\u{1F1E6}\u{1F1FF}":["Azerbaijan","\u963F\u585E\u62DC\u7586"],"\u{1F1E7}\u{1F1E6}":["Bosnia and Herzegovina","\u6CE2\u9ED1\u5171\u548C\u56FD","\u6CE2\u9ED1"],"\u{1F1E7}\u{1F1E9}":["Bangladesh","\u5B5F\u52A0\u62C9\u56FD","\u5B5F\u52A0\u62C9"],"\u{1F1E7}\u{1F1EA}":["Belgium","\u6BD4\u5229\u65F6","\u6BD4\u5229\u6642"],"\u{1F1E7}\u{1F1EC}":["Bulgaria","\u4FDD\u52A0\u5229\u4E9A","\u4FDD\u52A0\u5229\u4E9E"],"\u{1F1E7}\u{1F1ED}":["Bahrain","\u5DF4\u6797"],"\u{1F1E7}\u{1F1F7}":["Brazil","\u5DF4\u897F","\u5723\u4FDD\u7F57"],"\u{1F1E7}\u{1F1FE}":["Belarus","\u767D\u4FC4\u7F57\u65AF","\u767D\u4FC4"],"\u{1F1E8}\u{1F1E6}":["Canada","\u52A0\u62FF\u5927","\u8499\u7279\u5229\u5C14","\u6E29\u54E5\u534E","\u6953\u8449","\u67AB\u53F6","\u6ED1\u94C1\u5362","\u591A\u4F26\u591A","Waterloo"],"\u{1F1E8}\u{1F1ED}":["Switzerland","\u745E\u58EB","\u82CF\u9ECE\u4E16","Zurich"],"\u{1F1E8}\u{1F1F1}":["Chile","\u667A\u5229"],"\u{1F1E8}\u{1F1F4}":["Colombia","\u54E5\u4F26\u6BD4\u4E9A"],"\u{1F1E8}\u{1F1F7}":["Costa Rica","\u54E5\u65AF\u8FBE\u9ECE\u52A0"],"\u{1F1E8}\u{1F1FE}":["Cyprus","\u585E\u6D66\u8DEF\u65AF"],"\u{1F1E8}\u{1F1FF}":["Czechia","\u6377\u514B"],"\u{1F1E9}\u{1F1EA}":["German","\u5FB7\u56FD","\u5FB7\u570B","\u4EAC\u5FB7","\u6EEC\u5FB7","\u5EE3\u5FB7","\u6CAA\u5FB7","\u5E7F\u5FB7","\u6CD5\u5170\u514B\u798F","Frankfurt"],"\u{1F1E9}\u{1F1F0}":["Denmark","\u4E39\u9EA6","\u4E39\u9EA5"],"\u{1F1EA}\u{1F1E8}":["Ecuador","\u5384\u74DC\u591A\u5C14"],"\u{1F1EA}\u{1F1EA}":["Estonia","\u7231\u6C99\u5C3C\u4E9A"],"\u{1F1EA}\u{1F1EC}":["Egypt","\u57C3\u53CA"],"\u{1F1EA}\u{1F1F8}":["Spain","\u897F\u73ED\u7259"],"\u{1F1EA}\u{1F1FA}":["European Union","\u6B27\u76DF","\u6B27\u7F57\u5DF4"],"\u{1F1EB}\u{1F1EE}":["Finland","\u82AC\u5170","\u82AC\u862D","\u8D6B\u5C14\u8F9B\u57FA"],"\u{1F1EB}\u{1F1F7}":["France","\u6CD5\u56FD","\u6CD5\u570B","\u5DF4\u9ECE"],"\u{1F1EC}\u{1F1E7}":["Great Britain","\u82F1\u56FD","England","United Kingdom","\u4F26\u6566","\u82F1","London"],"\u{1F1EC}\u{1F1EA}":["Georgia","\u683C\u9C81\u5409\u4E9A","\u683C\u9B6F\u5409\u4E9E"],"\u{1F1EC}\u{1F1F7}":["Greece","\u5E0C\u814A","\u5E0C\u81D8"],"\u{1F1ED}\u{1F1F0}":["Hong Kong","Hongkong","\u9999\u6E2F","HongKong","HONG KONG","\u6DF1\u6E2F","\u6CAA\u6E2F","\u547C\u6E2F","\u7A57\u6E2F","\u4EAC\u6E2F","\u6E2F"],"\u{1F1ED}\u{1F1F7}":["Croatia","\u514B\u7F57\u5730\u4E9A","\u514B\u7F85\u5730\u4E9E"],"\u{1F1ED}\u{1F1FA}":["Hungary","\u5308\u7259\u5229"],"\u{1F1EF}\u{1F1F4}":["Jordan","\u7EA6\u65E6"],"\u{1F1EF}\u{1F1F5}":["Japan","\u65E5\u672C","\u4E1C\u4EAC","\u5927\u962A","\u57FC\u7389","\u6CAA\u65E5","\u7A57\u65E5","\u5DDD\u65E5","\u4E2D\u65E5","\u6CC9\u65E5","\u676D\u65E5","\u6DF1\u65E5","\u8FBD\u65E5","\u5E7F\u65E5","\u5927\u5742","Osaka","Tokyo"],"\u{1F1F0}\u{1F1EA}":["Kenya","\u80AF\u5C3C\u4E9A"],"\u{1F1F0}\u{1F1EC}":["Kyrgyzstan","\u5409\u5C14\u5409\u65AF\u65AF\u5766"],"\u{1F1F0}\u{1F1ED}":["Cambodia","\u67EC\u57D4\u5BE8"],"\u{1F1F0}\u{1F1F5}":["North Korea","\u671D\u9C9C"],"\u{1F1F0}\u{1F1F7}":["Korea","\u97E9\u56FD","\u97D3\u570B","\u97E9","\u97D3","\u9996\u5C14","\u6625\u5DDD","Chuncheon","Seoul"],"\u{1F1F0}\u{1F1FF}":["Kazakhstan","\u54C8\u8428\u514B\u65AF\u5766","\u54C8\u8428\u514B"],"\u{1F1EE}\u{1F1E9}":["Indonesia","\u5370\u5C3C","\u5370\u5EA6\u5C3C\u897F\u4E9A","\u96C5\u52A0\u8FBE"],"\u{1F1EE}\u{1F1EA}":["Ireland","\u7231\u5C14\u5170","\u611B\u723E\u862D","\u90FD\u67CF\u6797"],"\u{1F1EE}\u{1F1F1}":["Israel","\u4EE5\u8272\u5217"],"\u{1F1EE}\u{1F1F2}":["Isle of Man","\u9A6C\u6069\u5C9B","\u99AC\u6069\u5CF6"],"\u{1F1EE}\u{1F1F3}":["India","\u5370\u5EA6","\u5B5F\u4E70","MFumbai"],"\u{1F1EE}\u{1F1F7}":["Iran","\u4F0A\u6717"],"\u{1F1EE}\u{1F1F8}":["Iceland","\u51B0\u5C9B","\u51B0\u5CF6"],"\u{1F1EE}\u{1F1F9}":["Italy","\u610F\u5927\u5229","\u7FA9\u5927\u5229","\u7C73\u5170","Nachash"],"\u{1F1F1}\u{1F1F9}":["Lithuania","\u7ACB\u9676\u5B9B"],"\u{1F1F1}\u{1F1FA}":["Luxembourg","\u5362\u68EE\u5821"],"\u{1F1F1}\u{1F1FB}":["Latvia","\u62C9\u8131\u7EF4\u4E9A","Latvija"],"\u{1F1F2}\u{1F1E6}":["Morocco","\u6469\u6D1B\u54E5"],"\u{1F1F2}\u{1F1E9}":["Moldova","\u6469\u5C14\u591A\u74E6","\u6469\u723E\u591A\u74E6"],"\u{1F1F3}\u{1F1EC}":["Nigeria","\u5C3C\u65E5\u5229\u4E9A","\u5C3C\u65E5\u5229\u4E9E"],"\u{1F1F2}\u{1F1F0}":["Macedonia","\u9A6C\u5176\u987F","\u99AC\u5176\u9813"],"\u{1F1F2}\u{1F1F3}":["Mongolia","\u8499\u53E4"],"\u{1F1F2}\u{1F1F4}":["Macao","\u6FB3\u95E8","\u6FB3\u9580","CTM"],"\u{1F1F2}\u{1F1F9}":["Malta","\u9A6C\u8033\u4ED6"],"\u{1F1F2}\u{1F1FD}":["Mexico","\u58A8\u897F\u54E5"],"\u{1F1F2}\u{1F1FE}":["Malaysia","\u9A6C\u6765","\u99AC\u4F86","\u5409\u9686\u5761","\u5927\u99AC"],"\u{1F1F3}\u{1F1F1}":["Netherlands","\u8377\u5170","\u8377\u862D","\u5C3C\u5FB7\u862D","\u963F\u59C6\u65AF\u7279\u4E39"],"\u{1F1F3}\u{1F1F4}":["Norway","\u632A\u5A01"],"\u{1F1F3}\u{1F1F5}":["Nepal","\u5C3C\u6CCA\u5C14"],"\u{1F1F3}\u{1F1FF}":["New Zealand","\u65B0\u897F\u5170","\u65B0\u897F\u862D"],"\u{1F1F5}\u{1F1E6}":["Panama","\u5DF4\u62FF\u9A6C"],"\u{1F1F5}\u{1F1EA}":["Peru","\u79D8\u9C81","\u7955\u9B6F"],"\u{1F1F5}\u{1F1ED}":["Philippines","\u83F2\u5F8B\u5BBE","\u83F2\u5F8B\u8CD3"],"\u{1F1F5}\u{1F1F0}":["Pakistan","\u5DF4\u57FA\u65AF\u5766"],"\u{1F1F5}\u{1F1F1}":["Poland","\u6CE2\u5170","\u6CE2\u862D"],"\u{1F1F5}\u{1F1F7}":["Puerto Rico","\u6CE2\u591A\u9ECE\u5404"],"\u{1F1F5}\u{1F1F9}":["Portugal","\u8461\u8404\u7259"],"\u{1F1F5}\u{1F1FE}":["Paraguay","\u5DF4\u62C9\u572D"],"\u{1F1F7}\u{1F1F4}":["Romania","\u7F57\u9A6C\u5C3C\u4E9A"],"\u{1F1F7}\u{1F1F8}":["Serbia","\u585E\u5C14\u7EF4\u4E9A"],"\u{1F1F7}\u{1F1EA}":["R\xE9union","\u7559\u5C3C\u6C6A","\u6CD5\u5C5E\u7559\u5C3C\u6C6A"],"\u{1F1F7}\u{1F1FA}":["Russia","\u4FC4\u7F57\u65AF","\u4FC4\u56FD","\u4FC4\u7F85\u65AF","\u4F2F\u529B","\u83AB\u65AF\u79D1","\u5723\u5F7C\u5F97\u5821","\u897F\u4F2F\u5229\u4E9A","\u4EAC\u4FC4","\u676D\u4FC4","\u5EE3\u4FC4","\u6EEC\u4FC4","\u5E7F\u4FC4","\u6CAA\u4FC4","Moscow"],"\u{1F1F8}\u{1F1E6}":["Saudi","\u6C99\u7279\u963F\u62C9\u4F2F","\u6C99\u7279"],"\u{1F1F8}\u{1F1EA}":["Sweden","\u745E\u5178"],"\u{1F1F8}\u{1F1EC}":["Singapore","Singapo","\u65B0\u52A0\u5761","\u72EE\u57CE","\u6CAA\u65B0","\u4EAC\u65B0","\u4E2D\u65B0","\u6CC9\u65B0","\u7A57\u65B0","\u6DF1\u65B0","\u676D\u65B0","\u5E7F\u65B0","\u5EE3\u65B0","\u6EEC\u65B0"],"\u{1F1F8}\u{1F1EE}":["Slovenia","\u65AF\u6D1B\u6587\u5C3C\u4E9A"],"\u{1F1F8}\u{1F1F0}":["Slovakia","\u65AF\u6D1B\u4F10\u514B"],"\u{1F1F9}\u{1F1ED}":["Thailand","\u6CF0\u56FD","\u6CF0\u570B","\u66FC\u8C37"],"\u{1F1F9}\u{1F1F3}":["Tunisia","\u7A81\u5C3C\u65AF"],"\u{1F1F9}\u{1F1F7}":["Turkey","T\xFCrkiye","\u571F\u8033\u5176","\u4F0A\u65AF\u5766\u5E03\u5C14"],"\u{1F1F9}\u{1F1FC}":["Taiwan","\u53F0\u6E7E","\u81FA\u7063","\u53F0\u7063","\u4E2D\u83EF\u6C11\u570B","\u4E2D\u534E\u6C11\u56FD","\u53F0\u5317","\u53F0\u4E2D","\u65B0\u5317","\u5F70\u5316","\u53F0","\u81FA","Taipei"],"\u{1F1FA}\u{1F1E6}":["Ukraine","\u4E4C\u514B\u5170","\u70CF\u514B\u862D"],"\u{1F1FA}\u{1F1F8}":["United States","\u7F8E\u56FD","America","\u7F8E","\u4EAC\u7F8E","\u6CE2\u7279\u5170","\u8FBE\u62C9\u65AF","\u4FC4\u52D2\u5188","\u51E4\u51F0\u57CE","\u8D39\u5229\u8499","\u7845\u8C37","\u77FD\u8C37","\u62C9\u65AF\u7EF4\u52A0\u65AF","\u6D1B\u6749\u77F6","\u5723\u4F55\u585E","\u5723\u514B\u62C9\u62C9","\u897F\u96C5\u56FE","\u829D\u52A0\u54E5","\u6CAA\u7F8E","\u54E5\u4F26\u5E03","\u7EBD\u7EA6","Los Angeles","San Jose","Sillicon Valley","Michigan"],"\u{1F1FA}\u{1F1FE}":["Uruguay","\u4E4C\u62C9\u572D"],"\u{1F1FB}\u{1F1EA}":["Venezuela","\u59D4\u5185\u745E\u62C9"],"\u{1F1FB}\u{1F1F3}":["Viet Nam","Vietnam","Vi\u1EC7t Nam","\u8D8A\u5357","\u80E1\u5FD7\u660E"],"\u{1F1FF}\u{1F1E6}":["South Africa","\u5357\u975E"],"\u{1F1E8}\u{1F1F3}":["China","\u4E2D\u56FD","\u4E2D\u570B","\u56DE\u56FD","\u56DE\u570B","\u56FD\u5185","\u570B\u5167","\u534E\u4E1C","\u534E\u897F","\u534E\u5357","\u534E\u5317","\u534E\u4E2D","\u6C5F\u82CF","\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733","\u676D\u5DDE","\u5F90\u5DDE","\u9752\u5C9B","\u5B81\u6CE2","\u9547\u6C5F"]},h={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["EXP","BAND"],"\u{1F1F8}\u{1F1F1}":["TEST","SOS"],"\u{1F1E6}\u{1F1E9}":["AD","AND"],"\u{1F1E6}\u{1F1EA}":["AE","ARE"],"\u{1F1E6}\u{1F1EB}":["AF","AFG"],"\u{1F1E6}\u{1F1F1}":["AL","ALB"],"\u{1F1E6}\u{1F1F2}":["AM","ARM"],"\u{1F1E6}\u{1F1F7}":["AR","ARG"],"\u{1F1E6}\u{1F1F9}":["AT","AUT"],"\u{1F1E6}\u{1F1FA}":["AU","AUS"],"\u{1F1E6}\u{1F1FF}":["AZ","AZE"],"\u{1F1E7}\u{1F1E6}":["BA","BIH"],"\u{1F1E7}\u{1F1E9}":["BD","BGD"],"\u{1F1E7}\u{1F1EA}":["BE","BEL"],"\u{1F1E7}\u{1F1EC}":["BG","BGR"],"\u{1F1E7}\u{1F1ED}":["BH","BHR"],"\u{1F1E7}\u{1F1F7}":["BR","BRA"],"\u{1F1E7}\u{1F1FE}":["BY","BLR"],"\u{1F1E8}\u{1F1E6}":["CA","CAN"],"\u{1F1E8}\u{1F1ED}":["CH","CHE"],"\u{1F1E8}\u{1F1F1}":["CL","CHL"],"\u{1F1E8}\u{1F1F4}":["CO","COL"],"\u{1F1E8}\u{1F1F7}":["CR","CRI"],"\u{1F1E8}\u{1F1FE}":["CY","CYP"],"\u{1F1E8}\u{1F1FF}":["CZ","CZE"],"\u{1F1E9}\u{1F1EA}":["DE","DEU"],"\u{1F1E9}\u{1F1F0}":["DK","DNK"],"\u{1F1EA}\u{1F1E8}":["EC","ECU"],"\u{1F1EA}\u{1F1EA}":["EE","EST"],"\u{1F1EA}\u{1F1EC}":["EG","EGY"],"\u{1F1EA}\u{1F1F8}":["ES","ESP"],"\u{1F1EA}\u{1F1FA}":["EU"],"\u{1F1EB}\u{1F1EE}":["FI","FIN"],"\u{1F1EB}\u{1F1F7}":["FR","FRA"],"\u{1F1EC}\u{1F1E7}":["GB","GBR","UK"],"\u{1F1EC}\u{1F1EA}":["GE","GEO"],"\u{1F1EC}\u{1F1F7}":["GR","GRC"],"\u{1F1ED}\u{1F1F0}":["HK","HKG","HKT","HKBN","HGC","WTT","CMI"],"\u{1F1ED}\u{1F1F7}":["HR","HRV"],"\u{1F1ED}\u{1F1FA}":["HU","HUN"],"\u{1F1EF}\u{1F1F4}":["JO","JOR"],"\u{1F1EF}\u{1F1F5}":["JP","JPN"],"\u{1F1F0}\u{1F1EA}":["KE","KEN"],"\u{1F1F0}\u{1F1EC}":["KG","KGZ"],"\u{1F1F0}\u{1F1ED}":["KH","KGZ"],"\u{1F1F0}\u{1F1F5}":["KP","PRK"],"\u{1F1F0}\u{1F1F7}":["KR","KOR"],"\u{1F1F0}\u{1F1FF}":["KZ","KAZ"],"\u{1F1EE}\u{1F1E9}":["ID","IDN"],"\u{1F1EE}\u{1F1EA}":["IE","IRL"],"\u{1F1EE}\u{1F1F1}":["IL","ISR"],"\u{1F1EE}\u{1F1F2}":["IM","IMN"],"\u{1F1EE}\u{1F1F3}":["IN","IND"],"\u{1F1EE}\u{1F1F7}":["IR","IRN"],"\u{1F1EE}\u{1F1F8}":["IS","ISL"],"\u{1F1EE}\u{1F1F9}":["IT","ITA"],"\u{1F1F1}\u{1F1F9}":["LT","LTU"],"\u{1F1F1}\u{1F1FA}":["LU","LUX"],"\u{1F1F1}\u{1F1FB}":["LV","LVA"],"\u{1F1F2}\u{1F1E6}":["MA","MAR"],"\u{1F1F2}\u{1F1E9}":["MD","MDA"],"\u{1F1F3}\u{1F1EC}":["NG","NGA"],"\u{1F1F2}\u{1F1F0}":["MK","MKD"],"\u{1F1F2}\u{1F1F3}":["MN","MNG"],"\u{1F1F2}\u{1F1F4}":["MO","MAC","CTM"],"\u{1F1F2}\u{1F1F9}":["MT","MLT"],"\u{1F1F2}\u{1F1FD}":["MX","MEX"],"\u{1F1F2}\u{1F1FE}":["MY","MYS"],"\u{1F1F3}\u{1F1F1}":["NL","NLD"],"\u{1F1F3}\u{1F1F4}":["NO","NOR"],"\u{1F1F3}\u{1F1F5}":["NP","NPL"],"\u{1F1F3}\u{1F1FF}":["NZ","NZL"],"\u{1F1F5}\u{1F1E6}":["PA","PAN"],"\u{1F1F5}\u{1F1EA}":["PE","PER"],"\u{1F1F5}\u{1F1ED}":["PH","PHL"],"\u{1F1F5}\u{1F1F0}":["PK","PAK"],"\u{1F1F5}\u{1F1F1}":["PL","POL"],"\u{1F1F5}\u{1F1F7}":["PR","PRI"],"\u{1F1F5}\u{1F1F9}":["PT","PRT"],"\u{1F1F5}\u{1F1FE}":["PY","PRY"],"\u{1F1F7}\u{1F1F4}":["RO","ROU"],"\u{1F1F7}\u{1F1F8}":["RS","SRB"],"\u{1F1F7}\u{1F1EA}":["RE","REU"],"\u{1F1F7}\u{1F1FA}":["RU","RUS"],"\u{1F1F8}\u{1F1E6}":["SA","SAU"],"\u{1F1F8}\u{1F1EA}":["SE","SWE"],"\u{1F1F8}\u{1F1EC}":["SG","SGP"],"\u{1F1F8}\u{1F1EE}":["SI","SVN"],"\u{1F1F8}\u{1F1F0}":["SK","SVK"],"\u{1F1F9}\u{1F1ED}":["TH","THA"],"\u{1F1F9}\u{1F1F3}":["TN","TUN"],"\u{1F1F9}\u{1F1F7}":["TR","TUR"],"\u{1F1F9}\u{1F1FC}":["TW","TWN","CHT","HINET","ROC"],"\u{1F1FA}\u{1F1E6}":["UA","UKR"],"\u{1F1FA}\u{1F1F8}":["US","USA","LAX","SFO"],"\u{1F1FA}\u{1F1FE}":["UY","URY"],"\u{1F1FB}\u{1F1EA}":["VE","VEN"],"\u{1F1FB}\u{1F1F3}":["VN","VNM"],"\u{1F1FF}\u{1F1E6}":["ZA","ZAF"],"\u{1F1E8}\u{1F1F3}":["CN","CHN","BACK"]};function l(E){var f;let S=((f=E.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/))==null?void 0:f[0])||"";for(const O of Object.keys(C))if(C[O].some(N=>RegExp(`${N}`,"i").test(E)))return S=O;for(const O of Object.keys(h))if(h[O].some(N=>RegExp(`(^|[^a-zA-Z:])${N}([^a-zA-Z:]|$)`).test(E)&&!/(\d+)\s*([MG]B)/.test(E)))return S=O;return S}function y(E){return/^(\uD83C[\uDDE6-\uDDFF]){2}$/.test(E)}function s(E){return/^[A-Z]{2}$/.test(E)}function d(E){return E.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g,"").trim()}},1500:(D,p,a)=>{a.d(p,{B8:()=>U,Dq:()=>y,Mi:()=>S,S9:()=>R,Vo:()=>f,Zg:()=>s,l0:()=>d,qu:()=>E,sY:()=>I});var C=Math.pow,h=(e,t,o)=>new Promise((r,i)=>{var g=_=>{try{m(o.next(_))}catch(M){i(M)}},P=_=>{try{m(o.throw(_))}catch(M){i(M)}},m=_=>_.done?r(_.value):Promise.resolve(_.value).then(g,P);m((o=o.apply(e,t)).next())});const l=$substore,y={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"],vpsmmo:["Vpsmmo Technology Company Limited","1mcloud Technology Company Limited","AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],litespeed:["LITESPEED-COM","Litespeed Technology Company Limited","AS140810 Megacore Technology Company Limited"],m247:["M247 Europe SRL","3NT SOLUTIONS LLP","AS9009 M247 Europe SRL"]},s={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function d(e){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(e)}function E(e){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(e)}function f(e,t){const o=e.split("."),r=t.split(".");if(o.length<3||r.length<3)return!1;for(let i=0;i<3;i++)if(o[i]!==r[i])return!1;return!0}function S(e){const t=e.split(".");return t[t.length-1]}function O(e){return h(this,null,function*(){const t=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(e)}&type=A`,o={Accept:"application/dns-json"};try{const r=yield l.http.get({url:t,headers:o}),i=JSON.parse(r.body);if(i.Status!==0)throw new Error(`HTTP error! status: ${i.Status}`);return i.Answer?i.Answer.map(g=>`${g.data}`)[0]:""}catch(r){return""}})}function R(e){return h(this,null,function*(){return yield l.http.get(`https://dns.google/resolve?name=${e}`).then(o=>{const r=JSON.parse(o.body);if(r.Status===0){const i=r.Answer.find(g=>g.type===1);return i?i.data:""}return""})})}function N(e){return h(this,null,function*(){return yield l.http.get(`http://ip-api.com/json/${e}?fields=country`).then(o=>JSON.parse(o.body).country||"")})}function I(e){return h(this,null,function*(){return yield l.http.get(`http://ip-api.com/json/${e}?fields=region,regionName`).then(o=>{const r=JSON.parse(o.body);return r.regionName&&r.region?`${r.regionName} (${r.region})`:""})})}function L(e){return h(this,null,function*(){return yield l.http.get(`http://ip-api.com/json/${e}?fields=isp`).then(o=>JSON.parse(o.body).isp||"")})}function H(e){return h(this,null,function*(){return yield l.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(e)}).then(o=>JSON.parse(o.body).map(i=>i.isp))})}function U(e){return h(this,null,function*(){return yield l.http.get(`http://ip-api.com/json/${e}?fields=isp,org`).then(o=>{const r=JSON.parse(o.body);return[r.isp||"",r.org||""].join(",")})})}function Y(e,t){let o,r;const i=A(e);if((o=t.match(/^(.*?)\/(\d{1,2})$/))&&(r=A(o[1]))>=0){const g=C(2,32-parseInt(o[2]));return i>=r&&i<=r+g-1}return!1}function A(e){let t;if(t=e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let o=0,r=1;for(let i=4;i>=1;i-=1)o+=r*parseInt(t[i]),r*=256;return o}return-1}},9085:(D,p,a)=>{a.d(p,{G:()=>C});function C(l){return l&&l!=="null"&&l!=="undefined"}function h(l,y){return l.reduce((s,d)=>{const E=d[y];return s[E]||(s[E]=[]),s[E].push(d),s},{})}},4173:(D,p,a)=>{a.d(p,{AH:()=>L,um:()=>H});var C=a(9085),h=a(1058),l=a(1500),y=a(8475),s=a(8599),d=a(9468),E=Math.pow,f=(u,F,c)=>new Promise((n,B)=>{var w=T=>{try{G(c.next(T))}catch(V){B(V)}},K=T=>{try{G(c.throw(T))}catch(V){B(V)}},G=T=>T.done?n(T.value):Promise.resolve(T.value).then(w,K);G((c=c.apply(u,F)).next())});const S=new y.A(d.Mn,d.i5),O=new y.A(d.dT,d.i5),R=new y.A(d.v9,d.i5);function N(u,F){for(const c of u)I(c,F)}function I(u,F){(u.type==="vmess"||u.type==="vless"||u.type==="trojan")&&(u.network==="ws"&&(u["ws-opts"]=u["ws-opts"]||{},u["ws-opts"].headers=u["ws-opts"].headers||{},u["ws-opts"].headers.Host=F),u.network==="grpc"&&(u["grpc-opts"]=u["grpc-opts"]||{},u["grpc-opts"]["grpc-service-name"]=u["grpc-opts"]["grpc-service-name"]||"",u.servername=F),u.network==="tcp"&&(u.servername=F),u.sni=F),isRealValue(u["skip-cert-verify"])||(u["skip-cert-verify"]=!0)}function L(u){const F=[];return(0,C.G)(u.regex)&&F.push(U),(0,C.G)(u.ports)&&F.push(Y),(0,C.G)(u.ips)&&F.push(A),(0,C.G)(u.isps)&&F.push(e),(0,C.G)(u.regions)&&F.push(t),(0,C.G)(u.countries)&&F.push(o),(0,C.G)(u.subs)&&F.push(r),(0,C.G)(u.tags)&&F.push(i),F}function H(u,F,c){return f(this,null,function*(){return(yield Promise.all(u.map(B=>B(F,c)))).every(B=>B)})}function U(u,F){return(0,h.r)(u.regex).test(F.name)}function Y(u,F){return u.ports.some(c=>c===F.port)}function A(u,F){return f(this,null,function*(){return(yield Promise.all(u.ips.map(n=>b(F.server,n)))).some(n=>n)})}function e(u,F){return f(this,null,function*(){return(yield Promise.all(u.isps.map(n=>M(F.server,n)))).some(n=>n)})}function t(u,F){return f(this,null,function*(){return(yield Promise.all(u.regions.map(n=>_(F.server,n)))).some(n=>n)})}function o(u,F){return f(this,null,function*(){return(yield Promise.all(u.countries.map(n=>m(F,n)))).some(n=>n)})}function r(u,F){return f(this,null,function*(){return(yield Promise.all(u.subs.map(n=>P(F,n)))).some(n=>n)})}function i(u,F){return f(this,null,function*(){return(yield Promise.all(u.tags.map(n=>g(F,n)))).some(n=>n)})}function g(u,F){return f(this,null,function*(){return u.tags&&u.tags.some(c=>RegExp(`${c}`,"i").test(F))})}function P(u,F){return f(this,null,function*(){return u.subName===F})}function m(u,F){return f(this,null,function*(){return(0,s.fs)(F)?u.countryFlag===F:(0,s.ik)(F)?u.countryCode===F:!1})}function _(u,F){return f(this,null,function*(){const c=yield k(u);try{let n="";const B=R.get(c);B?n=B:(n=yield(0,l.sY)(c),n&&R.set(c,n));const w=(0,h.Z)(n);if(w){const{name:K,code:G}=w,T=l.Zg[F.toLowerCase()];if((0,C.G)(T)&&(T.some(V=>RegExp(`${V}`,"i").test(G))||T.some(V=>RegExp(`${V}`,"i").test(K))))return!0}}catch(n){return!1}return!1})}function M(u,F){return f(this,null,function*(){const c=yield k(u);let n="";const B=O.get(c);B?n=B:(n=yield(0,l.B8)(c),n&&O.set(c,n));const w=l.Dq[F],K=n.split(",");for(const G of K)if(G&&w.some(T=>RegExp(`${T}`,"i").test(G)))return!0;return!1})}function b(u,F){return f(this,null,function*(){const c=yield k(u);if(!(0,l.qu)(c))return!1;if(F.indexOf("/")<0)return!!(c===F||(0,l.Vo)(c,F)&&(0,l.Mi)(F)==="*");let n,B;const w=x(c);if((n=F.match(/^(.*?)\/(\d{1,2})$/))&&(B=x(n[1]))>=0){const K=E(2,32-parseInt(n[2]));return w>=B&&w<=B+K-1}return!1})}function k(u){return f(this,null,function*(){let F=u;if((0,l.l0)(u)){const c=S.get(u);if(c)F=c;else{const n=yield(0,l.S9)(u);F=n,n&&S.set(u,n)}}return F})}function x(u){let F;if(F=u.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let c=0,n=1;for(let B=4;B>=1;B-=1)c+=n*parseInt(F[B]),n*=256;return c}return-1}},1058:(D,p,a)=>{a.d(p,{Z:()=>h,r:()=>C});function C(l){const y=l.lastIndexOf("/");return new RegExp(l.slice(1,y),l.slice(y+1))}function h(l){const y=/^([^\(]+) \(([^)]+)\)$/,s=l.match(y);return s?{name:s[1].trim(),code:s[2]}:null}}},$={};function v(D){var p=$[D];if(p!==void 0)return p.exports;var a=$[D]={exports:{}};return Z[D](a,a.exports,v),a.exports}v.n=D=>{var p=D&&D.__esModule?()=>D.default:()=>D;return v.d(p,{a:p}),p},v.d=(D,p)=>{for(var a in p)v.o(p,a)&&!v.o(D,a)&&Object.defineProperty(D,a,{enumerable:!0,get:p[a]})},v.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(D){if(typeof window=="object")return window}}(),v.o=(D,p)=>Object.prototype.hasOwnProperty.call(D,p);var W={};(()=>{var D=v(3183),p=v.n(D),a=v(9085),C=v(423),h=v(4173),l=Object.defineProperty,y=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,S=(A,e)=>(e=Symbol[A])?e:Symbol.for("Symbol."+A),O=(A,e,t)=>e in A?l(A,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):A[e]=t,R=(A,e)=>{for(var t in e||(e={}))E.call(e,t)&&O(A,t,e[t]);if(d)for(var t of d(e))f.call(e,t)&&O(A,t,e[t]);return A},N=(A,e)=>y(A,s(e)),I=(A,e,t)=>new Promise((o,r)=>{var i=m=>{try{P(t.next(m))}catch(_){r(_)}},g=m=>{try{P(t.throw(m))}catch(_){r(_)}},P=m=>m.done?o(m.value):Promise.resolve(m.value).then(i,g);P((t=t.apply(A,e)).next())}),L=(A,e,t)=>(e=A[S("asyncIterator")])?e.call(A):(A=A[S("iterator")](),e={},t=(o,r)=>(r=A[o])&&(e[o]=i=>new Promise((g,P,m)=>(i=r.call(A,i),m=i.done,Promise.resolve(i.value).then(_=>g({value:_,done:m}),P)))),t("next"),t("return"),e);function H(){return I(this,arguments,function*(A=[],e,t){const{type:o,mode:r}=$arguments;return/all/i.test(r)?yield U(A):yield Y(A,o)})}function U(A){return I(this,null,function*(){const e=[],t=yield(0,C.ru)();for(const P in t){const m=t[P];if(!(P==="default"||!(0,a.G)(m)))try{for(var o=L(A),r,i,g;r=!(i=yield o.next()).done;r=!1){const _=i.value,M=(0,h.AH)(m),b=N(R({},_),{filterType:P});if(M.length===0){e.push(b);continue}(yield(0,h.um)(M,m,b))&&e.push(b)}}catch(_){g=[_]}finally{try{r&&(i=o.return)&&(yield i.call(o))}finally{if(g)throw g[0]}}}return e})}function Y(A,e){return I(this,null,function*(){const t=[],o=yield(0,C.ru)(),r=(0,a.G)(e)?o[e]:o[A[0].collectionName];if(!(0,a.G)(r))return A;try{for(var i=L(A),g,P,m;g=!(P=yield i.next()).done;g=!1){const _=P.value,M=(0,h.AH)(r);if(M.length===0){t.push(_);continue}(yield(0,h.um)(M,r,_))&&t.push(_)}}catch(_){m=[_]}finally{try{g&&(P=i.return)&&(yield P.call(i))}finally{if(m)throw m[0]}}return t})}p().operator=H})()})();})();
