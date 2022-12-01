# Editable element tag

The editable element tag is used to make elements from content items and site areas editable when rendered by using a web content viewer portlet when the page is in edit mode.

The format of an editable element tag:

```
[EditableElement type=" " context=" " name=" " key=" " format=" " mode=" " 
     callback=" " stateChangeCallback=" " refreshValueOnEdit=" " class=" " htmlencode=" " placeholder=" "]

[/EditableElement]
```

!!! note
    Do not use this tag if basic or advanced rendering caches are enabled because with these caches enabled, authoring updates are not immediately displayed on the rendered page.

To create an editable element tag:

1.  Click **Insert a Tag** from a presentation template or element design field. The **Tag Helper** dialog opens.

2.  Select **EditableElement** as the tag type.

3.  Select the item type where the element is stored, and the context that is used to determine which item to reference:

    If not set, the item type is `content` and the context is `current`.

    |Context and Item Type|`type="auto"`|`type="content"`|`type="sitearea"`|`type="parent"`|`type="top"`|
    |---------------------|-------------|----------------|-----------------|---------------|------------|
    |`context="Selected"`If selected, the context is set by the selected item. You select an item by clicking **Select**. This parameter is added to the tag as the name=" " parameter:|This parameter makes an element from the selected content item editable when the page is in edit mode.|This parameter makes an element from the selected content item editable when the page is in edit mode.If a site area is selected, then nothing is editable.|If the selected item is a site area, then This parameter makes the element from the site area editable when the page is in edit mode. If the selected item is a content item, then This parameter makes the element from the parent site area of the content item editable when the page is in edit mode.|This parameter makes an element from the parent of the selected item editable when the page is in edit mode.|This parameter makes an element from the first item in the path of the selected item editable when the page is in edit mode.|
    |`context="Current"`If selected, the context is set by the current item.|This parameter makes an element from the item currently being rendered editable when the page is in edit mode.|This parameter makes an element from the current content item editable when the page is in edit mode.If a site area is selected, then nothing is editable.|If the item currently being rendered is a site area, this parameter makes the element from the current site area editable when the page is in edit mode.If the item currently being rendered is a content item, this parameter makes the element from the parent site area of the content item editable when the page is in edit mode.|This parameter makes an element from the parent site area of the item currently being rendered editable when the page is in edit mode.|This parameter makes an element from the first item in the path of the item currently being rendered editable when the page is in edit mode.|
    |`context="Autofill"`Use this option when the element that is referenced is determined by the search parameters of a menu, navigator, or taxonomy component. If the tag is not used within a menu, navigator, or taxonomy component, the context reverts to the current item.|This parameter makes an element from the item that is returned by a menu, navigator, or taxonomy component editable when the page is in edit mode.|This parameter makes an element from a content item that is returned by a menu, navigator, or taxonomy component editable when the page is in edit mode.If a site area is selected, then nothing is editable.|If the current item returned by a menu, navigator, or taxonomy component is a site area, then the element from the site area is editable when the page is in edit mode.If the current item returned by a menu, navigator, or taxonomy component is a content item, this parameter makes the element from the parent site area of the content item editable when the page is in edit mode.|This parameter makes an element from the parent item of the item that is returned by a menu, navigator, or taxonomy component editable when the page is in edit mode.|This parameter makes an element from the first item in the path of the item that is returned by a menu, navigator, or taxonomy component editable when the page is in edit mode.|

4.  Click **Select authoring template** to select an appropriate authoring template. Select the element to make editable from the list of available elements. This parameter is added to the tag as the `key=" "` parameter.

    !!! note 
        If you have selected a source type of either parent, top, or site area, you need to manually complete the `key=" "` parameter in the editable element tag instead of clicking **Select authoring template**.

5.  Select whether to include start and end sections. You can enter extra text between the start and end sections of the tag, and other web content tags such as a component or element tag.

6.  Click **OK** to add the tag to your navigator design.


when you add the tag to your design, you can also add the following parameters to the tag:

|Tag parameters|Details|
|--------------|-------|
|`name=" "`|You must specify the name of the item that is referenced if the `context="selected"`. If you specify `name="./itemName"`, the actual path is not resolved until the item is rendered. This method takes slightly longer to resolve than specifying the path to the item.|
|`format=" "`|If you specify `format="div"`, the editable region is rendered within a div tag. If no format is specified, a div tag is used by default.If you specify `format="span"`, the editable region is rendered within a span tag.|
|`mode=" "`|This parameter determines the inline editing mode. -   Specify `mode="inplace"` to enable inplace editing of an element. Not all fields support inplace mode. If an element does not support inplace mode, dialog mode is used instead. <br> -   Specify `mode="embed"` to enable embedded editing of an element. Not all fields support embed mode. If an element does not support embed mode, dialog mode is used instead. <br> -   Specify `mode="dialog"` to enable editing in a dialog. This parameter is useful for larger elements such as rich text elements that may not be suitable for inplace editing. All fields support dialog mode. <br> If a mode is not specified, then the default setting that is specified in the inplaceEdit.defaultModeForText or inplaceEdit.defaultModeForRichText property of the **WCM WCMConfigService** service is used. <br> **Note:** The default rich text editor is always used with the modes 'inplace' or 'embed' are used. When the 'dialog' mode is used, the rich text editor that is selected in the authoring portlet settings, or in the content template for content items, is used. |
|`callback=" "`|This parameter is used to reference an i$ promise. The promise is resolved if the inline edit is completed, and rejected if the inline edit is cancelled. <br> See the Javadoc for more information about i$ promises. <br> For example: <br> -   A standard callback can be written like this: `var myCallBack=new i$.Promise(); myCallBack.then(function(){window.alert('resolved')}, function(){window.alert('rejected')});return myCallBack;` <br> -   If `myCallBack` is an `i$` promise, then the callback can be written like this:`myCallBack`. <br> -   A function that itself returns a new promise each time it is executed can be written like this: `return (function() {var myCallBack = new i$.Promise(); myCallBack.then(function() {window.alert('resolved');}, function() {window.alert('rejected');}); return myCallBack;})();`|
|`stateChangeCallback=" "`|This parameter is used to reference JavaScript state change callbacks for all state changes. See the Javadoc for more information. <br>For example, to specify `stateChangeCallback="myStateChangeCallback"` you might create the following state change callback function. <br/> \``` /** <br>  *  element: id of the current editing element region <br>  *  state    : the new state <br>  *  additionalData: some additional data like tag type, element name, messages <br>  */ <br> function myStateChangeCallback(element, state, additionalData) <br>State Constants: <br> // loading value <br>   StateChangeEvent.STATE_LOADING = 0; <br>   // editing <br>   StateChangeEvent.STATE_EDITING = 1; <br>   // saving <br>   StateChangeEvent.STATE_SAVING = 2; <br>   // saved <br>   StateChangeEvent.STATE_SAVED = 3; <br>   // cancelled <br> StateChangeEvent.STATE_CANCELLED = 4; <br>   // error <br>   StateChangeEvent.STATE_ERROR = 5; ```  <br> The registered JavaScript function is run each time the state changes. <br>**Note:** The loading state is run only the first time that a user edits the element.|
|`refreshValueOnEdit=" "`|This setting forces the tag value to be refreshed when the element is edited by a user. This setting is on by default <br>If you want to disable this feature, set this setting to false. <br> **Restriction:** <br>-   This attribute works only for text elements, short text elements, number elements, or rich text elements. <br>-   When you use this parameter with a rich text element, you cannot use a reference to a web content tag in the element content because it is not parsed. <br>-   If the field is in dialog mode, or is some other element type, such as data or file reference, this value has no effect. <br>-   If set to false, there is no loading state for the element.|
|`class=" "`|This parameter is used to specify a CSS class to the div or span tag that is specified by using the format parameter. **Note:** The custom class that you specify here must include styles with the names "saving", "editing" and "error." These names are required for displaying the editable field in edit mode, when saving, and to display error messages. <br>The default css class that is used for inplace editable fields is **wcm-default-inplace-editable**. <br> This class can be overridden by adding the following setting in the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console: `inplaceEdit.defaultClasses=class1 class2` <br>As many classes as required are added to this setting, separated by spaces. <br>Base your custom classes on the default style sheet that is located at `[AppServer\_root](../reference/wpsdirstr.md#was_root)\installedApps\nodename\wcm.ear\wcm-inplaceEdit.war\css\default-style.css`. <br>**Note:** Any classes that are specified on the EditableElement or EditableProperty tag takes precedence over this value. <br>If you need to use the default css class as well, add it to the list of classes. For example: `inplaceEdit.defaultClasses=wcm-default-inplace-editable class1 class2`|
|`htmlencode=" "`|If `htmlencode="true"`, then the reserved HTML characters in elements that display text are converted into character entities. For example, '`<`' is converted to '`&lt;`'. This method is useful if you would like to prevent users from adding malicious code, or if you want to prevent users from changing the design of their text by using HTML. If not specified, the default setting specified by the cmpnt.htmlEncodeDefault property in the **WCM WCMConfigService** service is used for displaying text. The default setting specified by the cmpnt.htmlEncodeUrls property in the **WCM WCMConfigService** service is used for displaying URLs. By default, these properties are set to true.|
|`placeholder=" "`|The text entered here is displayed when there is no initial value for the body of the editable element field.For example: `placeholder="Enter title"` <br>It can also be used in combination with a text provider to render translated text. For example: `placeholder="[Plugin:TextProvider provider="com.mycompany.mybundle" key="enter_title"]"` <br>These special values are used to render text from existing sources: <br>-   **`placeholder="useName"`** <br>This parameter renders the name of the element. <br> -   **`placeholder="useTitle"`** <br>This parameter renders the title of the element. <br>-   **`placeholder="useHelpText"`** <br> This parameter renders the help text of the element. <br> -   **`placeholder="useNone"`** <br> This parameter shows no placeholder.|

Additional text, HTML, or tags must be added between the `[EditableElement]` and `[/EditableElement]` tags. The text and tags added here is what is rendered on the page. When the page is in edit mode, this region is editable. When first added to your design, a corresponding element tag is added by default.

For example, to display an editable element that is named body use the following tags:

```
[EditableElement type="content" context="current" key="body"]
[Element type="content" context="current" key="body"]
[/EditableElement]
```

Adding `pre="true"` to the editable element tag forces the editable element to maintain the line-formatting that is entered by the user to be retained. For example, if a user enters line-breaks, they are preserved when the field is saved. This feature is only applicable to the text and short text elemenst. This parameter should also be added to the element tag so that the line breaks are also rendered.

For example:

```
[EditableElement type="content" context="current" key="body" pre="true"]
[Element type="content" context="current" key="body" pre="true"]
[/EditableElement]
```

!!! note 
    The context settings of portalContext and portalMapping cannot be used with the editable element tag. This restriction applies both to the editable element tag itself, and any other tags that are referenced between the `[EditableElement]` and `[/EditableElement]` tags.

???+ info "Related information:"
    - [Inline editing](../../../../inline_editing/index.md)
    - [Enabling inline editing for content items](../../../../inline_editing/wcm_dev_inline_tags.md)

