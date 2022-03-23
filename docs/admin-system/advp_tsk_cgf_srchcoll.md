# Configuring search collections for a virtual portal 

Configuring JCR search collections for a virtual portal might require additional administration, depending on how you set up the virtual portal.

When you create a virtual portal, the creation of the JCR search collection depends on whether you create the virtual portal with or without content:

-   If you create the virtual portal with content, the portal creates the JCR collection for the virtual portal by default.
-   If you create only the virtual portal and add no content to it, the portal creates no JCR collection with it. It gets created only when content is added to the virtual portal.

You can view the URL of the JCR search collection in the search administration portlet Manage Search of the virtual portal. The URL looks as follows: `http://host_name:port_number/wps/seedlist/myserver?Action=GetDocuments&Format=ATOM&Locale=en_US&Range=100&Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0&SeedlistId=wsid@ootb_crawlerwsid`Where wsid is the actual workspace ID of the virtual portal. The workspace ID is the identifier of the workspace in which the content item is created, stored, and maintained. For example, if the workspace ID of the virtual portal is 10, then the URL looks as follows:`http://host_name:port_number/wps/seedlist/myserver?Action=GetDocuments&Format=ATOM&Locale=en_US&Range=100&Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0&SeedlistId=10@ootb_crawler10` If the JCR search collection was deleted, or if you added content to an originally empty virtual portal and the JCR search collection was not automatically created, complete the following steps:

-   If you are using a virtual portal, go to the Security tab of the content source to verify that the workspace ID of the virtual portal is correct.
-   If the JCR search collection was deleted, run the ConfigEngine task `create-textsearch-collections` to re-create the JCR search collection.

If neither of the preceding options succeed in creating the JCR search collection, manually set up the JCR search collection.

To view the steps to manually set up a JCR search collection, see *Setting up a JCR search collection* in the related links.

**Parent topic:**[Search ](../wcm/wcm_dev_search.md)

**Previous topic:**[Configuring search in a portal farm ](../install/config_search_farm.md)

**Next topic:**[Portal Search ](../admin-system/admsrch.md)

