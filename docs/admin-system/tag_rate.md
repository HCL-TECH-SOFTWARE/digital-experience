# Tagging and rating portal content

Users can tag or rate portal content and view the tags and ratings. Tagging and rating allow users to better organize, categorize, and find portal content. This task includes Web Content Manager, HCL Connections, and custom content. For example, users can tag or rate books in an online bookstore.

Portal users can tag or rate portal content. This task includes the following types of resources:

-   Portal resources, such as pages and portlets
-   Web Content Manager resources, such as articles or images
-   Custom resources. For example, these resources can be items in an online store or pictures in a portlet. Administrators can add these custom resources to the portal so that users can tag or rate them.

In general, all content in a portal that can be uniquely identified can be tagged or rated.

Users can apply tags and ratings both publicly and privately for the following purposes:

-   Public tagging and rating helps users categorize, evaluate, and find portal content that is based on tags and ratings by other users.
-   Private tagging and rating can help users create their own personal way to categorize, evaluate, and find portal content.

In detail, portal users can do the following tasks:

-   Work with tags:
    -   Tag portal content. Users can add tags to portal content. For example, the user can apply the tag dx to a page that provides information about HCL Digital Experience products. Users can remove tags that they applied themselves.
    -   View tags and related portal content: Users can view the tags that are applied to individual portal resources, for example by starting the default tag and rating widgets. Users can also work with aggregated sets of selected tags:
        -   Users can view tags that are applied to a set of resources by using a **tag cloud**. The tag cloud lists the tags in alphabetical order. Different font sizes indicate how often the tags are applied. Depending on how the administrator configures the tag cloud, the list can be portal wide or limited to particular items. For example, portal pages, or books available on the page where the user clicked the tag.
        -   The tag cloud supports different views: users can switch between these views. For example, they can view all tags, only tags that they themselves applied, their own private tags, or the tags that were added most recently.
        -   Users can switch between different display modes. For example, they can have the tags to be displayed in a cloud as described earlier, or in a simple list.
        -   Users can use the tags that are displayed in the tag cloud to search for content. When a user clicks a tag, the portal shows a list of resources that have that tag that is applied. Clicking such a resource redirects the user to that resource itself. Users can also click multiple tags; in this case the list shows only resources that have **all** selected tags applied.
        -   When users work with the list of resources, they can have the list that is sorted by different criteria, for example, title, date, rating. The result list portlet also supports two different view modes: a summary and a detail view.
-   Work with ratings:
    -   Rate portal content:
        -   Users can apply ratings to individual resources to show how much they "like" them. For example, a user can give a good book a rating of 4.
        -   Users can change or remove ratings that they applied themselves. For example, a user can update the previous rating 4 to a 5.
    -   View the ratings that they or other users apply to portal content.

Administrators can do the following tasks:

-   All tasks that portal users can do as previously listed.
-   Add content that users can tag or rate, for example, books in a bookstore.
-   Assign users the access rights for tagging or rating content.
-   Configure the tag clouds. By default, a tag cloud shows all tags that are applied to portal-wide resources. Administrators can add tag clouds to portal pages or themes and configure them as required. For example, they can limit a tag cloud to display only tags that is assigned to resources of a certain category, such as portlets. When users click a tag from that tag cloud, the result list shows only resources, in this case portlets.
-   Move tags to a different portal system, for example, for staging or during migration.
-   Obtain basic statistics about tagging and rating. For example, you can obtain the tags and tag counts for a specific portal page, or all tags that a specific user applied. You can write queries for more detailed statistics, or create a user interface to visualize them.

Developers can do the following tasks:

-   Extend the tagging and rating capabilities of the portal by writing a custom user interface that uses the Java Model API or the REST API.
-   Write queries to obtain statistics about tagging and rating, and write a user interface to visualize these statistics.
-   Enable or disable filters, for example to prevent users from using unwanted words as tags. By default the portal provides a blacklist and a whitelist filter.

**Note:** Depending on your portal and your user groups, administrators or developers might consider creating user documentation for tagging and rating for their portal users.

**Parent topic:**[Social business](../overview/social_business.md)

