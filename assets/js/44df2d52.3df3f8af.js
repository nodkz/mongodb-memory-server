"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[118],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8230:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={id:"replset-opts",title:"ReplSetOpts"},s=void 0,l={unversionedId:"api/interfaces/replset-opts",id:"api/interfaces/replset-opts",title:"ReplSetOpts",description:"API Documentation of ReplSetOpts-Interface",source:"@site/../docs/api/interfaces/replset-opts.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/replset-opts",permalink:"/mongodb-memory-server/docs/api/interfaces/replset-opts",draft:!1,editUrl:"https://github.com/typegoose/mongodb-memory-server/edit/master/docs/../docs/api/interfaces/replset-opts.md",tags:[],version:"current",frontMatter:{id:"replset-opts",title:"ReplSetOpts"},sidebar:"api",previous:{title:"DisposeOptions",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-dispose-opts"}},m={},c=[{value:"Values",id:"values",level:2},{value:"auth",id:"auth",level:3},{value:"args",id:"args",level:3},{value:"dbName",id:"dbname",level:3},{value:"ip",id:"ip",level:3},{value:"name",id:"name",level:3},{value:"spawn",id:"spawn",level:3},{value:"storageEngine",id:"storageengine",level:3},{value:"configSettings",id:"configsettings",level:3},{value:"count",id:"count",level:3},{value:"dispose",id:"dispose",level:3}],u={toc:c},d="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"API Documentation of ",(0,a.kt)("inlineCode",{parentName:"p"},"ReplSetOpts"),"-Interface"),(0,a.kt)("h2",{id:"values"},"Values"),(0,a.kt)("h3",{id:"auth"},"auth"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"auth?: AutomaticAuth"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"{ enable: false }")),(0,a.kt)("p",null,"Set whether to enable Authentication, with configuration from ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-server-automaticauth"},(0,a.kt)("inlineCode",{parentName:"a"},"AutomaticAuth")),"."),(0,a.kt)("p",null,"Also see ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-opts#auth"},(0,a.kt)("inlineCode",{parentName:"a"},"MongoMemoryInstanceOpts.auth")),"."),(0,a.kt)("h3",{id:"args"},"args"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"args?: string[]"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")),(0,a.kt)("p",null,"Set custom arguments to passs to the ",(0,a.kt)("inlineCode",{parentName:"p"},"mongod")," binary."),(0,a.kt)("p",null,"Also see ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-opts#args"},(0,a.kt)("inlineCode",{parentName:"a"},"MongoMemoryInstanceOpts.args")),"."),(0,a.kt)("h3",{id:"dbname"},"dbName"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"dbName?: string"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},'""')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Currently unused"),"."),(0,a.kt)("p",null,"Set a custom dbname to use in ",(0,a.kt)("inlineCode",{parentName:"p"},"getUri"),"."),(0,a.kt)("p",null,"Also see ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-opts#dbname"},(0,a.kt)("inlineCode",{parentName:"a"},"MongoMemoryInstanceOpts.dbName")),"."),(0,a.kt)("h3",{id:"ip"},"ip"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"ip?: string"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},'"127.0.0.1"')),(0,a.kt)("p",null,"Set which ip to bind to."),(0,a.kt)("p",null,"Also see ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-opts#ip"},(0,a.kt)("inlineCode",{parentName:"a"},"MongoMemoryInstanceOpts.ip")),"."),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"name?: string"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},'"testset"')),(0,a.kt)("p",null,"Set which replset name to use."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-replication.replSetName"},"MongoDB ",(0,a.kt)("inlineCode",{parentName:"a"},"replication.replSetName"))),(0,a.kt)("h3",{id:"spawn"},"spawn"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"spawn?: SpawnOptions"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")),(0,a.kt)("p",null,"Set extra spawn options to pass to ",(0,a.kt)("inlineCode",{parentName:"p"},"childProcess.spawn"),"."),(0,a.kt)("p",null,"Also see ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-opts#spawn"},(0,a.kt)("inlineCode",{parentName:"a"},"MongoMemoryInstanceOpts.spawn")),"."),(0,a.kt)("h3",{id:"storageengine"},"storageEngine"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"storageEngine?: StorageEngine"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},'"ephemeralForTest"')," (unless mongodb version is ",(0,a.kt)("inlineCode",{parentName:"p"},"7.0.0"),", where its ",(0,a.kt)("inlineCode",{parentName:"p"},"wiredTiger"),")"),(0,a.kt)("p",null,"Set which Storage Engine to use, uses ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-opts#helper-type-storageengine"},(0,a.kt)("inlineCode",{parentName:"a"},"StorageEngine")),"."),(0,a.kt)("p",null,"Also see ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-opts#storageengine"},(0,a.kt)("inlineCode",{parentName:"a"},"MongoMemoryInstanceOpts.storageEngine")),"."),(0,a.kt)("h3",{id:"configsettings"},"configSettings"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"configSettings?: MongoMemoryReplSetConfigSettings"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")),(0,a.kt)("p",null,"Set custom ReplSet config options"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/replica-configuration/"},"MongoDB Replica Set Configuration"),"."),(0,a.kt)("h3",{id:"count"},"count"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"count?: number"),(0,a.kt)("br",{parentName:"p"}),"\n","Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("p",null,"Set how many ReplSet members to spawn, this number will be deducted from length of ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-replset-opts#instanceopts"},(0,a.kt)("inlineCode",{parentName:"a"},"instanceOpts"))," array."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It is recommended to set this number to a ",(0,a.kt)("strong",{parentName:"p"},"odd")," number, and try to never have it be ",(0,a.kt)("strong",{parentName:"p"},"even"),", see ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/v5.2/core/replica-set-architectures/#deploy-an-odd-number-of-members"},"MongoDB Deploy an Odd Number of Members"),".")),(0,a.kt)("h3",{id:"dispose"},"dispose"),(0,a.kt)("p",null,"Typings: ",(0,a.kt)("inlineCode",{parentName:"p"},"dispose?: DisposeOptions")),(0,a.kt)("p",null,"Set custom behavior for when ",(0,a.kt)("inlineCode",{parentName:"p"},"[Symbol.asyncDispose]")," is called, uses ",(0,a.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-dispose-opts"},(0,a.kt)("inlineCode",{parentName:"a"},"DisposeOptions")),"."))}g.isMDXComponent=!0}}]);