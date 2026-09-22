# Configuring Core Editor

This topic describes the configuration options for Core Editor in HCL Web Content Manager (WCM).

## Overview

Core Editor is a rich text editor (RTE) available in HCL Digital Experience (DX). It provides support for text formatting, content structuring, and styling features. You can use Core Editor as an alternative to the Enhanced Editor (TinyMCE) and Advanced Editor (CKEditor).

Core Editor is available in two contexts:

- **[WCM Authoring Portlet](../../../build_sites/create_sites/authoring_tools/site_auth_portlet.md)**: Used for editing rich text elements in the traditional authoring form.
- **[Site Manager](../../wcm_authoring/inline_editing/index.md)**: Used for in-place editing of rich text content directly on the rendered page.

!!! warning
    Opening and saving rich text elements or rich text components that were originally created using another editor (Enhanced or Advanced) in Core Editor will transform the saved markup, even if no visible changes are made. HTML elements and styling that are unsupported by Core Editor (such as tables, images, iframes, and custom markup) may be removed.

    It is recommended to use Core Editor only for new content. For existing content, review the [Limitations](#limitations) and [Content security](#content-security) sections before switching editors to avoid unintended markup and styling changes.

## Enabling Core Editor

Core Editor is an optional RTE that is available by default. It is not set as the default editor unless explicitly configured. You can control its availability and set it as the default RTE using Helm values (for container deployments) or **WCM WCMConfigService** resource environment provider (REP) properties.

=== "Using Helm values (Containers)"
    1. Configure the following Helm values to control Core Editor behavior:

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
        | `incubator.configuration.coreEditor.enabled` | boolean | `true` | If `true`, Core Editor appears as an RTE option in the authoring portlet and is accepted as a valid in-place RTE. If `false`, Core Editor is hidden and any existing selections fall back silently to the platform default. |
        | `incubator.configuration.coreEditor.default` | boolean | `false` | If `true` (and `enabled` is also `true`), Core Editor is set as the default RTE for both the authoring portlet and Site Manager in-place editing. |

        These Helm values provision the corresponding **WCM WCMConfigService** REP custom properties described in the [On-Premises section](#enabling-core-editor).

        - `coreEditor.enabled` maps to `core.editor.enabled`.
        - `coreEditor.default` sets both `authoring.defaultRichTextEditor` and `inplaceEdit.defaultRichTextEditor` to `CoreEditor`.

    2. Run a `helm upgrade` to apply the changes. For instructions on applying Helm value changes, refer to [Upgrading Helm Deployment](../../../deployment/install/container/helm_deployment/update_helm_deployment.md).

=== "Using REP properties (On-Premises)"
    1. Configure the following custom properties in the **WCM WCMConfigService** REP. For instructions on setting service configuration properties, refer to [Setting service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/index.md).

        | Property | Default | Description |
        |----------|---------|-------------|
        | `core.editor.enabled` | `true` | If `true`, Core Editor appears as an RTE option in the authoring portlet and is accepted as a valid in-place RTE. If `false`, Core Editor is hidden and any existing selections fall back silently to the platform default. |
        | `authoring.defaultRichTextEditor` | *(unset)* | Set to `CoreEditor` to make Core Editor the default RTE for new or unconfigured authoring portlet instances. Other supported values: `TinyMCE`, `CKEditor`. |
        | `inplaceEdit.defaultRichTextEditor` | *(unset)* | Set to `CoreEditor` to make Core Editor the default RTE for in-place editing in Site Manager. Other supported values: `TinyMCE`, `CKEditor`. |

    2. Restart the Portal server.

## Using Core Editor in the WCM authoring portlet

You can use Core Editor in the WCM authoring portlet to edit rich text elements.

To set Core Editor as the RTE:

1. On the authoring portlet page, go to **Preferences > Edit Shared Settings**.
2. Open the **Editor Options** menu.
3. In the **Select the rich text editor to use in rich text fields** dropdown menu, select **Core Editor**.
4. Select **OK**.

!!! note
    You can also set the editor through the **Configure** mode, which sets the default for all users of that portlet instance. **Edit Shared Settings** overrides the **Configure** value when both are set. For more information, refer to [Authoring portlet settings](../../wcm_authoring/authoring_portlet/auth_portlet_settings/index.md).

## Using Core Editor in Site Manager

You can also use Core Editor as the RTE for in-place editing in Site Manager. When Core Editor is set as the in-place RTE, selecting a rich text element in Site Manager opens the Core Editor inline on the page.

To set Core Editor as the in-place editor:

=== "Containers"
    1. Set `coreEditor.default` to `true` in your Helm values. Refer to [Using Helm values](#enabling-core-editor) for the configuration reference.
    2. Run a `helm upgrade` to apply the changes. For instructions on applying Helm value changes, refer to [Upgrading Helm Deployment](../../../deployment/install/container/helm_deployment/update_helm_deployment.md).

=== "On-Premises"
    1. Set `inplaceEdit.defaultRichTextEditor` to `CoreEditor` in the **WCM WCMConfigService** REP.
    2. Restart the Portal server.

## Setting Core Editor as the default RTE

When Core Editor is set as the default, it is automatically selected for new or unconfigured authoring portlet instances and for in-place editing in Site Manager.

=== "Containers"
    1. Set `coreEditor.default` to `true` in your Helm values. This parameter provisions both `authoring.defaultRichTextEditor=CoreEditor` and `inplaceEdit.defaultRichTextEditor=CoreEditor`. Refer to [Using Helm values](#enabling-core-editor) for the configuration reference.
    2. Run a `helm upgrade` to apply the changes. For instructions on applying Helm value changes, refer to [Upgrading Helm Deployment](../../../deployment/install/container/helm_deployment/update_helm_deployment.md).

=== "On-Premises"
    1. Set both `authoring.defaultRichTextEditor` and `inplaceEdit.defaultRichTextEditor` to `CoreEditor` in the **WCM WCMConfigService** REP.
    2. Restart the Portal server.

!!! note
    The `core.editor.enabled` property must be `true` for the default setting to take effect. If `core.editor.enabled` is `false`, the default setting is ignored and the platform default editor is used instead.

## Disabling Core Editor

To hide Core Editor from the RTE dropdown:

=== "Containers"
    1. Set `coreEditor.enabled` to `false` in your Helm values. Refer to [Using Helm values](#enabling-core-editor) for the configuration reference.
    2. Run a `helm upgrade` to apply the changes. For instructions on applying Helm value changes, refer to [Upgrading Helm Deployment](../../../deployment/install/container/helm_deployment/update_helm_deployment.md).

=== "On-Premises"
    1. Set `core.editor.enabled` to `false` in the **WCM WCMConfigService** REP.
    2. Restart the Portal server.

When Core Editor is disabled, Core Editor does not appear in the authoring portlet RTE dropdown. Any authoring portlet instances previously configured to use Core Editor revert to the platform default editor (Enhanced Editor on Liberty or WebEngine, and Advanced Editor on WebSphere or Core). Site Manager in-place editing falls back to the platform default editor if `inplaceEdit.defaultRichTextEditor` was set to `CoreEditor`.

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
| Block formats | Applies block-level formats including heading 1 through heading 6, preformatted text, and normal paragraph. |
| Horizontal rule | Inserts a horizontal divider line between content sections. |
| Find and replace | Searches for text within the editor and optionally replaces matches. |
| Undo and redo | Reverts or reapplies recent editing actions. |
| Emoji | Inserts emoji characters from a built-in emoji picker. |
| Line height | Adjusts the line spacing of selected text. |
| Clear formatting | Removes all inline formatting from selected text. |
| Fullscreen mode | Expands the editor to fill the entire viewport. |

## Content security

Core Editor enforces content security through its schema-based architecture. Only HTML elements and attributes that correspond to registered editor extensions are accepted. Content that does not match the editor schema is removed when the content is loaded or saved.

`<iframe>` elements are not accepted by Core Editor due to its current content security settings. Embedded frames are removed from content when loaded or saved in the editor.

## Limitations

The following limitations apply to Core Editor:

- Link insertion through the toolbar is not supported. Pasted URLs appear as hyperlinks in the content area, but there is no toolbar button for creating or editing links. The WCM link picker for inserting managed content links, component reference links, and other WCM-specific link types is not available.
- Image insertion is not supported. The WCM image picker for browsing and inserting images from Digital Asset Management (DAM) collections or WCM libraries is not available.
- Table creation and editing are not supported.
- An HTML source view mode is not available. Content can only be edited through the visual rich text interface.
- A dedicated spell check service (such as TinyMCEServices for the Enhanced Editor) is not included. Browser-native spell checking is supported.
- Toolbar configuration and UI customization options are not available. You cannot modify the toolbar layout, button order, or editor appearance through configuration.

???+ info "Related information"
    - [Editor options](../../wcm_authoring/authoring_portlet/auth_portlet_settings/wcm_config_authoringportlet_richtext.md)
    - [Web content authoring options](wcm_config_prop_authoring.md)
    - [Authoring template fields](../../wcm_authoring/authoring_portlet/content_management_artifacts/authoring_templates/wcm_dev_auth-temp_fields.md)
    - [Adding a rich text element to a template](../../wcm_authoring/authoring_portlet/content_management_artifacts/elements/richtext_element/wcm_dev_elements_rich-text_add_template.md)
    - [WebSphere Integrated Solutions Console](../../../deployment/manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
    - [WCM logging and tracing](../../../deployment/manage/troubleshooting/logging_and_tracing/wcm_logs.md)
