(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{lma4:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class u{}var o=e("pMnS"),i=e("MKJQ"),a=e("sZkV"),r=e("SVse"),c=e("s7LF"),s=e("mrSG"),d=e("wcTb");class b{constructor(n,l,e){this.activatedRoute=n,this.navController=l,this.alertController=e,this.anouncement=new d.a,this.isCreatingNewAnouncement=!1}ngOnInit(){}ionViewDidEnter(){const n=this.activatedRoute.snapshot.paramMap.get("id");"new"===n?(this.isCreatingNewAnouncement=!0,this.anouncement.title="New Anouncement"):this.fetchAnouncement(n)}fetchAnouncement(n){return s.a(this,void 0,void 0,(function*(){const l=yield fetch(localStorage.getItem("serverApiBaseUrl")+"/anouncement?id="+n);this.anouncement=yield l.json()}))}save(){return s.a(this,void 0,void 0,(function*(){if(this.anouncement.title)if(this.isCreatingNewAnouncement)if(this.anouncement.timeCreated=(new Date).toISOString(),(yield fetch(localStorage.getItem("serverApiBaseUrl")+"/anouncement/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.anouncement)})).ok)this.navController.navigateBack("/anouncement");else{delete this.anouncement.timeCreated;const n=yield this.alertController.create({header:"Fail to Create Anouncement",message:"Fail to create the anouncement, please try again."});yield n.present()}else if((yield fetch(localStorage.getItem("serverApiBaseUrl")+"/anouncement/modify",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.anouncement)})).ok)this.navController.navigateBack("/anouncement");else{const n=yield this.alertController.create({header:"Fail to Save Anouncement",message:"Fail to save the anouncement, please try again."});yield n.present()}else{const n=yield this.alertController.create({header:"Invalid Values",message:"There are one or more invalid values, please check and try again."});yield n.present()}}))}delete(){return s.a(this,void 0,void 0,(function*(){if(!this.isCreatingNewAnouncement){const n=yield this.alertController.create({header:"Deleting an Anouncement",message:"Are you sure to delete "+this.anouncement.title+"?",buttons:["Cancel",{text:"Delete",handler:()=>s.a(this,void 0,void 0,(function*(){(yield fetch(localStorage.getItem("serverApiBaseUrl")+"/anouncement?id="+this.anouncement.id,{method:"DELETE"})).ok&&this.navController.navigateBack("/anouncement")}))}]});yield n.present()}}))}}var h=e("iInd"),g=t.nb({encapsulation:0,styles:[["#upper-div[_ngcontent-%COMP%]{height:80px}#lower-div[_ngcontent-%COMP%]{height:calc(100% - 90px)}textarea[_ngcontent-%COMP%]{width:100%;height:100%;color:#000}"]],data:{}});function m(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.delete()&&t),t}),i.F,i.d)),t.ob(1,49152,null,0,a.j,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,i.K,i.i)),t.ob(3,49152,null,0,a.B,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"trash")}),null)}function p(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,19,"ion-header",[],null,null,null,i.J,i.h)),t.ob(1,49152,null,0,a.A,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,17,"ion-toolbar",[],null,null,null,i.db,i.B)),t.ob(3,49152,null,0,a.yb,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.G,i.e)),t.ob(5,49152,null,0,a.k,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/anouncement"]],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Ab(n,8).onClick(e)&&u),u}),i.D,i.b)),t.ob(7,49152,null,0,a.f,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.ob(8,16384,null,0,a.g,[[2,a.eb],a.Db],{defaultHref:[0,"defaultHref"]},null),(n()(),t.pb(9,0,null,0,2,"ion-title",[],null,null,null,i.cb,i.A)),t.ob(10,49152,null,0,a.wb,[t.h,t.k,t.x],null,null),(n()(),t.Hb(11,0,["",""])),(n()(),t.pb(12,0,null,0,7,"ion-buttons",[["slot","end"]],null,null,null,i.G,i.e)),t.ob(13,49152,null,0,a.k,[t.h,t.k,t.x],null,null),(n()(),t.eb(16777216,null,0,1,null,m)),t.ob(15,16384,null,0,r.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(16,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.save()&&t),t}),i.F,i.d)),t.ob(17,49152,null,0,a.j,[t.h,t.k,t.x],null,null),(n()(),t.pb(18,0,null,0,1,"ion-icon",[["name","save"],["slot","icon-only"]],null,null,null,i.K,i.i)),t.ob(19,49152,null,0,a.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.pb(20,0,null,null,19,"ion-content",[],null,null,null,i.I,i.g)),t.ob(21,49152,null,0,a.t,[t.h,t.k,t.x],null,null),(n()(),t.pb(22,0,null,0,10,"div",[["id","upper-div"]],null,null,null,null,null)),(n()(),t.pb(23,0,null,null,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Ab(n,24)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Ab(n,24)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.anouncement.title=e)&&u),u}),i.M,i.k)),t.ob(24,16384,null,0,a.Jb,[t.k],null,null),t.Eb(1024,null,c.d,(function(n){return[n]}),[a.Jb]),t.ob(26,671744,null,0,c.g,[[8,null],[8,null],[8,null],[6,c.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,c.e,null,[c.g]),t.ob(28,16384,null,0,c.f,[[4,c.e]],null,null),t.ob(29,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(n()(),t.pb(30,0,null,null,2,"ion-note",[],null,null,null,i.U,i.s)),t.ob(31,49152,null,0,a.U,[t.h,t.k,t.x],null,null),(n()(),t.Hb(32,0,["",""])),(n()(),t.pb(33,0,null,0,6,"div",[["id","lower-div"]],null,null,null,null,null)),(n()(),t.pb(34,0,null,null,5,"textarea",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,e){var u=!0,o=n.component;return"input"===l&&(u=!1!==t.Ab(n,35)._handleInput(e.target.value)&&u),"blur"===l&&(u=!1!==t.Ab(n,35).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.Ab(n,35)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.Ab(n,35)._compositionEnd(e.target.value)&&u),"ngModelChange"===l&&(u=!1!==(o.anouncement.content=e)&&u),u}),null,null)),t.ob(35,16384,null,0,c.b,[t.B,t.k,[2,c.a]],null,null),t.Eb(1024,null,c.d,(function(n){return[n]}),[c.b]),t.ob(37,671744,null,0,c.g,[[8,null],[8,null],[8,null],[6,c.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,c.e,null,[c.g]),t.ob(39,16384,null,0,c.f,[[4,c.e]],null,null)],(function(n,l){var e=l.component;n(l,7,0,"/anouncement"),n(l,8,0,"/anouncement"),n(l,15,0,!e.isCreatingNewAnouncement),n(l,19,0,"save"),n(l,26,0,e.anouncement.title),n(l,37,0,e.anouncement.content)}),(function(n,l){var e=l.component;n(l,11,0,e.isCreatingNewAnouncement?"Create New Anouncement":"Modify Anouncement"),n(l,23,0,t.Ab(l,28).ngClassUntouched,t.Ab(l,28).ngClassTouched,t.Ab(l,28).ngClassPristine,t.Ab(l,28).ngClassDirty,t.Ab(l,28).ngClassValid,t.Ab(l,28).ngClassInvalid,t.Ab(l,28).ngClassPending),n(l,32,0,e.anouncement.timeCreated),n(l,34,0,t.Ab(l,39).ngClassUntouched,t.Ab(l,39).ngClassTouched,t.Ab(l,39).ngClassPristine,t.Ab(l,39).ngClassDirty,t.Ab(l,39).ngClassValid,t.Ab(l,39).ngClassInvalid,t.Ab(l,39).ngClassPending)}))}var v=t.lb("app-anouncement-modify",b,(function(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-anouncement-modify",[],null,null,null,p,g)),t.ob(1,114688,null,0,b,[h.a,a.Db,a.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]);class f{}e.d(l,"AnouncementModifyPageModuleNgFactory",(function(){return y}));var y=t.mb(u,[],(function(n){return t.xb([t.yb(512,t.j,t.X,[[8,[o.a,v]],[3,t.j],t.v]),t.yb(4608,r.k,r.j,[t.s,[2,r.r]]),t.yb(4608,c.i,c.i,[]),t.yb(4608,a.b,a.b,[t.x,t.g]),t.yb(4608,a.Cb,a.Cb,[a.b,t.j,t.p]),t.yb(4608,a.Gb,a.Gb,[a.b,t.j,t.p]),t.yb(1073742336,r.b,r.b,[]),t.yb(1073742336,c.h,c.h,[]),t.yb(1073742336,c.c,c.c,[]),t.yb(1073742336,a.Ab,a.Ab,[]),t.yb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),t.yb(1073742336,f,f,[]),t.yb(1073742336,u,u,[]),t.yb(1024,h.k,(function(){return[[{path:":id",component:b}]]}),[])])}))}}]);