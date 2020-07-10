(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),o=(a(0),a(184)),r={id:"esxi",title:"Install the GNS3 VM on ESXi",sidebar_label:"ESXi"},c={id:"installation/esxi",isDocsHomePage:!1,title:"Install the GNS3 VM on ESXi",description:"VMware ESXi and VMware workstation are two totally different products. If you want instructions for VMware Workstation or VMware Fusion read this document.",source:"@site/docs/installation/esxi.md",permalink:"/gns3-docs/docs/installation/esxi",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/installation/esxi.md",sidebar_label:"ESXi",sidebar:"someSidebar",previous:{title:"GNS3 Linux Install",permalink:"/gns3-docs/docs/installation/linux"},next:{title:"Install GNS3 on a remote server",permalink:"/gns3-docs/docs/installation/remote-server"}},s=[{value:"ESXi Version",id:"esxi-version",children:[]},{value:"Download the GNS3 VM",id:"download-the-gns3-vm",children:[]},{value:"Import the VM",id:"import-the-vm",children:[{value:"Create the VM",id:"create-the-vm",children:[]},{value:"Nested virtualization",id:"nested-virtualization",children:[]},{value:"Cloud node support",id:"cloud-node-support",children:[]},{value:"Security",id:"security",children:[]}]},{value:"Add the VM in GNS3",id:"add-the-vm-in-gns3",children:[{value:"Use it as a central server",id:"use-it-as-a-central-server",children:[]},{value:"Additional compute process for my local server",id:"additional-compute-process-for-my-local-server",children:[]},{value:"Access to the GNS3 VM via internet",id:"access-to-the-gns3-vm-via-internet",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"VMware ESXi and VMware workstation are two totally different products. If you want instructions for VMware Workstation or VMware Fusion ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../getting-started/setup-gns3-vm"}),"read this document"),"."))),Object(o.b)("p",null,"GNS3 provides a GNS3 VM for ESXi. It has Ubuntu preinstalled with GNS3 and preconfigured.  GNS3 will not control your ESXi and by default ESXi limit what GNS3 can do, you will need to configure ESXi in order to properly run the GNS3 VM.3 VM."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Before using GNS3 on ESXi you need to know how to use it locally."))),Object(o.b)("h2",{id:"esxi-version"},"ESXi Version"),Object(o.b)("p",null,"This documentation cover only ESXi 6.5 using the web interface. The GNS3 VM is known to work with ESXi 5.5 and 6.0 but configuration interface will be different. The vSphere UI is also not explained here."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"VMware fixed the bug related to GNS3 after the official release of 6.5 so make sure to apply all updates. Especially you need to have the last web interface installed: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://labs.vmware.com/flings/esxi-embedded-host-client/"}),"https://labs.vmware.com/flings/esxi-embedded-host-client/")))),Object(o.b)("h2",{id:"download-the-gns3-vm"},"Download the GNS3 VM"),Object(o.b)("p",null,"Read this documentation for download links. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.gns3.com/1Bn-s1Izkjp13HxcPF4b8QSGfkWJYG_dpMt9U1DQjvZ4/index.html"}),"https://docs.gns3.com/1Bn-s1Izkjp13HxcPF4b8QSGfkWJYG_dpMt9U1DQjvZ4/index.html")," CHECKLINK"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Be careful to download the ESXi version for VMware and not the Workstation or VirtualBox version."))),Object(o.b)("h2",{id:"import-the-vm"},"Import the VM"),Object(o.b)("h3",{id:"create-the-vm"},"Create the VM"),Object(o.b)("p",null,"Open the web interface and create a new VM:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/1.jpg",alt:"screenshot"}))),Object(o.b)("p",null,"Choose \u201dDeploy a virtual machine from an OVF or OVA file\u201d"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/2.jpg",alt:"screenshot"}))),Object(o.b)("p",null," Enter the name and upload the .ova of the GNS3 or if your OS unzip the OVA when extract the zip all the files:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/3.jpg",alt:"screenshot"}))),Object(o.b)("p",null,"Select the datastore of your choice and continue."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/4.jpg",alt:"screenshot"}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/5.jpg",alt:"screenshot"}))),Object(o.b)("p",null,"At the end of wizard wait for disk upload:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/6.jpg",alt:"screenshot"}))),Object(o.b)("h3",{id:"nested-virtualization"},"Nested virtualization"),Object(o.b)("p",null,"After booting the VM you will see that KVM is not available:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/7.jpg",alt:"screenshot"}))),Object(o.b)("p",null,"This prevent fast Qemu VM; in order to solve that we need to allow the nested virtualization."),Object(o.b)("p",null,"Stop the VM and edit the settings. You need to check expose hardware assisted virtualization:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/8.jpg",alt:"screenshot"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Previous Version of ESXi"),"\nIf you want do expose nested version on previous version. You need to edit the .vmx file and change the settings inside:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'hypervisor.cpuid.v0 = "FALSE"\nvhv.enable= "TRUE"\n')),Object(o.b)("h3",{id:"cloud-node-support"},"Cloud node support"),Object(o.b)("p",null,"By default VMware for security reason will block forged packets, which means the cloud will not work. To fix that create a new port group:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/9.jpg",alt:"screenshot"}))),Object(o.b)("p",null,"And accept everything:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/10.jpg",alt:"screenshot"}))),Object(o.b)("p",null,"Edit the VM settings to use the new network:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/11.jpg",alt:"screenshot"}))),Object(o.b)("h3",{id:"security"},"Security"),Object(o.b)("p",null,"GNS3 has no auth enabled by default. It\u2019s your duty to restrict access to it at the network level. Remember that someone controlling GNS3 could inject traffic in your network and run any VM of his choice."),Object(o.b)("h2",{id:"add-the-vm-in-gns3"},"Add the VM in GNS3"),Object(o.b)("p",null,"Since GNS3 2.0 you have two way for adding the VM in GNS3."),Object(o.b)("h3",{id:"use-it-as-a-central-server"},"Use it as a central server"),Object(o.b)("p",null,"With this method you can share a  GNS3 instance with multiple clients. All the settings, images, projects will be stored on the GNS3 VM in ESXi. It\u2019s the common way to deploy GNS3 for multiple users."),Object(o.b)("p",null,"Read documentation ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.gns3.com/1K_OVfincey0cUw6CP4dWVgs_pBXMdIJ6gdFGjNy8EZQ/index.html"}),"here"),"CHECKLINK."),Object(o.b)("h3",{id:"additional-compute-process-for-my-local-server"},"Additional compute process for my local server"),Object(o.b)("p",null,"If you want to keep data local and run some workload on your computer you can use it as remote compute node. First add the node in the remote server:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/12.jpg",alt:"screenshot"}))),Object(o.b)("p",null,"Apply the settings. After that you need to alias the GNS3 VM as your remote server."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Why alias the remote server as the GNS3 VM? This allow portability, if you move the project to another computer the GNS3 VM alias could be to an instance of VMware Workstation, Virtualbox or a Cloud server"))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/13.jpg",alt:"screenshot"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/installation/esxi/14.jpg",alt:"screenshot"}))),Object(o.b)("h3",{id:"access-to-the-gns3-vm-via-internet"},"Access to the GNS3 VM via internet"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Do not expose the GNS3 VM directly on the internet or via port redirection. It will not work. The correct and secure way is to use a VPN."))))}b.isMDXComponent=!0},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(a),m=n,h=d["".concat(r,".").concat(m)]||d[m]||p[m]||o;return a?i.a.createElement(h,c(c({ref:t},l),{},{components:a})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);