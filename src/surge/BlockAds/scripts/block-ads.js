/*!
 substore-tools - version: 1.6.0
 Build fullhash:988b2a325b3004908a59, chunkhash:9017d99bf26865c8bffd (2024-05-16 16:06:12)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var g={};(()=>{const{body:n}=$response,o=d(n,["floating_ads_bottom_textcss_container"],["module_home_ads","module_single_ads"]);$done({body:o})})();function d(n,o,i){let t=n;function s(e,a,r){const c=r?"id":"class",l=r?a:`\\b${a}\\b`,p=new RegExp(`(<[^>]*${c}="[^"]*?${l}[^"]*"[^>]*?)style="[^"]*"([^>]*>)`,"gi");e=e.replace(p,'$1style="display:none"$2');const _=new RegExp(`(<[^>]*${c}="[^"]*?${l}[^"]*"[^>]*?)(>)`,"gi");return e=e.replace(_,'$1 style="display:none"$2'),e}return o.forEach(e=>{t=s(t,e,!0)}),i.forEach(e=>{t=s(t,e,!1)}),t}})();})();
