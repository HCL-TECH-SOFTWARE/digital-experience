# Configuring security for overlay analytics reports

You can administer which users can view overlay reports. To do this, you use the virtual resource OVERLAY\_REPORTS.

This resource allows you to determine the user rights that are related to the overlay reports. The following description explains which roles a user requires to view overlay reports. The user actions correspond to the normal portal roles. Privileges are inherited.

In a default portal installation the `wpsadmins` group has the `USER` role. There is no role assigned to the anonymous user or to the group All authenticated users.

**Notes:**

-   To view overlay reports, users need at least the `USER` role to the virtual resource `OVERLAY_REPORTS` , `ADMIN_SLOTS` , and to the resource on which they want to see the overlay report.
-   In a default portal installation only the group wpsadmins has the USER role on OVERLAY\_REPORTS.

-   **USER**

    Can view overlay reports on all resources, for example pages or portlets where at least the USER role is given.


**Parent topic:**[Displaying overlay analytics reports](../admin-system/sa_asa_overlay_stats.md)

**Previous topic:**[Configuring overlay reports](../admin-system/sa_asa_overlay_config.md)

**Next topic:**[Configuring a Credential Vault for overlay reports](../admin-system/sa_asa_overlay_cfg_crd_vlt.md)

