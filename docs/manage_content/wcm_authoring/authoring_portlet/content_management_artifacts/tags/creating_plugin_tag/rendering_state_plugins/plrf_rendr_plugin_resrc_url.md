# The resource URL plug-in

Use the ResourceURL rendering plug-in to add query parameters to URLs and to generate URLs to resources that you want to serve through the HCL Portal Ajax proxy.

The syntax for this plug-in is as follows:

```
[Plugin:ResourceURL url="" param="" proxy="" escape=""]
```

This plug-in uses the following attributes:

-   **url**

    Use this attribute to specify the base URL to which you want to add query parameters or which you want to serve through the portal Ajax proxy.

-   **param**

    This attribute is optional. Use it to specify the query parameters that you want to add to the base URL. This attribute can take multiple values.

-   **proxy**

    This attribute is optional. You can set it to the following values:

    -   **true**

        Use this value to generate a URL that serves the resource that the URL addresses through the portal Ajax proxy

    -   **false**

        If you set the `proxy` attribute to `false`, the portal serves the resource directly. This value is the default.

-   **escape**

    Use this attribute to define the escaping that you want to be used for writing the URL. Specify one of the values `xml`, `json`, `javascript`, or `none`. The default value is `none`.


## Examples

-   **\[Plugin:ResourceURL url="http://www.ibm.com" param="a=b" param="b=c1" param="b=c2"\]**

    This plug-in tag results in the URL `http://www.ibm.com?a=b&b=c1&b=c2`.

-   **\[Plugin:ResourceURL url="http://www.ibm.com?a=b" param="b=c1" param="b=c2"\]**

    This plug-in tag results in the URL `http://www.ibm.com?a=b&b=c1&b=c2`.

-   **\[Plugin:ResourceURL url="\[AttributeResource attributeName="portalLink"\]" param="a1=\[Element context='current' type='content' key='b1'\]" \]**

    This plug-in tag results in the URL `http://www.ibm.com?a1=c1`. The portion `http://www.ibm.com` is resolved through the `portalLink` attribute resource. The value of the parameter `a1` is replaced by the value of the used element tag, which in this case results in value `c1`.

-   **\[Plugin:ResourceURL url="http://www.ibm.com?a=b" proxy="true"\]**

    This plug-in tag results in a URL that serves the resource `http://www.ibm.com?a=b` through the portal Ajax proxy.

-   **\[Plugin:ResourceURL url="http://www.ibm.com?a=b" param="b=c1" proxy="true"\]**

    This plug-in tag results in a URL that serves the resource `http://www.ibm.com?a=b&b=c1` through the portal Ajax proxy.


???= info "Related information"
    - [Digital Data Connector \(DDC\) for HCL Portal](../../../../../../../extend_dx/ddc/index.md)

