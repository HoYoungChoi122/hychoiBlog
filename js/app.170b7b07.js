(function(e){function t(t){for(var r,a,c=t[0],l=t[1],i=t[2],s=0,d=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&d.push(u[a][0]),u[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==u[c]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},u={app:0},o=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0abe2c":"f28de90b","chunk-2d0c951a":"42ede9dc","chunk-2d216bff":"d8f71236","chunk-2d21e064":"bfe75402","chunk-4193a338":"98ff2fce","chunk-771c058e":"7bb5fe49"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-4193a338":1,"chunk-771c058e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0abe2c":"31d6cfe0","chunk-2d0c951a":"31d6cfe0","chunk-2d216bff":"31d6cfe0","chunk-2d21e064":"31d6cfe0","chunk-4193a338":"99cc0e9b","chunk-771c058e":"e0bbe176"}[e]+".css",u=l.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===u))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],s=i.getAttribute("data-href");if(s===r||s===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var d=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}u[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("topBar"),n("router-view")],1)},u=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top-bar-wrapper"},[n("b-navbar",{class:[e.scrollY>=500?e.top_navbar:""],attrs:{toggleable:"lg",type:"light",variant:"faded"}},[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("HY CHOI "+e._s(e.scrollY))]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[e._l(this.$store.state.menuList,(function(t){return n("b-nav-item",{key:t.value,attrs:{to:t.urlPath}},[e._v(e._s(t.menuName))])})),n("b-nav-item",{attrs:{to:"/",disabled:""}},[e._v("Disabled")])],2),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1)],1)],1)],1)],1)},c=[],l={name:"topBar",data:function(){return{scrollY:0,timer:null,top_navbar:"top_navbar"}},created:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){null===this.timer&&(this.timer=setTimeout(function(){this.scrollY=window.scrollY,clearTimeout(this.timer),this.timer=null}.bind(this),200))}},mounted:function(){}},i=l,s=(n("7af1"),n("2877")),d=Object(s["a"])(i,o,c,!1,null,"bd497d5e",null),f=d.exports,h={name:"App",components:{topBar:f}},p=h,m=(n("034f"),Object(s["a"])(p,a,u,!1,null,null,null)),b=m.exports,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),g=n("5f5b"),y=(n("f9e3"),n("2dd8"),{menu:[{path:"testPage",component:function(){return n.e("chunk-4193a338").then(n.bind(null,"6dbf"))}},{path:"codeReview",component:function(){return n.e("chunk-2d0c951a").then(n.bind(null,"5944"))}},{path:"menu3",component:function(){return n.e("chunk-2d0abe2c").then(n.bind(null,"16d5"))}},{path:"menu4",component:function(){return n.e("chunk-2d21e064").then(n.bind(null,"d497"))}}],board:[]}),k=y;r["default"].use(v["a"]),r["default"].use(g["a"]);var w=new v["a"]({routes:[{path:"/",name:"index",component:function(){return n.e("chunk-771c058e").then(n.bind(null,"6e78"))}},{path:"/menu",name:"menu",component:function(){return n.e("chunk-2d216bff").then(n.bind(null,"c491"))},children:k.menu}]}),_=w,E=n("2f62");r["default"].use(E["a"]);var P=new E["a"].Store({state:{counter:0,thisYear:(new Date).getFullYear(),menuList:[{menuName:"TEST PAGE",value:1,urlPath:"/menu/testPage"},{menuName:"CODE REVIEW",value:2,urlPath:"/menu/codeReview"},{menuName:"MENU3",value:3,urlPath:"/menu/menu3"},{menuName:"MENU4",value:4,urlPath:"/menu/menu4"}]}});r["default"].config.productionTip=!1,new r["default"]({store:P,render:function(e){return e(b)},router:_}).$mount("#app")},"7af1":function(e,t,n){"use strict";n("ac8a")},"85ec":function(e,t,n){},ac8a:function(e,t,n){}});
//# sourceMappingURL=app.170b7b07.js.map