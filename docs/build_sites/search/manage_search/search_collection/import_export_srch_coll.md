# Importing and exporting search collections

You can export search collections from a source portal and import them into a target portal with the Import and Export Collection option. When you export and import a search collection, you are exporting and importing the configuration information and not the actual content from the search index. You might want to export or import verified search collections from a test portal to a production portal; from a local portal to a configuration with remote search; from a single portal to a portal cluster environment; or to stage your portal to production by using the Release Builder. The export and import operations are beneficial when you upgrade to software levels that are not compatible with the data storage format of later versions of the software.

Before you export a collection, make sure that the user who is running the portal application process has write access to the target directory location. Otherwise, you might get an error message, such as File not found.

To include the security information when you export or import the search collection, add the WS\_KEY parameter to the search service that contains the source or target search collection. For more information, see *Exporting and importing search collections* in HCL Digital Experience Product Documentation.

!!! note
    If you do not include the security information when you export or import a search collection, you must manually add the user name and password to each content source after you import the search collection into the target portal.

1.  Specify the target directory location and export your search collection.

    !!! note 
        When you specify the target directory location for the export, be aware that the export can overwrite files in that directory.

2.  Document the following data:

    -   The target file names and directory locations to which you export the collections. For example, C:\\ibm\\wp\_profile\\PortalServer\\collections.
    -   The following configuration data of the collections: location, name, description, and language for each collection.
3.  Create the search collections on the target portal. This task creates the empty shell for the search collection. Complete the following data entry fields and select the following options according to the data that you documented:

    -   Location of Collection: Specify the new collection location.
    -   Name of Collection: Specify the collection name. The name can match the old setting, but does not have to match it.
    -   Description of Collection: Specify a collection description. The description can match the old setting, but does not have to match it.
    -   Specify Collection Language: Select an option to match the old setting.
    -   Select Summarizer: You do not need to select this option. The value is overwritten by the import.
    !!! note
        When you import search collection data into a collection, most of the collection configuration data is also imported. For example, this data includes the content sources, schedulers, filters, and language settings. If you configured such settings when you created the new collection, they are overwritten by the imported settings.

4.  Import the data of your search collections into the target portal. For the import source information, use your documented file names and directory locations to which you exported the collections before the portal upgrade.

    !!! note
        Import collection data only into an empty collection. Do not import collection data into a target collection that has content sources or documents already.


When you import a collection, a background process fetches, crawls, and indexes all documents that are listed by URL in the previously exported file. This process is asynchronous and can require extended memory and time, depending on your Portal Search configuration. To populate the empty search collection again, you must wait until the scheduled crawls of the content source collect content or you must manually start the content sources. For more information, see the topic about *Hints and tips for Portal Search crawls*.

If a search collection is imported to a new environment, you might need to check whether the URLs stored in the content source configuration are still valid.

Additionally to export and import your search collections, you must configure Portal Search on the target portal. This action depends on the requirements of your target portal environment and configuration. For more information, see *Planning, Preparing, and Administering Portal Search topics.*

If you want to migrate from one portal version to a higher version, you need to delete the search collections between the export and the re-import. For more information, see *Migrating web search collections*.

???+ info "Related information"
    - [Exporting and importing search collections](../../../search/portal_search/administer_portal_search/setup_search_collections/srtexpimp.md)
    - [Hints and tips for Portal Search crawls](../../portal_search/hint_tips/srrhinttips_crawl.md)
    - [Planning and preparing for Portal Search](../../planning_portal_search/index.md)
    - [Migrating web search collections](../../../../deployment/manage/migrate/preparing_source_env/migrating_search_cmpt/migrating_websearch_collections/index.md)


