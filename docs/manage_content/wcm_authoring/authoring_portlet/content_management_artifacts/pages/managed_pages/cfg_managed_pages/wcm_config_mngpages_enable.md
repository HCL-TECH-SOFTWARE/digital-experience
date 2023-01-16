# Enabling managed pages

By default, support for managed pages is enabled for the default virtual portal. However, you can also manually enable this support if managed pages are disabled.

!!!important
    Do not attempt to enable managed pages on a server where managed pages are already enabled. If you previously disabled managed pages and want to re-enable the feature, you must ensure that the Portal Site library is empty first. If you fail to remove the page artifacts from the previous configuration, the resulting portal might not work properly.

When supported, managed pages is enabled for a virtual portal, all pages in the virtual portal are copied into the Portal Site library in HCL Web Content Manager. However, the following pages are not treated as managed pages and are not copied:

-   Administration pages, as identified by the label `ibm.portal.Administration` and its child pages
-   Private pages

Each virtual portal has its own Portal Site library.

!!!note
    To take advantage of the features available to managed pages in the user interface, your pages must use the Portal 8.5 theme.

**Cluster consideration:** In a cluster, you need to apply this procedure only to the primary node. In a multiple cluster configuration, apply this procedure to the primary node of each cluster.

!!!attention
    If you lost your JCR workspace and the backup was create before you created the virtual portal, restoring the workspace creates an inconsistency between the database domains. The create-virtual-portal-site-nodes task fails because the JCR workspace is missing. Run the action-migrate-vps task to correct the inconsistency with the database domains and to restore the JCR workspace.

1.  Start the portal server.

2.  To enable support for managed pages, run the enable-managed-pages task from the wp_profile_root/ConfigEngine directory.

    -   **Windows™**

        `ConfigEngine.bat enable-managed-pages -DPortalAdminPwd=password -DWasPassword=password`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh enable-managed-pages -DPortalAdminPwd=password -DWasPassword=password`

    After you run the enable-managed-pages task for the first time, the property managed.pages is created in the portal WP Configuration Service. The value of the property is set to true.

3.  Restart the portal server.

4.  To populate web content libraries with information about virtual portals in the system, run the create-virtual-portal-site-nodes task from the wp_profile_root/ConfigEngine directory.

    For each virtual portal, this task creates a library and a site area that is called `lost-found` for resources that cannot be properly located. If the library or site area exists, the task exits. By default, the task runs on all virtual portals in the system.

    -   **Windows™**

        `ConfigEngine.bat create-virtual-portal-site-nodes -DPortalAdminPwd=password -DWasPassword=password`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh create-virtual-portal-site-nodes -DPortalAdminPwd=password -DWasPassword=password`

5.  To populate web content libraries with information about the portal pages in the system, run the create-page-nodes task from the wp_profile_root/ConfigEngine` directory.

    This task can also be used when portal pages and managed pages artifacts in Web Content Manager are not synchronized. In this case, the task attempts to resynchronize the portal artifacts and web content artifacts, giving precedence to the portal artifacts.

    !!!note "Performance note"
        Depending on the amount of information in the system, the create-page-nodes task can take a long time to run. Because of the database load of the task, do not run the task frequently. The initial run of the task requires the most time, while subsequent runs typically require less time.

    !!!note
        If you have many pages, then it might be necessary to increase the soap client timeout. Edit the wp_profile_root/properties/soap.client.props file to change the com.ibm.SOAP.requestTimeout to 60000.

    !!!attention
        If your virtual portals have different administrative accounts, you cannot run the create-page-nodes task directly. You must run the task for every virtual portal, including the base virtual portal. Use the VirtualPortalHost or VirtualPortalContext parameter with the create-page-nodes task. Run the list-all-virtual-portals task to get a list of all your virtual portals. When you run the create-page-nodes task on the base virtual portal, set the VirtualPortalContext value to __NO__VP__ID__.

    -   **Windows™**

        `ConfigEngine.bat create-page-nodes -DPortalAdminPwd=password -DWasPassword=password`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh create-page-nodes -DPortalAdminPwd=password -DWasPassword=password`

    By default, this task is run on all pages in all virtual portals. To limit this task to a specific virtual portal, identify the virtual portal by adding one of the following parameters to the command line. Each parameter requires the prefix `-D` on the command line.

    -   **VirtualPortalHost**

        Specify the host name of the virtual portal. For example, `vp.example.com`.

        !!!important
            If the host name of the virtual portal is the same as the host name of the default virtual portal, you must also specify the VirtualPortalContext property. You can specify the VirtualPortalHost property by itself only if the host name is unique.

    -   **VirtualPortalContext**

        Specify the virtual portal context that identifies the virtual portal. For example, `vp1`.

    You can customize the task with the following optional parameters on the command line. Each parameter requires the prefix `-D` on the command line.

    -   **RunParallel**

        Indicate whether you want the task to run with multiple threads. A value of false indicates a single thread and is the default setting.

        A value of true indicates multiple threads, as specified by the work manager **wpsJcrSyncWorkManager** in the WebSphere® Integrated Solutions Console. Each thread requires a database connection. For optimal performance, ensure that your database connection pool supports at least as many connections as there are threads in the pool.

    -   **Excluded**

        Specify a list of unique names of page nodes to exclude from the creation process. Excluding a page also excludes its child pages. By default, the portal administration pages (`ibm.portal.Administration`) are excluded.

6.  To populate IBM provided libraries to the existing virtual portals, run the import-all-libs-to-vp task:

    -   **Windows™**

        `ConfigEngine.bat import-all-libs-to-vp -DPortalAdminPwd=password -DWasPassword=password`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh import-all-libs-to-vp -DPortalAdminPwd=password -DWasPassword=password`

7.  If you used web content pages before you enabled managed pages, you can transfer the content for those pages to the Portal Site library. If you plan to use the default page templates and store your web content in the Portal Site library, transfer the content for the template pages to the Portal Site library. Otherwise, you will no longer be able to create new pages with these templates. For more information, go to *Page templates* and *Transferring content associations to the Portal Site library*.

8.  Ensure that users have appropriate access to the Web Content Manager REST virtual resource so they can use **Edit mode**.

    For example, they have user access.


???+ info "Related information"  
    -   [Transferring content associations to the Portal Site library](wcm_config_mngpages_transfer.md)
    -   [Page templates](../../../../../../../build_sites/sitebuilder/site_dev_with_sitebuilder/creating_sites_using_sitebuilder/sitebuilder_learn_pgtemplate.md)
    -   [Enabling vanity URL support](../../../../../../wcm_delivery/vanity_url/adm_vanity_url/van_url_cfgtsk_enable_vus.md)

