# Modifying configuration settings of the outbound HTTP connection

You can change configuration settings of the outbound HTTP connection by using the following interfaces: ModifiableOutboundConnectionProfile, ModifiablePolicyMapping, ModifiablePolicyRule, ModifiableCookieRule, and ModifiablePolicyVariable.

You can access these interfaces by using the method `OutboundConnectionModelController.getModifiableNode()`. Changes that you make are not immediately applied at the data backend. You must confirm the changes. The following code example illustrates how you can modify configuration settings:

```
OutboundConnectionModel model; // For information about how to instantiate this model 
                               // refer to the previous examples.
OutboundConnectionModelController ctrl; // For information about how to instantiate this
                                        // controller, refer to the previous examples.
PolicyRule rule;// Refer to previous examples, how to instantiate this policy rule
System.out.println("The original URL pattern of the PolicyRule is "+rule.getUrlPattern());

// Get the Modifiable.. interface for the selected Policy rule. Change the URL pattern setting.
ModifiablePolicyRule mrule = (ModifiablePolicyRule)ctrl.getModifiableNode(rule);
mrule.setUrlPattern("http://localhost:9091/*");

// Apply the changes.
ctrl.commit();
System.out.println("The URL pattern of the PolicyRule is now "+rule.getUrlPattern());
```

**Parent topic:**[Configuring outbound HTTP connections by using the Model Controller SPI](../dev-portlet/outbhttp_cfg_mcspi.md)

**Previous topic:**[Viewing the configuration settings of the outbound HTTP connection](../dev-portlet/outbhttp_cfg_mcspi_viewcfgsets.md)

**Next topic:**[Creating and deleting configuration settings of the outbound HTTP connection](../dev-portlet/outbhttp_cfg_mcspi_crtdelcfgsets.md)

