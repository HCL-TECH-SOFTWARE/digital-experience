# Portal configuration tasks for administering virtual portals

You can use configuration tasks for administering virtual portals.

HCL Portal provides the following configuration tasks that you can use to perform the following work with virtual portals:

-   Create virtual portals
-   List all virtual portals
-   Modify a virtual portal
-   Delete a virtual portal.

Before you use these configuration tasks, read the topics about *Planning for virtual portals* and *Administering virtual portals* carefully. For details about the configuration program and about how to use the configuration tasks see *Configuring*.

You pass the parameters in the parameter list for each configuration task as appropriate. You do this by either of the following methods:

-   Specifying the parameter and value that is preceded by -D on the command line.
-   Defining them in the file wkplc.properties.

    **Note:** The property file must be encoded in the ISO 8859-1 character encoding format.


-   **[Task: create-virtual-portal](../admin-system/advp_cfgtsk_create.md)**  
Portal ConfigEngine task that creates a new virtual portal.
-   **[Task: assign-virtual-portal-admin-group](../admin-system/advp_cfgtsk_assign_adm.md)**  
Portal ConfigEngine task that assigns a group of administrators to a virtual portal.
-   **[Task: list-all-virtual-portals](../admin-system/advp_cfgtsk_list.md)**  
Portal ConfigEngine task that lists all virtual portals.
-   **[Task: modify-virtual-portal](../admin-system/advp_cfgtsk_modify.md)**  
Portal ConfigEngine task that modifies a virtual portal.
-   **[Task: delete-virtual-portal](../admin-system/advp_cfgtsk_delete.md)**  
Portal ConfigEngine task that deletes a virtual portal.
-   **[Using a single configuration task to administer multiple virtual portals](../admin-system/advp_cfgtsk_single.md)**  
You can administer multiple virtual portals by running a single configuration command. The following configuration tasks support working with multiple virtual portals: create-virtual-portal, delete-virtual-portal, and modify-virtual-portal. Use the -DvirtualPortalList parameter with task to create, delete, or modify multiple virtual portals at the same time.

**Parent topic:**[Virtual portals command reference](../admin-system/advpref_cmd.md)

**Related information**  


[Deploying the initial release](../deploy/dep_deploy.md)

[Deploying the differential release](../deploy/dep_deploy_diff.md)

[Administering virtual portals](../admin-system/advp_adm.md)

[Planning for virtual portals](../admin-system/advppln.md)

[Configuring](../config/configuring_parent2.md)

[Creating a virtual portal](../admin-system/advp_tsk_create_vp.md)

