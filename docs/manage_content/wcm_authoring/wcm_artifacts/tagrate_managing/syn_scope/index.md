# Synchronizing scopes for web content

When users are tagging or rating web content, the web content viewer provides the tagging or rating information to the portal, where it is stored. If information in the web content system changes, this change can cause the tagging and rating information that is stored in the portal to be out of sync. This issue can happen, for example, if content items are moved or category information changes. To ensure that the tagging and rating information is current, synchronize the scopes that are used for web content. You can set up automatic synchronization according to different conditions or run a manual synchronization as needed.

-   **[Synchronizing scopes when items change](wcm_tagrate_syncscope_item.md)**  
To automatically run scope synchronization whenever an item changes in the web content system, specify the tagging.syndication.enableItemModificationSynchronization property in the Web Content Manager configuration service.
-   **[Synchronizing scopes after syndication](wcm_tagrate_syncscope_synd.md)**  
To automatically run scope synchronization whenever syndication occurs, specify the tagging.syndication.enableTagSynchronization property in the Web Content Manager configuration service.
-   **[Scheduling scope synchronization](wcm_tagrate_syncscope_sched.md)**  
You can schedule scope synchronization to be run at specific times by defining the schedule with the XML configuration interface.
-   **[Synchronizing scopes manually](wcm_tagrate_syncscope_manual.md)**  
If automatic synchronization is not enabled for the scopes that are used for web content, or if you want to run synchronization outside of a scheduled synchronization period, you can manually start the synchronization process.


???+ info "Related information"  
    -   [Applying tagging and rating scopes to web content](../../../wcm_artifacts/tagrate_managing/wcm_tagrate_scope.md)
    -   [Setting service configuration properties](../../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

