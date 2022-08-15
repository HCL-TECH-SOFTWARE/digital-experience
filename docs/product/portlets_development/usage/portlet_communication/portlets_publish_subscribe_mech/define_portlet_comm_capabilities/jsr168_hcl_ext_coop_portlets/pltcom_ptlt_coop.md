# JSR 168 HCL extension for cooperative portlets

Cooperative portlets represent an HCL Portal-specific API for publish/subscribe communication between portlets.

You can use cooperative portlet support with either HCL or JSR 168 portlets, but you cannot use it for communication between portlets of different API types.

For development of new portlets, use the standards based JSR 286 portlet events instead. They provide equivalent and compatible functionality. For more information about moving from cooperative portlets to JSR 286 events, refer to the documentation about interoperability between events and cooperative portlets.

-   **[Cooperative portlets overview](../dev-portlet/pltcom_interop_ovw.md)**  
Cooperative portlets communicate by using properties that are produced and consumed by portlet actions. Each action on a portlet can be associated with a single input property and zero or more output properties. An additional WSDL deployment descriptor defines which portlet actions are enabled for communication. It also provides information about how the property value is transferred to or from the action, for example as a request attribute or a JSR 168 render parameter.
-   **[Cooperative portlet programming model](../dev-portlet/wpsc2aprogmodel.md)**  
View information on how properties and actions are registered, how properties are generated and received, and some available APIs.
-   **[Packaging, deploying and compiling cooperative portlets](../dev-portlet/wpsc2apackage.md)**  
When packaging, deploying, and compiling cooperative portlets, refer to these considerations on aspects of the process such as creating deployment descriptors and packaging the WAR file.
-   **[WSDL reference for cooperative portlets](../dev-portlet/wpsc2awsdl.md)**  
WSDL is often used in the context of web services, in order to define interfaces implemented by a web service. The elements in the WSDL used by click-to-action are described, along with extensions to the <binding\> element and the WSDL Extensions schema.

**Parent topic:**[Define portlet communication capabilities](../dev-portlet/def_portlet_comm_cap.md)

