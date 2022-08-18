# Reusing group information

During the authentication of a user, IBM WebSphere Application Server stores information about which groups users belong to. This information is static for the authentication session of the user. In addition, it can be provided by an External Security Manager through a Trust Association Interceptor. In this case, IBM WebSphere Application Server does not load the information on its own. HCL Digital Experience can participate in this flow and reuse the information from the WebSphere Application Server security context instead of retrieving it from the LDAP server. This function is also referred to as group assertion or WebSphere Application Server group assertion.

To prevent modifying existing behavior of your environment or losing existing group information, HCL Portal does not reuse group information by default. For this reason, you must configure HCL Portal to reuse group information from the WebSphere® Application Server security context. You can choose to reuse group information for user management or for access control.

-   Reusing group information for user management results in all components of HCL Portal benefit from the faster group membership lookup. During the authentication session, the membership of the current user is based on the information that is provided by WebSphere Application Server. This reuse of information reduces load on your LDAP server, increases authentication performance, and results in the ability to define group membership at the authentication layer.
-   Reusing group information for access control enables the system to react on possible per request changes of the WebSphere Security context. By default the Security context is not modifiable during an authentication session. However,WebSphere Application Server provides plug points, which allow the execution of a Trust Association Interceptor on every request, which might be used to establish a new security Subject on every request. In this case, Portal Access Control would be able to work with the updated subject information and would build a dynamic environment. However, this option requires more system resources, custom extensions to WebSphere Application Server security and impacts performance.

**Note:** The recommended option is for user management, as this case provides the performance and functional enhancements. The second option for access control is used in specific scenarios, typically as directed by IBM Support or IBM technical documentation.

**Note:** Do not combine both options as it leads to high CPU load on your system.

Complete the following steps to reuse group information:

1.  Log on to the WebSphere Integrated Solutions Console \(or deployment manager WebSphere Integrated Solutions Console in a cluster\).

2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Choose the appropriate options to reuse group information:

    -   To reuse group information for user management the first option that is used typically as an enhancement, complete the following steps:
        1.  Select the **WP\_PumaStoreService** resource environment provider.
        2.  Select **Custom properties**.
        3.  Click **New**.
        4.  Enter store.puma\_default.filter.assertionFilter.classname in the **Name** field.
        5.  Enter com.ibm.wps.um.AssertionFilter in the **Value** field.
        6.  Click **Apply**.
        7.  Click **Save** to save the changes to the master configuration.
    -   To reuse group information for access control, complete the following steps:
        1.  Select the **WP PACGroupManagementService** resource environment provider.
        2.  Select **Custom properties**.
        3.  Click **New**.
        4.  Enter accessControlGroupManagement.useWSSubject in the **Name** field.
        5.  Enter true in the **Value** field.
        6.  Click **Apply**.
        7.  Click **Save** to save the changes to the master configuration.
    -   To reuse transient attribute information for user management, complete the following steps:
        1.  Select the **WP\_PumaStoreService** resource environment provider.
        2.  Select **Custom properties**.
        3.  Click **New**.
        4.  Enter store.puma\_default.filter.TransparentUserFilter.classname in the **Name** field.
        5.  Enter com.ibm.wps.um.TransparentUserFilter in the **Value** field.
        6.  Click **New**.
        7.  Enter store.puma\_default.filter.TransparentUserFilter.position in the **Name** field.
        8.  Enter -10 in the **Value** field.
        9.  Click **Apply**.
        10. Click **Save** to save the changes to the master configuration.
4.  Log out of the WebSphere Integrated Solutions Console.

5.  Restart the HCL Portal server.


**Parent topic:**[Users and groups](../admin-system/adusrgrp.md)

**Related information**  


[Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md)

