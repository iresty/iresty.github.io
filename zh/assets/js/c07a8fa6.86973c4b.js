(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{185:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(227)),o={title:"\u53cc\u5411\u8ba4\u8bc1"},l={unversionedId:"mtls",id:"mtls",isDocsHomePage:!1,title:"\u53cc\u5411\u8ba4\u8bc1",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/mtls.md",slug:"/mtls",permalink:"/zh/docs/apisix/mtls",version:"current"},i=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",children:[]},{value:"\u5982\u4f55\u5f00\u542f",id:"\u5982\u4f55\u5f00\u542f",children:[]},{value:"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528",id:"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528",children:[]}],s={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528"),Object(c.b)("p",null,"\u53cc\u5411\u8ba4\u8bc1\u53ef\u4ee5\u66f4\u597d\u7684\u9632\u6b62\u672a\u7ecf\u6388\u6743\u8bbf\u95ee APISIX \uff0c\u5ba2\u6237\u7aef\u5c06\u5411\u670d\u52a1\u5668\u63d0\u4f9b\u5176\u8bc1\u4e66\uff0c\u670d\u52a1\u5668\u5c06\u68c0\u67e5\u8bc1\u4e66\u662f\u5426\u7531\u63d0\u4f9b\u7684 CA \u7b7e\u540d\u5e76\u51b3\u5b9a\u662f\u5426\u54cd\u5e94\u8bf7\u6c42\u3002"),Object(c.b)("h3",{id:"\u5982\u4f55\u5f00\u542f"},"\u5982\u4f55\u5f00\u542f"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u751f\u6210\u81ea\u7b7e\u8bc1\u4e66\u5bf9\uff0c\u5305\u62ec ca\u3001server\u3001client \u8bc1\u4e66\u5bf9\u3002")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u4fee\u6539 ",Object(c.b)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u7684\u914d\u7f6e\u9879:"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},'  port_admin: 9180\n  https_admin: true\n\n  mtls:\n    enable: true               # Enable or disable mTLS. Enable depends on `port_admin` and `https_admin`.\n    ca_cert: "/data/certs/mtls_ca.crt"                 # Path of your self-signed CA cert.\n    server_key: "/data/certs/mtls_server.key"          # Path of your self-signed server side cert.\n    server_cert: "/data/certs/mtls_server.crt"         # Path of your self-signed server side key.\n')),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"\u6267\u884c\u547d\u4ee4:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"apisix init\napisix reload\n")),Object(c.b)("h3",{id:"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528"},"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528"),Object(c.b)("p",null,"\u8bf7\u5c06\u4ee5\u4e0b\u8bc1\u4e66\u53ca\u57df\u540d\u66ff\u6362\u4e3a\u60a8\u7684\u771f\u5b9e\u5185\u5bb9\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u9700\u8981\u548c\u670d\u52a1\u5668\u4f7f\u7528\u76f8\u540c\u7684 CA \u8bc1\u4e66 *")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl --cacert /data/certs/mtls_ca.crt --key /data/certs/mtls_client.key --cert /data/certs/mtls_client.crt  https://admin.apisix.dev:9180/apisix/admin/routes -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")))}p.isMDXComponent=!0},227:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);