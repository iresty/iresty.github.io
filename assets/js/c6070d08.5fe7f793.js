(self.webpackChunk=self.webpackChunk||[]).push([[7780],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97723:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l={title:"node-status"},o={unversionedId:"plugins/node-status",id:"version-2.5/plugins/node-status",isDocsHomePage:!1,title:"node-status",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.5/plugins/node-status.md",sourceDirName:"plugins",slug:"/plugins/node-status",permalink:"/docs/apisix/2.5/plugins/node-status",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/node-status.md",version:"2.5",frontMatter:{title:"node-status"},sidebar:"version-2.5/docs",previous:{title:"skywalking",permalink:"/docs/apisix/2.5/plugins/skywalking"},next:{title:"http-logger",permalink:"/docs/apisix/2.5/plugins/http-logger"}},u=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},(0,i.kt)("strong",{parentName:"a"},"Attributes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#api"},(0,i.kt)("strong",{parentName:"a"},"API"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,i.kt)("strong",{parentName:"a"},"How To Enable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},(0,i.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,i.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"node-status")," is a plugin which we could get request status information through it's API."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,"None"),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"This plugin will add ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/status")," to get status information.\nYou may need to use ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.5/plugin-interceptors"},"interceptors")," to protect it."),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"node-status")," in the plugin list of the configuration file ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/config.yaml"),",\nthen you can add this plugin in any route.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - node-status\n  - jwt-auth\n  - zipkin\n  ......\n")),(0,i.kt)("p",null,"After starting ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX"),", you can get status information through the API ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/status"),"."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a route object, and enable plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"node-status"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/route1",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "192.168.1.100:80:": 1\n        }\n    },\n    "plugins": {\n        "node-status":{}\n    }\n}\'\n')),(0,i.kt)("p",null,"You have to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"node-status")," in the configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix/conf/config.yaml")," before creating a route like this.\nAnd this plugin will not make any difference in future requests, so usually we don't set this plugin when creating routes."),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Request with uri ",(0,i.kt)("inlineCode",{parentName:"li"},"/apisix/status"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl localhost:9080/apisix/status -i\nHTTP/1.1 200 OK\nDate: Tue, 03 Nov 2020 11:12:55 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"status":{"total":"23","waiting":"0","accepted":"22","writing":"1","handled":"22","active":"1","reading":"0"},"id":"6790a064-8f61-44ba-a6d3-5df42f2b1bb3"}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Parameter Description")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status"),(0,i.kt)("td",{parentName:"tr",align:null},"status information")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"total"),(0,i.kt)("td",{parentName:"tr",align:null},"the total number of client requests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"waiting"),(0,i.kt)("td",{parentName:"tr",align:null},"the current number of idle client connections waiting for a request")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accepted"),(0,i.kt)("td",{parentName:"tr",align:null},"the total number of accepted client connections")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"writing"),(0,i.kt)("td",{parentName:"tr",align:null},"the current number of connections where APISIX is writing the response back to the client")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"handled"),(0,i.kt)("td",{parentName:"tr",align:null},"the total number of handled connections. Generally, the parameter value is the same as accepted unless some resource limits have been reached")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"active"),(0,i.kt)("td",{parentName:"tr",align:null},"the current number of active client connections including waiting connections")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"reading"),(0,i.kt)("td",{parentName:"tr",align:null},"the current number of connections where APISIX is reading the request header")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"APISIX's uid which is saved in apisix/conf/apisix.uid")))),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can delete ",(0,i.kt)("inlineCode",{parentName:"li"},"node-status")," in the plugin list of the configuration file ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix/conf/config.yaml"),",\nthen you can not add this plugin in any route.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - jwt-auth\n  - zipkin\n  ......\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"li"},"node-status")," plugin in the route, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/route1",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "192.168.1.100:80": 1\n        }\n    },\n    "plugins": {}\n}\'\n')))}p.isMDXComponent=!0}}]);