# Assigning filters to a portlet 

After you have registered a portlet filtered, you can assign it to a portlet. You can assign multiple portlet filters to a portlet.

To assign multiple portlet filters to a portlet, you define the portlet setting FilterChain and specify a list of filters separated by commas or semicolons as the value.

To add this setting to the relevant portlet during run time, use the Modify Parameters option in the Manage Portlets portlet.

The request will pass to the filters in the list in sequential order and then proceed to the portlet. The portlet response will then traverse back through all filters in reverse order. Refer to the following example:

```
FilterChain = MyTranscodingFilter, MyAdStripper
```

In this filter chain example, the filters perform the following actions:

-   `MyTranscodingFilter` can transcode HTML to WML.
-   `MyAdStripper` removes the advertisement from the output of the portlet.

The request processes the following steps:

1.  `MyTranscodingFilter` is called first. This filter checks the requested markup and detects that WML is requested. Since the portlet supports only HTML, the client in the request is wrapped by this filter with a client-wrapper, which mimes an HTML client for the portlet. In addition, the response must be wrapped with a wrapper that intercepts the output of the following portlet or filters, in order to work on their output.
2.  `MyAdStripper` does not have to modify the request because it only works on the output, but the response must be wrapped to store the output of the portlet.
3.  The portlet generates its HTML output.
4.  `MyAdStripper` on the output of the portlet and will remove the advertisement.
5.  `MyTranscodingFilter` then works on the output of the previous filter and transcodes this output to WML.

You cannot use multiple filters that can transcode from one markup to another in a single filter chain.

You can also declare the filter chain or parts of the filter chain on a global level for all portlets written against the HCL Portlet API. To achieve this, you can edit or add a property `FilterChain` containing a comma-separated list of filters in the `PortletFilterService.properties` file, just like in the example given previously \(`FilterChain = MyTranscodingFilter, MyAdStripper`\). This global filter chain is merged with the one defined on a per-portlet basis, while the global ones are applied before the local ones.

**Parent topic:**[Configuring portlet filtering ](../admin-system/adpltflt.md)

