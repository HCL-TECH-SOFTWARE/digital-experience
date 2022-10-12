# Normalizing tags

The portal provides several options for normalizing tags. Normalization is a process of transforming a text fragment, such as a tag, into another, more generic representation. This bundles different spellings or grammatical versions of the same lexical word that users might use as tags, for example color, Color, COLOR, colour, colors, colored.

The standard normalization algorithm provided by the portal removes all diacritical marks from all letters of words. This documentation refers to the diacritic free morphological variation of a word as the normalized form of the word.

This is important when you consider which tags you want to be aggregated together when they are displayed as part of a tag widget, or, even more important, part of a tag cloud.

You can control the normalization behavior by various configuration parameters. To configure normalization behavior, go to **Resources** \> **Resource Environment** \> **Resource Environment** \> **Providers** \> **WP_CPConfigurationService** \> **Custom Properties**. You configure normalization by using the following parameter in the portal CP Configuration Service resource environment provider in the WebSphere® Integrated Solutions Console:

-   **normalization.displayNormalizedName = \(false\)**

    This parameter defines whether the normalized tag names are displayed \(exposed\) in the tag cloud. The default value for this parameter is `false`.

    `com.ibm.wps.cp.tagging.normalization.displayNormalizedNames = false`

-   **normalization.typeAhead = \(normalized\)**

    This parameter defines the tag names that the type ahead for tag creation mechanism displays to the user. Valid values are `normalized` and `unnormalized`. The default value for this parameter is `normalized`.

    !!! note
        The type-ahead feature works only with the deprecated dialog tag widget of the default tagging user interface of portal versions earlier than V 8.5.



???+ info "Related information"
    - [Adding query parameters](../dev_tagging_and_rating/rest_api/tag_rate_api_rest_add_qparms.md)
    - [Type-ahead with the deprecated tag widget](../dev_tagging_and_rating/rest_api/other_queries/tag_rate_api_rest_oth_qu_typahed.md)
    - [Search suggestions for tag names](../dev_tagging_and_rating/rest_api/other_queries/tag_rate_api_rest_oth_qu_opsrchsug.md)
    - [CP Configuration Service for tagging and rating](../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cp_cfg_svc/index.md)
    - [Setting service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

