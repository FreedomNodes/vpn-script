/*!
 substore-tools - version: 1.4.0
 Build fullhash:df8b18cd24e395e7499d, chunkhash:9a8cb50960da9133cbd2 (2024-05-12 22:55:45)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var $={3183:(f,p,C)=>{var A;typeof window!="undefined"?A=window:typeof C.g!="undefined"?A=C.g:typeof self!="undefined"?A=self:A={},f.exports=A},8475:(f,p,C)=>{C.d(p,{A:()=>a});const A=$substore;class D{constructor(E,l){this.key=E,this.expires=l;const s=A.read(E);s?this.resourceCache=JSON.parse(s):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let E=!1;const l=new Date().getTime();Object.keys(this.resourceCache).forEach(s=>{const P=this.resourceCache[s];(!P.time||l-P.time>this.expires)&&(delete this.resourceCache[s],A.delete(`#${s}`),E=!0)}),E&&this._persist()}revokeIds(E){let l=!1;for(const s of E)delete this.resourceCache[s],l=!0;l&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){A.write(JSON.stringify(this.resourceCache),this.key)}get(E){const l=this.resourceCache[E]&&this.resourceCache[E].time;return l&&new Date().getTime()-l<=this.expires?this.resourceCache[E].data:null}set(E,l){this.resourceCache[E]={time:new Date().getTime(),data:l},this._persist()}}const a=D},423:(f,p,C)=>{C.d(p,{ru:()=>D});var A=(E,l,s)=>new Promise((P,y)=>{var L=O=>{try{M(s.next(O))}catch(R){y(R)}},N=O=>{try{M(s.throw(O))}catch(R){y(R)}},M=O=>O.done?P(O.value):Promise.resolve(O.value).then(L,N);M((s=s.apply(E,l)).next())});function D(){return A(this,null,function*(){const E=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(E)})}function a(){return A(this,null,function*(){const E=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(E)})}function B(E){return A(this,null,function*(){const l=normalizeString(E),s=yield a();let P="";for(const y in s)if(containsIgnoreCase(l,normalizeString(y))){P=y;break}return s[P]})}},8599:(f,p,C)=>{C.d(p,{fs:()=>B,ik:()=>E});const A={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["\u6D41\u91CF","\u65F6\u95F4","\u8FC7\u671F","Bandwidth","Expire"],"\u{1F1F8}\u{1F1F1}":["\u5E94\u6025","\u6D4B\u8BD5\u8282\u70B9"],"\u{1F1E6}\u{1F1E9}":["Andorra","\u5B89\u9053\u5C14"],"\u{1F1E6}\u{1F1EA}":["United Arab Emirates","\u963F\u8054\u914B","\u8FEA\u62DC"],"\u{1F1E6}\u{1F1EB}":["Afghanistan","\u963F\u5BCC\u6C57"],"\u{1F1E6}\u{1F1F1}":["Albania","\u963F\u5C14\u5DF4\u5C3C\u4E9A","\u963F\u723E\u5DF4\u5C3C\u4E9E"],"\u{1F1E6}\u{1F1F2}":["Armenia","\u4E9A\u7F8E\u5C3C\u4E9A"],"\u{1F1E6}\u{1F1F7}":["Argentina","\u963F\u6839\u5EF7"],"\u{1F1E6}\u{1F1F9}":["Austria","\xDAc","\u5965\u5730\u5229","\u5967\u5730\u5229","\u7EF4\u4E5F\u7EB3"],"\u{1F1E6}\u{1F1FA}":["Australia","\u6FB3\u5927\u5229\u4E9A","\u6FB3\u6D32","\u58A8\u5C14\u672C","\u6089\u5C3C","\u571F\u6FB3","\u4EAC\u6FB3","\u5EE3\u6FB3","\u6EEC\u6FB3","\u6CAA\u6FB3","\u5E7F\u6FB3","Sydney"],"\u{1F1E6}\u{1F1FF}":["Azerbaijan","\u963F\u585E\u62DC\u7586"],"\u{1F1E7}\u{1F1E6}":["Bosnia and Herzegovina","\u6CE2\u9ED1\u5171\u548C\u56FD","\u6CE2\u9ED1"],"\u{1F1E7}\u{1F1E9}":["Bangladesh","\u5B5F\u52A0\u62C9\u56FD","\u5B5F\u52A0\u62C9"],"\u{1F1E7}\u{1F1EA}":["Belgium","\u6BD4\u5229\u65F6","\u6BD4\u5229\u6642"],"\u{1F1E7}\u{1F1EC}":["Bulgaria","\u4FDD\u52A0\u5229\u4E9A","\u4FDD\u52A0\u5229\u4E9E"],"\u{1F1E7}\u{1F1ED}":["Bahrain","\u5DF4\u6797"],"\u{1F1E7}\u{1F1F7}":["Brazil","\u5DF4\u897F","\u5723\u4FDD\u7F57"],"\u{1F1E7}\u{1F1FE}":["Belarus","\u767D\u4FC4\u7F57\u65AF","\u767D\u4FC4"],"\u{1F1E8}\u{1F1E6}":["Canada","\u52A0\u62FF\u5927","\u8499\u7279\u5229\u5C14","\u6E29\u54E5\u534E","\u6953\u8449","\u67AB\u53F6","\u6ED1\u94C1\u5362","\u591A\u4F26\u591A","Waterloo"],"\u{1F1E8}\u{1F1ED}":["Switzerland","\u745E\u58EB","\u82CF\u9ECE\u4E16","Zurich"],"\u{1F1E8}\u{1F1F1}":["Chile","\u667A\u5229"],"\u{1F1E8}\u{1F1F4}":["Colombia","\u54E5\u4F26\u6BD4\u4E9A"],"\u{1F1E8}\u{1F1F7}":["Costa Rica","\u54E5\u65AF\u8FBE\u9ECE\u52A0"],"\u{1F1E8}\u{1F1FE}":["Cyprus","\u585E\u6D66\u8DEF\u65AF"],"\u{1F1E8}\u{1F1FF}":["Czechia","\u6377\u514B"],"\u{1F1E9}\u{1F1EA}":["German","\u5FB7\u56FD","\u5FB7\u570B","\u4EAC\u5FB7","\u6EEC\u5FB7","\u5EE3\u5FB7","\u6CAA\u5FB7","\u5E7F\u5FB7","\u6CD5\u5170\u514B\u798F","Frankfurt"],"\u{1F1E9}\u{1F1F0}":["Denmark","\u4E39\u9EA6","\u4E39\u9EA5"],"\u{1F1EA}\u{1F1E8}":["Ecuador","\u5384\u74DC\u591A\u5C14"],"\u{1F1EA}\u{1F1EA}":["Estonia","\u7231\u6C99\u5C3C\u4E9A"],"\u{1F1EA}\u{1F1EC}":["Egypt","\u57C3\u53CA"],"\u{1F1EA}\u{1F1F8}":["Spain","\u897F\u73ED\u7259"],"\u{1F1EA}\u{1F1FA}":["European Union","\u6B27\u76DF","\u6B27\u7F57\u5DF4"],"\u{1F1EB}\u{1F1EE}":["Finland","\u82AC\u5170","\u82AC\u862D","\u8D6B\u5C14\u8F9B\u57FA"],"\u{1F1EB}\u{1F1F7}":["France","\u6CD5\u56FD","\u6CD5\u570B","\u5DF4\u9ECE"],"\u{1F1EC}\u{1F1E7}":["Great Britain","\u82F1\u56FD","England","United Kingdom","\u4F26\u6566","\u82F1","London"],"\u{1F1EC}\u{1F1EA}":["Georgia","\u683C\u9C81\u5409\u4E9A","\u683C\u9B6F\u5409\u4E9E"],"\u{1F1EC}\u{1F1F7}":["Greece","\u5E0C\u814A","\u5E0C\u81D8"],"\u{1F1ED}\u{1F1F0}":["Hong Kong","Hongkong","\u9999\u6E2F","HongKong","HONG KONG","\u6DF1\u6E2F","\u6CAA\u6E2F","\u547C\u6E2F","\u7A57\u6E2F","\u4EAC\u6E2F","\u6E2F"],"\u{1F1ED}\u{1F1F7}":["Croatia","\u514B\u7F57\u5730\u4E9A","\u514B\u7F85\u5730\u4E9E"],"\u{1F1ED}\u{1F1FA}":["Hungary","\u5308\u7259\u5229"],"\u{1F1EF}\u{1F1F4}":["Jordan","\u7EA6\u65E6"],"\u{1F1EF}\u{1F1F5}":["Japan","\u65E5\u672C","\u4E1C\u4EAC","\u5927\u962A","\u57FC\u7389","\u6CAA\u65E5","\u7A57\u65E5","\u5DDD\u65E5","\u4E2D\u65E5","\u6CC9\u65E5","\u676D\u65E5","\u6DF1\u65E5","\u8FBD\u65E5","\u5E7F\u65E5","\u5927\u5742","Osaka","Tokyo"],"\u{1F1F0}\u{1F1EA}":["Kenya","\u80AF\u5C3C\u4E9A"],"\u{1F1F0}\u{1F1EC}":["Kyrgyzstan","\u5409\u5C14\u5409\u65AF\u65AF\u5766"],"\u{1F1F0}\u{1F1ED}":["Cambodia","\u67EC\u57D4\u5BE8"],"\u{1F1F0}\u{1F1F5}":["North Korea","\u671D\u9C9C"],"\u{1F1F0}\u{1F1F7}":["Korea","\u97E9\u56FD","\u97D3\u570B","\u97E9","\u97D3","\u9996\u5C14","\u6625\u5DDD","Chuncheon","Seoul"],"\u{1F1F0}\u{1F1FF}":["Kazakhstan","\u54C8\u8428\u514B\u65AF\u5766","\u54C8\u8428\u514B"],"\u{1F1EE}\u{1F1E9}":["Indonesia","\u5370\u5C3C","\u5370\u5EA6\u5C3C\u897F\u4E9A","\u96C5\u52A0\u8FBE"],"\u{1F1EE}\u{1F1EA}":["Ireland","\u7231\u5C14\u5170","\u611B\u723E\u862D","\u90FD\u67CF\u6797"],"\u{1F1EE}\u{1F1F1}":["Israel","\u4EE5\u8272\u5217"],"\u{1F1EE}\u{1F1F2}":["Isle of Man","\u9A6C\u6069\u5C9B","\u99AC\u6069\u5CF6"],"\u{1F1EE}\u{1F1F3}":["India","\u5370\u5EA6","\u5B5F\u4E70","MFumbai"],"\u{1F1EE}\u{1F1F7}":["Iran","\u4F0A\u6717"],"\u{1F1EE}\u{1F1F8}":["Iceland","\u51B0\u5C9B","\u51B0\u5CF6"],"\u{1F1EE}\u{1F1F9}":["Italy","\u610F\u5927\u5229","\u7FA9\u5927\u5229","\u7C73\u5170","Nachash"],"\u{1F1F1}\u{1F1F9}":["Lithuania","\u7ACB\u9676\u5B9B"],"\u{1F1F1}\u{1F1FA}":["Luxembourg","\u5362\u68EE\u5821"],"\u{1F1F1}\u{1F1FB}":["Latvia","\u62C9\u8131\u7EF4\u4E9A","Latvija"],"\u{1F1F2}\u{1F1E6}":["Morocco","\u6469\u6D1B\u54E5"],"\u{1F1F2}\u{1F1E9}":["Moldova","\u6469\u5C14\u591A\u74E6","\u6469\u723E\u591A\u74E6"],"\u{1F1F3}\u{1F1EC}":["Nigeria","\u5C3C\u65E5\u5229\u4E9A","\u5C3C\u65E5\u5229\u4E9E"],"\u{1F1F2}\u{1F1F0}":["Macedonia","\u9A6C\u5176\u987F","\u99AC\u5176\u9813"],"\u{1F1F2}\u{1F1F3}":["Mongolia","\u8499\u53E4"],"\u{1F1F2}\u{1F1F4}":["Macao","\u6FB3\u95E8","\u6FB3\u9580","CTM"],"\u{1F1F2}\u{1F1F9}":["Malta","\u9A6C\u8033\u4ED6"],"\u{1F1F2}\u{1F1FD}":["Mexico","\u58A8\u897F\u54E5"],"\u{1F1F2}\u{1F1FE}":["Malaysia","\u9A6C\u6765","\u99AC\u4F86","\u5409\u9686\u5761","\u5927\u99AC"],"\u{1F1F3}\u{1F1F1}":["Netherlands","\u8377\u5170","\u8377\u862D","\u5C3C\u5FB7\u862D","\u963F\u59C6\u65AF\u7279\u4E39"],"\u{1F1F3}\u{1F1F4}":["Norway","\u632A\u5A01"],"\u{1F1F3}\u{1F1F5}":["Nepal","\u5C3C\u6CCA\u5C14"],"\u{1F1F3}\u{1F1FF}":["New Zealand","\u65B0\u897F\u5170","\u65B0\u897F\u862D"],"\u{1F1F5}\u{1F1E6}":["Panama","\u5DF4\u62FF\u9A6C"],"\u{1F1F5}\u{1F1EA}":["Peru","\u79D8\u9C81","\u7955\u9B6F"],"\u{1F1F5}\u{1F1ED}":["Philippines","\u83F2\u5F8B\u5BBE","\u83F2\u5F8B\u8CD3"],"\u{1F1F5}\u{1F1F0}":["Pakistan","\u5DF4\u57FA\u65AF\u5766"],"\u{1F1F5}\u{1F1F1}":["Poland","\u6CE2\u5170","\u6CE2\u862D"],"\u{1F1F5}\u{1F1F7}":["Puerto Rico","\u6CE2\u591A\u9ECE\u5404"],"\u{1F1F5}\u{1F1F9}":["Portugal","\u8461\u8404\u7259"],"\u{1F1F5}\u{1F1FE}":["Paraguay","\u5DF4\u62C9\u572D"],"\u{1F1F7}\u{1F1F4}":["Romania","\u7F57\u9A6C\u5C3C\u4E9A"],"\u{1F1F7}\u{1F1F8}":["Serbia","\u585E\u5C14\u7EF4\u4E9A"],"\u{1F1F7}\u{1F1EA}":["R\xE9union","\u7559\u5C3C\u6C6A","\u6CD5\u5C5E\u7559\u5C3C\u6C6A"],"\u{1F1F7}\u{1F1FA}":["Russia","\u4FC4\u7F57\u65AF","\u4FC4\u56FD","\u4FC4\u7F85\u65AF","\u4F2F\u529B","\u83AB\u65AF\u79D1","\u5723\u5F7C\u5F97\u5821","\u897F\u4F2F\u5229\u4E9A","\u4EAC\u4FC4","\u676D\u4FC4","\u5EE3\u4FC4","\u6EEC\u4FC4","\u5E7F\u4FC4","\u6CAA\u4FC4","Moscow"],"\u{1F1F8}\u{1F1E6}":["Saudi","\u6C99\u7279\u963F\u62C9\u4F2F","\u6C99\u7279"],"\u{1F1F8}\u{1F1EA}":["Sweden","\u745E\u5178"],"\u{1F1F8}\u{1F1EC}":["Singapore","Singapo","\u65B0\u52A0\u5761","\u72EE\u57CE","\u6CAA\u65B0","\u4EAC\u65B0","\u4E2D\u65B0","\u6CC9\u65B0","\u7A57\u65B0","\u6DF1\u65B0","\u676D\u65B0","\u5E7F\u65B0","\u5EE3\u65B0","\u6EEC\u65B0"],"\u{1F1F8}\u{1F1EE}":["Slovenia","\u65AF\u6D1B\u6587\u5C3C\u4E9A"],"\u{1F1F8}\u{1F1F0}":["Slovakia","\u65AF\u6D1B\u4F10\u514B"],"\u{1F1F9}\u{1F1ED}":["Thailand","\u6CF0\u56FD","\u6CF0\u570B","\u66FC\u8C37"],"\u{1F1F9}\u{1F1F3}":["Tunisia","\u7A81\u5C3C\u65AF"],"\u{1F1F9}\u{1F1F7}":["Turkey","T\xFCrkiye","\u571F\u8033\u5176","\u4F0A\u65AF\u5766\u5E03\u5C14"],"\u{1F1F9}\u{1F1FC}":["Taiwan","\u53F0\u6E7E","\u81FA\u7063","\u53F0\u7063","\u4E2D\u83EF\u6C11\u570B","\u4E2D\u534E\u6C11\u56FD","\u53F0\u5317","\u53F0\u4E2D","\u65B0\u5317","\u5F70\u5316","\u53F0","\u81FA","Taipei"],"\u{1F1FA}\u{1F1E6}":["Ukraine","\u4E4C\u514B\u5170","\u70CF\u514B\u862D"],"\u{1F1FA}\u{1F1F8}":["United States","\u7F8E\u56FD","America","\u7F8E","\u4EAC\u7F8E","\u6CE2\u7279\u5170","\u8FBE\u62C9\u65AF","\u4FC4\u52D2\u5188","\u51E4\u51F0\u57CE","\u8D39\u5229\u8499","\u7845\u8C37","\u77FD\u8C37","\u62C9\u65AF\u7EF4\u52A0\u65AF","\u6D1B\u6749\u77F6","\u5723\u4F55\u585E","\u5723\u514B\u62C9\u62C9","\u897F\u96C5\u56FE","\u829D\u52A0\u54E5","\u6CAA\u7F8E","\u54E5\u4F26\u5E03","\u7EBD\u7EA6","Los Angeles","San Jose","Sillicon Valley","Michigan"],"\u{1F1FA}\u{1F1FE}":["Uruguay","\u4E4C\u62C9\u572D"],"\u{1F1FB}\u{1F1EA}":["Venezuela","\u59D4\u5185\u745E\u62C9"],"\u{1F1FB}\u{1F1F3}":["Viet Nam","Vietnam","Vi\u1EC7t Nam","\u8D8A\u5357","\u80E1\u5FD7\u660E"],"\u{1F1FF}\u{1F1E6}":["South Africa","\u5357\u975E"],"\u{1F1E8}\u{1F1F3}":["China","\u4E2D\u56FD","\u4E2D\u570B","\u56DE\u56FD","\u56DE\u570B","\u56FD\u5185","\u570B\u5167","\u534E\u4E1C","\u534E\u897F","\u534E\u5357","\u534E\u5317","\u534E\u4E2D","\u6C5F\u82CF","\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733","\u676D\u5DDE","\u5F90\u5DDE","\u9752\u5C9B","\u5B81\u6CE2","\u9547\u6C5F"]},D={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["EXP","BAND"],"\u{1F1F8}\u{1F1F1}":["TEST","SOS"],"\u{1F1E6}\u{1F1E9}":["AD","AND"],"\u{1F1E6}\u{1F1EA}":["AE","ARE"],"\u{1F1E6}\u{1F1EB}":["AF","AFG"],"\u{1F1E6}\u{1F1F1}":["AL","ALB"],"\u{1F1E6}\u{1F1F2}":["AM","ARM"],"\u{1F1E6}\u{1F1F7}":["AR","ARG"],"\u{1F1E6}\u{1F1F9}":["AT","AUT"],"\u{1F1E6}\u{1F1FA}":["AU","AUS"],"\u{1F1E6}\u{1F1FF}":["AZ","AZE"],"\u{1F1E7}\u{1F1E6}":["BA","BIH"],"\u{1F1E7}\u{1F1E9}":["BD","BGD"],"\u{1F1E7}\u{1F1EA}":["BE","BEL"],"\u{1F1E7}\u{1F1EC}":["BG","BGR"],"\u{1F1E7}\u{1F1ED}":["BH","BHR"],"\u{1F1E7}\u{1F1F7}":["BR","BRA"],"\u{1F1E7}\u{1F1FE}":["BY","BLR"],"\u{1F1E8}\u{1F1E6}":["CA","CAN"],"\u{1F1E8}\u{1F1ED}":["CH","CHE"],"\u{1F1E8}\u{1F1F1}":["CL","CHL"],"\u{1F1E8}\u{1F1F4}":["CO","COL"],"\u{1F1E8}\u{1F1F7}":["CR","CRI"],"\u{1F1E8}\u{1F1FE}":["CY","CYP"],"\u{1F1E8}\u{1F1FF}":["CZ","CZE"],"\u{1F1E9}\u{1F1EA}":["DE","DEU"],"\u{1F1E9}\u{1F1F0}":["DK","DNK"],"\u{1F1EA}\u{1F1E8}":["EC","ECU"],"\u{1F1EA}\u{1F1EA}":["EE","EST"],"\u{1F1EA}\u{1F1EC}":["EG","EGY"],"\u{1F1EA}\u{1F1F8}":["ES","ESP"],"\u{1F1EA}\u{1F1FA}":["EU"],"\u{1F1EB}\u{1F1EE}":["FI","FIN"],"\u{1F1EB}\u{1F1F7}":["FR","FRA"],"\u{1F1EC}\u{1F1E7}":["GB","GBR","UK"],"\u{1F1EC}\u{1F1EA}":["GE","GEO"],"\u{1F1EC}\u{1F1F7}":["GR","GRC"],"\u{1F1ED}\u{1F1F0}":["HK","HKG","HKT","HKBN","HGC","WTT","CMI"],"\u{1F1ED}\u{1F1F7}":["HR","HRV"],"\u{1F1ED}\u{1F1FA}":["HU","HUN"],"\u{1F1EF}\u{1F1F4}":["JO","JOR"],"\u{1F1EF}\u{1F1F5}":["JP","JPN"],"\u{1F1F0}\u{1F1EA}":["KE","KEN"],"\u{1F1F0}\u{1F1EC}":["KG","KGZ"],"\u{1F1F0}\u{1F1ED}":["KH","KGZ"],"\u{1F1F0}\u{1F1F5}":["KP","PRK"],"\u{1F1F0}\u{1F1F7}":["KR","KOR"],"\u{1F1F0}\u{1F1FF}":["KZ","KAZ"],"\u{1F1EE}\u{1F1E9}":["ID","IDN"],"\u{1F1EE}\u{1F1EA}":["IE","IRL"],"\u{1F1EE}\u{1F1F1}":["IL","ISR"],"\u{1F1EE}\u{1F1F2}":["IM","IMN"],"\u{1F1EE}\u{1F1F3}":["IN","IND"],"\u{1F1EE}\u{1F1F7}":["IR","IRN"],"\u{1F1EE}\u{1F1F8}":["IS","ISL"],"\u{1F1EE}\u{1F1F9}":["IT","ITA"],"\u{1F1F1}\u{1F1F9}":["LT","LTU"],"\u{1F1F1}\u{1F1FA}":["LU","LUX"],"\u{1F1F1}\u{1F1FB}":["LV","LVA"],"\u{1F1F2}\u{1F1E6}":["MA","MAR"],"\u{1F1F2}\u{1F1E9}":["MD","MDA"],"\u{1F1F3}\u{1F1EC}":["NG","NGA"],"\u{1F1F2}\u{1F1F0}":["MK","MKD"],"\u{1F1F2}\u{1F1F3}":["MN","MNG"],"\u{1F1F2}\u{1F1F4}":["MO","MAC","CTM"],"\u{1F1F2}\u{1F1F9}":["MT","MLT"],"\u{1F1F2}\u{1F1FD}":["MX","MEX"],"\u{1F1F2}\u{1F1FE}":["MY","MYS"],"\u{1F1F3}\u{1F1F1}":["NL","NLD"],"\u{1F1F3}\u{1F1F4}":["NO","NOR"],"\u{1F1F3}\u{1F1F5}":["NP","NPL"],"\u{1F1F3}\u{1F1FF}":["NZ","NZL"],"\u{1F1F5}\u{1F1E6}":["PA","PAN"],"\u{1F1F5}\u{1F1EA}":["PE","PER"],"\u{1F1F5}\u{1F1ED}":["PH","PHL"],"\u{1F1F5}\u{1F1F0}":["PK","PAK"],"\u{1F1F5}\u{1F1F1}":["PL","POL"],"\u{1F1F5}\u{1F1F7}":["PR","PRI"],"\u{1F1F5}\u{1F1F9}":["PT","PRT"],"\u{1F1F5}\u{1F1FE}":["PY","PRY"],"\u{1F1F7}\u{1F1F4}":["RO","ROU"],"\u{1F1F7}\u{1F1F8}":["RS","SRB"],"\u{1F1F7}\u{1F1EA}":["RE","REU"],"\u{1F1F7}\u{1F1FA}":["RU","RUS"],"\u{1F1F8}\u{1F1E6}":["SA","SAU"],"\u{1F1F8}\u{1F1EA}":["SE","SWE"],"\u{1F1F8}\u{1F1EC}":["SG","SGP"],"\u{1F1F8}\u{1F1EE}":["SI","SVN"],"\u{1F1F8}\u{1F1F0}":["SK","SVK"],"\u{1F1F9}\u{1F1ED}":["TH","THA"],"\u{1F1F9}\u{1F1F3}":["TN","TUN"],"\u{1F1F9}\u{1F1F7}":["TR","TUR"],"\u{1F1F9}\u{1F1FC}":["TW","TWN","CHT","HINET","ROC"],"\u{1F1FA}\u{1F1E6}":["UA","UKR"],"\u{1F1FA}\u{1F1F8}":["US","USA","LAX","SFO"],"\u{1F1FA}\u{1F1FE}":["UY","URY"],"\u{1F1FB}\u{1F1EA}":["VE","VEN"],"\u{1F1FB}\u{1F1F3}":["VN","VNM"],"\u{1F1FF}\u{1F1E6}":["ZA","ZAF"],"\u{1F1E8}\u{1F1F3}":["CN","CHN","BACK"]};function a(l){var s;let P=((s=l.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/))==null?void 0:s[0])||"";for(const y of Object.keys(A))if(A[y].some(N=>RegExp(`${N}`,"i").test(l)))return P=y;for(const y of Object.keys(D))if(D[y].some(N=>RegExp(`(^|[^a-zA-Z:])${N}([^a-zA-Z:]|$)`).test(l)&&!/(\d+)\s*([MG]B)/.test(l)))return P=y;return P}function B(l){return/^(\uD83C[\uDDE6-\uDDFF]){2}$/.test(l)}function E(l){return/^[A-Z]{2}$/.test(l)}},1500:(f,p,C)=>{C.d(p,{B8:()=>K,Dq:()=>B,Mi:()=>y,S9:()=>N,Vo:()=>P,Zg:()=>E,l0:()=>l,qu:()=>s,sY:()=>O});var A=Math.pow,D=(u,e,r)=>new Promise((n,o)=>{var m=h=>{try{_(r.next(h))}catch(v){o(v)}},S=h=>{try{_(r.throw(h))}catch(v){o(v)}},_=h=>h.done?n(h.value):Promise.resolve(h.value).then(m,S);_((r=r.apply(u,e)).next())});const a=$substore,B={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"],vpsmmo:["Vpsmmo Technology Company Limited","1mcloud Technology Company Limited","AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],litespeed:["LITESPEED-COM","Litespeed Technology Company Limited","AS140810 Megacore Technology Company Limited"],m247:["M247 Europe SRL","3NT SOLUTIONS LLP","AS9009 M247 Europe SRL"]},E={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function l(u){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(u)}function s(u){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(u)}function P(u,e){const r=u.split("."),n=e.split(".");if(r.length<3||n.length<3)return!1;for(let o=0;o<3;o++)if(r[o]!==n[o])return!1;return!0}function y(u){const e=u.split(".");return e[e.length-1]}function L(u){return D(this,null,function*(){const e=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(u)}&type=A`,r={Accept:"application/dns-json"};try{const n=yield a.http.get({url:e,headers:r}),o=JSON.parse(n.body);if(o.Status!==0)throw new Error(`HTTP error! status: ${o.Status}`);return o.Answer?o.Answer.map(m=>`${m.data}`)[0]:""}catch(n){return""}})}function N(u){return D(this,null,function*(){return yield a.http.get(`https://dns.google/resolve?name=${u}`).then(r=>{const n=JSON.parse(r.body);if(n.Status===0){const o=n.Answer.find(m=>m.type===1);return o?o.data:""}return""})})}function M(u){return D(this,null,function*(){return yield a.http.get(`http://ip-api.com/json/${u}?fields=country`).then(r=>JSON.parse(r.body).country||"")})}function O(u){return D(this,null,function*(){return yield a.http.get(`http://ip-api.com/json/${u}?fields=region,regionName`).then(r=>{const n=JSON.parse(r.body);return n.regionName&&n.region?`${n.regionName} (${n.region})`:""})})}function R(u){return D(this,null,function*(){return yield a.http.get(`http://ip-api.com/json/${u}?fields=isp`).then(r=>JSON.parse(r.body).isp||"")})}function k(u){return D(this,null,function*(){return yield a.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(u)}).then(r=>JSON.parse(r.body).map(o=>o.isp))})}function K(u){return D(this,null,function*(){return yield a.http.get(`http://ip-api.com/json/${u}?fields=isp,org`).then(r=>{const n=JSON.parse(r.body);return[n.isp||"",n.org||""].join(",")})})}function H(u,e){let r,n;const o=c(u);if((r=e.match(/^(.*?)\/(\d{1,2})$/))&&(n=c(r[1]))>=0){const m=A(2,32-parseInt(r[2]));return o>=n&&o<=n+m-1}return!1}function c(u){let e;if(e=u.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let r=0,n=1;for(let o=4;o>=1;o-=1)r+=n*parseInt(e[o]),n*=256;return r}return-1}},9085:(f,p,C)=>{C.d(p,{G:()=>A});function A(a){return a&&a!=="null"&&a!=="undefined"}function D(a,B){return a.reduce((E,l)=>{const s=l[B];return E[s]||(E[s]=[]),E[s].push(l),E},{})}},4173:(f,p,C)=>{C.d(p,{AH:()=>K,um:()=>H});var A=C(9085),D=C(1058),a=C(1500),B=C(8475),E=C(8599),l=Math.pow,s=(F,t,d)=>new Promise((i,g)=>{var w=T=>{try{G(d.next(T))}catch(b){g(b)}},U=T=>{try{G(d.throw(T))}catch(b){g(b)}},G=T=>T.done?i(T.value):Promise.resolve(T.value).then(w,U);G((d=d.apply(F,t)).next())});const P="#sub-store-cached-dns",y="#sub-store-cached-isp",L="#sub-store-cached-region",N=7*24*60*60*1e3,M=new B.A(P,N),O=new B.A(y,N),R=new B.A(L,N);function k(F,t){(F.type==="vmess"||F.type==="vless"||F.type==="trojan")&&(F.network==="ws"&&(F["ws-opts"]=F["ws-opts"]||{},F["ws-opts"].headers=F["ws-opts"].headers||{},F["ws-opts"].headers.Host=t),F.network==="grpc"&&(F["grpc-opts"]=F["grpc-opts"]||{},F["grpc-opts"]["grpc-service-name"]=F["grpc-opts"]["grpc-service-name"]||"",F.servername=t),F.network==="tcp"&&(F.servername=t),F.sni=t),isRealValue(F["skip-cert-verify"])||(F["skip-cert-verify"]=!0)}function K(F){const t=[];return(0,A.G)(F.regex)&&t.push(c),(0,A.G)(F.ports)&&t.push(u),(0,A.G)(F.ips)&&t.push(e),(0,A.G)(F.isps)&&t.push(r),(0,A.G)(F.regions)&&t.push(n),(0,A.G)(F.countries)&&t.push(o),t}function H(F,t,d){return s(this,null,function*(){return(yield Promise.all(F.map(g=>g(t,d)))).every(g=>g)})}function c(F,t){return(0,D.r)(F.regex).test(t.name)}function u(F,t){return F.ports.some(d=>d===t.port)}function e(F,t){return s(this,null,function*(){return(yield Promise.all(F.ips.map(i=>h(t.server,i)))).some(i=>i)})}function r(F,t){return s(this,null,function*(){return(yield Promise.all(F.isps.map(i=>_(t.server,i)))).some(i=>i)})}function n(F,t){return s(this,null,function*(){return(yield Promise.all(F.regions.map(i=>S(t.server,i)))).some(i=>i)})}function o(F,t){return s(this,null,function*(){return(yield Promise.all(F.countries.map(i=>m(t,i)))).some(i=>i)})}function m(F,t){return s(this,null,function*(){return(0,E.fs)(t)?F.countryFlag===t:(0,E.ik)(t)?F.countryCode===t:!1})}function S(F,t){return s(this,null,function*(){const d=yield v(F);try{let i="";const g=R.get(d);g?i=g:(i=yield(0,a.sY)(d),i&&R.set(d,i));const w=(0,D.Z)(i);if(w){const{name:U,code:G}=w,T=a.Zg[t.toLowerCase()];if((0,A.G)(T)&&(T.some(b=>RegExp(`${b}`,"i").test(G))||T.some(b=>RegExp(`${b}`,"i").test(U))))return!0}}catch(i){return!1}return!1})}function _(F,t){return s(this,null,function*(){const d=yield v(F);let i="";const g=O.get(d);g?i=g:(i=yield(0,a.B8)(d),i&&O.set(d,i));const w=a.Dq[t],U=i.split(",");for(const G of U)if(G&&w.some(T=>RegExp(`${T}`,"i").test(G)))return!0;return!1})}function h(F,t){return s(this,null,function*(){const d=yield v(F);if(!(0,a.qu)(d))return!1;if(t.indexOf("/")<0)return!!(d===t||(0,a.Vo)(d,t)&&(0,a.Mi)(t)==="*");let i,g;const w=V(d);if((i=t.match(/^(.*?)\/(\d{1,2})$/))&&(g=V(i[1]))>=0){const U=l(2,32-parseInt(i[2]));return w>=g&&w<=g+U-1}return!1})}function v(F){return s(this,null,function*(){let t=F;if((0,a.l0)(F)){const d=M.get(F);if(d)t=d;else{const i=yield(0,a.S9)(F);t=i,i&&M.set(F,i)}}return t})}function V(F){let t;if(t=F.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let d=0,i=1;for(let g=4;g>=1;g-=1)d+=i*parseInt(t[g]),i*=256;return d}return-1}},1058:(f,p,C)=>{C.d(p,{Z:()=>D,r:()=>A});function A(a){const B=a.lastIndexOf("/");return new RegExp(a.slice(1,B),a.slice(B+1))}function D(a){const B=/^([^\(]+) \(([^)]+)\)$/,E=a.match(B);return E?{name:E[1].trim(),code:E[2]}:null}}},Y={};function I(f){var p=Y[f];if(p!==void 0)return p.exports;var C=Y[f]={exports:{}};return $[f](C,C.exports,I),C.exports}I.n=f=>{var p=f&&f.__esModule?()=>f.default:()=>f;return I.d(p,{a:p}),p},I.d=(f,p)=>{for(var C in p)I.o(p,C)&&!I.o(f,C)&&Object.defineProperty(f,C,{enumerable:!0,get:p[C]})},I.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(f){if(typeof window=="object")return window}}(),I.o=(f,p)=>Object.prototype.hasOwnProperty.call(f,p);var x={};(()=>{var f=I(3183),p=I.n(f),C=I(9085),A=I(423),D=I(4173),a=Object.defineProperty,B=Object.defineProperties,E=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,y=(c,u)=>(u=Symbol[c])?u:Symbol.for("Symbol."+c),L=(c,u,e)=>u in c?a(c,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[u]=e,N=(c,u)=>{for(var e in u||(u={}))s.call(u,e)&&L(c,e,u[e]);if(l)for(var e of l(u))P.call(u,e)&&L(c,e,u[e]);return c},M=(c,u)=>B(c,E(u)),O=(c,u,e)=>new Promise((r,n)=>{var o=_=>{try{S(e.next(_))}catch(h){n(h)}},m=_=>{try{S(e.throw(_))}catch(h){n(h)}},S=_=>_.done?r(_.value):Promise.resolve(_.value).then(o,m);S((e=e.apply(c,u)).next())}),R=(c,u,e)=>(u=c[y("asyncIterator")])?u.call(c):(c=c[y("iterator")](),u={},e=(r,n)=>(n=c[r])&&(u[r]=o=>new Promise((m,S,_)=>(o=n.call(c,o),_=o.done,Promise.resolve(o.value).then(h=>m({value:h,done:_}),S)))),e("next"),e("return"),u);function k(){return O(this,arguments,function*(c=[],u,e){const{type:r,mode:n}=$arguments;return/all/i.test(n)?yield K(c):yield H(c,r)})}function K(c){return O(this,null,function*(){const u=[],e=yield(0,A.ru)();for(const S in e){const _=e[S];if(!(S==="default"||!(0,C.G)(_)))try{for(var r=R(c),n,o,m;n=!(o=yield r.next()).done;n=!1){const h=o.value,v=(0,D.AH)(_),V=M(N({},h),{filterType:S});if(v.length===0){u.push(V);continue}(yield(0,D.um)(v,_,V))&&u.push(V)}}catch(h){m=[h]}finally{try{n&&(o=r.return)&&(yield o.call(r))}finally{if(m)throw m[0]}}}return u})}function H(c,u){return O(this,null,function*(){const e=[],r=yield(0,A.ru)(),n=(0,C.G)(u)?r[u]:r[c[0].collectionName];if(!(0,C.G)(n))return c;try{for(var o=R(c),m,S,_;m=!(S=yield o.next()).done;m=!1){const h=S.value,v=(0,D.AH)(n);if(v.length===0){e.push(h);continue}(yield(0,D.um)(v,n,h))&&e.push(h)}}catch(h){_=[h]}finally{try{m&&(S=o.return)&&(yield S.call(o))}finally{if(_)throw _[0]}}return e})}p().operator=k})()})();})();
