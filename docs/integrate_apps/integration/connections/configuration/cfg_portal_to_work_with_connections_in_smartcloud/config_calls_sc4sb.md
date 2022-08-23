# Configuring a connection between HCL Portal and HCL Connections in SmartCloud for Social Business

Learn how to configure the HCL Connections integration assets to complete calls to HCL Connections in SmartCloud for Social Business.

The instructions for deploying the HCL Connections portlets include a procedure to configure the following settings. If you did not complete that procedure, you must complete the following steps.

1.  Configure the URL for the HCL Connections server by completing the following steps. You must create a custom property that stores the URL for the HCL Connections server. The URL must include the port number and specify the HTTPS protocol.

    1.  Log in to the WebSphere® Integrated Solutions Console.

    2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    3.  Select **WP ConnectionsIntegrationService**.

    1.  Within **Additional properties**, click **Custom properties**.

    2.  Click **globalBaseURL** and update the value to the URL of the HCL Connections server.

        For example:

        ```
        https://cntserv_exmp.com
        ```

    3.  Click **globalBaseURLUnsecured** and update the value to the URL of the HCL Connections server.

        For example:

        ```
        https://cntserv_exmp.com
        ```

2.  Configure the HCL Connections server type by setting the custom property server.type in the WP HCL Connections Integration Service resource environment provider in the WebSphere Integrated Solutions Console. For detailed steps on how to set the server.type property, see *Configuring the HCL Connections server type* in the related links.



**Related information**  


[Configuring the HCL Connections server type](../social/soc_rendr_cfg_connct_srvr_type.md)

