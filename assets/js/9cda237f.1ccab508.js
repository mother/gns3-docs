"use strict";(self.webpackChunkgns_3_docs=self.webpackChunkgns_3_docs||[]).push([[5219],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=o,d=p["".concat(u,".").concat(g)]||p[g]||f[g]||i;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1516:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={id:"gns3-server-configuration-file",title:"GNS3 server configuration file",sidebar_label:"GNS3 server configuration file"},u=void 0,l={unversionedId:"using-gns3/administration/gns3-server-configuration-file",id:"using-gns3/administration/gns3-server-configuration-file",title:"GNS3 server configuration file",description:"If you want to run the GNS3 server without the GUI, you can configure it with via an ini file.",source:"@site/docs/using-gns3/administration/gns3-server-configuration-file.md",sourceDirName:"using-gns3/administration",slug:"/using-gns3/administration/gns3-server-configuration-file",permalink:"/docs/using-gns3/administration/gns3-server-configuration-file",draft:!1,editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/administration/gns3-server-configuration-file.md",tags:[],version:"current",frontMatter:{id:"gns3-server-configuration-file",title:"GNS3 server configuration file",sidebar_label:"GNS3 server configuration file"},sidebar:"someSidebar",previous:{title:"Configuration transfer to QEMU VMs",permalink:"/docs/using-gns3/advanced/configuration-transfer-qemu-vms"},next:{title:"Running the GNS3 server as a daemon",permalink:"/docs/using-gns3/administration/running-gns3-server-as-daemon"}},c={},p=[{value:"File Location",id:"file-location",level:2},{value:"Linux",id:"linux",level:3},{value:"Mac OS X",id:"mac-os-x",level:3},{value:"Windows",id:"windows",level:3}],f={toc:p};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you want to run the GNS3 server without the GUI, you can configure it with via an ini file."),(0,i.kt)("h2",{id:"file-location"},"File Location"),(0,i.kt)("p",null,"We search for the configuration file in multiple locations:"),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"$HOME/.config/GNS3/gns3_server.conf"),(0,i.kt)("li",{parentName:"ul"},"$HOME/.config/GNS3.conf"),(0,i.kt)("li",{parentName:"ul"},"/etc/xdg/GNS3/gns3_server.conf"),(0,i.kt)("li",{parentName:"ul"},"/etc/xdg/GNS3.conf"),(0,i.kt)("li",{parentName:"ul"},"gns3_server.conf in the current directory")),(0,i.kt)("h3",{id:"mac-os-x"},"Mac OS X"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"$HOME/.config/GNS3/gns3_server.conf"),(0,i.kt)("li",{parentName:"ul"},"gns3_server.conf in the current directory")),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"%APPDATA%/GNS3/gns3_server.ini"),(0,i.kt)("li",{parentName:"ul"},"%APPDATA%/Roaming/GNS3/gns3_server.ini"),(0,i.kt)("li",{parentName:"ul"},"%APPDATA%/GNS3.ini"),(0,i.kt)("li",{parentName:"ul"},"%COMMON_APPDATA%/GNS3/gns3_server.ini"),(0,i.kt)("li",{parentName:"ul"},"%COMMON_APPDATA%/GNS3.ini"),(0,i.kt)("li",{parentName:"ul"},"gns3_server.ini in current directory")),(0,i.kt)("p",null,"All configurations have default settings.  This means you need in the configuration file only the configuration you need to change. For executables like VCPS, ubridge, and dynamips, we search in the PATH environment variable by default (on a standard linux install we will look in /bin, /usr/bin)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The configuration file"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[Server]\n; IP where the server listen for connection\nhost = 127.0.0.1\n; HTTP port for controlling the servers\nport = 3080\n; Path where images of devices are stored\nimages_path = /home/gns3/GNS3/images\n; Path where user project are stored\nprojects_path = /home/gns3/GNS3/projects\n; Send crash to the GNS3 team\nreport_errors = True\n; First port of the range allocated to devices telnet console\nconsole_start_port_range = 2001\n; Last port of the range allocated to devices telnet console\nconsole_end_port_range = 5000\n; First port of the range allocated to communication between devices. You need two port by link\nudp_start_port_range = 10000\n; Last port of the range allocated to communication between devices. You need two port by link\nudp_end_port_range = 20000\n; Path of the ubridge program\nubridge_path = /Applications/GNS3.app/Contents/Resources/ubridge\n; Boolean for enabling HTTP auth\nauth = True\n; Username for HTTP auth\nuser = bob\n; Password for HTTP auth\npassword = alice\n\n[VPCS]\n; Path of the VPCS binary\nvpcs_path = /usr/local/bin/vpcs\n\n[Dynamips]\nallocate_aux_console_ports = False\nmmap_support = True\n; Path of the dynamips path\ndynamips_path = /usr/local/bin/dynamips\nsparse_memory_support = True\nghost_ios_support = True\n\n[IOU]\n; Path of the iouyap binary\niouyap_path = /usr/local/bin/iouyap\n; Path of your .iourc file. If empty we search in $HOME/.iourc\niourc_path = /home/gns3/.iourc\n; Validate if the iourc is correct. If you turn off and your licence is invalid iou will crash without errors\nlicense_check = True\n\n[VirtualBox]\n; Path of the VBoxManage command\nvboxmanage_path = /usr/local/bin/VBoxManage\n; Run VirtualBox with sudo as vbox_user\nvbox_user =\n\n[VMware]\n; Type of Virtualization product (fusion, player, workstation)\nhost_type = fusion\n; First vmnet adapter controlled by GNS3\nvmnet_start_range = 2\n; Last vmnet adapter controlled by GNS3\nvmnet_end_range = 50\n; Path of the vmrun executable\nvmrun_path = /Applications/VMware Fusion.app/Contents/Library/vmrun\n")))}g.isMDXComponent=!0}}]);