# Concept of the lists of social objects provided with the social rendering feature

The social rendering feature provides you with a set of predefined lists view definitions and a detail view definition for forum topic details.

The lists of social objects are defined by web content items of content type Social List Definition. The following lists are available after you installed HCL Digital Experience:

-   List of Blog Posts
-   List of Communities
-   List of Community Events
-   List of Community Forum Topics
-   List of Community Blog Posts
-   List of Community Content
-   List of Community Files
-   List of Files
-   List of Forum Topics
-   List of People

These list definitions define individual queries against the search service of the remote HCL Connections server. The specific queries for the individual list definitions are built based on the element data that is contained in those content items. In addition to the query, the content items also hold the reference to the list appearance component responsible for transforming the query result data into visual markup.

The lists generate a visual enumeration of social objects that are relevant in the specific context of a portal page. For example, these social objects can be all recent blog posts that are tagged with a specific tag. To see a detail view of a social object, a site visitor can click the link that is rendered for the item in the list. The process of bringing up this details view is called social object resolution. You can choose between the following options for resolving a social object that a user clicks:

-   Taking the user to a portal page where the social object details are rendered by a social rendering detail view
-   Taking the user to a portal page where the social object details are rendered by a HCL Connections portlet
-   Taking the user to the details view for the social object in the HCL Connections user interface.

The resolution process can be controlled by various concepts described in *Configuring globally how social object links are resolved*.

In contrast to social list view definitions, social rendering detail view definitions render detailed information about a single social object. For example, such detail information can be the full body text and the nested thread of replies for an individual forum topic. Additionally, the details view typically also renders user interfaces that allow interactions with the social object, such as form fields by which site visitors can post new replies. HCL Portal Version 8.5 provides a social rendering details view definition for forum topics named Forum Topic Details.

You can create more list and details view definitions as extensions within the Digital Data Connector \(DDC\) for HCL Portal framework.

<!--
-   **[Social object resolution](../social/soc_rendr_soc_obj_resltn.md)**  
When a portal user clicks a link to an object, the portal takes the user to the details view of that object. This process is called social object resolution. For example, a user might click a specific forum topic that is listed in the Community Forum Topics list. In this case, the social object resolution takes the user to a portal page that provides a details view of the forum topic that the user clicked. You can influence the result of the resolution that the user views by setting various parameters. These parameters are described here. -->


???+ info "Related information:"
    - [Digital Data Connector \(DDC\) for HCL Portal](../../../../extend_dx/ddc/index.md)
    - [Configuring globally how social object links are resolved](../../cfg_global_settings_social_rendering/soc_rendr_cfg_reslv_links.md)

