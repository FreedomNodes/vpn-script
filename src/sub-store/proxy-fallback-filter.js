/*!
 substore-tools - version: 1.4.0
 Build fullhash:df8b18cd24e395e7499d, chunkhash:7f599ff78058388d5e6b (2024-05-12 22:55:45)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var p={3183:(e,r,t)=>{var n;typeof window!="undefined"?n=window:typeof t.g!="undefined"?n=t.g:typeof self!="undefined"?n=self:n={},e.exports=n}},l={};function s(e){var r=l[e];if(r!==void 0)return r.exports;var t=l[e]={exports:{}};return p[e](t,t.exports,s),t.exports}s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(e){if(typeof window=="object")return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var m={};(()=>{var e=s(3183),r=s.n(e);const t="-master",n="-slave";function h(_=[],i,c){const o=[];o.push(..._.filter(a=>!a.subName.endsWith(t)&&!a.subName.endsWith(n)));const b=_.filter(a=>a.subName.endsWith(t)||a.subName.endsWith(n)),d=w(b);for(const a in d){const f=d[a];f.some(u=>u.subName.endsWith(t))?o.push(...f.filter(u=>u.subName.endsWith(t))):o.push(...f.filter(u=>u.subName.endsWith(n)))}return o}function w(_){return _.reduce((i,c)=>{const o=c.subName.substring(0,c.subName.lastIndexOf("-"));return(i[o]||(i[o]=[])).push(c),i},{})}r().operator=h})()})();})();
