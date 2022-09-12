---
id: tag_result
title: Tag results list
---




The Tag Results portlet shows a list of resources that have been tagged with the tags that you selected from the cloud.

For example, if you select the tag **HCL** from the tag cloud, the tag result list shows resources that have been tagged with the tag HCL.

The tag result list displays an icon for each resource that represents the resource type, such as page or portlet, the name, the community tags attached to the resource, and the average community rating. You can choose between the summary and detail views by clicking the appropriate buttons. The summary view is the default. The detail view adds your personal tags, both public and private, and optional descriptions for all listed tags. To switch between the summary and detail view, click the appropriate **Display** icon. You can sort the results by resource type, date, resource title, and rating.

It is possible that different resource types will use the same icon or that no icon is defined for a resource type. Refer to the topic about Federating tags to see how an icon can be configured for a resource type of federated resources.

**Note:** Resources shown in the tag result list might not always show the tags that you selected from the tag cloud to start the search. This depends on how the resource has been tagged by other users. If other tags have been applied to the resource more often than the tag by which you searched, then those tags will take precedence among the tags shown for that resource. By default the tag result list shows the three most popular tags. You can configure this number for the portlet by using the Personalize option from the portlet menu. For details refer to the section about Configuring the tag result list.

When you are on the Tag Center page, you can select additional tags from the cloud to narrow down your result list. To clear a tag, either click it in the cloud or clear it from the tag result list by clicking the **X** for that tag.

When you have several tags selected, you can choose between combining the tags by the logical operators **and** or **or**. The default setting is the **or** operator. To toggle between **and** and **or**, click the operator. You can only combine all tags by the same operator; you cannot connect multiple tags by different operators. This feature needs to be enabled by your administrator.

For all views except the private view the tag result list also shows the community rating for resources by a line of asterisks. The number of highlighted asterisks shows the average rating, for example 3 of 5 possible asterisks.

## Configuring the tag result list

By default the tag result list shows ten results per page and the three most popular tags for each listed resource; you can configure both these figures for the portlet by using the **Personalize** or **Edit Settings** configuration option from the portlet menu:

-   **Results per page**: Select a value from the pull-down menu.
-   **Tags per resource**: Set the number of tags that are shown for each resource to a value from 1 to 100.

Administrators can enable or disable the option for users to toggle between the logical operators for combining tags. This setting can only be configured by using the **Edit Settings** configuration option from the portlet menu. It requires the appropriate role and access rights. If an administrator disables this choice for users, the operators are applied as follows:

-   If a user selects several tags from the tag cloud, the tags are connected by **and**. This can help narrow down the number of search results if a user selects multiple tags.
-   If a user gets to the Tag Center by selecting the **Browse tags** option from the menu of a portlet or page, the tags are connected by **or**.

