"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8116],{4692:(p,i,e)=>{e.d(i,{C:()=>s});var a=e(1368),d=e(4716),c=e(2112),g=e(4496);let s=(()=>{var r;class t{}return(r=t).\u0275fac=function(C){return new(C||r)},r.\u0275mod=g.a4G({type:r}),r.\u0275inj=g.s3X({imports:[a.MD,d.y,c.wZ]}),t})()},8116:(p,i,e)=>{e.r(i),e.d(i,{Tab4PageModule:()=>T});var a=e(2112),d=e(1368),c=e(4716),g=e(4692),s=e(8244),r=e(1528),t=e(4496),E=e(7980);const M=[{path:"",component:(()=>{var n;class l{constructor(o,m){this.authCompatService=o,this.router=m,this.currentUserEmail="test",this.getcurrentEmail()}getcurrentEmail(){var o=this;return(0,r.c)(function*(){o.currentUserEmail=yield o.authCompatService.getCurrentEmail(),console.log(o.currentUserEmail)})()}onLogOut(){this.authCompatService.signOut(),setTimeout(()=>{this.router.navigate(["login"])},5)}}return(n=l).\u0275fac=function(o){return new(o||n)(t.GI1(E.s),t.GI1(s.E5))},n.\u0275cmp=t.In1({type:n,selectors:[["app-tab4"]],decls:13,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[2,"display","flex","justify-content","center"],["color","danger","fill","outline",3,"click"]],template:function(o,m){1&o&&(t.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.OEk(3," Settings "),t.C$Y()()(),t.I0R(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t.OEk(8,"Settings"),t.C$Y()()(),t.I0R(9,"h3",4),t.OEk(10),t.C$Y(),t.I0R(11,"ion-button",5),t.qCj("click",function(){return m.onLogOut()}),t.OEk(12,"Logout"),t.C$Y()()),2&o&&(t.E7m("translucent",!0),t.yG2(4),t.E7m("fullscreen",!0),t.yG2(6),t.oRS("Logged in as: ",m.currentUserEmail,""))},dependencies:[a.sn,a._i,a.wB,a.tM,a.Md]}),l})()}];let P=(()=>{var n;class l{}return(n=l).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({imports:[s.qQ.forChild(M),s.qQ]}),l})(),T=(()=>{var n;class l{}return(n=l).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({imports:[a.wZ,d.MD,c.y,g.C,P,c.sl]}),l})()}}]);