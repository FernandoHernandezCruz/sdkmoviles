"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9926],{9926:(L,f,c)=>{c.r(f),c.d(f,{DetailCrewModule:()=>G});var d=c(6814),C=c(95),o=c(878),m=c(9481),T=c(5861),e=c(6689),M=c(5472);let U=(()=>{var i;class l{constructor(a){this.modalCtrl=a}cancel(){return this.modalCtrl.dismiss(null,"cancel")}confirm(){return this.modalCtrl.dismiss(this.name,"confirm")}}return(i=l).\u0275fac=function(a){return new(a||i)(e.Y36(o.IN))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-modal-comment"]],decls:27,vars:2,consts:[["slot","start"],["color","medium",3,"click"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["aria-label","Success toggle","color","success",3,"checked"],[1,"ion-text-wrap"],["position","floating"],["size","12"],["expand","full",1,"large-btn"]],template:function(a,n){1&a&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.NdJ("click",function(){return n.cancel()}),e._uU(4,"Cancel"),e.qZA()(),e.TgZ(5,"ion-title"),e._uU(6,"Comments"),e.qZA(),e.TgZ(7,"ion-buttons",2)(8,"ion-button",3),e.NdJ("click",function(){return n.confirm()}),e._uU(9,"Confirm"),e.qZA()()()(),e.TgZ(10,"ion-content",4)(11,"ion-list")(12,"ion-item")(13,"ion-toggle",5),e._uU(14,"Verify Airworthiness card"),e._UZ(15,"br"),e.TgZ(16,"ion-note",6),e._uU(17,"Make sure to check the document before checking in"),e.qZA()()(),e.TgZ(18,"ion-item")(19,"ion-label",7),e._uU(20,"Comments"),e.qZA(),e._UZ(21,"ion-textarea"),e.qZA(),e.TgZ(22,"ion-row")(23,"ion-col",8)(24,"ion-item")(25,"ion-button",9),e._uU(26,"Verify"),e.qZA()()()()()()),2&a&&(e.xp6(8),e.Q6J("strong",!0),e.xp6(5),e.Q6J("checked",!0))},dependencies:[o.YG,o.Sm,o.wI,o.W2,o.Gu,o.Ie,o.Q$,o.q_,o.uN,o.Nd,o.g2,o.wd,o.ho,o.sr,o.w,o.j9],styles:[".generic-title[_ngcontent-%COMP%]{--color: var(--ion-color-step-850, #262626);margin:5px;padding:0;font-size:20px;font-weight:500;line-height:1.2}.label-operation-title[_ngcontent-%COMP%]{margin-left:25px}.large-icon[_ngcontent-%COMP%]{font-size:50px}.block[_ngcontent-%COMP%]{width:100%;height:300px;display:flex;align-items:center;justify-content:center}ion-modal[_ngcontent-%COMP%]{--height: auto}.large-btn[_ngcontent-%COMP%]{font-size:20px;height:auto;width:100%;line-height:60px;padding-left:20px;padding-right:20px}.dot[_ngcontent-%COMP%]{display:block;height:12px;width:12px;border-radius:50%}.dot-unread[_ngcontent-%COMP%]{background:var(--ion-color-primary)}"]}),l})();var A=c(553),q=c(5078),y=c(9862),k=c(9894);function D(i,l){if(1&i&&(e.ynx(0),e.TgZ(1,"ion-thumbnail",1)(2,"a",24),e._UZ(3,"ion-img",25),e.qZA()(),e.BQk()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("href",t.appUrl+(null==t.crew?null:t.crew.crew_pass_img),e.LSH),e.xp6(1),e.Q6J("src",t.appUrl+(null==t.crew?null:t.crew.crew_pass_img))}}function S(i,l){1&i&&(e.TgZ(0,"ion-thumbnail",1),e._UZ(1,"ion-img",26),e.qZA())}function J(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-list")(1,"ion-item")(2,"ion-toggle",27),e.NdJ("ionChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.checkboxChanged(n,"crew_pass_sta"))}),e._uU(3),e._UZ(4,"br"),e.TgZ(5,"ion-note",7),e._uU(6),e.qZA()()(),e.TgZ(7,"ion-item")(8,"ion-label",28),e._uU(9),e.qZA(),e.TgZ(10,"ion-textarea",29),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.crew.passport_image_crew_comments=n)}),e.qZA()(),e.TgZ(11,"ion-row")(12,"ion-col",14)(13,"ion-item")(14,"ion-button",30),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.sendVerify("crew_pass"))}),e._uU(15),e.qZA()()()()()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("checked",!0)("checked",1===(null==t.crew?null:t.crew.passport_image_crew_status)),e.xp6(1),e.AsE("",t.translationService.getTranslation("verify")," ",t.translationService.getTranslation("passport"),""),e.xp6(3),e.Oqu(t.translationService.getTranslation("make")),e.xp6(3),e.Oqu(t.translationService.getTranslation("comments")),e.xp6(1),e.Q6J("ngModel",t.crew.passport_image_crew_comments),e.xp6(5),e.Oqu(t.translationService.getTranslation("verify"))}}function O(i,l){if(1&i&&(e.ynx(0),e.TgZ(1,"ion-thumbnail",1)(2,"a",24),e._UZ(3,"ion-img",25),e.qZA()(),e.BQk()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("href",t.appUrl+(null==t.crew?null:t.crew.crew_visa_img),e.LSH),e.xp6(1),e.Q6J("src",t.appUrl+(null==t.crew?null:t.crew.crew_visa_img))}}function N(i,l){1&i&&(e.TgZ(0,"ion-thumbnail",1),e._UZ(1,"ion-img",26),e.qZA())}function Q(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-list")(1,"ion-item")(2,"ion-toggle",27),e.NdJ("ionChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.checkboxChanged(n,"crew_visa_sta"))}),e._uU(3),e._UZ(4,"br"),e.TgZ(5,"ion-note",7),e._uU(6),e.qZA()()(),e.TgZ(7,"ion-item")(8,"ion-label",28),e._uU(9),e.qZA(),e.TgZ(10,"ion-textarea",29),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.crew.visa_image_crew_comments=n)}),e.qZA()(),e.TgZ(11,"ion-row")(12,"ion-col",14)(13,"ion-item")(14,"ion-button",30),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.sendVerify("crew_visa"))}),e._uU(15),e.qZA()()()()()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("checked",!0)("checked",1===(null==t.crew?null:t.crew.visa_image_crew_status)),e.xp6(1),e.hij("",t.translationService.getTranslation("verify")," Visa"),e.xp6(3),e.Oqu(t.translationService.getTranslation("make")),e.xp6(3),e.Oqu(t.translationService.getTranslation("comments")),e.xp6(1),e.Q6J("ngModel",t.crew.visa_image_crew_comments),e.xp6(5),e.Oqu(t.translationService.getTranslation("verify"))}}function H(i,l){if(1&i&&(e.ynx(0),e.TgZ(1,"ion-thumbnail",1)(2,"a",24),e._UZ(3,"ion-img",25),e.qZA()(),e.BQk()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("href",t.appUrl+(null==t.crew?null:t.crew.crew_lice_img),e.LSH),e.xp6(1),e.Q6J("src",t.appUrl+(null==t.crew?null:t.crew.crew_lice_img))}}function I(i,l){1&i&&(e.TgZ(0,"ion-thumbnail",1),e._UZ(1,"ion-img",26),e.qZA())}function B(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-list")(1,"ion-item")(2,"ion-toggle",27),e.NdJ("ionChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.checkboxChanged(n,"crew_license_sta"))}),e._uU(3),e._UZ(4,"br"),e.TgZ(5,"ion-note",7),e._uU(6),e.qZA()()(),e.TgZ(7,"ion-item")(8,"ion-label",28),e._uU(9),e.qZA(),e.TgZ(10,"ion-textarea",29),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.crew.license_image_crew_comments=n)}),e.qZA()(),e.TgZ(11,"ion-row")(12,"ion-col",14)(13,"ion-item")(14,"ion-button",30),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.sendVerify("crew_license"))}),e._uU(15),e.qZA()()()()()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("checked",!0)("checked",1===(null==t.crew?null:t.crew.license_image_crew_status)),e.xp6(1),e.AsE("",t.translationService.getTranslation("verify")," ",t.translationService.getTranslation("license"),""),e.xp6(3),e.Oqu(t.translationService.getTranslation("make")),e.xp6(3),e.Oqu(t.translationService.getTranslation("comments")),e.xp6(1),e.Q6J("ngModel",t.crew.license_image_crew_comments),e.xp6(5),e.Oqu(t.translationService.getTranslation("verify"))}}function K(i,l){if(1&i&&(e.ynx(0),e.TgZ(1,"ion-thumbnail",1)(2,"a",24),e._UZ(3,"ion-img",25),e.qZA()(),e.BQk()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("href",t.appUrl+(null==t.crew?null:t.crew.crew_medi_img),e.LSH),e.xp6(1),e.Q6J("src",t.appUrl+(null==t.crew?null:t.crew.crew_medi_img))}}function Y(i,l){1&i&&(e.TgZ(0,"ion-thumbnail",1),e._UZ(1,"ion-img",26),e.qZA())}function z(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-list")(1,"ion-item")(2,"ion-toggle",27),e.NdJ("ionChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.checkboxChanged(n,"crew_medical_exam_sta"))}),e._uU(3),e._UZ(4,"br"),e.TgZ(5,"ion-note",7),e._uU(6),e.qZA()()(),e.TgZ(7,"ion-item")(8,"ion-label",28),e._uU(9),e.qZA(),e.TgZ(10,"ion-textarea",29),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.crew.medical_exam_image_crew_comments=n)}),e.qZA()(),e.TgZ(11,"ion-row")(12,"ion-col",14)(13,"ion-item")(14,"ion-button",30),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.sendVerify("crew_medical_exam"))}),e._uU(15),e.qZA()()()()()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("checked",!0)("checked",1===(null==t.crew?null:t.crew.medical_exam_image_crew_status)),e.xp6(1),e.AsE("",t.translationService.getTranslation("verify")," ",t.translationService.getTranslation("medical"),""),e.xp6(3),e.Oqu(t.translationService.getTranslation("make")),e.xp6(3),e.Oqu(t.translationService.getTranslation("comments")),e.xp6(1),e.Q6J("ngModel",t.crew.medical_exam_image_crew_comments),e.xp6(5),e.Oqu(t.translationService.getTranslation("verify"))}}const w=function(){return[0,1]},P=[{path:"",component:(()=>{var i;class l{constructor(a,n,r,h,g,x){this.route=a,this.sharedDataService=n,this.modalController=r,this.loadingController=h,this.http=g,this.translationService=x,this.activatedRoute=(0,e.f3M)(m.gz),this.platform=(0,e.f3M)(M.t4),this.appUrl=A.N.apiUrl,this.message={crews:[{crew_id:1,crew_name:"",crew_parental:"",crew_maternal:"",crew_pass_img:"",crew_visa_img:"",crew_pass_exp:"",crew_visa_exp:"",passport_image_crew_comments:""}]}}ngOnInit(){const a=this.activatedRoute.snapshot.paramMap.get("id");this.message=this.sharedDataService.getMessage();const n=a?parseInt(a,10):null;this.message&&this.message.crews&&(this.crew=this.message.crews.find(r=>r.crew_id===n))}getBackButtonText(){return this.platform.is("ios")?"Detail Operation":""}openCommentModal(){var a=this;return(0,T.Z)(function*(){return yield(yield a.modalController.create({component:U})).present()})()}checkboxChanged(a,n){this.crew&&("crew_pass_sta"===n&&(this.crew.passport_image_crew_status=a.detail.checked?1:2),"crew_visa_sta"===n&&(this.crew.visa_image_crew_status=a.detail.checked?1:2),"crew_license_sta"===n&&(this.crew.license_image_crew_status=a.detail.checked?1:2),"crew_medical_exam_sta"===n&&(this.crew.medical_exam_image_crew_status=a.detail.checked?1:2))}sendVerify(a){var n=this;return(0,T.Z)(function*(){n.loading=yield n.loadingController.create({cssClass:"custom-spinner",spinner:null,translucent:!0,backdropDismiss:!1}),yield n.loading.present();let h,g,r=new FormData;const _={crew_pass:{id:"crew_id",statusKey:"passport_image_crew_status",commentsKey:"passport_image_crew_comments",model:"crw",path:""},crew_visa:{id:"crew_id",statusKey:"visa_image_crew_status",commentsKey:"visa_image_crew_comments",model:"crw",path:""},crew_license:{id:"crew_id",statusKey:"license_image_crew_status",commentsKey:"license_image_crew_comments",model:"crw",path:""},crew_medical_exam:{id:"crew_id",statusKey:"medical_exam_image_crew_status",commentsKey:"medical_exam_image_crew_comments",model:"crw",path:""}}[a],v=(s,u,Z)=>{let p=Z.path?b(n.crew,Z.path):n.crew,E=(null==p?void 0:p[u])||(u.includes("status")?0:"");s.append(u,E.toString())};if(_){const s=b(n.crew,_.id);g=null!=s?s:_.id,h=_.model||"ope",v(r,_.statusKey,_),v(r,_.commentsKey,_),r.append("method","_PUT")}function b(s,u){return u.split(".").reduce((Z,p)=>(Z||{})[p],s)}n.http.post(n.appUrl+"api/update-document/"+h+"/"+g,r).subscribe(s=>{n.modalController.dismiss(),n.loading.dismiss()},s=>{console.error("Error al realizar la solicitud HTTP",s),n.loading.dismiss()})})()}getStatusLabel(a){if(!a)return"Not Verified";switch(a){case 0:return"Not verified";case 1:return"Aprobado";case 2:return"Rechazado";default:return""}}}return(i=l).\u0275fac=function(a){return new(a||i)(e.Y36(m.gz),e.Y36(q.y),e.Y36(o.IN),e.Y36(o.HT),e.Y36(y.eN),e.Y36(k.D))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-detail-crew"]],decls:137,vars:59,consts:[[3,"translucent"],["slot","start"],["defaultHref","/",3,"text"],[3,"fullscreen"],[4,"ngIf","ngIfElse"],["noImage",""],["size","8"],[1,"ion-text-wrap"],[1,"title-crew"],["size","3"],["id","open-passport",1,"custom-button"],["name","list-circle-outline"],[1,"ion-padding"],["trigger","open-passport",3,"initialBreakpoint","breakpoints"],["size","12"],["value","first","size","large"],["slot","header","color","light","size","large"],["slot","content",1,"ion-padding"],["id","open-visa",1,"custom-button"],["trigger","open-visa",3,"initialBreakpoint","breakpoints"],["id","open-license",1,"custom-button"],["trigger","open-license",3,"initialBreakpoint","breakpoints"],["id","open-medical",1,"custom-button"],["trigger","open-medical",3,"initialBreakpoint","breakpoints"],["download","",3,"href"],["alt","SAE",3,"src"],["src","https://www.apricotmaps.com/resources/Pictures/docs/no-image.png","alt","Imagen predeterminada"],["aria-label","Success toggle","color","success",3,"checked","ionChange"],["position","floating"],[3,"ngModel","ngModelChange"],["expand","full",1,"large-btn",3,"click"]],template:function(a,n){if(1&a&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA()()(),e.TgZ(4,"ion-content",3)(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title"),e._uU(8),e.qZA(),e.TgZ(9,"ion-card-subtitle"),e._uU(10),e.qZA()(),e.TgZ(11,"ion-card-content")(12,"ion-list")(13,"ion-item"),e.YNc(14,D,4,2,"ng-container",4),e.YNc(15,S,2,0,"ng-template",null,5,e.W1O),e.TgZ(17,"ion-grid")(18,"ion-row")(19,"ion-col",6)(20,"div",7)(21,"p",8),e._uU(22),e.qZA(),e.TgZ(23,"h4"),e._uU(24),e.TgZ(25,"ion-note"),e._uU(26),e.ALo(27,"date"),e.qZA()()()(),e.TgZ(28,"ion-col",9)(29,"ion-button",10),e._UZ(30,"ion-icon",11),e.qZA()(),e.TgZ(31,"ion-content",12)(32,"ion-modal",13),e.YNc(33,J,16,8,"ng-template"),e.qZA()()(),e.TgZ(34,"ion-grid")(35,"ion-row")(36,"ion-col",14)(37,"ion-accordion-group")(38,"ion-accordion",15)(39,"ion-item",16)(40,"ion-label"),e._uU(41),e.qZA()(),e.TgZ(42,"div",17),e._uU(43),e.qZA()()()()()()()(),e.TgZ(44,"ion-item"),e.YNc(45,O,4,2,"ng-container",4),e.YNc(46,N,2,0,"ng-template",null,5,e.W1O),e.TgZ(48,"ion-grid")(49,"ion-row")(50,"ion-col",6)(51,"div",7)(52,"p",8),e._uU(53,"Visa"),e.qZA(),e.TgZ(54,"h4"),e._uU(55),e.TgZ(56,"ion-note"),e._uU(57),e.ALo(58,"date"),e.qZA()()()(),e.TgZ(59,"ion-col",9)(60,"ion-button",18),e._UZ(61,"ion-icon",11),e.qZA()(),e.TgZ(62,"ion-content",12)(63,"ion-modal",19),e.YNc(64,Q,16,7,"ng-template"),e.qZA()()(),e.TgZ(65,"ion-grid")(66,"ion-row")(67,"ion-col",14)(68,"ion-accordion-group")(69,"ion-accordion",15)(70,"ion-item",16)(71,"ion-label"),e._uU(72),e.qZA()(),e.TgZ(73,"div",17),e._uU(74),e.qZA()()()()()()()(),e.TgZ(75,"ion-item"),e.YNc(76,H,4,2,"ng-container",4),e.YNc(77,I,2,0,"ng-template",null,5,e.W1O),e.TgZ(79,"ion-grid")(80,"ion-row")(81,"ion-col",6)(82,"div",7)(83,"p",8),e._uU(84),e.qZA(),e.TgZ(85,"h4"),e._uU(86),e.TgZ(87,"ion-note"),e._uU(88),e.ALo(89,"date"),e.qZA()()()(),e.TgZ(90,"ion-col",9)(91,"ion-button",20),e._UZ(92,"ion-icon",11),e.qZA()(),e.TgZ(93,"ion-content",12)(94,"ion-modal",21),e.YNc(95,B,16,8,"ng-template"),e.qZA()()(),e.TgZ(96,"ion-grid")(97,"ion-row")(98,"ion-col",14)(99,"ion-accordion-group")(100,"ion-accordion",15)(101,"ion-item",16)(102,"ion-label"),e._uU(103),e.qZA()(),e.TgZ(104,"div",17),e._uU(105),e.qZA()()()()()()()(),e.TgZ(106,"ion-item"),e.YNc(107,K,4,2,"ng-container",4),e.YNc(108,Y,2,0,"ng-template",null,5,e.W1O),e.TgZ(110,"ion-grid")(111,"ion-row")(112,"ion-col",6)(113,"div",7)(114,"p",8),e._uU(115),e.qZA(),e.TgZ(116,"h4"),e._uU(117),e.TgZ(118,"ion-note"),e._uU(119),e.ALo(120,"date"),e.qZA()()()(),e.TgZ(121,"ion-col",9)(122,"ion-button",22),e._UZ(123,"ion-icon",11),e.qZA()(),e.TgZ(124,"ion-content",12)(125,"ion-modal",23),e.YNc(126,z,16,8,"ng-template"),e.qZA()()(),e.TgZ(127,"ion-grid")(128,"ion-row")(129,"ion-col",14)(130,"ion-accordion-group")(131,"ion-accordion",15)(132,"ion-item",16)(133,"ion-label"),e._uU(134),e.qZA()(),e.TgZ(135,"div",17),e._uU(136),e.qZA()()()()()()()()()()()()),2&a){const r=e.MAs(16);e.Q6J("translucent",!0),e.xp6(3),e.Q6J("text",n.getBackButtonText()),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(4),e.HOy("",n.translationService.getTranslation("crew"),": ",null==n.crew?null:n.crew.crew_parental," ",null!=n.crew&&n.crew.crew_maternal?null==n.crew?null:n.crew.crew_maternal:""," ",null==n.crew?null:n.crew.crew_name,""),e.xp6(2),e.Oqu(n.translationService.getTranslation("cardSubtitle")),e.xp6(4),e.Q6J("ngIf",null==n.crew?null:n.crew.crew_pass_img)("ngIfElse",r),e.xp6(8),e.Oqu(n.translationService.getTranslation("passport")),e.xp6(2),e.hij(" ",n.translationService.getTranslation("date")," "),e.xp6(2),e.hij(" ",null!=n.crew&&n.crew.crew_pass_exp?e.xi3(27,43,null==n.crew?null:n.crew.crew_pass_exp,"dd/MM/yyyy, HH:mm"):"Date undefined"," "),e.xp6(6),e.Q6J("initialBreakpoint",1)("breakpoints",e.DdM(55,w)),e.xp6(9),e.Oqu(n.getStatusLabel(null==n.crew?null:n.crew.passport_image_crew_status)),e.xp6(2),e.hij(" ",null==n.crew?null:n.crew.passport_image_crew_comments," "),e.xp6(2),e.Q6J("ngIf",null==n.crew?null:n.crew.crew_visa_img)("ngIfElse",r),e.xp6(10),e.hij(" ",n.translationService.getTranslation("date")," "),e.xp6(2),e.hij(" ",null!=n.crew&&n.crew.crew_visa_exp?e.xi3(58,46,null==n.crew?null:n.crew.crew_visa_exp,"dd/MM/yyyy, HH:mm"):"Date undefined"," "),e.xp6(6),e.Q6J("initialBreakpoint",1)("breakpoints",e.DdM(56,w)),e.xp6(9),e.Oqu(n.getStatusLabel(null==n.crew?null:n.crew.visa_image_crew_status)),e.xp6(2),e.hij(" ",null==n.crew?null:n.crew.visa_image_crew_comments," "),e.xp6(2),e.Q6J("ngIf",null==n.crew?null:n.crew.crew_lice_img)("ngIfElse",r),e.xp6(8),e.Oqu(n.translationService.getTranslation("license")),e.xp6(2),e.hij(" ",n.translationService.getTranslation("date")," "),e.xp6(2),e.hij(" ",null!=n.crew&&n.crew.crew_lice_exp?e.xi3(89,49,null==n.crew?null:n.crew.crew_lice_exp,"dd/MM/yyyy, HH:mm"):"Date undefined"," "),e.xp6(6),e.Q6J("initialBreakpoint",1)("breakpoints",e.DdM(57,w)),e.xp6(9),e.Oqu(n.getStatusLabel(null==n.crew?null:n.crew.license_image_crew_status)),e.xp6(2),e.hij(" ",null==n.crew?null:n.crew.license_image_crew_comments," "),e.xp6(2),e.Q6J("ngIf",null==n.crew?null:n.crew.crew_medi_img)("ngIfElse",r),e.xp6(8),e.Oqu(n.translationService.getTranslation("medical")),e.xp6(2),e.hij(" ",n.translationService.getTranslation("date")," "),e.xp6(2),e.hij(" ",null!=n.crew&&n.crew.crew_medi_exp?e.xi3(120,52,null==n.crew?null:n.crew.crew_medi_exp,"dd/MM/yyyy, HH:mm"):"Date undefined"," "),e.xp6(6),e.Q6J("initialBreakpoint",1)("breakpoints",e.DdM(58,w)),e.xp6(9),e.Oqu(n.getStatusLabel(null==n.crew?null:n.crew.medical_exam_image_crew_status)),e.xp6(2),e.hij(" ",null==n.crew?null:n.crew.medical_exam_image_crew_comments," ")}},dependencies:[d.O5,C.JJ,C.On,o.We,o.eh,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.tO,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.gu,o.Xz,o.Ie,o.Q$,o.q_,o.uN,o.Nd,o.g2,o.Bs,o.ho,o.sr,o.ki,o.w,o.j9,o.oU,d.uU],styles:[".custom-button[_ngcontent-%COMP%]{color:#fff;border:none;border-radius:5px;padding:10px 20px}.title-crew[_ngcontent-%COMP%]{font-size:17px;font-weight:700}ion-modal[_ngcontent-%COMP%]{--height: auto}.card-content-md[_ngcontent-%COMP%]{padding-inline-end:0px}.item-inner[_ngcontent-%COMP%]{padding-inline-end:0%!important}.large-btn[_ngcontent-%COMP%]{font-size:20px;height:auto;width:100%;line-height:60px;padding-left:20px;padding-right:20px}"]}),l})()}];let j=(()=>{var i;class l{}return(i=l).\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,m.Bz.forChild(P),m.Bz]}),l})(),G=(()=>{var i;class l{}return(i=l).\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,C.u5,o.Pc,m.Bz,j]}),l})()}}]);