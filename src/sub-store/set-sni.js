(()=>{(()=>{"use strict";var f={183:(e,r,n)=>{var a;typeof window!="undefined"?a=window:typeof n.g!="undefined"?a=n.g:typeof self!="undefined"?a=self:a={},e.exports=a}},o={};function s(e){var r=o[e];if(r!==void 0)return r.exports;var n=o[e]={exports:{}};return f[e](n,n.exports,s),n.exports}s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var n in r)s.o(r,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(e){if(typeof window=="object")return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var c={};(()=>{var e=s(183),r=s.n(e);function n(t){return t&&t!=="null"&&t!=="undefined"}function a(t,i){t.type==="vmess"&&t.network==="ws"&&(t["ws-opts"]=t["ws-opts"]||{},t["ws-opts"].headers=t["ws-opts"].headers||{},t["ws-opts"].headers.Host=i),t.sni=i,n(t["skip-cert-verify"])||(t["skip-cert-verify"]=!0)}function w(t){const{sni:i}=$arguments;return t.map(u=>(a(u,i),u))}r().operator=w})()})();})();
