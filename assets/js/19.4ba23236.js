(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{214:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"java-enums"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-enums","aria-hidden":"true"}},[a._v("#")]),a._v(" Java Enums")]),a._v(" "),s("p",[a._v("In most cases when I make code reviews, I notice that many developpers prefer flat constants like these :")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Constantes : Cars")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" ELECTRIC_CAR "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" HYBRID_CAR "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" DIESEL_CAR "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Constantes : Status")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" ON "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" OFF "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("This technique was "),s("em",[a._v("à la mode")]),a._v(" in languages like C, but nowadays it has many flaws :")]),a._v(" "),s("ul",[s("li",[a._v("There is no validation, I can set any value,")]),a._v(" "),s("li",[a._v("When debugging, we only see a values that do not have any sense,")]),a._v(" "),s("li",[a._v("If these values are hard-coded, the code will be a maintainance nightmare,")]),a._v(" "),s("li",[a._v("etc.")])]),a._v(" "),s("p",[a._v("The solution to this anti-pattern is a type that has been present in Java since its 1.5 version : "),s("strong",[a._v("Enumerations")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("enum")]),a._v(" Car "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" ELECTRIC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" HYBRID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" DIESEL "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("enum")]),a._v(" Status "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" ON"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" OFF "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Using enumerations has many advantages, to name a few :")]),a._v(" "),s("ul",[s("li",[a._v("They are explicit, the name of the constant is its value,")]),a._v(" "),s("li",[a._v("They are easy to test (using the "),s("code",[a._v("==")]),a._v(" operator),")]),a._v(" "),s("li",[a._v("They can be verified by the compiler,")]),a._v(" "),s("li",[a._v("Can be used in JPA entities,")]),a._v(" "),s("li",[a._v("They are serializable, singleton, etc.")])]),a._v(" "),s("p",[a._v("So, what are you waiting for ?")])])}],!1,null,null,null);n.options.__file="enums.md";t.default=n.exports}}]);