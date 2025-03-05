"use strict";(self.webpackChunkgns_3_docs=self.webpackChunkgns_3_docs||[]).push([[174],{5680:(e,t,o)=>{o.d(t,{xA:()=>m,yg:()=>u});var n=o(6540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),g=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=g(o),d=a,u=p["".concat(l,".").concat(d)]||p[d]||c[d]||r;return o?n.createElement(u,i(i({ref:t},m),{},{components:o})):n.createElement(u,i({ref:t},m))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var g=2;g<r;g++)i[g]=o[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1680:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var n=o(8168),a=o(8587),r=(o(6540),o(5680)),i=o(6025),s=["components"],l={id:"adding-vmware-vms-to-gns3-topologies",title:"Adding VMware VMs to GNS3 Topologies",sidebar_label:"Adding VMware VMs to GNS3 Topologies"},g=void 0,m={unversionedId:"emulators/adding-vmware-vms-to-gns3-topologies",id:"emulators/adding-vmware-vms-to-gns3-topologies",title:"Adding VMware VMs to GNS3 Topologies",description:"Introduction",source:"@site/docs/emulators/adding-vmware-vms-to-gns3-topologies.md",sourceDirName:"emulators",slug:"/emulators/adding-vmware-vms-to-gns3-topologies",permalink:"/docs/emulators/adding-vmware-vms-to-gns3-topologies",draft:!1,editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/emulators/adding-vmware-vms-to-gns3-topologies.md",tags:[],version:"current",frontMatter:{id:"adding-vmware-vms-to-gns3-topologies",title:"Adding VMware VMs to GNS3 Topologies",sidebar_label:"Adding VMware VMs to GNS3 Topologies"},sidebar:"someSidebar",previous:{title:"Non-Native IOU for Windows and OSX",permalink:"/docs/emulators/non-native-iou-for-windows-and-osx"},next:{title:"Docker support in GNS3",permalink:"/docs/emulators/docker-support-in-gns3"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"VMWare Limitations in GNS3",id:"vmware-limitations-in-gns3",level:2},{value:"Limitation of VMware Player",id:"limitation-of-vmware-player",level:3},{value:"Why use VMWare?",id:"why-use-vmware",level:2},{value:"What about VMWare Fusion?",id:"what-about-vmware-fusion",level:2},{value:"Add a virtual machine to VMWare Workstation (Local Server)",id:"add-a-virtual-machine-to-vmware-workstation-local-server",level:2},{value:"Add a virtual machine to GNS3 (Local Server)",id:"add-a-virtual-machine-to-gns3-local-server",level:2},{value:"Create a GNS3 Topology",id:"create-a-gns3-topology",level:2}],d={toc:c};function u(e){var t=e.components,o=(0,a.A)(e,s);return(0,r.yg)("wrapper",(0,n.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"This document explains how to add VMware virtual machines to GNS3 topologies. Even though this document discusses the use of VMware virtual machines, you can do something similar using Virtualbox."),(0,r.yg)("p",null,"This document will show you two methods of adding a virtual machine to GNS3:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Manually using a local install of GNS3"),(0,r.yg)("li",{parentName:"ol"},"Using an appliance and adding the VM to the GNS3 VM")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"We are not discussing the importing of the GNS3 VM in this document; but rather the addition of other virtual machines to GNS3 topologies which may be running in the GNS3 VM or running locally.")),(0,r.yg)("h2",{id:"vmware-limitations-in-gns3"},"VMWare Limitations in GNS3"),(0,r.yg)("p",null,"The data of the VMware VMs are stored outside GNS3. This mean a topology using a VMware VM will not be portable on a different computer. If you want a portable topology you will need to use Qemu."),(0,r.yg)("p",null,"You can\u2019t run multiple instances of the same VMware VM if you are using VMware Player. You need a paid version of VMware to do that."),(0,r.yg)("h3",{id:"limitation-of-vmware-player"},"Limitation of VMware Player"),(0,r.yg)("p",null,"The Player version of VMware has limitations and if your VM are not in the default directory sometimes GNS3 can\u2019t locate the VM you created."),(0,r.yg)("p",null,"This problem doesn\u2019t occur with the paid version of VMware because a central database is available to third parties applications."),(0,r.yg)("h2",{id:"why-use-vmware"},"Why use VMWare?"),(0,r.yg)("p",null,"Some appliances are designed to only run in VMware.  Also, there are times when you may simply prefer using a desktop VM (and the GUI applications it can provide), instead of using the serial console to work with the VMs CLI in a terminal.   Desktop VMs are more responsive in VMware than Qemu, purely due to technical reasons that are beyond the scope of this document."),(0,r.yg)("h2",{id:"what-about-vmware-fusion"},"What about VMWare Fusion?"),(0,r.yg)("p",null,"On MacOSX,  VMware Fusion is used instead of VMware Workstation. The user interface of VMware Fusion is different than  VMware Workstations, but it works in the same way with GNS3, so the same principles apply."),(0,r.yg)("h2",{id:"add-a-virtual-machine-to-vmware-workstation-local-server"},"Add a virtual machine to VMWare Workstation (Local Server)"),(0,r.yg)("p",null,"If you already have a virtual machine imported into VMware Workstation, go to the next section of this document."),(0,r.yg)("p",null,"Download or copy a virtual machine ISO to your local computer. In this example, TinyCore Linux is used. This is a recommended lightweight Linux distribution:"),(0,r.yg)("p",null,"Download link: ",(0,r.yg)("a",{parentName:"p",href:"http://tinycorelinux.net/downloads.html"},"http://tinycorelinux.net/downloads.html")),(0,r.yg)("p",null,"ISO on local PC:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/1.jpg")}),(0,r.yg)("p",null,"In VMware Workstation, click ",(0,r.yg)("strong",{parentName:"p"},"\u201cCreate a New Virtual Machine\u201d"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/2.jpg")}),(0,r.yg)("p",null,"Follow the VMware Wizard to import create the new virtual machine. In the first step, select ",(0,r.yg)("strong",{parentName:"p"},"Typical")," and then click ",(0,r.yg)("strong",{parentName:"p"},"Next >"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/3.jpg")}),(0,r.yg)("p",null,"Point to the ISO file downloaded and click ",(0,r.yg)("strong",{parentName:"p"},"Next >"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/4.jpg")}),(0,r.yg)("p",null,"Select ",(0,r.yg)("strong",{parentName:"p"},"Linux")," as the ",(0,r.yg)("strong",{parentName:"p"},"Guest operating system")," and ",(0,r.yg)("strong",{parentName:"p"},"Other Linux 4.x")," as the Version and then click ",(0,r.yg)("strong",{parentName:"p"},"Next >"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/5.jpg")}),(0,r.yg)("p",null,"Name the VM and change the default ",(0,r.yg)("strong",{parentName:"p"},"Location")," if you want to. In this example the VM is called TinyCore-Local-VMware and the default Location is used. Then click ",(0,r.yg)("strong",{parentName:"p"},"Next >"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/6.jpg")}),(0,r.yg)("p",null,"Specify the amount of disk space required by your virtual machine. In this example only 1 GB is allocated. You can also select ",(0,r.yg)("strong",{parentName:"p"},"\u201cStore virtual disk as a single file\u201d"),", as this VM will be so small. Then click ",(0,r.yg)("strong",{parentName:"p"},"Next >"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/7.jpg")}),(0,r.yg)("p",null,"Click ",(0,r.yg)("strong",{parentName:"p"},"Customize Hardware"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/8.jpg")}),(0,r.yg)("p",null,"Customize the hardware of the VM as required. In this example only 128 MB of RAM is required for the VM. To do so, click ",(0,r.yg)("strong",{parentName:"p"},"\u201cMemory\u201d")," in the Virtual Machine settings, type ",(0,r.yg)("strong",{parentName:"p"},"\u201c128\u201d")," in the dialog box for the amount of memory it will use. Once the required changes have been completed, click ",(0,r.yg)("strong",{parentName:"p"},"Close"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/9.jpg")}),(0,r.yg)("p",null,"To complete the VM import, click ",(0,r.yg)("strong",{parentName:"p"},"Finish"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/10.jpg")}),(0,r.yg)("p",null,"The VM is now available in VMware Workstation:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/11.jpg")}),(0,r.yg)("p",null,"Power on the virtual machine in VMware Workstation:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/12.jpg")}),(0,r.yg)("p",null,"Install the operating system as required. TinyCore Linux does not require this and is booted to RAM by selecting ",(0,r.yg)("strong",{parentName:"p"},"Boot TinyCore"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/13.jpg")}),(0,r.yg)("p",null,"Complete any operating system installation setup as required. In this example, TinyCore simply boots up and no configuration is required:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/14.jpg")}),(0,r.yg)("p",null,"Once install is completed, shut down the virtual machine by either clicking on the ",(0,r.yg)("strong",{parentName:"p"},"Suspend")," button in VMware Workstation and select ",(0,r.yg)("strong",{parentName:"p"},"Power Off")," (shown below),  or right-clicking on the tab for the virtual machine (containing its name), select ",(0,r.yg)("strong",{parentName:"p"},"Power"),", and then ",(0,r.yg)("strong",{parentName:"p"},"Shut Down Guest")," (not shown):"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/15.jpg")}),(0,r.yg)("p",null,"You are now ready to integrate the new VM with GNS3."),(0,r.yg)("h2",{id:"add-a-virtual-machine-to-gns3-local-server"},"Add a virtual machine to GNS3 (Local Server)"),(0,r.yg)("p",null,"Once you have installed and configured your virtual machine in VMware Workstation, you are ready to integrate the VM with GNS3."),(0,r.yg)("p",null,"Start GNS3 and create a ",(0,r.yg)("strong",{parentName:"p"},"New project"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/16.jpg")}),(0,r.yg)("p",null,"Click ",(0,r.yg)("strong",{parentName:"p"},"Edit")," and then ",(0,r.yg)("strong",{parentName:"p"},"Preferences"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/17.jpg")}),(0,r.yg)("p",null,"Click ",(0,r.yg)("strong",{parentName:"p"},"VMware VMs")," and ",(0,r.yg)("strong",{parentName:"p"},"New"),", to add a new VMware virtual machine:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/18.jpg")}),(0,r.yg)("p",null,"You will be prompted which server type to use, to run this virtual machine. As this article uses the local server, the remote server option is greyed out. Click ",(0,r.yg)("strong",{parentName:"p"},"Next>"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/19.jpg")}),(0,r.yg)("p",null,"On the next screen, click on the dropdown:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/20.jpg")}),(0,r.yg)("p",null,"The dropdown lists all the available VMware virtual machines available on this computer. Left-click on your new TinyCore-Local-VMware virtual machine to select it:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/21.jpg")}),(0,r.yg)("p",null,"Click ",(0,r.yg)("strong",{parentName:"p"},"Finish>")," to complete the import process:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/22.jpg")}),(0,r.yg)("p",null,"The new virtual machine is now available in GNS3. Ensure that it is still highlighted, and click ",(0,r.yg)("strong",{parentName:"p"},"Edit")," to change the VM settings:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/23.jpg")}),(0,r.yg)("p",null,"Click the ",(0,r.yg)("strong",{parentName:"p"},"Network")," Tab:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/24.jpg")}),(0,r.yg)("p",null,"Ensure that \u201cAllow GNS3 to override non custom VMware adapter\u201d is selected, and click ",(0,r.yg)("strong",{parentName:"p"},"OK")," to finish editing the TinyCore-Local-VMware virtual machine\u2019s properties."),(0,r.yg)("p",null,"GNS3 will randomly select an available Host-only VMnet to bridge the VMware virtual machine into the GNS3 topology. VMnet 0 (bridged), VMnet 1 (host-only), and VMnet 8 (NAT) are available in VMware by default, but will not be used by GNS3 for this purpose!"),(0,r.yg)("p",null,"It is important that any new Host-Only VMnet created for GNS3 to use have the default DHCP for it disabled!"),(0,r.yg)("p",null,"Below a screenshot of the Virtual Network Editor (VNE) in VMware Workstation Pro, showing additional Host-only VMnets (VMnets 2-7, and 9 - 19), for illustration purposes. VNE is unavailable to users of VMware Workstation Player."),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/25.jpg")}),(0,r.yg)("p",null,"(notice that VMnets 2 - 7 are Host-only, and have their own local DHCP servers disabled. That is important!!)"),(0,r.yg)("p",null,"VMware Workstation Players (and VMware Workstation Pro users) can use a script included with GNS3 (named gns3vmnet) to automatically create and configure the additional VMnets necessary."),(0,r.yg)("p",null,"In Windows, this executable is located in the default GNS3 installation directory:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/26.jpg")}),(0,r.yg)("p",null,"(You may need to create an exemption/exclusion in your anti-virus software to allow this executable to run. This process varies, so consult the documentation of the anti-virus suite you use for instructions.)"),(0,r.yg)("p",null,"To have GNS3 automatically create the necessary Host-only VMnets for you (using the aforementioned gns3vmnet file), click on ",(0,r.yg)("strong",{parentName:"p"},"VMware -> Advanced local settings"),", and then click on the ",(0,r.yg)("strong",{parentName:"p"},"Configure")," button:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/27.jpg")}),(0,r.yg)("p",null,"(If necessary, you can have GNS3 remove the host-only VMnets it created by clicking the ",(0,r.yg)("strong",{parentName:"p"},"Reset")," button, instead).  "),(0,r.yg)("p",null,"Once completed, click Click ",(0,r.yg)("strong",{parentName:"p"},"OK")," to complete the integration."),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/28.jpg")}),(0,r.yg)("h2",{id:"create-a-gns3-topology"},"Create a GNS3 Topology"),(0,r.yg)("p",null,"Once you have integrated the new virtual machine with GNS3, you can now create topologies that contain the new VM."),(0,r.yg)("p",null,"To create a new GNS3 topology, select a group of devices in the ",(0,r.yg)("strong",{parentName:"p"},"Devices Toolbar")," by clicking the ",(0,r.yg)("strong",{parentName:"p"},"End Devices")," button"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/29.jpg")}),(0,r.yg)("p",null,"The new virtual machine is now available to be added to a GNS3 topology:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/30.jpg")}),(0,r.yg)("p",null,"Drag and drop the selected node (device) to the GNS3 ",(0,r.yg)("strong",{parentName:"p"},"Workspace"),". An instance of the node becomes available in the ",(0,r.yg)("strong",{parentName:"p"},"Workspace"),". In this example, the TinyCore PC is now available:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/31.jpg")}),(0,r.yg)("p",null,"Drag and drop another node into the GNS3 ",(0,r.yg)("strong",{parentName:"p"},"Workspace"),". For this article,  a router will be added to the GNS3 workspace. The devices available will depend on your GNS3 configuration:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/32.jpg")}),(0,r.yg)("p",null,"Click the ",(0,r.yg)("strong",{parentName:"p"},"Toolbar Device")," button again to collapse the group:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/33.jpg")}),(0,r.yg)("p",null,"Click the ",(0,r.yg)("strong",{parentName:"p"},"Add a Link")," button to start adding links to your topology. The mouse cursor will change to indicate that links can be added:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/34.jpg")}),(0,r.yg)("p",null,"Click on the TinyCore-Local-VMware~1 virtual machine in your topology,  to display its  available interfaces. In this example ",(0,r.yg)("strong",{parentName:"p"},"Ethernet0")," is available (the available interfaces will be device dependant):"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/35.jpg")}),(0,r.yg)("p",null,"Click the interface and then select another device in the topology to connect the interface to. In this example ",(0,r.yg)("strong",{parentName:"p"},"Ethernet 0")," on ",(0,r.yg)("strong",{parentName:"p"},"TinyCore-Local-VMware")," was selected and the link was joined to the ",(0,r.yg)("strong",{parentName:"p"},"FastEthernet0/0")," interface of ",(0,r.yg)("strong",{parentName:"p"},"R1"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/36.jpg")}),(0,r.yg)("p",null,"Click the ",(0,r.yg)("strong",{parentName:"p"},"Add a Link")," button to stop adding links. The mouse cursor will change back to normal to indicate that you have stopped adding links:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/37.jpg")}),(0,r.yg)("p",null,"Click the ",(0,r.yg)("strong",{parentName:"p"},"Show/Hide interface labels")," button on the ",(0,r.yg)("strong",{parentName:"p"},"GNS3 Toolbar")," to display interface labels in your topology:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/38.jpg")}),(0,r.yg)("p",null,"This will display the connected interfaces of both devices:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/39.jpg")}),(0,r.yg)("p",null,"You are now ready to power on your network devices. Click the ",(0,r.yg)("strong",{parentName:"p"},"Start/Resume")," button on the ",(0,r.yg)("strong",{parentName:"p"},"GNS3 Toolbar")," to start up your network devices:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/40.jpg")}),(0,r.yg)("p",null,"GNS3 indicates that the devices have been powered on by turning the interface connectors from red to green:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/41.jpg")}),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"GNS3 will automatically start up the VMware virtual machine when you click the start button (shown below).  The only available console options for this TinyCore-Local-VMware are None and Telnet. We will be using the GUI displayed in GNS3 to configure this device:")),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/42.jpg")}),(0,r.yg)("p",null,"To access the serial console of the router (or any other additional nodes you may have in your topology), click the Console All button in the Toolbar to launch your select terminal emulator.  The below example uses Solar-PuTTY, as it\u2019s included in the Windows GNS3 All-in-one installer from ",(0,r.yg)("a",{parentName:"p",href:"https://gns3.com"},"gns3.com"),", and is set to be the default terminal emulator (you\u2019re free to select a different terminal emulator. There are instructions available in ",(0,r.yg)("a",{parentName:"p",href:"../using-gns3/beginners/the-console-terminal"},"this article")," showing how to do so)."),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/43.jpg")}),(0,r.yg)("p",null,"Be advised that Solar-PuTTY is not included by default if the GNS3 AIO installer was downloaded from Github (regular PuTTY will be included instead).  "),(0,r.yg)("p",null,"Solar-PuTTY is available for free on SolarWinds website ",(0,r.yg)("a",{parentName:"p",href:"https://www.solarwinds.com/free-tools/solar-putty"},"here"),"."),(0,r.yg)("p",null,"If you have downloaded Solar-PuTTY from SolarWinds will be in a .zip archive. Decompress that file, copy the Solar-PuTTY executable to the GNS3 installation directory. ",(0,r.yg)("a",{parentName:"p",href:"../using-gns3/beginners/the-console-terminal"},"This article")," (the same one linked to above) shows how to change the default terminal emulator GNS3 will use."),(0,r.yg)("p",null,"Let\u2019s go back to the TinyCore-Local-VMware virtual machine running in the VMware Workstation GUI:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/44.jpg")}),(0,r.yg)("p",null,"In this example, R1 is configured as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"R1# configure terminal\nR1(config)# interface fastEthernet 0/0\nR1(config-if)# ip address 10.1.1.1 255.255.255.0\nR1(config-if)# no shutdown\nR1(config-if)# end\nR1#\n")),(0,r.yg)("p",null,"Configure the VM with an IP address in the same subnet. In TinyCore, this is done by first selecting the Control Panel:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/45.jpg")}),(0,r.yg)("p",null,"Click ",(0,r.yg)("strong",{parentName:"p"},"Network"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/46.jpg")}),(0,r.yg)("p",null,"Configure the relevant IP addressing information and click ",(0,r.yg)("strong",{parentName:"p"},"Apply")," and then Exit:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/47.jpg")}),(0,r.yg)("p",null,"In this example the following settings have been used:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Interface: eth0\nIP address: 10.1.1.2\nMask: 255.255.255.0\nBroadcast: 10.1.1.255\nGateway: 10.1.1.1\nDNS: 8.8.8.8\n")),(0,r.yg)("p",null,"Click Apply to save the network configuration of this VM."),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/48.jpg")}),(0,r.yg)("p",null,"Click ",(0,r.yg)("strong",{parentName:"p"},"Exit")," to close the ",(0,r.yg)("strong",{parentName:"p"},"Network Configuration")," pop-up window, and then click on the ",(0,r.yg)("strong",{parentName:"p"},"X")," in the upper-right corner of the TinyCore ",(0,r.yg)("strong",{parentName:"p"},"Control Panel")," to close it:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/49.jpg")}),(0,r.yg)("p",null,"Click on the ",(0,r.yg)("strong",{parentName:"p"},"Terminal")," icon at the bottom of the TinyCore GUI to open a terminal:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/50.jpg")}),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/51.jpg")}),(0,r.yg)("p",null,"(a terminal is now open)\nPing R1 from the TinyCore PC:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/52.jpg")}),(0,r.yg)("p",null,"Result: The New TinyCore PC can ping the GNS3 router R1."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Congratulations!")," You have integrated a new VMware virtual machine with GNS3."),(0,r.yg)("p",null,"Addendum:\nIf you\u2019re curious to see which of those new host-only VMnets this particular virtual machine is using, click ",(0,r.yg)("strong",{parentName:"p"},"Edit virtual machine settings")," in VMware Workstation:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/53.jpg")}),(0,r.yg)("p",null,"When you first created the TinyCore-Local-VMware virtual machine, it was set to use a NAT (VMnet 8) by default:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/54.jpg")}),(0,r.yg)("p",null,"After importing this virtual machine into GNS3, adding it to a topology, and powering up, GNS3 happened to select Host-only VMnet 2, during the creation of this article:"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/55.jpg")}),(0,r.yg)("p",null,"Also note that GNS3 also created and configured a ",(0,r.yg)("strong",{parentName:"p"},"Serial Port")," (set to be connected at power on) for this VM, along with a ",(0,r.yg)("strong",{parentName:"p"},"Named Pipe"),":"),(0,r.yg)("img",{alt:"screenshot",src:(0,i.A)("img/emulators/adding-vmware-vms-to-gns3-topologies/56.jpg")}),(0,r.yg)("p",null,"The named pipe is ",(0,r.yg)("inlineCode",{parentName:"p"},"\\\\.\\pipe\\gns3_vmware\\UUID"),"\nFor more information on this, check the GNS3 Architecture article"))}u.isMDXComponent=!0}}]);