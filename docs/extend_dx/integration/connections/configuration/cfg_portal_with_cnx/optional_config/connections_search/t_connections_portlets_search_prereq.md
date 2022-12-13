# Deploying search integration prerequisites

Follow these steps to configure search integration.

1.  Configure Search.

    !!!note "Notes"

        * All of the required and optional parameters for the installation script are described in the topic [Installation Options](../../../../installation/r_connections_portlets_install_options.md).
        * Follow the pattern from Step 3 for running the ConfigEngine command for your operating system.
        * If you are installing in a clustered environment, complete the installation steps on the primary node and then on all additional nodes. Run:

        ```
        ConfigEngine configure-SNPortletsSearch -DICversion=5.0 -DWasPassword=[was-admin-pwd] 
        -DPortalAdminPwd=[portal-admin-pwd]
        ```

2.  If you are deploying in a clustered environment, copy the search icons from wp\_profile\\paa\\SNPortlets\\components\\SNPortletsSearch\\installableApps\\zip to each of the nodes.

3.  If you are installing in a clustered environment, resynchronize the nodes.



