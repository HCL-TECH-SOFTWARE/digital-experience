# Component hierarchy \| Portal scripting interface

The component hierarchy is a tree of components on a page. Components can be containers and controls. A container holds other components, a control displays a portlet. The component hierarchy is accessed and modified by using the Layout bean, referenced as $Layout in Jacl.

Only pages have a component hierarchy. The Layout bean always refers to the page that is selected in the Content bean. For more information, see *Content hierarchy*. When the Content bean has no current selection, or the current selection is not a page, the Layout bean cannot be used. Whenever a node is selected in the Content bean it clears the current selection of the Layout bean.

In the GUI, the component hierarchy of a page is manipulated by the customizer. The operations of the Layout bean allow for the definition of component hierarchies that the customizer cannot handle. The script developer must take care if the customizer is to be used alongside scripting.

The Layout bean offers the following functions:

-   Methods that allow to browse in the layout hierarchy. For more information, see *Navigation*.
-   Methods that allow to locate a layout node, or to search for particular layout nodes. For more information, see *Search*.
-   Methods for getting and setting attributes or flags. The following attribute types are supported by the Layout bean:
    -   Plain attributes.
    -   Global flags
-   Methods to create or delete layout objects. For more information, see *Lifecycle*.
-   Methods to move or transfer layout objects. You can modify the component hierarchy as described in *Sequence* and *Hierarchy*. For more information, see *Organization*.

-   **[Navigation - Component hierarchy ](../admin-system/navigation_compnt_hrchy.md)**  
The Layout bean is a tree bean. The layout bean provides the index command to obtain and resolve so-called index paths. For more information, see Index paths. When started with an ID as argument, the command returns the absolute index path for that component. When started without an argument, it returns the absolute index path for the currently selected component.
-   **[Search - Component hierarchy ](../admin-system/search_compnt_hrchy.md)**  
The generic search syntax is documented in Search. The Layout bean supports the following keywords for node types in searches. Alternative, shorter keywords are documented in the bean help.
-   **[Plain attributes - Component hierarchy ](../admin-system/pl_att_compnt_hrchy.md)**  
In addition to the default attributes, components have the following attributes. Alternatively, shorter names are documented in the bean help.
-   **[Global flags - Component hierarchy ](../admin-system/gbl_flgs_compnt_hrchy.md)**  
A composition hierarchy has several global flags. The global flags are similar to attributes of the content page node, except that they are associated with the composition hierarchy rather than the content node. Therefore, they are accessed through the Layout bean after the page in the Content bean is selected.
-   **[Lifecycle - Component hierarchy ](../admin-system/lifecycle_compnt_hrchy.md)**  
The create command creates a new component. You must select the parent container for the new component. The first argument is a keyword that indicates whether a container or control is created. Alternative, shorter keywords are documented in the bean help.

**Parent topic:**[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

**Related information**  


[Content hierarchy accessed through Content bean](../admin-system/contnt_hierarchy.md)

[Organization \| Portal Scripting Interface](../admin-system/organization.md)

