(this["webpackJsonpkeeper-part-3-completed"]=this["webpackJsonpkeeper-part-3-completed"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),c=n.n(l),o=n(8),u=n(4);var i=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Keeper"))};var m=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e))};var E=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"DELETE"))},f=n(3),p=n(5);var d=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),l=n[0],c=n[1];function o(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(f.a)({},n,a))}))}return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{name:"title",onChange:o,value:l.title,placeholder:"Title"}),r.a.createElement("textarea",{name:"content",onChange:o,value:l.content,placeholder:"Take a note...",rows:"3"}),r.a.createElement("button",{onClick:function(t){e.onAdd(l),c({title:"",content:""}),t.preventDefault()}},"Add")))};var v=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1];function c(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(d,{onAdd:function(e){l((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(E,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),r.a.createElement(m,null))};c.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.1990cdd7.chunk.js.map