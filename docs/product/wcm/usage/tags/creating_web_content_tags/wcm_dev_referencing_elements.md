---
id: wcm_dev_referencing_elements
title: Creating an element tag
---
import useBaseUrl from '@docusaurus/useBaseUrl';



The Element tag is used to reference an element within a presentation template or element design.

The format of an element tag:

```
[Element type=" " context=" " name=" " key=" " format=" " pre=" " link=" " separator=" " 
htmlencode=" " awareness=" "  ifEmpty=" " start=" " end=" " ]
```

To create an element tag:

1.  Click **Insert a Tag** from a presentation template or element design field. The **Tag Helper** dialog opens.

2.  Select **Element** as the tag type.

3.  Select the item type where the element is stored, and the context that is used to determine which item to reference:

    If not set, the item type is `content` and the context is `current`.

    |Context and Item Type|`type="auto"`|`type="content"`|`type="sitearea"`|`type="parent"`|`type="top"`|
    |---------------------|-------------|----------------|-----------------|---------------|------------|
    |`context="Selected"`If selected, the context is set by the selected item. You select an item by clicking **Select**. This parameter is added to the tag as the `name=" "` parameter.

|This parameter displays an element from the selected item.|This parameter displays an element from the selected content item. If a site area is selected, then nothing is displayed.

|If the selected item is a site area, then this parameter displays the element from the site area.If the selected item is a content item, then this parameter displays the element from the parent site area of the content item.

|This parameter displays an element from the parent of the selected item.|This parameter displays an element from the first item in the path of the selected item.|
    |`context="Current"`If selected, the context is set by the current item.

|This parameter displays an element from the item currently being rendered.|This parameter displays an element from the current content item.If a site area is selected, then nothing is displayed.

|If the item currently being rendered is a site area, this parameter displays the element from the current site area.If the item currently being rendered is a content item, this parameter displays the element from the parent site area of the content item.

|This parameter displays an element from the parent site area of the item currently being rendered.|This parameter displays an element from the first item in the path of the item currently being rendered.|
    |`context="Autofill"`Use this option when the element that is referenced is determined by the search parameters of a menu, navigator, or taxonomy component. If the tag is not used within a menu, navigator, or taxonomy component, the context reverts to the current item.

|This parameter displays an element from the item that is returned by a menu, navigator, or taxonomy component.|This parameter displays an element from a content item that is returned by a menu, navigator, or taxonomy component.If a site area is selected, then nothing is displayed.

|If the current item returned by a menu, navigator, or taxonomy component is a site area, then the element from the site area is displayed.If the current item returned by a menu, navigator, or taxonomy component is a content item, then the element from the parent of the content item is displayed.

|This parameter displays an element from the parent item of the item that is returned by a menu, navigator, or taxonomy component.|This parameter displays an element from the first item in the path of the item that is returned by a menu, navigator, or taxonomy component.|
    |`context="portalContext"`If selected, the context is set by the context of the current page. This option is only valid for content that is delivered by using a web content viewer portlet.

See the knowledge center topic that is called **Web content associations** for further information.

|This parameter displays an element from the current page context item.|If the context of the current page is a content item, the element from the current content item is displayed.If the context of the current page is a site area, the element from the default content item of the site area is displayed.

|If the context of the current page is a site area, the element from the site area is displayed.If the context of the current page is a content item, the element from the parent of the content item is displayed.

|This parameter displays an element from the parent of the current page context item.|This parameter displays an element from the first item in the path of the current page context item.|
    |`context="portalMapping"`If selected, the context is set by the web content association of the current page. This option is only valid for content that is delivered by using a web content viewer portlet.

See the knowledge center topic that is called **Web content associations** for further information.

|This parameter displays an element from the item that is selected as the default web content association of the page.|This parameter displays an element from the default content item of the site area that is selected as the default web content association of the page.|This parameter displays an element from the site area that is selected as the default web content association of the page.|This parameter displays an element from parent of the item that is selected as the default web content association of the page.|This parameter displays an element from the first item in the path of the item that is selected as the default web content association of the page.|
    |`context="portletContext"`If selected, the context is set by context of the current web content viewer portlet. This option is only valid for content that is delivered by using a web content viewer portlet.

|This parameter displays an element from the current portlet context item.|If the context of the current portlet is a content item, the element from the current content item is displayed.If the context of the current portlet is a site area, the element from the default content item of the site area is displayed.

|If the context of the current portlet is a site area, the element from the site area is displayed.If the context of the current portlet is a content item, the element from the parent of the content item is displayed.

|This parameter displays an element from the parent of the current portlet context item.|This parameter displays an element from the first item in the path of the current portlet context item.|

    **Portal mapping versus portal context:** The portal mapping context is determined by the web content associations that are assigned to each page. This context is used for rendering when users first access a page. The context of the page can change when users interact with the content on the page. Each web content viewer on a page can be configured with an explicit context that overrides the rendering page context. The context of the portlet can also change if it is configured to receive links. When users click a link within the viewer that is configured to broadcast its links, the page context is updated. This new context is maintained until users click another link, or until users start a new session. When users start a new session, the original page context is used.

4.  Click **Select authoring template** to select an appropriate authoring template. Select the element to display from the list of available elements. This parameter is added to the tag as the `key=" "` parameter:

5.  Click **OK** to add the tag to your navigator design.


When you add the tag to your design, you can also add the following parameters to the tag:

|Tag parameters|Details|
|--------------|-------|
|`name=" "`|If you specify `name="./itemName"`, the actual path is not resolved until the item is rendered. This method takes slightly longer to resolve than specifying the path to the item.|
|`format=" "`|This parameter is optional and can be used only with some element types:-   **When you reference an image element:**

Use `format="url"` to render the URL of an image element.

Use `format="tag"` to render a complete image tag. The image is displayed on the rendered page. This parameter is used by default if no format is specified.

Use `format="height"` to render the height of an image element.

Use `format="width"` to render the width of an image element.

Use `format="alt"` to render the alt text of an image element.

-   **When you reference a link element:**

Use `format="url"` to render the full URL of the target of the link element. For example:

    ```
/wps/wcm/myconnect/Library/Site+Area/Content
    ```

Use `format="namepath"` to render the site path of the target of the link element. For example:

    ```
/Library/Site Area/Content
    ```

If the target is a component reference component, the title path of the final target is rendered.

Use `format="titlepath"` to render the site path of the target of the link element. For example:

    ```
/Library/SiteArea/Content
    ```

If the target is a component reference component, the title path of the final target is rendered.

Use `format="id"` to render the ID of the target of the link element. If the target is a link component, the ID of the final target is rendered.

Use `format="tag"` to render a complete link tag. This option is used by default if no format is specified. For example:

    ```
<a href="/wps/wcm/myconnect/Library/Site+Area/Content></a>
    ```

**Note:** The URL generated by the link element is fully qualified when viewed through a portal. If you want to generate a URL that is not fully qualified, use the "`noprefix`" option instead:

    -   `format="noprefixurl"`
    -   `format="noprefixpath"`
    -   `format="noprefixtag"`
Use `format="linktext"` to render text of the link.

-   **When you reference a component reference element:**

Use `format="id"` to render the ID of the target of the component reference element. If the target is a component reference component, the ID of the final target is rendered.

Use `format="namepath"` to render the site name path of the target of the component reference element. If the target is a component reference component, the name path of the final target is rendered.

Use `format="titlepath"` to render the site title path of the target of the component reference element. If the target is a component reference component, the title path of the final target is rendered.


-   **When you reference a file resource element:**

If your file resource is a file type that can be converted to HTML, you can instead convert the file to HTML and render the converted HTML directly in your web content by using the `` parameter.

Examples of supported file types include:

    -   word-processing documents \(\*.doc, \*.odt\)
    -   spreadsheets \(\*.xls\) \*
    -   HTML files \(\*.htm, \*.html\)
    -   Text files \(\*.txt\)
Other file types might also work but you need to test them first.

**Maximum Cache Size:**

If the converted HTML is larger than the default cache size defined by the `resourceserver.maxCacheObjectSize` property in the **WCM WCMConfigService** service, each request that contains this file is converted dynamically instead of using the cached copy. This method impacts performance. You might need to increase the size of the `resourceserver.maxCacheObjectSize` property to support large file conversions. Ensure that your system has enough memory installed to cope with the increase in cache size. You might also break up the file into separate files that can be converted separately instead of increasing the cache size.


-   **When you reference file resource and image elements:**

    -   Use `format="mimetype"` to render the mime type of a file or image. If no valid mime type can be determined, then "www/unknown" is rendered.
    -   Use `format="filename"` to render the name of a file or image.
    -   Use `format="size"` to render the size of a file or image with the most appropriate unit. If the resource is smaller than 1 K, then the size in bytes is rendered. If the size of the resource is less than one MB, then the size in Kb is rendered. If the size is greater than or equal to 1 MB, then the size is rendered in megabytes.
    -   Use `format="size_bytes"` to render the size of a file or image in bytes. Only the numerical value is displayed.
    -   Use `format="size_KB"` to render the size of a file or image in Kb. Only the numerical value is displayed.
    -   Use `format="size_MB"` to render the size of a file or image in megabytes. Only the numerical value is displayed.

-   **When you reference date elements:**

The following formats can be defined when you display dates:

    -   `format="DATE_SHORT"`
    -   `format="DATE_MEDIUM"`
    -   `format="DATE_LONG"`
    -   `format="DATE_FULL"`
    -   `format="DATE_TIME_SHORT"`
    -   `format="DATE_TIME_MEDIUM"`
    -   `format="DATE_TIME_LONG"`
    -   `format="DATE_TIME_FULL"`
    -   `format="TIME_SHORT"`
    -   `format="TIME_MEDIUM"`
    -   `format="TIME_LONG"`
    -   `format="TIME_FULL"`
    -   `format="DATE_SHORT_TIME_MEDIUM"`
    -   `format="DATE_SHORT_TIME_LONG"`
    -   `format="DATE_SHORT_TIME_FULL"`
    -   `format="DATE_MEDIUM_TIME_SHORT"`
    -   `format="DATE_MEDIUM_TIME_LONG"`
    -   `format="DATE_MEDIUM_TIME_FULL"`
    -   `format="DATE_LONG_TIME_SHORT"`
    -   `format="DATE_LONG_TIME_MEDIUM"`
    -   `format="DATE_LONG_TIME_FULL"`
    -   `format="DATE_FULL_TIME_SHORT"`
    -   `format="DATE_FULL_TIME_MEDIUM"`
    -   `format="DATE_FULL_TIME_LONG"`
    -   `format="RELATIVE"` \(The relative date is displayed as either "today", "yesterday" or the number of days ago.\)
    -   `format="MILLIS"` \(Number of milliseconds since Midnight, January 1, 1970 GMT\)
**Note:** All date formats are based on the timezone of the user, except for `format="MILLIS"`, which is not dependent on the current timezone.

You can also set user-defined formats for dates:

    -   [Setting parameters to format dates](wcm_reference-dates.md)
-   **When you reference number elements:**

You can also set user-defined formats for numbers:

    -   [Note on formatting numbers](wcm_reference-numbers.md)

-   **When you reference an option selection element:**

    -   When you reference an option selection element with option type "User Defined", the selected user-defined value is rendered. To render the translated selection, you can use the tag attribute `format="textprovider"`.
    -   When you reference an option selection element with option type "Use Taxonomy", by default the title path of the selected taxonomy or category is rendered. You can also use the tag attribute `format="namepath"`, `format="name"`, `format="titlepath"`, `format="title"` and `format="id"` to render the namepath, name, titlepath, title, and ID of the selected category.

-   **When you reference user details:**

When formatting user details, the format parameter is used to define which LDAP parameter to use when user details are displayed. For example:

    -   `format="cn"` is used to display the common name.
    -   `format="dn"` is used to display the distinguished name.

-   **Maximum character length:**

You can also specify a maximum number of characters to display by using this format:

    -   `format="length:``*number\_of\_characters*"`
For example, to display a maximum of 10 characters you would specify the following parameter:

    -   `format="length:10"`

|
|`pre=" "`|Set `pre="true"` to enable multi-line support. This setting is only applicable to the text and short text elements. If enabled, line breaks entered by the user when they enter text in these elements are recognized when rendered. If not specified, this setting defaults to false.|
|`link=" "`|The link parameter is used to define the type of link that is created by the element tag:-   **`link="default"`**

A standard link to an element is created.


-   **`link="path"`**

Contextual path linking is used when this element is rendered.


-   **`link="contextual"`**

Contextual content linking is used when this element is rendered. If not applicable, then contextual path linking is used.


**Contextual linking:**

Contextual linking is used so that when content is linked from another site, the link is rendered relative to the current site if possible. It can be used only if `context=current` or `context=autofill`.

|
|`separator=" "`|This parameter is used when you reference an option selection or user selection element. It is used to define what text or code is rendered between each selection that is displayed in an option selection or user selection element. For example, to add a line break between each selection, you would use `separator="<br>"`. If not defined, a comma is placed between each selection when rendered.|
|`htmlencode=" "`|If `htmlencode="true"`, then the reserved HTML characters in elements that display text are converted into character entities. For example, '`<`' is converted to '`&lt;`'. This method is useful if you would like to prevent users from adding malicious code, or if you want to prevent users from changing the design of their text by using HTML. If not specified, the default setting specified by the cmpnt.htmlEncodeDefault property in the **WCM WCMConfigService** service is used for displaying text. The default setting specified by the cmpnt.htmlEncodeUrls property in the **WCM WCMConfigService** service is used for displaying URLs. By default, these properties are set to true.

|
|`awareness=" "`|If `awareness="true"` then user names are displayed by using the people awareness features. These features display user names as hyperlinks that allow users to contact people with whom they might want to work. Wherever person links appear, users can click the link to display a menu of actions for collaborating \(contacting and working\) with the person named by the link. If an administrator has also configured an HCL Sametime server to work with HCL, person links indicate whether a person is active, away, offline, or in a Do Not Disturb state. If not specified, then `awareness="false"` and people awareness is not used.

|
|`ifEmpty=" "`|Enter some text to display if no result is returned by the tag. If not specified, nothing is displayed if no result is returned by the tag.|
|`start=" "``end=" "`

|The start and end attributes are used to wrap the data that is returned by a tag within other tags, such as HTML. These attributes are not mandatory.|

