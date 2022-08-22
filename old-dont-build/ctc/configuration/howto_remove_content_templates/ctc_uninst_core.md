# Removing the Content Template from the base portal

Removing Content Template Catalog core components and assembly is part of the uninstallation process. Follow these steps to remove the Content Template from the base portal.

1.  Change the installation configuration in the components.properties file, in the wp.ctc folder in the solutions installer offering directory.

    This is configured to be [wp\_profile\_root](../reference/wpsdirstr.md)/paa/wp.ctc, but can be located elsewhere depending on the environment's Solutions Installer configuration.

    Enable uninstallation of all components by setting the following properties to "true":

    -   components/wp.ctc
    -   components/wp.ctc.sitetemplates
    -   components/wp.ctc.design
    -   components/wp.ctc.templates
    -   components/wp.ctc.demo
    -   components/wp.ctc.demo.mls
2.  Open a command prompt and navigate to the [wp\_profile\_root](../reference/wpsdirstr.md)/ConfigEngine directory.

3.  Run the ConfigEngine batch or script file with the remove-paa parameter to remove the Content Template assembly. For example:

    -   **Windows™**

        ConfigEngine.bat remove-paa -DappName=wp.ctc

    -   **AIX®HP-UX Linux™**

        ./ConfigEngine.sh remove-paa -DappName=wp.ctc

4.  Type and run the following command to uninstall Content Template:

    -   **Windows™**

        ConfigEngine.bat uninstall-paa -DappName=wp.ctc

        or

        ConfigEngine.bat uninstall-paa -DappName=wp.ctc -DforceUninstall=true

    -   **AIX®HP-UX Linux™**

        ./ConfigEngine.sh uninstall-paa -DappName=wp.ctc

        or

        ./ConfigEngine.sh uninstall-paa -DappName=wp.ctc -DforceUninstall=true

5.  Using a WebDAV client, go to the /wps/mycontenthandler/dav/fs-type1/themes/Portal8.5 directory.

    1.  Delete **ctc.json** from the contributions folder.

    2.  Delete **profile\_ctc\_deferred.json** from the profiles folder.

    3.  Delete the CTC folder.

6.  Restart HCL Portal.



