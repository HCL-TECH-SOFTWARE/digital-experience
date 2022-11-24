# Generate author-ready templates

You can generate author-ready templates in Web Content Manager to provide content authors a set of predefined content templates that can be selected from the toolbar and used to add content to a page.

Site developers can quickly generate predefined author-ready pairs of authoring templates and presentation templates for commonly used types of content. Content authors use the predefined content templates to quickly add content to a page.

To generate a new author-ready template:

1.  Open the applications menu and go to **Content** \> **Web Content Authoring** and then click **Generate** \> **Templates**.
2.  Select the type of templates that you want to generate.
3.  Type a **Name** and **Display Title** and select the library to save the authoring template and presentation template under.
4.  Click **OK**.
5.  A pre-mapped authoring template and presentation template are generated under the selected library with the specified name and display title. Edit these templates to match your site requirements.

!!! note
    Users must have sufficient library access rights to create both authoring templates and presentation templates to be able to use the generate templates tool.

## Adding author-ready templates to projects

Author-ready templates can be added to projects in the same way as other web content items, either through the **Web Content Authoring** view, or by using the project toolbar.

Not all items that are generated with author-ready templates are added to the project. For example, the site area that is named **Localizations** is not added to the project because it is shared by all author-ready templates.

## Generated items

These items are created when you generate a new author-ready content template:

-   **Your Library** \> **Authoring Templates** \> **Your content template**

    This content template can be selected in Site Manager to create new content.

-   **Your Library** \> **Presentation Templates** \> **Your presentation template**

    This presentation template stores the code that renders the content items that are created by using your content template.

-   **Your Library** \> **Presentation Templates** \> **Your presentation template Teaser**

    This presentation template stores the code that renders the teaser view for content items that are created by using your content template.

-   **Your Library** \> **Content** \> **Localizations** \> **Your text provider content item**

    This content item is used to store the localized strings that are used by a localized site.

-   **Your Library** \> **Components** \> **Your folder**

    This folder is used to store components that are referenced by your presentation template.

-   **Your Library** \> **Components** \> **Your folder** \> **Styles**

    This component stores the default CSS code for the template type you generated.

-   **Your Library** \> **Components** \> **Your folder** \> **Teaser Styles**

    This component stores the default CSS code for the teaser view of the template type you generated.


## What to do next

-   **Hiding the new authoring template in the toolbar**

    When first created, the content template is visible in the toolbar. To hide the authoring template in the toolbar while it is being customized, add the keyword named ibm.toolbar.hiddenTemplate to the profile section and click **Save**. The content template is then hidden from the toolbar. Delete this keyword and save the authoring template when you are ready to allow content authors to use the new authoring template.

    -   Documentation resource: [Hiding authoring templates from the Site Manager](../../../build_sites/create_sites/site_prep_content_author/custom_site_manager/custom_create_content_view/epc_wcm_hide_authoring_templates.md)

-   **Update the content template:**

    The generated content template is used by content authors to add new content to a page. It is located at **Your Library** \> **Authoring Templates** \> **Your content template**. Edit the content template to assign a workflow, or add or remove elements.

    -   **Select a workflow:**

        Select a workflow to use when a content author creates new content by using this authoring template.

    -   **Add or remove elements:**

        - Each generated authoring template contains a set or predefines elements. You can modify these elements, remove them, or add your own.

        -   Documentation resource: [An overview of authoring templates](../../../build_sites/create_sites/create_reusable_assets/wcm_dev_auth-temp_overview.md) 

        -   Documentation resource: [Creating authoring templates](../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/creating_authoring_templates/index.md)

-   **Update the CSS**

    An HTML component that stores the default CSS used to set design parameters for the rendered content is also generated. It is located at **Your Library** \> **Components** \> **Your folder** \> **Styles component**.

    You can update the CSS in this component, or update the presentation template to reference a different HTML component that contains the CSS used by your site. You can also update the classes used in the presentation template to match those used by your theme. If you choose to use styles not included in the Styles component, it can be deleted.

-   **Update the presentation template:**

    The presentation template contains the HTML used to display the content on a page. Update this HTML to change the design of the rendered content. It is located at **Your Library** \> **Presentation Templates** \> **Your presentation template**.

    If you add or remove elements from the content template, you must update the HTML in the presentation template as well.

    -   Documentation resource: [Presentation templates](../../../build_sites/create_sites/create_reusable_assets/presentation_template/index.md)

    -   Documentation resource: [Creating a presentation template](../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/wcm_dev_pres-temp.md)

-   **Update or removed localizations**

    Update the localization settings to match the locales that are used by your site, or remove localizations if your site isn't localized. This is located at **Your Library** \> **Content** \> **Localizations** \> **Your text provider content item**.

    -   Documentation resource: [How to store translated text in a content item or site area](.././../../manage_content/wcm_development/wcm_dev_storing_translated_text.md)
    
-   **Moving the generated items**

    By default, the items that are generated are created directly under the top-level sections of the library you specified when you generated the new templates. Use the **Move** feature to move these items to your preferred location.

    -   Documentation resource: [Moving a content item](../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/content_items/howto_move_copy_link_items/wcm_dev_content_linking_moving.md)


