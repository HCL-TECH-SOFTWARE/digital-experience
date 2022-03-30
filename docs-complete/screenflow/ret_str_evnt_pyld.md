# Retrieve and store event payload 

In a normal portal environment, the portlets in a single dialog can exchange data through a set of well-defined events. However, you might want to include third-party portlets or older portlets that are not aligned with the normal portal environment. You can include such portlets with the HCL UX Screen Flow Manager.

For example, in a travel site, a passenger information portlet `portlet1` can emit the ID of a passenger. It emits this ID by using a JSR-286 event with the `QName passengerID`. A second portlet, car renters information portlet `portlet2` can receive the ID of the passenger, but it expects this ID to be sent through a JSR-286 event with the `QName userID`. Without extra translation, the two portlets cannot communicate with each other because the events that they exchange use different `QNames`.

The Screen Flow Manager supports two mechanisms that enable such incompatible portlets to exchange data with each other:

-   Event mappers. For more information, go to *Event Mappers*.
-   The explicit specification of dialog context \(DCX\) keys when events are associated with referenced transition endpoints.

-   **[Dialog context keys](../screenflow/dlg_cntxt_kys.md)**  
The dialog context \(DCX\) acts like the transient memory of a dialog. It maintains contextual information that is passed from one portlet to subsequent portlets and provides the information to all subsequent portlets. Data that is stored in the dialog context \(DCX\) is stored only for the lifetime of a user session. If a user logs out of the portal or the user session times out, the current dialog instance, all suspended dialog instances, and all related data are lost.
-   **[Event Mappers](../screenflow/evnt_mprs.md)**  
In more complex scenarios, adapting only the event names or QNames might not be enough. Sometimes you might need to transform the payload.
-   **[Dialog chaining and nesting DCX keys and event mappers](../screenflow/dlg_chng_nstng_dcxkys.md)**  
In context of dialog chaining or nesting, DCX keys and mappers never influence another dialogs DCX segment. When a transition part of a calling dialog uses a DCX key or a mapper it influences only the data that is stored in the calling dialog's DCX segment and not the called dialog's segment. Similarly, when a transition part of a called dialog uses a DCX key or a mapper it influences only the data that is stored in the called dialog's DCX segment and not the calling dialog's segment.

**Parent topic:**[Advanced concepts](../screenflow/adv_cncpts.md)

**Related information**  


[Event Mappers](../screenflow/evnt_mprs.md)

