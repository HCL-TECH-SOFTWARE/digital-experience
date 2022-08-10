# Configuring globally how social object data is served

Among other features, social objects have different links that enable users to download related data. For example, users can use links to download a file or the profile image of the author. You can globally configure how social object data is served to the users. To do so, you use a setting in the WP Connections Integration Service resource environment provider in the WebSphere Integrated Solutions Console.

Social object data can be served to the users in the following two ways:

-   Directly from HCL Connections.
-   By using the Ajax proxy of HCL Portal. Benefits include the possibility to serve all data to your users through HCL Portal without direct web access from the web browser to HCL Connections.

You have two methods to specify how social object data is served:

-   You can globally configure how social object data is served by default. You configure the data serve method in the WP Connections Integration Service resource environment provider. This setting sets the default data serve method for all social lists in your portal. As a result, all your design components that do not explicitly request a specific data serve mode use this default method for serving resources. This configuration method makes the data serve method switchable for all social lists.
-   You can explicitly override the default data serve method in your individual design components. To override the default setting, you use specific attributeName values in the AttributeResource tags that you use in your design components. These values determine a specific data serve method. This way, you can specify for individual types of data by which method you want them to be served.

For example, this configuration affects the following attributes: `authorImageLink`, `communityEntryLink`, `downloadLink`, and `entryLink`. For details about which attributes are available for a specific type of social object, read *Rendering profiles for social lists*.

To globally configure how social object data is served by default, set the `resource.serving.url.type` property of the WP Connections Integration Service resource environment provider. You can then still choose between using the default method or overriding it for individual data in individual design components:

-   To use the default method for serving resource, use the attribute name without any prefix. For example, such attribute names are `authorImageLink`, `communityEntryLink`, `downloadLink`, and `entryLink` values for the `attributeName`. The portal then generates links that point either to HCL Connections or to the portal. This depends on the value that you specified for the `resource.serving.url.type` property.
-   To override the default method, you prefix the corresponding `attributeName` values in the design component with either of the following prefixes. To determine whether you can apply the prefixed version, look at the profile details:
    -   `raw`. Use this prefix to serve resources directly through HCL Connections.
    -   `portal`. Use this prefix to serve resources from the portal to the browser.

Example: You want to generate a file download link that always points directly to HCL Connections, independently of the `resource.serving.url.type` setting. In this case, you add the `[AttributeResource attributeName="rawDownloadLink"]` tag to your design component instead of using the tag `[AttributeResource attributeName="downloadLink"]`. This option keeps the data serve method switchable based on the `resource.resolution.url.type` setting.

Specify either of the following two values for the `resource.serving.url.type` property:

-   **portal**

    Specify this value to define that the `authorImageLink`, `communityEntryLink`, `downloadLink`, `entryLink`, and other link attributes contain URLs through which you can access the social objects by using the Ajax proxy of the portal. In this case, their values equal the values of the corresponding `portalAuthorImageLink`, `portalCommunityEntryLink`, `portalDownloadLink`, and `portalEntryLink` attributes for the design component. This value is the default setting.

-   **connections**

    Specify this value to define that the `authorImageLink`, `communityEntryLink`, `downloadLink`, `entryLink` and other link attributes contain URLs by which you can access the social objects directly from HCL Connections. In this case, their values equal the values of the corresponding `rawAuthorImageLink`, `rawCommunityEntryLink`, `rawDownloadLink`, and `rawEntryLink` attributes for the design component.


To globally configure the method by which social object data is served, proceed by the following steps:

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Select **WP ConnectionsIntegrationService**.

4.  Under **Additional properties**, click **Custom properties**.

5.  Set the `resource.serving.url.type` property to a value of either connections or portal as required.

6.  Save your changes.

7.  Restart your portal server for the changes to take effect.


**Parent topic:**[Configuring global settings for social rendering](../social/soc_rendr_cfg_global.md)

**Related information**  


[Digital Data Connector profiles for social rendering](../social/soc_rendr_lst_rndr_prfls.md)

[Blog-related profiles](../social/soc_rendr_prfls_blogs.md)

[Communities and community members profiles](../social/soc_rendr_prfls_communities.md)

[Forum-related profiles](../social/soc_rendr_prfls_forums.md)

[Profiles and profiles connections profiles](../social/soc_rendr_prfls_profiles.md)

[Social objects profile](../social/soc_rendr_prfls_social_objects.md)

[Wiki-related profiles](../social/soc_rendr_prfls_wikis.md)

[Common profile](../social/soc_rendr_prfls_common.md)

[Modifier support profile](../social/soc_rendr_prfls_modifier_support.md)

