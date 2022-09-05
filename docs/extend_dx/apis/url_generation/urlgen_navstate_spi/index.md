# URL generation by using the Navigational State SPI

The Navigational State API is used to read and modify the Navigational State document within a Portal URL. The Navigational State document is the seemingly random string of characters that appears in HCL Portal URLs. This string is a compressed, encoded XML document that contains a large amount of information that supports various Portal functions, including bookmark-ability of Portal pages and back button support.

For details about the back button behavior and the support of bookmarks, see to the topic *Back button behavior*.

You can use the Navigational State SPI to read, create, and modify URLs that carry navigational state. The `com.ibm.portal.state` package is the main package of the Navigational State SPI. It holds the service interfaces and the interfaces that make up the navigational state object model.

The SPI offers two services \(obtainable through JNDI\) to create such URLs. Which service you choose depends on whether you are writing Portal-level code or portlet code, for example within a theme.

-   **Portal-level code: Portal State Manager Service**

    A portal service that is used to realize use cases that go beyond what the portal tags provide. Use it to create URLs within portal artifacts such as themes, skins, and custom JSP tags. You can also use it in artifacts that are removed from the request processing, such as Enterprise JavaBeans. However, the Portal State Manager Service is not meant to be used for portlets. The Portal State Manager service classes are in package `com.ibm.portal.state.service`. A `PortalStateManagerService` instance is obtained with a JNDI look-up that uses a name constant from the `PortalStateManagerServiceHome` interface.

-   **Portlet code: Portlet State Manager Service**

    The counterpart service that supports JSR168 and JSR286 compliant portlets. Use the Portlet State Manager Service to create URLs within portlets that cannot be created by using the Standard Portlet APIs. A `PortalStateManagerService` instance is obtained with a `PortalStateManagerServiceHome` instance.

    **Tip:** A `PortletStateManagerService` instance is obtained with a `com.ibm.portal.portlet.service.PortletServiceHome` instance.


**Note:** Consider the new Portal-defined public render parameters support for these use cases, instead of the Navigational State SPI. The render parameters provide most of the same functions in a much simpler way.

For more information about all SPI interfaces, see the Javadoc.

-   **[Object Model](../dev/obj_model.md)**  
Learn about the main object models used in the navigational state SPI.
-   **[Accessor SPI](../dev/accessor_spi.md)**  
The Accessor SPI provides typed access to the state document model. It allows the programmer to query and modify navigational state information. The Accessor SPI is part of the package com.ibm.portal.state.accessors.\*.
-   **[URL generation services](../dev/url_gen_serv.md)**  
Learn about the services that are used to create URLs in the navigational state SPI.


**Related information**  


[Back button behavior](../admin-system/backbut.md)

