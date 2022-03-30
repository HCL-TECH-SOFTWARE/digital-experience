# Resetting the default search collection 

Under certain circumstances, you might want to change the configuration of the portal site search collection. In this case, you must re-create the collection, as search collections cannot be modified.

The portal site default search collection is created at the first time when an administrator navigates to the search administration portlet Manage Search. This process requires considerations about the configuration tasks that are related to the portal and Portal Search. Consideration must also be given about the sequence by which you complete these tasks. An example scenario might be that you want to run a portal database transfer, for example, from the default database to a different database. In this case, you must create the portal site collection by navigating to the Manage Search portlet before you transfer the database. Otherwise, your portal site collection is not available after the database transfer.

If you created the portal site collection by navigating to the Manage Search portlet before you configured your portal and Portal Search, you might need to re-create the search collection. Example scenarios are as follows:

-   If the preferred language for the portal site crawler user ID did not match the language of the portal site search collection.
-   If you decide to change the default directory location for search collections in your portal installation. For information about how to do this configuration, see the topic about Configuring the default location for search collections.
-   If the file path length for search collections exceeds its limit of 118 characters, the collection cannot be created. In this case specify a shorter value for the parameter DefaultCollectionsDirectory. For details about how to configure this parameter see the topic about Configuring the default location for search collections.

    This file path length problem can occur particularly when the portal site collection is created on one of the following operating systems:

    -   AIX®
    -   HP-UX
    -   Linux™
    -   Solaris
    For details about this length limitation, see the topic about what to do if Creating the portal site search collection fails.

-   If you want to turn the summarizer off so summary information is not generated for your portal and web content.
-   If you want to change the name of the search collection.

1.  Complete the required configuration tasks, such as language or path settings

2.  Create a search collection with the appropriate configuration settings.

3.  Export the content sources from the default search collection.

    In a default portal installation, these sources are the Portal Content Source, which contains portal pages and portlets, and the Web Content Manager Content Source, which contains web content. For more information about exporting a search collection, see the section about *Exporting and importing search collections* in the related links or the Manage Search portlet help.

4.  Import these exported content sources into your new search collection.

    For more information about importing a search collection, see the section about *Exporting and importing search collections* in the related links.

5.  You can now delete the default search collection.


Portal Search starts a new crawl on the portal site search collection.

**Notes:**

1.  On a multilingual portal site, you can create multiple collections in different languages. For details, see the topic about Crawling a multilingual portal site.
2.  When you start the crawl for the first time, a warning message might display. You can ignore this message. For more information, see the topic about Hints and tips for Portal Search crawls.

**Parent topic:**[Searching and crawling Portal and other sites ](../admin-system/srcportals.md)

**Related information**  


[Searching on secured portal sites and pages and content management items ](../admin-system/srtsrchscrprtlstepgs.md)

[Exporting and importing search collections ](../admin-system/srtexpimp.md)

[Crawling a multilingual portal site ](../admin-system/srtmultiling.md)

[Hints and tips for Portal Search crawls ](../admin-system/srrhinttips_crawl.md)

[Manage Search ](../panel_help/h_search_managesearch.md)

[Users cannot see portal site search results in their preferred language ](../admin-system/srrhinttips_no_lang.md)

