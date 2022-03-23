# Supported filter targets 

Calls to the portlet that do not have a request attached are not available to the portlet filter.

The following calls to the portlet are available to the filter:

-   SERVICE
-   DOTITLE
-   ACTIONEVENT
-   MESSAGEEVENT
-   WINDOWEVENT
-   LOGIN
-   BEGINPAGE
-   ENDPAGE

The following calls to the portlet are **not** available to the filter:

-   Logout
-   AttributeAdded
-   AttributeReplaced
-   AttributeRemoved
-   Init
-   InitConcrete
-   Destroy
-   DestroyConcrete

**Parent topic:**[Configuring portlet filtering ](../admin-system/adpltflt.md)

