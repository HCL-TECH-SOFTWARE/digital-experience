# WebSphere® Integrated Solutions Console


The WebSphere® Integrated Solutions Console allows you to view and modify configuration related to the underlying J2EE functionality of HCL Digital Experience. The WebSphere® Integrated Solutions Console is also called IBM Console, WAS console, WAS Admin Console, or Websphere AdminConsole. Learn how to access the [WebSphere® Integrated Solutions Console](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=console-starting-logging-off-administrative). You can find the default URLs you can use in the following subsection.

Alternatively, you can use configuration command line tools like wsadmin instead if the changes need to be scripted. 

For more information, go to [IBM WebSphere Application Server Documentation](https://www.ibm.com/docs/en/was/9.0.5). 

## Default URLs

To access different administration user interfaces during the configuration process, you can use default URLs if needed.

Use the following default URLs to access the HCL WebSphere® Integrated Solutions Console and the Configuration Wizard:

-   **WebSphere® Integrated Solutions Console**

    http://yourserver:10038/ibm/console

    https://yourserver:10041/ibm/console

-   **Configuration Wizard**

    http://yourserver:10200/ibm/wizard

    https://yourserver:10202/ibm/wizard

- Kube: https://<host>:443/ibm/console

- Docker: https://<host>:10041/ibm/console

- Docker Compose: https://<host>:443/ibm/console or https://<host>:10041/ibm/console

- Default Standalone Local: https://<host>:10041/ibm/console

- Cluster: Can be freely configured. Sample ports are 9443 or 9041.

!!! note
    You can choose different ports for **Local install** and **Cluster** in your environment.