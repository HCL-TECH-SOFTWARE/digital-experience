# Migration: Enabling managed pages

After migration, you must manually enable support for managed pages. Without managed pages support, some features like the project menu are not available on the migrated server.

When you enable managed pages after migration, several considerations apply:

-   After migration, managed pages are initially disabled on the migrated server. In this case, there is a single workspace for storing HCL Web Content Manager content. All virtual portals on the server share this workspace. Although this single workspace simplifies the sharing of content between virtual portals, it can also lead to dependencies between content libraries and different virtual portals. Depending on your content environment, these dependencies can make it difficult for an administrator to determine which libraries to select for syndication to a syndicator.
-   When you enable managed pages, a workspace is created for each virtual portal. This separation ensures that there are no cross-references between content items in different virtual portals. In addition, by selecting all libraries that are visible in a workspace, references are guaranteed to be resolved during syndication.

    Because of this separation of workspaces, extra syndication steps might be required on the migrated server for web content libraries:

    -   **Libraries that are used only by a specific virtual portal**

        You must syndicate the libraries from the default virtual portal to the specific virtual portal.

    -   **Libraries that are shared by multiple virtual portals**

        You must syndicate the shared libraries from the default virtual portal to each specific virtual portal.

    After you syndicate the libraries that are unique to specific virtual portals, you can delete the libraries from the default virtual portal.

-   When supported, managed pages is enabled for a virtual portal, all pages in the virtual portal are copied into the Portal Site library in HCL Web Content Manager. However, the following pages are not treated as managed pages and are not copied:

-   Administration pages, as identified by the label `ibm.portal.Administration` and its child pages
-   Private pages
Each virtual portal has its own Portal Site library.

-   In scenarios where the configured user realm does not contain the domain administrator, an alternative user must be provided. If you have a multi-realm configuration, see [Defining alternative administrators for multi-realm configurations](../../../../../manage_content/wcm/wcm_management/further_cfg_options/wcm_config_admin_multirealm.md).

!!!note
    To take advantage of the features available to managed pages in the user interface, your pages must use the Portal 8.5 theme.

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

        **Important:** If the host name of the virtual portal is the same as the host name of the default virtual portal, you must also specify the VirtualPortalContext property. You can specify the VirtualPortalHost property by itself only if the host name is unique.

    -   **VirtualPortalContext**

        Specify the virtual portal context that identifies the virtual portal. For example, `vp1`.

    You can customize the task with the following optional parameters on the command line. Each parameter requires the prefix `-D` on the command line.

    -   **RunParallel**

        Indicate whether you want the task to run with multiple threads. A value of false indicates a single thread and is the default setting.

        A value of true indicates multiple threads, as specified by the work manager **wpsJcrSyncWorkManager** in the WebSphere® Integrated Solutions Console. Each thread requires a database connection. For optimal performance, ensure that your database connection pool supports at least as many connections as there are threads in the pool.

    -   **Excluded**

        Specify a list of unique names of page nodes to exclude from the creation process. Excluding a page also excludes its child pages. By default, the portal administration pages \(`ibm.portal.Administration`\) are excluded.

6.  To populate HCL provided libraries to the existing virtual portals, run the import-all-libs-to-vp task:

    -   **Windows™**

        `ConfigEngine.bat import-all-libs-to-vp -DPortalAdminPwd=password -DWasPassword=password`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh import-all-libs-to-vp -DPortalAdminPwd=password -DWasPassword=password`

7.  If you used web content pages before you enabled managed pages, you can transfer the content for those pages to the Portal Site library. If you plan to use the default page templates and store your web content in the Portal Site library, transfer the content for the template pages to the Portal Site library. Otherwise, you will no longer be able to create new pages with these templates. For more information, go to *Page templates* and *Transferring content associations to the Portal Site library*.

8.  Ensure that users have appropriate access to the Web Content Manager REST virtual resource so they can use **Edit mode**.<br>

    For example, they have user access.<br>

After you migrate from Version 7.0 or Version 8.0, vanity URLs are not available. After you enable managed pages, you can enable vanity URL support. If you migrated from Version 7.0 or 8.0, go to [Enabling vanity URL support](../../../../../manage_content/wcm/wcm_content_delivery/vanity_url/adm_vanity_url/van_url_cfgtsk_enable_vus.md).


???+ info "Related information"  
    -   [Enabling vanity URL support after migration](../../../../../deployment/manage/migrate/next_steps/post_mig_activities/portal_task/mig_post_vurls.md)
    -   [Transferring content associations to the Portal Site library](../../../../../manage_content/wcm/wcm_artifacts/managed_pages/cfg_managed_pages/wcm_config_mngpages_transfer.md)
    -   [Enabling vanity URL support](../../../../../manage_content/wcm/wcm_content_delivery/vanity_url/adm_vanity_url/van_url_cfgtsk_enable_vus.md)
    -   [Synchronizing the vanity URL database](../../../../../manage_content/wcm/wcm_content_delivery/vanity_url/adm_vanity_url/van_url_cfgtsk_sync_db.md)