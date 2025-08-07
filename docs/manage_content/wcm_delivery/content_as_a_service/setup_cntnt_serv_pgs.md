# Setting up Content as a Service

To be able to work with Content as a Service (CaaS) pages in HCL Digital Experience (DX), you must enable it by using an HCL DX configuration task.

The setup for CaaS pages comprises both resources that are shared across virtual portals and virtual portal scoped resources.

1.  Change the directory to the wp_profile_root/ConfigEngine directory.

2.  Run the following command to initiate the setup of shared resources:

    -   AIX® and Linux™: `./ConfigEngine.sh install-caas -DPortalAdminId=user_id -DPortalAdminPwd=password -DWasUserid=user_id -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat install-caas -DPortalAdminId=user_id -DPortalAdminPwd=password -DWasUserid=user_id -DWasPassword=password`
    
3.  Run the following command to initiate the setup of default virtual portal scoped resources:

    -   AIX and Linux: `./ConfigEngine.sh install-caas-vp -DPortalAdminId=user_id -DPortalAdminPwd=password -DWasUserid=user_id -DWasPassword=password`
    -   Windows: `ConfigEngine.bat install-caas-vp -DPortalAdminId=user_id -DPortalAdminPwd=password -DWasUserid=user_id -DWasPassword=password`

4.  If you have virtual portals, run the following command on each virtual portals to initiate the setup of virtual portal scoped resources:

    !!! note
        Add either the `-DVirtualPortalContext` or `-DVirtualPortalHost` parameter to the `install-caas-vp`.

    -   AIX and Linux: `./ConfigEngine.sh install-caas-vp -DPortalAdminId=user_id -DPortalAdminPwd=password -DWasUserid=user_id -DWasPassword=password -DVirtualPortalContext=virtual_portal_context`
    -   Windows: `ConfigEngine.bat install-caas-vp -DPortalAdminId=user_id -DPortalAdminPwd=password -DWasUserid=user_id -DWasPassword=password -DVirtualPortalContext=virtual_portal_context`

5.  Restart your DX server.
