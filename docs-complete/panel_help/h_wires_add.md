# Adding a wire 

Learn how to add a wire.

**Prerequisites:**

1.  If you create a cross-page wire, make sure that the target portlet has global targets defined. Refer to [Defining global targets](h_wires_setglobact.md) for more information.
2.  Before you create a wire, select the matching mode. The matching mode specifies the criteria that determine whether a wire can be created or not. For details refer to [Selecting the matching mode](h_wires_selmatch.md).

To create a wire, proceed as follows:

1.  From the table for adding a new wire, select an option from each of the following dropdown lists:

    -   **Source portlet**

        The portlet that sends the information to other portlets on the page. You can only select portlets on the page that provide information for other portlets.

    -   **Sending**

        The type of information that the portlet is capable of sending.

    -   **Target page**

        The page that contains the communication target. The drop down list contains only peer pages that have global targets defined. If the required page is not listed, select **More**. Then select the required page or search for the target page.

        **Note:** If a target page with no global targets defined is selected for cross-page wires, you will not be able to select target portlets or communication targets.

    -   **Switch page**

        This flag is relevant for cross-page wires only. Use it to disable and enable the redirect to the target page of the wire. This flag does not have any influence on the actual processing of the wire target action or event. If multiple cross-page wires that point to different pages are invoked at the same time, make sure that only one of these has the page switch flag set. You need to do this to determine unambiguously to which target page the user will be directed.

    -   **Target portlet**

        The portlet that receives the information from the source. Only portlets that can process the **Sending** information are shown.

    -   **Receiving**

        The action that the portlet can perform or the event that the portlet can process after receiving the information. Only actions that can handle the selected information are shown.

2.  You can also select to create private wires for personal use instead.

    By default, wires that you create are public wires for all users if you have the required privileges. If you do not have the privileges required to create public wires, you can only create private wires.

3.  When you have completed your changes, click the **Add new wire** icon. The new wire appears in a list of all wires on the page each time you edit the wires for the page.


**Related information**  


[Configuring a Forms Experience Builder task provider instance ](../panel_help/utl_configuring_form_experience_builder_task_provider.md)

[Configuring the Coach portlets for WebSphere Lombardi Edition and WebSphere Business Process Manager ](../panel_help/utl_configuring_websphere_lombardi_edition_coach_portlets.md)

[Configuring an IBM Business Process Manager ](../integrate/utl_configuring_business_process_manager.md)

[Configuring the Unified Task List portlet with Forms Experience Builder ](../integrate/utl_configuring_unified_task_list_with_forms_experience_builder.md)

