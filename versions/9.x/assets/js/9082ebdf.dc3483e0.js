"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[895],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=d(r),g=a,b=p["".concat(l,".").concat(g)]||p[g]||c[g]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[p]="string"==typeof e?e:a,i[1]=m;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6966:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],m={id:"mongodb-server-versions",title:"Mongodb Server Versions"},l=void 0,d={unversionedId:"guides/mongodb-server-versions",id:"guides/mongodb-server-versions",title:"Mongodb Server Versions",description:"This Guide will show what MongoDB Server versions are / were the default for versions of mongodb-memory-server-core and the guidelines of when a version gets changed.",source:"@site/../docs/guides/mongodb-server-versions.md",sourceDirName:"guides",slug:"/guides/mongodb-server-versions",permalink:"/mongodb-memory-server/versions/9.x/docs/guides/mongodb-server-versions",draft:!1,editUrl:"https://github.com/typegoose/mongodb-memory-server/edit/master/docs/../docs/guides/mongodb-server-versions.md",tags:[],version:"current",frontMatter:{id:"mongodb-server-versions",title:"Mongodb Server Versions"},sidebar:"guides",previous:{title:"Details for Errors & Warnings",permalink:"/mongodb-memory-server/versions/9.x/docs/guides/error-warning-details"},next:{title:"Common Issues",permalink:"/mongodb-memory-server/versions/9.x/docs/guides/common-issues"}},s={},p=[{value:"When a Version gets upgraded",id:"when-a-version-gets-upgraded",level:2},{value:"<code>mongodb-memory-server-core</code> Version Table",id:"mongodb-memory-server-core-version-table",level:2},{value:"<code>mongodb-memory-server-global-*</code> Version Table",id:"mongodb-memory-server-global--version-table",level:2}],c={toc:p},g="wrapper";function b(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(g,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This Guide will show what MongoDB Server versions are / were the default for versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server-core")," and the guidelines of when a version gets changed."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("sub",null,"Some expressions will use ",(0,o.kt)("a",{parentName:"em",href:"https://www.npmjs.com/package/semver"},"npm's semver convention"),"."))),(0,o.kt)("h2",{id:"when-a-version-gets-upgraded"},"When a Version gets upgraded"),(0,o.kt)("p",null,"In a new major version of ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server-core")," (",(0,o.kt)("inlineCode",{parentName:"p"},"X.0.0"),"), the default mongodb binary version may be upgraded to any newer version (",(0,o.kt)("inlineCode",{parentName:"p"},"X.X.X"),").",(0,o.kt)("br",{parentName:"p"}),"\n","In a minor version of ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server-core")," (",(0,o.kt)("inlineCode",{parentName:"p"},"0.X.0"),"), the default mongodb binary version may be upgraded to the latest patch version ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.X"),".",(0,o.kt)("br",{parentName:"p"}),"\n","In a patch version of ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server-core")," (",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.X"),"), the default mongodb binary version will not be changed."),(0,o.kt)("p",null,"There are some exceptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A mongodb binary may go offline (not being able to download it anymore), then the default version will be changed and a ",(0,o.kt)("em",{parentName:"li"},"minor")," (",(0,o.kt)("inlineCode",{parentName:"li"},"0.X.0"),") release will happen."),(0,o.kt)("li",{parentName:"ul"},"A mongodb binary may be broken, then the default version will be changed and a ",(0,o.kt)("em",{parentName:"li"},"minor")," (",(0,o.kt)("inlineCode",{parentName:"li"},"0.X.0"),") release will happen.")),(0,o.kt)("p",null,"The versions with a broken default binary may get deprecated (when possible)."),(0,o.kt)("p",null,"For Packages that are named with a version (like ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server-global-4.2"),"), the patch version (",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.X"),") of a binary may be changed with minor (",(0,o.kt)("inlineCode",{parentName:"p"},"0.X.0"),") releases."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Starting with MongoDB version 5.0, the default versions for ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server-core")," will only be major ",(0,o.kt)("inlineCode",{parentName:"p"},"X.0.0")," versions (no ",(0,o.kt)("inlineCode",{parentName:"p"},"X.X.0")," versions), see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/versioning/#std-label-release-version-numbers"},"MongoDB Versioning"),".")),(0,o.kt)("h2",{id:"mongodb-memory-server-core-version-table"},(0,o.kt)("inlineCode",{parentName:"h2"},"mongodb-memory-server-core")," Version Table"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"th"},"mongodb-memory-server-core")," Version"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default MongoDB Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"9.2.x - 9.2.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"6.0.14")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"9.0.x - 9.1.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"6.0.9")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"8.14.x - 8.16.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"5.0.19")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"8.13.x - 8.13.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"5.0.18")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"8.11.x - 8.12.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"5.0.13")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"8.6.x - 8.10.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"5.0.8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"8.0.x - 8.5.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"5.0.3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"7.5.x - 7.5.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4.0.27")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"7.0.x - 7.4.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4.0.25")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"6.4.x - 6.9.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4.0.14")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"6.0.x - 6.4.x"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4.0.3")))),(0,o.kt)("h2",{id:"mongodb-memory-server-global--version-table"},(0,o.kt)("inlineCode",{parentName:"h2"},"mongodb-memory-server-global-*")," Version Table"),(0,o.kt)("p",null,"This Section will show all ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server-global-*")," packages that ever existed for this Project, what Version they provide in the latest version and what Branch they will be updated from."),(0,o.kt)("p",null,"If the branch is named like ",(0,o.kt)("inlineCode",{parentName:"p"},"old/"),", then it means that this package will not be updated for new major MMS versions anymore. (Example if the package is in ",(0,o.kt)("inlineCode",{parentName:"p"},"old/6.x"),", then it will not get any updates to MMS 7.0 or higher)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Package Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Provided MongoDB Version"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Current Branch"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"mongodb-memory-server-global-4.4")),(0,o.kt)("td",{parentName:"tr",align:"center"},"4.4.28"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"master"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"mongodb-memory-server-global-4.2")),(0,o.kt)("td",{parentName:"tr",align:"center"},"4.2.24"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"master"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"mongodb-memory-server-global-4.0")),(0,o.kt)("td",{parentName:"tr",align:"center"},"4.0.28"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"master"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"mongodb-memory-server-global-3.6")),(0,o.kt)("td",{parentName:"tr",align:"center"},"3.6.23"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"old/7.x"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"mongodb-memory-server-global-3.4")),(0,o.kt)("td",{parentName:"tr",align:"center"},"3.4.20"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"old/6.x"))))))}b.isMDXComponent=!0}}]);