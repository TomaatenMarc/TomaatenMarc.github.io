"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4644],{4644:(se,h,m)=>{m.r(h),m.d(h,{Tab3PageModule:()=>ie});var r=m(2112),p=m(1368),d=m(4716),C=m(4692),f=m(8244),u=m(1528),g=m(1740);class b{constructor(s){this.formBuilder=s}createForm(){return this.formBuilder.group({name:["",[d.AQ.required]],hometown:[""]})}}var e=m(4496),T=m(7231);const y=["creationModalQuest"],I=["searchModalQuest"],G=["itemModalQuest"],O=["alertModalQuest"];function k(a,s){if(1&a&&(e.I0R(0,"ion-select-option",23),e.OEk(1),e.C$Y()),2&a){const o=s.$implicit;e.E7m("value",o.email),e.yG2(),e.cNF(o.email)}}function E(a,s){if(1&a){const o=e.KQA();e.I0R(0,"h3"),e.OEk(1,"Share all quests"),e.C$Y(),e.I0R(2,"ion-select",20),e.iHE("ngModelChange",function(t){e.usT(o);const i=e.GaO();return e.kNx(i.chosenUsers,t)||(i.chosenUsers=t),e.CGJ(t)}),e.yuY(3,k,2,2,"ion-select-option",21),e.C$Y(),e.I0R(4,"ion-button",22),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.shareAllQuests())}),e.OEk(5,"Share all"),e.C$Y()}if(2&a){const o=e.GaO();e.yG2(2),e.E7m("multiple",!0),e.OKB("ngModel",o.chosenUsers),e.yG2(),e.E7m("ngForOf",o.users)}}function q(a,s){if(1&a&&e.wR5(0,"img",32),2&a){const o=e.GaO().$implicit;e._6D("alt",o.name),e.E7m("src",o.imageURL,e.K6U)}}function x(a,s){1&a&&(e.I0R(0,"div",33),e.wR5(1,"img",34),e.C$Y())}function R(a,s){if(1&a&&(e.I0R(0,"p",35),e.OEk(1),e.C$Y()),2&a){const o=e.GaO().$implicit;e.yG2(),e.cNF(o.noteInfo)}}function Q(a,s){if(1&a){const o=e.KQA();e.I0R(0,"ion-col",24)(1,"ion-card",25)(2,"ion-card-header")(3,"div",26),e.yuY(4,q,1,2,"img",27)(5,x,2,0,"ng-template",null,28,e.gJz),e.C$Y(),e.I0R(7,"ion-card-title"),e.OEk(8),e.C$Y(),e.I0R(9,"ion-card-subtitle"),e.OEk(10),e.C$Y()(),e.I0R(11,"ion-card-content"),e.yuY(12,R,2,1,"p",29),e.C$Y(),e.I0R(13,"ion-row")(14,"ion-col")(15,"ion-button",30),e.qCj("click",function(){const i=e.usT(o).$implicit,l=e.GaO();return e.CGJ(l.setIndexQuest(i))}),e.OEk(16," Details "),e.wR5(17,"ion-icon",31),e.C$Y()()()()()}if(2&a){const o=s.$implicit,n=s.index,t=e.Gew(6);e.yG2(),e.E7m("ngClass",n%2==0?"even-item":"odd-item"),e.yG2(3),e.E7m("ngIf",o.imageURL)("ngIfElse",t),e.yG2(4),e.cNF(o.name),e.yG2(2),e.cNF(o.hometown),e.yG2(2),e.E7m("ngIf",o.noteInfo)}}function Y(a,s){1&a&&(e.I0R(0,"p"),e.OEk(1,"Picture has been selected"),e.C$Y())}function M(a,s){1&a&&(e.I0R(0,"div",33)(1,"p"),e.OEk(2,"Choose a picture"),e.C$Y()())}function w(a,s){1&a&&(e.I0R(0,"ion-label",46),e.OEk(1,"Name is mandatory"),e.C$Y())}function P(a,s){if(1&a){const o=e.KQA();e.I0R(0,"ion-content",36)(1,"div",37)(2,"form",38)(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e.OEk(6,"Create quest note"),e.C$Y()(),e.I0R(7,"ion-card-content")(8,"ion-item",39),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.chooseImage())}),e.yuY(9,Y,2,0,"p",40)(10,M,3,0,"ng-template",null,28,e.gJz),e.C$Y(),e.I0R(12,"ion-item"),e.wR5(13,"ion-input",41),e.C$Y(),e.yuY(14,w,2,0,"ion-label",42),e.I0R(15,"ion-item"),e.wR5(16,"ion-input",43),e.C$Y(),e.I0R(17,"ion-button",44),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.createQuest())}),e.OEk(18,"Create quest"),e.C$Y(),e.I0R(19,"ion-button",45),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.cancelCreationQuest())}),e.OEk(20,"Close"),e.C$Y()()()()()()}if(2&a){const o=e.Gew(11),n=e.GaO();let t;e.yG2(2),e.E7m("formGroup",n.createQuestForm),e.yG2(7),e.E7m("ngIf",n.photo)("ngIfElse",o),e.yG2(5),e.E7m("ngIf",(null==(t=n.createQuestForm.get("name"))?null:t.touched)&&(null==(t=n.createQuestForm.get("name"))||null==t.errors?null:t.errors.required)),e.yG2(3),e.E7m("disabled",!n.createQuestForm.valid)}}function v(a,s){if(1&a&&(e.I0R(0,"ion-select-option",23),e.OEk(1),e.C$Y()),2&a){const o=s.$implicit;e.E7m("value",o),e.yG2(),e.cNF(o)}}function $(a,s){if(1&a){const o=e.KQA();e.I0R(0,"ion-content",36)(1,"div",37)(2,"form")(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e.OEk(6,"Search for a quest"),e.C$Y()(),e.I0R(7,"ion-card-content")(8,"ion-item"),e.wR5(9,"ion-searchbar",47,48),e.C$Y(),e.I0R(11,"ion-item")(12,"ion-select",49),e.iHE("ngModelChange",function(t){e.usT(o);const i=e.GaO();return e.kNx(i.selectedHometown,t)||(i.selectedHometown=t),e.CGJ(t)}),e.yuY(13,v,2,2,"ion-select-option",21),e.C$Y()(),e.I0R(14,"ion-button",50),e.qCj("click",function(){e.usT(o);const t=e.Gew(10),i=e.GaO();return e.CGJ(i.search(t.value))}),e.wR5(15,"ion-icon",51),e.OEk(16," Search "),e.C$Y(),e.I0R(17,"ion-button",52),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.sort("alphabetical"))}),e.wR5(18,"ion-icon",1),e.OEk(19," Sort A-Z "),e.C$Y(),e.I0R(20,"ion-button",52),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.sort("reverse-alphabetical"))}),e.wR5(21,"ion-icon",1),e.OEk(22," Sort Z-A "),e.C$Y(),e.I0R(23,"ion-button",8),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.sort("oldest"))}),e.wR5(24,"ion-icon",1),e.OEk(25," Sort by Oldest "),e.C$Y(),e.I0R(26,"ion-button",8),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.sort("newest"))}),e.wR5(27,"ion-icon",1),e.OEk(28," Sort by Newest "),e.C$Y(),e.I0R(29,"ion-button",45),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.cancelSearchQuest())}),e.wR5(30,"ion-icon",1),e.OEk(31," Close "),e.C$Y()()()()()()}if(2&a){const o=e.GaO();e.yG2(12),e.OKB("ngModel",o.selectedHometown),e.yG2(),e.E7m("ngForOf",o.hometowns)}}function S(a,s){if(1&a&&(e.I0R(0,"ion-select-option",23),e.OEk(1),e.C$Y()),2&a){const o=s.$implicit;e.E7m("value",o.email),e.yG2(),e.cNF(o.email)}}function N(a,s){if(1&a){const o=e.KQA();e.I0R(0,"h3"),e.OEk(1,"Share this quest"),e.C$Y(),e.I0R(2,"ion-select",20),e.iHE("ngModelChange",function(t){e.usT(o);const i=e.GaO(2);return e.kNx(i.chosenUsers,t)||(i.chosenUsers=t),e.CGJ(t)}),e.yuY(3,S,2,2,"ion-select-option",21),e.C$Y(),e.I0R(4,"ion-button",22),e.qCj("click",function(){e.usT(o);const t=e.GaO(2);return e.CGJ(t.shareQuest())}),e.OEk(5,"Share"),e.C$Y()}if(2&a){const o=e.GaO(2);e.yG2(2),e.E7m("multiple",!0),e.OKB("ngModel",o.chosenUsers),e.yG2(),e.E7m("ngForOf",o.users)}}function D(a,s){if(1&a&&(e.I0R(0,"ion-card-title",72),e.OEk(1),e.C$Y()),2&a){const o=e.GaO(2);e.CI5("id","nameQuest",o.currentItemIndexQuest,""),e.yG2(),e.cNF(o.questName)}}function A(a,s){if(1&a){const o=e.KQA();e.I0R(0,"ion-input",73),e.iHE("ngModelChange",function(t){e.usT(o);const i=e.GaO(2);return e.kNx(i.questName,t)||(i.questName=t),e.CGJ(t)}),e.C$Y()}if(2&a){const o=e.GaO(2);e.OKB("ngModel",o.questName)}}function F(a,s){if(1&a&&e.wR5(0,"img",32),2&a){const o=e.GaO(2);e._6D("alt",o.quest.name),e.E7m("src",o.quest.imageURL,e.K6U)}}function j(a,s){1&a&&(e.I0R(0,"div",33),e.wR5(1,"img",34),e.C$Y())}function J(a,s){1&a&&(e.I0R(0,"ion-label",1),e.OEk(1,"Note Type: "),e.C$Y())}function K(a,s){if(1&a&&(e.I0R(0,"a",74),e.OEk(1),e.C$Y()),2&a){const o=e.GaO(2);e.yG2(),e.cNF(o.questHome)}}function H(a,s){if(1&a){const o=e.KQA();e.I0R(0,"ion-input",75),e.iHE("ngModelChange",function(t){e.usT(o);const i=e.GaO(2);return e.kNx(i.questHome,t)||(i.questHome=t),e.CGJ(t)}),e.C$Y()}if(2&a){const o=e.GaO(2);e.OKB("ngModel",o.questHome)}}function U(a,s){1&a&&(e.I0R(0,"ion-label",1),e.OEk(1,"Link:"),e.C$Y())}function L(a,s){if(1&a&&(e.I0R(0,"a",77),e.OEk(1),e.C$Y()),2&a){const o=e.GaO(3);e._6D("href",o.questLink,e.K6U),e.yG2(),e.cNF(o.questName)}}function B(a,s){if(1&a&&(e.SAx(0),e.yuY(1,L,2,2,"a",76),e.k70()),2&a){const o=e.GaO(2);e.yG2(),e.E7m("ngIf",!o.editMode)}}function z(a,s){if(1&a){const o=e.KQA();e.I0R(0,"ion-input",78),e.iHE("ngModelChange",function(t){e.usT(o);const i=e.GaO(2);return e.kNx(i.questLink,t)||(i.questLink=t),e.CGJ(t)}),e.C$Y()}if(2&a){const o=e.GaO(2);e.OKB("ngModel",o.questLink)}}function W(a,s){if(1&a&&(e.I0R(0,"textarea",79),e.OEk(1),e.C$Y()),2&a){const o=e.GaO(2);e.yG2(),e.cNF(o.questInfo)}}function Z(a,s){if(1&a){const o=e.KQA();e.I0R(0,"textarea",80),e.iHE("ngModelChange",function(t){e.usT(o);const i=e.GaO(2);return e.kNx(i.questInfo,t)||(i.questInfo=t),e.CGJ(t)}),e.OEk(1),e.C$Y()}if(2&a){const o=e.GaO(2);e.OKB("ngModel",o.questInfo),e.yG2(),e.cNF(o.questInfo)}}function X(a,s){if(1&a){const o=e.KQA();e.I0R(0,"ion-content",36)(1,"ion-fab",53)(2,"ion-fab-button",8),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.toggleEditModeQuest())}),e.wR5(3,"ion-icon",54),e.C$Y()(),e.I0R(4,"ion-fab",53)(5,"ion-fab-button",55),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.saveQuestData())}),e.wR5(6,"ion-icon",56),e.C$Y()(),e.I0R(7,"ion-fab",57)(8,"ion-fab-button",58),e.wR5(9,"ion-icon",59),e.C$Y()(),e.I0R(10,"ion-popover",60),e.yuY(11,N,6,3,"ng-template"),e.C$Y(),e.I0R(12,"ion-card")(13,"ion-card-header"),e.yuY(14,D,2,2,"ion-card-title",61)(15,A,1,1,"ion-input",62),e.C$Y(),e.I0R(16,"ion-card-content")(17,"ion-item")(18,"div",63),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.changeImage(t.quest))}),e.yuY(19,F,1,2,"img",27)(20,j,2,0,"ng-template",null,28,e.gJz),e.C$Y()()(),e.I0R(22,"ion-card-content")(23,"ion-item"),e.yuY(24,J,2,0,"ion-label",64)(25,K,2,1,"a",65)(26,H,1,1,"ion-input",66),e.C$Y(),e.I0R(27,"ion-item"),e.yuY(28,U,2,0,"ion-label",64)(29,B,2,1,"ng-container",67)(30,z,1,1,"ion-input",68),e.C$Y()()(),e.I0R(31,"ion-card")(32,"ion-card-header")(33,"ion-card-title"),e.OEk(34,"Additional Infos"),e.C$Y()(),e.I0R(35,"ion-card-content")(36,"ion-item"),e.yuY(37,W,2,1,"textarea",69)(38,Z,2,2,"textarea",70),e.C$Y()()(),e.I0R(39,"ion-button",45),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.cancelItemQuest())}),e.OEk(40,"Close"),e.C$Y(),e.I0R(41,"ion-button",71),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.delete())}),e.OEk(42,"Delete"),e.C$Y()()}if(2&a){const o=e.Gew(21),n=e.GaO();e.yG2(),e.E7m("hidden",n.editMode),e.yG2(3),e.E7m("hidden",!n.editMode),e.yG2(3),e.E7m("hidden",n.editMode),e.yG2(3),e.E7m("isOpen",n.isPopoverOpen),e.yG2(4),e.E7m("ngIf",!n.editMode),e.yG2(),e.E7m("ngIf",n.editMode),e.yG2(4),e.E7m("ngIf",n.quest.imageURL)("ngIfElse",o),e.yG2(5),e.E7m("ngIf",!n.editMode),e.yG2(),e.E7m("ngIf",!n.editMode),e.yG2(),e.E7m("ngIf",n.editMode),e.yG2(2),e.E7m("ngIf",!n.editMode),e.yG2(),e.E7m("ngIf",n.questLink),e.yG2(),e.E7m("ngIf",n.editMode),e.yG2(7),e.E7m("ngIf",!n.editMode),e.yG2(),e.E7m("ngIf",n.editMode)}}function V(a,s){if(1&a&&e.wR5(0,"img",92),2&a){const o=e.GaO().$implicit;e.E7m("src",o.imageURL,e.K6U)}}function ee(a,s){1&a&&(e.I0R(0,"div",33),e.wR5(1,"img",93),e.C$Y())}function te(a,s){if(1&a){const o=e.KQA();e.I0R(0,"ion-item-sliding")(1,"ion-item",86)(2,"ion-avatar",87),e.yuY(3,V,1,1,"img",88)(4,ee,2,0,"ng-template",null,28,e.gJz),e.C$Y(),e.I0R(6,"ion-label",89),e.OEk(7),e.C$Y(),e.I0R(8,"ion-label"),e.OEk(9),e.C$Y(),e.I0R(10,"ion-label"),e.OEk(11),e.C$Y(),e.I0R(12,"ion-icon",90),e.qCj("click",function(){const i=e.usT(o).index,l=e.GaO(2);return e.CGJ(l.addToDatabase(i))}),e.C$Y(),e.I0R(13,"ion-icon",91),e.qCj("click",function(){const i=e.usT(o).index,l=e.GaO(2);return e.CGJ(l.deleteShared(i))}),e.C$Y()()()}if(2&a){const o=s.$implicit,n=s.index,t=e.Gew(5);e.yG2(),e.E7m("button",!0)("ngClass",n%2==0?"even-item":"odd-item"),e.yG2(2),e.E7m("ngIf",o.imageURL)("ngIfElse",t),e.yG2(3),e.CI5("id","QuestId",n,""),e.yG2(),e.cNF(o.id),e.yG2(2),e.cNF(o.name),e.yG2(2),e.cNF(o.hometown)}}function ne(a,s){if(1&a){const o=e.KQA();e.I0R(0,"ion-content",36)(1,"h3",81),e.OEk(2,"Shared Notes"),e.C$Y(),e.I0R(3,"ion-button",82),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.addAllToDatabase())}),e.OEk(4,"Accept all"),e.C$Y(),e.I0R(5,"ion-button",71),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.dismissAllShared())}),e.OEk(6,"Dismiss all"),e.C$Y(),e.I0R(7,"ion-button",83),e.qCj("click",function(){e.usT(o);const t=e.GaO();return e.CGJ(t.cancelAlertQuest())}),e.OEk(8,"Close"),e.C$Y(),e.I0R(9,"ion-list",84),e.yuY(10,te,14,8,"ion-item-sliding",85),e.C$Y()()}if(2&a){const o=e.GaO();e.yG2(9),e.E7m("inset",!0),e.yG2(),e.E7m("ngForOf",o.sharedQuests)}}const oe=[{path:"",component:(()=>{var a;class s{constructor(n,t,i,l){this.databaseService=n,this.loadingController=t,this.alertController=i,this.formBuilder=l,this.searchItem="",this.selectedHometown="",this.chosenUsers=null,this.profile=null,this.quests=null,this.allQuests=null,this.sharedQuests=null,this.users=null,this.filter=!0,this.editMode=!1,this.isPopoverOpen=!1,this.noteType="quests",this.currentGame=localStorage.getItem("currentGame"),this.databaseService.getNotes(this.searchItem,this.selectedHometown,this.currentGame,this.noteType).subscribe(c=>{this.quests=c,this.hometowns=this.uniqueHometowns}),this.databaseService.getEmails(this.currentGame).subscribe(c=>{this.users=c}),this.databaseService.getShared(this.currentGame,this.noteType).subscribe(c=>{this.sharedQuests=c,this.sharedQuestsCount=c.length})}ngOnInit(){this.createQuestForm=new b(this.formBuilder).createForm(),this.onWillDismiss(null)}get uniqueHometowns(){if(!this.quests)return[];const n=new Set;return this.quests.forEach(t=>n.add(t.hometown)),Array.from(n)}search(n){this.allQuests=this.quests,this.selectedHometown=this.selectedHometown.trim(),n=n.trim().toLowerCase(),this.quests=this.allQuests.filter(t=>{const i=t.name.toLowerCase();return(!n||i.includes(n))&&(!this.selectedHometown||t.hometown===this.selectedHometown)}),this.cancelSearchQuest(),setTimeout(()=>{this.filter=!this.filter},300)}resetQuests(){this.quests=[...this.allQuests],this.selectedHometown="",setTimeout(()=>{this.filter=!this.filter},300)}sort(n){if(this.quests)switch(n){case"alphabetical":this.quests.sort((t,i)=>t.name.localeCompare(i.name));break;case"reverse-alphabetical":this.quests.sort((t,i)=>i.name.localeCompare(t.name));break;case"oldest":this.quests.sort((t,i)=>t.id.localeCompare(i.id));break;case"newest":this.quests.sort((t,i)=>i.id.localeCompare(t.id));break;default:console.warn("Unknown sorting algorithm:",n)}}changeImage(n){var t=this;return(0,u.c)(function*(){const i=yield g.Ut.getPhoto({quality:90,allowEditing:!1,resultType:g.on.Base64,source:g._8.Photos});if(i){const l=yield t.loadingController.create();yield l.present();const c=yield t.databaseService.uploadImage(i,n.id,n.name,t.currentGame,t.noteType);l.dismiss(),c||(yield(yield t.alertController.create({header:"Upload failed",message:"There was a problem uploading your avatar.",buttons:["OK"]})).present())}})()}chooseImage(){var n=this;return(0,u.c)(function*(){n.photo=yield g.Ut.getPhoto({quality:90,allowEditing:!1,resultType:g.on.Base64,source:g._8.Photos})})()}createQuest(){var n=this;return(0,u.c)(function*(){const t=yield n.loadingController.create();yield t.present();const l=(new Date).toISOString(),c=yield n.databaseService.uploadNote(n.createQuestForm.value.name,n.createQuestForm.value.hometown,null==n?void 0:n.photo,n.currentGame,n.noteType,l);n.photo=null,n.createQuestForm.reset(),t.dismiss(),c||(yield(yield n.alertController.create({header:"Upload failed",message:"There was a problem uploading your Quest.",buttons:["OK"]})).present()),n.cancelCreationQuest()})()}toggleEditModeQuest(){this.editMode=!this.editMode}saveQuestData(){var n=this;return(0,u.c)(function*(){const t=yield n.loadingController.create();yield t.present();const i=yield n.databaseService.updateNote(n.questHome,n.questLink,n.questInfo,n.questName,n.currentGame,n.noteType,n.questId);t.dismiss(),i||(yield(yield n.alertController.create({header:"Upload failed",message:"There was a problem uploading your data.",buttons:["OK"]})).present()),n.toggleEditModeQuest()})()}delete(){var n=this;return(0,u.c)(function*(){yield(yield n.alertController.create({header:"Are you sure?",message:"Data will be deleted",buttons:[{text:"Delete",handler:()=>{n.databaseService.deleteDocument(n.quest.id,n.currentGame,n.noteType),n.cancelItemQuest()}},{text:"Cancel",role:"cancel",handler:()=>{}}]})).present()})()}deleteShared(n){var t=this;return(0,u.c)(function*(){yield(yield t.alertController.create({header:"Are you sure?",message:"Data will be deleted",buttons:[{text:"Dismiss",handler:()=>{var l;const _=null===(l=document.getElementById("QuestId"+n))||void 0===l?void 0:l.textContent;t.databaseService.deleteSharedDocument(_,t.currentGame,t.noteType),t.cancelItemQuest()}},{text:"Cancel",role:"cancel",handler:()=>{}}]})).present()})()}setIndexQuest(n){var t=this;return(0,u.c)(function*(){t.questName=n.name,t.questHome=n.hometown,t.questImg=n.imageURL,t.questInfo=n.noteInfo,t.questLink=n.noteLink,t.questId=n.id,t.quest=n,t.isItemModalOpenQuest=!0})()}setSharedIndex(n){var t=this;return(0,u.c)(function*(){var i;const c=null===(i=document.getElementById("QuestId"+n))||void 0===i?void 0:i.textContent,_=yield t.databaseService.getSharedNoteData(c,t.currentGame,t.noteType);console.log("Link: "+_.questLink),t.questName=_.name,t.questHome=_.hometown,t.questImg=_.imageURL,t.questInfo=_.noteInfo,t.questLink=_.noteLink,t.questId=_.id})()}shareQuest(){var n=this;return(0,u.c)(function*(){const t=yield n.loadingController.create();try{yield t.present(),n.chosenUsers.forEach(function(){var i=(0,u.c)(function*(l){l&&console.log(l),yield n.databaseService.shareNote(l,n.questName,n.questHome,n.questImg,n.questLink,n.questInfo,n.currentGame,n.noteType,n.questId)});return function(l){return i.apply(this,arguments)}}()),t.dismiss()}catch{yield(yield n.alertController.create({header:"Upload failed",message:"There was a problem uploading your data.",buttons:["OK"]})).present()}})()}addToDatabase(n){var t=this;return(0,u.c)(function*(){var i;yield t.setSharedIndex(n);const l=yield t.databaseService.uploadSharedNote(t.questName,t.questHome,t.questImg,t.questLink,t.questInfo,t.currentGame,t.noteType,t.questId);var c="QuestId"+n;const _=yield null===(i=document.getElementById(c))||void 0===i?void 0:i.textContent;l&&(yield t.databaseService.deleteSharedDocument(_,t.currentGame,t.noteType))})()}addAllToDatabase(){var n=this;return(0,u.c)(function*(){(yield n.databaseService.uploadAllSharedNotes(n.sharedQuests,n.currentGame,n.noteType))&&(yield n.databaseService.deleteAllSharedDocuments(n.currentGame,n.noteType))})()}dismissAllShared(){var n=this;return(0,u.c)(function*(){n.sharedQuestsCount>0&&(yield(yield n.alertController.create({header:"Are you sure?",message:"Data will be deleted",buttons:[{text:"Dismiss",handler:()=>{n.databaseService.deleteAllSharedDocuments(n.currentGame,n.noteType),n.cancelItemQuest()}},{text:"Cancel",role:"cancel",handler:()=>{}}]})).present())})()}shareAllQuests(){var n=this;return(0,u.c)(function*(){const t=yield n.loadingController.create();yield t.present();try{n.chosenUsers.forEach(function(){var i=(0,u.c)(function*(l){l&&(yield n.databaseService.shareAllNotes(l,n.quests,n.currentGame,n.noteType))});return function(l){return i.apply(this,arguments)}}())}catch{yield(yield n.alertController.create({header:"Couldn't share",message:"There was a problem sharing your data.",buttons:["OK"]})).present()}t.dismiss()})()}cancelCreationQuest(){this.isCreationModalOpenQuest=!1,this.creationModalQuest.dismiss(null,"cancel")}cancelAlertQuest(){this.isAlertModalOpenQuest=!1,this.alertModalQuest.dismiss(null,"cancel")}cancelSearchQuest(){this.isSearchModalOpenQuest=!1,this.searchModalQuest.dismiss(null,"cancel")}cancelItemQuest(){this.itemModalQuest.dismiss(null,"cancel"),this.isItemModalOpenQuest=!1,this.editMode&&this.toggleEditModeQuest()}openAlert(){this.isAlertModalOpenQuest=!0}openCreation(){this.isCreationModalOpenQuest=!0}openSearch(){this.isSearchModalOpenQuest=!0}onWillDismiss(n){this.isAlertModalOpenQuest=!1,this.isCreationModalOpenQuest=!1,this.isItemModalOpenQuest=!1,this.isSearchModalOpenQuest=!1}}return(a=s).\u0275fac=function(n){return new(n||a)(e.GI1(T.C),e.GI1(r.Kg),e.GI1(r.iW),e.GI1(d.im))},a.\u0275cmp=e.In1({type:a,selectors:[["app-tab3"]],viewQuery:function(n,t){if(1&n&&(e.CC$(y,5),e.CC$(I,5),e.CC$(G,5),e.CC$(O,5)),2&n){let i;e.wto(i=e.Gqi())&&(t.creationModalQuest=i.first),e.wto(i=e.Gqi())&&(t.searchModalQuest=i.first),e.wto(i=e.Gqi())&&(t.itemModalQuest=i.first),e.wto(i=e.Gqi())&&(t.alertModalQuest=i.first)}},decls:35,vars:11,consts:[[3,"translucent"],["slot","start"],["slot","end","color","danger",1,"badge-position"],["slot","end","id","open-shareAllquests","name","share-social-outline",2,"height","35px","width","35px"],["slot","end","name","notifications-outline",2,"height","35px","width","35px",3,"click"],["trigger","open-shareAllquests",3,"isOpen"],[3,"fullscreen"],["slot","fixed","vertical","bottom","horizontal","end"],["color","secondary",3,"click"],["name","add-outline"],["slot","fixed","vertical","bottom","horizontal","start",3,"hidden"],["name","search-outline"],["color","danger",3,"click"],["name","remove"],["size","12","size-md","6","size-lg","4",4,"ngFor","ngForOf"],[3,"isOpen","willDismiss"],["creationModalQuest",""],["searchModalQuest",""],["itemModalQuest",""],["alertModalQuest",""],["label","Choose a user","name","chosenUsers",3,"multiple","ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["color","dark","fill","outline",3,"click"],[3,"value"],["size","12","size-md","6","size-lg","4"],[3,"ngClass"],[1,"image-container"],[3,"src","alt",4,"ngIf","ngIfElse"],["placeholder_avatar",""],["class","truncate-text",4,"ngIf"],["expand","block","color","primary",3,"click"],["slot","end","name","chevron-forward-outline"],[3,"src","alt"],[1,"placeholder"],["src","https://ionicframework.com/docs/img/demos/avatar.svg","alt","Placeholder"],[1,"truncate-text"],[1,"ion-padding"],[1,"flex-center"],[3,"formGroup"],[3,"click"],[4,"ngIf","ngIfElse"],["formControlName","name","label","Name","labelPlacement","floating","placeholder","Enter name","type","text"],["color","danger",4,"ngIf"],["formControlName","hometown","label","Type","labelPlacement","floating","placeholder","Enter location","type","text"],["color","dark","form","round",3,"disabled","click"],["color","danger","fill","outline",3,"click"],["color","danger"],["show-clear-button","focus","value",""],["searchBar",""],["label","Select a note type","name","selectedHometown",3,"ngModel","ngModelChange"],["color","dark","form","round",3,"click"],["slot","start","name","search-outline"],["color","primary",3,"click"],["slot","fixed","vertical","bottom","horizontal","end",3,"hidden"],["name","create-outline"],["color","success",3,"click"],["name","save-outline"],["slot","fixed","vertical","top","horizontal","end",3,"hidden"],["id","open-popover-quest","color","secondary"],["name","share-social-outline"],["trigger","open-popover-quest",3,"isOpen"],[3,"id",4,"ngIf"],["placeholder","Type the quests name","type","text",3,"ngModel","ngModelChange",4,"ngIf"],[1,"image-container",3,"click"],["slot","start",4,"ngIf"],["slot","end","style","text-decoration: none; pointer-events: none;","href","",4,"ngIf"],["placeholder","Type quest location","type","text",3,"ngModel","ngModelChange",4,"ngIf"],[4,"ngIf"],["placeholder","Type quest link","type","text",3,"ngModel","ngModelChange",4,"ngIf"],["style","resize: none; width: 100%; height: 100%;","rows","7","cols","55","readonly","",4,"ngIf"],["placeholder","Type quest info","rows","40","cols","55",3,"ngModel","ngModelChange",4,"ngIf"],["color","danger","form","round",3,"click"],[3,"id"],["placeholder","Type the quests name","type","text",3,"ngModel","ngModelChange"],["slot","end","href","",2,"text-decoration","none","pointer-events","none"],["placeholder","Type quest location","type","text",3,"ngModel","ngModelChange"],["slot","end","style","text-decoration: none;",3,"href",4,"ngIf"],["slot","end",2,"text-decoration","none",3,"href"],["placeholder","Type quest link","type","text",3,"ngModel","ngModelChange"],["rows","7","cols","55","readonly","",2,"resize","none","width","100%","height","100%"],["placeholder","Type quest info","rows","40","cols","55",3,"ngModel","ngModelChange"],[2,"display","flex","justify-content","center"],["color","success","form","round",3,"click"],["color","secondary","form","round",3,"click"],[3,"inset"],[4,"ngFor","ngForOf"],[3,"button","ngClass"],["aria-hidden","true","slot","start"],[3,"src",4,"ngIf","ngIfElse"],[2,"display","none",3,"id"],["slot","end","name","add-circle-outline",3,"click"],["slot","end","name","trash-outline",3,"click"],[3,"src"],["src","https://ionicframework.com/docs/img/demos/avatar.svg"]],template:function(n,t){1&n&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),e.OEk(3," Other Notes "),e.C$Y(),e.I0R(4,"ion-badge",2),e.OEk(5),e.C$Y(),e.wR5(6,"ion-icon",3),e.I0R(7,"ion-icon",4),e.qCj("click",function(){return t.openAlert()}),e.C$Y(),e.I0R(8,"ion-popover",5),e.yuY(9,E,6,3,"ng-template"),e.C$Y()()(),e.I0R(10,"ion-content",6)(11,"ion-fab",7)(12,"ion-fab-button",8),e.qCj("click",function(){return t.openCreation()}),e.wR5(13,"ion-icon",9),e.C$Y()(),e.I0R(14,"ion-fab",10)(15,"ion-fab-button",8),e.qCj("click",function(){return t.openSearch()}),e.wR5(16,"ion-icon",11),e.C$Y()(),e.I0R(17,"ion-fab",10)(18,"ion-fab-button",12),e.qCj("click",function(){return t.resetQuests()}),e.wR5(19,"ion-icon",13),e.C$Y()(),e.I0R(20,"ion-grid")(21,"ion-row"),e.yuY(22,Q,18,6,"ion-col",14),e.C$Y()(),e.I0R(23,"ion-modal",15,16),e.qCj("willDismiss",function(l){return t.onWillDismiss(l)}),e.yuY(25,P,21,5,"ng-template"),e.C$Y(),e.I0R(26,"ion-modal",15,17),e.qCj("willDismiss",function(l){return t.onWillDismiss(l)}),e.yuY(28,$,32,2,"ng-template"),e.C$Y(),e.I0R(29,"ion-modal",15,18),e.qCj("willDismiss",function(l){return t.onWillDismiss(l)}),e.yuY(31,X,43,16,"ng-template"),e.C$Y(),e.I0R(32,"ion-modal",15,19),e.qCj("willDismiss",function(l){return t.onWillDismiss(l)}),e.yuY(34,ne,11,2,"ng-template"),e.C$Y()()),2&n&&(e.E7m("translucent",!0),e.yG2(5),e.cNF(t.sharedQuestsCount),e.yG2(3),e.E7m("isOpen",t.isPopoverOpen),e.yG2(2),e.E7m("fullscreen",!0),e.yG2(4),e.E7m("hidden",!t.filter),e.yG2(3),e.E7m("hidden",t.filter),e.yG2(5),e.E7m("ngForOf",t.quests),e.yG2(),e.E7m("isOpen",t.isCreationModalOpenQuest),e.yG2(3),e.E7m("isOpen",t.isSearchModalOpenQuest),e.yG2(3),e.E7m("isOpen",t.isItemModalOpenQuest),e.yG2(3),e.E7m("isOpen",t.isAlertModalOpenQuest))},dependencies:[r.O7,r.Gi,r.sn,r.KC,r.Gg,r.YY,r.MN,r.I7,r.Kk,r._i,r.q8,r.Wq,r.YP,r.wB,r.Ko,r.A5,r.Yb,r.UB,r.QR,r.OC,r.qo,r.KQ,r.Cy,r.gd,r.tM,r.Md,r.yc,r.sW,r.IT,r.qG,p.QF,p.ay,p.u_,d.sz,d.ot,d.ue,d.u,d._G,d.SC,d.uW,d.Wo]}),s})()}];let ae=(()=>{var a;class s{}return(a=s).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[f.qQ.forChild(oe),f.qQ]}),s})(),ie=(()=>{var a;class s{}return(a=s).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[r.wZ,p.MD,d.y,C.C,ae,d.sl]}),s})()}}]);