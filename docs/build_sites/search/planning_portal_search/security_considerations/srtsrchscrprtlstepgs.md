# Searching on secured portal sites and pages and content management items

For search on a secured local portal site, Portal Search provides a pre-configured search collection. You can also set up your own search collection for searching your portal site.

If you want to set up your own search collection for searching your portal site, you must apply special security considerations. Create a dedicated crawler user ID. Then, give that user ID access permission to the portlets and portal pages that you want to be available for search by users. For detailed information, refer to *Customizing your search collection for secured portal pages*.

!!! note
    1.  HCL Web Content Manager documents can be searched by portal users, as they are secured by Portal Access Control. Users can search documents to which they have the required access permissions on sites where search is enabled. For details about content security, refer to *User roles and access*. For information about configuring Portal Search on Web Content Manager, refer to *Indexing web content*.
    2.  Set the preferred language of the portal site crawler user ID to match the language of the portal site search collection that it crawls. If you set the language after you started a crawl, you must reset the portal site collection. Refer to *Creating or resetting the portal site collection*.



???+ info "Related information:"
    - [Customizing your search collection for secured portal pages](../../searching_local_portal/cfg_search_portal_site/srtconfgownsrchsec.md)
    - [Resetting the default search collection](../../portal_search/administer_portal_search/searching_crawling_portal_sites/srtcrtprtlstecllc.md)
    - [User roles and access](../../../../deployment/manage/security/controlling_access/wcm_security/wcm_cms_access/wcm_security_items.md)
    - [Indexing web content](../../indexing_webcontent/index.md)

