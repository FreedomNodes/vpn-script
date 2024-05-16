/*!
 substore-tools - version: 1.7.0
 Build fullhash:e8b3c5b575f2b7c3ad42, chunkhash:989af1f272d68153811b (2024-05-16 22:12:31)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var W={3183:(D,f,l)=>{var c;typeof window!="undefined"?c=window:typeof l.g!="undefined"?c=l.g:typeof self!="undefined"?c=self:c={},D.exports=c},8475:(D,f,l)=>{l.d(f,{A:()=>C});const c=$substore;class h{constructor(s,p){this.key=s,this.expires=p;const a=c.read(s);a?this.resourceCache=JSON.parse(a):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let s=!1;const p=new Date().getTime();Object.keys(this.resourceCache).forEach(a=>{const A=this.resourceCache[a];(!A.time||p-A.time>this.expires)&&(delete this.resourceCache[a],c.delete(`#${a}`),s=!0)}),s&&this._persist()}revokeIds(s){let p=!1;for(const a of s)delete this.resourceCache[a],p=!0;p&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){c.write(JSON.stringify(this.resourceCache),this.key)}get(s){const p=this.resourceCache[s]&&this.resourceCache[s].time;return p&&new Date().getTime()-p<=this.expires?this.resourceCache[s].data:null}set(s,p){this.resourceCache[s]={time:new Date().getTime(),data:p},this._persist()}}const C=h},423:(D,f,l)=>{l.d(f,{ru:()=>h});var c=(s,p,a)=>new Promise((A,S)=>{var O=I=>{try{T(a.next(I))}catch(L){S(L)}},R=I=>{try{T(a.throw(I))}catch(L){S(L)}},T=I=>I.done?A(I.value):Promise.resolve(I.value).then(O,R);T((a=a.apply(s,p)).next())});function h(){return c(this,null,function*(){const s=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(s)})}function C(){return c(this,null,function*(){const s=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(s)})}function y(s){return c(this,null,function*(){const p=normalizeString(s),a=yield C();let A="";for(const S in a)if(containsIgnoreCase(p,normalizeString(S))){A=S;break}return a[A]})}},9468:(D,f,l)=>{l.d(f,{Mn:()=>A,dT:()=>S,i5:()=>T,v9:()=>O});const c="schemaVersion",h="settings",C="subs",y="collections",s="files",p="modules",a="artifacts",A="#sub-store-cached-dns",S="#sub-store-cached-isp",O="#sub-store-cached-region",R="#sub-store-cached-country",T=7*24*60*60*1e3},8599:(D,f,l)=>{l.d(f,{fs:()=>y,ik:()=>s});const c={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["\u6D41\u91CF","\u65F6\u95F4","\u8FC7\u671F","Bandwidth","Expire"],"\u{1F1F8}\u{1F1F1}":["\u5E94\u6025","\u6D4B\u8BD5\u8282\u70B9"],"\u{1F1E6}\u{1F1E9}":["Andorra","\u5B89\u9053\u5C14"],"\u{1F1E6}\u{1F1EA}":["United Arab Emirates","\u963F\u8054\u914B","\u8FEA\u62DC"],"\u{1F1E6}\u{1F1EB}":["Afghanistan","\u963F\u5BCC\u6C57"],"\u{1F1E6}\u{1F1F1}":["Albania","\u963F\u5C14\u5DF4\u5C3C\u4E9A","\u963F\u723E\u5DF4\u5C3C\u4E9E"],"\u{1F1E6}\u{1F1F2}":["Armenia","\u4E9A\u7F8E\u5C3C\u4E9A"],"\u{1F1E6}\u{1F1F7}":["Argentina","\u963F\u6839\u5EF7"],"\u{1F1E6}\u{1F1F9}":["Austria","\xDAc","\u5965\u5730\u5229","\u5967\u5730\u5229","\u7EF4\u4E5F\u7EB3"],"\u{1F1E6}\u{1F1FA}":["Australia","\u6FB3\u5927\u5229\u4E9A","\u6FB3\u6D32","\u58A8\u5C14\u672C","\u6089\u5C3C","\u571F\u6FB3","\u4EAC\u6FB3","\u5EE3\u6FB3","\u6EEC\u6FB3","\u6CAA\u6FB3","\u5E7F\u6FB3","Sydney"],"\u{1F1E6}\u{1F1FF}":["Azerbaijan","\u963F\u585E\u62DC\u7586"],"\u{1F1E7}\u{1F1E6}":["Bosnia and Herzegovina","\u6CE2\u9ED1\u5171\u548C\u56FD","\u6CE2\u9ED1"],"\u{1F1E7}\u{1F1E9}":["Bangladesh","\u5B5F\u52A0\u62C9\u56FD","\u5B5F\u52A0\u62C9"],"\u{1F1E7}\u{1F1EA}":["Belgium","\u6BD4\u5229\u65F6","\u6BD4\u5229\u6642"],"\u{1F1E7}\u{1F1EC}":["Bulgaria","\u4FDD\u52A0\u5229\u4E9A","\u4FDD\u52A0\u5229\u4E9E"],"\u{1F1E7}\u{1F1ED}":["Bahrain","\u5DF4\u6797"],"\u{1F1E7}\u{1F1F7}":["Brazil","\u5DF4\u897F","\u5723\u4FDD\u7F57"],"\u{1F1E7}\u{1F1FE}":["Belarus","\u767D\u4FC4\u7F57\u65AF","\u767D\u4FC4"],"\u{1F1E8}\u{1F1E6}":["Canada","\u52A0\u62FF\u5927","\u8499\u7279\u5229\u5C14","\u6E29\u54E5\u534E","\u6953\u8449","\u67AB\u53F6","\u6ED1\u94C1\u5362","\u591A\u4F26\u591A","Waterloo"],"\u{1F1E8}\u{1F1ED}":["Switzerland","\u745E\u58EB","\u82CF\u9ECE\u4E16","Zurich"],"\u{1F1E8}\u{1F1F1}":["Chile","\u667A\u5229"],"\u{1F1E8}\u{1F1F4}":["Colombia","\u54E5\u4F26\u6BD4\u4E9A"],"\u{1F1E8}\u{1F1F7}":["Costa Rica","\u54E5\u65AF\u8FBE\u9ECE\u52A0"],"\u{1F1E8}\u{1F1FE}":["Cyprus","\u585E\u6D66\u8DEF\u65AF"],"\u{1F1E8}\u{1F1FF}":["Czechia","\u6377\u514B"],"\u{1F1E9}\u{1F1EA}":["German","\u5FB7\u56FD","\u5FB7\u570B","\u4EAC\u5FB7","\u6EEC\u5FB7","\u5EE3\u5FB7","\u6CAA\u5FB7","\u5E7F\u5FB7","\u6CD5\u5170\u514B\u798F","Frankfurt"],"\u{1F1E9}\u{1F1F0}":["Denmark","\u4E39\u9EA6","\u4E39\u9EA5"],"\u{1F1EA}\u{1F1E8}":["Ecuador","\u5384\u74DC\u591A\u5C14"],"\u{1F1EA}\u{1F1EA}":["Estonia","\u7231\u6C99\u5C3C\u4E9A"],"\u{1F1EA}\u{1F1EC}":["Egypt","\u57C3\u53CA"],"\u{1F1EA}\u{1F1F8}":["Spain","\u897F\u73ED\u7259"],"\u{1F1EA}\u{1F1FA}":["European Union","\u6B27\u76DF","\u6B27\u7F57\u5DF4"],"\u{1F1EB}\u{1F1EE}":["Finland","\u82AC\u5170","\u82AC\u862D","\u8D6B\u5C14\u8F9B\u57FA"],"\u{1F1EB}\u{1F1F7}":["France","\u6CD5\u56FD","\u6CD5\u570B","\u5DF4\u9ECE"],"\u{1F1EC}\u{1F1E7}":["Great Britain","\u82F1\u56FD","England","United Kingdom","\u4F26\u6566","\u82F1","London"],"\u{1F1EC}\u{1F1EA}":["Georgia","\u683C\u9C81\u5409\u4E9A","\u683C\u9B6F\u5409\u4E9E"],"\u{1F1EC}\u{1F1F7}":["Greece","\u5E0C\u814A","\u5E0C\u81D8"],"\u{1F1ED}\u{1F1F0}":["Hong Kong","Hongkong","\u9999\u6E2F","HongKong","HONG KONG","\u6DF1\u6E2F","\u6CAA\u6E2F","\u547C\u6E2F","\u7A57\u6E2F","\u4EAC\u6E2F","\u6E2F"],"\u{1F1ED}\u{1F1F7}":["Croatia","\u514B\u7F57\u5730\u4E9A","\u514B\u7F85\u5730\u4E9E"],"\u{1F1ED}\u{1F1FA}":["Hungary","\u5308\u7259\u5229"],"\u{1F1EF}\u{1F1F4}":["Jordan","\u7EA6\u65E6"],"\u{1F1EF}\u{1F1F5}":["Japan","\u65E5\u672C","\u4E1C\u4EAC","\u5927\u962A","\u57FC\u7389","\u6CAA\u65E5","\u7A57\u65E5","\u5DDD\u65E5","\u4E2D\u65E5","\u6CC9\u65E5","\u676D\u65E5","\u6DF1\u65E5","\u8FBD\u65E5","\u5E7F\u65E5","\u5927\u5742","Osaka","Tokyo"],"\u{1F1F0}\u{1F1EA}":["Kenya","\u80AF\u5C3C\u4E9A"],"\u{1F1F0}\u{1F1EC}":["Kyrgyzstan","\u5409\u5C14\u5409\u65AF\u65AF\u5766"],"\u{1F1F0}\u{1F1ED}":["Cambodia","\u67EC\u57D4\u5BE8"],"\u{1F1F0}\u{1F1F5}":["North Korea","\u671D\u9C9C"],"\u{1F1F0}\u{1F1F7}":["Korea","\u97E9\u56FD","\u97D3\u570B","\u97E9","\u97D3","\u9996\u5C14","\u6625\u5DDD","Chuncheon","Seoul"],"\u{1F1F0}\u{1F1FF}":["Kazakhstan","\u54C8\u8428\u514B\u65AF\u5766","\u54C8\u8428\u514B"],"\u{1F1EE}\u{1F1E9}":["Indonesia","\u5370\u5C3C","\u5370\u5EA6\u5C3C\u897F\u4E9A","\u96C5\u52A0\u8FBE"],"\u{1F1EE}\u{1F1EA}":["Ireland","\u7231\u5C14\u5170","\u611B\u723E\u862D","\u90FD\u67CF\u6797"],"\u{1F1EE}\u{1F1F1}":["Israel","\u4EE5\u8272\u5217"],"\u{1F1EE}\u{1F1F2}":["Isle of Man","\u9A6C\u6069\u5C9B","\u99AC\u6069\u5CF6"],"\u{1F1EE}\u{1F1F3}":["India","\u5370\u5EA6","\u5B5F\u4E70","MFumbai"],"\u{1F1EE}\u{1F1F7}":["Iran","\u4F0A\u6717"],"\u{1F1EE}\u{1F1F8}":["Iceland","\u51B0\u5C9B","\u51B0\u5CF6"],"\u{1F1EE}\u{1F1F9}":["Italy","\u610F\u5927\u5229","\u7FA9\u5927\u5229","\u7C73\u5170","Nachash"],"\u{1F1F1}\u{1F1F9}":["Lithuania","\u7ACB\u9676\u5B9B"],"\u{1F1F1}\u{1F1FA}":["Luxembourg","\u5362\u68EE\u5821"],"\u{1F1F1}\u{1F1FB}":["Latvia","\u62C9\u8131\u7EF4\u4E9A","Latvija"],"\u{1F1F2}\u{1F1E6}":["Morocco","\u6469\u6D1B\u54E5"],"\u{1F1F2}\u{1F1E9}":["Moldova","\u6469\u5C14\u591A\u74E6","\u6469\u723E\u591A\u74E6"],"\u{1F1F3}\u{1F1EC}":["Nigeria","\u5C3C\u65E5\u5229\u4E9A","\u5C3C\u65E5\u5229\u4E9E"],"\u{1F1F2}\u{1F1F0}":["Macedonia","\u9A6C\u5176\u987F","\u99AC\u5176\u9813"],"\u{1F1F2}\u{1F1F3}":["Mongolia","\u8499\u53E4"],"\u{1F1F2}\u{1F1F4}":["Macao","\u6FB3\u95E8","\u6FB3\u9580","CTM"],"\u{1F1F2}\u{1F1F9}":["Malta","\u9A6C\u8033\u4ED6"],"\u{1F1F2}\u{1F1FD}":["Mexico","\u58A8\u897F\u54E5"],"\u{1F1F2}\u{1F1FE}":["Malaysia","\u9A6C\u6765","\u99AC\u4F86","\u5409\u9686\u5761","\u5927\u99AC"],"\u{1F1F3}\u{1F1F1}":["Netherlands","\u8377\u5170","\u8377\u862D","\u5C3C\u5FB7\u862D","\u963F\u59C6\u65AF\u7279\u4E39"],"\u{1F1F3}\u{1F1F4}":["Norway","\u632A\u5A01"],"\u{1F1F3}\u{1F1F5}":["Nepal","\u5C3C\u6CCA\u5C14"],"\u{1F1F3}\u{1F1FF}":["New Zealand","\u65B0\u897F\u5170","\u65B0\u897F\u862D"],"\u{1F1F5}\u{1F1E6}":["Panama","\u5DF4\u62FF\u9A6C"],"\u{1F1F5}\u{1F1EA}":["Peru","\u79D8\u9C81","\u7955\u9B6F"],"\u{1F1F5}\u{1F1ED}":["Philippines","\u83F2\u5F8B\u5BBE","\u83F2\u5F8B\u8CD3"],"\u{1F1F5}\u{1F1F0}":["Pakistan","\u5DF4\u57FA\u65AF\u5766"],"\u{1F1F5}\u{1F1F1}":["Poland","\u6CE2\u5170","\u6CE2\u862D"],"\u{1F1F5}\u{1F1F7}":["Puerto Rico","\u6CE2\u591A\u9ECE\u5404"],"\u{1F1F5}\u{1F1F9}":["Portugal","\u8461\u8404\u7259"],"\u{1F1F5}\u{1F1FE}":["Paraguay","\u5DF4\u62C9\u572D"],"\u{1F1F7}\u{1F1F4}":["Romania","\u7F57\u9A6C\u5C3C\u4E9A"],"\u{1F1F7}\u{1F1F8}":["Serbia","\u585E\u5C14\u7EF4\u4E9A"],"\u{1F1F7}\u{1F1EA}":["R\xE9union","\u7559\u5C3C\u6C6A","\u6CD5\u5C5E\u7559\u5C3C\u6C6A"],"\u{1F1F7}\u{1F1FA}":["Russia","\u4FC4\u7F57\u65AF","\u4FC4\u56FD","\u4FC4\u7F85\u65AF","\u4F2F\u529B","\u83AB\u65AF\u79D1","\u5723\u5F7C\u5F97\u5821","\u897F\u4F2F\u5229\u4E9A","\u4EAC\u4FC4","\u676D\u4FC4","\u5EE3\u4FC4","\u6EEC\u4FC4","\u5E7F\u4FC4","\u6CAA\u4FC4","Moscow"],"\u{1F1F8}\u{1F1E6}":["Saudi","\u6C99\u7279\u963F\u62C9\u4F2F","\u6C99\u7279"],"\u{1F1F8}\u{1F1EA}":["Sweden","\u745E\u5178"],"\u{1F1F8}\u{1F1EC}":["Singapore","Singapo","\u65B0\u52A0\u5761","\u72EE\u57CE","\u6CAA\u65B0","\u4EAC\u65B0","\u4E2D\u65B0","\u6CC9\u65B0","\u7A57\u65B0","\u6DF1\u65B0","\u676D\u65B0","\u5E7F\u65B0","\u5EE3\u65B0","\u6EEC\u65B0"],"\u{1F1F8}\u{1F1EE}":["Slovenia","\u65AF\u6D1B\u6587\u5C3C\u4E9A"],"\u{1F1F8}\u{1F1F0}":["Slovakia","\u65AF\u6D1B\u4F10\u514B"],"\u{1F1F9}\u{1F1ED}":["Thailand","\u6CF0\u56FD","\u6CF0\u570B","\u66FC\u8C37"],"\u{1F1F9}\u{1F1F3}":["Tunisia","\u7A81\u5C3C\u65AF"],"\u{1F1F9}\u{1F1F7}":["Turkey","T\xFCrkiye","\u571F\u8033\u5176","\u4F0A\u65AF\u5766\u5E03\u5C14"],"\u{1F1F9}\u{1F1FC}":["Taiwan","\u53F0\u6E7E","\u81FA\u7063","\u53F0\u7063","\u4E2D\u83EF\u6C11\u570B","\u4E2D\u534E\u6C11\u56FD","\u53F0\u5317","\u53F0\u4E2D","\u65B0\u5317","\u5F70\u5316","\u53F0","\u81FA","Taipei"],"\u{1F1FA}\u{1F1E6}":["Ukraine","\u4E4C\u514B\u5170","\u70CF\u514B\u862D"],"\u{1F1FA}\u{1F1F8}":["United States","\u7F8E\u56FD","America","\u7F8E","\u4EAC\u7F8E","\u6CE2\u7279\u5170","\u8FBE\u62C9\u65AF","\u4FC4\u52D2\u5188","\u51E4\u51F0\u57CE","\u8D39\u5229\u8499","\u7845\u8C37","\u77FD\u8C37","\u62C9\u65AF\u7EF4\u52A0\u65AF","\u6D1B\u6749\u77F6","\u5723\u4F55\u585E","\u5723\u514B\u62C9\u62C9","\u897F\u96C5\u56FE","\u829D\u52A0\u54E5","\u6CAA\u7F8E","\u54E5\u4F26\u5E03","\u7EBD\u7EA6","Los Angeles","San Jose","Sillicon Valley","Michigan"],"\u{1F1FA}\u{1F1FE}":["Uruguay","\u4E4C\u62C9\u572D"],"\u{1F1FB}\u{1F1EA}":["Venezuela","\u59D4\u5185\u745E\u62C9"],"\u{1F1FB}\u{1F1F3}":["Viet Nam","Vietnam","Vi\u1EC7t Nam","\u8D8A\u5357","\u80E1\u5FD7\u660E"],"\u{1F1FF}\u{1F1E6}":["South Africa","\u5357\u975E"],"\u{1F1E8}\u{1F1F3}":["China","\u4E2D\u56FD","\u4E2D\u570B","\u56DE\u56FD","\u56DE\u570B","\u56FD\u5185","\u570B\u5167","\u534E\u4E1C","\u534E\u897F","\u534E\u5357","\u534E\u5317","\u534E\u4E2D","\u6C5F\u82CF","\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733","\u676D\u5DDE","\u5F90\u5DDE","\u9752\u5C9B","\u5B81\u6CE2","\u9547\u6C5F"]},h={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["EXP","BAND"],"\u{1F1F8}\u{1F1F1}":["TEST","SOS"],"\u{1F1E6}\u{1F1E9}":["AD","AND"],"\u{1F1E6}\u{1F1EA}":["AE","ARE"],"\u{1F1E6}\u{1F1EB}":["AF","AFG"],"\u{1F1E6}\u{1F1F1}":["AL","ALB"],"\u{1F1E6}\u{1F1F2}":["AM","ARM"],"\u{1F1E6}\u{1F1F7}":["AR","ARG"],"\u{1F1E6}\u{1F1F9}":["AT","AUT"],"\u{1F1E6}\u{1F1FA}":["AU","AUS"],"\u{1F1E6}\u{1F1FF}":["AZ","AZE"],"\u{1F1E7}\u{1F1E6}":["BA","BIH"],"\u{1F1E7}\u{1F1E9}":["BD","BGD"],"\u{1F1E7}\u{1F1EA}":["BE","BEL"],"\u{1F1E7}\u{1F1EC}":["BG","BGR"],"\u{1F1E7}\u{1F1ED}":["BH","BHR"],"\u{1F1E7}\u{1F1F7}":["BR","BRA"],"\u{1F1E7}\u{1F1FE}":["BY","BLR"],"\u{1F1E8}\u{1F1E6}":["CA","CAN"],"\u{1F1E8}\u{1F1ED}":["CH","CHE"],"\u{1F1E8}\u{1F1F1}":["CL","CHL"],"\u{1F1E8}\u{1F1F4}":["CO","COL"],"\u{1F1E8}\u{1F1F7}":["CR","CRI"],"\u{1F1E8}\u{1F1FE}":["CY","CYP"],"\u{1F1E8}\u{1F1FF}":["CZ","CZE"],"\u{1F1E9}\u{1F1EA}":["DE","DEU"],"\u{1F1E9}\u{1F1F0}":["DK","DNK"],"\u{1F1EA}\u{1F1E8}":["EC","ECU"],"\u{1F1EA}\u{1F1EA}":["EE","EST"],"\u{1F1EA}\u{1F1EC}":["EG","EGY"],"\u{1F1EA}\u{1F1F8}":["ES","ESP"],"\u{1F1EA}\u{1F1FA}":["EU"],"\u{1F1EB}\u{1F1EE}":["FI","FIN"],"\u{1F1EB}\u{1F1F7}":["FR","FRA"],"\u{1F1EC}\u{1F1E7}":["GB","GBR","UK"],"\u{1F1EC}\u{1F1EA}":["GE","GEO"],"\u{1F1EC}\u{1F1F7}":["GR","GRC"],"\u{1F1ED}\u{1F1F0}":["HK","HKG","HKT","HKBN","HGC","WTT","CMI"],"\u{1F1ED}\u{1F1F7}":["HR","HRV"],"\u{1F1ED}\u{1F1FA}":["HU","HUN"],"\u{1F1EF}\u{1F1F4}":["JO","JOR"],"\u{1F1EF}\u{1F1F5}":["JP","JPN"],"\u{1F1F0}\u{1F1EA}":["KE","KEN"],"\u{1F1F0}\u{1F1EC}":["KG","KGZ"],"\u{1F1F0}\u{1F1ED}":["KH","KGZ"],"\u{1F1F0}\u{1F1F5}":["KP","PRK"],"\u{1F1F0}\u{1F1F7}":["KR","KOR"],"\u{1F1F0}\u{1F1FF}":["KZ","KAZ"],"\u{1F1EE}\u{1F1E9}":["ID","IDN"],"\u{1F1EE}\u{1F1EA}":["IE","IRL"],"\u{1F1EE}\u{1F1F1}":["IL","ISR"],"\u{1F1EE}\u{1F1F2}":["IM","IMN"],"\u{1F1EE}\u{1F1F3}":["IN","IND"],"\u{1F1EE}\u{1F1F7}":["IR","IRN"],"\u{1F1EE}\u{1F1F8}":["IS","ISL"],"\u{1F1EE}\u{1F1F9}":["IT","ITA"],"\u{1F1F1}\u{1F1F9}":["LT","LTU"],"\u{1F1F1}\u{1F1FA}":["LU","LUX"],"\u{1F1F1}\u{1F1FB}":["LV","LVA"],"\u{1F1F2}\u{1F1E6}":["MA","MAR"],"\u{1F1F2}\u{1F1E9}":["MD","MDA"],"\u{1F1F3}\u{1F1EC}":["NG","NGA"],"\u{1F1F2}\u{1F1F0}":["MK","MKD"],"\u{1F1F2}\u{1F1F3}":["MN","MNG"],"\u{1F1F2}\u{1F1F4}":["MO","MAC","CTM"],"\u{1F1F2}\u{1F1F9}":["MT","MLT"],"\u{1F1F2}\u{1F1FD}":["MX","MEX"],"\u{1F1F2}\u{1F1FE}":["MY","MYS"],"\u{1F1F3}\u{1F1F1}":["NL","NLD"],"\u{1F1F3}\u{1F1F4}":["NO","NOR"],"\u{1F1F3}\u{1F1F5}":["NP","NPL"],"\u{1F1F3}\u{1F1FF}":["NZ","NZL"],"\u{1F1F5}\u{1F1E6}":["PA","PAN"],"\u{1F1F5}\u{1F1EA}":["PE","PER"],"\u{1F1F5}\u{1F1ED}":["PH","PHL"],"\u{1F1F5}\u{1F1F0}":["PK","PAK"],"\u{1F1F5}\u{1F1F1}":["PL","POL"],"\u{1F1F5}\u{1F1F7}":["PR","PRI"],"\u{1F1F5}\u{1F1F9}":["PT","PRT"],"\u{1F1F5}\u{1F1FE}":["PY","PRY"],"\u{1F1F7}\u{1F1F4}":["RO","ROU"],"\u{1F1F7}\u{1F1F8}":["RS","SRB"],"\u{1F1F7}\u{1F1EA}":["RE","REU"],"\u{1F1F7}\u{1F1FA}":["RU","RUS"],"\u{1F1F8}\u{1F1E6}":["SA","SAU"],"\u{1F1F8}\u{1F1EA}":["SE","SWE"],"\u{1F1F8}\u{1F1EC}":["SG","SGP"],"\u{1F1F8}\u{1F1EE}":["SI","SVN"],"\u{1F1F8}\u{1F1F0}":["SK","SVK"],"\u{1F1F9}\u{1F1ED}":["TH","THA"],"\u{1F1F9}\u{1F1F3}":["TN","TUN"],"\u{1F1F9}\u{1F1F7}":["TR","TUR"],"\u{1F1F9}\u{1F1FC}":["TW","TWN","CHT","HINET","ROC"],"\u{1F1FA}\u{1F1E6}":["UA","UKR"],"\u{1F1FA}\u{1F1F8}":["US","USA","LAX","SFO"],"\u{1F1FA}\u{1F1FE}":["UY","URY"],"\u{1F1FB}\u{1F1EA}":["VE","VEN"],"\u{1F1FB}\u{1F1F3}":["VN","VNM"],"\u{1F1FF}\u{1F1E6}":["ZA","ZAF"],"\u{1F1E8}\u{1F1F3}":["CN","CHN","BACK"]};function C(a){var A;let S=((A=a.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/))==null?void 0:A[0])||"";for(const O of Object.keys(c))if(c[O].some(T=>RegExp(`${T}`,"i").test(a)))return S=O;for(const O of Object.keys(h))if(h[O].some(T=>RegExp(`(^|[^a-zA-Z:])${T}([^a-zA-Z:]|$)`).test(a)&&!/(\d+)\s*([MG]B)/.test(a)))return S=O;return S}function y(a){return/^(\uD83C[\uDDE6-\uDDFF]){2}$/.test(a)}function s(a){return/^[A-Z]{2}$/.test(a)}function p(a){return a.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g,"").trim()}},1500:(D,f,l)=>{l.d(f,{B8:()=>U,Dq:()=>y,Mi:()=>S,S9:()=>R,Vo:()=>A,Zg:()=>s,l0:()=>p,qu:()=>a,sY:()=>I});var c=Math.pow,h=(F,n,o)=>new Promise((r,i)=>{var g=_=>{try{m(o.next(_))}catch(M){i(M)}},P=_=>{try{m(o.throw(_))}catch(M){i(M)}},m=_=>_.done?r(_.value):Promise.resolve(_.value).then(g,P);m((o=o.apply(F,n)).next())});const C=$substore,y={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"],vpsmmo:["Vpsmmo Technology Company Limited","1mcloud Technology Company Limited","AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],litespeed:["LITESPEED-COM","Litespeed Technology Company Limited","AS140810 Megacore Technology Company Limited"],m247:["M247 Europe SRL","3NT SOLUTIONS LLP","AS9009 M247 Europe SRL"]},s={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function p(F){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(F)}function a(F){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(F)}function A(F,n){const o=F.split("."),r=n.split(".");if(o.length<3||r.length<3)return!1;for(let i=0;i<3;i++)if(o[i]!==r[i])return!1;return!0}function S(F){const n=F.split(".");return n[n.length-1]}function O(F){return h(this,null,function*(){const n=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(F)}&type=A`,o={Accept:"application/dns-json"};try{const r=yield C.http.get({url:n,headers:o}),i=JSON.parse(r.body);if(i.Status!==0)throw new Error(`HTTP error! status: ${i.Status}`);return i.Answer?i.Answer.map(g=>`${g.data}`)[0]:""}catch(r){return""}})}function R(F){return h(this,null,function*(){return yield C.http.get(`https://dns.google/resolve?name=${F}`).then(o=>{const r=JSON.parse(o.body);if(r.Status===0){const i=r.Answer.find(g=>g.type===1);return i?i.data:""}return""})})}function T(F){return h(this,null,function*(){return yield C.http.get(`http://ip-api.com/json/${F}?fields=country`).then(o=>JSON.parse(o.body).country||"")})}function I(F){return h(this,null,function*(){return yield C.http.get(`http://ip-api.com/json/${F}?fields=region,regionName`).then(o=>{const r=JSON.parse(o.body);return r.regionName&&r.region?`${r.regionName} (${r.region})`:""})})}function L(F){return h(this,null,function*(){return yield C.http.get(`http://ip-api.com/json/${F}?fields=isp`).then(o=>JSON.parse(o.body).isp||"")})}function H(F){return h(this,null,function*(){return yield C.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(F)}).then(o=>JSON.parse(o.body).map(i=>i.isp))})}function U(F){return h(this,null,function*(){return yield C.http.get(`http://ip-api.com/json/${F}?fields=isp,org`).then(o=>{const r=JSON.parse(o.body);return[r.isp||"",r.org||""].join(",")})})}function Y(F,n){let o,r;const i=d(F);if((o=n.match(/^(.*?)\/(\d{1,2})$/))&&(r=d(o[1]))>=0){const g=c(2,32-parseInt(o[2]));return i>=r&&i<=r+g-1}return!1}function d(F){let n;if(n=F.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let o=0,r=1;for(let i=4;i>=1;i-=1)o+=r*parseInt(n[i]),r*=256;return o}return-1}},9085:(D,f,l)=>{l.d(f,{G:()=>c});function c(C){return C&&C!=="null"&&C!=="undefined"}function h(C,y){return C.reduce((s,p)=>{const a=p[y];return s[a]||(s[a]=[]),s[a].push(p),s},{})}},4173:(D,f,l)=>{l.d(f,{AH:()=>L,um:()=>H});var c=l(9085),h=l(1058),C=l(1500),y=l(8475),s=l(8599),p=l(9468),a=Math.pow,A=(u,e,E)=>new Promise((t,B)=>{var w=N=>{try{G(E.next(N))}catch(V){B(V)}},K=N=>{try{G(E.throw(N))}catch(V){B(V)}},G=N=>N.done?t(N.value):Promise.resolve(N.value).then(w,K);G((E=E.apply(u,e)).next())});const S=new y.A(p.Mn,p.i5),O=new y.A(p.dT,p.i5),R=new y.A(p.v9,p.i5);function T(u,e){for(const E of u)I(E,e)}function I(u,e){(u.type==="vmess"||u.type==="vless"||u.type==="trojan")&&(u.network==="ws"&&(u["ws-opts"]=u["ws-opts"]||{},u["ws-opts"].headers=u["ws-opts"].headers||{},u["ws-opts"].headers.Host=e),u.network==="grpc"&&(u["grpc-opts"]=u["grpc-opts"]||{},u["grpc-opts"]["grpc-service-name"]=u["grpc-opts"]["grpc-service-name"]||"",u.servername=e),u.network==="tcp"&&(u.servername=e),u.sni=e),isRealValue(u["skip-cert-verify"])||(u["skip-cert-verify"]=!0)}function L(u){const e=[];return(0,c.G)(u.regex)&&e.push(U),(0,c.G)(u.ports)&&e.push(Y),(0,c.G)(u.ips)&&e.push(d),(0,c.G)(u.isps)&&e.push(F),(0,c.G)(u.regions)&&e.push(n),(0,c.G)(u.countries)&&e.push(o),(0,c.G)(u.subs)&&e.push(r),(0,c.G)(u.tags)&&e.push(i),(0,c.G)(u.types)&&e.push(g),e}function H(u,e,E){return A(this,null,function*(){return(yield Promise.all(u.map(B=>B(e,E)))).every(B=>B)})}function U(u,e){return(0,h.r)(u.regex).test(e.name)}function Y(u,e){return u.ports.some(E=>E===e.port)}function d(u,e){return A(this,null,function*(){return(yield Promise.all(u.ips.map(t=>j(e.server,t)))).some(t=>t)})}function F(u,e){return A(this,null,function*(){return(yield Promise.all(u.isps.map(t=>x(e.server,t)))).some(t=>t)})}function n(u,e){return A(this,null,function*(){return(yield Promise.all(u.regions.map(t=>b(e.server,t)))).some(t=>t)})}function o(u,e){return A(this,null,function*(){return(yield Promise.all(u.countries.map(t=>M(e,t)))).some(t=>t)})}function r(u,e){return A(this,null,function*(){return(yield Promise.all(u.subs.map(t=>_(e,t)))).some(t=>t)})}function i(u,e){return A(this,null,function*(){return(yield Promise.all(u.tags.map(t=>m(e,t)))).some(t=>t)})}function g(u,e){return A(this,null,function*(){return(yield Promise.all(u.types.map(t=>P(e,t)))).some(t=>t)})}function P(u,e){return A(this,null,function*(){return u.types&&u.types.some(E=>RegExp(`${E}`,"i").test(e))})}function m(u,e){return A(this,null,function*(){return u.tags&&u.tags.some(E=>RegExp(`${E}`,"i").test(e))})}function _(u,e){return A(this,null,function*(){return u.subName===e})}function M(u,e){return A(this,null,function*(){return(0,s.fs)(e)?u.countryFlag===e:(0,s.ik)(e)?u.countryCode===e:!1})}function b(u,e){return A(this,null,function*(){const E=yield k(u);try{let t="";const B=R.get(E);B?t=B:(t=yield(0,C.sY)(E),t&&R.set(E,t));const w=(0,h.Z)(t);if(w){const{name:K,code:G}=w,N=C.Zg[e.toLowerCase()];if((0,c.G)(N)&&(N.some(V=>RegExp(`${V}`,"i").test(G))||N.some(V=>RegExp(`${V}`,"i").test(K))))return!0}}catch(t){return!1}return!1})}function x(u,e){return A(this,null,function*(){const E=yield k(u);let t="";const B=O.get(E);B?t=B:(t=yield(0,C.B8)(E),t&&O.set(E,t));const w=C.Dq[e],K=t.split(",");for(const G of K)if(G&&w.some(N=>RegExp(`${N}`,"i").test(G)))return!0;return!1})}function j(u,e){return A(this,null,function*(){const E=yield k(u);if(!(0,C.qu)(E))return!1;if(e.indexOf("/")<0)return!!(E===e||(0,C.Vo)(E,e)&&(0,C.Mi)(e)==="*");let t,B;const w=Z(E);if((t=e.match(/^(.*?)\/(\d{1,2})$/))&&(B=Z(t[1]))>=0){const K=a(2,32-parseInt(t[2]));return w>=B&&w<=B+K-1}return!1})}function k(u){return A(this,null,function*(){let e=u;if((0,C.l0)(u)){const E=S.get(u);if(E)e=E;else{const t=yield(0,C.S9)(u);e=t,t&&S.set(u,t)}}return e})}function Z(u){let e;if(e=u.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let E=0,t=1;for(let B=4;B>=1;B-=1)E+=t*parseInt(e[B]),t*=256;return E}return-1}},1058:(D,f,l)=>{l.d(f,{Z:()=>h,r:()=>c});function c(C){const y=C.lastIndexOf("/");return new RegExp(C.slice(1,y),C.slice(y+1))}function h(C){const y=/^([^\(]+) \(([^)]+)\)$/,s=C.match(y);return s?{name:s[1].trim(),code:s[2]}:null}}},$={};function v(D){var f=$[D];if(f!==void 0)return f.exports;var l=$[D]={exports:{}};return W[D](l,l.exports,v),l.exports}v.n=D=>{var f=D&&D.__esModule?()=>D.default:()=>D;return v.d(f,{a:f}),f},v.d=(D,f)=>{for(var l in f)v.o(f,l)&&!v.o(D,l)&&Object.defineProperty(D,l,{enumerable:!0,get:f[l]})},v.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(D){if(typeof window=="object")return window}}(),v.o=(D,f)=>Object.prototype.hasOwnProperty.call(D,f);var J={};(()=>{var D=v(3183),f=v.n(D),l=v(9085),c=v(423),h=v(4173),C=Object.defineProperty,y=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,S=(d,F)=>(F=Symbol[d])?F:Symbol.for("Symbol."+d),O=(d,F,n)=>F in d?C(d,F,{enumerable:!0,configurable:!0,writable:!0,value:n}):d[F]=n,R=(d,F)=>{for(var n in F||(F={}))a.call(F,n)&&O(d,n,F[n]);if(p)for(var n of p(F))A.call(F,n)&&O(d,n,F[n]);return d},T=(d,F)=>y(d,s(F)),I=(d,F,n)=>new Promise((o,r)=>{var i=m=>{try{P(n.next(m))}catch(_){r(_)}},g=m=>{try{P(n.throw(m))}catch(_){r(_)}},P=m=>m.done?o(m.value):Promise.resolve(m.value).then(i,g);P((n=n.apply(d,F)).next())}),L=(d,F,n)=>(F=d[S("asyncIterator")])?F.call(d):(d=d[S("iterator")](),F={},n=(o,r)=>(r=d[o])&&(F[o]=i=>new Promise((g,P,m)=>(i=r.call(d,i),m=i.done,Promise.resolve(i.value).then(_=>g({value:_,done:m}),P)))),n("next"),n("return"),F);function H(){return I(this,arguments,function*(d=[],F,n){const{type:o,mode:r}=$arguments;return/all/i.test(r)?yield U(d):yield Y(d,o)})}function U(d){return I(this,null,function*(){const F=[],n=yield(0,c.ru)();for(const P in n){const m=n[P];if(!(P==="default"||!(0,l.G)(m)))try{for(var o=L(d),r,i,g;r=!(i=yield o.next()).done;r=!1){const _=i.value,M=(0,h.AH)(m),b=T(R({},_),{filterType:P});if(M.length===0){F.push(b);continue}(yield(0,h.um)(M,m,b))&&F.push(b)}}catch(_){g=[_]}finally{try{r&&(i=o.return)&&(yield i.call(o))}finally{if(g)throw g[0]}}}return F})}function Y(d,F){return I(this,null,function*(){const n=[],o=yield(0,c.ru)(),r=(0,l.G)(F)?o[F]:o[d[0].collectionName];if(!(0,l.G)(r))return d;try{for(var i=L(d),g,P,m;g=!(P=yield i.next()).done;g=!1){const _=P.value,M=(0,h.AH)(r);if(M.length===0){n.push(_);continue}(yield(0,h.um)(M,r,_))&&n.push(_)}}catch(_){m=[_]}finally{try{g&&(P=i.return)&&(yield P.call(i))}finally{if(m)throw m[0]}}return n})}f().operator=H})()})();})();
