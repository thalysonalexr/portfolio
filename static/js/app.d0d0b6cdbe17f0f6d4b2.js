webpackJsonp([5],{"/6gk":function(t,n){},"6aE2":function(t,n){},FQwc:function(t,n,e){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("header",[n("h1",[n("i",{staticClass:"fas fa-exclamation-triangle"}),this._v(" Ooops...")]),this._v(" "),n("h2",[this._v("Parece que esta página não está funcionando direito. Tente acessa-la mais tarde. Obrigado pela compreensão.")])])])}]};var s=e("VU/8")(null,a,!1,function(t){e("J03U")},"data-v-5c111255",null);n.a=s.exports},GD1a:function(t,n,e){"use strict";var a=e("FQwc");n.a=function(){return{component:Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"VOYk")),error:a.a,timeout:3e3}}},J03U:function(t,n){},"Je/O":function(t,n,e){"use strict";var a=e("FQwc");n.a=function(){return{component:Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"doEg")),error:a.a,timeout:3e3}}},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),s=e("A5b9"),o=e.n(s),i=e("Dd8w"),r=e.n(i),c=e("NYxO"),l={name:"Navbar",data:function(){return{sidenav:null,nav:{en_US:{home:"About me",projects:"Projects",skills:"Skills",contact:"Contact-me"},pt_BR:{home:"Sobre mim",projects:"Projetos",skills:"Skills",contact:"Contato"}}}},computed:r()({},Object(c.c)(["lang"])),methods:r()({},Object(c.b)(["getLanguage"]),{goEndPage:function(){window.scrollTo(0,document.body.scrollHeight)}}),created:function(){this.getLanguage()},mounted:function(){var t=this,n=document.querySelectorAll(".sidenav");M.Sidenav.init(n,{}),this.sidenav=M.Sidenav.getInstance(n[0]),document.querySelectorAll(".link-mobile").forEach(function(n){n.addEventListener("click",function(n){t.sidenav.close()})})}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"navbar"}},[e("nav",{staticClass:"nav-extended"},[e("div",{staticClass:"nav-wrapper"},[e("router-link",{staticClass:"brand-logo center",attrs:{to:{path:"/portfolio/"},title:"portfolio.me"}},[t._v("\n        portfolio.me\n      ")]),t._v(" "),t._m(0),t._v(" "),e("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[e("li",[e("router-link",{staticClass:"link-mobile",attrs:{to:{path:"/portfolio/"},title:t.nav[t.lang].home}},[e("i",{staticClass:"inline-icon material-icons"},[t._v("\n              star\n            ")]),t._v(" "),e("span",[t._v(t._s(t.nav[t.lang].home))])])],1),t._v(" "),e("li",[e("router-link",{staticClass:"link-mobile",attrs:{to:{path:"/portfolio/projects"},title:t.nav[t.lang].projects}},[e("i",{staticClass:"inline-icon material-icons"},[t._v("\n              work\n            ")]),t._v(" "),e("span",[t._v(t._s(t.nav[t.lang].projects))])])],1),t._v(" "),e("li",[e("router-link",{staticClass:"link-mobile",attrs:{to:{path:"/portfolio/skills"},title:t.nav[t.lang].skills}},[e("i",{staticClass:"inline-icon material-icons"},[t._v("\n              code\n            ")]),t._v(" "),e("span",[t._v(t._s(t.nav[t.lang].skills))])])],1),t._v(" "),e("li",[e("a",{staticClass:"link-mobile",attrs:{title:t.nav[t.lang].contact},on:{click:function(n){return t.goEndPage()}}},[e("i",{staticClass:"inline-icon material-icons"},[t._v("\n              email\n            ")]),t._v(" "),e("span",[t._v(t._s(t.nav[t.lang].contact))])])])])],1)]),t._v(" "),e("ul",{staticClass:"sidenav",attrs:{id:"mobile-demo"}},[e("li",[e("router-link",{staticClass:"link-mobile",attrs:{to:{path:"/portfolio/"},title:t.nav[t.lang].home}},[e("i",{staticClass:"inline-icon material-icons"},[t._v("\n          star\n        ")]),t._v("\n        "+t._s(t.nav[t.lang].home)+"\n      ")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"link-mobile",attrs:{to:{path:"/portfolio/projects"},title:t.nav[t.lang].projects}},[e("i",{staticClass:"inline-icon material-icons"},[t._v("\n          work\n        ")]),t._v("\n        "+t._s(t.nav[t.lang].projects)+"\n      ")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"link-mobile",attrs:{to:{path:"/portfolio/skills"},title:t.nav[t.lang].skills}},[e("i",{staticClass:"inline-icon material-icons"},[t._v("\n          code\n        ")]),t._v("\n        "+t._s(t.nav[t.lang].skills)+"\n      ")])],1),t._v(" "),e("li",[e("a",{staticClass:"link-mobile",attrs:{title:t.nav[t.lang].contact},on:{click:function(n){return t.goEndPage()}}},[e("i",{staticClass:"inline-icon material-icons"},[t._v("email")]),t._v("\n        "+t._s(t.nav[t.lang].contact)+"\n      ")])])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"mobile-demo"}},[n("i",{staticClass:"small material-icons"},[this._v("\n          menu\n        ")])])}]};var p=e("VU/8")(l,u,!1,function(t){e("Q1Mi")},"data-v-5c53e374",null).exports,v={name:"Footer",data:function(){return{footer:{en_US:{title:"Contact me"},pt_BR:{title:"Contate-me"}}}},computed:r()({},Object(c.c)(["contact","lang"])),methods:r()({},Object(c.b)(["loadContact","getLanguage"]),{goBeginPage:function(){window.scrollTo(0,document.body.scrollTop)}}),created:function(){this.getLanguage(),this.loadContact()}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"footer"}},[e("footer",{staticClass:"page-footer skew"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col l6 s12"},[e("h5",{staticClass:"white-text"},[t._v("\n            "+t._s(t.contact.title)+"\n          ")]),t._v(" "),e("p",{staticClass:"apresentation grey-text text-lighten-4"},[t._v("\n            "+t._s(t.contact.apresentation)+"\n          ")])]),t._v(" "),e("div",{staticClass:"col l4 offset-l2 s12"},[e("h5",{staticClass:"white-text"},[t._v("\n            "+t._s(t.footer[t.lang].title)+"\n          ")]),t._v(" "),e("ul",{staticClass:"links-contact"},t._l(t.contact.pages,function(t,n){return e("li",{key:n},[e("a",{staticClass:"grey-text text-lighten-3",attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer",title:t.type}},[e("i",{class:t.class})])])}),0)])])]),t._v(" "),e("div",{staticClass:"footer-copyright"},[e("div",{staticClass:"container"},[t._v("\n        © "+t._s((new Date).getFullYear())+" Copyright "+t._s(t.contact.name)+"\n        "),e("a",{staticClass:"grey-text text-lighten-4 right",attrs:{title:"Voltar ao topo",href:"#!"},on:{click:function(n){return t.goBeginPage()}}},[e("i",{staticClass:"material-icons"},[t._v("\n            keyboard_arrow_up\n          ")])])])])])])},staticRenderFns:[]};var m={name:"App",components:{"v-navbar":p,"v-footer":e("VU/8")(v,f,!1,function(t){e("c6xJ")},"data-v-07ab58aa",null).exports}},d={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-navbar"),this._v(" "),n("router-view"),this._v(" "),n("v-footer")],1)},staticRenderFns:[]};var g,h,_,k,b=e("VU/8")(m,d,!1,function(t){e("6aE2")},null,null).exports,C=e("YaEn"),w=e("Xxa5"),x=e.n(w),j=e("exGp"),y=e.n(j),E=e("mtWM"),P=this,S=e.n(E).a.create({baseURL:"https://raw.githubusercontent.com",timeout:3e4,headers:{"Content-Type":"application/json"}}),U="/thalysonalexr/portfolio-files/master/data/compress/"+(navigator.language||navigator.userLanguage?"pt_BR":"en_US"),L=(g=y()(x.a.mark(function t(){var n;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.get(U+"/about.json");case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,P)})),function(){return g.apply(this,arguments)}),O=(h=y()(x.a.mark(function t(){var n;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.get(U+"/skills.json");case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,P)})),function(){return h.apply(this,arguments)}),q=(_=y()(x.a.mark(function t(){var n;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.get(U+"/projects.json");case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,P)})),function(){return _.apply(this,arguments)}),A=(k=y()(x.a.mark(function t(){var n;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.get(U+"/contact.json");case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,P)})),function(){return k.apply(this,arguments)}),F=this;a.a.use(c.a);var R,Y,J=new c.a.Store({state:{about:{},contact:{},projects:[],skills:[],lang:null},mutations:{setAbout:function(t,n){t.about=n},setProjects:function(t,n){t.projects=n},setSkills:function(t,n){t.skills=n},setContact:function(t,n){t.contact=n},setLanguage:function(t,n){t.lang=n}},getters:{about:function(t){return t.about},contact:function(t){return t.contact},projects:function(t){return t.projects},skills:function(t){return t.skills},lang:function(t){return t.lang}},actions:{loadAbout:function(){var t=y()(x.a.mark(function t(n){var e,a,s=n.commit;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L();case 2:e=t.sent,a=e.data,s("setAbout",a.user);case 5:case"end":return t.stop()}},t,F)}));return function(n){return t.apply(this,arguments)}}(),loadProjects:function(){var t=y()(x.a.mark(function t(n){var e,a,s=n.commit;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:e=t.sent,a=e.data,s("setProjects",a.projects);case 5:case"end":return t.stop()}},t,F)}));return function(n){return t.apply(this,arguments)}}(),loadSkills:(Y=y()(x.a.mark(function t(n){var e,a,s=n.commit;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:e=t.sent,a=e.data,s("setSkills",a.skills);case 5:case"end":return t.stop()}},t,F)})),function(t){return Y.apply(this,arguments)}),loadContact:(R=y()(x.a.mark(function t(n){var e,a,s=n.commit;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:e=t.sent,a=e.data,s("setContact",a.contact);case 5:case"end":return t.stop()}},t,F)})),function(t){return R.apply(this,arguments)}),getLanguage:function(t){(0,t.commit)("setLanguage",navigator.language||navigator.userLanguage?"pt_BR":"en_US")}}}),V=e("/6gk"),B=e.n(V),Q=e("jKqc"),T=e.n(Q);e("0lrd"),e("aqYZ"),e("gkYU"),e("U54J");a.a.config.productionTip=!1,a.a.use(B.a),a.a.use(T.a),a.a.use(o.a),new a.a({el:"#app",router:C.a,store:J,wait:new o.a({useVuex:!0}),components:{App:b},template:"<App/>"})},Q1Mi:function(t,n){},YaEn:function(t,n,e){"use strict";(function(t){var a=e("7+uW"),s=e("/ocq"),o=e("pqMM"),i=e("Je/O"),r=e("GD1a");a.a.use(s.a),n.a=new s.a({mode:"history",path:t,routes:[{path:"/",redirect:"/portfolio/"},{path:"/portfolio/",name:"Home",component:o.a},{path:"/portfolio/projects",name:"Projects",component:r.a},{path:"/portfolio/skills",name:"Skills",component:i.a},{path:"/*",redirect:"/portfolio/"}]})}).call(n,"/")},aqYZ:function(t,n){},c6xJ:function(t,n){},gkYU:function(t,n){},jKqc:function(t,n){},pqMM:function(t,n,e){"use strict";var a=e("FQwc");n.a=function(){return{component:Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"wXUp")),error:a.a,timeout:3e3}}}},["NHnr"]);
//# sourceMappingURL=app.d0d0b6cdbe17f0f6d4b2.js.map