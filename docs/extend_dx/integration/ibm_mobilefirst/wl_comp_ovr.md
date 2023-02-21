# Default component overview

When you integrate MobileFirst and HCL Portal, you can create a MobileFirst hybrid application that includes an HCL Portal web application. This hybrid application can run in a mobile browser and as a native mobile application.

## Modules

-   `wp_worklight_ext`
-   `wp_worklight`
-   `wp_worklight_css`

The `wp_worklight_ext` module is included in the default deferred profile and is active by default. This module automatically loads the MobileFirst® Client and Cordova APIs for you so you can add native device capabilities in your hybrid applications. The APIs are JavaScript resources and are optimized for each device. For example, the iOS resources are loaded in a MobileFirst hybrid application on an iOS device. But they are not loaded in other circumstances such as in a web application, on an android device, or on a desktop.

## Device classes

-   `worklight`
-   `ios`
-   `android`
-   `iemobile`
-   `blackberry`
-   `smartphone`
-   `tablet`

With these device classes, you can target the appropriate environment to expose your native capabilities within HCL Portal. The default MobileFirst modules use these devices classes to determine which resources to load. If you are adding to the default capabilities, you can also use these device classes to optimally load your own device-specific resources.

## Device class equations

-   `android+smartphone`
-   `worklight+(ios/android)`
-   `(android/ios)+worklight+!tablet`

With device class equations, you can create a specific device class that includes or excludes some of the device classes. You can use parenthesis to group the device classes. To use the operation AND, use the plus sign, `+`. To use the operation OR use the forward slash, `/`. To use the operation NOT, use the exclamation point, `!`.

## APIs & Samples

-   Worklight Client
    -   `WL.Client.getUserInfo`
    -   `WL.Client.Push.subscribe`
    -   And others
-   Cordova
    -   `navigator.camera.getPicture`
    -   `navigator.geolocation.getCurrentPosition`
    -   And others
-   Authentication
    -   `WL.Client.createChallengeHandler`
    -   And others

The new MobileFirst resources allow access to native device capabilities by using the high-level JavaScript without having to know or use the native device programming language. The JavaScript APIs call the native device APIs for you. Sample apps are provided on the catalog for each of the APIs to show example usage syntax. You can copy, paste, and modify these samples to fit your needs.

To get started, create a MobileFirst hybrid application that points to and renders your HCL Portal URL. Modify your HCL Portal code to call the JavaScript APIs to access the native device capabilities. For example, your application could have a feature for taking and uploading a picture that is available on devices that have cameras and unavailable otherwise. Or a feature that is tailored to the user's geolocation on devices that have GPS and not otherwise. Or a feature that sends and receives push notifications on devices that support push notifications and not otherwise.


???+ info "Related information"
    - [Apache Cordova](https://cordova.apache.org/)
    - [MobileFirst API](https://www.ibm.com/docs/en/mpf/7.1.0?topic=reference-mobilefirst-client-side-api)

