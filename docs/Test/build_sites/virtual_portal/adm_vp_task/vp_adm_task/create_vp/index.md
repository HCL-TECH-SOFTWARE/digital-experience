# Creating a virtual portal

As a master administrator of the portal installation, you can create virtual portals by using the Virtual Portal Manager portlet.

When you create virtual portals, you specify the following attributes:

-   The **title** of the virtual portal. This title is later displayed in the list of virtual portals in the Virtual Portal Manager portlet. The title is not visible for users of the virtual portal.
-   A **description** for the virtual portal. This field is optional.
-   Either a host name or a context for the virtual portal:

    -   The portal **context** of the virtual portal. The context must be unique. The context is used to create the URL of the virtual portal. This URL is mapped to the actual internal URL of the virtual portal. You can give the friendly URL to the users of the virtual portal. They can use it to access the virtual portal without having to remember the internal URL.
    -   A host name for the virtual portal. This attribute is optional. Use it to add a host name of your choice for the virtual portal. The portal uses that host name for the friendly URL of the virtual portal as follows: http://your\_host\_name\_example:port/wps/portal. You can pass that friendly URL to your portal users for easier access to your portal.

        !!! note
            -   This URL is used internally to access the virtual portal instance, even if you specify a context URL that is easy to use. Make sure that the host name that you specify here is accessible.
            -   You cannot use the same virtual portal host name twice in the same portal installation. The host name must be unique for the portal installation. Host names must be valid host names that are either registered on your local DNS, or internally using the "hosts" file. Host names must be registered on your system before creating a virtual portal.
            -   After you create the virtual portal, you cannot change the host name that you specify for the virtual portal. If you must use a different host name for a virtual portal, see the topic about *Using a new host name for an existing virtual portal*.
            -   If you use web content libraries, do not specify a context URL for the new virtual portal that matches the name of a library on your server. If the name of a library and the URL context of a virtual portal have the same value, incorrect rendering of web content can result.
            -   If you use a host name for creating the virtual portal, you need to update the global web server plug-in configuration in the WebSphere® Integrated Solutions Console and restart the web server. If you have more than one virtual portal, you need to do this only once. For more information about updating the global web server plug-in configuration, read *Creating or updating a global web server plug-in configuration file* in the IBM® WebSphere Application Server product documentation.

    !!! note
        -   You must specify either a host name or a context.
        -   If you specify both a host name and a context, the host name takes precedence and the context is ignored.
        -   There are some strings that you cannot use as URL mappings for virtual portals, for example `vp`. These strings are reserved names and correspond with URL codec names. For a list of these reserved strings, see *Shaping the user experience*.
        -   Use only ASCII characters for the URL Context. For example, you cannot use a URL Context such as språk. If you use non-ASCII characters, the portal shows an error message such as the following EJPAH2009E: Invalid characters were found in a context name or label. Similarly, you cannot use escaped URL encoding either. For example, a URL Context such as spr%E5k.

-   The **realm** that represents the user population for the virtual portal. This field is only shown if your portal configuration supports realms.

When you use the Virtual Portal Manager administration portlet to create the virtual portal, you can add the following additional parameters as well:

-   The user group of **sub-administrators** who are able to administer the virtual portal.
-   The **theme** of the virtual portal.

For details see, *Using the Virtual Portal Manager administration portlet*. As an alternative, you can also use the appropriate configuration task to create virtual portals. For details about the configuration tasks for administering virtual portals see, *Portal configuration tasks for administering virtual portals*. When you use the configuration task for creating a virtual portal, you need to deliver this information by using the XML configuration interface in a later step.

!!! note
    1.  Before you create a virtual portal, read the information in *Planning for virtual portals*.
    2.  If you use the configuration task `create-virtual-portal` to create a virtual portal, the virtual portal is created without content. For more information about filling a virtual portal with content, see *Filling a virtual portal with content*.
    3.  If you do not specify a virtual portal title in the language, which is either defined as the user-preferred language or defined in the user's browser, the display fallback uses the unique name if present, or a string version of the object ID. So, to display the virtual portal title and content root correctly, the administrator must select the preferred language for the portal user. Or the administrator must define the display language in the user's browser, according to the language in which the title is set. For information about the language search sequence, see *Selecting and changing the language*.
    4.  When you create a virtual portal, a workspace is created that contains a new portal site web content library. All managed pages that are created in the virtual portal are stored in the virtual portal site library. As web content libraries are not shared across virtual portals, such managed pages are visible only within the virtual portal. Syndication of the portal site library for a virtual portal is the same as syndication of any other web content library.

You can preconfigure the content and the sub-administrators for virtual portals. For details see, *Preconfiguring virtual portals*.


-   **[Adding the Site Builder and Script Application libraries](advp_create_add_libs.md)**  
If you add virtual portals to your portal installation after you install CF09 or a later cumulative fix and you use Site Builder or the Script Application, you need to add the appropriate library or libraries to each new virtual portal.


???+ info "Related information"
    - [Shaping the user experience](../../../vp_planning/shape_vp_ux/index.md)
    - [Using the Virtual Portal Manager administration portlet](../../../vp_mgr_portlet/advp_vpmgr_use.md)
    - [Portal configuration tasks for administering virtual portals](../../../vp_reference/vp_command_ref/portal_cfg_adm_vp/index.md)
    - [Planning for virtual portals](../../../vp_planning/index.md)
    - [Selecting and changing the language](../../../../../deployment/manage/portal_admin_tools/language_support/adsuplang.md)
    - [Preconfiguring virtual portals](../../../vp_mgr_portlet/preconfig_vp/index.md)
    - [Task: create-virtual-portal](../../../vp_reference/vp_command_ref/portal_cfg_adm_vp/advp_cfgtsk_create.md)
    - [Known limitations for virtual portals](../../../vp_reference/vp_limitations/advpref_limits.md)
    - [Creating or updating a global web server plug-in configuration file](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=icwspi-creating-updating-global-web-server-plug-in-configuration-file)
    - [Using the XML configuration interface to work with virtual portals](../../../vp_reference/vp_command_ref/advp_xml.md)

