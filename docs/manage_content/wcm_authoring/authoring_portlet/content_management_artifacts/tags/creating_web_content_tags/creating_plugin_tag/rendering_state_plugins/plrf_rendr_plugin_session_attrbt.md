# The session attribute plug-in

Use the SessionAttribute rendering plug-in to retrieve, set, or remove attributes from the portlet or servlet session. When you access the portlet session, you can also specify the scope of the session attributes as either application or portlet scope.

The syntax for this plug-in is as follows:

```
[Plugin:SessionAttribute key="" value="" mode="" scope="" defaultValue="" escape=""]
```

This plug-in uses the following attributes:

-   **scope**

    Use this attribute to specify the session and attribute scope with which you want to work:

    -   **application**

        Access the portlet session in portlet application scope.

    -   **portlet**

        Access the portlet session in portlet scope. This scope is the default scope.

    -   **servlet**

        Access the servlet session.

-   **key**

    Use this attribute to specify the name of the session attribute that you want to retrieve, set, or remove.

-   **mode**

    Use this attribute to specify the operation that you want to perform:

    -   **get**

        Retrieve the specified attribute from the session and return the attribute value.

    -   **set**

        Set the specified attribute to the session.

    -   **delete**

        Delete the specified attribute from the session.

    -   **remove**

        Remove the specified attribute from the session and return the attribute value that was previously set.

-   **value**

    Use this attribute to specify the value of the attribute that you want to set. If an attribute with the same name exists on the request, that attribute is overwritten with the new value. If you want to set an attribute on the request, this attribute is mandatory.

-   **defaultValue**

    Use this attribute to specify the value that you want to be to returned if the addressed session parameter does not exist or has a value of `null`.

-   **escape**

    Use this attribute to define the escaping that you want to be used for writing the URL. Specify one of the values `xml`, `json`, `javascript`, or `none`. The default value is `none`. This value is evaluated only if the `mode` attribute is set to `get` or `remove`.


## Examples

-   To retrieve the attribute with the key `key1` from the portlet session in portlet scope, use either one of the following plug-in tags:

    ```
    [Plugin:SessionAttribute key="key1"]
    [Plugin:SessionAttribute scope="portlet" key="key1"]
    ```

-   To retrieve the attribute with the key `key1` from the portlet session in portlet application scope, use the following plug-in tag:

    ```
    [Plugin:SessionAttribute scope="application" key="key1"] 
    ```

-   To retrieve the attribute with the key `key1` from the servlet session and to return the value `defaultValue` if the attribute is not set or has a value of `null`, use the following plug-in tag:

    ```
    [Plugin:SessionAttribute scope="servlet" key="key1" defaultValue="defaultValue"] 
    ```

-   To set the attribute with the key `key1` and the value `value1` to the portlet session in portlet session scope, use one of the following plug-in tags:

    ```
    [Plugin:SessionAttribute key="key1" value="value1"] 
    [Plugin:SessionAttribute mode="set" key="key1" value="value1"]
    ```

-   To delete the attribute with the key `key1` from the portlet session in portlet application scope without returning the previous value, either use the `delete` mode or pass an empty value:

    ```
    [Plugin:SessionAttribute key="key1" mode="delete"]
    [Plugin:SessionAttribute key="key1" value=""]
    ```

-   To remove the attribute with the key `key1` from the portlet session in portlet application scope and to return the previously set value, use the following plug-in tag:

    ```
    [Plugin:SessionAttribute scope="application" key="key1" mode="remove"]
    ```


???+ info "Related information:"
    - [Digital Data Connector \(DDC\) for HCL Portal](../../../../../../../../extend_dx/ddc/index.md)
    - [Sending data to the Web Content Viewer portlet](../../../../../../../../extend_dx/ddc/implementing_user_interactions/sending_data_to_webcontentviewer_portlet/index.md)
    - [Receiving the result of an HTML form submission](../../../../../../../../extend_dx/ddc/implementing_user_interactions/sending_data_to_webcontentviewer_portlet/plrf_sendata2wcv_receivhtmlform.md)
