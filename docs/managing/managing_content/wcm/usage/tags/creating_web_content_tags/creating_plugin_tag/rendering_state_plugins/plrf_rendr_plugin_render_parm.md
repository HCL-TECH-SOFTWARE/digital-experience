# The render parameter plug-in

Use the RenderParam rendering plug-in to access public and private render parameters from your web content.

The syntax for this plug-in is as follows:

```
[Plugin:RenderParam key="" type="" defaultValue="" separator="" escape=""]
```

This plug-in uses the following attributes:

-   **key**

    Use this attribute to specify the name of the render parameter that you want to access.

-   **type**

    Use this attribute to specify the type of the parameter that you want to be to read. For the type, specify one of the following values:

    -   **any**

        Specify this type value to retrieve parameter values of type `private` or `public`. This value does not incorporate parameters of type `query`.

    -   **private**

        Specify this type value to retrieve the values of a private render parameter.

    -   **public**

        Specify this type value to retrieve the values of a public render parameter.

    -   **query**

        Specify this type value to retrieve the values of a query parameter that was specified in a link to web content. For more information about how to specify query parameters in links to web content, read *Writing links to web content*.

-   **defaultValue**

    Use this attribute to specify the value that you want to be returned if the addressed render parameter does not exist or has a value of `null`.

-   **separator**

    Use this attribute to specify the separator that you want to use to separate the values of a render parameter that has more than one value.

-   **escape**

    Use this attribute to specify the escaping that you want to be used to write the URL. Specify one of the following values `xml`, `json`, `javascript`, or `none`. The default value is `none`.


## Examples

-   To retrieve the value of a private render parameter with the name `key1`, use the following plug-in tag:

    ```
    [Plugin:RenderParam key="key1" type="private"]
    ```

-   To insert the value `defaultValue` into your content, if the render parameter with the name `key1` does not exist or if the value is `null`, use the following plug-in tag:

    ```
    [Plugin:RenderParam key="key1" type="private" defaultValue="defaultValue"]
    
    ```

-   To retrieve the value of a public render parameter, use the full qualified name \(`QName`\) of the parameter in the format that is defined by `javax.xml.namespace.QName.valueOf(String)`. Examples:
    -   To access the public context render parameter of Web Content Manager, use the following plug-in tag:

        ```
        [Plugin:RenderParam key="{http://www.ibm.com/xmlns/prod/datatype/content}context" type="public"]
        ```

    -   To access the custom context render parameter of Web Content Manager, use the following plug-in tag:

        ```
        [Plugin:RenderParam key="{http://www.ibm.com/xmlns/prod/datatype/content}custom-context" type="public"] 
        ```

-   If you know the short identifier of the public render parameter from the portlet deployment descriptor `portlet.xml`, you can also use that short identifier. Examples:
    -   To access the public context render parameter of Web Content Manager, use the following plug-in tag:

        ```
        [Plugin:RenderParam key="PUBLIC_CONTEXT" type="public"]
        ```

    -   To access the custom context render parameter of Web Content Manager, use the following plug-in tag:

        ```
        [Plugin:RenderParam key="CUSTOM_CONTEXT" type="public"]
        ```

-   To retrieve the value of a render parameter with the name `key1`, no matter whether it is a private or public render parameter, use the following plug-in tag:

    ```
    [Plugin:RenderParam key="key1" type="any"] 
    ```

-   To separate multiple values of a render parameter with the name `key1`, for example, by using a semicolon, use the following plug-in tag:

    ```
    [Plugin:RenderParam key="key1" type="any" separator=";"]
    ```

-   To retrieve the value of a query parameter that was passed to a Web Content Manager resolution URL with the name `key1`, use the following plug-in tag:

    ```
    [Plugin:RenderParam key="key1" type="query"]
    ```


**Related information**  


[Digital Data Connector \(DDC\) for HCL Portal](../social/plrf_ovu.md)

[Sending data to the Web Content Viewer portlet](../social/plrf_sendata2wcv.md)

[Receiving the result of an HTML form submission](../social/plrf_sendata2wcv_receivhtmlform.md)

**References:**  


[Writing links to web content](Writing links to web content../wcm/wcm_dev_writing-links.dita)

