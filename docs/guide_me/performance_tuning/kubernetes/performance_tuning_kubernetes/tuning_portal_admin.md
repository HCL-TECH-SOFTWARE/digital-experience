# Tuning via HCL Portal Administration

## Disable Search

Search can be disabled to improve performance if the search feature is not needed.

**How to Set**

Navigate to Was Console-> Resource environment providers->JCR ConfigService PortalContent->Custom properties

**jcr.textsearch.enabled property to false**

In the HCL Portal Administration Page

Search Administration/Manage Search → Search Collections → Delete all collections.

WP 8.0.0.1 CF09 introduced (from PI05486) the new ConfigEngine Task 'Delete Search Service and Collections'. In Portal 9.5 it is included as well. To run this task:

**ConfigEngine.sh action-delete-search-services-and-collections-wp.search.service**

See [PI05486: SCRIPT FOR REMOVING THE DEFAULT SEARCH SERVICE (LOCAL) AND ITS SEARCH COLLECTIONS](http://www-01.ibm.com/support/docview.wss?uid=swg1PI05486){target="_blank"} for more information.

These collections include the JCR collection and the “Default Search Collection”.

Note that these search collections do not include the WCM Authoring search indexer. 

During our medium configuration testing, we encountered numerous SSL errors while attempting to access the local environment. To mitigate this, we disabled all search collections on all core pods. Specifically, we set the jcr.textsearch.enabled property to false and deleted the search collections.

Since our performance tests focused on rendering the search center portlet without using the actual search functionality, this adjustment helped us avoid unnecessary processing and potential errors. We recommend considering this approach in your tests if the search functionality is not required, as it can help streamline performance and reduce errors in similar scenarios.