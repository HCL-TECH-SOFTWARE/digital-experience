# Lifecycle - Component hierarchy 

The create command creates a new component. You must select the parent container for the new component. The first argument is a keyword that indicates whether a container or control is created. Alternative, shorter keywords are documented in the bean help.

The interpretation of the second argument depends on the type of object to create. When you create a container, it is the initial value for the orientation attribute. When you create a control, it is the value for the portletdefinition attribute. See *Plain attributes* for both attributes. If the keyword select is appended, the newly created node becomes the current selection.

A page that is created, or from which all components are deleted, does not have a root container. Only in that case, it is possible to create a container without selecting a parent. The new container becomes the root container for the page. It is not possible to create a page with a root control.

Jython example:

```
Layout.create("container", orientation)
Layout.create("container", orientation, "select")

Layout.create("control", portlet\_ID)
Layout.create("control", portlet\_ID, "select")

# example: append a column to the second row
Layout.index("/1", "select")
Layout.create("container", "column")

# example: create a new control in the first row or column
Layout.index("/0", "select")
Layout.create("control", portlet\_ID)

# example: create a page with a control in a row
Content.create("page", "New Page", "html", "select")

# no deselect required, since nothing can be selected
Layout.create("container", "row", "select")
Layout.create("control", portlet\_ID)
```

Jacl example:

```
$Layout create container orientation
$Layout create container orientation select

$Layout create control portlet\_ID
$Layout create control portlet\_ID select

# example: append a column to the second row
$Layout index /1 select
$Layout create container column

# example: create a new control in the first row or column
$Layout index /0 select
$Layout create control portlet\_ID

# example: create a page with a control in a row
$Content create page "New Page" html select
# no deselect required, since nothing can be selected
$Layout create container row select
$Layout create control portlet\_ID
```

The only argument that is required for the delete command is the ID of the node to delete. To prevent accidental deletion, you must explicitly specify the ID even if the node is selected. You can delete a container only if it is empty. If the selected node is deleted, the bean automatically clears.

Jython example:

```
Layout.delete ID
```

Jacl example:

```
$Layout delete ID

```

**Parent topic:**[Component hierarchy \| Portal scripting interface](../admin-system/compnt_hrchy.md)

**Related information**  


[Plain attributes - Component hierarchy ](../admin-system/pl_att_compnt_hrchy.md)

