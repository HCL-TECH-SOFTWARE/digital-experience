# Adapting the list of required runtime configuration changes for your theme

You must adapt the list of required runtime configuration changes for your theme.

1.  Modify the dynamic resource references in static resources of your theme static resources. For more information about dynamic resource references, see Copying the theme.

2.  Change the common-resources root node.

    1.  Open the WebSphere® Integrated Solutions Console.

    2.  Open**Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WP GlobalThemeConfig** \> **Custom Properties**.

    3.  Change behaviors.layout.defaultLayout from dav:fs-type1/layout-templates/2ColumnEqual/ to <context-root-static-war\>/layout-templates/2ColumnEqual/.

        For example, if your context root is /MyStaticContent, the value would be war:MyStaticContent/layout-templates/2ColumnEqual/.

3.  Change resources.commonResourcesRootURI from dav:fs-type1/common-resources to war:/common-resources.

    For example, if your context root is /MyStaticContent, the value would be war:MyStaticContent/common-resources

    1.  Open the WebSphere Integrated Solutions Console.

    2.  Open**Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WP ConfigService** \> **Custom Properties**.

    3.  Create or adapt a regular expression for the refreshPageLayout.template.regexp parameter. The portal default is dav:fs-type1/layout-templates/.\*\|dav:fs-type1/themes/.\*.

        The following example shows a regular expression:

        ```
        dav:fs-type1/layout-templates/.*|dav:fs-type1/themes/.*|war:/themes/.*
        ```

        !!! note
            If you do not perform the last step, users must have the Markup Editor role that is assigned to be able to change a layout.


You can define the secure locations of layout templates by using this setting. If portal receives a request to create or update a page that contains a layout link, and that link is matching this regular expression, the markup editor role is not enforced on that layout. Include only locations in the regular expression that are under Access Control enforcement. For example, the layout templates and theme folders can be changed only by users that have the Theme Manager role. References to war files are also usable, as the war file deployment is secured by Java Platform, Enterprise Edition rights.


???+ info "Related information"
    - [Access permissions](../../../../../deployment/manage/security/people/authorization/controlling_access/resources_roles/sec_acc_rights.md)
    - [CSS styles used by the sample web content template items](../../../../../manage_content/wcm_delivery/deliver_webcontent_on_portal/getting_started/creating_contentsamples/wcm_delivery_ctsamples_css.md)
    - [Modify the dynamic resource references for your theme](../../../customizing_theme/copying_theme/manual_copy_theme/creating_webdav_theme_copy/themeopt_cust_copy_modifystatres.md)

