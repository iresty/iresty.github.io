(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{200:function(e,t,a){"use strict";a.r(t);var n=a(253),l=a(17),r=a(257),s=a(254),c=a(276),i=a(0),o=a(351),m=a(275),u=a(0),d=function(){var e=Object(i.useState)(0),t=e[0],a=e[1],l=["Dynamic","Real-Time","Performant"],s=Object(i.useState)(!0),m=s[0],d=s[1],p=function(e){d(!1),a(e),d(!0)};return Object(i.useEffect)((function(){var e=setInterval((function(){p(t>=l.length-1?0:t+1)}),3600);return function(){return clearInterval(e)}}),[t]),u.createElement("div",{className:"hero home-splash"},u.createElement("div",{className:"container"},u.createElement("div",{className:"inner"},u.createElement("div",{className:"padding-vert--md"},u.createElement("h1",{className:"title slogan"},"A\xa0",u.createElement("span",{className:"feature-word"},u.createElement(o.a,{in:m,timeout:2e3,classNames:"feature-word-text",appear:!0},u.createElement("span",null,l[t]))),u.createElement("span",{className:"hide-on-mobile"},"\xa0"),"Cloud-Native API Gateway"),u.createElement("div",{className:"subtitle"},"Provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more. Based on the Nginx library and etcd.")),u.createElement("div",{className:"pluginWrapper button-wrapper"},u.createElement(n.a,{to:"https://github.com/apache/apisix",className:"button  button--outline button--primary github"},u.createElement(c.a,{className:"github-logo"}),"View on GitHub"),u.createElement(n.a,{to:Object(r.a)("downloads"),className:"button  button--outline button--primary secondary"},"Downloads")))))},p=function(){return u.createElement("div",{className:"hero"},u.createElement("div",{className:"learn-how"},u.createElement("div",{className:"container"},u.createElement("div",{className:"row"},u.createElement("div",{className:"col col--7"},u.createElement("p",{className:"hero__title"},u.createElement("small",null,"Description")),u.createElement("p",{className:"hero__subtitle"},u.createElement("small",null,"Cloud-native microservices API gateway, delivering the ultimate performance, security, open source and scalable platform for all your APIs and microservices. Apache APISIX is based on Nginx and etcd. Compared with traditional API gateways, APISIX has dynamic routing and plug-in hot loading, which is especially suitable for API management under micro-service system."))),u.createElement("div",{className:"col"},u.createElement("img",{className:"image",src:"https://github.com/apache/apisix/blob/master/docs/assets/images/apisix.png?raw=true",align:"right",alt:"apisix-description"}))))))},v=function(){var e=Object(l.default)().siteConfig;if(!(e.customFields.showcases||[]).length)return null;var t=e.customFields.showcases.map((function(e){return u.createElement("a",{href:e.infoLink,key:e.infoLink,target:"_blank"},u.createElement("img",{className:"user-logo",src:"https://cdn.jsdelivr.net/gh/apache/apisix-website@master/website/static/img/"+e.image,alt:e.caption}))})),a=(t.length/2).toFixed(0);return u.createElement("div",{className:"hero text--center showcase"},u.createElement("div",{className:"container"},u.createElement("div",{className:"product-showcase-section"},u.createElement("h1",null,"Who is Using This?")),u.createElement("p",null,"This project is used by all these folks",u.createElement("br",null),"Are you using this project?\xa0",u.createElement("a",{href:"https://github.com/apache/apisix/blob/master/powered-by.md",target:"_blank",rel:"noopener"},u.createElement("u",null,"Add your company"))),u.createElement("div",{className:"user-logos"},u.createElement("div",{className:"logo-row"},u.createElement("span",{className:"user-logos-container"},u.createElement("section",null,u.createElement("span",null,t.slice(0,a)),u.createElement("span",null,t.slice(0,a))))),u.createElement("div",{className:"logo-row"},u.createElement("span",{className:"user-logos-container"},u.createElement("section",null,u.createElement("span",null,t.slice(a,t.length)),u.createElement("span",null,t.slice(a,t.length))))))))},E=function(){var e=(Object(l.default)().siteConfig.customFields.events||[]).slice(0,4).map((function(e){var t=e.fileName.slice(0,10),a=e.fileName.split("-"),n="/events/"+a.slice(0,3).join("/")+"/"+a.slice(3).join("-");return u.createElement("a",{className:"event-item",key:e.title,href:n,target:"_blank"},u.createElement("div",null,u.createElement("div",{className:"event-title"},e.title),u.createElement("div",{className:"event-publish-time"},t)),u.createElement("div",{className:"event-read-button"},"Read ",u.createElement(m.a,null)))}));return u.createElement("div",{className:"hero text--center events-section"},u.createElement("div",{className:"container"},u.createElement("div",null,u.createElement("h1",{className:"color-primary"},"Events")),u.createElement("div",{className:"events-view-all-button"},u.createElement("a",{href:"/events",target:"_blank"},u.createElement("u",null,"View All Events"))),u.createElement("div",{className:"events-container"},e)))},g=function(){return u.createElement("div",{className:"contribution"},u.createElement("div",{className:"center-elem contribution-text"},u.createElement("h2",null,"Make your first contribution to Apache APISIX\u2122")),u.createElement("div",{className:"center-elem"},u.createElement("p",null,"Find a good first issue to get you started !")),u.createElement("div",{className:"contribution-link"},u.createElement(n.a,{to:"/docs/general/contributor-guide#good-first-issues"},u.createElement(c.a,{className:"contribution-logo"}),"Good First Issues")))},h=function(){return u.createElement("div",{className:"newsletter"},u.createElement("div",{className:"center-elem news-logo"},u.createElement("svg",{className:"news-logo-svg",width:"185",height:"156",viewBox:"0 0 185 156",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{d:"M0 155.5L94 0L185 155.5H140L94 83L42.5 155.5H0Z",fill:"#F8423F"}),u.createElement("path",{d:"M94 82.5L42.5 155H0L76.5 57L94 82.5Z",fill:"url(#paint0_linear)"}),u.createElement("path",{d:"M140 155.5H185L94 0L140 155.5Z",fill:"url(#paint1_linear)"}),u.createElement("defs",null,u.createElement("linearGradient",{id:"paint0_linear",x1:"222.5",y1:"50",x2:"85",y2:"223.5",gradientUnits:"userSpaceOnUse"},u.createElement("stop",{offset:"0.536111",stopColor:"#FC0A04"}),u.createElement("stop",{offset:"1",stopColor:"#CF0500",stopOpacity:"0.77"})),u.createElement("linearGradient",{id:"paint1_linear",x1:"139.5",y1:"1.50861e-06",x2:"226",y2:"136",gradientUnits:"userSpaceOnUse"},u.createElement("stop",{offset:"0.473466",stopColor:"#E2423E"}),u.createElement("stop",{offset:"1",stopColor:"#E2423E",stopOpacity:"0.77"}))))),u.createElement("div",{className:"center-elem news-text"},u.createElement("h2",null,"Stay up to date about all Apache APISIX\u2122 News")),u.createElement("div",{className:"center-elem"},u.createElement("a",{className:"news-button",href:"/docs/general/subscribe-guide"},"Subscribe")))};t.default=function(e){return u.createElement(s.a,null,u.createElement(d,null),u.createElement(p,null),u.createElement(E,null),u.createElement(v,null),u.createElement(g,null),u.createElement(h,null))}},275:function(e,t,a){"use strict";var n=a(0);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createElement("path",{fill:"currentColor",d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"});t.a=function(e){var t=e.title,a=e.titleId,c=r(e,["title","titleId"]);return n.createElement("svg",l({"aria-hidden":"true","data-prefix":"fas","data-icon":"chevron-right",className:"chevron-right_svg__svg-inline--fa chevron-right_svg__fa-chevron-right chevron-right_svg__fa-w-10",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512","aria-labelledby":a},c),t?n.createElement("title",{id:a},t):null,s)}},276:function(e,t,a){"use strict";var n=a(0);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"});t.a=function(e){var t=e.title,a=e.titleId,c=r(e,["title","titleId"]);return n.createElement("svg",l({"aria-hidden":"true","data-prefix":"fab","data-icon":"github",className:"github-logo_svg__svg-inline--fa github-logo_svg__fa-github github-logo_svg__fa-w-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512","aria-labelledby":a},c),t?n.createElement("title",{id:a},t):null,s)}}}]);