# Managing crawlers

This section describes how to manage crawlers in the Search Admin UI.

A crawler pulls data from a content source and indexes it for search.

!!! note
    Crawler functionality is only available for JCR, Portal, WCM, and Website content source types. DAM and People content sources do not support crawlers; they use the Content Push API instead. For more information, refer to [Content Sources](content_sources.md).

## Overview

Click the **Overview** tab to see a summary of the number of crawlers for each status, as well as details of the most recent crawl, including the crawler name, status, date, and time.

![](../../../assets/Search_Admin_UI_overview.png)

On the **Crawlers** panel under the **Content Sources & Crawlers** tab, you can do the following tasks:

## Viewing crawlers

1. Go to the Search Admin UI.
2. Click the **Content Sources & Crawlers** tab.

    ![](../../../assets/Search_Admin_UI_view_crawlers.png)

The list of existing crawlers is displayed.

## Creating a crawler

1. Click **Add crawler**.

    ![](../../../assets/Search_Admin_UI_add_crawler_button.png)

2. Fill in the required fields in the dialog that opens, then click **Create**.

    ![](../../../assets/Search_Admin_UI_add_crawler_dialog.png)

## Viewing crawler properties

1. Hover on a crawler row.
2. Click the **Properties** icon.

    ![](../../../assets/Search_Admin_UI_crawler_properties_icon.png)

The properties panel opens, showing the crawler name, type, and supported content source; general parameters (such as ID, target data source, schedule, crawl limits, crawl delay, blacklist regex, robots.txt handling, last crawled date, and last crawl duration); and security settings (such as authentication type).

![](../../../assets/Search_Admin_UI_crawler_properties_panel.png)

## Searching for a crawler

1. Click the **Search crawler** field.

    ![](../../../assets/Search_Admin_UI_crawler_search_field.png)

2. Enter a search term. The list is filtered to show all crawlers that match the name, type, or associated content source name you entered.

    ![](../../../assets/Search_Admin_UI_crawler_search_results.png)

## Monitoring crawler status

The **Status** column shows the current status of each crawler, such as **New**, **Starting**, **Running**, **Finished**, **Stopped**, or **Failed**.

![](../../../assets/Search_Admin_UI_crawler_status_column.png)

## Manually triggering a crawl

There are two ways to manually trigger a crawl for a supported content source:

- **Incremental crawl**: Click the **Incremental crawl** icon. The crawler runs and indexes the latest items from the seedlist that have not yet been indexed.

    ![](../../../assets/Search_Admin_UI_crawler_incremental_crawl_button.png)

- **Re-crawl**: Click the **Overflow** icon, then click **Re-crawl** to start a full crawl.

    ![](../../../assets/Search_Admin_UI_crawler_options_overflow.png)

    ![](../../../assets/Search_Admin_UI_crawler_options_recrawl.png)

## Updating a crawler

1. Hover on a crawler row.
2. Click the **Properties** icon.

    ![](../../../assets/Search_Admin_UI_crawler_properties_icon.png)

3. In the properties panel, update the properties, then click **Save**.

    ![](../../../assets/Search_Admin_UI_crawler_properties_panel.png)

## Deleting a crawler

You can only delete a crawler that is not currently running.

1. Hover on a crawler row.
2. Click the **Overflow** icon, then click **Delete**.

    ![](../../../assets/Search_Admin_UI_crawler_overflow_menu.png)

    ![](../../../assets/Search_Admin_UI_crawler_overflow_delete.png)

3. In the confirmation dialog, click **Delete** to confirm, or click **Cancel** to cancel the deletion.

    ![](../../../assets/Search_Admin_UI_crawler_delete_confirm_dialog.png)

Deleting a crawler removes it from the list and makes it unavailable for search indexing.

## Stopping a crawl

1. Click the **Stop** icon.

    ![](../../../assets/Search_Admin_UI_crawler_stop_button.png)

2. In the confirmation dialog, click **Stop** to confirm, or click **Cancel** to cancel the action.

    ![](../../../assets/Search_Admin_UI_crawler_stop_confirm_dialog.png)

If the crawl was stopped, the status shows **Stopped**.
