/*!
 substore-tools - version: 1.8.1
 Build fullhash:b4f7c34e61050c9585f0, chunkhash:e7c84e442286a9ec5364 (2024-05-21 19:18:38)

 Author: Kien Tran
*/
(()=>{(()=>{"use strict";var L={1236:function(){var q=(e,t,o)=>new Promise((r,l)=>{var d=a=>{try{y(o.next(a))}catch(g){l(g)}},$=a=>{try{y(o.throw(a))}catch(g){l(g)}},y=a=>a.done?r(a.value):Promise.resolve(a.value).then(d,$);y((o=o.apply(e,t)).next())});let s="VPS",w="10",M="18",O="30",A=0,D="''",k=!1,P="",j=" ",T=1;if(typeof $argument!="undefined"&&$argument!==""){const e=z("$argument");s=e.group||s,M=e.timecache||M,w=e.tolerance||w,k=e.push||0,T=e.debug||0,P=e.icon||P,j=e.color||j,O=e.avgnumber||O}function m(e="",t="GET",o=null){return new Promise(r=>{$httpAPI(t,e,o,l=>{r(l)})})}function z(){return Object.fromEntries($argument.split("&").map(e=>e.split("= ")).map(([e,t])=>[e,decodeURIComponent(t)]))}function N(e){const t=e/1048576;return t<.01?"0.01MB":`${t.toFixed(2)}MB `}function Q(e,t){if(e>1e7)return Math.floor(t*.6);const o=e/2e7,r=.99*Math.exp(-o);return Math.floor(t*r)}class W{constructor(t){this.name=t,this.se=0,this.sum=0,this.sumse=0,this.count=0,this.avg=0,this.sek=0}collect(t){for(const o of t)if(o.name===this.name){this.count++;const r=this.count;this.sum+=o.ms,this.se=o.se,this.sumse+=o.se;const l=Math.floor(this.sum/r),d=Math.floor(this.sumse/r);this.avg=l,this.sek=Q(d,l)}}}function X(e){return e++,e}function Z(e){let t,o;do t=Math.floor(Math.random()*7)+9843,o=String.fromCodePoint(t);while(e===o);return o}function ee(e){const t={};for(const o of Object.values(e)[0])t[o.name]=new W(o.name);for(const o of Object.values(e))for(const r of Object.values(t))r.collect(o);return t}q(this,null,function*(){try{const e=yield m("/v1/policy_groups");if(!Object.keys(e).includes(s))throw new Error("The group parameter does not enter the correct policy group");const t=`${Object.keys(e[s]).length} `,o=yield m(`/v1/policy_groups/select?group_name=${encodeURIComponent(s)}`);let r,l,d=!1,$="",y="",a="",g="",S="",x="C";o&&(r=o.policy);const G=yield m("/ v1/policy_groups/test","POST",body={group_name:s});if(G&&(D="'",o||(r=G.available[0])),!r)throw new Error("Unable to obtain speed test results or policy group information");const te=yield m("/v1/policies/benchmark_results");if(l=e[s].map(n=>{const{lineHash:i}=n,{name:f}=n;let p=te[i];p?p.lastTestScoreInMS===-1&&(A++,p.lastTestScoreInMS=6666):p={lastTestScoreInMS:6996};const Y=p?p.lastTestScoreInMS:5678;return{name:f,ms:Y,lineHash:i}}),A===t)throw new Error(`${s} policy group all Node Ping failed, please check the configuration`);const H=yield m("/v1/traffic"),{connector:C}=H,E={};H.connector&&Object.keys(C).forEach(n=>{const{inMaxSpeed:i,outMaxSpeed:f,lineHash:p}=C[n];p&&i&&(E[p]=i+f)}),l.forEach(n=>{const{lineHash:i}=n;i in E?n.se=E[i]:n.se=0,delete n.lineHash});const v=new Date,V=v.getTime(),B=$persistentStore.read("KEY_Group_Auto"),c=B?JSON.parse(B):{};c[s]=c[s]||{};const F=Z(c.Unicode)||"\u2674",I=X(c.ccKey)||1;let b;I%10===0&&(d=!0),c.dayKey?b=c.dayKey:(v.setHours(v.getHours()),b=String(v.toISOString().slice(0,10)),c.dayKey=b,d=!0);let J=Object.keys(c[s]).length;for(const n in c[s])J>O-1&&(delete c[s][n],J--,x=` ${F}`);if(Object.values(c[s])[0]){const n=Object.values(c[s])[0];(n.some(i=>!l.some(f=>f.name===i.name))||l.some(i=>!n.some(f=>f.name===i.name)))&&(c[s]={},d=!0,g=`
Data changes, clear cache!`)}c[s][V]=l,Object.keys(c).forEach(n=>{const i=c[n];Object.keys(i).forEach(f=>{(V-parseInt(f))/(36e5*M)>1&&delete i[f]})}),c.Unicode=F,c.ccKey=I,$persistentStore.write(JSON.stringify(c),"KEY_Group_Auto");const u=ee(c[s]),oe=Object.values(u).map(n=>n.sek),_=Math.min(...oe),h=Object.keys(u).find(n=>u[n].sek===_),R=u[r].sek;d&&(y=Math.floor((v-new Date(b))/864e5),$=`Run ${y} days since ${b.slice(2,10)}: ${I} times`),r===h?(a=`Inherited: ${h}: ${_}`,S=`${N(u[h].se)} ${u[h].count}`):R-_>w?($surge.setSelectGroupPolicy(s,h)||(yield m("/v1/policy_groups/select","POST",body={group_name:s,policy:h})),a=`Preferred: ${h}: ${_}`,S=`${N(u[h].se)} ${u[h].count}`):(a=`Tolerance: ${r}: ${R}`,S=`${N(u[r].se)} ${u[r].count}`);const K=s+D+t+S+x,U=a+g;console.log(`
${$}
${K}
${U}`),k&&$notification.post(K,U,$),T&&(console.log(l),console.log(JSON.stringify(u,null,2))),$done({title:K,content:U,icon:P,"icon-color":j})}catch(e){const t="Feedback @\u{1D67A}\u{1D68E}\u{1D6A2} !! ";console.log(t+e.message),k&&$notification.post(t,e.message,""),$done({title:t,content:e.message})}})}},se={};L[1236]()})();})();
