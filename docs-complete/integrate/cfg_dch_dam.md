# Configuring the HCL Web Content Manager plug-in for Watson Content Hub 

You can configure a new plug-in, the HCL Web Content Manager plug-in for Watson Content Hub, and integrate Web Content Manager as a Digital Asset Manager service. This plug-in allows assets that are stored in Watson Content Hub to be used in the context of Web Content Manager and presented through Web Content Manager pages. The rendering of these resources uses the Content Delivery Network that comes with Watson Content Hub.

Before you configure the HCL Web Content Manager plug-in for Watson Content Hub, you must configure the integration with Watson Content Hub.

**Note:** When you present assets that are integrated through the Web Content Manager plug-in for Watson Content Hub, the renditions capability of the Web Content Manager authoring template is not supported in CF15.

**Cluster note:** In a clustered environment, run the ConfigEngine tasks only on the Primary Node.

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the setup-wch-dam task.

    **Cluster note:** In a clustered environment, add the -DKeyStore=CellDefaultTrustStore parameter to the setup-wch-dam task.

    -   AIX®: `./ConfigEngine.sh setup-wch-dam -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux™: `./ConfigEngine.sh setup-wch-dam -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat setup-wch-dam -DWasPassword=password -DPortalAdminPwd=password`
4.  Restart the HCL Portal and HCL Web Content Manager server. In a clustered environment, restart your cluster.


-   **[Functions for Web Content Authors using the Web Content Manager plug-in for Watson Content Hub ](../integrate/dch_dam_fun.md)**  
After you configure the plug-in, you can add Watson Content Hub assets to HCL Web Content Manager.

**Parent topic:**[Integrating with Watson Content Hub ](../integrate/int_dch.md)

