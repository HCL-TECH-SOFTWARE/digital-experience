# Serving HTTP OPTIONS requests to the server context root by WebDAV clients

Some WebDAV clients send an HTTP OPTIONS request to the server context root \( / \) to check whether the server supports WebDAV. To support these clients, the portal provides a web application called wp.webdav.options.war that you can enable. This application responds to such requests with a confirmation that the portal supports WebDAV.

To enable this WAR file, adapt the application.xml files of the deployed Enterprise Application \(EAR\), wps.earnamed WebDAV for WebSphere Portal, so that wp.webdav.options.war is mapped to the context root \( / \). Proceed as follows:

1.  Export the EAR, wps.earWebDAV for WebSphere Portal, through the WebSphere® Integrated Solutions Console.

2.  Open a command prompt. Under z/OS®, open a UNIX System Services \(USS\) command prompt.

3.  Run the following command to expand the EAR:

    -   ./EARExpander.sh\|bat -ear directory/WebDAV\_for\_HCL Portal and HCL Web Content Manager.ear -operationDir directory webdav\_expanded -operation expand
4.  Locate the file application.xml in the expanded EAR file directory.

5.  Edit the file application.xml of the exported EAR, and uncomment or add the following section:

    ```
    <module>
                                                      <web>
                                                      <web-uri>wp.webdav.options.war</web-uri>
                                                      <context-root>/</context-root>
                                                      </web>
                                                      </module>
    ```

6.  Run the following command to collapse the EAR:

    ```
    ./EARExpander.sh\|bat   -ear directory/wps.ear 
                                                                -operationDir directory/wps_expanded 
                                                                -operation collapse
    ```

7.  Update the enterprise application with these changes by using the WebSphere Integrated Solutions Console.

8.  Save your changes.

9.  Restart the portal for your changes to take effect.


**Note:** Depending on how your web server is set up, this change might cause all requests to be routed to the web server plug-in. In this case refer to your web server documentation for information about how to route only OPTIONS requests to the plug-in.

**Parent topic:**[Using WebDAV with HCL Portal](../admin-system/webdav.md)

**Related information**  


[Configuring HCL Sametime Proxy](../collab/cfg_st_single_ldap.md)

