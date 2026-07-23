# Running post migration steps for the multilingual solution

When you migrate the multilingual solution, you need to merge your configuration settings.

!!!note
    If your current multilingual system uses synchronized publishing, it is recommended to move to the project-based synchronizing publishing extension. If you have existing documents in the pending-publish stage, then you temporarily leave the pending publish stage in your workflow until those items are published. The presence of the pending publish stage does not affect new items that use projects.

1. Ensure that the WasPassword and PortalAdminPwd passwords are set in the `wkplc.properties` file.

2. Run the following registration command from the `wp_profile_root/ConfigEngine` directory:

    - **Windows™**

        `ConfigEngine.bat register-wcm-mls`

    - **AIX® and Linux™**

        `./ConfigEngine.sh register-wcm-mls`

3. Run the following deployment command from the `wp_profile_root/ConfigEngine` directory:

    - **Windows™**

        `ConfigEngine.bat deploy-wcm-mls`

    - **AIX® and Linux™**

        `./ConfigEngine.sh deploy-wcm-mls`

4. If your server contains virtual portals, you must also run a task for each virtual portal on your server, depending on your configuration.

    If the virtual portal is configured to be accessed using an own virtual host name, run the following command:

    - **Windows™**

        `ConfigEngine.bat import-wcm-mls-data -DVirtualPortalHostName=<VirtualPortalHostName>`

    - **AIX® and Linux™**

        `./ConfigEngine.sh import-wcm-mls-data -DVirtualPortalHostName=<VirtualPortalHostName>`

    If the virtual portal is configured to be accessed using a virtual context, run the following command:

    - **Windows™**

        `ConfigEngine.bat import-wcm-mls-data -DVirtualPortalContext=<VP context name>`

    - **AIX® and Linux™**

        `./ConfigEngine.sh import-wcm-mls-data -DVirtualPortalContext=<VP context name>`

    !!!note
        - You can use only one of the `-DVirtualPortalHostName` or `-DVirtualPortalContext` parameters.
        - When using `-DVirtualPortalContext`, ensure to set the virtual portal name and not the entire context path. For example, use `./ConfigEngine.sh import-wcm-mls-data -DVirtualPortalContext=VP1` when the portal is accessible using context root `/wps/portal/VP1`.

5. Restart your HCL DX server.

6. Repeat these steps on every server and cluster node.
