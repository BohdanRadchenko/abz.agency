(this["webpackJsonpabz.agency"]=this["webpackJsonpabz.agency"]||[]).push([[0],{1:function(e,t,a){e.exports={container:"BurgerMenu_container__29Aet",navigation:"BurgerMenu_navigation__1rueJ",logoWrap:"BurgerMenu_logoWrap__2Ibch",logo:"BurgerMenu_logo__1cpKP",menuSection:"BurgerMenu_menuSection__q3hJC",menuList:"BurgerMenu_menuList__3CT1i",menuLink:"BurgerMenu_menuLink__2lN45",activeLink:"BurgerMenu_activeLink__dn8Kq"}},10:function(e,t,a){e.exports={container:"DrewUsers_container__LErAU",imageWrapper:"DrewUsers_imageWrapper__3LE_7",image:"DrewUsers_image__1LosI",name:"DrewUsers_name__237xa",nameLong:"DrewUsers_nameLong__3Aipe DrewUsers_name__237xa",position:"DrewUsers_position__U1_Jl",email:"DrewUsers_email__3OVrU",phone:"DrewUsers_phone__2ulzK",emailLong:"DrewUsers_emailLong__3mHd8"}},11:function(e,t,a){e.exports={backdrop:"Moda_backdrop__2JBgb",modal:"Moda_modal__36kLH",container:"Moda_container__1bRnj",header:"Moda_header__23STC",title:"Moda_title__2mkuL",buttonClose:"Moda_buttonClose__1meJz",desc:"Moda_desc__1NH9y",text:"Moda_text__1gZJl",greatButton:"Moda_greatButton__3pI9w"}},12:function(e,t,a){e.exports={bunner:"Bunner_bunner__8MOdZ",container:"Bunner_container__j70cX",bunnerWrapper:"Bunner_bunnerWrapper__1Yflj",title:"Bunner_title__2HhDh",subtitle:"Bunner_subtitle__3tj48",btn:"Bunner_btn__peWKv",btnLink:"Bunner_btnLink__EcqCx Bunner_btn__peWKv",description:"Bunner_description__3rrPf"}},14:function(e,t,a){e.exports={container:"Users_container__3olAX",title:"Users_title__2sKMU",subtitle:"Users_subtitle__2QMQ4",userList:"Users_userList__1RBip",userItems:"Users_userItems__1qgi-",showMore:"Users_showMore__1Mv1H",disableButton:"Users_disableButton__2O51T Users_showMore__1Mv1H"}},27:function(e,t,a){e.exports={container:"App_container__1_ZgP"}},3:function(e,t,a){e.exports={container:"RegistredForm_container__2nqyx",title:"RegistredForm_title___2u3u",subtitle:"RegistredForm_subtitle__2uo_v",form:"RegistredForm_form__3d2dN",label:"RegistredForm_label__1OvoS",labelValid:"RegistredForm_labelValid__XuHWh RegistredForm_label__1OvoS",input:"RegistredForm_input__39M4_",positionTitle:"RegistredForm_positionTitle__MKVCb RegistredForm_label__1OvoS",radioList:"RegistredForm_radioList__rmlcX",radioItem:"RegistredForm_radioItem__1UvxS",radioLabel:"RegistredForm_radioLabel__A7rdt RegistredForm_label__1OvoS",radioInput:"RegistredForm_radioInput__3TrAc",inputfile:"RegistredForm_inputfile__1ubWi",labelFile:"RegistredForm_labelFile__1X5Dc RegistredForm_input__39M4_",pathFile:"RegistredForm_pathFile__1O45V",spanFile:"RegistredForm_spanFile__1VYNi",button:"RegistredForm_button__2BWRI"}},35:function(e,t,a){e.exports={container:"Footer_container__1otxU",title:"Footer_title__2mqra"}},4:function(e,t,a){e.exports={crutch:"Header_crutch__2qw-d",container:"Header_container__3Qsae",navigation:"Header_navigation__1LC8j",logo:"Header_logo__3bADN",menuList:"Header_menuList__1hpsJ",burgerButton:"Header_burgerButton__2sLZr",menuItem:"Header_menuItem__1rNu6",menuLink:"Header_menuLink__oN-wP",activeLink:"Header_activeLink__28XCK"}},54:function(e,t,a){e.exports=a(89)},7:function(e,t,a){e.exports={container:"About_container__ZoreB",title:"About_title__ZQ-HG",imageWrapper:"About_imageWrapper__35Zu4",subtitle:"About_subtitle__2TEf4",descriptionWrapper:"About_descriptionWrapper__2uGdJ",desc:"About_desc__24-X8",button:"About_button__2SNGF",sideWrapper:"About_sideWrapper__10JV2",leftSide:"About_leftSide__RSqLq",rigthSide:"About_rigthSide__3JriC"}},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),s=a.n(o),i=a(20),l=a(21),c=a(24),m=a(22),u=a(25),p=a(5),_=a(2),d=a(17),E=a.n(d),h="FETCH_POSITIONS_REQUEST",f="FETCH_POSITIONS_SUCCESS",g="FETCH_POSITIONS_ERROR",b="FETCH_TOKEN_REQUEST",N="FETCH_TOKEN_SUCCESS",v="FETCH_TOKEN_ERROR",L="FETCH_USERS_REQUEST",k="FETCH_USERS_SUCCESS",y="FETCH_USERS_ERROR",O="FETCH_USER_BY_ID_REQUEST",C="FETCH_USER_BY_ID_SUCCESS",S="FETCH_USER_BY_ID_ERROR",R="ADD_USER_REQUEST",U="ADD_USER_SUCCESS",w="ADD_USER_ERROR",A={MODAL_OPEN:"MODAL_OPEN",MODAL_CLOSE:"MODAL_CLOSE",HANDLE_OPEN_BURGER_MENU:"HANDLE_OPEN_BURGER_MENU",HANDLE_BURGER_EVENT_BUTTON:"HANDLE_BURGER_EVENT_BUTTON",HANDLE_URL_PAGE:"HANDLE_URL_PAGE",HANDLE_TOTAL_PAGE:"HANDLE_TOTAL_PAGE"},T=function(){return{type:A.MODAL_OPEN,payload:{}}},F=function(){return{type:A.HANDLE_OPEN_BURGER_MENU,payload:{}}},M=function(e){return function(t){var a=5;a=document.documentElement.clientWidth<768?3:6;var n="https://frontend-test-assignment-api.abz.agency/api/v1/users?page=".concat(e,"&count=").concat(a);t({type:L}),E.a.get(n).then((function(e){var a,n;t((a=e.data.total_pages,{type:A.HANDLE_TOTAL_PAGE,payload:a})),t((n=e.data.users,{type:k,payload:{users:n}}))})).catch((function(e){t(function(e){return{type:y,payload:{error:e}}}(e))}))}},D=function(e){return e.controllers.modalOpen},I=function(e){return e.controllers.currentPage},j=function(e){return e.controllers.totalPage},B=function(e){return e.controllers.burgerMenuOpen},H=function(e){return e.users.items},P=function(e){return e.users.token},W=function(e){return e.users.positions},x=function(e){return e.users.message},G=a(11),q=a.n(G),X=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).backdropRef=Object(n.createRef)(),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.modalClose()},a.handleBackdropClick=function(e){var t=a.backdropRef.current;t&&e.target!==t||a.props.modalClose()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props,t=e.modalIsOpen,a=e.modalClose;return t?r.a.createElement("div",{className:q.a.backdrop,ref:this.backdropRef,onClick:this.handleBackdropClick},r.a.createElement("div",{className:q.a.modal},r.a.createElement("div",{className:q.a.container},r.a.createElement("div",{className:q.a.header},r.a.createElement("h1",{className:q.a.title},"Congratulations"),r.a.createElement("button",{className:q.a.buttonClose,onClick:function(e){return a(e)}})),r.a.createElement("div",{className:q.a.desc},r.a.createElement("p",{className:q.a.text},"You have successfully passed the registration")),r.a.createElement("button",{onClick:function(e){return a(e)},className:q.a.greatButton},"Great")))):null}}]),t}(n.Component),J={modalClose:function(){return{type:A.MODAL_CLOSE,payload:{}}}},K=Object(p.b)((function(e){return{message:x(e),modalIsOpen:D(e)}}),J)(X),V=a(1),z=a.n(V),Q=Object(p.b)((function(e){return{isOpen:B(e)}}),(function(e){return{burgerMenuToogle:function(){return e(F())}}}))((function(e){var t=e.isOpen,a=e.burgerMenuToogle;return Object(n.useEffect)((function(){_.scrollSpy.update()})),r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:z.a.container},r.a.createElement("nav",{className:z.a.navigation},r.a.createElement("div",{className:z.a.logoWrap},r.a.createElement(_.Link,{to:"header",className:z.a.logo,smooth:!0,onClick:function(e){return a()}})),r.a.createElement("div",{className:z.a.menuSection},r.a.createElement("ul",{className:z.a.menuList},r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{activeClass:z.a.activeLink,spy:!0,to:"about",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"About Me")),r.a.createElement("li",null,r.a.createElement(_.Link,{activeClass:z.a.activeLink,spy:!0,to:"/",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Relationships")),r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{activeClass:z.a.activeLink,spy:!0,to:"users",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Users")),r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{activeClass:z.a.activeLink,spy:!0,to:"form",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Sign Up")),r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{activeClass:z.a.activeLink,spy:!0,to:"/",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Terms and Conditions")))),r.a.createElement("div",{className:z.a.menuSection},r.a.createElement("ul",{className:z.a.menuList},r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{to:"form",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"How it works")),r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{to:"form",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Partnership")),r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{to:"form",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Help")),r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{to:"form",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Leave testimonial")),r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{to:"form",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Contact us")))),r.a.createElement("div",{className:z.a.menuSection},r.a.createElement("ul",{className:z.a.menuList},r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{to:"form",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Articles")),r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{to:"form",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Our news")),r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{to:"form",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Testimonials")),r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{to:"form",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Licenses")),r.a.createElement("li",{className:z.a.menuItem},r.a.createElement(_.Link,{to:"form",className:z.a.menuLink,smooth:!0,onClick:function(e){return a()}},"Privacy Policy")))))))})),Y=a(4),Z=a.n(Y),$=Object(p.b)(null,(function(e){return{burgerMenuToogle:function(){return e(F())}}}))((function(e){var t=e.burgerMenuToogle;return Object(n.useEffect)((function(){_.scrollSpy.update()})),r.a.createElement(_.Element,{name:"header",className:"element"},r.a.createElement("div",{className:Z.a.container},r.a.createElement("nav",{className:Z.a.navigation},r.a.createElement(_.Link,{to:"header",className:Z.a.logo,smooth:!0}),r.a.createElement("ul",{className:Z.a.menuList},r.a.createElement("li",{className:Z.a.menuItem},r.a.createElement(_.Link,{activeClass:Z.a.activeLink,spy:!0,to:"about",className:Z.a.menuLink,smooth:!0},"About Me")),r.a.createElement("li",{className:Z.a.menuItem},r.a.createElement(_.Link,{activeClass:Z.a.activeLink,spy:!0,to:"/",className:Z.a.menuLink,smooth:!0},"Relationships")),r.a.createElement("li",{className:Z.a.menuItem},r.a.createElement(_.Link,{activeClass:Z.a.activeLink,spy:!0,to:"/",className:Z.a.menuLink,smooth:!0},"Requirements")),r.a.createElement("li",{className:Z.a.menuItem},r.a.createElement(_.Link,{activeClass:Z.a.activeLink,spy:!0,to:"users",className:Z.a.menuLink,smooth:!0},"Users")),r.a.createElement("li",{className:Z.a.menuItem},r.a.createElement(_.Link,{activeClass:Z.a.activeLink,spy:!0,to:"form",className:Z.a.menuLink,smooth:!0},"Sign Up"))),r.a.createElement("button",{className:Z.a.burgerButton,onClick:function(){return t()}}))),r.a.createElement("div",{className:Z.a.crutch}))})),ee=a(12),te=a.n(ee),ae=function(){var e=document.documentElement.clientWidth;return r.a.createElement("div",{className:te.a.bunner},r.a.createElement("div",{className:te.a.container},r.a.createElement("div",{className:te.a.bunnerWrapper},r.a.createElement("div",{className:te.a.description},r.a.createElement("h1",{className:te.a.title},"Test assignment ",r.a.createElement("br",null)," for Frontend Developer position"),e<768&&r.a.createElement("p",{className:te.a.subtitle},"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository."),e>=768&&r.a.createElement("p",{className:te.a.subtitle},"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens")),r.a.createElement("button",{className:te.a.btn},r.a.createElement(_.Link,{to:"form",smooth:!0,className:te.a.btnLink},"Sing up now")))))},ne=a(7),re=a.n(ne),oe=function(){return r.a.createElement(_.Element,{name:"about",className:"element"},r.a.createElement("div",{className:re.a.container},r.a.createElement("h1",{className:re.a.title}," Let's get acquainted "),r.a.createElement("div",{className:re.a.sideWrapper},r.a.createElement("div",{className:re.a.leftSide},r.a.createElement("div",{className:re.a.imageWrapper})),r.a.createElement("div",{className:re.a.rigthSide},r.a.createElement("p",{className:re.a.subtitle}," I a cool frontend developer "),r.a.createElement("div",{className:re.a.descriptionWrapper},r.a.createElement("p",{className:re.a.desc},"We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction."),r.a.createElement("p",{className:re.a.desc},"If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P\u200bSD mockup\u200b into HTML5/CSS3.")),r.a.createElement(_.Link,{to:"form",smooth:!0,className:re.a.button},"Sing up now")))))},se=a(23),ie=a(10),le=a.n(ie),ce=function(e){var t=e.name,a=e.email,n=e.phone,o=e.position,s=e.photo;return r.a.createElement("div",{className:le.a.container},r.a.createElement("div",{className:le.a.imageWrapper},r.a.createElement("img",{className:le.a.image,src:s,alt:"avatars",width:"70px",height:"70px"})),r.a.createElement("p",{className:t.length<16?le.a.name:le.a.nameLong}," ",t," "),r.a.createElement("p",{className:le.a.position}," ",o," "),r.a.createElement("p",{className:a.length<=20?le.a.email:[le.a.emailLong,le.a.email].join(" "),tooltip:a},a.length<=20?a:a.slice(0,10)+"..."+a.slice(-10)),r.a.createElement("p",{className:le.a.phone}," ",n," "))},me=a(14),ue=a.n(me),pe={handleCurrentPage:function(e){return{type:A.HANDLE_URL_PAGE,payload:e}}},_e=Object(p.b)((function(e){return{users:H(e),totalPage:j(e)}}),pe)((function(e){var t=e.users,a=e.handleCurrentPage,o=e.totalPage,s=Object(n.useState)(1),i=Object(se.a)(s,2),l=i[0],c=i[1];return Object(n.useEffect)((function(){a(l)}),[a,l]),r.a.createElement(_.Element,{name:"users",className:"element"},r.a.createElement("div",{className:ue.a.container},r.a.createElement("h1",{className:ue.a.title},"Our cheerful users"),r.a.createElement("p",{className:ue.a.subtitle},"Attention! Sorting users by registration date"),0!==t.length&&r.a.createElement("ul",{className:ue.a.userList},t.map((function(e,t){return r.a.createElement("li",{key:e.id*t,className:ue.a.userItems},r.a.createElement(ce,e))}))),r.a.createElement("button",{className:o>l?ue.a.showMore:ue.a.disableButton,disabled:!(o>l),onClick:function(){o>l&&c(l+1)}},"Show more")))})),de=a(51),Ee=a.n(de),he=a(16),fe=a(26),ge=a(3),be=a.n(ge),Ne={fetchPostUser:function(e,t){return function(a){a({type:R}),E.a.post("https://frontend-test-assignment-api.abz.agency/api/v1/users",e,{headers:{Token:t}}).then((function(e){var t;console.log(e),a(T()),a({type:U,payload:{user:t}})})).catch((function(e){console.log(e),a(function(e){return{type:w,payload:{error:e}}}(e))}))}},fetchUsers:M,modalOpen:T},ve=Object(p.b)((function(e){return{positions:W(e),token:P(e),page:I(e)}}),Ne)((function(e){var t=e.positions,a=e.token,o=e.fetchPostUser,s=e.page,i=e.fetchUsers,l=(e.modalOpen,{name:"",email:"",phone:"",positions_id:1,photo:""}),c=Object(n.useState)(l),m=Object(se.a)(c,2),u=m[0],p=m[1],d=function(e){"positions_id"===e.target.name?p(Object(fe.a)({},u,Object(he.a)({},e.target.name,Number(e.target.value)))):p(Object(fe.a)({},u,Object(he.a)({},e.target.name,e.target.value)))},E=function(e){e.preventDefault();var t=function(e){var t=new FormData;return t.append("position_id",e.positions_id),t.append("name",e.name),t.append("email",e.email),t.append("phone",e.phone),t.append("photo",e.photo),t}(u);o(t,a),i(s),p(l)};return r.a.createElement(_.Element,{name:"form",className:"element"},r.a.createElement("div",{className:be.a.container},r.a.createElement("h1",{className:be.a.title},"Register to get a work"),r.a.createElement("p",{className:be.a.subtitle},"Attention! After successful registration and alert, update the list of users in the block from the top"),r.a.createElement("form",{className:be.a.form,onSubmit:function(e){return E(e)}},r.a.createElement("label",{className:be.a.label,htmlFor:"name"},"Name"),r.a.createElement("input",{className:be.a.input,required:!0,value:u.name,name:"name",onChange:function(e){return d(e)},minLength:"2",maxLength:"60",placeholder:"Your name",id:"name",type:"text"}),r.a.createElement("label",{className:be.a.labelValid,htmlFor:"name"},"Enter valid Name"),r.a.createElement("label",{className:be.a.label,htmlFor:"email"},"Email"),r.a.createElement("input",{className:be.a.input,required:!0,value:u.email,name:"email",onChange:function(e){return d(e)},minLength:"2",maxLength:"100",placeholder:"Your email",id:"email",type:"email"}),r.a.createElement("label",{className:be.a.labelValid,htmlFor:"email"},"Enter valid Email"),r.a.createElement("label",{className:be.a.label,htmlFor:"number"},"Phone number"),r.a.createElement("input",{className:be.a.input,required:!0,minLength:"13",maxLength:"13",value:u.phone,name:"phone",onChange:function(e){return d(e)},pattern:"^[+]{0,1}380([0-9]{9})$",placeholder:"+380 XX XXX XX XX",id:"number",type:"tel"}),r.a.createElement("label",{className:be.a.labelValid,htmlFor:"number"},"Enter phone number in open format"),!!t.length&&r.a.createElement("div",{className:"radio"},r.a.createElement("p",{className:be.a.positionTitle},"Select your position"),r.a.createElement("ul",{className:be.a.radioList},t.map((function(e){return r.a.createElement("li",{key:e.id,className:be.a.radioItem},r.a.createElement("label",{className:be.a.radioLabel},r.a.createElement("input",{type:"radio",className:be.a.radioInput,onChange:function(e){return d(e)},name:"positions_id",value:e.id,checked:e.id===u.positions_id}),e.name))})))),r.a.createElement("label",{htmlFor:"file",className:be.a.labelFile},r.a.createElement("input",{type:"text",className:be.a.pathFile,placeholder:"Upload your photo",value:u.photo?u.photo.name.length>25?u.photo.name.slice(0,25)+"..."+u.photo.name.slice(-7):u.photo.name:"",disabled:!0}),r.a.createElement("input",{type:"file",required:!0,name:"photo",id:"file",accept:".jpg, .jpeg",className:be.a.inputfile,onChange:function(e){return function(e){var t;return Ee.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.persist(),t=e.target.files[0],p(Object(fe.a)({},u,{photo:t}));case 3:case"end":return a.stop()}}))}(e)}}),r.a.createElement("span",{className:be.a.spanFile},"Browse")),r.a.createElement("button",{type:"submit",className:be.a.button},"Sign up now"))),r.a.createElement("button",{onClick:function(e){i(1)}},"test"))})),Le=a(35),ke=a.n(Le),ye=function(){return r.a.createElement("div",{className:ke.a.container},r.a.createElement("p",{className:ke.a.title},"\xa9 abz.agency specially for the test task"))},Oe=a(27),Ce=a.n(Oe),Se=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.page;this.props.fetchUsers(e),this.props.fetchToken(),this.props.fetchPositions(),_.scrollSpy.update()}},{key:"componentDidUpdate",value:function(e){if(e.page!==this.props.page){var t=this.props.page;this.props.fetchUsers(t)}}},{key:"render",value:function(){return console.log(this.props),r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement($,null),r.a.createElement("div",{className:Ce.a.container},r.a.createElement(Q,null)),r.a.createElement(ae,null),r.a.createElement("div",{className:Ce.a.container},r.a.createElement(oe,null)),r.a.createElement(_e,null),r.a.createElement("div",{className:Ce.a.container},r.a.createElement(ve,null)),r.a.createElement(ye,null))}}]),t}(n.Component),Re={fetchUsers:M,fetchToken:function(){return function(e){e({type:b}),E.a.get("https://frontend-test-assignment-api.abz.agency/api/v1/token").then((function(t){var a;e((a=t.data.token,{type:N,payload:{token:a}}))})).catch((function(t){e(function(e){return{type:v,payload:{error:e}}}(t))}))}},fetchPositions:function(){return function(e){e({type:h}),E.a.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions").then((function(t){var a;e((a=t.data.positions,{type:f,payload:a}))})).catch((function(t){e(function(e){return{type:g,payload:{error:e}}}(t))}))}}},Ue=Object(p.b)((function(e){return{page:I(e)}}),Re)(Se);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=a(9),Ae=a(52),Te=a(36),Fe=Object(we.combineReducers)({positions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case f:return n;default:return e}},token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case N:return n.token;default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case k:return[].concat(Object(Te.a)(e),Object(Te.a)(n.users.sort((function(e,t){return e.registration_timestamp>t.registration_timestamp}))));case C:return n;case U:default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type;t.payload;switch(a){case L:case h:case b:case O:case R:return!0;case f:case g:case N:case v:case k:case y:case C:case S:case U:case w:return!1;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case h:case b:case L:case O:case R:return null;case g:case v:case y:case S:case w:return n.error;default:return e}}}),Me=Object(we.combineReducers)({modalOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case A.MODAL_OPEN:return!0;case A.MODAL_CLOSE:return!1;default:return e}},burgerMenuOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type;t.payload;switch(a){case A.HANDLE_OPEN_BURGER_MENU:return!e;default:return e}},currentPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case A.HANDLE_URL_PAGE:return n;default:return e}},totalPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case A.HANDLE_TOTAL_PAGE:return n;default:return e}}}),De=a(53),Ie=Object(we.combineReducers)({users:Fe,controllers:Me}),je=[De.a],Be=we.applyMiddleware.apply(void 0,je),He=Object(we.createStore)(Ie,Object(Ae.composeWithDevTools)(Be));a(88);s.a.render(r.a.createElement(p.a,{store:He},r.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.79d28d1e.chunk.js.map