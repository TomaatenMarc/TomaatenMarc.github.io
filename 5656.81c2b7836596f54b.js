"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5656],{5656:(ne,h,_)=>{_.r(h),_.d(h,{Tab2PageModule:()=>te});var s=_(2112),p=_(1368),g=_(4716),C=_(4692),f=_(8244),m=_(1528),u=_(1740);class O{constructor(r){this.formBuilder=r}createForm(){return this.formBuilder.group({name:["",[g.AQ.required]],hometown:[""]})}}var e=_(4496),b=_(7231);const T=["creationModalOrga"],y=["searchModalOrga"],I=["itemModalOrga"],G=["alertModalOrga"];function k(a,r){if(1&a&&e.wR5(0,"img",25),2&a){const o=e.GaO().$implicit;e.E7m("src",o.imageURL,e.K6U)}}function E(a,r){1&a&&(e.I0R(0,"div",26),e.wR5(1,"img",27),e.C$Y())}function x(a,r){if(1&a&&(e.I0R(0,"ion-item",28)(1,"ion-label",29),e.OEk(2),e.C$Y()()),2&a){const o=e.GaO(),t=o.$implicit;e.E7m("ngClass",o.index%2==0?"even-item":"odd-item"),e.yG2(2),e.cNF(t.noteInfo)}}function R(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-item-sliding")(1,"ion-item",19)(2,"ion-avatar",20),e.qCj("click",function(){const i=e.usT(o).$implicit,l=e.GaO();return e.CGJ(l.changeImage(i))}),e.yuY(3,k,1,1,"img",21)(4,E,2,0,"ng-template",null,22,e.gJz),e.C$Y(),e.I0R(6,"ion-label"),e.OEk(7),e.C$Y(),e.I0R(8,"ion-label"),e.OEk(9),e.C$Y(),e.I0R(10,"ion-icon",23),e.qCj("click",function(){const i=e.usT(o).$implicit,l=e.GaO();return e.CGJ(l.setIndexOrga(i))}),e.C$Y()(),e.yuY(11,x,3,2,"ion-item",24),e.C$Y()}if(2&a){const o=r.$implicit,n=r.index,t=e.Gew(5);e.yG2(),e.E7m("button",!0)("ngClass",n%2==0?"even-item":"odd-item"),e.yG2(2),e.E7m("ngIf",o.imageURL)("ngIfElse",t),e.yG2(4),e.cNF(o.name),e.yG2(2),e.cNF(o.hometown),e.yG2(2),e.E7m("ngIf",""!=o.noteInfo)}}function M(a,r){1&a&&(e.I0R(0,"p"),e.OEk(1,"Picture has been selected"),e.C$Y())}function Y(a,r){1&a&&(e.I0R(0,"div",26)(1,"p"),e.OEk(2,"Choose a picture"),e.C$Y()())}function v(a,r){1&a&&(e.I0R(0,"ion-label",40),e.OEk(1,"Name is mandatory"),e.C$Y())}function P(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-content",30)(1,"div",31)(2,"form",32)(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e.OEk(6,"Create Organization Note"),e.C$Y()(),e.I0R(7,"ion-card-content")(8,"ion-item",33),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.chooseImage())}),e.yuY(9,M,2,0,"p",34)(10,Y,3,0,"ng-template",null,22,e.gJz),e.C$Y(),e.I0R(12,"ion-item"),e.wR5(13,"ion-input",35),e.C$Y(),e.yuY(14,v,2,0,"ion-label",36),e.I0R(15,"ion-item"),e.wR5(16,"ion-input",37),e.C$Y(),e.I0R(17,"ion-button",38),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.createOrganization())}),e.OEk(18,"Create Organization"),e.C$Y(),e.I0R(19,"ion-button",39),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.cancelCreationOrga())}),e.OEk(20,"Cancel"),e.C$Y()()()()()()}if(2&a){const o=e.Gew(11),n=e.GaO();let t;e.yG2(2),e.E7m("formGroup",n.createOrgaForm),e.yG2(7),e.E7m("ngIf",n.photo)("ngIfElse",o),e.yG2(5),e.E7m("ngIf",(null==(t=n.createOrgaForm.get("name"))?null:t.touched)&&(null==(t=n.createOrgaForm.get("name"))||null==t.errors?null:t.errors.required)),e.yG2(3),e.E7m("disabled",!n.createOrgaForm.valid)}}function w(a,r){if(1&a&&(e.I0R(0,"ion-select-option",47),e.OEk(1),e.C$Y()),2&a){const o=r.$implicit;e.E7m("value",o),e.yG2(),e.cNF(o)}}function $(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-content",30)(1,"div",31)(2,"form")(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e.OEk(6,"Search for Organization"),e.C$Y()(),e.I0R(7,"ion-card-content")(8,"ion-item"),e.wR5(9,"ion-searchbar",41,42),e.C$Y(),e.I0R(11,"ion-item")(12,"ion-label",43),e.OEk(13,"Choose an origin"),e.C$Y(),e.I0R(14,"ion-select",44),e.iHE("ngModelChange",function(t){e.usT(o);const i=e.GaO();return e.kNx(i.selectedHometown,t)||(i.selectedHometown=t),e.CGJ(t)}),e.yuY(15,w,2,2,"ion-select-option",45),e.C$Y()(),e.I0R(16,"ion-button",46),e.qCj("click",function(){e.usT(o);const t=e.Gew(10),i=e.GaO();return e.CGJ(i.search(t.value))}),e.OEk(17,"Search"),e.C$Y(),e.I0R(18,"ion-button",39),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.cancelSearchOrga())}),e.OEk(19,"Cancel"),e.C$Y()()()()()()}if(2&a){const o=e.GaO();e.yG2(14),e.OKB("ngModel",o.selectedHometown),e.yG2(),e.E7m("ngForOf",o.hometowns)}}function S(a,r){if(1&a&&(e.I0R(0,"ion-select-option",47),e.OEk(1),e.C$Y()),2&a){const o=r.$implicit;e.E7m("value",o.email),e.yG2(),e.cNF(o.email)}}function z(a,r){if(1&a){const o=e.KQA();e.I0R(0,"h3"),e.OEk(1,"Share Orga with user"),e.C$Y(),e.I0R(2,"ion-select",66),e.iHE("ngModelChange",function(t){e.usT(o);const i=e.GaO(2);return e.kNx(i.chosenUsers,t)||(i.chosenUsers=t),e.CGJ(t)}),e.yuY(3,S,2,2,"ion-select-option",45),e.C$Y(),e.I0R(4,"ion-button",67),e.qCj("click",function(){e.usT(o);const t=e.GaO(2);return e.CGJ(t.shareOrganization())}),e.OEk(5,"Share"),e.C$Y()}if(2&a){const o=e.GaO(2);e.yG2(2),e.E7m("multiple",!0),e.OKB("ngModel",o.chosenUsers),e.yG2(),e.E7m("ngForOf",o.users)}}function N(a,r){if(1&a&&e.wR5(0,"img",25),2&a){const o=e.GaO(2);e.E7m("src",o.orgaImg,e.K6U)}}function F(a,r){1&a&&(e.I0R(0,"div",26),e.wR5(1,"img",27),e.C$Y())}function D(a,r){1&a&&(e.I0R(0,"ion-label",1),e.OEk(1,"Hometown: "),e.C$Y())}function q(a,r){if(1&a&&(e.I0R(0,"a",68),e.OEk(1),e.C$Y()),2&a){const o=e.GaO(2);e.yG2(),e.cNF(o.orgaHome)}}function H(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-input",69),e.iHE("ngModelChange",function(t){e.usT(o);const i=e.GaO(2);return e.kNx(i.orgaHome,t)||(i.orgaHome=t),e.CGJ(t)}),e.C$Y()}if(2&a){const o=e.GaO(2);e.OKB("ngModel",o.orgaHome)}}function j(a,r){1&a&&(e.I0R(0,"ion-label",1),e.OEk(1,"Link:"),e.C$Y())}function K(a,r){if(1&a&&(e.I0R(0,"a",71),e.OEk(1),e.C$Y()),2&a){const o=e.GaO(3);e._6D("href",o.orgaLink,e.K6U),e.yG2(),e.cNF(o.orgaName)}}function A(a,r){if(1&a&&(e.SAx(0),e.yuY(1,K,2,2,"a",70),e.k70()),2&a){const o=e.GaO(2);e.yG2(),e.E7m("ngIf",!o.editMode)}}function J(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-input",72),e.iHE("ngModelChange",function(t){e.usT(o);const i=e.GaO(2);return e.kNx(i.orgaLink,t)||(i.orgaLink=t),e.CGJ(t)}),e.C$Y()}if(2&a){const o=e.GaO(2);e.OKB("ngModel",o.orgaLink)}}function U(a,r){if(1&a&&(e.I0R(0,"textarea",73),e.OEk(1),e.C$Y()),2&a){const o=e.GaO(2);e.yG2(),e.cNF(o.orgaInfo)}}function B(a,r){if(1&a){const o=e.KQA();e.I0R(0,"textarea",74),e.iHE("ngModelChange",function(t){e.usT(o);const i=e.GaO(2);return e.kNx(i.orgaInfo,t)||(i.orgaInfo=t),e.CGJ(t)}),e.OEk(1),e.C$Y()}if(2&a){const o=e.GaO(2);e.OKB("ngModel",o.orgaInfo),e.yG2(),e.cNF(o.orgaInfo)}}function L(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-content",30)(1,"ion-fab",48)(2,"ion-fab-button",6),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.toggleEditModeOrga())}),e.wR5(3,"ion-icon",49),e.C$Y()(),e.I0R(4,"ion-fab",48)(5,"ion-fab-button",50),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.saveOrgaData())}),e.wR5(6,"ion-icon",51),e.C$Y()(),e.I0R(7,"ion-fab",52)(8,"ion-fab-button",53),e.wR5(9,"ion-icon",54),e.C$Y()(),e.I0R(10,"ion-popover",55),e.yuY(11,z,6,3,"ng-template"),e.C$Y(),e.I0R(12,"ion-card")(13,"ion-card-header")(14,"ion-card-title",56),e.OEk(15),e.C$Y()(),e.I0R(16,"ion-card-content")(17,"ion-item")(18,"ion-avatar",57),e.yuY(19,N,1,1,"img",21)(20,F,2,0,"ng-template",null,22,e.gJz),e.C$Y()()(),e.I0R(22,"ion-card-content")(23,"ion-item"),e.yuY(24,D,2,0,"ion-label",58)(25,q,2,1,"a",59)(26,H,1,1,"ion-input",60),e.C$Y(),e.I0R(27,"ion-item"),e.yuY(28,j,2,0,"ion-label",58)(29,A,2,1,"ng-container",61)(30,J,1,1,"ion-input",62),e.C$Y()()(),e.I0R(31,"ion-card")(32,"ion-card-header")(33,"ion-card-title"),e.OEk(34,"Additional Infos"),e.C$Y()(),e.I0R(35,"ion-card-content")(36,"ion-item"),e.yuY(37,U,2,1,"textarea",63)(38,B,2,2,"textarea",64),e.C$Y()()(),e.I0R(39,"ion-button",39),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.cancelItemOrga())}),e.OEk(40,"Close"),e.C$Y(),e.I0R(41,"ion-button",65),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.delete())}),e.OEk(42,"Delete"),e.C$Y()()}if(2&a){const o=e.Gew(21),n=e.GaO();e.yG2(),e.E7m("hidden",n.editMode),e.yG2(3),e.E7m("hidden",!n.editMode),e.yG2(3),e.E7m("hidden",n.editMode),e.yG2(3),e.E7m("isOpen",n.isPopoverOpen),e.yG2(4),e.CI5("id","nameOrga",n.currentItemIndexOrga,""),e.yG2(),e.cNF(n.orgaName),e.yG2(4),e.E7m("ngIf",n.orgaImg)("ngIfElse",o),e.yG2(5),e.E7m("ngIf",!n.editMode),e.yG2(),e.E7m("ngIf",!n.editMode),e.yG2(),e.E7m("ngIf",n.editMode),e.yG2(2),e.E7m("ngIf",!n.editMode),e.yG2(),e.E7m("ngIf",n.orgaLink),e.yG2(),e.E7m("ngIf",n.editMode),e.yG2(7),e.E7m("ngIf",!n.editMode),e.yG2(),e.E7m("ngIf",n.editMode)}}function Q(a,r){if(1&a&&e.wR5(0,"img",25),2&a){const o=e.GaO().$implicit;e.E7m("src",o.imageURL,e.K6U)}}function W(a,r){1&a&&(e.I0R(0,"div",26),e.wR5(1,"img",27),e.C$Y())}function X(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-item-sliding")(1,"ion-item",19)(2,"ion-avatar",76),e.yuY(3,Q,1,1,"img",21)(4,W,2,0,"ng-template",null,22,e.gJz),e.C$Y(),e.I0R(6,"ion-label",56),e.OEk(7),e.C$Y(),e.I0R(8,"ion-label"),e.OEk(9),e.C$Y(),e.I0R(10,"ion-icon",77),e.qCj("click",function(){const i=e.usT(o).index,l=e.GaO(2);return e.CGJ(l.addToDatabase(i))}),e.C$Y(),e.I0R(11,"ion-icon",78),e.qCj("click",function(){const i=e.usT(o).index,l=e.GaO(2);return e.CGJ(l.deleteShared(i))}),e.C$Y()()()}if(2&a){const o=r.$implicit,n=r.index,t=e.Gew(5);e.yG2(),e.E7m("button",!0)("ngClass",n%2==0?"even-item":"odd-item"),e.yG2(2),e.E7m("ngIf",o.imageURL)("ngIfElse",t),e.yG2(3),e.CI5("id","sharedNameOrganization",n,""),e.yG2(),e.cNF(o.name),e.yG2(2),e.cNF(o.hometown)}}function Z(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-content",30)(1,"h3",75),e.OEk(2,"Shared Organizations"),e.C$Y(),e.I0R(3,"ion-list",12),e.yuY(4,X,12,7,"ion-item-sliding",13),e.C$Y(),e.I0R(5,"ion-button",65),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.cancelAlertOrga())}),e.OEk(6,"Close"),e.C$Y()()}if(2&a){const o=e.GaO();e.yG2(3),e.E7m("inset",!0),e.yG2(),e.E7m("ngForOf",o.sharedOrganizations)}}const V=[{path:"",component:(()=>{var a;class r{constructor(n,t,i,l){this.databaseService=n,this.loadingController=t,this.alertController=i,this.formBuilder=l,this.searchItem="",this.selectedHometown="",this.chosenUsers=null,this.profile=null,this.orgas=null,this.sharedOrganizations=null,this.users=null,this.filter=!0,this.editMode=!1,this.isPopoverOpen=!1,this.tempOrganizationLink="",this.tempOrganizationInfo="",this.noteType="organizations",this.currentGame=localStorage.getItem("currentGame"),this.databaseService.getNotes(this.searchItem,this.selectedHometown,this.currentGame,this.noteType).subscribe(c=>{this.orgas=c,this.hometowns=this.uniqueHometowns}),this.databaseService.getEmails(this.currentGame).subscribe(c=>{this.users=c}),this.databaseService.getShared(this.currentGame,this.noteType).subscribe(c=>{this.sharedOrganizations=c,this.sharedOrgaCount=c.length})}ngOnInit(){this.createOrgaForm=new O(this.formBuilder).createForm(),this.onWillDismiss(null)}toggleEditModeOrga(){this.editMode=!this.editMode}get uniqueHometowns(){if(!this.orgas)return[];const n=new Set;return this.orgas.forEach(t=>n.add(t.hometown)),Array.from(n)}search(n){console.log(this.selectedHometown),this.databaseService.getNotes(n,this.selectedHometown,this.currentGame,this.noteType).subscribe(t=>{this.orgas=t}),this.selectedHometown="",this.cancelSearchOrga(),setTimeout(()=>{this.filter=!this.filter},300)}changeImage(n){var t=this;return(0,m.c)(function*(){const i=yield u.Ut.getPhoto({quality:90,allowEditing:!1,resultType:u.on.Base64,source:u._8.Photos});if(i){const l=yield t.loadingController.create();yield l.present();const c=yield t.databaseService.uploadImage(i,n.name,t.currentGame,t.noteType);l.dismiss(),c||(yield(yield t.alertController.create({header:"Upload failed",message:"There was a problem uploading your avatar.",buttons:["OK"]})).present())}})()}chooseImage(){var n=this;return(0,m.c)(function*(){n.photo=yield u.Ut.getPhoto({quality:90,allowEditing:!1,resultType:u.on.Base64,source:u._8.Photos})})()}saveOrgaData(){var n=this;return(0,m.c)(function*(){const t=yield n.loadingController.create();yield t.present();const i=yield n.databaseService.updateNote(n.orgaHome,n.orgaLink,n.orgaInfo,n.orgaName,n.currentGame,n.noteType);t.dismiss(),i||(yield(yield n.alertController.create({header:"Upload failed",message:"There was a problem uploading your data.",buttons:["OK"]})).present()),n.toggleEditModeOrga()})()}createOrganization(){var n=this;return(0,m.c)(function*(){const t=yield n.loadingController.create();yield t.present();const i=yield n.databaseService.uploadNote(n.createOrgaForm.value.name,n.createOrgaForm.value.hometown,null==n?void 0:n.photo,n.currentGame,n.noteType);n.photo=null,n.createOrgaForm.reset(),t.dismiss(),i||(yield(yield n.alertController.create({header:"Upload failed",message:"There was a problem uploading your organization.",buttons:["OK"]})).present()),n.cancelCreationOrga()})()}delete(){var n=this;return(0,m.c)(function*(){yield(yield n.alertController.create({header:"Are you sure?",message:"Data will be deleted",buttons:[{text:"Delete",handler:()=>{n.databaseService.deleteDocument(n.orga.name,n.currentGame,n.noteType),n.cancelItemOrga()}},{text:"Cancel",role:"cancel",handler:()=>{}}]})).present()})()}deleteShared(n){var t=this;return(0,m.c)(function*(){yield(yield t.alertController.create({header:"Are you sure?",message:"Data will be deleted",buttons:[{text:"Delete",handler:()=>{var l;const d=null===(l=document.getElementById("sharedNameOrganization"+n))||void 0===l?void 0:l.textContent;t.databaseService.deleteSharedDocument(d,t.currentGame,t.noteType),t.cancelItemOrga()}},{text:"Cancel",role:"cancel",handler:()=>{}}]})).present()})()}setIndexOrga(n){var t=this;return(0,m.c)(function*(){t.orgaName=n.name,t.orgaHome=n.hometown,t.orgaImg=n.imageURL,t.orgaInfo=n.noteInfo,t.orgaLink=n.noteLink,t.orga=n,t.isItemModalOpenOrga=!0})()}setSharedIndex(n){var t=this;return(0,m.c)(function*(){var i;const c=null===(i=document.getElementById("sharedNameOrganization"+n))||void 0===i?void 0:i.textContent,d=yield t.databaseService.getSharedNoteData(c,t.currentGame,t.noteType);t.orgaName=d.name,t.orgaHome=d.hometown,t.orgaImg=d.imageURL,t.orgaInfo=d.noteInfo,t.orgaLink=d.noteLink})()}shareOrganization(){var n=this;return(0,m.c)(function*(){const t=yield n.loadingController.create();try{yield t.present(),n.chosenUsers.forEach(function(){var i=(0,m.c)(function*(l){l&&console.log(l),yield yield n.databaseService.shareNote(l,n.orgaName,n.orgaHome,n.orgaImg,n.orgaLink,n.orgaInfo,n.currentGame,n.noteType)});return function(l){return i.apply(this,arguments)}}())}catch{yield(yield n.alertController.create({header:"Upload failed",message:"There was a problem uploading your data.",buttons:["OK"]})).present()}t.dismiss()})()}addToDatabase(n){var t=this;return(0,m.c)(function*(){var i;yield t.setSharedIndex(n);const l=yield t.databaseService.uploadSharedNote(t.orgaName,t.orgaHome,t.orgaImg,t.orgaLink,t.orgaInfo,t.currentGame,t.noteType);var c="sharedNameOrganization"+n;const d=yield null===(i=document.getElementById(c))||void 0===i?void 0:i.textContent;l&&(yield t.databaseService.deleteSharedDocument(d,t.currentGame,t.noteType))})()}cancelCreationOrga(){this.isCreationModalOpenOrga=!1,this.creationModalOrga.dismiss(null,"cancel")}cancelAlertOrga(){this.isAlertModalOpenOrganization=!1,this.alertModalOrga.dismiss(null,"cancel")}cancelSearchOrga(){this.isSearchModalOpenOrga=!1,this.searchModalOrga.dismiss(null,"cancel")}cancelItemOrga(){this.isItemModalOpenOrga=!1,this.itemModalOrga.dismiss(null,"cancel"),this.editMode&&this.toggleEditModeOrga()}openAlert(){this.isAlertModalOpenOrganization=!0}openCreation(){this.isCreationModalOpenOrga=!0}openSearch(){this.isSearchModalOpenOrga=!0}onWillDismiss(n){this.isSearchModalOpenOrga=!1,this.isCreationModalOpenOrga=!1,this.isItemModalOpenOrga=!1,this.isAlertModalOpenOrganization=!1}}return(a=r).\u0275fac=function(n){return new(n||a)(e.GI1(b.C),e.GI1(s.Kg),e.GI1(s.iW),e.GI1(g.im))},a.\u0275cmp=e.In1({type:a,selectors:[["app-tab2"]],viewQuery:function(n,t){if(1&n&&(e.CC$(T,5),e.CC$(y,5),e.CC$(I,5),e.CC$(G,5)),2&n){let i;e.wto(i=e.Gqi())&&(t.creationModalOrga=i.first),e.wto(i=e.Gqi())&&(t.searchModalOrga=i.first),e.wto(i=e.Gqi())&&(t.itemModalOrga=i.first),e.wto(i=e.Gqi())&&(t.alertModalOrga=i.first)}},decls:31,vars:11,consts:[[3,"translucent"],["slot","start"],["slot","end","color","danger",1,"badge-position"],["slot","end","name","notifications-outline",2,"height","35px","width","35px",3,"click"],[3,"fullscreen"],["slot","fixed","vertical","bottom","horizontal","end"],["color","secondary",3,"click"],["name","add-outline"],["slot","fixed","vertical","bottom","horizontal","start",3,"hidden"],["name","search-outline"],["color","danger",3,"click"],["name","remove"],[3,"inset"],[4,"ngFor","ngForOf"],[3,"isOpen","willDismiss"],["creationModalOrga",""],["searchModalOrga",""],["itemModalOrga",""],["alertModalOrga",""],[3,"button","ngClass"],["aria-hidden","true","slot","start",3,"click"],[3,"src",4,"ngIf","ngIfElse"],["placeholder_avatar",""],["name","chevron-forward-outline",3,"click"],[3,"ngClass",4,"ngIf"],[3,"src"],[1,"placeholder"],["src","https://ionicframework.com/docs/img/demos/avatar.svg"],[3,"ngClass"],[1,"crop"],[1,"ion-padding"],[1,"flex-center"],[3,"formGroup"],[3,"click"],[4,"ngIf","ngIfElse"],["formControlName","name","label","Name","labelPlacement","floating","placeholder","Enter name","type","text"],["color","danger",4,"ngIf"],["formControlName","hometown","label","Hometown","labelPlacement","floating","placeholder","Enter hometown","type","text"],["color","dark","form","round",3,"disabled","click"],["color","danger","fill","outline",3,"click"],["color","danger"],["show-clear-button","focus","value",""],["searchBar",""],["position","floating","aria-label","Choose an origin"],["name","selectedHometown",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["color","dark","form","round",3,"click"],[3,"value"],["slot","fixed","vertical","bottom","horizontal","end",3,"hidden"],["name","create-outline"],["color","success",3,"click"],["name","save-outline"],["slot","fixed","vertical","top","horizontal","end",3,"hidden"],["id","open-popover-orga","color","secondary"],["name","share-social-outline"],["trigger","open-popover-orga",3,"isOpen"],[3,"id"],["aria-hidden","true",1,"align-center"],["slot","start",4,"ngIf"],["slot","end","style","text-decoration: none; pointer-events: none;","href","",4,"ngIf"],["placeholder","Type organization hometown","type","text",3,"ngModel","ngModelChange",4,"ngIf"],[4,"ngIf"],["placeholder","Type organization link","type","text",3,"ngModel","ngModelChange",4,"ngIf"],["style","resize: none; width: 100%; height: 100%;","rows","7","cols","55","readonly","",4,"ngIf"],["placeholder","Type organization info","rows","40","cols","55",3,"ngModel","ngModelChange",4,"ngIf"],["color","danger","form","round",3,"click"],["label","Choose a user","name","chosenUser",3,"multiple","ngModel","ngModelChange"],["color","dark","fill","outline",3,"click"],["slot","end","href","",2,"text-decoration","none","pointer-events","none"],["placeholder","Type organization hometown","type","text",3,"ngModel","ngModelChange"],["slot","end","style","text-decoration: none;",3,"href",4,"ngIf"],["slot","end",2,"text-decoration","none",3,"href"],["placeholder","Type organization link","type","text",3,"ngModel","ngModelChange"],["rows","7","cols","55","readonly","",2,"resize","none","width","100%","height","100%"],["placeholder","Type organization info","rows","40","cols","55",3,"ngModel","ngModelChange"],[2,"display","flex","justify-content","center"],["aria-hidden","true","slot","start"],["slot","end","name","add-circle-outline",3,"click"],["slot","end","name","trash-outline",3,"click"]],template:function(n,t){1&n&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),e.OEk(3," Organization Notes "),e.C$Y(),e.I0R(4,"ion-badge",2),e.OEk(5),e.C$Y(),e.I0R(6,"ion-icon",3),e.qCj("click",function(){return t.openAlert()}),e.C$Y()()(),e.I0R(7,"ion-content",4)(8,"ion-fab",5)(9,"ion-fab-button",6),e.qCj("click",function(){return t.openCreation()}),e.wR5(10,"ion-icon",7),e.C$Y()(),e.I0R(11,"ion-fab",8)(12,"ion-fab-button",6),e.qCj("click",function(){return t.openSearch()}),e.wR5(13,"ion-icon",9),e.C$Y()(),e.I0R(14,"ion-fab",8)(15,"ion-fab-button",10),e.qCj("click",function(){return t.search("")}),e.wR5(16,"ion-icon",11),e.C$Y()(),e.I0R(17,"ion-list",12),e.yuY(18,R,12,7,"ion-item-sliding",13),e.C$Y(),e.I0R(19,"ion-modal",14,15),e.qCj("willDismiss",function(l){return t.onWillDismiss(l)}),e.yuY(21,P,21,5,"ng-template"),e.C$Y(),e.I0R(22,"ion-modal",14,16),e.qCj("willDismiss",function(l){return t.onWillDismiss(l)}),e.yuY(24,$,20,2,"ng-template"),e.C$Y(),e.I0R(25,"ion-modal",14,17),e.qCj("willDismiss",function(l){return t.onWillDismiss(l)}),e.yuY(27,L,43,16,"ng-template"),e.C$Y(),e.I0R(28,"ion-modal",14,18),e.qCj("willDismiss",function(l){return t.onWillDismiss(l)}),e.yuY(30,Z,7,2,"ng-template"),e.C$Y()()),2&n&&(e.E7m("translucent",!0),e.yG2(5),e.cNF(t.sharedOrgaCount),e.yG2(2),e.E7m("fullscreen",!0),e.yG2(4),e.E7m("hidden",!t.filter),e.yG2(3),e.E7m("hidden",t.filter),e.yG2(3),e.E7m("inset",!0),e.yG2(),e.E7m("ngForOf",t.orgas),e.yG2(),e.E7m("isOpen",t.isCreationModalOpenOrga),e.yG2(3),e.E7m("isOpen",t.isSearchModalOpenOrga),e.yG2(3),e.E7m("isOpen",t.isItemModalOpenOrga),e.yG2(3),e.E7m("isOpen",t.isAlertModalOpenOrganization))},dependencies:[s.O7,s.Gi,s.sn,s.KC,s.Gg,s.YY,s.I7,s._i,s.q8,s.Wq,s.wB,s.Ko,s.A5,s.Yb,s.UB,s.QR,s.OC,s.KQ,s.Cy,s.gd,s.tM,s.Md,s.yc,s.sW,s.IT,s.qG,p.QF,p.ay,p.u_,g.sz,g.ot,g.ue,g.u,g._G,g.SC,g.uW,g.Wo]}),r})()}];let ee=(()=>{var a;class r{}return(a=r).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[f.qQ.forChild(V),f.qQ]}),r})(),te=(()=>{var a;class r{}return(a=r).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[s.wZ,p.MD,g.y,C.C,ee,g.sl]}),r})()}}]);