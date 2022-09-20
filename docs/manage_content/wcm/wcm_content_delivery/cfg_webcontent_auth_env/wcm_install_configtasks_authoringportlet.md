# How to install the authoring portlet

Pages that include the Web Content Manager authoring portlet and the local rendering portlet are created when you install HCL Portal. You run the authoring portlet configuration task only if you have previously uninstalled your authoring or local rendering portlets. The authoring portlet configuration task automatically creates Web Content Manager pages and installs the authoring portlet and local rendering portlets.

1.  Open a command prompt.
2.  Run the `configure-wcm-authoring` task from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory.
    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh configure-wcm-authoring -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password

    -   **IBM® i**

        ConfigEngine.sh configure-wcm-authoring -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password

    -   **Windows™**

        ConfigEngine.bat configure-wcm-authoring -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password

    -   **z/OS®**

        ./ConfigEngine.sh configure-wcm-authoring -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password

3.  Log out of the portal and log back in.
4.  Select **Web Content** from the product banner to access the authoring portlet.

**Cluster note:** If the authoring portlet does not display after you install in a cluster, you might need to activate the portlet.

## Locale consistency

The language that is displayed in the authoring portlet is determined by the region or locale of the user. There are, however, some elements of the authoring portlet that use HCL Portal functions, such as date selection fields. They are displayed with the locale of the HCL Portal server. For this reason, the language and locales of the site being created, the client and server should be consistent.

If your site contains content in different languages, then a separate Web Content Manager authoring applications should be set up for each language on different HCL Portal Servers. These can then be combined into one site using a staging server.

!!! note
    If a user changes their locale, any currently opened Web Content Manager dialogs will be closed. A user also must start a new session before it is displayed using the new locale. It is best practice to have the client's correct locale set before using Web Content Manager.


???+ info "Related information"
    - [Managing portlets in your cluster](../../../../deployment/manage/config_cluster/managing_cluster/managing_portlets_in_cluster/index.md)

