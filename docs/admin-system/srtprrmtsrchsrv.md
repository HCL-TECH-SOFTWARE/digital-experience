# Preparing for remote search service

Get an overview of how you prepare your portal system for remote search service. You can provide remote search service by either using EJB or SOAP.

-   For SOAP: If you use SOAP, the following security and performance considerations apply:

    1.  Application security: If you use SOAP over a secure server, the SOAP service itself is not secure.
    2.  Java 2 security: If you use SOAP, you must disable Java 2 security.
    **Note:** SOAP support for remote search services was deprecated with HCL Digital Experience Version 8.0. EJB is still supported.

-   For EJB: If you use EJB, complete the following security administration tasks:
    1.  Prepare security for remote search service in a single sign-on domain \(SSO\).
    2.  Add the signer certification of the remote search service server into the portal search server. To do this addition, proceed by the following steps:
        1.  Access the WebSphere® Integrated Solutions Console of the portal search server.
        2.  Click **Security** \> **SSL certificate and key management** \> **Key stores and certificates** \> **NodeDefaultTrustStore** \> **Signer certificates** \> **Retrieve from port**.

            **Cluster note:** In a clustered environment, the path is **Security** \> **SSL certificate and key management** \> **Key stores and certificates** \> **CellDefaultTrustStore** \> **Signer certificates** \> **Retrieve from port**.

        3.  Enter the remote search service server host, its SOAP port, and an alias.
        4.  Click **OK**.

1.  Copy the files WebScannerSoap.ear, WebScannerEjbEar.ear, and PseLibs.zip to the directory `[AppServer\_root](../reference/wpsdirstr.md#was_root)/installableApps` on the computer on which you want to install the remote search service.

    You find these files in the following locations of your portal installation:

    -   The files WebScannerSoap.ear and WebScannerEjbEar.ear are in the directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/search/prereq.webscanner/installableApps`
    -   The file PseLibs.zip is located under directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/search/wp.search.libs/installableApps`
2.  Depending on the requirements of your environment, install one of the two applications WebScannerEJbEar.ear or WebScannerSoap.ear on a remote server. For example, this can be server1.

    Proceed by the following steps:

    1.  Access the WebSphere Integrated Solutions Console.

    2.  Click **Applications** \> **WebSphere Enterprise Application**.

    3.  Click **Install**.

    4.  Browse and select **WebScannerEjbEar.ear** or **WebScannerSoap.ear**, depending on whether you are using EJB or web service through SOAP.

    5.  Click **Next**.

    6.  On the following panels, accept the default settings.

    7.  A message confirms that the application PSEStandalone \(for EJB\) or the application WebScannerEar \(for SOAP\) was installed successfully.

    8.  Click **Save to Master Configuration**.

    9.  Click **Save**.

3.  This step is required if you use Document Conversion Services.

    1.  Install remote document conversion services on the remote server. You do not need to delegate all conversion tasks from the HCL Digital Experience to the remote server. You must only install the remote conversion services.

        For more information, refer to the topic about Enabling remote document conversion.

    2.  Start the WebSphere Integrated Solutions Console and select **Environment** \> **Shared Libraries**. Create a new shared library that is named PSE with a class path as follows:

        ```
             $(APP_INSTALL_ROOT)/cell\_name/dcs_war.ear/dcs.war/WEB-INF/lib/convertors.jar
             $(APP_INSTALL_ROOT)/cell\_name/dcs_war.ear/dcs.war/WEB-INF/lib/Export.jar
        ```

        where cell\_name is the IBM WebSphere Application Server cell name where DCS is installed.

    3.  Click **Apply** \> **Save** \> **Save** to save your changes.

4.  Extract the Portal Search libraries to the remote server and add them to the class path on the remote server. To do this step, proceed as follows:

    1.  Create a directory with the name extract under the directory `installableApps`.

    2.  Locate the file PseLibs.zip in the directory `installableApps` and extract its content into the directory `extract` that you created in the previous step.

    3.  Open the WebSphere Integrated Solutions Console.

    4.  Click **Environment** \> **Shared Libraries**.

    5.  Create or modify the new shared library names PSE.

        When you create the library, check the option **Use an isolated class loader for this shared library**.

    6.  Add the libraries `extract/lib` to the class path by adding a line to the class path and giving the full path: `[AppServer\_root](../reference/wpsdirstr.md#was_root)/installableApps/extract/lib`.

        `[AppServer\_root](../reference/wpsdirstr.md#was_root)` is the profile directory of your WebSphere Application Server installation. For example, this path can be:

        ```
              /usr/WebSphere/AppServer/profiles/profile\_name
        ```

        For z/OS® this path can be:

        ```
             /WebSphere/VR1M0/AppServer/profiles/default
        ```

    7.  Click **Apply** \> **Save** to save your changes to the configuration.

5.  Add a reference from the application WebScannerEJbEar.ear to the shared library. To add a reference, proceed as follows:

    1.  Access the WebSphere Integrated Solutions Console of the remote server.

    2.  Navigate to **Websphere enterprise applications**.

    3.  For EJB: Click the application **PSEStandalone** \> **Shared library references**. For SOAP: Click the application **WebScannerEar** \> **Shared library references**.

    4.  For EJB: On the window that opens up click the check box for **PSEStandalone**, then click **Reference shared library**. For SOAP: On the window that opens up click the check box for **WebScannerEar**, then click **Reference shared library**.

    5.  From the **Available** list, select **PSE**.

    6.  Click the appropriate arrow so that **PSE** displays in the **Selected** list.

    7.  Click **OK** \> **OK**.

    8.  Save the configuration.

    9.  For EJB: Restart the application PSEStandalone. For SOAP: Restart the application WebScannerEar.

6.  On the WebSphere Integrated Solutions Console, determine the required values for configuring the portlet parameters, depending on whether you are using EJB or web service through SOAP:

    -   For EJB: Determine the value for the port under **Servers** \> **Server Types** \> **WebSphere application servers** \> **YourAppServer1** \> **Communications** \> **Ports** \> **BOOTSTRAP\_ADDRESS**.
    -   For SOAP: Determine the value for the port number for the SOAP URL parameter. The appropriate port number for the SOAP URL parameter is the port on which the application server runs, in other words, the HTTP transport on which the remote server is configured to run. Determine the correct port number from **Application servers** \> **server1** \> **Ports** \> **WC\_defaulthost**. The WC\_defaulthost value is 10014; therefore, if you did not change the default, you can use this value. Make sure that the port number that is set in the following file matches this port:

        ```
        [AppServer\_root](../reference/wpsdirstr.md#was_root)/installedApps/cell/WebScannerEar.ear/WebScannerSoap.war/
             wsdl/com/ibm/hrl/portlets/WsPSE/WebScannerLiteServerSOAPService.wsdl
        ```

        Replace the variables as follows:

        -   `[AppServer\_root](../reference/wpsdirstr.md#was_root)` is the profile directory of your WebSphere Application Server installation. For example, this directory can be:

            ```
                  /usr/WebSphere/AppServer/profiles/profile\_name
            ```

            For z/OS this directory can be:

            ```
                 /WebSphere/VR1M0/AppServer/profiles/default
            ```

        -   **`cell`** is the cell name of your remote search computer.
        -   **`WebScannerEar.ear`** is the name that you gave to the Enterprise Application when you installed the `WebScannerSoap.war` file.
        Edit the file and look for the port that is given in the value for the SOAP address location. Example:

        ```
          <soap: address location="http://localhost:**your\_port\_no**/WebScannerSOAP/servlet/rpcrouter"/> .
        ```

        In the example the port is `your\_port\_no`. The default value for the WC\_defaulthost is 10014.

7.  In the WebSphere Integrated Solutions Console, go to **Resources** \> **Asynchronous beans** \> **Work managers**, create a new Work manager who is named PSEWorkManager with the following attributes:

    **WebSphere Application Server V9:** If you upgraded to IBM® WebSphere Application Server Version 9.0, the WebSphere Integrated Solutions Console path is **Resources** \> **Concurency** \> **Work managers**.

    ```
    
       Name:                       PSEWorkManager
       JNDI Name:                  wps/searchIndexWM
       Minimum Number of Threads:  20
       Maximum number of Threads:  60
       Growable =                  True (Ensure that the **Growable** check box is selected.) 
       Service Names:              Application Profiling Service, WorkArea, Security, Internationalization
    
    ```

8.  Click **Apply** \> **Save** to save your changes to the configuration.

9.  Start the application:

    1.  Open the WebSphere Integrated Solutions Console.

    2.  Click **Applications** \> **Application Types** \> **WebSphere enterprise applications**.

    3.  Scroll to `PSEStandalone` or `WebScannerEar`. You can use the filter feature to search for these names.

    4.  Click the check box and click **Start**.

        A message confirms that the application started successfully.

10. This step is required only if you work with EJB on a secure server: [Setting the search user ID](srtsttusrid.md).

11. This step is required only if you disabled security or set the search user ID by one of the optional previous steps: Restart the WebSphere Application Server.

12. In the portal server enable CSIv2 identity assertion. To complete this step, proceed as follows:

    **Cluster note:** In a clustered environment, complete these steps on the Deployment Manager WebSphere Integrated Solutions Console.

    1.  Enable CSIv2 Identity Assertion on the outbound connection:

        1.  Access the WebSphere Integrated Solutions Console of the portal server.
        2.  Navigate to **Security** \> **Global Security** \> **RMI/IIOP security** \> **CSIv2 outbound communications**.
        3.  Check **Use identity assertion**.
        4.  When you are done, restart the portal server.
    2.  Enable CSIv2 Identity Assertion on the inbound connection:

        1.  Access the WebSphere Integrated Solutions Console of the remote server.
        2.  Navigate to **Security** \> **Global Security** \> **RMI/IIOP security** \> **CSIv2 inbound communications**.
        3.  Check **Use identity assertion**.
        4.  Under **Trusted identities**, enter either an asterisk \(\*\) or the identity of the portal server.
        5.  When you are done, restart the remote server.
        For more detailed information, refer to the WebSphere Application Server information center.

13. On the portal server, configure HTTP**s** for the Seedlist servlet.

    The Seedlist servlet requires HTTP**s** by default. Therefore, when you access the servlet through HTTP, then WebSphere Application Server redirects you to HTTPs. Proceed by the following steps:

    1.  Open the following file with an editor:

        `[PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/search/wp.search.servlets/seedlist/servletEAR/installableApps/wp.search.seedlist.ear/wp.search.servlets.seedlist.war/WEB-INF/web.xml`

        **Cluster note:** In a clustered environment, complete this step on the primary node and all secondary nodes.

    2.  Update the following code:

        **Cluster note:** In a clustered environment, complete this step on the primary node and all secondary nodes.

        ```
        <user-data-constraint>     
             <transport-guarantee>CONFIDENTIAL</transport-guarantee>
        </user-data-constraint>
        ```

        Replace it by the following code:

        ```
        <user-data-constraint>     
             <transport-guarantee>NONE</transport-guarantee>
        </user-data-constraint>
        
        ```

    3.  Save the file.

        **Cluster note:** In a clustered environment, complete this step on the primary node and all secondary nodes.

    4.  Run the following portal ConfigEngine script:

        **Cluster note:** In a clustered environment, complete this step on the primary node only.

        ```
        ./ConfigEngine.sh action-update-ear-wp.search.servlets/seedlist/servletEAR
        ```

    5.  Restart all servers in your configuration for your updates to take effect.

14. Back on your portal, configure Portal Search for remote search service.

    **Cluster note:** In a clustered environment, complete this step on the primary node only.


