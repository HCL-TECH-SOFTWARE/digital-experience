# wp.analyticsTagList 

Attaches marketing information to Portal resources such as portal pages, portlets, or web content items. Reads the analytics tags that are associated with an identifiable portal resource.

For more information, see [Analytics tags and site promotions](../admin-system/sa_asa_anal_tags_site_prom.md#)

Attributes:

-   **get\(objectid\)**

    Determines the list of analytics tags for the portal resource with the given objectID.

    Example:

    ```
    <c:forEach items="${wp.analyticsTagList[wp.identification[wp.selectionModel.selected]]}" var="current">    
         <span class="asa.tag.<c:out value='${current.name}'/>"><c:out value='${current.value}' /></span> 
    </c:forEach>
    ```

    Parameters:

    -   **objectid**

        An ObjectID, or Identifiable object to locate the resource; must not be null.

    Returns: A list containing [AnalyticsTag](themeopt_el_bean_analy_tag.md#) objects. You can use the forEach JSTL tag to iterate through the returned list.


