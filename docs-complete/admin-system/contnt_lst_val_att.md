# List valued attributes \| Content bean content hierarchy

The content nodes have three list valued attributes, locales, markups, and allowedportlets. See the bean help for alternative, shorter names for these lists.

The locales list holds the locales for which locale-specific attributes are defined. For more information, see *Locale-specific attributes*. The commands list, drop, and empty are available for locales. New values can be added by setting a title for the respective locales.

The markups list holds the markups that are supported by the content node. The commands list, add, and drop are available for markups. At least one markup must be supported.

The allowedportlets list holds the portlets that are registered as allowed portlets for that page. The total list of portlets that can be used for the page is this allowedportlets list, plus the lists of allowed portlets of all parent pages.

Jython example:

```
# example for manipulating locales of a content node:
# select node, list locales, remove and re-create a locale
# "locale" is an alternative name for the "locales" list
Content.select(ID)
Content.list("locales")
Content.drop("locale", "en")
Content.nlsset("title", "en", "New English Title")

# example for manipulating markups of a content node:
# select node, list markups, replace wml by chtml
# "markup" is an alternative name for the "markups" list
Content.select(ID)
Content.list("markups")
Content.add("markup", "chtml")
Content.drop("markup", "wml")
Content.list("allowedportlets")
```

Jacl example:

```
# example for manipulating locales of a content node:
# select node, list locales, remove and re-create a locale
# "locale" is an alternative name for the "locales" list
$Content select ID
$Content list locales
$Content drop locale en
$Content nlsset title en "New English Title"

# example for manipulating markups of a content node:
# select node, list markups, replace wml by chtml
# "markup" is an alternative name for the "markups" list
$Content select ID
$Content list markups
$Content add markup chtml
$Content drop markup wml
$Content list allowedportlets
```

**Parent topic:**[Content hierarchy accessed through Content bean](../admin-system/contnt_hierarchy.md)

**Related information**  


[Plain attributes \| Content bean content hierarchy](../admin-system/contnt_pl_att.md)

[Locale-specific attributes \| Portal Scripting Interface](../admin-system/lcl_spcf_att.md)

[Lifecycle \| Content bean content hierarchy](../admin-system/contnt_lfcycl.md)

