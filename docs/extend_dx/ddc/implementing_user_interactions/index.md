# Implementing user interactions

With Digital Data Connector \(DDC\) for HCL Portal, you can use HCL Web Content Manager presentation components for visualizing external data. As a further benefit, you can also add user interfaces for creating, modifying, and deleting external data to your DDC list appearance components. This way, your users can use these features to create, modify, or delete external data items from your lists.

In this scenario, the Web Content Viewer portlet acts as a mediator. It forwards information provided by the user to the specified data sink and sets the result information either as a private render parameter or as a session attribute. You can plug in your own data sinks by implementing the `com.ibm.portal.resolver.data.FormDataDataSink` interface. This interface is defined in the public POC resolution framework API. For more detailed information, refer to the *Package `com.ibm.portal.resolver.data` summary*.

-   **[Sending data to the Web Content Viewer portlet](../implementing_user_interactions/sending_data_to_webcontentviewer_portlet/index.md)**  
You can use HCL Web Content Manager presentation components to create user interfaces for creating, modifying, and deleting external data. With this approach, you use Web Content Manager design components to generate specific HTML form markup.
-   **[Setting dynamic Digital Data Connector filter values](plrf_set_dyn_ddc_fltr_valus.md)**  
Digital Data Connector \(DDC\) for HCL Portal defines a dedicated public render parameter that can be used by DDC plug-ins for filtering lists.


???+ info "Related information:"
    - [Using the list-rendering cache](../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/tags/creating_web_content_tags/creating_plugin_tag/connector_plugins/plrf_tune_markup_chache.md)

