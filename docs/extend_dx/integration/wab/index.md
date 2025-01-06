# Integrating with web applications

The Web Application Bridge uses reverse proxy technology to integrate web-based content providers (for example, Microsoft SharePoint server, [HCL Leap](../leap/example/index.md#integrating-hcl-leap-applications-with-web-application-bridge), and [HCL Volt MX Iris](../mx/example/index.md#integrating-an-hcl-volt-mx-iris-application-into-hcl-digital-experience-pages)) with HCL Digital Experience. Administrators must first define the virtual web applications or content providers. A lightweight iFrame portlet renders the content from the backend applications. Users can then access the iFrame on a page without requiring direct network access to the backend application. A special engine maps Uniform Resource Identifier (URIs) on the iFrame portlet to real URIs from the content providers.

The intention of the Web Applications Bridge is to support the complex and heterogeneous web applications. Ensure that the web applications are constructed with common practices and function according to industry accepted standards. Since there are no rigorous industry standards, it is impossible to verify that the Web Application Bridge can work with any arbitrary web application. You might need to customize the Web Application Bridge or change the web application to ensure success. The Web Applications Bridge was designed to integrate Microsoft Sharepoint into your website. However, you can integrate with other products. The Web Application Bridge is routinely enhanced to support integration with other products and systems per demand.

For those web applications that do not comply or are unable to work correctly, modify the application to support the integration through the Web Application Bridge. In cases where the application cannot be modified to comply with the Web Application Bridge, add custom filters to the Web Application Bridge to process the markup. Take care when you implement these filters for performance and reliability. The customer makes the customization themselves. When you use the Web Application Bridge, access HCL Portal with the fully qualified host name.

Integrating the web applications with HCL Digital Experience is a multi-step process. To learn more about the Web Application Bridge, go to [Web Application Bridge](wab/index.md).

Mobile support is provided for web applications that were developed and tested for rendering inside mobile device browsers. If the web application was originally built and tested for desktops, they will not work properly on a mobile device. Instead, they display the same way that they would on the desktop. If the web application provides navigation, content, and features for a mobile device, it is available when rendered through the Web Dock portlet.

Configure the Web Dock portlet to always allow dynamic size. This setting allows the screen to respond to the different sizes of the applications. If you do not have Dynamic Size set to always, the Web Dock portlet shows the desktop version of the content.

!!!note
    Mobile devices might not show scroll bars for any overflow content. Instead, the swipe feature of the mobile is enabled.

-   **[Web Application Bridge](wab/index.md)**  
The Web Application Bridge uses reverse proxy technology to integrate web-based content providers, such as the Microsoft SharePoint server, with HCL Digital Experience.
-   **[Configuring the Web Application Bridge for anonymous login](wab_alogin.md)**  
You can map your web application bridge to allow anonymous users to log on and access information.
-   **[Configuring multiple web dock applications on a page](wab_multi.md)**  
You can have multiple web dock applications that point to different hosts on the same portal page. You can also allow users to open two different portal pages that contain web dock applications in a new browser window or tab.
-   **[Troubleshooting the Web Application Bridge](trouble_wab.md)**  
The troubleshooting information is useful for planning and implementing your Web Application Bridge integration (WAB).


???+ info "Related information"
    - [Providing short vanity URLs](../../../manage_content/wcm_delivery/vanity_url/adm_vanity_url/van_url_short.md)
    - [Sample integrations of HCL Leap with HCL Digital Experience](../leap/example/index.md)
    - [Sample integrations of HCL Volt MX Foundry and Iris with HCL Digital Experience](../mx/example/index.md)

