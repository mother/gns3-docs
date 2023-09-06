"use strict";(self.webpackChunkgns_3_docs=self.webpackChunkgns_3_docs||[]).push([[2623],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(o),d=n,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return o?r.createElement(f,a(a({ref:t},u),{},{components:o})):r.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5143:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],s={id:"where-do-i-get-ios-images",title:"Where do I get IOS images?",sidebar_label:"Where do I get IOS images?"},c=void 0,l={unversionedId:"troubleshooting-faq/where-do-i-get-ios-images",id:"troubleshooting-faq/where-do-i-get-ios-images",title:"Where do I get IOS images?",description:"Introduction",source:"@site/docs/troubleshooting-faq/where-do-i-get-ios-images.md",sourceDirName:"troubleshooting-faq",slug:"/troubleshooting-faq/where-do-i-get-ios-images",permalink:"/docs/troubleshooting-faq/where-do-i-get-ios-images",draft:!1,editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/troubleshooting-faq/where-do-i-get-ios-images.md",tags:[],version:"current",frontMatter:{id:"where-do-i-get-ios-images",title:"Where do I get IOS images?",sidebar_label:"Where do I get IOS images?"},sidebar:"someSidebar",previous:{title:"General FAQ",permalink:"/docs/troubleshooting-faq/general-faq"}},u={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Important",id:"important",level:3},{value:"Options",id:"options",level:2},{value:"Cisco website:",id:"cisco-website",level:3},{value:"VIRL:",id:"virl",level:3},{value:"Physical Cisco devices:",id:"physical-cisco-devices",level:3}],p={toc:m};function d(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"One of the most common questions asked in the GNS3 forums is \u201cWhere do I get Cisco IOS images?\u201d"),(0,i.kt)("h3",{id:"important"},"Important"),(0,i.kt)("p",null,"Unfortunately due to legal requirements, GNS3 is unable to provide IOS images or any other Cisco images. You will need to provide your own images to use them with GNS3."),(0,i.kt)("p",null,"::: note\nSome vendors make their software images freely available, but unfortunately this is not true for Cisco images.\n:::"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"Here are some suggestions on ways to get Cisco images:"),(0,i.kt)("h3",{id:"cisco-website"},"Cisco website:"),(0,i.kt)("p",null,"Download images directly from Cisco: ",(0,i.kt)("a",{parentName:"p",href:"https://software.cisco.com/download/navigator.html"},"https://software.cisco.com/download/navigator.html")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A Service Contract is required for downloading of images.")),(0,i.kt)("p",null,"The only IOS images currently available from Cisco, that will work with the Dynamips emulator are the c7200 images (not the c7200p images!).  The images for all of the other platforms Dynamips supported hit End of Support status, and their images were removed.  "),(0,i.kt)("h3",{id:"virl"},"VIRL:"),(0,i.kt)("p",null,"If you don\u2019t have a service contract with Cisco, you can purchase a VIRL license to get access to multiple images that are very useful for GNS3 labs. The price  starts at $199.99 per year for the Personal Edition:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://virl.cisco.com/"},"http://virl.cisco.com/")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can use VIRL images without license authentication. You can therefore download the VIRL images, integrate them with GNS3 and use them offline if needed.")),(0,i.kt)("h3",{id:"physical-cisco-devices"},"Physical Cisco devices:"),(0,i.kt)("p",null,"If you own a physical router like a Cisco 3725 router, you can copy the image from the router and import it into GNS3."))}d.isMDXComponent=!0}}]);