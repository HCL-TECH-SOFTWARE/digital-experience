# Theme components and resources

You can quickly create a new theme based on an existing template when you use the Theme Development Tools. The Simple Theme and the Portal 8.5 Theme are available for immediate use.

A theme consists of three types of resources:

-   **Static resources**

    Static theme resources include the theme.html file, layout templates, skins, JavaScript, CSS, and image files. The resources are stored by default within WebDAV, which is accessible with any WebDAV client. Learn more about [WebDAV client](../../../manage_content/wcm/wcm_content_delivery/webdav/administer_webdav/index.md) here.

-   **Dynamic resources**

    Dynamic theme resources are stored in a WAR file. Only the default dynamic content spots for the theme, which are JSP files, and the Default.jsp file that renders the theme are stored in the dynamic theme resources. Because you can create and add new custom dynamic content spots without modifying the dynamic resources, you are unlikely to need to change this file. Learn more about [Creating custom dynamic content spots](../customizing_theme/dynamic_content_spots/themeopt_themedev_create_dynamic_content_spots.md).

-   **Theme definition**

    The theme definition registers the theme with the HCL Portal database. The theme must be registered before Portal can recognize it, even if other parts, such as WebDAV or WAR files, are deployed.


When you create a new theme, the system duplicates the static resources and the theme definition. The new theme still connects to the dynamic resources WAR file of the template. You can use the dynamic content spots from the template, or you can create and add your own custom dynamic content spots. The dynamic content spots of the Simple Theme were designed for reusability. Learn more about [Dynamic content spots](../customizing_theme/dynamic_content_spots/index.md).


