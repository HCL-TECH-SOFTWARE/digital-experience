# The social rendering Digital Data Connector plug-in

To implement the HCL Connections data integration, the social rendering feature in HCL Digital Experience 8.5 uses a custom Digital Data Connector \(DDC\) for HCL Portal plug-in.

You identify this social rendering DDC plug-in by using the DDC plug-in extension ID `ibm.portal.ddc.sr`.

The social rendering DDC plug-in delegates the data loading and XML transformation to the generic XML DDC plug-in. As a result, you can control this data transformation by XPath based list-rendering profiles. HCL Portal Version 8.5 includes a set of such profiles for a subset of the available HCL Connections services. For more detailed information, read *Digital Data Connector profiles for social rendering*. You can use these profiles as is, or extend them by creating custom extensions of the profiles, or create your own list-rendering profiles. The social rendering DDC plug-in adds various computed attributes to the profiles.

The social rendering DDC plug-in supports the `source` list-rendering context attribute. You can use this attribute to directly specify the source URL that serves the HCL Connections XML data. To dynamically construct those source URLs, you can use the `[Plugin:ConnectionsContext]` and `[Plugin:URLParam]` tags. For more detailed information, read *Dynamic HCL Connections source URL construction*.


???+ info "Related information"
    - [Implementing interactions with social objects](../customizing_view_definitions/implementing_interactions_social_object/index.md)
    - [Dynamic HCL Connections source URL construction](../extending_social_lists_using_ddc/soc_rendr_dyn_conn_srcurl_cnstrct.md)
    - [Digital Data Connector profiles for social rendering](../customizing_view_definitions/customizing_visualdesign/customizing_markup_gen/ddc_profiles_for_social_rend/index.md)

