---
id: wcm_dev_items_id
title: Entering identification information
---

Specify identification information for the current item, including the name and title for the item. The identification section is common to all item forms.

1.  Type the name of the item in the **Name** field. The name of site areas and content items are used to construct the URL path for those items. Component names are used when components are referenced in web content tags.

    -   The value that you type can contain only alphanumeric characters (a-z, A-Z, 0-9), spaces, and the following characters: `$` `-` `_` `.` `!` `(` `)` `,`

        A period "`.`" must not be used in an authoring template name, field name within an authoring template, a resource collection name, or attribute name within a collection if you use Personalization to personalize web content.

    -   Do not use double-byte or non-ASCII characters.
    -   You can create different item types with the same name, although this option is not recommended.
    -   You can create items of the same type with the same name so long as the path to the item is different. For example, you can create two categories with the same name so long as they are saved under different categories:
        -   `\taxonomyA\categoryA\shoes`
        -   `\taxonomyA\categoryB\shoes`
        -   `\taxonomyB\categoryB\shoes`

    -   Names are not case-sensitive, so you cannot create one item that is named "News" and another item of the same item-type named "news" in the same path.
    
2.  Type the title of the item in the **Display Title** field. The title is the text that is displayed to users when a list of items is viewed. Unlike the name, titles can use double-byte and non-ASCII characters.

    1.  Click **Localizations** to select a text provider plug-in and key. A text provider is used to provide localized text that can be used within web content item forms. The key is used to look up a string from the selected text provider. The text provider displays a different title for each locale it is configured for. The text that is entered in the display title field is only used if an appropriate text label is not available from the selected text provider, or if the text provider is not available.

        Translated text can also be stored in specialized content items. These appear amongst the list of text providers and are selected in the same way. For more information see the topic named **How to store translated text in a content item** in the Knowledge Center.

        **Sorting conventions:** When sorting is applied to a set of items, the item display title is used to sort the items, not the title that is specified in the text provider.

3.  Type a brief description of your item in the **Description** field. The information entered here describes the purpose of the item.

    1.  Click **Localizations** to select a text provider plug-in and key. A text provider is used to provide localized text that can be used within web content item forms. The key is used to look up a string from the selected text provider. The text provider displays a different description for each language it is configured for. The text that is entered in the description field is only used if an appropriate text label is not available from the selected text provider, or if the text provider is not available.

        Translated text can also be stored in specialized content items. These appear amongst the list of text providers and are selected in the same way. For more information see the topic named **How to store translated text in a content item** in the Knowledge Center.



