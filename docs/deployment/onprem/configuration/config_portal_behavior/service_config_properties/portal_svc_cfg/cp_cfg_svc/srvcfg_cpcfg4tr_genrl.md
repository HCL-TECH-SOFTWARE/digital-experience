# General properties for tagging and rating

View the general properties for tagging and rating.

**Note:** The parameters listed here are specific to the inline tag and rating widgets that were introduced with HCL Portal Version 8.5. The dialog and inline widgets of earlier portal versions were deprecated with HCL Portal Version 8.5. For information about the earlier widgets and their parameters, read the appropriate topics in the HCL Portal Version 8.0 product documentation.

-   **com.ibm.wps.cp.tagging.isTaggingEnabled = \(true\) com.ibm.wps.cp.rating.isRatingEnabled = \(true\)**

    Use these properties to enable or disable tagging or rating in the portal user interface. The default value is `true`.

-   **com.ibm.wps.cp.tagging.contextMenu.isTaggingEnabled = \(true\) com.ibm.wps.cp.rating.contextMenu.isRatingEnabled = \(true\)**

    Use these properties to enable or disable the page menu entries for tagging and rating. The default value is `true`.

-   **com.ibm.wps.cp.tagging.portletContextMenu.isTaggingEnabled = \(true\) com.ibm.wps.cp.rating.portletContextMenu.isRatingEnabled = \(true\)**

    Use these properties to enable or disable the portlet menu entries for tagging and rating. The default value is `true`.

-   **com.ibm.wps.cp.default.feed.expiration = \(600000\)**

    Use this property to configure the default feed expiration time. Specify a value in milliseconds. The default is 600000 milliseconds = 10 minutes.

-   **com.ibm.wps.cp.tagging.tagspace.TimeStampRange = \(500\)**

    Use this property to specify the range in which you want the time stamps of a tag space to be considered equal in milliseconds. Setting this property to a low value might affect performance.

-   **com.ibm.wps.cp.tagging.normalization.displayNormalizedNames = \(false\)**

    Use this property to define whether the normalized tag names are shown in the tag cloud. Accepted values are `false|true`. The default value is false. Example: If there are three tags named `cot?`, `cote`, and `c?te`, the values for this property have the following meaning:

    -   **false**

        If this property is set to the default `false`, all three tags show up separately in the tag cloud with a count of 1 each. Search suggestions for `c` are `cot?`, `cote`, and `c?te`; search suggestions for `co` are `cot?` and `cote`; search suggestion for `c?` is only `c?te`.

    -   **true**

        If you set this property to `true`, all three tags are normalized to the tag name `cote`. Only this tag name `cote` is shown in the tag cloud or suggested by the search service.

-   **com.ibm.wps.cp.tagging.normalization.typeAhead = \(nonnormalized\)**

    Use this property to determine which tag names the type-ahead feature **for tag creation** shows to the user. Accepted values are `nonnormalized|normalized`. The default value is nonnormalized. Example: If there are three tags: `cot?`, `cote`, and `c?te`, the values for this property have the following meaning:

    -   **nonnormalized**

        If this property is set to the default `nonnormalized`, the suggestions from the type-ahead feature are as follows:

        -   If a user types the characters c?, the type-ahead service suggests c?te.
        -   If a user types the characters co, the type-ahead service suggests cot? and cote.
    -   **normalized**

        If you set this property to `normalized`, the suggestions from the type-ahead feature are as follows:

        -   If a user types the characters c? or co, the type-ahead service shows all three tags as suggestions: c?te, cot?, and cote.
    **Note:** The type-ahead feature works only with the dialog tag widget of the default tagging user interface of portal versions earlier than V 8.5. With HCL Portal V 8.5, the tag and rating widgets of earlier portal versions are deprecated.

-   **com.ibm.wps.cp.filter.tagging.blacklist = \(false\)**

    Use this property to exclude unwanted tags, that is tags that might be seen as offending. If you enable this property, the blacklist filter checks every term that a user enters as a tag, before it is applied and stored. If the term that is used is listed on the blacklist, the portal does not allow this tag to be used and responds with an error message.

-   **com.ibm.wps.cp.filter.tagging.whitelist = \(false\)**

    Use this property to check every term that users want to use as a tag before it is applied and stored. If the term that the user types is not listed on the whitelist, the portal does not allow this tag to be used and responds with an error message. This way operators can specify a controlled vocabulary from which users need to chose when they want to tag resources.

-   **com.ibm.wps.cp.tagging.validation.regex = \[^\\<\\\>\\\(\\\)\\\[\\\]:\]\{1,50\}**

    Use this property to specify a regular expression that the portal uses to validate the tag names that users type. The default is `[^\<\>\(\)\[\]:]{1,50}"}`. As a result, users can type tag names that are from 1 to 50 characters long and do not contain any angled brackets, parentheses, brackets, or colons: `< > ( ) [ ] :`.

    **Limitation note:** Angled brackets \( `<` and `>` \) are not allowed within tag names. Therefore, no matter how you customize the regular expression, angled brackets are not accepted.

-   **com.ibm.wps.cp.rating.average.expected.averagerating = \(3.0\)**

    Use this property to specify the expected rating average per rated item. An item can be a single resource, or a search scope, such as all resources of type A or category B.

-   **com.ibm.wps.cp.rating.averagel.expected.numberofratings = \(10\)**

    Use this property to specify the expected number of ratings per item. This value influences the credibility of the rating instances. The higher this value is, the more the average value is influenced by the value of the property `com.ibm.wps.cp.rating.average.expected.averagerating`.

-   **com.ibm.wps.cp.rating.maxratingvalue = \(5\)**

    Use this property to specify the maximum value that a rating can have. The default is `5`.


**Parent topic:**[CP Configuration Service for tagging and rating](../admin-system/srvcfg_cpcfg4tr.md)

**Related information**  


[Properties for the rating widget](../admin-system/srvcfg_cpcfg4tr_dlgrate_altui.md)

[Rating widget parameter reference](../admin-system/tag_rate_parm_ref_inl_rate_lite.md)

