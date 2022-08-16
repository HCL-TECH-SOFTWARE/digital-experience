---
id: plrf_acs_listrdr_att_lstprops
title: Accessing list-rendering attributes and list properties
---
import useBaseUrl from '@docusaurus/useBaseUrl';



To generate your list designs with Digital Data Connector \(DDC\) for HCL Portal, you can access individual list-rendering context attributes and list properties.

When you set a new list-rendering context, you can use the attribute parameter to add arbitrary name-value pairs to that list-rendering context. You can then extract these name-value pairs from the list-rendering context at other places by using the \[Plugin:ListRenderingContext action="getAttribute"\] tag. If you use this technique in nested contexts, it always addresses the currently active list-rendering context. For example, you can establish a list-rendering context such as the following one:

```
[Plugin:ListRenderingContext action="set" extension-id="ibm.portal.ddc.xml"
   profile="ibm.portal.atom"
   attribute="source=https://www.ibm.com/connections/communities/service/atom/catalog/public"
   attribute="myKey=myValue" compute=“always“]
```

If you do so, you can retrieve the values for the source and myValue properties later in the design as follows:

```
[Plugin:ListRenderingContext action="getAttribute" key="source"]
[Plugin:ListRenderingContext action="getAttribute" key="myKey"]
```

You can use this mechanism to pass information from a parent list-rendering context into a nested list-rendering context. After a nested list-rendering context has been established, information from the parent list-rendering context is not available via the `[AttributeResource]` tag. Therefore, when you set a nested list-rendering context, you can make parent attributes available to the nested context as follows:

```
[Plugin:ListRenderingContext action="set" extension-id="ibm.portal.ddc.xml"
     profile="ibm.portal.atom"
     attribute="source=[AttributeResource key=“catalogItemDetailsLink“]
     attribute="myKey=[AttributeResource key=“catalogItemFromParentContext“]“ 
     compute=“always“]
```

You can also use the `[Plugin:ListRenderingContext]` plug-in to access individual list properties that are based on the information that is loaded by the addressed DDC plug-in. You do so by specifying the value `getListProperty` for the `action` parameter. Example: To retrieve the list property `nextLink` from the bean list that is loaded for the current list-rendering context, use the following tag:

```
[Plugin:ListRenderingContext action="getListProperty" key="nextLink"]
```

When you write list-rendering context attributes or bean list properties to the markup, you can use the parameters `format`, `separator`, and `escape` to control the transformation into markup:

-   The `format` and `separator` parameters work the same way as they do with the `[AttributeResource]` tag. For more information, read *Setting the list-rendering context*.
-   To conform to the surrounding markup type, you can use the `escape` parameter to escape the string that the plug-in returns. Supported values are xml, json, javascript, and none.

