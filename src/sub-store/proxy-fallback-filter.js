/*!
 substore-tools - version: 1.8.1
 Build fullhash:21d96bbaf966acf05890, chunkhash:30625681786dcf9319dc (2024-05-21 03:48:34)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var S={3183:(u,c,l)=>{var o;typeof window!="undefined"?o=window:typeof l.g!="undefined"?o=l.g:typeof self!="undefined"?o=self:o={},u.exports=o}},h={};function p(u){var c=h[u];if(c!==void 0)return c.exports;var l=h[u]={exports:{}};return S[u](l,l.exports,p),l.exports}p.n=u=>{var c=u&&u.__esModule?()=>u.default:()=>u;return p.d(c,{a:c}),c},p.d=(u,c)=>{for(var l in c)p.o(c,l)&&!p.o(u,l)&&Object.defineProperty(u,l,{enumerable:!0,get:c[l]})},p.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(u){if(typeof window=="object")return window}}(),p.o=(u,c)=>Object.prototype.hasOwnProperty.call(u,c);var O={};(()=>{var u=p(3183),c=p.n(u);function l(e){let n=e.replace(/[-_]/g," ");return n=n.replace(/\s+/g," "),n=n.trim(),n}function o(e,n){return e.toLowerCase().endsWith(n.toLowerCase())}function $(e,n){const r=e.toLowerCase(),t=n.toLowerCase();return r.includes(t)}function C(e){return e.toLowerCase()}function x(e){return e.toUpperCase()}function y(e){return e=E(e),e=A(e).replace(/\-/g," ").replace(/\s[a-z]/g,x).replace(/\s+/g,"").replace(/^[A-Z]/g,C),e}function m(e){return e=e.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g,"$1 $2"),e=e.toLowerCase(),e}function j(e){return C(e).replace(/^\w|\s\w/g,x)}function z(e){return y(e).replace(/^[a-z]/,x)}function B(e){return C(e).replace(/(^\w)|\.\s+(\w)/gm,x)}function F(e,n){return n==null&&(n="-"),e=E(e),e=A(e),e=_(e).replace(/ +/g,n).toLowerCase(),e}function I(e){return e=m(e),F(e,"-")}function H(e){return e.replace(/(\w)(-)(\w)/g,"$1 $3")}function U(e){return e=m(e),F(e,"_")}function A(e){return e.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g,"")}function M(e,n){return n=n||`
`,e.replace(/\r\n/g,n).replace(/\r/g,n).replace(/\n/g,n)}function E(e){return e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}function T(e,n,r){return e.indexOf(n,r)!==-1}function Z(e,n,r){return N(e,n,r,!0)}function W(e){const n=/[\\.+*?\^$\[\](){}\/'#]/g;return e.replace(n,"\\$&")}function q(e){return e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;"),e}function R(e){return e=e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#39;/g,"'").replace(/&quot;/g,'"'),e}function K(e,n){return e.replace(/[\s\S]/g,r=>!n&&/[\x20-\x7E]/.test(r)?r:`\\u${`000${r.charCodeAt(0).toString(16)}`.slice(-4)}`)}function Y(e){return e.replace(/<[^>]*>/g,"")}function G(e){return e.replace(/[^\x20-\x7E]/g,"")}function J(e,n,r){const t=/\{\{(\w+)\}\}/g,g=(i,a)=>a in n?n[a]:"";return e.replace(r||t,g)}function Q(e,n,r){return r=r||" ",e.length<n?e+v(r,n-e.length):e}function V(e,n,r){return r=r||" ",e.length<n?v(r,n-e.length)+e:e}function v(e,n){return new Array(n+1).join(e)}function N(e,n,r,t){return r=r||"...",n=t?n+1:n,e=_(e),e.length<=n?e:(e=e.substr(0,n-r.length),e=t?e.substr(0,e.lastIndexOf(" ")):_(e),e+r)}const b=null;function D(e,n){n=n||b;let r=0;const t=e.length,g=n.length;let i=!0,a,f;for(;i&&r<t;)for(i=!1,a=-1,f=e.charAt(r);++a<g;)if(f===n[a]){i=!0,r++;break}return r>=t?"":e.substr(r,t)}function L(e,n){n=n||b;let r=e.length-1;const t=n.length;let g=!0,i,a;for(;g&&r>=0;)for(g=!1,i=-1,a=e.charAt(r);++i<t;)if(a===n[i]){g=!0,r--;break}return r>=0?e.substring(0,r+1):""}function _(e,n){return n=n||b,D(L(e,n),n)}function X(e){return e.match(/\b([A-Z])/g).join("")}const w="-master",d="-slave";function P(e=[],n,r){const t=[];t.push(...e.filter(a=>!o(a.subName,w)&&!o(a.subName,d)));const g=e.filter(a=>o(a.subName,w)||o(a.subName,d)),i=k(g);for(const a in i){const f=i[a];f.some(s=>o(s.subName,w))?t.push(...f.filter(s=>o(s.subName,w))):t.push(...f.filter(s=>o(s.subName,d)))}return t}function k(e){return e.reduce((n,r)=>{const t=r.subName.substring(0,r.subName.lastIndexOf("-"));return(n[t]||(n[t]=[])).push(r),n},{})}c().operator=P})()})();})();
