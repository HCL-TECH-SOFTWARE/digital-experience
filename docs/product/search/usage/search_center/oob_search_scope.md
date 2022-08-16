---
id: oob_search_scope
title: Configure search collections and scopes
---
import useBaseUrl from '@docusaurus/useBaseUrl';



HCL provides two search collections and a search scope. A search collection contains a number of content sources that the portal search service indexes. A search scope allows you to partition or organize your search collections. As a result your site visitors can limit their search to specific areas. Defined scopes are visible to visitors from the search dialog.

The search collections that are immediately available are Default Search Collection and JCRCollection1. A schedule for crawling and indexing is defined for each collection. You might want to review the schedule and make sure that the schedule time is appropriate for your site. For performance, do not run the crawler during peak times.

In addition to the scheduled time, you can also start the crawler manually. If you publish a large set of content, you might want to manually start the crawler to index the new content sooner.

1.  Access the administration portlet.
2.  Click the **Administration menu** icon in the toolbar. Then, click **Search Administration** \> **Manage Search**.

3.  Click **Search Collections**

4.  Review the schedules for the content sources for each collection.
5.  Click **Default Search Collection** in the collection list.

    You see the content sources included in the search collection. You can also see status information about the collection.

6.  Click the clock icon to see when the crawler is scheduled to run.

    You can enable and disable the schedule from this panel, but you cannot configure it.

7.  Set up a schedule for the search crawler.
8.  In the breadcrumb, click **Default Search Collection**.

9.  For Portal Content Source, click the pencil icon to open the scheduler.

10. Review each tab on the panel to get familiar with the user interface.

11. Click **Schedulers** to modify the schedule as needed.

12. If needed, do the same procedure for the WCM Content Source and the JCRCollection1 content source, which is named JCRSource.


Search scopes can be defined at anytime. As your site grows, adding scopes help your visitors target areas of your site to search.

