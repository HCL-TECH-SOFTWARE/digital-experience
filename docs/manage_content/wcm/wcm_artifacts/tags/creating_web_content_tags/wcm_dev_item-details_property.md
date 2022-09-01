---
id: wcm_dev_item-details_property
title: Creating a property tag
---




A property tag is used to display various fields and metadata from content items and site areas.

The format of a property tag:

```
[Property field=" " context=" " type=" " name=" " format=" " link=" " separator=" " 
htmlencode=" " awareness=" " ifEmpty=" " include=" " restrict=" " resolve=" "
pre=" " start=" " end=" " ]
```

To create a property tag:

1.  Click **Insert a Tag** from a presentation template or element design field. The **Tag Helper** dialog opens.

2.  Select **Property** as the tag type.

3.  Select a property type. This property is added to the tag as the `field=" "` parameter:

    |Property type|Details|
    |-------------|-------|
    |Access level properties|    -   **user**

Displays a list of users and groups assigned user access to an item.

    -   **contributor**

Displays a list of users and groups assigned contributor access to an item.

    -   **editor**

Displays a list of users and groups assigned editor access to an item.

    -   **manager**

Displays a list of users and groups assigned manager access to an item.

|
    |Authoring template properties|    -   **authtemplateid**

Displays the GUID of the authoring template that is used by the current item.

    -   **authtemplatename**

Displays the name of the authoring template that is used by the current item.

    -   **authtemplatetitle**

Displays the display title of the authoring template that is used by the current item.

|
    |Current project properties|    -   **projectid**

Displays the GUID of the project the current item is included in.

    -   **projectname**

Displays the item name of the project the current item is included in.

    -   **projecttitle**

Displays the title of the project the current item is included in.

|
    |History properties|    -   **lastmodified**

Displays the last modified date and the last change message.

    -   **lastmodifieddate**

Displays the last modified date.

    -   **creation**

Displays the creation date.

    -   **lastmodifier**

Displays the name of the user who last modified the item.

    -   **creator**

Displays the name of the user who created the item.

|
    |Identification properties|    -   **name**

Displays the text that is entered in the name field of an item.

    -   **title**

Displays the text that is entered in the title field of an item.

    -   **description**

Displays the text that is entered in the description field of an item.

    -   **authors**

Displays the users and groups that are selected in the authors field of an item.

    -   **owners**

Displays the users and groups that are selected in the owners field of an item.

    -   **id**

Displays the GUID of an item.

|
    |Library properties|    -   **libraryid**

Displays the GUID of the library that is used by the current item.

    -   **libraryname**

Displays the name of the library that is used by the current item.

    -   **librarytitle**

Displays the display title of the library that is used by the current item.

|
    |Parent properties|    -   **parentid**

Displays the GUID of the parent of the current item.

    -   **parentname**

Displays the name of the parent of the current item.

    -   **parenttitle**

Displays the display title of the parent of the current item.

|
    |Profile properties|    -   **categories**

Displays the categories that this item is profiled with.

    -   **keywords**

Displays the keywords that this item is profiled with.

|
    |Workflow properties|    -   **status**

Displays the workflow status of an item.

    -   **statusid**

Displays the workflow status of an item as an integer:

        -   1 for draft.
        -   2 for published.
        -   4 for expired.
    -   **pendingstatus**

Displays a translated string for the pending status. The pending status is the status that the document will move into in the future. For example, when a scheduled date is reached, or when a project is published.

    -   **pendingstatusid**

Retrieves the pending status as an integer:

        -   1 for an item not pending a change in status.
        -   2 for publish pending.
        -   4 for expire pending.
        -   8 for delete pending.
    -   **workflow**

Displays the selected workflow of an item.

    -   **currentstage**

Displays the workflow stage that the item is in.

    -   **publishdate**

Displays the date and time that is selected in the publish date field of an item.

    -   **expirydate**

Displays the date and time that is selected in the expiry date field of an item.

    -   **generaldateone**

Displays the date and time that is selected in the general date one field of an item.

    -   **generaldatetwo**

Displays the date and time that is selected in the general date two field of an item.

    -   **additionalviewers**

Displays the names of any additional viewers that are selected for an item.

|

4.  Select the item type and the context that is used to determine which item to reference:

    |Context and Item Type|`type="auto"`|`type="content"`|`type="sitearea"`|`type="parent"`|`type="top"`|
    |---------------------|-------------|----------------|-----------------|---------------|------------|
    |`context="Selected"`If selected, the context is set by the selected item. You select an item by clicking **Select**. This parameter is added to the tag as the name=" " parameter:

|This parameter displays the property of the selected item.|This parameter displays the property of the selected content item. If a site area is selected, then nothing is displayed.

|If the selected item is a site area, then this parameter displays the property of the site area.If the selected item is a content item, then This parameter displays the property of the parent site area of the content item.

|This parameter displays the property of the parent of the selected item.|This parameter displays the property of the first item in the path of the selected item.|
    |`context="Current"`If selected, the context is set by the current item.

|This parameter displays the property of the item currently being rendered.|This parameter displays the property of the current content item.If a site area is selected, then nothing is displayed.

|If the item currently being rendered is a site area, this parameter displays the property of the current site area.If the item currently being rendered is a content item, this parameter displays the property of the parent site area of the content item.

|This parameter displays the property of the parent site area of the item currently being rendered.|This parameter displays the property of the first item in the path of the item currently being rendered.|
    |`context="Autofill"`Use this option when the item that is referenced is determined by the search parameters of a menu, navigator, or taxonomy component. If the tag is not used within a menu, navigator, or taxonomy component, the context reverts to the current item.

|This parameter displays the property of the item that is returned by a menu, navigator, or taxonomy component.|This parameter displays the property of a content item that is returned by a menu, navigator, or taxonomy component.If a site area is selected, then nothing is displayed.

|If the current item returned by a menu, navigator, or taxonomy component is a site area, then the property of the site area is displayed.If the current item returned by a menu, navigator, or taxonomy component is a content item, then the property of the parent of the content item is displayed.

|This parameter displays the property of the parent item of the item that is returned by a menu, navigator, or taxonomy component.|This parameter displays the property of the first item in the path of the item that is returned by a menu, navigator, or taxonomy component.|
    |`context="portalContext"`If selected, the context is set by the context of the current page. This option is only valid for content that is delivered using a web content viewer portlet.

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

5.  Click **OK** to add the tag to your navigator design.


When you add the tag to your design, you can also add the following parameters to the tag:

|Tag parameters|Details|
|--------------|-------|
|`name=" "`|You must specify the name of the item that is referenced if the `context="selected"`. If you specify `name="./itemName"`, the actual path is not resolved until the item is rendered. This method takes slightly longer to resolve than specifying the path to the item.|
|`format=" "`|This parameter is optional and can be used only with some element types:-   **When `field="ID"`:**

    -   `format="id"` displays the plain ID. If not specified, this format is used by default.
    -   `format="uri"` outputs a `wcm:oid:<id>` style URI.
-   **When you reference user details:**

When formatting user details, the format parameter is used to define which LDAP parameter to use when you display user details. For example:

    -   `format="cn"` is used to display the common name.
    -   `format="dn"` is used to display the distinguished name.
-   **When `field="categories"`:**

When `field="categories"` the format parameter is used to determine the output format.

    -   `format="title"` displays a list of category titles.
    -   `format="uri"` displays a `wcm:oid:<id>` style URI for each listed category.
-   **Maximum character length:**

You can also specify a maximum number of characters to display by using this format:

    -   `format="length:`number\_of\_characters"
For example, to display a maximum of 10 characters you would specify the following parameter:

    -   `format="length:10"`
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
-   **Retrieving the path of an item when you reference a name or title:**

If `field="name"` or `field="title"`, you can retrieve the path of the item by adding `format="path"`.

-   **Retrieving the path of the category of an item:**

    -   If `field="categories"`, you can retrieve the name path of the categories by adding `format="namepath"`.
    -   If `field="categories"`, you can retrieve the title path of the categories by adding `format="titlepath"`.

|
|`separator=" "`|This parameter is used when you reference a property that returns multiple results. For example, to add a line break between each result, you would use `separator="<br>"` . If not defined, a comma is placed between each result when rendered.|
|`htmlencode=" "`|If `htmlencode="true"` any reserved HTML characters is converted into character entities. For example, '`<`' is converted to '`&lt;`'. This parameter is useful if you would like to prevent users from adding malicious code, or if you want to prevent users from changing the design of their text by using HTML. If not specified, the default setting specified by the `cmpnt.htmlEncodeDefault` property in the **WCM WCMConfigService** service is used. By default, this property is set to `true`.

|
|`awareness=" "`|If `awareness="true"` then user names are displayed by using the people awareness features. This feature displays user names as hyperlinks that allow users to contact people with whom they might want to work. Wherever person links appear, users can click the link to display a menu of actions for collaborating \(contacting and working\) with the person named by the link. If an administrator has configured an HCL Sametime server to work with HCL, person links indicate whether a person is active, away, offline, or in a Do Not Disturb state. If not specified, then `awareness="false"` and people awareness is not used.

|
|`ifEmpty=" "`|Enter some text to display if no result is returned by the tag. If not specified, nothing is displayed if no result is returned by the tag.|
|`include=" "`|Used only with `field="categories"`. Determines which level of a taxonomy to display:-   exact
-   ancestors
-   descendants
-   all

For example, if an item is profiled with a category of Sport, and `include="descendants"`, then all the descendants of "sport" would also be displayed.

|
|`restrict=" "`|Used only with `field=categories` or `field=library`. Enter a list of categories that are separated by commas to return results only for the categories that are specified in the list. For example, `restrict="library/red, library/green"` displays profile details only of items that are profiled with the categories of red or green. If no library is specified, the default library is used.|
|`resolve=" "`|This parameter determines which type of access to resolve to when you render access level properties:-   **none**

Only users and groups that are selected in the access section of an item is resolved. This access is a combination of User, Workflow, and Administrator defined access settings. Virtual users are not resolved. If the field parameter is used, only users and groups that are directly selected for a role type is resolved. For example, a user assigned "contributor" access would not be resolved if `field="user"`.

-   **virtual**

Only users and groups that are selected in the access section of an item, including virtual users, is resolved. This access is a combination of User, Workflow, and Administrator defined access settings. If the field parameter is used, only users and groups that are directly selected for a role type is resolved. For example, a user assigned "contributor" access would not be resolved if `field="user"`.

-   **inherited**

All inherited users and groups plus users and groups that are selected in the access section of an item, including virtual users, is resolved. This access is a combination of Inherited, User, Workflow, and Administrator defined access settings. If the field parameter is used, only users and groups that are either directly selected for a role type or that inherit a role type is resolved. For example, a user assigned "contributor" access would not be resolved if `field="user"`.

-   **inheritedonly**

Only inherited users and groups, including virtual users, are resolved. If the field parameter is used, only users and groups that directly inherit a role type is resolved. For example, a user that inherits "contributor" access would not be resolved if `field="user"`.

-   **effective**

Only users and groups that are selected in the access section of an item, including virtual users, is resolved. This access is a combination of User, Workflow, and Administrator defined access settings. If the field parameter is used, access roles are cascaded down so that users and groups assigned roles higher than the role selected by using the field parameter is resolved. For example, if `field="user"`, contributors, editors, and managers are also resolved.

-   **all**

All inherited users and groups plus users and groups that are selected in the access section of an item, including virtual users, is resolved. This access is a combination of Inherited, User, Workflow, and Administrator defined access settings. If the field parameter is used, access roles are cascaded down so that users and groups assigned roles higher than the role selected by using the field parameter is resolved. For example, if `field="user"`, contributors, editors, and managers are also resolved.


|
|`pre=" "`|Set `pre="true"` to enable multi-line support. This setting is only applicable to the description field. If enabled, line breaks entered by the user when they enter text in the description field are recognized when rendered. If not specified, this setting defaults to false.|
|`start=" "``end=" "`

|The start and end attributes are used to wrap the data that is returned by a tag within other tags, such as HTML. These attributes are not mandatory.|

**Double-byte character sets:**

Not all double-byte character sets support extended ASCII. To use tags such as "`&nbsp;`" you need to replace "`&`" with "`&amp;`".

For example:

```
separator="&amp;nbsp;&amp;nbsp;"
```

