"use strict";(self.webpackChunkgns_3_docs=self.webpackChunkgns_3_docs||[]).push([[1951],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),g=i,p=h["".concat(c,".").concat(g)]||h[g]||u[g]||a;return n?o.createElement(p,r(r({ref:t},d),{},{components:n})):o.createElement(p,r({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6023:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=n(4996),s=["components"],c={id:"the-nat-node",title:"The NAT node",sidebar_label:"The NAT node"},l=void 0,d={unversionedId:"using-gns3/advanced/the-nat-node",id:"using-gns3/advanced/the-nat-node",title:"The NAT node",description:"Starting with GNS3 2.0,  the NAT node became available. This node allows you to connect a topology to internet via NAT. The Internet node was deprecated in favor of this node, and the Cloud node.",source:"@site/docs/using-gns3/advanced/the-nat-node.md",sourceDirName:"using-gns3/advanced",slug:"/using-gns3/advanced/the-nat-node",permalink:"/docs/using-gns3/advanced/the-nat-node",draft:!1,editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/advanced/the-nat-node.md",tags:[],version:"current",frontMatter:{id:"the-nat-node",title:"The NAT node",sidebar_label:"The NAT node"},sidebar:"someSidebar",previous:{title:"Connect GNS3 to the Internet",permalink:"/docs/using-gns3/advanced/connect-gns3-internet"},next:{title:"Special IP addresses in GNS3",permalink:"/docs/using-gns3/advanced/special-ip-addresses"}},h={},u=[],g={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Starting with GNS3 2.0,  the NAT node became available. This node allows you to connect a topology to internet via NAT. The Internet node was deprecated in favor of this node, and the Cloud node."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Your topology will not be directly accessible from the internet or local LAN, when using the NAT node. If that is required, then the Cloud node should be used.")),(0,a.kt)("p",null,"It\u2019s useful when you need to download things from the internet, like packages, if nodes need to perform license check, etc\u2026). It\u2019s also much simpler to use than the preexisting Cloud node."),(0,a.kt)("p",null,"The NAT node requires either the GNS3 VM,  or a Linux computer with libvirt installed. Libvirt is necessary, to create a virbr0 interface for this node to function."),(0,a.kt)("p",null,"By default, the NAT node runs a DHCP server with a predefined pool in the 192.168.122.0/24 range. It\u2019s located in the End devices category:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/1.jpg")}),(0,a.kt)("p",null,"To add the NAT node to a topology, drag and drop it into the workspace. You will be prompted to specify the server type you want to use, to run the NAT node. This article will use the Webterm docker container for testing internet connectivity, so the server type needs to be set to GNS3 VM, as this is being done on a Win10 workstation:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/2.jpg")}),(0,a.kt)("p",null,"The NAT node will appear in the workspace:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/3.jpg")}),(0,a.kt)("p",null,"Next, the Webterm docker container will also be added to the workspace:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/4.jpg")}),(0,a.kt)("p",null,"The NAT node has a single interface named nat0:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/5.jpg")}),(0,a.kt)("p",null,"To allow more than one topology node to have access to the internet, it will be necessary to connect a switch or router to the NAT node,  and then connect the topology nodes to the other device."),(0,a.kt)("p",null,"For simplicity, the built-in ethernet switch will be connected to the NAT node, and the Webterm container will be connected to the switch:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/6.jpg")}),(0,a.kt)("p",null,"You enable DHCP or manually configure static IP assignment to docker container like Webterm, by right-clicking on it while it\u2019s shutdown, and then select \u201cEdit config\u201d:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/7.jpg")}),(0,a.kt)("p",null,"A window will open, showing this container\u2019s /etc/network/interfaces file:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/8.jpg")}),(0,a.kt)("p",null,"To configure this container to use DHCP, you uncomment the two lines shown in the below image, and click Save:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/9.jpg")}),(0,a.kt)("p",null,"(uncomment means removing the \u2018#\u2019 symbol at the front of those lines. That symbol causes the system to not read those lines, and are commonly used to add comments to code, which should not be processed)"),(0,a.kt)("p",null,"Starting up the Webterm container (the NAT node will automatically be running from the moment it\u2019s added to a topology) and opening its console will result in a VNC window appearing.  Click on the \u201cRestore\u201d symbol in the upper-right corner of Firefox, to take it out of the fullscreen view:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/10.jpg")}),(0,a.kt)("p",null,"Left-clicking on the black background and selecting \u201cTerminal\u201d will open terminal window:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/11.jpg")}),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/12.jpg")}),(0,a.kt)("p",null,"You can use the terminal for a variety of things, but in this article, it\u2019ll just be used to check the IP configuration of the container."),(0,a.kt)("p",null,"Using the \u2018ifconfig\u2019 command in the terminal will show that the DHCP running on the NAT node assigned this container the 192.168.122.200 address from its pool:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/13.jpg")}),(0,a.kt)("p",null,"Back in Firefox, enter a URL in the address bar, to access a website:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/14.jpg")}),(0,a.kt)("p",null,"You aren\u2019t restricted to just using dynamic address assignment with the NAT node. You can also statically assign IP addressing on it, and still have internet access."),(0,a.kt)("p",null,"Stop the Webterm container, right-click it, and choose \u201cEdit config\u201d again.  "),(0,a.kt)("p",null,"This time, you\u2019ll comment out the two lines for DHCP, and uncomment the lines in the Static IP section of the /etc/network/interfaces file;"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/15.jpg")}),(0,a.kt)("p",null,"In the above example, the Webterm container was statically assigned the 192.168.122.25/24 IP address and mask, its default gateway was set to 192.168.122.1 (the internal IP address of the NAT node), and the nameserver was set to 8.8.8.8, which is one of Google\u2019s free public DNS servers."),(0,a.kt)("p",null,"Click Save, start the container, and console back into it.  Opening a terminal and running \u201cifconfig\u201d will show that the container is using the statically assigned IP address:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/16.jpg")}),(0,a.kt)("p",null,"Entering a URL in the Firefox address bar will open a website:"),(0,a.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/using-gns3/advanced/the-nat-node/17.jpg")}))}p.isMDXComponent=!0}}]);