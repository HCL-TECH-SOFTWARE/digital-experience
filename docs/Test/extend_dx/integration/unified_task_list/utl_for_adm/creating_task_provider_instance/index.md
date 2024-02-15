# Create a task provider instance


A task provider instance contains a set of parameters that are required to connect to a business process management system. It also includes a unique ID to map the parameters to the appropriate task provider.

The Unified Task List Portlet supports integration with specific versions of IBM® WebSphere® Process Server, IBM Business Process Manager, and IBM WebSphere Lombardi Edition. For version information, see the detailed system requirements.

Front-end developers create custom input forms to capture context-specific information that is required to connect to the business process management system. Context-specific information includes information such as server host names, communications ports, and more. To set up the task provider instance, consult with the front-end developer to determine which variables you must specify to configure the task provider instance.

1.  Log in to HCL Portal with administrative access to the Unified Task List portlet.

2.  Access the Unified Task List configuration view and select **Task Provider Instances**, which is in the navigation pane.

    The Task Provider Instances window opens.

3.  Select **Add**. The Task Provider Instance Configuration window opens.

4.  In the **Provider** field, select a task provider.

5.  Enter a name for the task provider instance and select **Enabled** if you want to enable the task provider instance, then click **Next**.

    A new window opens an input form for the context variables.

6.  Specify the context variables or connection parameters, as appropriate, and click **Save**.

    The Task Provider Instances window opens.

7.  From the Task Provider Instances window, click **Save**.


-   **[Configuring a WebSphere Lombardi Edition task provider instance](utl_configuring_a_webshere_lombardi_edition_task_provider.md)**  
 This specific provider surfaces tasks for WebSphere Lombardi Edition in the Unified Task List portlet.
-   **[Configuring an IBM Business Process Manager task provider instance](utl_cfg_bpm_tsk_prvdr.md)**  
This task provider retrieves tasks from IBM Business Process Manager and surfaces them in the Unified Task List portlet.
-   **[Configuring a Forms Experience Builder task provider instance](../creating_task_provider_instance/cfg_feb_task_provider_instance/index.md)**  
The task provider retrieves Forms applications from Forms Experience Builder and surfaces them in the Unified Task List portlet.
-   **[Delete, enable, or disable a task provider instance](utl_del_task_provider_inst.md)**  
Use the Unified Task List Portlet to manage task provider instances.

