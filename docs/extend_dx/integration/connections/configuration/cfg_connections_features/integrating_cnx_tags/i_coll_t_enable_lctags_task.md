# Configuring task to retrieve tags

When you integrate HCL Connections with your portal server, the portal uses a task to retrieve tags and related resources from the various HCL Connections features \(such as activities, blogs, bookmarks, communities, files, forums, profiles, and wikis\). Then, the portal integrates the tags in the portal tag cloud. You can schedule the task to retrieve the tags to run periodically.

The piece of content \(POC\) resolver is required to render tagged HCL Connections resources within HCL Connections portlets. The instructions for installing the HCL Connections portlets included a step to copy the POC resolver to the portal.

Depending on your database system, it might be beneficial to reorganize some tables in the community domain. You can also gather current catalog statistics for the tables after an import of HCL Connections data is done. This action helps the SQL optimizer determine an efficient access path. Review your database system documentation for instructions on how to accomplish this task. The database tables that are most affected by an import include:

-   CP\_CUSTOMRESOURCE
-   CP\_CATEGORY
-   CP\_RESOURCE\_TAG
-   LOC\_DATA
-   LOC\_DATA\_LOD

You can schedule the FederationTaskHandler to periodically retrieve \(import\) HCL Connections data. For more information about scheduling the FederationTaskHandler, see *Administering tag federation*.

1.  Using XML access, run com.ibm.wps.cp.tagging.federation.taskhandler.FederationTaskHandler


During the import of the tags if you exceed the number of available connections, increase the value for the configuration parameter max-connections-per-host for the corresponding policy in the Ajax Proxy configuration file proxy-config.xml.


???+ info "Related information:"
    - [Administering tag federation](../../../../../../build_sites/tagging_rating/tag_rate_federation/fed_admin/index.md)
    - [CP Configuration Service for tagging and rating](../../../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cp_cfg_svc/index.md)
    - [Using the XML configuration interface to administer tags and ratings](../../../../../../build_sites/tagging_rating/tag_rate_xml.md)

