---
id: wcm_dev_referencing_components
title: Creating a component tag
---
import useBaseUrl from '@docusaurus/useBaseUrl';



The Component tag is used to reference the content of a component within a presentation template or element design.

The format of a component tag:

```
[Component name=" " context=" " format=" " separator=" " compute=" " 
htmlencode=" " awareness=" " presentation=" " startPage=" " resultsPerPage=" " start=" " end=" " ]
```

To create a component tag:

1.  Click **Insert a Tag** from a presentation template or element design field. The **Tag Helper** dialog opens.

2.  Select **Component** as the tag type.

3.  Select a component to display by using the tag. This parameter is added to the tag as the `name=" "` parameter:

4.  Click **OK** to add the tag to your navigator design.


When you add the tag to your design, you can also add the following parameters to the tag:

|Tag parameters|Details|
|--------------|-------|
|`name=" "`|To use the library that is specified in the URL of the current page, use `name="./item"`.**Note:** If you specify `name="./item"`, the library name does not appear in your presentation template or element design. The actual path is not resolved until the item is rendered.

|
|`context=" "`|This parameter is only used when you reference a Component tag within a Personalization element design to display the results of a Personalization rule that searches for components.|
|`start=" "``end=" "`

|The start and end attributes are used to wrap the data that is returned by a tag within other tags, such as HTML. These attributes are not mandatory.|
|`format=" "`|This parameter is optional and can be used only with some component types:-   **When you reference an image component:**

Use `format="url"` to render only the URL of an image component.

Use `format="tag"` to render a complete image tag. The image is displayed on the rendered page. This parameter is used by default if no format is specified.


-   **When you reference a file resource component:**

If your file resource is a file type that can be converted to HTML, you can instead convert the file to HTML and render the converted HTML directly in your web content by using the `` parameter.

Examples of supported file types include:

    -   word-processing documents \(\*.doc, \*.odt\)
    -   spreadsheets \(\*.xls\) \*
    -   HTML files \(\*.htm, \*.html\)
    -   Text files \(\*.txt\)
Other file types might also work but you need to test them first.

**Maximum Cache Size:**

If the converted HTML is larger than the default cache size defined by the `resourceserver.maxCacheObjectSize` property in the **WCM WCMConfigService** service, each request that contains this file is converted dynamically instead of using the cached copy. This method impacts performance. You might need to increase the size of the `resourceserver.maxCacheObjectSize` property to support large file conversions. You must ensure that your system has enough memory installed to cope with the increase in cache size. You might also break up the file into separate files that can be converted separately instead of increasing the cache size.


-   **When you reference file resource and image components:**

    -   Use `format="mimetype"` to render the mime type of a file or image. If no valid mime type can be determined, then "www/unknown" is rendered.
    -   Use `format="filename"` to render the name of a file or image.
    -   Use `format="size"` to render the size of a file or image by using the most appropriate unit. If the resource is smaller than 1 Kb, then the size in bytes is rendered. If the size of the resource is less than 1 MB, then the size in kilobytes is rendered. If the size is greater than or equal to 1 MB, then the size is rendered in megabytes.
    -   Use `format="size_bytes"` to render the size of a file or image in bytes. Only the numerical value is displayed.
    -   Use `format="size_KB"` to render the size of a file or image in kilobytes. Only the numerical value is displayed.
    -   Use `format="size_MB"` to render the size of a file or image in megabytes. Only the numerical value is displayed.

-   **When you reference a link component:**

Use `format="url"` to render the full URL of the target of the link component. For example:

    ```
wps/wcm/myconnect/Library/Site+Area/Content
    ```

Use `format="namepath"` to render only the site path of the target of the link component. For example:

    ```
/Library/Site Area/Content
    ```

If the target is another link component, the name path of the final target is rendered.

Use `format="titlepath"` to render the site title path of the target of the link component. For example:

    ```
/Library/Site Area Title/Content Title
    ```

If the target is another link component, the title path of the final target is rendered.

Use `format="id"` to render only the ID of the target of the link component. If the target is another link component, the ID of the final target is rendered.

Use `format="tag"` to render a complete link tag. This parameter is used by default if no format is specified. For example:

    ```
<a href="/wps/wcm/myconnect/Library/Site+Area/Content></a>
    ```

**Note:** The URL generated by the link component is fully qualified when viewed through a portal. If you want to generate a URL that is not fully qualified use the "noprefix" option instead:

    -   `format="noprefixurl"`
    -   `format="noprefixpath"`
    -   `format="noprefixtag"`
Use `format="linktext"` to render text of the link.


-   **When you reference a component reference component:**

Use `format="id"` to render the ID of the target of the component reference component. If the target is another component reference component, the ID of the final target is rendered.

Use `format="namepath"` to render the site name path of the target of the component reference component. If the target is another component reference component, the name path of the final target is rendered.

Use `format="titlepath"` to render the site title path of the target of the component reference component. If the target is another component reference component, the title path of the final target is rendered.

-   **When you reference date components:**

The following formats can be defined when dates are displayed:

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
-   **When you reference number components:**

You can also set user-defined formats for numbers:

    -   [Note on formatting numbers](wcm_reference-numbers.md)

-   **When you reference user details:**

When formatting user details, the format parameter is used to define which LDAP parameter to use when user details are displayed. For example:

    -   `format="cn"` is used to display the common name.
    -   `format="dn"` is used to display the distinguished name.

-   **Maximum character length:**

You can also specify a maximum number of characters to display by using this format:

    -   `format="length:``number_of_characters"`
For example, to display a maximum of 10 characters you would specify the following parameter:

    -   `format="length:10"`

|
|`compute=" "`|This parameter is only applicable to menu, navigator, and taxonomy components. You specify `compute="always"` when you reference some JSP code within a component design, and you want that code to be run separately on each result that is returned by a menu, navigator, and taxonomy component.For example, if a menu referenced JSP code that used the `public DocumentId getCurrentResultId();` method, you would use `compute="always"` to make the JSP code that is run separately in every result that is returned by the menu.

If not specified, then `compute="once"` is used which is the default method for delivering the results of menu, navigator, and taxonomy components.

|
|`htmlencode=" "`|If `htmlencode="true"`, then the reserved HTML characters in components that display text are converted into character entities. For example, '`<`' is converted to '`&lt;`'. This parameter is useful if you would like to prevent users from adding malicious code, or if you want to prevent users from changing the design of their text using HTML. If not specified, the default setting specified by the cmpnt.htmlEncodeDefault property in the **WCM WCMConfigService** service is used for displaying text. The default setting specified by the cmpnt.htmlEncodeUrls property in the **WCM WCMConfigService** service is used for displaying URLs. By default, these properties are set to true.

|
|`awareness=" "`|If `awareness="true"` then user names are displayed by using the people awareness features. This feature displays user names as hyperlinks that allow users to contact people with whom they might want to work. Wherever person links appear, users can click the link to display a menu of actions for collaborating \(contacting and working\) with the person named by the link. If you, as administrator, also configure an HCL Sametime server to work with HCL, person links indicate whether a person is active, away, offline, or in a Do Not Disturb state. If not specified, then `awareness="false"` and people awareness is not used.

|
|`presentation="``itemname"`|This parameter is used to specify the name of a list presentation to use when you display a navigator, menu, personalization, or search component. This parameter overrides the list presentation that is selected on the component itself.To use the library that is specified in the URL of the current page, use `presentation="./item"`.

**Note:** If you specify `presentation="./item"`, the library name is not displayed in the tag. The actual path is not resolved until the item is rendered.

|
|`startPage="``number"`|This parameter is optional and is used to set which page of results to display when a navigator, menu, personalization, or search component is first displayed. This parameter overrides the **Start page** value that is specified in the component itself.|
|`resultsPerPage="``number"`|This parameter is optional and is used to set the number of items to display in each page of results that are displayed by a navigator, menu, personalization, or search component. This parameter overrides the **Results per page** value that is specified in the component itself.|
|`separator=" "`|This parameter only used when a user selection component is referenced. It is used to define what text or code is rendered between each selection. For example, to add a line break between each selection, you would use `separator="<br>"`. If not defined, a comma is placed between each selection when rendered.|

