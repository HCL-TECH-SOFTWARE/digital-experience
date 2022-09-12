# Overview of the Unified Task List portlet

Review concepts about the Unified Task List portlet to understand the different elements.

-   **[Task providers](../integrate/utl_task_providers.md)**  
 Task providers are services that access back-end systems to retrieve tasks. The task providers also use a Web Experience Factory Transform builder to provide a uniform data set that displays in the Unified Task List user interface.
-   **[Task provider instance](../integrate/utl_task_provider_instance.md)**  
Task provider instances are services that access back-end systems to retrieve tasks. Task provider instances reside in the Task Provider Instance Registry \(TPIR\) and contain the parameters that you specify in task providers.
-   **[Task Provider Instance Registry](../integrate/utl_task_provider_instance_registry_(tpir).md)**  
 The Task Provider Instance Registry \(TPIR\) contains task provider instance configurations. A task provider instance configuration contains a set of parameters that are required to connect to a back-end system. It also contains a unique ID to map the parameters to the appropriate task provider. The Task Provider Instance Registry service is in IBM WebSphere Application Server and stores the task provider configurations in an XML variable. The Task Provider Instance Registry service also provides a service to get and modify task provider instances.
-   **[Task dispatcher](../integrate/utl_task_dispatcher.md)**  
 The task dispatcher acts as a link between the Unified Task List portlet and the task providers. When an action occurs in the portlet, the task dispatcher retrieves task provider instance configurations from the task provider instance registry service and calls a getTaskList service operation on each task provider instance configuration.
-   **[Task handler](../integrate/utl_task_handler.md)**  
 Task handlers define what the Unified Task List portlet does when users select a task to advance a workflow. The task handlers determine how the Unified Task List portlet connects to the tasks that the users must complete.


