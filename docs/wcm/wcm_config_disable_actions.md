# Disabling Workflow Actions 

Disable workflow action on servers that do not require workflows to be processed, such as a subscriber. This strategy can improve performance and reduce the number of versions that are created for each item.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom properties**.

    **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere Integrated Solutions Console for the deployment manager when you edit configuration properties.

3.  Add a configuration setting named `disableWorkflowAction`.

    1.  Use a comma to separate the workflow action names that you want to disable. For example: `disableWorkflowAction=ScheduledMoveAction1,ScheduledMoveAction2`

        **Note:** Workflow action names are case-sensitive.

    2.  To disable all workflow actions on the server, use this setting: `disableWorkflowAction=*`

4.  Restart the server or cluster.


**Parent topic:**[Further configuration options ](../wcm/wcm_config.md)

