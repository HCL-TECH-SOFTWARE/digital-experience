# Search - Portlet repository

The generic search syntax is documented in Search. The Portlet bean supports the following keywords for node types in searches. Alternative, shorter keywords are documented in the bean help.

-   webmodule, webmodules, module, modules, wm, w, m
-   application, applications, app, apps, a
-   portlet, portlets, p
-   concrete \(portlet or application\)
-   abstract \(web module\)
-   all or any

In addition to the default search criteria, the Portlet bean supports two criteria that match on the name of the objects. The name is similar to a common name, except that there are no restrictions on the character set. The name is a real attribute of the repository objects, not a synthesized one like the common name.

|Attribute|Description|
|---------|-----------|
|namehas|The value is a string. The search is for objects with the string as a substring in their name. Comparison is not case-sensitive.|
|nameis|The value is a string. The search is for objects with the string as their name. Comparison is case-sensitive.|

Jython example:

```
# example: search all applications related to news
Portlet.deselect()
Portlet.search("application", "namehas", "News")

# example: find and select unique news portlet
#          will fail if none or several are found
Portlet.find("portlet", "nameis", "NewsPortlet", "select")
```

Jacl example:

```
# example: search all applications related to news
$Portlet deselect
$Portlet search application namehas "News"

# example: find and select unique news portlet
#          will fail if none or several are found
$Portlet find portlet nameis "NewsPortlet" select

```


