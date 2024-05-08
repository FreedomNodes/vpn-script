
 /*
 fullhash:e1370f1030e67aed30a4, chunkhash:04932534b8f25a31395d, file:surge/BlockAds/scripts/block-ads.js
 author: Kien Tran
 */
(()=>{(()=>{"use strict";var g={};(()=>{const{body:n}=$response,o=d(n,["floating_ads_bottom_textcss_container"],["module_home_ads","module_single_ads"]);$done({body:o})})();function d(n,o,i){let t=n;function s(e,a,r){const c=r?"id":"class",l=r?a:`\\b${a}\\b`,p=new RegExp(`(<[^>]*${c}="[^"]*?${l}[^"]*"[^>]*?)style="[^"]*"([^>]*>)`,"gi");e=e.replace(p,'$1style="display:none"$2');const _=new RegExp(`(<[^>]*${c}="[^"]*?${l}[^"]*"[^>]*?)(>)`,"gi");return e=e.replace(_,'$1 style="display:none"$2'),e}return o.forEach(e=>{t=s(t,e,!0)}),i.forEach(e=>{t=s(t,e,!1)}),t}})();})();
