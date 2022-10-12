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

???+ info "Related information"  
    -   [Command reference - Tree navigation | Portal Scripting Interface](../../../../portal_admin_tools/portal_scripting_interface/command_ref_psi/tree_nav.md)

