# New features in Content Template 4.2

New features for Content Template Catalog 4.2 include a new theme and Dojo 1.9 support.

## HCL Portal 8.5 theme support

-   Supports and requires the HCL Portal 8.5 theme.
-   Runs on Dojo 1.9.

## Localized CTC demonstration sites

The CTC Demo site is available in English, Arabic, German, Spanish and Chinese if you install or upgrade by using the option `CTC_MLS=true`. See [The localized CTC demonstration sites](ctc_overview_comp_demo-mls.md) for further information.

## Embedded editing

All text and rich text fields throughout Content Template Catalog are now editable using the new "embed" mode for inline editing. The embed mode retains the exact styles and layout of the page, giving you true WSYWIG editing of all fields.

**Note:** When you install or upgrade to version 4.2, the following Web Content Manager configuration parameters are set:

-   `inplaceEdit.defaultModeForRichText=embed`

    This means all in-place edit rich text elements use embed mode by default, not just for Content Template Catalog, but for all in place edit rich text elements.

-   `inplaceEdit.defaultModeForText=embed`

    This means all in place edit text elements use embed mode by default, not just for Content Template Catalog, but for all in place edit text elements.


## Rendering plug-in changes

-   The Content Template Catalog rendering plug-ins "IfEmpty", "IfNotEmpty", "IfDevice", "IfNotDevice" and "GetDate" have been added to Web Content Manager 8.5, and are no longer installed with Content Template Catalog 4.2.
-   The Content Template Catalog rendering plug-ins "Attribute" and "Parameter" have been removed from Content Template Catalog 4.2. The Web Content Manager 8.5 rendering plug-ins "RequestAttribute" and "SessionAttribute" should be used to replace "Attribute", and the Web Content Manager 8.5 rendering plug-in "RequestParameter" should be used to replace "Parameter".
-   The Content Template Catalog rendering plug-ins "IfEqual", "IfNotEqual" and "Encode" are deprecated. The Web Content Manager 8.5 rendering plug-ins "Equals", "NotEquals" and "URLEncode" must be used instead.

## Managed pages no longer required

In previous versions, Content Template Catalog required managed pages to be enabled. This is no longer a requirement.

## Tagging and Rating enabled in the CTC Content Profile

The tagging and rating widgets and now more lightweight, and are now included in the **CTC Content** profile. There is no separate **CTC Content with Tagging and Rating** profile.


