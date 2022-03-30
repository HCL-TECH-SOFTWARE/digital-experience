# Social rendering 

HCL Digital Experience page editors can use social rendering to feature social data that is hosted on a remote HCL Connections server in the context of portal pages.

Page editors can create web content items that represent lists of social objects and detail views for individual social objects. A list of social objects shows the results of a specific query for social data from HCL Connections. For example, the list can consist of specific blog posts, files, or discussion topics. A detail view shows detailed information about a specific social object.

Page editors can control the visual appearance of the social data that is displayed on your portal pages. They do so by selecting the formatting component of choice from a predefined, yet extensible set of formatting components. These components are also called appearance components.

Site designers create the appearance components by using the HCL Web Content Manager Authoring portlet. They define them in a style that is consistent with your portal pages. The appearance component concept provides a clear separation between the following two roles:

-   Website designers who define the corporate appearance of your website and deliver the appearance components to your page editors
-   Page editors who build your portal pages by assembling the appropriate set of components and content to a meaningful context for your site visitors.

With this concept, your page editors do not need to know the markup generation and CSS styling details of the appearance components. Even without that knowledge they can still choose from a rich, but consistent set of visual designs for your social data.

To control the social data that is displayed on your portal pages, your page editors use inline editing on the underlying social rendering content items. The social rendering content items are also referred to as view definitions. They combine both the selection logic that defines which social objects are displayed and the appearance component selection that controls the visual representation of the data. For example, they can show the most recent blog entries that are created in the HCL Connections community to which the current page is associated. Page editors can select individual view definitions from a set of predefined view definitions and drop them onto portal pages. When a page editor drops a view definition onto a portal page, the view definition is copied to the page. The page editor can then modify it independently of other view definitions on the same page or other pages.

As a result, with social rendering the social data displayed on your portal pages is fully controlled by Web Content Manager. The appearance components define the visual appearance by which the social data is rendered on the page. The view definition content items define which data is selected and which appearance component is used to visualize the data. This way, you control the social data that is rendered on your portal pages in the same way as other web content. Social rendering includes support for projects, versioning, workflows, and syndication.

Social rendering provides you the following components:

-   The following set of view definitions for social lists:
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
-   A view definition for forum topic details named Forum Topic Details
-   Two appearance components for visualizing the social lists in two different ways:
    -   **Simple:**

        A condensed simple list design

    -   **Comprehensive:**

        A comprehensive list design

-   Two appearance components for visualizing the details of an individual forum topic:
    -   **Forum Topic Details:**

        An appearance component for visualizing the detailed information about the topic itself

    -   **Replies**

        An appearance component for visualizing the nested thread of replies for the forum topic.

-   A set of DDC list-rendering profiles. You can use them to extend social rendering. They are based on the Digital Data Connector \(DDC\) for HCL Portal.

You can use these view definitions and appearance components as starting points for creating your own solution. Do not modify the view definitions and appearance components that HCL Portal provides, but copy them and modify the copies.

To use social rendering, you need to set up your HCL Portal for integration with HCL Connections.

-   **[Roadmap: How to work with social rendering ](../social/soc_rendr_roadmap.md)**  
Before you can use social rendering in your HCL Digital Experience, you need to set up HCL Connections integration. After you do that, your users can start working with the default view definitions that social rendering provides. You might want to configure and customize the social data that is rendered on your portal pages for your site visitors. In this case, you can configure and administer social rendering as required for your portal. You can also customize the view definitions, or create your own custom appearance components.
-   **[Working with lists of social objects ](../social/soc_rendr_tsk_socl_list.md)**  
You can design lists of social objects in different ways that are related to their content, visual design, and other characteristics. You can also use the HCL Digital Experience Tag Cloud portlet in combination with your lists of social objects, so that your site visitors can navigate social data based on tags. These tasks are usually done by page editors.
-   **[Configuring global settings for social rendering ](../social/soc_rendr_cfg_global.md)**  
You can apply some global configuration settings to social rendering. These global settings apply to all social lists in your HCL Portal.
-   **[Administering social lists ](../social/soc_rendr_adm_socl_list.md)**  
You can administer several aspects of social lists. For example, you can add your own social lists to the content shelf, or you can tune the social object caches for performance.
-   **[Customizing view definitions for portal site visitors ](../social/soc_rendr_shape_socl_list.md)**  
You can customize social rendering view definitions in a number of ways. For example, you can determine the social data that is shown and the visual appearance of the data. You customize social rendering by working with the social list definition authoring template. For custom view definitions, you can also create your own authoring templates.
-   **[Adding widgets to a community ](../social/soc_rendr_add_widg_2_comm.md)**  
As an owner of an HCL Connections community, you can define the set of widgets that are available in the community. For this purpose, you use the Customize option in HCL Connections. For example, you might choose to add the Blog widget to a specific community. This way, community owners have control over the set of services available in the communities they own.
-   **[Extending social lists by using the digital data connector ](../social/soc_rendr_xtnd_sl_by_plrf.md)**  
The social rendering feature in HCL Digital Experience 8.5 is implemented as an Digital Data Connector \(DDC\) for HCL Portal plug-in.

**Parent topic:**[Setting up a website ](../site/site_setup.md)

**Related information**  


[Digital Data Connector profiles for social rendering ](../social/soc_rendr_lst_rndr_prfls.md)

[Digital Data Connector \(DDC\) for HCL Portal ](../social/plrf_ovu.md)

