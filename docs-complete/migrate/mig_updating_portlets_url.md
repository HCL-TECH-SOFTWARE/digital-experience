# Updating portlets URL 

After migrating your portal environment, you must verify and update as needed the portlets URLs. In some cases, portlets have the incorrect URL after migration. URLs can be easily corrected using the XML configuration interface to export, update, and import the configurations.

Perform the following steps in the newly migrated environment.

1.  Export the portlet configuration.
2.  Change directory where the HCL Digital Experience tools are contained:

    -   AIX® IBM® i Linux™ Solaris: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/bin`
    -   Windows™: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\bin`
3.  Export the configuration using the provided sample file that is named ExportAllPortlets.xml by entering the following command:

    -   AIX Linux Solaris: ./xmlaccess.sh -in `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)`/doc/xml-samples/ExportAllPortlets.xml -user wpsadmin -password wpsadminpwd -url http://server.example.com:port/wps/config -out Server\_config.xml
    -   IBM i: xmlaccess.sh -in `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)`/doc/xml-samples/ExportAllPortlets.xml -user wpsadmin -password wpsadminpwd -url http://server.example.com:port/wps/config -out Server\_config.xml
    -   Windows: xmlaccess.bat -in `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)`\\doc\\xml-samples\\ExportAllPortlets.xml -user wpsadmin -password wpsadminpwd -url http://server.example.com:port/wps/config -out Server\_config.xml
    The exported configuration is stored in the XML file named Server\_config.xml.

4.  Verify output XML file and update URLs as needed.
5.  Open the Server\_config.xml file and verify that all URLs are valid. This means that all the files that are listed in the XML file must be present and accessible in the specified locations.

    1.  If the URLs do not match the actual location in your environment, update those entries according to the actual location of the files.

    2.  If the files specified in the URL field do not exist in the migrated environment or are no longer needed in the configuration, remove those entries.

    **Note:** If you are making the updates on a clustered environment, modify the XML file to remove the global-settings and services-settings entries if available in the file.

6.  Import XML file with the updated URLs.
7.  Change directory where the HCL Digital Experience tools are contained:

    -   AIX IBM i Linux Solaris: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/bin`
    -   ****Windows: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\bin`
8.  Run the following command to import the updated configuration using the Server\_config.xml file that you just updated:

    -   AIX Linux Solaris:./xmlaccess.sh -in Server\_config.xml -user wpsadmin -password wpsadminpwd -url http://Server.example.com:port/wps/config
    -   IBM i: xmlaccess.sh -in Server\_config.xml -user wpsadmin -password wpsadminpwd -url http://Server.example.com:port/wps/config
    -   Windows: xmlaccess.bat -in Server\_config.xml -user wpsadmin -password wpsadminpwd -url http://Server.example.com:port/wps/config
9.  After the request is processed, make sure that the import process displays the following return message:

    ```
    <status element="all" result="ok">
    ```

10. For clustered environments only.
11. Resync the cluster from the Deployment Manager console.

12. Restart the Enterprise Applications from the Deployment Manager console.

13. Run the following command on the cluster primary node to activate the deployed portlets:

    -   AIX Linux Solaris: `./ConfigEngine.sh activate-portlets -DWasPassword=password`
    -   IBM i: From the UserData directory, `ConfigEngine.sh activate-portlets -DWasPassword=password`
    -   Windows: `ConfigEngine.bat activate-portlets -DWasPassword=password`
14. Restart the portal.


**Parent topic:**[Development tasks ](../migrate/mig_post_devtasks.md)

**Related information**  


[Portlets no longer available ](../migrate/mig_removed_portlets.md)

