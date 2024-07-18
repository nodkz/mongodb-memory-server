"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[749],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),f=o,d=c["".concat(s,".").concat(f)]||c[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1765:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={id:"mongo-memory-replset-opts",title:"MongoMemoryReplSetOpts"},s=void 0,l={unversionedId:"api/interfaces/mongo-memory-replset-opts",id:"api/interfaces/mongo-memory-replset-opts",title:"MongoMemoryReplSetOpts",description:"API Documentation of MongoMemoryReplSetOpts-Interface",source:"@site/../docs/api/interfaces/mongo-memory-replset-opts.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/mongo-memory-replset-opts",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-replset-opts",draft:!1,editUrl:"https://github.com/typegoose/mongodb-memory-server/edit/master/docs/../docs/api/interfaces/mongo-memory-replset-opts.md",tags:[],version:"current",frontMatter:{id:"mongo-memory-replset-opts",title:"MongoMemoryReplSetOpts"},sidebar:"api",previous:{title:"MongoBinaryOpts",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-binary-opts"},next:{title:"DisposeOptions",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-dispose-opts"}},m={},c=[{value:"Values",id:"values",level:2},{value:"instanceOpts",id:"instanceopts",level:3},{value:"binary",id:"binary",level:3},{value:"replSet",id:"replset",level:3}],u={toc:c},f="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"API Documentation of ",(0,a.kt)("inlineCode",{parentName:"p"},"MongoMemoryReplSetOpts"),"-Interface"),(0,a.kt)("h2",{id:"values"},"Values"),(0,a.kt)("h3",{id:"instanceopts"},"instanceOpts"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"instanceOpts: MongoMemoryInstanceOptsBase[]"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")),(0,a.kt)("p",null,"Set ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-opts#values-for-mongomemoryinstanceoptsbase"},(0,a.kt)("inlineCode",{parentName:"a"},"MongoMemoryInstanceOptsBase"))," for a instance individually, overwrites existing options from ",(0,a.kt)("a",{parentName:"p",href:"#replset"},(0,a.kt)("inlineCode",{parentName:"a"},"replSet")),"."),(0,a.kt)("p",null,"The count of this array deducts from the ",(0,a.kt)("inlineCode",{parentName:"p"},"replSet.count"),", if more than ",(0,a.kt)("inlineCode",{parentName:"p"},"replSet.count")," are specified, the additional ones are also spawned."),(0,a.kt)("h3",{id:"binary"},"binary"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"binary: MongoBinaryOpts"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")),(0,a.kt)("p",null,"Set ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-binary-opts"},(0,a.kt)("inlineCode",{parentName:"a"},"MongoBinaryOpts"))," for the replset instances to use."),(0,a.kt)("h3",{id:"replset"},"replSet"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"replSet: ReplSetOpts"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")),(0,a.kt)("p",null,"Set ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/replset-opts"},(0,a.kt)("inlineCode",{parentName:"a"},"ReplSetOpts"))," for the whole ReplSet and default options for the instances to spawn with."))}d.isMDXComponent=!0}}]);