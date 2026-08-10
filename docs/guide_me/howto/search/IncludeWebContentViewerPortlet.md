# How to include pages containing the Web Content Viewer portlet in a portal seedlist

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

After creating a Portal Search collection, pages containing the Web Content Viewer portlet may be excluded from the search index. By default, the Web Content Viewer portlet is configured to be excluded from the portal seedlist. This article describes how to include these pages in search results by updating the portlet configuration.

## Instructions

### Configuring the portlet

1. Log in to HCL DX as an administrator.
2. Select the **Open applications menu** home icon, and then navigate to **Administration > Applications > Portlets**.
3. Search for **Web Content Viewer**.
4. Select the **Configure Portlet** wrench icon.
5. Locate the **INCLUDE_IN_SEARCH_INDEX** preference and select the **Edit value** pencil icon.
6. Change the **value** to `true`, and then select **OK**
7. Select **OK** to save your changes.

### Crawling the search collection

1. On the left panel, select **Search > Settings**.  
2. Select **Search Collections**.
3. Select the target search collection that indexes your portal content (for example, **Default Search Collection**).
4. Select the **Start Crawler** icon to re-crawl the search collection documents.
5. After the crawler finishes, verify that the pages appear in the search results.
