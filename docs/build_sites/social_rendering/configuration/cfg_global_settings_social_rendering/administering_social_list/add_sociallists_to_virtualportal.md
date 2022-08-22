# How to enable social rendering in a virtual portal

Before you use social rendering in a virtual portal, you must deploy the new web content library and templates. The version and fix pack of your HCL Digital Experience determines how you do so.

## Deploying social rendering in a virtual portal

To deploy social rendering in a virtual portal, use the configuration task deploy-social-rendering to enable social rendering in a virtual portal. You must also run this configuration task on the base portal to deploy the Social Lists 1.1 library.

1.  Open a command prompt.
2.  Change to the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory.
3.  Run the following command:

    -   AIX®: `./ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password`
    -   HP-UX: `./ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password`
    -   IBM® i: `ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password`
    -   Linux™: `./ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password`
    -   Solaris: `./ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password`
    To deploy the Social Lists 1.1 library on a virtual portal, proceed as follows:

4.  Open a command prompt.
5.  Change to the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory.
6.  Run the following command:

    -   AIX: `./ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password -DVirtualPortalContext=vp1`
    -   HP-UX: `./ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password -DVirtualPortalContext=vp1`
    -   IBM i: `ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password -DVirtualPortalContext=vp1`
    -   Linux: `./ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password -DVirtualPortalContext=vp1`
    -   Solaris: `./ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password -DVirtualPortalContext=vp1`
    -   Windows: `ConfigEngine.bat deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password -DVirtualPortalContext=vp1`
    **Note:** The sample that is given here uses only the VirtualPortalContext parameter to identify the virtual portal by its context. Virtual portals with a unique host name assigned can be identified by using the VirtualPortalHostName parameter.



**Related information**  


[Social Lists](../migrate/sociallistpost_mig.md)

