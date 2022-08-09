# Changing the authentication mode for portlet deployment

HCL Digital Experience provides two user authentication modes that the Portlet Deployment Manager can use to authenticate with the IBM WebSphere Application Server administrative services when security is enabled.

The authentication modes are specified by the use.admin.user property in Deployment Service. The following two methods are supported in both a standalone or clustered environment.

-   **Single ID method \(use.admin.user=true\)**

    This is the default mode. In this mode, HCL Portal impersonates the server ID \(see [https://www.hcltechsw.com/wps/portal/about/welcome](https://www.hcltechsw.com/wps/portal/about/welcome) for additional information\) for WAR deployment requests.

-   **Multiple ID method \(use.admin.user=false\)**

    Use the login ID of the user who issued the WAR deployment request. In this mode, every user with portlet deployment access rights must be added to the WebSphere® Application Server Console User list with Administrator access rights. Alternatively, you can add the Group of Administrators to the WebSphere® Application Server Console Group with Administrator access rights.


The main difference between the two methods is that the single ID method uses a preset ID regardless of who you log in as while the multiple ID method uses the ID you logged in with but you cannot deploy a portlet unless your ID is added to the WebSphere Application Server Console Group with Administrator access rights.

**Parent topic:**[Managing portlets in your cluster](../admin-system/manage_portlets.md)

