# Searching and crawling Portal and other sites

You can configure your local Portal site and crawl remote Portal sites so that they are searchable by users. Run crawlers against other external websites to make them searchable by local portal users.

Users of your Portal can search across various types of sites. In addition to searching the local Portal site, you can crawl remote Portal sites, and external websites, to make search results from those sites available to your local Portal users. Examples of search scenarios include:

-   Users of your Portal search your own local Portal site. This can include public and secure pages of your Portal.
-   Users of your Portal search the Web Content Manager collection provided with the Portal. This includes all Web Content Manager sites and libraries,
-   Users of your Portal site search other Portal sites. This works only for public pages of the other Portals.
-   Users of your Portal search external websites such as yahoo.com or google.com or cnn.com. When you run a crawler against external websites, you can collect and display external search results next to results from your local Portal site.
-   External users search your Portal site. This works only for public pages of your Portal.

-   **[Resetting the default search collection](../admin-system/srtcrtprtlstecllc.md)**  
Under certain circumstances, you might want to change the configuration of the portal site search collection. In this case, you must re-create the collection, as search collections cannot be modified.
-   **[Crawling a remote portal site](../admin-system/srcsrchngpubportpgs.md)**  
Configure Portal Search to crawl and index a remote, public portal site.
-   **[Crawling an external site using a seedlist provider](../admin-system/srtseedlistcreate.md)**  
The seedlist crawler is a special HTTP crawler that can be used to crawl external sites which publish their content using the seedlist format. The seedlist format is an ATOM/XML-based format specifically for publishing application content, including all its metadata. The format supports publishing only updated content between crawling sessions for more effective crawling. You can configure the seedlist crawler with general parameters, filters and schedulers, then run the crawler.

**Parent topic:**[Administering Portal Search](../admin-system/srtadmsrch.md)

