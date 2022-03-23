# Converting a Portal API Web Content Viewer to the JSR 286 API 

As installed by default, the Web Content Viewer is based on the JSR 286 API. If you have a Web Content Viewer that is based on the older HCL APIs, you can convert the viewer to the JSR 286 API. Use the convert-wcm-rendering-portlet task to convert the Portal API Web Content Viewer settings and instances to the JSR 286 Web Content Viewer portlet.

The convert-wcm-rendering-portlet task converts portlet settings of the Portal API Web Content Viewer to portlet preferences of the JSR 286 Web Content Viewer. The task also converts instances of the Portal API Web Content Viewer to instances of the Web Content Viewer. User customized portlet data that is associated with the portlet instance is converted into portlet preferences.

1.  Update the file `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/wkplc.properties`.

    Confirm that the user IDs and passwords are set as required, or modify them if necessary.

2.  Update or verify the properties in the file `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/wcm/config/portletconversion.properties`.

    **Note:** If the following conditions are true, no changes are required and you can use the default values in the properties file.

    -   There are no clones of the Portal API Web Content Viewer.
    -   You want to convert all instances of the portlet on all pages in the default virtual portal.
    For specific situations, you can update the additional properties that are described in the following table.

    |Scenario|Properties to modify|
    |--------|--------------------|
    |You want to convert instances of the portlet on specific pages in the default virtual portal.|pages.uniquenameSpecify a list of unique names of pages, separated by commas. If you specify this property, only portlets on these pages and their descendants are converted. If this property is empty or missing, instances of the Portal API web content viewer on all pages are converted.

|
    |You want to convert instances of the portlet in a virtual portal that is not the default virtual portal.|xmlaccess.urlSpecify the URL of the virtual portal to the portal XML configuration interface servlet. You can use this property to run conversions for specific virtual portals. If this property is empty or missing, the default portal is used to run the conversion.

Example: `xmlaccess.url=http://www.example.com:10039/wps/config/vp1`

|
    |You cloned the web content viewer portlet and want to convert instances of the clone.|Identify the clone by specifying one of the following properties:    -   ibmportlet.portletname
    -   ibmportlet.uniquename
    -   ibmportlet.objectid
Only one of the properties is required to identify the portlet.For a complete list of properties for the portlet conversion task, see *Converting portlet instances and settings from the Portal API to the standard API.*

|

3.  Change to the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine`.

4.  Run the task ConfigEngine convert-wcm-rendering-portlet.

    -   **Windows™**

        ConfigEngine.bat convert-wcm-rendering-portlet

    -   **AIX®, HP-UX, Linux™, Solaris**

        ./ConfigEngine.sh convert-wcm-rendering-portlet

    -   **IBM® i**

        ConfigEngine.sh convert-wcm-rendering-portlet

    -   **z/OS®**

        ./ConfigEngine.sh convert-wcm-rendering-portlet

5.  Verify the conversion by reviewing the console.

    The message Build successful indicates a successful conversion. If the message Build failed is displayed upon completion of the task, review the previous steps.

6.  Verify the configuration of the converted Web Content Viewer. For more information about configuring a local Web Content Viewer, see the portlet help.

7.  After the successful conversion, you can uninstall the Portal API Web Content Viewer.


If you make the web content available on your delivery portal by using syndication, you can also convert instances of the Portal API Remote Web Content Viewer portlet to the JSR 286 portlet. When you make the web content available, you can transform your web content delivery model from remote rendering to local rendering. To convert instances and settings of the Portal API Remote Web Content Viewer portlet to the JSR 286 portlet, proceed by the following steps:

1.  Edit the file wp\_profile\_root/PortalServer/wcm/config/portletconversion.properties.
2.  Change the following parameters as described here:
    -   **ibmwebapp.uid**

        The default value for this parameter is the unique identifier of the Portal API Web Content Viewer. Change the value to match the unique identifier of the Portal API Remote Web Content Viewer: `com.ibm.workplace.wcm.app.ui.portlet.RenderingPortlet.30f9cb100a340018159bfdc657811d2e2`

    -   **ibmportlet.portletname**

        The default value for this parameter is the portlet name of the Portal API Web Content Viewer. Change the value to match the portlet name of the Portal API Remote Web Content Viewer: `Remote Web Content Viewer`.

3.  Perform steps 1 - 5 of the procedure that is given earlier.
4.  Verify the configuration of the converted Remote Web Content Viewer portlet. For further information on configuring a local Web Content Viewer portlet, read *Editing the settings of a web content viewer portlet*.
5.  After the successful conversion, you can uninstall the Portal API Remote Web Content Viewer portlet.

**Note:** If you made clones of the HCL API Web Content Viewer portlet or of the Portal API Remote Web Content Viewer portlet, or if you renamed the portlets, you might need to modify the parameters in the file wp\_profile\_root/PortalServer/wcm/config/portletconversion.properties that identify the portlet that you use as the source for the conversion. For a complete reference of all parameters that the portlet conversion task supports, read *Converting portlet instances and settings from the Portal API to the standard API*.

**Note:** In the version 8.5 user interface, the JSR 286 Web Content Viewer portlet has been renamed to Web Content Viewer.

**Parent topic:**[Web Content Manager ](../wcm/wcm_migration_post_update.md)

**Related information**  


[Portlet API Web Content Viewer and Remote Web Content Viewer ](../migrate/mig_pre_wcm_portlets.md)

[Converting portlet instances and settings from the HCL DX API to the standard API](../dev-portlet/migrt_ptlt_api.md)

[Editing the settings of a Web Content Viewer ](../panel_help/wcm_deploy_delivery_local-rendering-portlet.md)

[Unsupported features for HCL Digital Experience 8.5 and 9.0](../reference/intr_depc.md)

