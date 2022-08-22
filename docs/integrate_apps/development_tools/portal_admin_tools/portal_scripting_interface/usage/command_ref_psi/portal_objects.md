# Command reference - Portal objects \| Portal Scripting Interface

Most portal objects are represented in the script by an object identifier string, which is based on the object ID in the portal. For example: \_6\_00KJL57F9D02H456\_A .

These IDs are expected by methods as arguments and returned as results. Since an ID never contains white spaces or characters that would be misinterpreted by Jacl, it is a convenient handle for a portal object. If a method returns several objects, the IDs are separated by white spaces. The results are then used directly as a Jacl list.

**Note:** In Jython, you use the method split\(\) on the result string to create a list.

Unlike with the GUI, where geometric arrangement and a locale-specific title provide information about an object, the IDs used in the script are unintelligible to the user. Most of the Script beans therefore provide a details method that prints information about an object. The details method of a bean works only for the objects that are handled by that bean. For example, the content bean cannot provide details about IDs returned by the layout bean.

Jython example:

```
# 'search' returns a list of objects
for child in Content.search("all").split():
  # details get printed, they are not returned as a result
  Content.details(child)
}
```

Jacl example:

```
# 'search' returns a list of objects
foreach child [$Content search all] {
  # details get printed, they are not returned as a result
  $Content details $child
}
```

The scripting component tries to generate a common name for the portal objects. The common name is based on a global unique name, an object name, or a title that is assigned to the object. The common name never contains white space, special characters, or characters outside of the US-ASCII range. Hence, even a terminal window that does not support national character sets can display the common name. If suitable input data is available, the generated common name might provide an indication of what an object represents.


