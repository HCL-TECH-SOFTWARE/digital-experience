# How to store translated text in a content item or site area 

Translated text can be stored in a content item or site area. The translated text can then be referenced in web content tags, or as localized text in web content authoring portlet forms.

## How to create the content item or site area to store the translated text

-   Create a content item or site area.
-   Add `ibm.wcm.TextProvider` as a keyword in the content item or site area's profile settings.
-   Create a set of text elements for each language that is used by your site. Each text element must be named entering a language code for the language in the name field. See [Supported languages](../reference/supportedlanguages.md) for a list of codes. At render time, if the requested language does not exist in the list of elements, the first element is used as the default language.
-   Type the translated text in each field by using this format: `keyname=translated-text`. You can add as many key names as you need into each text element. For example:

    ```
    keyname1=translated text
    keyname2=translated text
    keyname3=translated text
    
    ```

-   The key names must be consistent for each language.
-   The list of key names and translated text uses the [Java Properties File Format](https://docs.oracle.com/javase/7/docs/api/java/util/Properties.html#load%28java.io.Reader%29).

## How to select the translated text in a web content authoring portlet form

Fields that support localized text have a **Localizations** link next to the field title. Click Localizations to select the content item or site area where your translated text is stored, and then select a key name.

## How to select the translated text in a web content tag

You can render translated text by using a plug-in tag:

```
[Plugin:Localize key="" provider=""]
```

You specify the name path to the content item or site area in the `provider` parameter, and the name of the key to display in the `key` parameter. For example:

```
[Plugin:Localize key="keyname2" provider="library/sitearea/contentitem"]
```

!!! note
    If you move or rename a content item or site area that is used to store localized text, or its parent, you will break the localized reference that is specified in a tag. To avoid this issue, you can instead specify the item ID instead of the name path.

For example:

```
[Plugin:Localize provider="[Element key='Text Provider Name' format='id']" key="keyname2"]
```

See [Content plug-ins](../tags/creating_web_content_tags/creating_plugin_tag/connector_plugins/index.md) for further information about the localized plug-in within the text provider plug-in tag section.

## Setting a default localized item in a web content tag

If you intend to use the Localize plug-in tag more than once in a component design or presentation template design using the same the localized item, you can specify the default localized item name path in one tag:

```
[Plugin:Localize defaultProvider="library/sitearea/contentitem"]
```

You can then leave out the provider parameter in the tags that follow the default provider tag:

```
[Plugin:Localize defaultProvider="library/sitearea/contentitem"]
[Plugin:Localize key="key1"]
[Plugin:Localize key="key2"]
[Plugin:Localize key="key3"]

```

The default provider is applied in all presentation template designs and component designs, including component designs that are included by using the tags, such as a component tag.

To remove the default provider, use:

```
[Plugin:Localize defaultProvider=""]
```

## How to use replacement characters

You can use replacement characters with the localized plug-in tag.

For example, to use `keyname_with_replacement=Welcome {0} to the website of {1}` in the content item that is located at library/sitearea/contentitem, use:

```
[Plugin:Localize key="keyname_with_replacement" provider="library/sitearea/contentitem" param.0="Fred" param.1="Mary"]
```

This is rendered as:

```
Welcome Fred to the web site of Mary
```

## Hiding a localized item from the web content authoring interface

If you don't want a localized item to appear in the list of localized items in the web content authoring interface, add a text element with the name of isShownInAuthoringUI. Then, type the word false in the text element field. You can still reference this localized item in a plugin-in tag even though it is now hidden from the list of localized items in the web content authoring interface.


