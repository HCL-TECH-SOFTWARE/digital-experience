# Packages of the Controller SPI 

The portal provides the SPI Controller in several separate packages.

These packages are as follows:

-   `com.ibm.portal`. This package holds the following interfaces:
    -   Base interfaces for the Controller SPI, for example `Modifiable` and `Controller`.
    -   Modifiable interfaces, such as `ModifiableActiveFlag`, `ModifiableLocalized`, `ModifiableMetaData`.
-   `com.ibm.portal.admin`. This package holds modifiable interfaces, for example the `ModifiableMarkupCapable` and the `LanguageListController`.
-   `com.ibm.portal.content`. This package holds the following interfaces:
    -   Interfaces for content and layout model controller modifiable interfaces for content and layout nodes. For example, these can be `ModifiableContentPage` or `ModifiableLayoutContainer`.
    -   Modifiable interfaces for modifiable aspects of content and layout nodes, for example `ModifiableBookmarkableFlag`
    -   Creation contexts for creating content pages and layout nodes, for example `LayoutContainerCreationContext`.
-   `com.ibm.portal.model.controller`. This package holds home and provider interfaces to obtain controllers, including a builder factory for `CreationContext` instances.
-   `com.ibm.portal.model.controller.exceptions`. This package holds controller specific exceptions.
-   `com.ibm.portal.portlet`. This package holds the following interfaces:
    -   Interfaces for the portlet model controller.
    -   Modifiable interfaces for portlet definitions, entities and preferences, for example `ModifiablePortletPreferences` and `ModifiablePortletEntity`.
    -   Portlet creation and cloning context interfaces.

**Note:** A controller interface usually resides in the same package as its corresponding read-only Model SPI interface.

**Parent topic:**[Controller SPI](../dev/ctrlrapic_ovu.md)

