# Editing common settings 

Edit common settings from the Unified Task List portlet.

1.  Log in to HCL Portal with administrative access to the Unified Task List portlet.

2.  Access the Unified Task List configuration view and select Common Settings, which is in the navigation pane. The Common Settings window opens.

3.  Provide values for the following fields to configure the common settings:

    -   **Show Menu**

        Select this check box to display the filter menu in the Unified Task List. The filter menu displays a list of filters that segregate tasks from multiple back-end systems.

    -   **Enable Claim-Release of Tasks**

        Select this check box to let users perform claim and release operations on tasks. Users perform claim and release operations in the Unified Task List through the use of the Claim and Release buttons in the user interface. When users select a task and click **Claim**, they take ownership of the task and remove the task from the list of shared tasks. When users select a task and click **Release**, they no longer claim ownership of the task. The task then returns to the list of shared tasks. Users can also perform claim and release operations through the drag-and-drop menu that is displayed in the user interface.

    -   **Enable Business Card Integration**

        Select this check box to show user details when hovering over the owner or originator in a task list. The Unified Task List uses the people-awareness features in HCL Portal to retrieve the user details from the corresponding profile pages. To show user awareness of the owner or originator in a task list, you must configure a HCL Sametime server to interact with the HCL Portal Server.

    -   **Use Dynamic Cache**

        Select this check box to store and retrieve tasks in the WebSphere® Application Server dynamic cache service. When using the WebSphere® Application Server dynamic cache service, the task dispatcher stores and retrieves tasks in the cache for faster task loading.

    -   **Dynamic Page Extension Node UID**

        This field is required if you have task handlers that use dynamic pages for task completion. Specify the ID for the dynamic page extension node in HCL Portal. Leave the default value in this field if you do not have task handlers that use dynamic pages.

4.  Click **Save** and **Back** to return to the main portlet page.


**Parent topic:**[Configuring Unified Task List portlet at run time ](../integrate/utl_configuring_unified_task_list_at_runtime.md)

