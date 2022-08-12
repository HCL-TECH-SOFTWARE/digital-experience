---
id: site_libraries
title: Content libraries
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Content libraries store the assets for your website, including but not limited to pages, content, images, authoring and presentation templates, and workflows.

All pages are stored in a Portal Site library. The Portal Site library is immediately available and includes the welcome page, getting started page, and more. Create more libraries to store your website content and assets. You can create multiple libraries to organize your content or to reflect your companies structure. You might create a library for a specific department that requires different access control. In most cases you need to create a minimum of two libraries:

1.  A design library where you store all the items that are required for the web content system itself
2.  A content library that is used to store the content that is developed by your content creators

The access control and syndication configuration is unique for each library that you create.

**Note:** When you search through content libraries, you can search for items by their titles. However, if you sort items by title, the sorting option filters pages by the Unique name or Identifier of the page, and not by the title that you specified in the page settings.

## New libraries and default items

When you create a new library, you can select to include default items. The default items are helpful if you are not familiar with standard library assets such as authoring templates, presentation templates, and workflows. Include the default items to see examples that you can customize and use.

To create a new library, Click the **Administration menu** icon. Then, click **Portal Content** \> **Web Content Libraries**.

**Important:** When you create a web content library, ensure that the name of the library does not match the URL context of any virtual portals on the same server. If the name of a library and the URL context of a virtual portal have the same value, incorrect rendering behavior can result.

## When to use the Portal Site library with web content

You can store web content in the HCL Digital Experience site library or in a separate content library:

-   For dedicated page content that is created and displayed on one single page, it is more convenient to store the web content in the Portal Site library.
-   For web content that is reused in multiple places or not tied to the Portal Site hierarchy, it is more convenient to store the web content in a separate dedicated content library.

-   **Storing web content in the Portal Site library**

    -   This scenario is easy to set up, but means that the content cannot be syndicated, exported or imported separately.
    -   Managed pages must be enabled.
    -   The web content is moved or deleted when a page is moved or deleted.
-   **Storing web content in dedicated content libraries**

    -   This scenario is easy to deploy if the content associations are set up correctly. The content can be syndicated, and exported or imported separately.
    -   The web content is associated with a page.
    -   The web content is not moved or deleted when a page is moved or deleted.
    -   Web content can be stored in separate libraries. This way, you can logically organize your content, and setup separate syndication scenarios.
    **Note:** When you store web content in dedicated content libraries, maintain the site area hierarchy so that it exactly matches the page hierarchy. For example, when you create a new page, also create a site area at the same point in the hierarchy, and associate it with the new page that you created. Similarly, when you rename, move, or delete pages, update, and synchronize the associated site areas accordingly.


-   **[Creating libraries](site_create_libs.md)**  
Web content libraries are used to store your web content and managed pages. Syndication is used to keep libraries in synch between your different server environments.
-   **[Web content library default items](../wcm/wcm_library_default_items.md)**  
When you create a web content library, you can choose to include a set of default web content items in the new library. These items can be used as a starting point for your Web Content Manager system and website.
-   **[Create a content library](../panel_help/oob_content_createlib.md)**  

-   **[HCL Web Content Manager Multilingual Solution](../wcm/wcm_mls.md)**  
The Web Content Manager Multilingual Solution is a set of tools that are used to manage translated versions of localized and regionalized websites.

**Table of Contents:**  


