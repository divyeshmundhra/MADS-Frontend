(function(e){function n(n){for(var r,o,a=n[0],u=n[1],c=n[2],l=0,d=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(n);while(d.length)d.shift()();return s.push.apply(s,c||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==i[a]&&(r=!1)}r&&(s.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={index:0},i={index:0},s=[];function a(e){return u.p+"assets/js/"+({app:"app","device-configuration":"device-configuration",error:"error",piaf:"piaf","second-menu":"second-menu",single:"single",user:"user"}[e]||e)+"."+{app:"3930d676","device-configuration":"7fcbc627",error:"05b5b5b4",piaf:"6d807ce9","second-menu":"3767a158",single:"c19b9905",user:"43103f31"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={piaf:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="assets/css/"+({app:"app","device-configuration":"device-configuration",error:"error",piaf:"piaf","second-menu":"second-menu",single:"single",user:"user"}[e]||e)+"."+{app:"31d6cfe0","device-configuration":"31d6cfe0",error:"31d6cfe0",piaf:"509cad3b","second-menu":"31d6cfe0",single:"31d6cfe0",user:"31d6cfe0"}[e]+".css",i=u.p+r,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var c=s[a],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===i))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){c=d[a],l=c.getAttribute("data-href");if(l===r||l===i)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],f.parentNode.removeChild(f),t(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(n,t){r=i[e]=[n,t]}));n.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e);var d=new Error;c=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=i[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var f=l;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0e3f":function(e,n,t){},"2b47":function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"h",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"i",(function(){return s})),t.d(n,"g",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"f",(function(){return c})),t.d(n,"e",(function(){return l})),t.d(n,"a",(function(){return d}));var r="menu-sub-hidden",o="/app/pages/search",i="https://1.envato.market/nEyZa",s=1440,a=768,u="en",c=[{id:"en",name:"English"},{id:"es",name:"Español"}],l={apiKey:"AIzaSyBBksq-Asxq2M4Ot-75X19IyrEYJqNBPcg",authDomain:"gogo-react-login.firebaseapp.com",databaseURL:"https://gogo-react-login.firebaseio.com",projectId:"gogo-react-login",storageBucket:"gogo-react-login.appspot.com",messagingSenderId:"216495999563"},d="https://api.coloredstrategies.com"},"56d7":function(e,n,t){"use strict";t.r(n);t("14c6"),t("08c1"),t("4842"),t("d9fc");var r=t("2b0e"),o=t("8c4f"),i=function(e,n,t){null!=localStorage.getItem("user")&&localStorage.getItem("user").length>0?t():(localStorage.removeItem("user"),t("/user/login"))};r["default"].use(o["a"]);var s=[{path:"/",component:function(){return t.e("app").then(t.bind(null,"f82c"))},redirect:"/app/device-configuration",beforeEnter:i,children:[{path:"app/device-configuration",component:function(){return t.e("device-configuration").then(t.bind(null,"9bd3"))},redirect:"/app/device-configuration/sensor-type",children:[{path:"sensor-type",component:function(){return t.e("piaf").then(t.bind(null,"a537"))}}]},{path:"app/second-menu",component:function(){return t.e("second-menu").then(t.bind(null,"f8bb"))},redirect:"/app/second-menu/second",children:[{path:"second",component:function(){return t.e("second-menu").then(t.bind(null,"dc90"))}}]},{path:"app/single",component:function(){return t.e("single").then(t.bind(null,"a6cc"))}}]},{path:"/error",component:function(){return t.e("error").then(t.bind(null,"dda8"))}},{path:"/user",component:function(){return t.e("user").then(t.bind(null,"e382"))},redirect:"/user/login",children:[{path:"login",component:function(){return t.e("user").then(t.bind(null,"ac2a"))}},{path:"register",component:function(){return t.e("user").then(t.bind(null,"1348"))}},{path:"forgot-password",component:function(){return t.e("user").then(t.bind(null,"37cb"))}}]},{path:"*",component:function(){return t.e("error").then(t.bind(null,"dda8"))}}],a=new o["a"]({linkActiveClass:"active",routes:s,mode:"history"}),u=a,c=t("2f62"),l=(t("6762"),t("2fdb"),t("28a5"),t("2b47")),d={menuType:l["d"],clickCount:0,selectedMenuHasSubItems:"menu-default"===l["d"]},f={getMenuType:function(e){return e.menuType},getSelectedMenuHasSubItems:function(e){return e.selectedMenuHasSubItems},getMenuClickCount:function(e){return e.clickCount%4}},p={changeSideMenuStatus:function(e,n){var t=n.classNames,r=n.step,o=t.split(" ").filter((function(e){return""!==e})),i="";e.selectedMenuHasSubItems||(o.includes("menu-default")&&r%4===0&&(r=1),o.includes("menu-sub-hidden")&&r%4===3&&(r=1)),r%4===0?(o.includes("menu-default")&&o.includes("menu-sub-hidden")?i="menu-default menu-sub-hidden":o.includes("menu-default")?i="menu-default":o.includes("menu-sub-hidden")?i="menu-sub-hidden":o.includes("menu-hidden")&&(i="menu-hidden"),r=0):r%4===1?o.includes("menu-default")&&o.includes("menu-sub-hidden")?i="menu-default menu-sub-hidden main-hidden sub-hidden":o.includes("menu-default")?i="menu-default sub-hidden":o.includes("menu-sub-hidden")?i="menu-sub-hidden main-hidden sub-hidden":o.includes("menu-hidden")&&(i="menu-hidden main-show-temporary"):r%4===2?o.includes("menu-default")&&o.includes("menu-sub-hidden")?i="menu-default menu-sub-hidden sub-hidden":o.includes("menu-default")?i="menu-default main-hidden sub-hidden":o.includes("menu-sub-hidden")?i="menu-sub-hidden sub-hidden":o.includes("menu-hidden")&&(i="menu-hidden main-show-temporary sub-show-temporary"):r%4===3&&(o.includes("menu-default")&&o.includes("menu-sub-hidden")?i="menu-default menu-sub-hidden sub-show-temporary":o.includes("menu-default")?i="menu-default sub-hidden":o.includes("menu-sub-hidden")?i="menu-sub-hidden sub-show-temporary":o.includes("menu-hidden")&&(i="menu-hidden main-show-temporary")),o.includes("menu-mobile")&&(i+=" menu-mobile"),e.menuType=i,e.clickCount=r},changeSelectedMenuHasSubItems:function(e,n){e.selectedMenuHasSubItems=n},addMenuClassname:function(e,n){var t=n.classname,r=n.currentClasses,o=!r.indexOf(t)>-1?r+" "+t:r;e.menuType=o},changeSideMenuForMobile:function(e,n){var t=n?n.split(" ").filter((function(e){return""!==e&&"sub-show-temporary"!==e})):"",r="";r=t.includes("main-show-temporary")?t.filter((function(e){return"main-show-temporary"!==e})).join(" "):t.join(" ")+" main-show-temporary",e.menuType=r,e.menuClickCount=0}},m={},g={state:d,getters:f,mutations:p,actions:m},h=(t("8e6e"),t("ac6a"),t("456d"),t("bd86")),b=t("bc3a"),v=t.n(b);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(t,!0).forEach((function(n){Object(h["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var O={state:{currentUser:null!=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,loginError:null,processing:!1},getters:{currentUser:function(e){return e.currentUser},processing:function(e){return e.processing},loginError:function(e){return e.loginError}},mutations:{setUser:function(e,n){e.currentUser=n,e.processing=!1,e.loginError=null},setLogout:function(e){e.currentUser=null,e.processing=!1,e.loginError=null},setProcessing:function(e,n){e.processing=n,e.loginError=null},setError:function(e,n){e.loginError=n,e.currentUser=null,e.processing=!1},clearError:function(e){e.loginError=null}},actions:{login:function(e,n){var t=e.commit;t("clearError"),t("setProcessing",!0),v.a.get("http://5dad77e9c7e88c0014aa2a45.mockapi.io/users/".concat(Math.ceil(Math.random()*Math.floor(10)))).then((function(e){return e.data})).then((function(e){var n=x({},e);localStorage.setItem("user",JSON.stringify(n)),t("setUser",x({},e))}),(function(e){localStorage.removeItem("user"),t("setError",e.message)}))},signOut:function(e){var n=e.commit;localStorage.removeItem("user"),n("setLogout")}}};r["default"].use(c["a"]);var S=new c["a"].Store({state:{},getters:{},mutations:{changeLang:function(e,n){he.$i18n.locale=n,localStorage.setItem("currentLanguage",n)}},actions:{setLang:function(e,n){var t=e.commit;t("changeLang",n)}},modules:{menu:g,user:O}}),w=t("a925"),E=t("edd4"),I=t("a306"),j=(t("0e3f"),t("6b8f"),t("ce2e"),t("5f5b")),P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:{"notification-container":!0,"notification-container-empty":0===e.items.length}},[t("transition-group",{attrs:{name:"ntf",tag:"div",mode:"out"}},e._l(e.items,(function(n){return t("div",{key:n.id,class:"notification notification-"+n.options.type,on:{click:function(t){return e.removeItem(n.id)}}},[t("div",{staticClass:"notification-message"},[n.title?t("h4",{staticClass:"title"},[e._v(e._s(n.title))]):e._e(),e._v(" "),n.message?t("div",{staticClass:"message",domProps:{innerHTML:e._s(n.message)}}):e._e()])])})),0)],1)},M=[],C=(t("6b54"),{data:function(){return{message:null,title:null,options:{type:"success",duration:2e3,permanent:!1},items:[],idx:0}},methods:{createUUID:function(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";return e.replace(/[xy]/g,(function(e){var n=16*Math.random()|0,t="x"===e?n:3&n|8;return t.toString(16)}))},addItem:function(e,n,t,r){var o=this,i={type:e,duration:this.options.duration,permanent:this.options.permanent},s=Object.assign({},i,r),a=this.createUUID(),u={id:a,message:t,title:n,options:s};this.items.push(u),!1===s.permanent&&setTimeout((function(){o.removeItem(a)}),s.duration)},removeItem:function(e){this.items=Object.assign([],this.items.filter((function(n){return n.id!==e})))},removeAll:function(){this.items=[]}}}),k=C,_=(t("9006"),t("2877")),D=Object(_["a"])(k,P,M,!1,null,null,null),$=D.exports,T={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.extend($),r=new t;r.options=Object.assign(r.options,n);var o=r.$mount();document.querySelector("body").appendChild(o.$el),e.$notify=e.prototype.$notify=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success",n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};r.addItem(e,n,t,o)}}},L=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("span",[e.heading&&e.heading.length>0?t("h1",[e._v(e._s(e.heading))]):e._e(),e._v(" "),t("b-nav",{staticClass:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},[t("b-breadcrumb",{attrs:{items:e.items}})],1)],1)},A=[],N={props:["heading"],data:function(){return{items:[]}},methods:{getUrl:function(e,n,t){var r="/"+e.split(n)[0]+n;return"/app"===r&&(r="/"),r}},mounted:function(){var e=this,n=this.$route.path.substr(1),t=n.split("/");for(var r in this.$route.params)t.includes(this.$route.params[r])&&(t=t.filter((function(n){return n!==e.$route.params[r]})));t.map((function(t,r){e.items.push({text:e.$t("menu."+t),to:e.getUrl(n,t,r)})}))}},U=N,R=Object(_["a"])(U,L,A,!1,null,null,null),H=R.exports,B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"position-absolute card-top-buttons"},[t("button",{staticClass:"btn btn-header-light icon-button",on:{click:function(n){return e.$emit("click")}}},[t("i",{staticClass:"simple-icon-refresh"})])])},Y=[],q={},G=Object(_["a"])(q,B,Y,!1,null,null,null),J=G.exports,F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-col",e._b({class:e.classes},"b-col",e.options,!1),[e._t("default")],2)},K=[];function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(t,!0).forEach((function(n){Object(h["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var z={props:["xxs","xs","sm","md","lg","xl","xxl","offset-sm","offset-md","offset-lg","offset-xl","order-sm","order-md","order-lg","order-xl","tag","col","cols","offset","order","align-self","offset-xxs","offset-xxl","order-xxs","order-xxl"],data:function(){return{options:{},classes:{}}},mounted:function(){var e={},n={};for(var t in this.$props)this.$props[t]&&("xxs"===t||"cols"===t?n=W({},n,Object(h["a"])({},"col-"+this.$props[t],!0)):"xs"===t?n=W({},n,Object(h["a"])({},"col-xs-"+this.$props[t],!0)):"xxl"===t?n=W({},n,Object(h["a"])({},"col-xxl-"+this.$props[t],!0)):"offsetXxs"===t?n=W({},n,Object(h["a"])({},"offset-"+this.$props[t],!0)):"offsetXxl"===t?n=W({},n,Object(h["a"])({},"offset-xxl-"+this.$props[t],!0)):"orderXxs"===t?n=W({},n,Object(h["a"])({},"order-"+this.$props[t],!0)):"orderXxl"===t?n=W({},n,Object(h["a"])({},"order-xxl-"+this.$props[t],!0)):e=W({},e,Object(h["a"])({},t,this.$props[t])));this.options=W({},e),this.classes=W({},n)}},V=z,Z=Object(_["a"])(V,F,K,!1,null,null,null),Q=Z.exports,ee=t("9d63"),ne=t.n(ee),te=t("9aba"),re=t.n(te),oe=t("da28"),ie=t.n(oe),se=(t("4418"),t("59ca")),ae=t.n(se),ue=(t("ea7b"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"h-100"},[t("router-view")],1)}),ce=[],le={},de=Object(_["a"])(le,ue,ce,!1,null,null,null),fe=de.exports;r["default"].use(j["a"]),r["default"].use(w["a"]);var pe={en:E,es:I},me=localStorage.getItem("currentLanguage")&&l["f"].filter((function(e){return e.id===localStorage.getItem("currentLanguage")})).length>0?localStorage.getItem("currentLanguage"):l["c"],ge=new w["a"]({locale:me,fallbackLocale:"en",messages:pe});r["default"].use(T),r["default"].component("piaf-breadcrumb",H),r["default"].component("b-refresh-button",J),r["default"].component("b-colxx",Q),r["default"].component("vue-perfect-scrollbar",ne.a),r["default"].use(t("3717")),r["default"].use(re.a),r["default"].use(ie.a,{firstDayOfWeek:2,formats:{title:"MMM YY",weekdays:"WW",navMonths:"MMMM",input:["L","YYYY-MM-DD","YYYY/MM/DD"],dayPopover:"L"},datePickerShowDayPopover:!1,popoverExpanded:!0,popoverDirection:"bottom"}),ae.a.initializeApp(l["e"]);var he=n["default"]=new r["default"]({el:"#app",i18n:ge,router:u,store:S,render:function(e){return e(fe)}})},"6b8f":function(e,n,t){},9006:function(e,n,t){"use strict";var r=t("a2c9"),o=t.n(r);o.a},a2c9:function(e,n,t){},a306:function(e){e.exports=JSON.parse('{"general":{"copyright":"Gogo React © Todos los derechos reservados."},"user":{"login-title":"Iniciar sesión","register":"Registro","forgot-password":"Se te olvidó tu contraseña","email":"E-mail","password":"Contraseña","forgot-password-question":"¿Contraseña olvidada?","fullname":"Nombre completo","login-button":"INICIAR SESIÓN","register-button":"REGISTRO","reset-password-button":"REINICIAR","buy":"COMPRAR","username":"Nombre de Usuario"},"menu":{"app":"Inicio","piaf":"Piaf","dashboards":"Tableros","second-menu":"Segundo Menú","second":"Segundo","start":"Comienzo","single":"Sólo","pages":"Páginas","charts":"Gráficos","search":"Búsqueda","login":"Iniciar sesión","register":"Registro","forgot-password":"Olvidé mi contraseña","error":"Error","applications":"Aplicaciones","todo":"Notas","survey":"Encuesta","chat":"Chatea","ui":"IU"},"pages":{"magic-is-in-the-details":"MAGIC IS IN THE DETAILS","error-title":"Ooops... looks like an error occurred!","error-code":"Error Code","go-back-home":"GO BACK HOME"}}')},ce2e:function(e,n,t){},edd4:function(e){e.exports=JSON.parse('{"general":{"copyright":"Piaf Vue © 2018 All Rights Reserved."},"user":{"login-title":"Login","register":"Register","forgot-password":"Forgot Password","email":"E-mail","password":"Password","forgot-password-question":"Forget password?","fullname":"Full Name","login-button":"LOGIN","register-button":"REGISTER","reset-password-button":"RESET","buy":"BUY","username":"Username"},"menu":{"app":"Home","device-configuration":"Device Configuration","sensor-type":"Sensor Type","piaf":"Piaf","dashboards":"Dashboards","second-menu":"Second Menu","second":"Second","start":"Start","single":"Single","pages":"Pages","login":"Login","register":"Register","forgot-password":"Forgot Password","error":"Error","search":"Search"},"pages":{"magic-is-in-the-details":"MAGIC IS IN THE DETAILS","error-title":"Ooops... looks like an error occurred!","error-code":"Error Code","go-back-home":"GO BACK HOME","add-new":"ADD NEW","orderby":"Order By","delete":"Delete","edit":"Edit","name":"Name","identifier":"Identifier","value-keys":"Value Keys"}}')}});