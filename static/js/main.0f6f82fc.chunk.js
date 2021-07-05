(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{80:function(t,e,n){},87:function(t,e,n){},88:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(10),i=n.n(a),c=(n(80),n(46)),s=n(53),d=n(51),l=n(47),u="ADD-TODO",j="REMOVE-TODO",b="TOGGLE-COMPLETE",x=[{id:1,text:"Solve test task",isCompleted:!0},{id:2,text:"Pass technical interview",isCompleted:!1},{id:3,text:"Accept the offer",isCompleted:!1}],f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return[].concat(Object(l.a)(t),[{id:e.id,text:e.text,isCompleted:e.isCompleted}]);case j:return t.filter((function(t){return t.id!==e.id}));case b:return t.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{isCompleted:!t.isCompleted}):t}));default:return t}},h=Object(s.a)({todos:f}),m=localStorage.getItem("todoList")?JSON.parse(localStorage.getItem("todoList")):{},p=Object(s.b)(h,m);p.subscribe((function(){localStorage.setItem("todoList",JSON.stringify(p.getState()))}));var O=p,g=n(121),C=n(67),v=n(5),k=Object(g.a)({header:{width:"100%",backgroundColor:"#EDE026",display:"flex"},title:{color:"#171718",margin:"0 auto",padding:"15px 0"}}),T=function(){var t=k();return Object(v.jsx)("div",{className:t.header,children:Object(v.jsx)(C.a,{className:t.title,variant:"h3",gutterBottom:!0,children:"ToDoList App"})})},y=n(38),N=n(41),I=n(64),w=n.n(I),S=n(133),B=n(125),D=Object(g.a)({todoItem:{display:"flex",alignItems:"center",margin:"5px",border:"#D5D9D9 2px solid",padding:"0 10px"},todoItemText:{flex:"auto",fontSize:"24px",color:"#171718"},todoItemCheckBox:{alignContent:"end"},todoItemBtn:{height:"50%"}}),A=function(t){var e=t.task,n=t.removeTodo,o=t.toggleComplete,r=D();return Object(v.jsxs)("div",{className:r.todoItem,children:[Object(v.jsx)("p",{className:r.todoItemText,children:e.text}),Object(v.jsx)(S.a,{className:r.todoItemCheckBox,checked:e.isCompleted,onChange:function(){return o(e.id)},inputProps:{"aria-label":"primary checkbox"}}),Object(v.jsx)(B.a,{className:r.todoItemBtn,color:"secondary","aria-label":"delete",onClick:function(){return n(e.id)},size:"small",children:Object(v.jsx)(w.a,{})})]})},L=n(132),E=n(65),F=n.n(E),P=Object(g.a)({todoInputBox:{display:"flex",justifyContent:"center",padding:"10px"},todoTextArea:{width:"75%"}}),J=function(t){var e=Object(o.useState)(""),n=Object(y.a)(e,2),r=n[0],a=n[1],i=t.addTodo,c=P(),s=function(){return""!==r&&!r.trim().length};return Object(v.jsxs)("div",{className:c.todoInputBox,children:[Object(v.jsx)(L.a,{className:c.todoTextArea,id:"standard-basic",label:"New Task",value:r,error:s(),helperText:s()&&"Incorrect entry.",onChange:function(t){return a(t.target.value)}}),Object(v.jsx)(B.a,{color:"primary","aria-label":"add",onClick:function(){return i(Date.now(),r,!1),void a("")},disabled:!r.trim().length,children:Object(v.jsx)(F.a,{})})]})},z=n(127),M=n(90),q=Object(g.a)({sortBar:{display:"flex",justifyContent:"center",margin:"10px auto"}}),G=function(t){var e=t.handleFilter,n=q();return Object(v.jsxs)(z.a,{className:n.sortBar,variant:"text",color:"primary","aria-label":"text primary button group",children:[Object(v.jsx)(M.a,{onClick:function(){return e()},children:"All"}),Object(v.jsx)(M.a,{onClick:function(){return e(!1)},children:"Active"}),Object(v.jsx)(M.a,{onClick:function(){return e(!0)},children:"Completed"})]})},V=n(126),R=n(128),_=n(129),H=n(130),K=Object(g.a)({searchBar:{display:"flex",justifyContent:"center",margin:"10px auto"},searchTextArea:{width:"90%"},cancelBtn:{cursor:"pointer"}}),Q=function(t){var e=K(),n=t.handleSearch,o=t.query;return Object(v.jsx)("div",{className:e.searchBar,children:Object(v.jsx)(V.a,{className:e.searchTextArea,value:o,onChange:function(t){return n(t.target.value)},id:"input-with-icon-adornment",endAdornment:Object(v.jsxs)(R.a,{position:"end",children:[o&&Object(v.jsx)(_.a,{className:e.cancelBtn,onClick:function(){return n("")}}),Object(v.jsx)(H.a,{})]})})})},U=Object(g.a)((function(t){return{todoList:Object(N.a)({width:"50%",margin:"10px auto 50px auto",border:"#D5D9D9 2px solid"},t.breakpoints.down(500),{width:"80%"})}})),W={addTask:function(t,e,n){return{type:u,id:t,text:e,isCompleted:n}},removeTask:function(t){return{type:j,id:t}},toggleTaskComplete:function(t){return{type:b,id:t}}},X=Object(c.b)((function(t){return{todos:t.todos}}),W)((function(t){var e=t.todos,n=t.addTask,r=t.removeTask,a=t.toggleTaskComplete,i=U(),c=Object(o.useState)(e),s=Object(y.a)(c,2),d=s[0],u=s[1],j=Object(o.useState)(""),b=Object(y.a)(j,2),x=b[0],f=b[1];return Object(o.useEffect)((function(){u(e)}),[e]),Object(v.jsxs)("div",{className:i.todoList,children:[Object(v.jsx)(J,{addTodo:n}),Object(v.jsx)(G,{handleFilter:function(t){var n=Object(l.a)(e);""!==x&&(n=e.filter((function(t){return t.text.includes(x)}))),"undefined"!==typeof t&&(n=n.filter((function(e){return e.isCompleted===t}))),u(n)}}),Object(v.jsx)(Q,{handleSearch:function(t){if(t.trim().length||""===t){var n=e.filter((function(e){return e.text.toLowerCase().includes(t.toLowerCase())}));u(n),f(t)}},query:x}),d.map((function(t){return Object(v.jsx)(A,{task:t,removeTodo:r,toggleComplete:a},t.id)}))]})})),Y=n(131),Z=Object(g.a)({footer:{width:"100%",height:"7%",backgroundColor:"#EDE026",position:"fixed",bottom:"0"},author:{color:"#171718",position:"absolute",bottom:"0",right:"25px",fontSize:"20px"}}),$=function(){var t=Z();return Object(v.jsx)("div",{className:t.footer,children:Object(v.jsx)(C.a,{className:t.author,children:Object(v.jsx)(Y.a,{href:"https://fenomen-alex.github.io/AlexCV/",rel:"noreferrer",target:"_blank",children:"by Alex Fomenko"})})})},tt=(n(87),function(){return Object(v.jsxs)(c.a,{store:O,children:[Object(v.jsx)(T,{}),Object(v.jsx)(X,{}),Object(v.jsx)($,{})]})}),et=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(e){var n=e.getCLS,o=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),r(t),a(t),i(t)}))};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(tt,{})}),document.getElementById("root")),et()}},[[88,1,2]]]);
//# sourceMappingURL=main.0f6f82fc.chunk.js.map