# List valued attributes \| Portal Scripting Interface

List valued attributes can have multiple values. They are queried by using the list command, which returns all values, which are separated by white space.

The object is specified by an ID and the attribute of the object, which is queried, is specified by name. If the bean supports a current selection, the ID is omitted to refer to the selected object.

You can modify list valued attributes by adding or removing a particular value, or by removing all values from the list. The respective commands are add, drop, and empty. With all commands, the object is specified by ID and the attribute by name. The add and drop commands also require the value to be added or removed.

These commands are appropriate if the values do not contain white space and the order of the elements is not important. Currently, all list valued attributes satisfy these restrictions.

You cannot modify all list valued attributes by all of these commands. For example, some lists might not be empty, in which case the empty command is not available. However, if an operation is supported for an attribute, the operation uses the command as described here. List valued attributes might also change as a side effect of other operations. For example, if a title is set for a previously undefined locale, the new locale shows up in the list of locales. For more information, see *Local specific attributes* for details on titles and locales.

Jython example:

```
Content.list(ID, attribute)
Content.add(ID, list, value)
Content.drop(ID, list, value)
Content.empty(ID, list)

# only for beans with a current selection
Content.list(attribute)
Content.add(list, value)
Content.drop(list, value)
Content.empty(list)

# example: add a new markup for the selected node
Content.add("markup", "wml")

# example: drop the american locale for the given node
Content.drop(node\_ID, "locale", "en_US")

# example: drop all locales for the given node
Content.empty(node\_ID, "locale")
```

Jacl example:

```
$Content list ID attribute
$Content add ID list value
$Content drop ID list value
$Content empty ID list

# only for beans with a current selection
$Content list attribute
$Content add list value
$Content drop list value
$Content empty list

# example: add a new markup for the selected node
$Content add markup wml

# example: drop the american locale for the given node
$Content drop node\_ID locale en_US

# example: drop all locales for the given node
$Content empty node\_ID locale
```


**Related information**  


[Locale-specific attributes \| Portal Scripting Interface](../admin-system/lcl_spcf_att.md)

