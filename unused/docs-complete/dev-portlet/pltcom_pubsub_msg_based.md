# Triggering communication 

These communication methods are based on directed communication links that pass information from a source portlet to a target portlet.

The portlet programmer defines which information a portlet can send or receive in order to participate in the communication. At run time data is passed by an event broker component across communication links that are created by portal administrators or portal users. When data is sent across a link, the target portlet is explicitly invoked to process the received information and can perform arbitrary updates as a side-effect. This is called the push model. Previously cached markup is discarded as a result of receiving an event.

Message-based communication allows more programmatic and administrative control than shared state, but also creates more overhead. If you need to coordinate many portlets and create many connections, consider using shared state instead.

-   **[Communication with persistent wires ](../dev-portlet/pltcom_pubsub_perstwire.md)**  
You can use portlet wires for communication between portlets. Portlet wires are persistent data links.
-   **[Communication with dynamic menus ](../dev-portlet/pltcom_pubsub_dyn_menu.md)**  
You can use dynamic menus for communication between portlets.
-   **[Runtime behavior ](../dev-portlet/pltcom_event_brkr.md)**  
The portal event broker subsystem provides support for inter-portlet communication with active notifications using portlet events or the cooperative programming model.

**Parent topic:**[Standard portlets publish and subscribe mechanisms ](../dev-portlet/pltcom_pubsub_model.md)

**Related information**  


[Standard portlets publish and subscribe mechanisms ](../dev-portlet/pltcom_pubsub_model.md)

