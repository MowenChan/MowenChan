(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[7200],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1916:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c={},p={unversionedId:"se/development/framework/React",id:"se/development/framework/React",isDocsHomePage:!1,title:"React",description:"- React is a JavaScript library - one of the most popular ones, with over 100,000 stars on GitHub.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/se/development/framework/React.md",sourceDirName:"se/development/framework",slug:"/se/development/framework/React",permalink:"/zh/docs/se/development/framework/React",version:"current",frontMatter:{},sidebar:"se_development",previous:{title:"Rax",permalink:"/zh/docs/se/development/framework/Rax"},next:{title:"Svelte",permalink:"/zh/docs/se/development/framework/Sevelte"}},l=[{value:"ES6 Class Conponent",id:"es6-class-conponent",children:[]},{value:"JavaScript Simple Component",id:"javascript-simple-component",children:[]},{value:"App Entry",id:"app-entry",children:[]}],i={toc:l};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React is a JavaScript library - one of the most popular ones, with over 100,000 stars on GitHub."),(0,a.kt)("li",{parentName:"ul"},"React is not a framework (unlike Angular, which is more opinionated)."),(0,a.kt)("li",{parentName:"ul"},"React is an open-source project created by Facebook."),(0,a.kt)("li",{parentName:"ul"},"React is used to build user interfaces (UI) on the front end."),(0,a.kt)("li",{parentName:"ul"},"React is the view layer of an MVC application (Model View Controller)")),(0,a.kt)("h1",{id:"raw-react"},"Raw React"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>Hello React!</title>\n    <script src="https://unpkg.com/react@16/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"><\/script>\n    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"><\/script>\n  </head>\n\n  <body>\n    <div id="root"></div>\n\n    <script type="text/babel">\n      class App extends React.Component {\n        render() {\n          return <h1>Hello world!</h1>\n        }\n      }\n\n      ReactDOM.render(<App />, document.getElementById(\'root\'))\n    <\/script>\n  </body>\n</html>\n')),(0,a.kt)("h1",{id:"single-component"},"Single Component"),(0,a.kt)("h2",{id:"es6-class-conponent"},"ES6 Class Conponent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"import React, {Component} from 'react'\n\nclass Comp extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <h1>Hello, React!</h1>\n      </div>\n    )\n  }\n}\n\nexport default Comp\n")),(0,a.kt)("h2",{id:"javascript-simple-component"},"JavaScript Simple Component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const Comp =()=> {\n  return (\n    <div className="App">\n      <h1>Hello, React!</h1>\n    </div>\n  )\n}\n\nexport default Comp\n')),(0,a.kt)("h2",{id:"app-entry"},"App Entry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import ReactDOM from 'react-dom'\nimport Comp from './comp'\nReactDOM.render(<Comp />, document.getElementById('root'))\n")))}s.isMDXComponent=!0}}]);