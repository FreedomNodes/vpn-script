/*!
 Made with ❤️ in Hanoi
 Build fullhash:4376c55615a596ee75ce, chunkhash:a2dec57ceabfddcc3367 (2024-05-18 18:45:08)

 Author: Kien Tran
*/
(()=>{var lr=(H,V)=>()=>(V||H((V={exports:{}}).exports,V),V.exports);var or=(H,V,C)=>new Promise((er,n)=>{var v=t=>{try{e(C.next(t))}catch(a){n(a)}},r=t=>{try{e(C.throw(t))}catch(a){n(a)}},e=t=>t.done?er(t.value):Promise.resolve(t.value).then(v,r);e((C=C.apply(H,V)).next())});var ur=lr(sr=>{(()=>{"use strict";var H={9306:(n,v,r)=>{var e=r(4901),t=r(6823),a=TypeError;n.exports=function(o){if(e(o))return o;throw new a(t(o)+" is not a function")}},3506:(n,v,r)=>{var e=r(3925),t=String,a=TypeError;n.exports=function(o){if(e(o))return o;throw new a("Can't set "+t(o)+" as a prototype")}},6469:(n,v,r)=>{var e=r(8227),t=r(2360),a=r(4913).f,o=e("unscopables"),s=Array.prototype;s[o]===void 0&&a(s,o,{configurable:!0,value:t(null)}),n.exports=function(u){s[o][u]=!0}},7829:(n,v,r)=>{var e=r(8183).charAt;n.exports=function(t,a,o){return a+(o?e(t,a).length:1)}},8551:(n,v,r)=>{var e=r(34),t=String,a=TypeError;n.exports=function(o){if(e(o))return o;throw new a(t(o)+" is not an object")}},9617:(n,v,r)=>{var e=r(5397),t=r(5610),a=r(6198),o=function(s){return function(u,l,i){var f=e(u),c=a(f);if(c===0)return!s&&-1;var d=t(i,c),p;if(s&&l!==l){for(;c>d;)if(p=f[d++],p!==p)return!0}else for(;c>d;d++)if((s||d in f)&&f[d]===l)return s||d||0;return!s&&-1}};n.exports={includes:o(!0),indexOf:o(!1)}},4576:(n,v,r)=>{var e=r(9504),t=e({}.toString),a=e("".slice);n.exports=function(o){return a(t(o),8,-1)}},6955:(n,v,r)=>{var e=r(2140),t=r(4901),a=r(4576),o=r(8227),s=o("toStringTag"),u=Object,l=a(function(){return arguments}())==="Arguments",i=function(f,c){try{return f[c]}catch(d){}};n.exports=e?a:function(f){var c,d,p;return f===void 0?"Undefined":f===null?"Null":typeof(d=i(c=u(f),s))=="string"?d:l?a(c):(p=a(c))==="Object"&&t(c.callee)?"Arguments":p}},7740:(n,v,r)=>{var e=r(9297),t=r(5031),a=r(7347),o=r(4913);n.exports=function(s,u,l){for(var i=t(u),f=o.f,c=a.f,d=0;d<i.length;d++){var p=i[d];!e(s,p)&&!(l&&e(l,p))&&f(s,p,c(u,p))}}},2211:(n,v,r)=>{var e=r(9039);n.exports=!e(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},2529:n=>{n.exports=function(v,r){return{value:v,done:r}}},6699:(n,v,r)=>{var e=r(3724),t=r(4913),a=r(6980);n.exports=e?function(o,s,u){return t.f(o,s,a(1,u))}:function(o,s,u){return o[s]=u,o}},6980:n=>{n.exports=function(v,r){return{enumerable:!(v&1),configurable:!(v&2),writable:!(v&4),value:r}}},6840:(n,v,r)=>{var e=r(4901),t=r(4913),a=r(283),o=r(9433);n.exports=function(s,u,l,i){i||(i={});var f=i.enumerable,c=i.name!==void 0?i.name:u;if(e(l)&&a(l,c,i),i.global)f?s[u]=l:o(u,l);else{try{i.unsafe?s[u]&&(f=!0):delete s[u]}catch(d){}f?s[u]=l:t.f(s,u,{value:l,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return s}},9433:(n,v,r)=>{var e=r(4475),t=Object.defineProperty;n.exports=function(a,o){try{t(e,a,{value:o,configurable:!0,writable:!0})}catch(s){e[a]=o}return o}},3724:(n,v,r)=>{var e=r(9039);n.exports=!e(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})},4055:(n,v,r)=>{var e=r(4475),t=r(34),a=e.document,o=t(a)&&t(a.createElement);n.exports=function(s){return o?a.createElement(s):{}}},7400:n=>{n.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},9296:(n,v,r)=>{var e=r(4055),t=e("span").classList,a=t&&t.constructor&&t.constructor.prototype;n.exports=a===Object.prototype?void 0:a},9392:n=>{n.exports=typeof navigator!="undefined"&&String(navigator.userAgent)||""},7388:(n,v,r)=>{var e=r(4475),t=r(9392),a=e.process,o=e.Deno,s=a&&a.versions||o&&o.version,u=s&&s.v8,l,i;u&&(l=u.split("."),i=l[0]>0&&l[0]<4?1:+(l[0]+l[1])),!i&&t&&(l=t.match(/Edge\/(\d+)/),(!l||l[1]>=74)&&(l=t.match(/Chrome\/(\d+)/),l&&(i=+l[1]))),n.exports=i},8727:n=>{n.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6518:(n,v,r)=>{var e=r(4475),t=r(7347).f,a=r(6699),o=r(6840),s=r(9433),u=r(7740),l=r(2796);n.exports=function(i,f){var c=i.target,d=i.global,p=i.stat,x,g,S,T,P,h;if(d?g=e:p?g=e[c]||s(c,{}):g=e[c]&&e[c].prototype,g)for(S in f){if(P=f[S],i.dontCallGetSet?(h=t(g,S),T=h&&h.value):T=g[S],x=l(d?S:c+(p?".":"#")+S,i.forced),!x&&T!==void 0){if(typeof P==typeof T)continue;u(P,T)}(i.sham||T&&T.sham)&&a(P,"sham",!0),o(g,S,P,i)}}},9039:n=>{n.exports=function(v){try{return!!v()}catch(r){return!0}}},9228:(n,v,r)=>{r(7495);var e=r(9565),t=r(6840),a=r(7323),o=r(9039),s=r(8227),u=r(6699),l=s("species"),i=RegExp.prototype;n.exports=function(f,c,d,p){var x=s(f),g=!o(function(){var h={};return h[x]=function(){return 7},""[f](h)!==7}),S=g&&!o(function(){var h=!1,y=/a/;return f==="split"&&(y={},y.constructor={},y.constructor[l]=function(){return y},y.flags="",y[x]=/./[x]),y.exec=function(){return h=!0,null},y[x](""),!h});if(!g||!S||d){var T=/./[x],P=c(x,""[f],function(h,y,O,E,m){var M=y.exec;return M===a||M===i.exec?g&&!m?{done:!0,value:e(T,y,O,E)}:{done:!0,value:e(h,O,y,E)}:{done:!1}});t(String.prototype,f,P[0]),t(i,x,P[1])}p&&u(i[x],"sham",!0)}},8745:(n,v,r)=>{var e=r(616),t=Function.prototype,a=t.apply,o=t.call;n.exports=typeof Reflect=="object"&&Reflect.apply||(e?o.bind(a):function(){return o.apply(a,arguments)})},616:(n,v,r)=>{var e=r(9039);n.exports=!e(function(){var t=function(){}.bind();return typeof t!="function"||t.hasOwnProperty("prototype")})},9565:(n,v,r)=>{var e=r(616),t=Function.prototype.call;n.exports=e?t.bind(t):function(){return t.apply(t,arguments)}},350:(n,v,r)=>{var e=r(3724),t=r(9297),a=Function.prototype,o=e&&Object.getOwnPropertyDescriptor,s=t(a,"name"),u=s&&function(){}.name==="something",l=s&&(!e||e&&o(a,"name").configurable);n.exports={EXISTS:s,PROPER:u,CONFIGURABLE:l}},6706:(n,v,r)=>{var e=r(9504),t=r(9306);n.exports=function(a,o,s){try{return e(t(Object.getOwnPropertyDescriptor(a,o)[s]))}catch(u){}}},9504:(n,v,r)=>{var e=r(616),t=Function.prototype,a=t.call,o=e&&t.bind.bind(a,a);n.exports=e?o:function(s){return function(){return a.apply(s,arguments)}}},7751:(n,v,r)=>{var e=r(4475),t=r(4901),a=function(o){return t(o)?o:void 0};n.exports=function(o,s){return arguments.length<2?a(e[o]):e[o]&&e[o][s]}},5966:(n,v,r)=>{var e=r(9306),t=r(4117);n.exports=function(a,o){var s=a[o];return t(s)?void 0:e(s)}},2478:(n,v,r)=>{var e=r(9504),t=r(8981),a=Math.floor,o=e("".charAt),s=e("".replace),u=e("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;n.exports=function(f,c,d,p,x,g){var S=d+f.length,T=p.length,P=i;return x!==void 0&&(x=t(x),P=l),s(g,P,function(h,y){var O;switch(o(y,0)){case"$":return"$";case"&":return f;case"`":return u(c,0,d);case"'":return u(c,S);case"<":O=x[u(y,1,-1)];break;default:var E=+y;if(E===0)return h;if(E>T){var m=a(E/10);return m===0?h:m<=T?p[m-1]===void 0?o(y,1):p[m-1]+o(y,1):h}O=p[E-1]}return O===void 0?"":O})}},4475:function(n,v,r){var e=function(t){return t&&t.Math===Math&&t};n.exports=e(typeof globalThis=="object"&&globalThis)||e(typeof window=="object"&&window)||e(typeof self=="object"&&self)||e(typeof r.g=="object"&&r.g)||e(typeof this=="object"&&this)||function(){return this}()||Function("return this")()},9297:(n,v,r)=>{var e=r(9504),t=r(8981),a=e({}.hasOwnProperty);n.exports=Object.hasOwn||function(s,u){return a(t(s),u)}},421:n=>{n.exports={}},397:(n,v,r)=>{var e=r(7751);n.exports=e("document","documentElement")},5917:(n,v,r)=>{var e=r(3724),t=r(9039),a=r(4055);n.exports=!e&&!t(function(){return Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a!==7})},7055:(n,v,r)=>{var e=r(9504),t=r(9039),a=r(4576),o=Object,s=e("".split);n.exports=t(function(){return!o("z").propertyIsEnumerable(0)})?function(u){return a(u)==="String"?s(u,""):o(u)}:o},3706:(n,v,r)=>{var e=r(9504),t=r(4901),a=r(7629),o=e(Function.toString);t(a.inspectSource)||(a.inspectSource=function(s){return o(s)}),n.exports=a.inspectSource},1181:(n,v,r)=>{var e=r(8622),t=r(4475),a=r(34),o=r(6699),s=r(9297),u=r(7629),l=r(6119),i=r(421),f="Object already initialized",c=t.TypeError,d=t.WeakMap,p,x,g,S=function(y){return g(y)?x(y):p(y,{})},T=function(y){return function(O){var E;if(!a(O)||(E=x(O)).type!==y)throw new c("Incompatible receiver, "+y+" required");return E}};if(e||u.state){var P=u.state||(u.state=new d);P.get=P.get,P.has=P.has,P.set=P.set,p=function(y,O){if(P.has(y))throw new c(f);return O.facade=y,P.set(y,O),O},x=function(y){return P.get(y)||{}},g=function(y){return P.has(y)}}else{var h=l("state");i[h]=!0,p=function(y,O){if(s(y,h))throw new c(f);return O.facade=y,o(y,h,O),O},x=function(y){return s(y,h)?y[h]:{}},g=function(y){return s(y,h)}}n.exports={set:p,get:x,has:g,enforce:S,getterFor:T}},4901:n=>{var v=typeof document=="object"&&document.all;n.exports=typeof v=="undefined"&&v!==void 0?function(r){return typeof r=="function"||r===v}:function(r){return typeof r=="function"}},2796:(n,v,r)=>{var e=r(9039),t=r(4901),a=/#|\.prototype\./,o=function(f,c){var d=u[s(f)];return d===i?!0:d===l?!1:t(c)?e(c):!!c},s=o.normalize=function(f){return String(f).replace(a,".").toLowerCase()},u=o.data={},l=o.NATIVE="N",i=o.POLYFILL="P";n.exports=o},4117:n=>{n.exports=function(v){return v==null}},34:(n,v,r)=>{var e=r(4901);n.exports=function(t){return typeof t=="object"?t!==null:e(t)}},3925:(n,v,r)=>{var e=r(34);n.exports=function(t){return e(t)||t===null}},6395:n=>{n.exports=!1},757:(n,v,r)=>{var e=r(7751),t=r(4901),a=r(1625),o=r(7040),s=Object;n.exports=o?function(u){return typeof u=="symbol"}:function(u){var l=e("Symbol");return t(l)&&a(l.prototype,s(u))}},3994:(n,v,r)=>{var e=r(7657).IteratorPrototype,t=r(2360),a=r(6980),o=r(687),s=r(6269),u=function(){return this};n.exports=function(l,i,f,c){var d=i+" Iterator";return l.prototype=t(e,{next:a(+!c,f)}),o(l,d,!1,!0),s[d]=u,l}},1088:(n,v,r)=>{var e=r(6518),t=r(9565),a=r(6395),o=r(350),s=r(4901),u=r(3994),l=r(2787),i=r(2967),f=r(687),c=r(6699),d=r(6840),p=r(8227),x=r(6269),g=r(7657),S=o.PROPER,T=o.CONFIGURABLE,P=g.IteratorPrototype,h=g.BUGGY_SAFARI_ITERATORS,y=p("iterator"),O="keys",E="values",m="entries",M=function(){return this};n.exports=function(b,W,G,z,$,D,Y){u(G,W,z);var R=function(B){if(B===$&&j)return j;if(!h&&B&&B in I)return I[B];switch(B){case O:return function(){return new G(this,B)};case E:return function(){return new G(this,B)};case m:return function(){return new G(this,B)}}return function(){return new G(this)}},F=W+" Iterator",X=!1,I=b.prototype,A=I[y]||I["@@iterator"]||$&&I[$],j=!h&&A||R($),N=W==="Array"&&I.entries||A,L,w,K;if(N&&(L=l(N.call(new b)),L!==Object.prototype&&L.next&&(!a&&l(L)!==P&&(i?i(L,P):s(L[y])||d(L,y,M)),f(L,F,!0,!0),a&&(x[F]=M))),S&&$===E&&A&&A.name!==E&&(!a&&T?c(I,"name",E):(X=!0,j=function(){return t(A,this)})),$)if(w={values:R(E),keys:D?j:R(O),entries:R(m)},Y)for(K in w)(h||X||!(K in I))&&d(I,K,w[K]);else e({target:W,proto:!0,forced:h||X},w);return(!a||Y)&&I[y]!==j&&d(I,y,j,{name:$}),x[W]=j,w}},7657:(n,v,r)=>{var e=r(9039),t=r(4901),a=r(34),o=r(2360),s=r(2787),u=r(6840),l=r(8227),i=r(6395),f=l("iterator"),c=!1,d,p,x;[].keys&&(x=[].keys(),"next"in x?(p=s(s(x)),p!==Object.prototype&&(d=p)):c=!0);var g=!a(d)||e(function(){var S={};return d[f].call(S)!==S});g?d={}:i&&(d=o(d)),t(d[f])||u(d,f,function(){return this}),n.exports={IteratorPrototype:d,BUGGY_SAFARI_ITERATORS:c}},6269:n=>{n.exports={}},6198:(n,v,r)=>{var e=r(8014);n.exports=function(t){return e(t.length)}},283:(n,v,r)=>{var e=r(9504),t=r(9039),a=r(4901),o=r(9297),s=r(3724),u=r(350).CONFIGURABLE,l=r(3706),i=r(1181),f=i.enforce,c=i.get,d=String,p=Object.defineProperty,x=e("".slice),g=e("".replace),S=e([].join),T=s&&!t(function(){return p(function(){},"length",{value:8}).length!==8}),P=String(String).split("String"),h=n.exports=function(y,O,E){x(d(O),0,7)==="Symbol("&&(O="["+g(d(O),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),E&&E.getter&&(O="get "+O),E&&E.setter&&(O="set "+O),(!o(y,"name")||u&&y.name!==O)&&(s?p(y,"name",{value:O,configurable:!0}):y.name=O),T&&E&&o(E,"arity")&&y.length!==E.arity&&p(y,"length",{value:E.arity});try{E&&o(E,"constructor")&&E.constructor?s&&p(y,"prototype",{writable:!1}):y.prototype&&(y.prototype=void 0)}catch(M){}var m=f(y);return o(m,"source")||(m.source=S(P,typeof O=="string"?O:"")),y};Function.prototype.toString=h(function(){return a(this)&&c(this).source||l(this)},"toString")},741:n=>{var v=Math.ceil,r=Math.floor;n.exports=Math.trunc||function(t){var a=+t;return(a>0?r:v)(a)}},2360:(n,v,r)=>{var e=r(8551),t=r(6801),a=r(8727),o=r(421),s=r(397),u=r(4055),l=r(6119),i=">",f="<",c="prototype",d="script",p=l("IE_PROTO"),x=function(){},g=function(y){return f+d+i+y+f+"/"+d+i},S=function(y){y.write(g("")),y.close();var O=y.parentWindow.Object;return y=null,O},T=function(){var y=u("iframe"),O="java"+d+":",E;return y.style.display="none",s.appendChild(y),y.src=String(O),E=y.contentWindow.document,E.open(),E.write(g("document.F=Object")),E.close(),E.F},P,h=function(){try{P=new ActiveXObject("htmlfile")}catch(O){}h=typeof document!="undefined"?document.domain&&P?S(P):T():S(P);for(var y=a.length;y--;)delete h[c][a[y]];return h()};o[p]=!0,n.exports=Object.create||function(O,E){var m;return O!==null?(x[c]=e(O),m=new x,x[c]=null,m[p]=O):m=h(),E===void 0?m:t.f(m,E)}},6801:(n,v,r)=>{var e=r(3724),t=r(8686),a=r(4913),o=r(8551),s=r(5397),u=r(1072);v.f=e&&!t?Object.defineProperties:function(i,f){o(i);for(var c=s(f),d=u(f),p=d.length,x=0,g;p>x;)a.f(i,g=d[x++],c[g]);return i}},4913:(n,v,r)=>{var e=r(3724),t=r(5917),a=r(8686),o=r(8551),s=r(6969),u=TypeError,l=Object.defineProperty,i=Object.getOwnPropertyDescriptor,f="enumerable",c="configurable",d="writable";v.f=e?a?function(x,g,S){if(o(x),g=s(g),o(S),typeof x=="function"&&g==="prototype"&&"value"in S&&d in S&&!S[d]){var T=i(x,g);T&&T[d]&&(x[g]=S.value,S={configurable:c in S?S[c]:T[c],enumerable:f in S?S[f]:T[f],writable:!1})}return l(x,g,S)}:l:function(x,g,S){if(o(x),g=s(g),o(S),t)try{return l(x,g,S)}catch(T){}if("get"in S||"set"in S)throw new u("Accessors not supported");return"value"in S&&(x[g]=S.value),x}},7347:(n,v,r)=>{var e=r(3724),t=r(9565),a=r(8773),o=r(6980),s=r(5397),u=r(6969),l=r(9297),i=r(5917),f=Object.getOwnPropertyDescriptor;v.f=e?f:function(d,p){if(d=s(d),p=u(p),i)try{return f(d,p)}catch(x){}if(l(d,p))return o(!t(a.f,d,p),d[p])}},8480:(n,v,r)=>{var e=r(1828),t=r(8727),a=t.concat("length","prototype");v.f=Object.getOwnPropertyNames||function(s){return e(s,a)}},3717:(n,v)=>{v.f=Object.getOwnPropertySymbols},2787:(n,v,r)=>{var e=r(9297),t=r(4901),a=r(8981),o=r(6119),s=r(2211),u=o("IE_PROTO"),l=Object,i=l.prototype;n.exports=s?l.getPrototypeOf:function(f){var c=a(f);if(e(c,u))return c[u];var d=c.constructor;return t(d)&&c instanceof d?d.prototype:c instanceof l?i:null}},1625:(n,v,r)=>{var e=r(9504);n.exports=e({}.isPrototypeOf)},1828:(n,v,r)=>{var e=r(9504),t=r(9297),a=r(5397),o=r(9617).indexOf,s=r(421),u=e([].push);n.exports=function(l,i){var f=a(l),c=0,d=[],p;for(p in f)!t(s,p)&&t(f,p)&&u(d,p);for(;i.length>c;)t(f,p=i[c++])&&(~o(d,p)||u(d,p));return d}},1072:(n,v,r)=>{var e=r(1828),t=r(8727);n.exports=Object.keys||function(o){return e(o,t)}},8773:(n,v)=>{var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,t=e&&!r.call({1:2},1);v.f=t?function(o){var s=e(this,o);return!!s&&s.enumerable}:r},2967:(n,v,r)=>{var e=r(6706),t=r(34),a=r(7750),o=r(3506);n.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var s=!1,u={},l;try{l=e(Object.prototype,"__proto__","set"),l(u,[]),s=u instanceof Array}catch(i){}return function(f,c){return a(f),o(c),t(f)&&(s?l(f,c):f.__proto__=c),f}}():void 0)},4270:(n,v,r)=>{var e=r(9565),t=r(4901),a=r(34),o=TypeError;n.exports=function(s,u){var l,i;if(u==="string"&&t(l=s.toString)&&!a(i=e(l,s))||t(l=s.valueOf)&&!a(i=e(l,s))||u!=="string"&&t(l=s.toString)&&!a(i=e(l,s)))return i;throw new o("Can't convert object to primitive value")}},5031:(n,v,r)=>{var e=r(7751),t=r(9504),a=r(8480),o=r(3717),s=r(8551),u=t([].concat);n.exports=e("Reflect","ownKeys")||function(i){var f=a.f(s(i)),c=o.f;return c?u(f,c(i)):f}},6682:(n,v,r)=>{var e=r(9565),t=r(8551),a=r(4901),o=r(4576),s=r(7323),u=TypeError;n.exports=function(l,i){var f=l.exec;if(a(f)){var c=e(f,l,i);return c!==null&&t(c),c}if(o(l)==="RegExp")return e(s,l,i);throw new u("RegExp#exec called on incompatible receiver")}},7323:(n,v,r)=>{var e=r(9565),t=r(9504),a=r(655),o=r(7979),s=r(8429),u=r(5745),l=r(2360),i=r(1181).get,f=r(3635),c=r(8814),d=u("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,x=p,g=t("".charAt),S=t("".indexOf),T=t("".replace),P=t("".slice),h=function(){var m=/a/,M=/b*/g;return e(p,m,"a"),e(p,M,"a"),m.lastIndex!==0||M.lastIndex!==0}(),y=s.BROKEN_CARET,O=/()??/.exec("")[1]!==void 0,E=h||O||y||f||c;E&&(x=function(M){var b=this,W=i(b),G=a(M),z=W.raw,$,D,Y,R,F,X,I;if(z)return z.lastIndex=b.lastIndex,$=e(x,z,G),b.lastIndex=z.lastIndex,$;var A=W.groups,j=y&&b.sticky,N=e(o,b),L=b.source,w=0,K=G;if(j&&(N=T(N,"y",""),S(N,"g")===-1&&(N+="g"),K=P(G,b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&g(G,b.lastIndex-1)!==`
`)&&(L="(?: "+L+")",K=" "+K,w++),D=new RegExp("^(?:"+L+")",N)),O&&(D=new RegExp("^"+L+"$(?!\\s)",N)),h&&(Y=b.lastIndex),R=e(p,j?D:b,K),j?R?(R.input=P(R.input,w),R[0]=P(R[0],w),R.index=b.lastIndex,b.lastIndex+=R[0].length):b.lastIndex=0:h&&R&&(b.lastIndex=b.global?R.index+R[0].length:Y),O&&R&&R.length>1&&e(d,R[0],D,function(){for(F=1;F<arguments.length-2;F++)arguments[F]===void 0&&(R[F]=void 0)}),R&&A)for(R.groups=X=l(null),F=0;F<A.length;F++)I=A[F],X[I[0]]=R[I[1]];return R}),n.exports=x},7979:(n,v,r)=>{var e=r(8551);n.exports=function(){var t=e(this),a="";return t.hasIndices&&(a+="d"),t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.dotAll&&(a+="s"),t.unicode&&(a+="u"),t.unicodeSets&&(a+="v"),t.sticky&&(a+="y"),a}},8429:(n,v,r)=>{var e=r(9039),t=r(4475),a=t.RegExp,o=e(function(){var l=a("a","y");return l.lastIndex=2,l.exec("abcd")!==null}),s=o||e(function(){return!a("a","y").sticky}),u=o||e(function(){var l=a("^r","gy");return l.lastIndex=2,l.exec("str")!==null});n.exports={BROKEN_CARET:u,MISSED_STICKY:s,UNSUPPORTED_Y:o}},3635:(n,v,r)=>{var e=r(9039),t=r(4475),a=t.RegExp;n.exports=e(function(){var o=a(".","s");return!(o.dotAll&&o.test(`
`)&&o.flags==="s")})},8814:(n,v,r)=>{var e=r(9039),t=r(4475),a=t.RegExp;n.exports=e(function(){var o=a("(?<a>b)","g");return o.exec("b").groups.a!=="b"||"b".replace(o,"$<a>c")!=="bc"})},7750:(n,v,r)=>{var e=r(4117),t=TypeError;n.exports=function(a){if(e(a))throw new t("Can't call method on "+a);return a}},687:(n,v,r)=>{var e=r(4913).f,t=r(9297),a=r(8227),o=a("toStringTag");n.exports=function(s,u,l){s&&!l&&(s=s.prototype),s&&!t(s,o)&&e(s,o,{configurable:!0,value:u})}},6119:(n,v,r)=>{var e=r(5745),t=r(3392),a=e("keys");n.exports=function(o){return a[o]||(a[o]=t(o))}},7629:(n,v,r)=>{var e=r(6395),t=r(4475),a=r(9433),o="__core-js_shared__",s=n.exports=t[o]||a(o,{});(s.versions||(s.versions=[])).push({version:"3.37.1",mode:e?"pure":"global",copyright:"\xA9 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:(n,v,r)=>{var e=r(7629);n.exports=function(t,a){return e[t]||(e[t]=a||{})}},8183:(n,v,r)=>{var e=r(9504),t=r(1291),a=r(655),o=r(7750),s=e("".charAt),u=e("".charCodeAt),l=e("".slice),i=function(f){return function(c,d){var p=a(o(c)),x=t(d),g=p.length,S,T;return x<0||x>=g?f?"":void 0:(S=u(p,x),S<55296||S>56319||x+1===g||(T=u(p,x+1))<56320||T>57343?f?s(p,x):S:f?l(p,x,x+2):(S-55296<<10)+(T-56320)+65536)}};n.exports={codeAt:i(!1),charAt:i(!0)}},4495:(n,v,r)=>{var e=r(7388),t=r(9039),a=r(4475),o=a.String;n.exports=!!Object.getOwnPropertySymbols&&!t(function(){var s=Symbol("symbol detection");return!o(s)||!(Object(s)instanceof Symbol)||!Symbol.sham&&e&&e<41})},5610:(n,v,r)=>{var e=r(1291),t=Math.max,a=Math.min;n.exports=function(o,s){var u=e(o);return u<0?t(u+s,0):a(u,s)}},5397:(n,v,r)=>{var e=r(7055),t=r(7750);n.exports=function(a){return e(t(a))}},1291:(n,v,r)=>{var e=r(741);n.exports=function(t){var a=+t;return a!==a||a===0?0:e(a)}},8014:(n,v,r)=>{var e=r(1291),t=Math.min;n.exports=function(a){var o=e(a);return o>0?t(o,9007199254740991):0}},8981:(n,v,r)=>{var e=r(7750),t=Object;n.exports=function(a){return t(e(a))}},2777:(n,v,r)=>{var e=r(9565),t=r(34),a=r(757),o=r(5966),s=r(4270),u=r(8227),l=TypeError,i=u("toPrimitive");n.exports=function(f,c){if(!t(f)||a(f))return f;var d=o(f,i),p;if(d){if(c===void 0&&(c="default"),p=e(d,f,c),!t(p)||a(p))return p;throw new l("Can't convert object to primitive value")}return c===void 0&&(c="number"),s(f,c)}},6969:(n,v,r)=>{var e=r(2777),t=r(757);n.exports=function(a){var o=e(a,"string");return t(o)?o:o+""}},2140:(n,v,r)=>{var e=r(8227),t=e("toStringTag"),a={};a[t]="z",n.exports=String(a)==="[object z]"},655:(n,v,r)=>{var e=r(6955),t=String;n.exports=function(a){if(e(a)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return t(a)}},6823:n=>{var v=String;n.exports=function(r){try{return v(r)}catch(e){return"Object"}}},3392:(n,v,r)=>{var e=r(9504),t=0,a=Math.random(),o=e(1 .toString);n.exports=function(s){return"Symbol("+(s===void 0?"":s)+")_"+o(++t+a,36)}},7040:(n,v,r)=>{var e=r(4495);n.exports=e&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},8686:(n,v,r)=>{var e=r(3724),t=r(9039);n.exports=e&&t(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})},8622:(n,v,r)=>{var e=r(4475),t=r(4901),a=e.WeakMap;n.exports=t(a)&&/native code/.test(String(a))},8227:(n,v,r)=>{var e=r(4475),t=r(5745),a=r(9297),o=r(3392),s=r(4495),u=r(7040),l=e.Symbol,i=t("wks"),f=u?l.for||l:l&&l.withoutSetter||o;n.exports=function(c){return a(i,c)||(i[c]=s&&a(l,c)?l[c]:f("Symbol."+c)),i[c]}},3792:(n,v,r)=>{var e=r(5397),t=r(6469),a=r(6269),o=r(1181),s=r(4913).f,u=r(1088),l=r(2529),i=r(6395),f=r(3724),c="Array Iterator",d=o.set,p=o.getterFor(c);n.exports=u(Array,"Array",function(g,S){d(this,{type:c,target:e(g),index:0,kind:S})},function(){var g=p(this),S=g.target,T=g.index++;if(!S||T>=S.length)return g.target=void 0,l(void 0,!0);switch(g.kind){case"keys":return l(T,!1);case"values":return l(S[T],!1)}return l([T,S[T]],!1)},"values");var x=a.Arguments=a.Array;if(t("keys"),t("values"),t("entries"),!i&&f&&x.name!=="values")try{s(x,"name",{value:"values"})}catch(g){}},7495:(n,v,r)=>{var e=r(6518),t=r(7323);e({target:"RegExp",proto:!0,forced:/./.exec!==t},{exec:t})},5440:(n,v,r)=>{var e=r(8745),t=r(9565),a=r(9504),o=r(9228),s=r(9039),u=r(8551),l=r(4901),i=r(4117),f=r(1291),c=r(8014),d=r(655),p=r(7750),x=r(7829),g=r(5966),S=r(2478),T=r(6682),P=r(8227),h=P("replace"),y=Math.max,O=Math.min,E=a([].concat),m=a([].push),M=a("".indexOf),b=a("".slice),W=function(D){return D===void 0?D:String(D)},G=function(){return"a".replace(/./,"$0")==="$0"}(),z=function(){return/./[h]?/./[h]("a","$0")==="":!1}(),$=!s(function(){var D=/./;return D.exec=function(){var Y=[];return Y.groups={a:"7"},Y},"".replace(D,"$<a>")!=="7"});o("replace",function(D,Y,R){var F=z?"$":"$0";return[function(I,A){var j=p(this),N=i(I)?void 0:g(I,h);return N?t(N,I,j,A):t(Y,d(j),I,A)},function(X,I){var A=u(this),j=d(X);if(typeof I=="string"&&M(I,F)===-1&&M(I,"$<")===-1){var N=R(Y,A,j,I);if(N.done)return N.value}var L=l(I);L||(I=d(I));var w=A.global,K;w&&(K=A.unicode,A.lastIndex=0);for(var B=[],U;U=T(A,j),!(U===null||(m(B,U),!w));){var vr=d(U[0]);vr===""&&(A.lastIndex=x(j,c(A.lastIndex),K))}for(var nr="",Z=0,Q=0;Q<B.length;Q++){U=B[Q];for(var k=d(U[0]),J=y(O(f(U.index),j.length),0),q=[],_,rr=1;rr<U.length;rr++)m(q,W(U[rr]));var tr=U.groups;if(L){var ar=E([k],q,J,j);tr!==void 0&&m(ar,tr),_=d(e(I,void 0,ar))}else _=S(k,j,J,q,tr,I);J>=Z&&(nr+=b(j,Z,J)+_,Z=J+k.length)}return nr+b(j,Z)}]},!$||!G||z)},2953:(n,v,r)=>{var e=r(4475),t=r(7400),a=r(9296),o=r(3792),s=r(6699),u=r(687),l=r(8227),i=l("iterator"),f=o.values,c=function(p,x){if(p){if(p[i]!==f)try{s(p,i,f)}catch(S){p[i]=f}if(u(p,x,!0),t[x]){for(var g in o)if(p[g]!==o[g])try{s(p,g,o[g])}catch(S){p[g]=o[g]}}}};for(var d in t)c(e[d]&&e[d].prototype,d);c(a,"DOMTokenList")}},V={};function C(n){var v=V[n];if(v!==void 0)return v.exports;var r=V[n]={exports:{}};return H[n].call(r.exports,r,r.exports,C),r.exports}C.n=n=>{var v=n&&n.__esModule?()=>n.default:()=>n;return C.d(v,{a:v}),v},C.d=(n,v)=>{for(var r in v)C.o(v,r)&&!C.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:v[r]})},C.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(n){if(typeof window=="object")return window}}(),C.o=(n,v)=>Object.prototype.hasOwnProperty.call(n,v);var er={};(()=>{var n=C(5440),v=C.n(n),r=C(2953),e=C.n(r);or(sr,null,function*(){const a={title:"Flush DNS"};let o=!0,s;if(typeof $argument!="undefined"){const l=Object.fromEntries($argument.split("&").map(i=>i.split("=")));l.title&&(a.title=l.title),l.icon&&(a.icon=l.icon),l.color&&(a["icon-color"]=l.color),l.server=="false"&&(o=!1)}o&&(s=(yield t("/v1/dns","GET")).dnsCache,s=[...new Set(s.map(l=>l.server))].toString().replace(/,/g,`
`)),$trigger=="button"&&(yield t("/v1/dns/flush"));const u=((yield t("/v1/test/dns_delay")).delay*1e3).toFixed(0);a.content="DNS latency: ".concat(u,"ms").concat(s?`
server:
`.concat(s):""),$done(a)});function t(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"POST",s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return new Promise(u=>{$httpAPI(o,a,s,l=>{u(l)})})}})()})()});ur();})();
