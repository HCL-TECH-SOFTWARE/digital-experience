# The Personalization interface

The Portal Personalization user interface consists of three portlets: the Personalization Navigator, Personalization Editor, and the Personalized List.

These portlets are automatically installed with HCL Portal. Although personalization services can be used in portlets supporting remote WSRP services, the personalization portlets do not support being used as a remote WSRP service.

## Personalization Navigator

The Personalization Navigator is the main navigation interface. Users explore the repository with a tree structure--directories display on one side of the window, and elements within a selected directory display in the other part of the window. The view can be modified to eliminate the side of the window with the tree structure, and instead list all directories and elements in a hierarchical list. A drop-down list enables users to show all elements in Personalization, or filter the view to display a single element type \(such as rules or campaigns\). The following table shows which views are available:

|List view|Description|Properties shown|
|---------|-----------|----------------|
|Browse Personalization Resources \(tree\)|This tree view will show only artifacts created by Personalization. For example, rules, campaigns, resource collections.|Name, Creator, Last Modified, Node Type|
|Browse Rules \(tree\)|This tree view will show only Personalization rules. This view will also show the type of each rule; for example, Select Action or Profiler.|Name, Creator, Last Modified, Return Type, Rule Type|
|Campaigns \(list\)|Campaigns will be a specialized list view. In the action bar for the view, there will be a scope drop down. The scope drop down will allow the user to pick an execution scope. The campaigns from the scope context of that execution scope will be shown. When the scope setting is global as by default, there will be no drop down and all campaigns will be shown. As with all views, the Edit Mappings action will be available when a campaign is selected.|Name, Priority, Split, Start Date, End Date|
|Rule Mappings by Campaign \(list\)|This view is launched either by the drop down for selecting a view, or by the Edit Mappings action for a campaign. The view shows a list of mappings for a given campaign.|Spot Name, Rule Name, Content Type, Split, Start Date, End Date|
|Collections \(list\)|This view will allow a user to see all resource collections and application objects created under a collection.|Collection Name, IBM® Java™ Content Repository\(True / False\), Collection Type \(User / Content\)|
|Events|This view will allow a user to see all rule events on the system.| |

In addition to navigation, the Personalization Navigator is where users control the repository content. Users can move, copy, import and delete elements, and create new elements. When users create a new element \(by selecting **New** from the Personalization Navigator menu\), they are automatically taken to the Personalization Editor.

You can also access the Resource Permissions portlet to set access control on individual personalization items from the Personalization Navigator by clicking **Edit Access** \> **Extra Actions**.

## Personalization Editor

This portlet is where users edit element content or information. Selecting a new element from the Personalization Navigator activates the edit mode, where users enter data, depending on the element chosen. To edit an existing element, users highlight the item in the Personalization Navigator. They return to the Personalization Editor and click **Edit** on the Edit item tab.

## Personalized List

The Personalized List portlet allows a user to display personalized content without having to build a custom JSP portlet. Each portlet can display a list of resources and show details for each returned resource. Groups of related resources may be categorized for easy viewing. When a more detailed view of a piece of content is required, a custom detail JSP may be specified. Different instances of the portlet may be used across HCL Portal to quickly and easily deploy customized information to users.

**Parent topic:**[Digital Experience Personalization](../pzn/pzn_overview.md)

**Previous topic:**[Personalization terms](../pzn/pzn_concepts.md)

**Next topic:**[Publishing personalization rules](../pzn/pzn_depub.md)

**Parent topic:**[Digital Experience Personalization](../pzn/pzn_overview.md)

**Previous topic:**[Personalization terms](../pzn/pzn_concepts.md)

**Next topic:**[Publishing personalization rules](../pzn/pzn_depub.md)

