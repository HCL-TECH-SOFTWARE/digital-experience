# Exporting and importing search collections 

View the steps to export search collections from a source portal and import them into a target portal.

The following are possible use cases for exporting and importing search collections:

-   You verified your search collections on a test portal, and you want to move these collections to your production portal.
-   You verified your search collections locally on a portal, and you want to move these collections to a configuration with remote search.
-   You verified your portal search configuration and search collections on a single portal, and you want to move these collections to a portal cluster environment.
-   You are staging your portal to production by using the ReleaseBuilder.

To export and import your search collections, use the **Import or Export Collection** option of the Manage Search portlet. You can use that option for both exporting and importing. For more details about these tasks and the Manage Search portlet, refer to the portlet help. To export and import your search collections, proceed by the following steps:

1.  To include the security information when you export the search collection, add the WS\_KEY parameter to the search service that contains the source search collection that you want to export. Complete the following steps:

    1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

    2.  Click **Search Services**.

    3.  Click the **Edit** icon for the search service that contains the search collection that you want to export.

    4.  In the **Parameter key** field, enter WS\_KEY.

    5.  In the **New parameter value** field, enter secret.

    6.  Click **Add Parameter**.

    7.  Click **OK**.

    **Note:** If you do not export the security information when you export a search collection, you must manually add the user name and password to each content source after you import the search collection into the target portal.

2.  On the source portal, export your search collections. This exports the configuration data and all document URLs of your search collections.

    **Notes:**

    1.  Before you export a collection, make sure that the user who is running the portal application process has write access to the target directory location.Otherwise, you might get an error message, such as File not found.
    2.  When you specify the target directory location for the export, be aware that the export can overwrite files in that directory.
3.  Document all of the following data:

    -   The target file names and directory locations to which you export the collections. For example, C:\\ibm\\wp\_profile\\PortalServer\\collections.
    -   The following configuration data of the collections: The **location, name, description**, and **language** for each collection.
    -   The following configuration data of the collections:
        -   The **location, name, description**, and **language** for each of the collections
        -   The settings for the options **Specify collection language** and **Remove common words from queries** for each collection.
4.  Create the search collections on the target portal.

    This task creates the empty shell for the search collection. Complete the following data entry fields and select the following options according to the data that you documented:

    -   **Location of Collection:** Specify the new collection location.
    -   **Name of Collection:** Specify the collection name. The name can match the old setting, but does not have to match it.
    -   **Description of Collection:** Specify a collection description. The description can match the old setting, but does not have to match it.
    -   **Specify Collection Language:** Select this to match the old setting.
    -   **Select Summarizer:** You do not need to select this option. The value is overwritten by the import.
    -   **Select Categorizer:** You do not need to select this option. The value is overwritten by the import.
    -   **Remove common words from queries \(e. g. in, of, on, etc.\):** Check or clear this to match the old setting.
    You do not have to add content sources or documents; that is completed by the import task.

5.  To include the security information when you import the search collection, add the WS\_KEY parameter to the search service that contains the target search collection. Complete the following steps:

    1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

    2.  Click **Search Services**.

    3.  Click the **Edit** icon for the search service that contains the target search collection.

    4.  In the **Parameter key** field, enter WS\_KEY.

    5.  In the **New parameter value** field, enter secret.

    6.  Click **Add Parameter**.

    **Note:** If you do not import the security information when you import a search collection, you must manually add the user name and password to each content source after you import the search collection into the target portal.

6.  Import the data of your search collections into the target portal. For the import source information, use your documented file names and directory locations to which you exported the collections before the portal upgrade.


**Notes:**

1.  Additionally to exporting and importing your search collections, you must configure Portal Search on the target portal. This depends on the requirements of your target portal environment and configuration. For details about how to do this refer to the appropriate topics of the Portal Search documentation, such as Planning and preparing for Portal Search and Administering Portal Search.
2.  Before you export a collection, make sure that the portal application process has write access to the target directory location. Otherwise, you might get an error message, such as File not found.
3.  Import collection data only into an empty collection. Do not import collection data into a target collection that has content sources or documents already.
4.  When you import search collection data into a collection, most of the collection configuration data are also imported. For example, this includes the content sources, schedulers, filters, and language settings. If you configured such settings when creating the new collection, they are overwritten by the imported settings.
5.  If you want to migrate from one portal version to a higher version, you need to delete the search collections between the export and the reimport. Follow the steps that are described in the topic about Migrating web search collections.
6.  When you import a portal site collection from a Version 5.1 portal to a Version 6 portal, the collection configuration data are imported, but not the documents. Therefore, to enable users to search the portal site collection on the target portal, you can either import the portal site collection and then start a crawl, or re-create the portal site collection. For details about how to do this see the topic abut Resetting the default search collection. This restriction does not apply if you migrate your portal site search collections between Version 6 portals.
7.  When you import a collection, a background process fetches, crawls, and indexes all documents that are listed by URL in the previously exported file. Therefore, be aware that the crawling process can require extended memory and time, depending on your Portal Search configuration. For more information, see the topic about Hints and tips for Portal Search crawls.

**Parent topic:**[Setting up search collections ](../admin-system/srcmgsrcont.md)

**Related information**  


[Importing and exporting search collections ](../panel_help/import_export_srch_coll.md)

[Portal Search ](../admin-system/admsrch.md)

[Planning and preparing for Portal Search ](../admin-system/srcbfrwrkgwtprtlsrch.md)

[Administering Portal Search ](../admin-system/srtadmsrch.md)

[Resetting the default search collection ](../admin-system/srtcrtprtlstecllc.md)

[Hints and tips for Portal Search crawls ](../admin-system/srrhinttips_crawl.md)

[Migrating web search collections ](../migrate/mig_t_webcoll.md)

