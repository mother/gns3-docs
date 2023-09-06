"use strict";(self.webpackChunkgns_3_docs=self.webpackChunkgns_3_docs||[]).push([[1612],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(h,o(o({ref:t},g),{},{components:n})):r.createElement(h,o({ref:t},g))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return g},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4996),s=["components"],l={id:"upgrade-gns3",title:"Upgrade GNS3",sidebar_label:"Upgrade GNS3"},p=void 0,g={unversionedId:"getting-started/installation/upgrade-gns3",id:"getting-started/installation/upgrade-gns3",title:"Upgrade GNS3",description:"Upgrading the GNS3 Client",source:"@site/docs/getting-started/installation/upgrade-gns3.md",sourceDirName:"getting-started/installation",slug:"/getting-started/installation/upgrade-gns3",permalink:"/docs/getting-started/installation/upgrade-gns3",draft:!1,editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/getting-started/installation/upgrade-gns3.md",tags:[],version:"current",frontMatter:{id:"upgrade-gns3",title:"Upgrade GNS3",sidebar_label:"Upgrade GNS3"},sidebar:"someSidebar",previous:{title:"One GNS3 server, multiple clients",permalink:"/docs/getting-started/installation/one-server-multiple-clients"},next:{title:"GNS3 on Equinix",permalink:"/docs/getting-started/installation/gns3-on-equinix"}},u={},c=[{value:"Upgrading the GNS3 Client",id:"upgrading-the-gns3-client",level:2},{value:"Windows / MacOS",id:"windows--macos",level:3},{value:"Linux packages",id:"linux-packages",level:3},{value:"Upgrading the GNS3 VM",id:"upgrading-the-gns3-vm",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"upgrading-the-gns3-client"},"Upgrading the GNS3 Client"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Backup your topologies before upgrading.")),(0,i.kt)("h3",{id:"windows--macos"},"Windows / MacOS"),(0,i.kt)("p",null,"Just install the new version on top of the previous installation."),(0,i.kt)("h3",{id:"linux-packages"},"Linux packages"),(0,i.kt)("p",null,"If you are using Linux packages just upgrade GNS3 via your system package upgrade."),(0,i.kt)("h2",{id:"upgrading-the-gns3-vm"},"Upgrading the GNS3 VM"),(0,i.kt)("p",null,"Your GNS3 VM version need to be the same version as the GNS3 client."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You will find methods on the internet about using the pip command. Do not use it for the GNS3 VM, this will upgrade GNS3 but not the dependencies.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Before upgrading it we recommend that you snapshot your GNS3 VM  in your virtualization software (VMware or VirtualBox). In case of issue this will allow you to rollback.")),(0,i.kt)("p",null,"In order to upgrade, press the ",(0,i.kt)("strong",{parentName:"p"},"Enter")," key at the GNS3 VM ",(0,i.kt)("strong",{parentName:"p"},"Information")," screen (",(0,i.kt)("strong",{parentName:"p"},"OK")," is the only option on that screen):"),(0,i.kt)("img",{alt:"screenshot",src:(0,o.Z)("img/getting-started/installation/upgrade-gns3/1.jpg")}),(0,i.kt)("p",null,"Press the ",(0,i.kt)("strong",{parentName:"p"},"Down arrow key")," to highlight ",(0,i.kt)("strong",{parentName:"p"},"Upgrade"),", and press ",(0,i.kt)("strong",{parentName:"p"},"Enter"),":"),(0,i.kt)("img",{alt:"screenshot",src:(0,o.Z)("img/getting-started/installation/upgrade-gns3/2.jpg")}),(0,i.kt)("p",null,"You'll be presented with a warning to take a snapshot of the GNS3 VM, in case something goes awry during the upgrade process, as it can break your existing GNS3 VM. This option is highly recommended before proceeding!"),(0,i.kt)("p",null,"To continue with the upgrade process, ensure ",(0,i.kt)("strong",{parentName:"p"},"Yes")," is highlighted, and press ",(0,i.kt)("strong",{parentName:"p"},"Enter"),":"),(0,i.kt)("img",{alt:"screenshot",src:(0,o.Z)("img/getting-started/installation/upgrade-gns3/3.jpg")}),(0,i.kt)("p",null,"As mentioned in the above screenshot, the GNS3 VM will reboot at the end of this process.\nYou can also change the version branch in use by your GNS3 VM.  Use the arrow keys to highlight ",(0,i.kt)("strong",{parentName:"p"},"Channel"),", and press ",(0,i.kt)("strong",{parentName:"p"},"Enter"),":"),(0,i.kt)("img",{alt:"screenshot",src:(0,o.Z)("img/getting-started/installation/upgrade-gns3/4.jpg")}),(0,i.kt)("p",null,"You will be presented with a warning that this option is only for testers. If you do wish to proceed, ensure ",(0,i.kt)("strong",{parentName:"p"},"Continue")," is highlighted, and press ",(0,i.kt)("strong",{parentName:"p"},"Enter"),":"),(0,i.kt)("img",{alt:"screenshot",src:(0,o.Z)("img/getting-started/installation/upgrade-gns3/5.jpg")}),(0,i.kt)("p",null,"You will next be presented with a listing of the available release channels. It\u2019s highly recommended to stick with the ",(0,i.kt)("strong",{parentName:"p"},"Stable")," release channel!"),(0,i.kt)("p",null,"If you still wish to change the release channel, use the arrow keys to select the release channel you want to use, and press ",(0,i.kt)("strong",{parentName:"p"},"Enter"),". (the ",(0,i.kt)("strong",{parentName:"p"},"OK")," option is already selected):"),(0,i.kt)("img",{alt:"screenshot",src:(0,o.Z)("img/getting-started/installation/upgrade-gns3/6.jpg")}),(0,i.kt)("p",null,"To safely back out of this screen, press the ",(0,i.kt)("strong",{parentName:"p"},"Tab")," key, use the arrow keys to select ",(0,i.kt)("strong",{parentName:"p"},"Cancel"),", and press ",(0,i.kt)("strong",{parentName:"p"},"Enter"),":"),(0,i.kt)("img",{alt:"screenshot",src:(0,o.Z)("img/getting-started/installation/upgrade-gns3/7.jpg")}),(0,i.kt)("p",null,"This return you back to the main GNS3 VM menu, without changing the release channel:"),(0,i.kt)("img",{alt:"screenshot",src:(0,o.Z)("img/getting-started/installation/upgrade-gns3/8.jpg")}))}h.isMDXComponent=!0}}]);