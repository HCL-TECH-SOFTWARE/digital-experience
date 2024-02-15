# Configuring portlet filtering

A portlet filter enables the administrator of a portal to intercept and modify the output of a portlet before it is aggregated to the entire portal page. This way you can support different languages and markups other than those for which the portlet was originally designed. You can use portlet filters also for adding additional information to the portlet output, for example, a copyright statement, deleting unimportant or restricted content, and for parsing destructive JavaScript.

To use portlet filters, you need to perform all of the following procedures:

-   Enable portlet filtering for the portal
-   Register the portlet filters, that is define and activate them in a properties file
-   Assign the filters to the portlet.

!!!note
    Using this portlet filter only applies to the HCL Portlet API. For portlets written against the JSR 286 specification, portlet filtering is already defined within the JSR 286 standard and is configured differently.
