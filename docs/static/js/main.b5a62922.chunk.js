(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(1),c=t(8),n=t.n(c),i=t(5),r=t(3),o=(t(13),t(2)),l=(t(14),t(0)),d=function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"container__links",children:[Object(l.jsx)(i.b,{to:"rules",children:Object(l.jsx)("input",{type:"button",value:"Reglas juego"})}),Object(l.jsx)(i.b,{to:"pieces",children:Object(l.jsx)("input",{type:"button",value:"Piezas juego"})}),Object(l.jsx)(i.b,{to:"game",children:Object(l.jsx)("input",{type:"button",value:"Comenzar juego",onClick:e.startGame})})]})})},u=(t(16),t.p+"static/media/grogu.e81eed8e.png"),j=t.p+"static/media/way.d6c9e422.png",m=t.p+"static/media/cookie.249648fa.png",b=(t(17),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{children:"\xa9 Maitane Abad Conde"})})})}),g=(t(18),function(e){return Object(l.jsxs)("div",{className:"containerWin ".concat(e.win),children:["Hemos ganado",Object(l.jsx)("div",{children:Object(l.jsx)(i.b,{to:"/",children:"volver al men\xfa principal"})})]})}),_=(t(19),function(e){return Object(l.jsxs)("div",{className:"containerLost ".concat(e.lost),children:[Object(l.jsx)(i.b,{to:"/",children:"volver al men\xfa principal"}),Object(l.jsx)("div",{children:"Hemos Perdido"})]})}),O=function(e){var a=Object(s.useState)("hidden"),t=Object(r.a)(a,2),c=t[0],n=t[1],o=Object(s.useState)("hidden"),d=Object(r.a)(o,2),O=d[0],h=d[1],x=Object(s.useState)(""),p=Object(r.a)(x,2),v=p[0],V=p[1],N=Object(s.useState)("hidden"),f=Object(r.a)(N,2),y=f[0],G=f[1],w=Object(s.useState)("hidden"),k=Object(r.a)(w,2),C=k[0],D=k[1],S=Object(s.useState)("hidden"),z=Object(r.a)(S,2),q=z[0],R=z[1],F=Object(s.useState)("hidden"),A=Object(r.a)(F,2),E=A[0],I=A[1],M=Object(s.useState)("hidden"),P=Object(r.a)(M,2),T=P[0],B=P[1],H=Object(s.useState)("hidden"),L=Object(r.a)(H,2),J=L[0],W=L[1],K=Object(s.useState)("hidden"),Q=Object(r.a)(K,2),U=Q[0],X=Q[1];var Y=function(){if(6===e.stateVariable[0])h(""),W("hidden"),X("");else{h("hidden");var a=e.stateVariable[0];a++,e.stateVariable[0]=a,console.log(e.stateVariable[0]=a),Z()}},Z=function(){switch(e.stateVariable[0]){case 1:V("hidden"),G("");break;case 2:G("hidden"),D("");break;case 3:D("hidden"),R("");break;case 4:R("hidden"),I("");break;case 5:I("hidden"),B("");break;case 6:B("hidden"),W("")}},$=function(){if(0===e.stateVariable[1]&&0===e.stateVariable[2]&&0===e.stateVariable[3])n("");else if(0!==e.stateVariable[1]){var a=e.stateVariable[1];a--,e.stateVariable[1]=a}},ee=function(){if(0===e.stateVariable[1]&&0===e.stateVariable[2]&&0===e.stateVariable[3])n("");else if(0!==e.stateVariable[2]){var a=e.stateVariable[2];a--,e.stateVariable[2]=a}},ae=function(){if(0===e.stateVariable[1]&&0===e.stateVariable[2]&&0===e.stateVariable[3])n("");else if(0!==e.stateVariable[3]){var a=e.stateVariable[3];a--,e.stateVariable[3]=a}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("section",{className:"game",onLoad:e.startGame,children:[Object(l.jsx)("article",{className:"game__menu",children:Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("input",{type:"button",value:"Men\xfa"})})}),Object(l.jsx)("input",{className:"game__dice",type:"button",value:" dado",id:e.diceValue,onClick:function(){var a=Math.floor(4*Math.random()+1);switch(e.setDiceValue(0),e.setDiceValue(a),a){case 1:e.setDiceValue(1),Y();break;case 2:e.setDiceValue(2),$();break;case 3:e.setDiceValue(3),ee();break;case 4:e.setDiceValue(4),ae()}console.log(e.stateVariable)}}),Object(l.jsx)("p",{className:"game__dice--number",children:""===e.diceValue?"":"El resultado del dado es: "+e.diceValue}),Object(l.jsx)(l.Fragment,{children:(console.log(e.stateVariable[0]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"game__grogu",children:Object(l.jsx)("img",{className:"position0 ".concat(v),src:u,alt:"Grogu en su cuna",title:"Grogu en su cuna"})}),Object(l.jsxs)("section",{className:"game__container",children:[Object(l.jsxs)("div",{className:"game__container--way",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0],"  ").concat(y),src:u,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("img",{className:"game__container--way__item",src:j,alt:"Camino",title:"Camino"})]}),Object(l.jsxs)("div",{className:"game__container--way",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0]," ").concat(C),src:u,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("img",{className:"game__container--way__item",src:j,alt:"Camino",title:"Camino"})]}),Object(l.jsxs)("div",{className:"game__container--way",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0]," ").concat(q),src:u,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("img",{className:"game__container--way__item",src:j,alt:"Camino",title:"Camino"})]}),Object(l.jsxs)("div",{className:"game__container--way",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0]," ").concat(E),src:u,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("img",{className:"game__container--way__item",src:j,alt:"Camino",title:"Camino"})]}),Object(l.jsxs)("div",{className:"game__container--way",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0]," ").concat(T),src:u,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("img",{className:"game__container--way__item",src:j,alt:"Camino",title:"Camino"})]}),Object(l.jsxs)("div",{className:"game__container--way",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0]," ").concat(J),src:u,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("img",{className:"game__container--way__item",src:j,alt:"Camino",title:"Camino"})]})," "]})," ",Object(l.jsxs)("div",{className:"game__container--cupboard",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0]," ").concat(U),src:u,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsxs)("div",{className:"game__container--cupboard__cookies",children:[Object(l.jsx)("p",{className:"game__container--cupboard__cookies--title",children:"Galletas"}),Object(l.jsxs)("div",{className:"game__container--cupboard__cookies--containerImgs",children:[Object(l.jsx)("img",{className:"game__container--cupboard__cookies--containerImgs__imgTop",src:m,alt:"Galleta",title:"galleta"}),Object(l.jsx)("img",{className:"game__container--cupboard__cookies--containerImgs__imgBottomLeft",src:m,alt:"Galleta",title:"galleta"}),Object(l.jsx)("img",{className:"game__container--cupboard__cookies--containerImgs__imgBottomRight",src:m,alt:"Galleta",title:"galleta"})]})]}),Object(l.jsx)("div",{className:"game__container--cupboard__frogs",children:"Ranas"}),Object(l.jsxs)("div",{className:"game__container--cupboard__eggs",children:[Object(l.jsx)("p",{children:"Huevos"}),Object(l.jsx)("div",{})]})]})]}))}),Object(l.jsx)(g,{win:c}),Object(l.jsx)(_,{lost:O})]}),Object(l.jsx)(b,{})]})},h=function(){return Object(l.jsxs)(l.Fragment,{children:[" ","El juego es muy sencillo. Dispondremos de 6 casillas que representan un camino en la zona de carga de la Razor Crest que lleva hasta el armario donde se encuentra segura la mercanc\xeda. De este modo tendremos 7 casillas, 6 del camino y una que representa al armario: \ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\u274e Durante el viaje has hecho muy bien tu trabajo pero ahora debes vaciar el armario. Para ello deber\xe1s descargar la mercanc\xeda poco a poco. Este es el momento m\xe1s delicado ya que Grogu puede aprovechar y llegar hasta el armario. Si eso ocurre se comer\xe1 lo que encuentre y Mando perder\xe1 la oportunidad de saber d\xf3nde esta Ahsoka. Ergo, te has quedado sin recompensa. Adem\xe1s de esas 7 piezas tendr\xe1s tres recipientes donde se guarda cada tipo de mercanc\xeda. De esta manera quedar\xeda:Recipiente de las galletas: Tendr\xe1 3 cajas de galletas azules dentro Recipiente de los huevos de rana: Tendr\xe1 dentro 3 huevos de rana (sin fertilizar) Recipiente de las ranas: Tendr\xe1 dentro 3 ranas Adem\xe1s de estas piezas tendremos un dado de 5 caras donde cada cara representa una de las siguientes acciones: Descargas una caja de galletas azules \ud83c\udf6a Descargas un huevo de rana (con mucho cuidado) \ud83e\udd5a Descargas una rana \ud83d\udc38 Grogu se mueve una casilla \ud83d\udc63 Adem\xe1s habr\xe1 una ficha que represente d\xf3nde est\xe1 Grogu. Ganar\xe1s el juego si consigues descargar toda la mercanc\xeda. Perder\xe1s si Grogu llega a la \xfaltima casilla (el armario)."]})},x=function(){return Object(l.jsx)(l.Fragment,{children:"ficha de zona de carga (x6) \ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32, ficha de armario (x1)\u274e, ficha de recipiente (x3), cajas de galletas (x3)\ud83c\udf6a, ranas (x3)\ud83d\udc38, huevos de rana (x3)\ud83e\udd5a, dado (x1) y grogu (x1)"})},p=function(){var e=Object(s.useState)(""),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)([]),i=Object(r.a)(n,2),u=i[0],j=i[1];return Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(d,{startGame:function(){c(""),u.splice(0,4);u.push(0),u.push(3),u.push(3),u.push(3)}})}),Object(l.jsx)(o.a,{path:"/pieces",element:Object(l.jsx)(x,{})}),Object(l.jsx)(o.a,{path:"/game",element:Object(l.jsx)(O,{setDiceValue:c,diceValue:t,stateVariable:u,setStateVariable:j})}),Object(l.jsx)(o.a,{path:"/rules",element:Object(l.jsx)(h,{})})]})})};n.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.b5a62922.chunk.js.map