# Customizing social list definitions by using inline editing 

You can customize your list view definitions by defining the following settings in inline editing mode. List view definitions are represented by content items of the social list definition authoring template. This customization is normally done by a web designer or a page editor.

To define these settings, you need the access permissions for editing the web content item that represents the view definition. You do not need edit access permissions to the **Web Content Viewer** portlet that shows the view definition.

**Note:** The list view definitions that are provided with social rendering use the HCL Connections search service feed to retrieve the social objects displayed in the list. This has the following consequences:

-   Only information that is available in the HCL Connections search feed can be displayed in the social lists.
-   Updates to social objects in HCL Connections do not appear in the social lists provided with social rendering until the index of the HCL Connections search service was updated.

For more details about how to administer the HCL Connections search service, read the information about *Administering Search* in the HCL Connections product documentation.

The following settings and options are available for customizing social list view definitions by using inline editing:

-   **Name**

    Use this setting to specify a name for the list of social items. The name must consist of at least one alphanumeric character \(`a-z, A-Z,0-9`\). It can include spaces and the following special characters: `$ - _ . ! ( ) ,`

-   **Display Title**

    Use this setting to specify the display title for the list of social objects. If you use the default presentation template, a change to the display title also changes the heading shown for the list of social objects on the page. By alternative, you can specify **Localizations** instead of a display title. In this case, the portal ignores the default display title and uses the display title of the respective language instead. Social rendering provides a default text provider named Social Rendering. It includes a translated default display title for each language that the portal supports. To display the translated default titles, proceed as follows:

    1.  Click **Localizations**.
    2.  Select the Text Provider **Social Rendering**.
    3.  In the **Text Provider Key** field, type the key `SR_CONTENT_FILES`.
    4.  To save your updates, click **Save and Close**.
-   **Content Sources**

    Use this setting to select the content sources that you want to include in the list of social objects. You can select multiple content sources. Each content source corresponds to a HCL Connections service. Social rendering supports the following HCL Connections services: activities, blogs, bookmarks, communities, files, libraries, forums, profiles, wikis, and events.

    **Note:** Outside social rendering, some of the HCL Connections services serve multiple social objects. For example, the **Forums** service serves objects of type **Forum topic** and **Reply**. Social lists serve only the object types that are listed in the following table.

    |Content source|HCL Connections service|Content type that the content source serves in social lists|
    |--------------|-----------------------|-----------------------------------------------------------|
    |Activities|Activities|Activity|
    |Blogs|Blogs|Blog post|
    |Bookmarks|Bookmarks|Bookmark|
    |Communities|Communities|Community|
    |Events|Events|Event|
    |Files|Files, Libraries|File|
    |Forums|Forums|Forum topic|
    |Profiles|Profiles|Profile|
    |Wikis|Wikis|Wiki page|

-   **Filter by Community**

    You can limit the contents of a social list to a community by filtering. The following options are available:

    -   **Limit to community that is associated with this page**

        If you select this option, the list contains only social objects from the community that is associated with the current page.

    -   **Limit to selected community**

        You can use this option to select a community. If you select a community, the list contains only social objects from the selected community.

    -   **Do not limit to a community**

        If you select this option, the list is not limited to social objects that belong to communities. Social objects are listed, independent of whether they belong to a community or not.

    For more information, read the HCL Portal product documentation under the topic about *Managing community associations*.

    **Note:** User profiles are not considered to be content of a community. Therefore, if you activate community filtering, the resulting lists do not contain any user profile entries.

-   **Filter by Type of Access**

    Select this option to display only public objects in this list. If you do not select this option, the list can also include social objects that are owned by or shared with the current user who views the list.

-   **Filter by Search Term**

    Use this setting to specify the text for which you want the portal to search when it retrieves the social objects for the list from HCL Connections. This field corresponds to the `query` parameter of the HCL Connections Search API. For more information about the supported values and operators, read the Search service documentation for the HCL Connections server.

-   **Filter by Tags**

    Use this setting to specify a comma-separated list of tags to adjust the list of social objects. If you specify a tag filter here, the list displays only social objects that are tagged with these specific terms. If the same tags are deselected from a tag cloud portlet, this filter still applies as it is specified by the author, not by the end user. For more information, read *Using the portal Tag Cloud with lists of social objects*.

-   **Tag Selection Support**

    Select this option to make this social list reflect tag selection information that is generated by the portal Tag Cloud portlet. If a user selects a tag in the portal Tag Cloud, the portal adds this tag dynamically to the existing tag filter of the current social list.

-   **Dynamic Filtering**

    Use this setting to select the dynamic contexts for filtering the list. The following options are available:

    -   **Enable dynamic search term filtering**

        If you select this option, the list shows the social objects for a search query based on the public render parameter `filters` with the value `sr:searchterm:searchterm`, where `searchterm` is the search term that the user specified. If a dynamic search term is available, it overrides the `Filter by Search Term` setting. For more information about the public rendering parameter `filters`, read *Dynamic list-rendering contexts*.

    -   **Enable dynamic author filtering**

        If you select this option, the list is filtered based on the selected HCL Connections user profile. The list shows the social objects of which the author is the user represented by the selected user profile. Selecting a user profile means that the user clicks a user profile link from a list that is resolved by the connections POC resolver in the portal. For more information about the social object resolution, read *Specifying in the design component how social object links are resolved*.

-   **Sorting Criteria**

    Use this setting to specify the sorting criteria that are used for the list of social objects. You can choose between the **Last updated** and **Relevance** options.

-   **Sorting Order**

    Use this setting to specify the sorting order that is used for the list of social objects. You can choose between **Ascending** and **Descending** order.

-   **List Appearance**

    Use this setting to select a component that formats the list of social objects. You can select only HCL Web Content Manager Personalization components that have the keyword `ibm.portal.socialrendering` assigned in their profile section. To enable the profile section for HCL Web Content Manager components, you must set the `control.Cmpnt=com.aptrix.pluto.taxonomy.ProfileControl` property in the WCMConfigService.properties file and restart your portal. For more information about this type of Web Content Manager Personalization components, see *Customizing the visual design of social lists*.

    By default, you can choose between two appearance types:

    -   **Simple**

        The Simple appearance is useful for a mobile view, as it contains fewer data.

    -   **Comprehensive**

        The Comprehensive appearance provides more information of the following types:

        -   The person who made the last update to the social object
        -   The date of the last update to the social object
        -   Tags that are assigned to the social object
        -   The summary of the social object.
    Both of these default appearances are responsive to the theme columns, screen width, and screen orientation. Social rendering uses default CSS styles to provide this responsiveness. For example, they can be useful if users use different types of devices to view the lists or change between portrait and landscape views on a mobile device.

-   **Maximum Results \(hidden\)**

    This field is an optional input field. This setting is hidden by default. To make it show, click **Show hidden fields** at the beginning or end of the screen. Use this setting to specify the maximum number of content items included in this list. This figure determines the maximum number of social objects that HCL Connections returns. Specify a positive integer. It is good practice to match this number with the number of results that the Personalization component can display that you specify at the List Appearance element. To determine that number, multiply the **Results per page** by the **Maximum pages to include** of the Personalization component.

    You can also configure this setting globally for all social list portlets in the WP Connections Integration Service in the WebSphere® Integrated Solutions Console. For more information, see *Configuring the maximum number of items loaded from HCL Connections*. If you leave the **Maximum Results** field empty for a social list, then the value that is set in the WP Connections Integration Service applies as the default.

-   **Custom Properties \(Hidden\)**

    This field is an optional input field. It is hidden by default. To make it show, click **Show hidden fields** at the beginning or end of the screen. Add one or more custom properties in this input field. You can use such more custom properties to add more flexibility to the layout of your list as required. For example, you can change the layout of your social list by defining a specific condition that uses the custom property added in this field. The following code sample shows how you change the color of the social list heading by specifying the string `blue` at the `Custom Properties` element:

    ```
    [Plugin:Equals text1="blue" text2="[Element context='current' type='content' key='custom']"]
       <h2 style="color:blue;">[Property context="current" type="content" field="title"]</h2>
    [/Plugin:Equals]
    [Plugin:NotEquals text1="blue" text2="[Element context='current' type='content' key='custom']"]
       <h2 style="color:black;">[Property context="current" type="content" field="title"]</h2>
    [/Plugin:NotEquals]
    ```

-   **Custom Link Resolution Root Page \(Hidden\)**

    You can use this field to control the social object resolution behavior for links that users click in this list. For more detailed information, read *Social Object Resolution*.


**Parent topic:**[Customizing view definitions for portal site visitors ](../social/soc_rendr_shape_socl_list.md)

**Related information**  


[Using the view definitions provided with social rendering on your portal pages ](../social/soc_rendr_use_oob_socl_list.md)

[Using the portal Tag Cloud with lists of social objects ](../social/soc_rendr_tag_cloud_w_socl_list.md)

[Configuring the maximum number of items loaded from HCL Connections ](../social/soc_rendr_cfg_connct_item_limit.md)

[Customizing the visual design of your view definitions ](../social/soc_rendr_cust_socl_list_visual_design.md)

[Dynamic list-rendering contexts ](../panel_help/plrf_list_rndr_dynamic_cntxts.md)

[Social object resolution ](../social/soc_rendr_soc_obj_resltn.md)

[Managing community associations ](../admin-system/commpages_create_mapping.md)

[Administering Portal Search ](../admin-system/srtadmsrch.md)

