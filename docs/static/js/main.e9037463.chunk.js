(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(1),c=t(8),n=t.n(c),r=t(5),i=t(4),o=(t(13),t(2)),l=(t(14),t(0)),d=function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"container__links",children:[Object(l.jsx)(r.b,{to:"rules",children:Object(l.jsx)("input",{type:"button",value:"Reglas juego"})}),Object(l.jsx)(r.b,{to:"pieces",children:Object(l.jsx)("input",{type:"button",value:"Piezas juego"})}),Object(l.jsx)(r.b,{to:"game",children:Object(l.jsx)("input",{type:"button",value:"Comenzar juego"})})]})})},u=(t(16),t.p+"static/media/grogu.e81eed8e.png"),j=(t(17),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{children:"\xa9 Maitane Abad Conde"})}),";"]})}),b=(t(18),function(e){return Object(l.jsx)("div",{className:"containerWin ".concat(e.win),children:"Hemos ganado"})}),m=(t(19),function(e){return Object(l.jsx)("div",{className:"containerLost ".concat(e.lost),children:Object(l.jsx)("div",{children:"Hemos Perdido"})})}),h=function(e){var a=Object(s.useState)("hidden"),t=Object(i.a)(a,2),c=t[0],n=t[1],o=Object(s.useState)("hidden"),d=Object(i.a)(o,2),h=d[0],g=d[1],p=function(){if(6===e.stateVariable[0])g(""),console.log("perdisi\xf3n");else{g("hidden");var a=e.stateVariable[0];a++,e.stateVariable[0]=a}},x=function(){if(0===e.stateVariable[1]&&0===e.stateVariable[2]&&0===e.stateVariable[3])console.log("Hemos ganado la copa de bilbado"),n("");else if(0!==e.stateVariable[1]){var a=e.stateVariable[1];a--,e.stateVariable[1]=a}},O=function(){if(0===e.stateVariable[1]&&0===e.stateVariable[2]&&0===e.stateVariable[3])n(""),console.log("Hemos ganado la copa de bilbado");else if(0!==e.stateVariable[2]){var a=e.stateVariable[2];a--,e.stateVariable[2]=a}},v=function(){if(0===e.stateVariable[1]&&0===e.stateVariable[2]&&0===e.stateVariable[3])n(""),console.log("Hemos ganado la copa de bilbado");else if(0!==e.stateVariable[3]){var a=e.stateVariable[3];a--,e.stateVariable[3]=a}};return Object(l.jsxs)(l.Fragment,{children:[" ",Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("input",{type:"button",value:"Men\xfa"})}),Object(l.jsxs)("div",{className:"game",onLoad:e.startGame,children:[Object(l.jsx)("input",{type:"button",value:" dado",id:e.diceValue,onClick:function(){var a=Math.floor(4*Math.random()+1);switch(e.setDiceValue(0),e.setDiceValue(a),a){case 1:e.setDiceValue(1),p();break;case 2:e.setDiceValue(2),x();break;case 3:e.setDiceValue(3),O();break;case 4:e.setDiceValue(4),v()}console.log(e.stateVariable)}}),Object(l.jsx)("p",{children:""===e.diceValue?"":"El resultado del dado es: "+e.diceValue}),Object(l.jsxs)("section",{className:"game__container",children:[Object(l.jsx)("div",{className:"game__container--grogu",children:Object(l.jsx)("img",{src:u,alt:"Grogu en su cuna",title:"Grogu en su cuna"})}),Object(l.jsx)("div",{className:"game__container--way",children:Object(l.jsx)("p",{children:"Camino 1"})}),Object(l.jsx)("div",{className:"game__container--way",children:Object(l.jsx)("p",{children:"Camino 2"})}),Object(l.jsx)("div",{className:"game__container--way",children:Object(l.jsx)("p",{children:"Camino 3"})}),Object(l.jsx)("div",{className:"game__container--way",children:Object(l.jsx)("p",{children:"Camino 4"})}),Object(l.jsx)("div",{className:"game__container--way",children:Object(l.jsx)("p",{children:"Camino 5"})}),Object(l.jsx)("div",{className:"game__container--way",children:Object(l.jsx)("p",{children:"Camino 6"})}),Object(l.jsxs)("div",{className:"game__container--cupboard",children:["Armario",Object(l.jsx)("div",{className:"game__container--cupboard__cookies",children:"Galletas"}),Object(l.jsx)("div",{className:"game__container--cupboard__frogs",children:"Ranas"}),Object(l.jsx)("div",{className:"game__container--cupboard__eggs",children:"Huevos"})]})]}),Object(l.jsx)(b,{win:c}),Object(l.jsx)(m,{lost:h})]}),Object(l.jsx)(j,{})]})},g=function(){return Object(l.jsxs)(l.Fragment,{children:[" ","El juego es muy sencillo. Dispondremos de 6 casillas que representan un camino en la zona de carga de la Razor Crest que lleva hasta el armario donde se encuentra segura la mercanc\xeda. De este modo tendremos 7 casillas, 6 del camino y una que representa al armario: \ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\u274e Durante el viaje has hecho muy bien tu trabajo pero ahora debes vaciar el armario. Para ello deber\xe1s descargar la mercanc\xeda poco a poco. Este es el momento m\xe1s delicado ya que Grogu puede aprovechar y llegar hasta el armario. Si eso ocurre se comer\xe1 lo que encuentre y Mando perder\xe1 la oportunidad de saber d\xf3nde esta Ahsoka. Ergo, te has quedado sin recompensa. Adem\xe1s de esas 7 piezas tendr\xe1s tres recipientes donde se guarda cada tipo de mercanc\xeda. De esta manera quedar\xeda:Recipiente de las galletas: Tendr\xe1 3 cajas de galletas azules dentro Recipiente de los huevos de rana: Tendr\xe1 dentro 3 huevos de rana (sin fertilizar) Recipiente de las ranas: Tendr\xe1 dentro 3 ranas Adem\xe1s de estas piezas tendremos un dado de 5 caras donde cada cara representa una de las siguientes acciones: Descargas una caja de galletas azules \ud83c\udf6a Descargas un huevo de rana (con mucho cuidado) \ud83e\udd5a Descargas una rana \ud83d\udc38 Grogu se mueve una casilla \ud83d\udc63 Adem\xe1s habr\xe1 una ficha que represente d\xf3nde est\xe1 Grogu. Ganar\xe1s el juego si consigues descargar toda la mercanc\xeda. Perder\xe1s si Grogu llega a la \xfaltima casilla (el armario)."]})},p=function(){return Object(l.jsx)(l.Fragment,{children:"ficha de zona de carga (x6) \ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32\ud83d\udd32, ficha de armario (x1)\u274e, ficha de recipiente (x3), cajas de galletas (x3)\ud83c\udf6a, ranas (x3)\ud83d\udc38, huevos de rana (x3)\ud83e\udd5a, dado (x1) y grogu (x1)"})},x=function(){var e=Object(s.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)([]),r=Object(i.a)(n,2),u=r[0],j=r[1];return Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(d,{})}),Object(l.jsx)(o.a,{path:"/pieces",element:Object(l.jsx)(p,{})}),Object(l.jsx)(o.a,{path:"/game",element:Object(l.jsx)(h,{startGame:function(){u.push(0),u.push(3),u.push(3),u.push(3)},setDiceValue:c,diceValue:t,stateVariable:u,setStateVariable:j})}),Object(l.jsx)(o.a,{path:"/rules",element:Object(l.jsx)(g,{})})]})})};n.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.e9037463.chunk.js.map