---
title: Locale-specific attributes
---

# Locale-specific attributes | Portal Scripting Interface

Locale-specific attributes have different values for different languages and countries. They can be queried by using the nlsget command, where nls stands for National Language Support.

The object is specified by an ID and the object's attribute, which is queried is specified by name. If the bean supports a current selection, the ID is omitted to refer to the selected object. The following are the usual locale-specific attributes.

-   title
-   description
-   shorttitle
-   keywords

For the Content bean, only the locale-specific attributes title and description exist. For the Portlet bean, all four of the attributes exist.

The language and country are given as a locale, which consists of a language identifier, an optional country identifier, and an optional variant. Language and country are specified by standard two letter abbreviations, the language in lowercase and the country in uppercase letters. The components are separated by underscore characters. Here are some example locales:

|Locale|Description|
|------|-----------|
|`en`|General English|
|`en_US`|American English|
|`de_CH`|Swiss German|
|`pt_BR`|Brazilian Portuguese|

The list valued attributes locales holds all locales for which a locale-specific attribute might be defined. However, all locale-specific attributes are optional for all locales. No fallback algorithm that would, for example, return the general Portuguese value if the Brazilian Portuguese value is not set is present. Such fallback algorithms are used when pages are assembled by the portal, but not for the administrative access that is provided by the portal scripting component.

Locale-specific attributes that are not read-only are set by using the `nlsset` command. Specify the new value of the attribute as the last argument in the arguments for the nlsget command. By setting an attribute for a locale that was not used before, the new locale is added to the list valued attribute locales.

Jython example:

```
Content.nlsget(ID, attribute, locale)
Content.nlsset(ID, attribute, locale, value)

Content.nlsget(attribute, locale)
Content.nlsset(attribute, locale, value)

# example: get american title of a specific content node
Content.nlsget(node_ID, "title", "en_US")

# example: set german description of current selection
Content.nlsset("description", "de_DE", "Kurze Beschreibung")

# example: set general english title of a specific node
Content.nlsset(node_ID, "title", "en", "English Title")
```

Jacl example:

```
$Content nlsget ID attribute locale
$Content nlsset ID attribute locale value

$Content nlsget attribute locale
$Content nlsset attribute locale value

# example: get american title of a specific content node
$Content nlsget node\_ID title en_US

# example: set german description of current selection
$Content nlsset description de_DE "Kurze Beschreibung"

# example: set general english title of a specific node
$Content nlsset node\_ID title en "English Title"
```

As locale-specific attributes are often translated independently from script development, the `nlsimport` command is used to read a separate property file that defines attribute values for a set of locales. By specifying an appropriate prefix, you can load values from the same property files that are used by the XML configuration interface (XMLAccess).

Jython example:

```
Content.nlsimport(ID, file_name)
Content.nlsimport(ID, file_name, prefix)
```

Jacl example:

```
$Content nlsimport ID file_name
$Content nlsimport ID file_name prefix
```

To delete all locale-specific attributes before a set of values is imported, empty the list valued attribute locales as described in *List valued attributes*.


???+ info "Related information"  
    -   [List valued attributes | Portal Scripting Interface](../../../../portal_admin_tools/portal_scripting_interface/command_ref_psi/attributes/lstvl_attributes.md)
    -   [List valued attributes | Content bean content hierarchy](../../../../portal_admin_tools/portal_scripting_interface/command_ref_psi/content_hierarchy/contnt_lst_val_att.md)

