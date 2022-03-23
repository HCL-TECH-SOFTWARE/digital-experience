# Updating sample template items for inline editing after an upgrade installation \| HCL Web Content Manager

HCL Web Content Manager includes sample content such as web content template pages and predefined portlets that you can add to pages to render content. If you upgrade, these sample web content template items continue to use the editing method of the earlier release. To use the inline editing method with the earlier template items, you must complete several manual steps.

1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

2.  To redeploy the web content viewer portlets that are used with the template items, run the action-deploy-templating-portlets task.

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh action-deploy-templating-portlets -DPortalAdminPwd=password -DWasPassword=password
    -   Windows™: ConfigEngine.bat action-deploy-templating-portlets -DPortalAdminPwd=password -DWasPassword=password
    -   IBM® i: ConfigEngine.sh action-deploy-templating-portlets -DPortalAdminPwd=password -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh action-deploy-templating-portlets -DPortalAdminPwd=password -DWasPassword=password
3.  Log in to the portal as an administrator.

4.  Go to the web content authoring portlet.

    For example, click **Applications** \> **Content** \> **Web Content Management**.

5.  Edit the preferences for the authoring portlet, and ensure that the Portal Site library is listed with the libraries that are displayed in the portlet.

6.  In the authoring portlet, click **Portal Site** \> **Content** \> **Content Root** \> **Hidden Pages** \> **Page Templates** \> **Articles**.

7.  Delete the following content items: **Article**, **No Items Found**, and **List of Articles**.

8.  Log out of the portal.

9.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

10. Run the action-init-content-templating-pages task.

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh action-init-content-templating-pages -DPortalAdminPwd=password -DWasPassword=password
    -   Windows: ConfigEngine.bat action-init-content-templating-pages -DPortalAdminPwd=password -DWasPassword=password
    -   IBM i: ConfigEngine.sh action-init-content-templating-pages -DPortalAdminPwd=password -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh action-init-content-templating-pages -DPortalAdminPwd=password -DWasPassword=password
11. Run the action-internalize-content-mappings task.

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh action-internalize-content-mappings -DPortalAdminPwd=password -DWasPassword=password
    -   Windows: ConfigEngine.bat action-internalize-content-mappings -DPortalAdminPwd=password -DWasPassword=password
    -   IBM i: ConfigEngine.sh action-internalize-content-mappings -DPortalAdminPwd=password -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh action-internalize-content-mappings -DPortalAdminPwd=password -DWasPassword=password

After you complete these steps, the sample content items that are provided by default in the site toolbar are enabled for the updated inline editing feature.

-   The following content items in the **Web Content** category of the **Content** tab are updated: **Article**, **Image**, **List of Articles**, **Rich Text**. These content items are modified to reference new versions of the items that are provided in the Template Page Content 3.0 library.
-   The Articles page template is modified to reference a new version of the template that is provided in the Template Page Content 3.0 library.

**Parent topic:**[Inline editing ](../wcm/wcm_dev_inline.md)

