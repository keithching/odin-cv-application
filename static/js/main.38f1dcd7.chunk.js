(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),d=n(8),c=n.n(d),s=n(5),l=n(2),o=(n(13),n(14),n(0)),r=function(e){var t=e.mode,n=e.id,i=e.editEntry,a=e.specificID;return Object(o.jsx)("button",{className:"editButton",onClick:function(e){return i(n,e,a)},children:"read"===t?Object(o.jsx)("i",{id:"edit",className:"fas fa-edit"}):Object(o.jsx)("i",{id:"update",className:"far fa-check-square"})})},j=function(e){var t=e.id,n=e.deleteEntry,i=e.specificID;return Object(o.jsx)("button",{className:"deleteButton",onClick:function(e){return n(t,e,i)},children:Object(o.jsx)("i",{className:"fas fa-trash-alt"})})},u=function(e){var t=e.mode,n=e.name,i=e.handleChange,a=e.editEntry,d="name";return"read"===t?Object(o.jsxs)("div",{className:"generalInfo_name",children:[Object(o.jsx)("label",{htmlFor:"nameInput",children:"Name: "}),Object(o.jsx)("span",{className:"display",children:n}),Object(o.jsx)(r,{mode:t,id:d,editEntry:a})]}):"edit"===t?Object(o.jsxs)("div",{className:"generalInfo_name",children:[Object(o.jsx)("label",{htmlFor:"nameInput",children:"Name: "}),Object(o.jsx)("input",{onChange:function(e){return i(d,e)},id:"nameInput",type:"text",value:n,autoComplete:"off"}),Object(o.jsx)(r,{mode:t,id:d,editEntry:a})]}):void 0},m=function(e){var t=e.mode,n=e.email,i=e.handleChange,a=e.editEntry,d="email";return"read"===t?Object(o.jsxs)("div",{className:"generalInfo_email",children:[Object(o.jsx)("label",{htmlFor:"emailInput",children:"Email: "}),Object(o.jsx)("span",{className:"display",children:n}),Object(o.jsx)(r,{mode:t,id:d,editEntry:a})]}):"edit"===t?Object(o.jsxs)("div",{className:"generalInfo_email",children:[Object(o.jsx)("label",{htmlFor:"emailInput",children:"Email: "}),Object(o.jsx)("input",{onChange:function(e){return i(d,e)},id:"emailInput",type:"text",value:n,autoComplete:"off"}),Object(o.jsx)(r,{mode:t,id:d,editEntry:a})]}):void 0},h=function(e){var t=e.mode,n=e.phone,i=e.handleChange,a=e.editEntry,d="phone";return"read"===t?Object(o.jsxs)("div",{className:"generalInfo_phone",children:[Object(o.jsx)("label",{htmlFor:"phoneInput",children:"Phone: "}),Object(o.jsx)("span",{className:"display",children:n}),Object(o.jsx)(r,{mode:t,id:d,editEntry:a})]}):"edit"===t?Object(o.jsxs)("div",{className:"generalInfo_phone",children:[Object(o.jsx)("label",{htmlFor:"emailInput",children:"Phone: "}),Object(o.jsx)("input",{onChange:function(e){return i(d,e)},id:"phoneInput",type:"text",value:n,autoComplete:"off"}),Object(o.jsx)(r,{mode:t,id:d,editEntry:a})]}):void 0},O=(n(16),function(e){var t=e.education,n=e.handleChange,i="education";return"read"===t.mode?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("span",{className:"display",children:t.schoolName})}),Object(o.jsx)("div",{children:Object(o.jsx)("span",{className:"display",children:t.titleOfStudy})}),Object(o.jsx)("div",{children:Object(o.jsx)("span",{className:"display",children:t.dateOfStudy})})]}):"edit"===t.mode?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"schoolNameInput",children:"School Name: "}),Object(o.jsx)("input",{onChange:function(e){return n(i,e,t.id)},className:"display",id:"schoolNameInput",type:"text",value:t.schoolName,autoComplete:"off"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"titleOfStudyInput",children:"Title of Study: "}),Object(o.jsx)("input",{onChange:function(e){return n(i,e,t.id)},className:"display",id:"titleOfStudyInput",type:"text",value:t.titleOfStudy,autoComplete:"off"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"dateOfStudyInput",children:"Date of Study: "}),Object(o.jsx)("input",{onChange:function(e){return n(i,e,t.id)},className:"display",id:"dateOfStudyInput",type:"text",value:t.dateOfStudy,autoComplete:"off"})]})]}):void 0}),x=function(e){var t=e.educations,n=e.addEducation,i=e.handleChange,a=e.editEntry,d=e.deleteEntry,c="education";return Object(o.jsxs)("div",{className:"educationalExperience",children:[Object(o.jsx)("ul",{children:t.map((function(e){return Object(o.jsxs)("li",{className:"education",children:[Object(o.jsx)(O,{education:e,handleChange:i}),Object(o.jsx)(r,{mode:e.mode,id:c,editEntry:a,specificID:e.id}),Object(o.jsx)(j,{id:c,deleteEntry:d,specificID:e.id})]},e.id)}))}),Object(o.jsx)("button",{className:"addEducation",onClick:n,children:"Add Education"})]})},p=(n(17),function(e){var t=e.work,n=e.handleChange,i="work";return"read"===t.mode?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("span",{className:"display",children:t.companyName})}),Object(o.jsx)("div",{children:Object(o.jsx)("span",{className:"display",children:t.positionTitle})}),Object(o.jsx)("div",{children:Object(o.jsx)("span",{className:"display",children:t.mainTasks})}),Object(o.jsx)("div",{children:Object(o.jsx)("span",{className:"display",children:t.dateFromAndUntil})})]}):"edit"===t.mode?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"companyNameInput",children:"Company Name: "}),Object(o.jsx)("input",{onChange:function(e){return n(i,e,t.id)},className:"display",id:"companyNameInput",type:"text",value:t.companyName,autoComplete:"off"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"positionTitleInput",children:"Position Title: "}),Object(o.jsx)("input",{onChange:function(e){return n(i,e,t.id)},className:"display",id:"positionTitleInput",type:"text",value:t.positionTitle,autoComplete:"off"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"mainTasksInput",children:"Main Tasks: "}),Object(o.jsx)("input",{onChange:function(e){return n(i,e,t.id)},className:"display",id:"mainTasksInput",type:"text",value:t.mainTasks,autoComplete:"off"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"dateFromAndUntilInput",children:"Date From and Until: "}),Object(o.jsx)("input",{onChange:function(e){return n(i,e,t.id)},className:"display",id:"dateFromAndUntilInput",type:"text",value:t.dateFromAndUntil,autoComplete:"off"})]})]}):void 0}),b=function(e){var t=e.works,n=e.addWork,i=e.handleChange,a=e.editEntry,d=e.deleteEntry,c="work";return Object(o.jsxs)("div",{className:"practicalExperience",children:[Object(o.jsx)("ul",{children:t.map((function(e){return Object(o.jsxs)("li",{className:"work",children:[Object(o.jsx)(p,{work:e,handleChange:i}),Object(o.jsx)(r,{mode:e.mode,id:c,editEntry:a,specificID:e.id}),Object(o.jsx)(j,{id:c,deleteEntry:d,specificID:e.id})]},e.id)}))}),Object(o.jsx)("button",{className:"addWork",onClick:n,children:"Add Work"})]})},f=(n(18),function(e){var t=e.name,n=e.email,i=e.phone,a=e.educations,d=e.works;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"CV_name",children:t}),Object(o.jsxs)("div",{className:"CV_email_phone",children:[n," | ",i]}),Object(o.jsx)("div",{className:"CV_practicalExperience_title",children:"EXPERIENCE"}),Object(o.jsx)("div",{className:"CV_works",children:Object(o.jsx)("ul",{children:d.map((function(e){return Object(o.jsxs)("li",{className:"CV_work",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"positionTitle_companyName",children:[e.positionTitle," at ",e.companyName]}),Object(o.jsx)("div",{className:"dateFromAndUntil",children:e.dateFromAndUntil})]}),Object(o.jsx)("div",{className:"mainTasks",children:e.mainTasks})]},e.id)}))})}),Object(o.jsx)("div",{className:"CV_educationalExperience_title",children:"EDUCATION"}),Object(o.jsx)("div",{className:"CV_educations",children:Object(o.jsx)("ul",{children:a.map((function(e){return Object(o.jsxs)("li",{className:"CV_education",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"schoolName",children:e.schoolName}),Object(o.jsx)("div",{className:"dateOfStudy",children:e.dateOfStudy})]}),Object(o.jsx)("div",{className:"titleOfStudy",children:e.titleOfStudy})]},e.id)}))})})]})}),y=n(4),v=n.n(y),N=(n(20),function(){var e=Object(i.useState)({text:"Name",mode:"read"}),t=Object(l.a)(e,2),n=t[0],a=t[1],d=Object(i.useState)({text:"Email",mode:"read"}),c=Object(l.a)(d,2),r=c[0],j=c[1],O=Object(i.useState)({text:"Phone",mode:"read"}),p=Object(l.a)(O,2),y=p[0],N=p[1],I=Object(i.useState)({mode:"read",id:v()(),schoolName:"School Name",titleOfStudy:"Title of Study",dateOfStudy:"Date of Study"}),g=Object(l.a)(I,2),E=g[0],C=g[1],k=Object(i.useState)([]),S=Object(l.a)(k,2),T=S[0],F=S[1],w=Object(i.useState)({mode:"read",id:v()(),companyName:"Company Name",positionTitle:"Position Title",mainTasks:"Main Tasks",dateFromAndUntil:"Date from and until"}),_=Object(l.a)(w,2),A=_[0],D=_[1],U=Object(i.useState)([]),B=Object(l.a)(U,2),P=B[0],V=B[1],M=function(e,t,i){"name"===e?a({text:t.target.value,mode:n.mode}):"email"===e?j({text:t.target.value,mode:r.mode}):"phone"===e?N({text:t.target.value,mode:y.mode}):"education"===e?F((function(e){for(var n=e.find((function(e){return e.id===i})),a=Object(s.a)(e),d=0;d<a.length;d++)a[d]===n&&("schoolNameInput"===t.target.id?a[d].schoolName=document.getElementById("schoolNameInput").value:"titleOfStudyInput"===t.target.id?a[d].titleOfStudy=document.getElementById("titleOfStudyInput").value:"dateOfStudyInput"===t.target.id&&(a[d].dateOfStudy=document.getElementById("dateOfStudyInput").value));return a})):"work"===e&&V((function(e){var n=e.find((function(e){return e.id===i})),a=Object(s.a)(e);return a.forEach((function(e){e===n&&("companyNameInput"===t.target.id?e.companyName=document.getElementById("companyNameInput").value:"positionTitleInput"===t.target.id?e.positionTitle=document.getElementById("positionTitleInput").value:"mainTasksInput"===t.target.id?e.mainTasks=document.getElementById("mainTasksInput").value:"dateFromAndUntilInput"===t.target.id&&(e.dateFromAndUntil=document.getElementById("dateFromAndUntilInput").value))})),a}))},W=function(e,t,n){"name"===e?a((function(e){return"read"===e.mode?{text:e.text,mode:"edit"}:"edit"===e.mode?{text:e.text,mode:"read"}:void 0})):"email"===e?j((function(e){return"read"===e.mode?{text:e.text,mode:"edit"}:"edit"===e.mode?{text:e.text,mode:"read"}:void 0})):"phone"===e?N((function(e){return"read"===e.mode?{text:e.text,mode:"edit"}:"edit"===e.mode?{text:e.text,mode:"read"}:void 0})):"education"===e?F((function(e){for(var i=e.find((function(e){return e.id===n})),a=Object(s.a)(e),d=0;d<a.length;d++)a[d]===i&&("edit"===t.target.id?a[d].mode="edit":"update"===t.target.id&&(a[d].mode="read"));return a})):"work"===e&&V((function(e){var i=e.find((function(e){return e.id===n})),a=Object(s.a)(e);return a.forEach((function(e){e===i&&("edit"===t.target.id?e.mode="edit":"update"===t.target.id&&(e.mode="read"))})),a}))},J=function(e,t,n){"education"===e?F((function(){return T.filter((function(e){return e.id!==n}))})):"work"===e&&V((function(){return P.filter((function(e){return e.id!==n}))}))};return Object(o.jsxs)("div",{className:"main",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)("h2",{children:"General Information"}),Object(o.jsx)("div",{children:Object(o.jsx)(u,{mode:n.mode,name:n.text,handleChange:M,editEntry:W})}),Object(o.jsx)("div",{children:Object(o.jsx)(m,{mode:r.mode,email:r.text,handleChange:M,editEntry:W})}),Object(o.jsx)("div",{children:Object(o.jsx)(h,{mode:y.mode,phone:y.text,handleChange:M,editEntry:W})}),Object(o.jsx)("h2",{children:"Educational Experience"}),Object(o.jsx)("div",{children:Object(o.jsx)(x,{educations:T,addEducation:function(){F(T.concat(E)),C({mode:"read",id:v()(),schoolName:"School Name",titleOfStudy:"Title of Study",dateOfStudy:"Date of Study"})},handleChange:M,editEntry:W,deleteEntry:J})}),Object(o.jsx)("h2",{children:"Practical Experience"}),Object(o.jsx)("div",{children:Object(o.jsx)(b,{works:P,addWork:function(){V(P.concat(A)),D({mode:"read",id:v()(),companyName:"Company Name",positionTitle:"Position Title",mainTasks:"Main Tasks",dateFromAndUntil:"Date from and until"})},handleChange:M,editEntry:W,deleteEntry:J})})]}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(f,{name:n.text,email:r.text,phone:y.text,educations:T,works:P})})})]})});c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.38f1dcd7.chunk.js.map