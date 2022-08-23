# Uninstalling the Social Media Publisher

The following procedures to uninstall the Social Media Publisher must be run on every server and cluster node.

Before starting:

-   Ensure that the WasPassword and PortalAdminPwd passwords are set in the wkplc.properties file.
-   Ensure that the jcr.DBPassword password is set in wkplc\_dbdomain.properties file.

1.  To remove the Social Media Publisher tracking data tables, run the following command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat action-remove-wcm-social-tables

    -   **AIX®HP-UXLinux™Solaris**

        ./ConfigEngine.sh action-remove-wcm-social-tables

    -   **IBM® i**

        ConfigEngine.sh action-remove-wcm-social-tables

    -   **z/OS®**

        ./ConfigEngine.sh action-remove-wcm-social-tables

2.  To completely remove the Social Media Publisher, run the following command on all servers or nodes in your system from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat remove-wcm-social

    -   **AIX®HP-UXLinux™Solaris**

        ./ConfigEngine.sh remove-wcm-social

    -   **IBM® i**

        ConfigEngine.sh remove-wcm-social

    -   **z/OS®**

        ./ConfigEngine.sh remove-wcm-social

3.  Restart all servers to complete the uninstallation.


**Note:** All SSL certificates for Twitter, Facebook and Linkedin are removed when the uninstall script is run.


