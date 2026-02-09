# Web content tags

Use HCL Web Content Manager tags to reference elements within presentation templates and element designs. You use tags to reference elements within presentation templates and element designs.

To create a web content tag, click **Insert Tag** from a rich text editor, a presentation template, or an element design field. The Tag Helper dialog opens.

A full list of web content tags and their parameters are documented here:

- **[Alternate Design tag](wcm_dev_referencing_components_alternate-design.md)**  
Use an alternate design (`alternatedesign`) tag to render different components based on an item's relationship to the current navigation path. This is commonly used in menus and navigators to apply unique styling to the active or selected item.
- **[Attribute Resource tag](wcm_dev_referencing_attribute_resource.md)**  
Use the Attribute resource (`attributeResource`) tag to define the information returned by a search query.
- **[Component tag](wcm_dev_referencing_components.md)**  
Use the `Component` tag to reference the content of a component within a presentation template or element design.
- **[Content tag](wcm_dev_tag_content.md)**  
Use the `Content` tag to render a content item or site area.
- **[Editable Element tag](wcm_dev_referencing_elements_edit.md)**  
Use the Editable Element (`EditableElement`) tag to make elements from content items and site areas editable when rendered by using a web content viewer portlet when the page is in edit mode.
- **[Editable Property tag](wcm_dev_item-details_property_edit.md)**  
Use the Editable Property (`EditableProperty`) tag to enable inline editing for content fields and metadata. When the portal page is in Edit Mode, these properties become directly editable within the Web Content Viewer portlet.
- **[Element tag](wcm_dev_referencing_elements.md)**  
Use the `Element` tag to reference an element within a presentation template or element design.
- **[If Defined tag](wcm_dev_tag_ifdefined.md)**  
Use the If Defined (`IfDefined`) tag to render specific markup or content only when a field contains a value. This prevents empty HTML elements or labels from appearing if an element on a content item or site area is blank.
- **[If Edit Mode tag](wcm_dev_tag_ifeditmode.md)**  
Use If Edit Mode (`IfEditMode`) tag to render content in a web content viewer portlet only when a page is in edit mode. You can use this tag to display text, fields, and elements in edit mode that are not required to be displayed when the page is in view mode.
- **[If Not Defined tag](wcm_dev_tag_ifnotdefined.md)**  
Use the If Not Defined (`IfNotDefined`) tag to render fallback markup or default content when a specific element is empty. This is useful for displaying placeholder text or generic images if a field on a content item or site area does not contain a value.
- **[If Not Edit Mode tag](wcm_dev_tag_ifnoteditmode.md)**  
Use the If Not Edit Mode (`IfNotEditMode`) tag to render content in a web content viewer portlet only when a page is in view mode. You can use this tag to display text, fields, and elements in view mode that are not required to be displayed when the page is in edit mode.
- **[In Context tag](wcm_dev_tag_incontext.md)**  
Use the In Context (`InContext`) tag to render a tag body within a specified rendering context. You can specify the new rendering context as a predefined context using a UUID or path.
- **[Indent Component tag](wcm_dev_elements_indents.md)**  
Use the Indent Component (`IndentCmpnt`) tag to format element designs that require results to be indented.
- **[Page Information tag](wcm_dev_elements_page-navigation_tag.md)**  
Use the Page Information (`PageInfo`) tag to display page navigation details in the design of a page navigation element.
- **[Path Component tag](wcm_dev_item-details_path.md)**  
Use the Path Component (`pathcmpnt`) tag to display certain parts of the URL such as the servlet path, the base path, or the context path of the current page. You can add this tag to presentation templates, element designs, and component designs.
- **[Placeholder tag](wcm_dev_elements_placeholder.md)**  
Use the `placeholder` tag to display metadata within an element or component design.
- **[Plug-in tag](../creating_plugin_tag/index.md)**  
Use the plug-in (`plugin`) tag to reference rendering plug-ins. You can select preinstalled rendering plug-ins or your own custom plug-ins.
- **[Property tag](wcm_dev_item-details_property.md)**  
Use the `Property` tag display various fields and metadata from content items and site areas.
- **[Style element tag](wcm_dev_referencing_components_style-sheet.md)**  
Use the style element (`StyleElement`) tag to reference the default style sheet component defined in an authoring template. You can also use it to reference style sheets linked in a site area or content item through a component reference.
- **[URL Component tag](wcm_dev_item-details_url.md)**  
Use the URL Component (`URLCmpnt`) to generate a URL to a site area or content item.

## HCLSoftware U learning materials

To learn how to get started with the development aspects of HCL Digital Experience (DX) Web Content, go to the [Web Content Development lesson in the HCL Digital Experience for Developers (Beginners)](https://hclsoftwareu.hcl-software.com/component/axs/?view=sso_config&id=4&forward=https%3A%2F%2Fhclsoftwareu.hcl-software.com%2Fcourses%2Flesson%2F%3Fid%3D414 ){target="_blank"} course. You can try it out using the [Web Content Development Lab](https://hclsoftwareu.hcl-software.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Web_Content_Development.pdf){target="_blank"} and corresponding [Web Content Development Lab Resources](https://hclsoftwareu.hcl-software.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Web_Content_Development_Lab_Resources.zip){target="_blank"}.

To learn more details on how to develop with HCL Digital Experience (DX) Web Content, go to the [Web Content Development lesson in the HCL Digital Experience for Developers (Intermediate)](https://hclsoftwareu.hcl-software.com/component/axs/?view=sso_config&id=4&forward=https%3A%2F%2Fhclsoftwareu.hcl-software.com%2Fcourses%2Flesson%2F%3Fid%3D3500){target="_blank"} course. You can try it out using the [Web Content Development Lab](https://hclsoftwareu.hcl-software.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development.pdf){target="_blank"} and corresponding [Web Content Development Lab Resources](https://hclsoftwareu.hcl-software.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development_Lab_Resources.zip){target="_blank"}.

???+ info "Related information"
    - [Digital Data Connector profiles for social rendering](../../../../../../build_sites/social_rendering/customizing_view_definitions/customizing_visualdesign/customizing_markup_gen/ddc_profiles_for_social_rend/index.md)
    - [Page layout](../../../../../../build_sites/create_sites/adding_pages_content_more/editing_page_settings/page_layout/index.md)
    - [How to define authoring tools](../../elements/authoringtools_element/authoring_tools_cmpnt/wcm_dev_elements_authoring-tools_examples.md)
    - [Entering HTML](../../elements/html_element/wcm_dev_elements_html_props.md)
    - [Defining menu element formatting options](../../elements/menu_element/wcm_dev_elements_menu_format.md)
    - [Defining navigator element design options](../../elements/navigator_element/wcm_dev_elements_navigator_using.md)
    - [Defining a page navigator](../../elements/page_nav_element/wcm_dev_elements_page-navigation_props.md)
    - [Defining a Personalization rule](../../elements/pzn_element/wcm_dev_elements_pzn_props.md)
    - [Using the rich text element](../../elements/richtext_element/wcm_dev_elements_rich-text_props.md)
    - [Creating a search results design](../../elements/search_element/wcm_dev_elements_search_props.md)
    - [Defining taxonomy component properties](../../elements/taxonomy_element/wcm_dev_elements_taxonomy_props.md)
    - [Define component designs for different users](../../elements/username_element/wcm_dev_elements_username_props.md)
    - [Indenting element designs](wcm_dev_elements_indents.md)
