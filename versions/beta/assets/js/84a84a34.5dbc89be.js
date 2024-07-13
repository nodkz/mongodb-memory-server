"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[858],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(r),f=o,d=c["".concat(l,".").concat(f)]||c[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6899:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"mongo-memory-server-automaticauth",title:"AutomaticAuth"},l=void 0,m={unversionedId:"api/interfaces/mongo-memory-server-automaticauth",id:"api/interfaces/mongo-memory-server-automaticauth",title:"AutomaticAuth",description:"API Documentation of AutomaticAuth-Interface",source:"@site/../docs/api/interfaces/mongo-memory-server-automaticauth.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/mongo-memory-server-automaticauth",permalink:"/mongodb-memory-server/versions/beta/docs/api/interfaces/mongo-memory-server-automaticauth",draft:!1,editUrl:"https://github.com/typegoose/mongodb-memory-server/edit/master/docs/../docs/api/interfaces/mongo-memory-server-automaticauth.md",tags:[],version:"current",frontMatter:{id:"mongo-memory-server-automaticauth",title:"AutomaticAuth"},sidebar:"api",previous:{title:"MongoMemoryServerOpts",permalink:"/mongodb-memory-server/versions/beta/docs/api/interfaces/mongo-memory-server-opts"},next:{title:"CreateUser",permalink:"/mongodb-memory-server/versions/beta/docs/api/interfaces/mongo-memory-server-createuser"}},u={},c=[{value:"Values",id:"values",level:2},{value:"enable",id:"enable",level:3},{value:"extraUsers",id:"extrausers",level:3},{value:"customRootName",id:"customrootname",level:3},{value:"customRootPwd",id:"customrootpwd",level:3},{value:"force",id:"force",level:3},{value:"keyfileContent",id:"keyfilecontent",level:3}],p={toc:c},f="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"API Documentation of ",(0,a.kt)("inlineCode",{parentName:"p"},"AutomaticAuth"),"-Interface"),(0,a.kt)("h2",{id:"values"},"Values"),(0,a.kt)("h3",{id:"enable"},"enable"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"enable?: boolean"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("p",null,"Enable or disable Authentication creation.  "),(0,a.kt)("h3",{id:"extrausers"},"extraUsers"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"extraUsers?: CreateUser[]"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")),(0,a.kt)("p",null,"Add extra users after the root user has been created, uses ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/beta/docs/api/interfaces/mongo-memory-server-createuser"},(0,a.kt)("inlineCode",{parentName:"a"},"CreateUser")),"."),(0,a.kt)("h3",{id:"customrootname"},"customRootName"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"customRootName?: string"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server-root")),(0,a.kt)("p",null,"Set a Custom Root User Name."),(0,a.kt)("h3",{id:"customrootpwd"},"customRootPwd"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"customRootPwd?: string"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"rootuser")),(0,a.kt)("p",null,"Set a Custom Root User Password."),(0,a.kt)("h3",{id:"force"},"force"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"force?: boolean"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("p",null,"Force to run ",(0,a.kt)("inlineCode",{parentName:"p"},"createAuth"),", by default ",(0,a.kt)("inlineCode",{parentName:"p"},"createAuth")," is only run when the instance is new."),(0,a.kt)("h3",{id:"keyfilecontent"},"keyfileContent"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"keyfileContent?: string"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"0123456789")),(0,a.kt)("p",null,"Set custom content for the keyfile.",(0,a.kt)("br",{parentName:"p"}),"\n","This field only has a effect in a ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/beta/docs/api/classes/mongo-memory-replset"},(0,a.kt)("inlineCode",{parentName:"a"},"MongoMemoryReplSet")),".  "),(0,a.kt)("p",null,"A Keyfile is required in ReplSet's since ~5.0 for other replset instances to connect to eachother without having to use a password, and keyfiles only work for authenticating other instances, not clients, for more see ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/tutorial/enforce-keyfile-access-control-in-existing-replica-set/"},"MongoDB Keyfile Documentation"),"."))}d.isMDXComponent=!0}}]);