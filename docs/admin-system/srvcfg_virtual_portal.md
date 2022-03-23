# Virtual Portal Configuration Service 

The Virtual Portal configuration service \(WP VirtualPortalConfigService\) enables you to specify properties for the default virtual portal and for specific virtual portals. Refer to the Property names section for details about the portal settings this configuration supports.

## Property syntax

There are several ways in which you can define properties for virtual portals:

-   **URL context for the virtual portal**

    Property format: `context.virtual\_portal\_context.property.property\_name = property\_value`

    Example: `context.vp1.property.property1 = true`

-   **Host name of the virtual portal**

    Property format: `hostname.virtual\_portal\_hostname.property.property\_name = property\_value`

    Example: `hostname.vp1.example.com.property.property1 = true`

-   **The default keyword**

    The default keyword is used to identify the default virtual portal. The default virtual portal has no dedicated URL context or host name.

    Property format: `default.property\_name = property\_value`

    Example: `default.property1 = true`

-   **The global keyword**

    The global keyword is used as a fallback property if there no more specific property that is defined for a virtual portal.

    Property format: `global.property\_name = property\_value`

    Example: `global.property1 = true`


Replace the following variables when you define specific properties:

-   **`property\_name`**

    The name of the property that you are defining.

-   **`property\_value`**

    The value of the property that you are defining.

-   **`virtual\_portal\_context`**

    The URL context of the target virtual portal.

-   **`virtual\_portal\_hostname`**

    The host name of the target virtual portal.


**Note:** You can determine the URL context and the host name of the target virtual portal with the Manage Virtual Portals administration portlet.

## Property names

You can use the following values to replace the property\_name variable from Property syntax section of the documentation:

-   **toolbar.enabled = \(true\)**

    Use this property name to enable or disable the site toolbar for an entire portal or for specific virtual portals. The site toolbar provides access to editing features for managed pages, including adding and editing pages and web content. Although essential for an authoring server, it is recommended that you disable the site toolbar on a delivery server.


## Evaluation order

The portal evaluates properties for virtual portals in the following order and returns the appropriate value:

1.  The portal checks for a specific property that is defined for a virtual portal by the context, hostname, or default keyword. The value of the property is returned.

    **Important:** If you define conflicting values for a virtual portal with different properties, the results can be unpredictable. For example, this issue can occur if you define one value with the context keyword and a different value with the hostname keyword. To avoid problems, use only one value.

2.  If no specific property is defined for a virtual portal, the portal checks for a property defined by the global keyword. The value of the property is returned.
3.  If no global property is defined, the value null is returned.

**Parent topic:**[Portal service configuration ](../admin-system/srvcfgref.md)

**Related information**  


[Removing the site toolbar on a production server](../wcm/wcm_mngpages_disabletool.md)

[Disabling the toolbar logo ](../dev-theme/disable_toolbar_logo.md)

[Customizing the More menu of the action bar ](../admin-system/epc_custom_more_menu.md)

[Disabling the preview option ](../wcm/wcm_preview_disable.md)

