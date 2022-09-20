# Configuring the HCL Connections server type

You can use social rendering with an on-premises HCL Connections server or with an HCL Connections server that runs in the Smart Cloud for Social Business. If you use the latter type of connections server, you need to adapt the configuration accordingly.

To configure the HCL Connections server type, you set a custom property named `server.type` in the WP Connections Integration Service resource environment provider in the WebSphere® Integrated Solutions Console. Supported values for this property are as follows:

-   **on-premise**

    Specify this value if the HCL Connections server runs on your premises. This value is the default value.

-   **SC4SB**

    Specify this value if your HCL Connections server runs in the Smart Cloud for Social Business.


1.  Log in to the WebSphere Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Select **WP ConnectionsIntegrationService**.

4.  Under **Additional properties**, click **Custom properties**.

5.  Locate the property named `server.type`.

    If this property does not exist yet, create it.

6.  Set the value for the `server.type` property to one of the values listed earlier as required.

7.  Save your changes.

8.  Restart your portal server for the changes to take effect.



???+ info"Related information"
    -  [Configuring a connection between HCL Portal and HCL Connections in SmartCloud for Social Business](../../../extend_dx/integration/connections/configuration/cfg_portal_to_work_with_cnx_in_sc/config_calls_sc4sb.md)

