# Disable Renditions

Renditions are enabled by default. If you want to disable them, you must run a ConfigEngine task.

1.  Go to the wp_profile_root/ConfigEngine directory.

2.  Run the following command:

    -   AIX® and Linux™: `./ConfigEngine.sh disable-renditions -DPortalAdminPwd=password -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat disable-renditions -DPortalAdminPwd=password -DWasPassword=password`

3.  Restart the HCL Portal server.



