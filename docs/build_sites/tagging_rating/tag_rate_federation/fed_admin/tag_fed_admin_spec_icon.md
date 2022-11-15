# Specifying an icon for a federated resource

When federated resources are displayed in the Tag Results portlet, you can have them preceded by a icon.

To define an icon for a resource type, you specify a custom property with either a URI for the image or a relative path that is attached to the base URL of the HCL Connections service of the resource type. The name of the custom property for the icon follows this pattern:

```
com.ibm.wps.cp.tagging.federation.iconURL.FederatorID
```

For more information about an HCL Connections feature see the topic about Federating tags.

You configure the custom properties in the Resource Environment Provider for the WP CP Configuration Service for tagging and rating in the WebSphere® Integrated Solutions Console.

**Note:** The icons are part of the portal installation. For theHCL Connections features, the custom properties for the icons exist without a predefined path. Unless no icon URL is defined, the icons are loaded directly from HCL Portal.


**Related information**  


[CP Configuration Service for tagging and rating](../admin-system/srvcfg_cpcfg4tr.md)

[Setting service configuration properties](../admin-system/adsetcfg.md)

[Federating tags](../admin-system/tag_rate_federation.md)

