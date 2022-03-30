# Installing Integrator for SAP 

Integrator for SAP is delivered as a portal application archive \(PAA\) file.

You find the Integrator for SAP under the following location: [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/base/wp.integration/sap.package/installableApps/sap\_integration.paa . You install and deploy the application by using Solution Installer.

For details about the Solution Installer, read the section about *Installing add-ons*.

**Note:** The installation and deployment process expects to find a page with the unique name `ibm.portal.page.Applications` in HCL Portal. It adds integration artifacts to that applications page as child pages. If you do not have this applications page in your HCL Portal and run the Solution Installer install task, an XMLAccess exception occurs. In this case create a page with the unique name `ibm.portal.page.Applications` and rerun the task that failed.

1.  Install the Integrator for SAP PAA file by using the portal Solution Installer.

    For this installation step, run the installation configuration task as follows:

    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh install-paa -DPAALocation=/sap\_integration.paa

    -   **IBM® i**

        ConfigEngine.sh install-paa -DPAALocation=/sap\_integration.paa

    -   **Windows™**

        ConfigEngine.bat install-paa -DPAALocation=/sap\_integration.paa

    -   **z/OS®**

        ./ConfigEngine.sh install-paa -DPAALocation=/sap\_integration.paa

2.  Deploy the Integrator for SAP PAA file by using the portal Solution Installer.

    For this deploy step, run the deployment configuration task, and specify the value `sap_integration` for the parameter `appName` as follows:

    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh deploy-paa -DappName=sap\_integration

    -   **IBM® i**

        ConfigEngine.sh deploy-paa -DappName=sap\_integration

    -   **Windows™**

        ConfigEngine.bat deploy-paa -DappName=sap\_integration

    -   **z/OS®**

        ./ConfigEngine.sh deploy-paa -DappName=sap\_integration

3.  Restart your HCL Portal for the installation to become active.

    You must restart your portal before you configure Integrator for SAP.


**Parent topic:**[Integrating with SAP NetWeaver Portal ](../admin-system/sap_int.md)

**Related information**  


[Preparing your system environment and the prerequisites for Integrator for SAP ](../admin-system/sap_int_prep.md)

[Configuring Integrator for SAP ](../admin-system/sap_int_cfg.md)

[Installing add-ons ](../config/int_sol_installer.md)

