(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{L6id:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),r=u("MKJQ"),i=u("sZkV"),s=u("SVse"),c=u("s7LF"),b=u("mrSG");class a{get user(){const l=sessionStorage.getItem("user");return l?JSON.parse(l):void 0}set user(l){l?sessionStorage.setItem("user",JSON.stringify(l)):sessionStorage.removeItem("user")}get role(){const l=sessionStorage.getItem("role");return l?JSON.parse(l):void 0}set role(l){l?sessionStorage.setItem("role",JSON.stringify(l)):sessionStorage.removeItem("role")}constructor(){}ngOnInit(){}ionViewDidEnter(){this.fetchUserAndRole()}login(l){return b.a(this,void 0,void 0,(function*(){yield fetch(localStorage.getItem("serverApiBaseUrl")+"/user/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"accessCode",message:l.toString()})}),yield this.fetchUserAndRole()}))}logout(){return b.a(this,void 0,void 0,(function*(){yield fetch(localStorage.getItem("serverApiBaseUrl")+"/user/logout",{method:"POST",credentials:"include"}),yield this.fetchUserAndRole()}))}fetchUserAndRole(){return b.a(this,void 0,void 0,(function*(){yield this.fetchUser(),yield this.fetchRole()}))}fetchUser(){return b.a(this,void 0,void 0,(function*(){const l=yield fetch(localStorage.getItem("serverApiBaseUrl")+"/user/self",{method:"GET",credentials:"include"});if(200===l.status)try{return void(this.user=yield l.json())}catch(n){}this.user=void 0}))}fetchRole(){return b.a(this,void 0,void 0,(function*(){if(this.user){const n=yield fetch(localStorage.getItem("serverApiBaseUrl")+"/user/role/self",{method:"GET",credentials:"include"});if(200===n.status)try{return void(this.role=yield n.json())}catch(l){}}this.role=void 0}))}}var p=e.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"ion-text",[["color","primary"]],null,null,null,r.kb,r.D)),e.ob(1,49152,null,0,i.tb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Ib(2,0,["","; "]))],(function(l,n){l(n,1,0,"primary")}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function h(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,15,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,11,"ion-card",[],null,null,null,r.P,r.f)),e.ob(2,49152,null,0,i.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,9,"ion-card-header",[],null,null,null,r.M,r.g)),e.ob(4,49152,null,0,i.n,[e.h,e.k,e.x],null,null),(l()(),e.pb(5,0,null,0,2,"ion-card-title",[],null,null,null,r.O,r.i)),e.ob(6,49152,null,0,i.p,[e.h,e.k,e.x],null,null),(l()(),e.Ib(7,0,["Welcome, ","!"])),(l()(),e.pb(8,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.N,r.h)),e.ob(9,49152,null,0,i.o,[e.h,e.k,e.x],null,null),(l()(),e.Ib(10,0,["",""])),(l()(),e.eb(16777216,null,0,1,null,d)),e.ob(12,278528,null,0,s.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(13,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.logout()&&e),e}),r.K,r.d)),e.ob(14,49152,null,0,i.j,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(l()(),e.Ib(-1,0,["Log Out"]))],(function(l,n){l(n,12,0,n.component.role.accessList),l(n,14,0,"block")}),(function(l,n){var u=n.component;l(n,7,0,u.user.name),l(n,10,0,u.role.name)}))}function f(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,15,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,2,"ion-text",[["color","primary"]],null,null,null,r.kb,r.D)),e.ob(2,49152,null,0,i.tb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Ib(-1,0,["You are not yet logged in, please enter your access code to log in."])),(l()(),e.pb(4,0,null,null,8,"ion-item",[],null,null,null,r.W,r.p)),e.ob(5,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.X,r.q)),e.ob(7,49152,null,0,i.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Access Code"])),(l()(),e.pb(9,0,null,0,3,"ion-input",[["clearInput","true"],["inputmode","numeric"],["maxlength","6"],["pattern","[0-9]*"],["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Bb(l,12)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Bb(l,12)._handleInputEvent(u.target)&&o),o}),r.V,r.o)),e.Fb(5120,null,c.d,(function(l){return[l]}),[i.Jb]),e.ob(11,49152,[["accessCodeInput",4]],0,i.F,[e.h,e.k,e.x],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],maxlength:[2,"maxlength"],pattern:[3,"pattern"],type:[4,"type"]},null),e.ob(12,16384,null,0,i.Jb,[e.k],null,null),(l()(),e.pb(13,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.login(e.Bb(l,11).value)&&o),o}),r.K,r.d)),e.ob(14,49152,null,0,i.j,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(l()(),e.Ib(-1,0,["Log In"]))],(function(l,n){l(n,2,0,"primary"),l(n,7,0,"floating"),l(n,11,0,"true","numeric","6","[0-9]*","password"),l(n,14,0,"block")}),null)}function g(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,r.S,r.l)),e.ob(1,49152,null,0,i.A,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.nb,r.G)),e.ob(3,49152,null,0,i.yb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.L,r.e)),e.ob(5,49152,null,0,i.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.ab,r.u)),e.ob(7,49152,null,0,i.Q,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,r.mb,r.F)),e.ob(9,49152,null,0,i.wb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Home"])),(l()(),e.pb(11,0,null,null,5,"ion-content",[],null,null,null,r.R,r.k)),e.ob(12,49152,null,0,i.t,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,h)),e.ob(14,16384,null,0,s.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,0,1,null,f)),e.ob(16,16384,null,0,s.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,14,0,u.user&&u.role),l(n,16,0,!(u.user&&u.role))}),null)}var m=e.lb("app-home",a,(function(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-home",[],null,null,null,g,p)),e.ob(1,114688,null,0,a,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),v=u("iInd");class k{}u.d(n,"HomePageModuleNgFactory",(function(){return y}));var y=e.mb(o,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[t.a,m]],[3,e.j],e.v]),e.zb(4608,s.k,s.j,[e.s,[2,s.r]]),e.zb(4608,c.i,c.i,[]),e.zb(4608,i.b,i.b,[e.x,e.g]),e.zb(4608,i.Cb,i.Cb,[i.b,e.j,e.p]),e.zb(4608,i.Gb,i.Gb,[i.b,e.j,e.p]),e.zb(1073742336,s.b,s.b,[]),e.zb(1073742336,c.h,c.h,[]),e.zb(1073742336,c.c,c.c,[]),e.zb(1073742336,i.Ab,i.Ab,[]),e.zb(1073742336,v.o,v.o,[[2,v.t],[2,v.m]]),e.zb(1073742336,k,k,[]),e.zb(1073742336,o,o,[]),e.zb(1024,v.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);