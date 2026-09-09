# Core Editor configuration options

This topic describes the configuration options for Core Editor in HCL Web Content Manager (WCM).

## Overview

Core Editor is a rich text editor available in HCL Digital Experience (DX). It provides support for text formatting, content structuring, and styling features. Core Editor can be used as an alternative to TinyMCE and CKEditor.

Core Editor is available in two contexts:

- **WCM Authoring Portlet** — Used for editing rich text elements in the traditional authoring form.
- **Site Manager (Inplace Editing)** — Used for inline editing of rich text content directly on the rendered page.

!!! important "Important note before proceeding with the Core Editor"
    Opening and saving rich text elements or rich text components that were originally created using another editor (TinyMCE or CKEditor) in Core Editor will transform the saved markup, even if no visible changes are made. HTML elements and styling that are unsupported by Core Editor (such as tables, images, iframes, and custom markup) may be removed. Review the [Known limitations](#known-limitations) and [Content security](#content-security) sections before switching editors on existing content.

## Enabling Core Editor

Core Editor is enabled by default. You can control its availability and set it as the default RTE using Helm values (for container deployments) or WCM WCMConfigService resource environment provider (REP) properties.

### Using Helm values (Containers)

=== "Containers"
    Configure the following Helm values to control Core Editor behavior:

    ```yaml
    incubator:
      configuration:
        coreEditor:
          # If true, includes the Core Editor as a Rich Text Editor option.
          enabled: true
          # If true, sets the Core Editor as the default Rich Text Editor.
          default: false
    ```

    | Helm Value | Type | Default | Description |
    |------------|------|---------|-------------|
    | `incubator.configuration.coreEditor.enabled` | boolean | `true` | If `true`, Core Editor appears as an RTE option in the authoring portlet and is accepted as a valid inplace RTE. If `false`, Core Editor is hidden and any existing selections fall back silently to the platform default. |
    | `incubator.configuration.coreEditor.default` | boolean | `false` | If `true` (and `enabled` is also `true`), Core Editor is set as the default RTE for both the authoring portlet and Site Manager inplace editing. |

    These Helm values provision the corresponding WCM WCMConfigService REP custom properties described in the [On-Premises section](#using-rep-properties-on-premises). Specifically, `coreEditor.enabled` maps to `core.editor.enabled`, and `coreEditor.default` sets both `authoring.defaultRichTextEditor` and `inplaceEdit.defaultRichTextEditor` to `CoreEditor`.

    For instructions on applying Helm value changes, see [Upgrading Helm Deployment](../../../deployment/install/container/helm_deployment/update_helm_deployment.md).

### Using REP properties (On-Premises)

=== "On-Premises"
    Configure the following custom properties in the **WCM WCMConfigService** resource environment provider. For instructions on setting service configuration properties, see [Setting service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/index.md).

    | Property | Default | Description |
    |----------|---------|-------------|
    | `core.editor.enabled` | `true` | If `true`, Core Editor appears as an RTE option in the authoring portlet and is accepted as a valid inplace RTE. If `false`, Core Editor is hidden and any existing selections fall back silently to the platform default. |
    | `authoring.defaultRichTextEditor` | *(unset)* | Set to `CoreEditor` to make Core Editor the default RTE for new or unconfigured authoring portlet instances. Other supported values: `TinyMCE`, `CKEditor`. |
    | `inplaceEdit.defaultRichTextEditor` | *(unset)* | Set to `CoreEditor` to make Core Editor the default RTE for Site Manager inplace editing. Other supported values: `TinyMCE`, `CKEditor`. |

    Restart the Portal server after making changes.

## Using Core Editor in the WCM authoring portlet

You can use Core Editor in the WCM authoring portlet for editing rich text elements.

Follow these steps to start using Core Editor in the authoring portlet:

1. In the authoring portlet page, go to **Preferences > Edit Shared Settings**.

2. Open the **Editor Options** menu.

3. Click the **Select the rich text editor to use in rich text fields** dropdown menu and choose **Core Editor**.

4. Click **OK**.

After configuring your authoring portlet to use Core Editor, you can create and edit content with rich text using the Core Editor.

!!! note
    You can also set the editor through **Configure** mode, which sets the default for all users of that portlet instance. **Edit Shared Settings** overrides the **Configure** value when both are set. For more information, see [Authoring portlet settings](../../wcm_authoring/authoring_portlet/auth_portlet_settings/index.md).

## Using Core Editor in Site Manager (Inplace Editing)

Core Editor can also be used as the rich text editor for Site Manager inplace editing. When Core Editor is set as the inplace RTE, clicking a rich text element in Site Manager opens the Core Editor inline on the page.

To set Core Editor as the inplace editor:

- **Containers:** Set `coreEditor.default` to `true` in your Helm values. See [Using Helm values](#using-helm-values-containers) for the configuration reference.
- **On-Premises:** Set `inplaceEdit.defaultRichTextEditor` to `CoreEditor` in the **WCM WCMConfigService** resource environment provider and restart the Portal server.

## Setting Core Editor as the default RTE

When Core Editor is set as the default, it is automatically selected for new or unconfigured authoring portlet instances and for Site Manager inplace editing.

- **Containers:** Set `coreEditor.default` to `true` in your Helm values. This provisions both `authoring.defaultRichTextEditor=CoreEditor` and `inplaceEdit.defaultRichTextEditor=CoreEditor`. See [Using Helm values](#using-helm-values-containers) for the configuration reference.
- **On-Premises:** Set both `authoring.defaultRichTextEditor` and `inplaceEdit.defaultRichTextEditor` to `CoreEditor` in the **WCM WCMConfigService** resource environment provider and restart the Portal server.

!!! note
    The `core.editor.enabled` property must be `true` for the default setting to take effect. If `core.editor.enabled` is `false`, the default setting is ignored and the platform default editor is used instead.

## Disabling Core Editor

To hide Core Editor from the RTE dropdown and prevent it from being used:

- **Containers:** Set `coreEditor.enabled` to `false` in your Helm values. See [Using Helm values](#using-helm-values-containers) for the configuration reference.
- **On-Premises:** Set `core.editor.enabled` to `false` in the **WCM WCMConfigService** resource environment provider and restart the Portal server.

When Core Editor is disabled:

- Core Editor does not appear in the authoring portlet RTE dropdown.
- Any authoring portlet instances previously configured to use Core Editor silently fall back to the platform default editor (TinyMCE on Liberty/WebEngine, CKEditor on WebSphere/Core).
- Site Manager inplace editing falls back to the platform default editor if `inplaceEdit.defaultRichTextEditor` was set to `CoreEditor`.

## Supported features

Core Editor supports the following editing features:

| Feature | Description |
|---------|-------------|
| Bold, italic, underline, strikethrough | Applies inline text emphasis and decoration styles. |
| Subscript, superscript | Applies subscript or superscript formatting to selected text. |
| Font family and font size | Changes the font family and font size of selected text. |
| Font color and background color | Sets the text color or highlight background color of selected text. |
| Text alignment | Aligns text to the left, center, right, or justified. |
| Bullet and ordered lists | Creates unordered (bullet) or ordered (numbered) lists. |
| Indent and outdent | Increases or decreases the indentation level of content. |
| Blockquote | Wraps selected content in a blockquote element. |
| Block formats | Applies block-level formats including Heading 1 through Heading 6, Preformatted, and Normal paragraph. |
| Horizontal rule | Inserts a horizontal divider line between content sections. |
| Find and replace | Searches for text within the editor and optionally replaces matches. |
| Undo and redo | Reverts or reapplies recent editing actions. |
| Emoji | Inserts emoji characters from a built-in emoji picker. |
| Line height | Adjusts the line spacing of selected text. |
| Clear formatting | Removes all inline formatting from selected text. |
| Fullscreen mode | Expands the editor to fill the entire viewport.

## Content security

Core Editor enforces content security through its schema-based architecture. Only HTML elements and attributes that correspond to registered editor extensions are accepted. Content that does not match the editor schema is removed when the content is loaded or saved.

`<iframe>` elements are not accepted by Core Editor due to its current content security settings. Embedded frames are removed from content when loaded or saved in the editor.

## Known limitations

The following limitations apply to Core Editor:

- **Links** — Link insertion through the toolbar is not supported. Pasted URLs are displayed as hyperlinks in the content area, but there is no toolbar button for creating or editing links. The WCM link picker for inserting managed content links, component reference links, and other WCM-specific link types is not available.
- **Images** — Image insertion is not supported. The WCM image picker for browsing and inserting images from Digital Asset Management (DAM) collections or WCM libraries is not available.
- **Tables** — Table creation and editing is not supported.
- **Source view** — An HTML source view mode is not available. Content can only be edited through the visual rich text interface.
- **Spell checker** — Browser-native spell checking is supported. A dedicated spell check service (such as TinyMCEServices for the Enhanced Editor) is not included.
- **Editor customization** — Toolbar configuration and UI customization options are not available. The toolbar layout, button order, and editor appearance cannot be modified through configuration.

???+ info "Related information"
    - [Editor options](../../wcm_authoring/authoring_portlet/auth_portlet_settings/wcm_config_authoringportlet_richtext.md)
    - [Web content authoring options](wcm_config_prop_authoring.md)
    - [Authoring template fields](../../wcm_authoring/authoring_portlet/content_management_artifacts/authoring_templates/wcm_dev_auth-temp_fields.md)
    - [Adding a rich text element to a template](../../wcm_authoring/authoring_portlet/content_management_artifacts/elements/richtext_element/wcm_dev_elements_rich-text_add_template.md)
    - [WebSphere Integrated Solutions Console](../../../deployment/manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
    - [WCM logging and tracing](../../../deployment/manage/troubleshooting/logging_and_tracing/wcm_logs.md)
