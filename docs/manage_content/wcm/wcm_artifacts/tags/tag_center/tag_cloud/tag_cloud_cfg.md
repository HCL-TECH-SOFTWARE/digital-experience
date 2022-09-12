---
id: tag_cloud_cfg
title: Configuring the tag cloud
---




Administrators can configure the Tag Cloud portlet. You can configure each individual tag cloud portlet instance separately. To do this, use the **Edit Shared Settings** option from the portlet menu.

Configure the following options:

-   **Tag display modes**

    You can choose between two tag display modes. Depending on the option that you select, the tag cloud displays either persisted tags or transmitted tags only. There is no option to display both types of tags at the same time. For tagging to work with social lists, you need to set this option to Transmitted tags only.

    -   **Persisted tags only**

        Persisted tags are served by the portal server and can include federated tags, depending on your tagging federation settings. This setting is the default setting.

    -   **Transmitted tags only**

        Transmitted tags are transmitted by portlets on the same page. As tag transmission within the browser works without server interaction. The transmitted tags are displayed without further filtering. For your users to be able to tag items in social lists, you need to set the tag display mode to this option. In transmitted tags mode, the Tag Cloud always shows the All view. Other views are not available in this mode. Users cannot switch views in this mode.

-   **Action modes**

    You can choose between two action modes. Depending on the option that you select, clicking a tag by a user can have to two different results:

    -   **Redirect to tag center**

        If you have this action mode selected and a user clicks a tag, the portal displays the **Tag Center**. It shows a list of resources that have been tagged with the tag that the user selected.

    -   **Expose public render parameter**

        If you have this action mode selected and a user clicks one or more tags, the tag cloud exposes the following shared render parameter that contains the set of selected tags to which other portlets can react:

        `http://www.ibm.com/xmlns/prod/websphere/portal/v8.0/portal-contextual-portal}st`

-   **Scoping modes**

    Select the scoping mode for the tag clouds shown to users. You can set scoping either by categories, or by type schemes, or no scoping.

    -   **No scoping**

        If you select this scoping mode, the tag cloud will not be scoped.

    -   **Scope by categories**

        This scoping mode scopes the tag cloud by categories that you define. Example categories are books or movies.

    -   **Scope by type schemas**

        This scoping mode scopes the tag cloud by type schemas that you define. For example, for pages and portlets this is usually a URI that begins with the string `http://` .

    Use the following entry fields to type categories and type schemas that you want to use as scopes:

    -   **Categories to be used as scopes**

        Type the categories that you want to make available as scopes. Specify a comma separated list.

        **Note:** These scoping selections are not relevant for the HCL Connections view. In the HCL Connections view you scope explicitly by selecting the corresponding check boxes in the **HCL Connections tags** area.

    -   **Type schemas to be used as scopes**

        Type the type schemas that you want to make available as scopes. Specify a comma separated list.

    Select from the following pull-down menus to determine which scopes you want to show to users for selection and which scopes you want to preselect for automatic scoping:

    -   **Scopes displayed for selection by the user**

        Use this selection menu to determine which scopes you want to make available to users for scoping their tag cloud:

        -   **Preconfigured scopes**

            Select this option to allow scopes that you configured by categories or type schemas.

        -   **Transmitted scopes**

            Select this option to allow scopes that portlets transmit as additional scopes.

        -   **Preconfigured and transmitted scopes for the selected tags**

            Select this option to allow both preconfigured and transmitted scopes.

        -   **None**

            When you select this option, no scopes will be shown for selection to users.

    -   **Preselected scopes**

        Use this selection menu to define which scopes will be preselected for automatic scoping of the tag cloud:

        -   **Preconfigured scopes**

            Select this option to preselect scopes that you configured by categories or type schemas.

        -   **Transmitted scopes**

            Select this option to preselect scopes that portlets transmit as additional scopes.

        -   **Preconfigured and transmitted scopes**

            Select this option to preselect both preconfigured and transmitted scopes.

        -   **None**

            When you select this option, no scopes will be preselected for tag clouds.

    **Note:** For more details about scopes, how they work, and how you can use them refer to the portal documentation about tagging and rating.

-   **Display Settings**

    Select from the following options as required:

    -   **Default view mode**

        Choose between **Cloud** and **List** view modes by clicking the appropriate radio button:

    -   **Display related tags only**

        If you check this option, the Tag Cloud portlet shows only tags that have been applied to the listed resources, not the tags that are generally most popular. In other words, this option suppresses tags that have not been applied to the listed resources. Checking this option can make it easier for users to find content related to the selected tags.

    -   **Display selected tags**

        If you select this option, the Tag Cloud portlet shows the selected tags with a cross icon \( **x** \). Users can then deselect a tag by clicking the cross icon for the tag.

    -   **Minimum number of tags to display**

        Select the minimum number of tags that the tag cloud shows to users. This number also defines the minimum position of the slider or other user interface control for scrolling the listed tags.

    -   **Maximum number of tags to display**

        Select the maximum number of tags that the tag cloud can show to users. This number of tags is shown to users when they place the slider at the maximum position.

    -   **Number of tags initially to be displayed**

        Type a number to define the default position of the slider or other user interface control for scrolling the listed tags. This number also determines how many tags are shown by default.

-   **HCL Connections tags**

    If a HCL Connections server is integrated into the HCL Portal, check boxes for HCL Connections features such as Activities, Blogs, Bookmarks, Communities, Files, Forums, Profiles, and Wikis are displayed. Each HCL Connections feature can be selected individually. Clicking the **All** check box selects or clears all of the HCL Connections features. When you select aHCL Connections feature, the corresponding HCL Connections tags are integrated in the **Others’ tags** view of the tag cloud.

    **Note:** One or more Lotus Connections check boxes can be hidden by setting a comma separated list of check box identifiers in the custom property `com.ibm.wps.cp.tagging.federation.ui.disabled.ids` that is located in the WP CPConfigurationService Resource Environment Provider.

    For details about how to set properties in the Portal Configuration Service, see the topic about Setting service configuration properties. The identifiers of the Connections check boxes are: All, Activities, Blogs, Bookmarks, Communities, Files, Forums, Profiles, and Wikis. For example, if you do not want the Blogs and Profiles check boxes to be shown, use the value `Blogs,Profiles` for the properties. You can integrate HCL Connections tags in the All view by selecting the check box **Display HCL Connections tags in the All view**.

-   **Visible views**

    Check all views that you want to make available to users to select from:

    -   **All tags**

        Select this view so that users can choose to view all tags available in the portal.

    -   **HCL Connections tags**

        Select this view so that users can choose to view HCL Connections tags.

    -   **Others’ tags**

        Select this view so that users can choose to view the tags that other users applied.

    -   **My public tags**

        Select this view so that users can choose to view only those portal tags that they have assigned themselves.

    -   **Latest tags**

        Select this view so that users can choose to view only the most recently created public portal tags.

    -   **My private tags**

        Select this view so that users can choose to view only those portal tags that they have assigned as private tags.

    -   **Analytics tab**

        If you select this option, portal site visitors can see the analytics tab. For more information about analytics, read the section about *Analyzing user behavior by Active Site Analytics* in the HCL Portal documentation.

        **Note:** To see the analytics tab in the Tag Cloud portlet, the user needs to have at least the USER@ANALYTICS\_TAGS role.


Click **Submit** to save your changes. To return to the tag cloud portlet without saving your changes, click **Cancel**.

