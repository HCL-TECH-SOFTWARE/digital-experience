---
id: mng_cntnt_source
title: Manage the content sources of a search collection
---




To work with the content sources of a search collection, click the collection name in the list of search collections. Manage Search lists the Content Sources and the Search collection status information of the selected search collection. A search collection can be configured to cover more than one content source. From the Content Sources window, you can refresh, view status, and configure schedulers and crawlers for a specific content source.

While a crawl on the content source is running, refreshing the status information updates the information about the run time and the documents collected so far. You can also view the status of the content source such as the number of documents, the run time of the last crawler, and the schedules of the run.

You can view the status of the schedulers and configure crawlers for a specific content source. The **View Content Source Schedulers** icon is displayed only if you defined scheduled crawls for this content source. If you click this icon, the portlet lists the scheduled crawls. It also provides information about the start date and time, repeat interval, next run date and time, and status. The status information can be disabled or enabled.

Click **Start Crawler** to start a crawl on the content source to update the contents of the content source. After the run is started, the **Start Crawler** icon changes to **Stop Crawler** and you can click to end the run. A Crawl run refreshes different content sources as follows:

-   For website content sources, documents that were indexed before and still exist in the content source are updated. Documents that were indexed before, but no longer exist are retained in the search collection. Documents that are new in the content source are indexed and added to the collection.
-   For HCL sites, the crawl adds all pages and portlets to the content source. It deletes portlets and static pages from the content source that were removed from the portal. The crawl works similarly to the option **Regather documents from Content Source**.
-   For HCL Web Content Manager sites, Portal Search uses an incremental crawling method. In addition to added and updated content, the seedlist explicitly specifies deleted content. In contrast, clicking **Regather documents from Content Source** starts a full crawl; it does not continue from the last session, and it is therefore not incremental.
-   For content sources created with the seedlist provider option, a crawl on a remote system that supports incremental crawling, such as HCL Connections, behaves like a crawl on a Web Content Manager site.

**Note:** Define a dedicated crawler user ID. The per-configured default portal site search uses the default administrator user ID sysadmin with the default password of that user ID for the crawler. If you changed the default administrator user ID during your portal installation, the crawler uses that default user ID. If you changed the user ID or password for the administrative user ID and still want to use it for the Portal Search crawler, you need to adapt the settings. To define a crawler user ID, select the **Security** tab and update the User ID and Password. Click **Save**.

Delete existing documents in the content source from previous crawls and then start a full crawl on the content source by clicking the **Regather documents from Content source** icon. Documents that were indexed before and still exist in the content source are updated. Documents that were indexed before, but no longer exist in the content source are removed from the collection. Documents that are new in the content source are indexed and added to the collection.

**Note:** This action might require a considerable amount of system resources, as all content sources of the search collection are crawled at the same time.

**Note:**

-   If you modify a content source that belongs to a search scope, update the scope manually to make sure that it still covers that content source. Especially if you changed the name of the content source, edit the scope and make sure that it is still listed there if not add it again.
-   If you delete a content source, the documents that were collected remain available for search by users in the All Scopes option. Since the documents were included in the content source before it was deleted. These documents are available until the expiration time. In the **General Parameters** tab, you can specify the expiration time from the Links expire after\(days\) menu.

To verify the URL address of a content source, locate the content source and click the **Verify Address** icon. If the web content source is available and not blocked by a robots.text file, Manage Search returns the message

```
Content Source is OK
```

. If the content source is invalid, inaccessible, or blocked, Manage Search returns an error message. When you create a new content source, Manage Search starts the **Verify Address** feature.

