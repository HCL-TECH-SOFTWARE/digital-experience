# Configuring portlet filtering 

A portlet filter enables the administrator of a portal to intercept and modify the output of a portlet before it is aggregated to the entire portal page. This way you can support different languages and markups other than those for which the portlet was originally designed. You can use portlet filters also for adding additional information to the portlet output, for example, a copyright statement, deleting unimportant or restricted content, and for parsing destructive JavaScript.

To use portlet filters, you need to perform all of the following procedures:

-   Enable portlet filtering for the portal
-   Register the portlet filters, that is define and activate them in a properties file
-   Assign the filters to the portlet.

**Note:** Using this portlet filter only applies to the HCL Portlet API. For portlets written against the JSR 286 specification, portlet filtering is already defined within the JSR 286 standard and is configured differently.

-   **[Enabling portlet filtering ](../admin-system/adpltflt_nbl.md)**  
You enable the usage of portlet filters by setting the legacy.portlet.enable.filtering property in the Portlet Container Service.
-   **[Registering portlet filters ](../admin-system/adpltflt_reg.md)**  
Before you can use a portlet filter and assign it to a portlet, you must register it in the PortletFilterService.
-   **[Assigning filters to a portlet ](../admin-system/adpltflt_assgn.md)**  
After you have registered a portlet filtered, you can assign it to a portlet. You can assign multiple portlet filters to a portlet.
-   **[Portlet filter life cycle ](../admin-system/adpltfltr_lifecycl.md)**  
For performance reasons, portlet filters have a limited life cycle.
-   **[Supported filter targets ](../admin-system/adpltfltr_trgt.md)**  
Calls to the portlet that do not have a request attached are not available to the portlet filter.
-   **[Programming tips: wrapper objects ](../admin-system/adpltfltr_prgr_tips.md)**  
To enable the easy usage of portlet filters, HCL Portal provides a predefined set of wrapper objects. You can use these wrapper objects to modify the standard behavior of the wrapped components.
-   **[Request flow of portlet filters ](../admin-system/adpltfltr_rqust_flow.md)**  
On server startup, all portlet filters that are registered in the PortletFilterService are initialized and are made available for filter registration. After that, the portlet filters go through a sequence of processing steps.

**Parent topic:**[Configuring portal behavior ](../admin-system/adptlcfg.md)

