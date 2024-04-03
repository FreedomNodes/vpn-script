(()=>{(()=>{var y={};$httpClient.get("http://ip-api.com/json/?fields=8450015&lang=VI",function(o,e,n){let t=JSON.parse(n),l=t.query,a=t.isp,c=t.as,p=t.country,s=t.city,F=t.timezone,m=t.lon,$=t.lat,A=t.currency,g=i(t.countryCode);const r=u($argument);body={title:" TH\xD4NG TIN PROXY ",content:`IP\uFF1A${l}
ISP\uFF1A${a}
ASN\uFF1A${c}
Khu v\u1EF1c\uFF1A${g}${p}
Th\xE0nh ph\u1ED1\uFF1A${s}
M\xFAi gi\u1EDD\uFF1A${F}
Kinh,v\u0129 \u0111\u1ED9\uFF1A${m},${$}
Ti\u1EC1n t\u1EC7\uFF1A${A}`,icon:r.icon,"icon-color":r.color},$done(body)});function i(o){o.toUpperCase()=="VI"&&(o="VI");const e=o.toUpperCase().split("").map(n=>127397+n.charCodeAt());return String.fromCodePoint(...e)}function u(o){return Object.fromEntries($argument.split("&").map(e=>e.split("=")).map(([e,n])=>[e,decodeURIComponent(n)]))}})();})();
