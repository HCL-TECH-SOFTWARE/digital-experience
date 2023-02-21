# Transition endpoints

Resources that are part of a screen flow which marks an endpoint, that is, the source or target of a transition are referred to as transition endpoints. Resources can be pages and portlets and they can also wrap widgets or forms. A particular page or portlet that is the active step in a screen flow is referred to as the source and the potential next steps are referred to as targets.

For example, in a travel site the Flight booking dialog contains resources such as the Passenger information portlet and Calendar portlet which wraps the Calendar widget. When the dialog defines a transition that route the user from entering Passenger information step to selecting the travel dates step, the Passenger information portlet and the Calendar portlet become the source and target of the transition.

A source can reference only one single transition-endpoint that is associated with only one single event. A target can reference multiple transition-endpoints that are associated with one or multiple events. There are different options available to reference resources.

???+ info "Related information" 
    -   [Transitions from portlets](../../../../../extend_dx/screenflow/transition_reference/trnstn_frm_ptlts_ref.md)
    -   [Transitions from dialogs](../../../../../extend_dx/screenflow/transition_reference/trnstn_frm_dlgs_ref.md)

