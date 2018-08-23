(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{171:function(e,t,o){"use strict";o.r(t);var a=o(0),i=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"a-detective-developper"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-detective-developper","aria-hidden":"true"}},[e._v("#")]),e._v(" A detective developper")]),e._v(" "),o("p",[e._v("The title of this article consists of two different jobs, a detective and a developer, but believe me they have a lot in common. It's not about solving murders or about catching thieves, it's about making your code confess.")]),e._v(" "),o("p",[e._v("In this article, I'll try to lay out some of the skills you have to master as a developer so you can find the cause of the toughest bugs.")]),e._v(" "),o("h2",{attrs:{id:"approach"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#approach","aria-hidden":"true"}},[e._v("#")]),e._v(" Approach")]),e._v(" "),o("p",[e._v("Looking for the suspect without a plan is like looking for a needle in a haystack. The first thing is to have a way to proceed in an organized fashion.")]),e._v(" "),o("h3",{attrs:{id:"reproduce-the-bug"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reproduce-the-bug","aria-hidden":"true"}},[e._v("#")]),e._v(" Reproduce the bug")]),e._v(" "),o("p",[e._v("If you can reproduce the bug go to the next section, if not then you have to gather as much information as possible about the problem. This is important because how is it possible to validate your solution if you cannot reproduce the bug ?")]),e._v(" "),o("h3",{attrs:{id:"correct-the-bug"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#correct-the-bug","aria-hidden":"true"}},[e._v("#")]),e._v(" Correct the bug")]),e._v(" "),o("p",[e._v("Once the bug is reproduced, it's time to correct. But sometimes correcting the problem can be challenging. It might need the heavy artillery, here is some tips to pinpoint the problem :")]),e._v(" "),o("h4",{attrs:{id:"it-worked-before"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#it-worked-before","aria-hidden":"true"}},[e._v("#")]),e._v(" It worked before")]),e._v(" "),o("p",[e._v("How is it possible that an application that did work for quite some time suddenly stops working. As strange as it may seem, this use case is very recurrent. In these cases, log files don't tell much or you have to dive in very long log files.")]),e._v(" "),o("p",[e._v("To solve this problem, you first need to look for the application's dependencies :")]),e._v(" "),o("ul",[o("li",[e._v("Does the application consume a Web Service ?")]),e._v(" "),o("li",[e._v("Is the database working as expected ?")]),e._v(" "),o("li",[e._v("Is it a network / firewall / proxy problem ?")]),e._v(" "),o("li",[e._v("Does the application use some credentials that has expired ?")]),e._v(" "),o("li",[e._v("You got the idea, your application did not change, so it must be something else.")])]),e._v(" "),o("h4",{attrs:{id:"it-worked-in-a-prior-version"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#it-worked-in-a-prior-version","aria-hidden":"true"}},[e._v("#")]),e._v(" It worked in a prior version")]),e._v(" "),o("p",[e._v("In the new version of your application, a use case is not working anymore. The easiest to do is to look in the code's history using SVN or Git.")]),e._v(" "),o("h4",{attrs:{id:"the-process-of-elimination"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-process-of-elimination","aria-hidden":"true"}},[e._v("#")]),e._v(" The process of elimination")]),e._v(" "),o("p",[e._v("As Wikipedia states :")]),e._v(" "),o("blockquote",[o("p",[e._v("Process of elimination is a method to identify an entity of interest among several ones by excluding all other entities.")])]),e._v(" "),o("p",[e._v("As they say an example is worth a thousand words, so let's say you have a CSS problem, some component is acting weirdly. With your browser's tools ("),o("em",[e._v("Firebug, etc.")]),e._v(") deactivate all the component's CSS then activate the properties one by one until you find the guilty property.")]),e._v(" "),o("h4",{attrs:{id:"how-it-should-be-done"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-it-should-be-done","aria-hidden":"true"}},[e._v("#")]),e._v(" How it should be done")]),e._v(" "),o("p",[e._v("In many cases, the bug is due a shallow use of the tools. Did you use the framework properly ? Do you have enough knowledge of the platform ? If so, take some time to study the tools.")]),e._v(" "),o("h4",{attrs:{id:"it-s-random"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#it-s-random","aria-hidden":"true"}},[e._v("#")]),e._v(" It's random")]),e._v(" "),o("p",[e._v("If the bug is random and the classics didn't work, there is a high chance that there is a performance issue. Use some profiling tool to pinpoint the problem.")]),e._v(" "),o("h4",{attrs:{id:"test-your-patch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#test-your-patch","aria-hidden":"true"}},[e._v("#")]),e._v(" Test your patch")]),e._v(" "),o("p",[e._v("Now that you found the suspect and you solved the problem, reproduce the bug using the scenarios in the first step.")])])}],!1,null,null,null);i.options.__file="detective-developer.md";t.default=i.exports}}]);