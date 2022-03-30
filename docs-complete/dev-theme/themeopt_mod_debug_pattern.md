# Debugging your module systematically 

Use a pattern to determine an issue within your custom modules. This pattern minimizes the time that is required to investigate and debug.

1.  Use the console in the client. Most browsers have their own development tools built-in. If there are client-side errors in the JavaScript, they are displayed in the console of these tools. The resources are still being aggregated so it can be difficult to identify the exact resource that causes the error.

2.  Turn on tracing. With tracing, you can see the specific resources that are aggregated on the page and you can see the location of where an error in the console originates. You can follow the code flow and track the expected values within the code.

3.  Investigate the logs. If the error is not apparent in the client-side console, then investigating the HCL Portal system logs is another likely place to track down an issue. These logs display any server-side errors and tracing that is enabled.

    1.  Open the HCL Portal logs in the following locations, [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)//logs/HCL Portal and HCL Web Content Manager/SystemOut.log and [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/logs/HCL Portal and HCL Web Content Manager/SystemErr.log.

    2.  You can enable more tracing through the Enable Tracing portlet in the Administration section of HCL Portal. Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Enable Tracing**.

    For more information, see *Logging and tracing*.

4.  Add logging to your resources. The HCL Portal code logs throughout the product for serviceability. However, your custom code might need more logging that is inserted to track down an issue. For client-side code, use a console log statement. A typical console log statement for displaying a value with a label is `console.debug("example value: "+value);`.

    Using this code displays a string value. To display the object in the console to see the values that are stored in the object, you can use

    ```
    console.log("the ibmCfg object:");
    console.debug(ibmCfg);
    ```

    The first line tracks the instance of the object. The second line adds the object to the console. Then, you can use the console to see the attributes and their values.

5.  Ensure that the resources are loaded on the page. If a particular feature of the page is not visible or does not seem to function properly, sometimes the resources are not on the page. To verify, you can view the requests on the page and see the individual JavaScript or CSS. Ensure the files that are needed for the function are included on the page. If resources are missing, edit the profile to include the necessary modules.

6.  Investigate with the Theme Optimization Analyzer. The theme optimization analyzer portlet can display many attributes of the theme, pages, profiles, and modules. You can investigate a module and view the details for visibility that is based on device class and contributions of resources. Each resource is listed with its path in the server. So, you can use this information to determine whether it is being aggregated on the page or to add more logging.

7.  Export XML definition for resources. After you investigate the issue, modifying the resource attributes is the next solution. Resources that would require a change to their XML definition are the theme, page, client, or device class. To export the XML definition of a resource, you can use XMLAccess. This is a command-line tool that is at [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin/xmlaccess.bat in Windows and [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin/xmlaccess.sh in Linux. You can use the following scripts to export a specific resource that is related to the theme framework but more examples are located here [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/xml-samples/.

8.  Export all theme definitions to modify the advanced features such as the metadata, resource root, default layout, or theme template definition. You can also modify other attributes through this definition.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_7.0.0.xsd"
    type="export" create-oids="true">
    <portal action="locate">
    <theme action="export" active="true" objectid="*"></theme>
    </portal>
    </request>
    ```

9.  Export page definition to modify features specific to the theme such as theme template override, dynamic content spot overrides, or device class filtering.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_7.0.0.xsd"
    type="export" create-oids="true">
    <portal action="locate">
    <content-node action="export" uniquename="ibm.portal.SamplePage"/>
    </portal>
    </request>
    ```

10. Export all defined clients to modify the device class assigned. You can view this information in the Manage Clients portlets as well.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_7.0.0.xsd"
    type="export" create-oids="true">
    <portal action="locate">
    <client action="export" uniquename="*"></client>
    </portal>
    </request>
    ```

11. Export all defined device classes to view the available groups and change the title or ID.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request type="export" create-oids="true"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig_7.0.0_2.xsd">
    <portal action="locate">
    <device-class action="export" uniquename="*" />
    </portal>	
    </request>
    ```


**Parent topic:**[Troubleshooting modular themes ](../dev-theme/themeopt_mod_debug_ovr.md)

**Related information**  


[Logging and tracing ](../trouble/pd_intr_logs.md)

