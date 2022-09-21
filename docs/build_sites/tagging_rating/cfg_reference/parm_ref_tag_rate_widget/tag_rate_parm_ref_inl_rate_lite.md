# Rating widget parameter reference

You configure rating widget instances by setting the JavaScript parameters listed here.

!!! note
    The parameters listed here are specific to the inline rating widget that was introduced with HCL Portal Version 8.5. For information about the earlier widgets and their parameters, read the appropriate topics in the HCL Portal Version 8.0 product documentation.

To set the parameters, proceed as follows:

1.  In HCL Web Content Manager, go to **Web Content** \> **Authoring** \> **Libraries** \> **Web Resources v70** \> **Components**.
2.  Select the check box for **HTML - Rating Widget Light - Stars**.
3.  Click **Edit**.

## Mandatory parameters

The following parameters are mandatory for the rating widget.

-   **id = unique\_ID**

    Use this attribute to specify a unique ID for parsing all surrounding `<div>` tags to enable your widgets

-   **resourceID**

    Use this parameter to specify the identifier of the piece of content that will show the widget. This needs to be unique. For example, for a portal page specify the portal object ID of that page.


## Optional parameters

The following parameters are optional for the rating widget. They correspond to similar parameters in the WP CP Configuration Service.

-   **customLabel  **

    Use this parameter to specify a non-localized custom label to describe the displayed ratings.

-   **customLabelCommunityRatings**

    Use this parameter to specify the non-localized label that you want to be used to describe the meaning of the community rating that is displayed.

-   **customLabelPersonalPublicRatings**

    Use this parameter to specify the non-localized label that you want to be used to describe the meaning of the personal public rating that is displayed.

-   **customLabelPersonalPrivateRatings**

    Use this parameter to specify the non-localized label that you want to be used to describe the meaning of the personal private rating that is displayed.

-   **deletingEnabled = \(true\)**

    Use this parameter to control whether the Delete Rating option is enabled in the inline widget. The default value is `true`.

-   **nonCSSuiEnabled**

    Set this parameter to the value `true` for to enable rendering on a user interface that is accessible for iOS devices used with a bluetooth keyboard. The default value is `false`.

-   **numStars = 5**

    Use this parameter to specify the number of stars or asterisks of which a rating consists. Specify a positive numeric value. The default value is `5`. Do not specify a value larger than the value specified for the property `com.ibm.wps.cp.rating.maxratingvalue` in the WP CP configuration service for tagging and rating. For more information about this property, read *General properties for tagging and rating*.

-   **privateRatingEnabled = \(false\)**

    The default value of this parameter is `false`. By this default, users cannot add private ratings. For users to be able to add private ratings, set this parameter to `true`.

-   **ratingDescription=NONE**

    Use this parameter to specify the type of description for community average ratings in the rating widget. Specify one of the following values:

    -   **RATING\_VALUE**

        With this value, the rating description includes only the numerical rating value.

    -   **TOTAL\_NO\_RATING**

        With this value, the rating description includes only the total number of ratings.

    -   **ALL**

        With this value, the rating description includes the numerical rating value and the total number of ratings.

    -   **NONE**

        With this value, the rating description is not shown. This is the default value.

    If you do not specify a value, the parameter defaults to `NONE`.

-   **ratingScope = \(COMMUNITY\_PERSONAL\_PUBLIC\)**

    Use this parameter to specify the scope of ratings that you want to show in this widget. Specify one of the following values:

    ```
    PERSONAL_PUBLIC|PERSONAL_PRIVATE|COMMUNITY_PERSONAL_PUBLIC
    ```

    If you do not specify a value, the parameter defaults to `COMMUNITY_PERSONAL_PUBLIC`.

-   **resourceCategories = \["resrc\_category\_1", "resrc\_category\_2", . . . "resrc\_category\_n"\]**

    Use this parameter to specify an array of categories assigned to the resource for which the widget was called. Represent each category by a string, for example `Books` or a Web Content Manager category. A typical value is `["books", "action"]`.

-   **resourcePrivate = true\|false**

    You can set this parameter to avoid access control issues with private resources. Users can add private ratings only to private resources. The default value is `false`.

-   **resourceType = NAVIGATION\_NODE \| CONTENT\_NODE**

    Use this parameter to specify the type of the resource for which the rating widget is called. This parameter is mandatory only for portal resources such as pages or portlets. Valid values are `NAVIGATION_NODE` or `CONTENT_NODE`.



???+ info "Related information"
    - [General properties for tagging and rating](../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cp_cfg_svc/srvcfg_cpcfg4tr_genrl.md)
    - [Properties for the rating widget](../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cp_cfg_svc/srvcfg_cpcfg4tr_dlgrate_altui.md)
    - [The tag and rating widgets](../../tagging_rating_ui/tagging_rating_widget/index.md)

