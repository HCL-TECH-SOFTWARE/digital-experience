# Installing the multilingual extensions

The multilingual solution consists of a set of extensions to Web Content Manager that can be used to manage the authoring, workflow, and configuration of your multilingual system.

!!! note
    With HCL Digital Experience 9.5 Container Update CF192, multilingual solution (MLS) is now enabled out of the box. This means that the following steps do not need to be run in the container.

1.  Ensure that the WasPassword and PortalAdminPwd passwords are set in the wkplc.properties file.

2.  Run the following registration command from the wp_profile_root]/ConfigEngine` directory:

    -   **Windows™**

        `ConfigEngine.bat register-wcm-mls`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh register-wcm-mls`

3.  Run the following deployment command from the wp_profile_root/ConfigEngine directory:

    -   **Windows™**

        `ConfigEngine.bat deploy-wcm-mls`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh deploy-wcm-mls`

4.  If your server contains virtual portals, you must also run the following task for each virtual portal on your server:

    -   **Windows™**

        `ConfigEngine.bat import-wcm-mls-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=virtual_portal_context_url`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh import-wcm-mls-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=virtual_portal_context_url`

5.  Restart HCL Portal.

6.  Repeat these steps on every server and cluster node.



???+ info 'Related information"
    - [Multilingual deployment, installation, and configuration Multilingual Solution](../mls_install/index.md)

