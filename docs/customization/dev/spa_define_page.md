# Creating a static page

You can create a new portal page by starting with a static HTML file or an HTML fragment. If you revise the HTML, you can refresh the page to render the changes in the portal.

After you included a page in the portal, you cannot change the page from static content to standard portal layout or from standard portal layout to static content. If you want to change the page type after you created it, you must delete the existing page and create a new page of the required type.

When you use the Manage Pages and Page Properties portlets to create your static page in the portal, you select **Static Content** for the **Type of Page**. Then, select and complete the other options accordingly. For more information, see the portlet help.

-   The static HTML file can contain references to portlets, containers, and navigation. It defines the places in the portal page that host portlets or portlet containers. When the page is rendered, these places are filled by the server with the - possibly dynamic - content of portlet and with a microformat that defines metadata for these portlets.

    For example, portlet actions and the portlet title. For this purpose, the portal provides the following microformats:

    -   The portlet microformat defines portlet windows and portlet actions, such as Edit default settings, Configure, Maximize, Minimize, Personalize, and Delete.
    -   The container microformat defines portlet containers as placeholders for portlets.
    -   For drag-and-drop actions, the portlet microformat can provide the drag source, and the container microformat provides the drop target.
    -   The navigation microformat defines the navigation if your static page is rendered as a web page.
    The portlet window and portlet container microformats can contain object IDs. The server can handle these object IDs dynamically.

    When you write the static page, you can use CSS or JavaScript techniques that use the microformats to produce and render a user friendly user interface.

-   You can define whether the static page is rendered as a web page or as part of a portal page:

    -   To render the page as a stand-alone static page, include the `<html>` element as a root element in the markup file.
    -   To render the page as part of a portal page, omit the `<html>` element.
-   You can also include other resources as part of the page, such as cascading style sheets or graphic images. You must bundle all the files into a compressed file. This single compressed file is then used to create or update the static page.

-   You can use portal frameworks such as Live Text with your static pages. To achieve this, include your static page as part of a dynamic portal page when you add the static page to your portal in a later step.

-   To enable globalization, that is to represent your static page in different languages or locales, you bundle localized static markup files into a compressed file.

    For example, these can be HTML files, graphic files, such as JPGs, style sheets such as CSS or JS files.

    Observe the following naming convention for your localized files: For a base file `base\_file\_name.file\_name\_extension`, you must name the localized version of the file `base_file_name_locale.file_name_extension`. Example: For a base file named `my_page.html`, the English version of the file is `my_page_en.html`, and the US English version of the file is `my_page_en_us.html`. Although these files have different file names, they logically represent the same resource and are referenced by references to their base name. The portal serves the localized version of the resource when appropriate.

-   To enable device support, which represents your static page for different device classes, bundle the static markup files that are device-class-specific into a compressed file.

    Observe the following naming conventions for your device-specific files:

    -   **For a base file base\_file\_name.file\_name\_extension**

        Name the device-specific version of the file base\_file\_name\_device.file\_name\_extension. For example, for a base file named my\_page.html, the smartphone-specific version of the file is my\_page\_smartphone.html, and the tablet-specific version of the file is my\_page\_tablet.html. Although these files have different file names, they logically represent the same resource and are referenced by references to their base name. The portal serves the device-specific version of the resource when appropriate.

    -   **For localized, device-specific files**

        For a base file named my\_page.html, the smartphone-specific English version of the file is my\_page\_smartphone\_en.html, and the smartphone-specific US English version of the file is my\_page\_tablet\_en\_us.html.

    These naming conventions also apply for the definition of static portal pages in HTML.


To update a static page, you make the required changes in the HTML file, then you replace the portal page with the updated page by using the Manage Pages and Properties portlets or other portal administration tools. If the static page contains portlet containers that are defined by the portlet container microformat, you can use the portal Page Customizer to update static page layout .

**Note:** When you use only characters that can be encoded in ASCII in the names of the compressed file and the directories and files within the compressed file, you can use a compressed tool of your choice to create the file package. If you use characters that are not ASCII encoded, for example special characters or DBCS, in the names of the compressed file and the directories and files within the compressed file, you must create the compressed file by using the JRE tool `jar.exe`.

-   **[Example HTML markup for defining a portal page](../dev/spa_html_xmpl.md)**  
Use these code samples as examples of HTML markup to create a portal page.
-   **[Class attributes for portlets on static pages](../dev/spa_plt_mcrfrmt.md)**  
 When you place a portlet on a static HTML page to be rendered by the portal, use a suitable CSS file to format the portlet. The CSS file makes use of the portlet microformat. You can make use of this microformat if you want to render portlets on your static HTML page with a skin of your choice. When you write the static page, you can use CSS or JavaScript techniques to convert the microformat into a friendly user interface. The portlet references in the static HTML page are replaced by the content of the portlet and the portlet microformat.
-   **[Class attributes for a portlet container on static pages](../dev/spa_contnr_mcrfrmt.md)**  
To render a portlet container on a static page, you use a CSS file that makes use of the container microformat. One of the benefits is that users with the required access rights can later move the portlets by drag and drop.
-   **[Class attributes for components on static pages](../dev/spa_compnt_mcrfrmt.md)**  
 When you place a component on a static HTML page to be rendered by the portal, use a suitable CSS file to format the portlet. The CSS file uses the component microformat. You can use this microformat if you want to render components on your static HTML page with a skin of your choice. When you write the static page, you can use CSS or JavaScript techniques to convert the microformat into a friendly user interface. The component references in the static HTML page are replaced by the content of the component and the component microformat.
-   **[Navigation options for static pages](../dev/spa_nav_mcrfrmt.md)**  
You can provide navigation for your static pages by using either the portal theme or by making use of the navigation microformat.
-   **[Portlets for adding dynamic elements to static pages](../dev/spa_portlets.md)**  
If you want to add dynamic elements such as portal navigation to your static pages, you can use portlets that the portal provides.

**Parent topic:**[Static content](../site/site_static_content.md)

