---
tags:
    - React
    - Script Application
    - Gradle
    - Theme Module
hide: tags
---

# Dependencies as DX Modules

This guide provides a streamlined build process that will automate the creation of the EAR file of DX modules and provides the capability to upload it to the WebSphere Application Server.

This Gradle Project includes the following areas of functionality:

- [Webpack](https://webpack.js.org/) build script to package JavaScript libraries into a Web Archive (WAR) file
- Replacement of names and labels in WebSphere deployment descriptors. 
- Packaging of the WAR file into an Enterprise Application Archive (EAR) file
- Deployment of the DX Module (EAR file) to WebSphere via DXClient


## Create a Gradle Project for Common Dependencies

Create a Gradle project to bundle the common dependencies of multiple Script Applications into a DX Module. DX Modules are artifacts that may include Javascript and Styling (CSS, SCSS) files that DX can then inject into the HTML header of the DX Pages. Frontend modules are aggregated by DX and then cached by browsers by default and will deliver performance improvements to the loading sequence of DX pages.

### Initial Project Creation

1. Create a DxModule/ folder.
2. Add gradle wrapper scripts and library into the DxModule folder.
    - Copy files from existing gradle projects. Recreate the folder structure in your new project.
        - gradle/wrapper/gradle-wrapper.jar
        - gradle/wrapper/gradle-wrapper.properties
        - gradlew
        - gradlew.bat
    - OR [install gradle](https://gradle.org/install/) and run [gradle wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html#sec:adding_wrapper).

3. Create submodules folder for each group of dependencies. Use only one submodule folder if it's the requirement for this setup.

    Sample:

     - React v16 -> DxModule/SubModuleReact16
     - React v18 -> DxModule/SubModuleReact18

4. Create a DxModule/gradle.properties file and set the node and npm versions required. Set nodeInstall to false if the existing executables of the current environment is preferred. The gradle project included in this guide is going to be capable of downloading and using its own set of node and npm executables for the build process.
    ```properties
    nodeInstall=true
    nodeVersion=16.17.0
    npmVersion=8.15.0
    ```
    Add the details of the DX deployment target. They will be relayed as parameters whenever the DXClient executable is called by the deploy tasks.
    ```properties
    dxProtocol=https
    dxHostname=localhost
    dxPort=10041
    dxProfileName=wp_profile
    ```
    Add the folder names for the submodules and Script Applications. Use only one submodule and/or Script Application folder each if it's the requirement for this setup.
    - Single SubModule
    ```properties
     # SubModules
     subModulesCSV=SubModule01
        
     # ScriptApp Projects
     baseFolder=../
     ## last subfolder of path (i.e: subfolder1/subfolder2 --> subfolder2) must be unique to avoid overlapping gradle task names
     ## verify using ./gradlew tasks
     scriptAppFoldersCSV=ScriptApp01
    ```
    - Multiple SubModules
    ```properties
     # SubModules
     subModulesCSV=SubModuleReact16,SubModuleReact18
        
     # ScriptApp Projects
     baseFolder=../
     ## last subfolder of path (i.e: subfolder1/subfolder2 --> subfolder2) must be unique to avoid overlapping gradle task names
     ## verify using ./gradlew tasks
     scriptAppFoldersCSV=SampleAppReact16,SampleAppReact18
    ```

5. Create or update the package.json file for each of the submodule to enumerate the libraries that will be included.
    - DxModule/SubModuleReact16/package.json and DxModule/SubModuleReact18/package.json
    ```json
    {
      "name": "WebAppDxModule",
      "version": "1.0.0",
      "description": "",
      "main": "modules-index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build-dxsubmodule": "webpack --config  webpack.react16.js"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
      },
      "devDependencies": {
        "css-loader": "^6.7.1",
        "file-loader": "^6.2.0",
        "mini-css-extract-plugin": "^2.6.0",
        "mini-svg-data-uri": "^1.4.4",
        "terser-webpack-plugin": "^5.3.3",
        "ts-loader": "^9.3.1",
        "typescript": "^4.7.4",
        "webpack": "^5.73.0",
        "webpack-cli": "^4.10.0"
      },
      "overrides": {}
    }
    ```
    - Set the appropriate dependencies for the submodule. DxModule/SubModuleReact16/package.json
    ```json
    "dependencies": {
        "react": "^16.14.0",
        "react-dom": "^16.14.0"
    },
    ```
    - Set the appropriate dependencies for the submodule. DxModule/SubModuleReact18/package.json
    ```json
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    },
    ```
    - Make sure to set the main file to modules-index.js
    ```json
    "main": "modules-index.js",
    ```
    - Make sure to add the build-dx-modules among the scripts. DxModule/SubModuleReact16/package.json:
    ```json
    "scripts": {
      ...
      "build-dxsubmodule": "webpack --config  webpack.react16.js"
    },
    ```
    - Make sure to add the build-dx-modules among the scripts. DxModule/SubModuleReact18/package.json:
    ```json
    "scripts": {
      ...
      "build-dxsubmodule": "webpack --config  webpack.react18.js"
    },
    ```

6. Add a module-index.js file to each of the submodule. Enumerate the Javascript libraries and components via import and export commands in the file. Provide descriptive aliases for the group of libraries and components that will be included.
    -  DxModule/SubModuleReact16/module-index.js
       ```js
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
       ```js
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

7. Add a styles-index.css file to each of the submodule. Enumerate via import statements the component styling (CSS, SCSS, etc.) required that are not yet imported by any JS nor HTML files in the modules-index.js. Leave it empty if no imports are needed at the moment.
    - DxModule/SubModuleReact16/styles-index.css  and DxModule/SubModuleReact16/styles-index.css
      ```js
        /* sample import:
         *    @import 'smart-webcomponents-react/source/styles/smart.default.css';
         */
      ```
8. Add a DxModule/settings.gradle file. Set the value of the rootProject.name. It will be used as the name of the DX Module (war file, ear file, etc.) and the names and ids in the deployment descriptors (web context path, etc.).
    ```groovy
    rootProject.name = 'React16AndReact18'
    ```
9. Add a tsconfig.json file to each of the submodules:
   - DxModule/SubModuleReact16/tsconfig.json and DxModule/SubModuleReact18/tsconfig.json
   ```json
   {
     "compilerOptions": {
       "outDir": "./dist/",
       "noImplicitAny": true,
       "module": "es6",
       "target": "es5",
       "allowJs": true,
       "moduleResolution": "node",
       "resolveJsonModule": true,
       "esModuleInterop": true
     }
   }
   ```
   
### Add a Gradle Build Script
1. Add a DxModule/build.gradle file with the following content:
   ```groovy
   plugins {
       id 'ear'
       id 'war'
       id "com.github.node-gradle.node" version "3.4.0"
   }
   OperatingSystem os = org.gradle.nativeplatform.platform.internal.DefaultNativePlatform.getCurrentOperatingSystem()
   Architecture arch = org.gradle.nativeplatform.platform.internal.DefaultNativePlatform.getCurrentArchitecture()
   def dxClientExec='dxclient'
   if (os.windows) {
       dxClientExec='dxclient.bat'
   }
   
   
   group 'com.company.dx.module.custom'
   //version '1.0-SNAPSHOT'
   
   sourceCompatibility=11
   targetCompatibility=11
   
   repositories {
       mavenLocal()
       mavenCentral()
       maven {
           url "https://plugins.gradle.org/m2/"
       }
   }
   
   dependencies {
       deploy files(war)
   }
   
   // to make sure old files are not going to mix in the bundle
   task deleteDistDxModule{
       delete(file("dist-dx-module"))
   }
   
   def subModules = project.getProperty("subModulesCSV").split(",")
   def allSubModulesTasks = [tasks.named("deleteDistDxModule")]
   
   subModules.each{ subModule ->
       def appName = subModule.trim().replaceAll('-','').replaceAll('_','');
       allSubModulesTasks.add (
               tasks.create( 'npmInstall'+appName, NpxTask) {
                   shouldRunAfter = ["deleteDistDxModule"]
                   workingDir = file("${project.projectDir}/${subModule}")
                   command = 'npm'
                   args = ['install']
               });
       allSubModulesTasks.add (
               tasks.create( 'npmBuild'+appName, NpxTask) {
                   shouldRunAfter = ['npmInstall'+appName]
                   workingDir = file("${project.projectDir}/${subModule}")
                   command = 'npm'
                   args = ['run', 'build-dxsubmodule']
               });
   }
   
   task buildAllSubModules(dependsOn: allSubModulesTasks){
       // an array named allSubModulesTasks was dynamically generated from the subModules array to contain all needed npm calls
       // all tasks needed were invoked via dependsOn parameter, so now we just need to echo that it's done
       doLast {
           println 'Task buildAllSubModules done'
       }
   }
   
   // to make sure the latest rootProject.name is in the web.xml file
   task deleteWebXml{
       delete(file("build/tmp/war/web.xml"))
   }
   
   task prepareWebXml (type: Copy, dependsOn: 'deleteWebXml'){
       from 'src/main/config/war/web.xml'
       into 'build/tmp/war/'
       filter { it.replaceAll('@@auto-replaced-with-rootProject.name@@', rootProject.name) }
   }
   
   war {
       dependsOn buildAllSubModules, prepareWebXml
       webAppDirectory = file('src/main/webapp/')
       webXml = file('build/tmp/war/web.xml')
       from ('src/main/config/war/WEB-INF/') {
           include '*'
           into 'WEB-INF'
           filter { it.replaceAll('@@auto-replaced-with-rootProject.name@@', rootProject.name) }
       }
       from ('dist-dx-module') {
           include '*'
           into '/'
       }
       manifest {
           attributes 'Manifest-Version': 1
           attributes 'Created-By': rootProject.name
       }
   }
   
   ear {
       setLibDirName(null)
       deploymentDescriptor {
           setDisplayName(rootProject.name)
           webModule(rootProject.name+'.war', '/'+rootProject.name)
           setVersion('1.4')
       }
       from ('src/main/config/ear/META-INF/') {
           include '*'
           into 'META-INF'
       }
       manifest {
           attributes 'Manifest-Version': 1
           attributes 'Created-By': rootProject.name
       }
   }
   
   def getParamValue(String paramName){
       if (project.hasProperty(paramName)){
           return project.getProperty(paramName)
       }
       if (System.getProperties().containsKey(paramName)){
           return System.getProperty(paramName)
       }
       return ""
   }
   
   def checkRequiredParam(String paramName){
       if (getParamValue(paramName).trim()==""){
           throw new GradleException("#### Required gradle parameter or env value: -D$paramName=<****> OR -P$paramName=<****> ")
       }
   }
   
   task deployDxModule(type:Exec, dependsOn:'ear') {
       doFirst{
           checkRequiredParam("dxUsername")
           checkRequiredParam("dxPassword")
           logger.quiet('cd build/libs/')
           logger.quiet('dxclient deploy-application'+
                   ' --dxUsername ****'+
                   ' --dxPassword ****'+
                   ' --dxConnectUsername ****'+
                   ' --dxConnectPassword ****'+
                   ' --applicationFile '+ rootProject.name+'.ear'+
                   ' --applicationName '+ rootProject.name+
                   ' --dxProtocol '+ project.getProperty("dxProtocol")+
                   ' --hostname '+ project.getProperty("dxHostname")+
                   ' --dxPort '+ project.getProperty("dxPort")+
                   ' --dxProfileName '+ project.getProperty("dxProfileName"));
       }
       workingDir './build/libs'
       environment DXCLIENT_DISABLE_INTERACTIVE:'true'
       commandLine dxClientExec, 'deploy-application',
                   '--dxUsername', getParamValue("dxUsername"),
                   '--dxPassword', getParamValue("dxPassword"),
                   '--dxConnectUsername', getParamValue("dxUsername"),
                   '--dxConnectPassword', getParamValue("dxPassword"),
                   '--applicationFile', rootProject.name+'.ear',
                   '--applicationName', rootProject.name,
                   '--dxProtocol', project.getProperty("dxProtocol"),
                   '--hostname', project.getProperty("dxHostname"),
                   '--dxPort', project.getProperty("dxPort"),
                   '--dxProfileName', project.getProperty("dxProfileName")
   
       standardOutput = new ByteArrayOutputStream()
       ext.output = {
           return standardOutput.toString()
       }
   }
   
   def allScriptAppsTasks = []
   def baseFolder = project.getProperty("baseFolder")
   def scriptAppFolders = project.getProperty("scriptAppFoldersCSV").split(",")
   
   scriptAppFolders.each{ folder ->
       def appName = folder.substring(folder.lastIndexOf("/")+1).trim().replaceAll('-','').replaceAll('_','');
       def appBaseFolder = baseFolder+folder
       allScriptAppsTasks.add (
           tasks.create( 'npmCleanStored'+appName) {
               delete(file(appBaseFolder+"/store/dist-dx-scriptapp/"))
           });
       allScriptAppsTasks.add (
           tasks.create( 'npmInstall'+appName, NpxTask) {
               shouldRunAfter = ['deployDxModule']
               workingDir = file(appBaseFolder)
               command = 'npm'
               args = ['install']
           });
       allScriptAppsTasks.add (
           tasks.create( 'npmBuild'+appName, NpxTask) {
               dependsOn = ['npmInstall'+appName]
               shouldRunAfter = ['deployDxModule']
               workingDir = file(appBaseFolder)
               command = 'npm'
               args = ['run', 'build']
           });
       allScriptAppsTasks.add (
           tasks.create( 'deploy'+appName, NpxTask) {
               dependsOn = ['npmBuild'+appName, 'npmCleanStored'+appName]
               shouldRunAfter = ['deployDxModule']
               environment = ['dxUsername':getParamValue("dxUsername"),
                              'dxPassword':getParamValue("dxPassword"),
                              'dxProtocol':project.getProperty("dxProtocol"),
                              'dxHostname':project.getProperty("dxHostname"),
                              'dxPort':project.getProperty("dxPort"),
                              'DXCLIENT_DISABLE_INTERACTIVE':'true']
               workingDir = file(appBaseFolder)
               command = 'npm'
               args = ['run', os.windows?'dx-deploy-app-use-env-win':'dx-deploy-app-use-env']
           });
   }
   
   task deployAllScriptApps(dependsOn: allScriptAppsTasks){
       // an array named allScriptAppsTasks was dynamically generated from the scriptApps array to contain all needed npm calls
       // all tasks needed were invoked via dependsOn parameter, so now we just need to echo that it's done
       doLast {
           println 'Task deployAllScriptApps done'
       }
   }
   
   task deployAll(dependsOn: ['deployDxModule', 'deployAllScriptApps']){
       // all tasks needed were invoked via dependsOn parameter
       doLast {
           println 'Task deployAll done'
       }
   }
   
   
   if (project.hasProperty("nodeInstall")) {
       // Workaround node grade plugin not working on apple silicon https://github.com/node-gradle/gradle-node-plugin/issues/154
       Boolean downloadNode = !os.isMacOsX() || arch.isAmd64()
       node {
           version = project.getProperty("nodeVersion")
           npmVersion = project.getProperty("npmVersion")
           download = downloadNode
       }
   
       // Copy local node and npm to a fixed location for npmw
       def fixedNode = tasks.register("fixedNode", Copy) {
           from nodeSetup
           into 'build/node'
       }
       tasks.named("nodeSetup").configure { finalizedBy fixedNode }
   
       def fixedNpm = tasks.register("fixedNpm", Copy) {
           from npmSetup
           into 'build/node'
       }
       tasks.named("npmSetup").configure { finalizedBy fixedNpm }
   }
   
   ```

### Add Webpack Files

1. Add a webpack file to each of the submodules. Assign a unique filename(path) for the DLL Manifest that could describe the submodule.
    - DxModule/SubModuleReact16/webpack.react16.js and DxModule/SubModuleReact18/webpack.react18.js
    ```js
     const path = require("path");
     const TerserPlugin = require("terser-webpack-plugin");
     const MiniCssExtractPlugin = require('mini-css-extract-plugin');
     const { DllPlugin } = require('webpack');
     const svgToMiniDataURI = require('mini-svg-data-uri');
    
     module.exports = {
         entry: {
             dxmodules: './modules-index.js'
         },
         mode: "production",
         target: 'web',
         node: { global: true },
         output: {
             filename: "[name].bundle.js",
             path: path.resolve(__dirname, "dist-dx-module"),
             library: "[name]_[fullhash]"
         },
         plugins: [
             new DllPlugin({
                 name: "[name]_[fullhash]",
                 path: path.resolve(__dirname, "./dx-dll-manifest.json"),
                 format: true,
             }),
             new MiniCssExtractPlugin({
                 filename: "[name].bundle.css",
             })
         ],
         resolve: {
             extensions: ['.ts', '.js', '.json']
         },
         optimization: {
             minimizer: [
                 new TerserPlugin(),
             ]
         },
         module: {
             rules: [
                 {
                     test: /\.(js|mjs|jsx|ts|tsx)$/,
                     use: 'ts-loader',
                     exclude: /node_modules/,
                 },
                 {
                     test: /\.css$/,
                     use: [
                         MiniCssExtractPlugin.loader,
                         'css-loader'
                     ],
                     exclude: [
                         /smart-/
                     ]
                 },
                 {
                     test: /\.scss$/,
                     use: [
                         MiniCssExtractPlugin.loader,
                         'css-loader',
                         'sass-loader'
                     ],
                 },
                 {
                     test: /\.svg/,
                     type: 'asset/inline',
                     generator: {
                         dataUrl: content => {
                             content = content.toString();
                             return svgToMiniDataURI(content);
                         }
                     }
                 },
                 {
                     test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/,
                     type: 'asset'
                 },
             ]
         },
     };
    ```
    - DxModule/SubModuleReact16/webpack.react16.js
    ```js
    ...
            new DllPlugin({
                name: "[name]_[fullhash]",
                path: path.resolve(__dirname, "./dx-dll-manifest-react16.json"),
                format: true,
            }),
    ...
    ```
    - DxModule/SubModuleReact16/webpack.react18.js
    ```js
    ...
           new DllPlugin({
               name: "[name]_[fullhash]",
               path: path.resolve(__dirname, "./dx-dll-manifest-react18.json"),
               format: true,
           }),
    ...
    ```    

### Setup WebSphere Files

1. Create the plugin.xml file in the DxModule/src/main/config/war/WEB-INF folder. Note that each generated JS and CSS files in the dist-dx-module folder after a DX Module build needs to be declared in the plugin.xml file.
    - Single Sub Module
    ```xml
      <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <?eclipse version="3.0"?>
      <plugin id="@@auto-replaced-with-rootProject.name@@" name="@@auto-replaced-with-rootProject.name@@" version="1.0.0" provider-name="IBM">
   
        <extension point="com.ibm.portal.resourceaggregator.module" id="@@auto-replaced-with-rootProject.name@@">
            <module id="@@auto-replaced-with-rootProject.name@@">
                <contribution type="head">
                    <sub-contribution type="js">
                        <uri value="res:{war:context-root}/dxmodules.bundle.js"/>
                        <uri type="debug" value="res:{war:context-root}/dxmodules.bundle.js"/>
                    </sub-contribution>
                </contribution>
                <contribution type="head">
                    <sub-contribution type="css">
                        <uri value="res:{war:context-root}/dxmodules.bundle.css"/>
                        <uri type="debug" value="res:{war:context-root}/dxmodules.bundle.css"/>
                    </sub-contribution>
                </contribution>
            </module>
        </extension>
      </plugin>
    ```
    - Multiple Sub Modules
    ```xml
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
   
2. Create the was.policy file in the DxModule/src/main/config/ear/META-INF folder:
     ```text
     //
     // Template policy file for enterprise application.
     // Extra permissions can be added if required by the enterprise application.
     //
     // NOTE: Syntax errors in the policy files will cause the enterprise application FAIL to start.
     //       Extreme care should be taken when editing these policy files. It is advised to use
     //       the policytool provided by the JDK for editing the policy files
     //       (WAS_HOME/java/jre/bin/policytool). 
     //
    
     grant codeBase "file:${application}" {
         permission java.security.AllPermission;
     };
    
     grant codeBase "file:${jars}" {
         permission java.security.AllPermission;
     };
    
     grant codeBase "file:${connectorComponent}" {
         permission java.security.AllPermission;
     };
    
     grant codeBase "file:${webComponent}" {
         permission java.security.AllPermission;
     };
    
     grant codeBase "file:${ejbComponent}" {
         permission java.security.AllPermission;
     };
    
     ```

3. Create the ibm-web-bnd.xmi file in the DxModule/src/main/config/war/WEB-INF folder:
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <webappbnd:WebAppBinding xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:webappbnd="webappbnd.xmi" xmi:id="WebAppBinding_1203959801006" virtualHostName="default_host">
      <webapp href="WEB-INF/web.xml#@@auto-replaced-with-rootProject.name@@"/>
    </webappbnd:WebAppBinding>
    ```
   
4. Create the ibm-web-ext.xmi file in the DxModule/src/main/config/war/WEB-INF folder:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <webappext:WebAppExtension xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:webappext="webappext.xmi" xmi:id="WebAppExtension_1203959801006" reloadInterval="3" reloadingEnabled="true" additionalClassPath="" fileServingEnabled="true" directoryBrowsingEnabled="false" serveServletsByClassnameEnabled="false" preCompileJSPs="false">
     <webApp href="WEB-INF/web.xml#@@auto-replaced-with-rootProject.name@@"/>
     <jspAttributes xmi:id="JSPAttribute_1" name="jdkSourceLevel" value="15"/>
     <jspAttributes xmi:id="JSPAttribute_2" name="keepgenerated" value="false"/>
   </webappext:WebAppExtension>
   ```
     
5. Create the template web.xml file in the DxModule/src/main/config/war folder:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <web-app id="@@auto-replaced-with-rootProject.name@@" version="2.4" xmlns="http://java.sun.com/xml/ns/j2ee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">
       <display-name>@@auto-replaced-with-rootProject.name@@</display-name>
       <context-param>
           <description>A regular expression that defines which of the resources in the war file can be served by the portal res datasource.</description>
           <param-name>com.ibm.portal.resource.whitelist</param-name>
           <param-value>.*</param-value>
       </context-param>
       <context-param>
           <description>A regular expression that defines which of the resources in the war file cannot be served by the portal res datasource.</description>
           <param-name>com.ibm.portal.resource.blacklist</param-name>
           <param-value>WEB-INF/.*</param-value>
       </context-param>
   </web-app>
   ```

    
