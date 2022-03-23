# Social Media Publisher 

The Social Media Publisher for Web Content Manager is an extension to Web Content Manager that allows businesses to promote their web content on social networks, and provide some basic statistics about the promoted content. When migrating the Social Media Publisher, you need to merge your configuration settings.

1.  Ensure that the WasPassword and PortalAdminPwd passwords are set in the wkplc.properties file.

2.  Edit `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/wcm/social/smp.properties` to ensure that the configuration is correct for the current server or cluster node. Specifically, `AUTHOR_DB_URL`, `AUTHOR_DB_NAME`, `AUTHOR_DB_SCHEMA` and `AUTHOR_DB_TYPE`.

    **Note:** The parameter settings in smp.properties are case-sensitive.

3.  Run the following registration command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat register-wcm-social

    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh register-wcm-social

    -   **IBM® i**

        ConfigEngine.sh register-wcm-social

    -   **z/OS®**

        ./ConfigEngine.sh register-wcm-social

4.  Run the following deployment command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat deploy-wcm-social

    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh deploy-wcm-social

    -   **IBM® i**

        ConfigEngine.sh deploy-wcm-social

    -   **z/OS®**

        ./ConfigEngine.sh deploy-wcm-social

5.  Restart HCL Digital Experience.

6.  Repeat these steps on every server and cluster node.


**Parent topic:**[Add-ons, features, and third-party integration tasks ](../migrate/mig_post_ptl_int_addon.md)

