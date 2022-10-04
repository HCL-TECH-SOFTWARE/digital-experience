# Configuring the portal Tag Cloud for social rendering

If you include the HCL Portal Tag Cloud portlet on your social pages, you need to configure it to work with social lists.

You can configure each individual Tag Cloud portlet instance separately. Use the Edit Shared Settings option from the portlet menu and configure the **Tag display modes** option. You can choose between two tag display modes. Depending on the option that you select, the tag cloud displays either persisted tags or transmitted tags only. There is no option to display both types of tags at the same time. For tagging to work with social lists, you need to set this option to Transmitted tags only.

-   **Persisted tags only**

    Persisted tags are served by the portal server and can include federated tags, depending on your tagging federation settings. This setting is the default setting.

-   **Transmitted tags only**

    Transmitted tags are transmitted by portlets on the same page. As tag transmission within the browser works without server interaction. The transmitted tags are displayed without further filtering. For your users to be able to tag items in social lists, you need to set the tag display mode to this option. In transmitted tags mode, the Tag Cloud always shows the All view. Other views are not available in this mode. Users cannot switch views in this mode.


These options are added to the ones that are described in *Configuring the Tag Cloud*.


???+ info "Related information:"
    - [Using the portal Tag Cloud with lists of social objects](../using_portal_tagcloud_with_social_objects/index.md)
    - [Configuring the tag cloud](../../../../manage_content/wcm/wcm_artifacts/tags/tag_center/tag_cloud/tag_cloud_cfg.md)

