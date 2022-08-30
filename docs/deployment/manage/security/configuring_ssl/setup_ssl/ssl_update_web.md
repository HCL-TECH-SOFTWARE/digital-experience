# Updating files in wps.ear

This section shows how to use wsadmin commands to update web.xml and web\_merged.xml for wps.ear.

Whenever changes are made to the SSL configuration, you must update the web.xml and web\_merged.xml files in wps.ear. The steps in this section can be used to update these files within wps.ear and propagate them correctly throughout the environment.

**Note:** For a clustered environment, perform these steps on the Deployment Manager.

1.  Ensure the Portal server is started. \(Dmgr, if clustered\).

2.  Open a command window.

3.  From the <profile\_root\>/bin directory, launch the wsadmin tool.

    ```
    ./wsadmin.sh -user <PortalAdminId> -password <PortalAdminPwd> -lang jython -port <WAS_SOAP_port>
    ```

    Replace the values in <\> with those for your environment.

    ```
    ./wsadmin.sh -user wpsadmin -password wpsadmin -lang jython -port 10033
    ```

4.  Run the command to export the wps application. In this example, the EAR file will be written to /tmp/wps.ear/AdminApp.export\('wps','/tmp/wps.ear'\)

5.  Open a new command window to run the EARExpander tool.

6.  From the <profile\_root\>/bin directory, extract the EAR file using EARExpander.

    ```
    ./EARExpander.sh -ear /tmp/wps.ear -operationDir /tmp/wpsear_expanded -operation expand -expansionFlags all
    ```

7.  Make the updates to the web.xml and web\_merged.xml files.

    ```
    /tmp/wpsear_expanded/wps.war/WEB-INF/web.xml
    ```

    ```
    /tmp/wpsear_expanded/wps.war/WEB-INF/web_merged.xml
    ```

8.  Run the EARExpander tool to compress the EAR file.

    ```
    ./EARExpander.sh -ear /tmp/wps.ear -operationDir /tmp/wpsear_expanded -operation collapse
    ```

9.  Back in the wsadmin command prompt, run this command to deploy the updated wps.ear file.

    ```
    AdminApp.update('wps', 'app', ['-operation', 'update', '-contents', '/tmp/wps.ear', '-deployejb.classpath', '<PortalServer_root>/base/wp.base/shared/app/wp.base.jar'])
    ```

    Replace the value in `<PortalServer_root>` with the path for the PortalServer binaries your environment.

    ```
    AdminApp.update('wps', 'app', ['-operation', 'update', '-contents', '/tmp/wps.ear', '-deployejb.classpath', '/opt/IBM/WebSphere/PortalServer/base/wp.base/shared/app/wp.base.jar'])
    ```

10. Commit the changes to the WAS configuration with this command.

    ```
    AdminConfig.save()
    ```

11. Exit the wsadmin tool.

12. Sync the nodes, if clustered.



