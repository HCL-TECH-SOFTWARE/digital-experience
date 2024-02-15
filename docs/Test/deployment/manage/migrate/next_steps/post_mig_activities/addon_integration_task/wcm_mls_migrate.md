# Running post migration steps for the multilingual solution

When you migrate the multilingual solution, you need to merge your configuration settings.

!!!note
    If your current multilingual system uses synchronized publishing, it is recommended to move to the project-based synchronizing publishing extension. If you have existing documents in the pending-publish stage, then you temporarily leave the pending publish stage in your workflow until those items are published. The presence of the pending publish stage does not affect new items that use projects.

1.  Ensure that the WasPassword and PortalAdminPwd passwords are set in the wkplc.properties file.

2.  Run the following registration command from the wp_profile_root/ConfigEngine` directory:

    -   **Windows™**

        `ConfigEngine.bat register-wcm-mls`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh register-wcm-mls`

3.  Run the following deployment command from the wp_profile_root/ConfigEngine` directory:

    -   **Windows™**

        `ConfigEngine.bat deploy-wcm-mls`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh deploy-wcm-mls`

4.  If your server contains virtual portals, you must also run the following task for each virtual portal on your server:

    -   **Windows™**

        C`onfigEngine.bat import-wcm-mls-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=virtual_portal_context_url`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh import-wcm-mls-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=virtual_portal_context_url`

5.  Restart HCL Portal.

6.  Repeat these steps on every server and cluster node.



