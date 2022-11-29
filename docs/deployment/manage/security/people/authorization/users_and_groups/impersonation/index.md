# Administering user impersonation

Use the impersonation feature to access another user's system as though you are that user. Use caution with this configuration. The user who is doing the impersonation might get more permissions than initially granted to them.

Client-side aggregation does not support user impersonation. Do not activate client-side aggregation on any portal pages where the impersonation portlet is deployed.

Use the impersonation feature to view new pages and portlets. Users such as support specialists can use the impersonation feature to find issues and errors. For example, a portal administrator encounters a problem that cannot be resolve. A support specialist can use the impersonation feature to access the system to determine a solution to the problem.

You can use the default Impersonation portlet to impersonate specific users. Alternatively, you can create a resource environment provider to enable impersonation and develop a custom portlet for impersonating users. Use Portal Access Control to assign impersonation roles to users. Assign the **Can Run As User** role to the user you plan to impersonate after you enable the impersonation feature.

**User impersonation and people awareness:** When a user who is enabled for impersonation impersonates other users, the people awareness feature is disabled for the entire session for which that user is authenticated.

**Restriction:** A user cannot impersonate himself or herself.

-   **[Enabling and disabling impersonation](../impersonation/impers_enable_disable.md)**  
By default, user impersonation is enabled, but you can manually disable or enable the impersonation feature as needed.
-   **[Developing a custom portlet](../impersonation/impers_dev_custom_portlet.md)**  
You can use the default Impersonation portlet to impersonate specific users. Alternatively, you can create a resource environment provider to enable impersonation and develop a custom portlet for impersonating users.
-   **[Assigning the Can Run As User role](../impersonation/impers_user_canrunas.md)**  
Users with administrator access in HCL Portal can assign the Can Run As User role to designated users. Use Portal Access Control to assign the role. You can use the Virtual Resources option to grant permission for all users or groups in the system.
-   **[Impersonating an unauthenticated user](../impersonation/impers_user_unauth.md)**  
Users with administrator access in HCL Portal can impersonate an unauthenticated user.


<!--
**Related information**  


[<portal-logic/\> tags](../dev-portlet/dgn_ptllogic.md)

[Users and groups](../admin-system/adusrgrp.md)

[Controlling access](../admin-system/control_access.md)

[Installing a portlet](../admin-system/adctinsp.md)

[Auditing](../admin-system/sec_audit.md)

[User and group management](../dev/wpspuma.md)
-->
