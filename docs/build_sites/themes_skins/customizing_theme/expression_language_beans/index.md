# Expression language beans for accessing programming models

Expression language (EL) beans are used to access some HCL Digital Experience (DX) programming models. These beans are accessed through the PortalBean (wp). The beans allow you to use HCL DX models and associated classes.

## PortalBean

The PortalBean provides access to EL beans that represent some of the HCL Portal models. You can use these models to access resource information in your JSPs.

You can access the PortalBean with the following items. Append the following beans to `wp.` to create a bean in your JSP. For example, `wp.themeList.current` gets the current element and returns [Theme](./theme_list/theme/index.md).

- **[wp.ac](./access_control/index.md)** <br>
    Provides read access to the current access control permissions for a resource.

    - **[AccessControl](./access_control/themeopt_el_bean_acc_crtl_node.md)** <br>
        Provides read access to the current access control node for a resource.

- **[wp.analyticsTagList](./analytics_taglist/index.md)** <br>
    Attaches marketing information to Portal resources such as portal pages, portlets, or web content items. Reads the analytics tags that are associated with an identifiable portal resource.

    - **[AnalyticsTag](./analytics_taglist/themeopt_el_bean_analy_tag.md)** <br>
        Represents a single analytics tag.

- **[wp.clientProfile](./themeopt_el_bean_client_profile.md)** <br>
    Provides access to the client profile.

- **[wp.identification](./themeopt_el_bean_id.md)** <br>
    Provides access to the identification services serialize and deserialize.

- **[wp.languageList](./language_list/index.md)** <br>
    Provides access to the list of languages that are defined in portal.

    - **[Language](./language_list/themeopt_el_bean_lang.md)** <br>
        Provides access to the interface that represents a portal language.

- **[wp.layoutModel](./layout_model/index.md)** <br>
    Provides access to the tree model representation of the layout of a page.

    - **[LayoutModel](./layout_model/themeopt_el_bean_lay_model.md)** <br>
        Provides access to the tree model representation object of the layout of a page.

        - **[LayoutControl](./layout_model/themeopt_el_bean_lay_control.md)** <br>
            Provides access to the interface that represents a control in a `LayoutModel`.

        - **[LayoutContainer](./layout_model/themeopt_el_bean_lay_container.md)** <br>
            Provides access to the interface that represents a container in a `LayoutModel`.

- **wp.localizedDescription** <br>
    Provides access to the description of the currently rendered page. This bean returns the [Description](./common_beans/themeopt_el_bean_description.md) for the current page description and is never null. For example:

    ```
    ${wp.localizedDescription}
    ```

- **wp.localizedTitle** <br>
    Provides access to the title of the currently rendered page. This bean returns the [Title](./common_beans/themeopt_el_bean_title.md) for the current page title and is never null. For example:

    ```
    ${wp.localizedTitle}
    ```

- **[wp.metadata](./themeopt_el_bean_agg_meta_provi.md)** <br>
    Provides access to the aggregated metadata of a node. The metadata that can be provided by individual nodes of the content model are combined according to the hierarchy that the content model exposes for these nodes. Values set on the node itself take precedence over values set for its parents. This bean returns [Metadata](./common_beans/themeopt_el_bean_meta.md) and is never null. For example:

    ```
    ${wp.metadata[wp.selectionModel.selected]['com.ibm.portal.layout.template.ref']}
    ```

- **[wp.moduleList](./module_list/index.md)** <br>
    Accesses modules that are part of the modularized theme architecture. You can query individual modules and their attributes and identify the currently used modules within the scope of the currently selected and rendered page and theme.

    - **[Module](./module_list/current_module_list/index.md)** <br>
        Represents one individual module.

    - **[CurrentModuleList](./module_list/current_module_list/themeopt_el_bean_mod_current_list.md)** <br>
        Represents the list of modules within the scope of the current request, which is the currently selected page and theme. This module iterates through all modules, locates individual modules, and queries their capabilities. This is especially useful for portlet developers to check whether certain capabilities are available on the page or not.

        - **[ModuleCapabilitiesList](./module_list/current_module_list/module_capabilities_list/index.md)** <br>
            Represents the aggregated capabilities of a list of modules. This is usually the non-deferred or deferred capabilities of the currently selected page and depends on how this object was fetched. It is useful for portlet developers to check whether certain capabilities are available on the page or not.

            - **[ModuleCapability](./module_list/current_module_list/module_capabilities_list/themeopt_el_bean_mod_cap.md)** <br>
                Represents one capability as defined by a module.

- **[wp.navigationModel](./nav_model/index.md)** <br>
    Provides access to the navigation model.

    - **[NavigationNode](./nav_model/themeopt_el_bean_nav_node.md)** <br>
        Provides access to a navigation node in a navigation model.

        - **[ContentNode](./nav_model/themeopt_el_bean_content_node.md)** <br>
            Provides access to a content node. This interface offers a way to obtain the type of the content node.

- **[wp.publicRenderParam](./themeopt_el_bean_pub_render_param.md)** <br>
    Allows portlets to share context information. They are addressed with qualified names. This expression bean can be used within a theme or theme module to read the first String value of a public render parameter.

- **[wp.publicRenderParamValues](./themeopt_el_bean_pub_render_param_values.md)** <br>
    Reads the values of a public render parameter within a theme or theme module. This parameter is read in the context of the currently selected page that is determined internally.

- **[wp.rep](./resource_environment_provider/index.md)** <br>
    Provides access to the set of configuration entries for the specified resource environment provider.

    - **[Properties](./resource_environment_provider/themeopt_el_bean_prop.md)** <br>
        Represents a set of properties made available as part of the resource environment provider.

- **[wp.selectionModel](./selection_model/index.md)**<br>
    Provides access to a selection model for a navigation model.

    - **[NavigationNode](./selection_model/themeopt_el_bean_nav_node.md)** <br>
        Provides access to a navigation node in a navigation model.

        - **[ContentNode](./selection_model/themeopt_el_bean_content_node.md)** <br>
            Provides access to a content node. This interface offers a way to obtain the type of the content node.

- **[wp.themeConfig](./themeopt_el_bean_theme_cfg.md)** <br>
    Encapsulates the theme configuration parameter lookup process.

- **[wp.themeList](./theme_list/index.md)** <br>
    Provides access to all themes in the system and the currently selected theme.

    - **[Theme](./theme_list/theme/index.md)** <br>
        Provides access to the attributes of one theme.

        - **[ProfileList](./theme_list/theme/profile_list/index.md)** <br>
            Provides access to all profiles in a theme and the currently selected profile.

            - **[Profile](./theme_list/theme/profile_list/themeopt_el_bean_profile.md)** <br>
                Provides access to the attributes of one profile.

- **wp.title** <br>
    Provides access to the title of the currently rendered page or the title information set by a portlet. This bean returns the [Title](./common_beans/themeopt_el_bean_title.md) in the current locale as a string. For example:

    ```
    ${wp.title}
    ```    

- **[wp.user](./themeopt_el_bean_user.md)** <br>
    Provides access to the active user.

## Common beans

- **[Common beans](./common_beans/index.md)** <br>
    The following beans are returned by many different beans and are used flexibly.

    - **[Description](./common_beans/themeopt_el_bean_description.md)** <br>
        Provides access to the description of certain objects such as Navigation, Content, Theme, Profile, and others.

    - **[Metadata](./common_beans/themeopt_el_bean_meta.md)** <br>
        Provides access to the metadata of certain objects such as Navigation, Content, Theme, Profile, and others.

    - **[Title](./common_beans/themeopt_el_bean_title.md)** <br>
        Provides access to the title of certain objects such as Navigation, Content, Theme, Profile, and others.

- **[UrlGeneration](./common_beans/url_generation/index.md)** <br>
    Creates a portal URL you can control with attributes.

    - **[UrlGenerationPage](./common_beans/url_generation/themeopt_el_bean_url_gen_page.md)** <br>
        Extends `UrlGeneration` on a page. All the `UrlGeneration` attributes are available in addition to these attributes.

       - **[UrlGenerationPortlet](./common_beans/url_generation/themeopt_el_bean_url_gen_portlet.md)** <br>
            Extends `UrlGeneration` in a portlet. All the `UrlGeneration` and `UrlGenerationPage` attributes are available in addition to these attributes.

## Other beans

These beans cannot be accessed through the PortalBean. To access the `uiNavigationModel` Bean, you must use the [uiNavigationModel](../../../themes_skins/customizing_theme/portal_jsp_tag/dgn_ptlnavig.md#portal-navigation-tags) tag and define the variable name that you want the bean to be available under.

- **[uiNavigationModel](./ui_nav_model/index.md)** <br>
    Lists the visible pages by default as part of its iterator. When the **Show hidden pages** option is selected in the toolbar, it also lists the hidden pages. There is a mobile hidden flag for pages. The model also helps you specify a mobile test device class expression, which is used to evaluate if the system is rendered as part of a mobile request.

    - **[uiNavigationNode](./ui_nav_model/themeopt_el_bean_ui_nav_node.md)** <br>
        Provides access to a navigation node in a navigation model.
