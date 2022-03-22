# Setting service configuration properties

HCL Digital Experience comprises a framework of services to accommodate the different scenarios that portals need to address. Services are available for both HCL Portal and HCL Web Content Manager. You can configure some of these services.

# Setting service configuration properties from the user interface

The configuration for each service is stored in and accessible through the WebSphere® Integrated Solutions Console. Each service is registered as a separate resource environment provider with custom properties that represent the service configuration. Initially in a default installation, only the most common properties are shown as custom properties. You might need to add more properties with key and value as required. Or you might want to remove properties that can be used with their default values or are no longer required.

1.  Select the appropriate WebSphere Integrated Solutions Console, depending on your environment:

    -   If your portal runs stand-alone, use the local console.
    -   If your portal is installed in a cluster, use the console of the deployment manager.
2.  Start the WebSphere Integrated Solutions Console by entering the following string in the **URL location** field of a web browser:

    ```
    http://example.com:admin\_port/ibm/console
    ```

    where `example.com` is the name of your server or node host name of your server when on z/OS® and `admin\_port` is the port that is assigned to the WebSphere Integrated Solutions Console.

3.  Go to **Resources** \> **Resources Environment** \> **Resource Environment Providers**.

4.  In the Resource Environment Providers page, make the appropriate selection. Select the appropriate node or cluster from the scopes list, or clear the **Show Scope** check box and select one of the following options, depending on your portal environment:

    -   If your portal is running as a single server, select **Browse Nodes** and select the node.
    -   If your portal is installed in a cluster, select **Browse Clusters** and select the portal cluster.
5.  Select the service in which you want to change a property.

    **Note:** In the list, the service names are preceded by a product prefix and a blank space. For example, the HCL Portal configuration service is identified as WP ConfigService. The HCL Web Content Manager configuration service is identified as WCM WCMConfigService.

6.  Click **Custom Properties**.

7.  Do one of the following tasks as needed:

    -   To set a property, select that property and change its value.
    -   If the property that you want to set does not exist yet, create it new. When you create a new property, use java.lang.String as its type and do not mark the property as **required**. Otherwise, you might not be able to delete it later.
    -   Select one or more properties for removal.
8.  When you are done, click **Save** at the start of the page under **Message\(s\)**.

9.  Click **Save** again when prompted to confirm your changes.

10. If you have a cluster configuration, replicate your changes to the cluster.

11. Restart the server for the changes to become effective.


Your service configuration properties updates are now in effect.

# Setting service configuration properties from the command line

By alternative, you can also set the properties in the properties files and then enable them by running a configuration task.

**Notes:**

-   This option for setting service configuration properties is not available for all properties.
-   Use this option only if you want to set service configuration properties from the command line. In all other cases, set service configuration properties through the Resource Environment Provider. To do so, use the procedure given earlier in this topic.
-   If your portal is installed in a cluster, use this procedure on the primary node. The configuration task `update-wcm-service-properties` does not take effect on secondary nodes.
-   Changes to properties configuration files do not affect runtime properties until you run the configuration tasks that are described in the following procedure.

1.  Locate the properties file for the appropriate Resource Environment Provider:

    -   The properties files for HCL Portal are in the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config`.
    -   The properties files for HCL Web Content Manager are in the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/wcm/shared/app/config/wcmservices`.
    If there is no default properties file for a Resource Environment Provider, for example, for WP DynamicContentSpotMappings, create a new properties file as follows:

    1.  Create a properties file by using a text editor.

    2.  Give the file the name of the Resource Environment Provider without the `WP` prefix.

        Example: `DynamicContentSpotMappings.properties`.

        Save the file in the appropriate directory for the Resource Environment Provider as given earlier.

2.  Edit the properties file and modify or add configuration properties as needed.

    Example:

    ```
    newDynamicContent=res:/CustomThemeContext/themes/html/MyTheme/dynamicContent.jsp
    ```

3.  Save the updated properties file.

4.  Run the appropriate configuration task to update the configuration properties:

    For changes to HCL Portal properties files to take effect, run the following task from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory.

    -   Windows™: ConfigEngine.bat update-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh update-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    -   IBM® i: ConfigEngine.sh update-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh update-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    For changes to HCL Web Content Manager properties files, run the following task from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory.

    -   Windows: ConfigEngine.bat update-wcm-service-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh update-wcm-service-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    -   IBM i: ConfigEngine.sh update-wcm-service-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh update-wcm-service-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password

Your service configuration properties updates are now in effect.

