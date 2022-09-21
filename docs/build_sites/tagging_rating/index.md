# Tagging and rating

Get an overview of the administrative tasks related to tagging and rating.

**Attention:** To use tagging and rating with your virtual portal, ensure that the **Web Resources v7.0** and **Web Content Templates 3.0** libraries exist on the virtual portal.

Portal administrators can do the following tasks:

-   Enable or disable tagging and rating for portal users. Tagging and rating are enabled in the HCL Portal 8.5 theme. You can disable and enable tagging and rating globally for the portal as a whole. To do so, use the following configuration properties:

    -   To disable and enable tagging portal wide, use the property `com.ibm.wps.cp.tagging.isTaggingEnabled`.
    -   To disable and enable rating portal wide, use the property `com.ibm.wps.cp.rating.isRatingEnabled`.

    These properties are available in the WP CP configuration service Resource Environment Provider in the WebSphere® Integrated Solutions Console. For details about portal service configuration properties and how to set them refer to the topics about Portal configuration services and Setting service configuration properties.

-   Add custom content that users can tag and rate, for example, pages, portlets, content that is managed by Web Content Manager, or custom content such as books in a bookstore.

    !!! note
        If you want your users to tag and rate custom content, you must write code. The code must allow customers to find this content with the public APIs. You must also add the resources that you want your users to tag to the portal. Custom content is anything apart from portlets, portal pages, and Web Content Manager resources. For information, read *Enabling your own custom content to be tagged and rated*.

-   Assign access rights to users for tagging and rating content. For details, read *Security for tagging and rating*.
-   Administer the tag clouds. Administrators can set multiple parameters that affect the tag cloud. Two examples are described here in detail. For a list of the possible tag cloud parameters, read *The tagging and rating user interface* and the tagging and rating reference topics.

    -   Scope tag clouds to the kind of resources for which you want tags to be displayed. A default tag cloud displays all tags that users applied in the portal. Administrators can change this behavior. For example, you can limit a tag cloud to display tags that were applied only to pages, portlets, or books. You scope tag clouds by setting either categories or type schemas for them. The tag cloud represents only portal content that matches the categories or type schemas that you specified. You can scope each single tag cloud instance differently. Scoping tag clouds also affects the result lists of resources that are shown when users click a tag. The result list shows only resources of the scoped type. For example, if a tag cloud is scoped to the type photo, the result list shows only photo images.

    -   Configure the tag cloud behavior. Tag clouds can react differently to tag clicks:
        -   Either the user is redirected to the portal Tag Center and a result list of resources is displayed to which this tag was applied is displayed.
        -   Or the tag cloud shows the clicked tags as shared render parameters, so that, for example, other portlets on the same page can display corresponding content.

-   Stage a tagspace to a different portal system, for example, when you move your portal to a staging server or upgrading your portal to a new version. For details about how to do so, read *Using the XML configuration interface to administer tags and ratings*.
-   Obtain statistics about the tagging and rating behavior of the portal users.
-   Administrators can also do all tasks that portal users can do as described in the topics about portal user tasks.

<!--
-   **[Introduction to tagging and rating](../admin-system/tag_rate_defn.md)**  
Tagging and rating are features that support collaboration and interaction between users when using Web content.
-   **[What is new in tagging and rating](../admin-system/tag_rate_whatsnew.md)**  
With HCL Portal Version 9.5, the tag and rating widgets have been replaced by new enhanced versions of these widgets.
-   **[How tagging and rating works in the portal](../admin-system/tag_rate_adm_gen.md)**  
Use these topics for general administrative information about tagging and rating in the portal.
-   **[The tagging and rating user interface](../admin-system/tag_rate_ui.md)**  
Learn about the user interface that HCL Digital Experience provides for users to work with tags and rating.
-   **[Tagging and rating for static pages](../admin-system/tag_rate_spa.md)**  
Tagging or rating for static pages works only with the dialog widgets of earlier portal versions.
-   **[Enabling your own custom content for tagging and rating](../admin-system/tag_rate_custom_content.md)**  
Enabling your own custom content for tagging and rating works only with the dialog widgets of earlier portal versions.
-   **[Federating tags](../admin-system/tag_rate_federation.md)**  
HCL Portal allows the federation of remote tagging systems, such as HCL Connections.
-   **[Configuration reference for tagging and rating](../admin-system/tag_rate_adm_ref.md)**  
Developers can customize the tagging and rating user interfaces. The parameter reference lists and explains all available configuration parameters and their values. The topic about CSS provides information about how to change the design of the user interfaces.
-   **[Security for tagging and rating](../admin-system/tag_rate_secy.md)**  
For administering which users can tag and rate content, the portal provides virtual resources for tagging and rating and roles on these virtual resources.
-   **[Using the XML configuration interface to administer tags and ratings](../admin-system/tag_rate_xml.md)**  
You can use the XML configuration interface to manage tagging and rating in the portal. For example, you can move tagspaces and ratings between portal versions or for staging purposes.
-   **[Hints and tips for tagging and rating](../admin-system/tag_rate_ref_hintip.md)**  
Learn about some hints and tips that apply to tagging and rating. Some hints and tips might help developers and portal administrators, others might help portal users. --->


???+ info "Related information"
    - [CP Configuration Service for tagging and rating](../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cp_cfg_svc/index.md)
    - [Setting service configuration properties](../../deployment/manage/config_portal_behavior/service_config_properties/index.md)
    - [Enabling your own custom content for tagging and rating](tag_rate_custom_content.md)
    - [Security for tagging and rating](tag_rate_secy.md)
    - [Using the XML configuration interface to administer tags and ratings](tag_rate_xml.md)

