/*!
 substore-tools - version: 1.8.1
 Build fullhash:b4f7c34e61050c9585f0, chunkhash:3a8f77f339b664a0c252 (2024-05-21 12:14:07)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var O={3183:(r,s,a)=>{var f;typeof window!="undefined"?f=window:typeof a.g!="undefined"?f=a.g:typeof self!="undefined"?f=self:f={},r.exports=f}},m={};function A(r){var s=m[r];if(s!==void 0)return s.exports;var a=m[r]={exports:{}};return O[r](a,a.exports,A),a.exports}A.n=r=>{var s=r&&r.__esModule?()=>r.default:()=>r;return A.d(s,{a:s}),s},A.d=(r,s)=>{for(var a in s)A.o(s,a)&&!A.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:s[a]})},A.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(r){if(typeof window=="object")return window}}(),A.o=(r,s)=>Object.prototype.hasOwnProperty.call(r,s);var eu={};(()=>{var r=A(3183),s=A.n(r);function a(u){return u&&u!=="null"&&u!=="undefined"}function f(u,F){return u.reduce((t,e)=>{const n=e[F];return t[n]||(t[n]=[]),t[n].push(e),t},{})}function tu(u){return Number.isInteger(u)}function nu(u){return typeof u=="number"&&!Number.isNaN(u)}function iu(u){return typeof u=="string"}function ou(u){return typeof u=="boolean"}function ru(u){return typeof u=="object"&&u!==null}const g=$substore;class T{constructor(F,t){this.key=F,this.expires=t;const e=g.read(F);e?this.resourceCache=JSON.parse(e):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let F=!1;const t=new Date().getTime();Object.keys(this.resourceCache).forEach(e=>{const n=this.resourceCache[e];(!n.time||t-n.time>this.expires)&&(delete this.resourceCache[e],g.delete(`#${e}`),F=!0)}),F&&this._persist()}revokeIds(F){let t=!1;for(const e of F)delete this.resourceCache[e],t=!0;t&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){g.write(JSON.stringify(this.resourceCache),this.key)}get(F){const t=this.resourceCache[F]&&this.resourceCache[F].time;return t&&new Date().getTime()-t<=this.expires?this.resourceCache[F].data:null}set(F,t){this.resourceCache[F]={time:new Date().getTime(),data:t},this._persist()}}const D=T,su="schemaVersion",Eu="settings",au="subs",Cu="collections",lu="files",cu="modules",Au="artifacts",y="#sub-store-cached-dns",P="#sub-store-cached-isp",_="#sub-store-cached-region",L="#sub-store-cached-country",h=7*24*60*60*1e3,pu=new D(y,h),du=new D(L,h),fu=new D(P,h),Du=new D(_,h),B={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["\u6D41\u91CF","\u65F6\u95F4","\u8FC7\u671F","Bandwidth","Expire"],"\u{1F1F8}\u{1F1F1}":["\u5E94\u6025","\u6D4B\u8BD5\u8282\u70B9"],"\u{1F1E6}\u{1F1E9}":["Andorra","\u5B89\u9053\u5C14"],"\u{1F1E6}\u{1F1EA}":["United Arab Emirates","\u963F\u8054\u914B","\u8FEA\u62DC"],"\u{1F1E6}\u{1F1EB}":["Afghanistan","\u963F\u5BCC\u6C57"],"\u{1F1E6}\u{1F1F1}":["Albania","\u963F\u5C14\u5DF4\u5C3C\u4E9A","\u963F\u723E\u5DF4\u5C3C\u4E9E"],"\u{1F1E6}\u{1F1F2}":["Armenia","\u4E9A\u7F8E\u5C3C\u4E9A"],"\u{1F1E6}\u{1F1F7}":["Argentina","\u963F\u6839\u5EF7"],"\u{1F1E6}\u{1F1F9}":["Austria","\xDAc","\u5965\u5730\u5229","\u5967\u5730\u5229","\u7EF4\u4E5F\u7EB3"],"\u{1F1E6}\u{1F1FA}":["Australia","\u6FB3\u5927\u5229\u4E9A","\u6FB3\u6D32","\u58A8\u5C14\u672C","\u6089\u5C3C","\u571F\u6FB3","\u4EAC\u6FB3","\u5EE3\u6FB3","\u6EEC\u6FB3","\u6CAA\u6FB3","\u5E7F\u6FB3","Sydney"],"\u{1F1E6}\u{1F1FF}":["Azerbaijan","\u963F\u585E\u62DC\u7586"],"\u{1F1E7}\u{1F1E6}":["Bosnia and Herzegovina","\u6CE2\u9ED1\u5171\u548C\u56FD","\u6CE2\u9ED1"],"\u{1F1E7}\u{1F1E9}":["Bangladesh","\u5B5F\u52A0\u62C9\u56FD","\u5B5F\u52A0\u62C9"],"\u{1F1E7}\u{1F1EA}":["Belgium","\u6BD4\u5229\u65F6","\u6BD4\u5229\u6642"],"\u{1F1E7}\u{1F1EC}":["Bulgaria","\u4FDD\u52A0\u5229\u4E9A","\u4FDD\u52A0\u5229\u4E9E"],"\u{1F1E7}\u{1F1ED}":["Bahrain","\u5DF4\u6797"],"\u{1F1E7}\u{1F1F7}":["Brazil","\u5DF4\u897F","\u5723\u4FDD\u7F57"],"\u{1F1E7}\u{1F1FE}":["Belarus","\u767D\u4FC4\u7F57\u65AF","\u767D\u4FC4"],"\u{1F1E8}\u{1F1E6}":["Canada","\u52A0\u62FF\u5927","\u8499\u7279\u5229\u5C14","\u6E29\u54E5\u534E","\u6953\u8449","\u67AB\u53F6","\u6ED1\u94C1\u5362","\u591A\u4F26\u591A","Waterloo"],"\u{1F1E8}\u{1F1ED}":["Switzerland","\u745E\u58EB","\u82CF\u9ECE\u4E16","Zurich"],"\u{1F1E8}\u{1F1F1}":["Chile","\u667A\u5229"],"\u{1F1E8}\u{1F1F4}":["Colombia","\u54E5\u4F26\u6BD4\u4E9A"],"\u{1F1E8}\u{1F1F7}":["Costa Rica","\u54E5\u65AF\u8FBE\u9ECE\u52A0"],"\u{1F1E8}\u{1F1FE}":["Cyprus","\u585E\u6D66\u8DEF\u65AF"],"\u{1F1E8}\u{1F1FF}":["Czechia","\u6377\u514B"],"\u{1F1E9}\u{1F1EA}":["German","\u5FB7\u56FD","\u5FB7\u570B","\u4EAC\u5FB7","\u6EEC\u5FB7","\u5EE3\u5FB7","\u6CAA\u5FB7","\u5E7F\u5FB7","\u6CD5\u5170\u514B\u798F","Frankfurt"],"\u{1F1E9}\u{1F1F0}":["Denmark","\u4E39\u9EA6","\u4E39\u9EA5"],"\u{1F1EA}\u{1F1E8}":["Ecuador","\u5384\u74DC\u591A\u5C14"],"\u{1F1EA}\u{1F1EA}":["Estonia","\u7231\u6C99\u5C3C\u4E9A"],"\u{1F1EA}\u{1F1EC}":["Egypt","\u57C3\u53CA"],"\u{1F1EA}\u{1F1F8}":["Spain","\u897F\u73ED\u7259"],"\u{1F1EA}\u{1F1FA}":["European Union","\u6B27\u76DF","\u6B27\u7F57\u5DF4"],"\u{1F1EB}\u{1F1EE}":["Finland","\u82AC\u5170","\u82AC\u862D","\u8D6B\u5C14\u8F9B\u57FA"],"\u{1F1EB}\u{1F1F7}":["France","\u6CD5\u56FD","\u6CD5\u570B","\u5DF4\u9ECE"],"\u{1F1EC}\u{1F1E7}":["Great Britain","\u82F1\u56FD","England","United Kingdom","\u4F26\u6566","\u82F1","London"],"\u{1F1EC}\u{1F1EA}":["Georgia","\u683C\u9C81\u5409\u4E9A","\u683C\u9B6F\u5409\u4E9E"],"\u{1F1EC}\u{1F1F7}":["Greece","\u5E0C\u814A","\u5E0C\u81D8"],"\u{1F1ED}\u{1F1F0}":["Hong Kong","Hongkong","\u9999\u6E2F","HongKong","HONG KONG","\u6DF1\u6E2F","\u6CAA\u6E2F","\u547C\u6E2F","\u7A57\u6E2F","\u4EAC\u6E2F","\u6E2F"],"\u{1F1ED}\u{1F1F7}":["Croatia","\u514B\u7F57\u5730\u4E9A","\u514B\u7F85\u5730\u4E9E"],"\u{1F1ED}\u{1F1FA}":["Hungary","\u5308\u7259\u5229"],"\u{1F1EF}\u{1F1F4}":["Jordan","\u7EA6\u65E6"],"\u{1F1EF}\u{1F1F5}":["Japan","\u65E5\u672C","\u4E1C\u4EAC","\u5927\u962A","\u57FC\u7389","\u6CAA\u65E5","\u7A57\u65E5","\u5DDD\u65E5","\u4E2D\u65E5","\u6CC9\u65E5","\u676D\u65E5","\u6DF1\u65E5","\u8FBD\u65E5","\u5E7F\u65E5","\u5927\u5742","Osaka","Tokyo"],"\u{1F1F0}\u{1F1EA}":["Kenya","\u80AF\u5C3C\u4E9A"],"\u{1F1F0}\u{1F1EC}":["Kyrgyzstan","\u5409\u5C14\u5409\u65AF\u65AF\u5766"],"\u{1F1F0}\u{1F1ED}":["Cambodia","\u67EC\u57D4\u5BE8"],"\u{1F1F0}\u{1F1F5}":["North Korea","\u671D\u9C9C"],"\u{1F1F0}\u{1F1F7}":["Korea","\u97E9\u56FD","\u97D3\u570B","\u97E9","\u97D3","\u9996\u5C14","\u6625\u5DDD","Chuncheon","Seoul"],"\u{1F1F0}\u{1F1FF}":["Kazakhstan","\u54C8\u8428\u514B\u65AF\u5766","\u54C8\u8428\u514B"],"\u{1F1EE}\u{1F1E9}":["Indonesia","\u5370\u5C3C","\u5370\u5EA6\u5C3C\u897F\u4E9A","\u96C5\u52A0\u8FBE"],"\u{1F1EE}\u{1F1EA}":["Ireland","\u7231\u5C14\u5170","\u611B\u723E\u862D","\u90FD\u67CF\u6797"],"\u{1F1EE}\u{1F1F1}":["Israel","\u4EE5\u8272\u5217"],"\u{1F1EE}\u{1F1F2}":["Isle of Man","\u9A6C\u6069\u5C9B","\u99AC\u6069\u5CF6"],"\u{1F1EE}\u{1F1F3}":["India","\u5370\u5EA6","\u5B5F\u4E70","MFumbai"],"\u{1F1EE}\u{1F1F7}":["Iran","\u4F0A\u6717"],"\u{1F1EE}\u{1F1F8}":["Iceland","\u51B0\u5C9B","\u51B0\u5CF6"],"\u{1F1EE}\u{1F1F9}":["Italy","\u610F\u5927\u5229","\u7FA9\u5927\u5229","\u7C73\u5170","Nachash"],"\u{1F1F1}\u{1F1F9}":["Lithuania","\u7ACB\u9676\u5B9B"],"\u{1F1F1}\u{1F1FA}":["Luxembourg","\u5362\u68EE\u5821"],"\u{1F1F1}\u{1F1FB}":["Latvia","\u62C9\u8131\u7EF4\u4E9A","Latvija"],"\u{1F1F2}\u{1F1E6}":["Morocco","\u6469\u6D1B\u54E5"],"\u{1F1F2}\u{1F1E9}":["Moldova","\u6469\u5C14\u591A\u74E6","\u6469\u723E\u591A\u74E6"],"\u{1F1F3}\u{1F1EC}":["Nigeria","\u5C3C\u65E5\u5229\u4E9A","\u5C3C\u65E5\u5229\u4E9E"],"\u{1F1F2}\u{1F1F0}":["Macedonia","\u9A6C\u5176\u987F","\u99AC\u5176\u9813"],"\u{1F1F2}\u{1F1F3}":["Mongolia","\u8499\u53E4"],"\u{1F1F2}\u{1F1F4}":["Macao","\u6FB3\u95E8","\u6FB3\u9580","CTM"],"\u{1F1F2}\u{1F1F9}":["Malta","\u9A6C\u8033\u4ED6"],"\u{1F1F2}\u{1F1FD}":["Mexico","\u58A8\u897F\u54E5"],"\u{1F1F2}\u{1F1FE}":["Malaysia","\u9A6C\u6765","\u99AC\u4F86","\u5409\u9686\u5761","\u5927\u99AC"],"\u{1F1F3}\u{1F1F1}":["Netherlands","\u8377\u5170","\u8377\u862D","\u5C3C\u5FB7\u862D","\u963F\u59C6\u65AF\u7279\u4E39"],"\u{1F1F3}\u{1F1F4}":["Norway","\u632A\u5A01"],"\u{1F1F3}\u{1F1F5}":["Nepal","\u5C3C\u6CCA\u5C14"],"\u{1F1F3}\u{1F1FF}":["New Zealand","\u65B0\u897F\u5170","\u65B0\u897F\u862D"],"\u{1F1F5}\u{1F1E6}":["Panama","\u5DF4\u62FF\u9A6C"],"\u{1F1F5}\u{1F1EA}":["Peru","\u79D8\u9C81","\u7955\u9B6F"],"\u{1F1F5}\u{1F1ED}":["Philippines","\u83F2\u5F8B\u5BBE","\u83F2\u5F8B\u8CD3"],"\u{1F1F5}\u{1F1F0}":["Pakistan","\u5DF4\u57FA\u65AF\u5766"],"\u{1F1F5}\u{1F1F1}":["Poland","\u6CE2\u5170","\u6CE2\u862D"],"\u{1F1F5}\u{1F1F7}":["Puerto Rico","\u6CE2\u591A\u9ECE\u5404"],"\u{1F1F5}\u{1F1F9}":["Portugal","\u8461\u8404\u7259"],"\u{1F1F5}\u{1F1FE}":["Paraguay","\u5DF4\u62C9\u572D"],"\u{1F1F7}\u{1F1F4}":["Romania","\u7F57\u9A6C\u5C3C\u4E9A"],"\u{1F1F7}\u{1F1F8}":["Serbia","\u585E\u5C14\u7EF4\u4E9A"],"\u{1F1F7}\u{1F1EA}":["R\xE9union","\u7559\u5C3C\u6C6A","\u6CD5\u5C5E\u7559\u5C3C\u6C6A"],"\u{1F1F7}\u{1F1FA}":["Russia","\u4FC4\u7F57\u65AF","\u4FC4\u56FD","\u4FC4\u7F85\u65AF","\u4F2F\u529B","\u83AB\u65AF\u79D1","\u5723\u5F7C\u5F97\u5821","\u897F\u4F2F\u5229\u4E9A","\u4EAC\u4FC4","\u676D\u4FC4","\u5EE3\u4FC4","\u6EEC\u4FC4","\u5E7F\u4FC4","\u6CAA\u4FC4","Moscow"],"\u{1F1F8}\u{1F1E6}":["Saudi","\u6C99\u7279\u963F\u62C9\u4F2F","\u6C99\u7279"],"\u{1F1F8}\u{1F1EA}":["Sweden","\u745E\u5178"],"\u{1F1F8}\u{1F1EC}":["Singapore","Singapo","\u65B0\u52A0\u5761","\u72EE\u57CE","\u6CAA\u65B0","\u4EAC\u65B0","\u4E2D\u65B0","\u6CC9\u65B0","\u7A57\u65B0","\u6DF1\u65B0","\u676D\u65B0","\u5E7F\u65B0","\u5EE3\u65B0","\u6EEC\u65B0"],"\u{1F1F8}\u{1F1EE}":["Slovenia","\u65AF\u6D1B\u6587\u5C3C\u4E9A"],"\u{1F1F8}\u{1F1F0}":["Slovakia","\u65AF\u6D1B\u4F10\u514B"],"\u{1F1F9}\u{1F1ED}":["Thailand","\u6CF0\u56FD","\u6CF0\u570B","\u66FC\u8C37"],"\u{1F1F9}\u{1F1F3}":["Tunisia","\u7A81\u5C3C\u65AF"],"\u{1F1F9}\u{1F1F7}":["Turkey","T\xFCrkiye","\u571F\u8033\u5176","\u4F0A\u65AF\u5766\u5E03\u5C14"],"\u{1F1F9}\u{1F1FC}":["Taiwan","\u53F0\u6E7E","\u81FA\u7063","\u53F0\u7063","\u4E2D\u83EF\u6C11\u570B","\u4E2D\u534E\u6C11\u56FD","\u53F0\u5317","\u53F0\u4E2D","\u65B0\u5317","\u5F70\u5316","\u53F0","\u81FA","Taipei"],"\u{1F1FA}\u{1F1E6}":["Ukraine","\u4E4C\u514B\u5170","\u70CF\u514B\u862D"],"\u{1F1FA}\u{1F1F8}":["United States","\u7F8E\u56FD","America","\u7F8E","\u4EAC\u7F8E","\u6CE2\u7279\u5170","\u8FBE\u62C9\u65AF","\u4FC4\u52D2\u5188","\u51E4\u51F0\u57CE","\u8D39\u5229\u8499","\u7845\u8C37","\u77FD\u8C37","\u62C9\u65AF\u7EF4\u52A0\u65AF","\u6D1B\u6749\u77F6","\u5723\u4F55\u585E","\u5723\u514B\u62C9\u62C9","\u897F\u96C5\u56FE","\u829D\u52A0\u54E5","\u6CAA\u7F8E","\u54E5\u4F26\u5E03","\u7EBD\u7EA6","Los Angeles","San Jose","Sillicon Valley","Michigan"],"\u{1F1FA}\u{1F1FE}":["Uruguay","\u4E4C\u62C9\u572D"],"\u{1F1FB}\u{1F1EA}":["Venezuela","\u59D4\u5185\u745E\u62C9"],"\u{1F1FB}\u{1F1F3}":["Viet Nam","Vietnam","Vi\u1EC7t Nam","\u8D8A\u5357","\u80E1\u5FD7\u660E"],"\u{1F1FF}\u{1F1E6}":["South Africa","\u5357\u975E"],"\u{1F1E8}\u{1F1F3}":["China","\u4E2D\u56FD","\u4E2D\u570B","\u56DE\u56FD","\u56DE\u570B","\u56FD\u5185","\u570B\u5167","\u534E\u4E1C","\u534E\u897F","\u534E\u5357","\u534E\u5317","\u534E\u4E2D","\u6C5F\u82CF","\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733","\u676D\u5DDE","\u5F90\u5DDE","\u9752\u5C9B","\u5B81\u6CE2","\u9547\u6C5F"]},S={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["EXP","BAND"],"\u{1F1F8}\u{1F1F1}":["TEST","SOS"],"\u{1F1E6}\u{1F1E9}":["AD","AND"],"\u{1F1E6}\u{1F1EA}":["AE","ARE"],"\u{1F1E6}\u{1F1EB}":["AF","AFG"],"\u{1F1E6}\u{1F1F1}":["AL","ALB"],"\u{1F1E6}\u{1F1F2}":["AM","ARM"],"\u{1F1E6}\u{1F1F7}":["AR","ARG"],"\u{1F1E6}\u{1F1F9}":["AT","AUT"],"\u{1F1E6}\u{1F1FA}":["AU","AUS"],"\u{1F1E6}\u{1F1FF}":["AZ","AZE"],"\u{1F1E7}\u{1F1E6}":["BA","BIH"],"\u{1F1E7}\u{1F1E9}":["BD","BGD"],"\u{1F1E7}\u{1F1EA}":["BE","BEL"],"\u{1F1E7}\u{1F1EC}":["BG","BGR"],"\u{1F1E7}\u{1F1ED}":["BH","BHR"],"\u{1F1E7}\u{1F1F7}":["BR","BRA"],"\u{1F1E7}\u{1F1FE}":["BY","BLR"],"\u{1F1E8}\u{1F1E6}":["CA","CAN"],"\u{1F1E8}\u{1F1ED}":["CH","CHE"],"\u{1F1E8}\u{1F1F1}":["CL","CHL"],"\u{1F1E8}\u{1F1F4}":["CO","COL"],"\u{1F1E8}\u{1F1F7}":["CR","CRI"],"\u{1F1E8}\u{1F1FE}":["CY","CYP"],"\u{1F1E8}\u{1F1FF}":["CZ","CZE"],"\u{1F1E9}\u{1F1EA}":["DE","DEU"],"\u{1F1E9}\u{1F1F0}":["DK","DNK"],"\u{1F1EA}\u{1F1E8}":["EC","ECU"],"\u{1F1EA}\u{1F1EA}":["EE","EST"],"\u{1F1EA}\u{1F1EC}":["EG","EGY"],"\u{1F1EA}\u{1F1F8}":["ES","ESP"],"\u{1F1EA}\u{1F1FA}":["EU"],"\u{1F1EB}\u{1F1EE}":["FI","FIN"],"\u{1F1EB}\u{1F1F7}":["FR","FRA"],"\u{1F1EC}\u{1F1E7}":["GB","GBR","UK"],"\u{1F1EC}\u{1F1EA}":["GE","GEO"],"\u{1F1EC}\u{1F1F7}":["GR","GRC"],"\u{1F1ED}\u{1F1F0}":["HK","HKG","HKT","HKBN","HGC","WTT","CMI"],"\u{1F1ED}\u{1F1F7}":["HR","HRV"],"\u{1F1ED}\u{1F1FA}":["HU","HUN"],"\u{1F1EF}\u{1F1F4}":["JO","JOR"],"\u{1F1EF}\u{1F1F5}":["JP","JPN"],"\u{1F1F0}\u{1F1EA}":["KE","KEN"],"\u{1F1F0}\u{1F1EC}":["KG","KGZ"],"\u{1F1F0}\u{1F1ED}":["KH","KGZ"],"\u{1F1F0}\u{1F1F5}":["KP","PRK"],"\u{1F1F0}\u{1F1F7}":["KR","KOR"],"\u{1F1F0}\u{1F1FF}":["KZ","KAZ"],"\u{1F1EE}\u{1F1E9}":["ID","IDN"],"\u{1F1EE}\u{1F1EA}":["IE","IRL"],"\u{1F1EE}\u{1F1F1}":["IL","ISR"],"\u{1F1EE}\u{1F1F2}":["IM","IMN"],"\u{1F1EE}\u{1F1F3}":["IN","IND"],"\u{1F1EE}\u{1F1F7}":["IR","IRN"],"\u{1F1EE}\u{1F1F8}":["IS","ISL"],"\u{1F1EE}\u{1F1F9}":["IT","ITA"],"\u{1F1F1}\u{1F1F9}":["LT","LTU"],"\u{1F1F1}\u{1F1FA}":["LU","LUX"],"\u{1F1F1}\u{1F1FB}":["LV","LVA"],"\u{1F1F2}\u{1F1E6}":["MA","MAR"],"\u{1F1F2}\u{1F1E9}":["MD","MDA"],"\u{1F1F3}\u{1F1EC}":["NG","NGA"],"\u{1F1F2}\u{1F1F0}":["MK","MKD"],"\u{1F1F2}\u{1F1F3}":["MN","MNG"],"\u{1F1F2}\u{1F1F4}":["MO","MAC","CTM"],"\u{1F1F2}\u{1F1F9}":["MT","MLT"],"\u{1F1F2}\u{1F1FD}":["MX","MEX"],"\u{1F1F2}\u{1F1FE}":["MY","MYS"],"\u{1F1F3}\u{1F1F1}":["NL","NLD"],"\u{1F1F3}\u{1F1F4}":["NO","NOR"],"\u{1F1F3}\u{1F1F5}":["NP","NPL"],"\u{1F1F3}\u{1F1FF}":["NZ","NZL"],"\u{1F1F5}\u{1F1E6}":["PA","PAN"],"\u{1F1F5}\u{1F1EA}":["PE","PER"],"\u{1F1F5}\u{1F1ED}":["PH","PHL"],"\u{1F1F5}\u{1F1F0}":["PK","PAK"],"\u{1F1F5}\u{1F1F1}":["PL","POL"],"\u{1F1F5}\u{1F1F7}":["PR","PRI"],"\u{1F1F5}\u{1F1F9}":["PT","PRT"],"\u{1F1F5}\u{1F1FE}":["PY","PRY"],"\u{1F1F7}\u{1F1F4}":["RO","ROU"],"\u{1F1F7}\u{1F1F8}":["RS","SRB"],"\u{1F1F7}\u{1F1EA}":["RE","REU"],"\u{1F1F7}\u{1F1FA}":["RU","RUS"],"\u{1F1F8}\u{1F1E6}":["SA","SAU"],"\u{1F1F8}\u{1F1EA}":["SE","SWE"],"\u{1F1F8}\u{1F1EC}":["SG","SGP"],"\u{1F1F8}\u{1F1EE}":["SI","SVN"],"\u{1F1F8}\u{1F1F0}":["SK","SVK"],"\u{1F1F9}\u{1F1ED}":["TH","THA"],"\u{1F1F9}\u{1F1F3}":["TN","TUN"],"\u{1F1F9}\u{1F1F7}":["TR","TUR"],"\u{1F1F9}\u{1F1FC}":["TW","TWN","CHT","HINET","ROC"],"\u{1F1FA}\u{1F1E6}":["UA","UKR"],"\u{1F1FA}\u{1F1F8}":["US","USA","LAX","SFO"],"\u{1F1FA}\u{1F1FE}":["UY","URY"],"\u{1F1FB}\u{1F1EA}":["VE","VEN"],"\u{1F1FB}\u{1F1F3}":["VN","VNM"],"\u{1F1FF}\u{1F1E6}":["ZA","ZAF"],"\u{1F1E8}\u{1F1F3}":["CN","CHN","BACK"]};function hu(u){var F;let t=((F=u.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/))==null?void 0:F[0])||"";for(const e of Object.keys(B))if(B[e].some(i=>RegExp(`${i}`,"i").test(u)))return t=e;for(const e of Object.keys(S))if(S[e].some(i=>RegExp(`(^|[^a-zA-Z:])${i}([^a-zA-Z:]|$)`).test(u)&&!/(\d+)\s*([MG]B)/.test(u)))return t=e;return t}function gu(u){return/^(\uD83C[\uDDE6-\uDDFF]){2}$/.test(u)}function mu(u){return/^[A-Z]{2}$/.test(u)}function Bu(u){return u.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g,"").trim()}var v=Math.pow,p=(u,F,t)=>new Promise((e,n)=>{var i=o=>{try{l(t.next(o))}catch(c){n(c)}},C=o=>{try{l(t.throw(o))}catch(c){n(c)}},l=o=>o.done?e(o.value):Promise.resolve(o.value).then(i,C);l((t=t.apply(u,F)).next())});const d=null,Su={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"],vpsmmo:["Vpsmmo Technology Company Limited","1mcloud Technology Company Limited","AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],litespeed:["LITESPEED-COM","Litespeed Technology Company Limited","AS140810 Megacore Technology Company Limited"],m247:["M247 Europe SRL","3NT SOLUTIONS LLP","IROKO Networks Corporation","AS9009 M247 Europe SRL"]},Iu={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function M(u){return p(this,null,function*(){let F=u;if(b(u)){const t=DNS_CACHE.get(u);if(t)F=t;else{const e=yield w(u);F=e,e&&DNS_CACHE.set(u,e)}}return F})}function Nu(u){return p(this,null,function*(){const F=yield M(u);let t="";const e=COUNTRY_CACHE.get(F);if(e)t=getFlag(e);else{const n=yield V(F);t=getFlag(n),t&&COUNTRY_CACHE.set(F,n)}return t})}function w(u){return p(this,null,function*(){const F=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(u)}&type=A`,t={Accept:"application/dns-json"};try{const e=yield d.http.get({url:F,headers:t}),n=JSON.parse(e.body);if(n.Status!==0)throw new Error(`HTTP error! status: ${n.Status}`);return n.Answer?n.Answer.map(i=>`${i.data}`)[0]:""}catch(e){return""}})}function Ru(u){return p(this,null,function*(){return yield d.http.get(`https://dns.google/resolve?name=${u}`).then(t=>{const e=JSON.parse(t.body);if(e.Status===0){const n=e.Answer.find(i=>i.type===1);return n?n.data:""}return""})})}function V(u){return p(this,null,function*(){return yield d.http.get(`http://ip-api.com/json/${u}?fields=country`).then(t=>JSON.parse(t.body).country||"")})}function Ou(u){return p(this,null,function*(){return yield d.http.get(`http://ip-api.com/json/${u}?fields=region,regionName`).then(t=>{const e=JSON.parse(t.body);return e.regionName&&e.region?`${e.regionName} (${e.region})`:""})})}function Tu(u){return p(this,null,function*(){return yield d.http.get(`http://ip-api.com/json/${u}?fields=isp`).then(t=>JSON.parse(t.body).isp||"")})}function yu(u){return p(this,null,function*(){return yield d.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(u)}).then(t=>JSON.parse(t.body).map(n=>n.isp))})}function Pu(u){return p(this,null,function*(){return yield d.http.get(`http://ip-api.com/json/${u}?fields=isp,org`).then(t=>{const e=JSON.parse(t.body);return[e.isp||"",e.org||""].join(",")})})}function _u(u,F){let t,e;const n=I(u);if((t=F.match(/^(.*?)\/(\d{1,2})$/))&&(e=I(t[1]))>=0){const i=v(2,32-parseInt(t[2]));return n>=e&&n<=e+i-1}return!1}function I(u){let F;if(F=u.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let t=0,e=1;for(let n=4;n>=1;n-=1)t+=e*parseInt(F[n]),e*=256;return t}return-1}function b(u){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(u)}function Lu(u){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(u)}function vu(u,F){const t=u.split("."),e=F.split(".");if(t.length<3||e.length<3)return!1;for(let n=0;n<3;n++)if(t[n]!==e[n])return!1;return!0}function Mu(u){const F=u.split(".");return F[F.length-1]}var H=Math.pow,E=(u,F,t)=>new Promise((e,n)=>{var i=o=>{try{l(t.next(o))}catch(c){n(c)}},C=o=>{try{l(t.throw(o))}catch(c){n(c)}},l=o=>o.done?e(o.value):Promise.resolve(o.value).then(i,C);l((t=t.apply(u,F)).next())});function wu(u,F){for(const t of u)N(t,F)}function N(u,F){(u.type==="vmess"||u.type==="vless"||u.type==="trojan")&&(u.network==="ws"&&(u["ws-opts"]=u["ws-opts"]||{},u["ws-opts"].headers=u["ws-opts"].headers||{},u["ws-opts"].headers.Host=F),u.network==="grpc"&&(u["grpc-opts"]=u["grpc-opts"]||{},u["grpc-opts"]["grpc-service-name"]=u["grpc-opts"]["grpc-service-name"]||"",u.servername=F),u.network==="tcp"&&(u.servername=F),u.sni=F),a(u["skip-cert-verify"])||(u["skip-cert-verify"]=!0)}function Vu(u){const F=[];return isRealValue(u.regex)&&F.push(G),isRealValue(u.ports)&&F.push(K),isRealValue(u.ips)&&F.push(U),isRealValue(u.isps)&&F.push(Y),isRealValue(u.regions)&&F.push(k),isRealValue(u.countries)&&F.push($),isRealValue(u.subs)&&F.push(j),isRealValue(u.tags)&&F.push(J),isRealValue(u.types)&&F.push(Z),F}function bu(u,F,t){return E(this,null,function*(){return(yield Promise.all(u.map(n=>n(F,t)))).every(n=>n)})}function G(u,F){return parseRegex(u.regex).test(F.name)}function K(u,F){return u.ports.some(t=>{if(isInteger(t))return t===F.port;const e=/^(\d+)\.\.(\d+)$/,n=t.match(e);if(isString(t)&&n){const i=parseInt(n[1],10),C=parseInt(n[2],10);if(i<C)return F.port>=i&&F.port<=C}return!1})}function U(u,F){return E(this,null,function*(){return(yield Promise.all(u.ips.map(e=>uu(F.server,e)))).some(e=>e)})}function Y(u,F){return E(this,null,function*(){return(yield Promise.all(u.isps.map(e=>Q(F.server,e)))).some(e=>e)})}function k(u,F){return E(this,null,function*(){return(yield Promise.all(u.regions.map(e=>q(F.server,e)))).some(e=>e)})}function $(u,F){return E(this,null,function*(){return(yield Promise.all(u.countries.map(e=>X(F,e)))).some(e=>e)})}function j(u,F){return E(this,null,function*(){return(yield Promise.all(u.subs.map(e=>W(F,e)))).some(e=>e)})}function J(u,F){return E(this,null,function*(){return(yield Promise.all(u.tags.map(e=>x(F,e)))).some(e=>e)})}function Z(u,F){return E(this,null,function*(){return(yield Promise.all(u.types.map(e=>z(F,e)))).some(e=>e)})}function z(u,F){return E(this,null,function*(){return u.type.toLowerCase()===F.toLowerCase()})}function x(u,F){return E(this,null,function*(){return u.tags&&u.tags.some(t=>RegExp(`${t}`,"i").test(F))})}function W(u,F){return E(this,null,function*(){return u.subName===F})}function X(u,F){return E(this,null,function*(){return isFlagEmoji(F)?u.countryFlag===F:isFlagISO(F)?u.countryCode===F:!1})}function q(u,F){return E(this,null,function*(){const t=yield resolveDomainIfNot(u);try{let e="";const n=REGION_CACHE.get(t);n?e=n:(e=yield getRegionFromIp(t),e&&REGION_CACHE.set(t,e));const i=parseNameAndCode(e);if(i){const{name:C,code:l}=i,o=REGION[F.toLowerCase()];if(isRealValue(o)&&(o.some(c=>RegExp(`${c}`,"i").test(l))||o.some(c=>RegExp(`${c}`,"i").test(C))))return!0}}catch(e){return!1}return!1})}function Q(u,F){return E(this,null,function*(){const t=yield resolveDomainIfNot(u);let e="";const n=ISP_CACHE.get(t);n?e=n:(e=yield getISPAndOrgFromIp(t),e&&ISP_CACHE.set(t,e));const i=ISP[F],C=e.split(",");for(const l of C)if(l&&i.some(o=>RegExp(`${o}`,"i").test(l)))return!0;return!1})}function uu(u,F){return E(this,null,function*(){const t=yield resolveDomainIfNot(u);if(!isValidIpAddress(t))return!1;if(F.indexOf("/")<0)return!!(t===F||areFirstThreePartsEqual(t,F)&&getLastPartOfIP(F)==="*");let e,n;const i=R(t);if((e=F.match(/^(.*?)\/(\d{1,2})$/))&&(n=R(e[1]))>=0){const C=H(2,32-parseInt(e[2]));return i>=n&&i<=n+C-1}return!1})}function R(u){let F;if(F=u.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let t=0,e=1;for(let n=4;n>=1;n-=1)t+=e*parseInt(F[n]),e*=256;return t}return-1}function Fu(u=[]){const{sni:F}=$arguments;return u.map(t=>(N(t,F),t))}s().operator=Fu})()})();})();
