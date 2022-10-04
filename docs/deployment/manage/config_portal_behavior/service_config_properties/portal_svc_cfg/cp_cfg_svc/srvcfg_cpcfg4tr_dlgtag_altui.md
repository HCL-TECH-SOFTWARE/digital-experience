# Properties for the tag widget

View the properties for the tag widget.

!!!note
    The parameters listed here are specific to the inline tag widget that was introduced with HCL Portal Version 8.5. For information about the earlier widgets and their parameters, read the appropriate topics in the HCL Portal Version 8.0 product documentation.

-   **com.ibm.wps.cp.tagging.inline.countsEnabled = \(false\)  **

    Use this property to specify whether the count of each community tag is displayed. The count shows how often the tag was applied by users. The default value is `false`. To have the count of each community tag that is displayed, specify `true`. The count is then displayed in parentheses.

-   **com.ibm.wps.cp.tagging.inline.customLabel  **

    Use this property to specify a non-localized custom label to describe the displayed tags. If you do not want any further labeling or if you want to keep the label short, you can specify an empty string. This property has no default value.

-   **com.ibm.wps.cp.tagging.inline.customMessageNoTags  **

    Use this property to specify a non-localized custom label that you want to be displayed if no tags are available. This case can occur when users did not assign tags to the piece of content yet. Non-localized means that the label does not change with the browser language. This property has no default value.

-   **com.ibm.wps.cp.tagging.inline.maxResults = \(5\)**

    Use this property to specify the number of tags that are shown per resource. The default value is `5`.

-   **com.ibm.wps.cp.tagging.inline.order = \(DESC\)  **

    Use this property to specify the order direction for displaying the tags. This property is related to the property `com.ibm.wps.cp.tagging.dialog.orderMetric` listed later. Specify one of the following values:

    -   **DESC**

        This value is the default value. It specifies descending order. For example, when the default `TAG_SPACE_COUNT_REVERSE_NAME` is specified for the `orderMetric` property, tags with the highest count and the lowest character in the alphabet are listed first.

    -   **ASC**

        This value specifies ascending order. For example, if the order metric property is specified as `orderMetric = TAG_SPACE_COUNT`, tags with the lowest count are listed first.

-   **com.ibm.wps.cp.tagging.inline.orderMetric = \(TAG\_SPACE\_COUNT\_REVERSE\_NAME\)  **

    Use this property to specify the order metric for the order by which the tags are displayed. To determine the actual order, use the property `com.ibm.wps.cp.tagging.dialog.order`. The default value is `TAG_SPACE_COUNT_REVERSE_NAME`. This default means that tags are shown first by the tag count, with resources with more tags shown before resources with fewer tags, then, if resources have the same number of tags, alphabetically. Specify one of the following values:

    -   TAG\_SPACE\_COUNT\_REVERSE\_NAME. This value is the default value.
    -   TAG\_SPACE\_NAME
    -   TAG\_SPACE\_COUNT
    -   TAG\_SPACE\_CREATION\_DATE
    -   TAG\_SPACE\_LAST\_MODIFIED\_DATE
    -   TAG\_SPACE\_COUNT\_NAME
    For more details, read the class `com.ibm.portal.cp.Constants.OrderMetric` in the portal Javadoc and to the *Inline tag widget parameter reference* in this documentation.

-   **com.ibm.wps.cp.tagging.inline.privateTaggingEnabled = \(false\)**

    Use this parameter to enable private tagging. To do so, specify the PERSONAL\_PRIVATE scope for the tags that you want to show in this inline widget. The default value is `false`.

-   **com.ibm.wps.cp.tagging.inline.showDialogLauncher = \(true\)  **

    Use this property to control whether a plus \( **+** \) sign for starting the corresponding dialog widget is shown. The default is `true`.

    !!!note
        This property applies only in case of Dojo based inline tagging widgets.

-   **com.ibm.wps.cp.tagging.inline.tagClickActionMode = \(TAG\_CENTER\)  **

    Use this property to determine what happens when a user clicks a tag. Specify one of the following values:

    -   **TAG\_CENTER**

        With this value, the widget redirects the user to the tag center. This value is the default value.

    -   **PUBLIC\_RENDER\_PARAMETER**

        With this value, the widget shows a public render parameter with the tag name.

**Related information**  
[The tag widget](../../../../../../build_sites/tagging_rating/tagging_rating_ui/tagging_rating_widget/tag_widget/index.md)<br>
[Tag widget parameter reference](../../../../../../build_sites/tagging_rating/cfg_reference/parm_ref_tag_rate_widget/tag_rate_parm_ref_inl_tag_lite.md)<br>
[The rating widget](../../../../../../build_sites/tagging_rating/tagging_rating_ui/tagging_rating_widget/rating_widget/index.md)

