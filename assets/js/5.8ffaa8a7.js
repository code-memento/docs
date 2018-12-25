(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{167:function(t,a,s){t.exports=s.p+"assets/img/Lab-1-1.90ba501f.png"},175:function(t,a,s){t.exports=s.p+"assets/img/lab-2-1.2f4a8e8e.png"},176:function(t,a,s){t.exports=s.p+"assets/img/lab-2-0.0ec10eb8.png"},198:function(t,a,s){"use strict";s.r(a);var e=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"lab-2-decouvrir-les-pipes-et-les-directives"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lab-2-decouvrir-les-pipes-et-les-directives","aria-hidden":"true"}},[t._v("#")]),t._v(" Lab 2 - Découvrir les pipes et les directives")]),t._v(" "),e("h3",{attrs:{id:"objectifs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objectifs","aria-hidden":"true"}},[t._v("#")]),t._v(" Objectifs")]),t._v(" "),e("ul",[e("li",[t._v("Apprendre à utiliser les pipes,")]),t._v(" "),e("li",[t._v("Créer une pipe personnalisée,")]),t._v(" "),e("li",[t._v("Créer et utiliser des directives,")])]),t._v(" "),e("h3",{attrs:{id:"informations-transverses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#informations-transverses","aria-hidden":"true"}},[t._v("#")]),t._v(" Informations transverses")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Durée")]),t._v(" "),e("th",[t._v("min")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Difficulté")]),t._v(" "),e("td",[t._v("Facile")])]),t._v(" "),e("tr",[e("td",[t._v("Pré-requis")]),t._v(" "),e("td",[t._v("Squelette du Lab 1 ("),e("code",[t._v("components.zip")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[t._v("Mots-clés")]),t._v(" "),e("td",[e("code",[t._v("pipes")]),t._v(" "),e("code",[t._v("directives")])])])])]),t._v(" "),e("h3",{attrs:{id:"ce-que-nous-allons-coder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ce-que-nous-allons-coder","aria-hidden":"true"}},[t._v("#")]),t._v(" Ce que nous allons coder")]),t._v(" "),e("p",[t._v("Nous allons nous baser sur l'application du Lab 1 et l'enrichir avec des nouvelles fonctionnalités :")]),t._v(" "),e("ul",[e("li",[t._v("Transformer la date de sortie d'un produit de "),e("code",[t._v("string")]),t._v(" à "),e("code",[t._v("Date")]),t._v(" et utiliser la pipe "),e("code",[t._v("date")]),t._v(",")]),t._v(" "),e("li",[t._v("Créer une pipe qui contrôle la taille de la description d'un produit,")]),t._v(" "),e("li",[t._v("Créer des directives personnalisées.")])]),t._v(" "),e("h3",{attrs:{id:"a-la-fin-du-lab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-la-fin-du-lab","aria-hidden":"true"}},[t._v("#")]),t._v(" A la fin du Lab")]),t._v(" "),e("p",[t._v("Vous aurez quelque chose qui ressemble à ça :")]),t._v(" "),e("p",[e("img",{attrs:{src:s(175),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"commencons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commencons","aria-hidden":"true"}},[t._v("#")]),t._v(" Commençons !")]),t._v(" "),e("h5",{attrs:{id:"transformer-la-date-de-sortie-a-date"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transformer-la-date-de-sortie-a-date","aria-hidden":"true"}},[t._v("#")]),t._v(" Transformer la date de sortie à Date")]),t._v(" "),e("p",[t._v("La date de sortie du Lab précédent est une chaîne de caractères, dans une application réelle il faut que cette données soit un objet de type date car on peut l'afficher sous plusieurs formes et selon le langage du user.")]),t._v(" "),e("p",[t._v("Pour celà, il faut changer le type de "),e("code",[t._v("releasedDate")]),t._v(" à "),e("code",[t._v("Date")]),t._v(" :")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n\treleasedDate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ...\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Ensuite, instancier des dates comme suit :")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n    releasedDate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" new Date("),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Dans le template du produit, appeler la pipe "),e("code",[t._v("date")]),t._v(" avec le pattern de votre choix :")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v('{{ data.releasedDate | date:"MM/dd/yyyy" }}\n')])])]),e("p",[t._v("Et voilà :")]),t._v(" "),e("p",[e("img",{attrs:{src:s(176),alt:""}})]),t._v(" "),e("h5",{attrs:{id:"pipe-personnalisee"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pipe-personnalisee","aria-hidden":"true"}},[t._v("#")]),t._v(" Pipe personnalisée")]),t._v(" "),e("p",[t._v("Nous pouvons également écrire nos propres pipes personnalisées. Nous les utilisons de la même manière que les pipes fournies par Angular. Nous allons implémenter une pipe personnalisée qui prend une chaîne et la tronque à une longueur spécifiée. Ceci est utile pour afficher une description de produit tronquée si elle est trop longue comme sur la figure :")]),t._v(" "),e("p",[t._v("HEREX")]),t._v(" "),e("p",[t._v("Créons notre pipe comme toujours avec Angular CLI : "),e("code",[t._v("ng g p pipes/truncate")])]),t._v(" "),e("h6",{attrs:{id:"exercice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exercice","aria-hidden":"true"}},[t._v("#")]),t._v(" Exercice")]),t._v(" "),e("blockquote",[e("p",[t._v("Compléter la pipe "),e("code",[t._v("truncate")]),t._v(" avec le comportement suivant :")]),t._v(" "),e("ul",[e("li",[t._v("Si la le nombre de caractères dépasse "),e("code",[t._v("n")]),t._v(" qui est le paramètre du pipe :\n"),e("ul",[e("li",[t._v("Afficher "),e("code",[t._v("n")]),t._v(" caractères de la chaînes en entrée suivie de "),e("code",[t._v("...")])])])]),t._v(" "),e("li",[t._v("Sinon, afficher la chaîne sans modifications")])])]),t._v(" "),e("h5",{attrs:{id:"utiliser-des-directives"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#utiliser-des-directives","aria-hidden":"true"}},[t._v("#")]),t._v(" Utiliser des directives")]),t._v(" "),e("p",[t._v("Angular contient par défaut plusieurs directives, par exemple :")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("*ngIf")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{hero.name}}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("*ngFor")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("let hero of heroes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{hero.name}}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("[ngSwitch]")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hero?.emotion"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("app-happy-hero")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("*ngSwitchCase")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("happy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("[hero]")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("app-happy-hero")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("app-sad-hero")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("*ngSwitchCase")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("sad"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("      "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("[hero]")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("app-sad-hero")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("app-confused-hero")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("*ngSwitchCase")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("app-confused"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("[hero]")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("app-confused-hero")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("app-unknown-hero")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("*ngSwitchDefault")]),t._v("           "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("[hero]")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("app-unknown-hero")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("[style.display]")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("block"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n  Expression sets display to "block".\n  This paragraph is visible.\n'),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("[style.display]")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n  Expression sets display to "none".\n  This paragraph is hidden but still in the DOM.\n'),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h5",{attrs:{id:"directive-personnalisee"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#directive-personnalisee","aria-hidden":"true"}},[t._v("#")]),t._v(" Directive personnalisée")]),t._v(" "),e("p",[t._v("La directive que nous allons implémenter a pour objectif de mettre en surbrillance le produit sur lequel pointe le curseur.")]),t._v(" "),e("p",[t._v("D'abord, nous allons créer la directive avec la commande : "),e("code",[t._v("ng g d directives/highlight")]),t._v(" qui va se charger de l'ajout des différents fichiers et de la mise à jour du fichier "),e("code",[t._v("app.module.ts")]),t._v(".")]),t._v(" "),e("p",[t._v("Mettre le code suivant dans "),e("code",[t._v("highlight.directive.ts")]),t._v(" :")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Directive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ElementRef"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HostListener "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Directive")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  selector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[appHighlight]'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HighlightDirective")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ElementRef"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("HostListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mouseenter'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMouseEnter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("highlight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#efefef'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("HostListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mouseleave'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMouseLeave")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("highlight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("highlight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativeElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Et voilà :")]),t._v(" "),e("p",[e("img",{attrs:{src:s(167),alt:""}})]),t._v(" "),e("h6",{attrs:{id:"exercice-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exercice-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Exercice")]),t._v(" "),e("blockquote",[e("p",[t._v("Dans cet exercice vous allez créer une directive "),e("code",[t._v("bigtext")]),t._v(" qui fait le traitement suivant :")]),t._v(" "),e("ul",[e("li",[t._v("Si l'élément concerné par la directive est cliqué une première fois, on met la taille du texte à "),e("em",[t._v("24px")]),t._v(",")]),t._v(" "),e("li",[t._v("Lors du deuxième clic, si l'élément est déjà cliqué on initialise la taille du texte.")])])]),t._v(" "),e("h3",{attrs:{id:"ce-qu-il-faut-retenir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ce-qu-il-faut-retenir","aria-hidden":"true"}},[t._v("#")]),t._v(" Ce qu'il faut retenir")]),t._v(" "),e("ul",[e("li",[t._v("Les pipes et les directives permettent de réutiliser le code,")]),t._v(" "),e("li",[t._v("Elles sont un moyen efficace pour créer du code maintenable et facile à lire,")]),t._v(" "),e("li",[t._v("Ils permettent de séparer les différentes couches de l'applications.")])])])}],n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);r.options.__file="lab-2.md";a.default=r.exports}}]);