# Uninstalling the Digital Experience software

Uninstalling the Digital Experience (DX) software is a multiple step process and the method you use is dependent upon your configuration. Removing HCL Portal in a single-server configuration is different from removing HCL Portal from a cluster. Manual uninstallation instructions are provided for a single-server configuration in case of an error situation.

!!!note
    Uninstalling HCL DX version 9.5 does not remove the Practitioner Studio or Woodburn Studio Theme applications.

    After Practitioner Studio and Woodburn Studio are installed, neither of their .ear files are removed from the WebSphere Administration Console. When you upgrade HCL DX to CF17 or later and you have removed HCL DX version 9.5, the upgrade will fail because the upgrade configuration tasks use these .ear files to take actions that are valid only for version 9.5. If HCL DX version 9.5 is uninstalled from the environment, you must manually uninstall the Practitioner Studio Theme and Woodburn Studio Theme applications from the WebSphere Administration Console to successfully upgrade your CF version.  

-   **[Restrictions on moving a node to a stand-alone configuration](remove_node.md)**  
In a working cluster, all nodes share a common database. If you want to remove a node from a cell to use the node in a stand-alone configuration, some restrictions apply.
-   **[Preparing to uninstall](prepare_uninstall.md)**  
You must prepare your system before you uninstall your HCL Digital Experience environment. For example, add passwords to the properties files. You must also decide to keep or discard the database information.
-   **[Performing the uninstallation](uninst_portal.md)**  
This page provides the details of how to uninstall HCL Digital Experience.
