# Customizing the All Sources scope 

Delete or replace the All Sources default scope.

When the user clicks the **Search Center** menu list to select a scope, the first scope on the list is the default scope. By default, All Sources is set to be the default scope.

All Sources scope is a special scope in portal. This scope has a unique ID and it searches in all the search collections that are accessible to the user, including collections from existing local and remote search services. The All Sources scope can be deleted or customized just like other search scopes. Three possible actions can be done on the All Sources scope:

-   Choose a different default scope
-   Delete the All Sources scope
-   Readd the All Sources scope

To change the default search scope from All Sources to a different scope, reorder the scopes by using search administration:

1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.
2.  Click **Search Scopes**.
3.  Move the scope that you want to be the default scope to the beginning of the scopes list by clicking the up-arrow icon next to the scope name. The first scope on the list becomes the default search scope.

**Note:** Users must clear their browser cache for the new scope to be available and displayed in the correct position.

The All Sources scope is created by using a mechanism that is called out-of-the-box \(OOB\) scopes registration and it is stored as a property in the WebSphere® Integrated Solutions Console. Since the All Sources scope is added by using the OOB scopes registration mechanism, you must delete the All Sources scope by using both the WebSphere Integrated Solutions Console and the search administration interface:

1.  Remove the All Sources scope from the scopes list by using search administration:

    1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

    2.  Click **Search scopes**.

    3.  Delete the All Sources scope.

2.  Remove the All Sources property from the WebSphere Integrated Solutions Console:

    1.  In the navigation click **Resources** \> **Resources Environment** \> **Resource Environment Providers**.

    2.  Make the appropriate selection, depending on your version of WebSphere Application Server and your portal environment:

        -   In the Resource Environment Providers page, select the appropriate node or cluster from the scopes drop-down list, or uncheck the Show Scope selection drop-down check box and select one of the following options, depending on your portal environment:
            -   If your portal is running as a single server, select **Browse Nodes** and select the node.
            -   If your portal is installed in a cluster, select **Browse Clusters** and select the portal cluster.
    3.  Select the **WP ScopeConfigService** service.

    4.  Click **Custom Properties**.

    5.  Select the **All Sources** property and delete it.


You can readd the All Sources scope only if this scope does not exist in the current scopes list. The All Sources scope is added by using the WebSphere Integrated Solutions Console. Once you add it using the console, it is automatically added to the Search Center scopes list. A service that is called ScopeConfigService is registered and the configured All Sources scope is added as custom property of this service. The scope is implemented based on a scope XML element.

1.  In the navigation click **Resources** \> **Resources Environment** \> **Resource Environment Providers**.
2.  Make the appropriate selection, depending on your portal environment:
    -   In the Resource Environment Providers page, select the appropriate node or cluster from the scopes drop-down list, or uncheck the Show Scope selection drop-down check box and select one of the following options, depending on your portal environment:
        -   If your portal is running as a single server, select **Browse Nodes** and select the node.
        -   If your portal is installed in a cluster, select **Browse Clusters** and select the portal cluster.
3.  Select the **WP ScopeConfigService** service.
4.  Click **Custom Properties**.
5.  Click **New** to create a new scope property.
6.  Name the new property **All Sources**. Enter this XML scope element as the property value:

    ```
    <scope id="com.ibm.lotus.search.ALL_SOURCES">
    <title xml:lang="en">All Sources</title>
    <description xml:lang="en">All Sources accessible by the user</description>
    <scopeProperty key="iconURI" value="/wps/images/icons/scope\_search\_all.gif"/>
    <scopeProperty key="isVisibletoAnonymousUser" value="true"/>
    <scopeElement></scopeElement>
    </scope>
    
    ```

    **Note:** You can change the name, description, and icon for the new scope. To create a scope in a language other than English, change the xml:lang attribute to the required locale, such as de for German.

7.  Click **Save** to save the new property.

**Parent topic:**[Customizing the Search Center ](../admin-system/srtcentercustomze.md)

**Related information**  


[Configuring search scopes for the Search Center portlet ](../admin-system/srtcfg_sc_scopes.md)

