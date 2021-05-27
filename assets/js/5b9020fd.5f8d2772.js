(self.webpackChunk=self.webpackChunk||[]).push([[4388],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27253:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"gRPC Proxy"},l={unversionedId:"grpc-proxy",id:"grpc-proxy",isDocsHomePage:!1,title:"gRPC Proxy",description:"\x3c!--",source:"@site/docs/apisix/grpc-proxy.md",sourceDirName:".",slug:"/grpc-proxy",permalink:"/docs/apisix/next/grpc-proxy",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/grpc-proxy.md",version:"current",frontMatter:{title:"gRPC Proxy"},sidebar:"docs",previous:{title:"Stream Proxy",permalink:"/docs/apisix/next/stream-proxy"},next:{title:"Customize Nginx configuration",permalink:"/docs/apisix/next/customize-nginx-configuration"}},p=[{value:"Parameters",id:"parameters",children:[{value:"Example",id:"example",children:[]},{value:"gRPCS",id:"grpcs",children:[]}]}],s={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"proxying gRPC traffic:\ngRPC client -> APISIX -> gRPC/gRPCS server"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scheme"),": the ",(0,a.kt)("inlineCode",{parentName:"li"},"scheme")," of the route's upstream must be ",(0,a.kt)("inlineCode",{parentName:"li"},"grpc")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"grpcs"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uri"),": format likes /service/method, Example\uff1a/helloworld.Greeter/SayHello")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("h4",{id:"create-proxying-grpc-route"},"create proxying gRPC route"),(0,a.kt)("p",null,"Here's an example, to proxying gRPC service by specified route:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"attention: the ",(0,a.kt)("inlineCode",{parentName:"li"},"scheme")," of the route's upstream must be ",(0,a.kt)("inlineCode",{parentName:"li"},"grpc")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"grpcs"),"."),(0,a.kt)("li",{parentName:"ul"},"attention: APISIX use TLS\u2011encrypted HTTP/2 to expose gRPC service, so need to ",(0,a.kt)("a",{parentName:"li",href:"https.md"},"config SSL certificate")),(0,a.kt)("li",{parentName:"ul"},"attention: APISIX also support to expose gRPC service with plaintext HTTP/2, which does not rely on TLS, usually used to proxy gRPC service in intranet environment"),(0,a.kt)("li",{parentName:"ul"},"the grpc server example\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iresty/grpc_server_example"},"grpc_server_example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/helloworld.Greeter/SayHello",\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h4",{id:"testing-http2-with-tlsencrypted"},"testing HTTP/2 with TLS\u2011encrypted"),(0,a.kt)("p",null,"Invoking the route created before\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ grpcurl -insecure -import-path /pathtoprotos  -proto helloworld.proto  -d \'{"name":"apisix"}\' 127.0.0.1:9443 helloworld.Greeter.SayHello\n{\n  "message": "Hello apisix"\n}\n')),(0,a.kt)("p",null,"This means that the proxying is working."),(0,a.kt)("h4",{id:"testing-http2-with-plaintext"},"testing HTTP/2 with plaintext"),(0,a.kt)("p",null,"By default, the APISIX only listens to ",(0,a.kt)("inlineCode",{parentName:"p"},"9443")," for TLS\u2011encrypted HTTP/2. You can support HTTP/2 with plaintext via the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_listen")," section under ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    node_listen:\n        - port: 9080\n          enable_http2: false\n        - port: 9081\n          enable_http2: true\n")),(0,a.kt)("p",null,"Invoking the route created before\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ grpcurl -plaintext -import-path /pathtoprotos  -proto helloworld.proto  -d \'{"name":"apisix"}\' 127.0.0.1:9081 helloworld.Greeter.SayHello\n{\n  "message": "Hello apisix"\n}\n')),(0,a.kt)("p",null,"This means that the proxying is working."),(0,a.kt)("h3",{id:"grpcs"},"gRPCS"),(0,a.kt)("p",null,"If your gRPC service encrypts with TLS by itself (so called ",(0,a.kt)("inlineCode",{parentName:"p"},"gPRCS"),", gPRC + TLS), you need to change the ",(0,a.kt)("inlineCode",{parentName:"p"},"scheme")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"grpcs"),". The example above runs gRPCS service on port 50052, to proxy gRPC request, we need to use the configuration below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/helloworld.Greeter/SayHello",\n    "upstream": {\n        "scheme": "grpcs",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50052": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);