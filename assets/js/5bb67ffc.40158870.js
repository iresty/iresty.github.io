(self.webpackChunk=self.webpackChunk||[]).push([[12100],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,h=s["".concat(u,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},98094:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"\u521d\u63a2 Kubernetes Service APIs",author:"Wei Jin",authorURL:"https://github.com/gxthrj",authorImageURL:"https://avatars2.githubusercontent.com/u/4413028?s=400&u=e140a6d2bf19c426da6498b8888edc96509be649&v=4"},c={permalink:"/blog/2020/12/18/a-first-look-at-kubernetes-service-api",source:"@site/blog/2020-12-18-a-first-look-at-kubernetes-service-api.md",title:"\u521d\u63a2 Kubernetes Service APIs",description:"@gxthrj, Apache APISIX PMC & Apache apisix-ingress-controller Founder from Shenzhen Zhiliu Technology Co.",date:"2020-12-18T00:00:00.000Z",formattedDate:"December 18, 2020",tags:[],readingTime:2.145,truncated:!0,prevItem:{title:"Apache APISIX \u8d21\u732e\u8005\u4e13\u8bbf | \u666e\u534e\u6c38\u9053\u534e\u5357\u6570\u636e\u5b89\u5168\u4e0e\u9690\u79c1\u4fdd\u62a4\u56e2\u961f\u9ad8\u7ea7\u5b89\u5168\u987e\u95ee\u738b\u9e4f\u8bda",permalink:"/blog/2021/01/11/interview-Apache-APISIX-contributor-Wang-Pengcheng-Senior-Security-Advisor-of-PwC-South-China-Data-Security-and-Privacy-Protection-Team"},nextItem:{title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",permalink:"/blog/2020/12/16/another-way-to-implement-envoy-filter"}},u=[],p={toc:u};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/gxthrj"},"@gxthrj"),", Apache APISIX PMC & Apache apisix-ingress-controller Founder from ",(0,a.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))))}l.isMDXComponent=!0}}]);