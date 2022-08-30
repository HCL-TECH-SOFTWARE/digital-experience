# Removing Content as a Service

To remove Content as a Service feature in HCL Portal, you must disable it by using an HCL Digital Experience configuration task.

1.  Change the directory to the wp\_profile\_root/ConfigEngine directory. If you are using IBM® z/OS®, open a UNIX System Services command prompt to change directories.

2.  Initiate removal.

    -   To initiate the removal of virtual portal scoped resources in the default virtual portal, run the configuration task `uninstall-caas-vp` as follows:

        `./ConfigEngine.sh uninstall-caas-vp -DPortalAdminID=user\_id -DPortalAdminPwd=password DWasUserid=user\_id -DWasPassword=password`

    -   To initiate the removal of virtual portal scoped resources in a virtual portal, run the configuration task `uninstall-caas-vp` by adding the -DVirtualPortalContext or -DVirtualPortalHostas follows:

        `./ConfigEngine.sh uninstall-caas-vp -DPortalAdminID=user\_id -DPortalAdminPwd=password DWasUserid=user\_id -DWasPassword=password -DVirtualPortalContext=virtual\_portal\_context`

    -   To initiate the removal of shared resources, run the configuration task `install-caas` as follows:

        `./ConfigEngine.sh uninstall-caas -DPortalAdminID=user\_id _DPortalAdminPwd=password DWasUserid=user\_id -DWasPassword=passowrd`

    **Note:** Uninstalling the shared resources while the virtual portal scoped installation is still present for other virtual portals leads Content as a Service feature to become dysfunctional for all virtual portals.

3.  Restart your portal server.



