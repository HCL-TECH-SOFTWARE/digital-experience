# Locale-specific attributes \| Content bean content hierarchy

The content nodes have two locale-specific attributes, title and description. See the bean help for alternative, shorter names for these attributes. The title must be defined for each locale, though you can set it to the empty string. A new locale is defined by setting the title for it.

Jython example:

```
# example for manipulating locales of a content node:
# select node, remove all, import, add one manually
Content.select(ID)
Content.empty("locales")
Content.nlsimport("nls/content.nls", "page.visualization")
Content.nlsset("title", "en_GB", "Visualisation")
Content.nlsset("description", "en_GB", "A page for...")
```

Jacl example:

```
# example for manipulating locales of a content node:
# select node, remove all, import, add one manually
$Content select ID
$Content empty locales
$Content nlsimport nls/content.nls page.visualization
$Content nlsset title en_GB "Visualisation"
$Content nlsset description en_GB "A page for..."
```

**Parent topic:**[Content hierarchy accessed through Content bean](../admin-system/contnt_hierarchy.md)

