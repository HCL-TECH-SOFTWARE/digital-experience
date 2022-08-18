# Customizing the markup generation

You create the visual designs for your social rendering view definitions by using social rendering appearance components. Social rendering appearance components are implemented as  HCL Web Content Manager Personalization components. Personalization components that you use with social rendering must wrap a Digital Data Connector \(DDC\) for HCL Portal selection rule.

In general, a Web Content Manager Personalization component combines a portal Personalization selection rule with formatting information. This information defines how data returned by that selection rule is transformed into markup that is rendered on a portal page. Social rendering delegates the data selection logic to the underlying DDC framework and uses only the markup generation capabilities of Web Content Manager Personalization components. To trigger the loading of the data, social rendering DDC selection rules that work on the Pluggable Resources resource collection. For more information, read *Technical concepts*.

For extracting the individual pieces of metadata of social objects contained in a social list, you can use the Web Content Manager `AttributeResource` tag. For more information about Web Content Manager Personalization components, see the topic about *Personalization element* in the Web Content Manager product documentation.

-   **[Digital Data Connector profiles for social rendering](../social/soc_rendr_lst_rndr_prfls.md)**  
Starting with Version 8.5, HCL Digital Experience includes a set of Digital Data Connector \(DDC\) for HCL Portal profiles. You can use them with the social rendering DDC plug-in that is identified by the extension ID ibm.portal.ddc.sr.

**Parent topic:**[Customizing the visual design of your view definitions](../social/soc_rendr_cust_socl_list_visual_design.md)

**Related information**  


[Technical concepts](../social/plrf_tech_concepts.md)

