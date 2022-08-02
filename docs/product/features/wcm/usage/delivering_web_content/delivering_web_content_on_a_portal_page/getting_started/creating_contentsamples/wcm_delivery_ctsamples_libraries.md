# Adding the sample web content libraries in the authoring portlet

The templating sample content that is provided with HCL Digital Experience is delivered in two web content libraries: Template Page Content 3.0 and Web Content Templates 3.0. You can use these libraries and their content as a starting point for working with web content page templates and developing your own templates.

**Note:** If you want to customize the sample web content that HCL Portal provides, create copies of the sample web content libraries and customize those copies.

-   **Web Content Templates 3.0 library**

    This library contains the shared components, authoring templates, and presentation templates that are used by the content items that are contained in the `Template Page Content 3.0` library. The library also contains the sample content items that are used with the "Articles" page template.

-   **Template Page Content 3.0 library**

    This library contains the content items that are used by web content viewer clones that create content when added to a page. These content items represent the base content that is copied when you add content from the **Web Content** category of the site toolbars **Create** \> **Content** tab to a page. Initially, this library contains two content items. The **Article** content item represents a simple article that is created from the "Articles" authoring template in the Web Content Templates 3.0 library. The **List of Articles** content item is an instance of the "List of items" authoring template in the Web Content Templates 3.0 library. The item represents a list of all articles that exist in the context of the currently rendered page.


**Virtual portal note:** If you want to use the sample content with a specific virtual portal, you must syndicate these web content libraries to the virtual portal. If you fail to syndicate these libraries, an error is displayed when you add the sample content to a page.

1.  To work with the sample web content libraries, complete the following steps:
2.  Open the authoring portlet for Web Content Manager by clicking **Applications** \> **Content** \> **Web Content Management**.

3.  In the authoring portlet, click **Preferences** \> **Configure**.

4.  In the **Library Selection** section, add the `Template Page Content 3.0` and `Web Content Templates 3.0` libraries to the list of selected libraries.


**Parent topic:**[Creating content with sample web content template items](../wcm/wcm_delivery_ctsamples_main.md)

