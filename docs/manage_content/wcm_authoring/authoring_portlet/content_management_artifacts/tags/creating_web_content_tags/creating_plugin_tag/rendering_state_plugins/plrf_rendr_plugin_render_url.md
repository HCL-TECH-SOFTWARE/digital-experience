# The render URL plug-in

Use the RenderURL rendering plug-in to create URLs that set or remove render parameters.

The syntax for this plug-in is as follows:

```
[Plugin:RenderURL copyCurrentParams="" escape="" uri="" uriMode="" 
prefix.key="" prefix.value="" prefix.mode="" prefix.type=""]
```

This plug-in uses the following attributes:

-   **copyCurrentParams**

    Use this attribute to determine whether you want the current portal state and the parameters that are encoded in the state to be copied into the new URL. Valid values are `true` and `false`. The default value is `false`.

-   **escape**

    Use this attribute to define the escaping that is used to write the URL. Specify one of the following values: `xml`, `json`, `javascript`, or `none`. The default is `xml`.


To set, add, or remove public or private render parameters, use the following attributes. Use the `prefix` before the attributes to correlate key, value, type, and mode attributes that refer to the same render parameter. The prefix must not contain a period character \(`.`\).

-   **prefix.key**

    Use this attribute to set the name of the parameter. For the value, specify the simple identifier of a private or public parameter.

    Limited support for non-declared public render parameters: Digital Data Connector \(DDC\) for HCL Portal also provides limited support for public parameters that are not declared in the Web Content Viewer deployment descriptor. You can identify such parameters by the fully qualified name in the format `{ns}localname`. Non-declared public render parameters do not work when you use them with WSRP. They are not included by default in the portlet fragment cache key if portlet fragment caching is enabled.

-   **prefix.value**

    Use this attribute to set, add, or remove values for a parameter. The `prefix` must match the one set for the `key` listed earlier. To set parameters with multiple values, add multiple `prefix.value` attributes to the rendering plug-in tag.

-   **prefix.type**

    Use this attribute to determine the type of parameter that you want to be set. Valid values are `private` and `public`.

-   **prefix.mode**

    Use this attribute to determine what you want to do with the parameter values. Valid values for this attribute are as follows:

    -   **set**

        This mode is the default mode. Use this mode to set the value for the parameter. When you use this mode, the parameter value that you set replaces an existing value.

    -   **add**

        Use this mode to add a value for the parameter. When you use this mode, the parameter value that you set is added to existing values. If you use this mode, but no parameter values exist already, a new parameter is set.

    -   **remove**

        Use this mode to delete the parameter or its values. Use this mode only for private render parameters with `copyCurrentParams="true"` or for public render parameters. You can use this mode in either of two ways:

        -   To completely remove the parameter, pass no values at all.
        -   To remove only specific values of a render parameter, pass only the values that you want to remove.

To target a portal resolver plug-in, use the following attributes. If you also specify public render parameters, these parameters are applied after the resolution is completed.

-   **uri**

    Use this attribute to specify a valid URI that identifies the resource that you want to be resolved.

-   **uriMode**

    Use this attribute to specify the resolution mode. Valid values are `view` and `download`. The plug-in evaluates the `uriMode` attribute only if no public render parameters are set in the same rendering plug-in tag.


To additionally include parameters for the resolver only, use one of the following attributes:

-   **prefix.type="uri"**

    Specify the type of the parameter to identify it as a resolver parameter.

-   **prefix.key**

    Set the name of the parameter for the resolver. Prefix can be any string

-   **prefix.value**

    Set the value of the parameter for the resolver. To set parameters with multiple values, add the multiple value attributes to the rendering plug-in tag


## Examples

All these attributes can be combined together. Examples:

-   The following plug-in tag creates a URL that completes the following two actions:

    -   It sets a private render parameter `private1`.
    -   It adds multiple values `[pv1, pv2]` for the public render parameter `public1`.
    ```
    [Plugin:RenderURL copyCurrentParams="true" 
        pr1.key="private1" pr1.value="v1"                  
        pr1.type="private" pr1.mode="set"
        pr2.key="public1"  pr2.value="pv1" pr2.value="pv2" 
        pr2.type="public"  pr2.mode="add"] 
    ```

-   The following plug-in tag creates a URL that completes the following two actions:

    -   It sets a public render parameter with multiple values by using the qualified name \(`QName`\) `{http://ibm.com}prp1` of the parameter.
    -   It removes the private render parameter with the name `private1`.
    ```
    [Plugin1:RenderURL copyCurrentParams="true" 
        pr1.key="private1" pr1.type="private" pr1.mode="remove"
        pr2.key="{http://ibm.com}prp1" pr2.value="pv1" pr2.value="pv2" 
        pr2.type="public"  pr2.mode="set"]
    ```

-   The following plug-in tag creates a URL that completes the following two actions:

    -   It resolves the URI to a page that is identified by the URI parameter.
    -   It adds the value for the public render parameter by using the qualified name \(`QName`\) `{http://ibm.com}prp1` of the parameter on the page that was resolved in the previous step. It sets the value to `pv1`.
    ```
    [Plugin:RenderURL copyCurrentParams="true" uri="nm:oid:pageid" 
        pr2.key="{http://ibm.com}prp1" pr2.value="pv1" 
        pr2.type="public" pr2.mode="add"] 
    ```


The following examples show how you can set render parameters when the form is submitted, so that these parameters can be read by the portlets that are displayed on the form result page.

-   The following example sets a private render parameter, that is a parameter than can only be seen by the same portlet instance on the page that sets the parameter. To set the parameter value, specify as follows:

    ```
    <form method="get" action="[Plugin:RenderURL copyCurrentParams="true"]">
        <!-- This sets a private render parameter with the name param1: -->
        <input type="text" name="param1">
        <input type="submit" value="Submit">
    </form>
    ```

    To read the parameter value, use the following tag in the page to which the form is submitted: `[Plugin:RenderParam key="param1"]`

-   The following example sets exactly one public render parameter, that is a parameter that all portlet instances can see. The example uses the `CUSTOM_CONTEXT` parameter that is reserved and declared in the portlet.xml file by the rendering portlet. To set the parameter value, specify as follows:

    ```
    <form method="get" action="[Plugin:RenderURL copyCurrentParams="true"]">
        <!-- This sets a public render parameter with the name CUSTOM_CONTEXT: -->
        <input type="text" name="CUSTOM_CONTEXT">
        <input type="submit" value="Submit">
    </form>
    ```

    To read the parameter value, use the following tag in the page to which the form is submitted: `[Plugin:RenderParam key="CUSTOM_CONTEXT"]`


???+ info "Related information:"
    - [Digital Data Connector \(DDC\) for HCL Portal](../../../../../../../../extend_dx/ddc/index.md)

