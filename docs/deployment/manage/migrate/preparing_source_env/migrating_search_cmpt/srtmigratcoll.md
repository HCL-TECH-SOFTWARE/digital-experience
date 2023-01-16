# Migrating portal search collections

When you migrate or upgrade HCL Digital Experience to a later version, the data storage format and index structure of Portal Search is not compatible with an earlier version. If you migrate your portal to a later version and want to continue using your search collections, you must preserve them before you migrate your portal and import them into the upgraded portal after the migration.

Search collections require manual migration; use the **Import or Export Collection** option of the Manage Search portlet to export and import the search collections. For more information about these tasks and the Manage Search portlet, see the portlet help.

1.  To include the security information when you export the search collection, add the WS\_KEY parameter to the search service that contains the source search collection that you want to export. Complete the following steps:

    1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

    2.  Click **Search Services**.

    3.  Click the **Edit** icon for the search service that contains the search collection that you want to export.

    4.  In the **Parameter key** field, enter WS\_KEY.

    5.  In the **New parameter value** field, enter secret.

    6.  Click **Add Parameter**.

    7.  Click **OK**.

    !!!note
        If you do not export the security information when you export a search collection, you must manually add the user name and password to each content source after you import the search collection into the target portal.

2.  Before you migrate your portal to a later version, export your search collections. This step exports the configuration data of your search collections.

    1.  Click **Manage Search.**

    2.  Click **Search Collections**.

    3.  Click the **Import or Export Collection** icon for the collection that you want to export.

    4.  In the **Specify Location** field, enter the full directory path and XML file name to which you want to export the document collection and its data.

    5.  Click **Export**.

    !!!note "Notes"
        1.  Before you export a collection, make sure that the user who is running the portal application process has write access to the target directory location. Otherwise, you might get an error message, such as File not found.
        2.  When you specify the target directory location for the export, be aware that the export overwrites files in that directory.

3.  For each collection, document the following data:

    -   The target file names and directory locations to which you export the collection.
    -   Location, name, description, and language.
    -   Settings for the **Specify collection language** and **Remove common words from queries** options.

4.  Delete the search collections from your existing portal. Otherwise, they can be corrupted by the import step that follows later.

5.  Upgrade your HCL Portal as needed.

6.  Create empty search collections that you can use later to hold the imported collections configuration.

    Complete the following fields and select the following options according to the information that you documented in step 2:

    -   **Location of Collection**

        The location can match the old setting, but does not have to match it.

    -   **Name of Collection**

        The name can match the old setting, but does not have to match it.

    -   **Description of Collection**

        The description can match the old setting, but does not have to match it.

    -   **Specify Collection Language**

        Select this field to match the old setting as documented in step 2.

    -   **Select Summarizer**

        The value is overwritten by the import process.

    -   **Remove common words from queries (for example. in, of, on, and so on)**

        Check or clear this setting to match the old setting as documented in step 2.

    You do not have to add content sources or documents, as that is completed by the import process.

7.  To include the security information when you import the search collection, add the WS\_KEY parameter to the search service that contains the target search collection. Complete the following steps:

    1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

    2.  Click **Search Services**.

    3.  Click the **Edit** icon for the search service that contains the target search collection.

    4.  In the **Parameter key** field, enter WS\_KEY.

    5.  In the **New parameter value** field, enter secret.

    6.  Click **Add Parameter**.

    !!!note
        If you do not import the security information when you import a search collection, you must manually add the user name and password to each content source after you import the search collection into the target portal.

8.  Check that the target search collections that you created in step 6 are empty.

    Do not import collection data into a target collection that already contains sources or documents.

9.  Import the search collection data into the portal. For the import source information, use your documented file names and directory locations to which you exported the collections before the portal upgrade.

10. Briefly review the content source's configuration settings to check whether information such as host name and security credentials are still valid or must be modified. Make any necessary changes to the content source's configuration settings.

    !!!note
        When you import search collection data into a collection, most of the configuration data such as content sources, schedulers, filters, and language settings are also imported. If you configured such settings when you created the collection, they are overwritten by the imported settings.



