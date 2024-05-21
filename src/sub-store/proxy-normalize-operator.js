/*!
 substore-tools - version: 1.8.1
 Build fullhash:feba361bf42b62d06d90, chunkhash:406a1e96c33f04664603 (2024-05-21 11:19:37)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var k={3183:(D,d,s)=>{var r;typeof window!="undefined"?r=window:typeof s.g!="undefined"?r=s.g:typeof self!="undefined"?r=self:r={},D.exports=r},8475:(D,d,s)=>{s.d(d,{A:()=>f});const r=$substore;class c{constructor(t,l){this.key=t,this.expires=l;const F=r.read(t);F?this.resourceCache=JSON.parse(F):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let t=!1;const l=new Date().getTime();Object.keys(this.resourceCache).forEach(F=>{const a=this.resourceCache[F];(!a.time||l-a.time>this.expires)&&(delete this.resourceCache[F],r.delete(`#${F}`),t=!0)}),t&&this._persist()}revokeIds(t){let l=!1;for(const F of t)delete this.resourceCache[F],l=!0;l&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){r.write(JSON.stringify(this.resourceCache),this.key)}get(t){const l=this.resourceCache[t]&&this.resourceCache[t].time;return l&&new Date().getTime()-l<=this.expires?this.resourceCache[t].data:null}set(t,l){this.resourceCache[t]={time:new Date().getTime(),data:l},this._persist()}}const f=c},5254:(D,d,s)=>{s.d(d,{KK:()=>l,Kh:()=>t,SA:()=>_,Vs:()=>f});var r=s(8475),c=s(9468);const f=new r.A(c.Mn,c.i5),_=new r.A(c.Dh,c.i5),t=new r.A(c.dT,c.i5),l=new r.A(c.v9,c.i5)},423:(D,d,s)=>{s.d(d,{ru:()=>c});var r=(t,l,F)=>new Promise((a,g)=>{var B=N=>{try{S(F.next(N))}catch(w){g(w)}},y=N=>{try{S(F.throw(N))}catch(w){g(w)}},S=N=>N.done?a(N.value):Promise.resolve(N.value).then(B,y);S((F=F.apply(t,l)).next())});function c(){return r(this,null,function*(){const t=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(t)})}function f(){return r(this,null,function*(){const t=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(t)})}function _(t){return r(this,null,function*(){const l=normalizeString(t),F=yield f();let a="";for(const g in F)if(containsIgnoreCase(l,normalizeString(g))){a=g;break}return F[a]})}},9468:(D,d,s)=>{s.d(d,{Dh:()=>y,Mn:()=>a,ax:()=>f,dT:()=>g,i5:()=>S,v9:()=>B});const r="schemaVersion",c="settings",f="subs",_="collections",t="files",l="modules",F="artifacts",a="#sub-store-cached-dns",g="#sub-store-cached-isp",B="#sub-store-cached-region",y="#sub-store-cached-country",S=7*24*60*60*1e3},8599:(D,d,s)=>{s.d(d,{CY:()=>f,fs:()=>_,iI:()=>r,ik:()=>t,jB:()=>c});const r={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["\u6D41\u91CF","\u65F6\u95F4","\u8FC7\u671F","Bandwidth","Expire"],"\u{1F1F8}\u{1F1F1}":["\u5E94\u6025","\u6D4B\u8BD5\u8282\u70B9"],"\u{1F1E6}\u{1F1E9}":["Andorra","\u5B89\u9053\u5C14"],"\u{1F1E6}\u{1F1EA}":["United Arab Emirates","\u963F\u8054\u914B","\u8FEA\u62DC"],"\u{1F1E6}\u{1F1EB}":["Afghanistan","\u963F\u5BCC\u6C57"],"\u{1F1E6}\u{1F1F1}":["Albania","\u963F\u5C14\u5DF4\u5C3C\u4E9A","\u963F\u723E\u5DF4\u5C3C\u4E9E"],"\u{1F1E6}\u{1F1F2}":["Armenia","\u4E9A\u7F8E\u5C3C\u4E9A"],"\u{1F1E6}\u{1F1F7}":["Argentina","\u963F\u6839\u5EF7"],"\u{1F1E6}\u{1F1F9}":["Austria","\xDAc","\u5965\u5730\u5229","\u5967\u5730\u5229","\u7EF4\u4E5F\u7EB3"],"\u{1F1E6}\u{1F1FA}":["Australia","\u6FB3\u5927\u5229\u4E9A","\u6FB3\u6D32","\u58A8\u5C14\u672C","\u6089\u5C3C","\u571F\u6FB3","\u4EAC\u6FB3","\u5EE3\u6FB3","\u6EEC\u6FB3","\u6CAA\u6FB3","\u5E7F\u6FB3","Sydney"],"\u{1F1E6}\u{1F1FF}":["Azerbaijan","\u963F\u585E\u62DC\u7586"],"\u{1F1E7}\u{1F1E6}":["Bosnia and Herzegovina","\u6CE2\u9ED1\u5171\u548C\u56FD","\u6CE2\u9ED1"],"\u{1F1E7}\u{1F1E9}":["Bangladesh","\u5B5F\u52A0\u62C9\u56FD","\u5B5F\u52A0\u62C9"],"\u{1F1E7}\u{1F1EA}":["Belgium","\u6BD4\u5229\u65F6","\u6BD4\u5229\u6642"],"\u{1F1E7}\u{1F1EC}":["Bulgaria","\u4FDD\u52A0\u5229\u4E9A","\u4FDD\u52A0\u5229\u4E9E"],"\u{1F1E7}\u{1F1ED}":["Bahrain","\u5DF4\u6797"],"\u{1F1E7}\u{1F1F7}":["Brazil","\u5DF4\u897F","\u5723\u4FDD\u7F57"],"\u{1F1E7}\u{1F1FE}":["Belarus","\u767D\u4FC4\u7F57\u65AF","\u767D\u4FC4"],"\u{1F1E8}\u{1F1E6}":["Canada","\u52A0\u62FF\u5927","\u8499\u7279\u5229\u5C14","\u6E29\u54E5\u534E","\u6953\u8449","\u67AB\u53F6","\u6ED1\u94C1\u5362","\u591A\u4F26\u591A","Waterloo"],"\u{1F1E8}\u{1F1ED}":["Switzerland","\u745E\u58EB","\u82CF\u9ECE\u4E16","Zurich"],"\u{1F1E8}\u{1F1F1}":["Chile","\u667A\u5229"],"\u{1F1E8}\u{1F1F4}":["Colombia","\u54E5\u4F26\u6BD4\u4E9A"],"\u{1F1E8}\u{1F1F7}":["Costa Rica","\u54E5\u65AF\u8FBE\u9ECE\u52A0"],"\u{1F1E8}\u{1F1FE}":["Cyprus","\u585E\u6D66\u8DEF\u65AF"],"\u{1F1E8}\u{1F1FF}":["Czechia","\u6377\u514B"],"\u{1F1E9}\u{1F1EA}":["German","\u5FB7\u56FD","\u5FB7\u570B","\u4EAC\u5FB7","\u6EEC\u5FB7","\u5EE3\u5FB7","\u6CAA\u5FB7","\u5E7F\u5FB7","\u6CD5\u5170\u514B\u798F","Frankfurt"],"\u{1F1E9}\u{1F1F0}":["Denmark","\u4E39\u9EA6","\u4E39\u9EA5"],"\u{1F1EA}\u{1F1E8}":["Ecuador","\u5384\u74DC\u591A\u5C14"],"\u{1F1EA}\u{1F1EA}":["Estonia","\u7231\u6C99\u5C3C\u4E9A"],"\u{1F1EA}\u{1F1EC}":["Egypt","\u57C3\u53CA"],"\u{1F1EA}\u{1F1F8}":["Spain","\u897F\u73ED\u7259"],"\u{1F1EA}\u{1F1FA}":["European Union","\u6B27\u76DF","\u6B27\u7F57\u5DF4"],"\u{1F1EB}\u{1F1EE}":["Finland","\u82AC\u5170","\u82AC\u862D","\u8D6B\u5C14\u8F9B\u57FA"],"\u{1F1EB}\u{1F1F7}":["France","\u6CD5\u56FD","\u6CD5\u570B","\u5DF4\u9ECE"],"\u{1F1EC}\u{1F1E7}":["Great Britain","\u82F1\u56FD","England","United Kingdom","\u4F26\u6566","\u82F1","London"],"\u{1F1EC}\u{1F1EA}":["Georgia","\u683C\u9C81\u5409\u4E9A","\u683C\u9B6F\u5409\u4E9E"],"\u{1F1EC}\u{1F1F7}":["Greece","\u5E0C\u814A","\u5E0C\u81D8"],"\u{1F1ED}\u{1F1F0}":["Hong Kong","Hongkong","\u9999\u6E2F","HongKong","HONG KONG","\u6DF1\u6E2F","\u6CAA\u6E2F","\u547C\u6E2F","\u7A57\u6E2F","\u4EAC\u6E2F","\u6E2F"],"\u{1F1ED}\u{1F1F7}":["Croatia","\u514B\u7F57\u5730\u4E9A","\u514B\u7F85\u5730\u4E9E"],"\u{1F1ED}\u{1F1FA}":["Hungary","\u5308\u7259\u5229"],"\u{1F1EF}\u{1F1F4}":["Jordan","\u7EA6\u65E6"],"\u{1F1EF}\u{1F1F5}":["Japan","\u65E5\u672C","\u4E1C\u4EAC","\u5927\u962A","\u57FC\u7389","\u6CAA\u65E5","\u7A57\u65E5","\u5DDD\u65E5","\u4E2D\u65E5","\u6CC9\u65E5","\u676D\u65E5","\u6DF1\u65E5","\u8FBD\u65E5","\u5E7F\u65E5","\u5927\u5742","Osaka","Tokyo"],"\u{1F1F0}\u{1F1EA}":["Kenya","\u80AF\u5C3C\u4E9A"],"\u{1F1F0}\u{1F1EC}":["Kyrgyzstan","\u5409\u5C14\u5409\u65AF\u65AF\u5766"],"\u{1F1F0}\u{1F1ED}":["Cambodia","\u67EC\u57D4\u5BE8"],"\u{1F1F0}\u{1F1F5}":["North Korea","\u671D\u9C9C"],"\u{1F1F0}\u{1F1F7}":["Korea","\u97E9\u56FD","\u97D3\u570B","\u97E9","\u97D3","\u9996\u5C14","\u6625\u5DDD","Chuncheon","Seoul"],"\u{1F1F0}\u{1F1FF}":["Kazakhstan","\u54C8\u8428\u514B\u65AF\u5766","\u54C8\u8428\u514B"],"\u{1F1EE}\u{1F1E9}":["Indonesia","\u5370\u5C3C","\u5370\u5EA6\u5C3C\u897F\u4E9A","\u96C5\u52A0\u8FBE"],"\u{1F1EE}\u{1F1EA}":["Ireland","\u7231\u5C14\u5170","\u611B\u723E\u862D","\u90FD\u67CF\u6797"],"\u{1F1EE}\u{1F1F1}":["Israel","\u4EE5\u8272\u5217"],"\u{1F1EE}\u{1F1F2}":["Isle of Man","\u9A6C\u6069\u5C9B","\u99AC\u6069\u5CF6"],"\u{1F1EE}\u{1F1F3}":["India","\u5370\u5EA6","\u5B5F\u4E70","MFumbai"],"\u{1F1EE}\u{1F1F7}":["Iran","\u4F0A\u6717"],"\u{1F1EE}\u{1F1F8}":["Iceland","\u51B0\u5C9B","\u51B0\u5CF6"],"\u{1F1EE}\u{1F1F9}":["Italy","\u610F\u5927\u5229","\u7FA9\u5927\u5229","\u7C73\u5170","Nachash"],"\u{1F1F1}\u{1F1F9}":["Lithuania","\u7ACB\u9676\u5B9B"],"\u{1F1F1}\u{1F1FA}":["Luxembourg","\u5362\u68EE\u5821"],"\u{1F1F1}\u{1F1FB}":["Latvia","\u62C9\u8131\u7EF4\u4E9A","Latvija"],"\u{1F1F2}\u{1F1E6}":["Morocco","\u6469\u6D1B\u54E5"],"\u{1F1F2}\u{1F1E9}":["Moldova","\u6469\u5C14\u591A\u74E6","\u6469\u723E\u591A\u74E6"],"\u{1F1F3}\u{1F1EC}":["Nigeria","\u5C3C\u65E5\u5229\u4E9A","\u5C3C\u65E5\u5229\u4E9E"],"\u{1F1F2}\u{1F1F0}":["Macedonia","\u9A6C\u5176\u987F","\u99AC\u5176\u9813"],"\u{1F1F2}\u{1F1F3}":["Mongolia","\u8499\u53E4"],"\u{1F1F2}\u{1F1F4}":["Macao","\u6FB3\u95E8","\u6FB3\u9580","CTM"],"\u{1F1F2}\u{1F1F9}":["Malta","\u9A6C\u8033\u4ED6"],"\u{1F1F2}\u{1F1FD}":["Mexico","\u58A8\u897F\u54E5"],"\u{1F1F2}\u{1F1FE}":["Malaysia","\u9A6C\u6765","\u99AC\u4F86","\u5409\u9686\u5761","\u5927\u99AC"],"\u{1F1F3}\u{1F1F1}":["Netherlands","\u8377\u5170","\u8377\u862D","\u5C3C\u5FB7\u862D","\u963F\u59C6\u65AF\u7279\u4E39"],"\u{1F1F3}\u{1F1F4}":["Norway","\u632A\u5A01"],"\u{1F1F3}\u{1F1F5}":["Nepal","\u5C3C\u6CCA\u5C14"],"\u{1F1F3}\u{1F1FF}":["New Zealand","\u65B0\u897F\u5170","\u65B0\u897F\u862D"],"\u{1F1F5}\u{1F1E6}":["Panama","\u5DF4\u62FF\u9A6C"],"\u{1F1F5}\u{1F1EA}":["Peru","\u79D8\u9C81","\u7955\u9B6F"],"\u{1F1F5}\u{1F1ED}":["Philippines","\u83F2\u5F8B\u5BBE","\u83F2\u5F8B\u8CD3"],"\u{1F1F5}\u{1F1F0}":["Pakistan","\u5DF4\u57FA\u65AF\u5766"],"\u{1F1F5}\u{1F1F1}":["Poland","\u6CE2\u5170","\u6CE2\u862D"],"\u{1F1F5}\u{1F1F7}":["Puerto Rico","\u6CE2\u591A\u9ECE\u5404"],"\u{1F1F5}\u{1F1F9}":["Portugal","\u8461\u8404\u7259"],"\u{1F1F5}\u{1F1FE}":["Paraguay","\u5DF4\u62C9\u572D"],"\u{1F1F7}\u{1F1F4}":["Romania","\u7F57\u9A6C\u5C3C\u4E9A"],"\u{1F1F7}\u{1F1F8}":["Serbia","\u585E\u5C14\u7EF4\u4E9A"],"\u{1F1F7}\u{1F1EA}":["R\xE9union","\u7559\u5C3C\u6C6A","\u6CD5\u5C5E\u7559\u5C3C\u6C6A"],"\u{1F1F7}\u{1F1FA}":["Russia","\u4FC4\u7F57\u65AF","\u4FC4\u56FD","\u4FC4\u7F85\u65AF","\u4F2F\u529B","\u83AB\u65AF\u79D1","\u5723\u5F7C\u5F97\u5821","\u897F\u4F2F\u5229\u4E9A","\u4EAC\u4FC4","\u676D\u4FC4","\u5EE3\u4FC4","\u6EEC\u4FC4","\u5E7F\u4FC4","\u6CAA\u4FC4","Moscow"],"\u{1F1F8}\u{1F1E6}":["Saudi","\u6C99\u7279\u963F\u62C9\u4F2F","\u6C99\u7279"],"\u{1F1F8}\u{1F1EA}":["Sweden","\u745E\u5178"],"\u{1F1F8}\u{1F1EC}":["Singapore","Singapo","\u65B0\u52A0\u5761","\u72EE\u57CE","\u6CAA\u65B0","\u4EAC\u65B0","\u4E2D\u65B0","\u6CC9\u65B0","\u7A57\u65B0","\u6DF1\u65B0","\u676D\u65B0","\u5E7F\u65B0","\u5EE3\u65B0","\u6EEC\u65B0"],"\u{1F1F8}\u{1F1EE}":["Slovenia","\u65AF\u6D1B\u6587\u5C3C\u4E9A"],"\u{1F1F8}\u{1F1F0}":["Slovakia","\u65AF\u6D1B\u4F10\u514B"],"\u{1F1F9}\u{1F1ED}":["Thailand","\u6CF0\u56FD","\u6CF0\u570B","\u66FC\u8C37"],"\u{1F1F9}\u{1F1F3}":["Tunisia","\u7A81\u5C3C\u65AF"],"\u{1F1F9}\u{1F1F7}":["Turkey","T\xFCrkiye","\u571F\u8033\u5176","\u4F0A\u65AF\u5766\u5E03\u5C14"],"\u{1F1F9}\u{1F1FC}":["Taiwan","\u53F0\u6E7E","\u81FA\u7063","\u53F0\u7063","\u4E2D\u83EF\u6C11\u570B","\u4E2D\u534E\u6C11\u56FD","\u53F0\u5317","\u53F0\u4E2D","\u65B0\u5317","\u5F70\u5316","\u53F0","\u81FA","Taipei"],"\u{1F1FA}\u{1F1E6}":["Ukraine","\u4E4C\u514B\u5170","\u70CF\u514B\u862D"],"\u{1F1FA}\u{1F1F8}":["United States","\u7F8E\u56FD","America","\u7F8E","\u4EAC\u7F8E","\u6CE2\u7279\u5170","\u8FBE\u62C9\u65AF","\u4FC4\u52D2\u5188","\u51E4\u51F0\u57CE","\u8D39\u5229\u8499","\u7845\u8C37","\u77FD\u8C37","\u62C9\u65AF\u7EF4\u52A0\u65AF","\u6D1B\u6749\u77F6","\u5723\u4F55\u585E","\u5723\u514B\u62C9\u62C9","\u897F\u96C5\u56FE","\u829D\u52A0\u54E5","\u6CAA\u7F8E","\u54E5\u4F26\u5E03","\u7EBD\u7EA6","Los Angeles","San Jose","Sillicon Valley","Michigan"],"\u{1F1FA}\u{1F1FE}":["Uruguay","\u4E4C\u62C9\u572D"],"\u{1F1FB}\u{1F1EA}":["Venezuela","\u59D4\u5185\u745E\u62C9"],"\u{1F1FB}\u{1F1F3}":["Viet Nam","Vietnam","Vi\u1EC7t Nam","\u8D8A\u5357","\u80E1\u5FD7\u660E"],"\u{1F1FF}\u{1F1E6}":["South Africa","\u5357\u975E"],"\u{1F1E8}\u{1F1F3}":["China","\u4E2D\u56FD","\u4E2D\u570B","\u56DE\u56FD","\u56DE\u570B","\u56FD\u5185","\u570B\u5167","\u534E\u4E1C","\u534E\u897F","\u534E\u5357","\u534E\u5317","\u534E\u4E2D","\u6C5F\u82CF","\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733","\u676D\u5DDE","\u5F90\u5DDE","\u9752\u5C9B","\u5B81\u6CE2","\u9547\u6C5F"]},c={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["EXP","BAND"],"\u{1F1F8}\u{1F1F1}":["TEST","SOS"],"\u{1F1E6}\u{1F1E9}":["AD","AND"],"\u{1F1E6}\u{1F1EA}":["AE","ARE"],"\u{1F1E6}\u{1F1EB}":["AF","AFG"],"\u{1F1E6}\u{1F1F1}":["AL","ALB"],"\u{1F1E6}\u{1F1F2}":["AM","ARM"],"\u{1F1E6}\u{1F1F7}":["AR","ARG"],"\u{1F1E6}\u{1F1F9}":["AT","AUT"],"\u{1F1E6}\u{1F1FA}":["AU","AUS"],"\u{1F1E6}\u{1F1FF}":["AZ","AZE"],"\u{1F1E7}\u{1F1E6}":["BA","BIH"],"\u{1F1E7}\u{1F1E9}":["BD","BGD"],"\u{1F1E7}\u{1F1EA}":["BE","BEL"],"\u{1F1E7}\u{1F1EC}":["BG","BGR"],"\u{1F1E7}\u{1F1ED}":["BH","BHR"],"\u{1F1E7}\u{1F1F7}":["BR","BRA"],"\u{1F1E7}\u{1F1FE}":["BY","BLR"],"\u{1F1E8}\u{1F1E6}":["CA","CAN"],"\u{1F1E8}\u{1F1ED}":["CH","CHE"],"\u{1F1E8}\u{1F1F1}":["CL","CHL"],"\u{1F1E8}\u{1F1F4}":["CO","COL"],"\u{1F1E8}\u{1F1F7}":["CR","CRI"],"\u{1F1E8}\u{1F1FE}":["CY","CYP"],"\u{1F1E8}\u{1F1FF}":["CZ","CZE"],"\u{1F1E9}\u{1F1EA}":["DE","DEU"],"\u{1F1E9}\u{1F1F0}":["DK","DNK"],"\u{1F1EA}\u{1F1E8}":["EC","ECU"],"\u{1F1EA}\u{1F1EA}":["EE","EST"],"\u{1F1EA}\u{1F1EC}":["EG","EGY"],"\u{1F1EA}\u{1F1F8}":["ES","ESP"],"\u{1F1EA}\u{1F1FA}":["EU"],"\u{1F1EB}\u{1F1EE}":["FI","FIN"],"\u{1F1EB}\u{1F1F7}":["FR","FRA"],"\u{1F1EC}\u{1F1E7}":["GB","GBR","UK"],"\u{1F1EC}\u{1F1EA}":["GE","GEO"],"\u{1F1EC}\u{1F1F7}":["GR","GRC"],"\u{1F1ED}\u{1F1F0}":["HK","HKG","HKT","HKBN","HGC","WTT","CMI"],"\u{1F1ED}\u{1F1F7}":["HR","HRV"],"\u{1F1ED}\u{1F1FA}":["HU","HUN"],"\u{1F1EF}\u{1F1F4}":["JO","JOR"],"\u{1F1EF}\u{1F1F5}":["JP","JPN"],"\u{1F1F0}\u{1F1EA}":["KE","KEN"],"\u{1F1F0}\u{1F1EC}":["KG","KGZ"],"\u{1F1F0}\u{1F1ED}":["KH","KGZ"],"\u{1F1F0}\u{1F1F5}":["KP","PRK"],"\u{1F1F0}\u{1F1F7}":["KR","KOR"],"\u{1F1F0}\u{1F1FF}":["KZ","KAZ"],"\u{1F1EE}\u{1F1E9}":["ID","IDN"],"\u{1F1EE}\u{1F1EA}":["IE","IRL"],"\u{1F1EE}\u{1F1F1}":["IL","ISR"],"\u{1F1EE}\u{1F1F2}":["IM","IMN"],"\u{1F1EE}\u{1F1F3}":["IN","IND"],"\u{1F1EE}\u{1F1F7}":["IR","IRN"],"\u{1F1EE}\u{1F1F8}":["IS","ISL"],"\u{1F1EE}\u{1F1F9}":["IT","ITA"],"\u{1F1F1}\u{1F1F9}":["LT","LTU"],"\u{1F1F1}\u{1F1FA}":["LU","LUX"],"\u{1F1F1}\u{1F1FB}":["LV","LVA"],"\u{1F1F2}\u{1F1E6}":["MA","MAR"],"\u{1F1F2}\u{1F1E9}":["MD","MDA"],"\u{1F1F3}\u{1F1EC}":["NG","NGA"],"\u{1F1F2}\u{1F1F0}":["MK","MKD"],"\u{1F1F2}\u{1F1F3}":["MN","MNG"],"\u{1F1F2}\u{1F1F4}":["MO","MAC","CTM"],"\u{1F1F2}\u{1F1F9}":["MT","MLT"],"\u{1F1F2}\u{1F1FD}":["MX","MEX"],"\u{1F1F2}\u{1F1FE}":["MY","MYS"],"\u{1F1F3}\u{1F1F1}":["NL","NLD"],"\u{1F1F3}\u{1F1F4}":["NO","NOR"],"\u{1F1F3}\u{1F1F5}":["NP","NPL"],"\u{1F1F3}\u{1F1FF}":["NZ","NZL"],"\u{1F1F5}\u{1F1E6}":["PA","PAN"],"\u{1F1F5}\u{1F1EA}":["PE","PER"],"\u{1F1F5}\u{1F1ED}":["PH","PHL"],"\u{1F1F5}\u{1F1F0}":["PK","PAK"],"\u{1F1F5}\u{1F1F1}":["PL","POL"],"\u{1F1F5}\u{1F1F7}":["PR","PRI"],"\u{1F1F5}\u{1F1F9}":["PT","PRT"],"\u{1F1F5}\u{1F1FE}":["PY","PRY"],"\u{1F1F7}\u{1F1F4}":["RO","ROU"],"\u{1F1F7}\u{1F1F8}":["RS","SRB"],"\u{1F1F7}\u{1F1EA}":["RE","REU"],"\u{1F1F7}\u{1F1FA}":["RU","RUS"],"\u{1F1F8}\u{1F1E6}":["SA","SAU"],"\u{1F1F8}\u{1F1EA}":["SE","SWE"],"\u{1F1F8}\u{1F1EC}":["SG","SGP"],"\u{1F1F8}\u{1F1EE}":["SI","SVN"],"\u{1F1F8}\u{1F1F0}":["SK","SVK"],"\u{1F1F9}\u{1F1ED}":["TH","THA"],"\u{1F1F9}\u{1F1F3}":["TN","TUN"],"\u{1F1F9}\u{1F1F7}":["TR","TUR"],"\u{1F1F9}\u{1F1FC}":["TW","TWN","CHT","HINET","ROC"],"\u{1F1FA}\u{1F1E6}":["UA","UKR"],"\u{1F1FA}\u{1F1F8}":["US","USA","LAX","SFO"],"\u{1F1FA}\u{1F1FE}":["UY","URY"],"\u{1F1FB}\u{1F1EA}":["VE","VEN"],"\u{1F1FB}\u{1F1F3}":["VN","VNM"],"\u{1F1FF}\u{1F1E6}":["ZA","ZAF"],"\u{1F1E8}\u{1F1F3}":["CN","CHN","BACK"]};function f(F){var a;let g=((a=F.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/))==null?void 0:a[0])||"";for(const B of Object.keys(r))if(r[B].some(S=>RegExp(`${S}`,"i").test(F)))return g=B;for(const B of Object.keys(c))if(c[B].some(S=>RegExp(`(^|[^a-zA-Z:])${S}([^a-zA-Z:]|$)`).test(F)&&!/(\d+)\s*([MG]B)/.test(F)))return g=B;return g}function _(F){return/^(\uD83C[\uDDE6-\uDDFF]){2}$/.test(F)}function t(F){return/^[A-Z]{2}$/.test(F)}function l(F){return F.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g,"").trim()}},1500:(D,d,s)=>{s.d(d,{B8:()=>M,BE:()=>a,Dq:()=>l,Mi:()=>m,Vo:()=>U,Zg:()=>F,l0:()=>L,mc:()=>g,pH:()=>B,qu:()=>G,sY:()=>N});var r=s(5254),c=s(8599),f=Math.pow,_=(n,C,E)=>new Promise((A,p)=>{var v=i=>{try{e(E.next(i))}catch(o){p(o)}},u=i=>{try{e(E.throw(i))}catch(o){p(o)}},e=i=>i.done?A(i.value):Promise.resolve(i.value).then(v,u);e((E=E.apply(n,C)).next())});const t=$substore,l={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"],vpsmmo:["Vpsmmo Technology Company Limited","1mcloud Technology Company Limited","AS149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],litespeed:["LITESPEED-COM","Litespeed Technology Company Limited","AS140810 Megacore Technology Company Limited"],m247:["M247 Europe SRL","3NT SOLUTIONS LLP","IROKO Networks Corporation","AS9009 M247 Europe SRL"]},F={hn:["HN","Hanoi"],dn:["DN","Da Nang"],sg:["SG","Ho Chi Minh"]};function a(n){return _(this,null,function*(){let C=n;if(L(n)){const E=r.Vs.get(n);if(E)C=E;else{const A=yield y(n);C=A,A&&r.Vs.set(n,A)}}return C})}function g(n){return _(this,null,function*(){const C=n;let E="";const A=r.SA.get(C);if(A)E=(0,c.CY)(A);else{const p=yield S(C);E=(0,c.CY)(p),E&&r.SA.set(C,p)}return E})}function B(n){return _(this,null,function*(){const C=`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(n)}&type=A`,E={Accept:"application/dns-json"};try{const A=yield t.http.get({url:C,headers:E}),p=JSON.parse(A.body);if(p.Status!==0)throw new Error(`HTTP error! status: ${p.Status}`);return p.Answer?p.Answer.map(v=>`${v.data}`)[0]:""}catch(A){return""}})}function y(n){return _(this,null,function*(){return yield t.http.get(`https://dns.google/resolve?name=${n}`).then(E=>{const A=JSON.parse(E.body);if(A.Status===0){const p=A.Answer.find(v=>v.type===1);return p?p.data:""}return""})})}function S(n){return _(this,null,function*(){return yield t.http.get(`http://ip-api.com/json/${n}?fields=country`).then(E=>JSON.parse(E.body).country||"")})}function N(n){return _(this,null,function*(){return yield t.http.get(`http://ip-api.com/json/${n}?fields=region,regionName`).then(E=>{const A=JSON.parse(E.body);return A.regionName&&A.region?`${A.regionName} (${A.region})`:""})})}function w(n){return _(this,null,function*(){return yield t.http.get(`http://ip-api.com/json/${n}?fields=isp`).then(E=>JSON.parse(E.body).isp||"")})}function P(n){return _(this,null,function*(){return yield t.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(n)}).then(E=>JSON.parse(E.body).map(p=>p.isp))})}function M(n){return _(this,null,function*(){return yield t.http.get(`http://ip-api.com/json/${n}?fields=isp,org`).then(E=>{const A=JSON.parse(E.body);return[A.isp||"",A.org||""].join(",")})})}function O(n,C){let E,A;const p=b(n);if((E=C.match(/^(.*?)\/(\d{1,2})$/))&&(A=b(E[1]))>=0){const v=f(2,32-parseInt(E[2]));return p>=A&&p<=A+v-1}return!1}function b(n){let C;if(C=n.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let E=0,A=1;for(let p=4;p>=1;p-=1)E+=A*parseInt(C[p]),A*=256;return E}return-1}function L(n){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(n)}function G(n){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(n)}function U(n,C){const E=n.split("."),A=C.split(".");if(E.length<3||A.length<3)return!1;for(let p=0;p<3;p++)if(E[p]!==A[p])return!1;return!0}function m(n){const C=n.split(".");return C[C.length-1]}},9085:(D,d,s)=>{s.d(d,{Fq:()=>f,Gv:()=>F,Gz:()=>r,Kg:()=>t,Lm:()=>l});function r(a){return a&&a!=="null"&&a!=="undefined"}function c(a,g){return a.reduce((B,y)=>{const S=y[g];return B[S]||(B[S]=[]),B[S].push(y),B},{})}function f(a){return Number.isInteger(a)}function _(a){return typeof a=="number"&&!Number.isNaN(a)}function t(a){return typeof a=="string"}function l(a){return typeof a=="boolean"}function F(a){return typeof a=="object"&&a!==null}},4173:(D,d,s)=>{s.d(d,{AH:()=>B,um:()=>y});var r=s(9085),c=s(1058),f=s(1500),_=s(8599),t=s(5254),l=Math.pow,F=(u,e,i)=>new Promise((o,h)=>{var R=T=>{try{V(i.next(T))}catch(H){h(H)}},K=T=>{try{V(i.throw(T))}catch(H){h(H)}},V=T=>T.done?o(T.value):Promise.resolve(T.value).then(R,K);V((i=i.apply(u,e)).next())});function a(u,e){for(const i of u)g(i,e)}function g(u,e){(u.type==="vmess"||u.type==="vless"||u.type==="trojan")&&(u.network==="ws"&&(u["ws-opts"]=u["ws-opts"]||{},u["ws-opts"].headers=u["ws-opts"].headers||{},u["ws-opts"].headers.Host=e),u.network==="grpc"&&(u["grpc-opts"]=u["grpc-opts"]||{},u["grpc-opts"]["grpc-service-name"]=u["grpc-opts"]["grpc-service-name"]||"",u.servername=e),u.network==="tcp"&&(u.servername=e),u.sni=e),isRealValue(u["skip-cert-verify"])||(u["skip-cert-verify"]=!0)}function B(u){const e=[];return(0,r.Gz)(u.regex)&&e.push(S),(0,r.Gz)(u.ports)&&e.push(N),(0,r.Gz)(u.ips)&&e.push(w),(0,r.Gz)(u.isps)&&e.push(P),(0,r.Gz)(u.regions)&&e.push(M),(0,r.Gz)(u.countries)&&e.push(O),(0,r.Gz)(u.subs)&&e.push(b),(0,r.Gz)(u.tags)&&e.push(L),(0,r.Gz)(u.types)&&e.push(G),e}function y(u,e,i){return F(this,null,function*(){return(yield Promise.all(u.map(h=>h(e,i)))).every(h=>h)})}function S(u,e){return(0,c.r)(u.regex).test(e.name)}function N(u,e){return u.ports.some(i=>{if((0,r.Fq)(i))return i===e.port;const o=/^(\d+)\.\.(\d+)$/,h=i.match(o);if((0,r.Kg)(i)&&h){const R=parseInt(h[1],10),K=parseInt(h[2],10);if(R<K)return e.port>=R&&e.port<=K}return!1})}function w(u,e){return F(this,null,function*(){return(yield Promise.all(u.ips.map(o=>p(e.server,o)))).some(o=>o)})}function P(u,e){return F(this,null,function*(){return(yield Promise.all(u.isps.map(o=>A(e.server,o)))).some(o=>o)})}function M(u,e){return F(this,null,function*(){return(yield Promise.all(u.regions.map(o=>E(e.server,o)))).some(o=>o)})}function O(u,e){return F(this,null,function*(){return(yield Promise.all(u.countries.map(o=>C(e,o)))).some(o=>o)})}function b(u,e){return F(this,null,function*(){return(yield Promise.all(u.subs.map(o=>n(e,o)))).some(o=>o)})}function L(u,e){return F(this,null,function*(){return(yield Promise.all(u.tags.map(o=>m(e,o)))).some(o=>o)})}function G(u,e){return F(this,null,function*(){return(yield Promise.all(u.types.map(o=>U(e,o)))).some(o=>o)})}function U(u,e){return F(this,null,function*(){return u.type.toLowerCase()===e.toLowerCase()})}function m(u,e){return F(this,null,function*(){return u.tags&&u.tags.some(i=>RegExp(`${i}`,"i").test(e))})}function n(u,e){return F(this,null,function*(){return u.subName===e})}function C(u,e){return F(this,null,function*(){return(0,_.fs)(e)?u.countryFlag===e:(0,_.ik)(e)?u.countryCode===e:!1})}function E(u,e){return F(this,null,function*(){const i=u;try{let o="";const h=t.KK.get(i);h?o=h:(o=yield(0,f.sY)(i),o&&t.KK.set(i,o));const R=(0,c.Z)(o);if(R){const{name:K,code:V}=R,T=f.Zg[e.toLowerCase()];if((0,r.Gz)(T)&&(T.some(H=>RegExp(`${H}`,"i").test(V))||T.some(H=>RegExp(`${H}`,"i").test(K))))return!0}}catch(o){return!1}return!1})}function A(u,e){return F(this,null,function*(){const i=u;let o="";const h=t.Kh.get(i);h?o=h:(o=yield(0,f.B8)(i),o&&t.Kh.set(i,o));const R=f.Dq[e],K=o.split(",");for(const V of K)if(V&&R.some(T=>RegExp(`${T}`,"i").test(V)))return!0;return!1})}function p(u,e){return F(this,null,function*(){const i=yield(0,f.BE)(u);if(!(0,f.qu)(i))return!1;if(e.indexOf("/")<0)return!!(i===e||(0,f.Vo)(i,e)&&(0,f.Mi)(e)==="*");let o,h;const R=v(i);if((o=e.match(/^(.*?)\/(\d{1,2})$/))&&(h=v(o[1]))>=0){const K=l(2,32-parseInt(o[2]));return R>=h&&R<=h+K-1}return!1})}function v(u){let e;if(e=u.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let i=0,o=1;for(let h=4;h>=1;h-=1)i+=o*parseInt(e[h]),o*=256;return i}return-1}},1058:(D,d,s)=>{s.d(d,{Z:()=>c,r:()=>r});function r(f){const _=f.lastIndexOf("/");return new RegExp(f.slice(1,_),f.slice(_+1))}function c(f){const _=/^([^\(]+) \(([^)]+)\)$/,t=f.match(_);return t?{name:t[1].trim(),code:t[2]}:null}},8344:(D,d,s)=>{s.d(d,{_U:()=>r});function r(t,l){return t.find(F=>F.name===l)}function c(t,l){return t.findIndex(F=>F.name===l)}function f(t,l){const F=c(t,l);t.splice(F,1)}function _(t,l,F){const a=c(t,l);t[a]=F}}},Y={};function I(D){var d=Y[D];if(d!==void 0)return d.exports;var s=Y[D]={exports:{}};return k[D](s,s.exports,I),s.exports}I.n=D=>{var d=D&&D.__esModule?()=>D.default:()=>D;return I.d(d,{a:d}),d},I.d=(D,d)=>{for(var s in d)I.o(d,s)&&!I.o(D,s)&&Object.defineProperty(D,s,{enumerable:!0,get:d[s]})},I.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(D){if(typeof window=="object")return window}}(),I.o=(D,d)=>Object.prototype.hasOwnProperty.call(D,d);var $={};(()=>{var D=I(3183),d=I.n(D),s=I(1500),r=I(8599),c=I(9085),f=I(9468),_=I(8344),t=I(5254),l=I(423),F=I(4173),a=(P,M,O)=>new Promise((b,L)=>{var G=n=>{try{m(O.next(n))}catch(C){L(C)}},U=n=>{try{m(O.throw(n))}catch(C){L(C)}},m=n=>n.done?b(n.value):Promise.resolve(n.value).then(G,U);m((O=O.apply(P,M)).next())});const g=$substore,B=[/\?+/],y=["127.0.0.1","1.1.1.1"],S=new RegExp(B.join("|"),"gi");function N(){return a(this,arguments,function*(P=[],M,O){const{isSurge:b}=g.env,L=g.read(f.ax),G=yield(0,l.ru)();if(!(0,c.Gz)(G.default))return[];const U=[];for(const m of P)if(!((b||M&&M.startsWith("Surge"))&&m.network==="grpc")&&!(y.indexOf(m.server)>-1)){if((0,s.l0)(m.server)&&(yield w(G.default.dnsLookup,m))){const n=m.server,C=t.Vs.get(n);if(C)m.server=C;else{const E=yield(0,s.pH)(n);E&&(m.server=E,t.Vs.set(n,E))}}m.name=m.name.replace(S,"");try{const n=yield(0,s.mc)(m.server);m.countryFlag=n,m.countryName=r.iI[n][0],m.countryCode=r.jB[n][0]}catch(n){continue}if((0,c.Gz)(O)&&(0,c.Gz)(O.source)&&(0,c.Gz)(O.source[m.subName]))m.tags=O.source[m.subName].tag||[];else if((0,c.Gz)(L)){const n=(0,_._U)(L,m.subName);(0,c.Gz)(n)&&(m.tags=n.tag||[])}U.push(m)}return U})}function w(P,M){return a(this,null,function*(){if(!(0,c.Gz)(P))return!1;if((0,c.Lm)(P))return P;if((0,c.Gv)(P)){const O=(0,F.AH)(P);if(O.length===0)return!1;if(yield(0,F.um)(O,P,M))return!0}return!1})}d().operator=N})()})();})();
