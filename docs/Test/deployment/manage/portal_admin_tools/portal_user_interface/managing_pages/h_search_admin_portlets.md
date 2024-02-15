# Searching

Use the search feature to search the portlet for portal resources by selecting the type of search and the appropriate search parameters. You can limit the number of portal resources that are listed in the portlet.

Perform the following steps to search:

1.  Select the search type from the **Search by** menu.

    !!!note "Notes"
        1.  The search types that are available depend on the portlet and on the resource type that is listed. The following list shows all search types that can be available in any of the portal administration portlets. Individual portlets usually provide only a limited number of these search types.
    
        2.  Searches for users or user groups can be case-sensitive, depending on the attributes that are used.
    
        3.  Wildcard search by an asterisk ( * ) is required for only some combinations of portal resources and search types. In general, the type of search implies whether an exact string must be entered. For example, for the search types xxx contains and xxx starts with, a wildcard is not usually required, however, for some combinations you can add an asterisk for wildcard search. Examples:

            -   When you search for users or groups by the search type **Name contains**, you can use an asterisk as a wildcard.
            -   When you search for web modules by the search type **Name contains**, you do not need to add the asterisk. For example, to search for WelcomePortlet.war, type welcome without an asterisk in the **Search** field and select search type **Name contains**. The search returns all Web modules that contain the string welcome. Adding an asterisk returns no search results.
        
            When your search does not return the correct results, try by reentering your search with or without an asterisk.

    -   Select **Title starts with** to search on the beginning of a string in the title. This is the default setting, and the input is expected in string format.
    -   Select **Title contains** to search on a string in the title. The input is expected in string format.
    -   Select **Name starts with** to search on a string at the beginning of the name. The input is expected in string format.
    -   Select **Name contains** to search on a string in the name. The input is expected in string format.
    -   Select **Keyword starts with** to search on the beginning of a keyword. The input is expected in string format.
    -   Select **Keyword contains** to search on a keyword. The input is expected in string format.
    -   Select **Description starts with** to search on the beginning of a string in the description. The input is expected in string format.
    -   Select **Description contains** to search on a string in description. The input is expected in string format.
    -   Select **File Name starts with** to search on a string at the beginning of the file name. The input is expected in string format.
    -   Select **File Name contains** to search on a string in the file name. The input is expected in string format.
    -   Select **Unique Name starts with** to search on a string at the beginning of the unique name. The input is expected in string format.
    -   Select **Unique Name contains** to search on a string in the unique name. The input is expected in string format.
    -   Select **Markup starts with** to search the beginning of a string in the markup type. This returns a list of pages that support that markup. The input is expected in string format.
    -   Select **Markup contains** to search on a string in the markup type. This returns a list of pages that support that markup. The input is expected in string format.
    -   Select **Label** to search on a URL context label.
    -   Select **Attributes** to search on a user or group attribute.
    -   Select **Last modified** to search by items that were modified on or since a specific date. The input is expected in YYYY MM DD format.
    -   Select **All available** to return a listing of all items. No input is required.
    -   Select **All provided portlets** to list all portlets that your WSRP Producer portal provides for Consumer portals.
    -   Select **All remote portlets** to list all portlets that your WSRP Consumer portal consumes from Producer portals.
2.  Enter the search parameters in the **Search** field.

3.  Click **Search**.


???+ info "Related information*"  
    -   [Managing pages](../../../portal_admin_tools/portal_user_interface/managing_pages/index.md)
    -   [Managing Web modules](../../../../../extend_dx/portlets_development/mng_portlets_apps_widgets/portlet_management/managing_web_modules/index.md)
    -   [Managing portlet applications](../../../../../extend_dx/portlets_development/mng_portlets_apps_widgets/portlet_management/managing_portlet_apps/index.md)
    -   [Configuring your portal for Web services](../../../../../extend_dx/portlets_development/mng_portlets_apps_widgets/portlet_management/cfg_portal_for_webservices/index.md)
    -   [Working with resource permissions](../../../../../deployment/manage/security/people/authorization/controlling_access/working_with_resource_permission/index.md)
    -   [Managing permissions for users and groups](../../../../../deployment/manage/security/people/authorization/controlling_access/user_group_permission/index.md)
    -   [Creating meaningful URLs for your site](../../../../../deployment/manage/config_portal_behavior/h_main_url.md)
    -   [Managing custom unique names](../../../../../build_sites/portal_settings/manage_custom_unique_names/index.md)
    -   [Managing virtual portals](../../../../../build_sites/virtual_portal/wcm_mngpages_virtualportal.md)