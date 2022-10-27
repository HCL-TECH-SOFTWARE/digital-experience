# Creating and configuring search collections

Get an overview of how you manage search collections and their content sources.

To administer search collections, go to the **Manage Search** portlet. To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**. Then, click **Search Collections**. This panel includes creating, updating, and removing search collections, and other administrative tasks that refer to search collections. For more information about administrative tasks, see the portlet help.

Managing search collections:

When you select **Search Collections**, **Manage Search** displays the Search Collections panel. It lists the search collections in your portal and related information so that you can select options and do tasks on the search collections and their content sources.

!!! note
    The selectable options that are displayed and available for collections and content sources depend on their type and setup.

In the Search Collections panel you can select the following option icons and do the following tasks:

-   **Change the search collection** with which you want to work. To do this, select another search collection from the pull-down list.
-   **New collection**. Select this option to create a new search collection.

    !!! note
        1.  You cannot create additional search collections for the default Content Model search service.
        2.  When you specify the directory location for the collection, be aware that creating the collection can overwrite files in that directory.

-   **Refresh** the list of collections.
-   **Locate a collection** and do one of the following tasks by clicking the appropriate icon for that collection:

    -   **Search and Browse Collection**. Use this option to work with the documents of the selected collection. You can complete the following administrative tasks:
    
        -   Browse the documents of the selected collection.
        -   View the individual documents of the selected collection.
        -   Search the documents of the selected collection.
        -   Edit the fields of the documents in the selected collection.
        -   Delete documents from the selected collection.

    -   **Import or Export Collection**. Use this option to import or export the selected search collection. Portal Search provides a Portal Search XML interface for this feature. The export and import operations can be beneficial when you upgrade to software levels, which are not necessarily compatible with the data storage format of later versions of the software. To prevent loss of data, export all data of search collections to XML files before you upgrade the software. Then, after you upgrade the software level, you can use the previously exported files to return the search collection data back into the new software level.

        !!! note
            1.  Before you export a collection, make sure that the user who is running the portal application process has write access to the target directory location. Otherwise, you might get an error message, such as File not found.
            2.  You can import collection data only into an empty collection. You cannot import collection data into a target collection that has content sources or documents already.
            3.  When you import collection data into a collection, all collection settings are overwritten by possibly imported settings. For example, the language setting is overwritten.
            4.  When you import a collection, a background process fetches, crawls, and indexes all documents that are listed by URL in the previously exported file.

    -   **Delete Collection**. Use this option to delete the selected search collection.

-   **Select a collection** by clicking the collection name link. Portal Search displays the Content Sources and the Status of the selected collection. You can select the following option icons and perform the following tasks:

    -   **New Content Source**. Use this option to create a new content source for this collection. You can create more than one content source for a search collection.
    -   **Refresh** the list of content sources and the status that is shown for this collection.

    -   **Work with the content sources of the collection**.


???+ info "Related information:"
    - [Managing the content sources of a search collection](../setup_search_collections/mng_content_sources_search_collections/index.md)
    - [Delayed cleanup of deleted portal pages](../../../../../deployment/manage/config_portal_behavior/delayed_cleanup/index.md)
    - [The portal site search collection fails](../../srrhinttips_crt_scoll_fails.md) 

