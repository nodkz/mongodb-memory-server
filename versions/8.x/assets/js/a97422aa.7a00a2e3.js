"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[170],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"faq",title:"Frequently Asked Questions"},l=void 0,p={unversionedId:"guides/faq",id:"guides/faq",title:"Frequently Asked Questions",description:"Do binaries get automatically deleted?",source:"@site/../docs/guides/faq.md",sourceDirName:"guides",slug:"/guides/faq",permalink:"/mongodb-memory-server/versions/8.x/docs/guides/faq",draft:!1,editUrl:"https://github.com/typegoose/mongodb-memory-server/edit/master/docs/../docs/guides/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions"},sidebar:"guides",previous:{title:"Quick Start Guide",permalink:"/mongodb-memory-server/versions/8.x/docs/guides/quick-start-guide"},next:{title:"Known Issues",permalink:"/mongodb-memory-server/versions/8.x/docs/guides/known-issues"}},c={},u=[{value:"Do binaries get automatically deleted?",id:"do-binaries-get-automatically-deleted",level:3},{value:"Why is there no documentation about class-options / interfaces in the documentation?",id:"why-is-there-no-documentation-about-class-options--interfaces-in-the-documentation",level:3},{value:"Do testing database paths get cleaned up?",id:"do-testing-database-paths-get-cleaned-up",level:3}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"do-binaries-get-automatically-deleted"},"Do binaries get automatically deleted?"),(0,o.kt)("p",null,"No, this package will ",(0,o.kt)("strong",{parentName:"p"},"not")," delete any binaries, so after an system / package upgrade the binaries may have to be cleaned manually."),(0,o.kt)("h3",{id:"why-is-there-no-documentation-about-class-options--interfaces-in-the-documentation"},"Why is there no documentation about class-options / interfaces in the documentation?"),(0,o.kt)("p",null,"It is currently recommended to directly look at the TSDoc for these properties to get their type & documentation."),(0,o.kt)("h3",{id:"do-testing-database-paths-get-cleaned-up"},"Do testing database paths get cleaned up?"),(0,o.kt)("p",null,"If the Database-path is a temporary directory (generated with ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdtemp"),"), then it will automatically get cleaned-up when calling ",(0,o.kt)("inlineCode",{parentName:"p"},".stop()"),", this can be disabled with ",(0,o.kt)("inlineCode",{parentName:"p"},".stop(false)"),".",(0,o.kt)("br",{parentName:"p"}),"\n","If the Database-path is manually set with ",(0,o.kt)("inlineCode",{parentName:"p"},"dbPath"),", then it needs to be manually cleaned-up with ",(0,o.kt)("inlineCode",{parentName:"p"},".cleanup(true)"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"8.4.0")," objects can also be used instead of just booleans for parameter in ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/8.x/docs/api/classes/mongo-memory-server#stop"},(0,o.kt)("inlineCode",{parentName:"a"},"stop"))," and ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/8.x/docs/api/classes/mongo-memory-server#cleanup"},(0,o.kt)("inlineCode",{parentName:"a"},"cleanup"))," (the same applies to ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoMemoryReplSet"),").  "),(0,o.kt)("p",{parentName:"admonition"},"For Example ",(0,o.kt)("inlineCode",{parentName:"p"},".stop({ doCleanup: false })")," can be used instead of ",(0,o.kt)("inlineCode",{parentName:"p"},".stop(false)"),".")))}f.isMDXComponent=!0}}]);