# Deploy Multiple Script Applications with Different Dependency Versions


### What You Will Learn In This Tutorial
- Creation of a Gradle project to simplify working with shared libraries in HCL Digital Experience (DX).
- Update bundling of new or existing NPM based projects to exclude dependencies and use the libraries in a DX Module.
- Leverage on submodules to isolate conflicting dependency groups (i.e: React v16 vs v18).

### Where To Get The Sample Code
!!!tip "Sample codes are available in [GitHub: Deploy Multiple Script Applications with Different Dependency Versions](https://github.com/HCL-TECH-SOFTWARE/DX-Modules-and-ScriptApps/tree/main/05AppsWithDiffDepVersions)."

## Pre-Requisites
!!!tip "Pre-Requisites"
    See the detailed information [here](../pre_requisites.md).

## How to Bundle Dependencies as DX Modules
!!!tip "Bundle Dependencies as DX Modules"
    Follow the common steps [here](../common-setup/optimized-scriptapps/dependencies_as_module.md) then apply the project specific settings listed [here](#project-specific-settings-dx-module).

    Quick Notes:

    - Set a unique rootProject.name (i.e: React16AndReact18) in `DxModule/settings.gradle`.
    - The Webpack profile/config file (i.e: webpack.dxmodules.js) that will be used to build the submodule is defined in the build-dxsubmodule script in its own `package.json`.
    - If a group of dependencies has conflicts with another group (i.e: React v16 vs v18), you'll need to create separate sub-modules for them.
    - Take note of all the output locations and filenames of the DLL manifest, for each of the submodules defined, in the DLLPlugin portion of their `DxModule/<SubModule>/webpack.<dxmodules>.js` files. 

## Important Things to Note
!!!note "Important Things To Note"
    Check the information [here](../common-setup/post-deployment/important_things_to_note.md).

## Project Specific Settings (DX-Module)
Full configuration steps are listed [here](../common-setup/optimized-scriptapps/dependencies_as_module.md) (common steps). You'll also need to apply the specific steps below:

1. Create submodules folder for each group of dependencies.
    - Sample: React v16 -> DxModule/SubModuleReact16
    - Sample: React v18 -> DxModule/SubModuleReact18

2. Update the package.json file for each of the submodule to enumerate the libraries that will be included.
    - Set the appropriate dependencies for the submodule. DxModule/SubModuleReact16/package.json
    ```
    "dependencies": {
        "react": "^16.14.0",
        "react-dom": "^16.14.0"
    },
    ```
    - Set the appropriate dependencies for the submodule. DxModule/SubModuleReact18/package.json
    ```
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    },
    ```
    - Make sure to set the main file to modules-index.js
    ```
    "main": "modules-index.js",
    ```
    - Make sure to add the build-dx-modules among the scripts. DxModule/SubModuleReact16/package.json:
    ```
    "scripts": {
      ...
      "build-dxsubmodule": "webpack --config  webpack.react16.js"
    },
    ```
    - Make sure to add the build-dx-modules among the scripts. DxModule/SubModuleReact18/package.json:
    ```
    "scripts": {
      ...
      "build-dxsubmodule": "webpack --config  webpack.react18.js"
    },
    ```

3. Add a module-index.js file to each of the submodule. Enumerate the Javascript libraries and components via import and export commands in the file. Provide descriptive aliases for the group of libraries and components that will be included.
    - DxModule/SubModuleReact16/module-index.js
    ```
    /* Import and Export Main Libraries
     */
    import * as React16 from 'react';
    import * as ReactDOM16 from 'react-dom';
    export const ReactV16 = {
       React: React16,
       ReactDOM: ReactDOM16
    };
    /* Export index file for the styles (added here to be able to share the filename of JS bundle's alias in Webpack entry config).
     */
    export * from './styles-index.css'    
    ```

    -  DxModule/SubModuleReact18/module-index.js
    ```
    /* Import and Export Main Libraries
     */
    import * as React18 from 'react';
    import * as ReactDOM18 from 'react-dom';
    export const ReactV18 = {
       React: React18,
       ReactDOM: ReactDOM18
    };
    /* Export index file for the styles (added here to be able to share the filename of JS bundle's alias in Webpack entry config).
    */
    export * from './styles-index.css'    
    ```

4. Add a webpack file to each of the submodules. Assign a unique filename(path) for the DLL Manifest that could describe the submodule.
     - DxModule/SubModuleReact16/webpack.react16.js
     ```
     ...
            new DllPlugin({
                name: "[name]_[fullhash]",
                path: path.resolve(__dirname, "./dx-dll-manifest-react16.json"),
                format: true,
            }),
     ...
     ```

     - DxModule/SubModuleReact16/webpack.react18.js
     ```
     ...
           new DllPlugin({
               name: "[name]_[fullhash]",
               path: path.resolve(__dirname, "./dx-dll-manifest-react18.json"),
               format: true,
           }),
     ...
     ```

5. The plugin.xml file in the DxModule/src/main/config/war/WEB-INF folder needs to list all expected JS and CSS file bundles in the build (i.e: DxModule/dist-dx-module).
   ```
   <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
   <?eclipse version="3.0"?>
   <plugin id="@@auto-replaced-with-rootProject.name@@" name="@@auto-replaced-with-rootProject.name@@" version="1.0.0" provider-name="IBM">
   
       <extension point="com.ibm.portal.resourceaggregator.module" id="@@auto-replaced-with-rootProject.name@@">
           <module id="@@auto-replaced-with-rootProject.name@@">
               <contribution type="head">
                   <sub-contribution type="js">
                       <uri value="res:{war:context-root}/react16.bundle.js"/>
                       <uri type="debug" value="res:{war:context-root}/react16.bundle.js"/>
                   </sub-contribution>
               </contribution>
               <contribution type="head">
                   <sub-contribution type="js">
                       <uri value="res:{war:context-root}/react18.bundle.js"/>
                       <uri type="debug" value="res:{war:context-root}/react18.bundle.js"/>
                   </sub-contribution>
               </contribution>
               <contribution type="head">
                   <sub-contribution type="css">
                       <uri value="res:{war:context-root}/react16.bundle.css"/>
                       <uri type="debug" value="res:{war:context-root}/react16.bundle.css"/>
                   </sub-contribution>
               </contribution>
               <contribution type="head">
                   <sub-contribution type="css">
                       <uri value="res:{war:context-root}/react18.bundle.css"/>
                       <uri type="debug" value="res:{war:context-root}/react18.bundle.css"/>
                   </sub-contribution>
               </contribution>
           </module>
       </extension>
   </plugin>
   ```

## How To Build and Deploy DX Modules
!!!tip "Build and Deploy DX Modules"
    Follow the steps [here](../common-setup/build-and-deploy/build_and_deploy_dx_modules.md).

## Optional: How to Manually Upload the DXModule EAR File
!!!tip "Manual EAR File Upload"
    Follow the steps [here](../common-setup/build-and-deploy/manual_ear_upload.md).

## How To Verify A Successful Deployment and Link a DX Module to a DX Theme
!!!tip "Verify A Successful Deployment and Link a DX Module to a DX Theme"
    Follow the steps [here](../common-setup/post-deployment/verify_link_module_to_theme.md).

## How To Bundle and Deploy a Script Application Without Its Dependencies
!!!tip "Script Applications Sharing Dependencies"
    For each of your script applications, follow the common steps [here](../common-setup/optimized-scriptapps/sharing_dependencies.md) and then apply the project specific settings listed [here](#project-specific-settings-script-applications).

    Quick Notes:

    - Set a unique wcmContentName (i.e: EducSampleScriptApp) setting in `package.json`.
    - Make sure the contentRoot setting in `package.json` matches the build or distribution folder.

## Project Specific Settings (Script Applications)
1. Update the project package.json file for each of the Script Application (SampleAppReact16/package.json and SampleAppReact18/package.json).
    -  Set the name of the project and the main JavaScript or TypeScript file.
    ```
       "name": "sample-react-app-16",
    ```
    - Create a dependency linking this application to the folder of the correct submodule. Remove the dependencies that are redundant with the submodule's scope(i.e: React, ReactDom). 
    ```
       "dependencies": {
           "dxmodules": "file:../DxModule/SubModuleReact16"
       },
    ```

2. Find all the React Apps' JS and TS files (i.e: index.jsx, App.jsx, etc.), divert all imports of the libraries that are bundled in the DX Module (i.e: React, ReactDOM) to use the dxmodules alias set in package.json.
    ```
    // From
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    ```
    for React version 16
    ```
    // To
    import { ReactV16 } from 'dxmodules';
    const { React, ReactDOM } = ReactV16;
    ```
    or for React version 18
    ```
    // To
    import { ReactV18 } from 'dxmodules';
    const { React, ReactDOM } = ReactV1;
    ```
   
5. Assign an id for the root html tags unique for each of the ScriptApps. Make sure to use the same id in the corresponding index.jsx within the same ScriptApp.
    1. SampleAppReact16/src/index.html
    ```
        <div id="sample-app-react-16-root"></div>
    ```
   SampleAppReact16/src/index.jsx
    ```
        const root = ReactDOM.createRoot(document.getElementById('sample-app-react-16-root'));
    ```
    2. SampleAppReact18/public/index.html
    ```
        <div id="sample-app-react-18-root"></div>]()
    ```
   SampleAppReact18/src/index.js
    ```
        const root = ReactDOM.createRoot(document.getElementById('sample-app-react-18-root'));
    ```
7. Update the webpack.dev.js file to each of the ScriptApps (i.e: SampleAppReact16/webpack.dev.js, SampleAppReact16/webpack.dev.js). This configuration is intended for the development cycle only (via npm start) and will not be used for DX deployment.
    - Configure the build entry pointing to the styles index file of the specific submodule. This will simulate the styling injection that will be done by DX in the HTML header of a DX page.
    - SampleAppReact16/webpack.dev.js:
    ```
      entry: {
        // Note: point this to the DX Module project's submodule
        dxmodulesstyles: path.resolve(__dirname, '../DxModule/SubModuleReact16/styles-index.css'),
      },
    ```
    - SampleAppReact18/webpack.dev.js:
    ```
      entry: {
        // Note: point this to the DX Module project's submodule
        dxmodulesstyles: path.resolve(__dirname, '../DxModule/SubModuleReact18/styles-index.css'),
      },
    ```
   
8. Update the webpack.dx-scriptapp.js file to each of the ScriptApps. Point the DllReferencePlugin of the app needing React v16/v18 to the correct submodule context and manifest.
    - SampleAppReact16/webpack.dx-scriptapp.js
    ```
            new DllReferencePlugin({
                context: path.resolve(__dirname, '../DxModule/SubModuleReact16'),
                manifest: require('../DxModule/SubModuleReact16/dx-dll-manifest-react16.json'),
            }),
    ```
    - SampleAppReact18/webpack.dx-scriptapp.js
    ```
            new DllReferencePlugin({
                context: path.resolve(__dirname, '../DxModule/SubModuleReact18'),
                manifest: require('../DxModule/SubModuleReact18/dx-dll-manifest-react18.json'),
            }),
    ```
    
## How To Build and Deploy Script Applications
!!!tip "Build and Deploy Script Applications"
    Follow the steps [here](../common-setup/build-and-deploy/build_and_deploy_scriptapps.md).

## Optional: How to Build and Deploy the DXModule and All Script Applications
!!!tip "Build and Deploy the DX Module and All ScriptApps"
    Follow the steps [here](../common-setup/build-and-deploy/build_and_deploy_all.md).
