(function(e){function n(n){for(var r,c,o=n[0],i=n[1],f=n[2],l=0,d=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&d.push(u[c][0]),u[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(d.length)d.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var o=t[c];0!==u[o]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},u={app:0},a=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1f980e16":"3edf5ebd","chunk-ff5c4bbe":"f1bdd0a0","chunk-2daf401c":"7308a304","chunk-6ce7e6c6":"a23eac24","chunk-7139446d":"2bfc6e50","chunk-794e1472":"7d941ac2","chunk-1db17d2b":"10e916db","chunk-2989a959":"f613a92f","chunk-6b2b1587":"3e34f923"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1f980e16":1,"chunk-2daf401c":1,"chunk-6ce7e6c6":1,"chunk-1db17d2b":1,"chunk-2989a959":1,"chunk-6b2b1587":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-1f980e16":"321c5cc8","chunk-ff5c4bbe":"31d6cfe0","chunk-2daf401c":"d2ca0db9","chunk-6ce7e6c6":"d096c8c4","chunk-7139446d":"31d6cfe0","chunk-794e1472":"31d6cfe0","chunk-1db17d2b":"0993a2bb","chunk-2989a959":"d07768ac","chunk-6b2b1587":"adc410da"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var f=a[o],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===u))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){f=d[o],l=f.getAttribute("data-href");if(l===r||l===u)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],s.parentNode.removeChild(s),t(a)},s.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){c[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=a);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var d=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}u[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var s=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),c=t.n(r);c.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],a=(t("034f"),t("2877")),o={},i=Object(a["a"])(o,c,u,!1,null,null,null),f=i.exports,l=t("a18c"),d=t("2f62"),s=t("5ae9");r["default"].use(d["a"]);var h=new d["a"].Store({state:{avatar:Object(s["a"])("avatar"),user:Object(s["a"])("user")},mutations:{setAvatar:function(e,n){e.avatar=n},setUser:function(e,n){e.user=n,Object(s["c"])(e.user)}},actions:{readAvatar:function(e){return console.log(111111111111),e.avatar}},modules:{}}),b=t("5c96"),p=t.n(b),m=(t("0fae"),t("953d")),k=t.n(m);t("a753"),t("8096"),t("14e1");r["default"].use(p.a),r["default"].use(k.a),r["default"].config.productionTip=!1,new r["default"]({router:l["a"],store:h,render:function(e){return e(f)}}).$mount("#app")},"5ae9":function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return a}));var r=window.localStorage,c=function(e){return JSON.parse(r.getItem(e))},u=function(e,n){r.setItem(e,JSON.stringify(n))},a=function(e){r.removeItem(e)}},"85ec":function(e,n,t){},a18c:function(e,n,t){"use strict";t("d3b7");var r=t("2b0e"),c=t("8c4f"),u=t("5ae9");r["default"].use(c["a"]);var a=[{path:"/login",name:"login",component:function(){return Promise.all([t.e("chunk-ff5c4bbe"),t.e("chunk-6ce7e6c6")]).then(t.bind(null,"9ed6"))}},{path:"",name:"layout",component:function(){return t.e("chunk-1f980e16").then(t.bind(null,"162e"))},children:[{path:"/",name:"home",component:function(){return Promise.all([t.e("chunk-ff5c4bbe"),t.e("chunk-794e1472"),t.e("chunk-1db17d2b")]).then(t.bind(null,"7abe"))}},{path:"/article",name:"article",component:function(){return Promise.all([t.e("chunk-ff5c4bbe"),t.e("chunk-7139446d")]).then(t.bind(null,"230c"))}},{path:"/label",name:"label",component:function(){return Promise.all([t.e("chunk-ff5c4bbe"),t.e("chunk-2daf401c")]).then(t.bind(null,"54da"))}},{path:"user_info",name:"userInfo",component:function(){return Promise.all([t.e("chunk-ff5c4bbe"),t.e("chunk-794e1472"),t.e("chunk-2989a959")]).then(t.bind(null,"bba8"))}},{path:"/music",name:"music",component:function(){return Promise.all([t.e("chunk-ff5c4bbe"),t.e("chunk-794e1472"),t.e("chunk-6b2b1587")]).then(t.bind(null,"aa6a"))}}]}],o=new c["a"]({routes:a});o.beforeEach((function(e,n,t){"/login"===e.path&&Object(u["a"])("token")?t("/"):t()})),n["a"]=o}});
//# sourceMappingURL=app.3531e76e.js.map