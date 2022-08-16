# Setting up Content as a Service

To be able to work with Content as a Service pages in HCL Portal, you must enable it by using an HCL Digital Experience configuration task.

For Content as a Service pages to work, you must have the new functions for HCL Portal and HCL Web Content Manager Version 8.5 CF05 enabled. For more information, see the *readme file for WebSphere Portal and Web Content Manager V8.5 CF05*.

The setup for Content as a Service pages comprises both resources that are shared across virtual portals and virtual portal scoped resources.

1.  Change the directory to the wp\_profile\_root/ConfigEngine directory. If you are using IBM® z/OS®, open a UNIX System Services command prompt to change directories.

2.  Run the following command to initiate the setup of shared resources:

    -   AIX® HP-UX Linux™ Solaris z/OS: `./ConfigEngine.sh install-caas -DPortalAdminID=user\_id -DPortalAdminPwd=password -DWasUserid=user\_id -DWasPassword=password`
    -   IBM i: `ConfigEngine.sh install-caas -DPortalAdminID=user\_id -DPortalAdminPwd=password -DWasUserid=user\_id -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat install-caas -DPortalAdminID=user\_id -DPortalAdminPwd=password -DWasUserid=user\_id -DWasPassword=password`
3.  Run the following command to initiate the setup of default virtual portal scoped resources:

    -   AIX HP-UX Linux Solaris z/OS: `./ConfigEngine.sh install-caas-vp -DPortalAdminID=user\_id -DPortalAdminPwd=password -DWasUserid=user\_id -DWasPassword=password`
    -   IBM i: `ConfigEngine.sh install-caas-vp -DPortalAdminID=user\_id -DPortalAdminPwd=password -DWasUserid=user\_id -DWasPassword=password`
    -   Windows: `ConfigEngine.bat install-caas-vp -DPortalAdminID=user\_id -DPortalAdminPwd=password -DWasUserid=user\_id -DWasPassword=password`
4.  If you have virtual portals, run the following command on each virtual portals to initiate the setup of virtual portal scoped resources:

    **Note:** Add either the -DVirtualPortalContext or -DVirtualPortalHost parameter to the install-caas-vp.

    -   AIX HP-UX Linux Solaris z/OS: `./ConfigEngine.sh install-caas-vp -DPortalAdminId=user\_id -DPortalAdminPwd=password -DWasUserid=user\_id -DWasPassword=password -DVirtualPortalContext=virtual\_portal\_context`
    -   IBM i: `ConfigEngine.sh install-caas-vp -DPortalAdminId=user\_id -DPortalAdminPwd=password -DWasUserid=user\_id -DWasPassword=password -DVirtualPortalContext=virtual\_portal\_context`
    -   Windows: `ConfigEngine.bat install-caas-vp -DPortalAdminId=user\_id -DPortalAdminPwd=password -DWasUserid=user\_id -DWasPassword=password -DVirtualPortalContext=virtual\_portal\_context`
5.  Restart your portal server.


**Parent topic:**[Content as a Service pages](../wcm/cntnt_serv_pgs.md)

