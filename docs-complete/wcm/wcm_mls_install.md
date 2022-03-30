# Installing the multilingual extensions 

The multilingual solution consists of a set of extensions to Web Content Manager that can be used to manage the authoring, workflow, and configuration of your multilingual system.

1.  **Note:** With HCL Digital Experience 9.5 Container Update CF192, multilingual solution \(MLS\) is now enabled out of the box. This means that the following steps do not need to be run in the container.

2.  Ensure that the WasPassword and PortalAdminPwd passwords are set in the wkplc.properties file.

3.  Run the following registration command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat register-wcm-mls

    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh register-wcm-mls

    -   **IBM® i**

        ConfigEngine.sh register-wcm-mls

    -   **z/OS®**

        ./ConfigEngine.sh register-wcm-mls

4.  Run the following deployment command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat deploy-wcm-mls

    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh deploy-wcm-mls

    -   **IBM® i**

        ConfigEngine.sh deploy-wcm-mls

    -   **z/OS®**

        ./ConfigEngine.sh deploy-wcm-mls

5.  If your server contains virtual portals, you must also run the following task for each virtual portal on your server:

    -   **Windows™**

        ConfigEngine.bat import-wcm-mls-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=virtual\_portal\_context\_url

    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh import-wcm-mls-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=virtual\_portal\_context\_url

    -   **IBM® i**

        ConfigEngine.sh import-wcm-mls-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=virtual\_portal\_context\_url

    -   **z/OS®**

        ./ConfigEngine.sh import-wcm-mls-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=virtual\_portal\_context\_url

6.  Restart HCL Portal.

7.  Repeat these steps on every server and cluster node.


**Parent topic:**[HCL Web Content Manager ](../wcm/wcm_install_cfg.md)

**Parent topic:**[Extensions for multilingual sites  Multilingual Solution](../wcm/wcm_mls_extensions.md)

**Related information**  


[Multilingual deployment, installation, and configuration  Multilingual Solution](../wcm/wcm_mls_install_ovr.md)

