(this["webpackJsonptft-world"]=this["webpackJsonptft-world"]||[]).push([[7],{28:function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!e||a.length!==e);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(e,"a",(function(){return r}))},35:function(t,e,a){},59:function(t,e,a){"use strict";a.r(e);var n=a(28),r=a(0),o=a.n(r),i=(a(35),a(11)),c=[{id:1,name:"home",path:"/"},{id:2,name:"items",path:"/items"},{id:3,name:"champions",path:"/champions"},{id:5,name:"traits",path:"/traits"}];e.default=function(){var t=Object(r.useState)(!1),e=Object(n.a)(t,2),a=e[0],l=e[1];return o.a.createElement("div",{className:"Navbar"},o.a.createElement("div",{className:"Navbar-Logo-Container"},o.a.createElement(i.b,{to:"/",className:"Navbar-Logo"},o.a.createElement("img",{src:"/Tft-world/assets/logo.webp",alt:"Logo"}),o.a.createElement("span",null,"tft"))),o.a.createElement("div",{className:"Navbar-Container-To-Hide ".concat(a?"Navbar-Active":""),onClick:function(){return l(!a)},style:a?{display:"block"}:{display:"none"}}),o.a.createElement("div",{className:"Navbar-Items-Container ".concat(a?"Navbar-Active":"")},c.map((function(t){var e=t.id,n=t.name,r=t.path;return o.a.createElement(i.b,{to:r,key:e,className:"Navbar-Item ".concat(a?"Navbar-Active":""),onClick:function(){return l(!a)}},n)}))),o.a.createElement("div",{className:"Navbar-Hamburger ".concat(a?"Navbar-Hamburger-Active":""),onClick:function(){return l(!a)}},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)))}}}]);
//# sourceMappingURL=7.31075543.chunk.js.map