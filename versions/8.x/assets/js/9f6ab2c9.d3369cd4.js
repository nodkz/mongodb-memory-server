"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[848],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=o.createContext({}),l=function(e){var r=o.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=l(e.components);return o.createElement(d.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},g=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),g=t,p=m["".concat(d,".").concat(g)]||m[g]||c[g]||i;return n?o.createElement(p,a(a({ref:r},u),{},{components:n})):o.createElement(p,a({ref:r},u))}));function p(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s[m]="string"==typeof e?e:t,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2219:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var o=n(7462),t=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"migrate8",title:"Migrate to version 8.0.0"},d=void 0,l={unversionedId:"guides/migration/migrate8",id:"guides/migration/migrate8",title:"Migrate to version 8.0.0",description:"Here are the Important changes made for 8.0.0",source:"@site/../docs/guides/migration/migrate8.md",sourceDirName:"guides/migration",slug:"/guides/migration/migrate8",permalink:"/mongodb-memory-server/versions/8.x/docs/guides/migration/migrate8",draft:!1,editUrl:"https://github.com/typegoose/mongodb-memory-server/edit/master/docs/../docs/guides/migration/migrate8.md",tags:[],version:"current",frontMatter:{id:"migrate8",title:"Migrate to version 8.0.0"},sidebar:"guides",previous:{title:"Common Issues",permalink:"/mongodb-memory-server/versions/8.x/docs/guides/common-issues"},next:{title:"Migrate to version 7.0.0",permalink:"/mongodb-memory-server/versions/8.x/docs/guides/migration/migrate7"}},u={},m=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Default MongoDB Server version upgraded to 5.0.3",id:"default-mongodb-server-version-upgraded-to-503",level:3},{value:"Mongodb Driver Version upgraded to 4.x",id:"mongodb-driver-version-upgraded-to-4x",level:3},{value:"Non-Breaking changes / Additions",id:"non-breaking-changes--additions",level:2},{value:"Binary file name is now parsed from ARCHIVE_NAME and DOWNLOAD_URL",id:"binary-file-name-is-now-parsed-from-archive_name-and-download_url",level:3},{value:"A Error now gets thrown if Debian 10 (or higher) is used with mongodb version below 4.2.0",id:"a-error-now-gets-thrown-if-debian-10-or-higher-is-used-with-mongodb-version-below-420",level:3},{value:"<code>instance.auth</code> is no longer required to enable Authentication",id:"instanceauth-is-no-longer-required-to-enable-authentication",level:3},{value:"More Errors moved to Custom Error classes",id:"more-errors-moved-to-custom-error-classes",level:3}],c={toc:m},g="wrapper";function p(e){var r=e.components,n=(0,t.Z)(e,a);return(0,i.kt)(g,(0,o.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here are the Important changes made for 8.0.0"),(0,i.kt)("admonition",{title:"Important, Read this first",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This Guide is written for migration from version ",(0,i.kt)("inlineCode",{parentName:"p"},"7.6.0")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"8.0.0"),", for versions ",(0,i.kt)("inlineCode",{parentName:"p"},">8.0.0 <9.0.0"),", please consult the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/typegoose/mongodb-memory-server/blob/master/CHANGELOG.md"},"CHANGELOG"))),(0,i.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("h3",{id:"default-mongodb-server-version-upgraded-to-503"},"Default MongoDB Server version upgraded to 5.0.3"),(0,i.kt)("p",null,"The Default MongoDB Server version for 8.0 is ",(0,i.kt)("inlineCode",{parentName:"p"},"5.0.3"),", see ",(0,i.kt)("a",{parentName:"p",href:"/mongodb-memory-server/versions/8.x/docs/guides/mongodb-server-versions"},"MongoDB Server Versions"),"."),(0,i.kt)("h3",{id:"mongodb-driver-version-upgraded-to-4x"},"Mongodb Driver Version upgraded to 4.x"),(0,i.kt)("p",null,"The used MongoDB Driver version is now ",(0,i.kt)("inlineCode",{parentName:"p"},"4.1.2"),"."),(0,i.kt)("h2",{id:"non-breaking-changes--additions"},"Non-Breaking changes / Additions"),(0,i.kt)("h3",{id:"binary-file-name-is-now-parsed-from-archive_name-and-download_url"},"Binary file name is now parsed from ARCHIVE_NAME and DOWNLOAD_URL"),(0,i.kt)("p",null,"The Binary file name (like ",(0,i.kt)("inlineCode",{parentName:"p"},"mongod-x64-ubuntu-4.0.0"),") is now parsed from ",(0,i.kt)("a",{parentName:"p",href:"../../api/config-options#archive_name"},(0,i.kt)("inlineCode",{parentName:"a"},"ARCHIVE_NAME"))," and ",(0,i.kt)("a",{parentName:"p",href:"../../api/config-options#download_url"},(0,i.kt)("inlineCode",{parentName:"a"},"DOWNLOAD_URL")),"."),(0,i.kt)("h3",{id:"a-error-now-gets-thrown-if-debian-10-or-higher-is-used-with-mongodb-version-below-420"},"A Error now gets thrown if Debian 10 (or higher) is used with mongodb version below 4.2.0"),(0,i.kt)("p",null,"A Error now gets thrown, if Debian 10 (or higher) is used with a requested mongodb version of below 4.2.0, because there are no version available for Debian 10 below 4.2.0 and Debian 9 binaries are incompatible with Debian 10. (because of libcurl3)"),(0,i.kt)("h3",{id:"instanceauth-is-no-longer-required-to-enable-authentication"},(0,i.kt)("inlineCode",{parentName:"h3"},"instance.auth")," is no longer required to enable Authentication"),(0,i.kt)("p",null,"Option ",(0,i.kt)("inlineCode",{parentName:"p"},"instance.auth")," is now no longer required to be set to enable Authentication when ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," (top-level) is set."),(0,i.kt)("h3",{id:"more-errors-moved-to-custom-error-classes"},"More Errors moved to Custom Error classes"),(0,i.kt)("p",null,"More Errors have been moved to a custom Error class."))}p.isMDXComponent=!0}}]);