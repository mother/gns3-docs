"use strict";(self.webpackChunkgns_3_docs=self.webpackChunkgns_3_docs||[]).push([[3855],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=c(t),y=i,m=p["".concat(s,".").concat(y)]||p[y]||u[y]||a;return t?r.createElement(m,l(l({ref:n},g),{},{components:t})):r.createElement(m,l({ref:n},g))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>g,toc:()=>u});var r=t(8168),i=t(8587),a=(t(6540),t(5680)),l=t(6025),o=["components"],s={id:"link-control",title:"Link Control",sidebar_label:"Link Control"},c=void 0,g={unversionedId:"using-gns3/beginners/link-control",id:"using-gns3/beginners/link-control",title:"Link Control",description:"available in GNS3 version 2.1 and later.",source:"@site/docs/using-gns3/beginners/link-control.md",sourceDirName:"using-gns3/beginners",slug:"/using-gns3/beginners/link-control",permalink:"/docs/using-gns3/beginners/link-control",draft:!1,editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/beginners/link-control.md",tags:[],version:"current",frontMatter:{id:"link-control",title:"Link Control",sidebar_label:"Link Control"},sidebar:"someSidebar",previous:{title:"Import GNS3 appliance",permalink:"/docs/using-gns3/beginners/import-gns3-appliance"},next:{title:"Connect GNS3 to the Internet",permalink:"/docs/using-gns3/advanced/connect-gns3-internet"}},p={},u=[{value:"Packet Filters",id:"packet-filters",level:2},{value:"Suspend a Link",id:"suspend-a-link",level:2}],y={toc:u};function m(e){var n=e.components,t=(0,i.A)(e,o);return(0,a.yg)("wrapper",(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"available in GNS3 version 2.1 and later.")),(0,a.yg)("h2",{id:"packet-filters"},"Packet Filters"),(0,a.yg)("p",null,"Packet filters can be applied on links without stopping any node."),(0,a.yg)("p",null,"Supported packet filters are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Frequency_drop")," drop a packet every x packets."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Packet_loss")," randomly drop a packet"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Delay"),":  adds latency and/or jitter."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Packet_corruption")," randomly corrupt a packet."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"BPF_(Berkeley_Packet_Filter)")," filter packets matching a BPF expression.")),(0,a.yg)("p",null,"All packet filters can be combined, meaning you can apply both a packet loss filter and a delay filter on the same link that will be active simultaneously."),(0,a.yg)("p",null,"To apply a packet filter, right-click on a link, and select ",(0,a.yg)("strong",{parentName:"p"},"Packet filters"),":"),(0,a.yg)("img",{alt:"screenshot",src:(0,l.A)("img/using-gns3/beginners/link-control/1.jpg")}),(0,a.yg)("img",{alt:"screenshot",src:(0,l.A)("img/using-gns3/beginners/link-control/2.jpg")}),(0,a.yg)("p",null,"As an example, click the ",(0,a.yg)("strong",{parentName:"p"},"Delay")," tab, add a non-zero value for ",(0,a.yg)("strong",{parentName:"p"},"Latency"),", then click ",(0,a.yg)("strong",{parentName:"p"},"Apply"),":"),(0,a.yg)("img",{alt:"screenshot",src:(0,l.A)("img/using-gns3/beginners/link-control/3.jpg")}),(0,a.yg)("p",null,"The icon on the ",(0,a.yg)("strong",{parentName:"p"},"Delay")," tab changes from a red square to a green circle, indicating it\u2019s active:"),(0,a.yg)("img",{alt:"screenshot",src:(0,l.A)("img/using-gns3/beginners/link-control/4.jpg")}),(0,a.yg)("p",null,"Click ",(0,a.yg)("strong",{parentName:"p"},"OK")," to close the ",(0,a.yg)("strong",{parentName:"p"},"Packet filters")," window:"),(0,a.yg)("img",{alt:"screenshot",src:(0,l.A)("img/using-gns3/beginners/link-control/5.jpg")}),(0,a.yg)("p",null,"A filter icon will be displayed on the link to indicate one or more packet filters are active."),(0,a.yg)("img",{alt:"screenshot",src:(0,l.A)("img/using-gns3/beginners/link-control/6.jpg")}),(0,a.yg)("h2",{id:"suspend-a-link"},"Suspend a Link"),(0,a.yg)("p",null,"It is possible to suspend a link.  For instance, to simulate a temporary connectivity issue in your project. Suspending a link currently means that all packets going through the link will be dropped."),(0,a.yg)("p",null,"To suspend a link, right-click it and then select ",(0,a.yg)("strong",{parentName:"p"},"Suspend"),":"),(0,a.yg)("img",{alt:"screenshot",src:(0,l.A)("img/using-gns3/beginners/link-control/7.jpg")}),(0,a.yg)("p",null,"The link is now suspended, so no traffic can pass through it:"),(0,a.yg)("img",{alt:"screenshot",src:(0,l.A)("img/using-gns3/beginners/link-control/8.jpg")}))}m.isMDXComponent=!0}}]);