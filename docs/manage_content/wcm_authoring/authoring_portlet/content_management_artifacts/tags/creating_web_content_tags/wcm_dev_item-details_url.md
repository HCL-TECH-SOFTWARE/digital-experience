# URL Component tag

The URL Component (URLCmpnt) tag is used to generate a URL to a site area or content item. 

See the format of the URLCmpnt tag.

```
[URLCmpnt mode=" " context=" " type=" " name=" " pageDesign=" " portalTarget=" "
targetCurrentPortalPage=" " usedIn=" " start=" " end=" " htmlencode=" "]
```

To create a URLCmpnt tag, complete the following steps:

1.  Click **Insert a Tag** from a presentation template or element design field. The **Tag Helper** dialog opens.

2.  Select **URL** as the tag type.

3.  Select a `mode` type. The `mode` type determines the type of URL that is generated. This parameter is added to the tag as the `mode=" "` parameter.

    |Mode|Details|
    |----|-------|
    |`mode="portal"`|The `portal` mode generates a URL to a portal page. This parameter is used when you display web content within a web content viewer portlet|
    |`mode="standAlone"`|The `standAlone` mode generates a URL to a web page. This parameter is used when you display web content using the Web Content Manager servlet.|
    |`mode="current"`|The `current` mode generates a URL based on the format of the current request. For example, if the current request is a HCL Portal request, then mode="portal" is used.|
    |`mode="static"`|The `static` mode generates a POC URL that will render as portal URL for portal pages, and as a standard URL for a servlet site.|

4.  Select the `context` and item type that is used to determine which URL to reference.

    |Context and Item Type|`type="auto"`|`type="content"`|`type="sitearea"`|`type="parent"`|`type="top"`|
    |---------------------|-------------|----------------|-----------------|---------------|------------|
    |`context="Selected"` <br> If selected, the context is set by the selected item. You select an item by clicking **Select**. This parameter is added to the tag as the `name=" "` parameter.|This parameter displays the URL of the selected item.|This parameter displays the URL of the selected content item. If a site area is selected, nothing is displayed.|If the selected item is a site area, this parameter displays the URL of the site area. If the selected item is a content item, this parameter displays the URL of the parent site area of the content item.|This parameter displays the URL of the parent of the selected item.|This parameter displays the URL of the first item in the path of the selected item.|
    |`context="Current"` <br> If selected, the context is set by the current item.|This parameter displays the URL of the item currently being rendered.|This parameter displays the URL of the current content item. If a site area is selected, nothing is displayed.|If the item currently being rendered is a site area, this parameter displays the URL of the current site area. If the item currently being rendered is a content item, this parameter displays the URL of the parent site area of the content item.|This parameter displays the URL of the parent site area of the item currently being rendered.|This parameter displays the URL of the first item in the path of the item currently being rendered.|
    |`context="Autofill"` <br> Use this option when the item that is referenced is determined by the search parameters of a menu, navigator, or taxonomy component. If the tag is not used within a menu, navigator, or taxonomy component, the context reverts to the current item.|This parameter displays the URL of the item returned by a menu, navigator, or taxonomy component.|This parameter displays the URL of a content item returned by a menu, navigator, or taxonomy component. If a site area is selected, nothing is displayed.|If the current item returned by a menu, navigator, or taxonomy component is a site area, the URL of the site area is displayed. If the current item returned by a menu, navigator, or taxonomy component is a content item, the URL of the parent of the content item is displayed.|This parameter displays the URL of the parent item of the item returned by a menu, navigator, or taxonomy component.|This parameter displays the URL of the first item in the path of the item returned by a menu, navigator, or taxonomy component.|
    |`context="portalContext"` <br> If selected, the context is set by the context of the current page. This option is only valid for content delivered using a web content viewer portlet.|This parameter displays the URL of the current page context item.|If the context of the current page is a content item, the URL of the current content item is displayed. If the context of the current page is a site area, the URL of the default content item of the site area is displayed.|If the context of the current page is a site area, the URL of the site area is displayed. If the context of the current page is a content item, the URL of the parent of the content item is displayed.|This parameter displays the URL of the parent of the current page context item.|This parameter displays the URL of the first item in the path of the current page context item.|
    |`context="portalMapping"` <br> If selected, the context is set by the content mapping of the current page. This option is only valid for content delivered using a web content viewer portlet.|This parameter displays the URL of the item selected as the default content mapping of the page.|This parameter displays the URL of the default content item of the site area selected as the default content mapping of the page.|This parameter displays the URL of the site area selected as the default content mapping of the page.|This parameter displays the URL of parent of the item selected as the default content mapping of the page.|This parameter displays the URL of the first item in the path of the item selected as the default content mapping of the page.|
    |`context="portletContext"` <br> If selected, the context is set by context of the current web content viewer portlet. This option is only valid for content delivered using a web content viewer portlet.|This parameter displays the URL from the current portlet context item.|If the context of the current portlet is a content item, the URL from the current content item is displayed. If the context of the current portlet is a site area, the URL from the default content item of the site area is displayed.|If the context of the current portlet is a site area, the URL from the site area is displayed. If the context of the current portlet is a content item, the URL from the parent of the content item is displayed.|This parameter displays the URL from the parent of the current portlet context item.|This parameter displays the URL from the first item in the path of the current portlet context item.|

5.  If you want to render the content by using an alternative presentation template, click **presentation template**. This parameter is added to the tag as the `pageDesign=" "` parameter.

6.  If you want to render the content on a specific Portal page, select **Portal Page Target**. You can enter the compound name of the URL mapping or friendly URL of the target portal page in the tag after you add the tag to your design. This parameter can be used only if `mode="current"` or `mode="portal"`. This parameter is added to the tag as the `portalTarget=" "` parameter.

7.  Click **OK** to add the tag to your navigator design.

When you add this tag to your design, you can also add the following parameters to the tag:

|Tag parameters|Details|
|--------------|-------|
|`name=" "`|If you specify `name="./itemName"`, the actual path is not resolved until the item is rendered. This parameter takes slightly longer to resolve than specifying the path to the item.|
|`usedIn=" "`|If you want to use the URL in JavaScript, you must add the parameter `usedIn="script"` to the tag.|
|`htmlencode=" "`|Set this parameter to `true` to convert the reserved HTML characters in text, short text, and option selection elements into character entities. For example, `'<'` is converted to `'&lt'`. This parameter is useful if you want to prevent users from adding malicious code or prevent users from changing the design of their text using HTML. If not specified, the default setting specified by the `cmpnt.htmlEncodeDefault` property in the **WCM WCMConfigService** service is used. This property is set to `true` by default.|
|`start=" "` and `end=" "`|The start and end attributes are used to wrap the data that is returned by a tag within other tags, such as HTML. These attributes are not mandatory.|
|`targetCurrentPortalPage=" "`|Set this parameter to `true` if you want to render the content on the portal page that is the current page when the URL is selected. You can use this parameter only if the `mode` type is set to `current` or `portal` and if the `portalTarget` parameter is not set.|
