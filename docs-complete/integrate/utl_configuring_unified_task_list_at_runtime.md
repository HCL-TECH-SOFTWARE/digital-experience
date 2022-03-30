# Configuring Unified Task List portlet at run time 

You can customize the Unified Task List portlet at run time as a HCL Portal administrator. Customizing at run time involves accessing the deployed Unified Task List to configure the portlet settings.

-   **[Accessing the configuration view ](../integrate/utl_accessing_the_configuration_view.md)**  
 Customize the Unified Task List portlet by accessing the configuration view. The configuration view contains several windows that let you perform tasks such as editing settings, configuring task provider instances and task handlers, or adding and removing filters.
-   **[Editing common settings ](../integrate/utl_editing_common_settings.md)**  
 Edit common settings from the Unified Task List portlet.
-   **[Adding, editing, and removing filters ](../integrate/utl_adding_and_removing_filters.md)**  
Filters provide specialized views for tasks. You can separate tasks according to the back-end systems where the tasks originate, or by a particular context. When you add filters, the Unified Task List portlet displays tasks that are separated according to the task provider instance. For example, you can add a filter for tasks that come from IBM® Business Process Manager so that these tasks are not displayed with other Unified Task List portlet tasks.
-   **[Localizing the task list filters ](../integrate/utl_localized_filters.md)**  
When creating new filters, it is recommended that you know before hand which filters you need to create and then create filters all at once. Creating all filters at once minimizes the times you must restart the server. The restart is required to update the filter resource bundles on the file system with the new filters and include them on the class loader. A WebSphere Application Server variable must also be created to define the name of the resource bundle to use for the localized filters.
-   **[Exposing the Business Processes to enable Task Handling Configuration ](../integrate/utl_task_handle_config.md)**  
To enable task-handling configuration data to be retrieved for a task provider instance of IBM Business Process Manager, you must first display your Business Process and Human Service data to all users. Enable task-handling configuration data if you are working with the Business Process Manager task provider in the Unified Task List.
-   **[Showing and hiding table columns ](../integrate/utl_showing_and_hiding_table_columns.md)**  
The Unified Task List portlet shows tasks in a table. The task information presented in this table includes priority, description, owner, among others. You can show or hide these table columns.
-   **[Editing shared settings ](../integrate/utl_editing_shared_settings.md)**  
 The Unified Task List portlet has shared settings that are common to all users, such as the filters that display in the user interface. You can edit these settings by accessing the portlet menu.
-   **[Changing the number of rows in the task list table](../integrate/utl_changing_the_number_of_rows_in_the_task_list_table.md)**  
 The task list table contains rows of tasks that users can select. You can edit the task list table to display a specific number of rows per page in the Unified Task List portlet. You can specify any number of rows per page, however, if there are fewer tasks than the number of rows available, the Unified Task List portlet displays only the rows that contain tasks. If there are more tasks than the number of rows available, the Unified Task List portlet displays a link to another page for those tasks.
-   **[Configuring dynamic user interface ](../integrate/utl_configuring_dynamic_user_interface.md)**  
Create a dynamic page and register it using the ConfigEngine.

**Parent topic:**[Configuring the Unified Task List portlet ](../integrate/utl_configuring_utl_portlet.md)

