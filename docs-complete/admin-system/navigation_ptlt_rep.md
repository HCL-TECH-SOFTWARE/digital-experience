# Navigation - Portlet repository 

The Portlet bean is a tree bean. The navigation is documented in Tree navigation.

There is one dedicated select command to select the web module of the currently selected portlet application or portlet.

Jython example:

```
Portlet.select("the", "root")
Portlet.select("the", "parent")
Portlet.select("the", "webmodule")
```

Jacl example:

```
$Portlet select the root
$Portlet select the parent
$Portlet select the webmodule

```

**Parent topic:**[Portlet repository ](../admin-system/ptlt_rep.md)

**Related information**  


[Command reference - Tree navigation \| Portal Scripting Interface](../admin-system/tree_nav.md)

