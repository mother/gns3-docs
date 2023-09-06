"use strict";(self.webpackChunkgns_3_docs=self.webpackChunkgns_3_docs||[]).push([[8092],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=s,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:s,i[1]=a;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3871:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=t(7462),s=t(3366),o=(t(7294),t(3905)),i=t(4996),a=["components"],l={id:"running-gns3-server-as-daemon",title:"Running the GNS3 server as a daemon",sidebar_label:"Running the GNS3 server as a daemon"},u=void 0,c={unversionedId:"using-gns3/administration/running-gns3-server-as-daemon",id:"using-gns3/administration/running-gns3-server-as-daemon",title:"Running the GNS3 server as a daemon",description:"You will find a sample init script for various systems inside the init directory of the gns3-server project//github.com/GNS3/gns3-server/tree/master/init",source:"@site/docs/using-gns3/administration/running-gns3-server-as-daemon.md",sourceDirName:"using-gns3/administration",slug:"/using-gns3/administration/running-gns3-server-as-daemon",permalink:"/docs/using-gns3/administration/running-gns3-server-as-daemon",draft:!1,editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/administration/running-gns3-server-as-daemon.md",tags:[],version:"current",frontMatter:{id:"running-gns3-server-as-daemon",title:"Running the GNS3 server as a daemon",sidebar_label:"Running the GNS3 server as a daemon"},sidebar:"someSidebar",previous:{title:"GNS3 server configuration file",permalink:"/docs/using-gns3/administration/gns3-server-configuration-file"},next:{title:"GNS3 Security",permalink:"/docs/using-gns3/administration/gns3-security"}},p={},d=[{value:"Upstart",id:"upstart",level:2},{value:"Systemd",id:"systemd",level:2}],m={toc:d};function g(e){var n=e.components,t=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You will find a sample init script for various systems inside the init directory of the gns3-server project: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GNS3/gns3-server/tree/master/init"},"https://github.com/GNS3/gns3-server/tree/master/init")),(0,o.kt)("p",null,"Useful parameters to launch the server with are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"--daemon     start process as a daemon"),(0,o.kt)("li",{parentName:"ul"},"--log logfile   store output in a logfile"),(0,o.kt)("li",{parentName:"ul"},"--pid pidfile   store the pid of the running process in a file and prevent double execution")),(0,o.kt)("p",null,"All the init script require the creation of a GNS3 user. It is possible to change it to another user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo adduser gns3\n")),(0,o.kt)("p",null,"You will need to install some dependencies first. For example, in Ubuntu 18.04.3, you\u2019ll need to install the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python3-setuptools\npython3-aiohttp\npython3-psutil\npython3-jsonschema\ngit\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This does not install other items, like ubridge, qemu-kvm, docker, wireshark, etc\u2026  This just the necessary dependencies needed to build the gns3-server daemon.")),(0,o.kt)("p",null,"In Bash, you can download the gns3-server code via the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/GNS3/gns3-server.git\n")),(0,o.kt)("p",null,"Next, enter the gns3-server directory that\u2019s been created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd gns3-server\n")),(0,o.kt)("p",null,"If you need a specific branch to match the version used by the clients, you can view a list of branches via this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git tag\n")),(0,o.kt)("p",null,"Here\u2019s an example of the list:"),(0,o.kt)("img",{alt:"screenshot",src:(0,i.Z)("img/using-gns3/beginners/running-gns3-server-as-daemon/1.jpg")}),(0,o.kt)("p",null,"(hit Ctrl+Z to exit the list)\nTo change the branch used, you\u2019ll use this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git checkout tags/branch_version -b branch_version\n")),(0,o.kt)("p",null,"For example, if the clients have GNS3 2.2.1 installed, you\u2019ll use this command to build v2.2.1 of the gns3-server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git checkout tags/v2.2.1 -b v2.2.1\n")),(0,o.kt)("p",null,"Next, you\u2019ll use this command to build the gns3-server daemon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo python3 setup.py install\n")),(0,o.kt)("p",null,"This step may take a few minutes to complete (it will vary, based on your PC), but upon successful completion, you\u2019ll see this:"),(0,o.kt)("img",{alt:"screenshot",src:(0,i.Z)("img/using-gns3/beginners/running-gns3-server-as-daemon2.jpg")}),(0,o.kt)("p",null,"Next. you\u2019ll need to enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"/gns3-server/init")," sub-directory, and copy one of two files. Which one you use, will depend on whether your version of linux uses upstart or systemd to launch daemons:+-"),(0,o.kt)("h2",{id:"upstart"},"Upstart"),(0,o.kt)("p",null,"For ubuntu < 15.04"),(0,o.kt)("p",null,"You must copy gns3.conf.upstart to /etc/init/gns3.conf and run these commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo cp gns3.conf.upstart /etc/init/gns3.conf\nsudo chown root /etc/init/gns3.conf\n")),(0,o.kt)("p",null,"To launch the daemon, use this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo service gns3 start\n")),(0,o.kt)("h2",{id:"systemd"},"Systemd"),(0,o.kt)("p",null,"You must copy gns3.service.systemd to /lib/systemd/system/gns3.service and run these commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo cp gns3.service.systemd /etc/systemd/system/gns3.service\nsudo systemctl daemon-reload\n")),(0,o.kt)("p",null,"Run this command to start the gns3 daemon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl start gns3\n")),(0,o.kt)("p",null,"Next, run this command to ensure that the daemon is active and running, or see if there is an issue:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl status gns3\n")),(0,o.kt)("p",null,"Ideally, you\u2019ll see something like this:"),(0,o.kt)("img",{alt:"screenshot",src:(0,i.Z)("img/using-gns3/beginners/running-gns3-server-as-daemon3.jpg")}),(0,o.kt)("p",null,"(press Ctrl+Z to exit this screen. Doing so will not shut down the daemon.)"),(0,o.kt)("p",null,"NOTE: you may need to allow TCP port 3080 through the firewall, if it isn\u2019t already. In ubuntu, you\u2019d use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo ufw allow 3080/tcp\n")),(0,o.kt)("p",null,"To set the gns3-server daemon to always launch on boot/reload, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl enable gns3\n")),(0,o.kt)("p",null,"(you\u2019ll see a symlink created)"),(0,o.kt)("p",null,"At any time, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo systemctl status gns3")," to check on the running daemon, as well as see which nodes it\u2019s running on behalf of the clients . In the below example, it\u2019s active, and running three instances of IOSv in a topology:"),(0,o.kt)("img",{alt:"screenshot",src:(0,i.Z)("img/using-gns3/beginners/running-gns3-server-as-daemon4.jpg")}))}g.isMDXComponent=!0}}]);