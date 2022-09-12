# Implementing interactions with social objects

Site designers can implement design components that support interactions between the user and the social data. For example, a user can post a new reply to a forum topic or delete a previous reply.

To create such interactive designs, site designers need to implement an HTML form to send a POST action request to the Web Content Viewer portlet that displays the social list. The HTML form must include the URI of a data sink and parameters that identify the action that the designer wants to run. The portlet then dispatches to the target data sink that processes the form data and returns a data source that holds the result. For example, the result can be a JSON object that contains the status of the operation that is triggered with the POST action request and an error or success message. The portlet stores the result in the portlet session or as a private render parameter. To access the result in the formatting components, site designers can use the `SessionAttribute` rendering plug-in and the `RenderParam` rendering plug-in.

For more information about the action URL, render parameter, and session attribute rendering plug-ins, read *Utility rendering plug-ins*.

The following topics describe how you implement user interactions that are related to forum topics by using the social-rendering specific data sink. Additionally, you can implement further user interaction by using the generic XML Digital Data Connector data sink and the social rendering list-rendering profiles. For more information, read *The generic XML Digital Data Connector data sink* and *Digital Data Connector profiles for social rendering*.
<!---
-   **[Interacting with forums](../wcm/wcm_dev_intract_forum.md)**  
HCL Portal provides a built-in data sink that supports different interactions with forums.
-   **[Creating a reply](../wcm/wcm_dev_intract_create_reply.md)**  
When you run a createReply action, the forums data sink uses a number of extra form fields.
-   **[Deleting a reply](../wcm/wcm_dev_intract_delete_reply.md)**  
When you run a deleteReply action, the forums data sink uses a number of extra form fields.


**Related information**  


[The social rendering Digital Data Connector plug-in](../social/soc_rendr_bean_lst_prvdr.md)

[Sending data to the Web Content Viewer portlet](../social/plrf_sendata2wcv.md)

[The generic XML Digital Data Connector data sink](../social/plrf_use_gen_xml_ddc_datasink.md)

[Digital Data Connector profiles for social rendering](../social/soc_rendr_lst_rndr_prfls.md) --->

