# Using the portal Tag Cloud with lists of social objects

To get the most benefit from social rendering together with tagging, you can put the HCL Portal Tag Cloud portlet on pages that contain social lists. This way your site visitors can reduce the contents of social lists by selecting individual tags from the tag cloud. The list of social objects is then restricted to content items that are tagged with the tag or tags that the user selected.

To configure tag selection for social lists from the tag cloud, a page editor proceeds by the following steps:

1.  Set a theme profile that supports lists of social objects as well as the Tag Cloud portlet. For more information, see *Configuring a page with lists of social objects for Tag Cloud support* in the related links.

2.  Add the HCL Portal Tag Cloud portlet to the page that contains the list of social objects.

3.  Depending on your portal theme, you might need to select **Edit Mode** for the page. Some themes require this step before you can select the Edit Shared settings option for the Tag Cloud portlet in the next step.

4.  Select the **Edit Shared Settings** mode of the Tag Cloud portlet.

    If you cannot open the portlet menu, first select the **Edit Mode** for the page as described in the previous step.

5.  Configure the Tag Cloud portlet to listen to Transmitted Tags.

    Set the **Tag display modes** setting to **Transmitted tags only**. For more information about configuring the Tag Cloud, see *Configuring the portal Tag Cloud for social rendering*.

6.  Set the portlet **Action Mode** setting to **Expose public render parameter**.

7.  Click **OK** to save your changes.

8.  Enable the **Tag Selection Support** option for the list of social objects for which you want to make the Tag Cloud available to your users.

    For more information about how to set options for social lists, see *Customizing social list definitions by using inline editing*.


After you set this configuration, the Tag Cloud portlet communicates with those lists of social objects on the page for which the Tag Selection Support option is activated in their social list definition. The tag cloud is filled dynamically with all tags associated with any of the individual social objects that are contained in those lists. If a user selects one or more tags from the tag cloud, those social lists on the page that have the Tag Selection Support option activated in their social list definition are dynamically filtered to contain only those entries that are tagged with all of the tags that the user selected from the tag cloud. Lists of social objects that have the Tag Selection Support option disabled in their definition do not transmit their tags to the tag cloud. These lists are not affected when site users select tags in the tag cloud.

**Notes:**

-   By default, the Tag Selection Support option is disabled.
-   If a user selects tags in the tag cloud, that tag selection remains active until one of the following conditions occurs:
    -   The user deselects the tags again in the tag cloud.
    -   The render state of the page that the user views is cleared. For example, this occurs when the user logs out from the portal.
-   The page editor can add a general tag filter to the social list definition. To do this, the Page Editor specifies tag names in the **Filter by Tags** option of the social list definition. Such a tag filter is always active for all site visitors. Users cannot remove the tags that are specified in that filter by deselecting them in the tag cloud. Additional tags that a user selects by using the tag cloud are dynamically added to the list of tags that are applied to the list of social objects.
-   If a social list has many different tags associated with it, the tag cloud might show only a subset of the available tags. This restriction can depend on two configuration options:
    -   You can configure the limit for tags that an individual social list transmits from HCL Connections. You set this limit in the WP Connections Integration Service resource environment provider. For more information, see the topic about *Configuring the tags transmission limit*.
    -   You can configure the Tag Cloud portlet to show only a limited number of tags. This subset contains the most relevant tags, in other words tags that users assigned most often.
-   The tag selection support for social list does not rely on tag federation between HCL Portal and HCL Connections to be enabled.
-   The social lists do not support interactions with the **Tags** portlet that is provided as one of the HCL Connections portlets for HCL Portal.

-   **[Configuring the portal Tag Cloud for social rendering](../social/soc_rendr_cfg_tag_cloud.md)**  
If you include the HCL Portal Tag Cloud portlet on your social pages, you need to configure it to work with social lists.

**Parent topic:**[Working with lists of social objects](../social/soc_rendr_tsk_socl_list.md)

**Related information**  


[Configuring the portal Tag Cloud for social rendering](../social/soc_rendr_cfg_tag_cloud.md)

[Customizing social list definitions by using inline editing](../social/soc_rendr_cust_socl_list.md)

[Configuring the tag cloud](https://help.hcltechsw.com/digital-experience/8.5/panel_help/tag_cloud_cfg.html)

[Configuring a page with lists of social objects for Tag Cloud support](../social/config_page_social_objects_tag_cloud.md)

[Configuring the tags transmission limit](../social/soc_rendr_cfg_tag_limit.md)

