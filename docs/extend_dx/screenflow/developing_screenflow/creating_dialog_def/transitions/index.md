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

???+ info "Related information" 
    -   [Developing user interface artifacts](../../dev_ui_artifcts.md)
    -   [Referencing dialogs](../transition_endpoints/ref_dlgs.md)

