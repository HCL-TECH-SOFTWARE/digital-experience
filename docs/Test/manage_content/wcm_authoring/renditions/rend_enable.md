# Enable Renditions

Renditions are enabled by default. If you disable them, you must run a ConfigEngine task to enable them.

Running this task sets renditions.enabled=true as a global property for all virtual portals in the Web Content Manager Config Resource Environment Provider Service.

1.  Go to the wp_profile_root/ConfigEngine directory.

2.  Run the following command:

    -   AIX® and Linux™: `./ConfigEngine.sh enable-renditions -DPortalAdminPwd=password -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat enable-renditions -DPortalAdminPwd=password -DWasPassword=password`

3.  Restart the HCL Portal server.



