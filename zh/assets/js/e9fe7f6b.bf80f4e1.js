(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[7651],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5869:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={},l={unversionedId:"se/os/IPC",id:"se/os/IPC",isDocsHomePage:!1,title:"\u8fdb\u7a0b\u95f4\u901a\u4fe1(IPC\uff0cInterProcess Communication)",description:"\u8d44\u6599\u6765\u6e901",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/se/os/IPC.md",sourceDirName:"se/os",slug:"/se/os/IPC",permalink:"/zh/docs/se/os/IPC",version:"current",frontMatter:{},sidebar:"se_os",previous:{title:"Operating System",permalink:"/zh/docs/se/os/index"},next:{title:"Linux",permalink:"/zh/docs/se/os/linux"}},u=[{value:"pipe(\u7ba1\u9053)",id:"pipe\u7ba1\u9053",children:[{value:"\u5173\u952e\u8bcd",id:"\u5173\u952e\u8bcd",children:[]}]},{value:"FIFO(\u5177\u540d\u7ba1\u9053)",id:"fifo\u5177\u540d\u7ba1\u9053",children:[]},{value:"sys/msg(\u6d88\u606f\u961f\u5217)",id:"sysmsg\u6d88\u606f\u961f\u5217",children:[]},{value:"semaphore(\u4fe1\u53f7\u91cf)",id:"semaphore\u4fe1\u53f7\u91cf",children:[]},{value:"Shared Memory(\u5171\u4eab\u5185\u5b58)",id:"shared-memory\u5171\u4eab\u5185\u5b58",children:[]}],c={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/zgq0/p/8780893.html"},"\u8d44\u6599\u6765\u6e901")),(0,i.kt)("h2",{id:"pipe\u7ba1\u9053"},"pipe(\u7ba1\u9053)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u534a\u53cc\u5de5(Half Duplex)"),(0,i.kt)("li",{parentName:"ul"},"\u4eb2\u7f18\u5173\u7cfb\u8fdb\u7a0b\u95f4\u901a\u4fe1")),(0,i.kt)("h3",{id:"\u5173\u952e\u8bcd"},"\u5173\u952e\u8bcd"),(0,i.kt)("p",null,"\u5185\u6838(kernel);\u6587\u4ef6\u63cf\u8ff0\u7b26(file descriptor)"),(0,i.kt)("h2",{id:"fifo\u5177\u540d\u7ba1\u9053"},"FIFO(\u5177\u540d\u7ba1\u9053)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5148\u8fdb\u5148\u51fa(First In First Out)"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u5173\u8fdb\u7a0b\u95f4\u901a\u4fe1")),(0,i.kt)("h2",{id:"sysmsg\u6d88\u606f\u961f\u5217"},"sys/msg(\u6d88\u606f\u961f\u5217)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9762\u5411\u8bb0\u5f55"),(0,i.kt)("li",{parentName:"ul"},"\u8fdb\u7a0b\u5173\u95ed\u8bb0\u5f55\u7684\u6570\u636e\u4e0d\u4f1a\u88ab\u5220\u9664"),(0,i.kt)("li",{parentName:"ul"},"\u968f\u673a\u67e5\u8be2;\u5148\u8fdb\u5148\u51fa;\u6309\u7c7b\u578b\u67e5\u8be2")),(0,i.kt)("h2",{id:"semaphore\u4fe1\u53f7\u91cf"},"semaphore(\u4fe1\u53f7\u91cf)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u8fdb\u7a0b\u540c\u6b65"),(0,i.kt)("li",{parentName:"ul"},"n=1\u65f6\u7684\u7279\u6b8a\u60c5\u51b5\u79f0\u4e3a",(0,i.kt)("strong",{parentName:"li"},"Mutex"),"(\u4e92\u65a5\u9501)")),(0,i.kt)("h2",{id:"shared-memory\u5171\u4eab\u5185\u5b58"},"Shared Memory(\u5171\u4eab\u5185\u5b58)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6700\u5feb\u7684\u4e00\u79cdIPC"),(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u8fdb\u7a0b\u540c\u6b65"),(0,i.kt)("li",{parentName:"ul"},"\u4fe1\u53f7\u91cf+\u5171\u4eab\u5185\u5b58=\u8fdb\u7a0b\u540c\u6b65")))}p.isMDXComponent=!0}}]);