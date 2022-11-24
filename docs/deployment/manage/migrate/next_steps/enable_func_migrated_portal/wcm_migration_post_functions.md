# New Web Content Manager features

You might need to update your old web content to take advantage of the new Web Content Manager features.

## Approver role

The Approver role is replaced by the Reviewer role and Draft Creator role. All users assigned the Approver role are automatically reassigned to the Reviewer and Draft Creator roles during migration to ensure that the behavior of the workflowed items remains unchanged on the new system. These new roles support inheritance and propagation, removing the need to set them explicitly on each item in the workflow stage.

The users that are assigned to the Reviewer role and Draft Creator role should be reviewed post migration because not all users need to be assigned to both roles. Enabling inheritance for these roles is also recommended, not just to reduce the effort of maintaining permissions on individual items, but to also improve overall system performance due to the reduction of explicit role assignments. The simplest way to enable inheritance is to assign users to the Reviewer role and Draft Creator role at the library level.

## Restart workflow

The minimum resource access that is required for the restart workflow function has been raised from edit access to the library, to manager access to the library. If you need to maintain the old access level, then you can change the following property in the `WCM WCMConfigService` service to "false" in the WebSphere® Integrated Solutions Console:

```
workflowrestart.requires.manager=false
```

## Web content configuration changes

**Note:** This was new in Web Content Manager version 8.0. No action is required if migrating from Web Content Manager version 8.0 or higher.

You no longer use the `WCMConfigService.properties` file to update configuration settings for Web Content Manager. Instead, you now use the `WCM WCMConfigService` service to update configuration settings with the WebSphere Integrated Solutions Console. For more information, see [Setting service configuration properties](../admin-system/adsetcfg.md).

## Web content tag format changes

**Note:** This was new in Web Content Manager version 8.0. No action is required if migrating from Web Content Manager version 8.0 or higher.

Web content tags now use brackets. This allows you to add web content tags directly into rich text fields.

For example, in previous versions the component tag was written as:

```
<component name="componentname" />
```

The component tag now uses brackets:

```
[component name="componentname" ]
```

**Note:**

-   All web content tags are converted to the new format during migration.
-   After migration, if a user enters a web content tag with the old format, it will be converted to the new format when saved.

## New web content property tag

**Note:** This was new in Web Content Manager version 8.0. No action is required if migrating from Web Content Manager version 8.0 or higher.

The `IDCmpnt`, `HistoryCmpnt`, `ProfileCmpnt`, `WorkflowCmpnt`, and `SecurityCmpnt` tags are no longer supported. These features are retained and consolidated into a new property tag.

```
[Property field=" " context=" " type=" " name=" " key=" " format=" " link=" " separator=" " 
htmlencode=" " awareness=" " ifEmpty=" " include=" " restrict=" " resolve=" "
start=" " end=" " ]
```

**Note:**

-   These tags are converted to the new property tag during migration.
-   After migration, if a user enters one of the deprecated tags, it will be converted to the new property tag when saved.

## Autofill parameter in web content tags

**Note:** This was new in Web Content Manager version 8.0. No action is required if migrating from Web Content Manager version 8.0 or higher.

The behavior of the autofill parameter that is used in some web content tags is updated. If used in an item where autofill is not applicable, the tag instead uses the context of the current item.

If you do not want this behavior to be used, you can add the following property in the `WCM WCMConfigService` service in the WebSphere Integrated Solutions Console

```
renderAutoFillTagsAsCurrent=false
```

## Federated content component and element

**Note:** This was new in Web Content Manager version 8.0. No action is required if migrating from Web Content Manager version 8.0 or higher.

The federated content component and element are no longer supported in version 8.0. To reference federated content in your website, use one of the following features:

-   The Enterprise Content Manager window
-   The Web Content Integrator
-   The federated document feature of Personalization

Federated content components and elements are migrated from previous versions and are visible in the authoring portlet. These items can still be rendered in web pages, but you cannot create new federated content components or elements unless you enable this function.

To maintain older systems, enable federated content components and elements in your new system by adding the following property in the `WCM WCMConfigService` service in the WebSphere Integrated Solutions Console:

```
federatedcontent.enabled=true
```

## Web content viewer portlet display title options

The standard Web Content Viewer portlet supports extra portlet and page display title options. You can now configure web content viewers to use the value of an element of the displayed content item as portlet and page display title.

## Links and metadata for remote content

**Note:** This was new in Web Content Manager version 8.0. No action is required if migrating from Web Content Manager version 8.0 or higher.

The federated documents feature of Web Content Manager is used to insert links to content from a remote content system or document repository. Examples of supported repositories include HCL Content Manager, IBM® FileNet® Content Manager, and Microsoft™ SharePoint. This capability is provided by the rich text editors in Version 8.5:

-   The default and advanced rich text editors include a toolbar button named **Insert Link to Remote Document**.
-   In addition to the toolbar button, the advanced rich text editor includes a menu item named **Insert Link to Remote Document**.

You can also use the federated documents feature with Personalization to create selection rules. Personalization is used to retrieve metadata about documents that are stored in external content management systems or document repositories. With personalization components in Web Content Manager, you can display the metadata and create links to the documents in your web content. To select remote content in the Personalization Editor, the federated documents feature provides a wizard.

In Version 8.5, the capabilities of the portal theme determine whether the user interface features for Web Content Manager and Personalization are available.

To enable the **Insert Link to Remote Content** function after migration, ensure that the `wp_federated_documents_picker` theme module is available on the migrated portal. Any page that contains the authoring portlet must use a theme that integrates this theme module. In addition, to ensure that the module is loaded, the module profile that is used by the page must include the `wp_federated_documents_picker` theme module. If the feature is disabled when you use inline editing of web content, complete these steps:

-   Apply a theme to the hidden authoring page that contains the `wp_federated_documents_picker` theme module. For example, you can apply the Portal 8.5 theme.
-   Apply a module profile to the hidden authoring page that contains the `wp_federated_documents_picker theme` module. For example, you can apply the deferred profile of the Portal 8.5 theme.
-   Apply a skin without decorations to the reserved authoring portlet instance on the hidden authoring page. For example, you can apply the "Portal 8.5 - No Skin" skin.

To enable the folder selection wizard in Personalization, ensure that the `wp_federated_documents_picker` theme module is available to the page that contains the Personalization Editor.


???+ info "Related information"
    -   [Configuring the reserved authoring portlet](../../../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/reserved_auth_portlet/wcm_config_wcmviewer_reservedcfg.md)
    -   [Inserting a Link in an Element](../../../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/element_designs/wcm_dev_elements_insert_link.md)
    -   [Personalizing federated documents](../../../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/feddocs/index.md)

