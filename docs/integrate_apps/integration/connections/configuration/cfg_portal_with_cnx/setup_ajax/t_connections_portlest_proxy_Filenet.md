# Configuring the Ajax proxy to allow FileNet requests

Configure the Ajax proxy so that direct requests that the CCM portlet makes to the FileNet server are allowed to pass through the proxy server.

The CCM portlet makes direct requests to the FileNet server, which might be embedded with HCL Connections or deployed to a separate server. You must configure the Ajax proxy so that requests can pass through the Ajax proxy.

**Note:** If you installed the embedded option when you installed HCL Connections, you do not need to do these steps.

1.  Determine the HTTP and HTTPS URLs for the FileNet server.

    1.  Find the URLs configured for HCL Connections by looking in LotusConnections-config.xml at:

        -   For a clustered deployment: /AppServer/profiles/dmgr\_profile/config/cells/cell\_name/LotusConnections-config
        -   For a stand-alone deployment: /AppServer/profiles/app\_server\_profile/config/cells/cell\_name/LotusConnections-config
    2.  Locate the `<sloc:serviceReference>` entry with the value `serviceName="ecm_files"`. The entry looks like:

        ```
        <sloc:serviceReference bootstrapHost="" bootstrapPort="" clusterName="" enabled="true" serviceName="ecm_files" ssl_enabled="true">
                <sloc:href>
                    <sloc:hrefPathPrefix>/dm</sloc:hrefPathPrefix>
                    <sloc:static href="https://support.hcltechsw.com/csm" ssl_href="https://xxx.rtp.raleigh.ibm.com"/>
                    <sloc:interService href="https://xxx.rtp.raleigh.ibm.com"/>
                </sloc:href>
            </sloc:serviceReference>
        ```

    3.  Take note of the href and the ssl\_href attributes to use to run the command in step 3.

2.  Open a command line and change to the following directory:

    -   AIX: wp\_profile\_root/ConfigEngine
    -   Linux: wp\_profile\_root/ConfigEngine
    -   Solaris: wp\_profile\_root/ConfigEngine
    -   Windows: wp\_profile\_root\\ConfigEngine
3.  Run this command to configure the Ajax proxy to handle all requests to FileNet:

    ```
    ConfigEngine action-config-ajax-proxy-SNPortlets-filenet -DICfilenetURL=ssl\_href\_attribute -DICfilenetURLunsecured=href\_attribute 
    ```

    ```
    -DWasPassword=password
    ```

4.  Run the following command if you want to remove the Ajax proxy configuration for FileNet:

    ```
    ConfigEngine action-remove-ajax-proxy-SNPortlets-filenet -DWasPassword=password
    ```



