/*!
 substore-tools - version: 1.6.0
 Build fullhash:988b2a325b3004908a59, chunkhash:f2d2f54bb7c87f514082 (2024-05-16 16:06:12)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var P={3183:(s,r,i)=>{var A;typeof window!="undefined"?A=window:typeof i.g!="undefined"?A=i.g:typeof self!="undefined"?A=self:A={},s.exports=A},8475:(s,r,i)=>{i.d(r,{A:()=>a});const A=$substore;class l{constructor(C,c){this.key=C,this.expires=c;const o=A.read(C);o?this.resourceCache=JSON.parse(o):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let C=!1;const c=new Date().getTime();Object.keys(this.resourceCache).forEach(o=>{const S=this.resourceCache[o];(!S.time||c-S.time>this.expires)&&(delete this.resourceCache[o],A.delete(`#${o}`),C=!0)}),C&&this._persist()}revokeIds(C){let c=!1;for(const o of C)delete this.resourceCache[o],c=!0;c&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){A.write(JSON.stringify(this.resourceCache),this.key)}get(C){const c=this.resourceCache[C]&&this.resourceCache[C].time;return c&&new Date().getTime()-c<=this.expires?this.resourceCache[C].data:null}set(C,c){this.resourceCache[C]={time:new Date().getTime(),data:c},this._persist()}}const a=l},9468:(s,r,i)=>{i.d(r,{Dh:()=>y,Mn:()=>S,ax:()=>a,i5:()=>m});const A="schemaVersion",l="settings",a="subs",h="collections",C="files",c="modules",o="artifacts",S="#sub-store-cached-dns",N="#sub-store-cached-isp",g="#sub-store-cached-region",y="#sub-store-cached-country",m=7*24*60*60*1e3},8599:(s,r,i)=>{i.d(r,{CY:()=>a,iI:()=>A,jB:()=>l});const A={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["\u6D41\u91CF","\u65F6\u95F4","\u8FC7\u671F","Bandwidth","Expire"],"\u{1F1F8}\u{1F1F1}":["\u5E94\u6025","\u6D4B\u8BD5\u8282\u70B9"],"\u{1F1E6}\u{1F1E9}":["Andorra","\u5B89\u9053\u5C14"],"\u{1F1E6}\u{1F1EA}":["United Arab Emirates","\u963F\u8054\u914B","\u8FEA\u62DC"],"\u{1F1E6}\u{1F1EB}":["Afghanistan","\u963F\u5BCC\u6C57"],"\u{1F1E6}\u{1F1F1}":["Albania","\u963F\u5C14\u5DF4\u5C3C\u4E9A","\u963F\u723E\u5DF4\u5C3C\u4E9E"],"\u{1F1E6}\u{1F1F2}":["Armenia","\u4E9A\u7F8E\u5C3C\u4E9A"],"\u{1F1E6}\u{1F1F7}":["Argentina","\u963F\u6839\u5EF7"],"\u{1F1E6}\u{1F1F9}":["Austria","\xDAc","\u5965\u5730\u5229","\u5967\u5730\u5229","\u7EF4\u4E5F\u7EB3"],"\u{1F1E6}\u{1F1FA}":["Australia","\u6FB3\u5927\u5229\u4E9A","\u6FB3\u6D32","\u58A8\u5C14\u672C","\u6089\u5C3C","\u571F\u6FB3","\u4EAC\u6FB3","\u5EE3\u6FB3","\u6EEC\u6FB3","\u6CAA\u6FB3","\u5E7F\u6FB3","Sydney"],"\u{1F1E6}\u{1F1FF}":["Azerbaijan","\u963F\u585E\u62DC\u7586"],"\u{1F1E7}\u{1F1E6}":["Bosnia and Herzegovina","\u6CE2\u9ED1\u5171\u548C\u56FD","\u6CE2\u9ED1"],"\u{1F1E7}\u{1F1E9}":["Bangladesh","\u5B5F\u52A0\u62C9\u56FD","\u5B5F\u52A0\u62C9"],"\u{1F1E7}\u{1F1EA}":["Belgium","\u6BD4\u5229\u65F6","\u6BD4\u5229\u6642"],"\u{1F1E7}\u{1F1EC}":["Bulgaria","\u4FDD\u52A0\u5229\u4E9A","\u4FDD\u52A0\u5229\u4E9E"],"\u{1F1E7}\u{1F1ED}":["Bahrain","\u5DF4\u6797"],"\u{1F1E7}\u{1F1F7}":["Brazil","\u5DF4\u897F","\u5723\u4FDD\u7F57"],"\u{1F1E7}\u{1F1FE}":["Belarus","\u767D\u4FC4\u7F57\u65AF","\u767D\u4FC4"],"\u{1F1E8}\u{1F1E6}":["Canada","\u52A0\u62FF\u5927","\u8499\u7279\u5229\u5C14","\u6E29\u54E5\u534E","\u6953\u8449","\u67AB\u53F6","\u6ED1\u94C1\u5362","\u591A\u4F26\u591A","Waterloo"],"\u{1F1E8}\u{1F1ED}":["Switzerland","\u745E\u58EB","\u82CF\u9ECE\u4E16","Zurich"],"\u{1F1E8}\u{1F1F1}":["Chile","\u667A\u5229"],"\u{1F1E8}\u{1F1F4}":["Colombia","\u54E5\u4F26\u6BD4\u4E9A"],"\u{1F1E8}\u{1F1F7}":["Costa Rica","\u54E5\u65AF\u8FBE\u9ECE\u52A0"],"\u{1F1E8}\u{1F1FE}":["Cyprus","\u585E\u6D66\u8DEF\u65AF"],"\u{1F1E8}\u{1F1FF}":["Czechia","\u6377\u514B"],"\u{1F1E9}\u{1F1EA}":["German","\u5FB7\u56FD","\u5FB7\u570B","\u4EAC\u5FB7","\u6EEC\u5FB7","\u5EE3\u5FB7","\u6CAA\u5FB7","\u5E7F\u5FB7","\u6CD5\u5170\u514B\u798F","Frankfurt"],"\u{1F1E9}\u{1F1F0}":["Denmark","\u4E39\u9EA6","\u4E39\u9EA5"],"\u{1F1EA}\u{1F1E8}":["Ecuador","\u5384\u74DC\u591A\u5C14"],"\u{1F1EA}\u{1F1EA}":["Estonia","\u7231\u6C99\u5C3C\u4E9A"],"\u{1F1EA}\u{1F1EC}":["Egypt","\u57C3\u53CA"],"\u{1F1EA}\u{1F1F8}":["Spain","\u897F\u73ED\u7259"],"\u{1F1EA}\u{1F1FA}":["European Union","\u6B27\u76DF","\u6B27\u7F57\u5DF4"],"\u{1F1EB}\u{1F1EE}":["Finland","\u82AC\u5170","\u82AC\u862D","\u8D6B\u5C14\u8F9B\u57FA"],"\u{1F1EB}\u{1F1F7}":["France","\u6CD5\u56FD","\u6CD5\u570B","\u5DF4\u9ECE"],"\u{1F1EC}\u{1F1E7}":["Great Britain","\u82F1\u56FD","England","United Kingdom","\u4F26\u6566","\u82F1","London"],"\u{1F1EC}\u{1F1EA}":["Georgia","\u683C\u9C81\u5409\u4E9A","\u683C\u9B6F\u5409\u4E9E"],"\u{1F1EC}\u{1F1F7}":["Greece","\u5E0C\u814A","\u5E0C\u81D8"],"\u{1F1ED}\u{1F1F0}":["Hong Kong","Hongkong","\u9999\u6E2F","HongKong","HONG KONG","\u6DF1\u6E2F","\u6CAA\u6E2F","\u547C\u6E2F","\u7A57\u6E2F","\u4EAC\u6E2F","\u6E2F"],"\u{1F1ED}\u{1F1F7}":["Croatia","\u514B\u7F57\u5730\u4E9A","\u514B\u7F85\u5730\u4E9E"],"\u{1F1ED}\u{1F1FA}":["Hungary","\u5308\u7259\u5229"],"\u{1F1EF}\u{1F1F4}":["Jordan","\u7EA6\u65E6"],"\u{1F1EF}\u{1F1F5}":["Japan","\u65E5\u672C","\u4E1C\u4EAC","\u5927\u962A","\u57FC\u7389","\u6CAA\u65E5","\u7A57\u65E5","\u5DDD\u65E5","\u4E2D\u65E5","\u6CC9\u65E5","\u676D\u65E5","\u6DF1\u65E5","\u8FBD\u65E5","\u5E7F\u65E5","\u5927\u5742","Osaka","Tokyo"],"\u{1F1F0}\u{1F1EA}":["Kenya","\u80AF\u5C3C\u4E9A"],"\u{1F1F0}\u{1F1EC}":["Kyrgyzstan","\u5409\u5C14\u5409\u65AF\u65AF\u5766"],"\u{1F1F0}\u{1F1ED}":["Cambodia","\u67EC\u57D4\u5BE8"],"\u{1F1F0}\u{1F1F5}":["North Korea","\u671D\u9C9C"],"\u{1F1F0}\u{1F1F7}":["Korea","\u97E9\u56FD","\u97D3\u570B","\u97E9","\u97D3","\u9996\u5C14","\u6625\u5DDD","Chuncheon","Seoul"],"\u{1F1F0}\u{1F1FF}":["Kazakhstan","\u54C8\u8428\u514B\u65AF\u5766","\u54C8\u8428\u514B"],"\u{1F1EE}\u{1F1E9}":["Indonesia","\u5370\u5C3C","\u5370\u5EA6\u5C3C\u897F\u4E9A","\u96C5\u52A0\u8FBE"],"\u{1F1EE}\u{1F1EA}":["Ireland","\u7231\u5C14\u5170","\u611B\u723E\u862D","\u90FD\u67CF\u6797"],"\u{1F1EE}\u{1F1F1}":["Israel","\u4EE5\u8272\u5217"],"\u{1F1EE}\u{1F1F2}":["Isle of Man","\u9A6C\u6069\u5C9B","\u99AC\u6069\u5CF6"],"\u{1F1EE}\u{1F1F3}":["India","\u5370\u5EA6","\u5B5F\u4E70","MFumbai"],"\u{1F1EE}\u{1F1F7}":["Iran","\u4F0A\u6717"],"\u{1F1EE}\u{1F1F8}":["Iceland","\u51B0\u5C9B","\u51B0\u5CF6"],"\u{1F1EE}\u{1F1F9}":["Italy","\u610F\u5927\u5229","\u7FA9\u5927\u5229","\u7C73\u5170","Nachash"],"\u{1F1F1}\u{1F1F9}":["Lithuania","\u7ACB\u9676\u5B9B"],"\u{1F1F1}\u{1F1FA}":["Luxembourg","\u5362\u68EE\u5821"],"\u{1F1F1}\u{1F1FB}":["Latvia","\u62C9\u8131\u7EF4\u4E9A","Latvija"],"\u{1F1F2}\u{1F1E6}":["Morocco","\u6469\u6D1B\u54E5"],"\u{1F1F2}\u{1F1E9}":["Moldova","\u6469\u5C14\u591A\u74E6","\u6469\u723E\u591A\u74E6"],"\u{1F1F3}\u{1F1EC}":["Nigeria","\u5C3C\u65E5\u5229\u4E9A","\u5C3C\u65E5\u5229\u4E9E"],"\u{1F1F2}\u{1F1F0}":["Macedonia","\u9A6C\u5176\u987F","\u99AC\u5176\u9813"],"\u{1F1F2}\u{1F1F3}":["Mongolia","\u8499\u53E4"],"\u{1F1F2}\u{1F1F4}":["Macao","\u6FB3\u95E8","\u6FB3\u9580","CTM"],"\u{1F1F2}\u{1F1F9}":["Malta","\u9A6C\u8033\u4ED6"],"\u{1F1F2}\u{1F1FD}":["Mexico","\u58A8\u897F\u54E5"],"\u{1F1F2}\u{1F1FE}":["Malaysia","\u9A6C\u6765","\u99AC\u4F86","\u5409\u9686\u5761","\u5927\u99AC"],"\u{1F1F3}\u{1F1F1}":["Netherlands","\u8377\u5170","\u8377\u862D","\u5C3C\u5FB7\u862D","\u963F\u59C6\u65AF\u7279\u4E39"],"\u{1F1F3}\u{1F1F4}":["Norway","\u632A\u5A01"],"\u{1F1F3}\u{1F1F5}":["Nepal","\u5C3C\u6CCA\u5C14"],"\u{1F1F3}\u{1F1FF}":["New Zealand","\u65B0\u897F\u5170","\u65B0\u897F\u862D"],"\u{1F1F5}\u{1F1E6}":["Panama","\u5DF4\u62FF\u9A6C"],"\u{1F1F5}\u{1F1EA}":["Peru","\u79D8\u9C81","\u7955\u9B6F"],"\u{1F1F5}\u{1F1ED}":["Philippines","\u83F2\u5F8B\u5BBE","\u83F2\u5F8B\u8CD3"],"\u{1F1F5}\u{1F1F0}":["Pakistan","\u5DF4\u57FA\u65AF\u5766"],"\u{1F1F5}\u{1F1F1}":["Poland","\u6CE2\u5170","\u6CE2\u862D"],"\u{1F1F5}\u{1F1F7}":["Puerto Rico","\u6CE2\u591A\u9ECE\u5404"],"\u{1F1F5}\u{1F1F9}":["Portugal","\u8461\u8404\u7259"],"\u{1F1F5}\u{1F1FE}":["Paraguay","\u5DF4\u62C9\u572D"],"\u{1F1F7}\u{1F1F4}":["Romania","\u7F57\u9A6C\u5C3C\u4E9A"],"\u{1F1F7}\u{1F1F8}":["Serbia","\u585E\u5C14\u7EF4\u4E9A"],"\u{1F1F7}\u{1F1EA}":["R\xE9union","\u7559\u5C3C\u6C6A","\u6CD5\u5C5E\u7559\u5C3C\u6C6A"],"\u{1F1F7}\u{1F1FA}":["Russia","\u4FC4\u7F57\u65AF","\u4FC4\u56FD","\u4FC4\u7F85\u65AF","\u4F2F\u529B","\u83AB\u65AF\u79D1","\u5723\u5F7C\u5F97\u5821","\u897F\u4F2F\u5229\u4E9A","\u4EAC\u4FC4","\u676D\u4FC4","\u5EE3\u4FC4","\u6EEC\u4FC4","\u5E7F\u4FC4","\u6CAA\u4FC4","Moscow"],"\u{1F1F8}\u{1F1E6}":["Saudi","\u6C99\u7279\u963F\u62C9\u4F2F","\u6C99\u7279"],"\u{1F1F8}\u{1F1EA}":["Sweden","\u745E\u5178"],"\u{1F1F8}\u{1F1EC}":["Singapore","Singapo","\u65B0\u52A0\u5761","\u72EE\u57CE","\u6CAA\u65B0","\u4EAC\u65B0","\u4E2D\u65B0","\u6CC9\u65B0","\u7A57\u65B0","\u6DF1\u65B0","\u676D\u65B0","\u5E7F\u65B0","\u5EE3\u65B0","\u6EEC\u65B0"],"\u{1F1F8}\u{1F1EE}":["Slovenia","\u65AF\u6D1B\u6587\u5C3C\u4E9A"],"\u{1F1F8}\u{1F1F0}":["Slovakia","\u65AF\u6D1B\u4F10\u514B"],"\u{1F1F9}\u{1F1ED}":["Thailand","\u6CF0\u56FD","\u6CF0\u570B","\u66FC\u8C37"],"\u{1F1F9}\u{1F1F3}":["Tunisia","\u7A81\u5C3C\u65AF"],"\u{1F1F9}\u{1F1F7}":["Turkey","T\xFCrkiye","\u571F\u8033\u5176","\u4F0A\u65AF\u5766\u5E03\u5C14"],"\u{1F1F9}\u{1F1FC}":["Taiwan","\u53F0\u6E7E","\u81FA\u7063","\u53F0\u7063","\u4E2D\u83EF\u6C11\u570B","\u4E2D\u534E\u6C11\u56FD","\u53F0\u5317","\u53F0\u4E2D","\u65B0\u5317","\u5F70\u5316","\u53F0","\u81FA","Taipei"],"\u{1F1FA}\u{1F1E6}":["Ukraine","\u4E4C\u514B\u5170","\u70CF\u514B\u862D"],"\u{1F1FA}\u{1F1F8}":["United States","\u7F8E\u56FD","America","\u7F8E","\u4EAC\u7F8E","\u6CE2\u7279\u5170","\u8FBE\u62C9\u65AF","\u4FC4\u52D2\u5188","\u51E4\u51F0\u57CE","\u8D39\u5229\u8499","\u7845\u8C37","\u77FD\u8C37","\u62C9\u65AF\u7EF4\u52A0\u65AF","\u6D1B\u6749\u77F6","\u5723\u4F55\u585E","\u5723\u514B\u62C9\u62C9","\u897F\u96C5\u56FE","\u829D\u52A0\u54E5","\u6CAA\u7F8E","\u54E5\u4F26\u5E03","\u7EBD\u7EA6","Los Angeles","San Jose","Sillicon Valley","Michigan"],"\u{1F1FA}\u{1F1FE}":["Uruguay","\u4E4C\u62C9\u572D"],"\u{1F1FB}\u{1F1EA}":["Venezuela","\u59D4\u5185\u745E\u62C9"],"\u{1F1FB}\u{1F1F3}":["Viet Nam","Vietnam","Vi\u1EC7t Nam","\u8D8A\u5357","\u80E1\u5FD7\u660E"],"\u{1F1FF}\u{1F1E6}":["South Africa","\u5357\u975E"],"\u{1F1E8}\u{1F1F3}":["China","\u4E2D\u56FD","\u4E2D\u570B","\u56DE\u56FD","\u56DE\u570B","\u56FD\u5185","\u570B\u5167","\u534E\u4E1C","\u534E\u897F","\u534E\u5357","\u534E\u5317","\u534E\u4E2D","\u6C5F\u82CF","\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733","\u676D\u5DDE","\u5F90\u5DDE","\u9752\u5C9B","\u5B81\u6CE2","\u9547\u6C5F"]},l={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["EXP","BAND"],"\u{1F1F8}\u{1F1F1}":["TEST","SOS"],"\u{1F1E6}\u{1F1E9}":["AD","AND"],"\u{1F1E6}\u{1F1EA}":["AE","ARE"],"\u{1F1E6}\u{1F1EB}":["AF","AFG"],"\u{1F1E6}\u{1F1F1}":["AL","ALB"],"\u{1F1E6}\u{1F1F2}":["AM","ARM"],"\u{1F1E6}\u{1F1F7}":["AR","ARG"],"\u{1F1E6}\u{1F1F9}":["AT","AUT"],"\u{1F1E6}\u{1F1FA}":["AU","AUS"],"\u{1F1E6}\u{1F1FF}":["AZ","AZE"],"\u{1F1E7}\u{1F1E6}":["BA","BIH"],"\u{1F1E7}\u{1F1E9}":["BD","BGD"],"\u{1F1E7}\u{1F1EA}":["BE","BEL"],"\u{1F1E7}\u{1F1EC}":["BG","BGR"],"\u{1F1E7}\u{1F1ED}":["BH","BHR"],"\u{1F1E7}\u{1F1F7}":["BR","BRA"],"\u{1F1E7}\u{1F1FE}":["BY","BLR"],"\u{1F1E8}\u{1F1E6}":["CA","CAN"],"\u{1F1E8}\u{1F1ED}":["CH","CHE"],"\u{1F1E8}\u{1F1F1}":["CL","CHL"],"\u{1F1E8}\u{1F1F4}":["CO","COL"],"\u{1F1E8}\u{1F1F7}":["CR","CRI"],"\u{1F1E8}\u{1F1FE}":["CY","CYP"],"\u{1F1E8}\u{1F1FF}":["CZ","CZE"],"\u{1F1E9}\u{1F1EA}":["DE","DEU"],"\u{1F1E9}\u{1F1F0}":["DK","DNK"],"\u{1F1EA}\u{1F1E8}":["EC","ECU"],"\u{1F1EA}\u{1F1EA}":["EE","EST"],"\u{1F1EA}\u{1F1EC}":["EG","EGY"],"\u{1F1EA}\u{1F1F8}":["ES","ESP"],"\u{1F1EA}\u{1F1FA}":["EU"],"\u{1F1EB}\u{1F1EE}":["FI","FIN"],"\u{1F1EB}\u{1F1F7}":["FR","FRA"],"\u{1F1EC}\u{1F1E7}":["GB","GBR","UK"],"\u{1F1EC}\u{1F1EA}":["GE","GEO"],"\u{1F1EC}\u{1F1F7}":["GR","GRC"],"\u{1F1ED}\u{1F1F0}":["HK","HKG","HKT","HKBN","HGC","WTT","CMI"],"\u{1F1ED}\u{1F1F7}":["HR","HRV"],"\u{1F1ED}\u{1F1FA}":["HU","HUN"],"\u{1F1EF}\u{1F1F4}":["JO","JOR"],"\u{1F1EF}\u{1F1F5}":["JP","JPN"],"\u{1F1F0}\u{1F1EA}":["KE","KEN"],"\u{1F1F0}\u{1F1EC}":["KG","KGZ"],"\u{1F1F0}\u{1F1ED}":["KH","KGZ"],"\u{1F1F0}\u{1F1F5}":["KP","PRK"],"\u{1F1F0}\u{1F1F7}":["KR","KOR"],"\u{1F1F0}\u{1F1FF}":["KZ","KAZ"],"\u{1F1EE}\u{1F1E9}":["ID","IDN"],"\u{1F1EE}\u{1F1EA}":["IE","IRL"],"\u{1F1EE}\u{1F1F1}":["IL","ISR"],"\u{1F1EE}\u{1F1F2}":["IM","IMN"],"\u{1F1EE}\u{1F1F3}":["IN","IND"],"\u{1F1EE}\u{1F1F7}":["IR","IRN"],"\u{1F1EE}\u{1F1F8}":["IS","ISL"],"\u{1F1EE}\u{1F1F9}":["IT","ITA"],"\u{1F1F1}\u{1F1F9}":["LT","LTU"],"\u{1F1F1}\u{1F1FA}":["LU","LUX"],"\u{1F1F1}\u{1F1FB}":["LV","LVA"],"\u{1F1F2}\u{1F1E6}":["MA","MAR"],"\u{1F1F2}\u{1F1E9}":["MD","MDA"],"\u{1F1F3}\u{1F1EC}":["NG","NGA"],"\u{1F1F2}\u{1F1F0}":["MK","MKD"],"\u{1F1F2}\u{1F1F3}":["MN","MNG"],"\u{1F1F2}\u{1F1F4}":["MO","MAC","CTM"],"\u{1F1F2}\u{1F1F9}":["MT","MLT"],"\u{1F1F2}\u{1F1FD}":["MX","MEX"],"\u{1F1F2}\u{1F1FE}":["MY","MYS"],"\u{1F1F3}\u{1F1F1}":["NL","NLD"],"\u{1F1F3}\u{1F1F4}":["NO","NOR"],"\u{1F1F3}\u{1F1F5}":["NP","NPL"],"\u{1F1F3}\u{1F1FF}":["NZ","NZL"],"\u{1F1F5}\u{1F1E6}":["PA","PAN"],"\u{1F1F5}\u{1F1EA}":["PE","PER"],"\u{1F1F5}\u{1F1ED}":["PH","PHL"],"\u{1F1F5}\u{1F1F0}":["PK","PAK"],"\u{1F1F5}\u{1F1F1}":["PL","POL"],"\u{1F1F5}\u{1F1F7}":["PR","PRI"],"\u{1F1F5}\u{1F1F9}":["PT","PRT"],"\u{1F1F5}\u{1F1FE}":["PY","PRY"],"\u{1F1F7}\u{1F1F4}":["RO","ROU"],"\u{1F1F7}\u{1F1F8}":["RS","SRB"],"\u{1F1F7}\u{1F1EA}":["RE","REU"],"\u{1F1F7}\u{1F1FA}":["RU","RUS"],"\u{1F1F8}\u{1F1E6}":["SA","SAU"],"\u{1F1F8}\u{1F1EA}":["SE","SWE"],"\u{1F1F8}\u{1F1EC}":["SG","SGP"],"\u{1F1F8}\u{1F1EE}":["SI","SVN"],"\u{1F1F8}\u{1F1F0}":["SK","SVK"],"\u{1F1F9}\u{1F1ED}":["TH","THA"],"\u{1F1F9}\u{1F1F3}":["TN","TUN"],"\u{1F1F9}\u{1F1F7}":["TR","TUR"],"\u{1F1F9}\u{1F1FC}":["TW","TWN","CHT","HINET","ROC"],"\u{1F1FA}\u{1F1E6}":["UA","UKR"],"\u{1F1FA}\u{1F1F8}":["US","USA","LAX","SFO"],"\u{1F1FA}\u{1F1FE}":["UY","URY"],"\u{1F1FB}\u{1F1EA}":["VE","VEN"],"\u{1F1FB}\u{1F1F3}":["VN","VNM"],"\u{1F1FF}\u{1F1E6}":["ZA","ZAF"],"\u{1F1E8}\u{1F1F3}":["CN","CHN","BACK"]};function a(o){var S;let N=((S=o.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/))==null?void 0:S[0])||"";for(const g of Object.keys(A))if(A[g].some(m=>RegExp(`${m}`,"i").test(o)))return N=g;for(const g of Object.keys(l))if(l[g].some(m=>RegExp(`(^|[^a-zA-Z:])${m}([^a-zA-Z:]|$)`).test(o)&&!/(\d+)\s*([MG]B)/.test(o)))return N=g;return N}function h(o){return/^(\uD83C[\uDDE6-\uDDFF]){2}$/.test(o)}function C(o){return/^[A-Z]{2}$/.test(o)}function c(o){return o.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g,"").trim()}},1500:(s,r,i)=>{i.d(r,{_d:()=>m,l0:()=>c,pH:()=>g});var A=Math.pow,l=(u,F,e)=>new Promise((E,t)=>{var n=B=>{try{f(e.next(B))}catch(I){t(I)}},d=B=>{try{f(e.throw(B))}catch(I){t(I)}},f=B=>B.done?E(B.value):Promise.resolve(B.value).then(n,d);f((e=e.apply(u,F)).next())});const a=$substore,h={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"],vpsmmo:["Vpsmmo Technology Company Limited","1mcloud Technology Company Limited","AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],litespeed:["LITESPEED-COM","Litespeed Technology Company Limited","AS140810 Megacore Technology Company Limited"],m247:["M247 Europe SRL","3NT SOLUTIONS LLP","AS9009 M247 Europe SRL"]},C={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function c(u){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(u)}function o(u){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(u)}function S(u,F){const e=u.split("."),E=F.split(".");if(e.length<3||E.length<3)return!1;for(let t=0;t<3;t++)if(e[t]!==E[t])return!1;return!0}function N(u){const F=u.split(".");return F[F.length-1]}function g(u){return l(this,null,function*(){const F=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(u)}&type=A`,e={Accept:"application/dns-json"};try{const E=yield a.http.get({url:F,headers:e}),t=JSON.parse(E.body);if(t.Status!==0)throw new Error(`HTTP error! status: ${t.Status}`);return t.Answer?t.Answer.map(n=>`${n.data}`)[0]:""}catch(E){return""}})}function y(u){return l(this,null,function*(){return yield a.http.get(`https://dns.google/resolve?name=${u}`).then(e=>{const E=JSON.parse(e.body);if(E.Status===0){const t=E.Answer.find(n=>n.type===1);return t?t.data:""}return""})})}function m(u){return l(this,null,function*(){return yield a.http.get(`http://ip-api.com/json/${u}?fields=country`).then(e=>JSON.parse(e.body).country||"")})}function O(u){return l(this,null,function*(){return yield a.http.get(`http://ip-api.com/json/${u}?fields=region,regionName`).then(e=>{const E=JSON.parse(e.body);return E.regionName&&E.region?`${E.regionName} (${E.region})`:""})})}function _(u){return l(this,null,function*(){return yield a.http.get(`http://ip-api.com/json/${u}?fields=isp`).then(e=>JSON.parse(e.body).isp||"")})}function L(u){return l(this,null,function*(){return yield a.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(u)}).then(e=>JSON.parse(e.body).map(t=>t.isp))})}function R(u){return l(this,null,function*(){return yield a.http.get(`http://ip-api.com/json/${u}?fields=isp,org`).then(e=>{const E=JSON.parse(e.body);return[E.isp||"",E.org||""].join(",")})})}function M(u,F){let e,E;const t=D(u);if((e=F.match(/^(.*?)\/(\d{1,2})$/))&&(E=D(e[1]))>=0){const n=A(2,32-parseInt(e[2]));return t>=E&&t<=E+n-1}return!1}function D(u){let F;if(F=u.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let e=0,E=1;for(let t=4;t>=1;t-=1)e+=E*parseInt(F[t]),E*=256;return e}return-1}},9085:(s,r,i)=>{i.d(r,{G:()=>A});function A(a){return a&&a!=="null"&&a!=="undefined"}function l(a,h){return a.reduce((C,c)=>{const o=c[h];return C[o]||(C[o]=[]),C[o].push(c),C},{})}}},T={};function p(s){var r=T[s];if(r!==void 0)return r.exports;var i=T[s]={exports:{}};return P[s](i,i.exports,p),i.exports}p.n=s=>{var r=s&&s.__esModule?()=>s.default:()=>s;return p.d(r,{a:r}),r},p.d=(s,r)=>{for(var i in r)p.o(r,i)&&!p.o(s,i)&&Object.defineProperty(s,i,{enumerable:!0,get:r[i]})},p.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(s){if(typeof window=="object")return window}}(),p.o=(s,r)=>Object.prototype.hasOwnProperty.call(s,r);var v={};(()=>{var s=p(3183),r=p.n(s),i=p(8475),A=p(1500),l=p(8599),a=p(9085),h=p(9468);function C(D,u){return D.find(F=>F.name===u)}function c(D,u){return D.findIndex(F=>F.name===u)}function o(D,u){const F=c(D,u);D.splice(F,1)}function S(D,u,F){const e=c(D,u);D[e]=F}var N=(D,u,F)=>new Promise((e,E)=>{var t=f=>{try{d(F.next(f))}catch(B){E(B)}},n=f=>{try{d(F.throw(f))}catch(B){E(B)}},d=f=>f.done?e(f.value):Promise.resolve(f.value).then(t,n);d((F=F.apply(D,u)).next())});const g=$substore,y=new i.A(h.Mn,h.i5),m=new i.A(h.Dh,h.i5),O=[/\?+/],_=["127.0.0.1","1.1.1.1"],L=new RegExp(O.join("|"),"gi");function R(){return N(this,arguments,function*(D=[],u,F){const{isSurge:e}=g.env,E=g.read(h.ax),t=[];for(const n of D)if(!((e||u&&u.startsWith("Surge"))&&n.network==="grpc")&&!(_.indexOf(n.server)>-1)){if((0,A.l0)(n.server)){const d=n.server,f=y.get(d);if(f)n.server=f;else{const B=yield(0,A.pH)(d);B&&(n.server=B,y.set(d,B))}}n.name=n.name.replace(L,"");try{const d=yield M(n.server);n.countryFlag=d,n.countryName=l.iI[d][0],n.countryCode=l.jB[d][0]}catch(d){continue}if((0,a.G)(F)&&(0,a.G)(F.source)&&(0,a.G)(F.source[n.subName]))n.tags=F.source[n.subName].tag||[];else if((0,a.G)(E)){const d=C(E,n.subName);(0,a.G)(d)&&(n.tags=d.tag||[])}t.push(n)}return t})}function M(D){return N(this,null,function*(){let u="";const F=m.get(D);if(F)u=(0,l.CY)(F);else{const e=yield(0,A._d)(D);u=(0,l.CY)(e),u&&m.set(D,e)}return u})}r().operator=R})()})();})();
