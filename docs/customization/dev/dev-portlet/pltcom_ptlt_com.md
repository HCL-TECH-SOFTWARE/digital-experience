# Portlet communication

HCL Digital Experience supports multiple ways for portlets to exchange or share information.

Select the topic about the programming technique that is most appropriate for your application requirements from the following links.

-   **[Public render parameters](../dev-portlet/pltcom_pubrndrprm.md)**  
Public render parameters allow JSR 286 portlets to share navigational state information. They are specially useful for coordinating the multiple navigation or viewer portlets that display different information items that are all related to the same parameter name. The portal stores all portlet render parameters, including public render parameters, as an encoded part of the current portal URL. Therefore, public render parameters are correctly preserved by typical browser navigation actions such as the Back button and bookmarking.
-   **[Advanced URL generation for data exchange](../dev-portlet/pltcom_datxchg_xptltlnks.md)**  
For data exchange, HCL Digital Experience supports cross-portlet links
-   **[Standard portlets publish and subscribe mechanisms](../dev-portlet/pltcom_pubsub_model.md)**  
Both JSR 168 and 286 portlets provide communication capabilities that enable you to pass information from one portlet to another. For JSR 286 portlets, these capabilities are included in the JSR 286 standard. For JSR 168 portlets, an extension defined by HCL provides these capabilities. Portlet developers define these capabilities. Portal administrators then determine whether or not these capabilities are used to pass information between portlets.
-   **[Known issues and restrictions related to standard portlets publish and subscribe mechanisms](../dev-portlet/wpsc2aiss.md)**  
Review this information for a list of known issues and restrictions with portlet communication.
-   **[Special purpose techniques for data exchange](../dev-portlet/pltcom_datxchg.md)**  
HCL Digital Experience supports special purpose techniques for data exchange.
-   **[Shared portlet sessions](../dev-portlet/pltcom_shrd_ptlts.md)**  
The following communication methods are based on shared state between multiple portlets. This means that two or more portlets read and write to the same data.

**Parent topic:**[Developing portlets](../dev-portlet/wpsdev.md)

**Related information**  


[Struts Portlet Framework](../dev-portlet/wpsstruts.md)

[Relation to cooperative portlet wiring](../dev-portlet/w2_smtg_ref_wire.md)

[Comparison of the new features with click-to-action in HCL Digital Experience portlets](../dev-portlet/w2_smtg_ref_compr.md)

