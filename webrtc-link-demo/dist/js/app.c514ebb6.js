(function(e){function n(n){for(var r,o,a=n[0],i=n[1],d=n[2],f=0,l=[];f<a.length;f++)o=a[f],c[o]&&l.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(l.length)l.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==c[a]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-3f7bc161":"e6c4ca16","chunk-1900bbfe":"5cfb2dbd","chunk-3b970b54":"bd5bcecf","chunk-6f8d3edc":"54d1dcdb","chunk-99dd8e8e":"aea2e57e"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1900bbfe":1,"chunk-3b970b54":1,"chunk-6f8d3edc":1,"chunk-99dd8e8e":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-3f7bc161":"31d6cfe0","chunk-1900bbfe":"6c59eca4","chunk-3b970b54":"3530f54f","chunk-6f8d3edc":"efcd9f46","chunk-99dd8e8e":"db89ad72"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var d=u[a],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===r||f===c))return n()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){d=l[a],f=d.getAttribute("data-href");if(f===r||f===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],s.parentNode.removeChild(s),t(u)},s.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(s)}).then(function(){o[e]=0}));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise(function(n,t){r=c[e]=[n,t]});n.push(r[2]=u);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e),d=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,t[1](u)}c[e]=void 0}};var l=setTimeout(function(){d({type:"timeout",target:f})},12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var s=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],u=(t("d25f"),t("ac6a"),t("f3e2"),t("7f7f"),t("daa8"));u.io,navigator.mediaDevices.getSupportedConstraints();var a={name:"app",components:{},data:function(){return{linkSocket:void 0,userId:99,roomId:1001}},created:function(){},methods:{}},i=a,d=(t("034f"),t("2877")),f=Object(d["a"])(i,o,c,!1,null,null,null),l=f.exports,s=t("8c4f");r["default"].use(s["a"]);var p=[{path:"/demo01",name:"demo01",component:function(){return Promise.all([t.e("chunk-3f7bc161"),t.e("chunk-6f8d3edc")]).then(t.bind(null,"f334"))}},{path:"/demo02",name:"demo02",component:function(){return Promise.all([t.e("chunk-3f7bc161"),t.e("chunk-3b970b54")]).then(t.bind(null,"ed5d"))}},{path:"/demo03-one2one",name:"demo03-one2one",component:function(){return Promise.all([t.e("chunk-3f7bc161"),t.e("chunk-1900bbfe")]).then(t.bind(null,"18ea"))}},{path:"/demo03-one2many",name:"demo03-one2many",component:function(){return Promise.all([t.e("chunk-3f7bc161"),t.e("chunk-99dd8e8e")]).then(t.bind(null,"6cc7"))}}],h=new s["a"]({mode:"history",scrollBehavior:function(){return{y:0}},routes:p}),m=h,b=t("5c96"),v=t.n(b);t("0fae");r["default"].config.productionTip=!1,r["default"].use(v.a);var g="https:"===window.location.protocol?"wss://":"ws://",k=window.location.host,y=g+k;console.log("current server ",y),console.log(Object({NODE_ENV:"production",BASE_URL:"/"}));var w=y;r["default"].prototype.$serverSocketUrl=w,new r["default"]({router:m,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,n,t){}});
//# sourceMappingURL=app.c514ebb6.js.map