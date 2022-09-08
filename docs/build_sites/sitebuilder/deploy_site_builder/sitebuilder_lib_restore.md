# Restoring the original Site Builder Template library

Restoring the Site Builder Template library to its original state deletes all changes that are made to templates after Site Builder was installed.

To restore the template library, delete the current library and install Site Builder that uses the library-only installation option. Then, restore administrator and website creator access to the reinstalled library.

CAUTION:

The following procedure deletes all changes that are made to the Site Template Library after it was installed.

1.  Log in as the portal administrator.

2.  Click **Administration** \> **Portal Content** \> **Web Content Libraries**.

3.  Browse to the Site Builder Template Library and click the **Delete Library** icon.

4.  Click **OK**.

5.  Click **Refresh** to see your changes.

6.  Go to the Content Template Catalog installation directory and open the site-builder directory.

7.  Open the site-builder.properties or site-builder-zos.properties file in a text editor.

8.  Set the value to true for SB\_CONTENT and set the value to false for all other components.

    ```
    SB_APP=false
    SB_CONTENT=true
    SB_PAGE_BASE=false
    SB_PAGE_VP=false
    SB_CONTENT_VP=false
    ```

9.  Close and save the file.

10. Start the installation program. If you did not set the administrator passwords in the wkplc.properties file, you must add them to the command line with the syntax:

    `-PortalAdminPwd password -WasPassword password`

    -   **Windows™**

        `site-builder-install.bat`

    -   **AIX® HP-UX Linux™**

        `site-builder-install.sh`

    -   **z/OS**

        `site-builder-install-zos.sh`

    When the script finishes successfully, the installation is complete.

11. Log in as the portal administrator and click **Administration** \> **Portal Content** \> **Web Content Libraries**.

12. Browse to the Site Builder Template Library. Click the **Set Permissions** icon.

13. For the Administrator role, click the **Edit Role** icon.

14. Add the users and groups you want to add as Site Builder administrators.

15. Click **OK**.

16. Click **Resources**.

17. For the Contributor role, click the **Edit Role** icon.

18. Add the users and groups you want to add as Site Builder website creators.

19. Click **OK**.

20. Click **Resources**.

21. Click **Apply** and **Done**.


