# Adding or removing a module from a profile

To add or remove a module, update the profile that is used to render a page for the theme.

Read the topics on profiles and modules *Working with profiles* and [Writing modules](../writing_module/index.md).

1.  Open the profile file in the /profiles directory.

2.  Make a copy of the profile file and give your copy a unique name.

3.  Edit the .json file by adding or removing the specific module ID.

4.  Copy the profile that you created to the /profiles directory.

5.  Invalidate the resource aggregator cache to integrate your changes. Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Theme Analyzer**. Then, click **Utilities** \> **Control Center** \> **Invalidate cache**. Auto-invalidation recognizes your changes automatically for WebDAV-based themes. No further action is required. For more information, see [Utilities](../themeopt_analyzer/utilities/index.md).


<!--
-   **[Adding or removing a capability from a portlet](../dev-theme/themeopt_add_cap_portlet.md)**  
To add or remove a capability from a portlet, update the portlet.xml for the portlet, or update the portlet preferences sections for the portlet definition or portlet entity with XML access.---->

## HCLSoftware U learning materials

To learn how to further develop WebDAV-based DX themes, go to the [Theme Development lesson in the HCL Digital Experience for Developers (Intermediate) course](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3462){target="_blank"}. You can try it out using the [Theme Development Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Theme_Development.pdf){target="_blank"} and corresponding [Theme Development Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Theme_Development_Lab_Resources.zip){target="_blank”}.

???+ info "Related information"
    - [Standard portal pages and mobile devices](../../responsive_web_design/rwd_legacypages.md)
    - [Resource bundles to support a Portal based custom theme](../../../../deployment/manage/portal_admin_tools/language_support/supporting_new_language/adding_resource_bundles_for_new_lang/adsuplang_add_rsrc_bndl_cstm.md)
    - [Embedding the HCL Digital Experience 8.5 site toolbar dynamically without a dynamic content spot](../../../../deployment/manage/migrate/next_steps/enable_func_migrated_portal/enable_func_migrated_themes/add_85_toolbar/themeopt_cust_toolbar_dynamic_embedding.md)
