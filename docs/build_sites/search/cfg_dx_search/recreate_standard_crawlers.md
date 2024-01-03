# Recreating standard crawlers for the search collection

After installing and configuring the remote search service, you must create the new search collection and then add the content sources (crawlers).

1. Before deleting the search collection and the local search service, export the configuration of the default search collection. 

  The exported XML file includes all information required for recreating the search collection and its content sources for the remote search service. 

  First, export the configuration of the Default Search Collection before deleting the search collection and the local search service. The exported XML file includes all information required for recreating the search collection and its content sources for the remote search service.

2. Export the JCRCollection1. This is required to enable WCM Authoring search. 

3. After the exported files are available, create the new search collection in the remote search service environment.

4. Import the previously exported XML configuration information into the search collection.

5. Check if the hostnames and ports are still valid for the crawler URLs. In addition, check if the optional security information is valid. Update as required.

If you either need to or prefer to manually configure your search crawlers, refer to the following section.

## Crawler types

Knowing which type of crawlers you need depends on the type of information presented on the Portal site and where the information is from.

- **WCM site** - Use this content source type if WCM is the source of information published.
- **Portal site** - Use this content source type if there is information published within portlets that you want indexed by DX Search.
- **Web site** - Use this content source type if more information is hosted on web servers (for example, legacy FAQ type of information).


## Setting up the WCM crawler

When setting up a WCM crawler, you must understand the format of the WCM Seedlist.

A typical WCM Seedlist URL looks like the following:

https://hostname:port_number/seedlist/myserver?SeedlistId=seedlistID&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.
WCMRetrieverFactory&Action=GetDocuments

The SeedlistId parameter in this URL may be empty. In that case, all content of all available WCM libraries is checked and processed when the crawler is started manually or on schedule.

For information on how to set up a basic WCM Site content source, see [Indexing web content](../indexing_webcontent/index.md).

For information on how to define a WCM seedlist URL used in a WCM Site content source, see [Seedlist 1.0 REST service API](../crawling_webcontent_seedbase/wcm_searchseed/wcm_dev_search_seedrestapi.md).

The WCM Support Tools Portlet provides a Generate WCM Search URL function. If this portlet is present on your environment, you can generate a WCMSeedlist URL capable of crawling your WCM libraries, site areas, and content items.

Note that when the crawler is started for the first time, it immediately checks and retrieves all available content based on the search user defined in the credentials in the Content Source Security tab. Depending on the number and size of the WCM libraries, this operation could take time.

For any subsequent calls to crawl the seedlist, the indexing is faster because WCM only crawls the items that have been modified, added, or deleted since the last time the crawler was active.

For more information, see [Collecting Data: Search for HCL Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0076138&sys_kb_id=8223c6a31b881494c48197d58d4bcb59).


## Setting up the JCR crawler required for WCM Authoring search

To create JCRCollection1, refer to [Setting up a JCR search collection](../portal_search/administer_portal_search/setup_search_collections/jcr_search_collections/index.md).

!!!note
    WCM Authoring search is integrated through DX Search's SIAPI Java API. As a result, authoring search cannot be replaced by any other search engine provider.

## Setting up the Portal site crawler

For the **Content source type** field, select **Portal site**. The URL for the crawler is generated automatically. You then have to define the number of crawler threads and provide user credentials if secured resources should be crawled as well.

The Portal site crawler picks up all accessible portlet windows and their corresponding portal pages. This is required to handle various levels of security which portal supports, including security defined at the portlet level. As a result, not all portal pages are processed as a whole and a single portal page does not equate to a single document in the search collection.

For example, there are two Portal pages, one is hosting three portlets and the other, two portlets. If the crawler security settings allow the search user to access all five portlets, then the crawler reports 5 documents crawled when complete.

!!!note
    When an end user clicks on a 'portlet entry' in the search result list, they are directed to the respective portal page and they can see that portlet in the proper page context.


### Using the web crawler

The web crawler fetches all URLs referenced through the start location. By default, it web crawler does not stay within the domain specified by the start URL. Because of this, it is required to provide some crawler filters. In this section, we distinguish between filters to include or exclude resources either while collecting documents or while adding documents to the search index.

When restricting the crawler to a specific website by specifying the hostname and, optionally, parts of the relative path information, this is regarded to be the super-set of documents the crawler will fetch. Any alternative hostnames or paths found by the crawler are stored, but are filtered out by the crawler. As a result, note that any URLs indexed must meet the criteria specified in both the crawler filter and any of the included filters in order to show up in search results for a Web Site content source.

Even finer tuning is also available to determine what ends up getting stored in the search index by the Web site content source.

For example,

- Website is http://www.myco.com/
- Crawler filter while collecting is defined as “*/www.myco.com/wps/portal/*”.
- Included filter for the indexing process:
    - “*/wps/portal/*”
    - “*/wps/wcm/*”

This example leads to none of the items which match the filter “*/wps/wcm/*” to be processed because they are filtered out by the crawler filter. The crawler finds such a link and stores it for further processing. During indexing of the item, it refuses to fetch that item because it does not meet the primary filter criteria for the crawler itself.

In order to index both /portal/ and /wcm/ contexts, the crawler filter must be adjusted to be less restrictive:

- Crawler filter while collecting is defined as “*/www.myco.com/wps/*”.

