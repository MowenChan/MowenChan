(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[6044],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2411:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={},l={unversionedId:"se/development/ds/2PC",id:"se/development/ds/2PC",isDocsHomePage:!1,title:"2PC",description:"Two-phase commit protocol",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/se/development/ds/2PC.md",sourceDirName:"se/development/ds",slug:"/se/development/ds/2PC",permalink:"/zh/docs/se/development/ds/2PC",version:"current",frontMatter:{},sidebar:"se_development",previous:{title:"Free Area",permalink:"/zh/docs/se/development/common/freearea"},next:{title:"Distributed Systems",permalink:"/zh/docs/se/development/ds/index"}},c=[{value:"terminology",id:"terminology",children:[]},{value:"Flow",id:"flow",children:[]}],u={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Two-phase commit protocol"),(0,i.kt)("h2",{id:"terminology"},"terminology"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"coordintaor (\u534f\u8c03\u8005)"),(0,i.kt)("li",{parentName:"ul"},"Participants (\u53c2\u4e0e\u8005)"),(0,i.kt)("li",{parentName:"ul"},"Write-ahead logging (WAL)(\u9884\u5199\u5f0f\u65e5\u5fd7)"),(0,i.kt)("li",{parentName:"ul"},"voting phase (\u6295\u7968\u9636\u6bb5)"),(0,i.kt)("li",{parentName:"ul"},"completion phase (\u5b8c\u6210\u9636\u6bb5)"),(0,i.kt)("li",{parentName:"ul"},"multicast (\u591a\u64ad)")),(0,i.kt)("h2",{id:"flow"},"Flow"))}p.isMDXComponent=!0}}]);