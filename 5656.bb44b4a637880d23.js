"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5656],{5656:(oe,h,d)=>{d.r(h),d.d(h,{Tab2PageModule:()=>ae});var s=d(2112),p=d(1368),g=d(4716),C=d(4692),f=d(8244),c=d(1528),u=d(1740);class O{constructor(r){this.formBuilder=r}createForm(){return this.formBuilder.group({name:["",[g.AQ.required]],hometown:[""]})}}var e=d(4496),b=d(7231);const T=["creationModalOrga"],y=["searchModalOrga"],I=["itemModalOrga"],G=["alertModalOrga"];function k(a,r){if(1&a&&(e.I0R(0,"ion-select-option",23),e.OEk(1),e.C$Y()),2&a){const o=r.$implicit;e.E7m("value",o.email),e.yG2(),e.cNF(o.email)}}function E(a,r){if(1&a){const o=e.KQA();e.I0R(0,"h3"),e.OEk(1,"Share all organizations"),e.C$Y(),e.I0R(2,"ion-select",20),e.iHE("ngModelChange",function(n){e.usT(o);const i=e.GaO();return e.kNx(i.chosenUsers,n)||(i.chosenUsers=n),e.CGJ(n)}),e.yuY(3,k,2,2,"ion-select-option",21),e.C$Y(),e.I0R(4,"ion-button",22),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.shareAllOrganizations())}),e.OEk(5,"Share all"),e.C$Y()}if(2&a){const o=e.GaO();e.yG2(2),e.E7m("multiple",!0),e.OKB("ngModel",o.chosenUsers),e.yG2(),e.E7m("ngForOf",o.users)}}function x(a,r){if(1&a&&e.wR5(0,"img",32),2&a){const o=e.GaO().$implicit;e._6D("alt",o.name),e.E7m("src",o.imageURL,e.K6U)}}function R(a,r){1&a&&(e.I0R(0,"div",33),e.wR5(1,"img",34),e.C$Y())}function Y(a,r){if(1&a&&(e.I0R(0,"p",35),e.OEk(1),e.C$Y()),2&a){const o=e.GaO().$implicit;e.yG2(),e.cNF(o.noteInfo)}}function v(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-col",24)(1,"ion-card",25)(2,"ion-card-header")(3,"div",26),e.qCj("click",function(){const i=e.usT(o).$implicit,l=e.GaO();return e.CGJ(l.changeImage(i))}),e.yuY(4,x,1,2,"img",27)(5,R,2,0,"ng-template",null,28,e.gJz),e.C$Y(),e.I0R(7,"ion-card-title"),e.OEk(8),e.C$Y(),e.I0R(9,"ion-card-subtitle"),e.OEk(10),e.C$Y()(),e.I0R(11,"ion-card-content"),e.yuY(12,Y,2,1,"p",29),e.C$Y(),e.I0R(13,"ion-row")(14,"ion-col")(15,"ion-button",30),e.qCj("click",function(){const i=e.usT(o).$implicit,l=e.GaO();return e.CGJ(l.setIndexOrga(i))}),e.OEk(16," Details "),e.wR5(17,"ion-icon",31),e.C$Y()()()()()}if(2&a){const o=r.$implicit,t=r.index,n=e.Gew(6);e.yG2(),e.E7m("ngClass",t%2==0?"even-item":"odd-item"),e.yG2(3),e.E7m("ngIf",o.imageURL)("ngIfElse",n),e.yG2(4),e.cNF(o.name),e.yG2(2),e.cNF(o.hometown),e.yG2(2),e.E7m("ngIf",o.noteInfo)}}function M(a,r){1&a&&(e.I0R(0,"p"),e.OEk(1,"Picture has been selected"),e.C$Y())}function P(a,r){1&a&&(e.I0R(0,"div",33)(1,"p"),e.OEk(2,"Choose a picture"),e.C$Y()())}function w(a,r){1&a&&(e.I0R(0,"ion-label",46),e.OEk(1,"Name is mandatory"),e.C$Y())}function $(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-content",36)(1,"div",37)(2,"form",38)(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e.OEk(6,"Create Organization Note"),e.C$Y()(),e.I0R(7,"ion-card-content")(8,"ion-item",39),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.chooseImage())}),e.yuY(9,M,2,0,"p",40)(10,P,3,0,"ng-template",null,28,e.gJz),e.C$Y(),e.I0R(12,"ion-item"),e.wR5(13,"ion-input",41),e.C$Y(),e.yuY(14,w,2,0,"ion-label",42),e.I0R(15,"ion-item"),e.wR5(16,"ion-input",43),e.C$Y(),e.I0R(17,"ion-button",44),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.createOrganization())}),e.OEk(18,"Create Organization"),e.C$Y(),e.I0R(19,"ion-button",45),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.cancelCreationOrga())}),e.OEk(20,"Cancel"),e.C$Y()()()()()()}if(2&a){const o=e.Gew(11),t=e.GaO();let n;e.yG2(2),e.E7m("formGroup",t.createOrgaForm),e.yG2(7),e.E7m("ngIf",t.photo)("ngIfElse",o),e.yG2(5),e.E7m("ngIf",(null==(n=t.createOrgaForm.get("name"))?null:n.touched)&&(null==(n=t.createOrgaForm.get("name"))||null==n.errors?null:n.errors.required)),e.yG2(3),e.E7m("disabled",!t.createOrgaForm.valid)}}function S(a,r){if(1&a&&(e.I0R(0,"ion-select-option",23),e.OEk(1),e.C$Y()),2&a){const o=r.$implicit;e.E7m("value",o),e.yG2(),e.cNF(o)}}function z(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-content",36)(1,"div",37)(2,"form")(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e.OEk(6,"Search for Organization"),e.C$Y()(),e.I0R(7,"ion-card-content")(8,"ion-item"),e.wR5(9,"ion-searchbar",47,48),e.C$Y(),e.I0R(11,"ion-item")(12,"ion-label",49),e.OEk(13,"Choose an origin"),e.C$Y(),e.I0R(14,"ion-select",50),e.iHE("ngModelChange",function(n){e.usT(o);const i=e.GaO();return e.kNx(i.selectedHometown,n)||(i.selectedHometown=n),e.CGJ(n)}),e.yuY(15,S,2,2,"ion-select-option",21),e.C$Y()(),e.I0R(16,"ion-button",51),e.qCj("click",function(){e.usT(o);const n=e.Gew(10),i=e.GaO();return e.CGJ(i.search(n.value))}),e.OEk(17,"Search"),e.C$Y(),e.I0R(18,"ion-button",45),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.cancelSearchOrga())}),e.OEk(19,"Cancel"),e.C$Y()()()()()()}if(2&a){const o=e.GaO();e.yG2(14),e.OKB("ngModel",o.selectedHometown),e.yG2(),e.E7m("ngForOf",o.hometowns)}}function N(a,r){if(1&a&&(e.I0R(0,"ion-select-option",23),e.OEk(1),e.C$Y()),2&a){const o=r.$implicit;e.E7m("value",o.email),e.yG2(),e.cNF(o.email)}}function D(a,r){if(1&a){const o=e.KQA();e.I0R(0,"h3"),e.OEk(1,"Share an organization"),e.C$Y(),e.I0R(2,"ion-select",69),e.iHE("ngModelChange",function(n){e.usT(o);const i=e.GaO(2);return e.kNx(i.chosenUsers,n)||(i.chosenUsers=n),e.CGJ(n)}),e.yuY(3,N,2,2,"ion-select-option",21),e.C$Y(),e.I0R(4,"ion-button",22),e.qCj("click",function(){e.usT(o);const n=e.GaO(2);return e.CGJ(n.shareOrganization())}),e.OEk(5,"Share"),e.C$Y()}if(2&a){const o=e.GaO(2);e.yG2(2),e.E7m("multiple",!0),e.OKB("ngModel",o.chosenUsers),e.yG2(),e.E7m("ngForOf",o.users)}}function A(a,r){if(1&a&&e.wR5(0,"img",32),2&a){const o=e.GaO(2);e._6D("alt",o.orga.name),e.E7m("src",o.orga.imageURL,e.K6U)}}function F(a,r){1&a&&(e.I0R(0,"div",33),e.wR5(1,"img",34),e.C$Y())}function q(a,r){1&a&&(e.I0R(0,"ion-label",1),e.OEk(1,"Hometown: "),e.C$Y())}function j(a,r){if(1&a&&(e.I0R(0,"a",70),e.OEk(1),e.C$Y()),2&a){const o=e.GaO(2);e.yG2(),e.cNF(o.orgaHome)}}function K(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-input",71),e.iHE("ngModelChange",function(n){e.usT(o);const i=e.GaO(2);return e.kNx(i.orgaHome,n)||(i.orgaHome=n),e.CGJ(n)}),e.C$Y()}if(2&a){const o=e.GaO(2);e.OKB("ngModel",o.orgaHome)}}function U(a,r){1&a&&(e.I0R(0,"ion-label",1),e.OEk(1,"Link:"),e.C$Y())}function H(a,r){if(1&a&&(e.I0R(0,"a",73),e.OEk(1),e.C$Y()),2&a){const o=e.GaO(3);e._6D("href",o.orgaLink,e.K6U),e.yG2(),e.cNF(o.orgaName)}}function J(a,r){if(1&a&&(e.SAx(0),e.yuY(1,H,2,2,"a",72),e.k70()),2&a){const o=e.GaO(2);e.yG2(),e.E7m("ngIf",!o.editMode)}}function L(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-input",74),e.iHE("ngModelChange",function(n){e.usT(o);const i=e.GaO(2);return e.kNx(i.orgaLink,n)||(i.orgaLink=n),e.CGJ(n)}),e.C$Y()}if(2&a){const o=e.GaO(2);e.OKB("ngModel",o.orgaLink)}}function B(a,r){if(1&a&&(e.I0R(0,"textarea",75),e.OEk(1),e.C$Y()),2&a){const o=e.GaO(2);e.yG2(),e.cNF(o.orgaInfo)}}function Q(a,r){if(1&a){const o=e.KQA();e.I0R(0,"textarea",76),e.iHE("ngModelChange",function(n){e.usT(o);const i=e.GaO(2);return e.kNx(i.orgaInfo,n)||(i.orgaInfo=n),e.CGJ(n)}),e.OEk(1),e.C$Y()}if(2&a){const o=e.GaO(2);e.OKB("ngModel",o.orgaInfo),e.yG2(),e.cNF(o.orgaInfo)}}function W(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-content",36)(1,"ion-fab",52)(2,"ion-fab-button",8),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.toggleEditModeOrga())}),e.wR5(3,"ion-icon",53),e.C$Y()(),e.I0R(4,"ion-fab",52)(5,"ion-fab-button",54),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.saveOrgaData())}),e.wR5(6,"ion-icon",55),e.C$Y()(),e.I0R(7,"ion-fab",56)(8,"ion-fab-button",57),e.wR5(9,"ion-icon",58),e.C$Y()(),e.I0R(10,"ion-popover",59),e.yuY(11,D,6,3,"ng-template"),e.C$Y(),e.I0R(12,"ion-card")(13,"ion-card-header")(14,"ion-card-title",60),e.OEk(15),e.C$Y()(),e.I0R(16,"ion-card-content")(17,"ion-item")(18,"div",26),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.changeImage(n.orga))}),e.yuY(19,A,1,2,"img",27)(20,F,2,0,"ng-template",null,28,e.gJz),e.C$Y()()(),e.I0R(22,"ion-card-content")(23,"ion-item"),e.yuY(24,q,2,0,"ion-label",61)(25,j,2,1,"a",62)(26,K,1,1,"ion-input",63),e.C$Y(),e.I0R(27,"ion-item"),e.yuY(28,U,2,0,"ion-label",61)(29,J,2,1,"ng-container",64)(30,L,1,1,"ion-input",65),e.C$Y()()(),e.I0R(31,"ion-card")(32,"ion-card-header")(33,"ion-card-title"),e.OEk(34,"Additional Infos"),e.C$Y()(),e.I0R(35,"ion-card-content")(36,"ion-item"),e.yuY(37,B,2,1,"textarea",66)(38,Q,2,2,"textarea",67),e.C$Y()()(),e.I0R(39,"ion-button",45),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.cancelItemOrga())}),e.OEk(40,"Close"),e.C$Y(),e.I0R(41,"ion-button",68),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.delete())}),e.OEk(42,"Delete"),e.C$Y()()}if(2&a){const o=e.Gew(21),t=e.GaO();e.yG2(),e.E7m("hidden",t.editMode),e.yG2(3),e.E7m("hidden",!t.editMode),e.yG2(3),e.E7m("hidden",t.editMode),e.yG2(3),e.E7m("isOpen",t.isPopoverOpen),e.yG2(4),e.CI5("id","nameOrga",t.currentItemIndexOrga,""),e.yG2(),e.cNF(t.orgaName),e.yG2(4),e.E7m("ngIf",t.orga.imageURL)("ngIfElse",o),e.yG2(5),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",t.editMode),e.yG2(2),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",t.orgaLink),e.yG2(),e.E7m("ngIf",t.editMode),e.yG2(7),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",t.editMode)}}function X(a,r){if(1&a&&e.wR5(0,"img",87),2&a){const o=e.GaO().$implicit;e.E7m("src",o.imageURL,e.K6U)}}function Z(a,r){1&a&&(e.I0R(0,"div",33),e.wR5(1,"img",88),e.C$Y())}function V(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-item-sliding")(1,"ion-item",82)(2,"ion-avatar",83),e.yuY(3,X,1,1,"img",84)(4,Z,2,0,"ng-template",null,28,e.gJz),e.C$Y(),e.I0R(6,"ion-label",60),e.OEk(7),e.C$Y(),e.I0R(8,"ion-label"),e.OEk(9),e.C$Y(),e.I0R(10,"ion-icon",85),e.qCj("click",function(){const i=e.usT(o).index,l=e.GaO(2);return e.CGJ(l.addToDatabase(i))}),e.C$Y(),e.I0R(11,"ion-icon",86),e.qCj("click",function(){const i=e.usT(o).index,l=e.GaO(2);return e.CGJ(l.deleteShared(i))}),e.C$Y()()()}if(2&a){const o=r.$implicit,t=r.index,n=e.Gew(5);e.yG2(),e.E7m("button",!0)("ngClass",t%2==0?"even-item":"odd-item"),e.yG2(2),e.E7m("ngIf",o.imageURL)("ngIfElse",n),e.yG2(3),e.CI5("id","sharedNameOrganization",t,""),e.yG2(),e.cNF(o.name),e.yG2(2),e.cNF(o.hometown)}}function ee(a,r){if(1&a){const o=e.KQA();e.I0R(0,"ion-content",36)(1,"h3",77),e.OEk(2,"Shared Organizations"),e.C$Y(),e.I0R(3,"ion-button",78),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.addAllToDatabase())}),e.OEk(4,"Accept all"),e.C$Y(),e.I0R(5,"ion-button",68),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.dismissAllShared())}),e.OEk(6,"Dismiss all"),e.C$Y(),e.I0R(7,"ion-button",79),e.qCj("click",function(){e.usT(o);const n=e.GaO();return e.CGJ(n.cancelAlertOrga())}),e.OEk(8,"Close"),e.C$Y(),e.I0R(9,"ion-list",80),e.yuY(10,V,12,7,"ion-item-sliding",81),e.C$Y()()}if(2&a){const o=e.GaO();e.yG2(9),e.E7m("inset",!0),e.yG2(),e.E7m("ngForOf",o.sharedOrganizations)}}const te=[{path:"",component:(()=>{var a;class r{constructor(t,n,i,l){this.databaseService=t,this.loadingController=n,this.alertController=i,this.formBuilder=l,this.searchItem="",this.selectedHometown="",this.chosenUsers=null,this.profile=null,this.orgas=null,this.sharedOrganizations=null,this.users=null,this.filter=!0,this.editMode=!1,this.isPopoverOpen=!1,this.tempOrganizationLink="",this.tempOrganizationInfo="",this.noteType="organizations",this.currentGame=localStorage.getItem("currentGame"),this.databaseService.getNotes(this.searchItem,this.selectedHometown,this.currentGame,this.noteType).subscribe(_=>{this.orgas=_,this.hometowns=this.uniqueHometowns}),this.databaseService.getEmails(this.currentGame).subscribe(_=>{this.users=_}),this.databaseService.getShared(this.currentGame,this.noteType).subscribe(_=>{this.sharedOrganizations=_,this.sharedOrgaCount=_.length})}ngOnInit(){this.createOrgaForm=new O(this.formBuilder).createForm(),this.onWillDismiss(null)}toggleEditModeOrga(){this.editMode=!this.editMode}get uniqueHometowns(){if(!this.orgas)return[];const t=new Set;return this.orgas.forEach(n=>t.add(n.hometown)),Array.from(t)}search(t){console.log(this.selectedHometown),this.databaseService.getNotes(t,this.selectedHometown,this.currentGame,this.noteType).subscribe(n=>{this.orgas=n}),this.selectedHometown="",this.cancelSearchOrga(),setTimeout(()=>{this.filter=!this.filter},300)}changeImage(t){var n=this;return(0,c.c)(function*(){const i=yield u.Ut.getPhoto({quality:90,allowEditing:!1,resultType:u.on.Base64,source:u._8.Photos});if(i){const l=yield n.loadingController.create();yield l.present();const _=yield n.databaseService.uploadImage(i,t.name,n.currentGame,n.noteType);l.dismiss(),_||(yield(yield n.alertController.create({header:"Upload failed",message:"There was a problem uploading your avatar.",buttons:["OK"]})).present())}})()}chooseImage(){var t=this;return(0,c.c)(function*(){t.photo=yield u.Ut.getPhoto({quality:90,allowEditing:!1,resultType:u.on.Base64,source:u._8.Photos})})()}saveOrgaData(){var t=this;return(0,c.c)(function*(){const n=yield t.loadingController.create();yield n.present();const i=yield t.databaseService.updateNote(t.orgaHome,t.orgaLink,t.orgaInfo,t.orgaName,t.currentGame,t.noteType);n.dismiss(),i||(yield(yield t.alertController.create({header:"Upload failed",message:"There was a problem uploading your data.",buttons:["OK"]})).present()),t.toggleEditModeOrga()})()}createOrganization(){var t=this;return(0,c.c)(function*(){const n=yield t.loadingController.create();yield n.present();const i=yield t.databaseService.uploadNote(t.createOrgaForm.value.name,t.createOrgaForm.value.hometown,null==t?void 0:t.photo,t.currentGame,t.noteType);t.photo=null,t.createOrgaForm.reset(),n.dismiss(),i||(yield(yield t.alertController.create({header:"Upload failed",message:"There was a problem uploading your organization.",buttons:["OK"]})).present()),t.cancelCreationOrga()})()}delete(){var t=this;return(0,c.c)(function*(){yield(yield t.alertController.create({header:"Are you sure?",message:"Data will be deleted",buttons:[{text:"Delete",handler:()=>{t.databaseService.deleteDocument(t.orga.name,t.currentGame,t.noteType),t.cancelItemOrga()}},{text:"Cancel",role:"cancel",handler:()=>{}}]})).present()})()}deleteShared(t){var n=this;return(0,c.c)(function*(){yield(yield n.alertController.create({header:"Are you sure?",message:"Data will be deleted",buttons:[{text:"Delete",handler:()=>{var l;const m=null===(l=document.getElementById("sharedNameOrganization"+t))||void 0===l?void 0:l.textContent;n.databaseService.deleteSharedDocument(m,n.currentGame,n.noteType),n.cancelItemOrga()}},{text:"Cancel",role:"cancel",handler:()=>{}}]})).present()})()}setIndexOrga(t){var n=this;return(0,c.c)(function*(){n.orgaName=t.name,n.orgaHome=t.hometown,n.orgaImg=t.imageURL,n.orgaInfo=t.noteInfo,n.orgaLink=t.noteLink,n.orga=t,n.isItemModalOpenOrga=!0})()}setSharedIndex(t){var n=this;return(0,c.c)(function*(){var i;const _=null===(i=document.getElementById("sharedNameOrganization"+t))||void 0===i?void 0:i.textContent,m=yield n.databaseService.getSharedNoteData(_,n.currentGame,n.noteType);n.orgaName=m.name,n.orgaHome=m.hometown,n.orgaImg=m.imageURL,n.orgaInfo=m.noteInfo,n.orgaLink=m.noteLink})()}addAllToDatabase(){var t=this;return(0,c.c)(function*(){(yield t.databaseService.uploadAllSharedNotes(t.sharedOrganizations,t.currentGame,t.noteType))&&(yield t.databaseService.deleteAllSharedDocuments(t.currentGame,t.noteType))})()}dismissAllShared(){var t=this;return(0,c.c)(function*(){t.sharedOrgaCount>0&&(yield(yield t.alertController.create({header:"Are you sure?",message:"Data will be deleted",buttons:[{text:"Delete",handler:()=>{t.databaseService.deleteAllSharedDocuments(t.currentGame,t.noteType),t.cancelItemOrga()}},{text:"Cancel",role:"cancel",handler:()=>{}}]})).present())})()}shareAllOrganizations(){var t=this;return(0,c.c)(function*(){const n=yield t.loadingController.create();yield n.present();try{t.chosenUsers.forEach(function(){var i=(0,c.c)(function*(l){l&&(yield t.databaseService.shareAllNotes(l,t.orgas,t.currentGame,t.noteType))});return function(l){return i.apply(this,arguments)}}())}catch{yield(yield t.alertController.create({header:"Couldn't share",message:"There was a problem sharing your data.",buttons:["OK"]})).present()}n.dismiss()})()}shareOrganization(){var t=this;return(0,c.c)(function*(){const n=yield t.loadingController.create();try{yield n.present(),t.chosenUsers.forEach(function(){var i=(0,c.c)(function*(l){l&&console.log(l),yield yield t.databaseService.shareNote(l,t.orgaName,t.orgaHome,t.orgaImg,t.orgaLink,t.orgaInfo,t.currentGame,t.noteType)});return function(l){return i.apply(this,arguments)}}())}catch{yield(yield t.alertController.create({header:"Upload failed",message:"There was a problem uploading your data.",buttons:["OK"]})).present()}n.dismiss()})()}addToDatabase(t){var n=this;return(0,c.c)(function*(){var i;yield n.setSharedIndex(t);const l=yield n.databaseService.uploadSharedNote(n.orgaName,n.orgaHome,n.orgaImg,n.orgaLink,n.orgaInfo,n.currentGame,n.noteType);var _="sharedNameOrganization"+t;const m=yield null===(i=document.getElementById(_))||void 0===i?void 0:i.textContent;l&&(yield n.databaseService.deleteSharedDocument(m,n.currentGame,n.noteType))})()}cancelCreationOrga(){this.isCreationModalOpenOrga=!1,this.creationModalOrga.dismiss(null,"cancel")}cancelAlertOrga(){this.isAlertModalOpenOrganization=!1,this.alertModalOrga.dismiss(null,"cancel")}cancelSearchOrga(){this.isSearchModalOpenOrga=!1,this.searchModalOrga.dismiss(null,"cancel")}cancelItemOrga(){this.isItemModalOpenOrga=!1,this.itemModalOrga.dismiss(null,"cancel"),this.editMode&&this.toggleEditModeOrga()}openAlert(){this.isAlertModalOpenOrganization=!0}openCreation(){this.isCreationModalOpenOrga=!0}openSearch(){this.isSearchModalOpenOrga=!0}onWillDismiss(t){this.isSearchModalOpenOrga=!1,this.isCreationModalOpenOrga=!1,this.isItemModalOpenOrga=!1,this.isAlertModalOpenOrganization=!1}}return(a=r).\u0275fac=function(t){return new(t||a)(e.GI1(b.C),e.GI1(s.Kg),e.GI1(s.iW),e.GI1(g.im))},a.\u0275cmp=e.In1({type:a,selectors:[["app-tab2"]],viewQuery:function(t,n){if(1&t&&(e.CC$(T,5),e.CC$(y,5),e.CC$(I,5),e.CC$(G,5)),2&t){let i;e.wto(i=e.Gqi())&&(n.creationModalOrga=i.first),e.wto(i=e.Gqi())&&(n.searchModalOrga=i.first),e.wto(i=e.Gqi())&&(n.itemModalOrga=i.first),e.wto(i=e.Gqi())&&(n.alertModalOrga=i.first)}},decls:35,vars:11,consts:[[3,"translucent"],["slot","start"],["slot","end","color","danger",1,"badge-position"],["slot","end","id","open-shareAllorgas","name","share-social-outline",2,"height","35px","width","35px"],["slot","end","name","notifications-outline",2,"height","35px","width","35px",3,"click"],["trigger","open-shareAllorgas",3,"isOpen"],[3,"fullscreen"],["slot","fixed","vertical","bottom","horizontal","end"],["color","secondary",3,"click"],["name","add-outline"],["slot","fixed","vertical","bottom","horizontal","start",3,"hidden"],["name","search-outline"],["color","danger",3,"click"],["name","remove"],["size","12","size-md","6","size-lg","4",4,"ngFor","ngForOf"],[3,"isOpen","willDismiss"],["creationModalOrga",""],["searchModalOrga",""],["itemModalOrga",""],["alertModalOrga",""],["label","Choose a user","name","chosenUsers",3,"multiple","ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["color","dark","fill","outline",3,"click"],[3,"value"],["size","12","size-md","6","size-lg","4"],[3,"ngClass"],[1,"image-container",3,"click"],[3,"src","alt",4,"ngIf","ngIfElse"],["placeholder_avatar",""],["class","truncate-text",4,"ngIf"],["expand","block","color","primary",3,"click"],["slot","end","name","chevron-forward-outline"],[3,"src","alt"],[1,"placeholder"],["src","https://ionicframework.com/docs/img/demos/avatar.svg","alt","Placeholder"],[1,"truncate-text"],[1,"ion-padding"],[1,"flex-center"],[3,"formGroup"],[3,"click"],[4,"ngIf","ngIfElse"],["formControlName","name","label","Name","labelPlacement","floating","placeholder","Enter name","type","text"],["color","danger",4,"ngIf"],["formControlName","hometown","label","Hometown","labelPlacement","floating","placeholder","Enter hometown","type","text"],["color","dark","form","round",3,"disabled","click"],["color","danger","fill","outline",3,"click"],["color","danger"],["show-clear-button","focus","value",""],["searchBar",""],["position","floating","aria-label","Choose an origin"],["name","selectedHometown",3,"ngModel","ngModelChange"],["color","dark","form","round",3,"click"],["slot","fixed","vertical","bottom","horizontal","end",3,"hidden"],["name","create-outline"],["color","success",3,"click"],["name","save-outline"],["slot","fixed","vertical","top","horizontal","end",3,"hidden"],["id","open-popover-orga","color","secondary"],["name","share-social-outline"],["trigger","open-popover-orga",3,"isOpen"],[3,"id"],["slot","start",4,"ngIf"],["slot","end","style","text-decoration: none; pointer-events: none;","href","",4,"ngIf"],["placeholder","Type organization hometown","type","text",3,"ngModel","ngModelChange",4,"ngIf"],[4,"ngIf"],["placeholder","Type organization link","type","text",3,"ngModel","ngModelChange",4,"ngIf"],["style","resize: none; width: 100%; height: 100%;","rows","7","cols","55","readonly","",4,"ngIf"],["placeholder","Type organization info","rows","40","cols","55",3,"ngModel","ngModelChange",4,"ngIf"],["color","danger","form","round",3,"click"],["label","Choose a user","name","chosenUser",3,"multiple","ngModel","ngModelChange"],["slot","end","href","",2,"text-decoration","none","pointer-events","none"],["placeholder","Type organization hometown","type","text",3,"ngModel","ngModelChange"],["slot","end","style","text-decoration: none;",3,"href",4,"ngIf"],["slot","end",2,"text-decoration","none",3,"href"],["placeholder","Type organization link","type","text",3,"ngModel","ngModelChange"],["rows","7","cols","55","readonly","",2,"resize","none","width","100%","height","100%"],["placeholder","Type organization info","rows","40","cols","55",3,"ngModel","ngModelChange"],[2,"display","flex","justify-content","center"],["color","success","form","round",3,"click"],["color","secondary","form","round",3,"click"],[3,"inset"],[4,"ngFor","ngForOf"],[3,"button","ngClass"],["aria-hidden","true","slot","start"],[3,"src",4,"ngIf","ngIfElse"],["slot","end","name","add-circle-outline",3,"click"],["slot","end","name","trash-outline",3,"click"],[3,"src"],["src","https://ionicframework.com/docs/img/demos/avatar.svg"]],template:function(t,n){1&t&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),e.OEk(3," Organization Notes "),e.C$Y(),e.I0R(4,"ion-badge",2),e.OEk(5),e.C$Y(),e.wR5(6,"ion-icon",3),e.I0R(7,"ion-icon",4),e.qCj("click",function(){return n.openAlert()}),e.C$Y(),e.I0R(8,"ion-popover",5),e.yuY(9,E,6,3,"ng-template"),e.C$Y()()(),e.I0R(10,"ion-content",6)(11,"ion-fab",7)(12,"ion-fab-button",8),e.qCj("click",function(){return n.openCreation()}),e.wR5(13,"ion-icon",9),e.C$Y()(),e.I0R(14,"ion-fab",10)(15,"ion-fab-button",8),e.qCj("click",function(){return n.openSearch()}),e.wR5(16,"ion-icon",11),e.C$Y()(),e.I0R(17,"ion-fab",10)(18,"ion-fab-button",12),e.qCj("click",function(){return n.search("")}),e.wR5(19,"ion-icon",13),e.C$Y()(),e.I0R(20,"ion-grid")(21,"ion-row"),e.yuY(22,v,18,6,"ion-col",14),e.C$Y()(),e.I0R(23,"ion-modal",15,16),e.qCj("willDismiss",function(l){return n.onWillDismiss(l)}),e.yuY(25,$,21,5,"ng-template"),e.C$Y(),e.I0R(26,"ion-modal",15,17),e.qCj("willDismiss",function(l){return n.onWillDismiss(l)}),e.yuY(28,z,20,2,"ng-template"),e.C$Y(),e.I0R(29,"ion-modal",15,18),e.qCj("willDismiss",function(l){return n.onWillDismiss(l)}),e.yuY(31,W,43,16,"ng-template"),e.C$Y(),e.I0R(32,"ion-modal",15,19),e.qCj("willDismiss",function(l){return n.onWillDismiss(l)}),e.yuY(34,ee,11,2,"ng-template"),e.C$Y()()),2&t&&(e.E7m("translucent",!0),e.yG2(5),e.cNF(n.sharedOrgaCount),e.yG2(3),e.E7m("isOpen",n.isPopoverOpen),e.yG2(2),e.E7m("fullscreen",!0),e.yG2(4),e.E7m("hidden",!n.filter),e.yG2(3),e.E7m("hidden",n.filter),e.yG2(5),e.E7m("ngForOf",n.orgas),e.yG2(),e.E7m("isOpen",n.isCreationModalOpenOrga),e.yG2(3),e.E7m("isOpen",n.isSearchModalOpenOrga),e.yG2(3),e.E7m("isOpen",n.isItemModalOpenOrga),e.yG2(3),e.E7m("isOpen",n.isAlertModalOpenOrganization))},dependencies:[s.O7,s.Gi,s.sn,s.KC,s.Gg,s.YY,s.MN,s.I7,s.Kk,s._i,s.q8,s.Wq,s.YP,s.wB,s.Ko,s.A5,s.Yb,s.UB,s.QR,s.OC,s.qo,s.KQ,s.Cy,s.gd,s.tM,s.Md,s.yc,s.sW,s.IT,s.qG,p.QF,p.ay,p.u_,g.sz,g.ot,g.ue,g.u,g._G,g.SC,g.uW,g.Wo]}),r})()}];let ne=(()=>{var a;class r{}return(a=r).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[f.qQ.forChild(te),f.qQ]}),r})(),ae=(()=>{var a;class r{}return(a=r).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[s.wZ,p.MD,g.y,C.C,ne,g.sl]}),r})()}}]);