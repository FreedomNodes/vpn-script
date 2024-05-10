/*!
 substore-tools - version: 1.2.1
 Build fullhash:66fafc714c2839b15406, chunkhash:7b7cbec4682baed69190 (2024-05-10 23:02:32)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var b={3183:(e,r,t)=>{var n;typeof window!="undefined"?n=window:typeof t.g!="undefined"?n=t.g:typeof self!="undefined"?n=self:n={},e.exports=n}},l={};function s(e){var r=l[e];if(r!==void 0)return r.exports;var t=l[e]={exports:{}};return b[e](t,t.exports,s),t.exports}s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(e){if(typeof window=="object")return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var h={};(()=>{var e=s(3183),r=s.n(e);const t="-master",n="-slave";function d(c){const o=[];o.push(...c.filter(a=>!a.subName.endsWith(t)&&!a.subName.endsWith(n)));const u=c.filter(a=>a.subName.endsWith(t)||a.subName.endsWith(n)),_=p(u);for(const a in _){const f=_[a];f.some(i=>i.subName.endsWith(t))?o.push(...f.filter(i=>i.subName.endsWith(t))):o.push(...f.filter(i=>i.subName.endsWith(n)))}return o}function p(c){return c.reduce((o,u)=>{const _=u.subName.substring(0,u.subName.lastIndexOf("-"));return(o[_]||(o[_]=[])).push(u),o},{})}r().operator=d})()})();})();
