(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[2851],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),y=o,k=m["".concat(c,".").concat(y)]||m[y]||s[y]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2056:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={},l={unversionedId:"se/network/model",id:"se/network/model",isDocsHomePage:!1,title:"model",description:"Open System Interconnect(OSI)",source:"@site/docs/se/network/model.md",sourceDirName:"se/network",slug:"/se/network/model",permalink:"/docs/se/network/model",version:"current",frontMatter:{},sidebar:"se_network",previous:{title:"http",permalink:"/docs/se/network/http"},next:{title:"protocal",permalink:"/docs/se/network/protocal"}},c=[{value:"Open System Interconnect(OSI)",id:"open-system-interconnectosi",children:[]},{value:"Transmission Control Protocol/Internet Protocol(TCP/IP)",id:"transmission-control-protocolinternet-protocoltcpip",children:[]},{value:"OSI vs TCP/IP",id:"osi-vs-tcpip",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"open-system-interconnectosi"},"Open System Interconnect(OSI)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application Layer"),(0,a.kt)("li",{parentName:"ul"},"Presentation Layer"),(0,a.kt)("li",{parentName:"ul"},"Session Layer"),(0,a.kt)("li",{parentName:"ul"},"Transport Layer"),(0,a.kt)("li",{parentName:"ul"},"Network Layer"),(0,a.kt)("li",{parentName:"ul"},"Data Link Layer",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Logical Link Control"),(0,a.kt)("li",{parentName:"ul"},"medium access control"))),(0,a.kt)("li",{parentName:"ul"},"Physical Layer")),(0,a.kt)("h2",{id:"transmission-control-protocolinternet-protocoltcpip"},"Transmission Control Protocol/Internet Protocol(TCP/IP)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application Layer",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HTTP"),(0,a.kt)("li",{parentName:"ul"},"WebSocket (Full Duplex)"),(0,a.kt)("li",{parentName:"ul"},"FTP"),(0,a.kt)("li",{parentName:"ul"},"SMTP"),(0,a.kt)("li",{parentName:"ul"},"DNS"))),(0,a.kt)("li",{parentName:"ul"},"Transport Layer"),(0,a.kt)("li",{parentName:"ul"},"Network Layer"),(0,a.kt)("li",{parentName:"ul"},"Data Link Layer",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Logical Link Control"),(0,a.kt)("li",{parentName:"ul"},"medium access control"))),(0,a.kt)("li",{parentName:"ul"},"Physical Layer")),(0,a.kt)("h2",{id:"osi-vs-tcpip"},"OSI vs TCP/IP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+------------------+------------------+\n|       OSI        |      TCP/IP      |\n+------------------+------------------+\n|Application Layer |                  |\n+------------------+                  |\n|Presentation Layer|Application Layer |\n+------------------+                  |\n|Session Layer     |                  | ^\n+------------------+-------------------Socket (socket is virtual layer/interface)\n|Transport Layer   |Transport Layer   | v\n+------------------+------------------+\n|Network Layer     |Network Layer     |\n+------------------+------------------+\n|Data Link Layer   |Data Link Layer   |\n+------------------+------------------+\n|Physical Layer    |Physical Layer    |\n+------------------+------------------+\n")))}u.isMDXComponent=!0}}]);