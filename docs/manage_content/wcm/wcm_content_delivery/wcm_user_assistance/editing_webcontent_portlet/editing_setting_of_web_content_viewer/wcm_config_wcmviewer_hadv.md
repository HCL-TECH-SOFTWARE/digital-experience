# Advanced options

The Advanced Options settings specify link broadcast behavior between Web Content Viewers and whether context processor plug-ins are applied.

## Links

Use the **Links** section to enter the details of how you want to receive and broadcast links with other portlets. These settings determine whether the Web Content Viewer is aware of the state or context of other portlets.

Broadcast link options:

-   **Dynamically select a web content page**

    Use the information about the web content item from the page properties to dynamically determine to which page the context is broadcast. A lookup is done to determine the best matching web content page to render the item that is selected. The best matching web content page is the page that is mapped to the closest parent site area of the selected item in the Web Content Manager system. If more than one web content page is found that maps equally well to the same parent site area, the first page is used with the exception that the current web content page is preferred. If no web content page is found that is mapped to any of the parent site areas of the selected item, the item is rendered through the Web Content Manager servlet.

-   **This portal page**

    Broadcast the context of the current Web Content Viewer to other Web Content Viewers on the same portal page.

-   **The following portal page**

    Broadcast the context of the current Web Content Viewer to Web Content Viewers on a different portal page. You must then enter the unique identifier or unique name to select the target portal page.

-   **None**

    Do not broadcast the context of the current Web Content Viewer to other Web Content Viewers.


Receive link options:

-   **Other portlets and this portlet**

    Receive the context from any Web Content Viewers broadcasting its context.

-   **This portlet**

    Use the context of the content item, component, or element that is displayed in the Web Content Viewer.

-   **None**

    Do not receive the context of any other Web Content Viewers.


## Plug-ins

Use the **Plug-ins** section to specify which context processor plug-ins are run during rendering.

The Web Content Viewer provides a plug-point for context processor plug-ins that can be used to control which web content item is rendered by the Web Content Viewer. Context processor plug-ins must implement the `com.ibm.workplace.wcm.api.ContextProcessor` interface that is described in the Javadoc documentation for the Web Content Manager APIs and must provide a plugin.xml file that defines the extension of the `com.ibm.workplace.wcm.api.ContextProcessor` extension point. The following example shows how such an extension entry might be defined in a plugin.xml file:

```
<?xml version="1.0" encoding="UTF-8"?>
<?eclipse version="3.0"?>
<plugin id="your.plugin.id" name="MyContextProcessor" version="1.0.0" provider-name="Example">
 <extension point="com.ibm.workplace.wcm.api.ContextProcessor" id="MyContextProcessorPlugin">
    <processor class="yourcom.example.MyContextProcessorPlugin"/>
 </extension>
</plugin>
```

For more information about plugin.xml files or the extension framework, refer to the Eclipse Extension Point Framework documentation.

The JAR file that implements the extension plug-in must be in a directory that is part of the class path of the Web Content Viewer. Create a new shared library that contains the custom resource bundle files by using the WebSphere® Application Server administrative console. Creating a new shared library that contains the resource bundle allows a clean separation of the custom resource bundle code from the base HCL Portal code. When the shared library is created, you need to add it to the class path of HCL Portal application server classloader. For details about creating shared libraries and adding shared libraries to the classloader's class path, refer to the [Shared library collection](http://publib.boulder.ibm.com/infocenter/wasinfo/v6r1/topic/com.ibm.websphere.base.doc/info/aes/ae/ucws_rsharedlib.html) topic in the WebSphere Application Server information center.

To select the context processor plug-ins that are run during rendering of web content items through the Web Content Viewer, click the name of the context processor plug-in in the box that lists all found plug-ins. To clear a plug-in, hold down the control key and click the name of the plug-in. If more than one plug-in is selected, the processing order of the plug-ins is not defined.

## Scope tag cloud results

With the **Scope tag cloud results** settings, you can limit the results that are shown by instances of the Tag Cloud portlet on the same page as the Web Content Viewer to display those tags that are associated with the following scopes only:

-   **Parent of selected content item**

    The tag cloud displays tags that are applied to content items that have the same parent, such as a site area, as the content item that is displayed.

-   **Authoring template that is used for selected content item**

    The tag cloud displays tags that are applied to content items that are based on the same authoring template as the content item that is displayed.

-   **Categories that are used to profile selected content item**

    The tag cloud displays tags that are applied to content items that are profiled with the same categories as the content item that is displayed. In this way, you can manage scopes from within your web content system by defining taxonomies for your content items.


## Asynchronous web content rendering

-   **Web content rendering mode**

    To enable asynchronous web content rendering in View mode, check this option.

-   **Timeout in milliseconds for asynchronous web content rendering**

    Specify the timeout in milliseconds for the asynchronous web content rendering request. After the specified time, Web Content Manager renders a message to indicate that the timeout occurred. To disable the timeout check, set the timeout to `0`.


## Locked settings

You can lock settings in the **Configure** mode of the viewer. When a setting is locked, a lock icon is displayed in the **Edit Shared Settings** mode of the viewer, and no **Edit** link is available.

???+ info "Related information:"
    - [Configuring the validation of friendly URLs for web content](../../../delivering_web_content/deliver_webcontent_on_portal/customizing_content/friendlyurl_wcmviewer/validate_friendlyurl/configure_validate_friendly_urls.md)
    - [Friendly URL for web content example](../../../delivering_web_content/deliver_webcontent_on_portal/customizing_content/friendlyurl_wcmviewer/wcm_config_wcmviewer_friendlyexample.md)

