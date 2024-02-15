# Task dispatcher

The task dispatcher acts as a link between the Unified Task List portlet and the task providers. When an action occurs in the portlet, the task dispatcher retrieves task provider instance configurations from the task provider instance registry service and calls a getTaskList service operation on each task provider instance configuration.

You can configure the Unified Task List portlet to use a cached task dispatcher if you do not want to access the back-end systems each time an action occurs in the user interface. The cached task dispatcher uses dynamic caching in WebSphere® Application Server to store and retrieve tasks.


