# Programming tips: wrapper objects

To enable the easy usage of portlet filters, HCL Portal provides a predefined set of wrapper objects. You can use these wrapper objects to modify the standard behavior of the wrapped components.

Wrappers are defined for the following objects:

|Object|Predefined wrapper|
|------|------------------|
|PortletRequest|PortletRequestWrapper|
|PortletResponse|PortletResponseWrapper|
|Client|ClientWrapper|

A transcoding filter for markups, for example, from HTML to WML needs to use all of these wrappers to emulate the HTML environment that an HTML portlet assumes.

**Parent topic:**[Configuring portlet filtering](../admin-system/adpltflt.md)

