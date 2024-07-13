"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[176],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8986:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"mongo-memory-replset",title:"MongoMemoryReplSet"},p=void 0,s={unversionedId:"api/classes/mongo-memory-replset",id:"api/classes/mongo-memory-replset",title:"MongoMemoryReplSet",description:"API Documentation of MongoMemoryReplSet-Class",source:"@site/../docs/api/classes/mongo-memory-replset.md",sourceDirName:"api/classes",slug:"/api/classes/mongo-memory-replset",permalink:"/mongodb-memory-server/versions/beta/docs/api/classes/mongo-memory-replset",draft:!1,editUrl:"https://github.com/typegoose/mongodb-memory-server/edit/master/docs/../docs/api/classes/mongo-memory-replset.md",tags:[],version:"current",frontMatter:{id:"mongo-memory-replset",title:"MongoMemoryReplSet"},sidebar:"api",previous:{title:"MongoMemoryServer",permalink:"/mongodb-memory-server/versions/beta/docs/api/classes/mongo-memory-server"},next:{title:"MongoInstance",permalink:"/mongodb-memory-server/versions/beta/docs/api/classes/mongo-instance"}},d={},m=[{value:"Functions",id:"functions",level:2},{value:"new",id:"new",level:3},{value:"create",id:"create",level:3},{value:"stateChange",id:"statechange",level:3},{value:"getInstanceOpts",id:"getinstanceopts",level:3},{value:"getUri",id:"geturi",level:3},{value:"start",id:"start",level:3},{value:"initAllServers",id:"initallservers",level:3},{value:"ensureKeyFile",id:"ensurekeyfile",level:3},{value:"stop",id:"stop",level:3},{value:"cleanup",id:"cleanup",level:3},{value:"waitUntilRunning",id:"waituntilrunning",level:3},{value:"_initReplSet",id:"_initreplset",level:3},{value:"_initServer",id:"_initserver",level:3},{value:"_waitForPrimary",id:"_waitforprimary",level:3},{value:"Values",id:"values",level:2},{value:"servers",id:"servers",level:3},{value:"instanceOpts",id:"instanceopts",level:3},{value:"_instanceOpts",id:"_instanceopts",level:3},{value:"binaryOpts",id:"binaryopts",level:3},{value:"_binaryOpts",id:"_binaryopts",level:3},{value:"replSetOpts",id:"replsetopts",level:3},{value:"_replSetOpts",id:"_replsetopts",level:3},{value:"_keyfiletmp",id:"_keyfiletmp",level:3},{value:"state",id:"state",level:3},{value:"_state",id:"_state",level:3},{value:"_ranCreateAuth",id:"_rancreateauth",level:3}],u={toc:m},c="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API Documentation of ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoMemoryReplSet"),"-Class"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"new"},"new"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor(opts: Partial<MongoMemoryReplSetOpts> = {})")),(0,i.kt)("p",null,"Create an new ReplSet without starting it"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When directly starting the replset, ",(0,i.kt)("a",{parentName:"p",href:"#create"},(0,i.kt)("inlineCode",{parentName:"a"},"create"))," should be used")),(0,i.kt)("h3",{id:"create"},"create"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"static async create(opts?: Partial<MongoMemoryReplSetOpts>): Promise<MongoMemoryReplSet>")),(0,i.kt)("p",null,"Create an new ReplSet and start it (while being an Promise)"),(0,i.kt)("h3",{id:"statechange"},"stateChange"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected stateChange(newState: MongoMemoryReplSetStates, ...args: any[]): void")),(0,i.kt)("p",null,"Used to change the state of the class, uses ",(0,i.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/beta/docs/api/enums/mongo-memory-replset-states"},(0,i.kt)("inlineCode",{parentName:"a"},"MongoMemoryReplSetStates")," enum"),", it is ",(0,i.kt)("inlineCode",{parentName:"p"},"protected")," to not accidentally use it"),(0,i.kt)("h3",{id:"getinstanceopts"},"getInstanceOpts"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected getInstanceOpts(baseOpts: MongoMemoryInstancePropBase = {}): MongoMemoryInstanceProp")),(0,i.kt)("p",null,"Constructs the options used for an instance"),(0,i.kt)("h3",{id:"geturi"},"getUri"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"getUri(otherDb?: string): string")),(0,i.kt)("p",null,"Get an mongodb-usable uri (can also be used in mongoose)"),(0,i.kt)("p",null,"When no arguments are set, the URI will always use ip ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and end with ",(0,i.kt)("inlineCode",{parentName:"p"},"/?replicaSet=ReplSetName")," (not setting a database).",(0,i.kt)("br",{parentName:"p"}),"\n","When setting ",(0,i.kt)("inlineCode",{parentName:"p"},"otherDbName"),", the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"otherDbName")," will be appended after ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," and before any query arguments.",(0,i.kt)("br",{parentName:"p"}),"\n","When setting ",(0,i.kt)("inlineCode",{parentName:"p"},"otherIp"),", the ip will be the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"otherIp")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," (for all instances)."),(0,i.kt)("h3",{id:"start"},"start"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"async start(): Promise<void>")),(0,i.kt)("p",null,"Used to start an new ReplSet or to Re-Start an stopped ReplSet"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Will Error if ReplSet is already running")),(0,i.kt)("h3",{id:"initallservers"},"initAllServers"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected async initAllServers(): Promise<void>")),(0,i.kt)("p",null,"Used by ",(0,i.kt)("a",{parentName:"p",href:"#start"},(0,i.kt)("inlineCode",{parentName:"a"},"start"))," and to restart without fully running everything again"),(0,i.kt)("h3",{id:"ensurekeyfile"},"ensureKeyFile"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected async ensureKeyFile(): Promise<string>")),(0,i.kt)("p",null,"Ensures and returns that ",(0,i.kt)("a",{parentName:"p",href:"#_keyfiletmp"},(0,i.kt)("inlineCode",{parentName:"a"},"_keyfiletmp"))," is defined an exists and also that the keyfile is created"),(0,i.kt)("h3",{id:"stop"},"stop"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"async stop(cleanupOptions?: Cleanup): Promise<boolean>")),(0,i.kt)("p",null,"Stop an running instance, this function will by default call ",(0,i.kt)("a",{parentName:"p",href:"#cleanup"},(0,i.kt)("inlineCode",{parentName:"a"},".cleanup"))," with ",(0,i.kt)("inlineCode",{parentName:"p"},"{ doCleanup: true, force: false }"),"."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"cleanupOptions")," options for cleanup can be manually set."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Will not Error if instance is not running")),(0,i.kt)("h3",{id:"cleanup"},"cleanup"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"async cleanup(options?: Cleanup): Promise<void>")),(0,i.kt)("p",null,"Cleanup all files used by this ReplSet's instances, by default ",(0,i.kt)("inlineCode",{parentName:"p"},"{ doCleanup: true, force: false }")," is used."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," can be set how to run a cleanup."),(0,i.kt)("h3",{id:"waituntilrunning"},"waitUntilRunning"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"async waitUntilRunning(): Promise<void>")),(0,i.kt)("p",null,"Wait until all instances are running."),(0,i.kt)("p",null,"It is recommended to ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," the promise returned from ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," when available."),(0,i.kt)("p",null,"Does not start the replset instance if not already starting (unlike ",(0,i.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/beta/docs/api/classes/mongo-memory-server#ensureinstance"},(0,i.kt)("inlineCode",{parentName:"a"},"ensureInstance")),")."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Will Error if state is not ",(0,i.kt)("inlineCode",{parentName:"p"},"running")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"init"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Will ",(0,i.kt)("strong",{parentName:"p"},"not")," Error if a error is encountered while waiting.")),(0,i.kt)("h3",{id:"_initreplset"},"_initReplSet"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected async _initReplSet(): Promise<void>")),(0,i.kt)("p",null,"This is used to connect to the first server and initiate the ReplSet with an command",(0,i.kt)("br",null),"\nAlso enables ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")),(0,i.kt)("h3",{id:"_initserver"},"_initServer"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected _initServer(instanceOpts: MongoMemoryInstanceProp): MongoMemoryServer")),(0,i.kt)("p",null,"Creates an new ",(0,i.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/beta/docs/api/classes/mongo-memory-server"},(0,i.kt)("inlineCode",{parentName:"a"},"instance"))," for the ReplSet"),(0,i.kt)("h3",{id:"_waitforprimary"},"_waitForPrimary"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected async _waitForPrimary(timeout: number = 1000 * 30, where?: string): Promise<void>")),(0,i.kt)("p",null,"Wait until the ReplSet has elected an Primary, the ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," string will be added to the error if the timeout is reached"),(0,i.kt)("h2",{id:"values"},"Values"),(0,i.kt)("h3",{id:"servers"},"servers"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"servers: MongoMemoryServer[]")),(0,i.kt)("p",null,"Stores all the servers of this ReplSet"),(0,i.kt)("h3",{id:"instanceopts"},"instanceOpts"),(0,i.kt)("p",null,"Typings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get instanceOpts(): MongoMemoryInstancePropBase[]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set instanceOpts(val: MongoMemoryInstancePropBase[])"))),(0,i.kt)("p",null,"Getter & Setter for ",(0,i.kt)("a",{parentName:"p",href:"#_instanceopts"},(0,i.kt)("inlineCode",{parentName:"a"},"_instanceOpts"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Will Throw an Error if ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," is not ",(0,i.kt)("inlineCode",{parentName:"p"},"stopped"))),(0,i.kt)("h3",{id:"_instanceopts"},"_instanceOpts"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected _instanceOpts!: MongoMemoryInstancePropBase[]")),(0,i.kt)("p",null,"Stores Options used for an instance"),(0,i.kt)("h3",{id:"binaryopts"},"binaryOpts"),(0,i.kt)("p",null,"Typings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get binaryOpts(): MongoBinaryOpts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set binaryOpts(val: MongoBinaryOpts)"))),(0,i.kt)("p",null,"Getter & Setter for ",(0,i.kt)("a",{parentName:"p",href:"#_binaryopts"},(0,i.kt)("inlineCode",{parentName:"a"},"_binaryOpts"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Will Throw an Error if ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," is not ",(0,i.kt)("inlineCode",{parentName:"p"},"stopped"))),(0,i.kt)("h3",{id:"_binaryopts"},"_binaryOpts"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected _binaryOpts!: MongoBinaryOpts")),(0,i.kt)("p",null,"Stores the options used for the binary"),(0,i.kt)("h3",{id:"replsetopts"},"replSetOpts"),(0,i.kt)("p",null,"Typings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get replSetOpts(): ReplSetOpts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set replSetOpts(val: ReplSetOpts)"))),(0,i.kt)("p",null,"Getter & Setter for ",(0,i.kt)("a",{parentName:"p",href:"#_replsetopts"},(0,i.kt)("inlineCode",{parentName:"a"},"_replSetOpts"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Will Throw an Error if ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," is not ",(0,i.kt)("inlineCode",{parentName:"p"},"stopped"))),(0,i.kt)("h3",{id:"_replsetopts"},"_replSetOpts"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected _replSetOpts!: Required<ReplSetOpts>")),(0,i.kt)("p",null,"Stores the options used for the ReplSet Initiation, uses ",(0,i.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/beta/docs/api/interfaces/replset-opts"},(0,i.kt)("inlineCode",{parentName:"a"},"ReplSetOpts")),"."),(0,i.kt)("h3",{id:"_keyfiletmp"},"_keyfiletmp"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected _keyfiletmp?: string")),(0,i.kt)("p",null,"Stores the path of the created temporary directory for the keyfile location"),(0,i.kt)("h3",{id:"state"},"state"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"get state(): MongoMemoryReplSetStates")),(0,i.kt)("p",null,"Getter for ",(0,i.kt)("a",{parentName:"p",href:"#_state"},(0,i.kt)("inlineCode",{parentName:"a"},"_state"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Will Throw an Error if ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," is not ",(0,i.kt)("inlineCode",{parentName:"p"},"stopped"))),(0,i.kt)("h3",{id:"_state"},"_state"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected _state: MongoMemoryReplSetStates")),(0,i.kt)("p",null,"Stores the current State, uses ",(0,i.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/beta/docs/api/enums/mongo-memory-replset-states"},(0,i.kt)("inlineCode",{parentName:"a"},"MongoMemoryReplSetStates")," enum"),"."),(0,i.kt)("h3",{id:"_rancreateauth"},"_ranCreateAuth"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected _ranCreateAuth: boolean")),(0,i.kt)("p",null,"Stores if the auth creation has already ran"))}k.isMDXComponent=!0}}]);