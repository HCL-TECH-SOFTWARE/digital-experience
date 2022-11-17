# Configuring search in a cluster

HCL Digital Experience provides two distinct search capabilities. You can use both types of search capabilities in a clustered environment.


-   **[Configuring Portal Search in a cluster](clus_psearch.md)**  
To support Portal Search in a cluster, you must install and configure a remote search service on an IBM WebSphere Application Server node that is not part of the cluster.
-   **[Configuring JCR search in a cluster](config_jcr_search_clus.md)**  
To enable search in a cluster for content that is stored in the JCR database, you must configure each server in the cluster to access a directory. JCR-based content includes content that is created with Web Content Manager or Personalization.

<!--

**Previous topic:**[Remote search service](../admin-system/srcusgrmtsrchsrv.md)

**Next topic:**[Configuring search in a portal farm](../install/config_search_farm.md)-->

???+ info "Related information:"
    - [Installing the Farm Master and setting up the support server](../../../deployment/manage/portalfarm_cfg/choose_portalfarm/settingup_with_sharedconfig/set_portal_farm_master.md)

