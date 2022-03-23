# Upgrading MobileFirst 

You can create an EAR file, and copy MobileFirst resources into that EAR to keep up to date with the newest MobileFirst release.

The existing MobileFirst® extension EAR is installed under the \\PortalServer\\theme location. You cannot modify this location directly since any changes can be overridden by a fix pack. You must create your own custom MobileFirst extension EAR and install it in \\wp\_profile. When you create your own EAR, start with a copy of the existing EAR and modify it. During this process, you replace occurrences of `wp` and `wps` with `custom` and occurrences of the current MobileFirst version number with your MobileFirst version number.

1.  Export the worklight\_extension.ear from the WebSphere® Integrated Solutions Console.

    1.  Click **Applications** \> **Application Types** \> **WebSphere enterprise applications**.

    2.  Click **Next** until you find the **worklight\_extension** application.

    3.  Select **worklight\_extension** and click **Export** on the toolbar.

    4.  Click the worklight\_extension.ear link to download and save the EAR file to your file system.

2.  Import the worklight\_extension.ear into Eclipse or Rational Application Developer with Java EE Developer tools plug-in.

    1.  Click **File** \> **Import**.

    2.  Select **Java EE** \> **EAR file**. Then, click **Next**.

    3.  Click **Browse**. Find and select worklight\_extension.ear you exported to your file system.

    4.  Rename the EAR project from **worklight\_extension** to custom\_mobilefirst\_extension and then click **Next** twice.

    5.  In the **Project Name** field, change the name from **wp.theme.worklight.ext** to custom.theme.mobilefirst.ext and then click **Finish**.

3.  Customize the ear in Eclipse or Rational Application Developer for the new version of MobileFirst.

    1.  In the custom\_mobilefirst\_extension EAR project, delete the EarContent\\META-INF\\ibmconfig folder and its contents.

    2.  Right-click on the custom\_mobilefirst\_extension EAR project and select **Properties**. Select **Deployment Assembly**.

    3.  Select the **wp.theme.worklight.ext.war Deploy Path** and rename it to custom.theme.mobilefirst.ext.war.

    4.  Click **Apply** and **OK**.

    5.  In the custom\_mobilefirst\_extension EAR project, delete the EarContent\\wp.theme.worklight.ext.war file.

4.  In the `custom_mobilefirst_extension` EAR project, modify the EarContent\\META-INF\\application.xml file. Change the display-name from MobileFirst Extension to Custom Mobilefirst Extension.

    1.  Change the module ID from wp.theme.worklight.ext to custom.theme.mobilefirst.ext.

    2.  Change the `web-uri` from wp.theme.worklight.ext.war to custom.theme.mobilefirst.ext.war.

    3.  Change the `context-root` from /wps/worklightExt to /custom/mobilefirstExt.

5.  In the custom.theme.mobilefirst.ext war project, modify the WebContent\\WEB-INF\\web.xml file.

    1.  Change the web-app ID from wp\_theme\_worklight\_ext\_webapp\_1 to custom\_theme\_mobilefirst\_ext\_webapp\_1.

    2.  Change the display-name from `Worklight_Extensions` to Custom MobileFirst Extensions.

6.  In the custom.theme.mobilefirst.ext war project, in WebContent, create your new version folder and its contents. First, examine the existing version folder and its contents because that shows the folder structure that you create.

    1.  Right-click on **WebContent** and select **New** \> **Folder**.

    2.  Enter the MobileFirst version number that you are working with as the folder name.

        For example, use vyour\_new\_mobilefirst\_version, where your\_new\_mobilefirst\_version is your current version number.

    3.  Right-click on the folder you created and create child folders that are called android and ios.

    4.  Locate the Android-specific folders in your MobileFirst project. In previous versions, they were in \\YourMFProject\\apps\\YourApp\\android\\native\\assets\\www\\default\\js and \\YourMFProject\\apps\\YourApp\\android\\native\\assets\\www\\default\\worklight folders in your Eclipse MobileFirst project. Copy and paste them into the vyour\_new\_mobilefirst\_version\\android folder.

    5.  Locate the iOS specific folders in your MobileFirst project. In previous versions, they were in \\YourMFProject\\apps\\YourApp\\iphone\\native\\assets\\www\\default\\js and \\YourMFProject\\apps\\YourApp\\iphone\\native\\assets\\www\\default\\worklight folders in your Eclipse MobileFirst project. Copy and paste them into the vyour\_new\_mobilefirst\_version\\ios folder.

    6.  Locate the Windows Phone specific folders in your Worklight project. In previous versions, they were in \\YourMFProject\\apps\\YourApp\\windowsphone8\\native\\assets\\www\\default\\js and \\YourMFProject\\apps\\YourApp\\windowsphone8\\native\\assets\\www\\default\\worklight folders in your Eclipse MobileFirst project. Copy and paste them into the vyour\_new\_mobilefirst\_version\\winphone folder.

    7.  Locate the init.js file in WebContent\\vpreviousversion\\android\\js folder and copy it to the WebContent\\vnew\_version\\android\\js folder.

    8.  Locate the init.js file in WebContent\\vpreviousversion\\ios\\js folder and copy it to the WebContent\\vnew\_version\\ios\\js folder.

    9.  Locate the init.js file in WebContent\\vpreviousversion\\winphone\\js folder and copy it to the WebContent\\vnew\_version\\winphone\\js folder.

    10. Locate the mobilefirstprevious\_version.json file in the current version folder, where previous\_version is the current MobileFirst version number. Copy it and paste it in your new version folder. Rename the file mobilefirstnew\_version.json, where new\_version is your new MobileFirst version number.

    11. Edit the newly copied file, find, and replace all occurrences of the current MobileFirst version number with your MobileFirst version number and save the file.

        This file defines the version-independent meta modules that `prereq` the version-dependent modules that are defined in the plugin.xml file in the next step.

7.  Determine whether overrides for Cordova and MobileFirst APIs are required.

    HCL Portal defines overrides for Cordova and MobileFirst APIs to improve performance and integrate with HCL Portal.

    1.  To prevent an error when MobileFirst resources load, the `WL.Utils.loadWLClientMessages` and `WL.Utils.setLocalization` functions are overridden. If these are still needed, locate and copy the portal directory from each of the Android and iOS directories in WebContent\\vprevious\_version\\ and copy them to their respective directories in WebContent\\vnew\_version\\. Verify that the content of these functions accurately reflects the content from your new version of MobileFirst.

    2.  If the Cordova APIs did not change, either copy the changes in the WebContent\\vpreviousversion\\android\\worklight\\cordova.js file and WebContent\\vpreviousversion\\ios\\worklight\\cordova.js to the new version of the MobileFirst folder. This method reduces the number of requests to HCL Portal. Or, Leave the Cordova API, and add a `<script>` element to all the pages that require MobileFirst resources. The `<script>` element must reference the cordova.js file directory.

        To improve performance for MobileFirst applications in HCL Portal, two Cordova APIs were changed. Originally, the Cordova APIs attempt to load all of the Cordova plug-ins individually by dynamically determining their location. However, it is not possible with HCL Portal resource aggregation. The `injectScript` and `findCordovaPath` functions are rewritten to use the `ibmCfg.portalConfig.worklightResourcesPath[version\_number]` JavaScript variable to determine the location of the Cordova resources. This value of this variable comes from the Resource Environment Provider property that you create in a following step. The `version_number` used in the variable must be updated to reflect the new version number, which is reflected in the following changes to the resource environment provider property.

    3.  Copy the changes that are in WebContent\\vprevious\_version\\android\\worklight\\cordova.js and WebContent\\vprevious\_version\\ios\\worklight\\cordova.js and copy them into the new version of MobileFirst that you are upgrading to. This offers a performance improvement, because it reduces the number of requests that are made to the HCL Portal server for the MobileFirst resources.

    4.  Leave the Cordova API as it is and add a `<script>` element to all pages that require MobileFirst resources. The `<script>` element must reference the cordova.js file directly.

8.  In the custom.theme.mobilefirst.ext war project, edit the WebContent\\WEB-INF\\plugin.xml file.

    1.  Change the plug-in ID from wp.theme.worklight.ext to custom.theme.mobilefirst.ext.

    2.  Change the plug-in name from MobileFirst plug-ins to Custom MobileFirst plugins.

    3.  Change the plug-in provider-name from IBM to your company's name.

    4.  Find and replace all occurrences of the current MobileFirst version number with your MobileFirst version number. Find and replace version numbers in both the formats 000 and 0.0.0.

        These changes must correspond with the changes made previously to mobilefirstprevious\_version.json.  This plugin.xml file defines the version-dependent modules that are `prereqed` by the version-independent meta modules that are defined in mobilefirstprevious\_version.json in the previous step.

    5.  Locate the mf\_android\_new\_version and mf\_ios\_new\_version modules, where new\_version is the new MobileFirst version number, and verify all of their subcontributions. Review the resources for the new version of MobileFirst, and if there are any differences, modify the subcontributions so that each resource file has a subcontribution.

        In these modules, each resource is explicitly listed when debug mode is enabled. When it is not enabled, HCL Portal provides a single JavaScript layer for the MobileFirst resources. Create a similar layer for the resources of the new version of MobileFirst.  This layer must be defined as a subcontribution here.  If you choose not to create a JavaScript layer for the MobileFirst resources, add and verify that required resources are listed as subcontributions.

    6.  Locate the mf\_plugins\_android\_new\_version and mf\_plugins\_ios\_new\_version modules, where new\_version is the new MobileFirst version number, and verify all of their subcontributions. Review the resources for the new version of MobileFirst, and if there are any differences, modify the subcontributions so that each resource file has a subcontribution.

        In these modules, each resource is explicitly listed when debug mode is enabled. When it is not enabled, HCL Portal provides a single JavaScript layer for the MobileFirst resources. Create a similar layer for the resources of the new version of MobileFirst.  This layer must be defined as a subcontribution here.  If you choose not to create a JavaScript layer for the MobileFirst resources, add and verify that required resources are listed as subcontributions.

    7.  In the `custom.theme.mobilefirst.ext` war project, delete the WebContent\\previous\_version folder, where previous\_version is the current MobileFirst version number, and all of its contents.

9.  Export your customized ear as custom\_mobilefirst\_extension.ear from Eclipse or Rational Application Developer.

    1.  Right-click **custom\_mobilefirst\_extension ear project** and select **Export** \> **EAR** file.

    2.  Click **Browse** and choose a destination folder and name of custom\_mobilefirst\_extension.ear.

    3.  Click **Finish** to save the EAR file to your file system.

10. Add a resources.mobilefirst.extensions.new\_version resource environment provider property in the WebSphere Integrated Solutions Console.

    1.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    2.  Click **Next** until you find the **WP ConfigService** resource environment provider and then select it.

    3.  Click the **Custom properties** link.

    4.  Click **New** from the toolbar.

    5.  Enter resources.mobilefirst.extensions.new\_version for the name, where new\_version is replaced by your new MobileFirst version number.

    6.  Enter /custom/mobilefirstExt/new\_version for the value where new\_version is replaced by your new MobileFirst version number.

    7.  Enter the path to the MobileFirst vnew\_version\_number extensions for the description where new\_version\_number is replaced by your new MobileFirst version number in the v0.0.0 format.

    8.  Click **OK**.

    9.  Click **Save** to save directly to the master configuration.

11. Deploy the custom\_mobilefirst\_extension.ear in the WebSphere Integrated Solutions Console.

    1.  Click **Applications** \> **Application Types** \> **WebSphere enterprise applications**.

    2.  Click **Install** in the toolbar.

    3.  Click **Browse** in the local file system, find, and select your custom\_mobilefirst\_extension.ear file and click **Next**.

    4.  Take the defaults and click **Next**.

    5.  Take the defaults and click **Next**.

    6.  Verify that the Directory to install application field is blank so that it installs to the default location. Delete anything in the field if it is not.

    7.  Take the defaults and click **Next**.

    8.  Click **Finish**.

    9.  When the EAR is done installing without error, click **Save** to save to the master configuration.

    10. Find and check your new Custom MobileFirst Extension enterprise application and click **Start** from the toolbar. Your EAR is now installed at \\wp\_profile\\installedApps\\cell\\Custom Mobilefirst Extension.ear.

12. Modify your theme contributions to load your new version of the MobileFirst extensions.

    You continue to use the same meta module names in your theme profiles, such as wp\_worklight\_android and wp\_worklight\_ios. You must change the JSON file in the theme contributions folder to change which version-specific modules the meta modules load.

    1.  Use WebDAV to connect to fs-type1:themes\\yourtheme\\contributions.

    2.  Delete the mobilefirstprevious\_version.json file, where previous\_version is the previous MobileFirst version number.

        If you back up the file, move it to a different location. Do not rename the file .jsonbak, for example, because every file in the contributions folder is loaded by the system. You must remove the file completely.

    3.  Copy your mobilefirstnew\_version.json file into the contributions folder. The file can be copied from \\wp\_profile\\installedApps\\cell\\Custom Mobilefirst Extension.ear\\custom.theme.mobilefirst.ext.war\\vnew\_version\\mobilefirstnew\_version.json, where new\_version is replaced by your MobileFirst version number.

        If you must revert to the previous version of MobileFirst, you can get the mobilefirstprevious\_version.json file back from \\PortalServer\\theme\\wp.theme.worklight.ext\\installedApps\\wp.theme.worklight.ext.ear\\wp.theme.worklight.ext.war\\vprevious\_version\\mobilefirstprevious\_version.json, where previous\_version is the original MobileFirst version number.

13. Restart the HCL Portal server.


The MobileFirst meta modules, such as `wp_worklight_ext`, now load and use the resources for your new version of MobileFirst.

**Parent topic:**[Integrating with IBM MobileFirst ](../integrate/wl_integrt.md)

