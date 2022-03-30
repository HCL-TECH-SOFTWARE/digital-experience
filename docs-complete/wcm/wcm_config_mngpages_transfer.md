# Transferring content associations to the Portal Site library 

When you enable manage pages, any web content pages that you have are converted to managed pages and added to the Portal Site library. However, the content that is associated with the web content pages remains in the original libraries. You can transfer this associated content to the Portal Site library with the internalize-content-mappings task.

**Note:** Administration pages are not intended to be managed pages and so are not included when you enable managed pages.

When you transfer the content association for a page to the Portal Site library, several things happen:

-   The content that is referenced by the default content association for the page is copied to the portal page site area for the page. Only the default content association is affected; other content associations for the page are ignored.

    **Note:** Nested pages are not copied. Nested site areas are not copied in the following cases:

    -   The nested site area is referenced by the default association of another page.
    -   The nested site area has the same name as an existing site area for the same page.
-   Template mappings and content elements that exist in the associated site area are copied over into the portal page. If the template mapping or element exists for the page, the copy is not performed.
-   The default content setting for the portal page is modified to reference the copied content.
-   The configuration of any web content viewers on the page is updated to reference the content that is stored in the portal page site area. However, viewer configurations that use content paths are not affected.

1.  To transfer content associations, run the `internalize-content-mappings` task from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory.

    -   **Windows™**

        ConfigEngine.bat internalize-content-mappings -DPortalPage=target\_page -DIncludeDescendants=true\_or\_false -DSynchronous=true\_or\_false -DPortalAdminPwd=password -DWasPassword=password

    -   **AIX® Linux™ Solaris**

        ./ConfigEngine.sh internalize-content-mappings -DPortalPage=target\_page -DIncludeDescendants=true\_or\_false -DSynchronous=true\_or\_false -DPortalAdminPwd=password -DWasPassword=password

    -   **IBM® i**

        ConfigEngine.sh internalize-content-mappings -DPortalPage=target\_page -DIncludeDescendants=true\_or\_false -DSynchronous=true\_or\_false -DPortalAdminPwd=password -DWasPassword=password

    -   **z/OS®**

        ./ConfigEngine.sh internalize-content-mappings -DPortalPage=target\_page -DIncludeDescendants=true\_or\_false -DSynchronous=true\_or\_false -DPortalAdminPwd=password -DWasPassword=password

    The following properties must be specified either on the command line or in the `wkplc.properties` file.

    -   **PortalPage**

        The object ID or the unique page name of the page for which you want to transfer content. If the target page is contained in a virtual portal, you must identify the virtual portal by specifying either the VirtualPortalContext parameter or VirtualPortalHost parameter.

    -   **IncludeDescendants**

        Specify true to transfer content for the target page and any child pages. To transfer content only for the target page, specify false. If not specified, the default value is true.

    -   **Synchronous**

        Specify true to perform the transfer synchronously. To perform the transfer asynchronously, specify false. If not specified, the default value is true.

    -   **Verbose**

        Specify true to output additional information to the log. To generate basic log information, specify false. If not specified, the default value is false.

    -   ****CollisionHandling****

        When you copy content to a page, specify the action to take if the content item exists. By default, that content item is not copied. If you set CollisionHandling to replace, the content item on the page is replaced with the content item to be copied to the page.

    -   **VirtualPortalContext**

        Specify the virtual portal context that identifies the virtual portal. For example, `vp1`.

    -   **VirtualPortalHost**

        Specify the host name of the virtual portal. For example, `vp.example.com`.

        **Important:** If the host name of the virtual portal is the same as the host name of the default virtual portal, you must also specify the VirtualPortalContext property. You can specify the VirtualPortalHost property by itself only if the host name is unique.

    -   **PortalAdminPwd**

        The administrator password for HCL Portal.

    -   **WasPassword**

        The administrator password for WebSphere® Application Server.

    Example commands:

    -   Windows: ConfigEngine.bat internalize-content-mappings -DPortalPage=example.page -DIncludeDescendants=true -DSynchronous=true -DPortalAdminPwd=password -DWasPassword=password
    -   AIX Linux Solaris: ./ConfigEngine.sh internalize-content-mappings -DPortalPage=example.page -DIncludeDescendants=true -DSynchronous=true -DPortalAdminPwd=password -DWasPassword=password
    -   IBM i: ConfigEngine.sh internalize-content-mappings -DPortalPage=example.page -DIncludeDescendants=true -DSynchronous=true -DPortalAdminPwd=password -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh internalize-content-mappings -DPortalPage=example.page -DIncludeDescendants=true -DSynchronous=true -DPortalAdminPwd=password -DWasPassword=password

**Parent topic:**[Configuring managed pages ](../wcm/wcm_config_mngpages.md)

**Related information**  


[Enabling managed pages ](../wcm/wcm_config_mngpages_enable.md)

[Page templates ](../site/site_page_temps.md)

[Migration: Enabling managed pages ](../migrate/mig_t_enable_mngpages.md)

