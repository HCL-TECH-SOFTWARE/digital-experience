# Creating and deploying custom attribute value processor plug-ins

You can deploy custom attribute value processor plug-ins for DDC into the HCL Portal application extension registry. Attribute value processor plug-ins can be used to process the value of an item attribute after the value is determined by the list rendering profile.

The extension point ID for custom attribute value processor plug-ins is `com.ibm.portal.wcm.plr.AttributeValueProcessor`.

Individual plug-in implementations implement one of the two following Java interfaces for the object factory responsible for creating the actual attribute value processor instance.

-   `com.ibm.portal.wcm.plr.AttributeValueProcessorFactory`
-   `com.ibm.portal.wcm.plr.AttributeValueOnRequestProcessorFactory`

The actual attribute value processor implementations must implement the `com.ibm.portal.wcm.plr.AttributeValueProcessor` Java interface.

All three interfaces are defined in the public Digital Data Connector SPI. For more information about these interfaces, see *The developer HCL Portal SPI documentation.*


???+ info "Related information"
    - [XPath list-rendering profile metadata keys](../ddc/integrating_remote_xml_data/syntax_xpath_based_list_rendering_profiles/plrf_lr_profl_metadata_keys.md)
    - [BasicJSONSelection list-rendering profile metadata keys](../ddc/integrating_remote_json_data/syntax_basicjsonselection_based_list_rendering_profiles/plrf_lr_profl_metadata_keys_json.md)

