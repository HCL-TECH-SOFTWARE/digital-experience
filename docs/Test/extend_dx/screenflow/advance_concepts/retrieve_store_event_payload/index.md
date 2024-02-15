# Retrieve and store event payload

In a normal portal environment, the portlets in a single dialog can exchange data through a set of well-defined events. However, you might want to include third-party portlets or older portlets that are not aligned with the normal portal environment. You can include such portlets with the HCL UX Screen Flow Manager.

For example, in a travel site, a passenger information portlet `portlet1` can emit the ID of a passenger. It emits this ID by using a JSR-286 event with the `QName passengerID`. A second portlet, car renters information portlet `portlet2` can receive the ID of the passenger, but it expects this ID to be sent through a JSR-286 event with the `QName userID`. Without extra translation, the two portlets cannot communicate with each other because the events that they exchange use different `QNames`.

The Screen Flow Manager supports two mechanisms that enable such incompatible portlets to exchange data with each other:

-   Event mappers. For more information, go to *Event Mappers*.
-   The explicit specification of dialog context \(DCX\) keys when events are associated with referenced transition endpoints.

???+ info "Related information"
    -   [Event Mappers](../../../../extend_dx/screenflow/advance_concepts/retrieve_store_event_payload/event_mappers/index.md)

