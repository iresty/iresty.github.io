(self.webpackChunk=self.webpackChunk||[]).push([[2356],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46726:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a={title:"Developing for Apache APISIX Ingress Controller"},l={unversionedId:"development",id:"development",isDocsHomePage:!1,title:"Developing for Apache APISIX Ingress Controller",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/development.md",sourceDirName:".",slug:"/development",permalink:"/zh/docs/ingress-controller/development",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/development.md",version:"current",frontMatter:{title:"Developing for Apache APISIX Ingress Controller"},sidebar:"docs",previous:{title:"Ingress Controller",permalink:"/zh/docs/ingress-controller/design"},next:{title:"Contributing to apisix-ingress-controller",permalink:"/zh/docs/ingress-controller/contribute"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Fork and Clone",id:"fork-and-clone",children:[]},{value:"Build",id:"build",children:[]},{value:"Test",id:"test",children:[{value:"Run unit test cases",id:"run-unit-test-cases",children:[]},{value:"Run e2e test cases",id:"run-e2e-test-cases",children:[]},{value:"Build docker image",id:"build-docker-image",children:[]}]},{value:"Run apisix-ingress-controller locally",id:"run-apisix-ingress-controller-locally",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document explains how to get started with developing for Apache APISIX Ingress controller."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"Go 1.13")," or later, and we use go module to manage the go package dependencies."),(0,o.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation, we recommend you to use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/minikube"},"Minikube"),"."),(0,o.kt)("li",{parentName:"ul"},"Install Apache APISIX in Kubernetes by ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Helm Chart"),".")),(0,o.kt)("h2",{id:"fork-and-clone"},"Fork and Clone"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fork the repository from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller"},"apache/apisix-ingress-controller")," to your own GitHub account."),(0,o.kt)("li",{parentName:"ul"},"Clone the forked repository to your workstation."),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"go mod download")," to download modules to local cache. By the way, if you are a developer in China, we suggest you setting ",(0,o.kt)("inlineCode",{parentName:"li"},"GOPROXY")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"https://goproxy.cn")," to speed up the downloading.")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nmake build\n./apisix-ingress-controller version\n")),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("h3",{id:"run-unit-test-cases"},"Run unit test cases"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nmake unit-test\n")),(0,o.kt)("h3",{id:"run-e2e-test-cases"},"Run e2e test cases"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nmake e2e-test\n")),(0,o.kt)("p",null,"Note the running of e2e cases is somewhat slow, so please be patient."),(0,o.kt)("h3",{id:"build-docker-image"},"Build docker image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nmake build-image IMAGE_TAG=a.b.c\n")),(0,o.kt)("p",null,"The Dockerfile in this repository is only for development, not for release."),(0,o.kt)("h2",{id:"run-apisix-ingress-controller-locally"},"Run apisix-ingress-controller locally"),(0,o.kt)("p",null,"We assume all prerequisites above mentioned are met, what's more, since we want to run apisix-ingress-controller in bare-metal environment, please make sure both the proxy service and admin api service of Apache APISIX are exposed outside of the Kubernetes cluster, e.g. configuring them as ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort")," services."),(0,o.kt)("p",null,"Let's assume the Admin API service address of Apache APISIX is ",(0,o.kt)("inlineCode",{parentName:"p"},"http://192.168.65.2:31156"),". Next launch the ingress-apisix-controller by the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\n./apisix-ingress-controller ingress \\\n    --kubeconfig /path/to/kubeconfig \\\n    --http-listen :8080 \\\n    --log-output stderr \\\n    --apisix-base-url http://192.168.65.2:31156/apisix/admin\n    --apisix-admin-key edd1c9f034335f136f87ad84b625c8f1\n")),(0,o.kt)("p",null,"Something you need to pay attention to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"configuring of ",(0,o.kt)("inlineCode",{parentName:"li"},"--kubeconfig"),", if you are using Minikube, the file path should be ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),"."),(0,o.kt)("li",{parentName:"ul"},"configuring of ",(0,o.kt)("inlineCode",{parentName:"li"},"--apisix-admin-key"),", if you have changed the admin key in Apache APISIX, also changing it here, if you disable the authentication if Apache APISIX, just removing this option.")))}u.isMDXComponent=!0}}]);