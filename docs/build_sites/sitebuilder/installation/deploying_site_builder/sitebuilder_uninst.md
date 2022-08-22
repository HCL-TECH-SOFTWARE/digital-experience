# Removing a previous version of Site Builder

To remove the Site Builder application from the HCL Digital Experience Portal server, run ConfigEngine batch or script files to uninstall the application, then remove its .paa folder and web content library.

1.  Open a command line and browse to the ConfigEngine directory.

    -   **Windows™**

        C:\\IBM/WebSphere\\wp\_profile\\ConfigEngine

    -   **AIX®**

        /usr/IBM/WebSphere/wp\_profile/ConfigEngine

    -   **HP-UX**

        /opt/IBM/WebSphere/wp\_profile/ConfigEngine

    -   **Linux™**

        /opt/IBM/WebSphere/wp\_profile/ConfigEngine

2.  Run the ConfigEngine batch or script file with the remove-paa parameter to remove the Site Builder assembly. For example:

    -   **Windows™**

        ConfigEngine.bat remove-paa -DappName=wp.ctc.nswiz

    -   **AIX®HP-UX Linux™**

        ./ConfigEngine.sh remove-paa -DappName=wp.ctc.nswiz

3.  Repeat the command for each virtual portal where Site Builder is installed. For example:

    -   **Windows™**

        ConfigEngine.bat remove-paa -DappName=wp.ctc.nswiz -DVirtualPortalHostName=myhost.example.com -DVirtualPortalContext=myVirtualPortal

    -   **AIX®HP-UX Linux™**

        ./ConfigEngine.sh remove-paa -DappName=wp.ctc.nswiz -DVirtualPortalHostName=myhost.example.com -DVirtualPortalContext=myVirtualPortal

4.  Type and run the following command to uninstall Site Builder:

    -   **Windows™**

        ConfigEngine.bat uninstall-paa -DappName=wp.ctc.nswiz

        or

        ConfigEngine.bat uninstall-paa -DappName=wp.ctc.nswiz -DforceUninstall=true

    -   **AIX®HP-UX Linux™**

        ./ConfigEngine.sh uninstall-paa -DappName=wp.ctc.nswiz

        or

        ./ConfigEngine.sh uninstall-paa -DappName=wp.ctc.nswiz -DforceUninstall=true

5.  Delete the wp.ctc.nswiz directory from the file system. It is located under the `[wp\_profile\_root](../reference/wpsdirstr.md)/paa` directory. You must have administrator access to delete files.

6.  If you want to keep your current Site Builder templates, then you can skip this step. If you want to start with a new version of Site Builder, then delete the Site Builder Template Library.

    1.  Logged in as the portal administrator, click **Administration** \> **Portal Content** \> **Web Content Libraries**.

    2.  Browse to the Site Builder Template Library and click the **Delete library** icon.

    3.  Click **OK**.

7.  Delete the Site Builder Personalization Mail Rules.

    1.  Log in to HCL Portal as an administrator.

    2.  Click **Applications \> Personalization \> Business Rules**.

    3.  Select **All Rules**.

    4.  Select these E-Mail Action rules:

        -   SiteBuilderSiteCreationCancelEmailRule
        -   SiteBuilderSiteCreationFailurelEmailRule
        -   SiteBuilderSiteCreationSuccessEmailRule
        -   SiteBuilderSectionCreationCancelEmailRule
        -   SiteBuilderSectionCreationFailureEmailRule
        -   SiteBuilderSectionCreationSucessEmailRule
    5.  Click **Delete** in the Personalization Toolbar.

    6.  Click **Delete** on the Delete Documents page.


**Parent topic:**[Installing and removing Site Builder](../sitebuilder/sitebuilder_inst_overview.md)

**Related information**  


[How to remove Content Template](../ctc/ctc_uninst_overview.md)

