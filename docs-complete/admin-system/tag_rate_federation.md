# Federating tags 

HCL Portal allows the federation of remote tagging systems, such as HCL Connections.

Tags from remote tagging systems can be integrated in the HCL Portal Tag Cloud. When a tag from a remote system is selected in the Tag Cloud, the Tag Results portlet lists all federated resources to which users have applied the tag. The title of the remote resource, and the description if available, are displayed. The title is preceded by an icon that symbolizes the resource type of the resource. For details about how you can specify an icon for a federated resource type see *Administration of tag federation*.

If a federated resource is selected two different kinds of behavior are supported:

1.  Redirect to an external website where the resource is displayed. This external redirection is always possible.
2.  Redirect to a page with a portlet that can display this resource. This internal redirection requires a portlet that can integrate a remote resource in HCL Portal.

For details about how you can define a portlet as a target of an internal redirection see *Administration of tag federation*.

Configuration settings for the HCL Portal tagging and rating features such as normalization, black- and white lists are also applied to the federated tags. That allows for example the scenario that remote tags are not visible in HCL Portal because they do not fit to the configured settings.

## Federation of HCL Connections tags

HCL Connections comprises multiple features, such as Activities, Blogs, Bookmarks, Communities, Files, Forums, Profiles, and Wikis. Tags that belong to the resources of these features can be integrated in the Tag Cloud. When a HCL Connections tag is selected, links with the titles of corresponding HCL Connections resources are listed in the Tag Results portlet. When such a resource is selected, either a redirect to a Portal page with the corresponding HCL Connections portlet is performed, or a redirect to the HCL Connections website is made to display more detailed information about the resource.

For Blogs, Forums, Wikis and Profiles, the selected resource is rendered in a Connections portlet by default. For more information on how a target page for the redirect can be specified and how to deploy and configure the Connections POC Resolver see the HCL Connections documentation. The Connections POC resolver is required to render tagged Connections resources within Connections Portlets.

If you do not want to have a connections resource rendered in a Connections portlet, you can set a Connections Site as target of a redirect for a particular Connections feature. For details see *Administration of tag federation*.

**Note:** The HCL Connections portlets must be deployed into HCL Portal and configured accordingly.

The following specifics regarding HCL Connections need to be mentioned:

HCL Connections does not distinguish between private and public tags like HCL Portal does. Therefore, the HCL Connections tags are available in the HCL Connections tags view in the tag cloud for HCL Portal. The **All tags** view can be configured to include HCL Connections tags. These tags are not integrated in the **Others' tags**, **My public tags**, or **My private tags** views.

The most frequently used tags are retrieved through the HCL Connections feature. A limit of 100 tags is provided by HCL Connections.

As HCL Connections does not provide globalization information for tags nor for related resources, the same tag name, title and description of resources are displayed no matter which locale is selected by the user.

During configuration or administration of the HCL Connections integration there are steps where the identifier of a HCL Connections feature must be supplied. Use the following overview of all HCL Connections features identifiers to select the correct feature identifier:

|Connections Feature|Feature identifier|
|-------------------|------------------|
|Activities|activities|
|Blogs|blogs|
|Bookmarks|dogear|
|Communities|communities|
|Files|files|
|Forums|forums|
|Profiles|profiles|
|Wikis|wikis|

-   **[Administering tag federation ](../admin-system/tag_fed_admin.md)**  
When tags from remote systems, such as HCL Connections are integrated into your HCL Digital Experience site, you need to schedule tasks to retrieve tags and related data from the remote system, and later to clean them up from the portal. You can also redirect the rendering of federated resources to HCL Connections and add icons to federated resources.

**Parent topic:**[Tagging and rating ](../admin-system/tag_rate_mngadmin.md)

**Related information**  


[Specifying an icon for a federated resource ](../admin-system/tag_fed_admin_spec_icon.md)

