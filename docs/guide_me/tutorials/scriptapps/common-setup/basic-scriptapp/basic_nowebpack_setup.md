---
tags:
    - React
    - Script Application
    - WebPack
hide: tags
---

# Quick Build and Deploy

## Overview

This guide describes the steps on how to deploy a built React app into DX to become a Script Application.

!!! note
    For optimal loading of multiple Script Applications in a single page, custom Webpack bundling is needed. For more information, see [Optimized Script Applications](../optimized-scriptapps/index.md).

!!!tip "Ensure your system is set up properly. Please read the system pre-requisites [here](../../pre_requisites.md)."

!!!tip "Sample codes are available in [GitHub: Deploy a React App to DX as a ScriptApp](https://github.com/HCL-TECH-SOFTWARE/DX-Modules-and-ScriptApps/tree/main/01WebpackWithDependencies)"

## How To Bundle and Deploy React Applications to DX

1. Update the `package.json` project file to configure the dxclient parameters. Double-check and update the configuration values as needed. Also, add the deploy-dx-app lines as-is among the scripts. The variables in the scripts will automatically pick up the values from environment variables and config.
    ```json
    {
        ...
        "config": {
           "dxclient": {
               "wcmContentName": "EducSampleScriptApp01",
               "wcmSiteArea": "Script Application Library/Script Applications",
               "mainHtmlFile": "index.html",
               "contentRoot": "./build",
               "protocol": "https",
               "hostname": "localhost",
               "port": "10041"
           }
        },
        "scripts": {
            ...
            "dx-deploy-app": "dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName \"$npm_package_config_dxclient_wcmContentName\" -wcmSiteArea \"$npm_package_config_dxclient_wcmSiteArea\" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot \"$npm_package_config_dxclient_contentRoot\" -dxProtocol $npm_package_config_dxclient_protocol -hostname $npm_package_config_dxclient_hostname -dxPort $npm_package_config_dxclient_port",
            "dx-deploy-app-win": "dxclient deploy-scriptapplication push -dxUsername %dxUsername% -dxPassword %dxPassword% -wcmContentName \"%npm_package_config_dxclient_wcmContentName%\" -wcmSiteArea \"%npm_package_config_dxclient_wcmSiteArea%\" -mainHtmlFile %npm_package_config_dxclient_mainHtmlFile% -contentRoot \"%npm_package_config_dxclient_contentRoot%\" -dxProtocol %npm_package_config_dxclient_protocol% -hostname %npm_package_config_dxclient_hostname% -dxPort %npm_package_config_dxclient_port%",
            "dx-deploy-app-use-env": "dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName \"$npm_package_config_dxclient_wcmContentName\" -wcmSiteArea \"$npm_package_config_dxclient_wcmSiteArea\" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot \"$npm_package_config_dxclient_contentRoot\" -dxProtocol $dxProtocol -hostname $dxHostname -dxPort $dxPort",
            "dx-deploy-app-use-env-win": "dxclient deploy-scriptapplication push -dxUsername %dxUsername% -dxPassword %dxPassword% -wcmContentName \"%npm_package_config_dxclient_wcmContentName%\" -wcmSiteArea \"%npm_package_config_dxclient_wcmSiteArea%\" -mainHtmlFile %npm_package_config_dxclient_mainHtmlFile% -contentRoot \"%npm_package_config_dxclient_contentRoot%\" -dxProtocol %dxProtocol% -hostname %dxHostname% -dxPort %dxPort%"
        },
        ...
    }
    ```
2. Update the `package.json` project file. Make sure the contentRoot folder specified in the dxclient config matches your app's build folder:
    ```js
      "config": {
        "dxclient": {
            ...
            "contentRoot": "./build",
            ...
        }
       },
    ```
3. Update the `package.json` project file. Add the homepage line to exactly "./" to make the app load properly in DX. If there is an existing homepage value, replace it with "./". You'll encounter http 404 errors when this step is skipped.
    ```js
      "homepage": "./",
    ```
4. Use a unique HTML DOM root id in your application to avoid overwriting other DX Script Applications during rendering.
    - sample-app/public/index.html
      ```
        <div id="root-cf5708ac"></div>
      ```
    - sample-app/src/index.jsx
      ```
        const root = ReactDOM.createRoot(document.getElementById('root-cf5708ac'));
      ```

5. Test your React App in local browser:

    ``` bash
        cd <app-folder>
        npm install
        npm start
    ```

6. Build your application to generate a production-level bundle as-usual:

    ``` bash
        cd <app-folder>
        npm install
        npm run build
    ```

7. Execute the npm script dx-deploy-app, pre-set with the DX admin username and password.

    === "MacOS or Linux"
        ```bash
        dxUsername=<username> dxPassword=<password> npm run dx-deploy-app 
        ```
    === "Windows"
        ```bash
        dxUsername=<username> dxPassword=<password> npm run dx-deploy-app-win
        ```

    ```bash
            > sample-app@0.1.0 dx-deploy-app
            > dxclient deploy-scriptapp push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName "$npm_package_config_dxclient_wcmContentName" -wcmSiteArea "$npm_package_config_dxclient_wcmSiteArea" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot "$npm_package_config_dxclient_contentRoot" -dxProtocol $npm_package_config_dxclient_protocol -hostname $npm_package_config_dxclient_hostname -dxPort $npm_package_config_dxclient_port
            2022-08-08 21:13:36 : Begin content push to Portal.
            2022-08-08 21:13:36 : WCM content ID: .
            2022-08-08 21:13:36 : WCM Content Path: .
            2022-08-08 21:13:36 : WCM Content Title: .
            2022-08-08 21:13:36 : Main HTML file: index.html.
            2022-08-08 21:13:36 : PrebuiltZip path does not exist.
            2022-08-08 21:13:36 : Archive file: 
            /var/folders/mp/bcmnxk3s0rbbj1cbbl0875bw0000gn/T/tmp--14373-oFwJoCUJU4yG-.zip
            (51965 bytes in 5 files) 
            131.d190506afae2cd09f1fd.bundle.js
            index.html
            main.269f6c0111b67c725c63.bundle.js
            main.269f6c0111b67c725c63.bundle.js.LICENSE.txt
            main.9a71fbc56a658baede15.css.
            2022-08-08 21:13:39 : Content push was successful.
            2022-08-08 21:13:39 : End content push to Portal.
            2022-08-08 21:13:39 : Body content: {"results":{"status":"success","importedFiles":{"file":[{"filename":"HTML/index.html"},{"filename":"JavaScript/main.269f6c0111b67c725c63.bundle.js"},{"filename":"JavaScript/131.d190506afae2cd09f1fd.bundle.js"},{"filename":"CSS/main.9a71fbc56a658baede15.css"}]},"skippedFiles":"","message":"The file that you selected was imported successfully.","contentId":"6fa0b659-7b18-499d-a8de-090a0e9f8987"}}.     
    ```

8. Check the DXClient logs in store/logs/logger.log file within your workspace.
9. Prepare your target DX page that will host the Script Application. Follow this [link](../post-deployment/prepare_dx_page.md).
10. Add the Script Application (note the wcmContentName in the package.json config) into the target DX test page. Follow this [link](../post-deployment/add_scriptapp_to_page.md).

