# Using the XML configuration interface to consume portlets from a Producer portal

You can use the XML configuration interface (XMLAccess) to consume portlets from a Producer portal.

To consume a portlet by using the XML configuration interface, specify the handle of the remote portlet and the Producer portal that provides the remote portlet. Specify this information by using the attributes remotehandle and wsrp-producerref with the servlet subtag. Both values are required to use the remote portlet. The remotehandle attribute is defined by the owner of the Producer portal. The owner of the Producer portal provides the handle to you by appropriate means, such as email.

Producers with an IBM HCL Portal Producer can obtain this information by exporting all provided portlets on their Producer portal by using the XML configuration interface.

|subtag|Attribute for the subtag|Description|
|------|------------------------|-----------|
|servlet|remotehandle|As provided by the Producer|
|servlet|wsrpproducerref|ID of the Producer|

After successful integration, the remote portlets are available in the portal administration. They are handled in the same manner as local portlets.

!!!note "Notes"
    -   You can consume a portlet only if you work online and can access the Producer's WSDL document.
    -   To obtain a list and descriptions of the portlets that a specific Producer provides, the WSRP implementation of the portal uses the discovery mechanism that is defined in the WSRP standard.
    -   An integrated portlet is always treated as a standard API-compliant portlet.

To delete integrated remote portlets, use the Manage Web Modules portlet.

???+ info "Related information"  
    -  [The XML configuration interface](../../../../portal_admin_tools/xml_config_interface/index.md)
    -  [Working with the XML configuration interface](../../../../portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)

