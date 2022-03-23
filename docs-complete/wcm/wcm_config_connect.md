# Enabling connect tags 

Enable connect tags to reference web content components and apply customized caching to the components.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom properties**.

    **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere Integrated Solutions Console for the deployment manager when you edit configuration properties.

3.  Specify `connect.businesslogic` properties to process connect tags from any host or from specific hosts.

    -   **Process connect tags from any host**

        Add the following property:

        -   Property name: `connect.businesslogic.processunknownhosts`
        -   Value: `true`
    -   **Process connect tags from specific hosts**

        Add the following property:

        -   Property name: `connect.businesslogic.processunknownhosts`
        -   Value: `false`
        For each host for which you want to enable processing, add a property:

        -   Property name: `connect.businesslogic.hosts.hostname`
        -   Value: `true`
4.  Restart the server or cluster.


**Parent topic:**[Further configuration options ](../wcm/wcm_config.md)

**Related information**  


[Setting service configuration properties ](../admin-system/adsetcfg.md)

