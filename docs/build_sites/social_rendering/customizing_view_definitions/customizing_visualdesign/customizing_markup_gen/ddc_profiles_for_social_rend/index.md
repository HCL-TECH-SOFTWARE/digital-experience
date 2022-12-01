# Digital Data Connector profiles for social rendering

Starting with Version 8.5, HCL Digital Experience includes a set of Digital Data Connector \(DDC\) for HCL Portal profiles. You can use them with the social rendering DDC plug-in that is identified by the extension ID ibm.portal.ddc.sr.

You can use these profiles to define social lists and detail views for the following types of social data that is served by the HCL Connections server:

-   Blogs, blog posts, and blog post comments, as served by the Blogs service:
    -   Blogs \(`ibm.portal.sr.blogs`\)
    -   Blog details \(`ibm.portal.sr.blogs.details`\)
    -   Blog posts \(`ibm.portal.sr.blogs.posts`\)
    -   Blog post comments \(`ibm.portal.sr.blogs.post.comments`\)
-   Communities and community members as served by the Communities service:
    -   Communities \(`ibm.portal.sr.communities`\)
    -   Community members \(`ibm.portal.sr.communities.members`\)
-   Forums, forum topics, forum topic replies as served by the Forums service:
    -   Forums \(`ibm.portal.sr.forums`\)
    -   Forum topics \(`ibm.portal.sr.forums.topics`\)
    -   Forum topic replies \(`ibm.portal.sr.forums.replies`\)
    -   Forum topic and reply attachments \(`ibm.portal.sr.forums.attachments`\)
-   User profiles, user network connections as served by the Profiles service:
    -   Profiles \(`ibm.portal.sr.profiles`\)
    -   Profiles connections \(`ibm.portal.sr.profiles.connections`\)
-   Wiki pages, as served by the Wikis service:
    -   Wiki pages \(`ibm.portal.sr.wikis.pages`\)
    -   Wiki page comments \(`ibm.portal.sr.wikis.page.comments`\)
    -   Wiki page attachments \(`ibm.portal.sr.wikis.attachments`\)
-   Search results as served by the HCL Connections search service:
    -   Social objects \(`ibm.portal.sr.search`\)
-   Tags that are served with the search results of the HCL Connections search service: \(`ibm.portal.sr.tags`\).

-   Common profile: \(`ibm.portal.sr.common`\).

The profiles listed so far partly inherit attribute definitions from a set of profiles that are available for inheritance purposes only. You cannot see these profiles in the tag helper because they are used only by other profiles that inherit attribute definitions from them and thereby reuse them. Note that you might need to selectively overwrite parts of these profiles if the feed that you intend to consume does not serve data as expected by the profiles listed in the following:

-   Common profile: \(`ibm.portal.sr.common`\)
-   Modifier support profile: \(`ibm.portal.sr.modifiersupport`\)
-   Tag support profile: \(`ibm.portal.sr.shared.tagsupport`\)
-   OpenSearch support profile: \(`ibm.portal.sr.shared.opensearchsupport`\).

All list view definitions that HCL Portal provides use the Social Objects 1.0 profile. This profile works against the search services. for more information, read *The social objects profile*.

The Forum Topic Details view definition is uses the Forum Topics profile. For more information, read *Forums, forum topics, and forum topic replies profiles*.

The profiles define the attribute names that you can use in your `[AttributeResource]` tags when you generate the HTML markup for your bean lists. You can either manually add the `AttributeResource` tags to the design component of a social list, or you can use the **Insert a Tag** user interface of HCL Web Content Manager. Example: If a profile defines an attribute that is named `title`, you can write out the title value of the items in your list by using the following tag: `[AttributeResource attributeName="title"]`.

!!! note
    When you integrate an HCL Connections server that runs in the Smart Cloud for Social Business, the following item attributes always return empty string values: `authorObjectID`, `memberObjectID`, and `modifierObjectID`.

The profiles that HCL Portal includes are listed in the following topics.

<!--
-   **[Blog-related profiles](../social/soc_rendr_prfls_blogs.md)**  
These profiles provide access to HCL Connections blog-related feed data for blogs, blogs details, blog posts, and blog post comments.
-   **[Communities and community members profiles](../social/soc_rendr_prfls_communities.md)**  
These profiles provide access to HCL Connections community and community members feed data.
-   **[Forum-related profiles](../social/soc_rendr_prfls_forums.md)**  
These profiles provide access to HCL Connections forum-related feed data for forums, forum topics, and forum topic replies profiles.
-   **[Profiles and profiles connections profiles](../social/soc_rendr_prfls_profiles.md)**  
These profiles provide access to HCL Connections profile related feed data.
-   **[Social objects profile](../social/soc_rendr_prfls_social_objects.md)**  
The social objects profile provides access to HCL Connections social objects feed data.
-   **[Tags profile](../social/soc_rendr_prfls_tags.md)**  
The tags profile provides access to the HCL Connections tags facet that is served by the connections search service.
-   **[Wiki-related profiles](../social/soc_rendr_prfls_wikis.md)**  
These profiles provide access to wiki-related feed data for wiki pages, wiki page comments, and wiki page attachments.
-   **[Common profile](../social/soc_rendr_prfls_common.md)**  
The common profile provides general aspects that are available in various feeds that are served by HCL Connections. You can use the common profile when you create your own custom profiles.
-   **[Modifier support profile](../social/soc_rendr_prfls_modifier_support.md)**  
The modifier support profile provides general modifier aspects. These modifier aspects are available in various feeds that are served by HCL Connections. You can reuse them when you create your own profiles.
-   **[Tag support profile](../social/soc_rendr_prfls_tag_support.md)**  
The tag support profile provides access to a list of tags that is associated with the social objects served by HCL Connections feed data.
-   **[OpenSearch support profile](../social/soc_rendr_prfls_opensearch_support.md)**  
The OpenSearch support profile provides access to information that is defined in the OpenSearch specification. The OpenSearch specification is commonly used in the Atom feed format.
--->

???+ info "Related information:"
    - [Social rendering](../../../../../social_rendering/index.md)
    - [Configuring globally how social object data is served](../../../../cfg_global_settings_social_rendering/soc_rendr_cfg_data_serve.md)
    - [Configuring globally how social object links are resolved](../../../../cfg_global_settings_social_rendering/soc_rendr_cfg_reslv_links.md)
    - [Configuring file type icon mappings](../../../../cfg_global_settings_social_rendering/cfg_filetype_icon_mappings/index.md)
    - [Web content tags](../../../../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/tags/creating_web_content_tags/wcm_tags.md)
    - [Setting parameters to format dates](https://help.hcltechsw.com/digital-experience/8.5/panel_help/wcm_reference-dates.html)
    - [Implementing interactions with social objects](../../../implementing_interactions_social_object/index.md)
    - [The social rendering Digital Data Connector plug-in](../../../../extending_social_lists_using_ddc/soc_rendr_bean_lst_prvdr.md)

