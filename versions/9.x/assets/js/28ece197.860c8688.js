"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[898],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8494:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"mongo-memory-server",title:"MongoMemoryServer"},p=void 0,l={unversionedId:"api/classes/mongo-memory-server",id:"api/classes/mongo-memory-server",title:"MongoMemoryServer",description:"API Documentation of MongoMemoryServer-Class",source:"@site/../docs/api/classes/mongo-memory-server.md",sourceDirName:"api/classes",slug:"/api/classes/mongo-memory-server",permalink:"/mongodb-memory-server/versions/9.x/docs/api/classes/mongo-memory-server",draft:!1,editUrl:"https://github.com/typegoose/mongodb-memory-server/edit/master/docs/../docs/api/classes/mongo-memory-server.md",tags:[],version:"current",frontMatter:{id:"mongo-memory-server",title:"MongoMemoryServer"},sidebar:"api",previous:{title:"Config Options",permalink:"/mongodb-memory-server/versions/9.x/docs/api/config-options"},next:{title:"MongoMemoryReplSet",permalink:"/mongodb-memory-server/versions/9.x/docs/api/classes/mongo-memory-replset"}},m={},u=[{value:"Functions",id:"functions",level:2},{value:"new",id:"new",level:3},{value:"create",id:"create",level:3},{value:"stateChange",id:"statechange",level:3},{value:"start",id:"start",level:3},{value:"getNewPort",id:"getnewport",level:3},{value:"getStartOptions",id:"getstartoptions",level:3},{value:"_startUpInstance",id:"_startupinstance",level:3},{value:"stop",id:"stop",level:3},{value:"cleanup",id:"cleanup",level:3},{value:"ensureInstance",id:"ensureinstance",level:3},{value:"getUri",id:"geturi",level:3},{value:"createAuth",id:"createauth",level:3},{value:"Values",id:"values",level:2},{value:"instanceInfo",id:"instanceinfo",level:3},{value:"_instanceInfo",id:"_instanceinfo",level:3},{value:"opts",id:"opts",level:3},{value:"state",id:"state",level:3},{value:"_state",id:"_state",level:3},{value:"auth",id:"auth",level:3}],c={toc:u},d="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"API Documentation of ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoMemoryServer"),"-Class"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"new"},"new"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor(opts?: MongoMemoryServerOpts)")),(0,o.kt)("p",null,"Create an new Instance without starting it, uses ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/9.x/docs/api/interfaces/mongo-memory-server-opts"},(0,o.kt)("inlineCode",{parentName:"a"},"MongoMemoryServerOpts")),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When directly starting the instance, ",(0,o.kt)("a",{parentName:"p",href:"#create"},(0,o.kt)("inlineCode",{parentName:"a"},"create"))," should be used")),(0,o.kt)("h3",{id:"create"},"create"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"static async create(opts?: MongoMemoryServerOpts): Promise<MongoMemoryServer>")),(0,o.kt)("p",null,"Create an new Instance and start it (while being an Promise), uses ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/9.x/docs/api/interfaces/mongo-memory-server-opts"},(0,o.kt)("inlineCode",{parentName:"a"},"MongoMemoryServerOpts")),"."),(0,o.kt)("h3",{id:"statechange"},"stateChange"),(0,o.kt)("span",{class:"badge badge--warning"},"Internal"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"protected stateChange(newState: MongoMemoryServerStates): void")),(0,o.kt)("p",null,"Used to change the state of the class, uses ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/9.x/docs/api/enums/mongo-memory-server-states"},(0,o.kt)("inlineCode",{parentName:"a"},"MongoMemoryServerStates")," enum"),", it is ",(0,o.kt)("inlineCode",{parentName:"p"},"protected")," to not accidentally use it."),(0,o.kt)("h3",{id:"start"},"start"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"async start(forceSamePort: boolean = false): Promise<boolean>")),(0,o.kt)("p",null,"Used to start an new Instance or to Re-Start an stopped instance"),(0,o.kt)("p",null,"with ",(0,o.kt)("inlineCode",{parentName:"p"},"forceSamePort")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and having ",(0,o.kt)("inlineCode",{parentName:"p"},"instance.port")," set, it will use that port and not generate a new port.",(0,o.kt)("br",{parentName:"p"}),"\n","with ",(0,o.kt)("inlineCode",{parentName:"p"},"forceSamePort")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and not having ",(0,o.kt)("inlineCode",{parentName:"p"},"instance.port")," set, it will generate a new free port.  "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Will Error if instance is already running")),(0,o.kt)("h3",{id:"getnewport"},"getNewPort"),(0,o.kt)("span",{class:"badge badge--warning"},"Internal"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"protected async getNewPort(port?: number): Promise<number>")),(0,o.kt)("p",null,"Finds an new non-locked port, uses ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," if available or as a starting point."),(0,o.kt)("h3",{id:"getstartoptions"},"getStartOptions"),(0,o.kt)("span",{class:"badge badge--warning"},"Internal"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"protected async getStartOptions(forceSamePort: boolean = false): Promise<MongoMemoryServerGetStartOptions>")),(0,o.kt)("p",null,"with ",(0,o.kt)("inlineCode",{parentName:"p"},"forceSamePort")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and having ",(0,o.kt)("inlineCode",{parentName:"p"},"instance.port")," set, it will use that port and not generate a new port.",(0,o.kt)("br",{parentName:"p"}),"\n","with ",(0,o.kt)("inlineCode",{parentName:"p"},"forceSamePort")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and not having ",(0,o.kt)("inlineCode",{parentName:"p"},"instance.port")," set, it will generate a new free port.  "),(0,o.kt)("p",null,"Constructs the Starting Options"),(0,o.kt)("h3",{id:"_startupinstance"},"_startUpInstance"),(0,o.kt)("span",{class:"badge badge--warning"},"Internal"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"async _startUpInstance(forceSamePort: boolean = false): Promise<void>")),(0,o.kt)("p",null,"Internal Functions used by ",(0,o.kt)("a",{parentName:"p",href:"#start"},(0,o.kt)("inlineCode",{parentName:"a"},"start"))),(0,o.kt)("h3",{id:"stop"},"stop"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"async stop(cleanupOptions?: Cleanup): Promise<boolean>")),(0,o.kt)("p",null,"Stop an running instance, this function will by default call ",(0,o.kt)("a",{parentName:"p",href:"#cleanup"},(0,o.kt)("inlineCode",{parentName:"a"},".cleanup"))," with ",(0,o.kt)("inlineCode",{parentName:"p"},"{ doCleanup: true, force: false }"),"."),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanupOptions")," options for cleanup can be manually set."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Will not Error if instance is not running")),(0,o.kt)("h3",{id:"cleanup"},"cleanup"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"async cleanup(options?: Cleanup): Promise<void>")),(0,o.kt)("p",null,"Cleanup all files used by this instance, by default ",(0,o.kt)("inlineCode",{parentName:"p"},"{ doCleanup: true, force: false }")," is used."),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," can be set how to run a cleanup."),(0,o.kt)("h3",{id:"ensureinstance"},"ensureInstance"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"async ensureInstance(): Promise<MongoInstanceData>")),(0,o.kt)("p",null,"Ensure that the instance is running, will run ",(0,o.kt)("a",{parentName:"p",href:"#start"},(0,o.kt)("inlineCode",{parentName:"a"},"start"))," if stopped, will wait if state is ",(0,o.kt)("inlineCode",{parentName:"p"},"starting"),"."),(0,o.kt)("p",null,"It is recommended to ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," the promise returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," when available."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Will Error if instance cannot be started")),(0,o.kt)("h3",{id:"geturi"},"getUri"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"getUri(otherDbName?: string, otherIp?: string): string")),(0,o.kt)("p",null,"Get an mongodb-usable uri (can also be used in mongoose)"),(0,o.kt)("p",null,"When no arguments are set, the URI will always use ip ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and end with ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," (not setting a database).",(0,o.kt)("br",{parentName:"p"}),"\n","When setting ",(0,o.kt)("inlineCode",{parentName:"p"},"otherDbName"),", the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"otherDbName")," will be appended after ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," and before any query arguments.",(0,o.kt)("br",{parentName:"p"}),"\n","When setting ",(0,o.kt)("inlineCode",{parentName:"p"},"otherIp"),", the ip will be the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"otherIp")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,o.kt)("h3",{id:"createauth"},"createAuth"),(0,o.kt)("span",{class:"badge badge--warning"},"Internal"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"async createAuth(data: StartupInstanceData): Promise<void>")),(0,o.kt)("p",null,"Logs in into the currently running instance and restarts it with auth enabled"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Instance will not be restarted if the storage engine is ",(0,o.kt)("inlineCode",{parentName:"p"},"ephemeralForTest")," because data will not persist across restarts",(0,o.kt)("br",null),"\nIt is still usefull if an user is always required in connection logic and mongodb throws an error that an user does not exists / cannot login")),(0,o.kt)("h2",{id:"values"},"Values"),(0,o.kt)("h3",{id:"instanceinfo"},"instanceInfo"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"get instanceInfo(): MongoInstanceData | undefined")),(0,o.kt)("p",null,"Getter for ",(0,o.kt)("a",{parentName:"p",href:"#_instanceInfo"},(0,o.kt)("inlineCode",{parentName:"a"},"_instanceInfo"))),(0,o.kt)("h3",{id:"_instanceinfo"},"_instanceInfo"),(0,o.kt)("span",{class:"badge badge--warning"},"Internal"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"protected _instanceInfo?: MongoInstanceData")),(0,o.kt)("p",null,"Stores the instance information"),(0,o.kt)("h3",{id:"opts"},"opts"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"opts: MongoMemoryServerOpts")),(0,o.kt)("p",null,"Store the instance options, uses ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/9.x/docs/api/interfaces/mongo-memory-server-opts"},(0,o.kt)("inlineCode",{parentName:"a"},"MongoMemoryServerOpts")),"."),(0,o.kt)("h3",{id:"state"},"state"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"get state(): MongoMemoryServerStates")),(0,o.kt)("p",null,"Getter for ",(0,o.kt)("a",{parentName:"p",href:"#_state"},(0,o.kt)("inlineCode",{parentName:"a"},"_state_"))),(0,o.kt)("h3",{id:"_state"},"_state"),(0,o.kt)("span",{class:"badge badge--warning"},"Internal"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"protected _state: MongoMemoryServerStates")),(0,o.kt)("p",null,"Stores the current State, uses ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/9.x/docs/api/enums/mongo-memory-server-states"},(0,o.kt)("inlineCode",{parentName:"a"},"MongoMemoryServerStates")," enum"),"."),(0,o.kt)("h3",{id:"auth"},"auth"),(0,o.kt)("p",null,"Typings: ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly auth?: Required<AutomaticAuth>")),(0,o.kt)("p",null,"Stores automatic auth creation options, uses ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/9.x/docs/api/interfaces/mongo-memory-server-automaticauth"},(0,o.kt)("inlineCode",{parentName:"a"},"AutomaticAuth"))," with all values defined."))}g.isMDXComponent=!0}}]);