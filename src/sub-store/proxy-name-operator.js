/*!
 substore-tools - version: 1.4.0
 Build fullhash:6a1761086e0406c23a4c, chunkhash:7efa04bb565f2f78120b (2024-05-12 21:37:55)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var x={3183:(l,c,B)=>{var D;typeof window!="undefined"?D=window:typeof B.g!="undefined"?D=B.g:typeof self!="undefined"?D=self:D={},l.exports=D},8475:(l,c,B)=>{B.d(c,{A:()=>h});const D=$substore;class g{constructor(E,e){this.key=E,this.expires=e;const o=D.read(E);o?this.resourceCache=JSON.parse(o):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let E=!1;const e=new Date().getTime();Object.keys(this.resourceCache).forEach(o=>{const N=this.resourceCache[o];(!N.time||e-N.time>this.expires)&&(delete this.resourceCache[o],D.delete(`#${o}`),E=!0)}),E&&this._persist()}revokeIds(E){let e=!1;for(const o of E)delete this.resourceCache[o],e=!0;e&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){D.write(JSON.stringify(this.resourceCache),this.key)}get(E){const e=this.resourceCache[E]&&this.resourceCache[E].time;return e&&new Date().getTime()-e<=this.expires?this.resourceCache[E].data:null}set(E,e){this.resourceCache[E]={time:new Date().getTime(),data:e},this._persist()}}const h=g},423:(l,c,B)=>{B.d(c,{ru:()=>g});var D=(E,e,o)=>new Promise((N,m)=>{var P=L=>{try{M(o.next(L))}catch(v){m(v)}},_=L=>{try{M(o.throw(L))}catch(v){m(v)}},M=L=>L.done?N(L.value):Promise.resolve(L.value).then(P,_);M((o=o.apply(E,e)).next())});function g(){return D(this,null,function*(){const E=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(E)})}function h(){return D(this,null,function*(){const E=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(E)})}function O(E){return D(this,null,function*(){const e=normalizeString(E),o=yield h();let N="";for(const m in o)if(containsIgnoreCase(e,normalizeString(m))){N=m;break}return o[N]})}},8599:(l,c,B)=>{B.d(c,{CY:()=>h,iI:()=>D,jB:()=>g});const D={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["\u6D41\u91CF","\u65F6\u95F4","\u8FC7\u671F","Bandwidth","Expire"],"\u{1F1F8}\u{1F1F1}":["\u5E94\u6025","\u6D4B\u8BD5\u8282\u70B9"],"\u{1F1E6}\u{1F1E9}":["Andorra","\u5B89\u9053\u5C14"],"\u{1F1E6}\u{1F1EA}":["United Arab Emirates","\u963F\u8054\u914B","\u8FEA\u62DC"],"\u{1F1E6}\u{1F1EB}":["Afghanistan","\u963F\u5BCC\u6C57"],"\u{1F1E6}\u{1F1F1}":["Albania","\u963F\u5C14\u5DF4\u5C3C\u4E9A","\u963F\u723E\u5DF4\u5C3C\u4E9E"],"\u{1F1E6}\u{1F1F2}":["Armenia","\u4E9A\u7F8E\u5C3C\u4E9A"],"\u{1F1E6}\u{1F1F7}":["Argentina","\u963F\u6839\u5EF7"],"\u{1F1E6}\u{1F1F9}":["Austria","\xDAc","\u5965\u5730\u5229","\u5967\u5730\u5229","\u7EF4\u4E5F\u7EB3"],"\u{1F1E6}\u{1F1FA}":["Australia","\u6FB3\u5927\u5229\u4E9A","\u6FB3\u6D32","\u58A8\u5C14\u672C","\u6089\u5C3C","\u571F\u6FB3","\u4EAC\u6FB3","\u5EE3\u6FB3","\u6EEC\u6FB3","\u6CAA\u6FB3","\u5E7F\u6FB3","Sydney"],"\u{1F1E6}\u{1F1FF}":["Azerbaijan","\u963F\u585E\u62DC\u7586"],"\u{1F1E7}\u{1F1E6}":["Bosnia and Herzegovina","\u6CE2\u9ED1\u5171\u548C\u56FD","\u6CE2\u9ED1"],"\u{1F1E7}\u{1F1E9}":["Bangladesh","\u5B5F\u52A0\u62C9\u56FD","\u5B5F\u52A0\u62C9"],"\u{1F1E7}\u{1F1EA}":["Belgium","\u6BD4\u5229\u65F6","\u6BD4\u5229\u6642"],"\u{1F1E7}\u{1F1EC}":["Bulgaria","\u4FDD\u52A0\u5229\u4E9A","\u4FDD\u52A0\u5229\u4E9E"],"\u{1F1E7}\u{1F1ED}":["Bahrain","\u5DF4\u6797"],"\u{1F1E7}\u{1F1F7}":["Brazil","\u5DF4\u897F","\u5723\u4FDD\u7F57"],"\u{1F1E7}\u{1F1FE}":["Belarus","\u767D\u4FC4\u7F57\u65AF","\u767D\u4FC4"],"\u{1F1E8}\u{1F1E6}":["Canada","\u52A0\u62FF\u5927","\u8499\u7279\u5229\u5C14","\u6E29\u54E5\u534E","\u6953\u8449","\u67AB\u53F6","\u6ED1\u94C1\u5362","\u591A\u4F26\u591A","Waterloo"],"\u{1F1E8}\u{1F1ED}":["Switzerland","\u745E\u58EB","\u82CF\u9ECE\u4E16","Zurich"],"\u{1F1E8}\u{1F1F1}":["Chile","\u667A\u5229"],"\u{1F1E8}\u{1F1F4}":["Colombia","\u54E5\u4F26\u6BD4\u4E9A"],"\u{1F1E8}\u{1F1F7}":["Costa Rica","\u54E5\u65AF\u8FBE\u9ECE\u52A0"],"\u{1F1E8}\u{1F1FE}":["Cyprus","\u585E\u6D66\u8DEF\u65AF"],"\u{1F1E8}\u{1F1FF}":["Czechia","\u6377\u514B"],"\u{1F1E9}\u{1F1EA}":["German","\u5FB7\u56FD","\u5FB7\u570B","\u4EAC\u5FB7","\u6EEC\u5FB7","\u5EE3\u5FB7","\u6CAA\u5FB7","\u5E7F\u5FB7","\u6CD5\u5170\u514B\u798F","Frankfurt"],"\u{1F1E9}\u{1F1F0}":["Denmark","\u4E39\u9EA6","\u4E39\u9EA5"],"\u{1F1EA}\u{1F1E8}":["Ecuador","\u5384\u74DC\u591A\u5C14"],"\u{1F1EA}\u{1F1EA}":["Estonia","\u7231\u6C99\u5C3C\u4E9A"],"\u{1F1EA}\u{1F1EC}":["Egypt","\u57C3\u53CA"],"\u{1F1EA}\u{1F1F8}":["Spain","\u897F\u73ED\u7259"],"\u{1F1EA}\u{1F1FA}":["European Union","\u6B27\u76DF","\u6B27\u7F57\u5DF4"],"\u{1F1EB}\u{1F1EE}":["Finland","\u82AC\u5170","\u82AC\u862D","\u8D6B\u5C14\u8F9B\u57FA"],"\u{1F1EB}\u{1F1F7}":["France","\u6CD5\u56FD","\u6CD5\u570B","\u5DF4\u9ECE"],"\u{1F1EC}\u{1F1E7}":["Great Britain","\u82F1\u56FD","England","United Kingdom","\u4F26\u6566","\u82F1","London"],"\u{1F1EC}\u{1F1EA}":["Georgia","\u683C\u9C81\u5409\u4E9A","\u683C\u9B6F\u5409\u4E9E"],"\u{1F1EC}\u{1F1F7}":["Greece","\u5E0C\u814A","\u5E0C\u81D8"],"\u{1F1ED}\u{1F1F0}":["Hong Kong","Hongkong","\u9999\u6E2F","HongKong","HONG KONG","\u6DF1\u6E2F","\u6CAA\u6E2F","\u547C\u6E2F","\u7A57\u6E2F","\u4EAC\u6E2F","\u6E2F"],"\u{1F1ED}\u{1F1F7}":["Croatia","\u514B\u7F57\u5730\u4E9A","\u514B\u7F85\u5730\u4E9E"],"\u{1F1ED}\u{1F1FA}":["Hungary","\u5308\u7259\u5229"],"\u{1F1EF}\u{1F1F4}":["Jordan","\u7EA6\u65E6"],"\u{1F1EF}\u{1F1F5}":["Japan","\u65E5\u672C","\u4E1C\u4EAC","\u5927\u962A","\u57FC\u7389","\u6CAA\u65E5","\u7A57\u65E5","\u5DDD\u65E5","\u4E2D\u65E5","\u6CC9\u65E5","\u676D\u65E5","\u6DF1\u65E5","\u8FBD\u65E5","\u5E7F\u65E5","\u5927\u5742","Osaka","Tokyo"],"\u{1F1F0}\u{1F1EA}":["Kenya","\u80AF\u5C3C\u4E9A"],"\u{1F1F0}\u{1F1EC}":["Kyrgyzstan","\u5409\u5C14\u5409\u65AF\u65AF\u5766"],"\u{1F1F0}\u{1F1ED}":["Cambodia","\u67EC\u57D4\u5BE8"],"\u{1F1F0}\u{1F1F5}":["North Korea","\u671D\u9C9C"],"\u{1F1F0}\u{1F1F7}":["Korea","\u97E9\u56FD","\u97D3\u570B","\u97E9","\u97D3","\u9996\u5C14","\u6625\u5DDD","Chuncheon","Seoul"],"\u{1F1F0}\u{1F1FF}":["Kazakhstan","\u54C8\u8428\u514B\u65AF\u5766","\u54C8\u8428\u514B"],"\u{1F1EE}\u{1F1E9}":["Indonesia","\u5370\u5C3C","\u5370\u5EA6\u5C3C\u897F\u4E9A","\u96C5\u52A0\u8FBE"],"\u{1F1EE}\u{1F1EA}":["Ireland","\u7231\u5C14\u5170","\u611B\u723E\u862D","\u90FD\u67CF\u6797"],"\u{1F1EE}\u{1F1F1}":["Israel","\u4EE5\u8272\u5217"],"\u{1F1EE}\u{1F1F2}":["Isle of Man","\u9A6C\u6069\u5C9B","\u99AC\u6069\u5CF6"],"\u{1F1EE}\u{1F1F3}":["India","\u5370\u5EA6","\u5B5F\u4E70","MFumbai"],"\u{1F1EE}\u{1F1F7}":["Iran","\u4F0A\u6717"],"\u{1F1EE}\u{1F1F8}":["Iceland","\u51B0\u5C9B","\u51B0\u5CF6"],"\u{1F1EE}\u{1F1F9}":["Italy","\u610F\u5927\u5229","\u7FA9\u5927\u5229","\u7C73\u5170","Nachash"],"\u{1F1F1}\u{1F1F9}":["Lithuania","\u7ACB\u9676\u5B9B"],"\u{1F1F1}\u{1F1FA}":["Luxembourg","\u5362\u68EE\u5821"],"\u{1F1F1}\u{1F1FB}":["Latvia","\u62C9\u8131\u7EF4\u4E9A","Latvija"],"\u{1F1F2}\u{1F1E6}":["Morocco","\u6469\u6D1B\u54E5"],"\u{1F1F2}\u{1F1E9}":["Moldova","\u6469\u5C14\u591A\u74E6","\u6469\u723E\u591A\u74E6"],"\u{1F1F3}\u{1F1EC}":["Nigeria","\u5C3C\u65E5\u5229\u4E9A","\u5C3C\u65E5\u5229\u4E9E"],"\u{1F1F2}\u{1F1F0}":["Macedonia","\u9A6C\u5176\u987F","\u99AC\u5176\u9813"],"\u{1F1F2}\u{1F1F3}":["Mongolia","\u8499\u53E4"],"\u{1F1F2}\u{1F1F4}":["Macao","\u6FB3\u95E8","\u6FB3\u9580","CTM"],"\u{1F1F2}\u{1F1F9}":["Malta","\u9A6C\u8033\u4ED6"],"\u{1F1F2}\u{1F1FD}":["Mexico","\u58A8\u897F\u54E5"],"\u{1F1F2}\u{1F1FE}":["Malaysia","\u9A6C\u6765","\u99AC\u4F86","\u5409\u9686\u5761","\u5927\u99AC"],"\u{1F1F3}\u{1F1F1}":["Netherlands","\u8377\u5170","\u8377\u862D","\u5C3C\u5FB7\u862D","\u963F\u59C6\u65AF\u7279\u4E39"],"\u{1F1F3}\u{1F1F4}":["Norway","\u632A\u5A01"],"\u{1F1F3}\u{1F1F5}":["Nepal","\u5C3C\u6CCA\u5C14"],"\u{1F1F3}\u{1F1FF}":["New Zealand","\u65B0\u897F\u5170","\u65B0\u897F\u862D"],"\u{1F1F5}\u{1F1E6}":["Panama","\u5DF4\u62FF\u9A6C"],"\u{1F1F5}\u{1F1EA}":["Peru","\u79D8\u9C81","\u7955\u9B6F"],"\u{1F1F5}\u{1F1ED}":["Philippines","\u83F2\u5F8B\u5BBE","\u83F2\u5F8B\u8CD3"],"\u{1F1F5}\u{1F1F0}":["Pakistan","\u5DF4\u57FA\u65AF\u5766"],"\u{1F1F5}\u{1F1F1}":["Poland","\u6CE2\u5170","\u6CE2\u862D"],"\u{1F1F5}\u{1F1F7}":["Puerto Rico","\u6CE2\u591A\u9ECE\u5404"],"\u{1F1F5}\u{1F1F9}":["Portugal","\u8461\u8404\u7259"],"\u{1F1F5}\u{1F1FE}":["Paraguay","\u5DF4\u62C9\u572D"],"\u{1F1F7}\u{1F1F4}":["Romania","\u7F57\u9A6C\u5C3C\u4E9A"],"\u{1F1F7}\u{1F1F8}":["Serbia","\u585E\u5C14\u7EF4\u4E9A"],"\u{1F1F7}\u{1F1EA}":["R\xE9union","\u7559\u5C3C\u6C6A","\u6CD5\u5C5E\u7559\u5C3C\u6C6A"],"\u{1F1F7}\u{1F1FA}":["Russia","\u4FC4\u7F57\u65AF","\u4FC4\u56FD","\u4FC4\u7F85\u65AF","\u4F2F\u529B","\u83AB\u65AF\u79D1","\u5723\u5F7C\u5F97\u5821","\u897F\u4F2F\u5229\u4E9A","\u4EAC\u4FC4","\u676D\u4FC4","\u5EE3\u4FC4","\u6EEC\u4FC4","\u5E7F\u4FC4","\u6CAA\u4FC4","Moscow"],"\u{1F1F8}\u{1F1E6}":["Saudi","\u6C99\u7279\u963F\u62C9\u4F2F","\u6C99\u7279"],"\u{1F1F8}\u{1F1EA}":["Sweden","\u745E\u5178"],"\u{1F1F8}\u{1F1EC}":["Singapore","Singapo","\u65B0\u52A0\u5761","\u72EE\u57CE","\u6CAA\u65B0","\u4EAC\u65B0","\u4E2D\u65B0","\u6CC9\u65B0","\u7A57\u65B0","\u6DF1\u65B0","\u676D\u65B0","\u5E7F\u65B0","\u5EE3\u65B0","\u6EEC\u65B0"],"\u{1F1F8}\u{1F1EE}":["Slovenia","\u65AF\u6D1B\u6587\u5C3C\u4E9A"],"\u{1F1F8}\u{1F1F0}":["Slovakia","\u65AF\u6D1B\u4F10\u514B"],"\u{1F1F9}\u{1F1ED}":["Thailand","\u6CF0\u56FD","\u6CF0\u570B","\u66FC\u8C37"],"\u{1F1F9}\u{1F1F3}":["Tunisia","\u7A81\u5C3C\u65AF"],"\u{1F1F9}\u{1F1F7}":["Turkey","T\xFCrkiye","\u571F\u8033\u5176","\u4F0A\u65AF\u5766\u5E03\u5C14"],"\u{1F1F9}\u{1F1FC}":["Taiwan","\u53F0\u6E7E","\u81FA\u7063","\u53F0\u7063","\u4E2D\u83EF\u6C11\u570B","\u4E2D\u534E\u6C11\u56FD","\u53F0\u5317","\u53F0\u4E2D","\u65B0\u5317","\u5F70\u5316","\u53F0","\u81FA","Taipei"],"\u{1F1FA}\u{1F1E6}":["Ukraine","\u4E4C\u514B\u5170","\u70CF\u514B\u862D"],"\u{1F1FA}\u{1F1F8}":["United States","\u7F8E\u56FD","America","\u7F8E","\u4EAC\u7F8E","\u6CE2\u7279\u5170","\u8FBE\u62C9\u65AF","\u4FC4\u52D2\u5188","\u51E4\u51F0\u57CE","\u8D39\u5229\u8499","\u7845\u8C37","\u77FD\u8C37","\u62C9\u65AF\u7EF4\u52A0\u65AF","\u6D1B\u6749\u77F6","\u5723\u4F55\u585E","\u5723\u514B\u62C9\u62C9","\u897F\u96C5\u56FE","\u829D\u52A0\u54E5","\u6CAA\u7F8E","\u54E5\u4F26\u5E03","\u7EBD\u7EA6","Los Angeles","San Jose","Sillicon Valley","Michigan"],"\u{1F1FA}\u{1F1FE}":["Uruguay","\u4E4C\u62C9\u572D"],"\u{1F1FB}\u{1F1EA}":["Venezuela","\u59D4\u5185\u745E\u62C9"],"\u{1F1FB}\u{1F1F3}":["Viet Nam","Vietnam","Vi\u1EC7t Nam","\u8D8A\u5357","\u80E1\u5FD7\u660E"],"\u{1F1FF}\u{1F1E6}":["South Africa","\u5357\u975E"],"\u{1F1E8}\u{1F1F3}":["China","\u4E2D\u56FD","\u4E2D\u570B","\u56DE\u56FD","\u56DE\u570B","\u56FD\u5185","\u570B\u5167","\u534E\u4E1C","\u534E\u897F","\u534E\u5357","\u534E\u5317","\u534E\u4E2D","\u6C5F\u82CF","\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733","\u676D\u5DDE","\u5F90\u5DDE","\u9752\u5C9B","\u5B81\u6CE2","\u9547\u6C5F"]},g={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["EXP","BAND"],"\u{1F1F8}\u{1F1F1}":["TEST","SOS"],"\u{1F1E6}\u{1F1E9}":["AD","AND"],"\u{1F1E6}\u{1F1EA}":["AE","ARE"],"\u{1F1E6}\u{1F1EB}":["AF","AFG"],"\u{1F1E6}\u{1F1F1}":["AL","ALB"],"\u{1F1E6}\u{1F1F2}":["AM","ARM"],"\u{1F1E6}\u{1F1F7}":["AR","ARG"],"\u{1F1E6}\u{1F1F9}":["AT","AUT"],"\u{1F1E6}\u{1F1FA}":["AU","AUS"],"\u{1F1E6}\u{1F1FF}":["AZ","AZE"],"\u{1F1E7}\u{1F1E6}":["BA","BIH"],"\u{1F1E7}\u{1F1E9}":["BD","BGD"],"\u{1F1E7}\u{1F1EA}":["BE","BEL"],"\u{1F1E7}\u{1F1EC}":["BG","BGR"],"\u{1F1E7}\u{1F1ED}":["BH","BHR"],"\u{1F1E7}\u{1F1F7}":["BR","BRA"],"\u{1F1E7}\u{1F1FE}":["BY","BLR"],"\u{1F1E8}\u{1F1E6}":["CA","CAN"],"\u{1F1E8}\u{1F1ED}":["CH","CHE"],"\u{1F1E8}\u{1F1F1}":["CL","CHL"],"\u{1F1E8}\u{1F1F4}":["CO","COL"],"\u{1F1E8}\u{1F1F7}":["CR","CRI"],"\u{1F1E8}\u{1F1FE}":["CY","CYP"],"\u{1F1E8}\u{1F1FF}":["CZ","CZE"],"\u{1F1E9}\u{1F1EA}":["DE","DEU"],"\u{1F1E9}\u{1F1F0}":["DK","DNK"],"\u{1F1EA}\u{1F1E8}":["EC","ECU"],"\u{1F1EA}\u{1F1EA}":["EE","EST"],"\u{1F1EA}\u{1F1EC}":["EG","EGY"],"\u{1F1EA}\u{1F1F8}":["ES","ESP"],"\u{1F1EA}\u{1F1FA}":["EU"],"\u{1F1EB}\u{1F1EE}":["FI","FIN"],"\u{1F1EB}\u{1F1F7}":["FR","FRA"],"\u{1F1EC}\u{1F1E7}":["GB","GBR","UK"],"\u{1F1EC}\u{1F1EA}":["GE","GEO"],"\u{1F1EC}\u{1F1F7}":["GR","GRC"],"\u{1F1ED}\u{1F1F0}":["HK","HKG","HKT","HKBN","HGC","WTT","CMI"],"\u{1F1ED}\u{1F1F7}":["HR","HRV"],"\u{1F1ED}\u{1F1FA}":["HU","HUN"],"\u{1F1EF}\u{1F1F4}":["JO","JOR"],"\u{1F1EF}\u{1F1F5}":["JP","JPN"],"\u{1F1F0}\u{1F1EA}":["KE","KEN"],"\u{1F1F0}\u{1F1EC}":["KG","KGZ"],"\u{1F1F0}\u{1F1ED}":["KH","KGZ"],"\u{1F1F0}\u{1F1F5}":["KP","PRK"],"\u{1F1F0}\u{1F1F7}":["KR","KOR"],"\u{1F1F0}\u{1F1FF}":["KZ","KAZ"],"\u{1F1EE}\u{1F1E9}":["ID","IDN"],"\u{1F1EE}\u{1F1EA}":["IE","IRL"],"\u{1F1EE}\u{1F1F1}":["IL","ISR"],"\u{1F1EE}\u{1F1F2}":["IM","IMN"],"\u{1F1EE}\u{1F1F3}":["IN","IND"],"\u{1F1EE}\u{1F1F7}":["IR","IRN"],"\u{1F1EE}\u{1F1F8}":["IS","ISL"],"\u{1F1EE}\u{1F1F9}":["IT","ITA"],"\u{1F1F1}\u{1F1F9}":["LT","LTU"],"\u{1F1F1}\u{1F1FA}":["LU","LUX"],"\u{1F1F1}\u{1F1FB}":["LV","LVA"],"\u{1F1F2}\u{1F1E6}":["MA","MAR"],"\u{1F1F2}\u{1F1E9}":["MD","MDA"],"\u{1F1F3}\u{1F1EC}":["NG","NGA"],"\u{1F1F2}\u{1F1F0}":["MK","MKD"],"\u{1F1F2}\u{1F1F3}":["MN","MNG"],"\u{1F1F2}\u{1F1F4}":["MO","MAC","CTM"],"\u{1F1F2}\u{1F1F9}":["MT","MLT"],"\u{1F1F2}\u{1F1FD}":["MX","MEX"],"\u{1F1F2}\u{1F1FE}":["MY","MYS"],"\u{1F1F3}\u{1F1F1}":["NL","NLD"],"\u{1F1F3}\u{1F1F4}":["NO","NOR"],"\u{1F1F3}\u{1F1F5}":["NP","NPL"],"\u{1F1F3}\u{1F1FF}":["NZ","NZL"],"\u{1F1F5}\u{1F1E6}":["PA","PAN"],"\u{1F1F5}\u{1F1EA}":["PE","PER"],"\u{1F1F5}\u{1F1ED}":["PH","PHL"],"\u{1F1F5}\u{1F1F0}":["PK","PAK"],"\u{1F1F5}\u{1F1F1}":["PL","POL"],"\u{1F1F5}\u{1F1F7}":["PR","PRI"],"\u{1F1F5}\u{1F1F9}":["PT","PRT"],"\u{1F1F5}\u{1F1FE}":["PY","PRY"],"\u{1F1F7}\u{1F1F4}":["RO","ROU"],"\u{1F1F7}\u{1F1F8}":["RS","SRB"],"\u{1F1F7}\u{1F1EA}":["RE","REU"],"\u{1F1F7}\u{1F1FA}":["RU","RUS"],"\u{1F1F8}\u{1F1E6}":["SA","SAU"],"\u{1F1F8}\u{1F1EA}":["SE","SWE"],"\u{1F1F8}\u{1F1EC}":["SG","SGP"],"\u{1F1F8}\u{1F1EE}":["SI","SVN"],"\u{1F1F8}\u{1F1F0}":["SK","SVK"],"\u{1F1F9}\u{1F1ED}":["TH","THA"],"\u{1F1F9}\u{1F1F3}":["TN","TUN"],"\u{1F1F9}\u{1F1F7}":["TR","TUR"],"\u{1F1F9}\u{1F1FC}":["TW","TWN","CHT","HINET","ROC"],"\u{1F1FA}\u{1F1E6}":["UA","UKR"],"\u{1F1FA}\u{1F1F8}":["US","USA","LAX","SFO"],"\u{1F1FA}\u{1F1FE}":["UY","URY"],"\u{1F1FB}\u{1F1EA}":["VE","VEN"],"\u{1F1FB}\u{1F1F3}":["VN","VNM"],"\u{1F1FF}\u{1F1E6}":["ZA","ZAF"],"\u{1F1E8}\u{1F1F3}":["CN","CHN","BACK"]};function h(e){var o;let N=((o=e.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/))==null?void 0:o[0])||"";for(const m of Object.keys(D))if(D[m].some(_=>RegExp(`${_}`,"i").test(e)))return N=m;for(const m of Object.keys(g))if(g[m].some(_=>RegExp(`(^|[^a-zA-Z:])${_}([^a-zA-Z:]|$)`).test(e)&&!/(\d+)\s*([MG]B)/.test(e)))return N=m;return N}function O(e){return/^(\uD83C[\uDDE6-\uDDFF]){2}$/.test(e)}function E(e){return/^[A-Z]{2}$/.test(e)}},1500:(l,c,B)=>{B.d(c,{_d:()=>M});var D=Math.pow,g=(n,d,r)=>new Promise((t,C)=>{var R=F=>{try{u(r.next(F))}catch(a){C(a)}},U=F=>{try{u(r.throw(F))}catch(a){C(a)}},u=F=>F.done?t(F.value):Promise.resolve(F.value).then(R,U);u((r=r.apply(n,d)).next())});const h=$substore,O={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"],vpsmmo:["Vpsmmo Technology Company Limited","1mcloud Technology Company Limited","AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],litespeed:["LITESPEED-COM","Litespeed Technology Company Limited","AS140810 Megacore Technology Company Limited"],m247:["M247 Europe SRL","3NT SOLUTIONS LLP","AS9009 M247 Europe SRL"]},E={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function e(n){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(n)}function o(n){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(n)}function N(n,d){const r=n.split("."),t=d.split(".");if(r.length<3||t.length<3)return!1;for(let C=0;C<3;C++)if(r[C]!==t[C])return!1;return!0}function m(n){const d=n.split(".");return d[d.length-1]}function P(n){return g(this,null,function*(){const d=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(n)}&type=A`,r={Accept:"application/dns-json"};try{const t=yield h.http.get({url:d,headers:r}),C=JSON.parse(t.body);if(C.Status!==0)throw new Error(`HTTP error! status: ${C.Status}`);return C.Answer?C.Answer.map(R=>`${R.data}`)[0]:""}catch(t){return""}})}function _(n){return g(this,null,function*(){return yield h.http.get(`https://dns.google/resolve?name=${n}`).then(r=>{const t=JSON.parse(r.body);if(t.Status===0){const C=t.Answer.find(R=>R.type===1);return C?C.data:""}return""})})}function M(n){return g(this,null,function*(){return yield h.http.get(`http://ip-api.com/json/${n}?fields=country`).then(r=>JSON.parse(r.body).country||"")})}function L(n){return g(this,null,function*(){return yield h.http.get(`http://ip-api.com/json/${n}?fields=region,regionName`).then(r=>{const t=JSON.parse(r.body);return t.regionName&&t.region?`${t.regionName} (${t.region})`:""})})}function v(n){return g(this,null,function*(){return yield h.http.get(`http://ip-api.com/json/${n}?fields=isp`).then(r=>JSON.parse(r.body).isp||"")})}function K(n){return g(this,null,function*(){return yield h.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(n)}).then(r=>JSON.parse(r.body).map(C=>C.isp))})}function k(n){return g(this,null,function*(){return yield h.http.get(`http://ip-api.com/json/${n}?fields=isp,org`).then(r=>{const t=JSON.parse(r.body);return[t.isp||"",t.org||""].join(",")})})}function Y(n,d){let r,t;const C=V(n);if((r=d.match(/^(.*?)\/(\d{1,2})$/))&&(t=V(r[1]))>=0){const R=D(2,32-parseInt(r[2]));return C>=t&&C<=t+R-1}return!1}function V(n){let d;if(d=n.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let r=0,t=1;for(let C=4;C>=1;C-=1)r+=t*parseInt(d[C]),t*=256;return r}return-1}},9085:(l,c,B)=>{B.d(c,{$:()=>g,G:()=>D});function D(h){return h&&h!=="null"&&h!=="undefined"}function g(h,O){return h.reduce((E,e)=>{const o=e[O];return E[o]||(E[o]=[]),E[o].push(e),E},{})}}},H={};function S(l){var c=H[l];if(c!==void 0)return c.exports;var B=H[l]={exports:{}};return x[l](B,B.exports,S),B.exports}S.n=l=>{var c=l&&l.__esModule?()=>l.default:()=>l;return S.d(c,{a:c}),c},S.d=(l,c)=>{for(var B in c)S.o(c,B)&&!S.o(l,B)&&Object.defineProperty(l,B,{enumerable:!0,get:c[B]})},S.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(l){if(typeof window=="object")return window}}(),S.o=(l,c)=>Object.prototype.hasOwnProperty.call(l,c);var j={};(()=>{var l=S(3183),c=S.n(l),B=S(8475),D=S(9085),g=S(1500),h=S(423),O=S(8599);function E(u,F,a){return u.map(f=>(f.name=[...f.name].map(i=>{if(/[a-zA-Z0-9]/.test(i)){const s=i.charCodeAt(0),A=N[s];return e(s)&&a?o[a][A]:o[F][A]}return i}).join(""),f))}function e(u){return u>=48&&u<=57}const o={"serif-bold":["\u{1D7CE}","\u{1D7CF}","\u{1D7D0}","\u{1D7D1}","\u{1D7D2}","\u{1D7D3}","\u{1D7D4}","\u{1D7D5}","\u{1D7D6}","\u{1D7D7}","\u{1D41A}","\u{1D41B}","\u{1D41C}","\u{1D41D}","\u{1D41E}","\u{1D41F}","\u{1D420}","\u{1D421}","\u{1D422}","\u{1D423}","\u{1D424}","\u{1D425}","\u{1D426}","\u{1D427}","\u{1D428}","\u{1D429}","\u{1D42A}","\u{1D42B}","\u{1D42C}","\u{1D42D}","\u{1D42E}","\u{1D42F}","\u{1D430}","\u{1D431}","\u{1D432}","\u{1D433}","\u{1D400}","\u{1D401}","\u{1D402}","\u{1D403}","\u{1D404}","\u{1D405}","\u{1D406}","\u{1D407}","\u{1D408}","\u{1D409}","\u{1D40A}","\u{1D40B}","\u{1D40C}","\u{1D40D}","\u{1D40E}","\u{1D40F}","\u{1D410}","\u{1D411}","\u{1D412}","\u{1D413}","\u{1D414}","\u{1D415}","\u{1D416}","\u{1D417}","\u{1D418}","\u{1D419}"],"serif-italic":["0","1","2","3","4","5","6","7","8","9","\u{1D44E}","\u{1D44F}","\u{1D450}","\u{1D451}","\u{1D452}","\u{1D453}","\u{1D454}","\u210E","\u{1D456}","\u{1D457}","\u{1D458}","\u{1D459}","\u{1D45A}","\u{1D45B}","\u{1D45C}","\u{1D45D}","\u{1D45E}","\u{1D45F}","\u{1D460}","\u{1D461}","\u{1D462}","\u{1D463}","\u{1D464}","\u{1D465}","\u{1D466}","\u{1D467}","\u{1D434}","\u{1D435}","\u{1D436}","\u{1D437}","\u{1D438}","\u{1D439}","\u{1D43A}","\u{1D43B}","\u{1D43C}","\u{1D43D}","\u{1D43E}","\u{1D43F}","\u{1D440}","\u{1D441}","\u{1D442}","\u{1D443}","\u{1D444}","\u{1D445}","\u{1D446}","\u{1D447}","\u{1D448}","\u{1D449}","\u{1D44A}","\u{1D44B}","\u{1D44C}","\u{1D44D}"],"serif-bold-italic":["0","1","2","3","4","5","6","7","8","9","\u{1D482}","\u{1D483}","\u{1D484}","\u{1D485}","\u{1D486}","\u{1D487}","\u{1D488}","\u{1D489}","\u{1D48A}","\u{1D48B}","\u{1D48C}","\u{1D48D}","\u{1D48E}","\u{1D48F}","\u{1D490}","\u{1D491}","\u{1D492}","\u{1D493}","\u{1D494}","\u{1D495}","\u{1D496}","\u{1D497}","\u{1D498}","\u{1D499}","\u{1D49A}","\u{1D49B}","\u{1D468}","\u{1D469}","\u{1D46A}","\u{1D46B}","\u{1D46C}","\u{1D46D}","\u{1D46E}","\u{1D46F}","\u{1D470}","\u{1D471}","\u{1D472}","\u{1D473}","\u{1D474}","\u{1D475}","\u{1D476}","\u{1D477}","\u{1D478}","\u{1D479}","\u{1D47A}","\u{1D47B}","\u{1D47C}","\u{1D47D}","\u{1D47E}","\u{1D47F}","\u{1D480}","\u{1D481}"],"sans-serif-regular":["\u{1D7E2}","\u{1D7E3}","\u{1D7E4}","\u{1D7E5}","\u{1D7E6}","\u{1D7E7}","\u{1D7E8}","\u{1D7E9}","\u{1D7EA}","\u{1D7EB}","\u{1D5BA}","\u{1D5BB}","\u{1D5BC}","\u{1D5BD}","\u{1D5BE}","\u{1D5BF}","\u{1D5C0}","\u{1D5C1}","\u{1D5C2}","\u{1D5C3}","\u{1D5C4}","\u{1D5C5}","\u{1D5C6}","\u{1D5C7}","\u{1D5C8}","\u{1D5C9}","\u{1D5CA}","\u{1D5CB}","\u{1D5CC}","\u{1D5CD}","\u{1D5CE}","\u{1D5CF}","\u{1D5D0}","\u{1D5D1}","\u{1D5D2}","\u{1D5D3}","\u{1D5A0}","\u{1D5A1}","\u{1D5A2}","\u{1D5A3}","\u{1D5A4}","\u{1D5A5}","\u{1D5A6}","\u{1D5A7}","\u{1D5A8}","\u{1D5A9}","\u{1D5AA}","\u{1D5AB}","\u{1D5AC}","\u{1D5AD}","\u{1D5AE}","\u{1D5AF}","\u{1D5B0}","\u{1D5B1}","\u{1D5B2}","\u{1D5B3}","\u{1D5B4}","\u{1D5B5}","\u{1D5B6}","\u{1D5B7}","\u{1D5B8}","\u{1D5B9}"],"sans-serif-bold":["\u{1D7EC}","\u{1D7ED}","\u{1D7EE}","\u{1D7EF}","\u{1D7F0}","\u{1D7F1}","\u{1D7F2}","\u{1D7F3}","\u{1D7F4}","\u{1D7F5}","\u{1D5EE}","\u{1D5EF}","\u{1D5F0}","\u{1D5F1}","\u{1D5F2}","\u{1D5F3}","\u{1D5F4}","\u{1D5F5}","\u{1D5F6}","\u{1D5F7}","\u{1D5F8}","\u{1D5F9}","\u{1D5FA}","\u{1D5FB}","\u{1D5FC}","\u{1D5FD}","\u{1D5FE}","\u{1D5FF}","\u{1D600}","\u{1D601}","\u{1D602}","\u{1D603}","\u{1D604}","\u{1D605}","\u{1D606}","\u{1D607}","\u{1D5D4}","\u{1D5D5}","\u{1D5D6}","\u{1D5D7}","\u{1D5D8}","\u{1D5D9}","\u{1D5DA}","\u{1D5DB}","\u{1D5DC}","\u{1D5DD}","\u{1D5DE}","\u{1D5DF}","\u{1D5E0}","\u{1D5E1}","\u{1D5E2}","\u{1D5E3}","\u{1D5E4}","\u{1D5E5}","\u{1D5E6}","\u{1D5E7}","\u{1D5E8}","\u{1D5E9}","\u{1D5EA}","\u{1D5EB}","\u{1D5EC}","\u{1D5ED}"],"sans-serif-italic":["0","1","2","3","4","5","6","7","8","9","\u{1D622}","\u{1D623}","\u{1D624}","\u{1D625}","\u{1D626}","\u{1D627}","\u{1D628}","\u{1D629}","\u{1D62A}","\u{1D62B}","\u{1D62C}","\u{1D62D}","\u{1D62E}","\u{1D62F}","\u{1D630}","\u{1D631}","\u{1D632}","\u{1D633}","\u{1D634}","\u{1D635}","\u{1D636}","\u{1D637}","\u{1D638}","\u{1D639}","\u{1D63A}","\u{1D63B}","\u{1D608}","\u{1D609}","\u{1D60A}","\u{1D60B}","\u{1D60C}","\u{1D60D}","\u{1D60E}","\u{1D60F}","\u{1D610}","\u{1D611}","\u{1D612}","\u{1D613}","\u{1D614}","\u{1D615}","\u{1D616}","\u{1D617}","\u{1D618}","\u{1D619}","\u{1D61A}","\u{1D61B}","\u{1D61C}","\u{1D61D}","\u{1D61E}","\u{1D61F}","\u{1D620}","\u{1D621}"],"sans-serif-bold-italic":["0","1","2","3","4","5","6","7","8","9","\u{1D656}","\u{1D657}","\u{1D658}","\u{1D659}","\u{1D65A}","\u{1D65B}","\u{1D65C}","\u{1D65D}","\u{1D65E}","\u{1D65F}","\u{1D660}","\u{1D661}","\u{1D662}","\u{1D663}","\u{1D664}","\u{1D665}","\u{1D666}","\u{1D667}","\u{1D668}","\u{1D669}","\u{1D66A}","\u{1D66B}","\u{1D66C}","\u{1D66D}","\u{1D66E}","\u{1D66F}","\u{1D63C}","\u{1D63D}","\u{1D63E}","\u{1D63F}","\u{1D640}","\u{1D641}","\u{1D642}","\u{1D643}","\u{1D644}","\u{1D645}","\u{1D646}","\u{1D647}","\u{1D648}","\u{1D649}","\u{1D64A}","\u{1D64B}","\u{1D64C}","\u{1D64D}","\u{1D64E}","\u{1D64F}","\u{1D650}","\u{1D651}","\u{1D652}","\u{1D653}","\u{1D654}","\u{1D655}"],"script-regular":["0","1","2","3","4","5","6","7","8","9","\u{1D4B6}","\u{1D4B7}","\u{1D4B8}","\u{1D4B9}","\u212F","\u{1D4BB}","\u210A","\u{1D4BD}","\u{1D4BE}","\u{1D4BF}","\u{1D4C0}","\u{1D4C1}","\u{1D4C2}","\u{1D4C3}","\u2134","\u{1D4C5}","\u{1D4C6}","\u{1D4C7}","\u{1D4C8}","\u{1D4C9}","\u{1D4CA}","\u{1D4CB}","\u{1D4CC}","\u{1D4CD}","\u{1D4CE}","\u{1D4CF}","\u{1D49C}","\u212C","\u{1D49E}","\u{1D49F}","\u2130","\u2131","\u{1D4A2}","\u210B","\u2110","\u{1D4A5}","\u{1D4A6}","\u2112","\u2133","\u{1D4A9}","\u{1D4AA}","\u{1D4AB}","\u{1D4AC}","\u211B","\u{1D4AE}","\u{1D4AF}","\u{1D4B0}","\u{1D4B1}","\u{1D4B2}","\u{1D4B3}","\u{1D4B4}","\u{1D4B5}"],"script-bold":["0","1","2","3","4","5","6","7","8","9","\u{1D4EA}","\u{1D4EB}","\u{1D4EC}","\u{1D4ED}","\u{1D4EE}","\u{1D4EF}","\u{1D4F0}","\u{1D4F1}","\u{1D4F2}","\u{1D4F3}","\u{1D4F4}","\u{1D4F5}","\u{1D4F6}","\u{1D4F7}","\u{1D4F8}","\u{1D4F9}","\u{1D4FA}","\u{1D4FB}","\u{1D4FC}","\u{1D4FD}","\u{1D4FE}","\u{1D4FF}","\u{1D500}","\u{1D501}","\u{1D502}","\u{1D503}","\u{1D4D0}","\u{1D4D1}","\u{1D4D2}","\u{1D4D3}","\u{1D4D4}","\u{1D4D5}","\u{1D4D6}","\u{1D4D7}","\u{1D4D8}","\u{1D4D9}","\u{1D4DA}","\u{1D4DB}","\u{1D4DC}","\u{1D4DD}","\u{1D4DE}","\u{1D4DF}","\u{1D4E0}","\u{1D4E1}","\u{1D4E2}","\u{1D4E3}","\u{1D4E4}","\u{1D4E5}","\u{1D4E6}","\u{1D4E7}","\u{1D4E8}","\u{1D4E9}"],"fraktur-regular":["0","1","2","3","4","5","6","7","8","9","\u{1D51E}","\u{1D51F}","\u{1D520}","\u{1D521}","\u{1D522}","\u{1D523}","\u{1D524}","\u{1D525}","\u{1D526}","\u{1D527}","\u{1D528}","\u{1D529}","\u{1D52A}","\u{1D52B}","\u{1D52C}","\u{1D52D}","\u{1D52E}","\u{1D52F}","\u{1D530}","\u{1D531}","\u{1D532}","\u{1D533}","\u{1D534}","\u{1D535}","\u{1D536}","\u{1D537}","\u{1D504}","\u{1D505}","\u212D","\u{1D507}","\u{1D508}","\u{1D509}","\u{1D50A}","\u210C","\u2111","\u{1D50D}","\u{1D50E}","\u{1D50F}","\u{1D510}","\u{1D511}","\u{1D512}","\u{1D513}","\u{1D514}","\u211C","\u{1D516}","\u{1D517}","\u{1D518}","\u{1D519}","\u{1D51A}","\u{1D51B}","\u{1D51C}","\u2128"],"fraktur-bold":["0","1","2","3","4","5","6","7","8","9","\u{1D586}","\u{1D587}","\u{1D588}","\u{1D589}","\u{1D58A}","\u{1D58B}","\u{1D58C}","\u{1D58D}","\u{1D58E}","\u{1D58F}","\u{1D590}","\u{1D591}","\u{1D592}","\u{1D593}","\u{1D594}","\u{1D595}","\u{1D596}","\u{1D597}","\u{1D598}","\u{1D599}","\u{1D59A}","\u{1D59B}","\u{1D59C}","\u{1D59D}","\u{1D59E}","\u{1D59F}","\u{1D56C}","\u{1D56D}","\u{1D56E}","\u{1D56F}","\u{1D570}","\u{1D571}","\u{1D572}","\u{1D573}","\u{1D574}","\u{1D575}","\u{1D576}","\u{1D577}","\u{1D578}","\u{1D579}","\u{1D57A}","\u{1D57B}","\u{1D57C}","\u{1D57D}","\u{1D57E}","\u{1D57F}","\u{1D580}","\u{1D581}","\u{1D582}","\u{1D583}","\u{1D584}","\u{1D585}"],"monospace-regular":["\u{1D7F6}","\u{1D7F7}","\u{1D7F8}","\u{1D7F9}","\u{1D7FA}","\u{1D7FB}","\u{1D7FC}","\u{1D7FD}","\u{1D7FE}","\u{1D7FF}","\u{1D68A}","\u{1D68B}","\u{1D68C}","\u{1D68D}","\u{1D68E}","\u{1D68F}","\u{1D690}","\u{1D691}","\u{1D692}","\u{1D693}","\u{1D694}","\u{1D695}","\u{1D696}","\u{1D697}","\u{1D698}","\u{1D699}","\u{1D69A}","\u{1D69B}","\u{1D69C}","\u{1D69D}","\u{1D69E}","\u{1D69F}","\u{1D6A0}","\u{1D6A1}","\u{1D6A2}","\u{1D6A3}","\u{1D670}","\u{1D671}","\u{1D672}","\u{1D673}","\u{1D674}","\u{1D675}","\u{1D676}","\u{1D677}","\u{1D678}","\u{1D679}","\u{1D67A}","\u{1D67B}","\u{1D67C}","\u{1D67D}","\u{1D67E}","\u{1D67F}","\u{1D680}","\u{1D681}","\u{1D682}","\u{1D683}","\u{1D684}","\u{1D685}","\u{1D686}","\u{1D687}","\u{1D688}","\u{1D689}"],"double-struck-bold":["\u{1D7D8}","\u{1D7D9}","\u{1D7DA}","\u{1D7DB}","\u{1D7DC}","\u{1D7DD}","\u{1D7DE}","\u{1D7DF}","\u{1D7E0}","\u{1D7E1}","\u{1D552}","\u{1D553}","\u{1D554}","\u{1D555}","\u{1D556}","\u{1D557}","\u{1D558}","\u{1D559}","\u{1D55A}","\u{1D55B}","\u{1D55C}","\u{1D55D}","\u{1D55E}","\u{1D55F}","\u{1D560}","\u{1D561}","\u{1D562}","\u{1D563}","\u{1D564}","\u{1D565}","\u{1D566}","\u{1D567}","\u{1D568}","\u{1D569}","\u{1D56A}","\u{1D56B}","\u{1D538}","\u{1D539}","\u2102","\u{1D53B}","\u{1D53C}","\u{1D53D}","\u{1D53E}","\u210D","\u{1D540}","\u{1D541}","\u{1D542}","\u{1D543}","\u{1D544}","\u2115","\u{1D546}","\u2119","\u211A","\u211D","\u{1D54A}","\u{1D54B}","\u{1D54C}","\u{1D54D}","\u{1D54E}","\u{1D54F}","\u{1D550}","\u2124"],"circle-regular":["\u24EA","\u2460","\u2461","\u2462","\u2463","\u2464","\u2465","\u2466","\u2467","\u2468","\u24D0","\u24D1","\u24D2","\u24D3","\u24D4","\u24D5","\u24D6","\u24D7","\u24D8","\u24D9","\u24DA","\u24DB","\u24DC","\u24DD","\u24DE","\u24DF","\u24E0","\u24E1","\u24E2","\u24E3","\u24E4","\u24E5","\u24E6","\u24E7","\u24E8","\u24E9","\u24B6","\u24B7","\u24B8","\u24B9","\u24BA","\u24BB","\u24BC","\u24BD","\u24BE","\u24BF","\u24C0","\u24C1","\u24C2","\u24C3","\u24C4","\u24C5","\u24C6","\u24C7","\u24C8","\u24C9","\u24CA","\u24CB","\u24CC","\u24CD","\u24CE","\u24CF"],"square-regular":["0","1","2","3","4","5","6","7","8","9","\u{1F130}","\u{1F131}","\u{1F132}","\u{1F133}","\u{1F134}","\u{1F135}","\u{1F136}","\u{1F137}","\u{1F138}","\u{1F139}","\u{1F13A}","\u{1F13B}","\u{1F13C}","\u{1F13D}","\u{1F13E}","\u{1F13F}","\u{1F140}","\u{1F141}","\u{1F142}","\u{1F143}","\u{1F144}","\u{1F145}","\u{1F146}","\u{1F147}","\u{1F148}","\u{1F149}","\u{1F130}","\u{1F131}","\u{1F132}","\u{1F133}","\u{1F134}","\u{1F135}","\u{1F136}","\u{1F137}","\u{1F138}","\u{1F139}","\u{1F13A}","\u{1F13B}","\u{1F13C}","\u{1F13D}","\u{1F13E}","\u{1F13F}","\u{1F140}","\u{1F141}","\u{1F142}","\u{1F143}","\u{1F144}","\u{1F145}","\u{1F146}","\u{1F147}","\u{1F148}","\u{1F149}"]},N={48:0,49:1,50:2,51:3,52:4,53:5,54:6,55:7,56:8,57:9,65:36,66:37,67:38,68:39,69:40,70:41,71:42,72:43,73:44,74:45,75:46,76:47,77:48,78:49,79:50,80:51,81:52,82:53,83:54,84:55,85:56,86:57,87:58,88:59,89:60,90:61,97:10,98:11,99:12,100:13,101:14,102:15,103:16,104:17,105:18,106:19,107:20,108:21,109:22,110:23,111:24,112:25,113:26,114:27,115:28,116:29,117:30,118:31,119:32,120:33,121:34,122:35};var m=(u,F)=>(F=Symbol[u])?F:Symbol.for("Symbol."+u),P=(u,F,a)=>new Promise((f,i)=>{var s=p=>{try{y(a.next(p))}catch(T){i(T)}},A=p=>{try{y(a.throw(p))}catch(T){i(T)}},y=p=>p.done?f(p.value):Promise.resolve(p.value).then(s,A);y((a=a.apply(u,F)).next())}),_=(u,F,a)=>(F=u[m("asyncIterator")])?F.call(u):(u=u[m("iterator")](),F={},a=(f,i)=>(i=u[f])&&(F[f]=s=>new Promise((A,y,p)=>(s=i.call(u,s),p=s.done,Promise.resolve(s.value).then(T=>A({value:T,done:p}),y)))),a("next"),a("return"),F);const M="#sub-store-cached-country",L=7*24*60*60*1e3,v=new B.A(M,L),K=/\{(0*)#\}/gi,k=/\{F\}/gi;function Y(){return P(this,arguments,function*(u=[],F,a){const{type:f,mode:i}=$arguments,{isSurge:s}=$substore.env,A=yield(0,h.ru)(),y=s||F&&F.startsWith("Surge");return/all/i.test(i)?yield V(u,A,y):yield n(u,f,A,y)})}function V(u,F,a){return P(this,null,function*(){const f=[],i=(0,D.$)(u,"filterType"),s=Object.keys(i);try{for(var A=_(s),y,p,T;y=!(p=yield A.next()).done;y=!1){const I=p.value,w=i[I],b=yield n(w,I,F,a);f.push(...b)}}catch(I){T=[I]}finally{try{y&&(p=A.return)&&(yield p.call(A))}finally{if(T)throw T[0]}}return f})}function n(u,F,a,f){return P(this,null,function*(){let i=null;if((0,D.G)(a[F])||(0,D.G)(a[u[0].collectionName])){const I=(0,D.G)(F)?a[F]:a[u[0].collectionName];if(!(0,D.G)(I.name))return u;(0,D.G)(I.font)&&(i=I.font);let w=null;if((0,D.G)(I.groupBy)&&/flag/i.test(I.groupBy)&&(w=(0,D.$)(u,"countryFlag")),w)for(const b in w){let G=0;const $=[];for(const Z of w[b])G++,$.push(d(Z,I.name,G,f));yield Promise.all($)}else{let b=0;try{for(var s=_(u),A,y,p;A=!(y=yield s.next()).done;A=!1){const G=y.value;b++,yield d(G,I.name,b,f)}}catch(G){p=[G]}finally{try{A&&(y=s.return)&&(yield y.call(s))}finally{if(p)throw p[0]}}}}const T=i||a.default.font;return!(0,D.G)(T)||!(0,D.G)(T.type)?u:E(u,T.type,T.num)})}function d(u,F,a,f){return P(this,null,function*(){let i=F;i=R(F,a);let s=u.countryFlag||(0,O.CY)(u.name);if(!s){const A=u.server,y=v.get(A);if(y)s=(0,O.CY)(y);else{const p=yield(0,g._d)(A);s=(0,O.CY)(p),s&&v.set(A,p)}}i=i.replace(k,s),i=r(i,s),f&&(i+=`${" ".repeat(100)}sni: ${u.sni}`),u.name=i})}function r(u,F){const a=/{[Ff]:([a-zA-Z]+)}/g,f=O.iI[F][0],i=O.jB[F][0];return u.replace(a,(s,A)=>/name/i.test(A)?t(A,f):/code/i.test(A)?t(A,i):s)}function t(u,F){return u===u.toUpperCase()?F.toUpperCase():u===u.toLowerCase()?F.toLowerCase():u[0]===u[0].toUpperCase()?C(F):F}function C(u){return u.toLowerCase().split(" ").map(F=>F.charAt(0).toUpperCase()+F.slice(1)).join(" ")}function R(u,F){return u.replace(K,(a,f)=>U(F,f.length+1))}function U(u,F){for(u=u.toString();u.length<F;)u=`0${u}`;return u}c().operator=Y})()})();})();
