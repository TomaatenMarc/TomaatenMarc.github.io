"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3168],{1208:(V,R,m)=>{m.d(R,{_8:()=>c,on:()=>M,wd:()=>_});var c=function(n){return n.Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS",n}(c||{}),_=function(n){return n.Rear="REAR",n.Front="FRONT",n}(_||{}),M=function(n){return n.Uri="uri",n.Base64="base64",n.DataUrl="dataUrl",n}(M||{})},1740:(V,R,m)=>{m.d(R,{Ut:()=>M,_8:()=>_._8,on:()=>_.on});var c=m(6400),_=m(1208);const M=(0,c.C_)("Camera",{web:()=>m.e(9028).then(m.bind(m,9028)).then(n=>new n.CameraWeb)})},6400:(V,R,m)=>{m.d(R,{C_:()=>f,Yr:()=>$,w8:()=>d});var c=m(1528);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var k=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(k||{});class $ extends Error{constructor(e,t,s){super(e),this.message=e,this.code=t,this.data=s}}const Y=r=>{var e,t,s,a,o;const h=r.CapacitorCustomPlatform||null,i=r.Capacitor||{},D=i.Plugins=i.Plugins||{},v=r.CapacitorPlatforms,N=(null===(e=null==v?void 0:v.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==h?h.name:(r=>{var e,t;return null!=r&&r.androidBridge?"android":null!==(t=null===(e=null==r?void 0:r.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(r)),le=(null===(t=null==v?void 0:v.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==N()),de=(null===(s=null==v?void 0:v.currentPlatform)||void 0===s?void 0:s.isPluginAvailable)||(w=>{const C=ee.get(w);return!!(null!=C&&C.platforms.has(N())||oe(w))}),oe=(null===(a=null==v?void 0:v.currentPlatform)||void 0===a?void 0:a.getPluginHeader)||(w=>{var C;return null===(C=i.PluginHeaders)||void 0===C?void 0:C.find(G=>G.name===w)}),ee=new Map,he=(null===(o=null==v?void 0:v.currentPlatform)||void 0===o?void 0:o.registerPlugin)||((w,C={})=>{const G=ee.get(w);if(G)return console.warn(`Capacitor plugin "${w}" already registered. Cannot register plugins twice.`),G.proxy;const I=N(),H=oe(w);let W;const ve=function(){var L=(0,c.c)(function*(){return!W&&I in C?W=W="function"==typeof C[I]?yield C[I]():C[I]:null!==h&&!W&&"web"in C&&(W=W="function"==typeof C.web?yield C.web():C.web),W});return function(){return L.apply(this,arguments)}}(),te=L=>{let U;const A=(...x)=>{const T=ve().then(S=>{const j=((L,U)=>{var A,x;if(!H){if(L)return null===(x=L[U])||void 0===x?void 0:x.bind(L);throw new $(`"${w}" plugin is not implemented on ${I}`,k.Unimplemented)}{const T=null==H?void 0:H.methods.find(S=>U===S.name);if(T)return"promise"===T.rtype?S=>i.nativePromise(w,U.toString(),S):(S,j)=>i.nativeCallback(w,U.toString(),S,j);if(L)return null===(A=L[U])||void 0===A?void 0:A.bind(L)}})(S,L);if(j){const X=j(...x);return U=null==X?void 0:X.remove,X}throw new $(`"${w}.${L}()" is not implemented on ${I}`,k.Unimplemented)});return"addListener"===L&&(T.remove=(0,c.c)(function*(){return U()})),T};return A.toString=()=>`${L.toString()}() { [capacitor code] }`,Object.defineProperty(A,"name",{value:L,writable:!1,configurable:!1}),A},se=te("addListener"),ie=te("removeListener"),pe=(L,U)=>{const A=se({eventName:L},U),x=function(){var S=(0,c.c)(function*(){const j=yield A;ie({eventName:L,callbackId:j},U)});return function(){return S.apply(this,arguments)}}(),T=new Promise(S=>A.then(()=>S({remove:x})));return T.remove=(0,c.c)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield x()}),T},re=new Proxy({},{get(L,U){switch(U){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return H?pe:se;case"removeListener":return ie;default:return te(U)}}});return D[w]=re,ee.set(w,{name:w,proxy:re,platforms:new Set([...Object.keys(C),...H?[I]:[]])}),re});return i.convertFileSrc||(i.convertFileSrc=w=>w),i.getPlatform=N,i.handleError=w=>r.console.error(w),i.isNativePlatform=le,i.isPluginAvailable=de,i.pluginMethodNoop=(w,C,G)=>Promise.reject(`${G} does not have an implementation of "${C}".`),i.registerPlugin=he,i.Exception=$,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i.platform=i.getPlatform(),i.isNative=i.isNativePlatform(),i},u=(r=>r.Capacitor=Y(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),f=u.registerPlugin;class d{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var s=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o);const h=function(){var D=(0,c.c)(function*(){return s.removeListener(e,t)});return function(){return D.apply(this,arguments)}}(),i=Promise.resolve({remove:h});return Object.defineProperty(i,"remove",{value:(D=(0,c.c)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield h()}),function(){return D.apply(this,arguments)})}),i;var D}removeAllListeners(){var e=this;return(0,c.c)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const s=this.listeners[e];s&&s.forEach(a=>a(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:s=>{this.notifyListeners(t,s)}}}unimplemented(e="not implemented"){return new u.Exception(e,k.Unimplemented)}unavailable(e="not available"){return new u.Exception(e,k.Unavailable)}removeListener(e,t){var s=this;return(0,c.c)(function*(){const a=s.listeners[e];if(!a)return;const o=a.indexOf(t);s.listeners[e].splice(o,1),s.listeners[e].length||s.removeWindowListener(s.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const y=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),p=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class E extends d{getCookies(){return(0,c.c)(function*(){const e=document.cookie,t={};return e.split(";").forEach(s=>{if(s.length<=0)return;let[a,o]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=p(a).trim(),o=p(o).trim(),t[a]=o}),t})()}setCookie(e){return(0,c.c)(function*(){try{const t=y(e.key),s=y(e.value),a=`; expires=${(e.expires||"").replace("expires=","")}`,o=(e.path||"/").replace("path=",""),h=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${s||""}${a}; path=${o}; ${h};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,c.c)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,c.c)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,c.c)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}f("CapacitorCookies",{web:()=>new E});const z=function(){var r=(0,c.c)(function*(e){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>{const o=a.result;t(o.indexOf(",")>=0?o.split(",")[1]:o)},a.onerror=o=>s(o),a.readAsDataURL(e)})});return function(t){return r.apply(this,arguments)}}();class ce extends d{request(e){return(0,c.c)(function*(){const t=((r,e={})=>{const t=Object.assign({method:r.method||"GET",headers:r.headers},e),a=((r={})=>{const e=Object.keys(r);return Object.keys(r).map(a=>a.toLocaleLowerCase()).reduce((a,o,h)=>(a[o]=r[e[h]],a),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)t.body=r.data;else if(a.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[h,i]of Object.entries(r.data||{}))o.set(h,i);t.body=o.toString()}else if(a.includes("multipart/form-data")||r.data instanceof FormData){const o=new FormData;if(r.data instanceof FormData)r.data.forEach((i,D)=>{o.append(D,i)});else for(const i of Object.keys(r.data))o.append(i,r.data[i]);t.body=o;const h=new Headers(t.headers);h.delete("content-type"),t.headers=h}else(a.includes("application/json")||"object"==typeof r.data)&&(t.body=JSON.stringify(r.data));return t})(e,e.webFetchExtra),s=((r,e=!0)=>r?Object.entries(r).reduce((s,a)=>{const[o,h]=a;let i,D;return Array.isArray(h)?(D="",h.forEach(v=>{i=e?encodeURIComponent(v):v,D+=`${o}=${i}&`}),D.slice(0,-1)):(i=e?encodeURIComponent(h):h,D=`${o}=${i}`),`${s}&${D}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),a=s?`${e.url}?${s}`:e.url,o=yield fetch(a,t),h=o.headers.get("content-type")||"";let D,v,{responseType:i="text"}=o.ok?e:{};switch(h.includes("application/json")&&(i="json"),i){case"arraybuffer":case"blob":v=yield o.blob(),D=yield z(v);break;case"json":D=yield o.json();break;default:D=yield o.text()}const J={};return o.headers.forEach((N,q)=>{J[q]=N}),{data:D,headers:J,status:o.status,url:o.url}})()}get(e){var t=this;return(0,c.c)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,c.c)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,c.c)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,c.c)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,c.c)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}f("CapacitorHttp",{web:()=>new ce})},4692:(V,R,m)=>{m.d(R,{C:()=>K});var c=m(1368),_=m(4716),M=m(2112),n=m(4496);let K=(()=>{var O;class B{}return(O=B).\u0275fac=function($){return new($||O)},O.\u0275mod=n.a4G({type:O}),O.\u0275inj=n.s3X({imports:[c.MD,_.y,M.wZ]}),B})()},7231:(V,R,m)=>{m.d(R,{C:()=>k});var c=m(1528),_=m(4552),M=m(5748),n=m(4688),K=m(1512),O=m(4496),B=m(9552);let k=(()=>{var $;class Z{constructor(l,u,f){this.auth=l,this.fireStore=u,this.storage=f}getNotes(l,u,f,b){let g,d=(0,n.oV)(this.fireStore,`${b}/from_${this.auth.currentUser.email}_in_${f}/NoteData`);return""!=l&&(g=(0,n.kt)(d,(0,n.A9)("name",">=",l),(0,n.A9)("name","<=",l+"\uf8ff"))),""!==u&&(g=(0,n.kt)(g||d,(0,n.A9)("hometown","==",u))),(0,_.GK)(""!=u||""!=l?g:d)}getEmails(l){return(0,_.GK)((0,n.oV)(this.fireStore,`emails_in_${l}`))}getShared(l,u){return(0,_.GK)((0,n.oV)(this.fireStore,`${u}/from_${this.auth.currentUser.email}_in_${l}/SharedNoteData`))}uploadImage(l,u,f,b){var P=this;return(0,c.c)(function*(){const d=P.auth.currentUser,y=(0,M.IL)(P.storage,`uploads/${u}'s_avatar.png`);try{yield(0,K.K)(y,l.base64String,"base64");const p=yield(0,K.Kq)(y),E=(0,n.oV)(P.fireStore,`${b}/from_${d.email}_in_${f}/NoteData`),F=(0,_.UN)(E,u);return yield(0,n.gD)(F,{imageURL:p}),!0}catch{return null}})()}uploadNote(l,u,f,b,P){var d=this;return(0,c.c)(function*(){const g=d.auth.currentUser,p=(0,M.IL)(d.storage,`uploads/${l}'s_avatar.png`);try{const E=(0,n.oV)(d.fireStore,`${P}/from_${g.email}_in_${b}/NoteData`),F="",z="";if(f){yield(0,K.K)(p,f.base64String,"base64");const Q=yield(0,K.Kq)(p);return yield(0,n.Sm)((0,_.UN)(E,l),{name:l,hometown:u,imageURL:Q,noteInfo:F,noteLink:z}),!0}return yield(0,n.Sm)((0,_.UN)(E,l),{name:l,hometown:u,imageURL:"",noteInfo:F,noteLink:z}),!0}catch(E){return console.log(E),null}})()}uploadSharedNote(l,u,f,b,P,d,g){var y=this;return(0,c.c)(function*(){const p=y.auth.currentUser;try{const E=(0,n.oV)(y.fireStore,`${g}/from_${p.email}_in_${d}/NoteData`);return yield(0,n.Sm)((0,_.UN)(E,l),{name:l,hometown:u,imageURL:f,noteInfo:P,noteLink:b}),!0}catch(E){return console.log(E),null}})()}shareNote(l,u,f,b,P,d,g,y){var p=this;return(0,c.c)(function*(){if(""==l)return null;try{const E=(0,n.oV)(p.fireStore,`${y}/from_${l}_in_${g}/SharedNoteData`);return yield(0,n.Sm)((0,_.UN)(E,u),{name:u,hometown:f,imageURL:b,noteLink:P,noteInfo:d}),!0}catch(E){return console.log(E),null}})()}getNoteData(l,u,f){var b=this;return(0,c.c)(function*(){const P=b.auth.currentUser,d=(0,n.gZ)(),g=(0,_.UN)(d,`${f}/from_${P.email}_in_${u}/NoteData`,l),y=yield(0,n.i4)(g);try{return y.exists()?y.data():(console.log("Kein Dokument mit dieser ID gefunden."),null)}catch(p){console.error("Fehler beim Abrufen des Dokuments:",p)}})()}getSharedNoteData(l,u,f){var b=this;return(0,c.c)(function*(){const P=b.auth.currentUser,d=(0,n.gZ)(),g=(0,_.UN)(d,`${f}/from_${P.email}_in_${u}/SharedNoteData`,l),y=yield(0,n.i4)(g);try{return y.exists()?y.data():(console.log("Kein Dokument mit dieser ID gefunden."),null)}catch(p){console.error("Fehler beim Abrufen des Dokuments:",p)}})()}updateNote(l,u,f,b,P,d){var g=this;return(0,c.c)(function*(){const y=g.auth.currentUser;try{const p=(0,n.oV)(g.fireStore,`${d}/from_${y.email}_in_${P}/NoteData`),E=(0,_.UN)(p,b);return yield(0,n.gD)(E,{hometown:l,noteLink:u,noteInfo:f}),!0}catch{return null}})()}deleteDocument(l,u,f){var b=this;return(0,c.c)(function*(){const P=b.auth.currentUser;try{const d=(0,n.gZ)(),g=(0,_.UN)(d,`${f}/from_${P.email}_in_${u}/NoteData`,l);return yield(0,n.oh)(g),console.log("Document successfully deleted!"),!0}catch(d){return console.error("Error deleting document: ",d),!1}})()}deleteSharedDocument(l,u,f){var b=this;return(0,c.c)(function*(){const P=b.auth.currentUser;try{const d=(0,n.gZ)(),g=(0,_.UN)(d,`${f}/from_${P.email}_in_${u}/SharedNoteData`,l);return yield(0,n.oh)(g),console.log("Document successfully deleted!"),!0}catch(d){return console.error("Error deleting document: ",d),!1}})()}}return($=Z).\u0275fac=function(l){return new(l||$)(O.CoB(B.sL),O.CoB(_.OI),O.CoB(M.u_))},$.\u0275prov=O.wxM({token:$,factory:$.\u0275fac,providedIn:"root"}),Z})()}}]);