# Configuring global settings for social rendering 

You can apply some global configuration settings to social rendering. These global settings apply to all social lists in your HCL Portal.

Typically, an administrator configures these settings.

To configure these settings, you configure the appropriate properties in the WP Connections Integration Service resource environment provider. You access this service in the WebSphere® Integrated Solutions Console under the resource environment providers.

These properties define the default settings if no other values are set for individual social lists in the corresponding social view definitions. Page editors with the appropriate access permissions can override some of these settings for individual social lists.

-   **[Configuring the HCL Connections server type ](../social/soc_rendr_cfg_connct_srvr_type.md)**  
You can use social rendering with an on-premises HCL Connections server or with an HCL Connections server that runs in the Smart Cloud for Social Business. If you use the latter type of connections server, you need to adapt the configuration accordingly.
-   **[Configuring the maximum number of items loaded from HCL Connections ](../social/soc_rendr_cfg_connct_item_limit.md)**  
You can define a value for the maximum number of social objects that you want the HCL Connections to return when data for a list of social objects is requested.
-   **[Configuring portal user ID conversion based on directory service ](../social/soc_rendr_cfg_prtl_user_id_conversn.md)**  
When you use social rendering with an HCL Connections server, you must configure both HCL Digital Experience and HCL Connections against the same directory service. Depending on the directory service that you use, HCL Portal needs to convert the user IDs of portal users to a format that the HCL Connections server accepts. For example, this conversion is required if both HCL Portal and HCL Connections are configured against a Domino Directory service or a Microsoft Active Directory.
-   **[Configuring the tags transmission limit ](../social/soc_rendr_cfg_tag_limit.md)**  
You can configure your lists of social objects that retrieve data from the HCL Connections to transmit tags to the Tag Cloud portlet. You can limit the number of tag names that are loaded from HCL Connections. You configure this limit in the WP Connections Integration Service resource environment provider.
-   **[Configuring globally how social object data is served ](../social/soc_rendr_cfg_data_serve.md)**  
Among other features, social objects have different links that enable users to download related data. For example, users can use links to download a file or the profile image of the author. You can globally configure how social object data is served to the users. To do so, you use a setting in the WP Connections Integration Service resource environment provider in the WebSphere Integrated Solutions Console.
-   **[Configuring globally how social object links are resolved ](../social/soc_rendr_cfg_reslv_links.md)**  
You can include one or many attributes of social objects in the design component that defines the visual design of your social list. Among other features, social objects have different resolvable links that enable users to open details views of the social objects or the community to which the social objects belong. If you plan to add these links to your social list, you can decide how you want the social objects and their home community to be resolved when users click the corresponding links. HCL Digital Experience can either resolve the links in the context of the portal itself, or redirect the user to the HCL Connections user interface. You can globally configure how these types of links of social objects are resolved for the users. To do so, you use a setting in the WP Connections Integration Service resource environment provider in the WebSphere Integrated Solutions Console.
-   **[Configuring file type icon mappings ](../social/soc_rendr_cfg_filetype_map.md)**  
Social rendering provides two types of list appearance components for result lists: simple and comprehensive. Both list appearances components show file type-specific icons when they render list entries that refer to individual files. In this case, the file type is determined based on the file extensions of the individual files. You can configure the set of file types that you want to use in the WP Connections Integration Service resource environment provider. In the context of social lists, a file type is defined by a file type name and a list of file extensions. This list defines the mapping between individual files and your file types. In your social list appearance components, you can then access the file type name for a specific file by using the Web Content Manager \[AttributeResource attributeName="fileType"\] tag. That tag is defined in the Digital Data Connector \(DDC\) for HCL Portal profile. You can then use the file type name to render the appropriate image, for example, by assigning a corresponding CSS class.

**Parent topic:**[Social rendering ](../social/soc_rendr_ovu.md)

**Related information**  


[Roadmap: How to work with social rendering ](../social/soc_rendr_roadmap.md)

[Using the business card ](../social/soc_rendr_use_biz_card.md)

