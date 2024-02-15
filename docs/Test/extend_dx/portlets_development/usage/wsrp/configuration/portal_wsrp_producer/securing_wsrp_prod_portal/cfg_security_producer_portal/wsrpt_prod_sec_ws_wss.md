# Securing the WSRP Producer by WS-Security

You can configure Web Services Security according to the WS-Security standard for your WSRP Producer and the provided web services.

The WSRP Producer in HCL Portal provides a set of JAX-WS compliant service providers. You can manage the configuration of the WSRP service providers in IBM® WebSphere® Application Server through the concept of policy sets. You might want to configure the service providers of the WSRP Producer for WS-Security-based authentication and caller identification. You can do so by attaching an appropriate policy set to the service provider, for example by using the WebSphere Integrated Solutions Console.

The WebSphere Application Server ensures message security and quality of service according to the configuration that you defined. The WSRP Producer provides a set of default policy sets and default provider policy set bindings. You can use them for configuring WSRP service providers. You do not have to create your own policy set and provider policy set binding.

The following table describes the provided WSRP application policy sets and the provided WSRP provider policy set bindings:

| |WSRP application policy sets|WSRP provider policy set bindings|
|--|----------------------------|---------------------------------|
|-   **LTPA based**|-   **LTPA-based message authentication policy set** <br>This policy set defines LTPA token-based message authentication. It does not define other security mechanisms such as message confidentiality, or other web service mechanisms such as WS-Addressing.|-   **LTPA-based message authentication provider binding**<br>You must use this provider policy set binding with the LTPA-based message authentication policy set. It defines the corresponding provider binding, including caller identification.|
|-   **Username based**|-   **Username-based message authentication policy set**<br>This policy set defines Username token-based message authentication. It does not define other security mechanisms such as message confidentiality, or other web service mechanisms such as WS-Addressing.|-   **Username-based message authentication provider binding**<br>You must use this provider policy set binding with the Username-based message authentication policy set. It defines the corresponding provider binding, including caller identification.|

The WSRP application policy sets and client policy set bindings are contained in compressed format in the directory PortalServer/doc/policy-sets-samples of the portal installation. For instructions about how to import and attach policy sets and provider policy set bindings, read the WebSphere Application Server documentation.

To use the WSRP policy sets and provider policy set bindings for service configuration, use the procedure given later in this topic.

!!! note
    You are not limited to using the default policy sets and provider policy set bindings. Instead, you can also create and use a policy set and provider policy set binding of your choice. The WSRP Producer supports all service configurations that WebSphere Application ServerWebSphere Application Server supports. Therefore, you can use all security tokens that WebSphere Application Server supports. Some token types might require a specific setup. For more detailed information about web service configuration, read the WebSphere Application Server product documentation. Note that it is necessary to define a compatible web service configuration on the WSRP Consumer portals.

1.  Import the WSRP policy sets and provider policy set bindings.

    To do so, use a WebSphere Application Server administrative client, such as the WebSphere Integrated Solutions Console:

    1.  Open the **Application policy sets** panel.

    2.  Select **Import \(From Selected Location\)**.

    3.  Select the LTPA-based message authentication policy set.zip file or the username-based message authentication policy set.zip file that you want to import.

    4.  Open the **General provider policy set bindings** panel.

    5.  Select **Import \(From Selected Location\)**.

    6.  Select the LTPA-based message authentication provider binding.zip file or username-based message authentication provider binding.zip file that you want to import.

2.  Attach the policy set and provider policy set binding to a WSRP service provider.

    Proceed as follows:

    1.  Open the **Service providers** panel.

    2.  Open the service provider that you want to configure. Do not select one of the internal service providers, such as `WSRPBaseService_v2_internal`, `WSRPPortletManagementService_v2_internal`, or `WSRPServiceDescriptionService_v2_internal`.

    3.  Select the service.

        The service is the first resource listed.

    4.  Use the **Attach** option to select and attach the LTPA-based message authentication policy set or the username-based message authentication policy set.

    5.  Select the service.

        The service is the first resource listed.

    6.  Use the **Assign Binding** option to select and assign the LTPA-based message authentication provider binding file or username-based message authentication provider binding.

    7.  Save your changes to the master configuration.

3.  After you have completed this configuration, restart your portal.



???+ info "Related information"
    - [WebSphere Application Server product documentation version 8.5](http://www-01.ibm.com/software/webservers/appserv/was/library/)
    - [The XML configuration interface](../../../../../../../../deployment/manage/portal_admin_tools/xml_config_interface/index.md)
    - [Working with the XML configuration interface](../../../../../../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)
    - [Configuring WSRP web service clients](../../../../portal_wsrp_consumer/wsrp_consumer_info/cfg_security_consumer_portal/cfg_wsrp_webservice_clients/index.md)

