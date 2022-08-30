# Cooperative portlets overview

Cooperative portlets communicate by using properties that are produced and consumed by portlet actions. Each action on a portlet can be associated with a single input property and zero or more output properties. An additional WSDL deployment descriptor defines which portlet actions are enabled for communication. It also provides information about how the property value is transferred to or from the action, for example as a request attribute or a JSR 168 render parameter.

This means that cooperative portlets do not require extra APIs for communication, but can use the same interfaces that handle normal action processing. Action processing in a target portlet often does not actually need to distinguish between an action initiated by a portlet URL and an action initiated by the transfer of a property value from another portlet.

**Note:** Cooperative portlet WSDLs are not evaluated for JSR 286 portlets, and therefore JSR 286 portlets do not support this model of re-using portlet actions for portlet communication.

For more detailed information about the cooperative portlet programming model refer to the documentation about the cooperative portlet programming model. For more information about how to declare actions and properties in cooperative portlet WSDL descriptors.

## Packaging considerations for cooperative portlets

When you write cooperative portlets, you need to observe some special guidelines for packaging and deployment descriptors. In the case of standard portlets, the function of the wrapper is provided through a portlet filter, and no extra run time code has to be included in the portlet WAR file.


