(function(t){function e(e){for(var r,a,s=e[0],i=e[1],c=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},u=[];function a(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e9ae796c"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=a(t);var c=new Error;u=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+u+")",c.name="ChunkLoadError",c.type=r,c.request=u,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=c;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},u=[],a=n("2877"),s={},i=Object(a["a"])(s,o,u,!1,null,null,null),c=i.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Posts")],1)},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.posts,(function(e){return n("div",{key:e.id},[t._v(t._s(e.attributes.title))])})),0)},v=[],b=n("2f62"),m={name:"Posts",computed:Object(b["b"])({posts:function(t){return t.posts.all}}),created:function(){this.$store.dispatch("posts/getAllPosts")}},h=m,g=Object(a["a"])(h,d,v,!1,null,"30ace8f7",null),y=g.exports,w={name:"home",components:{Posts:y}},P=w,_=Object(a["a"])(P,p,f,!1,null,null,null),j=_.exports;r["a"].use(l["a"]);var O=new l["a"]({routes:[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),x=n("b054"),k=n.n(x),S=(n("7514"),n("0631")),E=n.n(S);E.a.init({appId:"wDBn8DFbWHM1ytYjpcG97tVr-9Nh9j0Va",appKey:"d8BLwhuGSpBuU8RFXfVdKoTI"}),E.a.debug.enable();var T=E.a,M={getPosts:function(t){var e=new T.Query("post");return t&&(e=t(e)),e.find()}},$={all:[]},A={},B={getAllPosts:function(t){var e=t.commit;M.getPosts((function(t){return t.select(["title"])})).then((function(t){return e("setPosts",t)}))}},C={setPosts:function(t,e){t.all=e}},L={namespaced:!0,state:$,getters:A,actions:B,mutations:C};r["a"].use(b["a"]);var V=!1,D=new b["a"].Store({modules:{posts:L},strict:V,plugins:V?[k()()]:[]});r["a"].config.productionTip=!1,new r["a"]({router:O,store:D,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.ce36d1a8.js.map