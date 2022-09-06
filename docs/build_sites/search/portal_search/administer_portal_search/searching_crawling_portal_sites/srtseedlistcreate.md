# Crawling an external site using a seedlist provider

The seedlist crawler is a special HTTP crawler that can be used to crawl external sites which publish their content using the seedlist format. The seedlist format is an ATOM/XML-based format specifically for publishing application content, including all its metadata. The format supports publishing only updated content between crawling sessions for more effective crawling. You can configure the seedlist crawler with general parameters, filters and schedulers, then run the crawler.

Before configuring the seedlist crawler, collect the following information:

-   Root URL, which is the URL of the seedlist page.

    The seedlist page is a special ATOM/XML page containing metadata that directs the crawler to the actual links that should be fetched and indexed to become searchable later. The seedlist page also contains document level metadata that is stored along with the document in the search index. In order to make seedlist crawler results searchable, you must provide the crawler with a URL to a page containing a seedlist. The crawler retrieves the seedlist and crawls the pages indicated by the seedlist.

-   User ID and Password, which are used by the crawler to authenticate the seedlist page.

To configure and create the seedlist crawler:

1.  Click **Manage Search** \> **Search Services**.

2.  Click the relevant Portal Search Service.

3.  Click the name of an existing search collection, or create a new search collection.

4.  Click **New Content Source**.

5.  Click the drop-down menu icon next to **Content source type** and click **Seedlist provider** to indicate that the content source is a seedlist.

6.  Under the tabs **General Parameters**, **Advanced parameters**, **Schedulers** and **Security**, provide the information in the fields and select options as required.

    For details refer to the topic *Managing and administering Portal Search*.

7.  Click **Create**.

    This creates the new content source.

8.  To run the crawler, click the start crawler icon for the content source on the Content Sources page.

    If you have defined a crawler schedule under the **Schedulers** tab, the crawler will start at the next possible time that you specified.



???+ info "Related information:"
    - [Applying filter rules](../setup_search_collections/mng_content_sources_search_collections/srrfiltr.md)


