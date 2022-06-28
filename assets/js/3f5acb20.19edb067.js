"use strict";(self.webpackChunkmilitaryrp_docs=self.webpackChunkmilitaryrp_docs||[]).push([[63],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>m});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=t.createContext({}),s=function(e){var a=t.useContext(p),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(k,l(l({ref:a},c),{},{components:r})):t.createElement(k,l({ref:a},c))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},813:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=r(7462),n=(r(7294),r(3905));const o={sidebar_position:4},l="Stacker",i={unversionedId:"toolgun/stacker",id:"toolgun/stacker",title:"Stacker",description:"Toda la informaci\xf3n relacionada con la herramienta Stacker.",source:"@site/docs/toolgun/stacker.md",sourceDirName:"toolgun",slug:"/toolgun/stacker",permalink:"/militaryrp-docs/docs/toolgun/stacker",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SmartSnap",permalink:"/militaryrp-docs/docs/toolgun/smartsnap"},next:{title:"Advanced Duplicator",permalink:"/militaryrp-docs/docs/toolgun/advanced_duplicator"}},p={},s=[{value:"Stacker",id:"stacker-1",level:2},{value:"Opciones",id:"opciones",level:3}],c={toc:s};function u(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stacker"},"Stacker"),(0,n.kt)("p",null,"Toda la informaci\xf3n relacionada con la herramienta Stacker."),(0,n.kt)("h2",{id:"stacker-1"},"Stacker"),(0,n.kt)("p",null,"El Stacker es una herramienta de ",(0,n.kt)("strong",{parentName:"p"},"duplicaci\xf3n y precisi\xf3n")," para realizar una construcci\xf3n.\nSu funcionalidad b\xe1sica es que podamos duplicar los props coloc\xe1ndolos en una posici\xf3n muy precisa para poder realizar construcciones muy complejas."),(0,n.kt)("h3",{id:"opciones"},"Opciones"),(0,n.kt)("p",null,"Si abrimos el men\xfa de construcci\xf3n (por defecto con la Q) podremos ver a la derecha la herramienta ",(0,n.kt)("strong",{parentName:"p"},"Stacker - Improved")," que se encuentra en la categor\xeda ",(0,n.kt)("strong",{parentName:"p"},"Construcci\xf3n"),"."),(0,n.kt)("p",null,"Aqu\xed podremos ver todas las opciones que podremos configurar al Stacker, las cuales son:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Language"),": El idioma en el que queremos que se muestren las opciones"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Stacker Presets"),": Seleccionar o guardar ciertas configuraciones del Stacker"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Freeze stacked props"),": Congelar los props duplicados (para que no se muevan)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Weld stacked props"),": Soldar los props duplicados (para que no se caigan)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"No-Collide stacked props with each other"),": Que los props duplicados no tengan colisiones entre ellos"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Stack relative to"),": Con respecto a que queremos duplicar el prop (un prop o el mundo)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Stack direction"),": Posici\xf3n/direcci\xf3n en la que queremos que se duplique el prop"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Stack size"),": N\xfamero de props que queremos duplicar de un prop"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"X"),": Punto en el eje X en el que queremos que aparezca el prop duplicado"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Y"),": Punto en el eje Y en el que queremos que aparezca el prop duplicado"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Z"),": Punto en el eje Z en el que queremos que aparezca el prop duplicado"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pitch"),": \xc1ngulo (arriba/abajo) en el que queremos que aparezca el prop duplicado"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Yaw"),": \xc1ngulo (derecha/izquierda) en el que queremos que aparezca el prop duplicado"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Roll"),": \xc1ngulo (derecha/izquierda) en el que queremos que aparezca el prop duplicado")),(0,n.kt)("p",null,"Si presionamos ",(0,n.kt)("strong",{parentName:"p"},"Click to show settings")," se nos mostrar\xe1n m\xe1s opciones del Stacker las cuales son:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Change stack size with SHIFT"),": Activar o desactivar la opci\xf3n de poder cambiar el tama\xf1o del prop duplicado si presionamos Shift al duplicarlo"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Stack relative to new rotation"),": Que el prop duplicado tenga una nueva rotaci\xf3n"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Apply material"),": Aplicar una textura al prop duplicado"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Apply color"),": Aplicar un color al prop duplicado"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Apply phyisical properties"),": Aplicar las propiedades f\xedsicas al prop duplicado"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ghost all props in the stack"),": Quitar las colisiones (ghostear) todos los props que se dupliquen"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Draw XYZ axis"),": Que se muestren los ejes XYZ a la hora de duplicar un prop"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Draw XYZ axis labels"),": Que se muestren los textos indicando cada eje a la hora de duplicar un prop"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Draw XYZ axis angles"),": Mostrar los \xe1ngulos de cada eje a la hora de duplicar un prop"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Add halos at ghosted props"),": Mostrar subrayado a vista previa de la duplicaci\xf3n"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Opacity"),": Nivel de opacidad de la vista previa de la duplicaci\xf3n"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Halo color"),": Color del subrayado de la vista previa de la duplicaci\xf3n")))}u.isMDXComponent=!0}}]);