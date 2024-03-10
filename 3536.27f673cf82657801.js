"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3536],{3536:(q,K,m)=>{m.r(K),m.d(K,{startInputShims:()=>Z});var g=m(1528),l=m(4829),T=m(6016),y=m(1448),R=m(56);m(1008);const M=new WeakMap,P=(e,t,s,r=0,n=!1)=>{M.has(e)!==s&&(s?j(e,t,r,n):G(e,t))},j=(e,t,s,r=!1)=>{const n=t.parentNode,o=t.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r&&(o.disabled=!0),n.appendChild(o),M.set(e,o);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=M.get(e);s&&(M.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",B=(e,t,s)=>{const r=e[N];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[N]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},W=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&B(t,0,s)},{once:!0})};let w=0;const O="data-ionic-skip-scroll-assist",V=(e,t,s,r,n,o,i,a=!1)=>{const _=o&&(void 0===i||i.mode===R.a.None);let L=!1;const u=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==L?k(e,t,s,r,S.detail.keyboardHeight,_,a,u,!1):L=!0},c=()=>{L=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c,!0)},h=function(){var S=(0,g.c)(function*(){t.hasAttribute(O)?t.removeAttribute(O):(k(e,t,s,r,n,_,a,u),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",c,!0))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h,!0),()=>{e.removeEventListener("focusin",h,!0),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c,!0)}},p=e=>{document.activeElement!==e&&(e.setAttribute(O,"true"),e.focus())},k=function(){var e=(0,g.c)(function*(t,s,r,n,o,i,a=!1,_=0,L=!0){if(!r&&!n)return;const u=((e,t,s,r)=>{var n;return((e,t,s,r)=>{const n=e.top,o=e.bottom,i=t.top,_=i+15,u=Math.min(t.bottom,r-s)-50-o,f=_-n,c=Math.round(u<0?-u:f>0?-f:0),h=Math.min(c,n-i),b=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,b)),scrollPadding:s,inputSafeY:4-(n-_)}})((null!==(n=e.closest("ion-item,[ion-item]"))&&void 0!==n?n:e).getBoundingClientRect(),t.getBoundingClientRect(),s,r)})(t,r||n,o,_);if(r&&Math.abs(u.scrollAmount)<4)return p(s),void(i&&null!==r&&(B(r,w),W(s,r,()=>w=0)));if(P(t,s,!0,u.inputSafeY,a),p(s),(0,y.r)(()=>t.click()),i&&r&&(w=u.scrollPadding,B(r,w)),typeof window<"u"){let f;const c=function(){var S=(0,g.c)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",c),r&&(yield(0,T.c)(r,0,u.scrollAmount,u.scrollDuration)),P(t,s,!1,u.inputSafeY),p(s),i&&W(s,r,()=>w=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",c)};if(r){const S=yield(0,T.g)(r);if(L&&u.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===s.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",c),void(f=setTimeout(c,1e3))}c()}});return function(s,r,n,o,i,a){return e.apply(this,arguments)}}(),Z=function(){var e=(0,g.c)(function*(t,s){if(void 0===l.d)return;const r="ios"===s,n="android"===s,o=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",r),_=t.getBoolean("inputBlurring",r),L=t.getBoolean("scrollPadding",!0),u=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,c=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var v=(0,g.c)(function*(d){yield new Promise(I=>(0,y.c)(d,I));const x=d.shadowRoot||d,D=x.querySelector("input")||x.querySelector("textarea"),A=(0,T.f)(d),F=A?null:d.closest("ion-footer");if(D){if(A&&a&&!f.has(d)){const I=((e,t,s)=>{if(!s||!t)return()=>{};const r=a=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,a)},n=()=>P(e,t,!1),o=()=>r(!0),i=()=>r(!1);return(0,y.a)(s,"ionScrollStart",o),(0,y.a)(s,"ionScrollEnd",i),t.addEventListener("blur",n),()=>{(0,y.b)(s,"ionScrollStart",o),(0,y.b)(s,"ionScrollEnd",i),t.removeEventListener("blur",n)}})(d,D,A);f.set(d,I)}if("date"!==D.type&&"datetime-local"!==D.type&&(A||F)&&i&&!c.has(d)){const I=V(d,D,A,F,o,L,h,n);c.set(d,I)}}});return function(x){return v.apply(this,arguments)}}();_&&(()=>{let e=!0,t=!1;const s=document;(0,y.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=s.activeElement;if(!a||a.matches(C))return;const _=i.target;_!==a&&(_.matches(C)||_.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const v of u)S(v);l.d.addEventListener("ionInputDidLoad",v=>{S(v.detail)}),l.d.addEventListener("ionInputDidUnload",v=>{(v=>{if(a){const d=f.get(v);d&&d(),f.delete(v)}if(i){const d=c.get(v);d&&d(),c.delete(v)}})(v.detail)})});return function(s,r){return e.apply(this,arguments)}}()}}]);