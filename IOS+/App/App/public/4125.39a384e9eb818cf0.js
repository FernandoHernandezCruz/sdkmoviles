"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4125],{4125:(y,u,a)=>{a.r(u),a.d(u,{LoginPageModule:()=>Z});var m=a(6814),g=a(95),t=a(878),d=a(9481),p=a(5861),n=a(6689);let h=(()=>{var e;class r{constructor(o){this.modalController=o}close(){this.modalController.dismiss()}}return(e=r).\u0275fac=function(o){return new(o||e)(n.Y36(t.IN))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-generic-modal"]],inputs:{title:"title",message:"message"},decls:10,vars:2,consts:[[1,"modal-content"],[1,"modal-card"],["expand","full","color","primary",2,"margin","0 !important",3,"click"]],template:function(o,i){1&o&&(n.TgZ(0,"ion-content",0)(1,"ion-card",1)(2,"ion-card-header")(3,"ion-title"),n._uU(4),n.qZA()(),n.TgZ(5,"ion-card-content")(6,"p"),n._uU(7),n.qZA()(),n.TgZ(8,"ion-button",2),n.NdJ("click",function(){return i.close()}),n._uU(9,"Volver"),n.qZA()()()),2&o&&(n.xp6(4),n.Oqu(i.title),n.xp6(3),n.Oqu(i.message))},dependencies:[t.YG,t.PM,t.FN,t.Zi,t.W2,t.wd],styles:[".modal-content[_ngcontent-%COMP%]{display:block;justify-content:center;align-items:center;position:fixed;z-index:2;padding:0}.modal-card[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:10px;text-align:center;margin:0;padding:0}ion-button[_ngcontent-%COMP%]{margin:0;padding:0%}"]}),r})();var M=a(2333),C=a(2014),P=a(6988);const f=[{path:"",component:(()=>{var e;class r{constructor(o,i,s,c,b,w){this.authService=o,this.router=i,this.modalController=s,this.toastController=c,this.storage=b,this.tokenService=w,this.email="",this.password="",this._storage=null,this.init()}init(){var o=this;return(0,p.Z)(function*(){const i=yield o.storage.create();o._storage=i})()}ngOnInit(){}presentGenericModal(o,i){var s=this;return(0,p.Z)(function*(){return yield(yield s.modalController.create({component:h,componentProps:{title:o,message:i}})).present()})()}login(){!this.email||!this.password||this.authService.login(this.email,this.password).then(o=>{o?this.router.navigate(["folder/operations"]):this.openCustomDialogModal()}).catch(o=>{console.error("Error de autenticaci\xf3n:",o),this.presentGenericModal("Error de Autenticaci\xf3n","Credenciales incorrectas"),this.openCustomDialogModal()})}openCustomDialogModal(){document.querySelector("ion-modal#example-modal").present()}}return(e=r).\u0275fac=function(o){return new(o||e)(n.Y36(M.e),n.Y36(d.F0),n.Y36(t.IN),n.Y36(t.yF),n.Y36(C.K),n.Y36(P.B))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-login"]],decls:34,vars:4,consts:[[3,"translucent"],["size","12",1,"ion-text-center"],["src","../../assets/icon/logotipo-completo.png",1,"background-image"],["scrollEvents","false"],[1,"grid1"],[1,"row1"],[1,"row2"],["src","../../assets/avion.jpg",2,"width","90%","margin-top","3%"],[1,"ion-card-custom"],[1,"contaier-login"],[1,"ion-no-padding"],["name","at",1,"icon-login"],["name","user","type","email","required","","placeholder","Usuario",3,"ngModel","ngModelChange"],["name","keypad",1,"icon-login"],["name","password","type","password","required","","placeholder","Contrase\xf1a",3,"ngModel","ngModelChange"],["type","submit","fill","solid","expand","full",3,"disabled","click"]],template:function(o,i){1&o&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row")(3,"ion-col",1),n._UZ(4,"img",2),n.qZA()()()(),n.TgZ(5,"ion-content",3)(6,"ion-grid",4),n._UZ(7,"ion-row",5),n.TgZ(8,"ion-row",6)(9,"ion-card"),n._UZ(10,"img",7),n.TgZ(11,"ion-card-content"),n._uU(12," Con m\xe1s de 35 a\xf1os de experiencia, en SAE brindamos soporte y aseguramos la coordinaci\xf3n oportuna, log\xedstica, gesti\xf3n documental, permisos, cierre de vuelos, catering, transporte y m\xe1s. "),n.qZA()()()(),n.TgZ(13,"ion-card",8)(14,"div",9)(15,"ion-grid",10)(16,"ion-row")(17,"ion-col")(18,"h1"),n._uU(19,"Iniciar Sesi\xf3n"),n.qZA()()(),n.TgZ(20,"ion-row")(21,"ion-col")(22,"ion-list")(23,"ion-item"),n._UZ(24,"ion-icon",11),n.TgZ(25,"ion-input",12),n.NdJ("ngModelChange",function(c){return i.email=c}),n.qZA()(),n._UZ(26,"br"),n.TgZ(27,"ion-item"),n._UZ(28,"ion-icon",13),n.TgZ(29,"ion-input",14),n.NdJ("ngModelChange",function(c){return i.password=c}),n.qZA()()()()(),n.TgZ(30,"ion-row")(31,"ion-col")(32,"ion-button",15),n.NdJ("click",function(){return i.login()}),n._uU(33," Entrar "),n.qZA()()()()()()()),2&o&&(n.Q6J("translucent",!0),n.xp6(25),n.Q6J("ngModel",i.email),n.xp6(4),n.Q6J("ngModel",i.password),n.xp6(3),n.Q6J("disabled",!i.email||!i.password))},dependencies:[g.JJ,g.Q7,g.On,t.YG,t.PM,t.FN,t.wI,t.W2,t.jY,t.Gu,t.gu,t.pK,t.Ie,t.q_,t.Nd,t.sr,t.j9],styles:[".login-background[_ngcontent-%COMP%]{background:url(logo-sae.c34c3dc8acb770d2.png) no-repeat center center fixed;background-size:cover}.background-image[_ngcontent-%COMP%]{width:35%;max-width:250px}.login-form[_ngcontent-%COMP%]{padding:0;text-align:center}ion-item[_ngcontent-%COMP%]{--ion-label-color: white;--ion-input-color: white;--background: transparent}ion-card[_ngcontent-%COMP%]{text-align:center}.grid1[_ngcontent-%COMP%]{height:100%!important;position:absolute;padding:0}.contaier-login[_ngcontent-%COMP%]{padding:0;border-radius:5px;box-shadow:0 0 10px 1px #000000bf}.row1[_ngcontent-%COMP%]{height:40%!important;position:relative;background-image:url(https://sae.com.mx/wp-content/uploads/2023/03/Piloto-Avion-Privado-Servicios-Aereos-Estrella-SAE-Renta-Avion-Privado-FBO-Handling.webp);padding:0;background:linear-gradient(45deg,#0a3459 0%,rgba(23,31,65,.8) 100%)}.row2[_ngcontent-%COMP%]{position:relative;width:auto;height:40%;padding:0;background-size:cover;background-position:center}ion-icon[_ngcontent-%COMP%]{margin-right:15px}ion-button[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:15px}.ion-card-custom[_ngcontent-%COMP%]{width:90%;position:relative!important;top:2%!important;z-index:3;border-radius:15px;box-shadow:0 0 10px 1px #000000bf}.img-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.icon-login[_ngcontent-%COMP%]{color:#0a3459}h1[_ngcontent-%COMP%]{text-align:center}"]}),r})()}];let v=(()=>{var e;class r{}return(e=r).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.Bz.forChild(f),d.Bz]}),r})(),Z=(()=>{var e;class r{}return(e=r).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[m.ez,g.u5,t.Pc,v]}),r})()}}]);