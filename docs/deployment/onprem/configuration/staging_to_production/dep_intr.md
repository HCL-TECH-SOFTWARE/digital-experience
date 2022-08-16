# Staging to production

During portal solution development, the solution is initially developed, tested, and refined on one server or a limited number of servers. The solution is deployed later on live systems, referred to as the production environment. The process of moving the solution from the development environment to the production environment is called staging.

Staging is required at multiple times during the development cycle of a solution. Each release of the solution is created on one system and then moved to the production system. During the development lifecycle, multiple solution releases are created and brought into production. Multiple solution releases are built on the previous product release.

Staging is only possible between the same product release. In contrast, upgrading from one release to a newer release is called migration.

HCL Digital Experience and HCL Web Content Manager solutions can consist of many artifacts. These artifacts include portlets, themes and skins, portlet services, page layouts, wires, portlet configurations, portlet data, web content, and personalization rules. Staging helps you move those artifacts to the production environment in a controlled way.

-   **[Overview of staging to production](../deploy/dep_ovr_concepts.md)**  
Review the topics in the overview section to understand all the requirements to successfully stage your production environment.
-   **[Creating and deploying the initial release](../deploy/dep_initial.md)**  
Build the initial Portal Application Archive \(PAA\) file, prepare the servers for the deployment, and then deploy the initial release to your production servers.
-   **[Creating and deploying a differential release](../deploy/dep_differential.md)**  
Create a differential release of your existing Portal Application Archive \(PAA\) file. Then, deploy your changes to your production servers. Use Syndication to move HCL Web Content Manager content to your production servers.
-   **[Parameters to customize the release](../deploy/dep_cust_paa.md)**  
You can use these parameters to customize the build-initial-release-paa task when you are creating the initial or differential release.
-   **[Updates with syndication](../deploy/dep_up_syn_main.md)**  
After setting up your initial staging and production servers and deploying the initial release, you can use the syndication feature of HCL Web Content Manager to update content in web content libraries. If managed pages are enabled, syndication also ensures that all required page artifacts are transferred along with the content.
-   **[Staging and external security managers](../deploy/dep_stageextac.md)**  
Staging to production where external security managers \(ESM\) are used is complex and needs special consideration. The following section discusses considerations of the impact of external security managers on the staging process. External security managers can be used to externalize authentication and authorization decisions from the portal. Externalization of authentication decisions to an external security manager has no impact on the staging to production functionality. Management of authorizations by an external security manager has an impact on the staging to production scenario. Using an external security manager for authorization decisions requires that the same external security manager is used to manage authentication to the portal.
-   **[Manual staging to production process](../deploy/mans2p_intro.md)**  
 HCL Digital Experience provides two solutions through staging to production; manual and automated. For more information about the automated solution, see Staging to production. The following sections guide you through the manual solution for a stand-alone server. Two stand-alone servers are used to represent a development and production environment, which corresponds to the host name used in the examples.

**Parent topic:**[HCL Digital Experience 9.5 Product Documentation](../welcome/wp95_welcome.md)

**Related information**  


[Multiple tier environments](../migrate/mig_multiple_envs.md)

