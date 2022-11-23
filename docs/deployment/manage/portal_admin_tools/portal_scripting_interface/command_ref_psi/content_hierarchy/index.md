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

???+ info "Related information"  
    -   [Command reference - Tree navigation | Portal Scripting Interface](../../../../portal_admin_tools/portal_scripting_interface/command_ref_psi/tree_nav.md)
    -   [Organization | Portal Scripting Interface](../../../../portal_admin_tools/portal_scripting_interface/command_ref_psi/organization.md)
    -   [Component hierarchy | Portal scripting interface](../../../../portal_admin_tools/portal_scripting_interface/command_ref_psi/cmpnt_hierarchy/index.md)

