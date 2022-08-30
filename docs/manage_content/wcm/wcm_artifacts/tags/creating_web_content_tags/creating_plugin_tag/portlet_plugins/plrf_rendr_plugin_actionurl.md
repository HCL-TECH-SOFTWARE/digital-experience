# The action URL plug-in

Use the ActionURL rendering plug-in to create portlet action URLs and to insert them into your web content. The generated action URLs always address the instance of the Web Content Viewer portlet that renders the \[Plugin:ActionURL\] tag.

Use this plug-in when you post form data from your web content to the Web Content Viewer portlet. For more details, read *Sending data to the Web Content Viewer portlet*.

**Note:** This plug-in does not render the content between the opening and the closing tags.

The syntax for this plug-in is as follows:

```
[Plugin:ActionURL action="" param="" copyCurrentParams="" escape=""]
```

This plug-in uses the following attributes:

-   **action**

    Use this attribute to specify the name of the portlet action of the Web Content Viewer portlet that you want to encode into the action URL. The portlet supports the portlet action name `post`.

-   **copyCurrentParams**

    Use this attribute to specify whether you want the current portal state and the parameters encoded in it to be copied into the new URL. Specify `true` or `false`. The default is `false`.

-   **param**

    Use this attribute to specify optional action parameters. To set one or more action parameters, use one or more `param` attributes. As the value, specify a name-value pair, separated by an equals character \( `=` \). The `name` part specifies the name of the action parameter of the resulting URL. The `value` part specifies the value of the action parameter of the resulting URL. The Web Content Viewer portlet supports the optional parameters `resultSessionAttribute` and `resultRenderParameter`.

-   **escape**

    Use this attribute to specify the escaping that you want to be used to write the URL. Specify one of the following values `xml`, `json`, `javascript`, or `none`. The default is `xml`.


## Example

```
[Plugin:ActionURL action="post" param="uri=sr:forums" param="resultSessionAttribute=replyResult"]
```

This plug-in tag fragment generates a URL that triggers a portlet action named `post`. The Web Content Viewer rendering portlet that handles the action also receives the URI action parameter `action.uri` that points to `sr:forums`. Additionally, the portlet receives the `resultSessionAttribute` action parameter with the value `replyResult`.

**Related information**  


[Digital Data Connector \(DDC\) for HCL Portal](../social/plrf_ovu.md)

[Receiving the result of an HTML form submission](../social/plrf_sendata2wcv_receivhtmlform.md)

[Creating list-rendering profiles](../social/plrf_crt_lr_profiles.md)

