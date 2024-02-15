# Screen Flow Manager

The HCL UX Screen Flow Manager helps operators, developers, and dialog modelers develop fine-granular, small split portlets. Learn to configure the sequence, transitions, and workflow of a set of screens.

Screen flows work like wizards and process the screens to complete the task for the user. Screen flows are completed by a single user and have a short lifetime.

For example, screen flow modelers can model flows for processing the sequence of steps that are involved in booking a trip for a travel site. Booking for a trip might include steps such as gathering traveler information, booking flight, booking hotel, and booking car. Each of these steps might include substeps such as displaying the customer information, and updating customer information. Each of these steps is presented as screens and the functions behind them are provided by portlets. These portlets are interconnected and managed by HCL Portal. The screen flow configurations route users along paths that interconnect user interface artifacts, such as forms or masks, to accomplish specific tasks. The mapping of individual screens to portlets affects both user experience and reusability. This approach provides both strict user guidance and high reusability.

Screen flows can be used together with business workflows. Long-running business processes that are run by a business workflow can trigger screen flows that are run by portal. After the screen flow completes, the portal gives the control back to the business workflow. Data can be exchanged between the business workflow and the screen flow on the portal. If a user suspends a screen flow, the portal can hand over the processed data over to the business workflow to save it.



