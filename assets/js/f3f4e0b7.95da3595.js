(self.webpackChunk=self.webpackChunk||[]).push([[4601],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3229:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={title:"Annotations"},s={unversionedId:"concepts/annotations",id:"concepts/annotations",isDocsHomePage:!1,title:"Annotations",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/concepts/annotations.md",sourceDirName:"concepts",slug:"/concepts/annotations",permalink:"/docs/ingress-controller/concepts/annotations",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/concepts/annotations.md",version:"current",frontMatter:{title:"Annotations"}},l=[{value:"CORS Support",id:"cors-support",children:[]},{value:"Allowlist Source Range",id:"allowlist-source-range",children:[]},{value:"Blocklist Source Range",id:"blocklist-source-range",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes all supported annotations and their functions. You can add these annotations in the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")," resources so that advanced features in ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," can be combined into ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress"},"Ingress")," resources."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note all keys and values of annotations are strings, so boolean value like ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," should be represented as ",(0,a.kt)("inlineCode",{parentName:"p"},'"true"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"false"'),".")),(0,a.kt)("h2",{id:"cors-support"},"CORS Support"),(0,a.kt)("p",null,"In order to enable ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"CORS"),", the annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/enable-cors")," should be set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"true"'),", also, there are some other annotations to customize the cors behavior."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/cors-allow-origin"))),(0,a.kt)("p",null,"This annotation controls which origins will be allowed, multiple origins join together with ",(0,a.kt)("inlineCode",{parentName:"p"},","),", for instance: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://foo.com,http://bar.com:8080")),(0,a.kt)("p",null,"Default value is ",(0,a.kt)("inlineCode",{parentName:"p"},'"*"'),", which means all origins are allowed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/cors-allow-headers"))),(0,a.kt)("p",null,"This annotation controls which headers are accepted, multiple headers join together with ",(0,a.kt)("inlineCode",{parentName:"p"},","),"."),(0,a.kt)("p",null,"Default is ",(0,a.kt)("inlineCode",{parentName:"p"},'"*"'),", which means all headers are accepted."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/cors-allow-methods"))),(0,a.kt)("p",null,"This annotation controls which methods are accepted, multiple methods join together with ",(0,a.kt)("inlineCode",{parentName:"p"},","),"."),(0,a.kt)("p",null,"Default is ",(0,a.kt)("inlineCode",{parentName:"p"},'"*"'),", which means all HTTP methods are accepted."),(0,a.kt)("h2",{id:"allowlist-source-range"},"Allowlist Source Range"),(0,a.kt)("p",null,"You can specify the allowed client IP addresses or nets by the annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/allowlist-source-range"),", multiple IP addresses or nets join together with ",(0,a.kt)("inlineCode",{parentName:"p"},","),",\nfor instance, ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/allowlist-source-range: 10.0.5.0/16,127.0.0.1,192.168.3.98"),". Default value is ",(0,a.kt)("em",{parentName:"p"},"empty"),", which means the sources are not limited."),(0,a.kt)("h2",{id:"blocklist-source-range"},"Blocklist Source Range"),(0,a.kt)("p",null,"You can specify the denied client IP addresses or nets by the annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/blocklist-source-range"),", multiple IP addresses or nets join together with ",(0,a.kt)("inlineCode",{parentName:"p"},","),",\nfor instance, ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/blocklist-source-range: 127.0.0.1,172.17.0.0/16"),". Default value is ",(0,a.kt)("em",{parentName:"p"},"empty"),", which means the sources are not limited."))}p.isMDXComponent=!0}}]);