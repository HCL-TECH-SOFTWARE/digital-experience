# Implementing custom HCL Connections queries

HCL Connections provides a comprehensive remote API. You can use this API to access social data through Atom feeds.

For more information about the API, read *HCL Connections 4.5 API Documentation*.

You can build custom queries for social data by constructing corresponding query URLs. To render the result of such a query on your portal pages by using HCL Web Content Manager design components, proceed as follows:

1.  Identify or create the list-rendering profile for the data format that your query URL serves.

    For example, your query might use the HCL Connections Forums remote API to query for a specific set of forum topics. In this case, you can use the forum topics ibm.portal.sr.forums.topics profile to transform the result documents that this URL serves.

2.  Establish the list-rendering context for this query. To do so, specify your query URL as a source attribute, and address the appropriate Digital Data Connector \(DDC\) for HCL Portal plug-in that can handle your request.

    You have two choices:

    -   If the profile that you use is based on the profiles that are included with HCL Digital Experience Version 8.5, you can use the social rendering DDC plug-in.
    -   If you use a custom list-rendering profile, you can use either the generic XML DDC plug-in or a custom DDC plug-in that you deployed.
    Example: To retrieve the list of all public communities, you establish the list-rendering context as follows:

    ```
    [Plugin:ListRenderingContext action="set" 
       extension-id="ibm.portal.ddc.sr" 
       profile="ibm.portal.sr.communities" 
       attribute="source=https://www.cntserv_exmp.com/connections/communities/service/atom/catalog/public"]
    ```

3.  To render the result, you must render an appearance component of Digital Data Connector. In that component, you extract the individual pieces of information. You do so by using the `[AttributeResource]` tag and the attribute names that the list-rendering profile that you use supports.

    Example: In the community query that is shown in the previous step, you can render a link to a detail view of the community. You do so by adding the following markup to your Result Design section of the DDC appearance component:

    ```
    <a href="[AttributeResource attributeName='link']">
        [AttributeResource attributeName='title']
    </a>
    
    ```

4.  After the rendering of the appearance component is completed, make sure to remove the list rendering context again. This is especially important if you want to nest list rendering contexts to render nested lists.

    You remove the list rendering context as follows:

    ```
    [Plugin:ListRenderingContext action="remove"]
    ```

    For more information, read *Setting the list-rendering context*.



???+ info "Related information:"
    - [The HCL Connections context rendering plug-in](https://help.hcltechsw.com/digital-experience/8.5/panel_help/soc_rendr_conn_context_plgn.html)
    - [Setting the list-rendering context](https://help.hcltechsw.com/digital-experience/8.5/panel_help/plrf_list_render_context.html)

