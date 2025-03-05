"use strict";(self.webpackChunkgns_3_docs=self.webpackChunkgns_3_docs||[]).push([[4734],{5680:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>f});var n=o(6540);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,i=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=l(o),p=s,f=c["".concat(u,".").concat(p)]||c[p]||h[p]||i;return o?n.createElement(f,r(r({ref:t},d),{},{components:o})):n.createElement(f,r({ref:t},d))}));function f(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=o.length,r=new Array(i);r[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:s,r[1]=a;for(var l=2;l<i;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2751:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(8168),s=o(8587),i=(o(6540),o(5680)),r=["components"],a={id:"why-gns3-uses-uuid",title:"Why does GNS3 use UUIDs?",sidebar_label:"Why does GNS3 use UUIDs?"},u=void 0,l={unversionedId:"using-gns3/design/why-gns3-uses-uuid",id:"using-gns3/design/why-gns3-uses-uuid",title:"Why does GNS3 use UUIDs?",description:"A commonly asked  question about GNS3, is why I can\u2019t easily find the files of a node or project names on disk. It\u2019s due to the usage of UUIDs in folder naming.",source:"@site/docs/using-gns3/design/why-gns3-uses-uuid.md",sourceDirName:"using-gns3/design",slug:"/using-gns3/design/why-gns3-uses-uuid",permalink:"/docs/using-gns3/design/why-gns3-uses-uuid",draft:!1,editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/design/why-gns3-uses-uuid.md",tags:[],version:"current",frontMatter:{id:"why-gns3-uses-uuid",title:"Why does GNS3 use UUIDs?",sidebar_label:"Why does GNS3 use UUIDs?"},sidebar:"someSidebar",previous:{title:"Architecture",permalink:"/docs/using-gns3/design/architecture"},next:{title:"Which emulator should I use?",permalink:"/docs/emulators/which-emulators-should-i-use"}},d={},c=[{value:"What is a UUID?",id:"what-is-a-uuid",level:2},{value:"Why use UUIDs?",id:"why-use-uuids",level:2},{value:"Node UUID in folders",id:"node-uuid-in-folders",level:2},{value:"Project UUIDs on a remote server",id:"project-uuids-on-a-remote-server",level:2},{value:"User or third parties application are not supposed to directly interact with files",id:"user-or-third-parties-application-are-not-supposed-to-directly-interact-with-files",level:2},{value:"What is on disk is not necessarily what is in the VM",id:"what-is-on-disk-is-not-necessarily-what-is-in-the-vm",level:3},{value:"Modification on disk could be lost",id:"modification-on-disk-could-be-lost",level:3},{value:"Modification on disk could corrupt the node",id:"modification-on-disk-could-corrupt-the-node",level:3},{value:"Data could be on another server",id:"data-could-be-on-another-server",level:3}],h={toc:c};function p(e){var t=e.components,o=(0,s.A)(e,r);return(0,i.yg)("wrapper",(0,n.A)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"A commonly asked  question about GNS3, is why I can\u2019t easily find the files of a node or project names on disk. It\u2019s due to the usage of UUIDs in folder naming."),(0,i.yg)("h2",{id:"what-is-a-uuid"},"What is a UUID?"),(0,i.yg)("p",null,"A UUID is a 128-bit number. The generation of a UUID doesn\u2019t require a central registration authority in order to be almost unique, while providing a low probability of collisions. In GNS3, we represent a UUID in this manner: 42a1b682-b5bf-4de4-b5af-5366fc20a111."),(0,i.yg)("p",null,"More information about UUIDs can be found here: ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"https://en.wikipedia.org/wiki/Universally_unique_identifier")),(0,i.yg)("h2",{id:"why-use-uuids"},"Why use UUIDs?"),(0,i.yg)("p",null,"Because UUIDs are unique, you can be assured that a UUID for a project or node on your computer is not in use on another computer. This allows the sharing of projects without conflicts. Otherwise, it\u2019s highly probable that the same names for nodes or projects will be used, causing potential conflicts.  "),(0,i.yg)("h2",{id:"node-uuid-in-folders"},"Node UUID in folders"),(0,i.yg)("p",null,"If you list the files of a project,  you will see that the nodes folder uses UUID:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"# ls -R myproject\nproject-files tutu.gns3\n\nmyproject/project-files:\nvpcs\n\nmyproject/project-files/vpcs:\n1c18e765-0107-4083-b371-a92d490eb8a0\n4349251e-1d91-454f-9d89-c998cbfa90c9\n\nmyproject/project-files/vpcs/1c18e765-0107-4083-b371-a92d490eb8a0:\nstartup.vpc\n\nmyproject/project-files/vpcs/4349251e-1d91-454f-9d89-c998cbfa90c9:\nstartup.vpc\n")),(0,i.yg)("p",null,"The UUID for a node is stable and will never change."),(0,i.yg)("p",null,"The main reason for using UUIDs instead of names, is that most emulators don\u2019t support changing the path of their files while the emulator is running. If you want to rename a node and change the path of a folder, you\u2019d need to stop the node and restart it."),(0,i.yg)("p",null,"The second reason, is that some emulators have restrictions on the characters in the path. By using UUIDs, the user doesn\u2019t need to care about that."),(0,i.yg)("h2",{id:"project-uuids-on-a-remote-server"},"Project UUIDs on a remote server"),(0,i.yg)("p",null,"When you use GNS3 on your local computer, you can choose the location of the project files. It\u2019s for backward compatibility, and to allow user to freeup  disk space without starting GNS3. However,  on a remote server, all projects are in the same directory,  with a UUID as their name."),(0,i.yg)("p",null,"The first reason is to avoid problems when renaming/copy a project. Second reason is to prevent problem if the remote server filesystem doesn\u2019t support UTF-8."),(0,i.yg)("p",null,"This also allows running multiple GNS3 servers using the same shared projects folder,  without the risk of collision. In the future, it should be possible to support multiple users with same project name, sharing a common server."),(0,i.yg)("h2",{id:"user-or-third-parties-application-are-not-supposed-to-directly-interact-with-files"},"User or third parties application are not supposed to directly interact with files"),(0,i.yg)("p",null,"There's a reason for GNS3 not consider the need to have a user friendly file system. Nobody should directly interact with what is contained in the folder. It\u2019s internal to GNS3,  and there are good reasons for this. GNS3 provides tools to export or edit files,  and you need to use them. If you build a third party's application, use the API to apply your modification(s). You can find more information over at ",(0,i.yg)("a",{parentName:"p",href:"http://api.gns3.net/"},"http://api.gns3.net/"),"."),(0,i.yg)("h3",{id:"what-is-on-disk-is-not-necessarily-what-is-in-the-vm"},"What is on disk is not necessarily what is in the VM"),(0,i.yg)("p",null,"If you browse the disk, you will see stuff that could be the configuration file of the node. But this not always synced, and for various reasons, they could be out of sync. This is normal. You could have a delay when you save in the emulator,  and when GNS3 is notified about the changes and dumps the configuration on disk."),(0,i.yg)("h3",{id:"modification-on-disk-could-be-lost"},"Modification on disk could be lost"),(0,i.yg)("p",null,"What you change on disk could be lost at the next sync."),(0,i.yg)("h3",{id:"modification-on-disk-could-corrupt-the-node"},"Modification on disk could corrupt the node"),(0,i.yg)("p",null,"This is the worst case scenario. A user could be modifying something on disk outside GNS3, and GNS3 attempts to write the file at the same time. This could corrupt the files. Some configuration file modifications can even crash the emulator."),(0,i.yg)("h3",{id:"data-could-be-on-another-server"},"Data could be on another server"),(0,i.yg)("p",null,"If you split up your project on multiple servers,  the data could be spread across all of them. If you use the API,  this won\u2019t be a concern."))}p.isMDXComponent=!0}}]);