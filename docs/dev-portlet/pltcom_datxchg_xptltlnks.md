# Advanced URL generation for data exchange 

For data exchange, HCL Digital Experience supports cross-portlet links

Cross-portlet links work for both HCL and JSR portlets. They use the state API to generate a URL that points to a render parameter of a specific portlet. With the advanced URL generation APIs for portlets, you can have a portlet create a link that points to another portlet, possibly even on a different page, and pass data to that portlet. If it is at all possible, use the publish/subscribe methods. Use explicit cross-portlet links only where other techniques are not applicable. For example, this can be for communication between HCL and JSR portlets.

For details, refer to the documentation about the portalRenderURL tag and the PortalURLGenerationService. Such links can also be created from a theme JSP that uses the portal URL generation tag.

For advanced use cases that require more control over the generated URLs, you can also use the portal state API.

If the pure render parameter approach is not applicable, generating URLs and transporting the data to be communicated is suggested. There are three options available: JSP tag URL generation, PortalURLGenerationService, and state API-based URL generation.

-   **JSP tag URL generation**

    This approach is only supported for JSR portlets and allows the user to generate URLS that transport information from within portlet JSPs. For more information, see *JSP tags for standard portlets* in the related links.

-   **PortalURLGenerationService based URL generation**

    Use this service to generate render URLs to other portlets. For more information, see *Interface PortalURLGenerationService* in the related links. This option might be available only if specific portlets are targeted and if render URLs need to be created for the target portlets in question. For more information, see *Leveraging HCL Portal V6 programming model: Part 2. Advanced URL generation in themes and portlets* in the related links.

-   **State API-based link generation**

    Generating state API-based URLs allows the transfer of data to portlets developed by using the JSR168 API or JSR286 API. State API-based link generation is the most powerful way of modifying the navigational state and thus share information between portlets. In addition to the portlet state aspects such as portlet mode and window state, state API-based link generation also enables you to set private or public render parameters for one or multiple portlets. For more information, see *Leveraging HCL Portal V6 programming model: Part 2. Advanced URL generation in themes and portlets*.


**Notes:**

-   To set private render parameters for a given portlet, request the PortletAccessorController from the PortletAccessorFactory. For more information, see *Interface PortletAccessorController* in the related links.
-   To modify shared state information such as public render parameters for JSR286 portlets, you can also request the SharedStateAccessorController from the PortletAccessorFactory. For more information, see *Interface SharedStateAccessorController* in the related links.
-   So far, the URLs being generated modify navigational state information only and do not carry any action semantic, which is necessary to modify the persistent backend state. PortletTargetAccessorController is available from the PortletAccessorFactory and enables the targeting of a specific portlet's processAction method. PortletTargetAccessorController triggers a processAction on the specific target portlet that the generated URL points to.
-   Standard portlets provide powerful publish and subscribe mechanisms for exchanging information through an action phase invoked between portlets. During the invocation, portlets can exchange complex data and trigger portlet activity such as updates to back-end systems.

**Parent topic:**[Portlet communication ](../dev-portlet/pltcom_ptlt_com.md)

**Related information**  


[Public render parameters ](../dev-portlet/pltcom_pubrndrprm.md)

[JSP tags for standard portlets](../dev-portlet/jsrjsp.md)

[Interface PortalURLGenerationService](https://help.hcltechsw.com/digital-experience/8.5/dev/javadoc/vrm/850/api_docs/com/ibm/portal/portlet/service/url/PortalURLGenerationService.html)

[Interface PortletAccessor](https://help.hcltechsw.com/digital-experience/8.5/dev/javadoc/vrm/850/spi_docs/com/ibm/portal/state/accessors/portlet/PortletAccessor.html)

[Interface SharedStateAccessorController](https://help.hcltechsw.com/digital-experience/8.5/dev/javadoc/vrm/850/spi_docs/com/ibm/portal/state/accessors/portlet/SharedStateAccessorController.html)

