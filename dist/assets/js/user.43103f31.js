(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{1348:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-row",{staticClass:"h-100"},[e("b-colxx",{staticClass:"mx-auto my-auto",attrs:{xxs:"12",md:"10"}},[e("b-card",{staticClass:"auth-card",attrs:{"no-body":""}},[e("div",{staticClass:"position-relative image-side "},[e("p",{staticClass:" text-white h2"},[t._v(t._s(t.$t("pages.magic-is-in-the-details")))]),t._v(" "),e("p",{staticClass:"white mb-0"},[t._v("  Please use this form to register. "),e("br"),t._v("If you are a member, please\n              "),e("router-link",{staticClass:"white",attrs:{tag:"a",to:"/user/login"}},[t._v("login")]),t._v(".\n            ")],1)]),t._v(" "),e("div",{staticClass:"form-side"},[e("router-link",{attrs:{tag:"a",to:"/"}},[e("span",{staticClass:"logo-single"})]),t._v(" "),e("h6",{staticClass:"mb-4"},[t._v(t._s(t.$t("user.register")))]),t._v(" "),e("b-form",{on:{submit:function(s){return s.preventDefault(),t.formSubmit(s)}}},[e("label",{staticClass:"form-group has-float-label mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fullname,expression:"fullname"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.fullname},on:{input:function(s){s.target.composing||(t.fullname=s.target.value)}}}),t._v(" "),e("span",[t._v(t._s(t.$t("user.fullname")))])]),t._v(" "),e("label",{staticClass:"form-group has-float-label mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),t._v(" "),e("span",[t._v(t._s(t.$t("user.email")))])]),t._v(" "),e("label",{staticClass:"form-group has-float-label mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),e("span",[t._v(t._s(t.$t("user.password")))])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-end align-items-center"},[e("b-button",{staticClass:"btn-shadow",attrs:{type:"submit",variant:"primary",size:"lg"}},[t._v(t._s(t.$t("user.register-button")))])],1)])],1)])],1)],1)},r=[],i={data:function(){return{fullname:"",email:"",password:""}},methods:{formSubmit:function(){console.log("register"),this.$router.push("/")}}},o=i,n=e("2877"),l=Object(n["a"])(o,a,r,!1,null,null,null);s["default"]=l.exports},"37cb":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-row",{staticClass:"h-100"},[e("b-colxx",{staticClass:"mx-auto my-auto",attrs:{xxs:"12",md:"10"}},[e("b-card",{staticClass:"auth-card",attrs:{"no-body":""}},[e("div",{staticClass:"position-relative image-side "},[e("p",{staticClass:" text-white h2"},[t._v(t._s(t.$t("pages.magic-is-in-the-details")))]),t._v(" "),e("p",{staticClass:"white mb-0"},[t._v("Please use your e-mail to reset your password. "),e("br"),t._v("If you are not a member, please\n              "),e("router-link",{staticClass:"white",attrs:{tag:"a",to:"/user/register"}},[t._v("register")]),t._v(".\n            ")],1)]),t._v(" "),e("div",{staticClass:"form-side"},[e("router-link",{attrs:{tag:"a",to:"/"}},[e("span",{staticClass:"logo-single"})]),t._v(" "),e("h6",{staticClass:"mb-4"},[t._v(t._s(t.$t("user.forgot-password")))]),t._v(" "),e("b-form",{on:{submit:function(s){return s.preventDefault(),t.formSubmit(s)}}},[e("label",{staticClass:"form-group has-float-label mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),t._v(" "),e("span",[t._v(t._s(t.$t("user.email")))])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-end align-items-center"},[e("b-button",{staticClass:"btn-shadow",attrs:{type:"submit",variant:"primary",size:"lg"}},[t._v(t._s(t.$t("user.reset-password-button")))])],1)])],1)])],1)],1)},r=[],i={data:function(){return{fullname:"",email:"",password:""}},methods:{formSubmit:function(){this.$router.push("/")}}},o=i,n=e("2877"),l=Object(n["a"])(o,a,r,!1,null,null,null);s["default"]=l.exports},ac2a:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-row",{staticClass:"h-100"},[e("b-colxx",{staticClass:"mx-auto my-auto",attrs:{xxs:"12",md:"10"}},[e("b-card",{staticClass:"auth-card",attrs:{"no-body":""}},[e("div",{staticClass:"position-relative image-side "},[e("p",{staticClass:" text-white h2"},[t._v(t._s(t.$t("pages.magic-is-in-the-details")))]),t._v(" "),e("p",{staticClass:"white mb-0"},[t._v("Please use your credentials to login."),e("br"),t._v("If you are not a member, please\n              "),e("router-link",{staticClass:"white",attrs:{tag:"a",to:"/user/register"}},[t._v("register")]),t._v(".\n            ")],1)]),t._v(" "),e("div",{staticClass:"form-side"},[e("router-link",{attrs:{tag:"a",to:"/"}},[e("span",{staticClass:"logo-single"})]),t._v(" "),e("h6",{staticClass:"mb-4"},[t._v(t._s(t.$t("user.login-title")))]),t._v(" "),e("b-form",{on:{submit:function(s){return s.preventDefault(),t.formSubmit(s)}}},[e("label",{staticClass:"form-group has-float-label mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),t._v(" "),e("span",[t._v(t._s(t.$t("user.email")))])]),t._v(" "),e("label",{staticClass:"form-group has-float-label mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),e("span",[t._v(t._s(t.$t("user.password")))])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("router-link",{attrs:{tag:"a",to:"/user/forgot-password"}},[t._v(t._s(t.$t("user.forgot-password-question")))]),t._v(" "),e("b-button",{staticClass:"btn-shadow",attrs:{type:"submit",variant:"primary",size:"lg",disabled:t.processing}},[t._v(t._s(t.$t("user.login-button")))])],1)])],1)])],1)],1)},r=[],i=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),o=e("2f62");function n(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?n(e,!0).forEach((function(s){Object(i["a"])(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(e).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var u={data:function(){return{email:"",password:""}},computed:l({},Object(o["c"])(["currentUser","processing","loginError"])),methods:l({},Object(o["b"])(["login"]),{formSubmit:function(){this.email="dummy@emailaddress.com",this.password="CLJJGb8Hx9hJDUG",this.login({email:this.email,password:this.password})}}),watch:{currentUser:function(t){var s=this;t&&t.uid&&t.uid.length>0&&setTimeout((function(){s.$router.push("/")}),500)},loginError:function(t){null!=t&&this.$notify("error","Login Error",t,{duration:3e3,permanent:!1})}}},c=u,m=e("2877"),p=Object(m["a"])(c,a,r,!1,null,null,null);s["default"]=p.exports},e382:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"root"}},[e("div",{staticClass:"fixed-background"}),t._v(" "),e("main",[e("div",{staticClass:"container"},[e("router-view")],1)])])},r=[],i={mounted:function(){document.body.classList.add("background")},beforeDestroy:function(){document.body.classList.remove("background")}},o=i,n=e("2877"),l=Object(n["a"])(o,a,r,!1,null,null,null);s["default"]=l.exports}}]);