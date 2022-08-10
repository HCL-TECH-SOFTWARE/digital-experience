# Updating Web Content Manager pages theme

Before using Web Content Manager in virtual portals that are created after migration by using default portal content from an older release, you must update the theme to ﻿Portal 8.5 theme. Otherwise, Web Content Manager related portlets do not work properly. If you upgraded or migrated to HCL Digital Experience Version 8.5 CF04 or later, then you do not need to complete the following steps.

1.  Run the following configuration task from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat update-wcm-pages -DWasPassword=password -DPortalAdminPwd=password

    -   **AIX® Linux™ Solaris**

        ./ConfigEngine.sh update-wcm-pages -DWasPassword=password -DPortalAdminPwd=password

    -   **IBM® i**

        ConfigEngine.sh update-wcm-pages -DWasPassword=password -DPortalAdminPwd=password

    -   **z/OS®**

        ./ConfigEngine.sh update-wcm-pages -DWasPassword=password -DPortalAdminPwd=password

2.  Change the following pages to use Portal 8.5 Theme:

    -   ﻿com.ibm.wps.hiddenpage.wcm.Authoring\_Portlet
    -   ﻿ibm.portal.Web.Content.Management
    -   ﻿ibm.portal.Portal Content
    1.  Log in to Portal as an administrator.

    2.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

    3.  In the **Search by** menu, select **Unique name contains**.

    4.  In the **Search** field, enter the unique name of the page and click **Search**.

    5.  Click **Edit Page Properties** for the Web Content Manager page.

    6.  On the **Theme** field, select **Portal 8.5**.

    7.  Click **OK**.


**Parent topic:**[Web Content Manager](../wcm/wcm_migration_post_update.md)

