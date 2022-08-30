# Meta-Modules for IBM MobileFirst integration

MobileFirst provides a set of ready-to-use modules.

These MobileFirst® integration modules are not associated with a specific release. You can define which version of MobileFirst or Worklight to use.

The Meta-Module definitions are stored in the following files:

-   mobilefirst70.json
-   dav:fs-type1/themes/Portal8.5/contributions/mobilefirst70.json
-   If you want to use a previous version of MobileFirst, other versions are available at PortalServer/theme/wp.theme.worklight.ext/installedApps/wp.theme.worklight.ext.ear/wp.theme.worklight.ext.war/worklight version/

You can have only one file in the folder at one time because the contribution files are not supported at the same time. Specific MobileFirst Integration modules are listed in the MobileFirst 6.1 Integration sections.

## MobileFirst Meta-Modules

-   wp\_worklight\_ext
-   wp\_worklight
-   wp\_worklight\_css
-   wp\_worklight\_css\_android
-   wp\_worklight\_css\_ios
-   wp\_worklight\_jsonstore

## MobileFirst 7.0 Integration

These modules initialize the MobileFirst Client and Cordova API to enable support for native device capabilities and other functions of the MobileFirst server. The modules are only aggregated when accessed through the MobileFirst hybrid shell.

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/theme/wp.theme.worklight.ext/installableApps/wp.theme.worklight.ext.ear/wp.theme.worklight.ext.war/WEB-INF/plugin.xml

For more information about these modules, their prerequisites or runtime activation, use the Theme Analyzer Portlet.

|Module|Description|
|------|-----------|
|mf\_overrides\_70|Provides overrides to the MobileFirst Client API to allow integration with HCL Portal|
|mf\_android\_70|Provides MobileFirst Client and Cordova JavaScript resources for Android devices|
|mf\_ios\_70|Provides MobileFirst Client and Cordova JavaScript resources for iOS devices|
|mf\_winphone\_70|Provides MobileFirst Client and Cordova JavaScript resources for Windows Phone devices.|
|mf\_plugins\_reg\_android\_70|Provides the Cordova plug-in definition list|
|mf\_plugins\_android\_70|Provides the Cordova plug-ins JavaScript resources that enable native feature access for Android devices|
|mf\_plugins\_ios\_70|Provides the Cordova plug-ins JavaScript resources that enable native feature access for iOS devices|
|mf\_plugins\_windphone\_70|Provides the Cordova plug-ins JavaScript resources that enable native feature access for Windows Phone devices.|
|mf\_client\_css\_android\_70|Provides MobileFirst client CSS for Android devices, specifically for the diagnostic window, and modal dialog|
|mf\_client\_css\_ios\_70|Provides MobileFirst client CSS for iOS devices, specifically for the diagnostic window, and modal dialog|
|mf\_client\_css\_winphone\_70|Provides MobileFirst client CSS for Windows Phone devices, specifically for the diagnostic window, and modal dialog.|
|mf\_client\_jsonstore\_android\_70|Provides the JSON store feature for Android devices|
|mf\_client\_jsonstore\_ios\_70|Provides the JSON store feature for iOS devices|
|mf\_client\_jsonstore\_winphone\_70|Provides the JSON store feature for Windows Phone devices.|

## MobileFirst 6.2 Integration

These modules initialize the MobileFirst Client and Cordova API to enable support for native device capabilities and other functions of the MobileFirst server. The modules are only aggregated when accessed through the MobileFirst hybrid shell.

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/theme/wp.theme.worklight.ext/installableApps/wp.theme.worklight.ext.ear/wp.theme.worklight.ext.war/WEB-INF/plugin.xml

For more information about these modules, their prerequisites or runtime activation, use the Theme Analyzer Portlet.

|Module|Description|
|------|-----------|
|wl\_overrides\_62|Provides overrides to the MobileFirst Client API to allow integration with HCL Portal|
|wl\_android\_62|Provides MobileFirst Client and Cordova JavaScript resources for Android devices|
|wl\_ios\_62|Provides MobileFirst Client and Cordova JavaScript resources for iOS devices|
|wl\_winphone\_62|Provides MobileFirst Client and Cordova JavaScript resources for Windows Phone devices.|
|wl\_plugins\_reg\_android\_62|Provides the Cordova plug-in definition list|
|wl\_plugins\_android\_62|Provides the Cordova plug-ins JavaScript resources that enable native feature access for Android devices|
|wl\_plugins\_ios\_62|Provides the Cordova plug-ins JavaScript resources that enable native feature access for iOS devices|
|wl\_plugins\_windphone\_62|Provides the Cordova plug-ins JavaScript resources that enable native feature access for Windows Phone devices.|
|wl\_client\_css\_android\_62|Provides MobileFirst client CSS for Android devices, specifically for the diagnostic window, and modal dialog|
|wl\_client\_css\_ios\_62|Provides MobileFirst client CSS for iOS devices, specifically for the diagnostic window, and modal dialog|
|wl\_client\_css\_winphone\_62|Provides MobileFirst client CSS for Windows Phone devices, specifically for the diagnostic window, and modal dialog.|
|wl\_client\_jsonstore\_android\_62|Provides the JSON store feature for Android devices|
|wl\_client\_jsonstore\_ios\_62|Provides the JSON store feature for iOS devices|
|wl\_client\_jsonstore\_winphone\_62|Provides the JSON store feature for Windows Phone devices.|

## MobileFirst 6.1 Integration

These modules initialize the MobileFirst Client and Cordova API to enable support for native device capabilities and other functions of the MobileFirst server. The modules are only aggregated when accessed through the MobileFirst hybrid shell.

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/theme/wp.theme.worklight.ext/installableApps/wp.theme.worklight.ext.ear/wp.theme.worklight.ext.war/WEB-INF/plugin.xml

For more information about these modules, their prerequisites or runtime activation, use the Theme Analyzer Portlet.

|Module|Description|
|------|-----------|
|wl\_overrides\_61|Provides overrides to the MobileFirst Client API to allow integration with HCL Portal|
|wl\_android\_61|Provides MobileFirst Client and Cordova JavaScript resources for Android devices|
|wl\_ios\_61|Provides MobileFirst Client and Cordova JavaScript resources for iOS devices|
|wl\_plugins\_reg\_android\_61|Provides the Cordova plug-in definition list|
|wl\_plugins\_android\_61|Provides the Cordova plug-ins JavaScript resources that enable native feature access for Android devices|
|wl\_plugins\_ios\_61|Provides the Cordova plug-ins JavaScript resources that enable native feature access for iOS devices|
|wl\_client\_css\_android\_61|Provides MobileFirst client CSS for Android devices, specifically for the diagnostic window, and modal dialog|
|wl\_client\_css\_ios\_61|Provides MobileFirst client CSS for iOS devices, specifically for the diagnostic window, and modal dialog|
|wl\_cordova\_css\_61|Provides Cordova client CSS, specifically for the tab bar component|
|wl\_client\_jsonstore\_android\_61|Provides the JSON store feature for Android devices|
|wl\_client\_jsonstore\_ios\_61|Provides the JSON store feature for iOS devices|

-   **[Enabling JSON store module](../integrate/wl_enabel_json.md)**  
JSONStore features add the ability to store JSON documents in IBM MobileFirst applications.


