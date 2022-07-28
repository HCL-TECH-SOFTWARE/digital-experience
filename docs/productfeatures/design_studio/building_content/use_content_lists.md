# Use content lists

The following section details information and steps on how to use content lists across your HCL Digital Experience site.

## Overview

A content list is a dynamic list of content items based on search criteria. It allows the author to generate a dynamic list of content based on the **Authoring Template**, **Location**, **Categories**, and **Keywords**. Content lists are a WCM element type. You can drag and drop a content list to the canvas.

As of HCL Digital Experience 9.5 CF204, content lists are available in both the **Elements** panel and the **Reusables** panel.

You can control how items are displayed in the canvas using filtering and sorting:

-   **Sort** - Changes the order of the content items displayed. You can sort by:
    - **Title** (Default)
    - **Name**
    - **Description**
    - **Publish Date**
    - **Creation Date**
    - **Expiry Date**
    - **General Date One**
    - **General Date Two**
    - **Last Modified Date**, and 
    - **None**
-   **Display order** - Changes the content items by ascending or descending order. The default display order is ascending.
-   **Display limit** - Limits the number of items displayed on a page. The default is 8.
-   **Start at** - Sets the page number where the list starts on. The default is 1.
-   **Categories** - A search criteria that can be used to find content items that have been profiled with categories. <br>![Content list by categories](../../../images/categories.png)
-   **Keywords** - A search criteria that can be used to find content items that have been profiled with keywords. <br> ![Content list by keywords](../../../images/keywords.png)
-  **Header and Footer** - The checkboxes for header and footer is added but the functionality is not yet implemented. <br> ![Content list by header and footer](../../../images/header-and-footer.png)

## Create a content list

This section shows you how to create content lists on your site and its pages in HCL Design Studio (Beta).

Follow the steps to create a content list from your site using HCL Digital Experience 9.5 Design Studio (Beta).

1.  In the **Sites** overview, hover to the site you want to create a content list for until you can see the overflow menu button.

    ![Site overflow menu](../../../images/site_page_overflow_menu.png)

2.  Click the overflow menu button, and choose **Open page in editor**.
3.  Click **Open add elements panel**.
4.  Under **WCM**, drag and drop **Content List** onto the page.
5.  In the content list properties, search for the name of the content template to use. You can select the desired content template from the list shown.
6.  After selecting a content template, search for the location to use. You can select the desired location from the list shown. The locations shown on the list depends on the content template you selected from the previous step.
7.  You can edit and use a custom name or keep the auto-generated name. Auto-generated names append numbers for names that already exist within a content list. The content list displays all the content items on the canvas as empty blocks.

## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1).

