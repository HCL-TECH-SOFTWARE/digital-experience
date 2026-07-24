# How to include pages containing Web Content Viewer Portlet in Portal Seedlist

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

After creating a Portal Search Collection, you may notice that pages containing the Web Content Viewer portlet are excluded from the search index. By default, the Web Content Viewer portlet is configured to be excluded from the Portal Seedlist. 

Follow the procedure below to modify this behavior and include these pages in search results.

## Instructions

1. Log in to WebSphere Portal and navigate to the Administration interface.

2. Go to Portlet Management > Portlets.

3. Search for "Web Content Viewer" using the search bar.

4. Click the Configure Portlet icon (wrench button) for the Web Content Viewer portlet.

5. Locate the preference named `INCLUDE_IN_SEARCH_INDEX`.

6. Click the edit action for `INCLUDE_IN_SEARCH_INDEX` and set its value to `true`.

7. Save your changes, re-crawl/regather the search collection documents, and verify the pages appear in search results.