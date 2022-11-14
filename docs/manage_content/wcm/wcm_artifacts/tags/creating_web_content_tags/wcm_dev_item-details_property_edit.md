# Creating an editable property tag

An editable property tag is used to make fields and metadata from content items and site areas editable when rendered by using a web content viewer portlet when the page is in edit mode.

An example of the format of an editable property tag:

```
[EditableProperty field=" " context=" " type=" " name=" " format=" " pre=" "
     callback=" " stateChangeCallback=" " refreshValueOnEdit=" " class=" " mode=" " placeholder=" "]

[/EditableProperty]
```

**Note:** This tag doesn't work correctly if basic or advanced rendering caches are enabled because authoring updates cannot immediately be displayed on the rendered page.

To create an editable property tag:

1.  Click **Insert a Tag** from a presentation template, component, or element design field. The **Tag Helper** dialog opens.

2.  Select **EditableProperty** as the tag type.

3.  Select a property type. This parameter is added to the tag as the field=" " parameter:

    **Note:** Only these property types are editable:

    -   Title
    -   Name
    -   Description
    -   Authors
    -   Owners
    -   PublishDate
    -   ExpiryDate
    -   GeneralDateOne
    -   GeneralDateTwo
4.  Select the item type and the context that is used to determine which item to reference:

    |Context and Item Type|type="auto"|type="content"|type="sitearea"|type="parent"|type="top"|
    |---------------------|-----------|--------------|---------------|-------------|----------|
    |**context="Selected"**If selected, the context is set by the selected item. You select an item by clicking **Select**. This parameter is added to the tag as the name=" " parameter:

|This parameter makes the property of the selected item editable when the page is in edit mode.|This parameter makes the property of the selected content item editable when the page is in edit mode.If a site area is selected, then nothing is editable.

|If the selected item is a site area, then this parameter makes the property of the site area editable when the page is in edit mode.If the selected item is a content item, then this parameter makes the property of the parent site area of the content item editable when the page is in edit mode.

|This parameter makes the property of the parent of the selected item editable when the page is in edit mode.|This parameter makes the property of the first item in the path of the selected item editable when the page is in edit mode.|
    |**context="Current"**If selected, the context is set by the current item.

|This parameter makes the property of the item currently being rendered editable when the page is in edit mode.|This parameter makes the property from the current content item editable when the page is in edit mode.If a site area is selected, then nothing is editable.

|If the item currently being rendered is a site area, this parameter makes the property of the current site area editable when the page is in edit mode.If the item currently being rendered is a content item, this parameter makes the property of the parent site area editable when the page is in edit mode.

|This parameter makes the property of the parent site area of the item currently being rendered editable when the page is in edit mode.|This parameter makes the property of the first item in the path of the item currently being rendered editable when the page is in edit mode.|
    |**context="Autofill"**Use this option when the item that is referenced is determined by the search parameters of a menu, navigator, or taxonomy component. If the tag is not used within a menu, navigator, or taxonomy component, the context reverts to the current item.

|This parameter makes the property of the item that is returned by a menu, navigator, or taxonomy component editable when the page is in edit mode.|This parameter makes the property from a content item that is returned by a menu, navigator, or taxonomy component editable when the page is in edit mode.If a site area is selected, then nothing is editable.

|If the current item returned by a menu, navigator, or taxonomy component is a site area, then the property from the site area is editable when the page is in edit mode.If the current item returned by a menu, navigator, or taxonomy component is a content item, this parameter makes the property of the parent site area editable when the page is in edit mode.

|This parameter makes the property of the parent item of the item that is returned by a menu, navigator, or taxonomy component editable when the page is in edit mode.|This parameter makes the property of the first item in the path of the item that is returned by a menu, navigator, or taxonomy component editable when the page is in edit mode.|

5.  Select whether to include start and end sections. You can enter extra text between the start and end sections of the tag, and other web content tags such as a component or element tag.

6.  Click **OK** to add the tag to your navigator design.


When you add this tag to your design, you can also add the following parameters to the tag:

|Tag parameters|Details|
|--------------|-------|
|`name=" "`|You must specify the name of the item that is referenced when `context="selected"`. If you specify `name="./itemName"`, the actual path is not resolved until the item is rendered. This takes slightly longer to resolve than specifying the path to the item.|
|`format=" "`|If you specify `format="div"`, the editable region is rendered within a div tag. If no format is specified, a div tag is used by default.If you specify format="span", the editable region is rendered within a span tag.

|
|`pre=" "`|Set `pre="true"` to enable multi-line support. This setting is only applicable to the description field. If enabled, line breaks entered by the user edits the description field are recognized when rendered. If not specified, this setting defaults to false.|
|`mode=" "`|This parameter determines the inline editing mode. -   Specify `mode="inplace"` to enable inplace editing of a property. Not all fields support inplace mode. If a property does not support inplace mode, dialog mode is used instead.
-   Specify `mode="embed"` to enable embedded editing of a property. Not all fields support embed mode. If a property does not support embed mode, dialog mode is used instead.
-   Specify `mode="dialog"` to enable editing in a dialog. All fields support dialog mode.

**Note:** The default rich text editor is always used with the modes 'inplace' or 'embed' are used. When the 'dialog' mode is used, the rich text editor that is selected in the authoring portlet settings, or in the content template for content items, is used.

|
|`callback=" "`|This parameter is used to reference an i$ promise. The promise is resolved if the inline edit is completed, and rejected if the inline edit is canceled.See the Javadoc for more information about i$ promises.

For example:

-   A standard callback can be written like this: `var myCallBack=new i$.Promise(); myCallBack.then(function(){window.alert('resolved')}, function(){window.alert('rejected')});return myCallBack;`
-   If `myCallBack` is an `i$` promise, then the callback can be written like this:`myCallBack`.
-   A function that itself returns a new promise each time it is executed can be written like this: `return (function() {var myCallBack = new i$.Promise(); myCallBack.then(function() {window.alert('resolved');}, function() {window.alert('rejected');}); return myCallBack;})();`

|
|`stateChangeCallback=" "`|This parameter is used to reference JavaScript state change callbacks for all state changes. See the Javadoc for more information.

For example, to specify `stateChangeCallback="myStateChangeCallback"` you might create the following state change callback function.

```
/**
  *  element: id of the current editing element region
  *  state    : the new state
  *  additionalData: some additional data like tag type, element name, messages
  */
function myStateChangeCallback(element, state, additionalData)

State Constants:
 // loading value
   StateChangeEvent.STATE_LOADING = 0;
   // editing
   StateChangeEvent.STATE_EDITING = 1;
   // saving
   StateChangeEvent.STATE_SAVING = 2;
   // saved
   StateChangeEvent.STATE_SAVED = 3;
   // cancelled
   StateChangeEvent.STATE_CANCELLED = 4;
   // error
   StateChangeEvent.STATE_ERROR = 5;
```

The registered JavaScript function is run each time the state changes.

**Note:** The loading state is run only the first time that a user edits the element.

|
|`refreshValueOnEdit=" "`|This setting forces the tag value to be refreshed when the field is edited by a user. This setting is on by default.

If you want to disable this feature, set this setting to false.

**Restriction:**

-   If set to false, there is no loading state for the field.

|
|`class=" "`|This parameter is used to specify a CSS class to the div or span tag that is specified by using the format parameter.**Note:** The custom class that you specify here must include styles with the names "saving", "editing" and "error." These parameters are required for displaying the editable field in edit mode, when an item is saved, and to display error messages.

The default css class that is used for inplace editable fields is **wcm-default-inplace-editable**.

This class can be overridden by adding the following setting in the `WCM WCMConfigService` service that uses the WebSphere® Integrated Solutions Console: `inplaceEdit.defaultClasses=class1 class2`

As many classes as required are added to this setting, which is separated by spaces.

You must base your custom classes on the default style sheet at `[AppServer\_root](../reference/wpsdirstr.md#was_root)\installedApps\nodename\wcm.ear\wcm-inplaceEdit.war\css\default-style.css`.

**Note:** Any classes that are specified on the EditableElement or EditableProperty tag takes precedence over this value.

If you need to use the default css class as well, add it to the list of classes. For example: `inplaceEdit.defaultClasses=wcm-default-inplace-editable class1 class2`

|
|`placeholder=" "`|The text entered here is displayed when there is no initial value for the body of the editable property field.For example: `placeholder="Enter title"`

It can also be used in combination with a text provider to render translated text. For example: `placeholder="[Plugin:TextProvider provider="com.mycompany.mybundle" key="enter_title"]"`

These special values are used to render text from existing sources:

-   **placeholder="useName"**

This parameter renders the name of the property.

-   **placeholder="useTitle"**

This parameter renders the title of the property.

-   **placeholder="useHelpText"**

This parameter renders the help text of the property.

-   **placeholder="useNone"**

This parameter shows no placeholder.


|

Extra text, HTML, or tags must be added between the `[EditableProperty]` and `[/EditableProperty]` tags. The text and tags added here is what is rendered on the page. When the page is in edit mode, this region is editable. When first added to your design, a corresponding property tag is added by default.

For example, to make an editable title, use the following tags:

```
[EditableProperty type="content" context="current" field="title"]
<h1>[Property type="content" context="current" field="title"]</h1>
[/EditableProperty]
```

Adding `pre="true"` to the editable property tag forces the editable property to maintain the line-formatting that is entered by the user to be retained. For example, if a user enters line-breaks, they are preserved when the field is saved. This feature is only applicable to the description field. This parameter should also be added to the property tag so that the line breaks are also rendered.

For example:

```
[EditableProperty type="content" context="current" field="description" pre="true"]
[Property type="content" context="current" field="description" pre="true"]
[/EditableProperty]
```

**Note:** The context settings of portalContext and portalMapping cannot be used with the editable property tag. This context applies both to the editable property tag itself, and any other tags that are referenced between the `[EditableProperty]` and `[/EditableProperty]` tags.

**Related information**  


[Inline editing](../wcm/wcm_dev_inline.md)

[Enabling inline editing for content items](../wcm/wcm_dev_inline_tags.md)

