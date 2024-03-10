"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6144],{6144:(ge,I,h)=>{h.r(I),h.d(I,{Tab2PageModule:()=>se});var c=h(2112),y=h(1368),p=h(4716),R=h(4692),G=h(8244),u=h(1528),O=h(1740);class v{constructor(l){this.formBuilder=l}createForm(){return this.formBuilder.group({name:["",[p.AQ.required]],hometown:[""]})}}var e=h(4496),f=h(4552),T=h(5748),g=h(4688),C=h(1512),z=h(9552);let E=(()=>{var a;class l{constructor(t,n,o){this.auth=t,this.fireStore=n,this.storage=o}getOrganizations(t,n){let s,r=(0,g.oV)(this.fireStore,`organizations/from_${this.auth.currentUser.email}/OrganizationData`);return""!=t&&(s=(0,g.kt)(r,(0,g.A9)("name",">=",t),(0,g.A9)("name","<=",t+"\uf8ff"))),""!==n&&(s=(0,g.kt)(s||r,(0,g.A9)("hometown","==",n))),(0,f.GK)(""!=n||""!=t?s:r)}getEmails(){return(0,f.GK)((0,g.oV)(this.fireStore,"emails"))}getShared(){return(0,f.GK)((0,g.oV)(this.fireStore,`organizations/from_${this.auth.currentUser.email}/sharedOrganizationData`))}uploadImage(t,n){var o=this;return(0,u.c)(function*(){const r=o.auth.currentUser,_=(0,T.IL)(o.storage,`uploads/${n}'s_avatar.png`);try{yield(0,C.K)(_,t.base64String,"base64");const d=yield(0,C.Kq)(_),m=(0,g.oV)(o.fireStore,`organizations/from_${r.email}/OrganizationData`),b=(0,f.UN)(m,n);return yield(0,g.gD)(b,{imageURL:d}),!0}catch{return null}})()}uploadOrganization(t,n,o){var r=this;return(0,u.c)(function*(){const s=r.auth.currentUser,d=(0,T.IL)(r.storage,`uploads/${t}'s_avatar.png`);try{const m=(0,g.oV)(r.fireStore,`organizations/from_${s.email}/OrganizationData`),b="",k="";if(o){yield(0,C.K)(d,o.base64String,"base64");const ce=yield(0,C.Kq)(d);return yield(0,g.Sm)((0,f.UN)(m,t),{name:t,hometown:n,imageURL:ce,orgaInfo:b,orgaLink:k}),!0}return yield(0,g.Sm)((0,f.UN)(m,t),{name:t,hometown:n,imageURL:"",orgaInfo:b,orgaLink:k}),!0}catch(m){return console.log(m),null}})()}uploadSharedOrganization(t,n,o,r,s){var _=this;return(0,u.c)(function*(){const d=_.auth.currentUser;try{const m=(0,g.oV)(_.fireStore,`organizations/from_${d.email}/OrganizationData`);return yield(0,g.Sm)((0,f.UN)(m,t),{name:t,hometown:n,imageURL:o,orgaInfo:s,orgaLink:r}),!0}catch(m){return console.log(m),null}})()}shareOrganization(t,n,o,r,s,_){var d=this;return(0,u.c)(function*(){if(""==t)return null;try{const m=(0,g.oV)(d.fireStore,`organizations/from_${t}/sharedOrganizationData`);return yield(0,g.Sm)((0,f.UN)(m,n),{name:n,hometown:o,imageURL:r,orgaLink:s,orgaInfo:_}),!0}catch(m){return console.log(m),null}})()}getOrganizationData(t){var n=this;return(0,u.c)(function*(){const o=n.auth.currentUser,r=(0,g.gZ)(),s=(0,f.UN)(r,`organizations/from_${o.email}/OrganizationData`,t),_=yield(0,g.i4)(s);try{return _.exists()?_.data():(console.log("Kein Dokument mit dieser ID gefunden."),null)}catch(d){console.error("Fehler beim Abrufen des Dokuments:",d)}})()}getSharedOrganizationData(t){var n=this;return(0,u.c)(function*(){const o=n.auth.currentUser,r=(0,g.gZ)(),s=(0,f.UN)(r,`organizations/from_${o.email}/sharedOrganizationData`,t),_=yield(0,g.i4)(s);try{return _.exists()?_.data():(console.log("Kein Dokument mit dieser ID gefunden."),null)}catch(d){console.error("Fehler beim Abrufen des Dokuments:",d)}})()}updateOrganization(t,n,o,r){var s=this;return(0,u.c)(function*(){const _=s.auth.currentUser;try{const d=(0,g.oV)(s.fireStore,`organizations/from_${_.email}/OrganizationData`),m=(0,f.UN)(d,r);return yield(0,g.gD)(m,{hometown:t,orgaLink:n,orgaInfo:o}),!0}catch(d){return console.log(d),null}})()}deleteDocument(t){var n=this;return(0,u.c)(function*(){const o=n.auth.currentUser;try{const r=(0,g.gZ)(),s=(0,f.UN)(r,`organizations/from_${o.email}/OrganizationData`,t);return yield(0,g.oh)(s),console.log("Document successfully deleted!"),!0}catch(r){return console.error("Error deleting document: ",r),!1}})()}deleteSharedDocument(t){var n=this;return(0,u.c)(function*(){const o=n.auth.currentUser;try{const r=(0,g.gZ)(),s=(0,f.UN)(r,`organizations/from_${o.email}/sharedOrganizationData`,t);return yield(0,g.oh)(s),console.log("Document successfully deleted!"),!0}catch(r){return console.error("Error deleting document: ",r),!1}})()}}return(a=l).\u0275fac=function(t){return new(t||a)(e.CoB(z.sL),e.CoB(f.OI),e.CoB(T.u_))},a.\u0275prov=e.wxM({token:a,factory:a.\u0275fac,providedIn:"root"}),l})();const x=["creationModalOrga"],M=["searchModalOrga"],Y=["itemModalOrga"],$=["alertModalOrga"];function P(a,l){if(1&a&&e.wR5(0,"img",24),2&a){const i=e.GaO().$implicit;e.E7m("src",i.imageURL,e.K6U)}}function w(a,l){1&a&&(e.I0R(0,"div",25),e.wR5(1,"img",26),e.C$Y())}function D(a,l){if(1&a){const i=e.KQA();e.I0R(0,"ion-item-sliding")(1,"ion-item",19)(2,"ion-avatar",20),e.qCj("click",function(){const o=e.usT(i).$implicit,r=e.GaO();return e.CGJ(r.changeImage(o))}),e.yuY(3,P,1,1,"img",21)(4,w,2,0,"ng-template",null,22,e.gJz),e.C$Y(),e.I0R(6,"ion-label"),e.OEk(7),e.C$Y(),e.I0R(8,"ion-label"),e.OEk(9),e.C$Y(),e.I0R(10,"ion-icon",23),e.qCj("click",function(){const o=e.usT(i).$implicit,r=e.GaO();return e.CGJ(r.setIndexOrga(o))}),e.C$Y()()()}if(2&a){const i=l.$implicit,t=e.Gew(5);e.yG2(),e.E7m("button",!0),e.yG2(2),e.E7m("ngIf",i.imageURL)("ngIfElse",t),e.yG2(4),e.cNF(i.name),e.yG2(2),e.cNF(i.hometown)}}function S(a,l){1&a&&(e.I0R(0,"p"),e.OEk(1,"Picture has been selected"),e.C$Y())}function U(a,l){1&a&&(e.I0R(0,"div",25)(1,"p"),e.OEk(2,"Choose a picture"),e.C$Y()())}function N(a,l){1&a&&(e.I0R(0,"ion-label",37),e.OEk(1,"Name is mandatory"),e.C$Y())}function K(a,l){if(1&a){const i=e.KQA();e.I0R(0,"ion-content",27)(1,"div",28)(2,"form",29)(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e.OEk(6,"Create Organization Note"),e.C$Y()(),e.I0R(7,"ion-card-content")(8,"ion-item",30),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.chooseImage())}),e.yuY(9,S,2,0,"p",31)(10,U,3,0,"ng-template",null,22,e.gJz),e.C$Y(),e.I0R(12,"ion-item"),e.wR5(13,"ion-input",32),e.C$Y(),e.yuY(14,N,2,0,"ion-label",33),e.I0R(15,"ion-item"),e.wR5(16,"ion-input",34),e.C$Y(),e.I0R(17,"ion-button",35),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.createOrganization())}),e.OEk(18,"Create Organization"),e.C$Y(),e.I0R(19,"ion-button",36),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.cancelCreationOrga())}),e.OEk(20,"Cancel"),e.C$Y()()()()()()}if(2&a){const i=e.Gew(11),t=e.GaO();let n;e.yG2(2),e.E7m("formGroup",t.createOrgaForm),e.yG2(7),e.E7m("ngIf",t.photo)("ngIfElse",i),e.yG2(5),e.E7m("ngIf",(null==(n=t.createOrgaForm.get("name"))?null:n.touched)&&(null==(n=t.createOrgaForm.get("name"))||null==n.errors?null:n.errors.required)),e.yG2(3),e.E7m("disabled",!t.createOrgaForm.valid)}}function F(a,l){if(1&a&&(e.I0R(0,"ion-select-option",44),e.OEk(1),e.C$Y()),2&a){const i=l.$implicit;e.E7m("value",i.hometown),e.yG2(),e.cNF(i.hometown)}}function A(a,l){if(1&a){const i=e.KQA();e.I0R(0,"ion-content",27)(1,"div",28)(2,"form")(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e.OEk(6,"Search for Organization"),e.C$Y()(),e.I0R(7,"ion-card-content")(8,"ion-item"),e.wR5(9,"ion-searchbar",38,39),e.C$Y(),e.I0R(11,"ion-item")(12,"ion-label",40),e.OEk(13,"Choose origin"),e.C$Y(),e.I0R(14,"ion-select",41),e.iHE("ngModelChange",function(n){e.usT(i);const o=e.GaO();return e.kNx(o.selectedHometown,n)||(o.selectedHometown=n),e.CGJ(n)}),e.yuY(15,F,2,2,"ion-select-option",42),e.C$Y()(),e.I0R(16,"ion-button",43),e.qCj("click",function(){e.usT(i);const n=e.Gew(10),o=e.GaO();return e.CGJ(o.search(n.value))}),e.OEk(17,"Search"),e.C$Y(),e.I0R(18,"ion-button",36),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.cancelSearchOrga())}),e.OEk(19,"Cancel"),e.C$Y()()()()()()}if(2&a){const i=e.GaO();e.yG2(14),e.OKB("ngModel",i.selectedHometown),e.yG2(),e.E7m("ngForOf",i.orgas)}}function L(a,l){if(1&a&&(e.I0R(0,"ion-select-option",44),e.OEk(1),e.C$Y()),2&a){const i=l.$implicit;e.E7m("value",i.email),e.yG2(),e.cNF(i.email)}}function j(a,l){if(1&a){const i=e.KQA();e.I0R(0,"h3"),e.OEk(1,"Share Orga with user"),e.C$Y(),e.I0R(2,"ion-select",63),e.iHE("ngModelChange",function(n){e.usT(i);const o=e.GaO(2);return e.kNx(o.chosenUser,n)||(o.chosenUser=n),e.CGJ(n)}),e.yuY(3,L,2,2,"ion-select-option",42),e.C$Y(),e.I0R(4,"ion-button",64),e.qCj("click",function(){e.usT(i);const n=e.GaO(2);return e.CGJ(n.shareOrganization())}),e.OEk(5,"Share"),e.C$Y()}if(2&a){const i=e.GaO(2);e.yG2(2),e.OKB("ngModel",i.chosenUser),e.yG2(),e.E7m("ngForOf",i.users)}}function q(a,l){if(1&a&&e.wR5(0,"img",24),2&a){const i=e.GaO(2);e.E7m("src",i.orgaImg,e.K6U)}}function J(a,l){1&a&&(e.I0R(0,"div",25),e.wR5(1,"img",26),e.C$Y())}function B(a,l){1&a&&(e.I0R(0,"ion-label",1),e.OEk(1,"Hometown: "),e.C$Y())}function H(a,l){if(1&a&&(e.I0R(0,"a",65),e.OEk(1),e.C$Y()),2&a){const i=e.GaO(2);e.yG2(),e.cNF(i.orgaHome)}}function Q(a,l){if(1&a){const i=e.KQA();e.I0R(0,"ion-input",66),e.iHE("ngModelChange",function(n){e.usT(i);const o=e.GaO(2);return e.kNx(o.orgaHome,n)||(o.orgaHome=n),e.CGJ(n)}),e.C$Y()}if(2&a){const i=e.GaO(2);e.OKB("ngModel",i.orgaHome)}}function W(a,l){1&a&&(e.I0R(0,"ion-label",1),e.OEk(1,"Link:"),e.C$Y())}function V(a,l){if(1&a&&(e.I0R(0,"a",67),e.OEk(1),e.C$Y()),2&a){const i=e.GaO(2);e._6D("href",i.orgaLink,e.K6U),e.yG2(),e.cNF(i.orgaName)}}function Z(a,l){if(1&a){const i=e.KQA();e.I0R(0,"ion-input",68),e.iHE("ngModelChange",function(n){e.usT(i);const o=e.GaO(2);return e.kNx(o.orgaLink,n)||(o.orgaLink=n),e.CGJ(n)}),e.C$Y()}if(2&a){const i=e.GaO(2);e.OKB("ngModel",i.orgaLink)}}function X(a,l){if(1&a&&(e.I0R(0,"textarea",69),e.OEk(1),e.C$Y()),2&a){const i=e.GaO(2);e.yG2(),e.cNF(i.orgaInfo)}}function ee(a,l){if(1&a){const i=e.KQA();e.I0R(0,"textarea",70),e.iHE("ngModelChange",function(n){e.usT(i);const o=e.GaO(2);return e.kNx(o.orgaInfo,n)||(o.orgaInfo=n),e.CGJ(n)}),e.OEk(1),e.C$Y()}if(2&a){const i=e.GaO(2);e.OKB("ngModel",i.orgaInfo),e.yG2(),e.cNF(i.orgaInfo)}}function te(a,l){if(1&a){const i=e.KQA();e.I0R(0,"ion-content",27)(1,"ion-fab",45)(2,"ion-fab-button",6),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.toggleEditModeOrga())}),e.wR5(3,"ion-icon",46),e.C$Y()(),e.I0R(4,"ion-fab",45)(5,"ion-fab-button",47),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.saveOrgaData())}),e.wR5(6,"ion-icon",48),e.C$Y()(),e.I0R(7,"ion-fab",49)(8,"ion-fab-button",50),e.wR5(9,"ion-icon",51),e.C$Y()(),e.I0R(10,"ion-popover",52),e.yuY(11,j,6,2,"ng-template"),e.C$Y(),e.I0R(12,"ion-card")(13,"ion-card-header")(14,"ion-card-title",53),e.OEk(15),e.C$Y()(),e.I0R(16,"ion-card-content")(17,"ion-item")(18,"ion-avatar",54),e.yuY(19,q,1,1,"img",21)(20,J,2,0,"ng-template",null,22,e.gJz),e.C$Y()()(),e.I0R(22,"ion-card-content")(23,"ion-item"),e.yuY(24,B,2,0,"ion-label",55)(25,H,2,1,"a",56)(26,Q,1,1,"ion-input",57),e.C$Y(),e.I0R(27,"ion-item"),e.yuY(28,W,2,0,"ion-label",55)(29,V,2,2,"a",58)(30,Z,1,1,"ion-input",59),e.C$Y()()(),e.I0R(31,"ion-card")(32,"ion-card-header")(33,"ion-card-title"),e.OEk(34,"Additional Infos"),e.C$Y()(),e.I0R(35,"ion-card-content")(36,"ion-item"),e.yuY(37,X,2,1,"textarea",60)(38,ee,2,2,"textarea",61),e.C$Y()()(),e.I0R(39,"ion-button",36),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.cancelItemOrga())}),e.OEk(40,"Close"),e.C$Y(),e.I0R(41,"ion-button",62),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.delete())}),e.OEk(42,"Delete"),e.C$Y()()}if(2&a){const i=e.Gew(21),t=e.GaO();e.yG2(),e.E7m("hidden",t.editMode),e.yG2(3),e.E7m("hidden",!t.editMode),e.yG2(3),e.E7m("hidden",t.editMode),e.yG2(3),e.E7m("isOpen",t.isPopoverOpen),e.yG2(4),e.CI5("id","nameOrga",t.currentItemIndexOrga,""),e.yG2(),e.cNF(t.orgaName),e.yG2(4),e.E7m("ngIf",t.orgaImg)("ngIfElse",i),e.yG2(5),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",t.editMode),e.yG2(2),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",t.editMode),e.yG2(7),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",t.editMode)}}function ne(a,l){if(1&a&&e.wR5(0,"img",24),2&a){const i=e.GaO().$implicit;e.E7m("src",i.imageURL,e.K6U)}}function ae(a,l){1&a&&(e.I0R(0,"div",25),e.wR5(1,"img",26),e.C$Y())}function oe(a,l){if(1&a){const i=e.KQA();e.I0R(0,"ion-item-sliding")(1,"ion-item",19)(2,"ion-avatar",72),e.yuY(3,ne,1,1,"img",21)(4,ae,2,0,"ng-template",null,22,e.gJz),e.C$Y(),e.I0R(6,"ion-label",53),e.OEk(7),e.C$Y(),e.I0R(8,"ion-label"),e.OEk(9),e.C$Y(),e.I0R(10,"ion-icon",73),e.qCj("click",function(){const o=e.usT(i).index,r=e.GaO(2);return e.CGJ(r.addToDatabase(o))}),e.C$Y(),e.I0R(11,"ion-icon",74),e.qCj("click",function(){const o=e.usT(i).index,r=e.GaO(2);return e.CGJ(r.deleteShared(o))}),e.C$Y()()()}if(2&a){const i=l.$implicit,t=l.index,n=e.Gew(5);e.yG2(),e.E7m("button",!0),e.yG2(2),e.E7m("ngIf",i.imageURL)("ngIfElse",n),e.yG2(3),e.CI5("id","sharedNameOrganization",t,""),e.yG2(),e.cNF(i.name),e.yG2(2),e.cNF(i.hometown)}}function ie(a,l){if(1&a){const i=e.KQA();e.I0R(0,"ion-content",27)(1,"h3",71),e.OEk(2,"Shared Characters"),e.C$Y(),e.I0R(3,"ion-list",12),e.yuY(4,oe,12,6,"ion-item-sliding",13),e.C$Y(),e.I0R(5,"ion-button",62),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.cancelAlertOrga())}),e.OEk(6,"Close"),e.C$Y()()}if(2&a){const i=e.GaO();e.yG2(3),e.E7m("inset",!0),e.yG2(),e.E7m("ngForOf",i.sharedOrganizations)}}const re=[{path:"",component:(()=>{var a;class l{constructor(t,n,o,r){this.organizationService=t,this.loadingController=n,this.alertController=o,this.formBuilder=r,this.searchItem="",this.selectedHometown="",this.chosenUser="",this.profile=null,this.orgas=null,this.sharedOrganizations=null,this.users=null,this.filter=!0,this.editMode=!1,this.isPopoverOpen=!1,this.tempOrganizationLink="",this.tempOrganizationInfo="",this.organizationService.getOrganizations(this.searchItem,this.selectedHometown).subscribe(s=>{this.orgas=s}),this.organizationService.getEmails().subscribe(s=>{this.users=s}),this.organizationService.getShared().subscribe(s=>{this.sharedOrganizations=s,this.sharedOrgaCount=s.length})}ngOnInit(){this.createOrgaForm=new v(this.formBuilder).createForm(),this.onWillDismiss(null)}toggleEditModeOrga(){this.editMode=!this.editMode}search(t){console.log(this.selectedHometown),this.organizationService.getOrganizations(t,this.selectedHometown).subscribe(n=>{this.orgas=n}),this.selectedHometown="",this.cancelSearchOrga(),setTimeout(()=>{this.filter=!this.filter},300)}changeImage(t){var n=this;return(0,u.c)(function*(){const o=yield O.Ut.getPhoto({quality:90,allowEditing:!1,resultType:O.on.Base64,source:O._8.Photos});if(o){const r=yield n.loadingController.create();yield r.present();const s=yield n.organizationService.uploadImage(o,t.name);r.dismiss(),s||(yield(yield n.alertController.create({header:"Upload failed",message:"There was a problem uploading your avatar.",buttons:["OK"]})).present())}})()}chooseImage(){var t=this;return(0,u.c)(function*(){t.photo=yield O.Ut.getPhoto({quality:90,allowEditing:!1,resultType:O.on.Base64,source:O._8.Photos})})()}saveOrgaData(){var t=this;return(0,u.c)(function*(){const n=yield t.loadingController.create();yield n.present();const o=yield t.organizationService.updateOrganization(t.orgaHome,t.orgaLink,t.orgaInfo,t.orgaName);n.dismiss(),o||(yield(yield t.alertController.create({header:"Upload failed",message:"There was a problem uploading your data.",buttons:["OK"]})).present()),t.toggleEditModeOrga()})()}createOrganization(){var t=this;return(0,u.c)(function*(){const n=yield t.loadingController.create();yield n.present();const o=yield t.organizationService.uploadOrganization(t.createOrgaForm.value.name,t.createOrgaForm.value.hometown,null==t?void 0:t.photo);t.photo=null,n.dismiss(),o||(yield(yield t.alertController.create({header:"Upload failed",message:"There was a problem uploading your organization.",buttons:["OK"]})).present()),t.cancelCreationOrga()})()}delete(){var t=this;return(0,u.c)(function*(){yield(yield t.alertController.create({header:"Are you sure?",message:"Data will be deleted",buttons:[{text:"Delete",handler:()=>{t.organizationService.deleteDocument(t.orga.name),t.cancelItemOrga()}},{text:"Cancel",role:"cancel",handler:()=>{}}]})).present()})()}deleteShared(t){var n=this;return(0,u.c)(function*(){yield(yield n.alertController.create({header:"Are you sure?",message:"Data will be deleted",buttons:[{text:"Delete",handler:()=>{var r;const _=null===(r=document.getElementById("sharedNameOrganization"+t))||void 0===r?void 0:r.textContent;n.organizationService.deleteSharedDocument(_),n.cancelItemOrga()}},{text:"Cancel",role:"cancel",handler:()=>{}}]})).present()})()}setIndexOrga(t){var n=this;return(0,u.c)(function*(){n.orgaName=t.name,n.orgaHome=t.hometown,n.orgaImg=t.imageURL,n.orgaInfo=t.orgaInfo,n.orgaLink=t.orgaLink,n.orga=t,n.isItemModalOpenOrga=!0})()}setSharedIndex(t){var n=this;return(0,u.c)(function*(){var o;const s=null===(o=document.getElementById("sharedNameOrganization"+t))||void 0===o?void 0:o.textContent,_=yield n.organizationService.getSharedOrganizationData(s);console.log("Link: "+_.organizationLink),n.orgaName=_.name,n.orgaHome=_.hometown,n.orgaImg=_.imageURL,n.orgaInfo=_.orgaInfo,n.orgaLink=_.orgaLink})()}shareOrganization(){var t=this;return(0,u.c)(function*(){const n=yield t.loadingController.create();yield n.present();const o=yield t.organizationService.shareOrganization(t.chosenUser,t.orgaName,t.orgaHome,t.orgaImg,t.orgaLink,t.orgaInfo);n.dismiss(),o||(yield(yield t.alertController.create({header:"Upload failed",message:"There was a problem uploading your data.",buttons:["OK"]})).present())})()}addToDatabase(t){var n=this;return(0,u.c)(function*(){var o;yield n.setSharedIndex(t);const r=yield n.organizationService.uploadSharedOrganization(n.orgaName,n.orgaHome,n.orgaImg,n.orgaLink,n.orgaInfo);var s="sharedNameOrganization"+t;const _=yield null===(o=document.getElementById(s))||void 0===o?void 0:o.textContent;r&&(yield n.organizationService.deleteSharedDocument(_))})()}cancelCreationOrga(){this.isCreationModalOpenOrga=!1,this.creationModalOrga.dismiss(null,"cancel")}cancelAlertOrga(){this.isAlertModalOpenOrganization=!1,this.alertModalOrga.dismiss(null,"cancel")}cancelSearchOrga(){this.isSearchModalOpenOrga=!1,this.searchModalOrga.dismiss(null,"cancel")}cancelItemOrga(){this.isItemModalOpenOrga=!1,this.itemModalOrga.dismiss(null,"cancel"),this.editMode&&this.toggleEditModeOrga()}openAlert(){this.isAlertModalOpenOrganization=!0}openCreation(){this.isCreationModalOpenOrga=!0}openSearch(){this.isSearchModalOpenOrga=!0}onWillDismiss(t){this.isSearchModalOpenOrga=!1,this.isCreationModalOpenOrga=!1,this.isItemModalOpenOrga=!1,this.isAlertModalOpenOrganization=!1}}return(a=l).\u0275fac=function(t){return new(t||a)(e.GI1(E),e.GI1(c.Kg),e.GI1(c.iW),e.GI1(p.im))},a.\u0275cmp=e.In1({type:a,selectors:[["app-tab2"]],viewQuery:function(t,n){if(1&t&&(e.CC$(x,5),e.CC$(M,5),e.CC$(Y,5),e.CC$($,5)),2&t){let o;e.wto(o=e.Gqi())&&(n.creationModalOrga=o.first),e.wto(o=e.Gqi())&&(n.searchModalOrga=o.first),e.wto(o=e.Gqi())&&(n.itemModalOrga=o.first),e.wto(o=e.Gqi())&&(n.alertModalOrga=o.first)}},decls:31,vars:11,consts:[[3,"translucent"],["slot","start"],["slot","end","color","danger",1,"badge-position"],["slot","end","name","notifications-outline",2,"height","35px","width","35px",3,"click"],[3,"fullscreen"],["slot","fixed","vertical","bottom","horizontal","end"],["color","secondary",3,"click"],["name","add-outline"],["slot","fixed","vertical","bottom","horizontal","start",3,"hidden"],["name","search-outline"],["color","danger",3,"click"],["name","remove"],[3,"inset"],[4,"ngFor","ngForOf"],[3,"isOpen","willDismiss"],["creationModalOrga",""],["searchModalOrga",""],["itemModalOrga",""],["alertModalOrga",""],[3,"button"],["aria-hidden","true","slot","start",3,"click"],[3,"src",4,"ngIf","ngIfElse"],["placeholder_avatar",""],["name","chevron-forward-outline",3,"click"],[3,"src"],[1,"placeholder"],["src","https://ionicframework.com/docs/img/demos/avatar.svg"],[1,"ion-padding"],[1,"flex-center"],[3,"formGroup"],[3,"click"],[4,"ngIf","ngIfElse"],["formControlName","name","label","Name","labelPlacement","floating","placeholder","Enter name","type","text"],["color","danger",4,"ngIf"],["formControlName","hometown","label","Hometown","labelPlacement","floating","placeholder","Enter hometown","type","text"],["color","dark","form","round",3,"disabled","click"],["color","danger","fill","outline",3,"click"],["color","danger"],["show-clear-button","focus","value",""],["searchBar",""],["position","floating","aria-label","Choose hometown"],["name","selectedHometown",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["color","dark","form","round",3,"click"],[3,"value"],["slot","fixed","vertical","bottom","horizontal","end",3,"hidden"],["name","create-outline"],["color","success",3,"click"],["name","save-outline"],["slot","fixed","vertical","top","horizontal","end",3,"hidden"],["id","open-popover-orga","color","secondary"],["name","share-social-outline"],["trigger","open-popover-orga",3,"isOpen"],[3,"id"],["aria-hidden","true",1,"align-center"],["slot","start",4,"ngIf"],["slot","end","style","text-decoration: none; pointer-events: none;","href","",4,"ngIf"],["placeholder","Type character hometown","type","text",3,"ngModel","ngModelChange",4,"ngIf"],["slot","end","style","text-decoration: none;",3,"href",4,"ngIf"],["placeholder","Type character link","type","text",3,"ngModel","ngModelChange",4,"ngIf"],["style","resize: none; width: 100%; height: 100%;","rows","7","cols","55","readonly","",4,"ngIf"],["placeholder","Type organization info","rows","40","cols","55",3,"ngModel","ngModelChange",4,"ngIf"],["color","danger","form","round",3,"click"],["label","Choose user","name","chosenUser",3,"ngModel","ngModelChange"],["color","dark","fill","outline",3,"click"],["slot","end","href","",2,"text-decoration","none","pointer-events","none"],["placeholder","Type character hometown","type","text",3,"ngModel","ngModelChange"],["slot","end",2,"text-decoration","none",3,"href"],["placeholder","Type character link","type","text",3,"ngModel","ngModelChange"],["rows","7","cols","55","readonly","",2,"resize","none","width","100%","height","100%"],["placeholder","Type organization info","rows","40","cols","55",3,"ngModel","ngModelChange"],[2,"display","flex","justify-content","center"],["aria-hidden","true","slot","start"],["slot","end","name","add-circle-outline",3,"click"],["slot","end","name","trash-outline",3,"click"]],template:function(t,n){1&t&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),e.OEk(3," Organization Notes "),e.C$Y(),e.I0R(4,"ion-badge",2),e.OEk(5),e.C$Y(),e.I0R(6,"ion-icon",3),e.qCj("click",function(){return n.openAlert()}),e.C$Y()()(),e.I0R(7,"ion-content",4)(8,"ion-fab",5)(9,"ion-fab-button",6),e.qCj("click",function(){return n.openCreation()}),e.wR5(10,"ion-icon",7),e.C$Y()(),e.I0R(11,"ion-fab",8)(12,"ion-fab-button",6),e.qCj("click",function(){return n.openSearch()}),e.wR5(13,"ion-icon",9),e.C$Y()(),e.I0R(14,"ion-fab",8)(15,"ion-fab-button",10),e.qCj("click",function(){return n.search("")}),e.wR5(16,"ion-icon",11),e.C$Y()(),e.I0R(17,"ion-list",12),e.yuY(18,D,11,5,"ion-item-sliding",13),e.C$Y(),e.I0R(19,"ion-modal",14,15),e.qCj("willDismiss",function(r){return n.onWillDismiss(r)}),e.yuY(21,K,21,5,"ng-template"),e.C$Y(),e.I0R(22,"ion-modal",14,16),e.qCj("willDismiss",function(r){return n.onWillDismiss(r)}),e.yuY(24,A,20,2,"ng-template"),e.C$Y(),e.I0R(25,"ion-modal",14,17),e.qCj("willDismiss",function(r){return n.onWillDismiss(r)}),e.yuY(27,te,43,16,"ng-template"),e.C$Y(),e.I0R(28,"ion-modal",14,18),e.qCj("willDismiss",function(r){return n.onWillDismiss(r)}),e.yuY(30,ie,7,2,"ng-template"),e.C$Y()()),2&t&&(e.E7m("translucent",!0),e.yG2(5),e.cNF(n.sharedOrgaCount),e.yG2(2),e.E7m("fullscreen",!0),e.yG2(4),e.E7m("hidden",!n.filter),e.yG2(3),e.E7m("hidden",n.filter),e.yG2(3),e.E7m("inset",!0),e.yG2(),e.E7m("ngForOf",n.orgas),e.yG2(),e.E7m("isOpen",n.isCreationModalOpenOrga),e.yG2(3),e.E7m("isOpen",n.isSearchModalOpenOrga),e.yG2(3),e.E7m("isOpen",n.isItemModalOpenOrga),e.yG2(3),e.E7m("isOpen",n.isAlertModalOpenOrganization))},dependencies:[c.O7,c.Gi,c.sn,c.KC,c.Gg,c.YY,c.I7,c._i,c.q8,c.Wq,c.wB,c.Ko,c.A5,c.Yb,c.UB,c.QR,c.OC,c.KQ,c.Cy,c.gd,c.tM,c.Md,c.yc,c.sW,c.IT,c.qG,y.ay,y.u_,p.sz,p.ot,p.ue,p.u,p._G,p.SC,p.uW,p.Wo]}),l})()}];let le=(()=>{var a;class l{}return(a=l).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[G.qQ.forChild(re),G.qQ]}),l})(),se=(()=>{var a;class l{}return(a=l).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[c.wZ,y.MD,p.y,R.C,le,p.sl]}),l})()}}]);