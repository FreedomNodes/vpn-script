(()=>{(()=>{"use strict";var u={};function n(e){return e&&e!=="null"&&e!=="undefined"}function i(e,s){e.type==="vmess"&&e.network==="ws"&&(e["ws-opts"]=e["ws-opts"]||{},e["ws-opts"].headers=e["ws-opts"].headers||{},e["ws-opts"].headers.Host=s),e.sni=s,n(e["skip-cert-verify"])||(e["skip-cert-verify"]=!0)}function r(e){const{sni:s}=$arguments;return e.map(t=>(i(t,s),t))}window.operator=r})();})();
