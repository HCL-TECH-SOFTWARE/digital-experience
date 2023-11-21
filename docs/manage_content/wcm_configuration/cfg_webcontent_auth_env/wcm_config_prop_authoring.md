# Web content authoring options

You can tailor the authoring behavior of your web content environment by changing configuration settings such as workflow, profiling, and version control.

You define and manage authoring options in the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console.

## Preventing automatic manager-level access when artifacts are created

Ensure that the workflow.skipDefaultManagerAccess property is set to true to prevent creating manager-level access rights when artifacts are created or edited. This property improves performance.

## Enabling workflows

You can update the `WCM WCMConfigService` service to enable workflows for different items.

To enable workflows, create a new property for the item type to which you want to apply workflow, and specify a value of `com.aptrix.pluto.workflow.WorkflowControl` for the property.

The workflow is only applied to items created after you update this setting. To add or remove workflows from existing items, run the workflow update tool. For information, refer to [Updating workflows by using the workflow update tool](../../wcm_configuration/wcm_adm_tools/wcm_admin_workflow.md).

You can enable workflow for the following item types:

-   Content items \(`control.Content`\)
-   Presentation templates \(`control.Style`\)
-   Authoring templates \(`control.Template`\)
-   Taxonomy items \(`control.Taxonomy`\)
-   Categories \(`control.Category`\)
-   Site area items \(`control.SiteArea`\)
-   Library components \(`control.Cmpnt`\)

For example: to enable workflows for an authoring template, you add `com.aptrix.pluto.workflow.WorkflowControl` to the `control.Template` property:

-   Property name: `control.Template`
-   Value: `com.aptrix.pluto.taxonomy.ProfileControl, com.aptrix.pluto.workflow.WorkflowControl`

To disable workflows for an item type, you remove `com.aptrix.pluto.workflow.WorkflowControl` from the item's property type.

!!! note
    If workflows are enabled for the following items, a workflow view is not available in the item views navigator.

-   Site areas.
-   Taxonomies and categories.
-   Workflows, workflow stages, or workflow actions.

Individual items can still be moved through workflow stages by accessing them through the normal item views and approving them.

!!! note 
    Only content items can be moved through a workflow by using the web content API. If you enable workflows for other item types, you cannot approve or reject these items by using the API.

## Enabling profiling

You can update the `WCM WCMConfigService` service to enable profiling for different items.

To enable profiling, create a new property for the item type to which you want to apply profiling, and specify a value of `com.aptrix.pluto.taxonomy.ProfileControl` for the property.

The profiling feature is only applied to items created after you update this setting. To add or remove the profile section from existing items, [run the profile enablement tool](../../wcm_configuration/wcm_adm_tools/wcm_admin_profile_enable.md).

You can enable profiling for the following item types:

-   Content items \(`control.Content`\)
-   Presentation templates \(`control.Style`\)
-   Authoring templates \(`control.Template`\)
-   Taxonomy items \(`control.Taxonomy`\)
-   Categories \(`control.Category`\)
-   Site area items \(`control.SiteArea`\)
-   Library components \(`control.Cmpnt`\)

For example: to enable profiling for components, you need to add `com.aptrix.pluto.taxonomy.ProfileControl` to the `control.Cmpnt` property:

-   Property name: `control.Cmpnt`
-   Value: `com.aptrix.pluto.workflow.WorkflowControl, com.aptrix.pluto.taxonomy.ProfileControl`

!!! note
    From CF08 onwards, all items are enabled to use the profiling feature by default.

To disable profiling for an item type, you remove `com.aptrix.pluto.taxonomy.ProfileControl` from the item's property type.

## Version control options

By default version control is enabled with the following properties:

-   `versioningStrategy.AuthoringTemplate`
-   `versioningStrategy.Component`
-   `versioningStrategy.Content`
-   `versioningStrategy.PresentationTemplate`
-   `versioningStrategy.Taxonomy`
-   `versioningStrategy.Workflow`
-   `versioningStrategy.Default`

You can use the following values to specify version control settings:

-   **always**

    A version is saved every time a non-workflow item is saved, or every time a workflow item is published.


-   **manual**

    Versions are saved when a user with at least editor access chooses to save a version. This setting causes the following changes in the interface:

    -   The **Save Version** option is available in the read mode of non-workflow items and in workflow items in the published state.
    -   The **Save and Version** option is available in the edit mode of non-workflow items and in workflow items in the published state.

-   **never**

    Disable version control for an item type.


If a version control strategy is not defined for an item type, then the version control strategy that is specified in by the `versioningStrategy.Default` property is used.

## Limiting versioning by setting the number of active versions

There are properties that you can configure to remove the later versions when new versions are created. You can control the number of versions that you want to save by enabling the following property and by setting a threshold value for it in the `WCM WCMConfigService` resource environment provider.

```
versioning.service.auto.crop.enabled = true
versioning.service.auto.crop.threshold = 10
```

The default value for `versioning.service.auto.crop.threshold` is 10.

For example, if you want to keep only the active version of a content item, then enable the property and set the threshold value as follows:

```
versioning.service.auto.crop.enabled = true
versioning.service.auto.crop.threshold = 1
```

## Inheritance options

By default, inheritance is automatically propagated down to each item. You can disable automatic inheritance by specifying the following property:

-   Property name: `default.inherit.permissions.enabled`
-   Value: `false`

When this setting is specified, it is applied only to new items. The inheritance on existing items remains unchanged.

## Hierarchical item locking options

When a content item is being edited, it is locked. Other users are prevented from editing the content item until it is unlocked. Locking of site areas, taxonomies, and categories are configurable and is not enabled by default. To enable locking for hierarchical item types, specify the following properties: change the following parameters to "true":

|Property name|Value|
|-------------|-----|
|`wcm.authoringui.lock.taxonomies`|`true`|
|`wcm.authoringui.lock.categories`|`true`|
|`wcm.authoringui.lock.siteareas`|`true`|
|`wcm.authoringui.lock.projects`|`true`|

When locking is enabled for site areas, you cannot create any children within the locked site area. For example, if a site area is locked, you cannot create any new site areas or content items within that site area until it is unlocked. This applies only to direct children of the locked parent. Items that are descendants of the children of a locked parent are not affected.

## Defining valid mime types for the image element

You define the mime types of files that are allowed to be uploaded into the image element by using the `imageresourcecmpnt.allowedmimetypes` property and a list of mime types for the value. For example:

-   Property name: `imageresourcecmpnt.allowedmimetypes`
-   Value: `image/gif,image/jpeg`

This feature prevents users from uploading non-image files into the image element.

## Active content filtering

Active content filtering provides the ability to strip specified HTML fragments from HTML entered in elements. This includes rich text and HTML elements. Active content filtering is configured by using the `active.content.filtering.enable` property. By default, active content filtering is enabled. If enabled, this prevents a user from introducing malicious code into a website such as cross site scripting.

For example, if a user entered this code into an HTML element:

```
Welcome
<a href="javascript:window.alert("boo!")">my link</a>
<script language="javascript">window.alert("boo 2!")</script>
Click the link for a surprise.
```

It would be changed to the following when saved:

```
Welcome
<a href="<"- active content removed -->">my link</a>
<"- active content removed -->
Click the link for a surprise.
```

## Setting the default child placement position

You can set the parameter **wcm.authoringui.childPlacementDefault** to specify the default placement of new content items.

|Property value|Description|
|--------------|-----------|
|`start`|This setting will, by default, place a new content item as the first content item within a site area.|
|`end`|This setting will, by default, place a new content item as the last content item within a site area.|

-   If this parameter is not set, the default child position is "end".
-   The default placement position that is specified in an authoring template overrides this setting for content items that are created with that authoring template.

## Setting the size of the breadcrumb library drop-down

You can set the parameter **wcm.authoringui.breadcrumbLibrariesMaximum** to specify the number of libraries that are shown in the authoring interface breadcrumb. For example, wcm.authoringui.breadcrumbLibrariesMaximum=16

-   If this parameter is not set, only the first 10 libraries are displayed.
-   The value of this parameter must be an integer 5 - 50.
-   Its value should be 10 - 20.
-   If more than this number of libraries exist, the remaining libraries are accessible by using the **Select from all libraries** option.

## Expired items

By default, expired items are displayed alongside published and draft items.

To determine whether expired items are listed in views, you can specify the `wcm.authoringui.showexpireditems` property in the `WCM WCMConfigService` service by using the WebSphere Integrated Solutions Console:

-   If set to `true`, expired items are displayed alongside published and draft items.
-   If set to `false`, only published and draft items are displayed.
-   If not specified, this setting defaults to `true`.

## Default in-place editing mode

These parameters are used to define the default - editing mode for text fields and rich text fields:

-   `inplaceEdit.defaultModeForRichText`
-   `inplaceEdit.defaultModeForText`

Use these values to specify the editing mode for text and rich text fields:

-   Specify `inplace` to enable in-place editing of an element. Not all fields support in-place mode. If an element does not support in-place mode, dialog mode is used instead.
-   Specify `embed` to enable embedded editing of an element. Not all fields support embed mode. If an element does not support embed mode, dialog mode is used instead.
-   Specify `dialog` to enable editing in a dialog. This is useful for larger elements such as rich text elements that may not be suitable for in-place editing. All fields support dialog mode.

If this setting is not specified, in-place editing mode is used by text fields by default, and dialog editing mode is used by rich text fields by default.

From version 8.5.0 CF3, if this setting is not specified, embed mode is used by text fields and rich text fields by default.

The default in-place editing mode can be overridden in EditableElement tags by using the mode parameter.

!!! note
    The default rich text editor is always used when the in-place modes or embed modes are used. When the 'dialog' mode is used, the rich text editor that is selected in the authoring portlet settings, or in the content template for content items, is used.

## Defining the editor used for in-place editing

From CF12 onwards, the Textbox.io editor is used as the embedded editor, and the CK editor is used as the in-place editor. To use Textbox.io as the in-place editor, add this setting:

-   `inplaceEdit.defaultRichTextEditor=Textbox.io`

From CF208 onwards, the TinyMCE editor can be used as the embedded editor, and the CK editor is used as the in-place editor. To use TinyMCE as the in-place editor, add this setting:

-   `inplaceEdit.defaultRichTextEditor=TinyMCE`

## Default css styles for in-place editable fields

The default css class that is used for in-place editable fields is **wcm-default-inplace-editable**.

This class can be overridden by adding the following setting: `inplaceEdit.defaultClasses=class1 class2`

As many classes as required are added to this setting, which is separated by spaces.

You should base your custom classes on the default stylesheet at [AppServer\_root](../../../guide_me/wpsdirstr.md)\installedApps\nodename\wcm.ear\wcm-inplaceEdit.war\css\default-style.css.

!!! note 
    Any classes that are specified on the EditableElement or EditableProperty tag takes precedence over this value.

If you need to use the default css class as well, add it to the list of classes. For example: `inplaceEdit.defaultClasses=wcm-default-inplace-editable class1 class2`

## Restrict users ability to apply authoring templates

By default, only managers have access to the **Apply Template** option. To allow all users to apply a new authoring template to content items they have edit access to, change this setting to false:

-   `wcm.authoringui.onlyShowApplyTemplateButtonForManagers=false`

## Enabling content creation without a content template

To enable the creation of content items without using a content template when you use the web content authoring page from the applications menu, add the following setting:

-   `wcm.authoringui.noContentTemplateOptionEnabled=true`

Content items that are created by using this option have no content template accessible by the user. This option is useful when there is a need for content to store data, such as configuration parameters, but not be rendered in a website.


???+ info "Related information"
    - [Setting service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)
    - [WebSphere® Integrated Solutions Console](../../../deployment/manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)

