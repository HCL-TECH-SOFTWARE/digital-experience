# Running post migration steps for the multilingual solution

When you migrate the multilingual solution, you need to merge your configuration settings.

**Note:** If your current multilingual system uses synchronized publishing, it is recommended to move to the project-based synchronizing publishing extension. If you have existing documents in the pending-publish stage, then you temporarily leave the pending publish stage in your workflow until those items are published. The presence of the pending publish stage does not affect new items that use projects.

1.  Ensure that the WasPassword and PortalAdminPwd passwords are set in the wkplc.properties file.

2.  Run the following registration command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat register-wcm-mls

    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh register-wcm-mls

    -   **IBM® i**

        ConfigEngine.sh register-wcm-mls

    -   **z/OS®**

        ./ConfigEngine.sh register-wcm-mls

3.  Run the following deployment command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat deploy-wcm-mls

    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh deploy-wcm-mls

    -   **IBM® i**

        ConfigEngine.sh deploy-wcm-mls

    -   **z/OS®**

        ./ConfigEngine.sh deploy-wcm-mls

4.  If your server contains virtual portals, you must also run the following task for each virtual portal on your server:

    -   **Windows™**

        ConfigEngine.bat import-wcm-mls-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=virtual\_portal\_context\_url

    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh import-wcm-mls-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=virtual\_portal\_context\_url

    -   **IBM® i**

        ConfigEngine.sh import-wcm-mls-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=virtual\_portal\_context\_url

    -   **z/OS®**

        ./ConfigEngine.sh import-wcm-mls-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=virtual\_portal\_context\_url

5.  Restart HCL Portal.

6.  Repeat these steps on every server and cluster node.


**Parent topic:**[Add-ons, features, and third-party integration tasks](../migrate/mig_post_ptl_int_addon.md)

