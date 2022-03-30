# Normalizing tags 

The portal provides several options for normalizing tags. Normalization is a process of transforming a text fragment, such as a tag, into another, more generic representation. This bundles different spellings or grammatical versions of the same lexical word that users might use as tags, for example color, Color, COLOR, colour, colors, colored.

The standard normalization algorithm provided by the portal removes all diacritical marks from all letters of words. This documentation refers to the diacritic free morphological variation of a word as the normalized form of the word.

This is important when you consider which tags you want to be aggregated together when they are displayed as part of a tag widget, or, even more important, part of a tag cloud.

You can control the normalization behavior by various configuration parameters. To configure normalization behavior, go to **Resources** \> **Resource Environment** \> **Resource Environment** \> **Providers** \> **WP CPConfigurationService** \> **Custom Properties**. You configure normalization by using the following parameter in the portal CP Configuration Service resource environment provider in the WebSphere® Integrated Solutions Console:

-   **normalization.displayNormalizedName = \(false\)**

    This parameter defines whether the normalized tag names are displayed \(exposed\) in the tag cloud. The default value for this parameter is `false`.

    `com.ibm.wps.cp.tagging.normalization.displayNormalizedNames = false`

-   **normalization.typeAhead = \(normalized\)**

    This parameter defines the tag names that the type ahead for tag creation mechanism displays to the user. Valid values are `normalized` and `unnormalized`. The default value for this parameter is `normalized`.

    **Note:** The type-ahead feature works only with the dialog tag widget of the default tagging user interface of portal versions earlier than V 8.5. With HCL Portal V 8.5, the tag and rating widgets of earlier portal versions are deprecated.


**Parent topic:**[How tagging and rating works in the portal ](../admin-system/tag_rate_adm_gen.md)

**Related information**  


[Adding query parameters](../admin-system/tag_rate_api_rest_add_qparms.md)

[Type-ahead with the deprecated tag widget ](../admin-system/tag_rate_api_rest_oth_qu_typahed.md)

[Search suggestions for tag names ](../admin-system/tag_rate_api_rest_oth_qu_opsrchsug.md)

[CP Configuration Service for tagging and rating ](../admin-system/srvcfg_cpcfg4tr.md)

[Setting service configuration properties ](../admin-system/adsetcfg.md)

