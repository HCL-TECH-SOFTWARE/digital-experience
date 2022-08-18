# Navigation - Component hierarchy

The Layout bean is a tree bean. The layout bean provides the index command to obtain and resolve so-called index paths. For more information, see Index paths. When started with an ID as argument, the command returns the absolute index path for that component. When started without an argument, it returns the absolute index path for the currently selected component.

When started with an index path and a keyword, the index command resolves the argument path. If the keyword is find, it returns the ID of the addressed component. If the keyword is select, it also selects it. The keyword is not case-sensitive. If the index path is not absolute, it is resolved relative to the selected component.

Jython example:

```
Layout.index()
Layout.index(ID)

Layout.index(ipath, "find")
Layout.index(ipath>, "select")

# example: resolve an absolute index path
Layout.index("/1/0/3", "find")

# example: select first child of current container
Layout.index("0", "select")
```

Jacl example:

```
$Layout index
$Layout index ID

$Layout index ipath find
$Layout index ipath select

# example: resolve an absolute index path
$Layout index /1/0/3 find

# example: select first child of current container
$Layout index 0 select

```

**Parent topic:**[Component hierarchy \| Portal scripting interface](../admin-system/compnt_hrchy.md)

**Related information**  


[Index paths \| Portal scripting interface](../admin-system/index_paths.md)

