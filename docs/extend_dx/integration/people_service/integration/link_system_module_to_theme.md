
# Verifying and Linking People Service System Modules in HCL Digital Experience

This guide provides step-by-step instructions on enabling People Service resources on a theme in HCL Digital Experience (DX) and verifying their integration.

!!! Note
    The profile where you add the module depends on your theme configuration within DX pages. You may need to add the theme definition to another profile and ensure the pages that require the resource match your theme configuration.

## Enabling People Service Resources on a Theme

To enable People Service resources on a theme in HCL Digital Experience (DX), follow these steps:

 1. In the Practitioner Studio Home Page, go to **Themes**.
        ![System modules - Theme option from practitioner](./img/system-module-themes-page.png)

 2. Click the **Edit theme** pencil icon on the theme you want to use.
        ![System modules - Edit theme](./img/system-module-edit-theme.png)

 3. Edit the **Theme Profile**.
    1. In the **Theme Editor**, open the file **profiles > profile_deferred.json.**
        ![System modules - Profile deferred json](./img/system-module-profile-deferred-json.png)
    2. In the `moduleIDs` section, add the `dx_peopleservice_js` ID to the array.
        ![System modules - add module id](./img/system-module-add-peopleservice-moduleID.png)

 4. Click the **Save** disc icon on the upper-right corner to save your changes.

## Verifying the People Service Module in HCL DX

To verify that the People Service module is correctly integrated, follow these steps:

 1. Click the **Menu** icon on the upper-left corner and go to **Analyzer > Examine Modules > All Modules**.
        ![System modules - analyzer page](./img/system-module-analyzer-page.png)

 2. Click the **System Modules** folder.
        ![System modules - all system modules](./img/system-module-all-system-modules.png)

 3. In the **Module Explorer**, locate and select the **dx_peopleservice_js** module.
        ![System modules - find people service module](./img/system-module-find-people-service-id.png)

 4. Scroll down to the **Contributions** section on the right side and click the listed **Location**. Ensure that the link shows the expected JavaScript resource (Web component).
        ![System modules - find people service module](./img/system-module-contribution-listed-location.png)


