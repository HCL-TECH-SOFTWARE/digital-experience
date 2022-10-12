---
title: Component hierarchy
---

# Component hierarchy | Portal scripting interface

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

-   **[Navigation - Component hierarchy](../admin-system/navigation_compnt_hrchy.md)**  
The Layout bean is a tree bean. The layout bean provides the index command to obtain and resolve so-called index paths. For more information, see Index paths. When started with an ID as argument, the command returns the absolute index path for that component. When started without an argument, it returns the absolute index path for the currently selected component.

???+ info "Related information"  
    -   [Content hierarchy accessed through Content bean](../../../../portal_admin_tools/portal_scripting_interface/command_ref_psi/content_hierarchy/index.md)
    -   [Organization | Portal Scripting Interface](../../../../portal_admin_tools/portal_scripting_interface/command_ref_psi/organization.md)

