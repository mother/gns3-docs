"use strict";(self.webpackChunkgns_3_docs=self.webpackChunkgns_3_docs||[]).push([[252],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=i,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||s;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1380:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(7462),i=t(3366),s=(t(7294),t(3905)),o=["components"],c={id:"client-server-ssl-encryption",title:"Client server SSL encryption",sidebar_label:"Client server SSL encryption"},a=void 0,l={unversionedId:"using-gns3/administration/client-server-ssl-encryption",id:"using-gns3/administration/client-server-ssl-encryption",title:"Client server SSL encryption",description:"It\u2019s no longer supported and will be removed in GNS3 2.1. We recommend using a VPN in order to protect all communications.",source:"@site/docs/using-gns3/administration/client-server-ssl-encryption.md",sourceDirName:"using-gns3/administration",slug:"/using-gns3/administration/client-server-ssl-encryption",permalink:"/docs/using-gns3/administration/client-server-ssl-encryption",draft:!1,editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/administration/client-server-ssl-encryption.md",tags:[],version:"current",frontMatter:{id:"client-server-ssl-encryption",title:"Client server SSL encryption",sidebar_label:"Client server SSL encryption"},sidebar:"someSidebar",previous:{title:"GNS3 Security",permalink:"/docs/using-gns3/administration/gns3-security"},next:{title:"Scale GNS3",permalink:"/docs/using-gns3/administration/scale-gns3"}},u={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"It\u2019s no longer supported and will be removed in GNS3 2.1. We recommend using a VPN in order to protect all communications.")),(0,s.kt)("p",null,"GNS3 supports secured network communications between the GNS3 GUI and GNS3 server using SSL. SSL mode is not supported for the GNS3 server on Windows but you can use it for clients. You will need a SSL certificate, if you don't have one, it is possible to generate a self signed certificate using this script (OpenSSL must be installed):"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/GNS3/gns3-server/master/scripts/create_cert.sh"},"https://raw.githubusercontent.com/GNS3/gns3-server/master/scripts/create_cert.sh")),(0,s.kt)("p",null,"The script will put the certificate files (certificate + key) into ~/.config/GNS3/ssl"),(0,s.kt)("p",null,"Once a certificate is ready, you can start the server in SSL mode using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"gns3server --certfile ~/.config/GNS3/ssl/server.cert --certkey ~/.config/GNS3/ssl/server.key --ssl\n")),(0,s.kt)("p",null,"Or you can edit your gns3_server.conf by adding the certificate and key files to the server section and then launching the GNS3 server."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[Server]\ncertfile=/Users/noplay/.config/GNS3/ssl/server.cert\ncertkey=/Users/noplay/.config/GNS3/ssl/server.key\nssl=True\n")))}f.isMDXComponent=!0}}]);