(function(e){function n(n){for(var a,o,u=n[0],i=n[1],l=n[2],b=0,d=[];b<u.length;b++)o=u[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);s&&s(n);while(d.length)d.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,o=1;o<t.length;o++){var i=t[o];0!==c[i]&&(a=!1)}a&&(r.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},c={app:0},r=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ae4f0":"080b515f","chunk-2d0c89f3":"ecc9e619","chunk-2d0d63f1":"0d0abb56","chunk-2d21e30b":"7fb59df0","chunk-5eab446f":"afa3ef00","chunk-ba527bba":"7dbf6e80","chunk-3d93d47d":"f726feda","chunk-5ee34f57":"55b56800","chunk-687ebe67":"54fdc1e7","chunk-c43f1dda":"9bd9ab86"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=c[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,a){t=c[e]=[n,a]}));n.push(t[2]=a);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=o(e);var l=new Error;r=function(n){i.onerror=i.onload=null,clearTimeout(b);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,t[1](l)}c[e]=void 0}};var b=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/vue3-week6-project/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var b=0;b<i.length;b++)n(i[b]);var s=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"186f":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("7a23"),c=t("8a14"),r=(t("fe26"),t("bc3a")),o=t.n(r),u=t("2106"),i=t.n(u),l=t("7bb1"),b=t("3aa8"),s=t("cbdf"),d=t("9457"),f=Object(a["h"])("span",{class:"text-light"},"App.vue",-1);function h(e,n){var t=Object(a["A"])("router-view");return Object(a["t"])(),Object(a["e"])(a["a"],null,[f,Object(a["h"])(t)],64)}t("5cee");const p={};p.render=h;var v=p,j=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),O={class:"container py-5"},m=Object(a["h"])("h1",{class:"fw-bold text-secondary mb-4"},"前台",-1),g={class:"navbar navbar-expand-lg navbar-light bg-light"},k={class:"container-fluid"},y=Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1),w={class:"collapse navbar-collapse",id:"navbarNav"},_={class:"navbar-nav"},L={class:"nav-item"},P=Object(a["g"])("首頁"),x={class:"nav-item"},T=Object(a["g"])("產品列表"),M={class:"nav-item me-auto"},A=Object(a["g"])("購物車列表"),S={class:"navbar-nav ms-auto"},E={class:"nav-item"},N=Object(a["g"])("後台管理"),$={key:0,class:"nav-item"},C=Object(a["g"])("登入"),q={key:1,class:"nav-item"},z={class:"container py-4"};function F(e,n,t,c,r,o){var u=Object(a["A"])("router-link"),i=Object(a["A"])("router-view");return Object(a["t"])(),Object(a["e"])(a["a"],null,[Object(a["h"])("div",O,[m,Object(a["h"])("nav",g,[Object(a["h"])("div",k,[y,Object(a["h"])("div",w,[Object(a["h"])("ul",_,[Object(a["h"])("li",L,[Object(a["h"])(u,{to:"/",class:"nav-link"},{default:Object(a["L"])((function(){return[P]})),_:1})]),Object(a["h"])("li",x,[Object(a["h"])(u,{to:{name:"產品列表"},class:"nav-link"},{default:Object(a["L"])((function(){return[T]})),_:1})]),Object(a["h"])("li",M,[Object(a["h"])(u,{to:{name:"購物車列表"},class:"nav-link"},{default:Object(a["L"])((function(){return[A]})),_:1})])]),Object(a["h"])("ul",S,[Object(a["h"])("li",E,[Object(a["h"])(u,{to:"admin",class:"nav-link"},{default:Object(a["L"])((function(){return[N]})),_:1})]),r.isLogin?Object(a["f"])("",!0):(Object(a["t"])(),Object(a["e"])("li",$,[Object(a["h"])(u,{to:{name:"登入"},class:"nav-link"},{default:Object(a["L"])((function(){return[C]})),_:1})])),r.isLogin?(Object(a["t"])(),Object(a["e"])("li",q,[Object(a["h"])("a",{href:"#",class:"nav-link",onClick:n[1]||(n[1]=Object(a["N"])((function(){return o.logout&&o.logout.apply(o,arguments)}),["prevent"]))},"登出")])):Object(a["f"])("",!0)])])])])]),Object(a["h"])("div",z,[Object(a["h"])(i)])],64)}t("ac1f"),t("5319");var I={data:function(){return{isLogin:!1}},created:function(){var e=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1");this.isLogin=!!e},methods:{logout:function(){this.isLogin=!1,document.cookie="token=; expires=; path=/",document.cookie="user_id=; expires=; path=/",alert("已成功登出，即將返回首頁"),this.$router.push("/")}}};I.render=F;var J=I,W=[{path:"/",name:"Home",component:J,children:[{path:"",name:"前台首頁",component:function(){return t.e("chunk-2d21e30b").then(t.bind(null,"d504"))}},{path:"products",name:"產品列表",component:function(){return Promise.all([t.e("chunk-ba527bba"),t.e("chunk-5ee34f57")]).then(t.bind(null,"e6dc"))}},{path:"productInfo/:id",name:"產品介紹",component:function(){return Promise.all([t.e("chunk-ba527bba"),t.e("chunk-3d93d47d")]).then(t.bind(null,"2e27"))},props:function(e){return{id:e.params.id}}},{path:"carts",name:"購物車列表",component:function(){return Promise.all([t.e("chunk-ba527bba"),t.e("chunk-687ebe67")]).then(t.bind(null,"395d"))}},{path:"login",name:"登入",component:function(){return t.e("chunk-5eab446f").then(t.bind(null,"a55b"))}}]},{path:"/admin",component:function(){return t.e("chunk-2d0d63f1").then(t.bind(null,"7277"))},children:[{path:"",component:function(){return t.e("chunk-2d0ae4f0").then(t.bind(null,"0a09"))}},{path:"products",component:function(){return Promise.all([t.e("chunk-ba527bba"),t.e("chunk-c43f1dda")]).then(t.bind(null,"d416"))}},{path:"orders",component:function(){return t.e("chunk-2d0c89f3").then(t.bind(null,"5651"))}}]}],H=Object(j["a"])({history:Object(j["b"])(),routes:W}),B=H;Object(l["e"])("required",b["c"]),Object(l["e"])("min",b["b"]),Object(l["e"])("email",b["a"]),Object(l["d"])({generateMessage:Object(s["a"])({zh_TW:d}),velidateOnInput:!0}),Object(s["b"])("zh_TW");var D=Object(a["d"])(v);D.use(B),D.use(c["a"]),D.use(i.a,o.a),D.component("Loading",c["a"]),D.component("Form",l["c"]),D.component("Field",l["b"]),D.component("ErrorMessage",l["a"]),D.mount("#app")},"5cee":function(e,n,t){"use strict";t("186f")}});
//# sourceMappingURL=app.4e2b9694.js.map