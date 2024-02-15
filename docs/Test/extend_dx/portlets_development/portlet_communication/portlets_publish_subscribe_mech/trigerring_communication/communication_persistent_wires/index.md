# Communication with persistent wires

You can use portlet wires for communication between portlets. Portlet wires are persistent data links.

The following two communication techniques are based on persistent portlet wires. You have to configure the wires in a separate step before the portlets can communicate:

-   **Portlet events**

    This supports JSR 286 portlets only. The Java Portlet Specification 2.0 defines a model for communication by publishing and subscribing based on portlet events. This model is supported in HCL Portal Version 8.5. Portlet events can have complex objects as payload, if they provide an XML binding. With portlet events, HCL PortalVersion 8.5 also supports communication links between remote \(WSRP V2.0\) portlets.

-   **Cooperative portlets**

    Only JSR 286 portlets support this communication technique. HCL Portal Version 8.5 still supports the HCL specific cooperative portlet programming API that was provided by previous releases and is known as the Property Broker. However, if you develop new portlets, use the portlet events based on the JSR 286 standard instead. It provides equivalent and compatible functionality. For more information about moving from cooperative portlets to JSR 286 events, refer to Interoperability between events and cooperative portlets.


Note that you can create communication links in both directions between JSR 286 portlets and JSR 168 portlets by using the cooperative portlet API. However, that API does not support communication links between HCL and JSR 168 portlets.

-   **[Portlet wires](pltcom_wires.md)**  
Portlet Wires are used to direct the information flow between portlets that communicate using JSR 286 Portlet events or the WebSphere Portal Cooperative portlets API.


