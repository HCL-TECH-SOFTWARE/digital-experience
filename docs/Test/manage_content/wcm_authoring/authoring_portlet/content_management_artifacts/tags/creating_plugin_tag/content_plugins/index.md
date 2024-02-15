# Content plug-ins


Content plug-ins are used with the current content item.

-   **Analytics Data plug-in**

    -   This plug-in writes information suitable for active site analytics.
    -   For example: `[Plugin:AnalyticsData property="title" css-class="asa.wcm.content_item.title"]`

-   **Copy Text plug-in**

    -   This plug-in writes text once or multiple times.
    -   The syntax of the plug-in is `[Plugin:CopyText text="" count="" separator="" format="trim | tolower | toupper" escape="xml | json | none"]`.

-   **If List Index plug-in**

    -   This plug-in writes the enclosed body markup based on counting where the current item is positioned in the rendering of a Menu, Navigator, Search, Personalization, or Taxonomy component. The plug-in renders the body if the current count is between the specified numbers, subject to the value of 'by'. The first item in the list has count 1. The 'from' and 'to' value can be omitted if no lower or upper bound is required.

    -   For example:
        -   `[Plugin:ifListIndex is='2']` renders the body for the second item.
        -   `[Plugin:ifListIndex from='2']` renders the body for all items from the second onwards.
        -   `[Plugin:ifListIndex to='3']` renders the body for all items up to the third.
        -   `[Plugin:ifListIndex from='2' to='8']` renders the body for items from the second to the eighth.
        -   `[Plugin:ifListIndex from='1' by='2']` or `[Plugin:ifListIndex by='odd']` renders the body for all odd items.
        -   `[Plugin:ifListIndex from='2' by='2']` or `[Plugin:ifListIndex by='even']` renders the body for all even items.

-   **If Count Index plug-in**

    -   This plug-in is similar to ifListIndex Plug-in. It writes the enclosed body markup based on counting where the current item is positioned in the rendering of a Menu, Navigator, Search, Personalization, or Taxonomy component that render the IfCountIndex plug-in, but only counts the items that are visible in a Menu, Navigator, Search, Personalization, or Taxonomy component. The plug-in renders the body if the current count is between the specified numbers, subject to the value of 'by'. The first item in the list has count 1. The 'from' and 'to' value can be omitted if no lower or upper bound is required.

    -   For example:
        -   `[Plugin:ifCountIndex is='2']` renders the body for the second counted item.
        -   `[Plugin:ifCountIndex from='2']` renders the body for all counted items from the second content item onwards.
        -   `[Plugin:ifCountIndex to='3']` renders the body for all counted items up to the third counted item.
        -   `[Plugin:ifCountIndex from='2' to='8']` renders the body for counted items from the second to the eighth.
        -   `[Plugin:ifCountIndex from='1' by='2']` or `[Plugin:ifCountIndex by='odd']` renders the body for all odd counted items.
        -   `[Plugin:ifCountIndex from='2' by='2']` or `[Plugin:ifCountIndex by='even']` renders the body for all even counted items.

    |Item|IfCountIndex Tag Rendered in list|Count method used by the **If List Index Plug-in**|Count method used by the **If Content Index Plug-in**|
    |----|---------------------------------|--------------------------------------------------|------|
    |Item 1|No|1|None|
    |Item 2|Yes|2|1|
    |Item 3|Yes|3|2|
    |Item 4|No|4|2|

-   **JavaScript and XML Encode plug-in**

    -   This plug-in encodes JavaScript or XML.
    -   For example: `[Plugin:jsencode enc="js|xml|jsxml" value="myValue"]`
-   **Ratings plug-in**

    -   This plug-in provides support for rating options for content item.
    -   `[Plugin:ratings]`
-   **Remote Action plug-in**

    -   Used to create a URL for a remote authoring action.
    -   For example: `[Plugin:RemoteAction action="edit" useCurrentContext="true" dialog="true"]`
-   **Tags plug-in**

    -   This plug-in provides tagging support for content items.
    -   `[Plugin:tags]`
-   **Text Provider plug-in**

    -   Used to write a value from a text provider.
    -   The syntax of the plug-in is `[Plugin:TextProvider provider="" key="" defaultValue="" param.0="" param.1="" param.X=""]` where the "provider" parameter must be set to the name of the text provider and the "key" parameter to the key that should be retrieved.
    -   If no provider is set the text provider that is set for the title of the current content is used.
    -   The optional parameter "defaultValue" can be used to set a value that is written in case the text provider does not return a result. Otherwise nothing is written by this plug-in.
    -   Placeholders in the text are replaced with the values of all optional parameters that are specified in the plug-in tag.
    -   From CF09 you can also use the tag alias of "Localize" for this tag. This can be more applicable when you use this tag purely to render localized text. For example: `[Plugin:Localize provider="translated" key="title"]`.
    -   If you intend to use the TextProvider plug-in tag more than once in a component design or presentation template design, you can specify the default text provider name path in one tag:

```
[Plugin:TextProvider defaultProvider="library/sitearea/contentitem"]
```

        You can then leave out the provider parameter in the tags that follow the default provider tag:

        ```
        [Plugin:TextProvider defaultProvider="library/sitearea/contentitem"]
        [Plugin:TextProvider key="key1"]
        [Plugin:TextProvider key="key2"]
        [Plugin:TextProvider key="key3"]
        
        ```

        The default provider is applied in all presentation template designs and component designs, including component designs that are included by using the tags, such as a component tag.

        To remove the default provider, use:

        ```
        [Plugin:TextProvider defaultProvider=""]
        ```


## Additional information

These topics contain additional information for some of these plug-ins.

-   **[Remote action plug-in](wcm_dev_renderplugins_remote.md)**  
Use the RemoteAction plug-in to reference remote actions from your web content. Remote actions are used to run actions, such as creating and editing items and generating views.
-   **[Using the analytics data rendering plug-in tag](sa_asa4wcm_plugin.md)**  
Use the AnalyticsData rendering plug-in tag to inject microformats for Active Site Analytics into your web content.
-   **[Tagging and rating plug-ins for web content](../content_plugins/tagging_rating_plugins/index.md)**  
You can tag and rate portal resources, such as pages and portlets. You can also tag and rate content items that were generated with HCL Web Content Manager and are shown with the web content viewer. Two plug-in components are available to support the tagging and rating of content items in your web content system. You can add the `[Plugin:tags]` component and `[Plugin:ratings]` component in a presentation template to quickly integrate tagging and rating widgets into the current content item.

