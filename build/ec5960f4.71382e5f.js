(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(2),r=(n(0),n(147));const a={id:"remote-server",title:"Install GNS3 on a remote server",sidebar_label:"Remote Server"},i={id:"installation/remote-server",isDocsHomePage:!1,title:"Install GNS3 on a remote server",description:"If you need more resources for bigger topologies, you can install GNS3 on a remote server. This could be on:",source:"@site/docs/installation/remote-server.md",permalink:"/gns3-docs/docs/installation/remote-server",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/installation/remote-server.md",sidebar_label:"Remote Server",sidebar:"someSidebar",previous:{title:"Install the GNS3 VM on ESXi",permalink:"/gns3-docs/docs/installation/esxi"},next:{title:"Downloading the GNS3 VM",permalink:"/gns3-docs/docs/installation/download-gns3-vm"}},c=[{value:"Why a VPN?",id:"why-a-vpn",children:[]},{value:"VPN Setup",id:"vpn-setup",children:[{value:"VPN connection on Linux",id:"vpn-connection-on-linux",children:[]},{value:"VPN connection on Windows",id:"vpn-connection-on-windows",children:[]},{value:"VPN connection on Mac OSX",id:"vpn-connection-on-mac-osx",children:[]}]},{value:"Configure GNS3 in order to use the new server",id:"configure-gns3-in-order-to-use-the-new-server",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you need more resources for bigger topologies, you can install GNS3 on a remote server. This could be on:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"your own server"),Object(r.b)("li",{parentName:"ul"},"a bare metal hosting provider"),Object(r.b)("li",{parentName:"ul"},"a cloud provider")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Most cloud providers (AWS, Azure...) block  access to the CPU virtualization instructions and your VM will be slow and may not work when using Qemu. This limitation is due to the fact that you are already in a VM (nested virtualization)"))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Run these instructions only on a server dedicated to GNS3 otherwise you need to manually setup GNS3 on your server."))),Object(r.b)("p",null,"The easiest way to install GNS3 on this server is to install it on a fresh Ubuntu 16.04 LTS installation. As root run these commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"cd /tmp\ncurl https://raw.githubusercontent.com/GNS3/gns3-server/master/scripts/remote-install.sh > gns3-remote-install.sh\nbash gns3-remote-install.sh --with-openvpn --with-iou --with-i386-repository\n")),Object(r.b)("p",null,"This will install all the required packages and setup a VPN. When the installation is done, reboot the server. The details of arguments that you can pass to the script are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"--with-openvpn: Install Open VPN to allow access over insecure network"),Object(r.b)("li",{parentName:"ul"},"--with-iou: Install IOU"),Object(r.b)("li",{parentName:"ul"},"--with-i386-repository: Add i386 repositories require by IOU if they are not available on the system. Warning this will replace your source.list in order to use official ubuntu mirror"),Object(r.b)("li",{parentName:"ul"},"--help: Show the help"),Object(r.b)("li",{parentName:"ul"},"--unstable: Use the unstable repository (for installing beta, release candidate\u2026)")),Object(r.b)("p",null,"The options with-i386-repository is required only for certain providers where the ubuntu mirror doesn't include 32 bits package (example: ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"packet.net"}),"packet.net"),") but you can use it without problem on any host.  The 32 bit package are require for IOU."),Object(r.b)("h2",{id:"why-a-vpn"},"Why a VPN?"),Object(r.b)("p",null,"If the server is exposed on the internet, you need to setup a VPN to avoid anybody taking control of your GNS3 and the emulators. GNS3 itself could be secured via user and password over HTTPS but because you need to be able to telnet on the routers we need to expose their console on the network. That's why we highly recommend to use a VPN to protect the access to the telnet console ."),Object(r.b)("h2",{id:"vpn-setup"},"VPN Setup"),Object(r.b)("p",null,"The next time you log in you will see this message:"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"../../img/installation/remote-server/1.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"Download the certificate. You can also find the certificate in /root/client.opvn"),Object(r.b)("h3",{id:"vpn-connection-on-linux"},"VPN connection on Linux"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"# sudo apt-get install openvpn\n# sudo openvpn client.opvn\nTue Apr 25 17:12:48 2017 [OpenVPN] Peer Connection Initiated with [AF_INET]X.X.X.X:1194\nTue Apr 25 17:12:51 2017 TUN/TAP device tun0 opened\nTue Apr 25 17:12:51 2017 Initialization Sequence Completed\n")),Object(r.b)("p",null,"If the VPN works, this page should work:\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://172.16.253.1:3080/"}),"http://172.16.253.1:3080/")),Object(r.b)("h3",{id:"vpn-connection-on-windows"},"VPN connection on Windows"),Object(r.b)("p",null,"Download and install OpenVPN for Windows (be careful to use the version associated with your OS version)"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://openvpn.net/index.php/open-source/downloads.html"}),"https://openvpn.net/index.php/open-source/downloads.html")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click on \u201cShow Hidden Items\u201d in the Taskbar"),Object(r.b)("li",{parentName:"ul"},"Right-click on \u201cOpenVPN-GUI\u201d, and select \u201cImport file\u201d"),Object(r.b)("li",{parentName:"ul"},"Select the .ovpn file you downloaded, and click \u201cImport\u201d"),Object(r.b)("li",{parentName:"ul"},"Right-click on \u201cOpenVPN-GUI\u201d again, and select \u201cConnect\u201d")),Object(r.b)("p",null,"If the VPN works, this page should work:"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://172.16.253.1:3080/"}),"http://172.16.253.1:3080/")),Object(r.b)("h3",{id:"vpn-connection-on-mac-osx"},"VPN connection on Mac OSX"),Object(r.b)("p",null,"Download and install Tunnelblick:"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://tunnelblick.net/"}),"https://tunnelblick.net/")),Object(r.b)("p",null,"After double clicking on the client certificate, it install the config for you. And the setup will be done.\nNow if you click on the tunnelblick icon in the OSX top bar. You can connect to the VPN.\nIf the VPN work this page should work:"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://172.16.253.1:3080/"}),"http://172.16.253.1:3080/")),Object(r.b)("h2",{id:"configure-gns3-in-order-to-use-the-new-server"},"Configure GNS3 in order to use the new server"),Object(r.b)("p",null,"You have two ways to use your new server:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.gns3.com/1K_OVfincey0cUw6CP4dWVgs_pBXMdIJ6gdFGjNy8EZQ/index.html"}),"As the main server (you can have multiple client connected to it)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.gns3.com/1xU3oU5dMljU3-wkGPy5-GM4EBlwjrQrlAEEKBotAEmg/index.html"}),"As additional compute resources"))),Object(r.b)("p",null,"For both methods, if you use the VPN, the host of your GNS3 server will be 172.16.253.1"))}s.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);