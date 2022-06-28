"use strict";(self.webpackChunkmilitaryrp_docs=self.webpackChunkmilitaryrp_docs||[]).push([[512],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>m});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),p=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(g,i(i({ref:a},c),{},{components:r})):t.createElement(g,i({ref:a},c))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4975:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="Fading Door",l={unversionedId:"toolgun/fadingdoor",id:"toolgun/fadingdoor",title:"Fading Door",description:"Toda la informaci\xf3n relacionada con la herramienta Fading Door.",source:"@site/docs/toolgun/fadingdoor.md",sourceDirName:"toolgun",slug:"/toolgun/fadingdoor",permalink:"/militaryrp-docs/docs/toolgun/fadingdoor",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Toolgun",permalink:"/militaryrp-docs/docs/category/toolgun"},next:{title:"Keypad",permalink:"/militaryrp-docs/docs/toolgun/keypad"}},s={},p=[{value:"Fading Door",id:"fading-door-1",level:2}],c={toc:p};function u(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fading-door"},"Fading Door"),(0,n.kt)("p",null,"Toda la informaci\xf3n relacionada con la herramienta Fading Door."),(0,n.kt)("h2",{id:"fading-door-1"},"Fading Door"),(0,n.kt)("p",null,"Esta herramienta es la base del sistema, pues sirve para poder hacer que nuestra puerta (o cualquier otro prop) se abra/cierre."),(0,n.kt)("p",null,"Para utilizarla, lo primero que tenemos que hacer ser\xe1 escogerla, as\xed que mantendremos la tecla ",(0,n.kt)("strong",{parentName:"p"},"Q")," y seleccionaremos esta herramienta a la derecha, la cual se encuentra en el apartado de ",(0,n.kt)("strong",{parentName:"p"},"Construcci\xf3n")," como ",(0,n.kt)("strong",{parentName:"p"},"Fading Doors"),"."),(0,n.kt)("p",null,"Una vez seleccionada la herramienta, veremos una serie de ",(0,n.kt)("strong",{parentName:"p"},"opciones")," que podemos utilizar para modificar nuestra puerta, estas opciones son las siguientes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Button"),": El bot\xf3n que queramos asignar para abrir y cerrar la puerta."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reversed"),": En vez de tener la puerta cerrada y cuando pulsas se abre, est\xe1 abierta y cuando pulsas se cierra."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Toggle active"),": No hace falta mantener el bot\xf3n para abrir la puerta, con pulsarlo ya se mantiene abierta hasta que lo vuelvas a pulsar."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Open sound"),": El sonido que har\xe1 la puerta al abrirse."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Active sound"),": El sonido que produce la puerta mientras est\xe1 abierta."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Close sound"),": El sonido que hace la puerta cuando se cierra.")),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Adem\xe1s, tambi\xe9n veremos una serie de texturas que podemos seleccionar las cuales se mostrar\xe1n en nuestra puerta mientras esta est\xe9 abierta."))))}u.isMDXComponent=!0}}]);