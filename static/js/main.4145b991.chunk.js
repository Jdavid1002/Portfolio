(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(4),o=n.n(a),r=n(2),s=(n(21),n(0)),l=function(){var e=Object(r.c)((function(e){return e.flagStart})),t=Object(r.b)(),n=function(e){t({type:"UPDATE_INTERFAZ",payload:e})};return e?Object(s.jsxs)("div",{className:"containerNavbar",children:[Object(s.jsx)("p",{className:"containerNavbar_options",onClick:function(){return n("HOME")},children:"Home "}),Object(s.jsx)("p",{className:"containerNavbar_options",onClick:function(){return n("PROYECTS")},children:"Proyects "}),Object(s.jsx)("p",{className:"containerNavbar_options",onClick:function(){return n("SKILLS")},children:" Skills "}),Object(s.jsx)("p",{className:"containerNavbar_options",onClick:function(){return n("ABOUT_ME")},children:"About Me "})]}):null},d=n(5),j=n(9),b=n.n(j),u=function(){var e=Object(r.b)(),t=Object(i.useState)(!1),n=Object(d.a)(t,2),c=n[0],a=n[1];return Object(i.useEffect)((function(){setTimeout((function(){a(!0)}),1e3),setTimeout((function(){e({type:"SET_FLAG_START",payload:!0})}),2500)}),[]),Object(s.jsx)("div",{className:"containerPortfolio__window",children:c&&Object(s.jsxs)("div",{className:"window__containerText",children:[Object(s.jsx)("h1",{children:" Welcome to my portfolio "}),Object(s.jsx)("p",{className:"window__containerText_textColor",children:Object(s.jsx)(b.a,{loop:!0,typeSpeed:50,backSpeed:40,strings:["Hi! my name is David!","I'm Frontend Developer","And machine learning student."],smartBackspace:!0,shuffle:!1,backDelay:1,fadeOut:!1,fadeOutDelay:100,loopCount:0,showCursor:!0,cursorChar:"|"})})]})})},m=n.p+"static/media/bimo.fab6e500.jpg",p=n.p+"static/media/lucky.26e51a3b.png",h=function(e){var t=e.img,n=e.alt,i=e.demoLink,c=e.codeLink;return Object(s.jsxs)("div",{className:"containerPortfolio__Proyect_card",children:[Object(s.jsx)("img",{className:"containerPortfolio__Proyect_card_img",src:t,alt:n}),Object(s.jsxs)("div",{className:"containerPortfolio__Proyect_card_footer",children:[Object(s.jsx)("button",{className:"button__global",onClick:function(){return window.open(i)},children:Object(s.jsx)("p",{children:"Demo"})}),Object(s.jsx)("button",{className:"button__global",onClick:function(){return window.open(c)},children:Object(s.jsx)("p",{children:"Code"})})]})]})},O=n.p+"static/media/chat.c2233704.jpg",f=n.p+"static/media/kiqui.97455820.jpg",_=function(){return Object(s.jsxs)("div",{className:"containerPortfolio__Proyect",children:[Object(s.jsx)(h,{img:m,alt:"Bimo",codeLink:"https://github.com/Jdavid1002/Bimo",demoLink:"https://jdavid1002.github.io/Bimo/#/"}),Object(s.jsx)(h,{img:p,alt:"LuckySongs",codeLink:"https://github.com/Jdavid1002/Lucky-Songs",demoLink:"https://jdavid1002.github.io/Lucky-Songs/#/"}),Object(s.jsx)(h,{img:O,alt:"ChatReact",codeLink:"https://github.com/Jdavid1002/Chat-React",demoLink:"https://jdavid1002.github.io/Chat-React/#/"}),Object(s.jsx)(h,{img:f,alt:"Kiqui",codeLink:"https://github.com/Jdavid1002/Kiqui",demoLink:"https://boiling-sierra-67699.herokuapp.com/"})]})},x=n.p+"static/media/perfil.45c44eaf.jpg",v=function(){return Object(s.jsxs)("div",{className:"AboutContainer",children:[Object(s.jsx)("div",{className:"AboutContainer_ContainerImage",children:Object(s.jsx)("img",{className:"AboutContainer_ContainerImage_image",src:x,alt:"Juan David Ramirez Monje"})}),Object(s.jsxs)("div",{className:"AboutContainer_ContainerText",children:[Object(s.jsx)("h2",{className:"window__containerText_textColor",children:" Hey. What's Up? Hello! \ud83d\udc4b "}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:" I\u2019m Juan David Monje from Bogot\xe1 Colombia, a web developer and student of machine learning, passionate about research and learning. "}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"window__containerText_textColor",children:[Object(s.jsx)("strong",{children:"Develop is what I live for."})," "]}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:" But when I'm not developing software, i loved practice sports, in specific soccer, keeping an active body is a requirement for my mind. My other passions in the life is Learning and teaching and my life objective everyday is the productivity. "}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:" Currently, I am a Frontend Developer at Akelab, a startup dedicated to knowledge management in Colombia."}),Object(s.jsx)("button",{className:"button__global",children:Object(s.jsx)("p",{children:"Resume"})}),Object(s.jsx)("button",{className:"button__global",children:Object(s.jsx)("p",{children:"Linkedin"})})]})]})},g=function(e){var t=e.proyect,n=Object(i.useState)(!1),c=Object(d.a)(n,2),a=c[0],o=c[1];return Object(s.jsx)("div",{className:"containerPortfolio__Skills__containerItems__item",onMouseDown:function(){return o(!1)},onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},children:Object(s.jsxs)("p",{children:[" ",a?t.percentaje:t.name]})})},k=function(){return Object(s.jsx)("div",{className:"containerPortfolio__Skills",children:[{Title:"Frontend",type:"Frontend",order:1,skills:[{id:"f1",name:"HTML5",percentaje:"90%"},{id:"f2",name:"CSS3",percentaje:"80%"},{id:"f3",name:"JavaScript",percentaje:"70%"},{id:"f4",name:"React",percentaje:"70%"},{id:"f5",name:"Sass",percentaje:"60%"},{id:"f6",name:"Redux",percentaje:"80%"}]},{Title:"Machine Learning",type:"IA",order:2,skills:[{id:"I1",name:"Python",percentaje:"50%"},{id:"I2",name:"AWS - Lambda Functions",percentaje:"50%"}]},{Title:"Backend",type:"Backend",order:3,skills:[{id:"B1",name:"Node.js",percentaje:"60%"},{id:"B2",name:"SQL",percentaje:"75%"},{id:"B3",name:"AWS - Amplify",percentaje:"85%"},{id:"B4",name:"Oracle",percentaje:"80%"},{id:"B5",name:"Python",percentaje:"60%"}]}].map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{className:"containerPortfolio__Skills__title",children:[" ",e.Title," "]}),Object(s.jsx)("div",{className:"containerPortfolio__Skills__containerItems",children:e.skills.map((function(e){return Object(s.jsx)(g,{proyect:e},e.id)}))})]})}))})};var y=function(){var e=Object(r.c)((function(e){return e.interfaz}));return Object(s.jsxs)("div",{className:"Portfolio",children:[Object(s.jsx)(l,{}),Object(s.jsxs)("div",{className:"containerPortfolio",children:["HOME"===e&&Object(s.jsx)(u,{}),"PROYECTS"===e&&Object(s.jsx)(_,{}),"SKILLS"===e&&Object(s.jsx)(k,{}),"ABOUT_ME"===e&&Object(s.jsx)(v,{})]})]})},N=n(3),S=n(10),C={flagStart:!1,interfaz:"HOME"};var T=Object(S.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,i=t.payload;switch(n){case"SET_FLAG_START":return Object(N.a)(Object(N.a)({},e),{},{flagStart:i});case"UPDATE_INTERFAZ":return Object(N.a)(Object(N.a)({},e),{},{interfaz:i});case"RESET_REDUCER":return C;default:return e}}));n(23);o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(r.a,{store:T,children:Object(s.jsx)(y,{})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.4145b991.chunk.js.map