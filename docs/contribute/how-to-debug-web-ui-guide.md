---
id: how-to-debug-web-ui-guide
title: How to debug Web UI Guide
sidebar_label: How to debug Web UI Guide
---

## Using the GNS3 API

http://api.gns3.net/en/latest/

## How to start with GNS3 Web UI
You have two options: installing the latest GNS3 with GNS3 Webclient Pack (it’s needed to run console for particular node) or to setup development environment if you want to contribute.

If you want to create development environment you should install latest node.js and yarn:

- https://nodejs.org/en/
- https://yarnpkg.com/lang/en/

then clone following projects:
```
git clone https://github.com/GNS3/gns3-web-ui.git
```

## Dependencies
### Linux & Windows & Mac OS

Go to proper folder and open console then type following command:

- ```yarn install``` to install and update dependencies
- ```yarn ng serve``` to run application (then navigate to proper port in web browser), keep the terminal open and all the changes you made will be applied without delay

If you want to build an application type ```yarn ng build``` command.

## Testing
### Linux & Windows & Mac OS
Run unit tests to make sure that changes you made won’t break any functionalities, type ```yarn ng test```.

## Reporting Bugs
For debugging purposes you can put console.log with proper message in any place of the code. Message will be printed after the function invocation.The you should open the console in the browser.

### Google Chrome
Please read the following links to get information about developers tools provided by Chrome browser:

- https://developers.google.com/web/tools/chrome-devtools/console,
- https://developers.google.com/web/tools/chrome-devtools/console/javascript

### Mozilla Firefox
Please read the following links to get information about developers tools provided by Firefox browser:

- https://developer.mozilla.org/en-US/docs/Tools
- https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox

You can report bugs on this site https://github.com/GNS3/gns3-web-ui/issues by clicking the new issue button and write proper description (add screenshot if you can).
