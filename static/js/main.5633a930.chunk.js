(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{26:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(18),s=n.n(a),o=(n(26),n(20)),i=n(21),u=n(5),l=n.n(u),j=n(9),d=n(3),b=n(6),h=n.n(b),m=(n(46),n(0)),f=function(e){var t=e.onAdd,n=e.showForm;return Object(m.jsx)("button",{className:"button ".concat(n?"button-remove":""),onClick:t,children:n?"Close":"Add"})},O=function(e){var t=e.onAdd,n=e.showForm;return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h1",{style:{color:"#660022"},children:" Task Tracker"}),Object(m.jsx)(f,{onAdd:t,showForm:n})]})},p=n(19),k=function(e){var t=e.task,n=e.onDelete,c=e.toggleReminder;return Object(m.jsxs)("div",{title:"Double click to add or remove reminder",className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t._id)},children:[Object(m.jsx)("button",{title:"Delete Task",className:"cross",onClick:function(){return n(t._id)},children:Object(m.jsx)(p.a,{"font-size":"18px"})}),Object(m.jsx)("h3",{children:t.text}),Object(m.jsx)("p",{children:t.day})]})},x=function(e){var t=e.tasks,n=e.onDelete,c=e.toggleReminder;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){return Object(m.jsx)(k,{task:e,onDelete:n,toggleReminder:c},e._id)}))})},g=function(e){var t=e.submit,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(""),i=Object(d.a)(o,2),u=i[0],l=i[1],j=Object(c.useState)(!1),b=Object(d.a)(j,2),h=b[0],f=b[1];return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:h}),s(""),l(""),f(!1)):alert("Please add a task")},children:[Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("label",{children:"Task"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("label",{children:"Add Day and Time"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",placeholder:"25th Feb at 2 P.M.",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(m.jsxs)("div",{className:"form checkbox",children:[Object(m.jsx)("label",{children:"Set Reminder"}),Object(m.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(m.jsx)("div",{className:"form btn-submit",children:Object(m.jsx)("input",{type:"submit",value:"Save Task"})})]})};var v=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),u=s[0],b=s[1],f=Object(c.useState)(!1),p=Object(d.a)(f,2),k=p[0],v=p[1];Object(c.useEffect)((function(){h.a.get("https://task-tracker-mern.herokuapp.com/api/task").then((function(e){return e.data})).then((function(e){0===e.length?r(-1):r(e[e.length-1]._id),b(e)})).catch((function(e){return console.log(e)}))}),[]);var y=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(u.filter((function(e){return e._id!==t}))),h.a.delete("https://task-tracker-mern.herokuapp.com/api/task/".concat(t)).then().catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(u.map((function(e){return e._id===t&&(e.reminder=!e.reminder,h.a.put("https://task-tracker-mern.herokuapp.com/api/task/".concat(t),{reminder:e.reminder}).then().catch((function(e){return console.log(e)}))),e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{onAdd:function(){v(!k)},showForm:k}),k&&Object(m.jsx)(g,{submit:function(e){r(++n),console.log(n);var t=n,c=Object(i.a)({_id:t},e);b([].concat(Object(o.a)(u),[c])),h.a.post("https://task-tracker-mern.herokuapp.com/api/task",c).then().catch((function(e){return console.log(e)}))}}),Object(m.jsx)("hr",{style:{border:"1px solid black"}}),u.length>0?Object(m.jsx)(x,{tasks:u,onDelete:y,toggleReminder:w}):Object(m.jsx)("h2",{style:{textAlign:"center"},children:"No Tasks to show"})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),y()}},[[48,1,2]]]);
//# sourceMappingURL=main.5633a930.chunk.js.map