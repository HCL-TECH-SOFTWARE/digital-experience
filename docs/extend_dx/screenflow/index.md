# Screen Flow Manager

The HCL UX Screen Flow Manager helps operators, developers, and dialog modelers develop fine-granular, small split portlets. Learn to configure the sequence, transitions, and workflow of a set of screens.

Screen flows work like wizards and process the screens to complete the task for the user. Screen flows are completed by a single user and have a short lifetime.

For example, screen flow modelers can model flows for processing the sequence of steps that are involved in booking a trip for a travel site. Booking for a trip might include steps such as gathering traveler information, booking flight, booking hotel, and booking car. Each of these steps might include substeps such as displaying the customer information, and updating customer information. Each of these steps is presented as screens and the functions behind them are provided by portlets. These portlets are interconnected and managed by HCL Portal. The screen flow configurations route users along paths that interconnect user interface artifacts, such as forms or masks, to accomplish specific tasks. The mapping of individual screens to portlets affects both user experience and reusability. This approach provides both strict user guidance and high reusability.

Screen flows can be used together with business workflows. Long-running business processes that are run by a business workflow can trigger screen flows that are run by portal. After the screen flow completes, the portal gives the control back to the business workflow. Data can be exchanged between the business workflow and the screen flow on the portal. If a user suspends a screen flow, the portal can hand over the processed data over to the business workflow to save it.

-   **[Developing screen flows](../screenflow/dev_scrnflow.md)**  
To develop screen flows you need to create user interface artifacts, interconnect the artifacts and deploy the artifacts.
-   **[Advanced concepts](../screenflow/adv_cncpts.md)**  
Learn about the advanced concepts of the HCL UX Screen Flow Manager.
-   **[User interface components](../screenflow/ui_compnts.md)**  
In a default HCL Portal installation, the Dialog Stack and Dialog State Display portlets are deployed. The following topics describe how these portlets function.
-   **[Configuration options](../screenflow/cfg_opt.md)**  
To change the overall behavior of the HCL UX Screen Flow Manager, several configuration options are available. You specify the options as Resource Environment Provider \(REP\) properties.
-   **[Staging and migration](../screenflow/stg_mig.md)**  
For staging or migration purposes, you can use the portal XML configuration interface \(XMLAccess\) to transfer HCL UX Screen Flow Manager related data from one system to another.
-   **[Transitions reference](../screenflow/ref_trnstntns.md)**  
You can configure transitions in multiple ways. For example, with single portlets as source, you can configure it to transition to targets such as single portlets, multiple portlets through single or multiple transition endpoints, single page, or mixed resources. Similarly, you can configure single portlets, multiple portlets, single page, or mixed resources to become the source and transition to the target single portlet. The following reference topics show the code samples for these transitions.

**Parent topic:**[Developing](../dev/developing_parent.md)

