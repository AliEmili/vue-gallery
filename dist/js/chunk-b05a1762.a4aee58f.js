(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b05a1762"],{"2d0c":function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"cards"},[t._m(0),c("div",{staticClass:"img-div"},[c("img",{attrs:{src:t.pathCom(t.picData.imagePath),alt:"pic"}})]),t._l(t.comments,(function(e){return c("ul",{key:e._id,staticClass:"card"},[c("li",{staticClass:"email"},[t._v(t._s(e.byWho))]),c("li",{staticClass:"comment-text"},[t._v(t._s(e.commentText))])])})),0==t.lenCom(t.comments)?c("p",{staticClass:"card"},[t._v("نظری وجود ندارد.")]):t._e()],2)])},s=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"header-div"},[c("h3",[t._v("نظرات")])])}],a=c("5530"),i=c("2f62"),o={name:"Comment",props:["nth"],methods:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["fetchPic","fetchComments"])),{},{pathCom:function(t){return console.log("comment : url = ",t),Object({NODE_ENV:"production",BASE_URL:"/"}).BACKEND_BASE_URL?t=Object({NODE_ENV:"production",BASE_URL:"/"}).BACKEND_BASE_URL+t:t&&"/"!==t[0]&&(t="/"+t),t},lenCom:function(t){return t.length}}),created:function(){this.fetchPic(this.nth),this.fetchComments(this.nth)},computed:Object(a["a"])({},Object(i["c"])(["picData","comments"]))},m=o,r=(c("939e"),c("2877")),l=Object(r["a"])(m,n,s,!1,null,"63a0ca9a",null);e["default"]=l.exports},"939e":function(t,e,c){"use strict";var n=c("fe0b"),s=c.n(n);s.a},fe0b:function(t,e,c){}}]);
//# sourceMappingURL=chunk-b05a1762.a4aee58f.js.map