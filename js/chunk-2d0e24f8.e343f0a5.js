(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e24f8"],{"7dc8":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-main"},["login"===e.type_active?[s("span",{staticClass:"title"},[e._v(" "+e._s(e.$t("ct-sign-in"))+" ")]),s("login",{on:{change:e.changeType}}),e._v("\n      "+e._s(e.config.hide_register_btn)+"\n    "),e.config.hide_register_btn?e._e():s("button",{staticClass:"btn btn-secondary text-center",on:{click:function(t){return t.preventDefault(),e.changeType("register")}}},[e._v(e._s(e.$t("ct-create-account"))+"\n    ")]),s("a",{staticClass:"text-center d-block mt-2 helper-forgot-password",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.changeType("remember")}}},[e._v(e._s(e.$t("ct-forgot-password")))])]:e._e(),"register"===e.type_active?[s("span",{staticClass:"title"},[e._v(" "+e._s(e.$t("ct-register"))+" ")]),s("register",{attrs:{areas_register:e.areas_register},on:{change:e.changeType}}),s("a",{staticClass:"text-center d-block mt-2 helper-forgot-password",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.changeType("login")}}},[e._v(e._s(e.$t("ct-sign-in-account")))])]:e._e(),"login-ba"===e.type_active?[s("span",{staticClass:"title"},[e._v(e._s(e.$t("ct-access-ba-credentials")))]),s("login-builderall",{attrs:{areas_register:e.areas_register},on:{change:e.changeType}}),e.auth_types.includes("register")||e.auth_types.includes("both")?s("a",{staticClass:"helper-forgot-password text-center d-block mt-2",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.changeType("login")}}},[e._v(e._s(e.$t("ct-sign-in-account")))]):e._e()]:e._e(),"remember"===e.type_active?[s("span",{staticClass:"title"},[e._v(e._s(e.$t("ct-forgot-password")))]),s("remember-password",{on:{change:e.changeType}}),s("div",{staticClass:"mx-5 mt-2 mb-2 d-flex"},[s("div",{staticClass:"text-center flex-grow-1"},[e.config.hide_register_btn?e._e():[s("a",{staticClass:"helper-forgot-password",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.changeType("register")}}},[e._v(e._s(e.$t("ct-register")))]),s("span",{staticClass:"mx-1 helper-forgot-password"},[e._v("|")])],s("a",{staticClass:"helper-forgot-password",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.changeType("login")}}},[e._v(e._s(e.$t("ct-sign-in")))])],2)])]:e._e(),"login-token"===e.type_active?[s("span",{staticClass:"title"},[e._v(e._s(e.$t("ct-access-with-token")))]),s("login-token",{on:{change:e.changeType}})]:e._e(),"not-have-permission"===e.type_active?[s("not-have-permission")]:e._e()],2)},a=[],r=s("9ec6"),c={name:"InBlockPopUp",mixins:[r["b"],r["a"]]},i=c,o=s("2877"),l=Object(o["a"])(i,n,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e24f8.e343f0a5.js.map