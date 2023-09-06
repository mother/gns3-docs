"use strict";(self.webpackChunkgns_3_docs=self.webpackChunkgns_3_docs||[]).push([[7095],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7184:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=n(4996),s=["components"],l={id:"remote-server",title:"Install GNS3 on a remote server",sidebar_label:"Remote Server"},p=void 0,u={unversionedId:"getting-started/installation/remote-server",id:"getting-started/installation/remote-server",title:"Install GNS3 on a remote server",description:"If you need more resources for bigger topologies, you can install GNS3 on a remote server. This could be on:",source:"@site/docs/getting-started/installation/remote-server.md",sourceDirName:"getting-started/installation",slug:"/getting-started/installation/remote-server",permalink:"/docs/getting-started/installation/remote-server",draft:!1,editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/getting-started/installation/remote-server.md",tags:[],version:"current",frontMatter:{id:"remote-server",title:"Install GNS3 on a remote server",sidebar_label:"Remote Server"},sidebar:"someSidebar",previous:{title:"ESXi",permalink:"/docs/getting-started/installation/esxi"},next:{title:"Download the GNS3 VM",permalink:"/docs/getting-started/installation/download-gns3-vm"}},c={},d=[],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you need more resources for bigger topologies, you can install GNS3 on a remote server. This could be on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"your own server"),(0,a.kt)("li",{parentName:"ul"},"a bare metal hosting provider"),(0,a.kt)("li",{parentName:"ul"},"a cloud provider")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Most cloud providers (AWS, Azure...) block  access to the CPU virtualization instructions and your VM will be slow and may not work when using Qemu. This limitation is due to the fact that you are already in a VM (nested virtualization)")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Run these instructions only on a server dedicated to GNS3 otherwise you need to manually setup GNS3 on your server.")),(0,a.kt)("p",null,"The easiest way to install GNS3 on this server is to install it on a fresh Ubuntu 18.04 LTS installation. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Ubuntu 16.04 LTS is deprecated, you will receive a warning similar to the following: 'DEPRECATION WARNING This Linux distribution (ubuntu xenial) reached end-of-life and is no longer supported by this script.'"),(0,a.kt)("p",{parentName:"admonition"},"As root run these commands:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"cd /tmp\ncurl https://raw.githubusercontent.com/GNS3/gns3-server/master/scripts/remote-install.sh > gns3-remote-install.sh\nbash gns3-remote-install.sh --with-openvpn --with-iou --with-i386-repository\n")),(0,a.kt)("p",{parentName:"admonition"},"This will install all the required packages and setup a VPN. When the installation is done, reboot the server. The details of arguments that you can pass to the script are:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"--with-openvpn: Install Open VPN to allow access over insecure network"),(0,a.kt)("li",{parentName:"ul"},"--with-iou: Install IOU"),(0,a.kt)("li",{parentName:"ul"},"--with-i386-repository: Add i386 repositories require by IOU if they are not available on the system. Warning this will replace your source.list in order to use official ubuntu mirror"),(0,a.kt)("li",{parentName:"ul"},"--help: Show the help"),(0,a.kt)("li",{parentName:"ul"},"--unstable: Use the unstable repository (for installing beta, release candidate\u2026)")),(0,a.kt)("p",{parentName:"admonition"},"The options with-i386-repository is required only for certain providers where the ubuntu mirror doesn't include 32 bits package (example: ",(0,a.kt)("a",{parentName:"p",href:"gns3-on-equinix"},"Equinix Metal"),") but you can use it without problem on any host.  The 32 bit package are require for IOU."),(0,a.kt)("h2",{parentName:"admonition",id:"why-a-vpn"},"Why a VPN?"),(0,a.kt)("p",{parentName:"admonition"},"If the server is exposed on the internet, you need to setup a VPN to avoid anybody taking control of your GNS3 and the emulators. GNS3 itself could be secured via user and password over HTTPS but because you need to be able to telnet on the routers we need to expose their console on the network. That's why we highly recommend to use a VPN to protect the access to the telnet console ."),(0,a.kt)("h2",{parentName:"admonition",id:"vpn-setup"},"VPN Setup"),(0,a.kt)("p",{parentName:"admonition"},"The next time you log in you will see this message:"),(0,a.kt)("img",{alt:"screenshot",src:(0,i.Z)("img/getting-started/installation/remote-server/1.jpg")}),(0,a.kt)("p",{parentName:"admonition"},"Download the certificate. You can also find the certificate in /root/client.ovpn"),(0,a.kt)("h3",{parentName:"admonition",id:"vpn-connection-on-linux"},"VPN connection on Linux"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"# sudo apt-get install openvpn\n# sudo openvpn client.ovpn\nTue Apr 25 17:12:48 2017 [OpenVPN] Peer Connection Initiated with [AF_INET]X.X.X.X:1194\nTue Apr 25 17:12:51 2017 TUN/TAP device tun0 opened\nTue Apr 25 17:12:51 2017 Initialization Sequence Completed\n")),(0,a.kt)("p",{parentName:"admonition"},"If the VPN works, this page should work:\n",(0,a.kt)("a",{parentName:"p",href:"http://172.16.253.1:3080/"},"http://172.16.253.1:3080/")),(0,a.kt)("h3",{parentName:"admonition",id:"vpn-connection-on-windows"},"VPN connection on Windows"),(0,a.kt)("p",{parentName:"admonition"},"Download and install OpenVPN for Windows (be careful to use the version associated with your OS version)"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://openvpn.net/index.php/open-source/downloads.html"},"https://openvpn.net/index.php/open-source/downloads.html")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Click on \u201cShow Hidden Items\u201d in the Taskbar"),(0,a.kt)("li",{parentName:"ul"},"Right-click on \u201cOpenVPN-GUI\u201d, and select \u201cImport file\u201d"),(0,a.kt)("li",{parentName:"ul"},"Select the .ovpn file you downloaded, and click \u201cImport\u201d"),(0,a.kt)("li",{parentName:"ul"},"Right-click on \u201cOpenVPN-GUI\u201d again, and select \u201cConnect\u201d")),(0,a.kt)("p",{parentName:"admonition"},"If the VPN works, this page should work:"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"http://172.16.253.1:3080/"},"http://172.16.253.1:3080/")),(0,a.kt)("h3",{parentName:"admonition",id:"vpn-connection-on-mac-osx"},"VPN connection on Mac OSX"),(0,a.kt)("p",{parentName:"admonition"},"Download and install Tunnelblick:"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://tunnelblick.net/"},"https://tunnelblick.net/")),(0,a.kt)("p",{parentName:"admonition"},"After double clicking on the client certificate, it install the config for you. And the setup will be done.\nNow if you click on the tunnelblick icon in the OSX top bar. You can connect to the VPN.\nIf the VPN work this page should work:"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"http://172.16.253.1:3080/"},"http://172.16.253.1:3080/")),(0,a.kt)("h2",{parentName:"admonition",id:"configure-gns3-in-order-to-use-the-new-server"},"Configure GNS3 in order to use the new server"),(0,a.kt)("p",{parentName:"admonition"},"You have two ways to use your new server:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/getting-started/installation/one-server-multiple-clients"},"As the main server (you can have multiple client connected to it)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/how-to-guides/configure-gns3-to-use-an-additional-remote-server"},"As additional compute resources"))),(0,a.kt)("p",{parentName:"admonition"},"For both methods, if you use the VPN, the host of your GNS3 server will be 172.16.253.1")))}h.isMDXComponent=!0}}]);