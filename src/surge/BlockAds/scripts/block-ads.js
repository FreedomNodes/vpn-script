(()=>{(()=>{"use strict";var d={};(()=>{const{body:t}=$response,e=n(t,"module_home_ads");$done({body:e})})();function n(t,e){const l=new RegExp(`(<[^>]*class="[^"]*?\\b${e}\\b[^"]*"[^>]*?)style="[^"]*"([^>]*>)`,"gi");let s=t.replace(l,'$1style="display:none"$2');const o=new RegExp(`(<[^>]*class="[^"]*?\\b${e}\\b[^"]*"[^>]*?)(>)`,"gi");return s=s.replace(o,'$1 style="display:none"$2'),s}})();})();
