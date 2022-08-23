# Using the Installation Manager to roll back fixes

After you upgrade to a fix pack or a cumulative fix, you can use the IBM® Installation Manager function to roll back to the original installation.

Use the IBM Installation Manager rollback function to roll back the product files, and then run the rollbackCF script to roll back your profile. Complete the following steps to install fixes:

CAUTION:

The information in these files is basic instruction. Before you change your system settings, review all readme files that are included with your fixes for complete instructions.

1.  Start the Installation Manager.

2.  Select **Rollback** to remove the fix pack.

3.  Select or enter the fix pack level to which you want to return.

4.  Review the summary information and then run the process to remove the fix pack or cumulative fix.

5.  After you remove the fix, you must run the rollbackCF script from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin directory to roll back your profile.

    **Note:** If you have more than one profile, you must run the rollbackCF script for each profile:

    -   **AIX® Linux™ Solaris**

        ./rollbackCF.sh -DWasPassword=password -DPortalAdminPwd=password

    -   **IBM® i**

        rollbackCF.sh -DWasPassword=password -DPortalAdminPwd=password

    -   **Windows™**

        rollbackCF.bat -DWasPassword=password -DPortalAdminPwd=password

    -   **z/OS®**

        ./rollbackCF.sh -DWasPassword=password -DPortalAdminPwd=password



