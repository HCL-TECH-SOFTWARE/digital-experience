# Portlet settings


The **Portlet Settings** section defines extra settings for the web content viewer, such as the title of the portlet to display or whether the markup of the web content viewer is cached in the portlet fragment cache.

## Portlet Display Title

You can set the portlet title that is displayed for the web content viewer as part of the portlet window for this instance of the portlet.

-   Select **Use default title** to display the title that was set for the portlet in the portal administration.
-   Select **Set the following title**, and enter a portlet title to be used for all languages. If you leave the input field empty, the default title is used. To explicitly set the title to be empty, you must enter a blank.
-   Select **Select from resource bundle**, and enter the fully qualified name of the Java™ resource bundle that is used to set the title, depending on the user's language \(for example, `com.mycompany.myapplication.myresourcebundlename`\).

    The structure of the resource bundle must follow the specification that is defined by the Java `java.lang.ResourceBundle` class. The key that is used to look up the title in the resource bundle is `javax.portlet.title`.

    The resource bundle must be in a directory that is part of the class path of the web content viewer. Create a new shared library that contains the custom resource bundle files with the WebSphere® Application Server administrative console. Creating a new shared library that contains the resource bundle allows a clean separation of the custom resource bundle code from the base HCL Portal code. When the shared library is created, you need to add it to the class path of HCL Portal application server class loader.

-   Select **Select from content** to use the value of the **Display title** field for the content item that is displayed by the portlet.

    !!! note
        If the web content viewer renders a site area, the title that is used is the display title of the site area itself and not the title of the default content of the site area.

-   Select **Select from element**, and enter the name of an element of the content item that the rendering portlet displays. The rendering portlet then uses the value of the element to set the title. The element must be of type `Text` or `Short Text`. If it has a different type or does not exist for the content item that the rendering portlet displays, the rendering portlet uses the default title of the portlet.

## Page Display Title

You can set the page title that is part of the page header and that is normally displayed by the browser window title bar. If more than one portlet on the same page tries to set the page title, only one of these titles is used for the browser window title bar.

!!! note
    It is good practice to determine for only one portlet on the page to set the page display title to something different than the **Use default title** option. Preferably, use the portlet that contributes the main content on the page.

-   Select **Use default title** to display the title that was set for the page in the administration portlet **Manage Pages**. Note that a setting that is different from the **Use default title** option means that this portlet tries to set the HTTP page title tag.
-   Select **Set the following title**, and enter a page title to be used for all languages. If you leave the input field empty, the default title is used. To explicitly set the title to be empty, you must enter a blank.
-   Select **Select from resource bundle**, and enter the fully qualified name of the Java resource bundle that is used to set the page title, depending on the user's language \(for example, `com.mycompany.myapplication.myresourcebundlename`\).

    The structure of the resource bundle must follow the specification that is defined by the Java `java.lang.ResourceBundle` class. The key that is used to look up the title in the resource bundle is `com.ibm.portal.page.title`.

    The resource bundle must be in a directory that is part of the class path of the web content viewer. Create a new shared library that contains the custom resource bundle files with the WebSphere Application Server administrative console. Creating a new shared library that contains the resource bundle allows a clean separation of the custom resource bundle code from the base HCL Portal code. After a shared library is created, you need to add it to the class path of HCL Portal application server classloader.

-   Select **Select from content** to display the **Display title** of the currently rendered content.

    !!! note
        If the web content viewer renders a site area, the title that is used is the display title of the site area itself and not the title of the default content of the site area.

-   Select **Select from element**, and enter the name of an element of the content item that the rendering portlet displays. The rendering portlet then uses the value of the element to set the title. The element must be of type Text or Short Text. If it has a different type or does not exist for the content item that the rendering portlet displays, the rendering portlet uses the default title of the page.

## Portlet Cache Options

You can define whether the output of the web content viewer is cached in the portlet fragment cache. The cache scope determines where the content is cached. The web content viewer provides two types of caching:

-   **Shared cache across users**

    This type of cache provides the largest performance improvement as it caches the output of the portlet across users. Use this cache scope only for web content viewers that render web content that is not personalized.

-   **Non-shared cache for a single user**

    This type of cache provides a smaller performance improvement but enables caching of personalized web content that is displayed by the web content viewer.


The cache expiration time determines how long the page is stored in a portlet fragment cache. You can choose from three settings for cache expiration:

-   **Cache always expires**

    Content is never cached in either a shared or a private portlet cache.

-   **Cache never expires**

    Content can be stored indefinitely in either a shared or a private portlet cache.

-   **Cache expires after this many seconds**

    Content is stored for the number of seconds specified in either a shared or a private portlet cache.


!!! note
    To cache the markup output of the web content viewer, the portlet fragment cache must be enabled. The HCL Portal documentation contains more information about the caching of portlet output and explains how to enable the portlet fragment cache.

## Bypass Web Content Manager Caching

If you have Basic or Advanced caching enabled in HCL Web Content Manager, then Web Content Manager caches content artifacts independently of the cache settings that you configured for the Web Content Viewer portlet. To bypass the caching that is set in Web Content Manager, select the option **Bypass Web Content Manager Caching**. This setting applies to content artifacts that are rendered in this Web Content Viewer portlet only.

## Locked settings

You can lock settings in the **Configure** mode of the viewer. When a setting is locked, a lock icon is displayed in the **Edit Shared Settings** mode of the viewer, and no **Edit** link is available.

