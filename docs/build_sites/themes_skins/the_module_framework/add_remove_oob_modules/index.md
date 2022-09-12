# Adding or removing a module from a profile

To add or remove a module, update the profile that is used to render a page for the theme.

Read the topics on profiles and modules *Working with profiles* and *Writing modules*.

1.  Open the profile file in the /profiles directory.

2.  Make a copy of the profile file and give your copy a unique name.

3.  Edit the .json file by adding or removing the specific module ID.

4.  Copy the profile that you created to the /profiles directory.

5.  Invalidate the resource aggregator cache to integrate your changes. Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Theme Analyzer**. Then, click **Utilities** \> **Control Center** \> **Invalidate cache**. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](../themeopt_analyzer/utilities/index.md).


<!--
-   **[Adding or removing a capability from a portlet](../dev-theme/themeopt_add_cap_portlet.md)**  
To add or remove a capability from a portlet, update the portlet.xml for the portlet, or update the portlet preferences sections for the portlet definition or portlet entity with XML access.


**Related information**  

[Standard portal pages and mobile devices](../rwd/rwd_legacypages.md)

[Resource bundles to support a Portal based custom theme](../admin-system/adsuplang_add_rsrc_bndl_cstm.md)

[Embedding the HCL Portal 8.5 site toolbar dynamically without a dynamic content spot](../dev-theme/themeopt_cust_toolbar_dynamic_embedding.md) -->

