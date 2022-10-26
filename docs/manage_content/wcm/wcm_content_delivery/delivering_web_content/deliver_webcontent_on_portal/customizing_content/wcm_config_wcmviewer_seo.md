# Adding HTML meta tags for Search Engine Optimization

Search engine optimization \(SEO\) focuses on improving the visibility of a page or website in search engine results. A basic technique of SEO is adding HTML title and meta tags to your page source. These meta tags are used to define description information and other metadata that search web engines and crawlers can use when they create search indexes and collections. When you include content in a page with a web content viewer, you can improve the search engine optimization of the page by adding title and meta tags with values derived from the web content itself.

!!! note
    This support is available with Combined Cumulative Fix 12 for HCL Web Content Manager Version 7.

By default, the HTML title for a page is defined by the page title in the portal. However, when you add a web content viewer to a page to render web content, you can override the value that is used for the HTML title. For metadata tags to be included as portlet preferences, you must set a custom HTML title so that only one portlet can contribute the metadata to the head section. If this default behavior does not suit your requirements, you can override it as described in step `3.4` of the following procedure.

With the **Page Display Title** field in the portlet settings for the viewer, you can define an HTML title that better reflects the content on the page. You can even have the viewer pull the title directly from the rendered content.

!!! note
    Although multiple web content viewers on the same page can set meta tag values, this practice does not necessarily result in improved SEO. This issue can be further complicated when multiple viewers set different values for the same meta tag name. When you have multiple viewers on the same page, select the viewer whose content best represents what the page is about. You can then use that viewer to define a new HTML title and any meta tags.

1.  To override the HTML title for a page and set meta tags, complete the following steps.
2.  Select one web content viewer to be the primary viewer on the page. Click **Edit Shared Settings**, and select a value for the **Page Display Title** field in the portlet settings for the viewer.

    To override the HTML title, you must select a value other than **Use default title**. If you want the title value to come directly from the web content that is rendered by the viewer, select **Select from content**. This setting uses the value of the **Display title** field for the content item in Web Content Manager.

    After you save the changes, the page header is updated with the new title value. For example:

    ```
    <head>
       <title>Display title of the rendered web content</title>
    </head>
    ```

3.  Create portlet preferences for each meta tag that you want to add to the page header.

    Each meta tag is defined by a pair of portlet preferences:

    -   `meta.tag.name.suffix` identifies the name of the meta tag \(for example, `keywords`\).
    -   `meta.tag.content.suffix` identifies the value of the meta tag.
    You can also define a specific attribute for the meta tag with the following portal preference: `meta.tag.attribute.suffix.`

    The suffix portion of each preference is used to associate a name preference with its related value preference. The suffix can be any value while it is unique across the preferences.

    There are two ways you can add portlet preferences:

    -   The **Manage Portlets** portlet of the administration interface. Locate the instance of the web content viewer you want to modify, and select the **Configure portlet** icon.
    -   The XML configuration interface. Export the page that contains the instance of the web content viewer you want to modify. Edit the exported XML file with the meta tags you want to add, and update the page by using the XML file along with the xmlaccess command.
    If you do not set a portlet preference for the attribute name, the attribute name "name" is used by default.

    1.  Specify the portal preference for the name of the meta tag.

        The meta tag name takes the following format:

        ```
        meta.tag.name.suffix=name
        ```

        If you want to specify an attribute other than the name attribute, you can define the attribute name with the following format:

        ```
        meta.tag.attribute.suffix=attribute\_name
        ```

        For example, to add the following meta tag with the name `keywords`:

        ```
        <meta name=”keywords” content=””/>
        ```

        Specify the following preference:

        ```
        meta.tag.name.1=keywords
        ```

        To add the following meta tag with the `http-equiv` attribute:

        ```
        <meta http-equiv=”content-language” content=”en-US”/>
        ```

        Specify the following preference:

        ```
        meta.tag.attribute.1=http-equiv
        ```

    2.  Specify the portal preference for the value of the meta tag.

        The value of the meta tag can be specified in three ways:

        -   You can explicitly enter text for the meta tag value.
        -   The meta tag value can be derived from the value of a text element in the rendered web content.
        -   The meta tag value can be derived from properties that contain information about the rendered web content.
        Depending on how you want to specify the meta tag value, different portlet preferences are required. Only one value can be specified per suffix.

        -   **Use preset text**

            The meta tag value takes the following format:

            ```
            meta.tag.content.text.suffix=text
            ```

            The suffix portion must match the suffix value of the associated `meta.tag.name.suffix` preference. The text portion indicates the text to use for the meta tag value.

        -   **Use the value of an element**

            The meta tag value takes the following format:

            ```
            meta.tag.content.element.suffix=name\_of\_element
            ```

            The suffix portion must match the suffix value of the associated `meta.tag.name.suffix` preference. The name\_of\_element portion indicates the name of the element from the web content that is rendered.

            |Element|Meta tag value|
            |-------|--------------|
            |Text component|Text of the element|
            |Date component|Date of the element|
            |Image component|URL of the image|
            |File component|URL of the file|

        -   **Use a property**

            The meta tag value takes the following format:

            ```
            meta.tag.content.property.suffix=property
            ```

            The suffix portion must match the suffix value of the associated `meta.tag.name.suffix` preference. The property portion indicates the property that contains information about the web content that is rendered. The properties are associated with fields on the rendered content.

            |Property|Meta tag value|
            |--------|--------------|
            |`AdditionalViewers`|Name of additional viewers|
            |`Authors`|Display names of the authors of the rendered content|
            |`authtemplatename`|Name of the authoring template of the rendered content|
            |`authtemplatetitle`|Display title of the authoring template of the rendered content|
            |`Categories`|Titles of any categories associated with the rendered content|
            |`CreationDate`|Creation date of the rendered content|
            |`Creator`|Display name of the user who created the rendered content|
            |`CurrentStage`|Name of the current workflow stage of the rendered content|
            |`Description`|Localized description of the rendered content|
            |`ExpiryDate`|Expiration date of the rendered content|
            |`ID`|ID of the rendered content|
            |`GeneralDateOne`|Date from the general date one field|
            |`GeneralDateTwo`|Date from the general date two field|
            |`Keywords`|Keywords associated with the rendered content|
            |`LastModifiedDate`|Date that the rendered content was last modified|
            |`LastModifier`|Display name of the user who made the last change to the rendered content|
            |`Name`|Name of the rendered content|
            |`Owners`|Display names of the owners of the rendered content|
            |`PublishDate`|Date the rendered content was published|
            |`SitePath`|Site path of the rendered content|
            |`Status`|Workflow status of the rendered content|
            |`Title`|Localized title of the rendered content|
            |`Workflow`|Name of the workflow of the rendered content|

        For several of the most common meta tags, default values are predefined. For these meta tags, you can create the portlet preference for only the meta tag name. The meta tag value is provided automatically, without the need for a corresponding name preference. The following meta tags have default values:

        -   **`Author`**

            The default value is a list of the authors of the rendered content.

        -   **`Keywords`**

            The default value is list of any keywords that are associated with the rendered content.

        -   **`Description`**

            The default value is the localized description of the rendered content.

        If you do not want to use the default value, you can set the value by using one of the methods previously described.

    3.  If the value of the meta tag requires a scheme attribute, specify the scheme attribute with the `meta.tag.scheme.suffix` preference.

        The meta tag scheme attribute takes the following format:

        ```
        meta.tag.scheme.suffix=attribute\_value
        ```

        For example, to add the following scheme attribute with the value `W3CDTF`:

        ```
        <meta name="DC.date" content="2000-01-01T12:00+00:00" scheme="W3CDTF"/>
        ```

        Specify the following preference:

        ```
        meta.tag.scheme.1=W3CDTF
        ```

        The format and scheme that are used to write date elements and content properties that are related to date and time information, such as the `LastModifiedDate` property, depends on the meta tag attribute name. By default, all date and time information is formatted according to the date format defined by the HTTP specification. The format that is used to write date and time information in other meta tags is the data and time format that is recommended by the World Wide Web Consortium \(W3C\) under the scheme named W3CDTF.

    4.  If you want a specific metadata item to be written even if the portlet is not the primary portlet of the page and therefore does not set the page title, then add a preference with the following format:

        ```
        meta.tag.primary.portlet.only.suffix = false
        ```

        Example:

        ```
        meta.tag.primary.portlet.only.1 = false
        ```


## Examples

The following examples demonstrate the different ways of specifying portlet preferences and the resulting meta tags in the output.

-   Setting the meta tag value with the user who created the rendered content:

    ```
    meta.tag.name.1=DC.creator
    meta.tag.content.property.1=Creator
    
    ```

    Result:

    ```
    <meta name=”DC.creator” content=”content admin”/>
    ```

-   Setting the meta tag value with preset text:

    ```
    meta.tag.name.1=DC.publisher 
    meta.tag.content.text.1=IBM
    
    ```

    Result:

    ```
    <meta name=”DC.publisher” content=”IBM”/>
    ```

-   Setting multiple meta tag values with the default value for the author and the value of the text element `descelement` in the rendered content:

    ```
    meta.tag.name.1=author
    meta.tag.name.2=description
    meta.tag.content.element.2=descelement
    ```

    Result:

    ```
    <meta name=”author” content=”content author”/>
    <meta name=”description” content=”Information about IBM”/>
    ```

-   Setting the meta tag with an `http-equiv` attribute and a value of the date that the rendered content was last modified.

    ```
    meta.tag.name.1=last-modified
    meta.tag.attribute.1=http-equiv
    meta.tag.content.property.1=LastModifiedDate
    ```

    Result:

    ```
    <meta http-equiv=”last-modified” content=”Mon, 01 Aug 2011 13:45:57 GMT”/>
    
    ```

-   Setting the meta tag and with a scheme attribute and a value of the date that the rendered content was published.

    ```
    meta.tag.name.1=DC.date
    meta.tag.scheme.1=W3CDTF
    meta.tag.content.property.1=PublishDate
    ```

    Result:

    ```
    <meta name=”DC.date” content=”2011-08-01T08:15:30+02:00” scheme="W3CDTF"/>
    
    ```



