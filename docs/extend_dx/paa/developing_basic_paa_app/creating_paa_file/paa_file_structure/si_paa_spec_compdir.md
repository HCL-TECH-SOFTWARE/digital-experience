# Components directory

The components directory and its sub-directories in the PAA file archive are where all deployable artifacts must be stored. If you examine the content of the components directory in the PortalServer\_root/doc/paa-samples/Sample1.paa file, you see one component, sample1. There is always at least one component that is contained in a PAA file. However, there is no limit on the number of extra components that you can include.

The number of available components depends on how you want to organize your deployable artifacts. Potentially all the deployable artifacts can be stored in a single component. However, if there are multiple stand-alone applications to be stored in the PAA file, create a component for each application. Also, if you want to be able to reuse components across PAA file distributions, then it makes sense to separate artifacts into multiple components.

There is no limit on the type of artifacts that can be contained within a specific component. There is a limitation on where the artifacts can be placed within the component directory sub tree structure.

A component can include artifacts and configuration details for an entire application. It can also contain only artifacts that relate to a certain part of the application. For example, you might include all your theme-related artifacts in one component, and your XML access scripts to create the pages for your site in another. The Solution Installer is not concerned with the approach selected. It processes each component based on the dependencies that are listed in the sdd.xml file. However, it might make sense to have some separation to handle reusability of components.

Using the [PortalServer\_root](../../../../../guide_me/wpsdirstr.md)/doc/paa-samples/sample1.paa example, open the components/Sample1 directory. The following directories must be present with the component level sdd.xml file:

-   **config**

    This directory contains includes and templates directories. Both directories are important if you plan to add custom tasks to aid the installation or configuration of the component artifacts.

    -   **includes**

        This directory is where the ConfigEngine looks for tasks that implement the extension points that are listed in the component level sdd.xml file. The name of the xml file that contains the Ant tasks is not hardcoded, so the ConfigEngine automatically loads any XML files that are found in this directory. The Ant tasks do not have to be stored in a single file. They can be spread over multiple files that are all picked up by the ConfigEngine.

    -   **templates**

        This directory is where extra script files are stored for configuration tasks. For example, if you deploy a WAR file and want to run portlet configuration tasks, you can place the XML scripts in this directory. Copy the war file to the profile\_dir/installableApps directory with your custom task implementation and reference this location in your XMLAccess script.

        !!! note 
            The Solution Installer does not automatically run the scripts that are stored in this location. Instead, the custom tasks are responsible for calling these scripts.

-   **content**

    This directory is where you can store HCL Web Content Manager libraries and other content related artifacts for import. The component/content directory contains the following sub-directories:

    -   **jcr**

        This directory contains JCR-related artifacts and a directory structure of nodes. Each entry is either a file or a directory, with associated metadata \(title, last modified, permissions\). Content that is found in this directory must be installed with custom code. The Solution Installer does not auto-generate any tasks to handle resources that are found in this location.

    -   **jsp**

        Place any JSP files that you want to package as part of your application in this directory. Usually, the custom code handles resources in this location. However, Web Content Manager related JSP files are treated as a special case. Place such files in a sub folder that is called wcm under the jsp directory, for example, jsp/wcm. The Solution Installer copies all files and folders to the relevant location on the server: `${WasUserHome}/installedApps/${NodeName}/WCM_EXTENSION.ear/wp.wcmextension.war/jsp/wcm/content`.

        !!! note
            The Solution Installer does not run any default tasks to handle other JSP content, excluding those tasks that are found in the jsp/wcm directory. A developer must provide a custom task to ensure that this content is copied to the correct location.

    -   **wcm**

        This directory contains Web Content Manager libraries. Each sub-directory of the wcm directory represents a separate library. These libraries are a specialized form of JCR artifacts. Web Content Manager libraries are separated into their own directory due to the process required to install them with the default function. For example, if you have a library that is called lib1, you might place the content in the content/wcm/lib1 directory; for example, content/wcm/lib1/554ee7f5.

        Multiple Web Content Manager libraries that are contained within a single sub-directory are supported. However, it places a limitation on the Solution Installer's ability to delete and replace libraries. That is, the task that Solution installer relies upon to import takes everything within a supplied sub-directory and attempts to import to the server. Therefore, to be able to successfully replace all the libraries in the directory, they must all be marked for deletion. Where libraries are allocated to their own sub-directory, they can be replaced on the system individually when there are no interlibrary dependencies. Another existing library does not have a dependency on items in the library that is selected for deletion.

    -   **webdav**

        This directory and its sub tree structure contain artifacts that must be uploaded to the WebDAV file store. There are four possible sub-directories. Each one is named to reflect the type of function that is provided in the files supplied. The following options are available:

        -   **iwidgets**

            Place .zip files that contain iWidgets that must be uploaded to the WebDAV file store and registered with HCL Portal. The Solution Installer automatically uploads any .zip files that are found in this directory to the dav:fs-type1/iwidgets/ directory. Extra work is necessary to have the iWidget definitions that are registered with HCL Portal. The installer must know about the widget definition files to register with WebSphere Portal. A properties file called iwidgets.properties must be included in the iwidgets directory in the PAA. The properties are generated with the .zip file name that contains the definition file as the name of the property. It also supplies a comma-separated list of definition files that are contained in this file as the value.

        -   **layout-templates**

            Place .zip files that contain layout-templates in this directory. When such files are detected by the installer, code is generated to automatically upload such content to the dav:fs-type1/layout-templates/ directory in the WebDAV file store.

        -   **skins**

            Place any .zip files that contains skins not specific to a theme in this directory. The content is automatically uploaded to the dav:fs-type1/skins/ directory in the WebDAV file store.

        -   **themes**

            Place .zip files that contain static theme content in this directory. They are automatically uploaded to the dav:fs-type1/themes/ directory in the WebDAV file store.

            !!! note 
                If your theme contains dynamic content, include them in a WAR file that is deployed at run time.

        The Solution Installer uploads WebDAV content with the dav:fs-type1/\*.\* WebDAV entry point. The themes and skins are not automatically made available through the themelist or skinlist entry points. To ensure that they are available through the administration pages, an XMLAccess script must be created to register the resources with HCL Portal. The context root, where the content of the individual .zip files is installed, is set in the following manner:

        -   The root directory is contained within the .zip file. For example, all the content is enclosed within a directory. Then, it is appended to the TargetURI. For example, a .zip file in the componentName/content/webdav/themes directory with a root directory of sample would result in TargetURI dav:fs-type1/themes/sample/.
        -   No root directory is contained in the .zip file. All the items are in the parent level. Then, the name of the .zip file minus the ‘.zip’ suffix is used. For example, a .zip file with the name sample1.zip would result in TargetURI ‘dav:fs-type1/themes/sample1/’. The upload task for the .zip files to the WebDAV file system is set to replace the current directory with the new content. However, the Solution Installer alters this function to merge the content by default instead. When the UpdateMode parameter is set to replace, which is the default, the upload replaces all content found at the TargetURI. For example, if you upload a .zip file to dav:fs-type1/themes/, it does not replace the equivalent content that is stored in the directory. It replaces everything in this directory. Therefore, it was decided that it would be better to have the content that is set to merge with the existing content as the default behavior. If you do require UpdateMode set to replace, then you must add a properties file to the directory. For example, if you want to replace all the themes, you would place the webdav.properties file in the componentName/content/webdav/themes directory. There is just one property available in this file: webdav.replace=list of .zip files. The value of the webdav.replace property is a comma-separated list of files that tells the Solution Installer which files must be uploaded.

    -   **xmlaccess**

        Stores any component level XML access scripts. This directory differs from the component/config/templates directory that stores scripts to be called by custom Ant tasks. Any scripts that must be run by default, are placed in the content/xmlaccess directory. This directory has two sub-directories to aid in the distinction between installation and uninstall scripts. The scripts that are required for installation are in the /content/xmlaccess/install directory and the uninstall scripts are placed in the /content/xmlaccess/uninstall directory. The type of scripts in the component/content/xmlaccess directory can include scripts to register a theme or create pages and assign portlets. Other examples are scripts to create a set of users and groups or a credential slot in the HCL Portal credential vault. All the scripts that are found by Solution Installer in these directories are automatically run.

    -   **database**

        This directory contains any database scripts for creating tables and pre-populating the tables with any relevant data. Solution Installer can generate Ant tasks to create the relevant configuration settings on the underlying WebSphere® Application Server. For details of the required properties, go to [Database properties for the Solution Installer](../dbprops_si.md).

        There are two directories in the database directory in the PAA file: install and uninstall. The PAA file developer must place the following scripts in these directories:

        -   .ddl and .sql scripts to create and populate tables in the install directory
        -   .ddl and .sql scripts for dropping tables in the uninstall directory

        Where multiple scripts are required, include an order.properties file in the appropriate directory to specify the correct order for installation.

        If you are providing setup scripts for different database types in a single PAA file, there is an extra step. Run this step during the PAA creation phase. For each database type, a properties file must be added to the components/componentName/content/database/install directory.

        -   For Derby scripts, call the scripts.derby.properties file.
        -   For DB2® scripts, call the scripts.db2.properties file.
        -   For Oracle scripts, call the scripts.oracle.properties file.
        -   For SQL Server scripts, call the scripts.sql.properties file.

        Add a comma-separated list of scripts to the properties file in the order that they must be run for a specific database type. The Solution Installer determines at run time, which set of scripts to run for the database type requested.

    -   **pzn**

        PZN-related artifacts, such as JAR files that contain business rules and personalization .nodes files are in this directory. The Solution installer automatically copies any JAR files that contain custom Java classes to the correct location under the profile directory and upload any .nodes files to the server.

-   **installableApps**

    The installableApps directory is where any artifacts that must be installed to HCL Portal or directly to the application server are to be stored. Solution Installer copies the relevant files across to the [wp\_profile\_root](../../../../../guide_me/wpsdirstr.md)/installableApps directory automatically when the default implementation tasks are used. The artifacts are stored in the PAA file in sub-directories of the installableApps directory. The sub-directories are based on their resource type to allow for default code to be easily generated to manage installation and deployment of artifacts. However, when the artifacts are copied to the [wp\_profile\_root](../../../../../guide_me/wpsdirstr.md)/installableApps directory, it is just the content of the sub-directories that is copied and not the directories themselves. The following is a list of currently supported resource sub-directories:

    -   **ear**

        Contains any EAR files that must be deployed to the application server. Wrap .war files that do not contain any portlets and must be installed to the application server in an EAR file. The reason for this is that the default scripts used to deploy artifacts require specific information to run the installation. For example, the display name and context root for the application. This information can be found in the application.xml file of an EAR file. The context root information would not be available with just a WAR file. An example of a WAR file that must be wrapped in this way is a theme.war file. If you are providing a custom Ant deployment script, it is unnecessary because you can provide the required information in the script or a properties file.

        EAR files are deployed automatically to the server. However, if a WAR file that contains a portlet is wrapped inside of an EAR file, the developer must supply an extra script to register the portlets with HCL Portal. It is the responsibility of the developer to ensure that the portlets are registered in the correct manner.

    -   **portlets**

        Place any WAR files that contain JSR portlets into the portlets directory. Legacy portlets are not handled automatically by the installer. They require custom code to install and must not be placed in this directory. The reason for separating these WAR files from those files that contain servlets or other application types is due to the installation method required. Those files that contain JSR portlets are typically installed and deployed with an XML access script. Those files that need to be installed directly to the application server are deployed with a ConfigEngine Ant task or with a wsadmin script. The Solution Installer can then read the portlets directory and install the WAR files automatically and does not need to worry that it might encounter a non-portlet WAR. However, if there is extra configuration setup for a portlet, then overwrite the default installation task with an Ant task with a custom XMLAccess script to do the installation. Add a `<SCU>` element to the sdd.xml file for the deploy-portlets-applySIFeaturePack extension point and add an Ant task that implements this extension point in the config/includes directory. This Ant task must call the XMLAccess task to run any supplied XMLAccess script against the portal server.

        The automatic installation uses the unique ID from the `<portlet-app>` element that is found in the warfile/WEB-INF/portlet.xml file, and the location of the WAR file itself to enable the deployment. If the unique ID is not available, the name of the WAR file is used. The WAR file is automatically copied over to the [wp\_profile\_root](../../../../../guide_me/wpsdirstr.md)/installableApps directory. The following is a sample XMLAccess script that shows how the information is used to drive the installation.

        ```
        <?xml version="1.0" encoding="UTF-8"?>
        <request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        		xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.0.xsd" type="update"
        		create-oids="true">
        		<portal action="locate">
        			<web-app action="update" active="true"
        				uid="portletXmlUniqueId.webmod">
        				<url>file:///$profile_dir$/installableApps/warfile.war</url>
        			</web-app>
        		</portal>
        </request>
        ```

        WAR files that are placed at this location also have unique names that are automatically generated for the individual portlets during installation. The generation of unique name values is based on the scheme componentName.portletName. The following is a sample XMLAccess script that shows how the unique name values are specified:

        ```
        <?xml version="1.0" encoding="UTF-8"?>
        <request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.0.xsd" type="update" create-oids="true">
        		<portal action="locate">
        			<web-app action="locate" domain="rel" objectid="WebAppID.webmod"
        uid="WebAppId.webmod">
        			<portlet-app action="update" domain="rel" name="PortletAppId"
        uid="PortletAppId">
        			<portlet action="update" domain="rel" name="PortletName"
        uniquename="componentName.PortletName"/>
        			</portlet-app>
        		</web-app>
        	</portal>
        </request>
        ```

        Prefix the component name to the WAR file name with the componentName.WARname.war scheme. Although not essential, it allows the user to easily track which WAR files were installed with the Solution Installer.

    -   **war**

        This directory contains any WAR files that the developer does not want to automatically install. The developer extends the extension point with a custom Ant task to install the artifacts. An example is if the WAR file contains legacy portlets. Alternatively, the WAR file does not contain any portlets and the developer does not want to wrap it in an EAR. Also, extra customization steps might be required for the configuration of the deployed artifacts. Therefore, a custom script is necessary. The installer generally ignores this directory apart from copying the files to the [wp\_profile\_root](../../../../../guide_me/wpsdirstr.md)/installableApps directory and then starting any custom code that is provided to handle these artifacts.

    -   **zip**

        This directory contains any .zip file content that you must include for a component. For example, you might have some artifacts that must be copied and installed to a server that currently is not supported by Solution Installer. Solution Installer does not automatically process the content of this directory. The individual files remain in their compressed state after the PAA file is extracted. Instead, any processing of these files is completed by either custom Ant tasks that are provided by the developer or through manual steps.

-   **shared**

    When you deploy an application to HCL Portal, often extra shared libraries are required for the application to function correctly. These libraries can be at different levels of scope for the application. If stored in the WAR file itself, then only classes within that WAR file are able to access the library files. The second situation is when a set of libraries are solution-specific. That is, the classes in the shared library are available only to the overall solution. The WAR file option is not appropriate as it might mean a number of separate applications that work together as a larger solution, all requiring access to the library. The third level of scope is global, meaning that many applications on the server can access these classes. The first situation where the library JAR files are stored in the WAR file is out of scope for this document. However, the ability to handle the other two situations is provided by the Solution Installer.

    For globally available JAR files, place the JAR files into either the component/shared/app or component/shared/ext directories. These files are not copied to the equivalent directories under the [PortalServer\_root](../../../../../guide_me/wpsdirstr.md) directory. Instead, a task is run to register all the JAR files found in the shared/app and shared/ext directories of the components. When objects are found in these directories, they are registered directly with a Solution Installer-specific set of shared libraries that are inside the profile. This action makes the libraries profile-specific thus different versions of the same files might be installed to different profiles.

    JAR files that are registered in the component/shared/app directory are registered in the Solution Installer-specific shared.app.jar file. Similarly, for the .jar files in componentName/shared/ext directory, these files are registered with a profile-specific shared.ext.jar file. These files can be found under the [wp\_profile\_root](../../../../../guide_me/wpsdirstr.md)/PortalServer/solutionInstaller directory sub tree. The specific library ‘SiSharedLib’ is registered at the cell or node level of the profile. A reference is then added to the class path of the application server to ensure that the files are available at run time. Only the shared.app.jar file is loaded automatically by the SiSharedLib library. When the registration of these files is finished, a server restart is required to reload the libraries and make the classes available on the class path. When complete, the library-specific classes are now available globally to that server for an application to access.

    To allow a library scope that is limited to a specific solution, place the relevant JAR files in the component/shared/common directory. Files in this directory are not copied to a location inside of the profile directory. Instead, a shared library for this component that points to this directory are added to the WebSphere® Application Server. This shared library then must be associated with either the application or made available on the server-wide class path so it is available to all applications. A properties file called shared-library.properties is in the component/shared/common directory. This file contains information on the scope to which the shared library must be registered. It also provides information on any required class loader properties, such as class loading precedence. The following properties are available in the shared-library.properties file:

    ```
    # set whether the library should be at the server scope or application scope
    # Can have the following values:
    # cell, cluster, node, server
    library-scope=server
    # specify whether the library should be added to the server class path
    # or associated with a specific application.
    Library-ref=application
    # Set the name of the application(s) to which the library is to be associated.
    # name of application(s) found in the integrated administration
    # console/applications/enterprise applications.
    applicationName=# your application name
    # Set class loading preference, options are either
    # 'PARENT_FIRST' or 'PARENT_LAST'.
    classLoadingMode=PARENT_FIRST
    ```

    If multiple applications are associated with the library, specify a comma-separated list of application name; for example: applicationName=AppName1,AppName2,AppName3, where AppName1,AppName2,AppName3 represent the applications to which the library is associated.

-   **template**

    The template directory is where a developer can place files to create a website template. The template is based on one or more of the components that are supplied in the PAA distribution. One or more sub-directories might be contained within the template directory, one for each template that you want to provide. The default directory name is reserved by Solution Installer as the content of this directory is always run.

    The default directory and any subsequent template directories have their content split into two further sub-directories to aid in the distinction between installation and uninstallation scripts. The installation scripts are in the /component/template/template\_Name/install directory and the uninstallation scripts are placed in the /component/template/template\_Name/uninstall directory. The scripts that are contained in the default directory are always run. Therefore, if you are offering multiple templates and do not want one to be installed by default, leave this directory structure empty. In general the content of the default, or template-specific directories, include XMLAccess scripts to create pages, put portlets on the pages, and create users. That is, any task that is site-related and not covered by the other directories or components. For example, do not place an XMLAccess script to install a WAR file here. Instead, if this file is required, place it in the component/config/templates directory if a custom Ant task is required or in the component/content/xmlaccess/install directory otherwise.

    To use a different template to the default, set the templateName property in the componentName.properties file. The value of the templateName property should reflect the name of the template to be used. For example: templateName=template2.

    !!! note
        Store any site-wide template-related artifacts in a single component separate from the components on which they depend. This placement allows the overall site presentation to be separate from the underlying technologies they surface and it makes it easier for the installer to handle updates in the future. It also makes it much easier to manage the provision of multiple site templates in a single PAA distribution. Store sample or demonstration pages for a single component local to that component.

-   **version**

    The component/version directory contains a single .component file with the application version information. The file contains build date, build version, name, and spec-version. This file is what tells the ConfigEngine the version of the application. Knowledge of the version that is already installed is necessary to facilitate updates to an application. The following is an example of a .component file:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE component PUBLIC "componentId" "component.dtd">
    <component build-date="6/10/14" build-version="20140610-1200" name="components/sample1" spec-version="5.0"/>
    ```



