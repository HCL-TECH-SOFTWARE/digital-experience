# Managing the content sources of a search collection

You can create, view, and update content sources to customize your search collections.

Search collections consist of one or more content sources. Use the **Manage Search** portlet to manage the content sources of a collection. To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**. Then, click **Search Collections**. Select a search collection by clicking the collection name link. The Content Sources window opens.

From the Content Sources window, you can manage the content sources by completing the following tasks.

## Create a content source

Create a content source within the collection that you selected by clicking **New Content Source**. For detailed instructions, read [Creating a content source](../../../../manage_search/search_collection/creating_content_source/index.md).

## Update a content source

Click **Refresh** to update the list of content sources. You can also view the status of the selected collection, such as the number of documents, the run time of the last crawler, and the crawl schedule.

## View and manage schedulers

Click **View Content Source Schedulers** to view and manage schedulers. The portlet lists scheduled crawls and information about the start date and time, repeat intervals, next run date and time, and status. This option is only available if you defined schedulers for the content source.

## Start crawling a content source

Click **Start Crawler** to start collecting documents and crawling a content source. Use this option to update a content source by a new run of the crawler, or to stop such an update. The timeout that you set in **General Parameters** for crawling a content source works as an approximate time limit. It might be exceeded by some percentage. The timeout works only for website content sources. To learn more about crawling, read [Hint and tips for Portal Search crawls](../../../hint_tips/srrhinttips_crawl.md) and [Searching and crawling Portal and other sites](../../../administer_portal_search/searching_crawling_portal_sites/index.md).

## Remove and regather documents

Click **Regather** to remove all previously collected documents within a content source and initiate a full crawling process to gather new documents.

## Verify content source address

Click **Verify Address** to ensure that the address of the content source is correct. If the web content source is available and not blocked by a robots.text file, Manage Search returns the message

```
Content Source is OK
```

. If the content source is invalid, inaccessible, or blocked, Manage Search returns an error message. When you create a new content source, Manage Search starts the **Verify Address** feature.

## Configure a content source

Click **Edit** to configure general parameters, advanced parameters, schedulers, and security options.

## Delete a content source

Click **Delete** to remove a content source from the search collection. The documents that were collected from this content source remain available for search until their expiration. You can specify this expiration time in **Links expire after \(days\):** in the **General Parameters** tab when you create a content source.


-   **[Applying filter rules](../../setup_search_collections/mng_content_sources_search_collections/srrfiltr.md)**  
Portal Search provides a facility for applying filter rules to the crawler process. The crawler filters control the crawler progress and the type of documents that are indexed and cataloged. 

???+ info "Related information"
    - [Creating and configuring search collections](../../setup_search_collections/srrcreatconfig.md)
    - [Hints and tips for using Portal Search](../../../hint_tips/index.md)
    - [The portal site search collection fails](../../../../portal_search/hint_tips/srrhinttips_crt_scoll_fails.md)
    - [Delayed cleanup of deleted portal pages](../../../../../../deployment/manage/config_portal_behavior/delayed_cleanup/index.md)
    - [Replacing the HCL Digital Experience administrator user ID](../../../../../../deployment/manage/security/people/authentication/updating_userid_pwd/portalid.md)

