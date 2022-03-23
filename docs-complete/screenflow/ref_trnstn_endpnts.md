# Transition endpoints

Resources that are part of a screen flow which marks an endpoint, that is, the source or target of a transition are referred to as transition endpoints. Resources can be pages and portlets and they can also wrap widgets or forms. A particular page or portlet that is the active step in a screen flow is referred to as the source and the potential next steps are referred to as targets.

For example, in a travel site the Flight booking dialog contains resources such as the Passenger information portlet and Calendar portlet which wraps the Calendar widget. When the dialog defines a transition that route the user from entering Passenger information step to selecting the travel dates step, the Passenger information portlet and the Calendar portlet become the source and target of the transition.

A source can reference only one single transition-endpoint that is associated with only one single event. A target can reference multiple transition-endpoints that are associated with one or multiple events. There are different options available to reference resources.

-   **[Referencing portlets ](../screenflow/ref_ptlts.md)**  
A transition endpoint can reference portlets as the target of a screen flow transition.
-   **[Reference pages](../screenflow/ref_pgs.md)**  
A transition endpoint can reference pages as the target of a screen flow transition.
-   **[Referencing dialogs ](../screenflow/ref_dlgs.md)**  
A transition endpoint can reference dialog as the source of a screen flow transition.
-   **[Referencing single resource across different dialogs](../screenflow/ref_sngle_rsrc_diff_dlgs.md)**  
Often, a single resource is used across different dialogs. For example, such a resource can be a generic date selection portlet. In a travel site, such a page can be used to select the departure date and the return date for the Flight booking dialog and also for the Car booking dialog.
-   **[Referencing through metadata markers ](../screenflow/ref_mtadta_mrkrs.md)**  
Pages and portlets can be referenced not only by their unique names but can also be referenced through metadata markers.
-   **[Mixed referencing](../screenflow/mxd_ref.md)**  
The mechanisms for referencing a single page, a single portlet, multiple pages, or multiple portlets by unique names or metadata markers can be mixed.
-   **[Limitations when referencing resources](../screenflow/lmt_ref_resrs.md)**  
Not all mechanisms for referencing resources are allowed to be used as part of both, a transitions source and a transitions target.

**Parent topic:**[Creating dialog definitions](../screenflow/crting_dlg_dfntn.md)

**Related information**  


[Transitions from portlets ](../screenflow/trnstn_frm_ptlts_ref.md)

[Transitions from dialogs ](../screenflow/trnstn_frm_dlgs_ref.md)

