# Pre-Requisites


## HCL DXClient

HCL DXClient is required for deployments. Follow the online guide on how to install [HCL DXClient](../../../../integrate_apps/development_tools/dxclient/index.md). Please note that the DX and/or DXClient link provided here may be superseded, you may use a newer version if available. If you have replaced the default context root of your DX installation, you should update the [config.json](../../../../integrate_apps/development_tools/dxclient/index.md#dxclient-installation-configuration) file of your DXClient accordingly.

   ```json
       "dxContextRoot": "/wps",
       "contenthandlerPath": "/wps/mycontenthandler",
       "xmlConfigPath": "/wps/config",
   ```
## Node JS and NPM
Install a Long Term Support (LTS) version of [Node.js](https://nodejs.org/en/download/).


## Java Runtime Engine

Java Runtime Engine with a Long Term Support (LTS) version is needed to be able to run the Gradle wrapper in the DX Module projects. Java version 17 is recommended.


## Script Application Placeholder

Add the 'Script Application Library' to the list of visible libraries in your DX Library Explorer. Follow the series of links via the Web Content menu: Preferences -> Edit Shared Settings. Don't forget to click on the OK button.  
  ![](images/01WebContentEditSharedSettings.png)
  ![](images/02LibrarySelection.png)
  ![](images/03ScriptApplicationLibrary.png)


## For Quick Build and Deploy, Use Out-Of-the-Box React Modules In your DX Theme 

!!! note "Skip this part if you're bundling and deploying your own shared libraries as a [DX Module](common-setup/optimized-scriptapps/index.md)."

For standalone ScriptApps, make sure that the React modules that are delivered with DX images are included in the site's DX Theme profile. They are pre-configured only in the profile_deferred_react.json of the Portal 8.5 Theme. You will need to copy the module IDs over if you'll be using another DX Theme and profile combination. 

- "wp_react_16_10_2",
- "wp_react_dom_16_10_2",
- "wp_react_router_dom_512"


![Select Theme](./images/04Themes.png)
Select "Theme" from the Practitioner Studio Menu

![Select Edit Theme](./images/05EditTheme.png)
Click "Edit Theme"

![Edit the configured Module IDs in the theme profile](./images/06ModuleIDs.png)
