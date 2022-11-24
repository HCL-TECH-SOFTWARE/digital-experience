# Controller SPI

You can use the Controller SPI for portal administration. It allows you to modify portal resources. It enhances the read-only portal Model SPI by adding writable aspects.

The interfaces of the programming model for portal resources that are published under the topic *Model SPI overview* offered only read-only methods. The Controller SPI extends them by adding a set of new interfaces. These interfaces are derived from the read-only portal models and interfaces and map to them, but they also extend them with methods for modifying the resources that they represent. This way the Controller SPI allows you to modify portal resources to a certain extent.

## Controller SPI overview

The Controller SPI provides controllers for portal resources. You can use these controllers to modify portal resources that are exposed by particular models of the Model SPI. Controllers offer methods to modify the topology and properties of the model and of its nodes. They expose the same interfaces as the corresponding read-only model, and they instantly reflect modifications that you apply to the controller.

!!!note
    While the modifications come into effect immediately for the controller, they not reflected in the persistence layer until you commit the controller and the changes that you made by it.

The resources that are exposed by the controller can be modified through specific interfaces which match their read-only counterparts. For an example, refer to the following class list:

|Classes from the read-only model . . .|. . . are reflected in the Controller SPI by the following classes|
|--------------------------------------|------------------------------------------------------------------|
|-  `ContentNode`<br>-   `MarkupCapable`<br>-   `Localized`<br>-   `Identifiable`<br>-   `ActiveFlag`|-   `ModifiableContentNode`<br>-   `ModifiableMarkupCapable`<br>-   `ModifiableLocalized`<br>-   `ModifiableIdentifiable`<br>-   `ModifiableActiveFlag`|

Further benefits of the Controller SPI are as follows:

-   Controller instances work as workspaces where you make your modifications. You can try your modifications and assess them in a preview mode. When your changes meet your requirements, you apply them to the portal by a commit step.
-   You can make and apply your changes to a running portal environment. You do not need to restart the portal for the changes to take effect.

The Controller SPI provides the following controllers:

-   **Content Model Controller**

    This allows you to modify the content topology and the properties of content nodes such as pages, labels, and content URLs.

    !!!note
        If you modify the content topology, this might also change the navigation of your portal for your users.

-   **Layout Model Controller**

    This allows you to modify the layout of a page, such as the topology of layout elements of a page, and the properties of layout elements such as layout containers and layout controls.

-   **Portlet Model Controller**

    This allows you to create, update and delete portlets.


!!!note
    At this time there is no controller for the following models:

-   `NavigationModel`. This is by implication of the structure of the content model.
-   `NavigationSelectionModel`. This is computed from the navigational state per request.
-   `LanguageList, MarkupList, SkinList`, and `ThemeList`.

A controller is based on the corresponding read-only model. This means when you first create the controller on the basis of a read-only model, both the controller and the model expose the same information. You can then use the controller to create, update, or delete information exposed through it. These changes will be reflected in the controller immediately. To persist changes that you made to the underlying read-only model, you need to commit the controller.

In particular, a controller offers methods to do all of the following:

-   Provide modifiable instances of existing resources. These modifiable instances exist for each modifiable resource property, and they allow for these properties to be modified.
-   Create and delete model resources.
-   Obtain dependent controllers. This is optional. For example, a `ContentModelController` offers a method to obtain a `LayoutModelController`.
-   Persist the modifications.

!!!note
    Before you use the Controller SPI, be sure to familiarize yourself with the read-only models. Refer to *Model SPI overview*.

## Scope of the Controller SPI

A controller instance is based on a read-only model instance. Therefore it has the same scope and lifetime as the corresponding read-only model. Consequently, the following equivalences apply:

-   If the underlying model is scoped to a particular user, then so is the controller.
-   If the underlying model is scoped to a request, then so is the controller.
-   If the underlying model is scoped to a virtual portal, then so is the controller.


???+ info "Related information"  
    - [Model SPI overview](../model_spi/index.md) 
    - [Administration tools for configuring outbound HTTP connections](../../portlets_development/web2_ui/outbound_http_connection/cfg_outbound_http_connections/adm_tools_for_cfg_outbound_http_conn/index.md) 
    - [Obtaining the Controller SPI](../../portlets_development/web2_ui/outbound_http_connection/cfg_outbound_http_connections/adm_tools_for_cfg_outbound_http_conn/cfg_outbound_http_using_modelcontroller_spi/outbhttp_cfg_mcspi_obtstrlrspi.md)
    - [The Java API](../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/managed_pages/advadmin_managedpages/wcm_mngpages_projectapi.md#java-api)

