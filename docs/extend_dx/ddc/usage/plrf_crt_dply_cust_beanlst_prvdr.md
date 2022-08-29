# Creating and deploying custom Digital Data Connector plug-ins

You can deploy custom Digital Data Connector \(DDC\) for HCL Portal plug-ins as plug-ins into the HCL Portal application extension registry.

The extension point ID for custom DDC plug-ins is `com.ibm.portal.wcm.plr.BeanListProvider`. Individual DDC plug-in implementations implement the `com.ibm.portal.wcm.plr.BeanListProvider` Java interface. This interface is defined in the public Digital Data Connector SPI Javadoc documentation.

Individual DDC plug-in implementations can delegate the initial bean list computation to the generic XML DDC plug-in and extend the returned bean list. They do so by modifying the bean list object that the generic XML DDC plug-in returns or by adding more computed attributes. To implement the computation logic for individual computed attributes, DDC plug-ins can use the optional `com.ibm.portal.wcm.plr.ComputedAttributeValueProvider` Java interface. If you implement this interface, the DDC framework calls the corresponding methods whenever a bean list attribute requests computed item attributes.


**Related information**  


[Application extension registry](../dev-portlet/extension.md)

