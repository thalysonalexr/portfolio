webpackJsonp([0],{"+zNu":function(n,i){},NxGh:function(n,i,t){"use strict";var e=t("a3f3"),l=(t("c+ko"),t("+zNu"),{name:"Loading",data:function(){return{pleaseWaitInstance:null}},mounted:function(){this.updatePleaseWait()},beforeUpdate:function(){this.updatePleaseWait()},methods:{updatePleaseWait:function(){null==this.pleaseWaitInstance&&(this.pleaseWaitInstance=Object(e.pleaseWait)({backgroundColor:"var(--color-primary)",loadingHtml:'\n          <div class="sk-chase">\n            <div class="sk-chase-dot"></div>\n            <div class="sk-chase-dot"></div>\n            <div class="sk-chase-dot"></div>\n            <div class="sk-chase-dot"></div>\n            <div class="sk-chase-dot"></div>\n            <div class="sk-chase-dot"></div>\n          </div>\n          <p class="loading-message">Carregando...</p>\n          '})),this.isLoading||null==this.pleaseWaitInstance||this.pleaseWaitInstance.finish()}}}),o={render:function(){var n=this.$createElement;return(this._self._c||n)("span")},staticRenderFns:[]};var a=t("VU/8")(l,o,!1,function(n){t("jvJP")},null,null);i.a=a.exports},a3f3:function(n,i,t){(function(n){var i,t,e,l,o,a,s,d,r,m,g,h,c,u,p,_;for(s in a=document.createElement("fakeelement"),l=!1,c=!1,e="animationend",h=null,o="Webkit Moz O ms".split(" "),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"})if(u=g[s],null!=a.style[s]){h=u,c=!0;break}if(null!=a.style.animationName&&(l=!0),!l)for(p=0,_=o.length;p<_;p++)if(d=o[p],null!=a.style[d+"AnimationName"]){switch(d){case"Webkit":e="webkitAnimationEnd";break;case"Moz":e="animationend";break;case"O":e="oanimationend";break;case"ms":e="MSAnimationEnd"}l=!0;break}t=function(n,i){return i.classList?i.classList.add(n):i.className+=" "+n},m=function(n,i){return i.classList?i.classList.remove(n):i.className=i.className.replace(n,"").trim()},i=function(){function n(n){var i,o,a,s,d;for(o in i=this.constructor._defaultOptions,this.options={},this.loaded=!1,this.finishing=!1,i)s=i[o],this.options[o]=null!=n[o]?n[o]:s;this._loadingElem=document.createElement("div"),this._loadingHtmlToDisplay=[],this._loadingElem.className="pg-loading-screen",null!=this.options.backgroundColor&&(this._loadingElem.style.backgroundColor=this.options.backgroundColor),this._loadingElem.innerHTML=this.options.template,this._loadingHtmlElem=this._loadingElem.getElementsByClassName("pg-loading-html")[0],null!=this._loadingHtmlElem&&(this._loadingHtmlElem.innerHTML=this.options.loadingHtml),this._readyToShowLoadingHtml=!1,this._logoElem=this._loadingElem.getElementsByClassName("pg-loading-logo")[0],null!=this._logoElem&&(this._logoElem.src=this.options.logo),m("pg-loaded",document.body),t("pg-loading",document.body),document.body.appendChild(this._loadingElem),t("pg-loading",this._loadingElem),this._onLoadedCallback=this.options.onLoadedCallback,d=this,a=function(n){if(d.loaded=!0,d._readyToShowLoadingHtml=!0,t("pg-loaded",d._loadingHtmlElem),l&&d._loadingHtmlElem.removeEventListener(e,a),d._loadingHtmlToDisplay.length>0&&d._changeLoadingHtml(),d.finishing)return null!=n&&n.stopPropagation(),d._finish()},null!=this._loadingHtmlElem&&(l?this._loadingHtmlElem.addEventListener(e,a):a(),this._loadingHtmlListener=function(n){return function(){if(n._readyToShowLoadingHtml=!0,m("pg-loading",n._loadingHtmlElem),c&&n._loadingHtmlElem.removeEventListener(h,n._loadingHtmlListener),n._loadingHtmlToDisplay.length>0)return n._changeLoadingHtml()}}(this),this._removingHtmlListener=function(n){return function(){return n._loadingHtmlElem.innerHTML=n._loadingHtmlToDisplay.shift(),m("pg-removing",n._loadingHtmlElem),t("pg-loading",n._loadingHtmlElem),c?(n._loadingHtmlElem.removeEventListener(h,n._removingHtmlListener),n._loadingHtmlElem.addEventListener(h,n._loadingHtmlListener)):n._loadingHtmlListener()}}(this))}return n._defaultOptions={backgroundColor:null,logo:null,loadingHtml:null,template:"<div class='pg-loading-inner'>\n  <div class='pg-loading-center-outer'>\n    <div class='pg-loading-center-middle'>\n      <h1 class='pg-loading-logo-header'>\n        <img class='pg-loading-logo'></img>\n      </h1>\n      <div class='pg-loading-html'>\n      </div>\n    </div>\n  </div>\n</div>",onLoadedCallback:null},n.prototype.finish=function(n,i){if(null==n&&(n=!1),window.document.hidden&&(n=!0),this.finishing=!0,null!=i&&this.updateOption("onLoadedCallback",i),this.loaded||n)return this._finish(n)},n.prototype.updateOption=function(n,i){switch(n){case"backgroundColor":return this._loadingElem.style.backgroundColor=i;case"logo":return this._logoElem.src=i;case"loadingHtml":return this.updateLoadingHtml(i);case"onLoadedCallback":return this._onLoadedCallback=i;default:throw new Error("Unknown option '"+n+"'")}},n.prototype.updateOptions=function(n){var i,t,e;for(i in null==n&&(n={}),e=[],n)t=n[i],e.push(this.updateOption(i,t));return e},n.prototype.updateLoadingHtml=function(n,i){if(null==i&&(i=!1),null==this._loadingHtmlElem)throw new Error("The loading template does not have an element of class 'pg-loading-html'");if(i?(this._loadingHtmlToDisplay=[n],this._readyToShowLoadingHtml=!0):this._loadingHtmlToDisplay.push(n),this._readyToShowLoadingHtml)return this._changeLoadingHtml()},n.prototype._changeLoadingHtml=function(){return this._readyToShowLoadingHtml=!1,this._loadingHtmlElem.removeEventListener(h,this._loadingHtmlListener),this._loadingHtmlElem.removeEventListener(h,this._removingHtmlListener),m("pg-loading",this._loadingHtmlElem),m("pg-removing",this._loadingHtmlElem),c?(t("pg-removing",this._loadingHtmlElem),this._loadingHtmlElem.addEventListener(h,this._removingHtmlListener)):this._removingHtmlListener()},n.prototype._finish=function(n){var i,o;if(null==n&&(n=!1),null!=this._loadingElem)return t("pg-loaded",document.body),"function"==typeof this._onLoadedCallback&&this._onLoadedCallback.apply(this),o=this,i=function(){return document.body.removeChild(o._loadingElem),m("pg-loading",document.body),l&&o._loadingElem.removeEventListener(e,i),o._loadingElem=null},!n&&l?(t("pg-loaded",this._loadingElem),this._loadingElem.addEventListener(e,i)):i()},n}(),r=function(n){return null==n&&(n={}),new i(n)},n.pleaseWait=r})(i)},"c+ko":function(n,i){},jvJP:function(n,i){}});
//# sourceMappingURL=0.254734196e584dcc1e37.js.map