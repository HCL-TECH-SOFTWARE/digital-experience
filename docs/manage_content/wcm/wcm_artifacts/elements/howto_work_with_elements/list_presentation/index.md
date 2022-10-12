# List presentation uses

A list presentation stores a reusable presentation for navigator, menu, personalization, and search components. If the presentation of a navigator, menu, personalization, or search component is used in more than one component design, then you store that presentation in a list presentation.

Unlike other components, the list presentation cannot be rendered directly on a page. Instead, it is selected in the design section of a navigator, menu, personalization, or search component.

## When to use a list presentation

You use a list presentation when a set of navigator, menu, personalization, or search components share design parameters. You store these design parameters in a single reusable site presentation that is reused throughout your site. When you need to update your list presentation design, you edit the list presentation item, not the components that use the shared list presentation item.

To create a new list presentation, click **New > Component > List Presentation**.

1.  [Entering identification information](../../../../../wcm/mng_content_with_auth_portlet/creating_items/wcm_dev_items_id.md)  
Specify identification information for the current item, including the name and title for the item. The identification section is common to all item forms.
2.  [Specifying a location for an item](../../../../../wcm/mng_content_with_auth_portlet/creating_items/wcm_dev_items_location.md)  
When you create an item, you can specify the location of the item.
3.  [List presentation options](./wcm_dev_listpres_using.md)  
The selection items and fields in the list presentation are equivalent to the same fields used in menu and navigator elements.
4.  [List presentation override](./wcm_dev_listpres_override.md)  
You can override the list presentation that is used to render any list by setting the request parameter or request attribute `ListPresentationId` to set the ID, or `ListPresentation` to set the name path.
5.  [Granting users or groups access to an item](../../../../../wcm/mng_content_with_auth_portlet/creating_items/wcm_dev_items_access.md)  
Specify the access control settings for the current item to designate which users have access to an item and their level of access. The access section is common to all item forms.


