(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(8),n=t.n(s),i=t(5),r=t(3),o=(t(13),t(2)),l=(t(14),t(0)),d=function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"container__links",children:[Object(l.jsx)(i.b,{to:"rules",children:Object(l.jsx)("input",{type:"button",value:"Reglas juego"})}),Object(l.jsx)(i.b,{to:"pieces",children:Object(l.jsx)("input",{type:"button",value:"Piezas juego"})}),Object(l.jsx)(i.b,{to:"game",children:Object(l.jsx)("input",{type:"button",value:"Comenzar juego",onClick:e.startGame})})]})})},m=(t(16),t.p+"static/media/grogu.e81eed8e.png"),j=t.p+"static/media/way.d6c9e422.png",u=t.p+"static/media/cookie.249648fa.png",b=t.p+"static/media/egg.044e0d11.png",g=t.p+"static/media/frog.38e4d7aa.png",_=(t(17),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{children:"\xa9 Maitane Abad Conde"})})})}),O=(t(18),function(e){return Object(l.jsxs)("div",{className:"containerWin ".concat(e.win),children:["Hemos ganado",Object(l.jsx)("div",{children:Object(l.jsx)(i.b,{to:"/",children:"volver al men\xfa principal"})})]})}),h=(t(19),function(e){return Object(l.jsxs)("div",{className:"containerLost ".concat(e.lost),children:[Object(l.jsx)(i.b,{to:"/",children:"volver al men\xfa principal"}),Object(l.jsx)("div",{children:"Hemos Perdido"})]})}),p=function(e){var a=Object(c.useState)("hidden"),t=Object(r.a)(a,2),s=t[0],n=t[1],o=Object(c.useState)("hidden"),d=Object(r.a)(o,2),p=d[0],x=d[1],f=Object(c.useState)(""),v=Object(r.a)(f,2),N=v[0],V=v[1],y=Object(c.useState)("hidden"),w=Object(r.a)(y,2),G=w[0],k=w[1],S=Object(c.useState)("hidden"),C=Object(r.a)(S,2),D=C[0],R=C[1],I=Object(c.useState)("hidden"),z=Object(r.a)(I,2),q=z[0],H=z[1],B=Object(c.useState)("hidden"),F=Object(r.a)(B,2),T=F[0],A=F[1],E=Object(c.useState)("hidden"),L=Object(r.a)(E,2),M=L[0],P=L[1],J=Object(c.useState)("hidden"),W=Object(r.a)(J,2),K=W[0],Q=W[1],U=Object(c.useState)("hidden"),X=Object(r.a)(U,2),Y=X[0],Z=X[1],$=Object(c.useState)(""),ee=Object(r.a)($,2),ae=ee[0],te=ee[1],ce=Object(c.useState)(""),se=Object(r.a)(ce,2),ne=se[0],ie=se[1],re=Object(c.useState)(""),oe=Object(r.a)(re,2),le=oe[0],de=oe[1],me=Object(c.useState)(""),je=Object(r.a)(me,2),ue=je[0],be=je[1],ge=Object(c.useState)(""),_e=Object(r.a)(ge,2),Oe=_e[0],he=_e[1],pe=Object(c.useState)(""),xe=Object(r.a)(pe,2),fe=xe[0],ve=xe[1],Ne=Object(c.useState)(""),Ve=Object(r.a)(Ne,2),ye=Ve[0],we=Ve[1],Ge=Object(c.useState)(""),ke=Object(r.a)(Ge,2),Se=ke[0],Ce=ke[1],De=Object(c.useState)(""),Re=Object(r.a)(De,2),Ie=Re[0],ze=Re[1];var qe=function(){if(6===e.stateVariable[0])x(""),Q("hidden"),Z("");else{var a=e.stateVariable[0];a++,e.stateVariable[0]=a,console.log(e.stateVariable[0]=a),He()}},He=function(){switch(e.stateVariable[0]){case 1:V("hidden"),k("");break;case 2:k("hidden"),R("");break;case 3:R("hidden"),H("");break;case 4:H("hidden"),A("");break;case 5:A("hidden"),P("");break;case 6:P("hidden"),Q("")}},Be=function(){if(0!==e.stateVariable[1]){var a=e.stateVariable[1];a--,e.stateVariable[1]=a,function(){switch(e.stateVariable[1]){case 2:te("hidden");break;case 1:ie("hidden");break;case 0:de("hidden")}}()}console.log(e.stateVariable)},Fe=function(){if(0!==e.stateVariable[2]){var a=e.stateVariable[2];a--,e.stateVariable[2]=a,function(){switch(e.stateVariable[2]){case 2:be("hidden");break;case 1:he("hidden");break;case 0:ve("hidden")}}()}console.log(e.stateVariable)},Te=function(){if(0!==e.stateVariable[3]){var a=e.stateVariable[3];a--,e.stateVariable[3]=a,function(){switch(e.stateVariable[3]){case 2:we("hidden");break;case 1:Ce("hidden");break;case 0:ze("hidden")}}()}console.log(e.stateVariable)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"game",onLoad:e.startGame,children:[Object(l.jsx)("article",{className:"game__menu",children:Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("input",{type:"button",value:"Men\xfa"})})}),Object(l.jsx)("input",{className:"game__dice",type:"button",value:" dado",id:e.diceValue,onClick:function(){var a=Math.floor(4*Math.random()+1);switch(e.setDiceValue(0),e.setDiceValue(a),a){case 1:e.setDiceValue(1),qe();break;case 2:e.setDiceValue(2),Be();break;case 3:e.setDiceValue(3),Fe();break;case 4:e.setDiceValue(4),Te()}0===e.stateVariable[1]&&0===e.stateVariable[2]&&0===e.stateVariable[3]&&n("")}}),Object(l.jsx)("p",{className:"game__dice--number",children:""===e.diceValue?"":"El resultado del dado es: "+e.diceValue}),Object(l.jsx)(l.Fragment,{children:(console.log(e.stateVariable[0]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"game__grogu",children:Object(l.jsx)("img",{className:"position0 ".concat(N),src:m,alt:"Grogu en su cuna",title:"Grogu en su cuna"})}),Object(l.jsxs)("section",{className:"game__container",children:[Object(l.jsxs)("div",{className:"game__container--way",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0],"  ").concat(G),src:m,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("img",{className:"game__container--way__item",src:j,alt:"Camino",title:"Camino"})]}),Object(l.jsxs)("div",{className:"game__container--way",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0]," ").concat(D),src:m,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("img",{className:"game__container--way__item",src:j,alt:"Camino",title:"Camino"})]}),Object(l.jsxs)("div",{className:"game__container--way",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0]," ").concat(q),src:m,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("img",{className:"game__container--way__item",src:j,alt:"Camino",title:"Camino"})]}),Object(l.jsxs)("div",{className:"game__container--way",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0]," ").concat(T),src:m,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("img",{className:"game__container--way__item",src:j,alt:"Camino",title:"Camino"})]}),Object(l.jsxs)("div",{className:"game__container--way",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0]," ").concat(M),src:m,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("img",{className:"game__container--way__item",src:j,alt:"Camino",title:"Camino"})]}),Object(l.jsxs)("div",{className:"game__container--way",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0]," ").concat(K),src:m,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("img",{className:"game__container--way__item",src:j,alt:"Camino",title:"Camino"})]})," "]})," ",Object(l.jsxs)("div",{className:"game__container--cupboard",children:[Object(l.jsx)("img",{className:"game__container--way__position".concat(e.stateVariable[0]," ").concat(Y),src:m,alt:"Grogu en su cuna",title:"Grogu en su cuna"}),Object(l.jsx)("div",{className:"game__container--cupboard__food",children:Object(l.jsxs)("div",{className:"game__container--cupboard__food--containerImgs",children:[Object(l.jsx)("img",{className:"game__container--cupboard__food--containerImgs__imgTop ".concat(ae),src:u,alt:"Galleta",title:"galleta"}),Object(l.jsx)("img",{className:"game__container--cupboard__food--containerImgs__imgBottomLeft ".concat(ne),src:u,alt:"Galleta",title:"galleta"}),Object(l.jsx)("img",{className:"game__container--cupboard__food--containerImgs__imgBottomRight ".concat(le),src:u,alt:"Galleta",title:"galleta"})]})}),Object(l.jsx)("div",{className:"game__container--cupboard__food",children:Object(l.jsxs)("div",{className:"game__container--cupboard__food--containerImgs",children:[Object(l.jsx)("img",{className:"game__container--cupboard__food--containerImgs__imgTop ".concat(ue),src:g,alt:"Rana",title:"Rana"}),Object(l.jsx)("img",{className:"game__container--cupboard__food--containerImgs__imgBottomLeft ".concat(Oe),src:g,alt:"Rana",title:"Rana"}),Object(l.jsx)("img",{className:"game__container--cupboard__food--containerImgs__imgBottomRight ".concat(fe),src:g,alt:"Rana",title:"Rana"})]})}),Object(l.jsx)("div",{className:"game__container--cupboard__food",children:Object(l.jsxs)("div",{className:"game__container--cupboard__food--containerImgs",children:[Object(l.jsx)("img",{className:"game__container--cupboard__food--containerImgs__imgTop ".concat(ye),src:b,alt:"Huevo",title:"Huevo"}),Object(l.jsx)("img",{className:"game__container--cupboard__food--containerImgs__imgBottomLeft ".concat(Se," "),src:b,alt:"Huevo",title:"Huevo"}),Object(l.jsx)("img",{className:"game__container--cupboard__food--containerImgs__imgBottomRight ".concat(Ie),src:b,alt:"Huevo",title:"Huevo"})]})})]})]}))}),Object(l.jsx)(O,{win:s}),Object(l.jsx)(h,{lost:p}),Object(l.jsx)(_,{})]})})},x=function(){return Object(l.jsxs)(l.Fragment,{children:[" ","El juego es muy sencillo. Dispondremos de 6 casillas que representan un camino en la zona de carga de la Razor Crest que lleva hasta el armario donde se encuentra segura la mercanc\xeda. De este modo tendremos 7 casillas, 6 del camino y una que representa al armario: \ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\u274e Durante el viaje has hecho muy bien tu trabajo pero ahora debes vaciar el armario. Para ello deber\xe1s descargar la mercanc\xeda poco a poco. Este es el momento m\xe1s delicado ya que Grogu puede aprovechar y llegar hasta el armario. Si eso ocurre se comer\xe1 lo que encuentre y Mando perder\xe1 la oportunidad de saber d\xf3nde esta Ahsoka. Ergo, te has quedado sin recompensa. Adem\xe1s de esas 7 piezas tendr\xe1s tres recipientes donde se guarda cada tipo de mercanc\xeda. De esta manera quedar\xeda:Recipiente de las galletas: Tendr\xe1 3 cajas de galletas azules dentro Recipiente de los huevos de rana: Tendr\xe1 dentro 3 huevos de rana (sin fertilizar) Recipiente de las ranas: Tendr\xe1 dentro 3 ranas Adem\xe1s de estas piezas tendremos un dado de 5 caras donde cada cara representa una de las siguientes acciones: Descargas una caja de galletas azules \ud83c\udf6a Descargas un huevo de rana (con mucho cuidado) \ud83e\udd5a Descargas una rana \ud83d\udc38 Grogu se mueve una casilla \ud83d\udc63 Adem\xe1s habr\xe1 una ficha que represente d\xf3nde est\xe1 Grogu. Ganar\xe1s el juego si consigues descargar toda la mercanc\xeda. Perder\xe1s si Grogu llega a la \xfaltima casilla (el armario)."]})},f=function(){return Object(l.jsx)(l.Fragment,{children:"ficha de zona de carga (x6) \ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32, ficha de armario (x1)\u274e, ficha de recipiente (x3), cajas de galletas (x3)\ud83c\udf6a, ranas (x3)\ud83d\udc38, huevos de rana (x3)\ud83e\udd5a, dado (x1) y grogu (x1)"})},v=function(){var e=Object(c.useState)(""),a=Object(r.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)([]),i=Object(r.a)(n,2),m=i[0],j=i[1];return Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(d,{startGame:function(){s(""),m.splice(0,4);m.push(0),m.push(3),m.push(3),m.push(3)}})}),Object(l.jsx)(o.a,{path:"/pieces",element:Object(l.jsx)(f,{})}),Object(l.jsx)(o.a,{path:"/game",element:Object(l.jsx)(p,{setDiceValue:s,diceValue:t,stateVariable:m,setStateVariable:j})}),Object(l.jsx)(o.a,{path:"/rules",element:Object(l.jsx)(x,{})})]})})};n.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.8295601d.chunk.js.map