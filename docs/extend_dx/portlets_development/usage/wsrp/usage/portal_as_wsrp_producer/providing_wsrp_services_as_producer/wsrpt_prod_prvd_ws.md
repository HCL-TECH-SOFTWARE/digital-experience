# Providing WSRP services as a Producer

After you prepared your portal as a Producer portal, you can provide your portlets through WSRP. Providing portlets makes them available to Consumers. They can integrate them into their Consumer portals and use them as remote portlets. You can also withdraw portlets from being provided through WSRP. Consumer portals can then no longer use them.

To provide or withdraw a portlet for WSRP services, you can use either of the following options:

-   The portal administration portlet **Manage Portlets**.
-   The portal XML configuration interface. For more information about the XML configuration interface \(XMLAccess\), read the topics about the XML configuration interface.

!!!note "Notes"
    1.  A Producer provides portlets, not portlet instances. Therefore, only settings that are made in the Configure mode of the portlet on the Producer portal are available at the consumed remote portlet. Adding a remote portlet to a page on the Consumer side might create a new instance of the provided portlet on the Producer side. This portlet instance can be modified only on the Consumer portal. It is not available for use on the Producer portal.
    2.  Customization of the Producer portlets by Consumer portal users can be exported by using the XML configuration interface.



???+ info "Related information"  
    -   [Enabling remote rendering with WSRP and the Web Content Viewer](../../../../../../../manage_content/wcm_delivery/delivering_web_content/deliver_webcontent_on_dx/enable_remote_render_wsrp/index.md)
    -   [Working with the XML configuration interface](../../../../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)
    -   [The XML configuration interface](../../../../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/index.md)

