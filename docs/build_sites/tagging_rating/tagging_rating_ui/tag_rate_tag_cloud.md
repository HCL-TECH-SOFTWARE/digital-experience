# The portal tag cloud

The portal provides a tag cloud for aggregating tags for multiple resources. Users can select tags from the tag cloud.

The tag cloud is available as a portlet and as a Dojo widget. You can add the tag cloud portlet to any page as required. You can also integrate the tag cloud widget into a theme or embed it into a portlet.

The tag cloud shows the tags in alphabetical order. The font size indicates how often the tag has been applied within a defined scope. The larger the font of a tag is, the more often it as been applied. Users can select from the following options:

-   Users can view in a cloud view or in a list view:
    -   In the cloud view users can determine whether they wan to view more or fewer tags by moving a slider.
    -   The list view has a pagination bar.

-   Users can select different tag cloud views to filter what is displayed in the tag cloud:

    -   The **All tags** view shows all tags that have been applied by users in the portal. This includes all community tags and all personal public and personal private tags of the user who is viewing the tags. You can also configure the **All tags** view to include tags from remote systems.
    -   The **HCL Connections tags** view shows all public tags from remote systems for the currently selected federation features. These tags can be embedded in the **All tags** view.
    -   The **Others** view shows all public portal tags applied by other users, except for the user's own personal public tags.
    -   The **My public tags** view shows only the public portal tags that the user who invoked the cloud has assigned.
    -   The **Latest tags** view shows only the portal tags that have been created most recently.
    -   The **My private tags** view shows only the private portal tags that the user who invoked the cloud has assigned.

    Administrators can configure the following additional settings:

    -   Whether they want only related tags to be displayed when a users clicks a tag. For example, if a user clicks a tag TAG\_1 Related means that the tag cloud then shows only the tag TAG\_1 clicked by the user and all tags that have been applied to resources to which TAG\_1 has also been applied. Tags that have been applied to resources without being in combination with TAG\_1 are not shown.
    -   The minimum number of tags that they want to be displayed when the user moves the slider all the way to the minimum position
    -   The maximum number of tags that they want to be displayed, that is when the slider is moved all the way to the maximum position.
    -   The default number of tags that they want to be initially displayed and the corresponding position of the slider.

-   Users can select between different scoping modes:
    -   Users can change the scope for which they want to view tags, for example books or movies. Users or administrators can configure the available scopes, depending on their access rights. For details about this refer to the topic about Configuring the tag cloud.
    -   Administrators can configure the available scopes by using the option **Edit shared settings** from the tag cloud menu. When a users selects a scope, only tags that have been assigned to resources in that scope are displayed. For more information and a scoping example see the topic about *Grouping tags and ratings via resource categorization*.
    -   You can also scope the tag cloud in a way that it only shows tags that have been assigned to resources of a certain category or type schema. For details see *Configuring the tag cloud*.

For more details refer to the help topic about the *Tag cloud*.

The tag cloud portlet has several configuration options. You can configure each individual tag cloud portlet instance separately by using its **Edit shared settings** menu. For details see the topic about *Configuring the tag cloud*.


???+ info "Related information:"
    - [Grouping tags and ratings via resource categorization](../howto_tagging_rating/tag_rate_adm_grp_rescat.md)

