# Expression language beans for accessing programming models

Expression language \(EL\) beans are available for accessing WebSphere Programming models. These beans are accessed through the PortalBean represented in the global namespace by wp. The beans provide access to HCL Digital Experience models and associated classes.

## PortalBean

The PortalBean provides access to EL Beans that represent some of the HCL Portal models. You can use these models to access resource information in your JSPs.

You can access the PortalBean \(wp\) with the following items. Append the following beans to `wp.` to create a bean in your JSP. For example, `wp.themeList.current` gets the current element and returns [Theme](themeopt_el_bean.md).

-   **[wp.ac](../expression_language_beans/access_control/index.md)**

    Provides read access to the current access control permissions for a resource.

    -   **[AccessControl](../expression_language_beans/access_control/themeopt_el_bean_acc_crtl_node.md)**

        Provides read access to the current access control node for a resource.

-   **[wp.analyticsTagList](../expression_language_beans/analytics_taglist/index.md)**

    Attaches marketing information to Portal resources such as portal pages, portlets, or web content items. Reads the analytics tags that are associated with an identifiable portal resource.

    -   **[AnalyticsTag](../expression_language_beans/analytics_taglist/themeopt_el_bean_analy_tag.md)**

        The AnalyticsTag expression bean represents a single analytics tag.

-   **[wp.clientProfile](themeopt_el_bean_client_profile.md)**

    Provides access to the client profile.

-   **[wp.identification](themeopt_el_bean_id.md)**

    Provides access to the identification services serialize and deserialize.

-   **[wp.languageList](../expression_language_beans/language_list/index.md)**

    Provides access to the list of languages that are defined in portal.

    -   **[Language](../expression_language_beans/language_list/themeopt_el_bean_lang.md)**

        Provides access to the interface that represents a portal language.

-   **[wp.layoutModel](../expression_language_beans/layout_model/themeopt_el_bean_lay_model.md)**

    Provides access to the tree model representation of the layout of a page.

    -   **[LayoutModel](../expression_language_beans/layout_model/themeopt_el_bean_lay_model.md)**

        Provides access to the tree model representation object of the layout of a page.

        -   **[LayoutContainer](../expression_language_beans/layout_model/themeopt_el_bean_lay_control.md)**

            Provides access to the interface that represents a container in a LayoutModel.

        -   **[LayoutControl](../expression_language_beans/layout_model/themeopt_el_bean_lay_control.md)**

            Provides access to the interface that represents a control in a LayoutModel.

-   **wp.localizedDescription**

    Provides access to the description of the currently rendered page.

    Example:

    ```
    ${wp.localizedDescription}
    ```

    Returns: [Description](../expression_language_beans/common_beans/themeopt_el_bean_description.md) for the current page description; it is never null.  

-   **wp.localizedTitle**

    Provides access to the title of the currently rendered page.

    Example:

    ```
    ${wp.localizedTitle}
    ```

    Returns: [Title](../expression_language_beans/common_beans/themeopt_el_bean_title.md) for the current page title; it is never null.

-   **[wp.metadata](themeopt_el_bean_agg_meta_provi.md)**

    Provides access to the aggregated metadata of a node. The metadata that can be provided by individual nodes of the content model are combined according to the hierarchy that the content model exposes for these nodes. Values set on the node itself take precedence over values set for its parents.

    Example:

    ```
    ${wp.metadata[wp.selectionModel.selected]['com.ibm.portal.layout.template.ref']}
    ```

     

    Returns: [Metadata](../expression_language_beans/common_beans/themeopt_el_bean_meta.md), never null.

-   **[wp.moduleList](../expression_language_beans/module_list/index.md)**

    The module list bean accesses modules that are part of the modularized theme architecture. You can query individual modules and their attributes and identify of the currently used modules within the scope of the currently selected and rendered page and theme.

    -   **[Module](../expression_language_beans/module_list/themeopt_el_bean_module.md)**

        Represents one individual module.

    -   **[CurrentModuleList](../expression_language_beans/module_list/current_module_list/themeopt_el_bean_mod_current_list.md)**

        The current module list always represents the list of modules within the scope of the current request, which is the currently selected page and theme. This module iterates through all modules, locate individual modules and query their capabilities. This is especially useful for portlet developers to check whether certain capabilities are available on the page or not.

        -   **[Module](../expression_language_beans/module_list/themeopt_el_bean_module.md)**

            Represents one individual module.

        -   **[ModuleCapabilitiesList](../expression_language_beans/module_list/current_module_list/module_capabilities_list/index.md)**

            Represents the aggregated capabilities of a list of modules. This is usually the non-deferred or deferred capabilities of the currently selected page and depends on how this object was fetched. It is useful for portlet developers to check whether certain capabilities are available on the page or not.

            -   **[ModuleCapability](../expression_language_beans/module_list/current_module_list/module_capabilities_list/themeopt_el_bean_mod_cap.md)**

                Represents one capability as defined by a module.

-   **[wp.navigationModel](../expression_language_beans/nav_model/index.md)**

    Provides access to the navigation model.

    -   **[NavigationNode](../expression_language_beans/nav_model/themeopt_el_bean_nav_node.md)**

        Provides access to a navigation node in a navigation model.

        -   **[ContentNode](../expression_language_beans/nav_model/themeopt_el_bean_content_node.md)**

            Provides access to a content node. This interface offers a way to obtain the type of the content node.

-   **[wp.publicRenderParam](themeopt_el_bean_pub_render_param.md)**

    Public render parameters can be used by portlets to share context information. They are addressed with qualified names. The `wp.publicRenderParam` expression bean can be used within a theme or theme module to read the first String value of a public render parameter.

-   **[wp.publicRenderParamValues](themeopt_el_bean_pub_render_param_values.md#)**

    The `wp.publicRenderParamValues` expression bean can be used within a theme or theme module to read the values of a public render parameter. The public render parameter is read in the context of the currently selected page that is determined internally.

-   **[wp.rep](../expression_language_beans/resource_environment_provider/index.md)**

    Provides access to the set of configuration entries for the specified resource environment provider.

    -   **[Properties](../expression_language_beans/resource_environment_provider/themeopt_el_bean_prop.md)**

        Object representing a set of properties mad available as part of the resource environment provider.

-   **[wp.selectionModel](../expression_language_beans/selection_model/index.md)**

    Provides access to a selection model for a navigation model.

    -   **[NavigationNode](../expression_language_beans/selection_model/themeopt_el_bean_nav_node.md)**

        Provides access to a navigation node in a navigation model.

        -   **[ContentNode](../expression_language_beans/selection_model/themeopt_el_bean_content_node.md)**

            Provides access to a content node. This interface offers a way to obtain the type of the content node.

-   **[wp.themeConfig](themeopt_el_bean_theme_cfg.md)**

    Encapsulates the theme configuration parameter lookup process.

-   **[wp.themeList](../expression_language_beans/theme_list/index.md)**

    Provides access to all themes in the system and the currently selected theme.

    -   **[Theme](../expression_language_beans/theme_list/theme/index.md)**

        Provides access to the attributes of one theme.

        -   **[ProfileList](../expression_language_beans/theme_list/theme/profile_list/index.md)**

            Provides access to all profiles in a theme and the currently selected profile.

            -   **[Profile](../expression_language_beans/theme_list/theme/profile_list/themeopt_el_bean_profile.md)**

                Provides access to the attributes of one profile.

-   **wp.title**

    Provides access to the title of the currently rendered page or the title information set by a portlet.

    Example:

    ```
    ${wp.title}
    ```

    Returns: Title in the current locale as a string.

-   **[wp.user](themeopt_el_bean_user.md)**

    Provides access to the active user.


## Common beans

-   **[Common beans](../expression_language_beans/common_beans/index.md)**

    The following beans are returned by many different beans and are used flexibly.

    -   **[Description](../expression_language_beans/common_beans/themeopt_el_bean_description.md)**

        Provides access to the description of certain objects such as Navigation, Content, Theme, Profile, and others.

    -   **[Metadata](../expression_language_beans/common_beans/themeopt_el_bean_meta.md)**

        Provides access to the metadata of certain objects such as Navigation, Content, Theme, Profile, and others.

    -   **[Title](../expression_language_beans/common_beans/themeopt_el_bean_title.md)**

        Provides access to the title of certain objects such as Navigation, Content, Theme, Profile, and others.


-   **[UrlGeneration](../expression_language_beans/common_beans/url_generation/index.md)**

    Creates a portal URL you can control with attributes.

    -   **[UrlGenerationPage](../expression_language_beans/common_beans/url_generation/themeopt_el_bean_url_gen_page.md)**

        Extends UrlGeneration on a page. All the UrlGeneration attributes are available in addition to these attributes.

        -   **[UrlGenerationPortlet](../expression_language_beans/common_beans/url_generation/themeopt_el_bean_url_gen_portlet.md)**

            Extends UrlGeneration in a portlet. All the UrlGeneration and UrlGenerationPage attributes are available in addition to these attributes.


## Other Beans

These beans cannot be accessed through the PortalBean. To access the uiNavigationModel Bean, you must use the [uiNavigationModel](../expression_language_beans/ui_nav_model/index.md) tag and define the variable name that you want the bean to be available under.

-   **[uiNavigationModel](../expression_language_beans/ui_nav_model/index.md)**

    By default, the uiNavigationModel lists the visible pages as part of its iterator. When the **Show hidden pages** option is selected in the toolbar, it also lists the hidden pages. There is a mobile hidden flag for pages. The model also helps you specify a mobile test device class expression, which is used to evaluate if the system is rendered as part of a mobile request.

    -   **[uiNavigationNode](../expression_language_beans/ui_nav_model/themeopt_el_bean_ui_nav_node.md)**

        Provides access to a navigation node in a navigation model.


