# Updating administration themes in Virtual Portals

During migration, the HCL Digital Experience 8.5 theme is deployed. However, only the administration themes on the default virtual portal are updated to the 8.5 version of the administration user interface. For all other virtual portals, you must manually update the administration themes.

1.  Upgrade the administration pages theme:
2.  Run the following commands from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory of your portal installation.

    For a context root based virtual portal:

    -   AIX® Linux™ Solaris: ./ConfigEngine.sh action-upgrade-theme-admin-oob -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalContext=virtual\_portal\_context\_url
    -   Windows™: ConfigEngine.bat action-upgrade-theme-admin-oob -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalContext=virtual\_portal\_context\_url
    -   IBM® i: ConfigEngine.sh action-upgrade-theme-admin-oob -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalContext=virtual\_portal\_context\_url
    -   z/OS®: ./ConfigEngine.sh action-upgrade-theme-admin-oob -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalContext=virtual\_portal\_context\_url
    To find your virtual portal context, run the following command:

    -   AIX Linux Solaris: ./ConfigEngine.sh list-all-virtual-portals
    -   Windows: ConfigEngine.bat list-all-virtual-portals
    -   IBM i: ConfigEngine.sh list-all-virtual-portals
    -   z/OS: ./ConfigEngine.sh list-all-virtual-portals
3.  If HCL Web Content Manager is installed, then run the following command to upgrade the Web Content Manager administration pages theme.

    For a context root based virtual portal:

    -   AIX Linux Solaris: ./ConfigEngine.sh action-upgrade-wcm-theme-admin-oob -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalContext=virtual\_portal\_context\_url
    -   Windows: ConfigEngine.bat action-upgrade-wcm-theme-admin-oob -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalContext=virtual\_portal\_context\_url
    -   IBM i: ConfigEngine.sh action-upgrade-wcm-theme-admin-oob -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalContext=virtual\_portal\_context\_url
    -   z/OS: ./ConfigEngine.sh action-upgrade-wcm-theme-admin-oob -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalContext=virtual\_portal\_context\_url
    To find your virtual portal context, run the following command:

    -   AIX Linux Solaris: ./ConfigEngine.sh list-all-virtual-portals
    -   Windows: ConfigEngine.bat list-all-virtual-portals
    -   IBM i: ConfigEngine.sh list-all-virtual-portals
    -   z/OS: ./ConfigEngine.sh list-all-virtual-portals


