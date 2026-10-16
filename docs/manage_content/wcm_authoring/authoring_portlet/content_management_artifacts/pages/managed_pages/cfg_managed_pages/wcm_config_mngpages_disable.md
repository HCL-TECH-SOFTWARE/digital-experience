# Disabling Managed Pages

Disable support for Managed Pages by running the `disable-managed-pages` configuration task.

Disabling Managed Pages has the following effects:

- By default, each virtual portal has its own specific workspace where content is stored. When you disable Managed Pages, only a single workspace for the default virtual portal is available. The workspaces of other virtual portals are still there, but you can no longer access them. Any system associations between pages in those virtual portals and their respective Portal Site libraries no longer work.

    !!!important
        To preserve content in the other virtual portals, you must import or syndicate the libraries into the default virtual portal before disabling Managed Pages.

- You can still access the Portal Site library for the default virtual portal, but the library is no longer automatically synchronized with the page structure.
- Pages are no longer managed in HCL Web Content Manager (WCM), with the following implications:
    - No page drafts can be created.
    - No new versions of pages can be created.
    - Pages are no longer syndicated.
    - Access control changes that you perform in the portal interface are no longer applied to the portal page site area.
    - If you delete a page from the portal interface, the corresponding portal page site area is not deleted.
- If you create a page with either the **Basic** or **Articles** page template, the page has no web content association. This missing association can cause errors if you attempt to add content from the **Create Content** tab of the site toolbar. To use the sample web content items when Managed Pages is disabled, create a web content association on the page before attempting to add content.
- Having Managed Pages enabled is a mandatory requirement to have vanity URLs enabled. Therefore, if you have vanity URLs enabled and disable Managed Pages, vanity URLs are also disabled.

1. Run the disable-managed-pages task from the wp_profile_root/ConfigEngine` directory.

    - **AIX® and Linux™**

        `./ConfigEngine.sh disable-managed-pages -DPortalAdminPwd=password -DWasPassword=password`

    - **Windows™**

        `ConfigEngine.bat disable-managed-pages -DPortalAdminPwd=password -DWasPassword=password`

    By default, this task disables Managed Pages for the default virtual portal. If you want to disable Managed Pages for a different virtual portal, you can specify which virtual portal to configure. To identify a specific virtual portal, add one of the following parameters to the command line. Each parameter requires the prefix `-D` on the command line.

    - **VirtualPortalContext**

        To disable Managed Pages for a virtual portal that is not the default virtual portal, specify the virtual portal context for the target virtual portal

    - **VirtualPortalHost**

        To disable Managed Pages for a virtual portal that is not the default virtual portal, specify the virtual portal host name for the target virtual portal.

    After running the `disable-managed-pages` task for the first time, the property managed.pages is created in the **WP WPConfigService** configuration service. The value of the property is set to false.

    After running the `disable-managed-pages` task, the property `managed.pages.enabled` in the `WP VirtualPortalConfigService` configuration service of the target virtual portal is updated to have a value of `false`.

2. Restart the portal server.
