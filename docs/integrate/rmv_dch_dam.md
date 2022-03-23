# Removing Watson Content Hub as a Digital Asset Management service 

You can remove the functionality of using Watson Content Hub as a Digital Asset Management service in HCL Web Content Manager without affecting the general integration of Watson Content Hub in HCL Digital Experience.

**Cluster note:** In a clustered environment, run the ConfigEngine tasks only on the Primary Node.

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the remove-wch-dam task.

    **Cluster note:** In a clustered environment, add the -DKeyStore=CellDefaultTrustStore parameter to the remove-wch-dam task.

    -   AIX®: `./ConfigEngine.sh remove-wch-dam -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux™: `./ConfigEngine.sh remove-wch-dam -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat remove-wch-dam -DWasPassword=password -DPortalAdminPwd=password`
4.  Restart the HCL Portal and HCL Web Content Manager server. In a clustered environment, restart your cluster.


Any Watson Content Hub assets that are still referenced from Web Content Manager items can no longer be rendered.

**Parent topic:**[Integrating with Watson Content Hub ](../integrate/int_dch.md)

