# Web content library default items

When you create a web content library, you can choose to include a set of default web content items in the new library. These items can be used as a starting point for your Web Content Manager system and website.

**Video**: [HCL Digital Experience - Create and add a WCM Library](https://www.youtube.com/watch?v=nCq2gMKhRN0&feature=youtu.be)

## Default items

The following items are created when you select **Include default items in the new library** when you create a library.

-   **Workflow items:**

    -   A workflow that is named **Express Workflow** with a single workflow stage named **Publish Stage** by using the publish action named **Publish**.
    -   A workflow that is named **Three Stage Workflow** by using the following workflow stages:
        -   **Draft Stage**
        -   **Publish Stage** by using the publish action named **Publish**.
        -   **Expire Stage** by using the expire action that is named **Expire**.
-   **Authoring template:**

    The authoring template is named **Article** and contains a single rich text element that is named **Body** and uses the **Express Workflow** as the default workflow for content items that are created by using this authoring template.

-   **Presentation template:**

    The presentation template is named **Article Presentation**.

-   **Site area and content items:**

    -   The content items that are named **Sample Article** and **Sample Article 2** are stored in the site area named **Articles**.
    -   The site area that is named **Articles** contains a template map between the authoring template that is named **Article** and the presentation template named **Article Presentation**.
-   **Components:**

    -   The authoring tool that is named **Article Toolbar** is used to add **New** and **Edit** functions to the rendered page. It is referenced in the presentation template named **Article Presentation**.
    -   The menu that is named **Articles List** is used to display a list of content items on the rendered page. It is referenced in the presentation template named **Article Presentation**.

## Access controls

As the web content library default items are configured to inherit their access settings from the library they are stored in, users are not able to access these items until you configure the access settings of the library.

## Viewing default items

The default items are best displayed by using a web content viewer portlet:

1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.
2.  Select **New Page From**.
3.  Under **Web Content Mappings**, select the site area that is named **Articles** from your web content library.
4.  Complete the rest of the form and click OK.
5.  Edit the page layout of the new page and add a **Web Content Viewer** portlet to the page.
6.  The content item that is named **Sample Article** is displayed on the page.

