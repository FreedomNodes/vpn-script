/*!
 Made with ❤️ in Hanoi
 Build fullhash:2af83bd1581f295b28b6, chunkhash:c054fbb2c0d3478548f1 (2024-05-18 19:15:03)

 Author: Kien Tran
*/
(()=>{var k=(A,R)=>()=>(R||A((R={exports:{}}).exports,R),R.exports);var H=(A,R,b)=>new Promise((K,t)=>{var u=n=>{try{e(b.next(n))}catch(a){t(a)}},r=n=>{try{e(b.throw(n))}catch(a){t(a)}},e=n=>n.done?K(n.value):Promise.resolve(n.value).then(u,r);e((b=b.apply(A,R)).next())});var q=k(J=>{(()=>{"use strict";var A={9306:(t,u,r)=>{var e=r(4901),n=r(6823),a=TypeError;t.exports=function(o){if(e(o))return o;throw new a(n(o)+" is not a function")}},3506:(t,u,r)=>{var e=r(3925),n=String,a=TypeError;t.exports=function(o){if(e(o))return o;throw new a("Can't set "+n(o)+" as a prototype")}},6469:(t,u,r)=>{var e=r(8227),n=r(2360),a=r(4913).f,o=e("unscopables"),s=Array.prototype;s[o]===void 0&&a(s,o,{configurable:!0,value:n(null)}),t.exports=function(i){s[o][i]=!0}},8551:(t,u,r)=>{var e=r(34),n=String,a=TypeError;t.exports=function(o){if(e(o))return o;throw new a(n(o)+" is not an object")}},9617:(t,u,r)=>{var e=r(5397),n=r(5610),a=r(6198),o=function(s){return function(i,v,l){var p=e(i),f=a(p);if(f===0)return!s&&-1;var c=n(l,f),d;if(s&&v!==v){for(;f>c;)if(d=p[c++],d!==d)return!0}else for(;f>c;c++)if((s||c in p)&&p[c]===v)return s||c||0;return!s&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4576:(t,u,r)=>{var e=r(9504),n=e({}.toString),a=e("".slice);t.exports=function(o){return a(n(o),8,-1)}},7740:(t,u,r)=>{var e=r(9297),n=r(5031),a=r(7347),o=r(4913);t.exports=function(s,i,v){for(var l=n(i),p=o.f,f=a.f,c=0;c<l.length;c++){var d=l[c];!e(s,d)&&!(v&&e(v,d))&&p(s,d,f(i,d))}}},2211:(t,u,r)=>{var e=r(9039);t.exports=!e(function(){function n(){}return n.prototype.constructor=null,Object.getPrototypeOf(new n)!==n.prototype})},2529:t=>{t.exports=function(u,r){return{value:u,done:r}}},6699:(t,u,r)=>{var e=r(3724),n=r(4913),a=r(6980);t.exports=e?function(o,s,i){return n.f(o,s,a(1,i))}:function(o,s,i){return o[s]=i,o}},6980:t=>{t.exports=function(u,r){return{enumerable:!(u&1),configurable:!(u&2),writable:!(u&4),value:r}}},6840:(t,u,r)=>{var e=r(4901),n=r(4913),a=r(283),o=r(9433);t.exports=function(s,i,v,l){l||(l={});var p=l.enumerable,f=l.name!==void 0?l.name:i;if(e(v)&&a(v,f,l),l.global)p?s[i]=v:o(i,v);else{try{l.unsafe?s[i]&&(p=!0):delete s[i]}catch(c){}p?s[i]=v:n.f(s,i,{value:v,enumerable:!1,configurable:!l.nonConfigurable,writable:!l.nonWritable})}return s}},9433:(t,u,r)=>{var e=r(4475),n=Object.defineProperty;t.exports=function(a,o){try{n(e,a,{value:o,configurable:!0,writable:!0})}catch(s){e[a]=o}return o}},3724:(t,u,r)=>{var e=r(9039);t.exports=!e(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})},4055:(t,u,r)=>{var e=r(4475),n=r(34),a=e.document,o=n(a)&&n(a.createElement);t.exports=function(s){return o?a.createElement(s):{}}},7400:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},9296:(t,u,r)=>{var e=r(4055),n=e("span").classList,a=n&&n.constructor&&n.constructor.prototype;t.exports=a===Object.prototype?void 0:a},9392:t=>{t.exports=typeof navigator!="undefined"&&String(navigator.userAgent)||""},7388:(t,u,r)=>{var e=r(4475),n=r(9392),a=e.process,o=e.Deno,s=a&&a.versions||o&&o.version,i=s&&s.v8,v,l;i&&(v=i.split("."),l=v[0]>0&&v[0]<4?1:+(v[0]+v[1])),!l&&n&&(v=n.match(/Edge\/(\d+)/),(!v||v[1]>=74)&&(v=n.match(/Chrome\/(\d+)/),v&&(l=+v[1]))),t.exports=l},8727:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6518:(t,u,r)=>{var e=r(4475),n=r(7347).f,a=r(6699),o=r(6840),s=r(9433),i=r(7740),v=r(2796);t.exports=function(l,p){var f=l.target,c=l.global,d=l.stat,O,h,g,S,P,T;if(c?h=e:d?h=e[f]||s(f,{}):h=e[f]&&e[f].prototype,h)for(g in p){if(P=p[g],l.dontCallGetSet?(T=n(h,g),S=T&&T.value):S=h[g],O=v(c?g:f+(d?".":"#")+g,l.forced),!O&&S!==void 0){if(typeof P==typeof S)continue;i(P,S)}(l.sham||S&&S.sham)&&a(P,"sham",!0),o(h,g,P,l)}}},9039:t=>{t.exports=function(u){try{return!!u()}catch(r){return!0}}},616:(t,u,r)=>{var e=r(9039);t.exports=!e(function(){var n=function(){}.bind();return typeof n!="function"||n.hasOwnProperty("prototype")})},9565:(t,u,r)=>{var e=r(616),n=Function.prototype.call;t.exports=e?n.bind(n):function(){return n.apply(n,arguments)}},350:(t,u,r)=>{var e=r(3724),n=r(9297),a=Function.prototype,o=e&&Object.getOwnPropertyDescriptor,s=n(a,"name"),i=s&&function(){}.name==="something",v=s&&(!e||e&&o(a,"name").configurable);t.exports={EXISTS:s,PROPER:i,CONFIGURABLE:v}},6706:(t,u,r)=>{var e=r(9504),n=r(9306);t.exports=function(a,o,s){try{return e(n(Object.getOwnPropertyDescriptor(a,o)[s]))}catch(i){}}},9504:(t,u,r)=>{var e=r(616),n=Function.prototype,a=n.call,o=e&&n.bind.bind(a,a);t.exports=e?o:function(s){return function(){return a.apply(s,arguments)}}},7751:(t,u,r)=>{var e=r(4475),n=r(4901),a=function(o){return n(o)?o:void 0};t.exports=function(o,s){return arguments.length<2?a(e[o]):e[o]&&e[o][s]}},5966:(t,u,r)=>{var e=r(9306),n=r(4117);t.exports=function(a,o){var s=a[o];return n(s)?void 0:e(s)}},4475:function(t,u,r){var e=function(n){return n&&n.Math===Math&&n};t.exports=e(typeof globalThis=="object"&&globalThis)||e(typeof window=="object"&&window)||e(typeof self=="object"&&self)||e(typeof r.g=="object"&&r.g)||e(typeof this=="object"&&this)||function(){return this}()||Function("return this")()},9297:(t,u,r)=>{var e=r(9504),n=r(8981),a=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(s,i){return a(n(s),i)}},421:t=>{t.exports={}},397:(t,u,r)=>{var e=r(7751);t.exports=e("document","documentElement")},5917:(t,u,r)=>{var e=r(3724),n=r(9039),a=r(4055);t.exports=!e&&!n(function(){return Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a!==7})},7055:(t,u,r)=>{var e=r(9504),n=r(9039),a=r(4576),o=Object,s=e("".split);t.exports=n(function(){return!o("z").propertyIsEnumerable(0)})?function(i){return a(i)==="String"?s(i,""):o(i)}:o},3706:(t,u,r)=>{var e=r(9504),n=r(4901),a=r(7629),o=e(Function.toString);n(a.inspectSource)||(a.inspectSource=function(s){return o(s)}),t.exports=a.inspectSource},1181:(t,u,r)=>{var e=r(8622),n=r(4475),a=r(34),o=r(6699),s=r(9297),i=r(7629),v=r(6119),l=r(421),p="Object already initialized",f=n.TypeError,c=n.WeakMap,d,O,h,g=function(y){return h(y)?O(y):d(y,{})},S=function(y){return function(x){var m;if(!a(x)||(m=O(x)).type!==y)throw new f("Incompatible receiver, "+y+" required");return m}};if(e||i.state){var P=i.state||(i.state=new c);P.get=P.get,P.has=P.has,P.set=P.set,d=function(y,x){if(P.has(y))throw new f(p);return x.facade=y,P.set(y,x),x},O=function(y){return P.get(y)||{}},h=function(y){return P.has(y)}}else{var T=v("state");l[T]=!0,d=function(y,x){if(s(y,T))throw new f(p);return x.facade=y,o(y,T,x),x},O=function(y){return s(y,T)?y[T]:{}},h=function(y){return s(y,T)}}t.exports={set:d,get:O,has:h,enforce:g,getterFor:S}},4901:t=>{var u=typeof document=="object"&&document.all;t.exports=typeof u=="undefined"&&u!==void 0?function(r){return typeof r=="function"||r===u}:function(r){return typeof r=="function"}},2796:(t,u,r)=>{var e=r(9039),n=r(4901),a=/#|\.prototype\./,o=function(p,f){var c=i[s(p)];return c===l?!0:c===v?!1:n(f)?e(f):!!f},s=o.normalize=function(p){return String(p).replace(a,".").toLowerCase()},i=o.data={},v=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},4117:t=>{t.exports=function(u){return u==null}},34:(t,u,r)=>{var e=r(4901);t.exports=function(n){return typeof n=="object"?n!==null:e(n)}},3925:(t,u,r)=>{var e=r(34);t.exports=function(n){return e(n)||n===null}},6395:t=>{t.exports=!1},757:(t,u,r)=>{var e=r(7751),n=r(4901),a=r(1625),o=r(7040),s=Object;t.exports=o?function(i){return typeof i=="symbol"}:function(i){var v=e("Symbol");return n(v)&&a(v.prototype,s(i))}},3994:(t,u,r)=>{var e=r(7657).IteratorPrototype,n=r(2360),a=r(6980),o=r(687),s=r(6269),i=function(){return this};t.exports=function(v,l,p,f){var c=l+" Iterator";return v.prototype=n(e,{next:a(+!f,p)}),o(v,c,!1,!0),s[c]=i,v}},1088:(t,u,r)=>{var e=r(6518),n=r(9565),a=r(6395),o=r(350),s=r(4901),i=r(3994),v=r(2787),l=r(2967),p=r(687),f=r(6699),c=r(6840),d=r(8227),O=r(6269),h=r(7657),g=o.PROPER,S=o.CONFIGURABLE,P=h.IteratorPrototype,T=h.BUGGY_SAFARI_ITERATORS,y=d("iterator"),x="keys",m="values",I="entries",$=function(){return this};t.exports=function(V,w,B,Z,C,Q,Y){i(B,w,Z);var N=function(j){if(j===C&&F)return F;if(!T&&j&&j in E)return E[j];switch(j){case x:return function(){return new B(this,j)};case m:return function(){return new B(this,j)};case I:return function(){return new B(this,j)}}return function(){return new B(this)}},W=w+" Iterator",U=!1,E=V.prototype,M=E[y]||E["@@iterator"]||C&&E[C],F=!T&&M||N(C),z=w==="Array"&&E.entries||M,L,G,D;if(z&&(L=v(z.call(new V)),L!==Object.prototype&&L.next&&(!a&&v(L)!==P&&(l?l(L,P):s(L[y])||c(L,y,$)),p(L,W,!0,!0),a&&(O[W]=$))),g&&C===m&&M&&M.name!==m&&(!a&&S?f(E,"name",m):(U=!0,F=function(){return n(M,this)})),C)if(G={values:N(m),keys:Q?F:N(x),entries:N(I)},Y)for(D in G)(T||U||!(D in E))&&c(E,D,G[D]);else e({target:w,proto:!0,forced:T||U},G);return(!a||Y)&&E[y]!==F&&c(E,y,F,{name:C}),O[w]=F,G}},7657:(t,u,r)=>{var e=r(9039),n=r(4901),a=r(34),o=r(2360),s=r(2787),i=r(6840),v=r(8227),l=r(6395),p=v("iterator"),f=!1,c,d,O;[].keys&&(O=[].keys(),"next"in O?(d=s(s(O)),d!==Object.prototype&&(c=d)):f=!0);var h=!a(c)||e(function(){var g={};return c[p].call(g)!==g});h?c={}:l&&(c=o(c)),n(c[p])||i(c,p,function(){return this}),t.exports={IteratorPrototype:c,BUGGY_SAFARI_ITERATORS:f}},6269:t=>{t.exports={}},6198:(t,u,r)=>{var e=r(8014);t.exports=function(n){return e(n.length)}},283:(t,u,r)=>{var e=r(9504),n=r(9039),a=r(4901),o=r(9297),s=r(3724),i=r(350).CONFIGURABLE,v=r(3706),l=r(1181),p=l.enforce,f=l.get,c=String,d=Object.defineProperty,O=e("".slice),h=e("".replace),g=e([].join),S=s&&!n(function(){return d(function(){},"length",{value:8}).length!==8}),P=String(String).split("String"),T=t.exports=function(y,x,m){O(c(x),0,7)==="Symbol("&&(x="["+h(c(x),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),m&&m.getter&&(x="get "+x),m&&m.setter&&(x="set "+x),(!o(y,"name")||i&&y.name!==x)&&(s?d(y,"name",{value:x,configurable:!0}):y.name=x),S&&m&&o(m,"arity")&&y.length!==m.arity&&d(y,"length",{value:m.arity});try{m&&o(m,"constructor")&&m.constructor?s&&d(y,"prototype",{writable:!1}):y.prototype&&(y.prototype=void 0)}catch($){}var I=p(y);return o(I,"source")||(I.source=g(P,typeof x=="string"?x:"")),y};Function.prototype.toString=T(function(){return a(this)&&f(this).source||v(this)},"toString")},741:t=>{var u=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(n){var a=+n;return(a>0?r:u)(a)}},2360:(t,u,r)=>{var e=r(8551),n=r(6801),a=r(8727),o=r(421),s=r(397),i=r(4055),v=r(6119),l=">",p="<",f="prototype",c="script",d=v("IE_PROTO"),O=function(){},h=function(y){return p+c+l+y+p+"/"+c+l},g=function(y){y.write(h("")),y.close();var x=y.parentWindow.Object;return y=null,x},S=function(){var y=i("iframe"),x="java"+c+":",m;return y.style.display="none",s.appendChild(y),y.src=String(x),m=y.contentWindow.document,m.open(),m.write(h("document.F=Object")),m.close(),m.F},P,T=function(){try{P=new ActiveXObject("htmlfile")}catch(x){}T=typeof document!="undefined"?document.domain&&P?g(P):S():g(P);for(var y=a.length;y--;)delete T[f][a[y]];return T()};o[d]=!0,t.exports=Object.create||function(x,m){var I;return x!==null?(O[f]=e(x),I=new O,O[f]=null,I[d]=x):I=T(),m===void 0?I:n.f(I,m)}},6801:(t,u,r)=>{var e=r(3724),n=r(8686),a=r(4913),o=r(8551),s=r(5397),i=r(1072);u.f=e&&!n?Object.defineProperties:function(l,p){o(l);for(var f=s(p),c=i(p),d=c.length,O=0,h;d>O;)a.f(l,h=c[O++],f[h]);return l}},4913:(t,u,r)=>{var e=r(3724),n=r(5917),a=r(8686),o=r(8551),s=r(6969),i=TypeError,v=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p="enumerable",f="configurable",c="writable";u.f=e?a?function(O,h,g){if(o(O),h=s(h),o(g),typeof O=="function"&&h==="prototype"&&"value"in g&&c in g&&!g[c]){var S=l(O,h);S&&S[c]&&(O[h]=g.value,g={configurable:f in g?g[f]:S[f],enumerable:p in g?g[p]:S[p],writable:!1})}return v(O,h,g)}:v:function(O,h,g){if(o(O),h=s(h),o(g),n)try{return v(O,h,g)}catch(S){}if("get"in g||"set"in g)throw new i("Accessors not supported");return"value"in g&&(O[h]=g.value),O}},7347:(t,u,r)=>{var e=r(3724),n=r(9565),a=r(8773),o=r(6980),s=r(5397),i=r(6969),v=r(9297),l=r(5917),p=Object.getOwnPropertyDescriptor;u.f=e?p:function(c,d){if(c=s(c),d=i(d),l)try{return p(c,d)}catch(O){}if(v(c,d))return o(!n(a.f,c,d),c[d])}},8480:(t,u,r)=>{var e=r(1828),n=r(8727),a=n.concat("length","prototype");u.f=Object.getOwnPropertyNames||function(s){return e(s,a)}},3717:(t,u)=>{u.f=Object.getOwnPropertySymbols},2787:(t,u,r)=>{var e=r(9297),n=r(4901),a=r(8981),o=r(6119),s=r(2211),i=o("IE_PROTO"),v=Object,l=v.prototype;t.exports=s?v.getPrototypeOf:function(p){var f=a(p);if(e(f,i))return f[i];var c=f.constructor;return n(c)&&f instanceof c?c.prototype:f instanceof v?l:null}},1625:(t,u,r)=>{var e=r(9504);t.exports=e({}.isPrototypeOf)},1828:(t,u,r)=>{var e=r(9504),n=r(9297),a=r(5397),o=r(9617).indexOf,s=r(421),i=e([].push);t.exports=function(v,l){var p=a(v),f=0,c=[],d;for(d in p)!n(s,d)&&n(p,d)&&i(c,d);for(;l.length>f;)n(p,d=l[f++])&&(~o(c,d)||i(c,d));return c}},1072:(t,u,r)=>{var e=r(1828),n=r(8727);t.exports=Object.keys||function(o){return e(o,n)}},8773:(t,u)=>{var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,n=e&&!r.call({1:2},1);u.f=n?function(o){var s=e(this,o);return!!s&&s.enumerable}:r},2967:(t,u,r)=>{var e=r(6706),n=r(34),a=r(7750),o=r(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var s=!1,i={},v;try{v=e(Object.prototype,"__proto__","set"),v(i,[]),s=i instanceof Array}catch(l){}return function(p,f){return a(p),o(f),n(p)&&(s?v(p,f):p.__proto__=f),p}}():void 0)},4270:(t,u,r)=>{var e=r(9565),n=r(4901),a=r(34),o=TypeError;t.exports=function(s,i){var v,l;if(i==="string"&&n(v=s.toString)&&!a(l=e(v,s))||n(v=s.valueOf)&&!a(l=e(v,s))||i!=="string"&&n(v=s.toString)&&!a(l=e(v,s)))return l;throw new o("Can't convert object to primitive value")}},5031:(t,u,r)=>{var e=r(7751),n=r(9504),a=r(8480),o=r(3717),s=r(8551),i=n([].concat);t.exports=e("Reflect","ownKeys")||function(l){var p=a.f(s(l)),f=o.f;return f?i(p,f(l)):p}},7750:(t,u,r)=>{var e=r(4117),n=TypeError;t.exports=function(a){if(e(a))throw new n("Can't call method on "+a);return a}},687:(t,u,r)=>{var e=r(4913).f,n=r(9297),a=r(8227),o=a("toStringTag");t.exports=function(s,i,v){s&&!v&&(s=s.prototype),s&&!n(s,o)&&e(s,o,{configurable:!0,value:i})}},6119:(t,u,r)=>{var e=r(5745),n=r(3392),a=e("keys");t.exports=function(o){return a[o]||(a[o]=n(o))}},7629:(t,u,r)=>{var e=r(6395),n=r(4475),a=r(9433),o="__core-js_shared__",s=t.exports=n[o]||a(o,{});(s.versions||(s.versions=[])).push({version:"3.37.1",mode:e?"pure":"global",copyright:"\xA9 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:(t,u,r)=>{var e=r(7629);t.exports=function(n,a){return e[n]||(e[n]=a||{})}},4495:(t,u,r)=>{var e=r(7388),n=r(9039),a=r(4475),o=a.String;t.exports=!!Object.getOwnPropertySymbols&&!n(function(){var s=Symbol("symbol detection");return!o(s)||!(Object(s)instanceof Symbol)||!Symbol.sham&&e&&e<41})},5610:(t,u,r)=>{var e=r(1291),n=Math.max,a=Math.min;t.exports=function(o,s){var i=e(o);return i<0?n(i+s,0):a(i,s)}},5397:(t,u,r)=>{var e=r(7055),n=r(7750);t.exports=function(a){return e(n(a))}},1291:(t,u,r)=>{var e=r(741);t.exports=function(n){var a=+n;return a!==a||a===0?0:e(a)}},8014:(t,u,r)=>{var e=r(1291),n=Math.min;t.exports=function(a){var o=e(a);return o>0?n(o,9007199254740991):0}},8981:(t,u,r)=>{var e=r(7750),n=Object;t.exports=function(a){return n(e(a))}},2777:(t,u,r)=>{var e=r(9565),n=r(34),a=r(757),o=r(5966),s=r(4270),i=r(8227),v=TypeError,l=i("toPrimitive");t.exports=function(p,f){if(!n(p)||a(p))return p;var c=o(p,l),d;if(c){if(f===void 0&&(f="default"),d=e(c,p,f),!n(d)||a(d))return d;throw new v("Can't convert object to primitive value")}return f===void 0&&(f="number"),s(p,f)}},6969:(t,u,r)=>{var e=r(2777),n=r(757);t.exports=function(a){var o=e(a,"string");return n(o)?o:o+""}},6823:t=>{var u=String;t.exports=function(r){try{return u(r)}catch(e){return"Object"}}},3392:(t,u,r)=>{var e=r(9504),n=0,a=Math.random(),o=e(1 .toString);t.exports=function(s){return"Symbol("+(s===void 0?"":s)+")_"+o(++n+a,36)}},7040:(t,u,r)=>{var e=r(4495);t.exports=e&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},8686:(t,u,r)=>{var e=r(3724),n=r(9039);t.exports=e&&n(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})},8622:(t,u,r)=>{var e=r(4475),n=r(4901),a=e.WeakMap;t.exports=n(a)&&/native code/.test(String(a))},8227:(t,u,r)=>{var e=r(4475),n=r(5745),a=r(9297),o=r(3392),s=r(4495),i=r(7040),v=e.Symbol,l=n("wks"),p=i?v.for||v:v&&v.withoutSetter||o;t.exports=function(f){return a(l,f)||(l[f]=s&&a(v,f)?v[f]:p("Symbol."+f)),l[f]}},3792:(t,u,r)=>{var e=r(5397),n=r(6469),a=r(6269),o=r(1181),s=r(4913).f,i=r(1088),v=r(2529),l=r(6395),p=r(3724),f="Array Iterator",c=o.set,d=o.getterFor(f);t.exports=i(Array,"Array",function(h,g){c(this,{type:f,target:e(h),index:0,kind:g})},function(){var h=d(this),g=h.target,S=h.index++;if(!g||S>=g.length)return h.target=void 0,v(void 0,!0);switch(h.kind){case"keys":return v(S,!1);case"values":return v(g[S],!1)}return v([S,g[S]],!1)},"values");var O=a.Arguments=a.Array;if(n("keys"),n("values"),n("entries"),!l&&p&&O.name!=="values")try{s(O,"name",{value:"values"})}catch(h){}},2953:(t,u,r)=>{var e=r(4475),n=r(7400),a=r(9296),o=r(3792),s=r(6699),i=r(687),v=r(8227),l=v("iterator"),p=o.values,f=function(d,O){if(d){if(d[l]!==p)try{s(d,l,p)}catch(g){d[l]=p}if(i(d,O,!0),n[O]){for(var h in o)if(d[h]!==o[h])try{s(d,h,o[h])}catch(g){d[h]=o[h]}}}};for(var c in n)f(e[c]&&e[c].prototype,c);f(a,"DOMTokenList")}},R={};function b(t){var u=R[t];if(u!==void 0)return u.exports;var r=R[t]={exports:{}};return A[t].call(r.exports,r,r.exports,b),r.exports}b.n=t=>{var u=t&&t.__esModule?()=>t.default:()=>t;return b.d(u,{a:u}),u},b.d=(t,u)=>{for(var r in u)b.o(u,r)&&!b.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:u[r]})},b.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(t){if(typeof window=="object")return window}}(),b.o=(t,u)=>Object.prototype.hasOwnProperty.call(t,u);var K={};(()=>{var t=b(2953),u=b.n(t);const r=a();H(J,null,function*(){const o=yield n("/v1/traffic","GET"),s=new Date,i=Math.floor(o.startTime*1e3),v=e(s,i);$trigger==="button"&&(yield n("/v1/profiles/reload")),$done({title:"Surge Pro",content:"Startup duration: ".concat(v),icon:r.icon,"icon-color":r.color})});function e(o,s){const i=o-s,v=Math.floor(i/(24*3600*1e3)),l=i%(24*3600*1e3),p=Math.floor(l/(3600*1e3)),f=l%(3600*1e3),c=Math.floor(f/(60*1e3)),d=f%(60*1e3),O=Math.round(d/1e3);return v===0?p===0?c===0?"".concat(O,"s"):"".concat(c,"m").concat(O,"s"):"".concat(p,"h").concat(c,"m").concat(O,"s"):"".concat(v,"d").concat(p,"h").concat(c,"m")}function n(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"POST",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return new Promise(v=>{$httpAPI(s,o,i,l=>{v(l)})})}function a(){return Object.fromEntries($argument.split("&").map(o=>o.split("=")).map(o=>{let[s,i]=o;return[s,decodeURIComponent(i)]}))}})()})()});q();})();
