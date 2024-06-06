"use strict";(self.webpackChunkWalid_Birouk=self.webpackChunkWalid_Birouk||[]).push([[223],{3300:function(e,t,r){r.d(t,{A:function(){return O}});var a=r(6540),n=r(7107),l=r(5556),o=r.n(l);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function b(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var d=["style"];var y=!1;try{y=!0}catch(j){}function x(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.parse.icon?n.parse.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var h=a.forwardRef((function(e,t){var r=e.icon,a=e.mask,l=e.symbol,o=e.className,i=e.title,c=e.titleId,f=e.maskId,p=x(r),b=g("classes",[].concat(m(function(e){var t,r=e.beat,a=e.fade,n=e.beatFade,l=e.bounce,o=e.shake,i=e.flash,s=e.spin,c=e.spinPulse,f=e.spinReverse,m=e.pulse,p=e.fixedWidth,b=e.inverse,d=e.border,y=e.listItem,x=e.flip,g=e.size,h=e.rotation,v=e.pull,N=(u(t={"fa-beat":r,"fa-fade":a,"fa-beat-fade":n,"fa-bounce":l,"fa-shake":o,"fa-flash":i,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":p,"fa-inverse":b,"fa-border":d,"fa-li":y,"fa-flip":!0===x,"fa-flip-horizontal":"horizontal"===x||"both"===x,"fa-flip-vertical":"vertical"===x||"both"===x},"fa-".concat(g),null!=g),u(t,"fa-rotate-".concat(h),null!=h&&0!==h),u(t,"fa-pull-".concat(v),null!=v),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(N).map((function(e){return N[e]?e:null})).filter((function(e){return e}))}(e)),m(o.split(" ")))),d=g("transform","string"==typeof e.transform?n.parse.transform(e.transform):e.transform),N=g("mask",x(a)),w=(0,n.icon)(p,s(s(s(s({},b),d),N),{},{symbol:l,title:i,titleId:c,maskId:f}));if(!w)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var O=w.abstract,j={ref:t};return Object.keys(e).forEach((function(t){h.defaultProps.hasOwnProperty(t)||(j[t]=e[t])})),v(O[0],j)}));h.displayName="FontAwesomeIcon",h.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},h.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var v=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),l=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=a.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),n=b(t.slice(0,a)),l=t.slice(a+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=l:e[n]=l,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[b(t)]=a}return e}),{attrs:{}}),o=a.style,i=void 0===o?{}:o,c=f(a,d);return l.attrs.style=s(s({},l.attrs.style),i),t.apply(void 0,[r.tag,s(s({},l.attrs),c)].concat(m(n)))}.bind(null,a.createElement),N=r(7875),w=r(6188);function O(){return a.createElement("div",{className:"flex justify-center initials text-customTeal-100 items-center  flex-wrap "},a.createElement("span",{className:"hover:text-customTeal-600 "},a.createElement("a",{href:"https://www.linkedin.com/in/walid-birouk-571b70203/",className:"mx-5 md:mx-2 my-1  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},a.createElement(h,{icon:N.IAJ,size:"2x"}))),a.createElement("span",{className:"hover:text-customTeal-600 "},a.createElement("a",{href:"https://github.com/Walid-Birouk",className:"mx-5 md:mx-2 my-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl ",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub"},a.createElement(h,{icon:N.Vz1,size:"2x"}))),a.createElement("span",{className:"hover:text-customTeal-600 "},a.createElement("a",{href:"mailto:uki.walid@live.fr",className:"mx-5 md:mx-2 my-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl",target:"_blank",rel:"noopener noreferrer","aria-label":"Email"},a.createElement(h,{icon:w.y_8,size:"2x"}))))}},1809:function(e,t,r){r.d(t,{A:function(){return u}});var a=r(6540),n=r(4194);var l=a.forwardRef((function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}));var o=a.forwardRef((function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))}));function i(){const{0:e,1:t}=(0,a.useState)(!1),r=(0,n.useStaticQuery)("1965041683"),{initials:i}=r.site.siteMetadata;return a.createElement("nav",{style:{background:"linear-gradient(to right, #0A0A0B, #202124)"},className:"p-2  text-white relative z-10 top-0 w-full sticky"},a.createElement("div",{className:"container mx-auto flex justify-between items-center"},a.createElement(n.Link,{to:"/",className:"flex initials items-center space-x-2 text-xl font-bold"},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI4MS43OSAzMjUuMjgiIHdpZHRoPSIyMTY2IiBoZWlnaHQ9IjI1MDAiPjx0aXRsZT5kdGE8L3RpdGxlPjxwYXRoIGQ9Ik05Ni41MiAzMjUuMjhsMTg1LjI3LTEwNi4wNi0uMjktODAuNzktMTMuMzguNDcgMS41OCAyNS40Ni0xNzMgOTkuOEw1OC43MSAyNDJsMTMxLjkxLTc2LjE2LTcuMjMtNS44NC0xMzYuMTYgODAuNzUtLjYzIDU3em00Ljg2LTU1LjI4bDE3Mi43My05OS41My0uNTEgNDUuODUtMTczIDk5Ljh6IiBmaWxsPSJyZ2IoMjA2LCAyMTIsIDIyNCkiLz48cGF0aCBkPSJNMjgwLjgzIDEwNi43NEw5NiAwIDI2LjgxIDQxLjkxbDI3LjgxLTMuODYgMTczLjMgOTkuMjh2NDRsLTEzMi43LTc2LjIxLTEuMzkgOS4xOCAxNDAuNzYgNzkuMDkgNDYuOTEtMjUuNDd6bS01MC4yNyAyMy42NUw1Ny42NCAzMS4xOSA5Ny41MiA4LjU2bDE3My4yOSA5OS4yOHoiIGZpbGw9InJnYigxMTIsIDIxMiwgOTkpIi8+PHBhdGggZmlsbD0icmdiKDM2LCAxMTIsIDIxMikiIGQ9Ik01MC45NCAyNy4xN0wwIDU2LjY2djIxMS44bDQ2LjkyIDI5LjQ5di0xMi4wN0w4LjA0IDI2My4wOVY2My4zNmwzOC44OCAyMi43OXYxNTUuNjhsNi43LTMuOTJWODYuMTVsMzguODctMjIuNzlWMjE0LjhsNi43MS0zLjk5LjU5LTE1NS4yMy00OC44NS0yOC40MXoiLz48L3N2Zz4NCg==",alt:"Logo",className:"mx-2 w-6 h-6"})," ",i),a.createElement("button",{onClick:()=>t(!e),className:"md:hidden"},e?a.createElement(l,{className:"h-6 w-6"}):a.createElement(o,{className:"h-6 w-6"})),a.createElement("div",{className:(e?"flex":"hidden")+" flex-col absolute top-full right-0 md:flex md:flex-row md:relative md:top-0 bg-gray-900 md:bg-transparent z-50"},a.createElement(n.Link,{to:"/",className:"px-4 py-2 hover:text-customTeal-200"},"Home"),a.createElement(n.Link,{to:"/about",className:"px-4 py-2 hover:text-customTeal-200"},"About"),a.createElement(n.Link,{to:"/projects",className:"px-4 py-2 hover:text-customTeal-200"},"Portfolio Projects"))))}var s=r(3300);var c=()=>{const e=(0,n.useStaticQuery)("1732862183"),{copyright:t}=e.site.siteMetadata;return a.createElement("footer",{className:"bg-transparent text-center text-sm lg:text-base p-4 "},a.createElement(s.A,null),a.createElement("p",{className:"mt-2 text-gray-400"},"© ",(new Date).getFullYear()," ",t))};var u=e=>{let{children:t}=e;return a.createElement("div",{style:{background:"linear-gradient(to right, #0A0A0B, #202124)"},className:"flex-col min-h-screen "},a.createElement(i,null),a.createElement("main",{className:"container flex-grow mx-auto p-4 rounded-lg shadow-lg mt-5 mb-2",style:{backgroundColor:"rgba(255, 255, 255, 0.05)",backdropFilter:"blur(10px)",color:"#FFFFFF"}},a.createElement("div",{className:"px-5"},t)),a.createElement(c,null))}}}]);
//# sourceMappingURL=commons-3baa9e2d95b4a186a179.js.map