(this.webpackJsonptestToDo=this.webpackJsonptestToDo||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(26),s=n.n(a),i=(n(31),n(14)),o=n(3),d=n(7),l=n(5),u=n.n(l),j=n(8),b=n(6),f=(n(33),n(46)),O=n(11),m=n(13),v=[{id:1651319512266.7095,title:"Queue",cards:[]},{id:1651319523126.113,title:"Development",cards:[]},{id:1651319530017.122,title:"Done",cards:[]}],x=function(){function e(){Object(O.a)(this,e)}return Object(m.a)(e,[{key:"fetchBoardList",value:function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v,c=[],localStorage.getItem(t)?(a=JSON.parse(null!==(r=localStorage.getItem(t))&&void 0!==r?r:""),c=Object(d.a)(a)):S(c=Object(d.a)(n),t),e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function p(e){return h.apply(this,arguments)}function h(){return(h=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new x,e.abrupt("return",n.fetchBoardList(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return N.apply(this,arguments)}function N(){return(N=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("Projects")){e.next=3;break}return n=JSON.parse(null!==(t=localStorage.getItem("Projects"))&&void 0!==t?t:""),e.abrupt("return",n);case 3:return e.abrupt("return",[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return k.apply(this,arguments)}function k(){return(k=Object(j.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("Projects")?(c=JSON.parse(null!==(n=localStorage.getItem("Projects"))&&void 0!==n?n:""),localStorage.setItem("Projects",JSON.stringify([].concat(Object(d.a)(c),[t])))):localStorage.setItem("Projects",JSON.stringify([t]));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){localStorage.setItem(t,JSON.stringify(e))}n(34),n(35);var I=n(1);var D=function(e){return Object(I.jsx)("div",{className:"modal",onClick:function(){return e.onClose?e.onClose():""},children:Object(I.jsx)("div",{className:"modal-content custom-scroll",onClick:function(e){return e.stopPropagation()},children:e.children})})};var w=function(e){var t=e.onClose,n=e.addProject,r=Object(c.useState)(""),a=Object(b.a)(r,2),s=a[0],i=a[1];return Object(I.jsx)(D,{className:"project-add-modal",onClose:t,children:Object(I.jsxs)("form",{className:"project-add-modal-form",onSubmit:function(e){e.preventDefault(),s.length>0&&n(s)},children:[Object(I.jsx)("input",{type:"text",value:s,placeholder:"Name project",onChange:function(e){return i(e.target.value)},autoFocus:!0}),Object(I.jsx)("div",{className:"project-add-modal-footer",children:Object(I.jsx)("button",{type:"submit",children:"Add project"})})]})})};var y=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(b.a)(a,2),o=s[0],l=s[1];function O(){return m.apply(this,arguments)}function m(){return(m=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)(Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:case"end":return e.stop()}}),e)}))),[]);var v=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r([].concat(Object(d.a)(n),[t])),e.next=3,C(t);case 3:l(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{className:"project",children:[o&&Object(I.jsx)(w,{onClose:function(){return l(!1)},addProject:v}),Object(I.jsxs)("div",{className:"project-projects-container",children:[Object(I.jsxs)("div",{className:"project-projects-title",children:[Object(I.jsx)("h1",{children:"Projects"}),Object(I.jsx)(f.a,{className:"addIcon",onClick:function(){return l(!0)}})]}),Object(I.jsxs)("div",{className:"project-projects-list",children:[n.map((function(e){return Object(I.jsx)(i.b,{to:"/".concat(e),className:"link",children:e},e)})),0===n.length&&Object(I.jsx)("div",{children:"there is no project, click +"})]})]})]})},E=n(9),A=n(55),P=n(56),T=n(57),J=n(51),L=function(e){if(!e)return"";var t=new Date(e);if(!t)return"";return t.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]},M=["#a8193d","#4fcc25","#1ebffa","#8da377","#9975bd","#cf61a1","#240959"],B=function(e){var t=new Date(e),n=new Date,c=new Date(n.toISOString().split("T")[0]).getTime()-t.getTime();return Math.round(c/864e5)};function F(e){var t=e.item,n=e.removeLabel;return Object(I.jsxs)("label",{style:{backgroundColor:t.color,color:"#fff"},children:[t.text,n&&Object(I.jsx)(f.a,{onClick:function(){return n(t)}})]})}n(39);var V=function(e){var t=Object(c.useRef)(),n=function(n){var c;t&&!(null===(c=t.current)||void 0===c?void 0:c.contains(n.target))&&e.onClose&&e.onClose()};return Object(c.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}})),Object(I.jsx)("div",{ref:t,className:"dropdown custom-scroll ".concat(e.class?e.class:""),children:e.children})},Q=(n(40),n(47)),R=n(48),q=n(49),z=n(50),G=n(52),H=n(53),K=n(54);n(41);var U=function(e){var t=e.text,n=e.id,r=e.onSubmit,a=e.displayClass,s=e.editClass,i=e.placeholder,o=e.defaultValue,d=e.buttonText,l=e.onDragEnter,u=e.clearComment,j=Object(c.useState)(!1),O=Object(b.a)(j,2),m=O[0],v=O[1],x=Object(c.useState)(o||""),p=Object(b.a)(x,2),h=p[0],g=p[1];return Object(c.useEffect)((function(){!m&&u&&u()}),[m]),Object(I.jsx)("div",{className:"custom-input",onDragEnter:function(){return l(n)},children:m?Object(I.jsxs)("form",{className:"custom-input-edit ".concat(s||""),onSubmit:function(e){e.preventDefault(),h&&r&&(g(""),r(h)),v(!1)},children:[Object(I.jsx)("input",{type:"text",value:h,placeholder:i||t,onChange:function(e){return g(e.target.value)},autoFocus:!0}),Object(I.jsxs)("div",{className:"custom-input-edit-footer",children:[Object(I.jsx)("button",{type:"submit",children:d||"Add"}),Object(I.jsx)(f.a,{onClick:function(){return v(!1)},className:"closeIcon"})]})]}):Object(I.jsx)("p",{className:"custom-input-display ".concat(a||""),onClick:function(){return v(!0)},children:t})})};n(42);var W=function(e){var t,n,r=e.onClose,a=e.card,s=e.boardId,i=e.updateCard,o=Object(c.useState)(""),l=Object(b.a)(o,2),u=l[0],j=l[1],f=Object(c.useState)(0),O=Object(b.a)(f,2),m=O[0],v=O[1],x=Object(c.useState)(0),p=Object(b.a)(x,2),h=p[0],g=p[1],N=Object(c.useState)(Object(E.a)({},a)),C=Object(b.a)(N,2),k=C[0],S=C[1],w=function(e){var t=k.labels.filter((function(t){return t.text!==e.text}));S(Object(E.a)(Object(E.a)({},k),{},{labels:t}))};Object(c.useEffect)((function(){i&&i(s,k.id,k)}),[k]);var y=function(){var e,t,n,c;return(null===(e=k.tasks)||void 0===e?void 0:e.length)?(null===(t=k.tasks)||void 0===t||null===(n=t.filter((function(e){return e.completed})))||void 0===n?void 0:n.length)/(null===(c=k.tasks)||void 0===c?void 0:c.length)*100:0}();return Object(I.jsx)(D,{onClose:r,children:Object(I.jsxs)("div",{className:"cardinfo",children:[Object(I.jsxs)("div",{className:"cardinfo-box",children:[Object(I.jsxs)("div",{className:"cardinfo-box-title",children:[Object(I.jsx)(Q.a,{}),Object(I.jsx)("p",{children:"Title"})]}),Object(I.jsx)(U,{defaultValue:k.title,text:k.title,placeholder:"Enter Title",onSubmit:function(e){S(Object(E.a)(Object(E.a)({},k),{},{title:e}))}})]}),Object(I.jsxs)("div",{className:"cardinfo-box",children:[Object(I.jsxs)("div",{className:"cardinfo-box-title",children:[Object(I.jsx)(R.a,{}),Object(I.jsx)("p",{children:"Description"})]}),Object(I.jsx)(U,{defaultValue:k.desc,text:k.desc||"Add a Description",placeholder:"Enter description",onSubmit:function(e){S(Object(E.a)(Object(E.a)({},k),{},{desc:e}))}})]}),Object(I.jsxs)("div",{className:"cardinfo-box",children:[Object(I.jsxs)("div",{className:"cardinfo-box-title",children:[Object(I.jsx)(q.a,{}),Object(I.jsx)("p",{children:"Date"})]}),Object(I.jsx)("input",{type:"date",defaultValue:k.date,min:(new Date).toISOString().substr(0,10),onChange:function(e){var t;(t=e.target.value)&&S(Object(E.a)(Object(E.a)({},k),{},{date:t}))}})]}),Object(I.jsxs)("div",{className:"cardinfo-box",children:[Object(I.jsxs)("div",{className:"cardinfo-box-title",children:[Object(I.jsx)(z.a,{}),Object(I.jsx)("p",{children:"Labels"})]}),Object(I.jsx)("div",{className:"cardinfo-box-labels",children:null===(t=k.labels)||void 0===t?void 0:t.map((function(e,t){return Object(I.jsx)(F,{item:e,removeLabel:w},t)}))}),Object(I.jsx)("ul",{children:M.map((function(e,t){return Object(I.jsx)("li",{style:{backgroundColor:e},className:u===e?"li-active":"",onClick:function(){return j(e)}},t)}))}),Object(I.jsx)(U,{text:"Add Label",placeholder:"Enter label text",onSubmit:function(e){return t={color:u,text:e},void(k.labels.findIndex((function(e){return e.text===t.text}))>-1||(j(""),S(Object(E.a)(Object(E.a)({},k),{},{labels:[].concat(Object(d.a)(k.labels),[t])}))));var t}})]}),Object(I.jsxs)("div",{className:"cardinfo-box",children:[Object(I.jsxs)("div",{className:"cardinfo-box-title",children:[Object(I.jsx)(J.a,{}),Object(I.jsx)("p",{children:"Tasks"})]}),Object(I.jsx)("div",{className:"cardinfo-box-progress-bar",children:Object(I.jsx)("div",{className:"cardinfo-box-progress",style:{width:"".concat(y,"%"),backgroundColor:100===y?"limegreen":""}})}),Object(I.jsx)("div",{className:"cardinfo-box-task-list",children:null===(n=k.tasks)||void 0===n?void 0:n.map((function(e){return Object(I.jsxs)("div",{className:"cardinfo-box-task-checkbox",children:[Object(I.jsx)("input",{type:"checkbox",defaultChecked:e.completed,onChange:function(t){return function(e,t){var n=Object(d.a)(k.tasks),c=n.findIndex((function(t){return t.id===e}));c<0||(n[c].completed=Boolean(t),S(Object(E.a)(Object(E.a)({},k),{},{tasks:n})))}(e.id,t.target.checked)}}),Object(I.jsx)("p",{className:e.completed?"completed":"",children:e.text}),Object(I.jsx)(G.a,{onClick:function(){return function(e){var t=Object(d.a)(k.tasks).filter((function(t){return t.id!==e}));S(Object(E.a)(Object(E.a)({},k),{},{tasks:t}))}(e.id)}})]},e.id)}))}),Object(I.jsx)(U,{text:"Add a Task",placeholder:"Enter task",onSubmit:function(e){var t={id:Date.now()+2*Math.random(),completed:!1,text:e};S(Object(E.a)(Object(E.a)({},k),{},{tasks:[].concat(Object(d.a)(k.tasks),[t])}))}})]}),Object(I.jsxs)("div",{className:"cardinfo-box",children:[Object(I.jsxs)("div",{className:"cardinfo-box-title",children:[Object(I.jsx)(H.a,{}),Object(I.jsx)("p",{children:"Comments"})]}),Object(I.jsx)("div",{className:"cardinfo-box-comments",children:k.comments.map((function(e){return Object(I.jsxs)("div",{className:"item",children:[Object(I.jsx)("div",{children:Object(d.a)(Array(e.depth)).map((function(e,t){return Object(I.jsx)(K.a,{className:"circle"},t)}))}),Object(I.jsx)("p",{children:e.comment}),Object(I.jsx)("span",{onClick:function(){return t=e.number,n=e.depth,v(t),void g(n+1);var t,n},children:"Answer"})]},e.number)}))}),Object(I.jsx)("div",{children:Object(I.jsx)(U,{text:0===h?"Add a Comment":"Answer",placeholder:"Enter comment",onSubmit:function(e){if(0===m&&0===h)S(Object(E.a)(Object(E.a)({},k),{},{comments:[].concat(Object(d.a)(k.comments),[{comment:e,number:k.comments.length+1,depth:0}])}));else{var t=Object(d.a)(k.comments).map((function(e){return e.number>m?Object(E.a)(Object(E.a)({},e),{},{number:e.number+1}):e}));t.push({comment:e,number:m+1,depth:h});var n=t.sort((function(e,t){return e.number-t.number}));S(Object(E.a)(Object(E.a)({},k),{},{comments:n}))}},clearComment:function(e){v(0),g(0)}})})]})]})})};var X=function(e){var t,n=e.card,r=e.boardId,a=e.removeCard,s=e.onDragEnd,i=e.onDragEnter,o=e.updateCard,d=n.id,l=n.number,u=n.title,j=n.desc,f=n.date,O=n.tasks,m=n.labels,v=Object(c.useState)(!1),x=Object(b.a)(v,2),p=x[0],h=x[1],g=Object(c.useState)(!1),N=Object(b.a)(g,2),C=N[0],k=N[1];return Object(I.jsxs)(I.Fragment,{children:[C&&Object(I.jsx)(W,{onClose:function(){return k(!1)},card:n,boardId:r,updateCard:o}),Object(I.jsxs)("div",{className:"card",draggable:!0,onDragEnd:function(){return s(r,d)},onDragEnter:function(){return i(r,d)},onClick:function(){return k(!0)},children:[Object(I.jsxs)("div",{className:"card-top",children:[Object(I.jsx)("div",{className:"card-top-labels",children:null===m||void 0===m?void 0:m.map((function(e,t){return Object(I.jsx)(F,{item:e},t)}))}),Object(I.jsxs)("div",{className:"card-top-more",onClick:function(e){e.stopPropagation(),h(!0)},children:[Object(I.jsx)(A.a,{}),p&&Object(I.jsx)(V,{class:"board-dropdown",onClose:function(){return h(!1)},children:Object(I.jsx)("p",{onClick:function(){return a(r,d)},children:"Delete Card"})})]})]}),Object(I.jsxs)("div",{className:"card-title",children:[u," #",l]}),Object(I.jsx)("div",{children:Object(I.jsx)("p",{title:j,children:Object(I.jsx)(P.a,{})})}),Object(I.jsxs)("div",{className:"card-footer",children:[f&&Object(I.jsxs)("p",{className:"card-footer-item",children:[Object(I.jsx)(T.a,{className:"card-footer-icon"}),L(f)," ",B(f)>=0&&"/ ".concat(B(f))]}),O&&(null===O||void 0===O?void 0:O.length)>0&&Object(I.jsxs)("p",{className:"card-footer-item",children:[Object(I.jsx)(J.a,{className:"card-footer-icon"}),null===O||void 0===O||null===(t=O.filter((function(e){return e.completed})))||void 0===t?void 0:t.length,"/",null===O||void 0===O?void 0:O.length]})]})]},n.id)]})};n(43);var Y=function(e){var t,n,c=e.board,r=e.addCard,a=(e.removeBoard,e.removeCard),s=e.onDragEnd,i=e.onDragEnter,o=e.updateCard;return Object(I.jsx)("div",{className:"board",children:Object(I.jsxs)("div",{className:"board-inner",children:[Object(I.jsx)("div",{className:"board-header",children:Object(I.jsxs)("p",{className:"board-header-title",children:[null===c||void 0===c?void 0:c.title,Object(I.jsx)("span",{children:(null===c||void 0===c||null===(t=c.cards)||void 0===t?void 0:t.length)||0})]})}),Object(I.jsxs)("div",{className:"board-cards custom-scroll",children:[null===c||void 0===c||null===(n=c.cards)||void 0===n?void 0:n.map((function(e){return Object(I.jsx)(X,{card:e,boardId:c.id,removeCard:a,onDragEnter:i,onDragEnd:s,updateCard:o},e.id)})),Object(I.jsx)(U,{text:"+ Add Card",placeholder:"Enter Card Title",displayClass:"board-add-card",editClass:"board-add-card-edit",id:null===c||void 0===c?void 0:c.id,onDragEnter:i,onSubmit:function(e){return r(null===c||void 0===c?void 0:c.id,e)}})]})]},null===c||void 0===c?void 0:c.id)})};n(44);var Z=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(o.p)().id;function s(){return(s=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(a);case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]);var l=Object(c.useState)({boardId:0,cardId:0}),f=Object(b.a)(l,2),O=f[0],m=f[1],v=function(e,t){var c=n.findIndex((function(t){return t.id===e}));if(!(c<0)){var a=Object(d.a)(n),s=0;for(var i in a)s+=a[i].cards.length;var o=new Date;a[c].cards.push({id:Date.now()+2*Math.random(),number:s+1,title:t,labels:[],date:o.toISOString().split("T")[0],tasks:[],desc:"",comments:[]}),r(a)}},x=function(e,t){var c=n.findIndex((function(t){return t.id===e}));if(!(c<0)){var a=Object(d.a)(n),s=a[c].cards,i=s.findIndex((function(e){return e.id===t}));i<0||(s.splice(i,1),r(a))}},h=function(e,t,c){var a=n.findIndex((function(t){return t.id===e}));if(!(a<0)){var s=Object(d.a)(n),i=s[a].cards.findIndex((function(e){return e.id===t}));i<0||(s[a].cards[i]=c,r(s))}},g=function(e,t){var c,a,s,i,o=n.findIndex((function(t){return t.id===e}));if(!(o<0)){var l=null===(c=n[o])||void 0===c||null===(a=c.cards)||void 0===a?void 0:a.findIndex((function(e){return e.id===t}));if(!(l<0)){var u=n.findIndex((function(e){return e.id===O.boardId}));if(!(u<0)){var j=null===(s=n[u])||void 0===s||null===(i=s.cards)||void 0===i?void 0:i.findIndex((function(e){return e.id===O.cardId})),b=Object(d.a)(n),f=b[o].cards[l];b[o].cards.splice(l,1),b[u].cards.splice(j,0,f),r(b),m({boardId:0,cardId:0})}}}},N=function(e,t){O.cardId!==t&&m(t?{boardId:e,cardId:t}:Object(E.a)(Object(E.a)({},O),{},{boardId:e}))};return Object(c.useEffect)((function(){S(n,a)}),[n]),Object(I.jsxs)("div",{className:"app",children:[Object(I.jsxs)("div",{className:"app-nav",children:[Object(I.jsx)(i.b,{to:"/#",children:"Projects"}),Object(I.jsxs)("span",{children:["\xa0/ ",a]})]}),Object(I.jsx)("div",{className:"app-boards-container",children:Object(I.jsx)("div",{className:"app-boards",children:n.map((function(e){return Object(I.jsx)(Y,{board:e,addCard:v,removeBoard:function(){return function(e){var t=n.findIndex((function(t){return t.id===e}));if(!(t<0)){var c=Object(d.a)(n);c.splice(t,1),r(c)}}(e.id)},removeCard:x,onDragEnd:g,onDragEnter:N,updateCard:h},e.id)}))})})]})};var $=function(){return Object(I.jsx)(i.a,{children:Object(I.jsxs)(o.c,{children:[Object(I.jsx)(o.a,{path:"/:id",element:Object(I.jsx)(Z,{})}),Object(I.jsx)(o.a,{path:"/",element:Object(I.jsx)(y,{})})]})})};s.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)($,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.bdb12953.chunk.js.map