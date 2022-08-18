---
id: srch_coll
title: Search Collections
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You can build and maintain Search Collections of web content, Web Content Manager content, and portal content. Users can then search these collections by using the portal search center. You can access Search Collections from the Manage Search portlet page to view and manage all Search Collections across various Search Services. To view and manage specific Search Collections for a specific Search Service, click the **Search Service** name from the Search Services page.

A Search Collection can have one or more content sources such as web pages, Web Content Manager content, or portal pages and portlets. The portal **Default Search Collection** combines two content sources and their related crawlers.

-   **Portal Content Source**

    The Portal Content Source contains the local portal site, where users can search for portal pages and portlets.


-   **Web Content Manager Content Source**

    The Web Content Manager Content Source allows users to search for web content managed by the Web Content Manager.


Content is retrieved for indexing through a crawler \(robot\) from the Content Sources during the Search Collection build process. The Search Collection stores keywords and metadata and maps them to their original source. It allows fast processing of requests from the Search Center portlet.

Resources can be stored on the local portal server or on remote content sources for searching. Content can be processed by the crawlers, if it is accessible through the HTTP protocol. For example, content from portal pages, the Web Content Manager, and documents that are hosted by web servers. The documents can be of different types, for example, editable text files, office suite documents, such as Microsoft and Open Office, or PDF files.

You can view and manage the search collections and their content sources in the portal from the Search Collections window. You can create a new search collection, refresh, update the information and icons, view the status of the search collections, and import and export search collections. You can also manage the content sources of the search collection.

To create a new search collection, click **New Collection** and the Create Search Collection page opens.

Refreshing the data of a search collection updates that collection by renewed crawling of all the content sources that are associated with it. When you click **Refresh**:

-   The number of documents is updated if a crawl is running or was completed.
-   Icons such as **Search and Browse the Collection** icon can appear if a crawl was completed on a collection since the last refresh.

    **Note:** The icons for some tasks are only available if the current user can do the specific task on the search collection.

-   The information is refreshed if another administrator updated search collections at the same time,

To view the status of the search collection, click the collection name in the list of search collections. You can see the Content Sources in the search collection listed. You can also see the name and the search collection status information of the selected search collection. The status fields show data that changes over the lifetime of the search collection. If you have a faulty search collection in your portal, the portlet shows a link to that faulty collection.

**Note:** If you delete the search collection before an upgrade to a higher version of HCL, make sure you export the search collection for later import before you delete it. For details, see *Migrating search collections*.

-   **[Creating a search collection](crting_srch_coll.md)**  
Create a search collection for your search service.
-   **[Importing and exporting search collections](import_export_srch_coll.md)**  
You can export search collections from a source portal and import them into a target portal with the Import and Export Collection option. When you export and import a search collection, you are exporting and importing the configuration information and not the actual content from the search index. You might want to export or import verified search collections from a test portal to a production portal; from a local portal to a configuration with remote search; from a single portal to a portal cluster environment; or to stage your portal to production by using the Release Builder. The export and import operations are beneficial when you upgrade to software levels that are not compatible with the data storage format of older versions of the software.
-   **[Manage the content sources of a search collection](mng_cntnt_source.md)**  
To work with the content sources of a search collection, click the collection name in the list of search collections. Manage Search lists the Content Sources and the Search collection status information of the selected search collection. A search collection can be configured to cover more than one content source. From the Content Sources window, you can refresh, view status, and configure schedulers and crawlers for a specific content source.
-   **[Creating a content source](nw_cntnt_src.md)**  
When you create a new content source for a search collection, that content source is crawled and the search collection is populated with documents from that content source. You can determine where the index crawls and what information it fetches.

