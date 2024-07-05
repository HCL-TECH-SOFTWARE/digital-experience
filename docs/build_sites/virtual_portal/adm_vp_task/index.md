# Administering virtual portals

View information to help you scope your HCL Portal to have multiple virtual portals.

!!! note 
    Before you start creating or administering virtual portals, read the information in *Planning for virtual portals*.

Administering virtual portals and their content comprises the following tasks:

-   Administering the portal content and resources for virtual portals
-   Administering the users for virtual portals
-   Administering content and search with virtual portals

You can use the following tools to administer your virtual portals:

-   The Virtual Portal Manager administration portlet
-   Command line tools as follows:
    -   You can use portal configuration tasks for administering virtual portals.
    -   You can use the XML configuration interface to work with virtual portals.

The following table shows how you can use these portal tools to administer virtual portals:

|Administrative task|Portlet for this task|Configuration task|XML configuration interface|
|-------------------|---------------------|------------------|---------------------------|
|Configuring the sub-administrators for a virtual portal|Access control portlets|**---**|**X**|
|Creating a virtual portal|Virtual Portal Manager|**X**|**---**|
|Filling a virtual portal with initial content|Virtual Portal Manager|---|**X**|
|Listing all virtual portals|Virtual Portal Manager|**X**|**---**|
|Modifying a virtual portal|Virtual Portal Manager|**X**|**---**|
|Deleting a virtual portal|Virtual Portal Manager|**X**|**---**|

!!! note
    The following two administrative tasks are manual tasks:
    -   Adding and configuring the user repository for the virtual portal
    -   Preconfiguring virtual portals

The following sections provide more information about these administrative tasks and how you perform them. The portal configuration tasks for administering virtual portals are documented under *Portal configuration tasks for administering virtual portals*.


-   **[Administering the portal content and resources for virtual portals](advp_adm_content.md)**  
When you create a virtual portal by using the Virtual Portal Manager portlet, the portlet also creates default portal content and resources for the virtual portal. This default content is determined by the default XML script file for initializing virtual portals. In general, you can administer portal resources for a virtual portal just like you do for a normal portal installation.
-   **[Tasks for administering virtual portals](../adm_vp_task/vp_adm_task/index.md)**  
Administering virtual portals and their content comprises the tasks described in the following topics.


???+ info "Related information"
    - [The master administrator](../vp_planning/vp_roles/advppln_roles_mastr_adm.md)
    - [Tasks for administering virtual portals](../adm_vp_task/vp_adm_task/index.md)
    - [Portal configuration tasks for administering virtual portals](../vp_reference/vp_command_ref/portal_cfg_adm_vp/index.md)
    - [The XML configuration interface](../../../deployment/manage/portal_admin_tools/xml_config_interface/index.md)
    - [Working with the XML configuration interface](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)
    - [Planning for virtual portals](../vp_planning/index.md)
    - [Separating and sharing resources between virtual portals](../vp_planning/advppln_scope.md)
    - [Preconfiguring the default content for virtual portals](../vp_mgr_portlet/preconfig_vp/advp_precfg_content.md)
    - [Virtual Portal tasks](../../../deployment/manage/migrate/next_steps/post_mig_activities/portal_task/vp_post_mig_task/index.md)

