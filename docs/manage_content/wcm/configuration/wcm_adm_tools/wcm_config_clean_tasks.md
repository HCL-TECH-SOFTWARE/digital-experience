# Configuring Web content cleanup tasks

These background tasks are configured to automatically delete or purge web content items from your system. Using these automated cleanup tasks helps you to save space on your server and maintain server performance.

These tasks are configured by using the WebSphere® Integrated Solutions Console.

1.  Log in to the WebSphere Integrated Solutions Console.
2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom properties**.

    **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere Integrated Solutions Console for the deployment manager when you update configuration properties.

3.  Add these tasks to the list of custom properties.

**Note:** Enable these tasks only on syndicator servers and use syndication to propagate any changes to each subscriber.

## Auto Deleted Item Purge Task

This task purges all deleted items older than a set number of days, hours, minutes, or seconds. To enable this task, add the following custom properties:

-   **versioning.service.auto.purge.old.deleted.items.enabled**

    To enable this task, set this custom property to true. By default, this task runs once a day and purges all deleted items older than 30 days.

    You can disable this task on a [scoped virtual portal](wcm_config_scoped_vp.md) by using this format: versioning.service.auto.purge.old.deleted.items.enabled.vp.vpname=false

-   **versioning.service.auto.purge.old.deleted.items.threshold**

    This setting overrides the default threshold setting of 30 days. Valid intervals are d for days, h for hours, m for minutes, and s for seconds. For example, to purge items older than six days, you set a value of 6d.

    You can override this setting on a [scoped virtual portal](wcm_config_scoped_vp.md) by using this format: versioning.service.auto.purge.old.deleted.items.threshold.vp.vpname

-   **versioning.service.auto.purge.old.deleted.items.interval**

    This setting defines how often the task runs. Valid intervals are d for days, h for hours, m for minutes, and s for seconds. For example, to run this task once every 8 hours, you set a value of 8h. This setting cannot be scoped to a virtual portal.

-   **versioning.service.auto.purge.old.deleted.items.offset**

    This property defines when the task will run after a server is restarted. Valid offsets are d for days, h for hours, m for minutes, and s for seconds. For example, to start this task twenty minutes after a server is restarted, you set a value of 20m. This setting cannot be scoped to a virtual portal.


## Auto Published Project Delete Task

This task deletes all published projects that have been idle since a set number of days, hours, or seconds. To enable this task, add the following custom properties:

-   **project.auto.delete.published.projects.enabled**

    To enable this task, set this custom property to true. By default, this task runs once a day and deletes all published projects that have been idle for more than 30 days.

    You can disable this task on a [scoped virtual portal](wcm_config_scoped_vp.md) by using this format: project.auto.delete.published.projects.enabled.vp.vpname=false

-   **project.auto.delete.published.projects.threshold**

    This setting overrides the default threshold setting of 30 days. Valid intervals are d for days, h for hours, m for minutes, and s for seconds. For example, to delete published projects that have been idle for more than six days, you set a value of 6d.

    You can override this setting on a [scoped virtual portal](wcm_config_scoped_vp.md) by using this format: project.auto.delete.published.projects.threshold.vp.vpname

-   **project.auto.delete.published.projects.interval**

    This setting defines how often the task runs. Valid intervals are d for days, h for hours, m for minutes, and s for seconds. For example, to run this task once every 8 hours, you set a value of 8h. This setting cannot be scoped to a virtual portal.

-   **project.auto.delete.published.projects.offset**

    This property defines when the task will run after a server is restarted. Valid offsets are d for days, h for hours, m for minutes, and s for seconds. For example, to start this task twenty minutes after a server is restarted, you set a value of 20m. This setting cannot be scoped to a virtual portal.


**Parent topic:**[Web content administration tools](../wcm/wcm_maintain.md)

