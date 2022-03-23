# Content hierarchy accessed through Content bean

The content hierarchy is a tree of content nodes. Content nodes can be labels, compositions, and links. Compositions are also called pages. Links can be internal or external. In the GUI, links represent the nodes in the Favorites list. Internal links point to a portal page, external links can point to any URL.

The content hierarchy is accessed and modified by using the Content bean, referenced as $Content in Jacl. The Content bean offers the following functions:

-   Methods that allow to browse in the content tree hierarchy. The navigation method for the Content bean is a tree bean. For more information, see *Tree navigation*
-   Methods that allow to locate a content node, or to search for particular content nodes. For more information, see *Search*.
-   Methods for getting and setting attributes or metadata. The following attribute types are supported by the Content bean.
    -   Plain attributes
    -   List valued attributes
    -   Locale-specific attributes
    -   URL attributes
    -   Metadata attributes
-   Methods to create or delete pages, labels, or URL links, or to derive pages. For more information, see *Lifecycle*.
-   Methods to move pages, labels, or URL links. The sequence of nodes can be modified as described in *Sequence*. For more information, see *Organization*. It is not possible to reorganize the content hierarchy.

-   **[Search \| Content bean content hierarchy](../admin-system/contnt_search.md)**  
The generic search syntax is documented in Search. The Content bean supports the default search criteria, and the following keywords for node types in searches. Alternative, shorter keywords are documented in the bean help.
-   **[Plain attributes \| Content bean content hierarchy](../admin-system/contnt_pl_att.md)**  
In addition to the default attributes, content nodes have the following attributes.
-   **[List valued attributes \| Content bean content hierarchy](../admin-system/contnt_lst_val_att.md)**  
The content nodes have three list valued attributes, locales, markups, and allowedportlets. See the bean help for alternative, shorter names for these lists.
-   **[Locale-specific attributes \| Content bean content hierarchy](../admin-system/contnt_lcl_spf_att.md)**  
The content nodes have two locale-specific attributes, title and description. See the bean help for alternative, shorter names for these attributes. The title must be defined for each locale, though you can set it to the empty string. A new locale is defined by setting the title for it.
-   **[URL attributes \| Content bean content hierarchy](../admin-system/contnt_url_att.md)**  
For a URL content node, the urlget command obtains the URLs. It requires the markup name as an argument. If an ID is given, the requested URL of that content URL node is returned. If the ID is omitted, the requested URL of the currently selected URL node is returned.
-   **[Metadata attributes \| Content bean content hierarchy](../admin-system/contnt_mtdt_att.md)**  
Content nodes can own metadata, which are name-value pairs of data that is associated with the content node. Metadata are used by the portal, for example to set display attributes, or by the user. However, you must ensure that none of the metadata information that is set by the portal is overridden.
-   **[Lifecycle \| Content bean content hierarchy](../admin-system/contnt_lfcycl.md)**  
The create command creates a new content node. The derive command creates a new content node for a page that is derived from another page. The delete command removes a content node.

**Parent topic:**[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

**Related information**  


[Command reference - Tree navigation \| Portal Scripting Interface](../admin-system/tree_nav.md)

[Organization \| Portal Scripting Interface](../admin-system/organization.md)

[Component hierarchy \| Portal scripting interface](../admin-system/compnt_hrchy.md)

