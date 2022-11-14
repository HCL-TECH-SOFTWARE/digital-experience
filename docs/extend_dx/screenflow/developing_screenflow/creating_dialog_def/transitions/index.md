# Transitions

Transitions define how to route a user from one subdialog to another. As subdialogs are represented by pages or portlets, they reference transition-endpoints. For example, in a travel site, a user can be routed from the Passenger information subdialog or portlet to the Calendar subdialog or portlet.

Transitions are consisted of two main subsections. One subsection defines a source and the other subsection defines a target. Sources and targets both reference transition-endpoints that are associated with events.

The following steps show how the user is routed from one subdialog to the other.

-   The user is routed from the subdialog that is represented by the transition-endpoint. This transition-endpoint is referenced by the source.
-   After the source's transition-endpoint emits the associated event, the user is routed from that subdialog.
-   The user is routed to the subdialog that holds one or multiple transition-endpoints that are referenced by the target.
-   The transition-endpoints that are routed from the source are then fed with the associated events of the target endpoints.

You can configure transitions in multiple ways, for example

-   With single portlets as source, you can configure it to transition to targets such as single portlets, multiple portlets through single or multiple transition endpoints, single page, or mixed resources.
-   Similarly you can configure single portlets, multiple portlets, single page or mixed resources to become the source and transition to the target single portlet.

For more information and example code samples of these transitions, see *Transitions reference* section.

-   **[Start and end transitions](../screenflow/strt_end_trnstnts.md)**  
When the referenced transition endpoint and event matches the source of a start transition, dialogs are started. Start transitions differ from other transitions only in that they carry the attribute type, with the value start. Similarly, end transitions carry the attribute type, with the value end.
-   **[Start transitions and wildcards](../screenflow/strt_trnstn_wldcrds.md)**  
You can define a dialog to start if one of several source transition endpoints emits a specific event. In this case, the start of the dialog depends only on the event and not on the referenced transition endpoint and event.
-   **[Start transitions and special events](../screenflow/strt_trnstn_spl_evnt.md)**  
You can define a dialog to starts if a special start event is emitted from a specific source or from an arbitrary source.
-   **[End transitions and special events](../screenflow/end_trnstns_spl_evnt.md)**  
Similar to the special start event, end transitions can emit a special end event.
-   **[Other special transitions](../screenflow/othr_spl_trnstns.md)**  
The UX Screen Flow Manager supports several more special transitions, or more precisely, transition endpoints.
-   **[Exclusive transitions or dialogs](../screenflow/exclsve_trnstns.md)**  
Exclusive dialogs are special forms of dialogs. They are also referred to as null or one-step dialogs. They consist of a single transition only. You can use them to go into a dialog, run only one transition, and use it to end the dialog immediately afterward.
-   **[Dialog chaining and nesting](../screenflow/dlg_chng_nstng.md)**  
Dialogs can start other dialogs. Dialogs that start other dialogs are referred to as calling dialogs and the dialogs that are being started are referred to as called dialogs. Two different options are available to complete this action such as dialog chaining and dialog nesting.
-   **[Rules and restrictions](../screenflow/rulesnrestrictions.md)**  
When you model a transition certain rules and restrictions apply.
-   **[Execution priority](../screenflow/exe_priority.md)**  
You can and must explicitly model and enforce a deterministic behavior for the transitions. Even if the entire set of dialogs is deterministic, the emission of an event by a particular portlet can trigger two different transitions of two different dialogs. Therefore, you must explicitly model the intended behavior of the transitions.
-   **[Deploy dialog sets by using the XML configuration interface](../screenflow/dply_dlgsts_xmlcfgint.md)**  
You can use the portal XML configuration interface \(XMLAccess\) to work with dialog sets.

**Parent topic:**[Creating dialog definitions](../screenflow/crting_dlg_dfntn.md)

**Related information**  


[Developing user interface artifacts](../screenflow/dev_ui_artifcts.md)

[Referencing dialogs](../screenflow/ref_dlgs.md)

