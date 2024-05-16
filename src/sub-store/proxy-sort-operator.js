/*!
 substore-tools - version: 1.7.0
 Build fullhash:19f9ff7231aa7fd2da00, chunkhash:d39e76935c2eb35ba90a (2024-05-16 22:03:43)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var T={3183:(c,s,u)=>{var f;typeof window!="undefined"?f=window:typeof u.g!="undefined"?f=u.g:typeof self!="undefined"?f=self:f={},c.exports=f},423:(c,s,u)=>{u.d(s,{ru:()=>b});var f=(l,h,d)=>new Promise((v,P)=>{var M=w=>{try{C(d.next(w))}catch(O){P(O)}},B=w=>{try{C(d.throw(w))}catch(O){P(O)}},C=w=>w.done?v(w.value):Promise.resolve(w.value).then(M,B);C((d=d.apply(l,h)).next())});function b(){return f(this,null,function*(){const l=yield produceArtifact({type:"file",name:"proxy_config"});return ProxyUtils.yaml.safeLoad(l)})}function _(){return f(this,null,function*(){const l=yield produceArtifact({type:"file",name:"subscription_config"});return ProxyUtils.yaml.safeLoad(l)})}function E(l){return f(this,null,function*(){const h=normalizeString(l),d=yield _();let v="";for(const P in d)if(containsIgnoreCase(h,normalizeString(P))){v=P;break}return d[v]})}},9085:(c,s,u)=>{u.d(s,{$:()=>b,G:()=>f});function f(_){return _&&_!=="null"&&_!=="undefined"}function b(_,E){return _.reduce((l,h)=>{const d=h[E];return l[d]||(l[d]=[]),l[d].push(h),l},{})}}},S={};function y(c){var s=S[c];if(s!==void 0)return s.exports;var u=S[c]={exports:{}};return T[c](u,u.exports,y),u.exports}y.n=c=>{var s=c&&c.__esModule?()=>c.default:()=>c;return y.d(s,{a:s}),s},y.d=(c,s)=>{for(var u in s)y.o(s,u)&&!y.o(c,u)&&Object.defineProperty(c,u,{enumerable:!0,get:s[u]})},y.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(c){if(typeof window=="object")return window}}(),y.o=(c,s)=>Object.prototype.hasOwnProperty.call(c,s);var x={};(()=>{var c=y(3183),s=y.n(c),u=y(9085),f=y(423),b=(n,t)=>(t=Symbol[n])?t:Symbol.for("Symbol."+n),_=(n,t,e)=>new Promise((r,o)=>{var a=i=>{try{p(e.next(i))}catch(g){o(g)}},m=i=>{try{p(e.throw(i))}catch(g){o(g)}},p=i=>i.done?r(i.value):Promise.resolve(i.value).then(a,m);p((e=e.apply(n,t)).next())}),E=(n,t,e)=>(t=n[b("asyncIterator")])?t.call(n):(n=n[b("iterator")](),t={},e=(r,o)=>(o=n[r])&&(t[r]=a=>new Promise((m,p,i)=>(a=o.call(n,a),i=a.done,Promise.resolve(a.value).then(g=>m({value:g,done:i}),p)))),e("next"),e("return"),t);const l=/^([^:]+):([^:]+)(:([^:]*))?$/i;function h(){return _(this,arguments,function*(n=[],t,e){const{type:r,mode:o}=$arguments,a=yield(0,f.ru)();return/all/i.test(o)?yield d(n,a):yield v(n,r,a)})}function d(n,t){return _(this,null,function*(){const e=[],r=(0,u.$)(n,"filterType");for(const o in r){let a=[];const m=r[o];(0,u.G)(m)&&(0,u.G)(m.length)&&m.length>0&&(a=yield v(m,o,t)),e.push(...a)}return e})}function v(n,t,e){return _(this,null,function*(){const r=(0,u.G)(t)?e[t]:e[n[0].collectionName];if(!(0,u.G)(r)||!(0,u.G)(r.sorts))return n;let o=[];try{for(var a=E(r.sorts),m,p,i;m=!(p=yield a.next()).done;m=!1){const g=p.value;o=yield P(g,n)}}catch(g){i=[g]}finally{try{m&&(p=a.return)&&(yield p.call(a))}finally{if(i)throw i[0]}}return o})}function P(n,t){return _(this,null,function*(){const e=O(n);if(e.length<2||e.length>3)return t;if(e.length===2)switch(e[0].toLowerCase()){case"name":return B(t,e[1]);case"flag":return M(t,e[1]);default:return t}if(e.length===3)switch(e[0].toLowerCase()){case"name":return C(t,e[1],e[2]);case"flag":return yield w(t,e[1],e[2]);default:return t}return t})}function M(n,t){const e=(0,u.$)(n,"countryName");switch(t.toLowerCase()){case"asc":return Object.keys(e).sort().map(r=>e[r]).reduce((r,o)=>r.concat(o),[]);case"desc":return Object.keys(e).sort((r,o)=>o.localeCompare(r)).map(r=>e[r]).reduce((r,o)=>r.concat(o),[]);default:return n}}function B(n,t){switch(t.toLowerCase()){case"asc":return n.sort((e,r)=>{const o=e.name.localeCompare(r.name);return o===0&&L(e.name)&&L(r.name)?A(e.name,r.name):o});case"desc":return n.sort((e,r)=>{const o=r.name.localeCompare(e.name);return o===0&&L(e.name)&&L(r.name)?A(e.name,r.name):o});default:return n}}function C(n,t,e){const r=n.filter(a=>a.name.indexOf(t)>-1),o=n.filter(a=>a.name.indexOf(t)<0);switch(e.toLowerCase()){case"first":return[...r,...o];case"last":return[...o,...r];default:return n}}function w(n,t,e){return _(this,null,function*(){const r=n.filter(a=>a.countryFlag===t),o=n.filter(a=>a.countryFlag!==t);switch(e.toLowerCase()){case"first":return[...r,...o];case"last":return[...o,...r];default:return n}})}function O(n){const t=n.match(l);if(t){const e=[t[1],t[2]];return t[4]!==void 0&&e.push(t[4]),e}return null}function A(n,t){const e=parseInt(n.match(/(\d+)/)[1],10),r=parseInt(t.match(/(\d+)/)[1],10);return e-r}function L(n){return/\d/.test(n)}s().operator=h})()})();})();
