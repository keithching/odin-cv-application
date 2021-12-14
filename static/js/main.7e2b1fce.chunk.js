(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),d=n(9),c=n.n(d),s=n(2),o=n(3),r=n(6),l=n(5),u=n(4),m=(n(14),n(15),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.id,a=e.editEntry,i=e.specificID;return Object(m.jsx)("button",{className:"editButton",onClick:function(e){return a(n,e,i)},children:"read"===t?Object(m.jsx)("i",{id:"edit",className:"fas fa-edit"}):Object(m.jsx)("i",{id:"update",className:"far fa-check-square"})})}}]),n}(a.Component),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.deleteEntry,a=e.specificID;return Object(m.jsx)("button",{className:"deleteButton",onClick:function(e){return n(t,e,a)},children:Object(m.jsx)("i",{className:"fas fa-trash-alt"})})}}]),n}(a.Component),p=function(e){var t=e.mode,n=e.name,a=e.handleChange,i=e.editEntry,d="name";return"read"===t?Object(m.jsxs)("div",{className:"generalInfo_name",children:[Object(m.jsx)("label",{htmlFor:"nameInput",children:"Name: "}),Object(m.jsx)("span",{className:"display",children:n}),Object(m.jsx)(j,{mode:t,id:d,editEntry:i})]}):"edit"===t?Object(m.jsxs)("div",{className:"generalInfo_name",children:[Object(m.jsx)("label",{htmlFor:"nameInput",children:"Name: "}),Object(m.jsx)("input",{onChange:function(e){return a(d,e)},id:"nameInput",type:"text",value:n,autoComplete:"off"}),Object(m.jsx)(j,{mode:t,id:d,editEntry:i})]}):void 0},b=function(e){var t=e.mode,n=e.email,a=e.handleChange,i=e.editEntry,d="email";return"read"===t?Object(m.jsxs)("div",{className:"generalInfo_email",children:[Object(m.jsx)("label",{htmlFor:"emailInput",children:"Email: "}),Object(m.jsx)("span",{className:"display",children:n}),Object(m.jsx)(j,{mode:t,id:d,editEntry:i})]}):"edit"===t?Object(m.jsxs)("div",{className:"generalInfo_email",children:[Object(m.jsx)("label",{htmlFor:"emailInput",children:"Email: "}),Object(m.jsx)("input",{onChange:function(e){return a(d,e)},id:"emailInput",type:"text",value:n,autoComplete:"off"}),Object(m.jsx)(j,{mode:t,id:d,editEntry:i})]}):void 0},O=function(e){var t=e.mode,n=e.phone,a=e.handleChange,i=e.editEntry,d="phone";return"read"===t?Object(m.jsxs)("div",{className:"generalInfo_phone",children:[Object(m.jsx)("label",{htmlFor:"phoneInput",children:"Phone: "}),Object(m.jsx)("span",{className:"display",children:n}),Object(m.jsx)(j,{mode:t,id:d,editEntry:i})]}):"edit"===t?Object(m.jsxs)("div",{className:"generalInfo_phone",children:[Object(m.jsx)("label",{htmlFor:"emailInput",children:"Phone: "}),Object(m.jsx)("input",{onChange:function(e){return a(d,e)},id:"phoneInput",type:"text",value:n,autoComplete:"off"}),Object(m.jsx)(j,{mode:t,id:d,editEntry:i})]}):void 0},x=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.educations,n=e.addEducation,a=e.handleChange,i=e.editEntry,d=e.deleteEntry,c="education";return Object(m.jsxs)("div",{className:"educationalExperience",children:[Object(m.jsx)("ul",{children:t.map((function(e){return Object(m.jsxs)("li",{className:"education",children:[Object(m.jsx)(f,{education:e,handleChange:a}),Object(m.jsx)(j,{mode:e.mode,id:c,editEntry:i,specificID:e.id}),Object(m.jsx)(h,{id:c,deleteEntry:d,specificID:e.id})]},e.id)}))}),Object(m.jsx)("button",{className:"addEducation",onClick:n,children:"Add Education"})]})}}]),n}(a.Component)),f=function(e){var t=e.education,n=e.handleChange,a="education";return"read"===t.mode?Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"display",children:t.schoolName})}),Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"display",children:t.titleOfStudy})}),Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"display",children:t.dateOfStudy})})]}):"edit"===t.mode?Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"schoolNameInput",children:"School Name: "}),Object(m.jsx)("input",{onChange:function(e){return n(a,e,t.id)},className:"display",id:"schoolNameInput",type:"text",value:t.schoolName,autoComplete:"off"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"titleOfStudyInput",children:"Title of Study: "}),Object(m.jsx)("input",{onChange:function(e){return n(a,e,t.id)},className:"display",id:"titleOfStudyInput",type:"text",value:t.titleOfStudy,autoComplete:"off"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"dateOfStudyInput",children:"Date of Study: "}),Object(m.jsx)("input",{onChange:function(e){return n(a,e,t.id)},className:"display",id:"dateOfStudyInput",type:"text",value:t.dateOfStudy,autoComplete:"off"})]})]}):void 0},y=x,v=(n(18),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.works,n=e.addWork,a=e.handleChange,i=e.editEntry,d=e.deleteEntry,c="work";return Object(m.jsxs)("div",{className:"practicalExperience",children:[Object(m.jsx)("ul",{children:t.map((function(e){return Object(m.jsxs)("li",{className:"work",children:[Object(m.jsx)(N,{work:e,handleChange:a}),Object(m.jsx)(j,{mode:e.mode,id:c,editEntry:i,specificID:e.id}),Object(m.jsx)(h,{id:c,deleteEntry:d,specificID:e.id})]},e.id)}))}),Object(m.jsx)("button",{className:"addWork",onClick:n,children:"Add Work"})]})}}]),n}(a.Component)),N=function(e){var t=e.work,n=e.handleChange,a="work";return"read"===t.mode?Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"display",children:t.companyName})}),Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"display",children:t.positionTitle})}),Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"display",children:t.mainTasks})}),Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"display",children:t.dateFromAndUntil})})]}):"edit"===t.mode?Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"companyNameInput",children:"Company Name: "}),Object(m.jsx)("input",{onChange:function(e){return n(a,e,t.id)},className:"display",id:"companyNameInput",type:"text",value:t.companyName,autoComplete:"off"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"positionTitleInput",children:"Position Title: "}),Object(m.jsx)("input",{onChange:function(e){return n(a,e,t.id)},className:"display",id:"positionTitleInput",type:"text",value:t.positionTitle,autoComplete:"off"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"mainTasksInput",children:"Main Tasks: "}),Object(m.jsx)("input",{onChange:function(e){return n(a,e,t.id)},className:"display",id:"mainTasksInput",type:"text",value:t.mainTasks,autoComplete:"off"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"dateFromAndUntilInput",children:"Date From and Until: "}),Object(m.jsx)("input",{onChange:function(e){return n(a,e,t.id)},className:"display",id:"dateFromAndUntilInput",type:"text",value:t.dateFromAndUntil,autoComplete:"off"})]})]}):void 0},E=v,k=(n(19),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.email,a=e.phone,i=e.educations,d=e.works;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"CV_name",children:t}),Object(m.jsxs)("div",{className:"CV_email_phone",children:[n," | ",a]}),Object(m.jsx)("div",{className:"CV_practicalExperience_title",children:"EXPERIENCE"}),Object(m.jsx)("div",{className:"CV_works",children:Object(m.jsx)("ul",{children:d.map((function(e){return Object(m.jsxs)("li",{className:"CV_work",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"positionTitle_companyName",children:[e.positionTitle," at ",e.companyName]}),Object(m.jsx)("div",{className:"dateFromAndUntil",children:e.dateFromAndUntil})]}),Object(m.jsx)("div",{className:"mainTasks",children:e.mainTasks})]},e.id)}))})}),Object(m.jsx)("div",{className:"CV_educationalExperience_title",children:"EDUCATION"}),Object(m.jsx)("div",{className:"CV_educations",children:Object(m.jsx)("ul",{children:i.map((function(e){return Object(m.jsxs)("li",{className:"CV_education",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"schoolName",children:e.schoolName}),Object(m.jsx)("div",{className:"dateOfStudy",children:e.dateOfStudy})]}),Object(m.jsx)("div",{className:"titleOfStudy",children:e.titleOfStudy})]},e.id)}))})})]})}}]),n}(a.Component)),C=n(7),g=n.n(C),I=(n(21),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=function(e,t,n){"name"===e?a.setState((function(e){return{name:{text:t.target.value,mode:e.name.mode}}})):"email"===e?a.setState((function(e){return{email:{text:t.target.value,mode:e.email.mode}}})):"phone"===e?a.setState((function(e){return{phone:{text:t.target.value,mode:e.phone.mode}}})):"education"===e?a.setState((function(e){var a=e.educations.find((function(e){return e.id===n})),i=e.educations;return i.forEach((function(e){e===a&&("schoolNameInput"===t.target.id?e.schoolName=document.getElementById("schoolNameInput").value:"titleOfStudyInput"===t.target.id?e.titleOfStudy=document.getElementById("titleOfStudyInput").value:"dateOfStudyInput"===t.target.id&&(e.dateOfStudy=document.getElementById("dateOfStudyInput").value))})),{educations:i}})):"work"===e&&a.setState((function(e){var a=e.works.find((function(e){return e.id===n})),i=e.works;return i.forEach((function(e){e===a&&("companyNameInput"===t.target.id?e.companyName=document.getElementById("companyNameInput").value:"positionTitleInput"===t.target.id?e.positionTitle=document.getElementById("positionTitleInput").value:"mainTasksInput"===t.target.id?e.mainTasks=document.getElementById("mainTasksInput").value:"dateFromAndUntilInput"===t.target.id&&(e.dateFromAndUntil=document.getElementById("dateFromAndUntilInput").value))})),{works:i}}))},a.editEntry=function(e,t,n){"name"===e?a.setState((function(e){return"read"===e.name.mode?{name:{text:e.name.text,mode:"edit"}}:"edit"===e.name.mode?{name:{text:e.name.text,mode:"read"}}:void 0})):"email"===e?a.setState((function(e){return"read"===e.email.mode?{email:{text:e.email.text,mode:"edit"}}:"edit"===e.email.mode?{email:{text:e.email.text,mode:"read"}}:void 0})):"phone"===e?a.setState((function(e){return"read"===e.phone.mode?{phone:{text:e.phone.text,mode:"edit"}}:"edit"===e.phone.mode?{phone:{text:e.phone.text,mode:"read"}}:void 0})):"education"===e?a.setState((function(e){var a=e.educations.find((function(e){return e.id===n})),i=e.educations;return i.forEach((function(e){e===a&&("edit"===t.target.id?e.mode="edit":"update"===t.target.id&&(e.mode="read"))})),{educations:i}})):"work"===e&&a.setState((function(e){var a=e.works.find((function(e){return e.id===n})),i=e.works;return i.forEach((function(e){e===a&&("edit"===t.target.id?e.mode="edit":"update"===t.target.id&&(e.mode="read"))})),{works:i}}))},a.deleteEntry=function(e,t,n){"education"===e?a.setState((function(e){return{educations:e.educations.filter((function(e){return e.id!==n}))}})):"work"===e&&a.setState((function(e){return{works:e.works.filter((function(e){return e.id!==n}))}}))},a.addEducation=function(){a.setState({educations:a.state.educations.concat(a.state.education),education:{mode:"read",id:g()(),schoolName:"School Name",titleOfStudy:"Title of Study",dateOfStudy:"Date of Study"}})},a.addWork=function(){a.setState({works:a.state.works.concat(a.state.work),work:{mode:"read",id:g()(),companyName:"Company Name",positionTitle:"Position Title",mainTasks:"Main Tasks",dateFromAndUntil:"Date from and until"}})},a.state={name:{text:"Name",mode:"read"},email:{text:"Email",mode:"read"},phone:{text:"Phone",mode:"read"},education:{mode:"read",id:g()(),schoolName:"School Name",titleOfStudy:"Title of Study",dateOfStudy:"Date of Study"},educations:[],work:{mode:"read",id:g()(),companyName:"Company Name",positionTitle:"Position Title",mainTasks:"Main Tasks",dateFromAndUntil:"Date from and until"},works:[]},a.handleChange=a.handleChange.bind(Object(r.a)(a)),a.editEntry=a.editEntry.bind(Object(r.a)(a)),a.deleteEntry=a.deleteEntry.bind(Object(r.a)(a)),a.addEducation=a.addEducation.bind(Object(r.a)(a)),a.addWork=a.addWork.bind(Object(r.a)(a)),a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.phone,i=(e.education,e.educations),d=(e.work,e.works);return Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("h2",{children:"General Information"}),Object(m.jsx)("div",{children:Object(m.jsx)(p,{mode:t.mode,name:t.text,handleChange:this.handleChange,editEntry:this.editEntry})}),Object(m.jsx)("div",{children:Object(m.jsx)(b,{mode:n.mode,email:n.text,handleChange:this.handleChange,editEntry:this.editEntry})}),Object(m.jsx)("div",{children:Object(m.jsx)(O,{mode:a.mode,phone:a.text,handleChange:this.handleChange,editEntry:this.editEntry})}),Object(m.jsx)("h2",{children:"Educational Experience"}),Object(m.jsx)("div",{children:Object(m.jsx)(y,{educations:i,addEducation:this.addEducation,handleChange:this.handleChange,editEntry:this.editEntry,deleteEntry:this.deleteEntry})}),Object(m.jsx)("h2",{children:"Practical Experience"}),Object(m.jsx)("div",{children:Object(m.jsx)(E,{works:d,addWork:this.addWork,handleChange:this.handleChange,editEntry:this.editEntry,deleteEntry:this.deleteEntry})})]}),Object(m.jsx)("div",{className:"right",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(k,{name:t.text,email:n.text,phone:a.text,educations:i,works:d})})})]})}}]),n}(a.Component));c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.7e2b1fce.chunk.js.map