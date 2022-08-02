# Development and operations overview

The steps for developing themes for a production portal, includes the development of the theme components, their packaging, and their deployment to systems.

The package is either created as the result of a build process that takes the code from a version control system and creates the correct artifacts or the artifacts are created by developers. Multiple artifacts create a release and the team that operates the integration and production servers receive and deploy them.

The components of a portal theme include:

-   **Static content**

    Is similar to the content of a static website. The markup is defined by HTML files. Static content also includes the CSS and JavaScript files that are used by the themes.

    The difference between a static website and a portal is that three kinds of HTML files exist:

    -   **theme.html**

        Defines the markup that is identical for all the pages that this theme is applied to.

    -   **layout.html**

        Defines the decoration of the content area that can be different between pages.

    -   **skin.html**

        Defines the decoration of the individual portlets on the page.

    If the files used by the theme are not part of the theme folder, and therefore not part of the theme structure, then those files are named external. External files are shared by multiple themes.

-   **Dynamic content**

    Generated based on the data model of HCL Portal with technologies such as JavaServer Pages or Java code.

-   **Configuration**

    Scripts are used to register the theme and skins with WebSphere Portal.

    Runtime Configuration components are server configurations, similar to Resource Environment Provider settings, that are required for the themes and skins to work correctly.


## Developing Theme Components

There are several ways to develop a custom theme.

-   **Developing within an IDE**

    With an integrated development environment, you can set up a project first, usually using the form that you selected for packaging afterward, and add the artifacts like HTML, CSS, and JavaScript files. Next, you export the project and deploy it to your server, either as a compressed file in the file store or an EAR file. Finally, you register the theme with a custom developed theme.xml file.

    You might fill the project initially with the content of one of the ready-to-use themes or start from scratch.

-   **Developing on the live server**

    This method of developing a theme was introduced recently and is driven through the WebDAV entry point to the file store. You can copy a theme to start with the existing content from one of the ready-to-use HCL Portal themes or create a folder to start. Add your custom HTML, CSS, and JavaScript files and export these files to create your theme component package. For more information about exporting files, see Exporting content from the file store.


## Packaging theme Components

The packaging of a custom developed theme depends on how it was developed and what the preferred approach for static files is. For example, you can combine all static files for all themes and all external files that are shared between themes into one installable artifact or split the files into multiple artifacts. Because the method that you choose has different implications for the development team and the team operating the portal, include both groups when deciding how to package the components.

All packages must contain an XML Access script to deploy the theme and a list of runtime configurations that need to be applied to the server.

The following description shows the options available when all files are packaged together. If the files are separated, the number of files changes but the options are identical.

-   If you only created static resources, but used dynamic spots that are included within HCL Portal or custom dynamic spots that are generally available, the following options exist:
    -   Create a package that contains a compressed file that contains the static resources that can be deployed to the file store.
    -   Create a package that contains an EAR file that contains a WAR file with the static resources that can be deployed to the application server.
-   If you created custom dynamic spots, like components that are based on JSP technology, that are to be packaged with the theme, the following options exist:
    -   Create a package that contains a compressed file containing the static resources that can be deployed to the file store and an EAR file containing a WAR file that contains the dynamic resources.
    -   Create a package that contains an EAR file that contains one WAR file with the static resources and a second WAR file that contains the dynamic resources. This file can be deployed to the application server.

You can also package the artifacts that you created in a Portal Application Archive \(PAA\) file for the Solution Installer. The Solution Installer automatically performs the steps to deploy the artifacts.

## Deploying theme components

How the theme components were packaged determines the method that is used to deploy themes. All options require an XMLAccess script and runtime configuration options or a PAA file.

-   **Compressed file without EAR file**

    Use the webdav-deploy-zip-file command to deploy the compressed file and use the XMLAccess command to run the script. Use the WebSphere® Integrated Solutions Console to add the runtime configuration.

-   **Compressed file with EAR file**

    Use the webdav-deploy-zip-file command to deploy the compressed file. Use the WebSphere® Integrated Solutions Console or scripts to deploy the EAR file. Use the XMLAccess command to run the script.

-   **An EAR file with no compressed file**

    Use the WebSphere® Integrated Solutions Console or scripts to deploy the EAR file, and use the XMLAccess command to run the script.

-   **PAA file**

    The Solution Installer automatically detects the steps to perform deployment.


-   **[Theme PAA files](../dev-theme/themeopt_themedev_exportedpaa.md)**  
Using the Theme Development tools, you can quickly copy, create, and modify themes. After you modify a theme, you can export that theme as a PAA file so that you can install it on a different server. You can also uninstall theme PAA files that you no longer want to use.
-   **[Manually packaging themes for deployment](../dev-theme/themeopt_move_repackstatic.md)**  
You must repackage the static content as a WAR file or as an EAR file containing the WAR file when it is not possible to exchange the static content with the Operations Team as a separate compressed file.

**Parent topic:**[Developing themes for a production portal](../dev-theme/themeopt_stagetoprod.md)

**Related information**  


[Installing add-ons](../config/int_sol_installer.md)

[Exporting content from the filestore](../dev-theme/themeopt_move_expfilestore.md)

[Manually packaging themes for deployment](../dev-theme/themeopt_move_repackstatic.md)

