# Enabling and disabling impersonation

By default, user impersonation is enabled, but you can manually disable or enable the impersonation feature as needed.

1.  Complete the following steps to disable or enable the impersonation feature:

    -   To disable the impersonation feature, run the `disable-impersonation` task from the `[wp\_profile\_root](../../../manage/wpsdirstr#wp_profile_root)/ConfigEngine` directory.
        -   **Windows™**

            ConfigEngine.bat disable-impersonation -DWasPassword=password -DPortalAdminPwd=password -DCategoriesList=wp.auth.base

        -   **AIX® HP-UX Linux™ Solaris**

            ./ConfigEngine.sh disable-impersonation -DWasPassword=password -DPortalAdminPwd=password -DCategoriesList=wp.auth.base

        -   **IBM® i**

            ConfigEngine.sh disable-impersonation -DWasPassword=password -DPortalAdminPwd=password -DCategoriesList=wp.auth.base

        -   **z/OS®**

            ./ConfigEngine.sh disable-impersonation -DWasPassword=password -DPortalAdminPwd=password -DCategoriesList=wp.auth.base

    -   To enable the impersonation feature, run the `enable-impersonation` task from the `[wp\_profile\_root](../../../manage/wpsdirstr#wp_profile_root)/ConfigEngine` directory.
        -   **Windows™**

            ConfigEngine.bat enable-impersonation -DWasPassword=password -DPortalAdminPwd=password -DCategoriesList=wp.auth.base

        -   **AIX® HP-UX Linux™ Solaris**

            ./ConfigEngine.sh enable-impersonation -DWasPassword=password -DPortalAdminPwd=password -DCategoriesList=wp.auth.base

        -   **IBM® i**

            ConfigEngine.sh enable-impersonation -DWasPassword=password -DPortalAdminPwd=password -DCategoriesList=wp.auth.base

        -   **z/OS®**

            ./ConfigEngine.sh enable-impersonation -DWasPassword=password -DPortalAdminPwd=password -DCategoriesList=wp.auth.base

2.  Stop and restart the HCL Portal server.



**Related information**  


[Starting and stopping servers, deployment managers, and node agents](../../../manage/stopstart)

