(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[3080],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7079:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return c},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),l={},a={unversionedId:"se/development/ds/2PC",id:"se/development/ds/2PC",isDocsHomePage:!1,title:"2PC",description:"Two-phase commit protocol",source:"@site/docs/se/development/ds/2PC.md",sourceDirName:"se/development/ds",slug:"/se/development/ds/2PC",permalink:"/docs/se/development/ds/2PC",version:"current",frontMatter:{},sidebar:"se_development",previous:{title:"locking",permalink:"/docs/se/development/concurrent/locking"},next:{title:"Distributed Systems",permalink:"/docs/se/development/ds/index"}},c=[{value:"terminology",id:"terminology",children:[]},{value:"Flow",id:"flow",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Two-phase commit protocol"),(0,i.kt)("h2",{id:"terminology"},"terminology"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"coordintaor (\u534f\u8c03\u8005)"),(0,i.kt)("li",{parentName:"ul"},"Participants (\u53c2\u4e0e\u8005)"),(0,i.kt)("li",{parentName:"ul"},"Write-ahead logging (WAL)(\u9884\u5199\u5f0f\u65e5\u5fd7)"),(0,i.kt)("li",{parentName:"ul"},"voting phase (\u6295\u7968\u9636\u6bb5)"),(0,i.kt)("li",{parentName:"ul"},"completion phase (\u5b8c\u6210\u9636\u6bb5)"),(0,i.kt)("li",{parentName:"ul"},"multicast (\u591a\u64ad)")),(0,i.kt)("h2",{id:"flow"},"Flow"))}p.isMDXComponent=!0}}]);