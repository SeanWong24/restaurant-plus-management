(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{kQIX:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class a{}var i=e("pMnS"),u=e("MKJQ"),o=e("sZkV"),b=e("s7LF"),r=e("SVse"),s=e("mrSG"),d=e("Rhac");class c{constructor(l,n,e){this.activatedRoute=l,this.navController=n,this.alertController=e,this.table=new d.a,this.isCreatingNewTable=!1}ngOnInit(){}ionViewDidEnter(){const l=this.activatedRoute.snapshot.paramMap.get("id");"new"===l?(this.isCreatingNewTable=!0,this.table.name="New Table",this.table.capacity=0):this.fetchTable(l)}fetchTable(l){return s.a(this,void 0,void 0,(function*(){const n=yield fetch(localStorage.getItem("serverApiBaseUrl")+"/table?id="+l,{method:"GET",credentials:"include"});this.table=(yield n.json())[0]}))}save(){return s.a(this,void 0,void 0,(function*(){if(this.table.name&&"null"!==this.table.name&&this.table.capacity>=0)if(this.isCreatingNewTable)if((yield fetch(localStorage.getItem("serverApiBaseUrl")+"/table/add?name="+this.table.name+"&capacity="+this.table.capacity,{method:"POST",credentials:"include"})).ok)this.navController.navigateBack("/table");else{const l=yield this.alertController.create({header:"Fail to Create Table",message:"Fail to create the table, please try again."});yield l.present()}else if((yield fetch(localStorage.getItem("serverApiBaseUrl")+"/table/modify?id="+this.table.id+"&name="+this.table.name+"&capacity="+this.table.capacity,{method:"PUT",credentials:"include"})).ok)this.navController.navigateBack("/table");else{const l=yield this.alertController.create({header:"Fail to Save Table",message:"Fail to save the table, please try again."});yield l.present()}else{const l=yield this.alertController.create({header:"Invalid Values",message:"There are one or more invalid values, please check and try again."});yield l.present()}}))}toggleAvailability(){return s.a(this,void 0,void 0,(function*(){if((yield fetch(localStorage.getItem("serverApiBaseUrl")+"/table/toggle-availability?id="+this.table.id,{method:"PUT",credentials:"include"})).ok)this.navController.navigateBack("/table");else{const l=yield this.alertController.create({header:"Fail to Toggle Availability",message:"Fail to toggle availability of the table, please try again."});yield l.present()}}))}delete(){return s.a(this,void 0,void 0,(function*(){if(!this.isCreatingNewTable){const l=yield this.alertController.create({header:"Deleting a Table",message:"Are you sure to delete "+this.table.name+"?",buttons:["Cancel",{text:"Delete",handler:()=>s.a(this,void 0,void 0,(function*(){(yield fetch(localStorage.getItem("serverApiBaseUrl")+"/table?id="+this.table.id,{method:"DELETE",credentials:"include"})).ok&&this.navController.navigateBack("/table")}))}]});yield l.present()}}))}}var g=e("iInd"),h=t.nb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,2,"ion-button",[["color","warning"],["expand","block"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.toggleAvailability()&&t),t}),u.K,u.d)),t.ob(1,49152,null,0,o.j,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),t.Ib(-1,0,["Toggle Availability"]))],(function(l,n){l(n,1,0,"warning","block")}),null)}function v(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,2,"ion-button",[["color","danger"],["expand","block"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.delete()&&t),t}),u.K,u.d)),t.ob(1,49152,null,0,o.j,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),t.Ib(-1,0,["Delete"]))],(function(l,n){l(n,1,0,"danger","block")}),null)}function f(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,11,"ion-header",[],null,null,null,u.S,u.l)),t.ob(1,49152,null,0,o.A,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,u.nb,u.G)),t.ob(3,49152,null,0,o.yb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,u.L,u.e)),t.ob(5,49152,null,0,o.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/table"]],null,[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==t.Bb(l,8).onClick(e)&&a),a}),u.I,u.b)),t.ob(7,49152,null,0,o.f,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.ob(8,16384,null,0,o.g,[[2,o.eb],o.Db],{defaultHref:[0,"defaultHref"]},null),(l()(),t.pb(9,0,null,0,2,"ion-title",[],null,null,null,u.mb,u.F)),t.ob(10,49152,null,0,o.wb,[t.h,t.k,t.x],null,null),(l()(),t.Ib(11,0,["",""])),(l()(),t.pb(12,0,null,null,44,"ion-content",[],null,null,null,u.R,u.k)),t.ob(13,49152,null,0,o.t,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,11,"ion-item",[],null,null,null,u.W,u.p)),t.ob(15,49152,null,0,o.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(16,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,u.X,u.q)),t.ob(17,49152,null,0,o.M,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Ib(-1,0,["Name"])),(l()(),t.pb(19,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var a=!0,i=l.component;return"ionBlur"===n&&(a=!1!==t.Bb(l,20)._handleBlurEvent(e.target)&&a),"ionChange"===n&&(a=!1!==t.Bb(l,20)._handleInputEvent(e.target)&&a),"ngModelChange"===n&&(a=!1!==(i.table.name=e)&&a),a}),u.V,u.o)),t.ob(20,16384,null,0,o.Jb,[t.k],null,null),t.Fb(1024,null,b.d,(function(l){return[l]}),[o.Jb]),t.ob(22,671744,null,0,b.g,[[8,null],[8,null],[8,null],[6,b.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,b.e,null,[b.g]),t.ob(24,16384,null,0,b.f,[[4,b.e]],null,null),t.ob(25,49152,null,0,o.F,[t.h,t.k,t.x],null,null),(l()(),t.pb(26,0,null,0,11,"ion-item",[],null,null,null,u.W,u.p)),t.ob(27,49152,null,0,o.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(28,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,u.X,u.q)),t.ob(29,49152,null,0,o.M,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Ib(-1,0,["Capacity"])),(l()(),t.pb(31,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var a=!0,i=l.component;return"ionBlur"===n&&(a=!1!==t.Bb(l,32)._handleBlurEvent(e.target)&&a),"ionChange"===n&&(a=!1!==t.Bb(l,32)._handleInputEvent(e.target)&&a),"ngModelChange"===n&&(a=!1!==(i.table.capacity=e)&&a),a}),u.V,u.o)),t.ob(32,16384,null,0,o.Jb,[t.k],null,null),t.Fb(1024,null,b.d,(function(l){return[l]}),[o.Jb]),t.ob(34,671744,null,0,b.g,[[8,null],[8,null],[8,null],[6,b.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,b.e,null,[b.g]),t.ob(36,16384,null,0,b.f,[[4,b.e]],null,null),t.ob(37,49152,null,0,o.F,[t.h,t.k,t.x],null,null),(l()(),t.pb(38,0,null,0,11,"ion-item",[],null,null,null,u.W,u.p)),t.ob(39,49152,null,0,o.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(40,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,u.X,u.q)),t.ob(41,49152,null,0,o.M,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Ib(-1,0,["Status"])),(l()(),t.pb(43,0,null,0,6,"ion-input",[["disabled",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var a=!0,i=l.component;return"ionBlur"===n&&(a=!1!==t.Bb(l,44)._handleBlurEvent(e.target)&&a),"ionChange"===n&&(a=!1!==t.Bb(l,44)._handleInputEvent(e.target)&&a),"ngModelChange"===n&&(a=!1!==(i.table.status=e)&&a),a}),u.V,u.o)),t.ob(44,16384,null,0,o.Jb,[t.k],null,null),t.Fb(1024,null,b.d,(function(l){return[l]}),[o.Jb]),t.ob(46,671744,null,0,b.g,[[8,null],[8,null],[8,null],[6,b.d]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,b.e,null,[b.g]),t.ob(48,16384,null,0,b.f,[[4,b.e]],null,null),t.ob(49,49152,null,0,o.F,[t.h,t.k,t.x],{disabled:[0,"disabled"]},null),(l()(),t.pb(50,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.save()&&t),t}),u.K,u.d)),t.ob(51,49152,null,0,o.j,[t.h,t.k,t.x],{expand:[0,"expand"]},null),(l()(),t.Ib(-1,0,["Save"])),(l()(),t.eb(16777216,null,0,1,null,p)),t.ob(54,16384,null,0,r.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,v)),t.ob(56,16384,null,0,r.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,7,0,"/table"),l(n,8,0,"/table"),l(n,17,0,"floating"),l(n,22,0,e.table.name),l(n,29,0,"floating"),l(n,34,0,e.table.capacity),l(n,41,0,"floating"),l(n,46,0,"",e.table.status),l(n,49,0,""),l(n,51,0,"block"),l(n,54,0,!e.isCreatingNewTable),l(n,56,0,!e.isCreatingNewTable)}),(function(l,n){var e=n.component;l(n,11,0,(e.isCreatingNewTable?"Create New Table":e.table.name)||"Table Detail"),l(n,19,0,t.Bb(n,24).ngClassUntouched,t.Bb(n,24).ngClassTouched,t.Bb(n,24).ngClassPristine,t.Bb(n,24).ngClassDirty,t.Bb(n,24).ngClassValid,t.Bb(n,24).ngClassInvalid,t.Bb(n,24).ngClassPending),l(n,31,0,t.Bb(n,36).ngClassUntouched,t.Bb(n,36).ngClassTouched,t.Bb(n,36).ngClassPristine,t.Bb(n,36).ngClassDirty,t.Bb(n,36).ngClassValid,t.Bb(n,36).ngClassInvalid,t.Bb(n,36).ngClassPending),l(n,43,0,t.Bb(n,48).ngClassUntouched,t.Bb(n,48).ngClassTouched,t.Bb(n,48).ngClassPristine,t.Bb(n,48).ngClassDirty,t.Bb(n,48).ngClassValid,t.Bb(n,48).ngClassInvalid,t.Bb(n,48).ngClassPending)}))}var C=t.lb("app-table-detail",c,(function(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"app-table-detail",[],null,null,null,f,h)),t.ob(1,114688,null,0,c,[g.a,o.Db,o.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);class k{}e.d(n,"TableDetailPageModuleNgFactory",(function(){return m}));var m=t.mb(a,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[i.a,C]],[3,t.j],t.v]),t.zb(4608,r.k,r.j,[t.s,[2,r.r]]),t.zb(4608,b.i,b.i,[]),t.zb(4608,o.b,o.b,[t.x,t.g]),t.zb(4608,o.Cb,o.Cb,[o.b,t.j,t.p]),t.zb(4608,o.Gb,o.Gb,[o.b,t.j,t.p]),t.zb(1073742336,r.b,r.b,[]),t.zb(1073742336,b.h,b.h,[]),t.zb(1073742336,b.c,b.c,[]),t.zb(1073742336,o.Ab,o.Ab,[]),t.zb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),t.zb(1073742336,k,k,[]),t.zb(1073742336,a,a,[]),t.zb(1024,g.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);