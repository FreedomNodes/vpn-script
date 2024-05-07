(()=>{(()=>{"use strict";var cu={183:(l,c,s)=>{var S;typeof window!="undefined"?S=window:typeof s.g!="undefined"?S=s.g:typeof self!="undefined"?S=self:S={},l.exports=S}},Q={};function h(l){var c=Q[l];if(c!==void 0)return c.exports;var s=Q[l]={exports:{}};return cu[l](s,s.exports,h),s.exports}h.n=l=>{var c=l&&l.__esModule?()=>l.default:()=>l;return h.d(c,{a:c}),c},h.d=(l,c)=>{for(var s in c)h.o(c,s)&&!h.o(l,s)&&Object.defineProperty(l,s,{enumerable:!0,get:c[s]})},h.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(l){if(typeof window=="object")return window}}(),h.o=(l,c)=>Object.prototype.hasOwnProperty.call(l,c);var $u={};(()=>{var l=h(183),c=h.n(l);const s=$substore;class S{constructor(e,F){this.key=e,this.expires=F;const t=s.read(e);t?this.resourceCache=JSON.parse(t):(this.resourceCache={},this._persist()),this._cleanup()}_cleanup(){let e=!1;const F=new Date().getTime();Object.keys(this.resourceCache).forEach(t=>{const n=this.resourceCache[t];(!n.time||F-n.time>this.expires)&&(delete this.resourceCache[t],s.delete(`#${t}`),e=!0)}),e&&this._persist()}revokeIds(e){let F=!1;for(const t of e)delete this.resourceCache[t],F=!0;F&&this._persist()}revokeAll(){this.resourceCache={},this._persist()}_persist(){s.write(JSON.stringify(this.resourceCache),this.key)}get(e){const F=this.resourceCache[e]&&this.resourceCache[e].time;return F&&new Date().getTime()-F<=this.expires?this.resourceCache[e].data:null}set(e,F){this.resourceCache[e]={time:new Date().getTime(),data:F},this._persist()}}const b=S;function C(u){return u&&u!=="null"&&u!=="undefined"}function su(u,e){return u.reduce((F,t)=>{const n=t[e];return F[n]||(F[n]=[]),F[n].push(t),F},{})}function Cu(u){const e=u.lastIndexOf("/");return new RegExp(u.slice(1,e),u.slice(e+1))}var Au=Math.pow,P=(u,e,F)=>new Promise((t,n)=>{var r=o=>{try{a(F.next(o))}catch(i){n(i)}},E=o=>{try{a(F.throw(o))}catch(i){n(i)}},a=o=>o.done?t(o.value):Promise.resolve(o.value).then(r,E);a((F=F.apply(u,e)).next())});const R=$substore,pu={viettel:["Viettel Group","VIETTEL","AS7552 Viettel Group","VIETEL-AS-AP"],vnpt:["Vietnam Posts and Telecommunications Group","VNPT","AS135905 VIETNAM POSTS AND TELECOMMUNICATIONS GROUP","VNPT-AS-VN"],mobifone:["MOBIFONE","Mobifone Corporation","AS131429 MOBIFONE Corporation","MOBIFONE-AS-VN"],fpt:["FPT Telecom Company","AS18403 FPT Telecom Company","FPT-AS-AP"],google:["Google LLC","Google Cloud","AS15169 Google LLC"],mcloud:["MCLOUD","1mcloud Technology Company Limited","S149078 VPSMMO TECHNOLOGY COMPANY LIMITED","VPSMMO-AS-VN"],gnetwork:["GNETWORK","Gnetwork Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],akamai:["Akamai Technologies","Linode","AS63949 Akamai Connected Cloud","AKAMAI-LINODE-AP"],cloviet:["CLOVIET","Cloud Viet ONE Member Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietDigital:["Viet Digital Technology Liability Company","Mailand Technology Trading Services Company Limited","AS135918 VIET DIGITAL TECHNOLOGY LIABILITY COMPANY","DVS-AS-VN"],vietServer:["Vietserver Services Technology Company Limited","T-media Digital Technology Company Limited","AS63737 VIETSERVER SERVICES TECHNOLOGY COMPANY LIMITED","VIETSERVER-AS-VN"],digitalOcean:["DigitalOcean, LLC","AS14061 DigitalOcean, LLC","DIGITALOCEAN-ASN"],cloudfly:["Cloudfly Corporation","AS149089 CLOUDFLY CORPORATION","CLOUDFLY-VN"]};function uu(u){return!!/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(u)}function fu(u){return!!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)(\/([1-9]|[1-2][0-9]|3[0-2])){0,1}$/.test(u)}function Du(u,e){const F=u.split("."),t=e.split(".");if(F.length<3||t.length<3)return!1;for(let n=0;n<3;n++)if(F[n]!==t[n])return!1;return!0}function du(u){const e=u.split(".");return e[e.length-1]}function eu(u){return P(this,null,function*(){return yield R.http.get(`https://dns.google/resolve?name=${u}`).then(F=>{const t=JSON.parse(F.body);if(t.Status===0){const n=t.Answer.find(r=>r.type===1);return n?n.data:""}return""})})}function gu(u){return P(this,null,function*(){return yield R.http.get(`http://ip-api.com/json/${u}?fields=country`).then(F=>JSON.parse(F.body).country||"")})}function hu(u){return P(this,null,function*(){return yield R.http.get(`http://ip-api.com/json/${u}?fields=isp`).then(F=>JSON.parse(F.body).isp||"")})}function Zu(u){return P(this,null,function*(){return yield R.http.post({url:"http://ip-api.com/batch?fields=isp",body:JSON.stringify(u)}).then(F=>JSON.parse(F.body).map(n=>n.isp))})}function zu(u,e){let F,t;const n=L(u);if((F=e.match(/^(.*?)\/(\d{1,2})$/))&&(t=L(F[1]))>=0){const r=Au(2,32-parseInt(F[2]));return n>=t&&n<=t+r-1}return!1}function L(u){let e;if(e=u.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)){let F=0,t=1;for(let n=4;n>=1;n-=1)F+=t*parseInt(e[n]),t*=256;return F}return-1}function Fu(u){let e=u.replace(/[-_]/g," ");return e=e.replace(/\s+/g," "),e=e.trim(),e}function yu(u,e){const F=u.toLowerCase(),t=e.toLowerCase();return F.includes(t)}function G(u){return u.toLowerCase()}function O(u){return u.toUpperCase()}function Bu(u){return u=ou(u),u=ru(u).replace(/\-/g," ").replace(/\s[a-z]/g,O).replace(/\s+/g,"").replace(/^[A-Z]/g,G),u}function tu(u){return u=u.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g,"$1 $2"),u=u.toLowerCase(),u}function Ju(u){return G(u).replace(/^\w|\s\w/g,O)}function Wu(u){return Bu(u).replace(/^[a-z]/,O)}function ju(u){return G(u).replace(/(^\w)|\.\s+(\w)/gm,O)}function nu(u,e){return e==null&&(e="-"),u=ou(u),u=ru(u),u=U(u).replace(/ +/g,e).toLowerCase(),u}function Xu(u){return u=tu(u),nu(u,"-")}function qu(u){return u.replace(/(\w)(-)(\w)/g,"$1 $3")}function Qu(u){return u=tu(u),nu(u,"_")}function ru(u){return u.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g,"")}function u1(u,e){return e=e||`
`,u.replace(/\r\n/g,e).replace(/\r/g,e).replace(/\n/g,e)}function ou(u){return u.search(/[\xC0-\xFF]/g)>-1&&(u=u.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),u}function e1(u,e,F){return u.indexOf(e,F)!==-1}function F1(u,e,F){return Su(u,e,F,!0)}function t1(u){const e=/[\\.+*?\^$\[\](){}\/'#]/g;return u.replace(e,"\\$&")}function n1(u){return u=u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;"),u}function r1(u){return u=u.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#39;/g,"'").replace(/&quot;/g,'"'),u}function o1(u,e){return u.replace(/[\s\S]/g,F=>!e&&/[\x20-\x7E]/.test(F)?F:`\\u${`000${F.charCodeAt(0).toString(16)}`.slice(-4)}`)}function a1(u){return u.replace(/<[^>]*>/g,"")}function E1(u){return u.replace(/[^\x20-\x7E]/g,"")}function i1(u,e,F){const t=/\{\{(\w+)\}\}/g,n=(r,E)=>E in e?e[E]:"";return u.replace(F||t,n)}function l1(u,e,F){return F=F||" ",u.length<e?u+au(F,e-u.length):u}function c1(u,e,F){return F=F||" ",u.length<e?au(F,e-u.length)+u:u}function au(u,e){return new Array(e+1).join(u)}function Su(u,e,F,t){return F=F||"...",e=t?e+1:e,u=U(u),u.length<=e?u:(u=u.substr(0,e-F.length),u=t?u.substr(0,u.lastIndexOf(" ")):U(u),u+F)}const V=null;function mu(u,e){e=e||V;let F=0;const t=u.length,n=e.length;let r=!0,E,a;for(;r&&F<t;)for(r=!1,E=-1,a=u.charAt(F);++E<n;)if(a===e[E]){r=!0,F++;break}return F>=t?"":u.substr(F,t)}function Nu(u,e){e=e||V;let F=u.length-1;const t=e.length;let n=!0,r,E;for(;n&&F>=0;)for(n=!1,r=-1,E=u.charAt(F);++r<t;)if(E===e[r]){n=!0,F--;break}return F>=0?u.substring(0,F+1):""}function U(u,e){return e=e||V,mu(Nu(u,e),e)}function s1(u){return u.match(/\b([A-Z])/g).join("")}var H=(u,e,F)=>new Promise((t,n)=>{var r=o=>{try{a(F.next(o))}catch(i){n(i)}},E=o=>{try{a(F.throw(o))}catch(i){n(i)}},a=o=>o.done?t(o.value):Promise.resolve(o.value).then(r,E);a((F=F.apply(u,e)).next())});function Iu(){return H(this,null,function*(){const u=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(u)})}function Tu(){return H(this,null,function*(){const u=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(u)})}function xu(u){return H(this,null,function*(){const e=Fu(u),F=yield Tu();let t="";for(const n in F)if(yu(e,Fu(n))){t=n;break}return F[t]})}const K={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["\u6D41\u91CF","\u65F6\u95F4","\u8FC7\u671F","Bandwidth","Expire"],"\u{1F1F8}\u{1F1F1}":["\u5E94\u6025","\u6D4B\u8BD5\u8282\u70B9"],"\u{1F1E6}\u{1F1E9}":["Andorra","\u5B89\u9053\u5C14"],"\u{1F1E6}\u{1F1EA}":["United Arab Emirates","\u963F\u8054\u914B","\u8FEA\u62DC"],"\u{1F1E6}\u{1F1EB}":["Afghanistan","\u963F\u5BCC\u6C57"],"\u{1F1E6}\u{1F1F1}":["Albania","\u963F\u5C14\u5DF4\u5C3C\u4E9A","\u963F\u723E\u5DF4\u5C3C\u4E9E"],"\u{1F1E6}\u{1F1F2}":["Armenia","\u4E9A\u7F8E\u5C3C\u4E9A"],"\u{1F1E6}\u{1F1F7}":["Argentina","\u963F\u6839\u5EF7"],"\u{1F1E6}\u{1F1F9}":["Austria","\xDAc","\u5965\u5730\u5229","\u5967\u5730\u5229","\u7EF4\u4E5F\u7EB3"],"\u{1F1E6}\u{1F1FA}":["Australia","\u6FB3\u5927\u5229\u4E9A","\u6FB3\u6D32","\u58A8\u5C14\u672C","\u6089\u5C3C","\u571F\u6FB3","\u4EAC\u6FB3","\u5EE3\u6FB3","\u6EEC\u6FB3","\u6CAA\u6FB3","\u5E7F\u6FB3","Sydney"],"\u{1F1E6}\u{1F1FF}":["Azerbaijan","\u963F\u585E\u62DC\u7586"],"\u{1F1E7}\u{1F1E6}":["Bosnia and Herzegovina","\u6CE2\u9ED1\u5171\u548C\u56FD","\u6CE2\u9ED1"],"\u{1F1E7}\u{1F1E9}":["Bangladesh","\u5B5F\u52A0\u62C9\u56FD","\u5B5F\u52A0\u62C9"],"\u{1F1E7}\u{1F1EA}":["Belgium","\u6BD4\u5229\u65F6","\u6BD4\u5229\u6642"],"\u{1F1E7}\u{1F1EC}":["Bulgaria","\u4FDD\u52A0\u5229\u4E9A","\u4FDD\u52A0\u5229\u4E9E"],"\u{1F1E7}\u{1F1ED}":["Bahrain","\u5DF4\u6797"],"\u{1F1E7}\u{1F1F7}":["Brazil","\u5DF4\u897F","\u5723\u4FDD\u7F57"],"\u{1F1E7}\u{1F1FE}":["Belarus","\u767D\u4FC4\u7F57\u65AF","\u767D\u4FC4"],"\u{1F1E8}\u{1F1E6}":["Canada","\u52A0\u62FF\u5927","\u8499\u7279\u5229\u5C14","\u6E29\u54E5\u534E","\u6953\u8449","\u67AB\u53F6","\u6ED1\u94C1\u5362","\u591A\u4F26\u591A","Waterloo"],"\u{1F1E8}\u{1F1ED}":["Switzerland","\u745E\u58EB","\u82CF\u9ECE\u4E16","Zurich"],"\u{1F1E8}\u{1F1F1}":["Chile","\u667A\u5229"],"\u{1F1E8}\u{1F1F4}":["Colombia","\u54E5\u4F26\u6BD4\u4E9A"],"\u{1F1E8}\u{1F1F7}":["Costa Rica","\u54E5\u65AF\u8FBE\u9ECE\u52A0"],"\u{1F1E8}\u{1F1FE}":["Cyprus","\u585E\u6D66\u8DEF\u65AF"],"\u{1F1E8}\u{1F1FF}":["Czechia","\u6377\u514B"],"\u{1F1E9}\u{1F1EA}":["German","\u5FB7\u56FD","\u5FB7\u570B","\u4EAC\u5FB7","\u6EEC\u5FB7","\u5EE3\u5FB7","\u6CAA\u5FB7","\u5E7F\u5FB7","\u6CD5\u5170\u514B\u798F","Frankfurt"],"\u{1F1E9}\u{1F1F0}":["Denmark","\u4E39\u9EA6","\u4E39\u9EA5"],"\u{1F1EA}\u{1F1E8}":["Ecuador","\u5384\u74DC\u591A\u5C14"],"\u{1F1EA}\u{1F1EA}":["Estonia","\u7231\u6C99\u5C3C\u4E9A"],"\u{1F1EA}\u{1F1EC}":["Egypt","\u57C3\u53CA"],"\u{1F1EA}\u{1F1F8}":["Spain","\u897F\u73ED\u7259"],"\u{1F1EA}\u{1F1FA}":["European Union","\u6B27\u76DF","\u6B27\u7F57\u5DF4"],"\u{1F1EB}\u{1F1EE}":["Finland","\u82AC\u5170","\u82AC\u862D","\u8D6B\u5C14\u8F9B\u57FA"],"\u{1F1EB}\u{1F1F7}":["France","\u6CD5\u56FD","\u6CD5\u570B","\u5DF4\u9ECE"],"\u{1F1EC}\u{1F1E7}":["Great Britain","\u82F1\u56FD","England","United Kingdom","\u4F26\u6566","\u82F1","London"],"\u{1F1EC}\u{1F1EA}":["Georgia","\u683C\u9C81\u5409\u4E9A","\u683C\u9B6F\u5409\u4E9E"],"\u{1F1EC}\u{1F1F7}":["Greece","\u5E0C\u814A","\u5E0C\u81D8"],"\u{1F1ED}\u{1F1F0}":["Hongkong","\u9999\u6E2F","Hong Kong","HongKong","HONG KONG","\u6DF1\u6E2F","\u6CAA\u6E2F","\u547C\u6E2F","\u7A57\u6E2F","\u4EAC\u6E2F","\u6E2F"],"\u{1F1ED}\u{1F1F7}":["Croatia","\u514B\u7F57\u5730\u4E9A","\u514B\u7F85\u5730\u4E9E"],"\u{1F1ED}\u{1F1FA}":["Hungary","\u5308\u7259\u5229"],"\u{1F1EF}\u{1F1F4}":["Jordan","\u7EA6\u65E6"],"\u{1F1EF}\u{1F1F5}":["Japan","\u65E5\u672C","\u4E1C\u4EAC","\u5927\u962A","\u57FC\u7389","\u6CAA\u65E5","\u7A57\u65E5","\u5DDD\u65E5","\u4E2D\u65E5","\u6CC9\u65E5","\u676D\u65E5","\u6DF1\u65E5","\u8FBD\u65E5","\u5E7F\u65E5","\u5927\u5742","Osaka","Tokyo"],"\u{1F1F0}\u{1F1EA}":["Kenya","\u80AF\u5C3C\u4E9A"],"\u{1F1F0}\u{1F1EC}":["Kyrgyzstan","\u5409\u5C14\u5409\u65AF\u65AF\u5766"],"\u{1F1F0}\u{1F1ED}":["Cambodia","\u67EC\u57D4\u5BE8"],"\u{1F1F0}\u{1F1F5}":["North Korea","\u671D\u9C9C"],"\u{1F1F0}\u{1F1F7}":["Korea","\u97E9\u56FD","\u97D3\u570B","\u97E9","\u97D3","\u9996\u5C14","\u6625\u5DDD","Chuncheon","Seoul"],"\u{1F1F0}\u{1F1FF}":["Kazakhstan","\u54C8\u8428\u514B\u65AF\u5766","\u54C8\u8428\u514B"],"\u{1F1EE}\u{1F1E9}":["Indonesia","\u5370\u5C3C","\u5370\u5EA6\u5C3C\u897F\u4E9A","\u96C5\u52A0\u8FBE"],"\u{1F1EE}\u{1F1EA}":["Ireland","\u7231\u5C14\u5170","\u611B\u723E\u862D","\u90FD\u67CF\u6797"],"\u{1F1EE}\u{1F1F1}":["Israel","\u4EE5\u8272\u5217"],"\u{1F1EE}\u{1F1F2}":["Isle of Man","\u9A6C\u6069\u5C9B","\u99AC\u6069\u5CF6"],"\u{1F1EE}\u{1F1F3}":["India","\u5370\u5EA6","\u5B5F\u4E70","MFumbai"],"\u{1F1EE}\u{1F1F7}":["Iran","\u4F0A\u6717"],"\u{1F1EE}\u{1F1F8}":["Iceland","\u51B0\u5C9B","\u51B0\u5CF6"],"\u{1F1EE}\u{1F1F9}":["Italy","\u610F\u5927\u5229","\u7FA9\u5927\u5229","\u7C73\u5170","Nachash"],"\u{1F1F1}\u{1F1F9}":["Lithuania","\u7ACB\u9676\u5B9B"],"\u{1F1F1}\u{1F1FA}":["Luxembourg","\u5362\u68EE\u5821"],"\u{1F1F1}\u{1F1FB}":["Latvia","\u62C9\u8131\u7EF4\u4E9A","Latvija"],"\u{1F1F2}\u{1F1E6}":["Morocco","\u6469\u6D1B\u54E5"],"\u{1F1F2}\u{1F1E9}":["Moldova","\u6469\u5C14\u591A\u74E6","\u6469\u723E\u591A\u74E6"],"\u{1F1F3}\u{1F1EC}":["Nigeria","\u5C3C\u65E5\u5229\u4E9A","\u5C3C\u65E5\u5229\u4E9E"],"\u{1F1F2}\u{1F1F0}":["Macedonia","\u9A6C\u5176\u987F","\u99AC\u5176\u9813"],"\u{1F1F2}\u{1F1F3}":["Mongolia","\u8499\u53E4"],"\u{1F1F2}\u{1F1F4}":["Macao","\u6FB3\u95E8","\u6FB3\u9580","CTM"],"\u{1F1F2}\u{1F1F9}":["Malta","\u9A6C\u8033\u4ED6"],"\u{1F1F2}\u{1F1FD}":["Mexico","\u58A8\u897F\u54E5"],"\u{1F1F2}\u{1F1FE}":["Malaysia","\u9A6C\u6765","\u99AC\u4F86","\u5409\u9686\u5761","\u5927\u99AC"],"\u{1F1F3}\u{1F1F1}":["Netherlands","\u8377\u5170","\u8377\u862D","\u5C3C\u5FB7\u862D","\u963F\u59C6\u65AF\u7279\u4E39"],"\u{1F1F3}\u{1F1F4}":["Norway","\u632A\u5A01"],"\u{1F1F3}\u{1F1F5}":["Nepal","\u5C3C\u6CCA\u5C14"],"\u{1F1F3}\u{1F1FF}":["New Zealand","\u65B0\u897F\u5170","\u65B0\u897F\u862D"],"\u{1F1F5}\u{1F1E6}":["Panama","\u5DF4\u62FF\u9A6C"],"\u{1F1F5}\u{1F1EA}":["Peru","\u79D8\u9C81","\u7955\u9B6F"],"\u{1F1F5}\u{1F1ED}":["Philippines","\u83F2\u5F8B\u5BBE","\u83F2\u5F8B\u8CD3"],"\u{1F1F5}\u{1F1F0}":["Pakistan","\u5DF4\u57FA\u65AF\u5766"],"\u{1F1F5}\u{1F1F1}":["Poland","\u6CE2\u5170","\u6CE2\u862D"],"\u{1F1F5}\u{1F1F7}":["Puerto Rico","\u6CE2\u591A\u9ECE\u5404"],"\u{1F1F5}\u{1F1F9}":["Portugal","\u8461\u8404\u7259"],"\u{1F1F5}\u{1F1FE}":["Paraguay","\u5DF4\u62C9\u572D"],"\u{1F1F7}\u{1F1F4}":["Romania","\u7F57\u9A6C\u5C3C\u4E9A"],"\u{1F1F7}\u{1F1F8}":["Serbia","\u585E\u5C14\u7EF4\u4E9A"],"\u{1F1F7}\u{1F1EA}":["R\xE9union","\u7559\u5C3C\u6C6A","\u6CD5\u5C5E\u7559\u5C3C\u6C6A"],"\u{1F1F7}\u{1F1FA}":["Russia","\u4FC4\u7F57\u65AF","\u4FC4\u56FD","\u4FC4\u7F85\u65AF","\u4F2F\u529B","\u83AB\u65AF\u79D1","\u5723\u5F7C\u5F97\u5821","\u897F\u4F2F\u5229\u4E9A","\u4EAC\u4FC4","\u676D\u4FC4","\u5EE3\u4FC4","\u6EEC\u4FC4","\u5E7F\u4FC4","\u6CAA\u4FC4","Moscow"],"\u{1F1F8}\u{1F1E6}":["Saudi","\u6C99\u7279\u963F\u62C9\u4F2F","\u6C99\u7279"],"\u{1F1F8}\u{1F1EA}":["Sweden","\u745E\u5178"],"\u{1F1F8}\u{1F1EC}":["Singapore","Singapo","\u65B0\u52A0\u5761","\u72EE\u57CE","\u6CAA\u65B0","\u4EAC\u65B0","\u4E2D\u65B0","\u6CC9\u65B0","\u7A57\u65B0","\u6DF1\u65B0","\u676D\u65B0","\u5E7F\u65B0","\u5EE3\u65B0","\u6EEC\u65B0"],"\u{1F1F8}\u{1F1EE}":["Slovenia","\u65AF\u6D1B\u6587\u5C3C\u4E9A"],"\u{1F1F8}\u{1F1F0}":["Slovakia","\u65AF\u6D1B\u4F10\u514B"],"\u{1F1F9}\u{1F1ED}":["Thailand","\u6CF0\u56FD","\u6CF0\u570B","\u66FC\u8C37"],"\u{1F1F9}\u{1F1F3}":["Tunisia","\u7A81\u5C3C\u65AF"],"\u{1F1F9}\u{1F1F7}":["Turkey","T\xFCrkiye","\u571F\u8033\u5176","\u4F0A\u65AF\u5766\u5E03\u5C14"],"\u{1F1F9}\u{1F1FC}":["Taiwan","\u53F0\u6E7E","\u81FA\u7063","\u53F0\u7063","\u4E2D\u83EF\u6C11\u570B","\u4E2D\u534E\u6C11\u56FD","\u53F0\u5317","\u53F0\u4E2D","\u65B0\u5317","\u5F70\u5316","\u53F0","\u81FA","Taipei"],"\u{1F1FA}\u{1F1E6}":["Ukraine","\u4E4C\u514B\u5170","\u70CF\u514B\u862D"],"\u{1F1FA}\u{1F1F8}":["United States","\u7F8E\u56FD","America","\u7F8E","\u4EAC\u7F8E","\u6CE2\u7279\u5170","\u8FBE\u62C9\u65AF","\u4FC4\u52D2\u5188","\u51E4\u51F0\u57CE","\u8D39\u5229\u8499","\u7845\u8C37","\u77FD\u8C37","\u62C9\u65AF\u7EF4\u52A0\u65AF","\u6D1B\u6749\u77F6","\u5723\u4F55\u585E","\u5723\u514B\u62C9\u62C9","\u897F\u96C5\u56FE","\u829D\u52A0\u54E5","\u6CAA\u7F8E","\u54E5\u4F26\u5E03","\u7EBD\u7EA6","Los Angeles","San Jose","Sillicon Valley","Michigan"],"\u{1F1FA}\u{1F1FE}":["Uruguay","\u4E4C\u62C9\u572D"],"\u{1F1FB}\u{1F1EA}":["Venezuela","\u59D4\u5185\u745E\u62C9"],"\u{1F1FB}\u{1F1F3}":["Vietnam","\u8D8A\u5357","\u80E1\u5FD7\u660E","Vi\u1EC7t Nam"],"\u{1F1FF}\u{1F1E6}":["South Africa","\u5357\u975E"],"\u{1F1E8}\u{1F1F3}":["China","\u4E2D\u56FD","\u4E2D\u570B","\u56DE\u56FD","\u56DE\u570B","\u56FD\u5185","\u570B\u5167","\u534E\u4E1C","\u534E\u897F","\u534E\u5357","\u534E\u5317","\u534E\u4E2D","\u6C5F\u82CF","\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733","\u676D\u5DDE","\u5F90\u5DDE","\u9752\u5C9B","\u5B81\u6CE2","\u9547\u6C5F"]},k={"\u{1F3F3}\uFE0F\u200D\u{1F308}":["EXP","BAND"],"\u{1F1F8}\u{1F1F1}":["TEST","SOS"],"\u{1F1E6}\u{1F1E9}":["AD","AND"],"\u{1F1E6}\u{1F1EA}":["AE","ARE"],"\u{1F1E6}\u{1F1EB}":["AF","AFG"],"\u{1F1E6}\u{1F1F1}":["AL","ALB"],"\u{1F1E6}\u{1F1F2}":["AM","ARM"],"\u{1F1E6}\u{1F1F7}":["AR","ARG"],"\u{1F1E6}\u{1F1F9}":["AT","AUT"],"\u{1F1E6}\u{1F1FA}":["AU","AUS"],"\u{1F1E6}\u{1F1FF}":["AZ","AZE"],"\u{1F1E7}\u{1F1E6}":["BA","BIH"],"\u{1F1E7}\u{1F1E9}":["BD","BGD"],"\u{1F1E7}\u{1F1EA}":["BE","BEL"],"\u{1F1E7}\u{1F1EC}":["BG","BGR"],"\u{1F1E7}\u{1F1ED}":["BH","BHR"],"\u{1F1E7}\u{1F1F7}":["BR","BRA"],"\u{1F1E7}\u{1F1FE}":["BY","BLR"],"\u{1F1E8}\u{1F1E6}":["CA","CAN"],"\u{1F1E8}\u{1F1ED}":["CH","CHE"],"\u{1F1E8}\u{1F1F1}":["CL","CHL"],"\u{1F1E8}\u{1F1F4}":["CO","COL"],"\u{1F1E8}\u{1F1F7}":["CR","CRI"],"\u{1F1E8}\u{1F1FE}":["CY","CYP"],"\u{1F1E8}\u{1F1FF}":["CZ","CZE"],"\u{1F1E9}\u{1F1EA}":["DE","DEU"],"\u{1F1E9}\u{1F1F0}":["DK","DNK"],"\u{1F1EA}\u{1F1E8}":["EC","ECU"],"\u{1F1EA}\u{1F1EA}":["EE","EST"],"\u{1F1EA}\u{1F1EC}":["EG","EGY"],"\u{1F1EA}\u{1F1F8}":["ES","ESP"],"\u{1F1EA}\u{1F1FA}":["EU"],"\u{1F1EB}\u{1F1EE}":["FI","FIN"],"\u{1F1EB}\u{1F1F7}":["FR","FRA"],"\u{1F1EC}\u{1F1E7}":["GB","GBR","UK"],"\u{1F1EC}\u{1F1EA}":["GE","GEO"],"\u{1F1EC}\u{1F1F7}":["GR","GRC"],"\u{1F1ED}\u{1F1F0}":["HK","HKG","HKT","HKBN","HGC","WTT","CMI"],"\u{1F1ED}\u{1F1F7}":["HR","HRV"],"\u{1F1ED}\u{1F1FA}":["HU","HUN"],"\u{1F1EF}\u{1F1F4}":["JO","JOR"],"\u{1F1EF}\u{1F1F5}":["JP","JPN"],"\u{1F1F0}\u{1F1EA}":["KE","KEN"],"\u{1F1F0}\u{1F1EC}":["KG","KGZ"],"\u{1F1F0}\u{1F1ED}":["KH","KGZ"],"\u{1F1F0}\u{1F1F5}":["KP","PRK"],"\u{1F1F0}\u{1F1F7}":["KR","KOR"],"\u{1F1F0}\u{1F1FF}":["KZ","KAZ"],"\u{1F1EE}\u{1F1E9}":["ID","IDN"],"\u{1F1EE}\u{1F1EA}":["IE","IRL"],"\u{1F1EE}\u{1F1F1}":["IL","ISR"],"\u{1F1EE}\u{1F1F2}":["IM","IMN"],"\u{1F1EE}\u{1F1F3}":["IN","IND"],"\u{1F1EE}\u{1F1F7}":["IR","IRN"],"\u{1F1EE}\u{1F1F8}":["IS","ISL"],"\u{1F1EE}\u{1F1F9}":["IT","ITA"],"\u{1F1F1}\u{1F1F9}":["LT","LTU"],"\u{1F1F1}\u{1F1FA}":["LU","LUX"],"\u{1F1F1}\u{1F1FB}":["LV","LVA"],"\u{1F1F2}\u{1F1E6}":["MA","MAR"],"\u{1F1F2}\u{1F1E9}":["MD","MDA"],"\u{1F1F3}\u{1F1EC}":["NG","NGA"],"\u{1F1F2}\u{1F1F0}":["MK","MKD"],"\u{1F1F2}\u{1F1F3}":["MN","MNG"],"\u{1F1F2}\u{1F1F4}":["MO","MAC","CTM"],"\u{1F1F2}\u{1F1F9}":["MT","MLT"],"\u{1F1F2}\u{1F1FD}":["MX","MEX"],"\u{1F1F2}\u{1F1FE}":["MY","MYS"],"\u{1F1F3}\u{1F1F1}":["NL","NLD"],"\u{1F1F3}\u{1F1F4}":["NO","NOR"],"\u{1F1F3}\u{1F1F5}":["NP","NPL"],"\u{1F1F3}\u{1F1FF}":["NZ","NZL"],"\u{1F1F5}\u{1F1E6}":["PA","PAN"],"\u{1F1F5}\u{1F1EA}":["PE","PER"],"\u{1F1F5}\u{1F1ED}":["PH","PHL"],"\u{1F1F5}\u{1F1F0}":["PK","PAK"],"\u{1F1F5}\u{1F1F1}":["PL","POL"],"\u{1F1F5}\u{1F1F7}":["PR","PRI"],"\u{1F1F5}\u{1F1F9}":["PT","PRT"],"\u{1F1F5}\u{1F1FE}":["PY","PRY"],"\u{1F1F7}\u{1F1F4}":["RO","ROU"],"\u{1F1F7}\u{1F1F8}":["RS","SRB"],"\u{1F1F7}\u{1F1EA}":["RE","REU"],"\u{1F1F7}\u{1F1FA}":["RU","RUS"],"\u{1F1F8}\u{1F1E6}":["SA","SAU"],"\u{1F1F8}\u{1F1EA}":["SE","SWE"],"\u{1F1F8}\u{1F1EC}":["SG","SGP"],"\u{1F1F8}\u{1F1EE}":["SI","SVN"],"\u{1F1F8}\u{1F1F0}":["SK","SVK"],"\u{1F1F9}\u{1F1ED}":["TH","THA"],"\u{1F1F9}\u{1F1F3}":["TN","TUN"],"\u{1F1F9}\u{1F1F7}":["TR","TUR"],"\u{1F1F9}\u{1F1FC}":["TW","TWN","CHT","HINET","ROC"],"\u{1F1FA}\u{1F1E6}":["UA","UKR"],"\u{1F1FA}\u{1F1F8}":["US","USA","LAX","SFO"],"\u{1F1FA}\u{1F1FE}":["UY","URY"],"\u{1F1FB}\u{1F1EA}":["VE","VEN"],"\u{1F1FB}\u{1F1F3}":["VN","VNM"],"\u{1F1FF}\u{1F1E6}":["ZA","ZAF"],"\u{1F1E8}\u{1F1F3}":["CN","CHN","BACK"]};function Y(u){var e;let F=((e=u.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/))==null?void 0:e[0])||"";for(const t of Object.keys(K))if(K[t].some(r=>RegExp(`${r}`,"i").test(u)))return F=t;for(const t of Object.keys(k))if(k[t].some(r=>RegExp(`(^|[^a-zA-Z])${r}([^a-zA-Z]|$)`).test(u)&&!/(\d+)\s*([MG]B)/.test(u)))return F=t;return F}var Eu=(u,e)=>(e=Symbol[u])?e:Symbol.for("Symbol."+u),Pu=Math.pow,B=(u,e,F)=>new Promise((t,n)=>{var r=o=>{try{a(F.next(o))}catch(i){n(i)}},E=o=>{try{a(F.throw(o))}catch(i){n(i)}},a=o=>o.done?t(o.value):Promise.resolve(o.value).then(r,E);a((F=F.apply(u,e)).next())}),$=(u,e,F)=>(e=u[Eu("asyncIterator")])?e.call(u):(u=u[Eu("iterator")](),e={},F=(t,n)=>(n=u[t])&&(e[t]=r=>new Promise((E,a,o)=>(r=n.call(u,r),o=r.done,Promise.resolve(r.value).then(i=>E({value:i,done:o}),a)))),F("next"),F("return"),e);const Ru="#sub-store-cached-dns",Lu="#sub-store-cached-country",Ou="#sub-store-cached-isp",Z=7*24*60*60*1e3,w=new b(Ru,Z),iu=new b(Lu,Z),lu=new b(Ou,Z),wu=/\{(0*)#\}/gi,vu=/\{F\}/gi,_u=/\{F:name\}/gi,Mu=/\{F:code\}/gi;function bu(u){return B(this,null,function*(){const{type:e,isSub:F,groupBy:t}=$arguments,n=u;let r=null;if(C(t)&&/flag/i.test(t)&&(r=su(n,"countryFlag")),C(F)&&/true/i.test(F)){const I=n.find(A=>C(A.subName)),D=yield xu(I.subName);if(!C(D)||!C(D.name))return n;if(r)for(const A in r){let d=0;const m=[];for(const p of r[A])d++,m.push(T(p,D.name,d));yield Promise.all(m)}else{let A=0;try{for(var E=$(n),a,o,i;a=!(o=yield E.next()).done;a=!1){const d=o.value;A++,yield T(d,D.name,A)}}catch(d){i=[d]}finally{try{a&&(o=E.return)&&(yield o.call(E))}finally{if(i)throw i[0]}}}return n}const v=yield Iu();if(C(e)&&C(v[e])){const I=v[e];if(r)for(const D in r){let A=0;const d=[];for(const m of r[D])A++,d.push(T(m,I.name,A));yield Promise.all(d)}else{let D=0;try{for(var z=$(n),J,_,W;J=!(_=yield z.next()).done;J=!1){const A=_.value;D++,yield T(A,I.name,D)}}catch(A){W=[A]}finally{try{J&&(_=z.return)&&(yield _.call(z))}finally{if(W)throw W[0]}}}}else{const I=(p,g)=>Cu(p.regex).test(g.name),D=(p,g)=>p.ports.some(N=>N===g.port),A=(p,g)=>B(this,null,function*(){return(yield Promise.all(p.ips.map(y=>Hu(g.server,y)))).some(y=>y)}),d=(p,g)=>B(this,null,function*(){return(yield Promise.all(p.isps.map(y=>Vu(g.server,y)))).some(y=>y)});let m=0;try{for(var j=$(n),X,M,q;X=!(M=yield j.next()).done;X=!1){const p=M.value;let g=!1,N="";for(const y in v){const f=v[y];if(C(f)){if(y==="default"){C(f.name)&&(g=!0,N=f.name);continue}if(!C(f.skip)||!f.skip){const x=[];if(C(f.regex)&&x.push(I),C(f.ports)&&x.push(D),C(f.ips)&&x.push(A),C(f.isps)&&x.push(d),(yield Gu(x,f,p))&&C(f.name)){g=!0,N=f.name;break}}}}g&&(m++,yield T(p,N,m))}}catch(p){q=[p]}finally{try{X&&(M=j.return)&&(yield M.call(j))}finally{if(q)throw q[0]}}}return n})}function T(u,e,F){return B(this,null,function*(){let t=e;t=ku(e,F);let n=u.countryFlag||Y(u.name);if(!n){const a=u.server,o=iu.get(a);if(o)n=Y(o);else{const i=yield gu(a);n=Y(i),n&&iu.set(a,i)}}t=t.replace(vu,n);const r=K[n][0];t=t.replace(_u,r);const E=k[n][0];t=t.replace(Mu,E),u.name=t})}function Gu(u,e,F){return B(this,null,function*(){return(yield Promise.all(u.map(n=>n(e,F)))).every(n=>n)})}function Vu(u,e){return B(this,null,function*(){let F=u;if(uu(u)){const t=w.get(u);if(t)F=t;else{const n=yield eu(u);F=n,n&&w.set(u,n)}}return Uu(F,e)})}function Uu(u,e){return B(this,null,function*(){let F="";const t=lu.get(u);return t?F=t:(F=yield hu(u),F&&lu.set(u,F)),!!pu[e].some(r=>RegExp(`${r}`,"i").test(F))})}function Hu(u,e){return B(this,null,function*(){let F=u;if(uu(u)){const t=w.get(u);if(t)F=t;else{const n=yield eu(u);F=n,n&&w.set(u,n)}}return Ku(F,e)})}function Ku(u,e){if(!fu(u))return!1;if(e.indexOf("/")<0)return!!(u===e||Du(u,e)&&du(e)==="*");let F,t;const n=L(u);if((F=e.match(/^(.*?)\/(\d{1,2})$/))&&(t=L(F[1]))>=0){const r=Pu(2,32-parseInt(F[2]));return n>=t&&n<=t+r-1}return!1}function ku(u,e){return u.replace(wu,(F,t)=>Yu(e,t.length+1))}function Yu(u,e){for(u=u.toString();u.length<e;)u=`0${u}`;return u}c().operator=bu})()})();})();
