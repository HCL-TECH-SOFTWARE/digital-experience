# Organization \| Portal Scripting Interface

For some beans, in particular the Content and Layout beans, the order of nodes is significant. In tree beans, the parent relationship of the nodes defines the hierarchy. Only nodes with the same parent node are in a particular order in trees.

## Sequence

The move command is used to reorder nodes. The order of nodes is tracked as a non-negative integer position assigned to each node, with the first node at position 0. For tree beans, the positions compare only among the children of a common parent node. You can query the position as a read-only plain attribute.

The order of nodes is changed by the move command. It is used on a single node to assign an absolute position or to displace by a distance. The positions of the other affected nodes are updated automatically. In both cases, the new position of the node always remains within bounds. The position or displacement argument is adjusted by the bean.

The move command expects the ID of the node to be moved, a keyword that indicates whether the change is absolute or relative, and the new position or distance. If the bean supports a current selection, the ID is omitted to move the selected object.

Jython example:

```
Layout.move(ID, "to", position)
Layout.move(ID, "by", distance)

# only for beans with a current selection
Layout.move("to", position)
Layout.move("by", distance)

# example: move selected node to the first position
Layout.move("to", 0)

# example: move given node one down in the list
# if it already is the last node, do nothing
Layout.move(node\_ID, "by", 1)

# example: move selected node 4 up in the list
# if it is at position 0 to 4, it becomes the new head
Layout.move("by", -4)

# example: move given node to the last position
# negative absolute positions are interpreted as max int
Layout.move(node\_ID, "to", -1)
```

Jacl example:

```
$Layout move ID to position
$Layout move ID by distance

# only for beans with a current selection
$Layout move to position
$Layout move by distance

# example: move selected node to the first position
$Layout move to 0

# example: move given node one down in the list
# if it already is the last node, do nothing
$Layout move node\_ID by 1

# example: move selected node 4 up in the list
# if it is at position 0 to 4, it becomes the new head
$Layout move by -4

# example: move given node to the last position
# negative absolute positions are interpreted as max int
$Layout move node\_ID to -1
```

## Hierarchy

In some tree beans, you can change the parent of a node in the tree, moving the whole subtree under that node to another part of the tree.

This change of the parent of a node in the tree is achieved by the commands transfer or adopt. With transfer, the ID of the node and new parent are specified explicitly, whereas adopt uses the selected layout mode as the new parent. To improve readability and avoid confusion about the interpretation of the two IDs, the arguments of the transfer command are separated by the keyword "to".

Jython example:

```
Content.transfer(child\_ID, "to", parent\_ID)
Layout.transfer(child\_ID, "to", parent\_ID)
Layout.adopt(child\_ID)

# example: move a layout node under the root component of the page
Layout.select("the", "root")
Layout.adopt(node\_id)
```

Jacl example:

```
$Content transfer child\_ID to parent\_ID
$Layout transfer child\_ID to parent\_ID
$Layout adopt child\_ID

# example: move a layout node under the root component of the page
$Layout select the root
$Layout adopt node\_ID
```

**Parent topic:**[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

**Related information**  


[Content hierarchy accessed through Content bean](../admin-system/contnt_hierarchy.md)

[Component hierarchy \| Portal scripting interface](../admin-system/compnt_hrchy.md)

[Plain attributes - Component hierarchy ](../admin-system/pl_att_compnt_hrchy.md)

