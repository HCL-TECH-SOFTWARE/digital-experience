# Developing advanced PAA file applications

Developers can create their own advanced Portal Application Archive \(PAA\) file. The advanced PAA file contains custom content. The developers can then use the Configuration Wizard to add on their applications to their HCL Digital Experience environment.

Review the following requirements before you create your own advanced Portal Application Archive \(PAA\) file:

-   **[The component level sdd.xml file](../config/si_component_sdd.md)**  
When you run the install-paa task, the Solution Installer examines each component to verify whether an sdd.xml file is included for that component. If an sdd.xml file is not found, one is generated with the information gathered from the directory parsing step.
-   **[Add custom code to a Portal Application Archive \(PAA\) file](../config/add_custom_code.md)**  
Solution developers can create applications that use resource types that the Solution Installer does not automatically generate. The Solution Installer handles many resource types. However, there are some resource types that have no mechanism for accurate installation procedures. Your application might require additional configuration settings for installation. Those applications require custom code for the installation.
-   **[Updating a Portal Application Archive \(PAA\) file](../config/update_paa_dev.md)**  
Before Version 8.5, updating the PAA file content in the portal server was not a simple task. It usually involved removing and uninstalling the previous version, then installing or deploying an updated version of the PAA file. This work can lead to a number of problems because it might break existing links between pages or portlets that were created outside of the PAA file deployment. Since Version 8.5, the Solution Installer can handle this type of function. Only some of the PAA file resources might change. Therefore, it does not make sense to overwrite the full set of resources on the system, but only those resources that changed since the new PAA file was released.
-   **[ConfigEngine extension points for the Solution Installer](../config/extpnts_si.md)**  
Some ConfigEngine extension points are required when you install an application from a Portal Application Archive \(PAA\) file.
-   **[Tasks and extension points for custom code](../config/ant_tasks_paa.md)**  
You can use the following tasks and extension points when you create custom code to work with the ConfigEngine framework.

**Parent topic:**[Developing](../dev/developing_parent.md)

**Related information**  


[Developing basic PAA file applications](../config/dev_sol_app.md)

