# Development and operations overview

The steps for developing themes for a production portal include the development of the theme components, their packaging, and their deployment to systems.

The package is created either as the result of a build process that takes the code from a version control system and creates the correct artifacts or the artifacts are created by developers. Multiple artifacts create a release and the team that operates the integration and production servers receive and deploy them.

The components of a portal theme include:

-   **Static content**

    A component similar to the content of a static website. The markup is defined by HTML files. Static content also includes the CSS and JavaScript files that are used by the theme.

    The difference between a static website and a portal is that three kinds of HTML files exist:

    -   **theme.html**

        Defines the markup that is identical for all the pages that this theme is applied to.

    -   **layout.html**

        Defines the decoration of the content area that can be different between pages.

    -   **skin.html**

        Defines the decoration of the individual portlets on the page.

    If the files used by the theme are not part of the theme folder, and therefore not part of the theme structure, those files are named external. External files are shared by multiple themes.

-   **Dynamic content**

    Generated based on the data model of HCL Digital Experience (DX) with technologies such as JavaServer Pages (JSP) or Java code.

-   **Configuration**

    Scripts are used to register the theme and skins with WebSphere Portal.

    Runtime Configuration components are server configurations, similar to Resource Environment Provider settings, that are required for the themes and skins to work correctly.

## Developing theme components

There are several ways to develop a custom theme.

-   **Developing within an IDE**

    1. Set up a project using the format that you selected for packaging and add the artifacts such as HTML, CSS, and JavaScript files.
    2. Export the project and deploy it to your server, either as a compressed file in the file store or as an EAR file. 
    3. Register the theme with a custom developed `theme.xml` file.

    You might fill the project initially with the content of one of the ready-to-use themes or start from scratch.

    !!!Note
        The `wp.portal.theme.tlds.jar` file is deployed to servers and is embedded inside the `wp.ext.jar` file which can be found in `/opt/HCL/AppServer/plugins/` or `/opt/HCL/PortalServer/base/wp.engine.tags/plugins/`.

-   **Developing on the live server**

    This method of developing a theme is driven through the WebDAV entry point to the file store.

    1. Copy a theme with the existing content from one of the ready-to-use HCL DX themes or create a folder.
    2. Add your custom HTML, CSS, and JavaScript files.
    3. Export these files to create your theme component package.

    For more information about exporting files, refer to [Exporting content from the file store](./manual_packaging_themes/themeopt_move_expfilestore.md).

## Packaging theme components

The packaging of a custom-developed theme depends on how it was developed and what the preferred approach for static files is. For example, you can combine all static files for all the themes and external files shared between themes into one installable artifact or split the files into multiple artifacts. The method you choose has different implications for the development team and the team operating the portal so you need to include both groups when deciding how to package the components.

All packages must contain an XML Access script to deploy the theme and a list of runtime configurations that need to be applied to the server.

The following descriptions show the available options when all files are packaged together. If the files are separated, the number of files changes but the options are identical.

-   If you only created static resources but used dynamic spots included within HCL DX or custom dynamic spots that are generally available, you have the following options:
    -   Create a package that contains a compressed file that includes the static resources which can be deployed to the file store.
    -   Create a package that contains an EAR file that includes a WAR file with the static resources which can be deployed to the application server.

-   If you created custom dynamic spots that will be packaged with the theme, such as components based on JSP technology, you have the following options:
    -   Create a package that contains a compressed file that includes the static resources which can be deployed to the file store and an EAR file containing a WAR file that includes the dynamic resources.
    -   Create a package that contains an EAR file that includes one WAR file with the static resources and another WAR file that contains the dynamic resources. This file can be deployed to the application server.

You can also package the artifacts that you created in a Portal Application Archive \(PAA\) file for the Solution Installer. The Solution Installer automatically performs the steps to deploy the artifacts.

## Deploying theme components

The method you used to package the theme component determines the method you will use to deploy the themes. All options require an XMLAccess script and runtime configuration options or a PAA file.

-   **Compressed file without EAR file**

    Use the `webdav-deploy-zip-file` command to deploy the compressed file and use the XMLAccess command to run the script.

-   **Compressed file with EAR file**

    Use the `webdav-deploy-zip-file` command to deploy the compressed file. Use the WebSphere® Integrated Solutions Console or scripts to deploy the EAR file. Use the XMLAccess command to run the script.

-   **An EAR file with no compressed file**

    Use the WebSphere® Integrated Solutions Console or scripts to deploy the EAR file, and use the XMLAccess command to run the script.

-   **PAA file**

    The Solution Installer automatically detects the steps to perform deployment.

-   **[Theme PAA files](../dev_op_overview/theme_paa_files/index.md)**  
Using the Theme Development tools, you can quickly copy, create, and modify themes. After you modify a theme, you can export that theme as a PAA file so that you can install it on a different server. You can also uninstall theme PAA files that you no longer want to use.
-   **[Manually packaging themes for deployment](../dev_op_overview/manual_packaging_themes/index.md)**  
You must repackage the static content as a WAR file or as an EAR file containing the WAR file when it is not possible to exchange the static content with the Operations Team as a separate compressed file.

???+ info "Related information"
    - [Installing add-ons](../../../../deployment/install/traditional/install_addons/index.md)
    - [Exporting content from the filestore](../dev_op_overview/manual_packaging_themes/themeopt_move_expfilestore.md)
    - [Manually packaging themes for deployment](../dev_op_overview/manual_packaging_themes/index.md)
