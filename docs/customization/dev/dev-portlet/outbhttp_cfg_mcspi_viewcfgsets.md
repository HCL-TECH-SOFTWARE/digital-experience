# Viewing the configuration settings of the outbound HTTP connection

HCL Portal provides several interfaces that you can use to retrieve configuration settings: OutboundConnectionProfile, PolicyMapping, `PolicyRule`, `CookieRule`, and PolicyVariable.

For a complete reference of the functions that these interfaces provide, read the Javadoc API. The following code example shows how you can retrieve configuration settings of a policy variable:

```
PolicyVariable pvar;// refer to previous examples, how to instantiate this policy variable

System.out.println ("The policy variable is "+pvar.getName()+", the type is "+pvar.getType());
if (pvar.getType() == VariableType.Endpoint) {
   System.out.println("The value is "+pvar.getEndpointValue());
} else {
   System.out.println("The values are:\n");
   for (String svalue : pvar.getDynamicPolicyValues()) {
       System.out.println(svalue);
   }
}
```

**Parent topic:**[Configuring outbound HTTP connections by using the Model Controller SPI](../dev-portlet/outbhttp_cfg_mcspi.md)

**Previous topic:**[Obtaining the Controller SPI](../dev-portlet/outbhttp_cfg_mcspi_obtstrlrspi.md)

**Next topic:**[Modifying configuration settings of the outbound HTTP connection](../dev-portlet/outbhttp_cfg_mcspi_modfcfgsets.md)

