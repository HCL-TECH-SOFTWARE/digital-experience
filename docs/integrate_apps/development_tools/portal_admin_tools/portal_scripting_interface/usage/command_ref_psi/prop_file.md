# Property file format \| Portal scripting interface

You can provide locale-specific attributes for a set of locales in a Java property file. The generic format of Java property files is described in the Java API documentation for method load in class java.util.Properties. The description here covers the particular properties that are interpreted when locale-specific attributes are loaded from a portal script.

The property files are loaded by the script interpreter. They must be on the client workstation where the script is run.

**Note:** A property file must be encoded in the ISO 8859-1 character encoding format.

Here is an example of a property file with no prefix.

Jython example:

```
locales = en de

en.title = English Title
en.description = A description, in English.

de.title = Deutscher Titel
de.description = Eine Beschreibung auf Deutsch.
```

At the core of the file, is the property `locales`, which holds a white space separated list of the locales for which attributes are defined in the file. Only the locales that are listed here are interpreted when the property file is loaded.

The actual attribute values for each locale are defined as separate properties. The key for these properties is composed of the locale and the attribute name, which is separated by a dot. The attribute name is title or description, the locale must match the string that is listed in the locales property. Case is significant for property keys.

There is no fallback algorithm when locale-specific attributes are loaded. If a property title.en is defined, it is not considered when the title for locale en\_US is required.

To combine different sets of local data into a single property file, prefixes can be used. All properties of a set must use the same prefix, which is separated from the property name by a dot. Here is an example of a property file with two sets, by using the prefixes leisure and finance.

Jython example:

```
leisure.locales = en fr
leisure.en.title = Leisure Page
leisure.fr.title = Page de Loisir

finance.locales = en de
finance.en.title = Finance Page
finance.en.description = Holds financial info portlets.
finance.de.title = Finanzseite
```

You can also load property files in the scripting format by using the XML configuration interface. To complete this step, specify the locale as part of the prefix in a localedata tag.


