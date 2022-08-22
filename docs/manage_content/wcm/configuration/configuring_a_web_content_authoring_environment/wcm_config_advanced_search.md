# How to configure authoring portlet search

You can change the configuration of the authoring portlet to change how search works.

You define and manage authoring portlet search options in the `WCM WCMConfigService` service by using the WebSphere® Integrated Solutions Console.

You can specify the following properties:

-   **`wcm.authoringui.advancedsearch.searchonselection`**

    -   Possible values are `true` or `false`.
    -   If set to `true`, when you click **Advanced Search**, an advanced search is automatically run based on any text that is entered in the basic search. If nothing is entered in the basic search, advanced search is not automatically run.
    -   If set to `false`, advanced search is not automatically run if there is existing text in the basic search field.
    -   If the property is not specified, this setting defaults to the `false` behavior.
-   **`wcm.authoringui.simplesearch.addstar`**

    -   Possible values are `true` or `false`.
    -   If set to `true`, a wildcard character is added to the end of text that is entered in the basic search. For example, searching for `Span` automatically searches for `Span*` and displays search results that have a title, description or keywords that begin with the word `Span` such as `Spanish`.
    -   If set to `false`, only exact matches to the text entered in the basic search field are searched for.
    -   If the property is not specified, this setting defaults to the `false` behavior.
-   **`wcm.authoringui.advancedsearch.addstar`**

    -   Possible values are `true` or `false`.
    -   If set to `true`, a wildcard character is added to the end of text that is entered in the advanced search. For example, searching for `Span` automatically searches for `Span*` and displays search results that have a title, description or keywords that begin with the word `Span` such as `Spanish`.
    -   If set to `false`, only exact matches to the text entered in the advanced search field are searched for.
    -   If the property is not specified, this setting defaults to the `false` behavior.


**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

