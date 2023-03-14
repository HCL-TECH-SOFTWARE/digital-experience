# Working with the XML configuration interface

You can use the XML configuration interface to export and import HCL Digital Experience configurations. This way you can configure selected features or areas of your portal. You can also transfer a complete configuration from one portal to another.

## Using the XML configuration interface

HCL Digital Experience provides a highly configurable framework of services to accommodate the different scenarios that portals of today need to address. The framework allows convenient replacement of service implementations as well as modification of the configuration of each service. When you work with the XML configuration interface, the results, especially of configuration imports or updates, are influenced by the property settings in these configuration services. This includes changes that you have made to these settings. For more detail about the configuration services, refer to the topics about the portal service configuration.

There are two ways to use the XML configuration interface to work with portal configuration data:

-   By using the XML configuration command line client. The XML configuration command line client provides all the XML configuration interface functions.
-   By using administration portlets you can export and import XML configurations.

Both options are described in the following sections.

## Terminology

These topics use the following terminology in the context of the XML configuration interface:

-   **export**

    This term can have either of the following meanings, depending on the context:

    -   In the administrative context: a human administrative task, for example exporting a portal configuration or a part of it
    -   In the context of the XML configuration interface: an XML request and action, for example to export the data of a portal configuration or a part of it.
-   **import**

    This term represents only the human task in the administrative context, for example importing a portal configuration or a part of it. It has no corresponding XML request type. In the context of the XML configuration interface, an import is performed by specifying the update request type, together with the create or update action for the resources that are to be imported.


The topics in the documentation describe the portal XML configuration interface. Internally within the portal, this tool is named XML Access.

## Sample XML scripts

The following topics mention several sample files suitable for different purposes of portal configuration using XML. Before you use them, read the other topics about the XML configuration interface carefully. These sample files are documented here for reference purposes only. If you want to use the XML samples for work on your portal configuration, use the files provided in your portal installation, as they might be more up to date than this documentation. The XML sample files are located in the following directory of your HCL Digital Experience installation:

-   UNIX™Linux™: PortalServer_root/doc/xml-samples
-   Windows™: PortalServer_root\doc\xml-samples

???+ info "Related information"  
    -   [Scheduling scope synchronization](../../../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/tagrate_managing/syn_scope/wcm_tagrate_syncscope_sched.md)
    -   [Synchronizing scopes manually](../../../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/tagrate_managing/syn_scope/wcm_tagrate_syncscope_manual.md)
    -   [Encrypting sensitive data](../../../../../build_sites/search/planning_portal_search/security_considerations/srtencrpsnstdt.md)
    -   [Configuring a Credential Vault for overlay reports](../../../../../deployment/manage/monitoring/analyze_portal_usage/user_behavior_by_asa/displaying_overlay_analytics_reports/sa_asa_overlay_cfg_crd_vlt.md)
    -   [Working with analytics tags](../../../../../deployment/manage/monitoring/analyze_portal_usage/user_behavior_by_asa/analytics_tags_site_promo/analytics_tags/sa_asa_anal_tags_work.md)
    -   [Working with site promotions](../../../../../deployment/manage/monitoring/analyze_portal_usage/user_behavior_by_asa/analytics_tags_site_promo/site_promo/sa_asa_site_prom_ui.md)
    -   [Using the XML configuration interface to administer analytics tags](../../../../../deployment/manage/monitoring/analyze_portal_usage/user_behavior_by_asa/analytics_tags_site_promo/sa_asa_anal_xml.md)
    -   [Exporting and importing static pages](../../../../../build_sites/create_sites/building_website/static_content/including_static_content_pages/export_import_static_page/index.md)
    -   [Staging to production list](../../../../../deployment/manage/staging_to_production/overview_of_staging_to_prod/dep_stage_check.md)
    -   [Creating the initial release](../../../../../deployment/manage/staging_to_production/creating_deploying_initial_release/dep_cir.md)
    -   [Setting service configuration properties](../../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)
    -   [Portal service configuration](../../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/index.md)
    -   [Credential Vault Service](../../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/security_svc/srvcfgref_cred_vault.md)
    -   [Using the XML configuration interface to work with Producer definitions](../../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_consumer/working_with_producer_def/using_xml_cfg_work_with_prod_def/index.md)
    -   [Using the XML configuration interface to consume portlets from a Producer portal](../../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_consumer/consuming_portlets_consumer_portal/using_xml_cfg/index.md)
    -   [Using the XML configuration interface to administer tags and ratings](../../../../../build_sites/tagging_rating/tag_rate_xml.md)
    -   [XML samples for creating or removing language definitions](../../../portal_admin_tools/language_support/supporting_new_language/adxmlsmp_lang.md)
    -   [XML samples for creating Producer definitions](../../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_consumer/working_with_producer_def/using_xml_cfg_work_with_prod_def/using_xml_cfg_create_prod_def/wsrpr_cons_crtprd_samp1.md)
    -   [Exporting a Producer definition by using the XML configuration interface](../../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_consumer/working_with_producer_def/using_xml_cfg_work_with_prod_def/wsrpt_cons_expprd_xml.md)
    -   [Creating a Producer definition and consuming a portlet by a single XML script](.././../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_consumer/consuming_portlets_consumer_portal/using_xml_cfg/wsrpt_cons_singl_xml.md)
    -   [Activating and deactivating portlet applications or portlets](../../../../../extend_dx/portlets_development/mng_portlets_apps_widgets/portletapps_activate.md)
    -   [Filtering content for tagging](../../../../../build_sites/tagging_rating/howto_tagging_rating/tag_rate_adm_filtr_cont.md)
    -   [Importing federated tags and resources](../../../../../build_sites/tagging_rating/tag_rate_federation/fed_admin/tag_fed_admin_import.md)
    -   [Cleaning up federated tags and resources](../../../../../build_sites/tagging_rating/tag_rate_federation/fed_admin/tag_fed_admin_cleanup.md)
    -   [Administering virtual portals](../../../../../build_sites/virtual_portal/adm_vp_task/index.md)
    -   [Using a new host name for an existing virtual portal](../../../../../build_sites/virtual_portal/vp_reference/vp_limitations/advpref_limits_new_hostname.md)
    -   [Modifying a virtual portal](../../../../../build_sites/virtual_portal/adm_vp_task/vp_adm_task/advp_tsk_modify.md)
    -   [Using the XML configuration interface to work with virtual portals](../../../../../build_sites/virtual_portal/vp_reference/vp_command_ref/advp_xml.md)
    -   [Providing WSRP services as a Producer](../../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_producer/providing_wsrp_services_as_producer/index.md)
    -   [Using the XML configuration interface to provide or withdraw a portlet](../../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_producer/providing_wsrp_services_as_producer/wsrpt_prod_prvd_by_xml.md)
    -   [Exporting customized WSRP portlet instances by using the XML configuration interface](../../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_producer/wsrpr_prod_xmlxp_custplt.md)
    -   [Securing the WSRP Producer by WS-Security](../../../../../extend_dx/portlets_development/usage/wsrp/portal_wsrp_producer/securing_wsrp_prod_portal/cfg_security_producer_portal/wsrpt_prod_sec_ws_wss.md)

