# Creating web content page templates

Create web content page templates to quickly deploy new pages that contain web content. With a template, you can define the layout and presentation of the page, including adding web content viewers that are configured to render web content.

When a page is created from the template, the site structure that is required in the web content library is also created automatically. For example, if managed pages are enabled, a site area that corresponds to the page hierarchy is created in the Portal Site library. If managed pages are disabled, a site area is created as a child of the site area that is associated with the parent page of the new page. You can access the resulting site structure in the Web Content Manager authoring portlet.

1.  Using the administration interface, browse to the page templates location.

    You can access this location from either of the following paths:

    -   Click **Portal User Interface** \> **Page Templates**.

        !!! note
            This path uses the site toolbar that is included with the Portal 8.0 theme.

    -   Click **Portal User Interface** \> **Manage Pages** \> **Content Root** \> **Hidden Pages** \> **Page Templates**.
2.  Create a page.

    When you create the page, use the **Basic** template and then define a content association for the page. The content that is contained in the mapped site area is copied to any page that is created by using the page template.

3.  Edit the layout of the page and add any web content viewers or other portlets that you want to include in the template.

    If you add a viewer that is intended to render content that is copied when the page is created, then configure the viewer:

    1.  Select **Edit Shared Settings**.
    2.  Select **Select content and use the content association of current page** from the **Content behavior** section. This setting causes the viewer to reference content from the site area that is defined in the content association on the page that contains the viewer.

        !!! note
            If you did not add a content association to the page template, this option is not available.


After you create the template page, the new template is displayed in the list of available templates when you create a page.


