# Migrating web server configurations

Migrate a web server so that it supports the latest version of WebSphere® Application Server. The Application Migration Toolkit for WebSphere Application Server supports migrating applications from previous versions of WebSphere Application Server to the latest product version.

You can upgrade IBM® HTTP Server \(IHS\) from a previous version in two ways:

-   Install the new version in a new directory
-   Install the new version in the same directory as the previous version

For information about migrating applications, read more about the Application Migration Toolkit at [HCL Software Support](https://support.hcltechsw.com/csm).


# Installing the new version of IBM HTTP Server in a new directory

1.  Install the Version 8.5 IBM HTTP Server in a new directory.

2.  If you installed IBM HTTP Server into a new directory and retained your previous version of IBM HTTP Server, by default the administration server and the web server use the same ports as the previous version administration server and web server. If you ever run both versions of the IBM HTTP Server simultaneously, port conflicts occur unless you change the port numbers for one of the server versions. To modify the port numbers for one of the IBM HTTP Servers, edit the server configuration files for that IBM HTTP Server. These files are in the http\_server\_install/conf directory.

3.  Migrate web server definitions. A web server definition is used to manage the web server from a stand-alone profile or the deployment manager.

    -   If you updated IBM HTTP Server on the original host but in a new directory, update the path by selecting the web server: **Servers** \> **Server Types** \> **Web Servers** in the WebSphere Integrated Solutions Console.
    -   If the updated IBM HTTP Server is on a new host, follow the procedure in *Selecting a web server topology diagram and roadmap* to create a new web server definition. You can remove the old web server definition when you confirm that the new web server is working properly.
4.  Install the latest IBM HTTP Server cumulative fix. Learn more about [Recommended fixes for IBM HTTP Server.](https://support.hcltechsw.com/csm)


# Installing the new version of IBM HTTP Server in the same directory as the previous version

1.  Migrate web server configurations.

    1.  Stop the IBM HTTP Server and the IBM HTTP Server administration server.

    2.  Copy the existing installation directory to a new location. This action preserves your configuration, keys, and content.

        -   If you are using Linux™, use the following command to copy the previous installation:

            ```
            cp –rp current_install_directory new_directory_name
            ```

        -   If you are using Windows™, use the following command to copy the previous installation:

            ```
            xcopy current_install_directory new_directory_name /s /e /k /i 
            ```

    3.  Uninstall the previous IBM HTTP Server version.

    4.  Remove the previous installation directory. Because the uninstallation leaves behind some files, such as modified and added files, fix pack files, and uninstall files, you must manually remove the previous installation directory to complete the uninstallation process. If you had any uninstallation issues, review and backup the uninstall log files in the http\_server\_install/logs/uninstall directory before proceeding.

        -   If you are using Linux, use the following command to remove the installation directory:

            ```
            rm -r  current_install_directory  
            ```

        -   If you are using Windows, use the following command to remove the installation directory:

            ```
            rd /s current_install_directory
            ```

    5.  Install the Version 8.5 IBM HTTP Server in the same directory location as the previous version.

    6.  Run the Plug-ins Configuration Tool, the pct tool, to configure your web server plug-ins. Refer to [Configuring a web server plug-in using the pct tool](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/tins_pctcl_using.html) for information on running the pct tool.

    7.  Restore any custom configurations that were made to your previous version of IBM HTTP Server and IBM HTTP Server administration server.

        -   Identify your previous customizations.

            If you used the httpd.conf configuration files that are provided with the previous version of IBM HTTP Server as the starting point for your configuration files, compare the content of each configuration file, with its corresponding .default file, within the directory that contains your previous IBM HTTP Server installation. For example, if you compare the content of the httpd.conf file with the httpd.conf.default file, you can see any customizations that were made to the httpd.conf file since the original installation. Then, perform similar comparisons for the other configuration files.

            If you did not use the httpd.conf configuration files that are provided with the previous version of IBM HTTP Server as the starting point for your configuration files, perform a manual analysis to determine your previous settings. In this situation, you might want to compare the settings in the httpd.conf.default file that is provided with the new IBM HTTP Server, with the settings in the httpd.conf.default file that is provided with the previous IBM HTTP Server version. Use this comparison to identify configuration differences in the two httpd.conf.default files. You can then use this information to modify your customized configuration file to work with the Version 8.5 IBM HTTP Server.

            Compare the bin/envars file to the bin/envars-std file within the directory that contains your previous IBM HTTP Server installation. This comparison identifies any customizations that were made to this file.

        -   Merge the customizations into the newly installed IBM HTTP Server configuration and envars files.

            After you identify the configuration customizations that you made to your previous version of IBM HTTP Server, make these same changes, when applicable, to the configuration files for the Version 8.5 IBM HTTP Server.

            If the configuration files contain WebSphere Application Server plug-in statements from previous versions, remove them to prevent duplicates. If you do not remove these statements, when IBM HTTP Server attempts to start the Version 8.5 plug-in binary module, an error might occur that indicates that the module is already loaded.

            The configuration file might also contain duplicate entries for accessing WebSphere Application Server samples. Remove any aliases for previous versions and retain the Version 8.5 entries.

    8.  Restore HTML content. If your web page content was previously stored under your IBM HTTP Server installation directory, copy those content files from the directory that contains your prior version of IBM HTTP Server into the installation directory for the new version.

    9.  Copy any SSL KeyFiles that might be within the installation directory of the previous IBM HTTP Server into the new installation directory

2.  Change port assignments for coexisting IBM HTTP Servers. To modify the port numbers for one of the IBM HTTP Servers, edit the server configuration files for that IBM HTTP Server. These files are in the http\_server\_install/conf directory.

3.  Upgrade Apache plug-in modules.

    There are no Apache API \(application programming interface\) changes from the previous major release, so there should be no need to rebuild modules that worked with the previous release. However, if you use modules from third-party vendors, contact your vendors to verify that they support the module with the version of IBM HTTP Server to which you are upgrading.

    Apache plug-in modules from sources other than the Version 8.5 IBM HTTP Server must be built to support Apache 2.2. The distributors of modules that are used with older versions of IBM HTTP Server might need to recompile the modules to support Apache 2.2.

    -   WebSphere Application Server provides a new plug-in for Apache 2.2 and IBM HTTP Server 8.5.
    -   If you use modules from third-party vendors, contact your vendor for a version of the module that works with the Apache 2.2 API.
    -   If you use modules that were developed in-house, you must rebuild your modules to support Apache 2.2. The modules might also require some modifications.
4.  Update the IBM HTTP Server service name in the WebSphere Application Server web server definition if the following conditions are true:

    -   The server is a Windows server.
    -   You installed IBM HTTP Server into the same directory where an earlier version was located.
    -   You are using a web server definition from that prior installation.
    For an IBM HTTP Server on a Windows server system, use 'Services' to determine the name that is used for the new IBM HTTP Server service, and then update the web server definition to use this service name.

5.  Migrate web server definitions. A web server definition is used to manage the web server from a stand-alone profile or the deployment manager.

    -   If you updated IBM HTTP Server on the same host and in the same directory, no action is required. The current web server definition suffices.
    -   If the updated IBM HTTP Server is on a new host, follow the procedure in [Selecting a web server topology diagram and roadmap](http://www-01.ibm.com/support/knowledgecenter/SSD28V_8.5.5/com.ibm.websphere.nd.doc/ae/tins_road_plugins.html) to create a new web server definition. You can remove the old web server definition when you confirm that the new web server is working properly.
6.  Install the latest IBM HTTP Server cumulative fix. Learn more about [Recommended fixes for IBM HTTP Server](https://support.hcltechsw.com/csm).


