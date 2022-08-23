# Using the Virtual Portal Manager administration portlet

After you complete a regular portal installation, the portal is ready and enabled for implementing virtual portals. For improved manageability of virtual portals, HCL Digital Experience provides a portlet for administering virtual portals. It is named Virtual Portal Manager. It enables the creation of extra virtual portals as you need. You can also use it to list, modify, or delete virtual portals in your portal.

-   **Creating a virtual portal**

    When you create a new virtual portal, you enter or select the following properties for the new virtual portal as required:

    -   The title for the new virtual portal. The title is later displayed in the list of virtual portals in the Virtual Portal Manager portlet. The title is not visible for users of the virtual portal. This field is limited to 255 characters.
    -   A description of the new virtual portal. This attribute is optional. This field is limited to 255 characters.
    -   Either a host name or a context for the virtual portal:

        -   A human readable URL context that is used for accessing the virtual portal. You can set a URL that can be easily remembered and is therefore more easy to use than the actual full portal URL. The portal maps the friendly URL to the internal URL of the virtual portal. To do this mapping, it uses the portal URL Mapping feature. The string that you enter is used as the last part of the URL of the virtual portal and is appended to `http://www.example.com/wps/portal/`.

            **Notes:**

            -   The URL context for each virtual portal must be unique.
            -   All virtual portal URL contexts must be built from the root context for the portal server and must be unique. They cannot be subcontexts. For example, this URL is invalid:

                ```
                http://www.example.com/wps/portal/vp1/vp2
                ```

                This is the correct format:

                ```
                http://www.example.com/wps/portal/vp2
                ```

            -   Use only ASCII characters for the URL Context of the virtual portal. Non-ASCII characters are not allowed for the URL Context. Examples: språk or **D&uuml;ne**. Using non-ASCII characters results in an error message such as the following one:

                ```
                EJPAH2009E: Invalid characters were found in a context name or label
                ```

                Similarly, do not use escaped URL encoding either. For example, a URL Context of spr%E5k is not allowed.

        -   A host name for the virtual portal. This attribute is optional. Use it to add a host name of your choice for the virtual portal. The portal uses that host name for the friendly URL of the virtual portal as follows: http://your\_host\_name\_example:port/wps/portal. You can pass that friendly URL to your portal users for easier access to your portal.

            **Notes:**

            -   This URL is used internally to access the virtual portal instance, even if you specify a context URL that is easy to use. Make sure that the host name that you specify here is accessible.
            -   You cannot use the same virtual portal host name twice in the same portal installation. The host name must be unique for the portal installation. Host names must be valid host names that are either registered on your local DNS, or internally using the "hosts" file. Host names must be registered on your system before creating a virtual portal.
            -   After you create the virtual portal, you cannot change the host name that you specify for the virtual portal. If you must use a different host name for a virtual portal, see the topic about *Using a new host name for an existing virtual portal*.
            -   If you use web content libraries, do not specify a context URL for the new virtual portal that matches the name of a library on your server. If the name of a library and the URL context of a virtual portal have the same value, incorrect rendering of web content can result.
            -   If you use a host name for creating the virtual portal, you need to update the global web server plug-in configuration in the WebSphere® Integrated Solutions Console and restart the web server. If you have more than one virtual portal, you need to do this only once. For more information about updating the global web server plug-in configuration, read *Creating or updating a global web server plug-in configuration file* in the IBM® WebSphere® Application Server product documentation.
        **Notes:**

        -   You must specify either a host name or a context.
        -   If you specify both a host name and a context, the host name takes precedence and the context is ignored.
        -   There are some strings that you cannot use as URL mappings for virtual portals, for example `vp`. These strings are reserved names and correspond with URL codec names. For a list of these reserved strings, see *Shaping the user experience*.
        -   Use only ASCII characters for the URL Context. For example, you cannot use a URL Context such as språk. If you use non-ASCII characters, the portal shows an error message such as the following EJPAH2009E: Invalid characters were found in a context name or label. Similarly, you cannot use escaped URL encoding either. For example, a URL Context such as spr%E5k.
    -   The Virtual Member Manager realm that contains the user population of the virtual portal. This entry field is only shown if your portal installation supports realms. If you leave the realm field blank, the user population is the same as for the default realm. If you use a single common user repository for all virtual portals, for example the WebSphere® Application Server LDAP custom user registry, this entry field is not shown.
    -   The initial subadministrator user group for the virtual portal. The portal gives this group administrator access rights on the Content Root node of the new virtual portal and all its child pages. This group must be within the realm that is specified for the virtual portal.
    -   The Default theme that is applied to the pages of the virtual portal. You select the default theme from a pull-down list. By the default configuration for virtual portals a subadministrator cannot change that default theme, unless you change the roles and access rights give to the subadministrator.
    After you enter this information, you create the new virtual portal. With that information the portlet triggers a sequence of processes to establish the new virtual portal. These processes include:

    -   Creating a new root content node for the virtual portal.
    -   Creating the new URL mapping to point to the new root content node.
    -   Assigning the selected theme to the new root content node.
    -   Granting the specified administrator group the action set for the Administrator role on the new root content node and on the new virtual portal.
    -   Calling the XML configuration interface script to create the initial content tree. This includes virtual portal specific instances of the following portal resources: Favorites, Administration, Home, Manage Portlets, and Page Customizer with the corresponding concrete portlets. To change the content globally and before creating a virtual portal, modify the XML script that specifies the initial content for virtual portals. For details about how to do this see *Preconfiguring the default content for virtual portals*.
    -   Assigning default roles and access rights to sub-administrators and users on the created resources.
-   **Modifying or editing a virtual portal**

    You can modify the title and description of the virtual portal. You can also set locale-specific titles and descriptions.

-   **Reinitializing a virtual portal**

    Applies the InitVirtualPortal.xml script again and re-creates the default content of a virtual portal. If you replaced the default XML script with your own and configured the Virtual Portal Manager portlet accordingly, your custom script is reapplied. Resources that you removed from the default content are re-created.

    **Note:** Resources that you added to the default content remain in the virtual portal.

-   **Deleting a virtual portal**

    Deletes the virtual portal, its initial URL mapping, and all the corresponding scoped resources.

    **Note:** This does not delete the unscoped resources from the initial portal installation or extra URL mappings that administrators created.



**Related information**  


[Creating a virtual portal](../admin-system/advp_tsk_create_vp.md)

[Shaping the user experience](../admin-system/advppln_shape_ux.md)

[Preconfiguring the default content for virtual portals](../admin-system/advp_precfg_content.md)

[Using a new host name for an existing virtual portal](../admin-system/advpref_limits_new_hostname.md)

[Creating or updating a global web server plug-in configuration file](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=icwspi-creating-updating-global-web-server-plug-in-configuration-file)

