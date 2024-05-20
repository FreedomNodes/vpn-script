/*!
 substore-tools - version: 1.8.1
 Build fullhash:21d96bbaf966acf05890, chunkhash:123848d4a8ab0855d0b8 (2024-05-20 12:17:07)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var T={3183:(e,o,s)=>{var p;typeof window!="undefined"?p=window:typeof s.g!="undefined"?p=s.g:typeof self!="undefined"?p=self:p={},e.exports=p}},E={};function i(e){var o=E[e];if(o!==void 0)return o.exports;var s=E[e]={exports:{}};return T[e](s,s.exports,i),s.exports}i.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return i.d(o,{a:o}),o},i.d=(e,o)=>{for(var s in o)i.o(o,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(e){if(typeof window=="object")return window}}(),i.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o);var L={};(()=>{var e=i(3183),o=i.n(e),s=Object.defineProperty,p=Object.defineProperties,F=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,j=(r,a,t)=>a in r?s(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,O=(r,a)=>{for(var t in a||(a={}))R.call(a,t)&&j(r,t,a[t]);if(U)for(var t of U(a))I.call(a,t)&&j(r,t,a[t]);return r},S=(r,a)=>p(r,F(a)),x=(r,a,t)=>new Promise((P,n)=>{var D=u=>{try{_(t.next(u))}catch(l){n(l)}},$=u=>{try{_(t.throw(u))}catch(l){n(l)}},_=u=>u.done?P(u.value):Promise.resolve(u.value).then(D,$);_((t=t.apply(r,a)).next())});function A(){return x(this,arguments,function*(r=[],a,t){var P;let n=$arguments||{};const{parseFlowHeaders:D,getFlowHeaders:$,flowTransfer:_,getRmainingDays:u}=flowUtils,l=t.source[r[0].subName];let v;if(l.source==="local"&&!["localFirst","remoteFirst"].includes(l.mergeSources))l.subUserinfo&&(v=l.subUserinfo);else{let c=(P=`${l.url}`.split(/[\r\n]+/).map(w=>w.trim()).filter(w=>w.length))==null?void 0:P[0],d={};const y=c.split("#");if(c=c.split("#")[0],y.length>1)try{d=JSON.parse(decodeURIComponent(y[1]))}catch(w){for(const g of y[1].split("&")){const h=g.split("=")[0],f=g.split("=")[1];d[h]=f==null||f===""?!0:decodeURIComponent(f)}}n=O(O({},d),n),n.noFlow||(l.subUserinfo?v=l.subUserinfo:v=yield $(c))}if(v){let{expires:c,total:d,usage:{upload:y,download:w}}=D(v);n.hideExpire&&(c=void 0);const g=c?new Date(c*1e3).toLocaleDateString():"";let h;try{h=u({resetDay:n.resetDay,startDate:n.startDate,cycleDays:n.cycleDays})}catch(N){}let f=y+w;n.showRemaining&&(f=d-f);const b=_(Math.abs(f));b.value=f<0?`-${b.value}`:b.value;const M=_(d);let m=`flow ${b.value} ${b.unit} / ${M.value} ${M.unit}`;h&&(m=`${m} | ${h} day`),g&&(m=`${m} | ${g}`);const C=r[r.length-1]||{type:"ss",server:"1.0.0.1",port:80,cipher:"aes-128-gcm",password:"password"};r.unshift(S(O({},C),{name:m}))}return r})}o().operator=A})()})();})();
