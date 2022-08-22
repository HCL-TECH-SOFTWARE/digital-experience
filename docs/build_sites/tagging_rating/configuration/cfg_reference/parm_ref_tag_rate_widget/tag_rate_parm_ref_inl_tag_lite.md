# Tag widget parameter reference

You configure specific tag widget instances by setting the JavaScript parameters that are listed here.

**Note:** The parameters listed here are specific to the inline tag widget that was introduced with HCL Portal Version 8.5. For information about the earlier widgets and their parameters, read the appropriate topics in the HCL Portal Version 8.0 product documentation.

To set the parameters, proceed as follows:

1.  In HCL Web Content Manager, go to **Applications** \> **Content** \> **WCM Authoring** \> **Libraries** \> **Web Resources v70** \> **Components**.
2.  Select the check box for **HTML - Tagging Widget Light - Menu**.
3.  Click **Edit**.

The following parameters are optional for the tag widget. They correspond to similar parameters in the WP CP Configuration Service.

-   **countsEnabled = false**

    Use this parameter to specify whether the count of each community tag is displayed. The count shows how often the tag was applied by users. The default value is `false`. To show the count of each community tag, specify `true`. The count is then displayed in parentheses.

-   **customLabel**

    Use this parameter to specify a non-localized custom label to describe the displayed tags. If you do not want any further labeling or if you want to keep the label short, you can specify an empty string.

-   **customLabelCommunityTags = = \(false\)**

    Use this parameter to specify the non-localized label that you want to be used to describe the meaning of the community tagging that is displayed. The default value is `false`.

-   **customLabelPersonalPublicTags = \(false\)**

    Use this parameter to specify the non-localized label that you want to be used to describe the meaning of the personal public tagging that is displayed. The default value is `false`.

-   **customLabelPersonalPrivateTags = \(false\)**

    Use this parameter to specify the non-localized label that you want to be used to describe the meaning of the personal private tagging that is displayed. The default value is `false`.

-   **customMessageNoTags**

    Use this parameter to specify a non-localized custom label that you want to be displayed if no tags are available. This case can occur when users did not assign tags to the piece of content yet. Non-localized means that the label does not change with the browser language. This parameter has no default value.

-   **maxResults = 5**

    Use this parameter to specify the number of tags that are shown per resource. The default value is `5`.

-   **order = DESC\|ASC**

    Use this parameter to specify the order direction for displaying the tags. This parameter is related to the parameter `orderMetric` . It can take the following values:

    -   **DESC**

        This value is the default value. It specifies descending order. For example, if the default `TAG_SPACE_COUNT_REVERSE_NAME` is specified for the `orderMetric` parameter that is listed later, tags with the highest count and the lowest character in the alphabet are listed first.

    -   **ASC**

        This value specifies ascending order. For example, if the order metric parameter is specified as `orderMetric = TAG_SPACE_COUNT`, tags with the lowest count are listed first.

-   **orderMetric = TAG\_SPACE\_COUNT\_REVERSE\_NAME**

    Use this parameter to specify the order metric for the order by which the tags are displayed. To determine the actual order, use the parameter `order` that was listed earlier. The default value is `TAG_SPACE_COUNT_REVERSE_NAME`. This default value means that tags are shown first by the tag count, with resources with more tags shown before resources with fewer tags, then, if resources have the same number of tags, alphabetically. This parameter can take the following values:

    -   `TAG_SPACE_NAME`
    -   `TAG_SPACE_COUNT`
    -   `TAG_SPACE_COUNT_NAME`
    -   `TAG_SPACE_COUNT_REVERSE_NAME`. This value is the default value.
    -   `TAG_SPACE_CREATION_DATE`
    -   `TAG_SPACE_LAST_MODIFIED_DATE`
    For more information, see the class `com.ibm.portal.cp.Constants.OrderMetric` in the HCL Digital Experience Javadoc.

-   **privateTaggingEnabled = \(false\)**

    Use this parameter to specify the `PERSONAL_PRIVATE` scope for the tags that you want to show in this widget. The default value is `false`. By this default, users cannot add private tags. If you set this parameter to `true`, users can also add private tags.

-   **resourceCategories = \["resrc\_category\_1", "resrc\_category\_2", . . . "resrc\_category\_n"\]**

    Use this parameter to specify an array of categories that are assigned to the resource for which the widget was called. Represent each category by a string, for example `Books` or a Web Content Manager category. A typical value is `["books", "action"]`.

-   **resourcePrivate = true\|false**

    You can set this parameter to avoid access control issues with private resources. Users can add private tags only to private resources. The default value is `false`.

-   **resourceType**

    Use this parameter to specify the portal resource type. Specify either `CONTENT_NODE` or `NAVIGATION_NODE`. Specifying a value for this parameter is mandatory for portal resources only.

-   **tagClickActionMode = TAG\_CENTER\|PUBLIC\_RENDER\_PARAMETER**

    Use this parameter to determine what happens when a user clicks a tag. Specify one of the following values:

    -   **TAG\_CENTER**

        With this value, the widget redirects the user to the tag center. This value is the default value.

    -   **PUBLIC\_RENDER\_PARAMETER**

        With this value, the widget exposes a public render parameter with the tag name.

-   **tagClickTransmitScopes = \(false\)  **

    Use this parameter to specify whether scopes to which a tag belongs, for example categories, are transmitted, when a user clicks a tag. Setting this parameter set to `true` makes sense only if you also set the parameter `com.ibm.wps.cp.tagging.inline.tagsClickable` to `true`.

-   **tagsClickable = true\|false**

    Use this parameter to determine whether the tags can be clicked for redirection or public render parameter exposure. The default is `true`.

-   **tagScope = \(COMMUNITY\_PERSONAL\_PUBLIC\)**

    Use this parameter to specify the scope of tags that you want to show in this widget. Specify one of the following values:

    ```
    PERSONAL_PUBLIC|PERSONAL_PRIVATE|COMMUNITY_PERSONAL_PUBLIC
    ```

    If you do not specify a value, the parameter defaults to `COMMUNITY_PERSONAL_PUBLIC`.



**Related information**  


[Properties for the tag widget](../admin-system/srvcfg_cpcfg4tr_dlgtag_altui.md)

[The tag and rating widgets](../admin-system/tag_rate_ui_alt.md)

[The rating widget](../admin-system/tag_rate_inline_rate_wdgt_lite.md)

[Customizing the tag widget](../admin-system/tag_rate_cust_inltag_lite.md)

[Adding the rating widget to your portal content](../admin-system/tag_rate_add_inlrate_lite.md)

[Customizing the rating widget](../admin-system/tag_rate_cust_inlrate_lite.md)

