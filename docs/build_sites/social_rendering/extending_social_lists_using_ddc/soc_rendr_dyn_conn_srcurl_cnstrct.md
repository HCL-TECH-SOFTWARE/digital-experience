# Dynamic HCL Connections source URL construction

To dynamically construct HCL Connections query URLs, you can use the \[Plugin:ConnectionsContext\] and \[Plugin:ResourceURL\].

The `[Plugin:ConnectionsContext]` plug-in serves relevant HCL Connections context and configuration information. This includes the service base URLs, the UUID of the community that is associated to the current page, and the source URL of social Atom object entries that a user clicked. For more detailed information about this plug-in, read *The connection context rendering plug-in*.

You can use the `[Plugin:ResourceURL]` to construct complex query URLs. You do so by adding one or more query parameters to an existing Connections service base URL. For more detailed information about this plug-in, read *The resource URL plug-in*.

Example: To dynamically construct the query URL that serves the information about the members of the community that associated to the current page, you create an HTML component that contains the following markup:

```
[Plugin:ResourceURL param="role=all" param="format=full" 
   param="sortBy=created" param="sortOrder=desc" 
   url="[Plugin:ConnectionsContext type='service' 
   key='communities']/service/atom/community/members" 
   compute="always"]
```
<!--
**Related information**  
[The social rendering Digital Data Connector plug-in](../social/soc_rendr_bean_lst_prvdr.md)

[The HCL Connections context rendering plug-in](https://help.hcltechsw.com/digital-experience/8.5/panel_help/soc_rendr_conn_context_plgn.html)

[Organizing your custom HCL Connections queries](../social/soc_rendr_org_cust_conn_qurs.md) -->

