# Registering portlet filters

Before you can use a portlet filter and assign it to a portlet, you must register it in the PortletFilterService.

The following example code snippet shows the declaration of a filter:

```
1: # Example:
2: filter.SampleFilter.class = com.example.SampleFilter
3: filter.SampleFilter.configValue = some configuration value
4: filter.SampleFilter.transcodeMarkup.1 = html->wml
5: # methods to be filtered
6: filter.SampleFilter.method.1 = service
7: filter.SampleFilter.method.2 = doTitle

```

In this example, the portlet filter SampleFilter is defined as follows:

-   Line 2 defines the filter name to be SampleFilter. This name is later used in the portlet settings to attach the filter to the portlet. Line 2 also defines the class that implements the filter interface.
-   Line 3 is a filter specific setting that is given to the filter during initialization. The filter name is removed from the parameter name for later use. For example, the parameter defined in line 4 is later seen by the filter with the name configValue and the value some configuration value. Several settings of this type can exist.
-   Line 4 declares this filter as a transcoding filter that can transcode from HTML to a WML markup. Several settings of this type can exist. If this filter is attached to a portlet that can render HTML, you can now also place this portlet on pages for WML devices. The filter is invoked to transcode the html output to wml as soon as a WML device connects to the portal.
-   Line 6 specifies that the filter is called when the service method of the portlet is called.
-   Line 7 specifies that the filter is called when the doTitle method of the portlet is called.

The information in lines 6 and 7 is used to call the filter only for the specified methods to improve the performance. The possible methods for the filter are the following: login, beginPage, service, endPage, doTitle, ActionEvent, MessageEvent, and WindowEvent. If you want the filter to be called for every method, you do not need to define any method in the properties file.

**Parent topic:**[Configuring portlet filtering](../admin-system/adpltflt.md)

