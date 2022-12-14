# Adding sample content with the site toolbar

The sample content that is provided with the portal includes four pre-configured content items that you can add to a page from the site toolbar. Dragging one of these items into a page automatically creates a copy of the item and adds the copy to the page. The predefined content items are available in the site toolbar in the Web Content category of the Create Content tab.

-   The Article presents a simple article that is composed of a title, a short description, and a rich-text body. The default presentation template that is used to render individual articles includes the following elements:
    -   Lightweight inline widgets to support tagging and rating
    -   Extra site analytics data that is added to the generated markup
-   The List of Articles presents a list of all articles that exist in the context of the current page. The viewer also enables users to create articles.
-   The Rich Text presents a simple rich text element.
-   The Image presents a simple image.

1.  To use these sample web content viewers, complete the following steps:
2.  Go to the page where you want to add the viewers.

3.  Edit the page, and select the **Create** \> **Content** tab of the site toolbar.

4.  Click **Web Content**. Now the **Create** \> **Content** tab shows the Article, List of Articles, Rich Text, and Image content items.

5.  Add the content items to your page by clicking the plus sign \(`+`\) or dragging the items onto the page. You can also adjust the arrangement of the portlets.

6.  Click **Save & Exit**.


When you add one of these content items to a page, new content is created. The content item is copied into the site area that is specified by the default content association of the page. A web content viewer instance is added to the page and automatically adjusted to reference the copied content item.

To help you better understand what these components are doing, here is a more detailed look.

-   **Article**

    When added to a page, the Article renders a sample article from a web content library. The article also includes Edit and Delete icons to modify the article content or to delete the article from the web content library.

    The **drag and drop** configuration that is mapped to the Article content item defines the preferences for the corresponding content viewer portlet. It has the following features:

    -   The viewer uses a customized portlet title \(`Article`\) instead of the default title to provide contextual information about the content that is rendered by the viewer. When you are assembling pages and adding web content viewers, taking advantage of details like customized titles is important for orienting users.
    -   To ensure that the content item to be rendered can be passed in by other viewers, the viewer is configured to receive links with the setting **Other portlet and this portlet**. For example, if you click a link in an instance of the List of Articles viewer on the same page, this viewer renders the linked content.
    -   The Article viewer also defines preferences that enable the generation of extra metadata for the page, which is based on the currently rendered article instance. This metadata includes description, keywords, and author.
    -   The default presentation template that is used to render articles \(`Web Content Templates 3.0/Article`\) includes an authoring tools component. The component enables users to modify the content of individual articles with inline editing. The authoring tools component is hidden automatically when the page is not in edit mode.
-   **List of Articles**

    When added to a page, the List of Articles renders a list of sample articles from a web content library. It references a menu in web content manager that renders a list of all articles that are associated with the current page. The content also includes a button to create an article. The **drag and drop** configuration that is mapped to the List of Articles content item defines the preferences for the corresponding content viewer portlet. It has the following features:

    -   The List of Articles viewer does not contribute page metadata or a page title. This behavior occurs because the viewer renders a list of items instead of specific content that would determine the semantic content of the page.
    -   Because the viewer is rendering a list of items, the viewer is not listening to links that are broadcast from other portlets.
    -   The default presentation template that is used to render lists of articles \(`Web Content Templates 3.0/List of Article`\) includes an authoring tools component. The component enables users to create an article with inline editing. The authoring tools component is hidden automatically when the page is not in edit mode.
    -   The viewer is configured to broadcast links with the **Dynamically select a web content page** setting. This configuration results in the List of Articles viewer to determine the content that is rendered by other viewers on the same page, such as the Articles viewer.
-   **Rich Text**

    The Rich Text content item consists of a name, which is not rendered by default, and a rich text body. The default presentation template that is used to render rich text \(`Web Content Templates 3.0/Rich Text`\) includes an authoring tools component. The component enables users to modify the content of the rich text item with inline editing. The authoring tools component is hidden automatically when the page is not in edit mode.

-   **Image**

    The Image viewer content item consists of a name, which is not rendered by default, and a reference to an image. The default presentation template that is used to render images \(`Web Content Templates 3.0/Image`\) includes an authoring tools component. The component enables users to modify the image reference with inline editing. The authoring tools component is hidden automatically when the page is not in edit mode.



???+ info "Related information"
    - [Creating a web content page](../../displaying_content/mp_wcm_createpage.md)

