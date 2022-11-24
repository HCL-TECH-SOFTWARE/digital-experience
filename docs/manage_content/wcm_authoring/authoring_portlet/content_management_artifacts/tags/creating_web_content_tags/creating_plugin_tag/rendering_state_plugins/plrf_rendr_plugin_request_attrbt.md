# The request attribute plug-in

Use the RequestAttribute rendering plug-in to retrieve, set, or remove attributes on the underlying request.

The syntax for this plug-in is as follows:

```
[Plugin:RequestAttribute key="" value="" defaultValue="" escape=""]
```

This plug-in uses the following attributes:

-   **key**

    This attribute is mandatory. Use this attribute to specify the name that is used to retrieve or set an attribute for the request.

-   **mode**

    Use this attribute to specify the operation that you want to perform:

    -   **get**

        Retrieve the specified attribute from the request and return the attribute value.

    -   **set**

        Set the specified attribute to the request.

    -   **delete**

        Delete the specified attribute from the request.

    -   **remove**

        Remove the specified attribute from the request and return the attribute value that was previously set.

-   **value**

    Use this attribute to specify the value of the attribute that you want to be set. If an attribute with the same name exists on the request, that attribute is overwritten with the new value. If you want to set an attribute on the request, this attribute is mandatory.

-   **defaultValue**

    This attribute is optional. Use this attribute to specify the value that is used when an attribute from the request is not defined or has a value of `null`.

-   **escape**

    Use this attribute to define the escaping that you want to be used for writing the URL. Specify one of the values `xml`, `json`, `javascript`, or `none`. The default value is `none`. This value is evaluated only if the `mode` attribute is set to `get` or `remove`.


!!! note
    The `RequestAttribute` plug-in is available with Version 8.0.0.1 of HCL Web Content Manager.

## Examples

-   To write out the string representation of the request attribute with the name key1, use the following plug-in tag:

    ```
    [Plugin:RequestAttribute key="key1"]
    ```

-   To write out value1 only when the key1 attribute does not exist on the request or the attribute value is null, use the following plug-in tag. Otherwise, the actual value of the key1 attribute is used.

    ```
    [Plugin:RequestAttribute key="key1" defaultValue="value1"]
    ```

-   To set the request attribute key1 to the value value1, use the following plug-in tag:

    ```
    [Plugin:RequestAttribute key="key1" value="value1"]
    [Plugin:RequestAttribute mode="set" key="key1" value="value1"]
    ```

-   To remove the request attribute key1 by passing an empty value attribute, use the following plug-in tag:

    ```
    [Plugin:RequestAttribute key="key1" mode="delete"]
    [Plugin:RequestAttribute key="key1" value=""]
    ```

-   To remove the attribute with the key `key1` from the portlet request, and to return the previously set value, use the following plug-in tag:

    ```
    [Plugin:RequestAttribute key="key1" mode="remove"]
    ```


???+ info "Related information:"
    - [Digital Data Connector \(DDC\) for HCL Portal](../../../../../../../extend_dx/ddc/index.md)

