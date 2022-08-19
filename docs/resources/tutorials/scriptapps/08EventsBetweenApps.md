# How to communicate 2 react apps using events
in this tutorial we are going to create a 2 simple apps that will communicate via events. The first app will display an image and the second app will control the image if it showed on hidden.

### Prerequisite
Inorder to deploy or push the react script app. you need to know [How To Deploy a React App to DX as a ScriptApp](https://git.cwp.pnp-hcl.com/roquejr-almodiel/dx-scriptapps-education/tree/main/01WebpackWithDependencies#how-to-deploy-a-react-app-to-dx-as-a-scriptapp) first.

### Downloading react app
You can use `create-react-app` or `vite` or whatever you want to this react script app but for this particular tutorial I will download an react app from https://createapp.dev/ to save us some configurations.

## First React app
1. Download a react app from https://createapp.dev/
2. Extract and navigate to the directory from the command line
3. Install dependencies by running `npm install`
4. Open `src/app.js` to your editor and replace its content with the code below
```jsx

import React, {useEffect, useRef, useState} from "react";
import { hot } from 'react-hot-loader/root';


function App() {
    const [showImage, setShowImage] = useState(true);

    function hideImageHandler() {
        setShowImage(false)
    }

    function showImageHandler() {
        setShowImage(true)
    }

    useEffect(() => {
        document.addEventListener('HIDE_IMAGE', hideImageHandler);
        document.addEventListener('SHOW_IMAGE', showImageHandler);
        return () => {
            document.removeEventListener('HIDE_IMAGE', hideImageHandler);
            document.removeEventListener('SHOW_IMAGE', showImageHandler);
        }
    }, [])
    return (
        <>
            {showImage ?
                <div id="test-img-wrapper">
                    <img src="https://miro.medium.com/max/400/0*zD6qM5Tg2aQcA-BY" />
                </div>
                :
                null
            }
        </>
    )
}

export default hot(App);

```
5. build the react app by running `npm run build-prod`

## Second React app
1. Download a react app from https://createapp.dev/
2. Extract and navigate to the directory from the command line
3. Install dependencies by running `npm install`
4. Open `src/app.js` to your editor and replace its content with the code below
```jsx

import React, {useEffect, useRef, useState} from "react";
import { hot } from 'react-hot-loader/root';


function App() {
    const [showImage, setShowImage] = useState(true);

    function hideImageHandler() {
        setShowImage(false)
    }

    function showImageHandler() {
        setShowImage(true)
    }

    useEffect(() => {
        document.addEventListener('HIDE_IMAGE', hideImageHandler);
        document.addEventListener('SHOW_IMAGE', showImageHandler);
        return () => {
            document.removeEventListener('HIDE_IMAGE', hideImageHandler);
            document.removeEventListener('SHOW_IMAGE', showImageHandler);
        }
    }, [])
    return (
        <>
            {showImage ?
                <div id="test-img-wrapper">
                    <img src="https://miro.medium.com/max/400/0*zD6qM5Tg2aQcA-BY" />
                </div>
                :
                null
            }
        </>
    )
}

export default hot(App);

```
5. we need to change the ID of the element to avoid conflict to another app. to do this open `dist/index.html` and change `<div id="app"></div>` to `<div id="script-app-1"></div>`
6. we also need to change the id on `src/index.js` so open `src/index.js` and replace the content to the code below
```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


var mountNode = document.getElementById("script-app-1");
ReactDOM.render(<App />, mountNode);
``` 
7. build the react app by running `npm run build-prod`

### Deploying First React ScriptApp to DX
1. First thing to do is to update our `package.json` file to to follow the standard on how to deploy our app.
2. Open `package.json` file and add the follow code below.
```json
{
  "name": "script-app1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "clean": "rm dist/bundle.js",
    "build-dev": "webpack --mode development",
    "build-prod": "webpack --mode production",
    "start": "webpack serve --hot --mode development",
    "dx-deploy-app": "dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName \"$npm_package_config_dxclient_wcmContentName\" -wcmSiteArea \"$npm_package_config_dxclient_wcmSiteArea\" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot \"$npm_package_config_dxclient_contentRoot\" -dxProtocol $npm_package_config_dxclient_protocol -hostname $npm_package_config_dxclient_hostname -dxPort $npm_package_config_dxclient_port"

  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hot-loader": "^4.13.0"
  },
  "devDependencies": {
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "@babel/preset-react": "^7.18.6",
    "babel-loader": "^8.2.5",
    "@babel/core": "^7.18.10",
    "@babel/preset-env": "^7.18.10",
    "@hot-loader/react-dom": "^17.0.2+4.13.0",
    "webpack-dev-server": "^4.10.0"
  },
  "config": {  
    "dxclient": {  
      "wcmContentName": "FirstReactScriptApp",  
      "wcmSiteArea": "Portal Site/Content Root",  
      "mainHtmlFile": "index.html",  
      "contentRoot": "./dist",  
      "protocol": "https",  
      "hostname": "localhost",  
      "port": "10041"  
  }  
  } 
}
```
3. then run the `npm run dx-deploy-app` with your correct credentials
```bash
dxUsername=myusername dxPassword=mypassword npm run dx-deploy-app
    > script-app1@1.0.0 dx-deploy-app
    > dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName "$npm_package_config_dxclient_wcmContentName" -wcmSiteArea "$npm_package_config_dxclient_wcmSiteArea" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot "$npm_package_config_dxclient_contentRoot" -dxProtocol $npm_package_config_dxclient_protocol -hostname $npm_package_config_dxclient_hostname -dxPort $npm_package_config_dxclient_port

    2022-08-12 18:07:52 : Begin content push to Portal.
    2022-08-12 18:07:53 : WCM content ID: .
    2022-08-12 18:07:53 : WCM Content Path: .
    2022-08-12 18:07:53 : WCM Content Title: .
    2022-08-12 18:07:53 : Main HTML file: index.html.
    2022-08-12 18:07:53 : PrebuiltZip path does not exist.
    2022-08-12 18:07:53 : Archive file: 

        /var/folders/mp/bcmnxk3s0rbbj1cbbl0875bw0000gn/T/tmp--23921-YKHlZPfLo7rm-.zip
        (47056 bytes in 3 files) 

        bundle.js
        bundle.js.LICENSE.txt
        index.html.
    (node:23921) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
    (Use `node --trace-warnings ...` to show where the warning was created)
    2022-08-12 18:07:54 : Content push was successful.
    2022-08-12 18:07:54 : End content push to Portal.
    2022-08-12 18:07:54 : Body content: {"results":{"status":"success","importedFiles":{"file":[{"filename":"HTML/index.html"},{"filename":"JavaScript/bundle.js"}]},"skippedFiles":"","message":"The file that you selected was imported successfully.","contentId":"0a33fc94-68a2-4544-9033-912978beba43"}}.
```

### Deploying Second React ScriptApp to DX
1. Same step on how we deploy the first react app but with different `wcnContentName`
2.  update our `package.json` file to to follow the standard on how to deploy our app.
3. Open `package.json` file and add the follow code below.
```json
{
  "name": "script-app1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "clean": "rm dist/bundle.js",
    "build-dev": "webpack --mode development",
    "build-prod": "webpack --mode production",
    "start": "webpack serve --hot --mode development",
    "dx-deploy-app": "dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName \"$npm_package_config_dxclient_wcmContentName\" -wcmSiteArea \"$npm_package_config_dxclient_wcmSiteArea\" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot \"$npm_package_config_dxclient_contentRoot\" -dxProtocol $npm_package_config_dxclient_protocol -hostname $npm_package_config_dxclient_hostname -dxPort $npm_package_config_dxclient_port"

  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hot-loader": "^4.13.0"
  },
  "devDependencies": {
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "@babel/preset-react": "^7.18.6",
    "babel-loader": "^8.2.5",
    "@babel/core": "^7.18.10",
    "@babel/preset-env": "^7.18.10",
    "@hot-loader/react-dom": "^17.0.2+4.13.0",
    "webpack-dev-server": "^4.10.0"
  },
  "config": {  
    "dxclient": {  
      "wcmContentName": "SecondReactScriptApp",  
      "wcmSiteArea": "Portal Site/Content Root",  
      "mainHtmlFile": "index.html",  
      "contentRoot": "./dist",  
      "protocol": "https",  
      "hostname": "localhost",  
      "port": "10041"  
  }  
  }  
}
```
4. then run the `npm run dx-deploy-app` with your correct credentials
```bash
dxUsername=myusername dxPassword=mypassword npm run dx-deploy-app
    > reactapp@1.0.0 dx-deploy-app
    > dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName "$npm_package_config_dxclient_wcmContentName" -wcmSiteArea "$npm_package_config_dxclient_wcmSiteArea" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot "$npm_package_config_dxclient_contentRoot" -dxProtocol $npm_package_config_dxclient_protocol -hostname $npm_package_config_dxclient_hostname -dxPort $npm_package_config_dxclient_port

    2022-08-12 18:16:00 : Begin content push to Portal.
    2022-08-12 18:16:00 : WCM content ID: .
    2022-08-12 18:16:00 : WCM Content Path: .
    2022-08-12 18:16:00 : WCM Content Title: .
    2022-08-12 18:16:00 : Main HTML file: index.html.
    2022-08-12 18:16:00 : PrebuiltZip path does not exist.
    2022-08-12 18:16:01 : Archive file: 

        /var/folders/mp/bcmnxk3s0rbbj1cbbl0875bw0000gn/T/tmp--24417-z3tPtQp7BOEb-.zip
        (47068 bytes in 3 files) 

        bundle.js
        bundle.js.LICENSE.txt
        index.html.
    (node:24417) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
    (Use `node --trace-warnings ...` to show where the warning was created)
    2022-08-12 18:16:02 : Content push was successful.
    2022-08-12 18:16:02 : End content push to Portal.
    2022-08-12 18:16:02 : Body content: {"results":{"status":"success","importedFiles":{"file":[{"filename":"HTML/index.html"},{"filename":"JavaScript/bundle.js"}]},"skippedFiles":"","message":"The file that you selected was imported successfully.","contentId":"982018d4-c12e-45fe-a56f-178ac11ae8b9"}}. 
```

### Creating and pushing script app to DX
1. navigate to the page where you want to add the script app
2. turn-on edit mode and click `add page components and applications`
3. then click `applications` tab and search `script application` on the search bar
4. drag and drop the script application on the page
5. click `action` then `import`
6. click `copy from existing content` tab ad click the first script application that we deploy
7. click `copy` button and close the window
8. then do the same steps from 1 - 7 but for the second app that we deploy
9. turn-off edit mode and check the page
   ![import 2 script app 1 and 2](https://media.git.cwp.pnp-hcl.com/user/3487/files/8fe38ba1-7eda-455a-8b9e-e945f1dad8bb)

## Key Concepts
On this tutorial we know how to add react app that communicates with the themes. but the approach we use in order to achieve the communication is called event listeners of javascript. Read more https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

Basically what we did is.
1. Create a Event Listener that will execute a function or callback. that is what we did on the first app
```jsx
function App() {
    const [showImage, setShowImage] = useState(true);

    function hideImageHandler() {
        setShowImage(false)
    }

    function showImageHandler() {
        setShowImage(true)
    }

    useEffect(() => {
        document.addEventListener('HIDE_IMAGE', hideImageHandler);
        document.addEventListener('SHOW_IMAGE', showImageHandler);
        return () => {
            document.removeEventListener('HIDE_IMAGE', hideImageHandler);
            document.removeEventListener('SHOW_IMAGE', showImageHandler);
        }
    }, [])
    return (
        <>
            {showImage ?
                <div id="test-img-wrapper">
                    <img src="https://miro.medium.com/max/400/0*zD6qM5Tg2aQcA-BY" />
                </div>
                :
                null
            }
        </>
    )
}
```
we use `document.addEventListener` function which register an event. The event name `HIDE_IMAGE` as a first parameter and the callback or function as the second parameter.

we also use `document.removeEventListener` function to unregister the listener when the component is unmounted.

2. Then we create an event dispatcher. That is what we did on the react app
```jsx
const hideImageHandler = (event) => {
	event.preventDefault();
	document.dispatchEvent(new CustomEvent('HIDE_IMAGE'));
}

const showImageHandler = (event) => {
	event.preventDefault();
	document.dispatchEvent(new CustomEvent('SHOW_IMAGE'));
}
return (
	<>
	  <button onClick={hideImageHandler}>Hide Image</button>
	  - <button onClick={showImageHandler}>Show Image</button>
	</>
)
```
on our react app you notice that each button has an handler and each handler will dispatch an event. we use `document.dispatchEvent` to dispatch an event.

# Performance Issue
On this tutorial we have push 2 seperate react app into our page. But we have serious performance issue here because those react apps are bundled seperately. So those react apps has its all dependency in thier bundles. And we dont want that. Imagine we have 5 react script app on our page with each of those apps has dependency in their bundles. Fortunately we have a fix for that.

To fix this performance issue we just centralize the dependency and make it shareable to all other script apps. We can do that by following the links below.
1. [How To Deploy Apps Excluding its Dependencies](03AppsExcludingDependencies/README.MD)
2. [How To Deploy Multiple Apps with Shared Dependencies](04AppsWithSharedDependencies/README.MD)
3. [How To Deploy Apps with Different Dependency Versions](05AppsWithDiffDepVersions/README.MD)
