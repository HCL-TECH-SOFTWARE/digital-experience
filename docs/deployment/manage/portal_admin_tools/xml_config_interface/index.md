# The XML configuration interface

Use the XML configuration interface (XML Access) for exchanging portal configurations.

???+ info "Related information"  
    -   [XML configuration interface parameters for the Web Content Viewer](../../../../manage_content/wcm_configuration/cfg_webcontent_delivery_env/wcm_config_wcmviewer_xmlaccess.md)
    -   [Configuring a Credential Vault for overlay reports](../../../../deployment/manage/monitoring/analyze_portal_usage/user_behavior_by_asa/displaying_overlay_analytics_reports/sa_asa_overlay_cfg_crd_vlt.md)
    -   [Tools for staging to production](../../../../deployment/manage/staging_to_production/overview_of_staging_to_prod/dep_tools.md)
    -   [Syndication and staging](../../../../deployment/manage/staging_to_production/updates_with_syndication/dep_up_syn.md)
    -   [Using the XML configuration interface to work with Producer definitions](../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_consumer/working_with_producer_def/using_xml_cfg_work_with_prod_def/index.md)
    -   [Using the XML configuration interface to consume portlets from a Producer portal](../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_consumer/consuming_portlets_consumer_portal/using_xml_cfg/index.md)
    -   [XML samples for creating Producer definitions](../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_consumer/working_with_producer_def/using_xml_cfg_work_with_prod_def/using_xml_cfg_create_prod_def/wsrpr_cons_crtprd_samp1.md)
    -   [Exporting a Producer definition by using the XML configuration interface](../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_consumer/working_with_producer_def/using_xml_cfg_work_with_prod_def/wsrpt_cons_expprd_xml.md)
    -   [Creating a Producer definition and consuming a portlet by a single XML script](../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_consumer/consuming_portlets_consumer_portal/using_xml_cfg/wsrpt_cons_singl_xml.md)
    -   [Work with the Portal Scripting Interface](../../portal_admin_tools/portal_scripting_interface/adpsitsk.md)
    -   [Activating and deactivating portlet applications or portlets](../../../../extend_dx/portlets_development/mng_portlets_apps_widgets/portletapps_activate.md)
    -   [Managing iWidgets in your portal](../../../../extend_dx/portlets_development/mng_portlets_apps_widgets/managing_iwidgets/index.md)
    -   [Deploying portlets common across clusters](../../../../deployment/manage/config_cluster/managing_cluster/managing_portlets_in_cluster/clusm_common_ports.md)
    -   [Planning for virtual portals](../../../../build_sites/virtual_portal/vp_planning/index.md)
    -   [The master administrator](../../../../build_sites/virtual_portal/vp_planning/vp_roles/advppln_roles_mastr_adm.md)
    -   [Administering virtual portals](../../../../build_sites/virtual_portal/adm_vp_task/index.md)
    -   [Content of a virtual portal](../../../../build_sites/virtual_portal/vp_planning/advppln_content.md)
    -   [Sub-administrators of a virtual portal and their access roles and permissions](../../../../build_sites/virtual_portal/vp_planning/advppln_content.md)
    -   [Task: create-virtual-portal](../../../../build_sites/virtual_portal/vp_reference/vp_command_ref/portal_cfg_adm_vp/advp_cfgtsk_create.md)
    -   [Filling a virtual portal with content](../../../../build_sites/virtual_portal/adm_vp_task/vp_adm_task/advp_tsk_fill_content.md)
    -   [Using the XML configuration interface to work with virtual portals](../../../../build_sites/virtual_portal/adm_vp_task/vp_adm_task/advp_tsk_fill_content.md)
    -   [Adding a new language to render localized content](../../portal_admin_tools/language_support/supporting_new_language/add_newlanguage.md)
    -   [Providing WSRP services as a Producer](../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_producer/providing_wsrp_services_as_producer/index.md)
    -   [Using the XML configuration interface to provide or withdraw a portlet](../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_producer/providing_wsrp_services_as_producer/wsrpt_prod_prvd_by_xml.md)
    -   [Exporting customized WSRP portlet instances by using the XML configuration interface](../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_producer/wsrpr_prod_xmlxp_custplt.md)
    -   [Securing the WSRP Producer by WS-Security](../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_producer/securing_wsrp_prod_portal/cfg_security_producer_portal/wsrpt_prod_sec_ws_wss.md)

## HCLSoftware U learning materials

For an introduction and a demo on DX staging, go to [Staging for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D505){target="_blank"}.

To learn how to use staging tools such as DXClient, Syndication, XMLAccess, ReleaseBuilder/Solution Installer, and ConfigEngine, go to [Staging for Intermediate Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3328){target="_blank"}. You can try it out using the [Staging Lab for Intermediate Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab.pdf){target="_blank"} and corresponding [Staging Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab_Resources.zip){target="_blank"}.
