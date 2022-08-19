
# How to communicate themes and script apps using events

in this tutorial we are going to create a 2 simple apps that will communicate via events. The first app will display an image on our themes and the second app will control the image if it showed on hidden.

### Prerequisite
Inorder to deploy or push the react script app. you need to know [How To Deploy a React App to DX as a ScriptApp](https://git.cwp.pnp-hcl.com/roquejr-almodiel/dx-scriptapps-education/tree/main/01WebpackWithDependencies#how-to-deploy-a-react-app-to-dx-as-a-scriptapp) first.

## First app setup (DX Theme)

On our first app. We need to change the theme code to display an image. You can do this on theme editor.

1. Go to DX dashboard and navigate to theme manager
2. On theme manager click the edit theme button on your current theme to open the theme editor.
3. Then you need to add the following codes below to the theme.html


```html
<!-- add the styles below to the header of your themes -->
<style>
    #test-img-wrapper {
        margin: 20px;
    }

    #test-img-wrapper img {
        border: 10px violet solid;
    }
</style>


<!-- add the codes below to anywhere in your body -->
<div id="test-img-wrapper">
    <img src="https://yourimagehere.com/placeholder" />
</div>

<!-- tadd the codes below to the script of your themes -->
<script>
    // code below will register an event listener and execute a call back that hides the test-img-wrapper div
    document.addEventListener('HIDE_IMAGE', function (payload) {
        document.getElementById('test-img-wrapper').style.display = "none";
    });
    
    // code below will register an event listener and execute a call back that shows the test-img-wrapper div
    document.addEventListener('SHOW_IMAGE', function (payload) {
        document.getElementById("test-img-wrapper").style.display = "block";
    });
</script>
```

and thats it for our first app on themes.

## Second App (React script app)

### Downloading react app
You can use `create-react-app` or `vite` or whatever you want to this react script app but for this particular tutorial I will download an react app from https://createapp.dev/ to save us some configurations.
1. Download a react app from https://createapp.dev/
2. Extract and navigate to the directory from the command line
3. Install dependencies by running `npm install`
4. Open `src/app.js` to your editor and replace its content with the code below
```jsx
import React from "react";
import {hot} from 'react-hot-loader/root';

function App() {
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
}

export default hot(App);
```
6. build the react app by running `npm run build-prod`

note: please check react app readme.md for more build commands

### Deploying React ScriptApp to DX
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
    "webpack": "^5.73.0",
    "webpack-cli": "^4.10.0",
    "@babel/preset-react": "^7.18.6",
    "babel-loader": "^8.2.5",
    "@babel/core": "^7.18.6",
    "@babel/preset-env": "^7.18.6",
    "@hot-loader/react-dom": "^17.0.2+4.13.0",
    "webpack-dev-server": "^4.9.3"
  },
  "config": {  
    "dxclient": {  
      "wcmContentName": "ReactScript1",  
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
    > sample-app@1.0.0 dx-deploy-app
    > dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName "$npm_package_config_dxclient_wcmContentName" -wcmSiteArea "$npm_package_config_dxclient_wcmSiteArea" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot "$npm_package_config_dxclient_contentRoot" -dxProtocol $npm_package_config_dxclient_protocol -hostname $npm_package_config_dxclient_hostname -dxPort $npm_package_config_dxclient_port

    2022-08-12 10:53:20 : Begin content push to Portal.
    2022-08-12 10:53:20 : WCM content ID: .
    2022-08-12 10:53:20 : WCM Content Path: .
    2022-08-12 10:53:20 : WCM Content Title: .
    2022-08-12 10:53:20 : Main HTML file: index.html.
    2022-08-12 10:53:20 : PrebuiltZip path does not exist.
    2022-08-12 10:53:20 : Archive file: 

        /var/folders/mp/bcmnxk3s0rbbj1cbbl0875bw0000gn/T/tmp--9197-NAL3b5Jd8IOy-.zip
        (12550 bytes in 6 files) 

        26516c43829f4d7710a6.png
        4fe75d5f9adb18067b85.ico
        index.html
        main.1830a589a2f6cffd9b59.bundle.js
        main.4b5be791ab288338c723.css
        sp-config.json.
    (node:9197) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
    (Use `node --trace-warnings ...` to show where the warning was created)
    2022-08-12 10:53:20 : Content push was successful.
    2022-08-12 10:53:20 : End content push to Portal.
    2022-08-12 10:53:20 : Body content: {"results":{"status":"success","importedFiles":{"file":[{"filename":"HTML/index.html"},{"filename":"JavaScript/main.1830a589a2f6cffd9b59.bundle.js"},{"filename":"CSS/main.4b5be791ab288338c723.css"},{"filename":"Images/26516c43829f4d7710a6.png"}]},"skippedFiles":"","message":"The file that you selected was imported successfully.","contentId":"6fa0b659-7b18-499d-a8de-090a0e9f8987"}}.
```

### Creating and pushing script app to DX
1. navigate to the page where you want to add the script app
2. turn-on edit mode and click `add page components and applications`
3. then click `applications` tab and search `script application` on the search bar
4. drag and drop the script application on the page
5. click `action` then `import`
6. click `copy from existing content` tab ad click the script application that we deploy
7. click `copy` button and close the window
8. turn-off edit mode and check the page
   ![import script app 1](https://media.git.cwp.pnp-hcl.com/user/3487/files/df3d7950-d775-40d6-8e04-be1880173f1b)

## Key Concepts
On this tutorial we know how to add react app that communicates with the themes. but the approach we use in order to achieve the communication is called event listeners of javascript. Read more https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

Basically what we did is.
1. Create a Event Listener that will execute a function or callback. that is what we did on the themes.html
```js
document.addEventListener('HIDE_IMAGE', function (payload) {
    document.getElementById('test-img-wrapper').style.display = "none";
});
```
we use `document.addEventListener` function which register an event. The event name `HIDE_IMAGE` as a first parameter and the callback or function as the second parameter.

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

## Alternative approach
There is many ways to achieve themes and script apps communications. What we did is the most basic and straight forward approach. i will list some alternative to achieve this.

1. EventBus https://css-tricks.com/lets-create-a-lightweight-native-event-bus-in-javascript/
2. Pub/Sub and/or Observer Pattern https://refactoring.guru/design-patterns/observer/typescript/example

## Other advance topic
- [How to communicate 2 react apps using events](https://git.cwp.pnp-hcl.com/roquejr-almodiel/dx-scriptapps-education/blob/main/08EventsBetweenApps/README.MD#how-to-communicate-2-react-apps-using-events)
