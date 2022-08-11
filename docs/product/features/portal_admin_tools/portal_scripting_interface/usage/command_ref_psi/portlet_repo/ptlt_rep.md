# Portlet repository

The portlet repository provides access to portlets, portlet applications, and web modules. To provide easy access to the relations between the repository objects, the repository is modeled as a tree. Unlike with the content and component hierarchies, the repository tree is not arbitrarily nested.

At the root of the repository is a dummy node. Children of the root are the web modules. Web modules are the deployment units of the portal. They correspond to WAR files. The children of a web module are portlet applications.

The portlet repository is accessed by using the Portlet bean, referenced as $Portlet in Jacl. Modification of the portlet repository from a script is not supported.

The Portlet bean provides the following functions:

-   Methods to browse in the portlet repository tree. For more information, see *Navigation*.
-   Methods to locate a portlet, application, or web module, or to search for particular repository objects. For more information, see *Search*.
-   Methods for getting attributes, metadata, or portlet preferences. The following attribute types are supported by the Layout bean:
    -   Plain attributes
    -   List valued attributes
    -   Locale-specific attributes
    -   Portlet metadata
    -   Portlet preferences

-   **[Navigation - Portlet repository](../admin-system/navigation_ptlt_rep.md)**  
The Portlet bean is a tree bean. The navigation is documented in Tree navigation.
-   **[Search - Portlet repository](../admin-system/search_ptlt_rep.md)**  
The generic search syntax is documented in Search. The Portlet bean supports the following keywords for node types in searches. Alternative, shorter keywords are documented in the bean help.
-   **[Plain attributes - Portlet repository](../admin-system/pl_att_ptlt_rep.md)**  
In addition to the default attributes, repository objects have some of the following attributes. Alternative, shorter names are documented in the bean help.
-   **[List valued attributes - Portlet repository](../admin-system/lstvl_attributes_ptlt_rep.md)**  
The portlet nodes have two list valued attributes, locales and parameters. See the bean help for alternative, shorter names for these lists.
-   **[Locale-specific attributes in portlet bean](../admin-system/lcl_spcf_att_ptlt_rep.md)**  
Portlets and portlet applications have the following locale-specific attributes. All attributes are optional. You can query the list of locales for which attributes are defined by using the list command \(List valued attributes\).
-   **[Portlet metadata](../admin-system/metadata_ptlt_rep.md)**  
Portlet nodes can own metadata, which are name-value pairs of data that is associated with the content node. Metadata are used by the portal, for example, to set display attributes, or by the user. The Portal bean allows read-only access on portlet metadata. Metadata can be assigned only with portlet-type or application-type repository objects.
-   **[Portlet preferences in portlet bean](../admin-system/ptlt_prf_pltlt_rep.md)**  
It is possible to get and set preferences to portlet instances. Because Portlet beans specify a static portlet only, and not a portlet instance that is found on a page, portlet instances are identified by two ID values: The ID of the portlet that specifies the portlet, and the ID of the portlet entity piid that anchors an instance of the portlet in a page.

**Parent topic:**[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

