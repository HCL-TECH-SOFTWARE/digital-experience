# Enabling impersonation

If you migrate to HCL Digital Experience 8.5 and upgrade to fix pack level CF01-CF03, impersonation might not be enabled. If you plan to use the impersonation feature, which allows a selected user to preview and test new pages or portlets to help identify any potential issues, then you might need to enable this feature.

**Note:** If you applied CF04 or a later fix pack, then you do not need to complete the steps to enable impersonation.

Portal Access Control \(PAC\) controls the ability to impersonate another user. To impersonate another user, the **Can Run As User** role on the virtual resource users must be assigned. You must first enable the impersonation feature within HCL Digital Experience. If you are unsure whether the impersonation feature is enabled, you can use the following instructions to verify that you have the correct settings.

Perform the following steps to enable the impersonation feature:

1.  Log on to the WebSphere Application Server Integrated Solutions Console or Network Deployment Administration Console.

2.  Perform the following steps to enable the impersonation feature:

    1.  Go to **Resources** \> **Resource Environment** \> **Resource environment Providers** \> **WP Authentication Service** \> **Custom Properties**.

    2.  Click **New**.

    3.  Enter logout.explicit.filterchain in the **Name** field.

    4.  Enter com.ibm.wps.auth.impersonation.impl.ImpersonationLogoutFilter in the **Value** field.

    5.  Click **Apply**, and then click **Save** to save the changes directly to the master configuration.

    6.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WP PortletServiceRegistryService** \> **Custom Properties**.

    7.  Click **New**.

    8.  Enter jndi.com.ibm.portal.portlet.service.impersonation.ImpersonationService in the **Name** field.

    9.  Enter com.ibm.wps.portletservice.impersonation.impl.ImpersonationServiceImpl in the **Value** field.

    10. Click **Apply** and then click **Save** to save the changes directly to the master configuration.

3.  Stop and restart the HCL Portal server.

4.  Perform the following steps to assign the **Can Run As User** role to a user.

    1.  Log on to HCL Portal as the administrator.

    2.  Click **Administration** in the site toolbar.

    3.  Click **Access** \> **User and Group Permissions**.

    4.  Click **Users**.

    5.  Search for the user to which you want to assign the **Can Run As User** role.

    6.  Click the **Select Resource Type** icon for the user.

    7.  Click **Page Next**, and go to the page that contains the **Virtual Resources** option, and click that link.

    8.  Go to the page that contains the **Users** option, and click the **Assign Access** icon.

    9.  Select the **Explicitly Assign** check box for the **Can Run As User** role.

    10. Click **OK**.

    11. Verify that the user now has **User** and **Can Run As User** access.

    The users with the **Can Run As User** role can now impersonate another user.


**Parent topic:**[Portal tasks](../migrate/mig_post_portaltasks.md)

