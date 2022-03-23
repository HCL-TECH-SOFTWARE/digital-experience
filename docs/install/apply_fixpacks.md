# Using the Installation Manager to install fixes 

Periodically fix packs are released to integrate product code fixes. Between fix pack releases, interim fixes might be recommended or required to ensure product reliability and stability. The Recommended fixes page provides links to fix pack and interim fix downloads, information about what is recommended and what is required, and links to recommended related product fixes. To find the most current service update information, see the Recommended fixes link.

Use the IBM® Installation Manager update function to update the product files, and then run the applyCF script to update the profile. Complete the following steps to install fixes:

CAUTION:

The information in these files is basic instruction. Before you change your system settings, review all readme files that are included with your fixes for complete instructions.

**Note:** A fix is considered an interim fix, a cumulative fix, or a fix pack.

**Attention:** During the installation, several temporary IBM WebSphere® Application Server fixes are installed. When you install your first fix, a warning displays to uninstall the temporary fixes. Uninstall the temporary fixes and then install your fixes.

1.  Start the Installation Manager.

2.  Add the repository that contains the fix.

3.  Test the repository connection and provide authentication credentials, if necessary, to access the directory where the repositories are stored.

4.  Select **Update** to install the fix.

5.  Select or enter the fix level.

6.  After you accept the license agreement and review the summary information, run the process to install the fix.

7.  After you install the fix, you must run the applyCF script from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin directory to update your profile.

    **Note:** If you have more than one profile, you must run the applyCF script for each profile.

    -   **AIX® Linux™ Solaris**

        ./applyCF.sh -DWasPassword=password -DPortalAdminPwd=password

    -   **IBM® i**

        applyCF.sh -DWasPassword=password -DPortalAdminPwd=password

    -   **Windows™**

        applyCF.bat -DWasPassword=password -DPortalAdminPwd=password

    -   **z/OS®**

        ./applyCF.sh -DWasPassword=password -DPortalAdminPwd=password


**Parent topic:**[Managing your HCL Portal environment ](../install/iim_manage_wp.md)

**Related information**  


[Recommended fixes and updates for HCL Portal and Web Content Management](https://support.hcltechsw.com/csm)

