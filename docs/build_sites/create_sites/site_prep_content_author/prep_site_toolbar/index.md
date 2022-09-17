# Preparing the site toolbar

The site toolbar enables content authors to work with content from the website instead of using the authoring portlet. Customize the site toolbars to improve the authoring experience for content authors.

In the authoring environment, content authors use the site toolbar to access and add content and applications to pages. Content authors can also create and manage pages by using the site toolbar.

Site toolbar customization includes the following options:

-   Adding content
-   Adding applications

The HCL Portal 8.5 site toolbar is built with portal pages and portlets. The available toolbar tabs are implemented as portal pages, which are content labels or content pages, that are grouped under the toolbar content root. All content pages and content labels that are children of the toolbar content root show up in the toolbar navigation as toolbar tabs.

By default, the toolbar content root has the unique name ibm.portal.toolbar.ContentRoot and can be found under the hidden pages root unique name ibm.portal.HiddenPages.

The toolbar navigation supports two levels only. Content pages or labels that are appended to an existing toolbar sub tab does not show up in the toolbar navigation.

To extend the site toolbar with custom toolbar tabs, you can perform the following tasks:

-   Create a toolbar first-level tab by appending a content page or content label to the toolbar content root.
-   Create a toolbar sub tab by appending a content page to one of the existing first-level tabs or to a custom first-level tab.

You can influence the order of the toolbar tabs by setting ordinals on the toolbar content nodes. Use the theme that is set on the toolbar content root. To enable intercommunication with the main page, you must set the page parameter `ibm.portal.toolbar.isToolbarPage = true` for your custom toolbar content pages and content labels.

!!! note
    As this parameter is already set on the Toolbar Content Root parent node, the new page or label inherits it. Therefore, you cannot set it as a new parameter. You need to edit the existing parameter and overwrite the inherited value of `true` explicitly with the value `true`. Then, you can view the new page or label on the toolbar side navigation.

To use the XML configuration interface for creating and managing your toolbar tabs, set this parameter as follows:

```
<parameter name="ibm.portal.toolbar.isToolbarPage" type="string"
update="set"><![CDATA[true]]&gt;</parameter>
```

For performance reasons, this parameter must be set on every toolbar content node. If it is not set, the toolbar tab does not have access to the context of the main page.

You can now start to add content to your toolbar. Add a portlet to the content page that your toolbar tab represents. For more information, see *Implementing portlets for the site toolbar*.

The feed that displays all portlets is cached after it is displayed. If you deploy a portlet after you view the portlets on the toolbar, the newly deployed portlet is not visible until the cache expires. The cache expires after one hour. Alternatively, you can look up the portlet in **Manage Portlets** and then go back to the toolbar.

## HTML 5 considerations

All of the drag-and-drop actions are based on the native HTML 5 drag-and-drop capability. The content items that are displayed in the toolbar, for example in the Page Components palette or the Applications palette, are marked as draggable in terms of HTML 5.

The Search controls that are displayed on some toolbar tabs, use the auto-completion capability of HTML 5. Internally it is based on the HTML 5 `<datalist>` tag. As a consequence, you might see different search result suggestions, depending on the browser that you use. Internet Explorer version 9 does not support the HTML 5 auto completion feature.

<!---
-   **[Configuring the behavior of toolbar tabs](../admin-system/epc_adding_custom_source.sm.md)**  
You can use the following page parameters to configure the main properties of your toolbar tabs.
-   **[Configuring display options in the primary and secondary toolbar frames](../dev-theme/themeopt_toolbar_frames.md)**  
When you open the site toolbar, Site Manager automatically opens in the primary toolbar frame. You can control what displays in the primary and secondary toolbar frames by setting page parameters on the hidden page Toolbar Content Root.
-   **[Disabling the toolbar logo](../dev-theme/disable_toolbar_logo.md)**  
You can disable the toolbar logo for the entire portal that includes all the virtual portals or for a specific virtual portal.
-   **[Implementing portlets for the site toolbar](../admin-system/epc_adding_custom_other_content.md)**  
The toolbar tabs of the Portal 8.5 site toolbar are represented as portal pages. The content of the toolbar tabs can be implemented by using portlets.
-   **[Customizing the More menu of the action bar](../admin-system/epc_custom_more_menu.md)**  
The More menu is a public extension point that you can use to plug in your own menu actions that you want to make available in the action bar.
-   **[Customizing the Page Component palette](../admin-system/epc_custom_add_site_toolbar.md)**  
The Page Component palette, which is accessed from the site toolbar, contains the content items a content author can add to a page. This was known as the Content palette prior to CF08.
-   **[Customizing the Applications palette](../admin-system/epc_app_categories.md)**  
HCL Portal includes ready to use portlets that you can browse through in the site toolbar. To ease browsing through this set of portlets, HCL Portal supports assigning portlets to one or more categories. As the site administrator, you can create, delete, and modify categories and assign portlets to them.
-   **[Customizing page creation and page editing options](../admin-system/epc_custom_page_tab.md)**  
When content authors edit a page, they can choose layouts and styles. As an administrator, you can customize these page editing options. If you are on Combined Cumulative Fix 8 or later, you can also customize page creation for your content authors.
-   **[Customizing toolbar layouts](../admin-system/layout_toolbar_customization.md)**  
The toolbar layouts can be customized by adding theme metadata to the theme deployment file.
-   **[Customizing site manager User Interface](../admin-system/Customize_Site_Manager_User_Interface.md)**  
The site manager user interface can be customized by adding additional functionality.
-   **[Controlling the visibility of the site toolbar and toolbar tabs](../admin-system/cntrl_vsblty_ste_tlbr.md)**  
You can control the visibility of the site toolbar and single toolbar tabs per virtual portal by using Portal Access Control.
-   **[Removing the site toolbar on a production server](../wcm/wcm_mngpages_disabletool.md)**  
The site toolbar provides access to editing features for managed pages, including adding and editing pages and web content. Although essential for an authoring server, it is recommended that you disable the site toolbar on a delivery server. You can disable the toolbar for an entire portal or for specific virtual portals.
-   **[Disabling the language switcher](../wcm/wcm_mngpages_disable_lang_switch.md)**  
The language switcher allows you to switch from any of the supported languages. This feature is available only for authenticated portal users. --->


???+ info "Related information"
    -   [Enabler ContextMenu API](http://public.dhe.ibm.com/software/dw/lotus/mashups/javadoc30/API/api/com/ibm/mashups/builder/model/ContextMenu.html)

