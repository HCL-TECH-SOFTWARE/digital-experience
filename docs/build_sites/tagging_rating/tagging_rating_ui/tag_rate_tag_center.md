# The portal Tag Center

The Tag Center is a separate portal page. It combines the tag cloud and the tags result list.

Users can get to this page by one of the following ways:

-   By clicking the **Tag Center** link under **Administration** > **Search**.
-   By selecting the option **Browse tags** from the page action menu or the portlet menu.
-   By clicking a tag from a custom tag cloud that you placed on a page of your portal.
-   By clicking a tag from a tag widget in a portal or custom resource, for example a portal page, a portlet, a wiki, or a blog.

By default the Tag Center page shows the following two portlets:

1.  The **Tag Cloud** portlet. Refer to the topic about the tag cloud. Users can select different views in the Tag Cloud:
    -   **All tags** view
    -   **HCL Connections tags** view. The federation view can show Activities, Blogs, Bookmarks, Communities, Files, Forums, Profiles, or Wikis.
    -   **Others tags** view
    -   **My public tags** view
    -   **Latest tags** view
    -   **My private tags** view

2.  The **Tag Results** portlet. It shows resources that have been tagged with the tags that the users selected from the tag cloud. For example, if a user selects the tag **HCL** from the tag cloud, the Tag Result List portlet shows resources that have been tagged with the tag HCL. The Tag Result List portlet displays for each resource its name, its optional description, the tags that have been assigned to it, and the average community rating. In the Tag Results portlet users can click icons to choose between a **Summary** view and a **Details** view. The Summary view is the default.

    Users can click the shown tags and resources:

    -   If the user clicks a tag listed under a resource in the result list, both the tag cloud and the tag results list change to show the information for the newly selected tag just as if the user had selected the tag from the tag cloud:

        -   The tag cloud highlights the tag that the user selected from the tag result list and changes to the view from which the user selected the tag in tag the result list.
        -   The tag result list shows all resources that have been tagged with the newly selected tag.
        Example: Initially the user selects the tag TAG\_1 from the **All tags** view of the tag cloud. The tag result list shows all resources that have TAG\_1 applied. Then the user selects TAG\_2 from the Your private tags under one of the resources in the tag result list. As a result, the tag cloud highlights TAG\_2 and changes to the **My private tags** view, and the tag result list shows all resources that have been tagged with TAG\_2.

    -   If the users clicks a resource, the portal redirects the user to that resource.

The combination of view options selected in both the tag cloud and in the tag result list determine what the tag result list shows. Refer to the following table:

|Tag cloud portlet view selected|Tag result portlet|Tag result portlet|
|-------------------------------|------------------|------------------|
| |**Summary** view shows these tags:|**Details** view adds these tags to the view:|
|**All tags** view|Community tags personal public tags optional HCL Connections tags|personal private tags|
|HCL Connections tags view|HCL Connections tags \(federated tags\)|description of the resource|
|**Others&rsquo; tags** view|community tags|personal public tags|
|**My public tags** view|personal public tags|description of the resource|
|**Latest tags** view|community tags personal public tags|personal private tags|
|**My private tags** view|personal private tags|description of the resource|

Examples:

-   User A views tags in the tag cloud by using the Community view. When user A clicks **TAG\_3**, the Tag Results portlet lists the summary view of all resources that have been tagged with TAG\_3. Each resource is listed with all community tags that users applied to it. When user A changes to the details view by clicking **Details view** icon, all personal public tags that user A has applied to the resource are displayed additionally.
-   User B views tags in the tag cloud by using the Personal View. When user B clicks **TAG\_4**, the Tag Results portlet lists the summary view of all resources that have been tagged with TAG\_4. Each resource is listed with all personal public tags that user B has assigned to this resource. When user B changes to the detail view by clicking **Details view** icon, descriptions of the resources are displayed additionally.

Users can sort the results by resource type, date, resource title, and rating.

!!! note
    Resources given in the Tag Result List portlet might not always show the tag that the user selected from the tag cloud to start the search. This depends on how the resource has been otherwise tagged by users. If other tags have been applied to the resource more often than the tag by which the user searched, then those tags will take precedence among the tags shown for that resource. By default the Tag Result List portlet shows the three most popular tags; you can configure this number for the portlet.

When users are on the Tag Center page, they can select additional tags from the cloud to narrow down their result list. Users can clear tags, either by clicking them in the cloud or by clearing them from the Tag Result List portlet.


