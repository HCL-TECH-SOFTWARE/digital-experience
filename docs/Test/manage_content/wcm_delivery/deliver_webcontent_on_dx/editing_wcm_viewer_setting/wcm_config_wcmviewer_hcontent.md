# Content settings

Use the Content settings for the web content viewer to specify which content from your web content library to display in the viewer.

!!! note
    If no content is selected in the viewer configuration, the viewer renders the content that is specified by the web content association on the page that contains the viewer. To add or change web content associations for a page, edit the web content settings in the **Page General** tab of the site toolbar.

!!! important
    Only published content can be displayed with the web content viewer. Draft content cannot be displayed and cannot be selected when you configure a web content viewer.

## Fields

-   **Content Behavior**

    You can reference content with the following methods:

    -   **Select content and path**

        This setting directly references content. You can specify the content that the Web Content Viewer displays. If you select this option but do not specify the content, the Web Content Viewer uses the default content association of the portal page to determine the content.

    -   **Select content and use the content association of current page**

        This setting causes the viewer to construct the path to referenced content relative to the web content association for the page that contains the viewer. If no content association is defined for the page, this option is not available.

    -   **Use rule to select content**

        Use this option to display different content to different user segments. To configure the Targeted Content, use the **Configure Spot** menu of the Web Content Viewer.

-   **When this portlet is added to a page**

    When the viewer renders content, you can specify that the viewer references existing content or that the viewer creates content and renders the new content. This field is available only in the **Configure** mode of the viewer and cannot be used when you reference components.

    -   **Display existing content**

        This setting causes the viewer to render existing content, as defined by the content path in the **Content** field.

    -   **Create content \(based on selection\)**

        This setting creates a copy of the content that is referenced in the **Content** field and then renders the new content in the viewer. When you use this option with a template page, the content that is referenced by the template is copied when a new page is created from the template. The content is copied under the specified site area, which is automatically defined as a content association on the new page.

-   **Content**

    This setting identifies the path to the rendered content. The path is composed of two parts:

    -   The web content library that contains the content
    -   The site area hierarchy where the content is located
    You can specify the path to the content by editing the setting. If you do not explicitly select content, the site area that is identified by the web content association of the page is used to locate the content.

    When you are rendering a component, the content item that is selected here gives the component a context. For example, you might select a content item called "news" as the context for a navigator. In this case, when the page is first opened, the navigator behaves as if "news" is the current content item.

-   **Appearance**

    This setting identifies what the rendered content looks like. You can select from the following options:

    -   **Default Presentation**

        This option renders the content item with its default presentation template.

    -   **Summary Presentation**

        This option renders the content item with its summary presentation template. The summary presentation template can be specified in the content template.

    -   **Specified Presentation**

        This option renders the content item with an alternative presentation template. Specify the presentation template in the **Specified Presentation** field.

    -   **Component**

        This option renders the component that is specified in the **Component** field. The component is rendered in the context of the current content item.

    -   **Element**

        This option renders the element that is specified in the **Element** field.

    When you select an appearance, only the fields that are related to the selected appearance are displayed.

-   **Component**

    This setting identifies the component to be rendered by the viewer when the content item is rendered with the **Component** appearance option.

-   **Element**

    This setting identifies the element in the selected content to be rendered by the viewer when the content item is rendered with the **Element** appearance option. To use this option, there must be an element in the content item that is referenced by the **Content** field.

-   **Specified Presentation Template**

    This setting identifies an alternative presentation template to use when the content item is rendered with the **Specified Presentation** appearance option. If no alternative presentation is selected, the content item is rendered with the default presentation template.


## Page context

If the current page has an active page context, the configured content item or element is not visible if the portlet is configured to receive links from other portlets. A page context always exists when a portlet broadcasts a content item to the page previously. You can delete an active page context by clicking **Clear page context**.

## Locked settings

You can lock settings in the **Configure** mode of the viewer. When a setting is locked, a lock icon is displayed in the **Edit Shared Settings** mode of the viewer, and no **Edit** link is available.

## Content paths and unique IDs

When you configure the viewer, content paths are represented as readable paths that include the library and site areas that contain the content. However, in the viewer configuration, the location of a content item is typically stored as the unique ID of the item. The use of the unique ID is helpful because the viewer can still render the content even if the item is renamed or moved.

If you configure the viewer with the XML configuration interface \(xmlaccess\), you have the option of specifying content location with the content path instead of the unique ID. With the content path, you do not have to determine the unique ID of the content item. But if the content item is moved or renamed later, the viewer can no longer render the content.

If a viewer is configured to use content paths, a path icon \(![Path icon](../../../../images/wcmviewer_path.jpg)\) is displayed after the title path. If you change the configuration to reference different content, the location of the new content item continues to be stored as a content path. If you want to store the location as a unique ID instead, you must click **Clear** before you select the new content. The path icon is also removed to indicate that the content path is no longer being used.

???+ info "Related information"
    - [Configure your content spot](../../../../build_sites/create_sites/content_spot/index.md)
    - [Web content associations](../../deliver_webcontent_on_dx/getting_started/wcm_delivery_contentmap_about.md)
