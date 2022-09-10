# Delayed cleanup of deleted portal pages

Get an overview of the cleanup service for portal pages and their dependent resources.

Portal resources, such as pages, components or portlet instances are kept persistent in the portal database. When an administrator deletes a page, all its derived pages and dependent resources and content are deleted with it. The actual deletion can take considerable time, depending on the size of the portal and the number of resources affected by the deletion. Therefore, if the deletion takes place immediately after the user completes the deletion task, this might impact portal performance for users. On the other hand, if the deletion is delayed and scheduled for an off peak time, it will not affect portal response time and thereby user experience.

The delayed deletion of pages is performed by a cleanup service.

**Related information**  
[Creating and configuring search collections](../../../../build_sites/search/portal_search/administer_portal_search/setup_search_collections/srrcreatconfig.md)<br>
[Managing the content sources of a search collection](../../../../build_sites/search/portal_search/administer_portal_search/setup_search_collections/mng_content_sources_search_collections/index.md)