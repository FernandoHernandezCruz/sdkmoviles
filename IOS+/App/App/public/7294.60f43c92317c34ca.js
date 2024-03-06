"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7294],{7294:(I,m,r)=>{r.r(m),r.d(m,{ChatPageModule:()=>x});var l=r(6814),h=r(95),i=r(878),d=r(9481),p=r(5861),t=r(6689),f=r(5472),M=r(553),v=r(6658),C=r(9894),P=r(2014),b=r(589);function T(n,g){if(1&n&&(t.TgZ(0,"ion-item")(1,"div",11),t._uU(2),t.qZA(),t.TgZ(3,"div",12),t._uU(4),t.ALo(5,"date"),t.qZA()()),2&n){const c=g.$implicit;t.Tol(c.sentByMe?"received":"sent"),t.xp6(2),t.hij(" ",c.content," "),t.xp6(2),t.hij(" ",t.xi3(5,4,c.timestamp,"shortTime")," ")}}function Z(n,g){if(1&n&&(t.TgZ(0,"ion-list"),t.YNc(1,T,6,7,"ion-item",10),t.qZA()),2&n){const c=t.oxw();t.xp6(1),t.Q6J("ngForOf",c.chat.messages)}}const w=[{path:"",component:(()=>{var n;class g{constructor(e,o,a,s,u,B){this.route=e,this.chatService=o,this.translationService=a,this.storage=s,this.notificationHandlerService=u,this.ngZone=B,this.newMessage="",this.platform=(0,t.f3M)(f.t4),this.appUrl=M.N.apiUrl,this.chatId="",this.senderId=""}ngOnInit(){this.notificationSubscription=this.notificationHandlerService.notificationReceived.subscribe(e=>{if("data"in e){const o=e.data.message,a=e.data.idUser;if(this.chat||(this.chat={id:"",recipientId:"",contactName:"",contactImage:"",messages:[]}),String(a)===String(this.chat.recipientId)){const s={sender:"Yo",content:o,timestamp:new Date,sentByMe:!0};this.ngZone.run(()=>{this.chat.messages.push(s),setTimeout(()=>this.content.scrollToBottom(300),100)})}}}),this.route.paramMap.subscribe(e=>{const o=e.get("id");o&&(this.chatId=o,this.chatService.getChatById(o).subscribe(a=>{this.chat=a,setTimeout(()=>this.content.scrollToBottom(300),100)},a=>{console.error("Error al obtener el chat:",a)})),this.route.queryParams.subscribe(a=>{const s=a.message;if(s){const u={sender:"Yo",content:s,timestamp:new Date,sentByMe:!0};this.ngZone.run(()=>{this.chat.messages.push(u),setTimeout(()=>this.content.scrollToBottom(300),100)})}})})}getBackButtonText(){return this.platform.is("ios"),""}sendMessage(){var e=this;return(0,p.Z)(function*(){if(e.newMessage.trim()&&e.chat){e.chat.messages.push({sender:"Yo",content:e.newMessage,timestamp:new Date,sentByMe:!1});const a=yield e.storage.get("user");e.senderId=a.id,e.chatService.sendMessage(e.chatId,e.senderId,e.newMessage).subscribe(s=>console.log("Mensaje enviado",s),s=>console.error("Error al enviar mensaje",s)),e.newMessage="",setTimeout(()=>{var s;return null===(s=e.content)||void 0===s?void 0:s.scrollToBottom(300)},100)}})()}ionViewWillLeave(){this.notificationSubscription&&this.notificationSubscription.unsubscribe()}}return(n=g).\u0275fac=function(e){return new(e||n)(t.Y36(d.gz),t.Y36(v.a),t.Y36(C.D),t.Y36(P.K),t.Y36(b.b),t.Y36(t.R0b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-chat"]],viewQuery:function(e,o){if(1&e&&t.Gf(i.W2,5),2&e){let a;t.iGM(a=t.CRH())&&(o.content=a.first)}},decls:16,vars:6,consts:[["slot","start"],["defaultHref","/",3,"text"],["slot","start",2,"vertical-align","middle"],[3,"src"],[1,"title-left"],[4,"ngIf"],[3,"ngModel","placeholder","ngModelChange","keyup.enter"],["slot","end"],[3,"click"],["slot","icon-only","name","send-outline"],[3,"class",4,"ngFor","ngForOf"],[1,"message-content"],[1,"message-time"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"ion-avatar",2),t._UZ(5,"img",3),t.qZA(),t.TgZ(6,"ion-title",4),t._uU(7),t.qZA()()(),t.TgZ(8,"ion-content"),t.YNc(9,Z,2,1,"ion-list",5),t.qZA(),t.TgZ(10,"ion-footer")(11,"ion-toolbar")(12,"ion-input",6),t.NdJ("ngModelChange",function(s){return o.newMessage=s})("keyup.enter",function(){return o.sendMessage()}),t.qZA(),t.TgZ(13,"ion-buttons",7)(14,"ion-button",8),t.NdJ("click",function(){return o.sendMessage()}),t._UZ(15,"ion-icon",9),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("text",o.getBackButtonText()),t.xp6(2),t.Q6J("src",o.appUrl+(null==o.chat?null:o.chat.contactImage)||"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",t.LSH),t.xp6(2),t.hij(" ",null==o.chat?null:o.chat.contactName," "),t.xp6(2),t.Q6J("ngIf",o.chat),t.xp6(3),t.s9C("placeholder",o.translationService.getTranslation("type")),t.Q6J("ngModel",o.newMessage))},dependencies:[l.sg,l.O5,h.JJ,h.On,i.BJ,i.YG,i.Sm,i.W2,i.fr,i.Gu,i.gu,i.pK,i.Ie,i.q_,i.wd,i.sr,i.j9,i.oU,l.uU],styles:["ion-item[_ngcontent-%COMP%]{--background: transparent;--padding-start: 0;--inner-padding-end: 0;--padding-end: 0;--inner-border-width: 0;--border-width: 0;margin-bottom:4px}.sent[_ngcontent-%COMP%], .received[_ngcontent-%COMP%]{border-radius:12px;padding:8px 12px;max-width:70%;margin:4px;color:#fff}.sent[_ngcontent-%COMP%]{background:#0b0b0b;margin-left:auto}.received[_ngcontent-%COMP%]{background:#191919}@media (prefers-color-scheme: light){.sent[_ngcontent-%COMP%]{background:#005187}.received[_ngcontent-%COMP%]{background:#4d82be}}ion-avatar[_ngcontent-%COMP%]{--border-radius: 50%;--ion-avatar-width: 10px;--ion-avatar-height: 10px;margin-right:-10px}img[_ngcontent-%COMP%]{margin-top:10%;width:80%;height:80%;object-fit:cover}.message-content[_ngcontent-%COMP%]{flex-grow:1;overflow-wrap:break-word;white-space:normal}.message-time[_ngcontent-%COMP%]{font-size:small;margin-left:10px;white-space:nowrap}.title-left[_ngcontent-%COMP%]{text-align:left}"]}),g})()}];let y=(()=>{var n;class g{}return(n=g).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(w),d.Bz]}),g})(),x=(()=>{var n;class g{}return(n=g).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,h.u5,i.Pc,y]}),g})()}}]);