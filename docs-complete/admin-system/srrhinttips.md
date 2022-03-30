# Hints and tips for using Portal Search 

View some useful tips for using Portal Search.

## Content Model has only one search collection

Currently, the Content Model Search Service has only one search collection. This search collection is provided with the installation by default. You cannot modify this default Content Model search collection or create more search collections under the Content Model Search Service. The content model search service is listed because you can include it in scopes.

## Using the Search Center with external search services with different languages

In order to use external search services such as Google and Yahoo! with an English search keyword, a URL such as the sample URL mentioned in the Search Center portlet help for configuring the portlet works fine as is: http://www.google.com/search?q=. However, if you search in other languages, consult the documentation of the remote search service that you use to ensure that the web interface is set up and used appropriately for the language that you use for your search. This can avoid problems with the displayed results, depending on the combination of languages set for HCL Portal, your browser, and the search.

## Dynamic portal pages are not added to the search seedlist

Dynamic HCL Portal pages are not added to the Portal Search seedlist. Dynamic pages can have portlets, and portlets are added to the seedlist; therefore, if such pages are added to the seedlist, users get duplicate result list items. If you want to make HTML on a page searchable, create a static portal page and add the HTML. The static page is then added to the seedlist and listed among search results. For more detailed information about static and dynamic pages, see *Creating and adding static content* and *Dynamic user interfaces*.

## Search collections unavailable in cluster if failover occurs

If a cluster member in a cluster fails, users who were using the affected cluster member when the failover occurred can no longer access search collections. This problem can occur with horizontal scaling when a node fails or with vertical scaling when a particular cluster member fails.

Users who are logged in to the cluster member that failed must log out of HCL Portal and then log back in before they are able to access search collections again.

## Search can return documents based on metadata

Search can return documents that are based on metadata of these documents, not just on words that are found in the fields or actual text of the document. It might appear to Portal Search users that their searches return documents that do not appear to match the search criteria. Metadata for documents is also indexed for search. Therefore, if the metadata of documents matched the search criteria, these documents are also returned as results for the search. Metadata works as designed and is usually considered to be of benefit.

## Documents from deleted content source can remain available under scope

If you delete a content source, then the documents that were collected from this content source will remain available for search by users under all scopes which included the content source before it was deleted. These documents will be available until their expiration time ends. When you create the content source, you can specify the expiration time by modifying the **Links expire after \(days\)** field in the General Parameters tab.

## Documents from deleted web content library can remain available in the search collection

When you delete a web content library, you must also delete the corresponding entries from the search collection. When a web content library is deleted and crawled, deleting the corresponding crawler deletes the entries from the search index. If you use one Web Content Manager content source, which automatically crawls all web content libraries, then delete and re-create the content source, or you can select **Regather documents from Content Source**. This step deletes all existing documents in the content source from previous crawls and then starts a full crawl on the content source. Documents that were indexed before, but no longer exist in the content source are removed from the collection.

**Note:** If you plan on deleting web content libraries frequently, then it is suggested to define one content source per web content library. When that library is deleted, only the respective content source needs to be deleted as well.

## Portal Search portlets are not compatible with WSRP

The Portal Search portlets cannot be provided as WSRP services, as some additional and more advanced HCL Portal concepts and features are not reflected by the current WSRP standard yet. These Portal Search portlets include Manage Search and the Search Center.

## Default Portal Search Service and its collections show in the portal default language

The search administration portlet Manage Search lists the Default Portal Search Service and its collection Portal Content or other collections in the default portal language and not in the language that the user selected as preferred language for the portal or set in the browser. For example, if the portal default language is set to English and the user selected German as the preferred portal language or set the browser language to German, the Default Portal Search Service and its collections show in English.

## Virtual portals have separate search services and collections

Search services and search collections are separate for individual virtual portals and are not shared between individual virtual portals. Set up separate search services and separate search collections for each individual virtual portal. These collections can be used to crawl and search the same set of documents.

-   **[Hints and tips for improving quality of Portal Search results ](../admin-system/srrhinttips_improve_quality_search.md)**  
There are three options available to improve the quality of search results and thus the overall search experience for your site visitors. The three options are using the Suggested Links portlet, changing the default query operator from Or to And, and applying boost factors to specific metadata fields.
-   **[Hints and tips for Portal Search crawls ](../admin-system/srrhinttips_crawl.md)**  
View some useful tips about Portal Search crawls. For example, crawling can require extended memory and time, depending on your Portal Search environment and configuration.
-   **[How Portal Search handles special characters when indexing ](../admin-system/srrhinttips_spechars.md)**  
Portal Search indexes words that are composed of consecutive literals, that is letters, digits, and special characters. Learn how Portal Search handles special characters during indexing.
-   **[Uninstalling HCL Digital Experience does not delete search collections ](../admin-system/srrhinttips_uninst_nodel_scoll.md)**  
When you uninstall HCL Digital Experience, the directories and files for the search collections are not deleted. Therefore, before you uninstall HCL Digital Experience, delete all search collections by selecting the collections individually and clicking the option Delete Collection. If you do not delete, these files and directories remain on the hard disk drive. If you want to delete the search collection data after uninstalling HCL Digital Experience, you need to delete manually.
-   **[UNIX Linux operating systems might require higher limit of open files for Portal Search to work properly ](../admin-system/srrhinttips_unix_morfile.md)**  
The limit for the number of open files in a UNIX Linux operating system might be too low for Portal Search to work properly. This might result in a Portlet Unavailable error.
-   **[The portal site search collection fails ](../admin-system/srrhinttips_crt_scoll_fails.md)**  
Creating the portal site search collection can fail due to a file path length restriction.
-   **[On IBM i set USER.REGION variable ](../admin-system/srrhinttips_i_ureg_var.md)**  
Under IBM i, Portal Search collections might fail to collect documents.
-   **[Users cannot see portal site search results in their preferred language ](../admin-system/srrhinttips_no_lang.md)**  
If the preferred language of the crawler user ID does not match the language of the search collection, users might not see search results in their language.

**Parent topic:**[Portal Search ](../admin-system/admsrch.md)

**Related information**  


[Planning and preparing for Portal Search ](../admin-system/srcbfrwrkgwtprtlsrch.md)

[Managing the content sources of a search collection ](../admin-system/srtmngcontsrc.md)

[Static content ](../site/site_static_content.md)

[Dynamic user interfaces ](../dev-portlet/wpsdynui_cpts.md)

[Importing search web collections ](../migrate/mig_t_import_webcoll.md)

