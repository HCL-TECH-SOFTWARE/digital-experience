# Configuring outbound HTTP connections by using the Model Controller SPI

To query and administer the outbound HTTP connection, you can also use the model controller SPI.

The information that is given here provides a brief introduction only. For a complete reference about this SPI, visit the [outbound HTTP connection Javadoc](../dev/javadoc/vrm/850/spi_docs/com/ibm/portal/model/controller/package-summary.html).

1.  [Obtaining the Model SPI](../dev-portlet/outbhttp_cfg_mcspi_obtmapi.md)  
You can obtain the home object for the outbound HTTP connection configuration model by using JNDI lookup.
2.  [Obtaining the Controller SPI](../dev-portlet/outbhttp_cfg_mcspi_obtstrlrspi.md)  
The Outbound HTTP Connection configuration model SPI grants read access to the configuration only. You can make updates to the outbound HTTP connection configuration model by using the Controller SPI.
3.  [Viewing the configuration settings of the outbound HTTP connection](../dev-portlet/outbhttp_cfg_mcspi_viewcfgsets.md)  
HCL Portal provides several interfaces that you can use to retrieve configuration settings: OutboundConnectionProfile, PolicyMapping, `PolicyRule`, `CookieRule`, and PolicyVariable.
4.  [Modifying configuration settings of the outbound HTTP connection](../dev-portlet/outbhttp_cfg_mcspi_modfcfgsets.md)  
You can change configuration settings of the outbound HTTP connection by using the following interfaces: ModifiableOutboundConnectionProfile, ModifiablePolicyMapping, ModifiablePolicyRule, ModifiableCookieRule, and ModifiablePolicyVariable.
5.  [Creating and deleting configuration settings of the outbound HTTP connection](../dev-portlet/outbhttp_cfg_mcspi_crtdelcfgsets.md)  
The controller object also provides methods for creating or deleting configuration settings.

**Parent topic:**[Administration tools for configuring outbound HTTP connections](../dev-portlet/outbhttp_cfg_tools.md)

