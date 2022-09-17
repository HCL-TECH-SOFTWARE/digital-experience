# Using the WebSphere Integrated Solutions Console to administer Portal Search

You can administer Portal Search by using the WebSphere Integrated Solutions Console and using resource providers in XML format.

You can administer search services, search collections, and search scopes. You can create, configure, or delete these.

**Exception:** You can administer a user-defined categorizer, but you cannot administer the rules for a user-defined categorizer by using the WebSphere® Integrated Solutions Console.

To administer Portal Search by using the WebSphere Integrated Solutions Console, proceed by the following steps.

1.  Open the WebSphere Integrated Solutions Console.

2.  Select **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Locate and then click **WP\_SearchConfigService**.

4.  Under **Additional Properties**, click **Custom properties**.

5.  Click **PortalSearchService** to edit the resource.

6.  Edit the **Value** field, which displays the value from the XML file that is used to configure Search, and set the parameter as required.

    **Tip:** Refer to the following file for information about the XML schema : `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/search/wp.search.provider/core/service/schema/WplcSearchService.xsd`.

7.  Apply and then save the change.

8.  Restart the portal.



???+ info "Related information"
    - [Planning and preparing for Portal Search](../../planning_portal_search/index.md)
    - [Search service configuration parameters](../administer_portal_search/search_service_params/index.md)

