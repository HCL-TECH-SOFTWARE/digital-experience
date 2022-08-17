# Configuring the number of retrieved communities

You can define how many communities are retrieved from the HCL Connections server when searching for communities in the Page Associations window.

During this procedure, modify the following property in the WP\_ConnectionsIntegrationService resource environment provider:

-   **community.picker.page.size**

    This value defines the maximum number of community entries to retrieve from the HCL Connections server when searching for communities in the Page Associations window. The default value is 50.

    The value of this property also determines the number of communities that are retrieved the first time that the Page Associations window is used.

    **Performance note:** If you increase this value too much, the response times of the HCL Connections server can become slow.


1.  On the portal server, log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP ConnectionsIntegrationService**.

4.  Under **Additional Properties**, click **Custom Properties**.

5.  Update the value for the community.picker.page.size property.

6.  Save the property changes.


**Parent topic:**[Configuring community pages](../admin-system/commpages_config.md)

