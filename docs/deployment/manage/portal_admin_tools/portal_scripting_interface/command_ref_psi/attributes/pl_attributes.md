---
title: Plain attributes
---

# Plain attributes | Portal Scripting Interface

Plain attributes have a single value that is queried by using the get command. The object for which to query the attribute is specified by an ID, and the attribute is specified by name.

If the attribute is not read-only, the value is set by using the set command, which expects the new value as the last argument. If the bean supports a current selection, the ID is omitted for both commands to refer to the selected object.

Jython example:

```
Content.get(ID, attribute)
Content.set(ID attribute value)

# only for beans with a current selection
Content.get(attribute)
Content.set(attribute value)

# example: get unique name of a content node
Content.get(ID, "uniquename")

# example: get type of the selected content node
Content.get("type")

# example: set theme of a content node
themeid = Look.find("theme", "commonameis", "Science")
Content.set(ID, "theme", themeid)

```

Jacl example:

```
$Content get ID attribute
$Content set ID attribute value

# only for beans with a current selection
$Content get attribute
$Content set attribute value

# example: get unique name of a content node
$Content get ID uniquename

# example: get type of the selected content node
$Content get type

# example: set theme of a content node
set themeid [$Look find theme commonameis "Science"]
$Content set ID theme $themeid

```

The following are standard attribute names available for all objects. Names for more attributes of individual portal object types are documented with the respective bean. Alternative or shorter names are documented in the bean help.

|Value|Description|
|-----|-----------|
|`id`|The identifier of the object.|
|`type`|The type of the object.|
|`uniquename`|The unique name of the object if it is assigned.|
|`commonname`|The common name of the object, if it is generated.|


