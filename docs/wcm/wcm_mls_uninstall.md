# Uninstalling the multilingual solution extensions  Multilingual Solution

The following steps are required to uninstall the multilingual solution extensions. These must be run on every server on non-clustered systems, or on the primary cluster node.

1.  Remove all multilingual workflow stages from each of your workflows.

2.  If the **Edit-Time Navigation/Creation** extension is being used:

    1.  Manually remove the field from each authoring template that uses the extension.

    2.  Save and then reapply any updated authoring templates by using the Remove existing elements option.

3.  If the **Servlet Render-Time Navigation** extension is used, remove it from your presentation templates.

4.  Ensure that the WasPassword and PortalAdminPwd passwords are set in the wkplc.properties file.

5.  To completely remove the multilingual solution, run the following command on all servers or nodes in your system from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat remove-wcm-mls

    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh remove-wcm-mls

    -   **IBM® i**

        ConfigEngine.sh remove-wcm-mls

    -   **z/OS®**

        ./ConfigEngine.sh remove-wcm-mls

6.  Delete the **MLConfiguration\_v7** library on base portal and all virtual portals.

7.  Restart the Portal Server.


**Parent topic:**[Extensions for multilingual sites  Multilingual Solution](../wcm/wcm_mls_extensions.md)

