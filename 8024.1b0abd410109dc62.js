"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8024],{8024:(_e,I,h)=>{h.r(I),h.d(I,{Tab1PageModule:()=>le});var s=h(2112),P=h(1368),f=h(4716),O=h(4692),G=h(8244),u=h(1528),C=h(1740);class k{constructor(c){this.formBuilder=c}createForm(){return this.formBuilder.group({name:["",[f.AQ.required]],hometown:[""]})}}var e=h(4496),p=h(4552),T=h(5748),_=h(4688),y=h(1512),v=h(9552);let R=(()=>{var a;class c{constructor(t,n,o){this.auth=t,this.fireStore=n,this.storage=o}getNPCs(t,n){let l,r=(0,_.oV)(this.fireStore,`npcs/from_${this.auth.currentUser.email}/NPCData`);return""!=t&&(l=(0,_.kt)(r,(0,_.A9)("name",">=",t),(0,_.A9)("name","<=",t+"\uf8ff"))),""!==n&&(l=(0,_.kt)(l||r,(0,_.A9)("hometown","==",n))),(0,p.GK)(""!=n||""!=t?l:r)}getEmails(){return(0,p.GK)((0,_.oV)(this.fireStore,"emails"))}getShared(){return(0,p.GK)((0,_.oV)(this.fireStore,`npcs/from_${this.auth.currentUser.email}/sharedNPCData`))}uploadImage(t,n){var o=this;return(0,u.c)(function*(){const r=o.auth.currentUser,d=(0,T.IL)(o.storage,`uploads/${n}'s_avatar.png`);try{yield(0,y.K)(d,t.base64String,"base64");const m=yield(0,y.Kq)(d),g=(0,_.oV)(o.fireStore,`npcs/from_${r.email}/NPCData`),b=(0,p.UN)(g,n);return yield(0,_.gD)(b,{imageURL:m}),!0}catch{return null}})()}uploadNPC(t,n,o){var r=this;return(0,u.c)(function*(){const l=r.auth.currentUser,m=(0,T.IL)(r.storage,`uploads/${t}'s_avatar.png`);try{const g="",b="",N=(0,_.oV)(r.fireStore,`npcs/from_${l.email}/NPCData`);if(o){yield(0,y.K)(m,o.base64String,"base64");const se=yield(0,y.Kq)(m);return yield(0,_.Sm)((0,p.UN)(N,t),{name:t,hometown:n,imageURL:se,characterInfo:g,characterLink:b}),!0}return yield(0,_.Sm)((0,p.UN)(N,t),{name:t,hometown:n,imageURL:"",characterInfo:g,characterLink:b}),!0}catch(g){return console.log(g),null}})()}uploadSharedNPC(t,n,o,r,l){var d=this;return(0,u.c)(function*(){const m=d.auth.currentUser;try{const g=(0,_.oV)(d.fireStore,`npcs/from_${m.email}/NPCData`);return yield(0,_.Sm)((0,p.UN)(g,t),{name:t,hometown:n,imageURL:o,characterInfo:l,characterLink:r}),!0}catch(g){return console.log(g),null}})()}shareCharacter(t,n,o,r,l,d){var m=this;return(0,u.c)(function*(){if(""==t)return null;try{const g=(0,_.oV)(m.fireStore,`npcs/from_${t}/sharedNPCData`);return yield(0,_.Sm)((0,p.UN)(g,n),{name:n,hometown:o,imageURL:r,characterLink:l,characterInfo:d}),!0}catch(g){return console.log(g),null}})()}getCharacterData(t){var n=this;return(0,u.c)(function*(){const o=n.auth.currentUser,r=(0,_.gZ)(),l=(0,p.UN)(r,`npcs/from_${o.email}/NPCData`,t),d=yield(0,_.i4)(l);try{return d.exists()?d.data():(console.log("Kein Dokument mit dieser ID gefunden."),null)}catch(m){console.error("Fehler beim Abrufen des Dokuments:",m)}})()}getSharedCharacterData(t){var n=this;return(0,u.c)(function*(){const o=n.auth.currentUser,r=(0,_.gZ)(),l=(0,p.UN)(r,`npcs/from_${o.email}/sharedNPCData`,t),d=yield(0,_.i4)(l);try{return d.exists()?d.data():(console.log("Kein Dokument mit dieser ID gefunden."),null)}catch(m){console.error("Fehler beim Abrufen des Dokuments:",m)}})()}updateCharacter(t,n,o,r){var l=this;return(0,u.c)(function*(){const d=l.auth.currentUser;try{const m=(0,_.oV)(l.fireStore,`npcs/from_${d.email}/NPCData`),g=(0,p.UN)(m,r);return yield(0,_.gD)(g,{hometown:t,characterLink:n,characterInfo:o}),!0}catch{return null}})()}deleteDocument(t){var n=this;return(0,u.c)(function*(){const o=n.auth.currentUser;try{const r=(0,_.gZ)(),l=(0,p.UN)(r,`npcs/from_${o.email}/NPCData`,t);return yield(0,_.oh)(l),console.log("Document successfully deleted!"),!0}catch(r){return console.error("Error deleting document: ",r),!1}})()}deleteSharedDocument(t){var n=this;return(0,u.c)(function*(){const o=n.auth.currentUser;try{const r=(0,_.gZ)(),l=(0,p.UN)(r,`npcs/from_${o.email}/sharedNPCData`,t);return yield(0,_.oh)(l),console.log("Document successfully deleted!"),!0}catch(r){return console.error("Error deleting document: ",r),!1}})()}}return(a=c).\u0275fac=function(t){return new(t||a)(e.CoB(v.sL),e.CoB(p.OI),e.CoB(T.u_))},a.\u0275prov=e.wxM({token:a,factory:a.\u0275fac,providedIn:"root"}),c})();const E=["creationModalNPC"],x=["searchModalNPC"],M=["itemModalNPC"],Y=["alertModalNPC"];function $(a,c){if(1&a&&e.wR5(0,"img",24),2&a){const i=e.GaO().$implicit;e.E7m("src",i.imageURL,e.K6U)}}function w(a,c){1&a&&(e.I0R(0,"div",25),e.wR5(1,"img",26),e.C$Y())}function D(a,c){if(1&a){const i=e.KQA();e.I0R(0,"ion-item-sliding")(1,"ion-item",19)(2,"ion-avatar",20),e.qCj("click",function(){const o=e.usT(i).$implicit,r=e.GaO();return e.CGJ(r.changeImage(o))}),e.yuY(3,$,1,1,"img",21)(4,w,2,0,"ng-template",null,22,e.gJz),e.C$Y(),e.I0R(6,"ion-label"),e.OEk(7),e.C$Y(),e.I0R(8,"ion-label"),e.OEk(9),e.C$Y(),e.I0R(10,"ion-icon",23),e.qCj("click",function(){const o=e.usT(i).$implicit,r=e.GaO();return e.CGJ(r.setIndex(o))}),e.C$Y()()()}if(2&a){const i=c.$implicit,t=e.Gew(5);e.yG2(),e.E7m("button",!0),e.yG2(2),e.E7m("ngIf",i.imageURL)("ngIfElse",t),e.yG2(4),e.cNF(i.name),e.yG2(2),e.cNF(i.hometown)}}function S(a,c){1&a&&(e.I0R(0,"p"),e.OEk(1,"Picture has been selected"),e.C$Y())}function U(a,c){1&a&&(e.I0R(0,"div",25)(1,"p"),e.OEk(2,"Choose a picture"),e.C$Y()())}function K(a,c){1&a&&(e.I0R(0,"ion-label",37),e.OEk(1,"Name is mandatory"),e.C$Y())}function F(a,c){if(1&a){const i=e.KQA();e.I0R(0,"ion-content",27)(1,"div",28)(2,"form",29)(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e.OEk(6,"Create character note"),e.C$Y()(),e.I0R(7,"ion-card-content")(8,"ion-item",30),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.chooseImage())}),e.yuY(9,S,2,0,"p",31)(10,U,3,0,"ng-template",null,22,e.gJz),e.C$Y(),e.I0R(12,"ion-item"),e.wR5(13,"ion-input",32),e.C$Y(),e.yuY(14,K,2,0,"ion-label",33),e.I0R(15,"ion-item"),e.wR5(16,"ion-input",34),e.C$Y(),e.I0R(17,"ion-button",35),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.createNPC())}),e.OEk(18,"Create character"),e.C$Y(),e.I0R(19,"ion-button",36),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.cancelCreation())}),e.OEk(20,"Close"),e.C$Y()()()()()()}if(2&a){const i=e.Gew(11),t=e.GaO();let n;e.yG2(2),e.E7m("formGroup",t.createNPCForm),e.yG2(7),e.E7m("ngIf",t.photo)("ngIfElse",i),e.yG2(5),e.E7m("ngIf",(null==(n=t.createNPCForm.get("name"))?null:n.touched)&&(null==(n=t.createNPCForm.get("name"))||null==n.errors?null:n.errors.required)),e.yG2(3),e.E7m("disabled",!t.createNPCForm.valid)}}function A(a,c){if(1&a&&(e.I0R(0,"ion-select-option",43),e.OEk(1),e.C$Y()),2&a){const i=c.$implicit;e.E7m("value",i.hometown),e.yG2(),e.cNF(i.hometown)}}function L(a,c){if(1&a){const i=e.KQA();e.I0R(0,"ion-content",27)(1,"div",28)(2,"form")(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e.OEk(6,"Search for NPC"),e.C$Y()(),e.I0R(7,"ion-card-content")(8,"ion-item"),e.wR5(9,"ion-searchbar",38,39),e.C$Y(),e.I0R(11,"ion-item")(12,"ion-select",40),e.iHE("ngModelChange",function(n){e.usT(i);const o=e.GaO();return e.kNx(o.selectedHometown,n)||(o.selectedHometown=n),e.CGJ(n)}),e.yuY(13,A,2,2,"ion-select-option",41),e.C$Y()(),e.I0R(14,"ion-button",42),e.qCj("click",function(){e.usT(i);const n=e.Gew(10),o=e.GaO();return e.CGJ(o.search(n.value))}),e.OEk(15,"Search"),e.C$Y(),e.I0R(16,"ion-button",36),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.cancelSearch())}),e.OEk(17,"Close"),e.C$Y()()()()()()}if(2&a){const i=e.GaO();e.yG2(12),e.OKB("ngModel",i.selectedHometown),e.yG2(),e.E7m("ngForOf",i.npcs)}}function j(a,c){if(1&a&&(e.I0R(0,"ion-select-option",43),e.OEk(1),e.C$Y()),2&a){const i=c.$implicit;e.E7m("value",i.email),e.yG2(),e.cNF(i.email)}}function q(a,c){if(1&a){const i=e.KQA();e.I0R(0,"h3"),e.OEk(1,"Share NPC with user"),e.C$Y(),e.I0R(2,"ion-select",62),e.iHE("ngModelChange",function(n){e.usT(i);const o=e.GaO(2);return e.kNx(o.chosenUser,n)||(o.chosenUser=n),e.CGJ(n)}),e.yuY(3,j,2,2,"ion-select-option",41),e.C$Y(),e.I0R(4,"ion-button",63),e.qCj("click",function(){e.usT(i);const n=e.GaO(2);return e.CGJ(n.shareNPC())}),e.OEk(5,"Share"),e.C$Y()}if(2&a){const i=e.GaO(2);e.yG2(2),e.OKB("ngModel",i.chosenUser),e.yG2(),e.E7m("ngForOf",i.users)}}function J(a,c){if(1&a&&e.wR5(0,"img",24),2&a){const i=e.GaO(2);e.E7m("src",i.characterImg,e.K6U)}}function B(a,c){1&a&&(e.I0R(0,"div",25),e.wR5(1,"img",26),e.C$Y())}function H(a,c){1&a&&(e.I0R(0,"ion-label",1),e.OEk(1,"Hometown: "),e.C$Y())}function Q(a,c){if(1&a&&(e.I0R(0,"a",64),e.OEk(1),e.C$Y()),2&a){const i=e.GaO(2);e.yG2(),e.cNF(i.characterHome)}}function W(a,c){if(1&a){const i=e.KQA();e.I0R(0,"ion-input",65),e.iHE("ngModelChange",function(n){e.usT(i);const o=e.GaO(2);return e.kNx(o.characterHome,n)||(o.characterHome=n),e.CGJ(n)}),e.C$Y()}if(2&a){const i=e.GaO(2);e.OKB("ngModel",i.characterHome)}}function z(a,c){1&a&&(e.I0R(0,"ion-label",1),e.OEk(1,"Link:"),e.C$Y())}function V(a,c){if(1&a&&(e.I0R(0,"a",66),e.OEk(1),e.C$Y()),2&a){const i=e.GaO(2);e._6D("href",i.characterLink,e.K6U),e.yG2(),e.cNF(i.characterName)}}function Z(a,c){if(1&a){const i=e.KQA();e.I0R(0,"ion-input",67),e.iHE("ngModelChange",function(n){e.usT(i);const o=e.GaO(2);return e.kNx(o.characterLink,n)||(o.characterLink=n),e.CGJ(n)}),e.C$Y()}if(2&a){const i=e.GaO(2);e.OKB("ngModel",i.characterLink)}}function X(a,c){if(1&a&&(e.I0R(0,"textarea",68),e.OEk(1),e.C$Y()),2&a){const i=e.GaO(2);e.yG2(),e.cNF(i.characterInfo)}}function ee(a,c){if(1&a){const i=e.KQA();e.I0R(0,"textarea",69),e.iHE("ngModelChange",function(n){e.usT(i);const o=e.GaO(2);return e.kNx(o.characterInfo,n)||(o.characterInfo=n),e.CGJ(n)}),e.OEk(1),e.C$Y()}if(2&a){const i=e.GaO(2);e.OKB("ngModel",i.characterInfo),e.yG2(),e.cNF(i.characterInfo)}}function te(a,c){if(1&a){const i=e.KQA();e.I0R(0,"ion-content",27)(1,"ion-fab",44)(2,"ion-fab-button",6),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.toggleEditModeNPC())}),e.wR5(3,"ion-icon",45),e.C$Y()(),e.I0R(4,"ion-fab",44)(5,"ion-fab-button",46),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.saveCharacterData())}),e.wR5(6,"ion-icon",47),e.C$Y()(),e.I0R(7,"ion-fab",48)(8,"ion-fab-button",49),e.wR5(9,"ion-icon",50),e.C$Y()(),e.I0R(10,"ion-popover",51),e.yuY(11,q,6,2,"ng-template"),e.C$Y(),e.I0R(12,"ion-card")(13,"ion-card-header")(14,"ion-card-title",52),e.OEk(15),e.C$Y()(),e.I0R(16,"ion-card-content")(17,"ion-avatar",53),e.yuY(18,J,1,1,"img",21)(19,B,2,0,"ng-template",null,22,e.gJz),e.C$Y()(),e.I0R(21,"ion-card-content")(22,"ion-item"),e.yuY(23,H,2,0,"ion-label",54)(24,Q,2,1,"a",55)(25,W,1,1,"ion-input",56),e.C$Y(),e.I0R(26,"ion-item"),e.yuY(27,z,2,0,"ion-label",54)(28,V,2,2,"a",57)(29,Z,1,1,"ion-input",58),e.C$Y()()(),e.I0R(30,"ion-card")(31,"ion-card-header")(32,"ion-card-title"),e.OEk(33,"Additional Infos"),e.C$Y()(),e.I0R(34,"ion-card-content")(35,"ion-item"),e.yuY(36,X,2,1,"textarea",59)(37,ee,2,2,"textarea",60),e.C$Y()()(),e.I0R(38,"ion-button",36),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.cancelItem())}),e.OEk(39,"Close"),e.C$Y(),e.I0R(40,"ion-button",61),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.delete())}),e.OEk(41,"Delete"),e.C$Y()()}if(2&a){const i=e.Gew(20),t=e.GaO();e.yG2(),e.E7m("hidden",t.editMode),e.yG2(3),e.E7m("hidden",!t.editMode),e.yG2(3),e.E7m("hidden",t.editMode),e.yG2(3),e.E7m("isOpen",t.isPopoverOpen),e.yG2(4),e.CI5("id","nameNPC",t.currentItemIndexNPC,""),e.yG2(),e.cNF(t.characterName),e.yG2(3),e.E7m("ngIf",t.characterImg)("ngIfElse",i),e.yG2(5),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",t.editMode),e.yG2(2),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",t.editMode),e.yG2(7),e.E7m("ngIf",!t.editMode),e.yG2(),e.E7m("ngIf",t.editMode)}}function ne(a,c){if(1&a&&e.wR5(0,"img",24),2&a){const i=e.GaO().$implicit;e.E7m("src",i.imageURL,e.K6U)}}function ae(a,c){1&a&&(e.I0R(0,"div",25),e.wR5(1,"img",26),e.C$Y())}function oe(a,c){if(1&a){const i=e.KQA();e.I0R(0,"ion-item-sliding")(1,"ion-item",19)(2,"ion-avatar",71),e.yuY(3,ne,1,1,"img",21)(4,ae,2,0,"ng-template",null,22,e.gJz),e.C$Y(),e.I0R(6,"ion-label",52),e.OEk(7),e.C$Y(),e.I0R(8,"ion-label"),e.OEk(9),e.C$Y(),e.I0R(10,"ion-icon",72),e.qCj("click",function(){const o=e.usT(i).index,r=e.GaO(2);return e.CGJ(r.addToDatabase(o))}),e.C$Y(),e.I0R(11,"ion-icon",73),e.qCj("click",function(){const o=e.usT(i).index,r=e.GaO(2);return e.CGJ(r.deleteShared(o))}),e.C$Y()()()}if(2&a){const i=c.$implicit,t=c.index,n=e.Gew(5);e.yG2(),e.E7m("button",!0),e.yG2(2),e.E7m("ngIf",i.imageURL)("ngIfElse",n),e.yG2(3),e.CI5("id","sharedNameNPC",t,""),e.yG2(),e.cNF(i.name),e.yG2(2),e.cNF(i.hometown)}}function ie(a,c){if(1&a){const i=e.KQA();e.I0R(0,"ion-content",27)(1,"h3",70),e.OEk(2,"Shared Characters"),e.C$Y(),e.I0R(3,"ion-list",12),e.yuY(4,oe,12,6,"ion-item-sliding",13),e.C$Y(),e.I0R(5,"ion-button",61),e.qCj("click",function(){e.usT(i);const n=e.GaO();return e.CGJ(n.cancelAlert())}),e.OEk(6,"Close"),e.C$Y()()}if(2&a){const i=e.GaO();e.yG2(3),e.E7m("inset",!0),e.yG2(),e.E7m("ngForOf",i.sharedNPCs)}}const re=[{path:"",component:(()=>{var a;class c{constructor(t,n,o,r){this.npcService=t,this.loadingController=n,this.alertController=o,this.formBuilder=r,this.searchItem="",this.selectedHometown="",this.chosenUser="",this.profile=null,this.npcs=null,this.sharedNPCs=null,this.users=null,this.filter=!0,this.editMode=!1,this.isPopoverOpen=!1,this.tempCharacterLink="",this.tempCharacterInfo="",this.npcService.getNPCs(this.searchItem,this.selectedHometown).subscribe(l=>{this.npcs=l}),this.npcService.getEmails().subscribe(l=>{this.users=l}),this.npcService.getShared().subscribe(l=>{this.sharedNPCs=l,this.sharedNPCCount=l.length})}ngOnInit(){this.createNPCForm=new k(this.formBuilder).createForm(),this.onWillDismiss(null)}search(t){this.npcService.getNPCs(t,this.selectedHometown).subscribe(n=>{this.npcs=n}),this.selectedHometown="",this.cancelSearch(),setTimeout(()=>{this.filter=!this.filter},300)}changeImage(t){var n=this;return(0,u.c)(function*(){const o=yield C.Ut.getPhoto({quality:90,allowEditing:!1,resultType:C.on.Base64,source:C._8.Photos});if(o){const r=yield n.loadingController.create();yield r.present();const l=yield n.npcService.uploadImage(o,t.name);r.dismiss(),l||(yield(yield n.alertController.create({header:"Upload failed",message:"There was a problem uploading your avatar.",buttons:["OK"]})).present())}})()}chooseImage(){var t=this;return(0,u.c)(function*(){t.photo=yield C.Ut.getPhoto({quality:90,allowEditing:!1,resultType:C.on.Base64,source:C._8.Photos})})()}createNPC(){var t=this;return(0,u.c)(function*(){const n=yield t.loadingController.create();yield n.present();const o=yield t.npcService.uploadNPC(t.createNPCForm.value.name,t.createNPCForm.value.hometown,null==t?void 0:t.photo);t.photo=null,n.dismiss(),o||(yield(yield t.alertController.create({header:"Upload failed",message:"There was a problem uploading your NPC.",buttons:["OK"]})).present()),t.cancelCreation()})()}toggleEditModeNPC(){this.editMode=!this.editMode}saveCharacterData(){var t=this;return(0,u.c)(function*(){const n=yield t.loadingController.create();yield n.present();const o=yield t.npcService.updateCharacter(t.characterHome,t.characterLink,t.characterInfo,t.characterName);n.dismiss(),o||(yield(yield t.alertController.create({header:"Upload failed",message:"There was a problem uploading your data.",buttons:["OK"]})).present()),t.toggleEditModeNPC()})()}delete(){var t=this;return(0,u.c)(function*(){yield(yield t.alertController.create({header:"Are you sure?",message:"Data will be deleted",buttons:[{text:"Delete",handler:()=>{t.npcService.deleteDocument(t.npc.name),t.cancelItem()}},{text:"Cancel",role:"cancel",handler:()=>{}}]})).present()})()}deleteShared(t){var n=this;return(0,u.c)(function*(){yield(yield n.alertController.create({header:"Are you sure?",message:"Data will be deleted",buttons:[{text:"Delete",handler:()=>{var r;const d=null===(r=document.getElementById("sharedNameNPC"+t))||void 0===r?void 0:r.textContent;n.npcService.deleteSharedDocument(d),n.cancelItem()}},{text:"Cancel",role:"cancel",handler:()=>{}}]})).present()})()}setIndex(t){var n=this;return(0,u.c)(function*(){n.characterName=t.name,n.characterHome=t.hometown,n.characterImg=t.imageURL,n.characterInfo=t.characterInfo,n.characterLink=t.characterLink,n.npc=t,n.isItemModalOpenNPC=!0})()}setSharedIndex(t){var n=this;return(0,u.c)(function*(){var o;const l=null===(o=document.getElementById("sharedNameNPC"+t))||void 0===o?void 0:o.textContent,d=yield n.npcService.getSharedCharacterData(l);console.log("Link: "+d.characterLink),n.characterName=d.name,n.characterHome=d.hometown,n.characterImg=d.imageURL,n.characterInfo=d.characterInfo,n.characterLink=d.characterLink})()}shareNPC(){var t=this;return(0,u.c)(function*(){const n=yield t.loadingController.create();yield n.present();const o=yield t.npcService.shareCharacter(t.chosenUser,t.characterName,t.characterHome,t.characterImg,t.characterLink,t.characterInfo);n.dismiss(),o||(yield(yield t.alertController.create({header:"Upload failed",message:"There was a problem uploading your data.",buttons:["OK"]})).present())})()}addToDatabase(t){var n=this;return(0,u.c)(function*(){var o;yield n.setSharedIndex(t);const r=yield n.npcService.uploadSharedNPC(n.characterName,n.characterHome,n.characterImg,n.characterLink,n.characterInfo);var l="sharedNameNPC"+t;const d=yield null===(o=document.getElementById(l))||void 0===o?void 0:o.textContent;r&&(yield n.npcService.deleteSharedDocument(d))})()}cancelCreation(){this.isCreationModalOpenNPC=!1,this.creationModalNPC.dismiss(null,"cancel")}cancelAlert(){this.isAlertModalOpenNPC=!1,this.alertModalNPC.dismiss(null,"cancel")}cancelSearch(){this.searchModalNPC.dismiss(null,"cancel")}cancelItem(){this.isItemModalOpenNPC=!1,this.itemModalNPC.dismiss(null,"cancel"),this.editMode&&this.toggleEditModeNPC()}openCreation(){this.isCreationModalOpenNPC=!0}openSearch(){this.isSearchModalOpenNPC=!0}openAlert(){this.isAlertModalOpenNPC=!0}onWillDismiss(t){this.isSearchModalOpenNPC=!1,this.isCreationModalOpenNPC=!1,this.isAlertModalOpenNPC=!1,this.isItemModalOpenNPC=!1}}return(a=c).\u0275fac=function(t){return new(t||a)(e.GI1(R),e.GI1(s.Kg),e.GI1(s.iW),e.GI1(f.im))},a.\u0275cmp=e.In1({type:a,selectors:[["app-tab1"]],viewQuery:function(t,n){if(1&t&&(e.CC$(E,5),e.CC$(x,5),e.CC$(M,5),e.CC$(Y,5)),2&t){let o;e.wto(o=e.Gqi())&&(n.creationModalNPC=o.first),e.wto(o=e.Gqi())&&(n.searchModalNPC=o.first),e.wto(o=e.Gqi())&&(n.itemModalNPC=o.first),e.wto(o=e.Gqi())&&(n.alertModalNPC=o.first)}},decls:31,vars:11,consts:[[3,"translucent"],["slot","start"],["slot","end","color","danger",1,"badge-position"],["slot","end","name","notifications-outline",2,"height","35px","width","35px",3,"click"],[3,"fullscreen"],["slot","fixed","vertical","bottom","horizontal","end"],["color","secondary",3,"click"],["name","add-outline"],["slot","fixed","vertical","bottom","horizontal","start",3,"hidden"],["name","search-outline"],["color","danger",3,"click"],["name","remove"],[3,"inset"],[4,"ngFor","ngForOf"],[3,"isOpen","willDismiss"],["creationModalNPC",""],["searchModalNPC",""],["itemModalNPC",""],["alertModalNPC",""],[3,"button"],["aria-hidden","true","slot","start",3,"click"],[3,"src",4,"ngIf","ngIfElse"],["placeholder_avatar",""],["name","chevron-forward-outline",3,"click"],[3,"src"],[1,"placeholder"],["src","https://ionicframework.com/docs/img/demos/avatar.svg"],[1,"ion-padding"],[1,"flex-center"],[3,"formGroup"],[3,"click"],[4,"ngIf","ngIfElse"],["formControlName","name","label","Name","labelPlacement","floating","placeholder","Enter name","type","text"],["color","danger",4,"ngIf"],["formControlName","hometown","label","Hometown","labelPlacement","floating","placeholder","Enter hometown","type","text"],["color","dark","form","round",3,"disabled","click"],["color","danger","fill","outline",3,"click"],["color","danger"],["show-clear-button","focus","value",""],["searchBar",""],["label","Choose hometown","name","selectedHometown",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["color","dark","form","round",3,"click"],[3,"value"],["slot","fixed","vertical","bottom","horizontal","end",3,"hidden"],["name","create-outline"],["color","success",3,"click"],["name","save-outline"],["slot","fixed","vertical","top","horizontal","end",3,"hidden"],["id","open-popover","color","secondary"],["name","share-social-outline"],["trigger","open-popover",3,"isOpen"],[3,"id"],["aria-hidden","true",1,"align-center"],["slot","start",4,"ngIf"],["slot","end","style","text-decoration: none; pointer-events: none;","href","",4,"ngIf"],["placeholder","Type character hometown","type","text",3,"ngModel","ngModelChange",4,"ngIf"],["slot","end","style","text-decoration: none;",3,"href",4,"ngIf"],["placeholder","Type character link","type","text",3,"ngModel","ngModelChange",4,"ngIf"],["class","readonlyTextarea","rows","7","cols","55","readonly","",4,"ngIf"],["placeholder","Type character info","rows","40","cols","55",3,"ngModel","ngModelChange",4,"ngIf"],["color","danger","form","round",3,"click"],["label","Choose user","name","chosenUser",3,"ngModel","ngModelChange"],["color","dark","fill","outline",3,"click"],["slot","end","href","",2,"text-decoration","none","pointer-events","none"],["placeholder","Type character hometown","type","text",3,"ngModel","ngModelChange"],["slot","end",2,"text-decoration","none",3,"href"],["placeholder","Type character link","type","text",3,"ngModel","ngModelChange"],["rows","7","cols","55","readonly","",1,"readonlyTextarea"],["placeholder","Type character info","rows","40","cols","55",3,"ngModel","ngModelChange"],[2,"display","flex","justify-content","center"],["aria-hidden","true","slot","start"],["slot","end","name","add-circle-outline",3,"click"],["slot","end","name","trash-outline",3,"click"]],template:function(t,n){1&t&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),e.OEk(3," Character Notes "),e.C$Y(),e.I0R(4,"ion-badge",2),e.OEk(5),e.C$Y(),e.I0R(6,"ion-icon",3),e.qCj("click",function(){return n.openAlert()}),e.C$Y()()(),e.I0R(7,"ion-content",4)(8,"ion-fab",5)(9,"ion-fab-button",6),e.qCj("click",function(){return n.openCreation()}),e.wR5(10,"ion-icon",7),e.C$Y()(),e.I0R(11,"ion-fab",8)(12,"ion-fab-button",6),e.qCj("click",function(){return n.openSearch()}),e.wR5(13,"ion-icon",9),e.C$Y()(),e.I0R(14,"ion-fab",8)(15,"ion-fab-button",10),e.qCj("click",function(){return n.search("")}),e.wR5(16,"ion-icon",11),e.C$Y()(),e.I0R(17,"ion-list",12),e.yuY(18,D,11,5,"ion-item-sliding",13),e.C$Y(),e.I0R(19,"ion-modal",14,15),e.qCj("willDismiss",function(r){return n.onWillDismiss(r)}),e.yuY(21,F,21,5,"ng-template"),e.C$Y(),e.I0R(22,"ion-modal",14,16),e.qCj("willDismiss",function(r){return n.onWillDismiss(r)}),e.yuY(24,L,18,2,"ng-template"),e.C$Y(),e.I0R(25,"ion-modal",14,17),e.qCj("willDismiss",function(r){return n.onWillDismiss(r)}),e.yuY(27,te,42,16,"ng-template"),e.C$Y(),e.I0R(28,"ion-modal",14,18),e.qCj("willDismiss",function(r){return n.onWillDismiss(r)}),e.yuY(30,ie,7,2,"ng-template"),e.C$Y()()),2&t&&(e.E7m("translucent",!0),e.yG2(5),e.cNF(n.sharedNPCCount),e.yG2(2),e.E7m("fullscreen",!0),e.yG2(4),e.E7m("hidden",!n.filter),e.yG2(3),e.E7m("hidden",n.filter),e.yG2(3),e.E7m("inset",!0),e.yG2(),e.E7m("ngForOf",n.npcs),e.yG2(),e.E7m("isOpen",n.isCreationModalOpenNPC),e.yG2(3),e.E7m("isOpen",n.isSearchModalOpenNPC),e.yG2(3),e.E7m("isOpen",n.isItemModalOpenNPC),e.yG2(3),e.E7m("isOpen",n.isAlertModalOpenNPC))},dependencies:[s.O7,s.Gi,s.sn,s.KC,s.Gg,s.YY,s.I7,s._i,s.q8,s.Wq,s.wB,s.Ko,s.A5,s.Yb,s.UB,s.QR,s.OC,s.KQ,s.Cy,s.gd,s.tM,s.Md,s.yc,s.sW,s.IT,s.qG,P.ay,P.u_,f.sz,f.ot,f.ue,f.u,f._G,f.SC,f.uW,f.Wo],styles:[".center[_ngcontent-%COMP%]{display:flex;justify-content:center}.readonlyTextarea[_ngcontent-%COMP%]{resize:none;width:100%;height:100%}"]}),c})()}];let ce=(()=>{var a;class c{}return(a=c).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[G.qQ.forChild(re),G.qQ]}),c})(),le=(()=>{var a;class c{}return(a=c).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[s.wZ,P.MD,f.y,O.C,ce,f.sl]}),c})()}}]);