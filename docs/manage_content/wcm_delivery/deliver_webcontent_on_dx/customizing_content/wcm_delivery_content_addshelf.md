# Creating web content when you add a web content viewer to a page

To make it easier for users to find web content, the site toolbar provides palettes. You use these palettes to organize components that you can add, such as portlets, iWidgets, and web content.

By default, the Content palette includes four sample content items. You can add your own content to the Content palette. For more details about how to do so, read *Customizing the Page Component palette*.

To add web content, you can use the preferred drag-and-drop configurations. You can also configure individual copies of the Web Content Viewer portlet to copy web content when you add these portlet copies to a page. Copies of the web content viewer appear in the Applications palette of the site toolbar.

To include a web content item in the Applications palette of the site toolbar, follow the procedure that is given here.

1.  Make a copy of the portlet called Web Content Viewer.

    To do so, use the portal administration interface. Give the copy a name that indicates the content item that the viewer represents.

2.  Add the new web content viewer to a page.

    You need this page only temporarily to provide a way of configuring the web content viewer.

3.  Open the **Configure** mode for the portlet.

4.  From the **Content Type** section, select the content item that you want to add.

5.  From the **Content Behavior** section, select **Select content and path**.

6.  From the section that is named **When this Portlet is added to the page**, select **Create content \(based on selection\)**.

    !!! note
        You cannot add portlets that use this setting to a page that does not have a default content association.

7.  In the **Content** section, specify the content item or site area that this web content viewer represents.


After you complete these steps, the copy of the web content viewer that represents your web content is displayed in the Applications palette of the site toolbar. Whenever you add this portlet copy to a page, the associated content item or site area is copied into the site area that is associated to the page by the default content association.

!!! note
    For the XML configuration interface, create the copies of the web content viewer, you can also use the portal XML configuration interface. To specify the behavior of the setting Create content \(based on selection\) by using with the XML configuration interface, specify the following portlet preference in the XML import file:

-   **Preference:**

    `com.ibm.portal.wcm.copy.contents`

-   **Value:**

    `true`


You can also specify the target site area that you want to be used when the portal copies the web content. To define a target site area, use the following portlet preference in the XML import file:

-   **Preference:**

    `WCM_COPY_CONTENT_RELATIVE_PATH`

-   **Value:**

    `site_area_name`


When you add the web content viewer that specifies this `WCM_COPY_CONTENT_RELATIVE_PATH` preference to a page, the portal first creates the specified site area under the default content association of the page. Afterward, the portal copies the web content that is associated with the web content viewer to the specified site area rather than to the default content association.


???+ info "Related information:"
    - [Customizing the Page Component palette](../../../../../../build_sites/create_sites/site_prep_content_author/prep_site_toolbar/customizing_page_cmpnt_palette/index.md)

