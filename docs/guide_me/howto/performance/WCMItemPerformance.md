# How to identify WCM items causing performance issues

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

When a page in HCL DX loads slowly, the root cause is often a complex presentation template or a specific piece of Web Content Manager (WCM) content. This article describes how to identify the exact content item causing the performance issue.

## Instructions

1. Focus on a single page that demonstrates the performance issue and has the fewest WCM rendering portlets.
2. Identify the WCM content rendered in each WCM rendering portlet on the page by accessing **Edit Shared Settings**. You can do this in one of two ways:

    - Using **Edit mode**:

        1. Put the page into **Edit mode**.

        2. Select **Edit Shared Settings** from the drop-down menu in the upper-right corner of the portlet.

    - From **Site Management**:

        1. Navigate to **Administration > Site Management**.

        2. Click the **Edit Page Layout** icon.

        3. Select **Edit Shared Settings** from the portlet drop-down menu.

3. Run the appropriate ConfigEngine task for your operating system to clear the WCM cache:

    - **Windows:**  

        ```shell
        ConfigEngine.bat action-WCM-clear-cache-all
        ```

    - **AIX, Unix, or Linux:**

        ```shell
        ConfigEngine.sh action-WCM-clear-cache-all
        ```

    !!! warning
        Clearing WCM caches can have a major temporary impact on server performance while the caches are repopulated.

4. Clear your browser cache.
5. Preview each WCM item identified in Step 2 using the preview option in the WCM authoring portlet.
6. Preview each item a second time without clearing the browser or WCM caches. An item that takes longer than five seconds to render is likely causing the performance issue.
7. Check the presentation template mapped to the site area of that specific item.
8. Back up the contents of the presentation template. Then, delete entries in the template one at a time and preview the content again until you isolate the component or element causing the performance issue.
