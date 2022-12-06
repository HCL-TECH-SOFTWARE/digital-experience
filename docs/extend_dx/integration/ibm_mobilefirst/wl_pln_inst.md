# Planning to install IBM MobileFirst

Determine the services and function of your hybrid application before you install MobileFirst. You must install a MobileFirst server in some instances.

## Running a hybrid application in a portal page

When your hybrid application runs with your HCL Portal pages rendered in a native application, HCL Portal loads the appropriate native resources for the device. These resources are loaded automatically through modules that are provided in HCL Portal. It starts with the `wp_worklight_ext` module, which is listed in some of the default profiles, including `profile_deferred.json`, `profile_dojo_deferred.json`, and `profile_basic_content.json`.

If you want access to the appropriate native resources for the device on a particular page of your HCL Portal, use a profile that includes the `wp_worklight_ext` module. The default profile, `profile_deferred.json`, includes `wp_worklight_ext`, so the appropriate native resources are available to your HCL Portal pages by default.

`wp_worklight` is a version-independent meta-module that is defined by the mobilefirst70.json file in your theme's contributions folder. This module is a prerequisite of the default MobileFirst® resources that enable access to native features. It also includes the overrides that enhance performance and allow the API libraries to work within the module framework.

The version-dependent platform modules that are included by the module framework are `mf_ios_70` and `mf_android_70`. These platform modules are defined by the plugin.xml file in your theme's [PortalServer\_root](../../../guide_me/wpsdirstr.md)\\theme\\wp.theme.worklight.ext\\installedApps\\wp.theme.worklight.ext.ear\\wp.theme.worklight.ext.war\\WEB-INF folder. These platform modules load the appropriate native resources for the device, giving access to the full MobileFirst and Cordova APIs. For example, it gives access to the following resources on the device:

-   Camera
-   Geolocation
-   Contacts
-   Local storage
-   Media
-   Push notifications
-   User information

These platform modules are loaded or not based on device class conditions, as you can see in the following plugin.xml code snippet for the `mf_android_70` module:

```
<module id="mf_android_70">
        	<runtimeActivation>
				<condition deviceClass="worklight+android"/>
			</runtimeActivation>
```

The `mf_android_70` module loads if the device class is both MobileFirst and Android. The device class is determined by the HCL Portal server that is based on the user agent string of the client device. For example, a user agent string for an Android phone looks like this example:

```
Mozilla/5.0 (Linux; U; Android 4.0.4; en-gb; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
```

A MobileFirst hybrid application automatically appends `"/Worklight/version"` to the end of the user agent string, such as:

```
Mozilla/5.0 (Linux; U; Android 4.0.4; en-gb; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30/Worklight/6.1.0.0
```

Windows Phone MobileFirst applications cannot modify the user agent. Instead, HCL Portal sets a session cookie that is called `wp.agent.ext` to "/Worklight" whenever it detects a `uri=wl:id` request parameter, and appends that cookie's value to the agent before it evaluates device classes. This parameter must be present on the initial request from the hybrid application or MobileFirst is not available on Windows Phone devices.

Appropriate matching is used to determine the device classes from the user agent string. The device classes in turn determine the appropriate platform modules to load. For example, the `mf_android_70` native resources are loaded for a portal that runs in a MobileFirst hybrid application on an Android device. But it does not load in many other cases. For example, if it is on an iOS device, or if it is a portal that is not wrapped in a MobileFirst hybrid application, these resources do not load.

The same portal pages adapt their capability that is automatically based on the context in which they are running. For example, a page can provide access to the device's camera if it runs in the context of a MobileFirst hybrid application. The same page cannot get access while it is running outside the context of a MobileFirst hybrid application.

The Cordova and MobileFirst API have overrides to improve performance and allow integration with HCL Portal. The overrides allow the MobileFirst Client API to find the resources in the deployed web application. The overrides also allow the Cordova plug-ins to be packaged into a module and allow the multiple JavaScript resources to be fetched in one request by the resource aggregation framework.

## Shell application

If your application is a shell that uses a web view to render all markup from the HCL Portal site, then you do not need a MobileFirst server.

If your application is using a mixed model approach where some of the application markup is coming from your HCL Portal and other markup of the application is coming from native resources that might be fetching Web Content Manager resources, then you must install a MobileFirst server to provide these resources.

## Direct update service

If you plan to use the direct update service feature to update the embedded markup for changes, you require a MobileFirst server.

## Native notifications

If your application uses native notifications, MobileFirst is required to generate the iOS and Android notification service.

## Authentication services

If you use the MobileFirst authentication or access control service for single sign-on \(SSO\) between MobileFirst and HCL Portal, you must install a MobileFirst server. If you plan to use anonymous access or access all resources of the application through HCL Portal or HCL Web Content Manager, then you do not need a MobileFirst server.

## Tracking usage

If your application uses MobileFirst to track usage, you must install a MobileFirst server. The server that you install must also support the load from clients who send usage data.

## Device provisioning

If you are providing device provisioning, you must install a MobileFirst server to provide the certificate for the device and data.

## Application Center EAR

The Application Center Ear is an optional application that provides an application store environment. If you are using it to manage applications on devices as an MDM solution, you need a MobileFirst server to run the MobileFirst EAR and the Application Center EAR.


