"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3168],{1208:(F,M,v)=>{v.d(M,{_8:()=>a,on:()=>S,wd:()=>_});var a=function(n){return n.Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS",n}(a||{}),_=function(n){return n.Rear="REAR",n.Front="FRONT",n}(_||{}),S=function(n){return n.Uri="uri",n.Base64="base64",n.DataUrl="dataUrl",n}(S||{})},1740:(F,M,v)=>{v.d(M,{Ut:()=>S,_8:()=>_._8,on:()=>_.on});var a=v(6400),_=v(1208);const S=(0,a.C_)("Camera",{web:()=>v.e(9028).then(v.bind(v,9028)).then(n=>new n.CameraWeb)})},6400:(F,M,v)=>{v.d(M,{C_:()=>m,Yr:()=>$,w8:()=>l});var a=v(1528);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var k=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(k||{});class $ extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const X=r=>{var e,t,i,f,o;const p=r.CapacitorCustomPlatform||null,d=r.Capacitor||{},E=d.Plugins=d.Plugins||{},b=r.CapacitorPlatforms,B=(null===(e=null==b?void 0:b.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==p?p.name:(r=>{var e,t;return null!=r&&r.androidBridge?"android":null!==(t=null===(e=null==r?void 0:r.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(r)),le=(null===(t=null==b?void 0:b.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==B()),de=(null===(i=null==b?void 0:b.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(C=>{const D=ee.get(C);return!!(null!=D&&D.platforms.has(B())||oe(C))}),oe=(null===(f=null==b?void 0:b.currentPlatform)||void 0===f?void 0:f.getPluginHeader)||(C=>{var D;return null===(D=d.PluginHeaders)||void 0===D?void 0:D.find(V=>V.name===C)}),ee=new Map,ge=(null===(o=null==b?void 0:b.currentPlatform)||void 0===o?void 0:o.registerPlugin)||((C,D={})=>{const V=ee.get(C);if(V)return console.warn(`Capacitor plugin "${C}" already registered. Cannot register plugins twice.`),V.proxy;const T=B(),G=oe(C);let W;const ve=function(){var U=(0,a.c)(function*(){return!W&&T in D?W=W="function"==typeof D[T]?yield D[T]():D[T]:null!==p&&!W&&"web"in D&&(W=W="function"==typeof D.web?yield D.web():D.web),W});return function(){return U.apply(this,arguments)}}(),te=U=>{let L;const A=(...N)=>{const I=ve().then(R=>{const K=((U,L)=>{var A,N;if(!G){if(U)return null===(N=U[L])||void 0===N?void 0:N.bind(U);throw new $(`"${C}" plugin is not implemented on ${T}`,k.Unimplemented)}{const I=null==G?void 0:G.methods.find(R=>L===R.name);if(I)return"promise"===I.rtype?R=>d.nativePromise(C,L.toString(),R):(R,K)=>d.nativeCallback(C,L.toString(),R,K);if(U)return null===(A=U[L])||void 0===A?void 0:A.bind(U)}})(R,U);if(K){const Y=K(...N);return L=null==Y?void 0:Y.remove,Y}throw new $(`"${C}.${U}()" is not implemented on ${T}`,k.Unimplemented)});return"addListener"===U&&(I.remove=(0,a.c)(function*(){return L()})),I};return A.toString=()=>`${U.toString()}() { [capacitor code] }`,Object.defineProperty(A,"name",{value:U,writable:!1,configurable:!1}),A},se=te("addListener"),ie=te("removeListener"),pe=(U,L)=>{const A=se({eventName:U},L),N=function(){var R=(0,a.c)(function*(){const K=yield A;ie({eventName:U,callbackId:K},L)});return function(){return R.apply(this,arguments)}}(),I=new Promise(R=>A.then(()=>R({remove:N})));return I.remove=(0,a.c)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield N()}),I},re=new Proxy({},{get(U,L){switch(L){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return G?pe:se;case"removeListener":return ie;default:return te(L)}}});return E[C]=re,ee.set(C,{name:C,proxy:re,platforms:new Set([...Object.keys(D),...G?[T]:[]])}),re});return d.convertFileSrc||(d.convertFileSrc=C=>C),d.getPlatform=B,d.handleError=C=>r.console.error(C),d.isNativePlatform=le,d.isPluginAvailable=de,d.pluginMethodNoop=(C,D,V)=>Promise.reject(`${V} does not have an implementation of "${D}".`),d.registerPlugin=ge,d.Exception=$,d.DEBUG=!!d.DEBUG,d.isLoggingEnabled=!!d.isLoggingEnabled,d.platform=d.getPlatform(),d.isNative=d.isNativePlatform(),d},c=(r=>r.Capacitor=X(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),m=c.registerPlugin;class l{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var i=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o);const p=function(){var E=(0,a.c)(function*(){return i.removeListener(e,t)});return function(){return E.apply(this,arguments)}}(),d=Promise.resolve({remove:p});return Object.defineProperty(d,"remove",{value:(E=(0,a.c)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield p()}),function(){return E.apply(this,arguments)})}),d;var E}removeAllListeners(){var e=this;return(0,a.c)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const i=this.listeners[e];i&&i.forEach(f=>f(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new c.Exception(e,k.Unimplemented)}unavailable(e="not available"){return new c.Exception(e,k.Unavailable)}removeListener(e,t){var i=this;return(0,a.c)(function*(){const f=i.listeners[e];if(!f)return;const o=f.indexOf(t);i.listeners[e].splice(o,1),i.listeners[e].length||i.removeWindowListener(i.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const y=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),P=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class w extends l{getCookies(){return(0,a.c)(function*(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[f,o]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");f=P(f).trim(),o=P(o).trim(),t[f]=o}),t})()}setCookie(e){return(0,a.c)(function*(){try{const t=y(e.key),i=y(e.value),f=`; expires=${(e.expires||"").replace("expires=","")}`,o=(e.path||"/").replace("path=",""),p=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${f}; path=${o}; ${p};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,a.c)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,a.c)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,a.c)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}m("CapacitorCookies",{web:()=>new w});const z=function(){var r=(0,a.c)(function*(e){return new Promise((t,i)=>{const f=new FileReader;f.onload=()=>{const o=f.result;t(o.indexOf(",")>=0?o.split(",")[1]:o)},f.onerror=o=>i(o),f.readAsDataURL(e)})});return function(t){return r.apply(this,arguments)}}();class ce extends l{request(e){return(0,a.c)(function*(){const t=((r,e={})=>{const t=Object.assign({method:r.method||"GET",headers:r.headers},e),f=((r={})=>{const e=Object.keys(r);return Object.keys(r).map(f=>f.toLocaleLowerCase()).reduce((f,o,p)=>(f[o]=r[e[p]],f),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)t.body=r.data;else if(f.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[p,d]of Object.entries(r.data||{}))o.set(p,d);t.body=o.toString()}else if(f.includes("multipart/form-data")||r.data instanceof FormData){const o=new FormData;if(r.data instanceof FormData)r.data.forEach((d,E)=>{o.append(E,d)});else for(const d of Object.keys(r.data))o.append(d,r.data[d]);t.body=o;const p=new Headers(t.headers);p.delete("content-type"),t.headers=p}else(f.includes("application/json")||"object"==typeof r.data)&&(t.body=JSON.stringify(r.data));return t})(e,e.webFetchExtra),i=((r,e=!0)=>r?Object.entries(r).reduce((i,f)=>{const[o,p]=f;let d,E;return Array.isArray(p)?(E="",p.forEach(b=>{d=e?encodeURIComponent(b):b,E+=`${o}=${d}&`}),E.slice(0,-1)):(d=e?encodeURIComponent(p):p,E=`${o}=${d}`),`${i}&${E}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),f=i?`${e.url}?${i}`:e.url,o=yield fetch(f,t),p=o.headers.get("content-type")||"";let E,b,{responseType:d="text"}=o.ok?e:{};switch(p.includes("application/json")&&(d="json"),d){case"arraybuffer":case"blob":b=yield o.blob(),E=yield z(b);break;case"json":E=yield o.json();break;default:E=yield o.text()}const J={};return o.headers.forEach((B,q)=>{J[q]=B}),{data:E,headers:J,status:o.status,url:o.url}})()}get(e){var t=this;return(0,a.c)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,a.c)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,a.c)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,a.c)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,a.c)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}m("CapacitorHttp",{web:()=>new ce})},4692:(F,M,v)=>{v.d(M,{C:()=>x});var a=v(1368),_=v(4716),S=v(2112),n=v(4496);let x=(()=>{var O;class j{}return(O=j).\u0275fac=function($){return new($||O)},O.\u0275mod=n.a4G({type:O}),O.\u0275inj=n.s3X({imports:[a.MD,_.y,S.wZ]}),j})()},7231:(F,M,v)=>{v.d(M,{C:()=>k});var a=v(1528),_=v(4552),S=v(5748),n=v(4688),x=v(1512),O=v(4496),j=v(9552);let k=(()=>{var $;class Z{constructor(s,c,m){this.auth=s,this.fireStore=c,this.storage=m}getNotes(s,c,m,g){let u,l=(0,n.oV)(this.fireStore,`${g}/from_${this.auth.currentUser.email}_in_${m}/NoteData`);return""!=s&&(u=(0,n.kt)(l,(0,n.A9)("name",">=",s),(0,n.A9)("name","<=",s+"\uf8ff"))),""!==c&&(u=(0,n.kt)(u||l,(0,n.A9)("hometown","==",c))),(0,_.GK)(""!=c||""!=s?u:l)}getEmails(s){return(0,_.GK)((0,n.oV)(this.fireStore,`emails_in_${s}`))}getShared(s,c){return(0,_.GK)((0,n.oV)(this.fireStore,`${c}/from_${this.auth.currentUser.email}_in_${s}/SharedNoteData`))}uploadImage(s,c,m,g){var h=this;return(0,a.c)(function*(){const l=h.auth.currentUser,y=(0,S.IL)(h.storage,`uploads/${c}'s_avatar.png`);try{yield(0,x.K)(y,s.base64String,"base64");const P=yield(0,x.Kq)(y),w=(0,n.oV)(h.fireStore,`${g}/from_${l.email}_in_${m}/NoteData`),H=(0,_.UN)(w,c);return yield(0,n.gD)(H,{imageURL:P}),!0}catch{return null}})()}uploadNote(s,c,m,g,h){var l=this;return(0,a.c)(function*(){const u=l.auth.currentUser,P=(0,S.IL)(l.storage,`uploads/${s}'s_avatar.png`);try{const w=(0,n.oV)(l.fireStore,`${h}/from_${u.email}_in_${g}/NoteData`),H="",z="";if(m){yield(0,x.K)(P,m.base64String,"base64");const Q=yield(0,x.Kq)(P);return yield(0,n.Sm)((0,_.UN)(w,s),{name:s,hometown:c,imageURL:Q,noteInfo:H,noteLink:z}),!0}return yield(0,n.Sm)((0,_.UN)(w,s),{name:s,hometown:c,imageURL:"",noteInfo:H,noteLink:z}),!0}catch(w){return console.log(w),null}})()}uploadSharedNote(s,c,m,g,h,l,u){var y=this;return(0,a.c)(function*(){const P=y.auth.currentUser;try{const w=(0,n.oV)(y.fireStore,`${u}/from_${P.email}_in_${l}/NoteData`);return yield(0,n.Sm)((0,_.UN)(w,s),{name:s,hometown:c,imageURL:m,noteInfo:h,noteLink:g}),!0}catch(w){return console.log(w),null}})()}uploadAllSharedNotes(s,c,m){var g=this;return(0,a.c)(function*(){const h=g.auth.currentUser;try{const l=(0,n.oV)(g.fireStore,`${m}/from_${h.email}_in_${c}/NoteData`);for(const u of s)yield(0,n.Sm)((0,_.UN)(l,u.name),{name:u.name,hometown:u.hometown,imageURL:u.imageURL,noteLink:u.noteLink,noteInfo:u.noteInfo});return!0}catch(l){return console.log(l),null}})()}shareNote(s,c,m,g,h,l,u,y){var P=this;return(0,a.c)(function*(){if(""==s)return null;try{const w=(0,n.oV)(P.fireStore,`${y}/from_${s}_in_${u}/SharedNoteData`);return console.log("Der Pfad!: "+w),yield(0,n.Sm)((0,_.UN)(w,c),{name:c,hometown:m,imageURL:g,noteLink:h,noteInfo:l}),!0}catch(w){return console.log(w),null}})()}shareAllNotes(s,c,m,g){var h=this;return(0,a.c)(function*(){if(""==s)return null;try{const l=(0,n.oV)(h.fireStore,`${g}/from_${s}_in_${m}/SharedNoteData`);for(const u of c)yield(0,n.Sm)((0,_.UN)(l,u.name),{name:u.name,hometown:u.hometown,imageURL:u.imageURL,noteLink:u.noteLink,noteInfo:u.noteInfo});return!0}catch(l){return console.log(l),null}})()}getNoteData(s,c,m){var g=this;return(0,a.c)(function*(){const h=g.auth.currentUser,l=(0,n.gZ)(),u=(0,_.UN)(l,`${m}/from_${h.email}_in_${c}/NoteData`,s),y=yield(0,n.i4)(u);try{return y.exists()?y.data():(console.log("Kein Dokument mit dieser ID gefunden."),null)}catch(P){console.error("Fehler beim Abrufen des Dokuments:",P)}})()}getSharedNoteData(s,c,m){var g=this;return(0,a.c)(function*(){const h=g.auth.currentUser,l=(0,n.gZ)(),u=(0,_.UN)(l,`${m}/from_${h.email}_in_${c}/SharedNoteData`,s),y=yield(0,n.i4)(u);try{return y.exists()?y.data():(console.log("Kein Dokument mit dieser ID gefunden."),null)}catch(P){console.error("Fehler beim Abrufen des Dokuments:",P)}})()}updateNote(s,c,m,g,h,l){var u=this;return(0,a.c)(function*(){const y=u.auth.currentUser;try{const P=(0,n.oV)(u.fireStore,`${l}/from_${y.email}_in_${h}/NoteData`),w=(0,_.UN)(P,g);return yield(0,n.gD)(w,{hometown:s,noteLink:c,noteInfo:m}),!0}catch{return null}})()}deleteDocument(s,c,m){var g=this;return(0,a.c)(function*(){const h=g.auth.currentUser;try{const l=(0,n.gZ)(),u=(0,_.UN)(l,`${m}/from_${h.email}_in_${c}/NoteData`,s);return yield(0,n.oh)(u),console.log("Document successfully deleted!"),!0}catch(l){return console.error("Error deleting document: ",l),!1}})()}deleteSharedDocument(s,c,m){var g=this;return(0,a.c)(function*(){const h=g.auth.currentUser;try{const l=(0,n.gZ)(),u=(0,_.UN)(l,`${m}/from_${h.email}_in_${c}/SharedNoteData`,s);return yield(0,n.oh)(u),console.log("Document successfully deleted!"),!0}catch(l){return console.error("Error deleting document: ",l),!1}})()}deleteAllSharedDocuments(s,c){var m=this;return(0,a.c)(function*(){const g=m.auth.currentUser;try{const h=(0,n.gZ)(),l=(0,n.oV)(h,`${c}/from_${g.email}_in_${s}/SharedNoteData`);return(yield(0,n.uY)(l)).forEach(function(){var y=(0,a.c)(function*(P){const w=(0,_.UN)(h,P.ref.path);yield(0,n.oh)(w),console.log("Document successfully deleted:",P.id)});return function(P){return y.apply(this,arguments)}}()),console.log("All documents successfully deleted!"),!0}catch(h){return console.error("Error deleting documents: ",h),!1}})()}}return($=Z).\u0275fac=function(s){return new(s||$)(O.CoB(j.sL),O.CoB(_.OI),O.CoB(S.u_))},$.\u0275prov=O.wxM({token:$,factory:$.\u0275fac,providedIn:"root"}),Z})()}}]);