"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8116],{4692:(p,c,n)=>{n.d(c,{C:()=>i});var a=n(1368),d=n(4716),m=n(2112),g=n(4496);let i=(()=>{var r;class t{}return(r=t).\u0275fac=function(C){return new(C||r)},r.\u0275mod=g.a4G({type:r}),r.\u0275inj=g.s3X({imports:[a.MD,d.y,m.wZ]}),t})()},8116:(p,c,n)=>{n.r(c),n.d(c,{Tab4PageModule:()=>T});var a=n(2112),d=n(1368),m=n(4716),g=n(4692),i=n(8244),r=n(1528),t=n(4496),E=n(7980);const M=[{path:"",component:(()=>{var e;class l{constructor(o,s){this.authCompatService=o,this.router=s,this.currentUserEmail="test",this.getcurrentEmail()}ionViewWillEnter(){this.currentGame=localStorage.getItem("currentGame")}getcurrentEmail(){var o=this;return(0,r.c)(function*(){o.currentUserEmail=yield o.authCompatService.getCurrentEmail(),console.log(o.currentUserEmail)})()}onLogOut(){localStorage.setItem("reload","true"),this.authCompatService.signOut(),setTimeout(()=>{this.router.navigate(["login"])},5)}}return(e=l).\u0275fac=function(o){return new(o||e)(t.GI1(E.s),t.GI1(i.E5))},e.\u0275cmp=t.In1({type:e,selectors:[["app-tab4"]],decls:15,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[2,"display","flex","justify-content","center"],["color","danger","fill","outline",3,"click"]],template:function(o,s){1&o&&(t.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.OEk(3," Settings "),t.C$Y()()(),t.I0R(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t.OEk(8,"Settings"),t.C$Y()()(),t.I0R(9,"h3",4),t.OEk(10),t.C$Y(),t.I0R(11,"h3",4),t.OEk(12),t.C$Y(),t.I0R(13,"ion-button",5),t.qCj("click",function(){return s.onLogOut()}),t.OEk(14,"Logout"),t.C$Y()()),2&o&&(t.E7m("translucent",!0),t.yG2(4),t.E7m("fullscreen",!0),t.yG2(6),t.oRS("Logged in as: ",s.currentUserEmail,""),t.yG2(2),t.oRS("Current Game: ",s.currentGame,""))},dependencies:[a.sn,a._i,a.wB,a.tM,a.Md]}),l})()}];let P=(()=>{var e;class l{}return(e=l).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({imports:[i.qQ.forChild(M),i.qQ]}),l})(),T=(()=>{var e;class l{}return(e=l).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({imports:[a.wZ,d.MD,m.y,g.C,P,m.sl]}),l})()}}]);