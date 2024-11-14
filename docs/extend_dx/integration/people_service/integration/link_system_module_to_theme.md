
# Verifying and Linking People Service System Modules in HCL Digital Experience

This guide provides step-by-step instructions on enabling the people service resources on a theme in HCL Digital Experience (DX) and verifying their integration.

## Enabling People Service Resources on a Theme

To enable people service resources on a theme in HCL Digital Experience (DX), follow these steps:

 1. Access the Themes Section:
    - Click **Themes** in the Practitioner Studio Home Page.
        ![System modules - Theme option from practitioner](./img/system-module-themes-page.png)

 2. Open the Theme Editor:
    - Click the **Menu** button at the upper left most part of the screen.
        ![System modules - Menu button](./img/system-module-menu-button.png)
    - Click the **Manager** menu icon in the top-left corner.
        ![System modules - Manager menu icon](./img/system-module-manager-menu-icon.png)
    - Click the pencil icon on the right side of the theme you want to use.
        ![System modules - Edit theme](./img/system-module-edit-theme.png)

 3. Edit the Theme Profile:
    - In the theme editor, open the file `profiles > profile_deferred.json`.
        ![System modules - Profile deferred json](./img/system-module-profile-deferred-json.png)
    - In the `moduleIDs` section, add the `dx_peopleservice_js` ID to the array.
        ![System modules - add module id](./img/system-module-add-peopleservice-moduleID.png)

 4. Save the Changes:
    - Click on the Save button (disc icon) in the upper right area.

## Verifying the People Service Module in HCL Digital Experience

To verify that the people service module is correctly integrated, follow these steps:

 1. Access the Analyzer:
    - Click the **Analyzer** menu, then click the **Examine Modules > All Modules** 
        ![System modules - analyzer page](./img/system-module-analyzer-page.png)

 2. Locate the System Modules:
    - Open **System Modules**.
        ![System modules - all system modules](./img/system-module-all-system-modules.png)

 3. Find the People Service Module:
    - Locate the module `dx_peopleservice_js` in the list of modules.
        ![System modules - find people service module](./img/system-module-find-people-service-id.png)

 4. Verify the Module Contribution:
    - In the contribution section, click on the listed Location.
        ![System modules - find people service module](./img/system-module-contribution-listed-location.png)
    - Ensure the link that opens shows the expected JavaScript resource (Web component).

## Important information

The profile to which you add the module depends on your usage of themes within DX pages. You may need to add the theme definition to another profile and ensure the pages that require the resource match your theme configuration.

