(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),c=(n(0),n(184)),a={id:"architecture",title:"Architecture",sidebar_label:"Architecture"},i={id:"using-gns3/architecture",isDocsHomePage:!1,title:"Architecture",description:"GNS3 can be divided in four parts:",source:"@site/docs/using-gns3/architecture.md",permalink:"/gns3-docs/docs/using-gns3/architecture",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/architecture.md",sidebar_label:"Architecture",sidebar:"someSidebar",previous:{title:"Scale GNS3",permalink:"/gns3-docs/docs/using-gns3/scale-gns3"},next:{title:"Why does GNS3 use UUIDs?",permalink:"/gns3-docs/docs/using-gns3/why-gns3-uses-uuid"}},s=[{value:"Communications",id:"communications",children:[]},{value:"Errors",id:"errors",children:[]},{value:"Concurrency",id:"concurrency",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Notifications",id:"notifications",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"GNS3 can be divided in four parts:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"the user interface or GUI (gns3-gui or gns3-web projects)"),Object(c.b)("li",{parentName:"ul"},"the controller (gns3-server project)"),Object(c.b)("li",{parentName:"ul"},"the compute (part of the gns3-server project)"),Object(c.b)("li",{parentName:"ul"},"the emulators (Qemu, Dynamips, VirtualBox\u2026)")),Object(c.b)("p",null,"The controller pilots everything, it manages the state of each project. Only one controller should run."),Object(c.b)("p",null,"The GUI displays a topology representing a project on a canvas and allow to perform actions on given project, sending API requests to the controller."),Object(c.b)("p",null,"The compute controls emulators to run nodes. A compute that is on the same server as the controller is the same process."),Object(c.b)("p",null,"The compute usually starts an emulator instance for each node."),Object(c.b)("p",null,"A small schema:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"+---------------+                  +----------+     +------+\n|               |                  | COMPUTE  +-----\x3e QEMU |\n|  GNS3 GUI     |              +---\x3e SERVER 1 |     +------+\n|  QT interface +-----+        |   +----------+\n|               |     |        |                    +---+\n+---------------+    +v--------++               +---\x3eIOU|\n                     |CONTROLLER|               |   +---+\n      +---------+    +^--------++  +---------+  |\n      | GNS3 WEB+-----+        |   | COMPUTE +--+\n      +---------+              +---\x3e SERVER 2+--+   +--------+\n                                   +---------+  +---\x3eDYNAMIPS|\n                                                    +--------+\n")),Object(c.b)("p",null,"Use the controller API to work with the GNS3 backend"),Object(c.b)("h2",{id:"communications"},"Communications"),Object(c.b)("p",null,"All communication are done over HTTP using the JSON format."),Object(c.b)("h2",{id:"errors"},"Errors"),Object(c.b)("p",null,"A standard HTTP error is sent in case of an error:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n    "status": 409,\n    "message": "Conflict"\n}\n')),Object(c.b)("h2",{id:"concurrency"},"Concurrency"),Object(c.b)("p",null,"A node cannot processes multiple requests at the same time. However, multiple requests on multiple nodes can be executed concurrently. This should be transparent for clients since internal locks are used inside the server, so it is safe to send multiple requests at the same time and let the server manage the concurrency."),Object(c.b)("h2",{id:"authentication"},"Authentication"),Object(c.b)("p",null,"HTTP basic authentication can be used to prevent unauthorized API requests. It is recommended to set up a VPN if the communication between clients and the server must be encrypted."),Object(c.b)("h2",{id:"notifications"},"Notifications"),Object(c.b)("p",null,"Notifications can be received from the server by listening to a HTTP stream or via a Websocket."),Object(c.b)("p",null,"Read ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://gns3-server.readthedocs.io/en/latest/notifications.html"}),"Notifications")," for more information"))}l.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||c;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);