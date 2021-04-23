(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),i=(n(0),n(270)),o={title:"Deploy Apache APISIX with Docker"},c={unversionedId:"manual",id:"manual",isDocsHomePage:!1,title:"Deploy Apache APISIX with Docker",description:"\x3c!--",source:"@site/docs/apisix-docker/manual.md",slug:"/manual",permalink:"/docs/docker/manual",editUrl:"https://github.com/apache/apisix-docker/edit/master/docs/en/latest/manual.md",version:"current",sidebar:"docs",previous:{title:"Build an image from the source codes",permalink:"/docs/docker/build"},next:{title:"Example",permalink:"/docs/docker/example"}},p=[{value:"Manual deploy apisix via docker",id:"manual-deploy-apisix-via-docker",children:[{value:"Create a network <code>apisix</code>",id:"create-a-network-apisix",children:[]},{value:"Run etcd server with <code>apisix</code> network",id:"run-etcd-server-with-apisix-network",children:[]},{value:"Run Apache APISIX server",id:"run-apache-apisix-server",children:[]},{value:"Have a test",id:"have-a-test",children:[]},{value:"Clean",id:"clean",children:[]}]}],l={toc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"manual-deploy-apisix-via-docker"},"Manual deploy apisix via docker"),Object(i.b)("h3",{id:"create-a-network-apisix"},"Create a network ",Object(i.b)("inlineCode",{parentName:"h3"},"apisix")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker network create \\\n  --driver=bridge \\\n  --subnet=172.18.0.0/16 \\\n  --ip-range=172.18.5.0/24 \\\n  --gateway=172.18.5.254 \\\n  apisix\n")),Object(i.b)("h3",{id:"run-etcd-server-with-apisix-network"},"Run etcd server with ",Object(i.b)("inlineCode",{parentName:"h3"},"apisix")," network"),Object(i.b)("p",null,"Specify ip ",Object(i.b)("inlineCode",{parentName:"p"},"172.18.5.10")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker run -it --name etcd-server \\\n-v `pwd`/example/etcd_conf/etcd.conf.yml:/opt/bitnami/etcd/conf/etcd.conf.yml \\\n-p 2379:2379 \\\n-p 2380:2380  \\\n--network apisix \\\n--ip 172.18.5.10 \\\n--env ALLOW_NONE_AUTHENTICATION=yes bitnami/etcd:3.4.9\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note:"),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"Windows OS use absolute paths to hang in the configuration file."),Object(i.b)("li",{parentName:"ol"},"e.g\uff1aWindows dir path ",Object(i.b)("inlineCode",{parentName:"li"},"E:\\GitHub\\docker-apisix"),"\uff0cconfiguration file hang path is ",Object(i.b)("inlineCode",{parentName:"li"},"-v /e/github/docker-apisix/example/etcd_conf/etcd.conf.yml:/opt/bitnami/etcd/conf/etcd.conf.yml")))),Object(i.b)("h3",{id:"run-apache-apisix-server"},"Run Apache APISIX server"),Object(i.b)("p",null,"You need etcd docker to work with Apache APISIX. You can refer to ",Object(i.b)("a",{parentName:"p",href:"example/README.md"},"the docker-compose example"),"."),Object(i.b)("p",null,"Or you can run APISIX with Docker directly\uff08Docker name is test-api-gateway\uff09:"),Object(i.b)("p",null,"Check or Modify etcd address to ",Object(i.b)("inlineCode",{parentName:"p"},"http: //172.18.5.10:2379")," in ",Object(i.b)("inlineCode",{parentName:"p"},"pwd")," / example / apisix_conf / config.yaml: /usr/local/apisix/conf/config.yaml"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker run --name test-api-gateway \\\n -v `pwd`/example/apisix_conf/config.yaml:/usr/local/apisix/conf/config.yaml \\\n -v `pwd`/example/apisix_log:/usr/local/apisix/logs  \\\n -p 9080:9080 \\\n -p 9443:9443 \\\n --network apisix \\\n --ip 172.18.5.11 \\\n -d apache/apisix\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note:"),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"Windows OS use absolute paths to hang in the configuration file and log dir."))),Object(i.b)("h3",{id:"have-a-test"},"Have a test"),Object(i.b)("p",null,"Test with admin api"),Object(i.b)("p",null,"e.g. Get route list, should be return"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'curl http://127.0.0.1:9080/apisix/admin/routes/\n...\n{"node":{"createdIndex":4,"modifiedIndex":4,"key":"\\/apisix\\/routes","dir":true},"action":"get"}\n')),Object(i.b)("h3",{id:"clean"},"Clean"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker rm test-api-gateway\ndocker rm etcd-server\ndocker network rm apisix\n")))}d.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,m=u["".concat(o,".").concat(s)]||u[s]||b[s]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);