# Migration from Portal Server Offering 7.0 to Portal 8.5

You can migrate from a Portal Server Offering 7.0 to Portal 8.5. For more information about Portal Server Offering, see the Overview topic from the related links section. When you migrate from a 7.0 Server Offering-only installation to HCL Portal Version 8.5, you must complete steps that are not covered in the Configuration Wizard migration options. Instead of using the wizard to complete the final upgrade the Portal profile step, you must complete this step manually.

To complete a 7.0 Server Offering-only migration, follow the steps for stand-alone and cluster migrations that are available in the *Roadmaps for migration*. However, when you use the Configuration Wizard options to **Migrate to a New Version**, complete all steps from the wizard except for the final **Upgrade the Portal Profile** step. You must run this step manually.

Manually run the two following ConfigEngine tasks from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory:

1.  Run the add-disabled-wcm-to-server task:
    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh add-disabled-wcm-to-server -DWasPassword=yourpassword -DPortalAdminPwd=yourpassword
    -   IBM® i: ConfigEngine.sh add-disabled-wcm-to-server -DWasPassword=yourpassword -DPortalAdminPwd=yourpassword
    -   Windows™: ConfigEngine.bat add-disabled-wcm-to-server -DWasPassword=yourpassword -DPortalAdminPwd=yourpassword
    -   z/OS®: ./ConfigEngine.sh add-disabled-wcm-to-server -DWasPassword=yourpassword -DPortalAdminPwd=yourpassword
2.  Run the upgrade-profile task and include the additional -Dprevious.family.WPFamilyName=server parameter:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine/ConfigEngine.sh upgrade-profile -DWasPassword=yourpassword -DPortalAdminPwd=yourpassword -javaoption -Xms512m -javaoption -Xmx2048m -Dwcm.transactionTimeout=1200 -Dprevious.family.WPFamilyName=server
    -   IBM i: ConfigEngine/ConfigEngine.sh upgrade-profile -DWasPassword=yourpassword -DPortalAdminPwd=yourpassword -javaoption -Xms512m -javaoption -Xmx2048m -Dwcm.transactionTimeout=1200 -Dprevious.family.WPFamilyName=server
    -   Windows: ConfigEngine/ConfigEngine.bat upgrade-profile -DWasPassword=yourpassword -DPortalAdminPwd=yourpassword -javaoption -Xms512m -javaoption -Xmx2048m -Dwcm.transactionTimeout=1200 -Dprevious.family.WPFamilyName=server
    -   z/OS: .ConfigEngine/ConfigEngine.sh upgrade-profile -DWasPassword=yourpassword -DPortalAdminPwd=yourpassword -javaoption -Xms512m -javaoption -Xmx2048m -Dwcm.transactionTimeout=1200 -Dprevious.family.WPFamilyName=server
    **Note:** If you encounter any problems when you run the upgrade-profile task and you need to restart the task with -Dwp.migration.framework.resume=parameter, then ensure that you continue to use the -Dprevious.family.WPFamilyName=server parameter.


