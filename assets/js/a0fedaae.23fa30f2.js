"use strict";(self.webpackChunkgns_3_docs=self.webpackChunkgns_3_docs||[]).push([[8572],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>p});var s=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=s.createContext({}),g=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=g(e.components);return s.createElement(l.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=g(t),u=o,p=y["".concat(l,".").concat(u)]||y[u]||m[u]||r;return t?s.createElement(p,a(a({ref:n},c),{},{components:t})):s.createElement(p,a({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[y]="string"==typeof e?e:o,a[1]=i;for(var g=2;g<r;g++)a[g]=t[g];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>g,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var s=t(8168),o=t(8587),r=(t(6540),t(5680)),a=t(6025),i=["components"],l={id:"change-node-symbol",title:"Use custom symbols in GNS3",sidebar_label:"Change node symbol"},g=void 0,c={unversionedId:"using-gns3/beginners/change-node-symbol",id:"using-gns3/beginners/change-node-symbol",title:"Use custom symbols in GNS3",description:"Beginning with GNS3 1.4 you have been able to change the symbol for a node (or supply your own).  Starting with GNS3 2.2.0, additional style types of symbols for the various device types are included by default. You can still add your own custom symbols if you wish (that hasn\u2019t changed).",source:"@site/docs/using-gns3/beginners/change-node-symbol.md",sourceDirName:"using-gns3/beginners",slug:"/using-gns3/beginners/change-node-symbol",permalink:"/docs/using-gns3/beginners/change-node-symbol",draft:!1,editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/beginners/change-node-symbol.md",tags:[],version:"current",frontMatter:{id:"change-node-symbol",title:"Use custom symbols in GNS3",sidebar_label:"Change node symbol"},sidebar:"someSidebar",previous:{title:"The GNS3 GUI",permalink:"/docs/using-gns3/beginners/the-gns3-gui"},next:{title:"GNS3 Styles",permalink:"/docs/using-gns3/beginners/gns3-styles"}},y={},m=[{value:"Bonus",id:"bonus",level:2}],u={toc:m};function p(e){var n=e.components,t=(0,o.A)(e,i);return(0,r.yg)("wrapper",(0,s.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Beginning with GNS3 1.4 you have been able to change the symbol for a node (or supply your own).  Starting with GNS3 2.2.0, additional style types of symbols for the various device types are included by default. You can still add your own custom symbols if you wish (that hasn\u2019t changed)."),(0,r.yg)("p",null,"Changing the symbol used by a device is purely cosmetic. You can change the symbol directly from the topology with a right click:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/1.jpg")}),(0,r.yg)("p",null,"Or in that nodes settings in its global preferences:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/2.jpg")}),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Changing the nodes symbol on a device in a topology is just temporary, and on a per-instance basis. If you change the symbol used by a device via its global settings, all new instances of that device will use the chosen symbol.")),(0,r.yg)("p",null,"When right-clicking on a device in a topology, you\u2019ll see a listing of symbols you can use:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/3.jpg")}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u201cClassic\u201d")," are the symbols that have been included with GNS3 for quite a while, and that many are accustomed to seeing. Click on the arrow next to it, to expand that symbol category:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/4.jpg")}),(0,r.yg)("p",null,"Select a symbol, and click ",(0,r.yg)("strong",{parentName:"p"},"OK")," to have it applied to that device:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/5.jpg")}),(0,r.yg)("p",null,"The symbol for R11 has now been changed to \u201cRoute Switch Processor\u201d:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/6.jpg")}),(0,r.yg)("p",null,"As you could see from the Symbol Selection menu further up the page, you aren\u2019t limited to just the \u201cClassic\u201d symbols. The \u201cAffinity\u201d symbol styles are included by default, starting with GNS3 2.2.0."),(0,r.yg)("p",null,"In the below example, the symbol for R11 will be changed to \u201crouter\u201d, from the Affinity-circle-blue\u201d list:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/7.jpg")}),(0,r.yg)("p",null,"After selecting that symbol, and clicking ",(0,r.yg)("strong",{parentName:"p"},"OK"),", R11 will now use that:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/8.jpg")}),(0,r.yg)("p",null,"You can also add a custom symbol from any place in filesystem:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/9.jpg")}),(0,r.yg)("p",null,"Custom symbols should be one of these two graphic file formats:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"SVG (scalable vector graphics)"),(0,r.yg)("li",{parentName:"ul"},"PNG (portable network graphics)")),(0,r.yg)("p",null,"In Windows, there will be a linux_guest.svg  file included in ",(0,r.yg)("inlineCode",{parentName:"p"},"C:\\User\\user_name\\GNS3\\symbols"),", as part of a default installation:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/10.jpg")}),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/11.jpg")}),(0,r.yg)("p",null,"Select the SVG file and Click ",(0,r.yg)("strong",{parentName:"p"},"Open")," to add it to the symbol library:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/12.jpg")}),(0,r.yg)("p",null,"The symbol for ",(0,r.yg)("strong",{parentName:"p"},"R11")," has changed to ",(0,r.yg)("strong",{parentName:"p"},"\u201cLinux Guest\u201d"),". Click ",(0,r.yg)("strong",{parentName:"p"},"OK")," to complete the process:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/13.jpg")}),(0,r.yg)("p",null,"In the main Symbol selection menu, a new ",(0,r.yg)("strong",{parentName:"p"},"\u201cCustom Symbols\u201d")," library is added:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/14.jpg")}),(0,r.yg)("p",null,"(as only a single custom symbol has been added, there is no arrow to expand that library. If two or more are added, that arrow will appear)"),(0,r.yg)("p",null,"You can also use ",(0,r.yg)("strong",{parentName:"p"},"Filter"),", to search a  library for a specific symbol that has already been added to a library:"),(0,r.yg)("img",{alt:"screenshot",src:(0,a.A)("img/using-gns3/beginners/change-node-symbol/15.jpg")}),(0,r.yg)("p",null,"(typing \u201cqem\u201d in the ",(0,r.yg)("strong",{parentName:"p"},"Filter")," dialog box displays the ",(0,r.yg)("strong",{parentName:"p"},"Qemu Guest")," symbol in the ",(0,r.yg)("strong",{parentName:"p"},"Classic")," library, as that\u2019s the only symbols in that library that matches the filter string)"),(0,r.yg)("p",null,"Portability\nThe custom symbols are exported to the project directory. You can safely copy a project to another computer."),(0,r.yg)("h2",{id:"bonus"},"Bonus"),(0,r.yg)("p",null,"A repository of images is available here:"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/GNS3/gns3-registry/tree/master/symbols"},"https://github.com/GNS3/gns3-registry/tree/master/symbols")),(0,r.yg)("p",null,"Feel free to contribute your own"))}p.isMDXComponent=!0}}]);