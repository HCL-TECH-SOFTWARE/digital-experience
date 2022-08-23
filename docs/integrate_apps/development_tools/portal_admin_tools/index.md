# Portal administration tools

Learn about the different tools that you can use to administer your portal.

You can administer and configure portal resources by using one of the following tools:

-   DXClient
-   The portal administration portlets.
-   The portal XML configuration interface.
-   The Portal Scripting Interface.
-   The portal ReleaseBuilder.
-   The Configuration Wizard.
-   The ConfigEngine

The portal provides several administration tools for limited purposes. These tools are documented in the context where they can be used. An example is the SLCheckerTool, which you can use to delete orphaned data.

## Security considerations

HCL Digital Experience provides a flexible delegation model for administering portal resources. This means that a master administrator can delegate administration and configuration work to sub-administrators or other users as required in a highly detailed manner. For example, the master administrator can delegate the responsibility and rights for different administrative tasks to different departments in the same business. These departments can be for developing, deploying, and operating software solutions that are based on HCL Portal.

The delegation model is implemented by access control, which works by access control decisions, which guard the execution of administrative tasks that manipulate portal resources. Users can complete a task only if they have the access permissions that are required for that task. Access permissions are implemented as user rights on actions that are related to portal resources, not on the resources themselves. For more information, refer to the documentation about access control.

The extent to which the portal delegation model and access control is tied in varies between the portal administration tools. Security might therefore influence which tool you use for a certain purpose. Refer to the [*Securing*](../security/securing_wp.md) Help Center topics for more information.

## Overview of DXClient

DXClient is a tool that helps developers and administrators manage tasks, such as uploading one or more portlets or Script Applications, from source development environments to target HCL DX 9.5 deployments. This tool is capable of taking artifacts developed locally and deploying them to DX 9.5 servers deployed to supported on-premises platforms in standalone, cluster, or farm-topologies and supported Kubernetes platforms. Refer to the [DXClient](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md) Help Center topics for more information.

## Overview of administration portlets

Portal administrative users can use the administration portlets for the following tasks:

-   Completing administrative tasks and actions on portal resources, depending on the access rights that the administrative user has on those resources. These tasks include:
    -   Configuring individual portal resources.
    -   Configuring individual portal resources, together with their dependent resources. For example, this configuration can be pages and the pages that are derived from them.
-   Giving other users, for example sub-administrators, limited access rights on selected portal resources. These sub-administrators can then complete administrative tasks that their access rights allow. As the master administrator, you can widen or limit that extent by modifying the access rights for these users on the portal resources. This way, you can delegate administrative tasks as required.
-   Deploying your own custom developed artifacts, such as portlets, themes, or skins.

You cannot use the administration portlets to complete scripted or automated administration or configuration tasks.

For more information, refer to the documentation about the [Portal administration portlets](adpltadm.md)that are supplied with HCL Portal.

## Overview of the XML configuration interface \(XML Access\)

The XML configuration interface works as follows:

-   The XML configuration interface provides a batch processing interface for portal configuration updates. It allows you to export an entire portal configuration or parts of a configuration, for example-specific pages, to an XML file. You can then re-create the exported configuration from such a file on another portal.
-   You access the XML configuration interface by using a command-line tool. This command-line client is a small separate program that connects to the server by using an HTTP connection. You can therefore use it remotely.
-   You can use the XML configuration interface to process portal resources, but not portal actions or tasks.
-   You can use the XML configuration interface to process the configuration of portal resources that exist, for example pages. In this context, the XML configuration interface processes derived resources, but it does not automatically create them.
-   The XML configuration interface does not reflect the access control authorization model with delegated administration. You need only the access permission to use the XML configuration interface. An administrator who works with the XML configuration interface does not need access permission for the portal resources that are processed by the XML request. \(The reason for this is that access control gives users access permissions on actions and not on resources.\)

You can use the XML configuration interface for the following tasks:

-   Exporting, importing, and updating complete or partial portal installations. These tasks can be for the following purposes:
    -   Transfer or migration between workstations
    -   Back up of the portal configuration
    -   Overview of the portal configuration.
    -   Cloning of a portal. To complete this step, you use the object ID generation mode of the XML configuration interface.
-   Copying parts of a configuration, such as specific pages, from one portal to another.
-   Transferring portal configurations from one installation to another. You do this transfer by exporting and importing the portal configuration. This usage scenario includes the case where you try out a new portal configuration on a test portal for evaluation, and then transfer it to a production portal in a separate step by using the portal configuration interface.
-   Creating a portal configuration file by XML export. You complete this step by an XML export.
-   Installing extra resources on a portal.
-   Completing recurring administration tasks in an automated and reproducible manner.
-   Completing these administrative tasks remotely, that is, from another server through an HTTP connection.

Security: A user who uses the XML configuration interface to complete administrative tasks needs only the access permission on the virtual resource XML\_ACCESS. The user does not need access rights on the portal resources that are updated by the XML configuration interface.

Use of the XML configuration interface for the following tasks is limited:

-   Delegating administrative tasks, that is, having other administrative users with specific access permissions complete these tasks.
-   Limiting administrative tasks to a particular user or to particular portal resources.

For more information, refer to the section [About the XML configuration interface](adxmlabt.md).

The XML configuration interface is also used for release staging, that is, for staging a portal from development through test to production. For more information about staging your portal to production, refer to the topics about [Staging to production](../deploy/dep_intr.md) and [Deploy DX components using HCL DXClient and DXConnect](../containerization/ci_cd.md) for non-containerized platforms and containerized platforms and the ReleaseBuilder.

## Overview of ReleaseBuilder

To generate or stage follow-on releases of HCL Digital Experience portals, configurations, and artifacts need to be moved between systems. ReleaseBuilder enables management of release configurations independent of user configurations.

Release configuration data are exported to XML files that can be imported using the XML configuration interface \(XMLAccess\). Using ReleaseBuilder it is possible to stage release configurations between two portals. This allows you to track which configuration entities were removed, added, or changed compared to the previous release generated from a given portal and to apply these differential updates to another portal. Detecting the differences between one configuration and another of the same portal server creates differential updates. A third configuration or "diff", generated by ReleaseBuilder, represents the changes made between the two configurations. The third configuration can be used to apply not only addition and update modifications but also deletions to the target server. This allows two portal servers, for example, a staging server and a production server, to remain in synch. ReleaseBuilder is designed to eliminate the need to generate complete XMLAccess exports to move a partial configuration or to manually create XML response files to export a partial configuration. ReleaseBuilder also helps to prevent the problem of configuration bloat on the target server.

For more information, refer to the section [ReleaseBuilder](../deploy/dep_rbabout.md).

## Overview of the Portal Scripting Interface

The Portal Scripting Interface works as follows:

-   The Portal Scripting Interface is a command-line tool.
-   The Portal Scripting Interface behaves just like the portal administration portlets. It provides delegated administration in the same manner as the portal administration portlets and access control. To work with Portal Scripting Interface, a user needs access permission on the HCL Portal and on the portal resources that the user administers.
-   It allows implicit derivation during administrative work. This means when you modify a portal resource, the Portal Scripting Interface creates the derivations of that resource in the same process, depending on your access rights.

You can use the Portal Scripting Interface for the following tasks:

-   Making fine-tuned changes to a portal configuration.
-   Transferring configuration updates in a safe and controlled manner, and without disturbing the production portal. For example, this process can happen by the following steps:
    1.  On a development system, a development team develops configuration updates for the portal, and the script for running these updates.
    2.  After the script is completed, a test team tests both the script and the new configuration.
    3.  After the script and the new configuration are tested and approved, they can be applied to the production portal.
    4.  An operator team processes the scripts that update the production portal.

The Portal Scripting Interface has the following advantages:

-   Security: The user IDs and access roles of the involved teams provide separation between the responsibilities for the subtasks:
    -   The development and test team do not have access rights on the production portal.
    -   The operator who runs the script must have access rights on the resources that are created and updated by the script. Therefore, if you limit the access rights for that user as required, the script cannot affect other resources unintentionally.
-   Safety and availability of the production portal:
    -   The scripts can be tested and verified before it is put into production.
    -   After the scripts are tested and verified, they perform the update in a reliable way. Human errors that might happen when you are working with the administration portlets are not possible.
    -   The production portal does not even require an Administration page for performing the update.
    -   The update can be performed over night without disturbing production.

Use of the Portal Scripting Interface is limited in the following way:

-   The Portal Scripting Interface offers only a subset of the functionality of the portal administration portlets. For details, refer to the [Portal Scripting Interface](ad_psi.md) command reference and [Portal Scripting Interface Examples](examples.md).

## Overview of Configuration Wizard

Use the Configuration Wizard to set up stand-alone servers and new deployments, create clusters, migrate and update to new versions, and add new capabilities to existing deployments.

In the Configuration Wizard, you answer questions about the environment that you are configuring. Based on your answers, the wizard prompts you for custom values that are needed to configure your environment. Finally, the wizard generates custom steps and scripts to set up your environment.

For more information, refer to the section [Configuration Wizard](../config/cw_overview.md).

## Overview of ConfigEngine

The ConfigEngine allows various configuration tasks to be executed that change major DX and WAS configuration. Some configurations can cause conflicts between Portal resources or with other web modules deployed into the WebSphere Application Server. You can check for conflicts by using ConfigEngine validation targets. You cannot access the ConfigEngine remotely. The ConfigEngine pages are documented in the places where it is used, for example, the import and export of web content: [Exporting and importing a web content library.](../wcm/wcm_config_wcmlibrary_export.md) It is also used and may be extended in the Solution Installer. See [ConfigEngine extension points for the Solution Installer.](../config/extpnts_si.md)

A few tasks are exposed via the user interface in the ConfigWiard. For more information, refer to the section [Configuration Wizard](../config/cw_overview.md).

-   **[Portal administration portlets](../admin-system/adpltadm.md)**  
Administration portlets are supplied with HCL Digital Experience. Use them to perform administration tasks and actions on portal resources, give other users limited access rights on selected resources, and deploy custom portlets, themes, or skins.
-   **[The XML configuration interface](../admin-system/admxmlai.md)**  
Use the XML configuration interface \(XML Access\) for exchanging portal configurations.
-   **[Portal Scripting Interface](../admin-system/ad_psi.md)**  
You can use the Portal Scripting Interface to configure your portal by running scripts from a command line.


**Related information**  


[Securing](../security/securing_wp.md)

[Portal administration portlets](../admin-system/adpltadm.md)

[About the XML configuration interface](../admin-system/adxmlabt.md)

[ReleaseBuilder](../deploy/dep_rbabout.md)

[Portal Scripting Interface](../admin-system/ad_psi.md)

[Deleting and adding portlets - Examples](../admin-system/examples.md)

[Configuration Wizard](../config/cw_overview.md)

[Exporting and importing a web content library](../wcm/wcm_config_wcmlibrary_export.md)

[ConfigEngine extension points for the Solution Installer](../config/extpnts_si.md)

