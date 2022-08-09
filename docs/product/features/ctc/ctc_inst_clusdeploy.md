# Completing a Content Template installation on a web server \| CTC for HCL Digital Experience

To avoid 404: Not Found messages when you use Content Template Catalog in a cluster or when using a web server, you must update the web server so it can connect to the new applications.

When you deploy a new application to a cluster, you may need to add the application to the web server depending on how the server is configured. You must also regenerate the web server plug-in to update the URL mappings to the new application on the web server.

1.  Log in to the WebSphere Integrated Solutions Console.

2.  Verify that the Content Template application is on the web server:

    1.  Click **Applications** \> **Application Types** \> **WebSphere enterprise applications**.

    2.  Click **CTC**.

    3.  Click **Manage Modules**.

    4.  Select **CTC Web App** and select the web server and Portal cluster in the Clusters and servers field if it is not already selected. Then click **Apply**.

        The web server is now displayed in the Server column.

    5.  Click **OK**, then **OK** again to return to the Enterprise Applications page.

3.  Click **Servers** \> **Server Types** \> **Web servers**.

4.  Select the web server and click **Generate Plug-in**.

5.  Click **Propagate Plug-in** to propagate the Plugin\_cfg.xml file to the web server.


**Parent topic:**[First-time installation of Content Template](../ctc/ctc_inst_overview.md)

