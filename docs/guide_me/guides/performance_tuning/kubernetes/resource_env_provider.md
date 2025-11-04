# Resource Environment Provider

 All the tunings in this section were performed using the **WebSphere Integrated Solutions Console (ISC)** to edit Resource Environment Provider properties.  

 The same values can also be updated by editing the appropriate properties file in the `PortalServer` directory and running the `update-properties` ConfigEngine task to apply the changes in WebSphere.

 Regardless of the method used, you must **restart the Portal server** for the new values to take effect.

**Setting Resource Environment Provider properties by editing the property file** 

1. Open the `<wp_profile_root>/PortalServer/config/xxxService.properties` file.

2. If the property is already listed, uncomment the existing line and set the desired value. If the property is not listed, add a new entry with the desired value.

3. Run the following command:

    ```
    <wp_profile_root>/ConfigEngine/ConfigEngine.sh update-properties.
    ```

**Setting Resource Environment Provider properties to their default values**

1. In the WebSphere ISC, go to **Resources > Resource Environment > Resource Environment Providers**

2. Select the resource you want to edit.

3. Under **Additional Properties**, click **Custom properties**.

4. Set the value for the property name to the default value listed in the following sections. 

!!! Note there may be multiple Providers listed in the console. If this is the case, make sure that the properties are being updated at the server level (Server=WebSphere_Portal), not the node level.

![Server=WebSphere_Portal](../CustomProperties.jpg)