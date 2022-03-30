# Adding a task handler 

The task handler defines what the Unified Task List Portlet does when a user selects a task to advance a workflow. The task handler determines how the Unified Task List Portlet connects to the tasks that the users must complete.

You can configure task handlers to do one of the following actions:

-   Use the HCL Portal property broker to open a portlet where users can complete the task. The portlet that opens can be placed on the same portal page as the Unified Task List portlet or a different portal page.
-   Use dynamic portal pages, or task pages, to open task processing and task-supporting portlets.
-   Provide an external URL that starts a web application.

1.  Log in to HCL Portal with administrative access to the Unified Task List portlet.

2.  Access the Unified Task List portlet configuration view and select **Task Handling** from the navigation menu. The Task Handling window opens.

3.  Select **Add**. The Task Handling Configuration window opens.

4.  Provide values to **Task Provider Instance**, **Application Name** , and**Name Space** **Task Type**.

5.  Select the **Connection Method** for the task handler

    -   **Dynamic Portal Page**

        When you select Dynamic Portal Page, you must specify the unique ID in the **Unique ID of Portal Page** field.

    -   **External URL**

        When you select External URL, you must specify the URL in the **External URL Pattern** field.

    -   **Property Broker Event**

        No additional parameters are needed when you select **Property Broker Event**.

6.  Select **Submit**

7.  Select **Save**.


**Related information**  


[Configuring an IBM Business Process Manager ](../integrate/utl_configuring_business_process_manager.md)

[Configuring the Unified Task List portlet with Forms Experience Builder ](../integrate/utl_configuring_unified_task_list_with_forms_experience_builder.md)

