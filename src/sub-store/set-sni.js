(()=>{(()=>{"use strict";var w={183:(e,r,n)=>{var i;typeof window!="undefined"?i=window:typeof n.g!="undefined"?i=n.g:typeof self!="undefined"?i=self:i={},e.exports=i}},f={};function s(e){var r=f[e];if(r!==void 0)return r.exports;var n=f[e]={exports:{}};return w[e](n,n.exports,s),n.exports}s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var n in r)s.o(r,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(e){if(typeof window=="object")return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var _={};(()=>{var e=s(183),r=s.n(e);function n(t){return t&&t!=="null"&&t!=="undefined"}function i(t,a){return t.reduce((o,c)=>{const u=c[a];return o[u]||(o[u]=[]),o[u].push(c),o},{})}function d(t,a){t.type==="vmess"&&t.network==="ws"&&(t["ws-opts"]=t["ws-opts"]||{},t["ws-opts"].headers=t["ws-opts"].headers||{},t["ws-opts"].headers.Host=a),t.sni=a,n(t["skip-cert-verify"])||(t["skip-cert-verify"]=!0)}function p(t){const{sni:a}=$arguments;return t.map(o=>(d(o,a),o))}r().operator=p})()})();})();
