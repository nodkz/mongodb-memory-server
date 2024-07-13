"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[686],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(t),u=a,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},358:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"mongo-memory-instance-replicamemberconfig",title:"ReplicaMemberConfig"},p=void 0,m={unversionedId:"api/interfaces/mongo-memory-instance-replicamemberconfig",id:"api/interfaces/mongo-memory-instance-replicamemberconfig",title:"ReplicaMemberConfig",description:"API Documentation of ReplicaMemberConfig-Interface",source:"@site/../docs/api/interfaces/mongo-memory-instance-replicamemberconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/mongo-memory-instance-replicamemberconfig",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-replicamemberconfig",draft:!1,editUrl:"https://github.com/typegoose/mongodb-memory-server/edit/master/docs/../docs/api/interfaces/mongo-memory-instance-replicamemberconfig.md",tags:[],version:"current",frontMatter:{id:"mongo-memory-instance-replicamemberconfig",title:"ReplicaMemberConfig"},sidebar:"api",previous:{title:"MongoMemoryInstanceOpts",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-instance-opts"},next:{title:"MongoBinaryOpts",permalink:"/mongodb-memory-server/docs/api/interfaces/mongo-memory-binary-opts"}},s={},c=[{value:"Values",id:"values",level:2},{value:"arbiterOnly",id:"arbiteronly",level:3},{value:"buildIndexes",id:"buildindexes",level:3},{value:"hidden",id:"hidden",level:3},{value:"priority",id:"priority",level:3},{value:"tags",id:"tags",level:3},{value:"slaveDelay",id:"slavedelay",level:3},{value:"secondaryDelaySecs",id:"secondarydelaysecs",level:3},{value:"votes",id:"votes",level:3}],d={toc:c},u="wrapper";function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"API Documentation of ",(0,o.kt)("inlineCode",{parentName:"p"},"ReplicaMemberConfig"),"-Interface"),(0,o.kt)("h2",{id:"values"},"Values"),(0,o.kt)("h3",{id:"arbiteronly"},"arbiterOnly"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"arbiterOnly?: boolean"),(0,o.kt)("br",{parentName:"p"}),"\n","Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("p",null,"Set a member to be a arbiter, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/core/replica-set-arbiter/"},"MongoDB ReplSet Arbiter")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/tutorial/add-replica-set-arbiter/"},"MongoDB add an Arbiter to the ReplSet"),"."),(0,o.kt)("h3",{id:"buildindexes"},"buildIndexes"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"buildIndexes?: boolean"),(0,o.kt)("br",{parentName:"p"}),"\n","Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("p",null,"Set whether to automatically build indexes."),(0,o.kt)("h3",{id:"hidden"},"hidden"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"hidden?: boolean"),(0,o.kt)("br",{parentName:"p"}),"\n","Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("p",null,"Set a the instance to not show up in the command ",(0,o.kt)("inlineCode",{parentName:"p"},"hello"),"."),(0,o.kt)("h3",{id:"priority"},"priority"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"priority?: number"),(0,o.kt)("br",{parentName:"p"}),"\n","Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"1")),(0,o.kt)("p",null,"Set the priority in becoming a Primary. Higher is more likely. ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," is only for arbiters."),(0,o.kt)("h3",{id:"tags"},"tags"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"tags?: any"),(0,o.kt)("br",{parentName:"p"}),"\n","Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null")),(0,o.kt)("p",null,"Set custom tags for a member, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/tutorial/configure-replica-set-tag-sets/"},"MongoDB ReplSet tags"),"."),(0,o.kt)("h3",{id:"slavedelay"},"slaveDelay"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"slaveDelay?: number"),(0,o.kt)("br",{parentName:"p"}),"\n","Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"0")),(0,o.kt)("p",null,"Set how long behind the secondary members should be behind the primary, for more see ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/v4.2/tutorial/configure-a-delayed-replica-set-member/"},"MongoDB 4.x Configure a Delayed Replica Set Member"),".",(0,o.kt)("br",{parentName:"p"}),"\n","This option is only for MongoDB ",(0,o.kt)("inlineCode",{parentName:"p"},"4.x"),", for ",(0,o.kt)("inlineCode",{parentName:"p"},"5.0")," or higher use ",(0,o.kt)("a",{parentName:"p",href:"#secondarydelaysecs"},(0,o.kt)("inlineCode",{parentName:"a"},"secondaryDelaySecs")),"."),(0,o.kt)("h3",{id:"secondarydelaysecs"},"secondaryDelaySecs"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"secondaryDelaySecs?: number"),(0,o.kt)("br",{parentName:"p"}),"\n","Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"0")),(0,o.kt)("p",null,"Set how long behind the secondary members should be behind the primary, for more see ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/tutorial/configure-a-delayed-replica-set-member/"},"MongoDB Configure a Delayed Replica Set Member"),".",(0,o.kt)("br",{parentName:"p"}),"\n","This option is a for MongoDB ",(0,o.kt)("inlineCode",{parentName:"p"},"5.0")," or higher."),(0,o.kt)("h3",{id:"votes"},"votes"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"votes?: number"),(0,o.kt)("br",{parentName:"p"}),"\n","Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"1")),(0,o.kt)("p",null,"Set how many votes this member has for electing a primary. Arbiters only have a static vote of ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."))}f.isMDXComponent=!0}}]);