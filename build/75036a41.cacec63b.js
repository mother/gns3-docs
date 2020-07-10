(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(2),a=(n(0),n(184));const i={id:"how-to-use-console-applications-with-the-web-ui",title:"How to use applications with the GNS3 Web interface",sidebar_label:"How to use applications with the GNS3 Web interface"},r={id:"how-to/how-to-use-console-applications-with-the-web-ui",isDocsHomePage:!1,title:"How to use applications with the GNS3 Web interface",description:"A web client pack must be installed on your operating system in order to launch local applications needed to work with the GNS3 Web interface. We currently support Telnet, VNC, SPICE and packet capture applications.",source:"@site/docs/how-to/how-to-use-console-applications-with-the-web-ui.md",permalink:"/gns3-docs/docs/how-to/how-to-use-console-applications-with-the-web-ui",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/how-to/how-to-use-console-applications-with-the-web-ui.md",sidebar_label:"How to use applications with the GNS3 Web interface",sidebar:"someSidebar",previous:{title:"Importing vMX and vQFX into GNS3",permalink:"/gns3-docs/docs/how-to/importing-vmx-and-vqfx-into-gns3"},next:{title:"Troubleshoot GNS3",permalink:"/gns3-docs/docs/troubleshooting-faq/troubleshoot-gns3"}},l=[{value:"Installation on Windows",id:"installation-on-windows",children:[]},{value:"Installation on macOS",id:"installation-on-macos",children:[]},{value:"Installation on Linux",id:"installation-on-linux",children:[]},{value:"Usage",id:"usage",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A web client pack must be installed on your operating system in order to launch local applications needed to work with the GNS3 Web interface. We currently support Telnet, VNC, SPICE and packet capture applications."),Object(a.b)("p",null,"Please remember to run the GNS3 Web interface with Chrome or Firefox. Also, please note the Web client is currently in Beta version and still needs some polishing. For example packet capture will not work with a GNS3 server that requires authentication (this will be fixed in a future release)."),Object(a.b)("p",null,"Additionally, we have plans for an HTML5 console support so native consoles won\u2019t be required."),Object(a.b)("h3",{id:"installation-on-windows"},"Installation on Windows"),Object(a.b)("p",null,"Make sure the GNS3 WebClient option is ticked when installing GNS3 then follow the installation process. Protocol handlers are registered during the installation."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"../../img/how-to-use-console-applications-with-the-web-ui/1.jpg",alt:"screenshot"}))),Object(a.b)("h3",{id:"installation-on-macos"},"Installation on macOS"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Download the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/GNS3/gns3-webclient-pack/releases/download/v1.0.0b2/GNS3.WebClient.pack-1.0.0b2.dmg"}),"WebClient pack from here")),Object(a.b)("li",{parentName:"ol"},"Drag and drop the app from the DMG into /Applications. Start the app at least once to register the protocol handlers.")),Object(a.b)("h3",{id:"installation-on-linux"},"Installation on Linux"),Object(a.b)("p",null,"Please ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/GNS3/gns3-webclient-pack/blob/master/README.md"}),"read this document to install on Linux")," (via PPA, PyPi or manually). Use the \u201cgns3-webclient-config\u201d command to start from a terminal."),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("p",null,"The WebClient has 2 executables. The webclient configurator to edit settings like the console software paths and the webclient launcher that actually launches applications based on the clicked URL in the GNS3 web interface. Different protocol handlers are registered to open the webclient launcher during the WebClient installation."),Object(a.b)("p",null,"The first step is to configure your application paths or leave by default."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"../../img/how-to-use-console-applications-with-the-web-ui/2.jpg",alt:"screenshot"}))),Object(a.b)("p",null,"Then launch the Web Ui, start a node, right click on it and select \u201cconsole\u201d. Alternatively, just right click on a link and select \u201cStart capture\u201d to start a packet capture and start Wireshark."),Object(a.b)("p",null,"Choose \u201cOpen GNS3 WebClient launcher\u201d to start your application when using Google Chrome web browser."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"../../img/how-to-use-console-applications-with-the-web-ui/3.jpg",alt:"screenshot"}))),Object(a.b)("p",null,"On Firefox web browser, select the GNS3 WebClient launcher and tick \u201cRemember my choice for gns3+telnet links\u201d then click on \u201cOpen link\u201d. You won\u2019t have to do this again the next time."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"../../img/how-to-use-console-applications-with-the-web-ui/4.jpg",alt:"screenshot"}))))}s.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,d=u["".concat(r,".").concat(h)]||u[h]||b[h]||i;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);