# Command reference - Tree navigation \| Portal Scripting Interface

The Content, Layout, and Portlet beans each represent a tree hierarchy. The basic navigation methods are the same for all three. A tree bean provides methods to access the root node to look up the parent and children of a node, and to maintain a cursor that points to a selected node in the tree.

The code examples use the Content bean, but you can do the same operations on the other tree beans as well. The command root returns the ID of the root node, as a fixed starting point for navigation.

Jython: Content.root\(\)

Jacl: $Content root

You can select a node by its ID by using the select command. You can clear the current selection by using deselect or by using select without an argument. You can return the ID of the selected node by using the current command. For interactive use, csn is an alias for current.

Jython example:

```
Content.select ID
Content.deselect
Content.current
Content.csn

# example: select the root node
Content.select(Content.root())

```

Jacl example:

```
$Content select ID
$Content deselect
$Content current
$Content csn

# example: select the root node
$Content select [$Content root]

```

The path command returns a list of all IDs from the root to the currently selected node. In a similar way, the children command returns the children of the selected node. You can obtain the ID of the parent of the selected node by using parent.

Jython example:

```
Content.path
Content.parent
Content.children

# example: select a node and print its children
Content.select(node\_ID)
for child in Content.children().split():
    print child
```

Jacl example:

```
$Content path
$Content parent
$Content children

# example: select a node and print its children
$Content select node\_ID
foreach child [$Content children] { puts "$child" }
```

You can also use the commands path, parent, and children with an explicit ID instead of implicitly referring to the currently selected node.

Jython example:

```
Content.path(ID)
Content.parent(ID)
Content.children(ID)
```

Jacl example:

```
$Content path ID
$Content parent ID
$Content children ID
```

For simplicity, there are dedicated select commands for the root node and for the parent of the currently selected node. In the following example, the first argument is a dummy that is used to distinguish the method from the select with an ID argument. The dummy argument is not interpreted. The second argument is a keyword, which is not case-sensitive. Alternative, shorter keywords are documented in the bean help.

Jython example:

```
Content.select("the", "root")
Content.select("the", "parent")
```

Jacl example:

```
$Content select the root
$Content select the parent
```


**Related information**  


[Content hierarchy accessed through Content bean](../admin-system/contnt_hierarchy.md)

[Navigation - Portlet repository](../admin-system/navigation_ptlt_rep.md)

