# Configuring file type icon mappings

Social rendering provides two types of list appearance components for result lists: simple and comprehensive. Both list appearances components show file type-specific icons when they render list entries that refer to individual files. In this case, the file type is determined based on the file extensions of the individual files. You can configure the set of file types that you want to use in the WP Connections Integration Service resource environment provider. In the context of social lists, a file type is defined by a file type name and a list of file extensions. This list defines the mapping between individual files and your file types. In your social list appearance components, you can then access the file type name for a specific file by using the Web Content Manager \[AttributeResource attributeName="fileType"\] tag. That tag is defined in the Digital Data Connector \(DDC\) for HCL Portal profile. You can then use the file type name to render the appropriate image, for example, by assigning a corresponding CSS class.

The mappings are defined in the WP Connections Integration Service resource environment provider in the WebSphere® Integrated Solutions Console. To modify the mappings, proceed as follows:

1.  Log in to the WebSphere Integrated Solutions Console

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP ConnectionsIntegrationService**.

4.  Under **Additional properties**, click **Custom properties**.

5.  Edit the values for the appropriate `file.type.mapping.type` properties as required.

    The value for each property is a comma-separated list of file extensions. An example setting is `file.type.mapping.text = log, txt`. This mapping means that the Web Content Manager `[AttributeResource attributeName="fileType"]` tag returns the string text for all files with a log or txt file type extension.


For your reference, the following topic lists the default file type mappings.

<!--
-   **[File type mappings reference](../social/soc_rendr_file_type_mapngs.md)**  
The social lists show specific icons for the different file and service types in the result lists. You can modify the file type mappings that are used for displaying these icons. For your reference, these mappings are listed here. -->


???+ info Related information:"
    - [Digital Data Connector profiles for social rendering](../../customizing_view_definitions/customizing_visualdesign/customizing_markup_gen/ddc_profiles_for_social_rend/index.md)
    - [Forum-related profiles](../../customizing_view_definitions/customizing_visualdesign/customizing_markup_gen/ddc_profiles_for_social_rend/soc_rendr_prfls_forums.md)
    - [Social objects profile](../../customizing_view_definitions/customizing_visualdesign/customizing_markup_gen/ddc_profiles_for_social_rend/soc_rendr_prfls_social_objects.md)
    - [Wiki-related profiles](../../customizing_view_definitions/customizing_visualdesign/customizing_markup_gen/ddc_profiles_for_social_rend/soc_rendr_prfls_wikis.md)

