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

    !!! note
        The property file must be encoded in the ISO 8859-1 character encoding format.


-   **[Task: create-virtual-portal](advp_cfgtsk_create.md)**  
Portal ConfigEngine task that creates a new virtual portal.
-   **[Task: assign-virtual-portal-admin-group](advp_cfgtsk_assign_adm.md)**  
Portal ConfigEngine task that assigns a group of administrators to a virtual portal.
-   **[Task: list-all-virtual-portals](advp_cfgtsk_list.md)**  
Portal ConfigEngine task that lists all virtual portals.
-   **[Task: modify-virtual-portal](advp_cfgtsk_modify.md)**  
Portal ConfigEngine task that modifies a virtual portal.
-   **[Task: delete-virtual-portal](advp_cfgtsk_delete.md)**  
Portal ConfigEngine task that deletes a virtual portal.
-   **[Using a single configuration task to administer multiple virtual portals](advp_cfgtsk_single.md)**  
You can administer multiple virtual portals by running a single configuration command. The following configuration tasks support working with multiple virtual portals: create-virtual-portal, delete-virtual-portal, and modify-virtual-portal. Use the -DvirtualPortalList parameter with task to create, delete, or modify multiple virtual portals at the same time.


???+ info "Related information:"
    - [Deploying the initial release](../../../../../deployment/manage/staging_to_production/creating_deploying_initial_release/dep_deploy.md)
    - [Deploying the differential release](../../../../../deployment/manage/staging_to_production/creating_deploying_diff_release/index.md)
    - [Administering virtual portals](../../../adm_vp_task/index.md)
    - [Planning for virtual portals](../../../vp_planning/index.md)
    - [Configuring](../../../../search/manage_search/search_collection/creating_content_source/configuring.md)
    - [Creating a virtual portal](../../../mng_vp/h_virtual_create.md)

