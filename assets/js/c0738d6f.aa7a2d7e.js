"use strict";(self.webpackChunkgns_3_docs=self.webpackChunkgns_3_docs||[]).push([[7161],{3905:function(e,i,t){t.d(i,{Zo:function(){return m},kt:function(){return h}});var n=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):r(r({},i),e)),t},m=function(e){var i=u(e.components);return n.createElement(s.Provider,{value:i},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},p=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,h=d["".concat(s,".").concat(p)]||d[p]||c[p]||o;return t?n.createElement(h,r(r({ref:i},m),{},{components:t})):n.createElement(h,r({ref:i},m))}));function h(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=p;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=t[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8854:function(e,i,t){t.r(i),t.d(i,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),r=t(4996),l=["components"],s={id:"cisco-ios-images-for-dynamips",title:"Cisco IOS images for Dynamips",sidebar_label:"Cisco IOS images for Dynamips"},u=void 0,m={unversionedId:"emulators/cisco-ios-images-for-dynamips",id:"emulators/cisco-ios-images-for-dynamips",title:"Cisco IOS images for Dynamips",description:"GNS3 offers multiple ways to emulate IOS. For older images, we use and maintain Dynamips; an emulator dedicated to emulate some Cisco hardware. Dynamips can run unmodified IOS images. In the new GNS3 1.4, there is a way to run a second category of switches and routers. These are classified as Routing and Switching virtual machines (or R+Svms) for short. What are the differences? Here are the major differences:",source:"@site/docs/emulators/cisco-ios-images-for-dynamips.md",sourceDirName:"emulators",slug:"/emulators/cisco-ios-images-for-dynamips",permalink:"/docs/emulators/cisco-ios-images-for-dynamips",draft:!1,editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/emulators/cisco-ios-images-for-dynamips.md",tags:[],version:"current",frontMatter:{id:"cisco-ios-images-for-dynamips",title:"Cisco IOS images for Dynamips",sidebar_label:"Cisco IOS images for Dynamips"},sidebar:"someSidebar",previous:{title:"Which emulator should I use?",permalink:"/docs/emulators/which-emulators-should-i-use"},next:{title:"Non-Native IOU for Windows and OSX",permalink:"/docs/emulators/non-native-iou-for-windows-and-osx"}},d={},c=[{value:"Important Points",id:"important-points",level:2},{value:"Availability",id:"availability",level:3},{value:"IOS 15.x",id:"ios-15x",level:3},{value:"Should I use a mainline and technology train image?",id:"should-i-use-a-mainline-and-technology-train-image",level:3},{value:"Minimum memory",id:"minimum-memory",level:3},{value:"Recommended images",id:"recommended-images",level:3},{value:"Idle-PC value",id:"idle-pc-value",level:3},{value:"C1700 Series",id:"c1700-series",level:2},{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline",level:3},{value:"C2600 Series",id:"c2600-series",level:2},{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline-1",level:3},{value:"IOS version 12.4.15T14 (Technology train)",id:"ios-version-12415t14-technology-train",level:3},{value:"C3620",id:"c3620",level:2},{value:"IOS version 12.2.26c",id:"ios-version-12226c",level:3},{value:"C3640",id:"c3640",level:2},{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline-2",level:3},{value:"C3660",id:"c3660",level:2},{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline-3",level:3},{value:"IOS version 12.4.15T14 (Technology train)",id:"ios-version-12415t14-technology-train-1",level:3},{value:"C2691",id:"c2691",level:2},{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline-4",level:3},{value:"IOS version 12.4.15T14 (Technology train)",id:"ios-version-12415t14-technology-train-2",level:3},{value:"C3725",id:"c3725",level:2},{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline-5",level:3},{value:"IOS version 12.4.15T14 (Technology train)",id:"ios-version-12415t14-technology-train-3",level:3},{value:"C3745",id:"c3745",level:2},{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline-6",level:3},{value:"IOS version 12.4.15T14 (Technology train)",id:"ios-version-12415t14-technology-train-4",level:3},{value:"C7200 SERIES",id:"c7200-series",level:2},{value:"IOS 15 (Mainline)",id:"ios-15-mainline",level:3},{value:"IOS 12.4.25g (Mainline)",id:"ios-12425g-mainline",level:3},{value:"IOS 12.4.24T5 (Technology train)",id:"ios-12424t5-technology-train",level:3},{value:"Cisco Catalyst Switches",id:"cisco-catalyst-switches",level:2}],p={toc:c};function h(e){var i=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GNS3 offers multiple ways to emulate IOS. For older images, we use and maintain Dynamips; an emulator dedicated to emulate some Cisco hardware. Dynamips can run unmodified IOS images. In the new GNS3 1.4, there is a way to run a second category of switches and routers. These are classified as Routing and Switching virtual machines (or R+Svms) for short. What are the differences? Here are the major differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"IOS images are usually run in Dynamips however R+Svms are housed in a virtual machine."),(0,o.kt)("li",{parentName:"ul"},"IOS images are lower in cpu and memory so you can fit more of them in one topology."),(0,o.kt)("li",{parentName:"ul"},"R+Svms are all vendor Routing and Switching images that are larger in size but can be imported into GNS3 for real world network emulation.")),(0,o.kt)("h2",{id:"important-points"},"Important Points"),(0,o.kt)("h3",{id:"availability"},"Availability"),(0,o.kt)("p",null,"Due to these platforms hitting End of Sale, End of Life, and End of Support status, the images are no longer available for download from Cisco\u2019s support sections. Currently, the c7200 images are the only ones still available for download for those with a support contract."),(0,o.kt)("h3",{id:"ios-15x"},"IOS 15.x"),(0,o.kt)("p",null,"Only the c7200 series get newer IOS 15 images. All other platforms are now end-of-life and only support IOS 12.4. Please note that the IOSv appliance is based on IOS 15 and there are IOU (IOS on UNIX) images with IOS 15."),(0,o.kt)("h3",{id:"should-i-use-a-mainline-and-technology-train-image"},"Should I use a mainline and technology train image?"),(0,o.kt)("p",null,"You will find the technology train images to contain the newest features but it may also contain the most bugs. We recommend Mainline over Technology train if you are interested on stability without the need of new features.Please see ",(0,o.kt)("a",{parentName:"p",href:"http://www.ciscopress.com/articles/article.asp?p=2106547"},"Cisco IOS Versions and Naming")," for more information."),(0,o.kt)("h3",{id:"minimum-memory"},"Minimum memory"),(0,o.kt)("p",null,"The minimum RAM is the amount of memory needed for IOS to work at maximum capacity with most feature configured and activated. From experience you can usually use a bit less RAM just fine."),(0,o.kt)("h3",{id:"recommended-images"},"Recommended images"),(0,o.kt)("p",null,"We really recommend using the c3640, c3660, c3725, c3745 and c7200 IOS images listed below, they have proven to be the most stable in GNS3 provided you use the right amount of RAM and Idle-PC value."),(0,o.kt)("h3",{id:"idle-pc-value"},"Idle-PC value"),(0,o.kt)("p",null,"When Dynamips runs an IOS image, a single instance can consume 100% of the processing time for a CPU core or thread. To remedy this, you can supply Dynamips with an Idle-PC value, to consume less CPU. This value will vary between devices/images. To help automate the process of determining a valid Idle-PC value, you can use the Idle-PC finder button when importing a supported IOS image into GNS3:"),(0,o.kt)("img",{alt:"screenshot",src:(0,r.Z)("img/emulators/cisco-ios-images-for-dynamips/1.jpg")}),(0,o.kt)("p",null,"(Idle-PC values are not required with virtual machines or docker containers. They\u2019re only required for use by the Dynamips emulator)"),(0,o.kt)("h2",{id:"c1700-series"},"C1700 Series"),(0,o.kt)("p",null,"1700s have 1 FastEthernet fixed port (C1700-MB-1ETH) on its motherboard, 2 subslots for WICs (maximum of 2 Ethernet ports or 4 serial ports), and no Network Module slots. Note that interfaces do not use a slot designation (e.g. \u201cf0\u201d)"),(0,o.kt)("h3",{id:"ios-version-12425d-mainline"},"IOS version 12.4.25d (Mainline)"),(0,o.kt)("p",null,"File name: c1700-adventerprisek9-mz.124-25d.bin\nMD5: 3ed8d56a8757771105a56070e4147716\nMinimum RAM: 128MB\nProposed idle-PC value: 0x80358a60"),(0,o.kt)("p",null,"IOS version 12.4.15T14 (Technology train)\nFile name: c1700-adventerprisek9-mz.124-15.T14.bin\nMD5: 351190de8764263e85a2b50718f394fd\nMinimum RAM: 160MB\nProposed idle-PC value: 0x824a4dc4"),(0,o.kt)("h2",{id:"c2600-series"},"C2600 Series"),(0,o.kt)("p",null,"2600s have one or two Ethernet or FastEthernet interfaces on its motherboard, 3 subslots for WICs (maximum of 6 serial ports) and 1 Network Module slot (maximum of 4 Ethernet ports or 16 FastEthernet ports)."),(0,o.kt)("h3",{id:"ios-version-12425d-mainline-1"},"IOS version 12.4.25d (Mainline)"),(0,o.kt)("p",null,"File name: c2600-adventerprisek9-mz.124-25d.bin\nMD5: 8eca1f6fe57dfb3c3cf3568c0e475853\nMinimum RAM: 128MB\nProposed idle-PC value: 0x80519c48"),(0,o.kt)("h3",{id:"ios-version-12415t14-technology-train"},"IOS version 12.4.15T14 (Technology train)"),(0,o.kt)("p",null,"File name: c2600-adventerprisek9-mz.124-15.T14.bin\nMD5: 12b8548b23e2ec593652ae9310ac797f\nMinimum RAM: 256MB\nProposed idle-PC value: 0x8027ec88"),(0,o.kt)("h2",{id:"c3620"},"C3620"),(0,o.kt)("p",null,"The c3620 supports up to 2 Network Modules (maximum of 8 Ethernet ports, 32 FastEthernet ports or 8 serial ports). Note that tt shouldn\u2019t be used since the latest available IOS image is very old."),(0,o.kt)("h3",{id:"ios-version-12226c"},"IOS version 12.2.26c"),(0,o.kt)("p",null,"File name: c3620-a3jk8s-mz.122-26c.bin\nMD5: dd34b958ad362ef54ba48b187f4c97b4\nMinimum RAM: 64MB\nProposed idle-PC value: 0x603a8bac"),(0,o.kt)("h2",{id:"c3640"},"C3640"),(0,o.kt)("p",null,"The c3640 supports up to 4 Network Modules (maximum of 16 Ethernet ports, 32 FastEthernet ports or 16 serial ports)."),(0,o.kt)("h3",{id:"ios-version-12425d-mainline-2"},"IOS version 12.4.25d (Mainline)"),(0,o.kt)("p",null,"File name: c3640-a3js-mz.124-25d.bin\nMD5: db9f63ca1b46d18fb835496bfffe608a\nMinimum RAM: 128MB\nProposed idle-PC value: 0x6050b114"),(0,o.kt)("h2",{id:"c3660"},"C3660"),(0,o.kt)("p",null,"The c3660 has 2 FastEthernet fixed ports (Leopard-2FE) and supports up to 6 Network Modules (maximum of 24 Ethernet ports, 32 FastEthernet ports or 24 serial ports)."),(0,o.kt)("h3",{id:"ios-version-12425d-mainline-3"},"IOS version 12.4.25d (Mainline)"),(0,o.kt)("p",null,"File name: c3660-a3jk9s-mz.124-25d.bin\nMD5: 4ac7e947f13c189d746149dc74992890\nMinimum RAM: 192MB\nProposed idle-PC value: 0x606071f8"),(0,o.kt)("h3",{id:"ios-version-12415t14-technology-train-1"},"IOS version 12.4.15T14 (Technology train)"),(0,o.kt)("p",null,"File name: c3660-a3jk9s-mz.124-15.T14.bin\nMD5: 39950b7a563aa08e94a168260409f1e6\nMinimum RAM: 256MB\nProposed idle-PC value: 0x6076e0b4"),(0,o.kt)("h2",{id:"c2691"},"C2691"),(0,o.kt)("p",null,"The c2691 has 2 FastEthernet interfaces its motherboard (GT96100-FE), 3 subslots for WICs (maximum of 6 serial ports) and 1 Network Module slot (maximum of 16 FastEthernet ports or 4 serial ports)."),(0,o.kt)("h3",{id:"ios-version-12425d-mainline-4"},"IOS version 12.4.25d (Mainline)"),(0,o.kt)("p",null,"File name: c2691-adventerprisek9-mz.124-25d.bin\nMD5: a8e1f5821d87456595488d6221ce42e5\nMinimum RAM: 192MB\nProposed idle-PC value: 0x60a48cb8"),(0,o.kt)("h3",{id:"ios-version-12415t14-technology-train-2"},"IOS version 12.4.15T14 (Technology train)"),(0,o.kt)("p",null,"File name: c2691-adventerprisek9-mz.124-15.T14.bin\nMD5: 91388104d7276ad09204e36d2dfcf52d\nMinimum RAM: 256MB\nProposed idle-PC value: 0x60bcf9f8"),(0,o.kt)("h2",{id:"c3725"},"C3725"),(0,o.kt)("p",null,"The c3725 has 2 FastEthernet interfaces on its motherboard (GT96100-FE), 3 subslots for WICs (maximum of 6 serial ports) and 2 Network Module slots (maximum of 32 FastEthernet ports or 8 serial ports)."),(0,o.kt)("h3",{id:"ios-version-12425d-mainline-5"},"IOS version 12.4.25d (Mainline)"),(0,o.kt)("p",null,"File name: c3725-adventerprisek9-mz.24-25d.bin\nMD5: ac3d313d3caff5beeee244b81d2c024c\nMinimum RAM: 128MB\nProposed idle-PC value: 0x602467a4"),(0,o.kt)("h3",{id:"ios-version-12415t14-technology-train-3"},"IOS version 12.4.15T14 (Technology train)"),(0,o.kt)("p",null,"File name: c3725-adventerprisek9-mz.124-15.T14.bin\nMD5: 42baf17af10d9a1471bf542f0bfd07c7\nMinimum RAM: 256MB\nProposed idle-PC value: 0x60c09aa0"),(0,o.kt)("h2",{id:"c3745"},"C3745"),(0,o.kt)("p",null,"The c3745 has 2 FastEthernet interfaces on its motherboard (GT96100-FE), 3 subslots for WICs (maximum of 6 serial ports) and 4 Network Module slots (maximum of 32 FastEthernet ports or 16 serial ports)."),(0,o.kt)("h3",{id:"ios-version-12425d-mainline-6"},"IOS version 12.4.25d (Mainline)"),(0,o.kt)("p",null,"File name: c3745-adventerprisek9-mz.124-25d.bin\nMD5: 563797308a3036337c3dee9b4ab54649\nMinimum RAM: 256MB\nProposed idle-PC value: 0x60aa1da0"),(0,o.kt)("h3",{id:"ios-version-12415t14-technology-train-4"},"IOS version 12.4.15T14 (Technology train)"),(0,o.kt)("p",null,"File name: c3745-adventerprisek9-mz.124-15.T14.bin\nMD5: a696619869a972ec3a27742d38031b6a\nMinimum RAM: 256 RAM\nProposed idle-PC value: 0x602701e4"),(0,o.kt)("h2",{id:"c7200-series"},"C7200 SERIES"),(0,o.kt)("p",null,"7200s have a different architecture. Only the 7206 is supported, it has 6 Port Adapters (PA) slots. VXR chassis, NPE-400 and C7200-IO-FE are the default settings in GNS3."),(0,o.kt)("h3",{id:"ios-15-mainline"},"IOS 15 (Mainline)"),(0,o.kt)("p",null,"This router series is still getting new IOS 15.x versions.\nThe last one at this date is:\nFile name: c7200-adventerprisek9-mz.152-4.M8.bin\nMinimum RAM: 512MB"),(0,o.kt)("h3",{id:"ios-12425g-mainline"},"IOS 12.4.25g (Mainline)"),(0,o.kt)("p",null,"MD5: 3a78cb61831b3ef1530f7402f5986556\nFile name: c7200-a3jk9s-mz.124-25g.bin\nMinimum RAM: 256MB"),(0,o.kt)("h3",{id:"ios-12424t5-technology-train"},"IOS 12.4.24T5 (Technology train)"),(0,o.kt)("p",null,"This one is not the latest 12.4 version but it is easier to find.\nMD5: 3c4148f62acf56602ce3b371ebae60c9\nFile name: c7200-adventerprisek9-mz.124-24.T5\nMinimum RAM: 256MB\nProposed idle-PC value: 0x606df838"),(0,o.kt)("h2",{id:"cisco-catalyst-switches"},"Cisco Catalyst Switches"),(0,o.kt)("p",null,"Dynamips is incapable of running IOS images from Catalyst Switches, as it\u2019s unable to  emulate the ASICs used in those type of devices."),(0,o.kt)("p",null,"For switching, you can use an IOU L2 binary image, or an IOSvL2 virtual disk image with Qemu."),(0,o.kt)("p",null,"However, if you want to use Dynamips you can use the EtherSwitch module with 2600s, 3600s and 3700s Series. Keep in mind that this module works differently (it uses the vlan database etc.) and does NOT support the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access Switch Device Manager (SDM) Template"),(0,o.kt)("li",{parentName:"ul"},"ACL \u2013 Improved Merging Algorithm"),(0,o.kt)("li",{parentName:"ul"},"ARP Optimization"),(0,o.kt)("li",{parentName:"ul"},"BGP Increased Support of Numbered as-path Access Lists to 500"),(0,o.kt)("li",{parentName:"ul"},"BGP Restart Neighbor Session After max-prefix Limit Reached"),(0,o.kt)("li",{parentName:"ul"},"BGP Route-Map Continue Support for Outbound Policy"),(0,o.kt)("li",{parentName:"ul"},"Clear Counters Per Port"),(0,o.kt)("li",{parentName:"ul"},"DHCP Snooping"),(0,o.kt)("li",{parentName:"ul"},"DHCP Snooping Counters"),(0,o.kt)("li",{parentName:"ul"},"Diagnostics Options on bootup"),(0,o.kt)("li",{parentName:"ul"},"ErrDisable Reactivation Per Port"),(0,o.kt)("li",{parentName:"ul"},"ErrDisable timeout"),(0,o.kt)("li",{parentName:"ul"},"EtherChannel \u2013 Flexible PAgP"),(0,o.kt)("li",{parentName:"ul"},"Etherchannel Guard"),(0,o.kt)("li",{parentName:"ul"},"Fallback Bridging"),(0,o.kt)("li",{parentName:"ul"},"Flex Link Bi-directional Fast Convergence"),(0,o.kt)("li",{parentName:"ul"},"Flex Link VLAN Load-Balancing"),(0,o.kt)("li",{parentName:"ul"},"Flex Links Interface Preemption"),(0,o.kt)("li",{parentName:"ul"},"GOLD \u2013 Generic Online Diagnostics"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.1ab, Link Layer Discovery Protocol"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.1s \u2013 Multiple Spanning Tree (MST) Standard Compliance"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.1s VLAN Multiple Spanning Trees"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.1t"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.1W Spanning Tree Rapid Reconfiguration"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.1x \u2013 Auth Fail Open"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.1x \u2013 Auth Fail VLAN"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.1x \u2013 VLAN Assignment"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.1x \u2013 Wake on LAN Support"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.1X Multi-Domain Authentication"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.1x RADIUS Accounting"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.1x with Port Security"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.3ad Link Aggregation (LACP)"),(0,o.kt)("li",{parentName:"ul"},"IEEE 802.3af Power over Ethernet"),(0,o.kt)("li",{parentName:"ul"},"IGMP Fast Leave"),(0,o.kt)("li",{parentName:"ul"},"IGMP Version 1"),(0,o.kt)("li",{parentName:"ul"},"IGRP"),(0,o.kt)("li",{parentName:"ul"},"IP Phone Detection Enhancements"),(0,o.kt)("li",{parentName:"ul"},"IP Phone Enhancement \u2013 PHY Loop Detection"),(0,o.kt)("li",{parentName:"ul"},"IPSG (IP Source Guard)"),(0,o.kt)("li",{parentName:"ul"},"Jumbo Frames"),(0,o.kt)("li",{parentName:"ul"},"L2PT \u2013 Layer 2 Protocol Tunneling"),(0,o.kt)("li",{parentName:"ul"},"MAC Authentication Bypass"),(0,o.kt)("li",{parentName:"ul"},"MLD Snooping"),(0,o.kt)("li",{parentName:"ul"},"Multicast Etherchannel Load Balancing"),(0,o.kt)("li",{parentName:"ul"},"NAC \u2013 L2 IEEE 802.1x"),(0,o.kt)("li",{parentName:"ul"},"NAC \u2013 L2 IP"),(0,o.kt)("li",{parentName:"ul"},"NAC \u2013 L2 IP with Auth Fail Open"),(0,o.kt)("li",{parentName:"ul"},"Packet-Based Storm Control"),(0,o.kt)("li",{parentName:"ul"},"Per Port Per VLAN Policing"),(0,o.kt)("li",{parentName:"ul"},"Port Security"),(0,o.kt)("li",{parentName:"ul"},"Port Security on Private VLAN Ports"),(0,o.kt)("li",{parentName:"ul"},"Private VLANs"),(0,o.kt)("li",{parentName:"ul"},"QoS Policy Propagation via Border Gateway Protocol (QPPB)"),(0,o.kt)("li",{parentName:"ul"},"Rapid-Per-VLAN-Spanning Tree (Rapid-PVST)"),(0,o.kt)("li",{parentName:"ul"},"Reduced MAC Address Usage"),(0,o.kt)("li",{parentName:"ul"},"Remote SPAN (RSPAN)"),(0,o.kt)("li",{parentName:"ul"},"Smart Port"),(0,o.kt)("li",{parentName:"ul"},"Spanning Tree Protocol (STP) \u2013 Loop Guard"),(0,o.kt)("li",{parentName:"ul"},"Spanning Tree Protocol (STP) \u2013 PortFast BPDU Filtering"),(0,o.kt)("li",{parentName:"ul"},"Spanning Tree Protocol (STP) \u2013 Portfast Support for Trunks"),(0,o.kt)("li",{parentName:"ul"},"Spanning Tree Protocol (STP) \u2013 Root Guard"),(0,o.kt)("li",{parentName:"ul"},"Spanning Tree Protocol (STP) \u2013 Uplink Load Balancing"),(0,o.kt)("li",{parentName:"ul"},"SRR (Shaped Round Robin)"),(0,o.kt)("li",{parentName:"ul"},"Standby Supervisor Port Usage"),(0,o.kt)("li",{parentName:"ul"},"STP Syslog Messages"),(0,o.kt)("li",{parentName:"ul"},"Switching Database Manager (SDM)"),(0,o.kt)("li",{parentName:"ul"},"Trunk Failover"),(0,o.kt)("li",{parentName:"ul"},"Trusted boundary (extended trust for CDP devices)"),(0,o.kt)("li",{parentName:"ul"},"Unicast Mac Filtering"),(0,o.kt)("li",{parentName:"ul"},"UniDirectional Link Detection (UDLD)"),(0,o.kt)("li",{parentName:"ul"},"VLAN Access Control List (VACL)"),(0,o.kt)("li",{parentName:"ul"},"VLAN Aware Port Security"),(0,o.kt)("li",{parentName:"ul"},"Weighted Tail Drop (WTD)"),(0,o.kt)("li",{parentName:"ul"},"Routing and Switching Virtual machines from Vendors")),(0,o.kt)("p",null,"To recap: You can import many images using Virtualbox or VMWare. ASIC based models like the Cisco Catalyst switches are impossible to import as a Routing and Switching image."),(0,o.kt)("p",null,"If you require more switching features, it is recommended to use larger Virtual Machine Switches and Routers (like the ones from VIRL) that run inside your choice of Qemu, Virtualbox or VMWare. For advanced switching IOSv and/or IOU is recommended."))}h.isMDXComponent=!0}}]);