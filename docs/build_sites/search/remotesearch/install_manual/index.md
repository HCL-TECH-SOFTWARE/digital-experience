# Installing remote search service by using manual steps

You can install remote search service by using manual steps instead of the IBM Installation Manager.

-   For SOAP: If you use SOAP, the following security and performance considerations apply:

    1.  Application security: If you use SOAP over a secure server, the SOAP service itself is not secure.
    2.  Java 2 security: If you use SOAP, you must disable Java 2 security.
    **Note:** SOAP support for remote search services was deprecated with HCL Portal Version 8.0. EJB is still supported.

-   For EJB: If you use EJB, complete the following security administration tasks:
    1.  Prepare security for remote search service in a single sign-on domain \(SSO\).
    2.  Add the signer certification of the remote search service server into the portal search server. To do this addition, proceed by the following steps:
        1.  Access the WebSphere® Integrated Solutions Console of the portal search server.
        2.  Click **Security** \> **SSL certificate and key management** \> **Key stores and certificates** \> **NodeDefaultTrustStore** \> **Signer certificates** \> **Retrieve from port**.

            **Cluster note:** In a clustered environment, the path is **Security** \> **SSL certificate and key management** \> **Key stores and certificates** \> **CellDefaultTrustStore** \> **Signer certificates** \> **Retrieve from port**.

        3.  Enter the remote search service server host name, its HTTPS port, and an alias.
        4.  Click **OK**.

1.  Copy PseLibs.zip and depending on the requirements of your environment, copy one of the two following files: WebScannerSoap.ear or WebScannerEjbEar.ear to the directory `[AppServer\_root](../reference/wpsdirstr.md#was_root)/installableApps`.

    You find these files in the following locations of your portal installation:

    -   The files WebScannerSoap.ear and WebScannerEjbEar.ear are in the directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/prereq/prereq.webscanner/installableApps/`.
    -   The file PseLibs.zip is located in the directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/search/wp.search.libs/installableApps`.
2.  Depending on the requirements of your environment, install one of the two following applications: WebScannerEJbEar.ear or WebScannerSoap.ear on a remote server.

    For example, the remote server can be server1. Proceed with the following steps:

    1.  Access the WebSphere Integrated Solutions Console.

    2.  Click **Applications** \> **WebSphere Enterprise Application**.

    3.  Click **Install**.

    4.  Browse and select **WebScannerEjbEar.ear** or **WebScannerSoap.ear**, depending on whether you are using EJB or web service through SOAP.

    5.  Click **Next**.

    6.  On the following panes, accept the default settings.

    7.  A message confirms that the application PSEStandalone \(for EJB\) or the application WebScannerEar \(for SOAP\) was installed successfully.

    8.  Click **Save to Master Configuration**.

    9.  Click **Save**.

3.  This step is required if you use Document Conversion Services.

    1.  Install remote document conversion services on the remote server.

    2.  Start the WebSphere Integrated Solutions Console and select **Environment** \> **Shared Libraries**. Create a new shared library that is named PSE with a class path as follows:

        ```
        $(APP_INSTALL_ROOT)/cell\_name/dcs_war.ear/dcs.war/WEB-INF/lib/convertors.jar
        $(APP_INSTALL_ROOT)/cell\_name/dcs_war.ear/dcs.war/WEB-INF/lib/Export.jar
        $(APP_INSTALL_ROOT)/cell\_name/dcs_war.ear/dcs.war/WEB-INF/lib/commons-fileupload.jar
        ```

        where `cell\_name` is the WebSphere Application Server cell name where DCS is installed.

    3.  Click **Apply** \> **Save** \> **Save** to save your changes.

4.  Extract the Portal Search libraries to the remote server and add them to the class path on the remote server. To do this step, proceed as follows:

    1.  Create a directory with the name extract In the directory `installableApps`.

    2.  Locate PseLibs.zip in the `installableApps` directory and extract its content into the `extract` directory that you created in the previous step.

    3.  Open the WebSphere Integrated Solutions Console.

    4.  Click **Environment** \> **Shared Libraries**.

    5.  Create or modify the new shared library names PSE.

        When you create the library, check **Use an isolated class loader for this shared library**.

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

5.  Depending on the requirements of your environment, add a reference from the application WebScannerEJbEar.ear or WebScannerSoap.ear to the shared library. To add a reference, proceed as follows:

    1.  Access the WebSphere Integrated Solutions Console of the remote server.

    2.  Go to **Websphere enterprise applications**.

    3.  For EJB: Click the application **PSEStandalone** \> **Shared library references**. For SOAP: Click the application **WebScannerEar** \> **Shared library references**.

    4.  For EJB: On the window that opens up click the check box for **PSEStandalone**, then click **Reference shared library**. For SOAP: On the window that opens up click the check box for **WebScannerEar**, then click **Reference shared library**.

    5.  From the **Available** list, select **PSE**.

    6.  Click the appropriate arrow so that **PSE** displays in the **Selected** list.

    7.  Click **OK** \> **OK**.

    8.  Save the configuration.

    9.  For EJB: Restart the application PSEStandalone. For SOAP: Restart the application WebScannerEar.

6.  On the WebSphere Integrated Solutions Console, determine the required values for configuring the portlet parameters, depending on whether you are using EJB or web service through SOAP:

    -   For EJB: Determine the value for the port from **Servers** \> **Server Types** \> **WebSphere application servers** \> **YourAppServer1** \> **Communications** \> **Ports** \> **BOOTSTRAP\_ADDRESS**.
    -   For SOAP: Determine the value for the port number for the SOAP URL parameter. The appropriate port number for the SOAP URL parameter is the port on which the application server runs. In other words, the HTTP transport on which the remote server is configured to run. Determine the correct port number from **Application servers** \> **server1** \> **Ports** \> **WC\_defaulthost**. The WC\_defaulthost value is 10014. If you did not change the default, you can use this value. Make sure that the port number that is set in the following file matches this port:

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

        -   `cell` is the cell name of your remote search computer.
        -   `WebScannerEar.ear` is the name that you gave to the Enterprise Application when you installed the `WebScannerSoap.war` file.
        Edit the file and look for the port that is given in the value for the SOAP address location. Example:

        ```
          <soap: address location="http://localhost:**your\_port\_no**/WebScannerSOAP/servlet/rpcrouter"/> .
        ```

        In the example, the port is `your\_port\_no`. The default value for the WC\_defaulthost is 10014.

7.  In the WebSphere Integrated Solutions Console, from **Resources** \> **Asynchronous beans** \> **Work managers**, create a new Work manager who is named PSEWorkManager with the following attributes:

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

    3.  Scroll to `PSEStandalone` or `WebScannerEar`. Use the filter feature to search for these names.

    4.  Click the check box and click **Start**.

        A message confirms that the application started successfully.

10. This step is required only if you work with EJB on a secure server: [Setting the search user ID](srtsttusrid.md).

11. Restart the WebSphere Application Server.

12. In the portal server, enable CSIv2 identity assertion. To complete this step, proceed as follows:

    **Cluster note:** In a clustered environment, complete these steps on the Deployment Manager WebSphere Integrated Solutions Console.

    1.  Enable CSIv2 Identity Assertion on the outbound connection:

        1.  Access the WebSphere Integrated Solutions Console of the portal server.
        2.  Go to **Security** \> **Global Security** \> **RMI/IIOP security** \> **CSIv2 outbound communications**.
        3.  Check **Use identity assertion**.
        4.  When you are done, restart the portal server.
    2.  Enable CSIv2 Identity Assertion on the inbound connection:

        1.  Access the WebSphere Integrated Solutions Console of the remote server.
        2.  Go to **Security** \> **Global Security** \> **RMI/IIOP security** \> **CSIv2 inbound communications**.
        3.  Check **Use identity assertion**.
        4.  In **Trusted identities**, enter either an asterisk \(\*\) or the identity of the portal server.
        5.  When you are done, restart the remote server.
13. Back on your portal, configure Portal Search for remote search service.

    **Cluster note:** In a clustered environment, complete this step on the primary node only.


-   **[Updating remote search service by using manual steps](../admin-system/update_rssman.md)**  
If you originally installed the remote service by using manual steps, then you must use manual steps to upgrade it after you apply the Combined Cumulative Fix on the portal server.


