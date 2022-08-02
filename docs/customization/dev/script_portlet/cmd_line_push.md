# Installing the command line push application

You can push files from a directory to the Script Application. You must first install the push application.

Verify that you have Java 1.6 or newer installed. Verify that the JAVA\_HOME environment variable points to your Java installation. You can add that information in the bash\_profile file. Alternatively, you can edit the batch or shell file to include a path to your Java directory.

1.  Obtain the compressed file sp\_cmdln.zip.

    **Note:** For pushing Script Portlets or Script Applications to portal with CF09 or a later Combined Cumulative Fix, you must obtain the command line utility that is provided with CF09 or later. The command line tool provided with HCL Script Portlet and earlier versions is not compatible with the new REST services provided by Script Application in CF09 and later releases.

    You can obtain that file by either of the following two ways:

    -   You can find the file sp\_cmdln.zip in the following directory:
        -   AIX®: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/scriptingportlet/wp.scriptportlet.cmdln/bin/sp_cmdln.zip`
        -   HP-UX: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/scriptingportlet/wp.scriptportlet.cmdln/bin/sp_cmdln.zip`
        -   IBM® i: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/scriptingportlet/wp.scriptportlet.cmdln/bin/sp_cmdln.zip`
        -   Linux™: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/scriptingportlet/wp.scriptportlet.cmdln/bin/sp_cmdln.zip`
        -   Solaris: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/scriptingportlet/wp.scriptportlet.cmdln/bin/sp_cmdln.zip`
        -   Windows™: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\scriptingportlet\wp.scriptportlet.cmdln\bin\sp_cmdln.zip`
        -   z/OS®: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/scriptingportlet/wp.scriptportlet.cmdln/bin/sp_cmdln.zip`
    -   When the portal page is in Edit mode, you can download file sp\_cmdln.zip from the **Download Command Line** tool action in the **Actions** menu of a Script Application.

        **Note:** Administrators can prevent the download of the compressed file by setting the following property to `false`: `scriptportlet.actionmenu.AllowCmdlnDownload=false` in the Script Application configuration component. For details about how to do so, read *Setting custom configuration properties for the Script Application*.

2.  Extract sp\_cmdln.zip.

3.  From the extracted directory, run sp.bat in Windows or sp.sh in Linux or OSX to verify that Java is working correctly.

4.  Set the default values in sp-config.json in the extracted folder. You can set server properties such as the URL, user name, password, and wcmSiteArea properties in this file. Those defaults are used anytime you run the sp push command.

5.  Add the extracted folder to the system path so that you can run sp push from any application folder. If you add the folder to the system path, you do not need the argument that specifies the application root folder.


**Parent topic:**[Script Application command line application overview](../script-portlet/cmd_line_push_ovr.md)

**Related information**  


[Setting custom configuration properties for the Script Application](../script-portlet/import_export_config.md)

