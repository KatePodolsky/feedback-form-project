(this["webpackJsonpfeedback-form-project"]=this["webpackJsonpfeedback-form-project"]||[]).push([[0],{17:function(e,t,r){e.exports={optsStylesSuccess:"Pnotify_optsStylesSuccess__1Mqua"}},19:function(e,t,r){e.exports={footer:"Footer_footer__18nU6",social__list:"Footer_social__list__2_WeB"}},31:function(e,t,r){e.exports={Container:"Container_Container__1iuut"}},32:function(e,t,r){e.exports={button:"Button_button__2HH3L"}},33:function(e,t,r){e.exports={BG:"BG_BG__2_x3N"}},5:function(e,t,r){e.exports={form:"FeedbackForm_form__1ajy8",titleForm:"FeedbackForm_titleForm__2qPyM",label:"FeedbackForm_label__jg0k2",input:"FeedbackForm_input__1F8q_",textarea:"FeedbackForm_textarea__R1k8O"}},70:function(e,t,r){},71:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(10),l=r.n(c),o=r(4),s=r(6),i=r(28),u=r.n(i),b={feedbackRequest:Object(o.b)("feedback/feedbackRequest"),feedbackSuccess:Object(o.b)("feedback/feedbackSuccess"),feedbackError:Object(o.b)("feedback/feedbackError")},f=r(15),d=r.n(f),j=r(29),p=r(16),h=r.n(p),O=r(12),m=(r(60),r(61),r(62),r(17)),v=r.n(m);function x(e,t){"undefined"===typeof window&&(window=new O.Stack({dir1:"down",dir2:"right",firstpos1:25,firstpos2:25,push:"top",maxStrategy:"close"}));var r={title:"Info",text:"message",delay:6e3,addClass:v.a.optsStylesSuccess},n={title:"Error",text:"message",delay:6e3,addClass:v.a.optsStylesSuccess};switch(e){case"confirmation":r.title="Thank you,",r.text="we will contact you as soon as possible.";break;case"sendingError":n.title="Sorry,",n.text="something went wrong, the message was not sent"}switch(t){case"opts":Object(O.alert)(r);break;case"optsError":Object(O.alert)(n)}}h.a.defaults.baseURL="https://aqueous-refuge-13466.herokuapp.com/api";var y,g=function(e){return function(){var t=Object(j.a)(d.a.mark((function t(r){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(b.feedbackRequest()),t.prev=1,t.next=4,h.a.post("/users/feedback",e);case 4:n=t.sent,r(b.feedbackSuccess(n.data)),x("confirmation","opts"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),r(b.feedbackError(t.t0.message)),x("sendingError","optsError");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},w=r(7),_=r(2),k=Object(o.c)([],Object(w.a)({},b.feedbackSuccess,(function(e,t){return t.payload.user}))),S=Object(o.c)(null,Object(w.a)({},b.feedbackError,(function(e,t){return t.payload}))),E=Object(_.b)({user:k,error:S}),F={key:"feedback",storage:u.a},C=Object(o.a)({reducer:{feedback:Object(s.g)(F,E)},middleware:function(e){return e({serializableCheck:{ignoredActions:[s.a,s.f,s.b,s.c,s.d,s.e]}})},devTools:!1}),I={store:C,persistor:Object(s.h)(C)},N=r(11),P=r(31),R=r.n(P),H=r(1),M=function(e){var t=e.children;return Object(H.jsx)("div",{className:R.a.Container,children:t})},q=r(13),B=r(32),V=r.n(B),Z=function(e){var t=e.type,r=e.buttonHandler,n=e.buttonText;return Object(H.jsx)("button",{type:t,onClick:r,className:V.a.button,children:n})},G=r(5),T=r.n(G),A=function(){var e=Object(N.b)(),t=Object(n.useState)(""),r=Object(q.a)(t,2),a=r[0],c=r[1],l=Object(n.useState)(""),o=Object(q.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(""),b=Object(q.a)(u,2),f=b[0],d=b[1],j=function(e){var t=e.target,r=t.name,n=t.value;switch(r){case"name":return c(n);case"email":return i(n);case"message":return d(n);default:return}};return Object(H.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(g({name:a,email:s,message:f})),c(""),i(""),d("")},className:T.a.form,autoComplete:"on",children:[Object(H.jsx)("h2",{className:T.a.titleForm,children:"Reach out to us!"}),Object(H.jsx)("label",{className:T.a.label,children:Object(H.jsx)("input",{className:T.a.input,type:"text",name:"name",value:a,placeholder:"Your name*",onChange:j})}),Object(H.jsx)("label",{className:T.a.label,children:Object(H.jsx)("input",{className:T.a.input,type:"email",name:"email",value:s,placeholder:"Your e-mail*",onChange:j})}),Object(H.jsx)("textarea",{className:T.a.textarea,rows:"5",name:"message",value:f,placeholder:"Your message*",onChange:j}),Object(H.jsx)("div",{className:T.a.button__container,children:Object(H.jsx)(Z,{type:"submit",buttonText:"Send message"})})]})},Y=r(19),J=r.n(Y),L=["title","titleId"];function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U.apply(this,arguments)}function z(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function D(e,t){var r=e.title,a=e.titleId,c=z(e,L);return n.createElement("svg",U({width:13,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),r?n.createElement("title",{id:a},r):null,y||(y=n.createElement("path",{d:"M7.03.287C3.762.287.533 2.315.533 5.597c0 2.088 1.261 3.274 2.025 3.274.315 0 .497-.818.497-1.05 0-.275-.755-.862-.755-2.01 0-2.384 1.949-4.074 4.47-4.074 2.169 0 3.773 1.147 3.773 3.256 0 1.574-.678 4.527-2.875 4.527-.793 0-1.47-.533-1.47-1.298 0-1.121.84-2.206.84-3.363 0-1.963-2.99-1.607-2.99.765 0 .498.067 1.05.306 1.504-.44 1.76-1.337 4.385-1.337 6.2 0 .56.086 1.112.143 1.672.108.113.054.1.22.045 1.604-2.046 1.547-2.447 2.273-5.124.391.694 1.404 1.067 2.206 1.067 3.381 0 4.9-3.069 4.9-5.835 0-2.945-2.732-4.866-5.73-4.866Z",fill:"#696969"})))}var W,K=n.forwardRef(D),Q=(r.p,["title","titleId"]);function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X.apply(this,arguments)}function $(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function ee(e,t){var r=e.title,a=e.titleId,c=$(e,Q);return n.createElement("svg",X({width:9,height:17,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),r?n.createElement("title",{id:a},r):null,W||(W=n.createElement("path",{d:"M2.862 16.086V8.891H.432V6.032h2.43V3.78C2.862 1.332 4.37 0 6.572 0c1.055 0 1.961.079 2.224.113v2.558H7.27c-1.198 0-1.429.565-1.429 1.391v1.97h2.703l-.37 2.86H5.84v7.194",fill:"#696969"})))}var te,re=n.forwardRef(ee),ne=(r.p,["title","titleId"]);function ae(){return ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ae.apply(this,arguments)}function ce(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function le(e,t){var r=e.title,a=e.titleId,c=ce(e,ne);return n.createElement("svg",ae({width:17,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),r?n.createElement("title",{id:a},r):null,te||(te=n.createElement("path",{d:"M15.04 3.494c.01.14.01.282.01.422 0 4.293-3.317 9.24-9.38 9.24a9.42 9.42 0 0 1-5.063-1.458c.266.03.52.04.796.04 1.542 0 2.96-.512 4.093-1.387-1.45-.03-2.664-.965-3.082-2.252.204.03.408.05.622.05.296 0 .592-.04.868-.11-1.51-.302-2.644-1.61-2.644-3.188v-.04c.44.242.95.392 1.49.412A3.233 3.233 0 0 1 1.28 2.52c0-.603.164-1.156.45-1.639a9.42 9.42 0 0 0 6.798 3.398 3.613 3.613 0 0 1-.082-.744c0-1.79 1.47-3.247 3.297-3.247.95 0 1.807.392 2.409 1.025a6.551 6.551 0 0 0 2.092-.784 3.248 3.248 0 0 1-1.45 1.79 6.688 6.688 0 0 0 1.9-.503 7.028 7.028 0 0 1-1.654 1.68Z",fill:"#696969"})))}var oe,se=n.forwardRef(le),ie=(r.p,["title","titleId"]);function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ue.apply(this,arguments)}function be(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function fe(e,t){var r=e.title,a=e.titleId,c=be(e,ie);return n.createElement("svg",ue({width:13,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),r?n.createElement("title",{id:a},r):null,oe||(oe=n.createElement("path",{d:"M2.88 13.236H.214V4.591H2.88v8.645ZM1.546 3.412C.692 3.412 0 2.7 0 1.842A1.55 1.55 0 0 1 1.545.287 1.55 1.55 0 0 1 3.09 1.842c0 .859-.692 1.57-1.545 1.57Zm11.321 9.824h-2.662V9.028c0-1.003-.02-2.29-1.387-2.29-1.387 0-1.6 1.09-1.6 2.218v4.28H4.552V4.591h2.559v1.18h.037c.356-.68 1.226-1.397 2.525-1.397 2.7 0 3.196 1.79 3.196 4.113v4.75h-.003Z",fill:"#696969"})))}var de=n.forwardRef(fe),je=(r.p,function(){return Object(H.jsx)("footer",{className:J.a.footer,children:Object(H.jsxs)("ul",{className:J.a.social__list,children:[Object(H.jsxs)("li",{children:[" ",Object(H.jsx)("a",{href:"",children:Object(H.jsx)(de,{})})]}),Object(H.jsxs)("li",{children:[" ",Object(H.jsx)("a",{href:"",children:Object(H.jsx)(se,{})})]}),Object(H.jsxs)("li",{children:[" ",Object(H.jsx)("a",{href:"",children:Object(H.jsx)(re,{})})]}),Object(H.jsxs)("li",{children:[" ",Object(H.jsx)("a",{href:"",children:Object(H.jsx)(K,{})})]})]})})}),pe=r(33),he=r.n(pe),Oe=function(e){var t=e.children;return Object(H.jsx)("div",{className:he.a.BG,children:t})};var me=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(Oe,{children:Object(H.jsx)(M,{children:Object(H.jsx)(A,{})})}),Object(H.jsx)(je,{})]})};r(70);l.a.render(Object(H.jsx)(a.a.StrictMode,{children:Object(H.jsx)(N.a,{store:I.store,children:Object(H.jsx)(me,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.8bfa7187.chunk.js.map