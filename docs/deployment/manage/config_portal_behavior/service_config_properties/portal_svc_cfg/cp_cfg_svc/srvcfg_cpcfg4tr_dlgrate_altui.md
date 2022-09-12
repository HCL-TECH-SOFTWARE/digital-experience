# Properties for the rating widget

View the properties for the rating widget.

!!!note
    The parameters listed here are specific to the inline rating widget that was introduced with HCL Portal Version 8.5. For information about the earlier widgets and their parameters, read the appropriate topics in the HCL Portal Version 8.0 product documentation.

-   **com.ibm.wps.cp.rating.inline.customLabel  **

    Use this property to specify a non-localized custom label to describe the displayed ratings. This property has no default.

-   **com.ibm.wps.cp.rating.inline.numStars = \(5\)  **

    Use this property to specify the number of stars or asterisks of which a rating consists. Specify a positive numeric value. The default value is `5`. Do not specify a value larger than the value specified for the property `com.ibm.wps.cp.rating.maxratingvalue` in the WP CP configuration service for tagging and rating. For more information about this property, read *General properties for tagging and rating*.

-   **com.ibm.wps.cp.rating.inline.privateRatingEnabled = \(false\)**

    Use this parameter to enable private rating. To enable private rating, set this parameter to `true`. The default value is `false`.

-   **com.ibm.wps.cp.rating.inline.ratingScope = \(COMMUNITY\_PERSONAL\_PUBLIC\)  **

    Use this property to specify the scope of ratings that you want to show in this inline widget. Specify one of the following values:

    ```
    COMMUNITY_PERSONAL_PUBLIC|PERSONAL_PUBLIC|PERSONAL_PRIVATE
    ```

    If you do not specify a value, the property defaults to `COMMUNITY_PERSONAL_PUBLIC`.

-   **com.ibm.wps.cp.rating.inline.ratingDesc**

    Use this property to specify the rating description that you want to show in this rating widget. By default, this property is not part of the rating widget. If you add this property to the rating widget, the default value is `ALL`. Specify one of the following values:

    -   **RATING\_VALUE**

        With this value, the rating description includes only the numerical rating value.

    -   **TOTAL\_NO\_RATING**

        With this value, the rating description includes only the total number of ratings assigned.

    -   **ALL**

        With this value, the rating description includes both the numerical rating value and the total number of ratings. This is the default value if you add the `com.ibm.wps.cp.rating.inline.ratingDesc` property to the rating widget.

    -   **NONE**

        If you do not specify a value, the rating description is not displayed at all.


**Related information**  
[General properties for tagging and rating](../../../../config_portal_behavior/service_config_properties/portal_svc_cfg/cp_cfg_svc/srvcfg_cpcfg4tr_genrl.md)<br>
[Tag widget parameter reference](../../../../../../build_sites/tagging_rating/cfg_reference/parm_ref_tag_rate_widget/tag_rate_parm_ref_inl_tag_lite.md)<br>
[The rating widget](../../../../../../build_sites/tagging_rating/tagging_rating_ui/tagging_rating_widget/rating_widget/index.md)