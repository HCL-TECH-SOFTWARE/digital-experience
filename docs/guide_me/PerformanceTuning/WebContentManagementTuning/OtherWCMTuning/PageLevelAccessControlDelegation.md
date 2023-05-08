# Page Level Access Control Delegation

A significant benefit can be achieved by enabling the Use Page Security option with pages that have web
content associated with them. This setting bypasses the access control settings on the content items and
instead defers to the access control settings of the page. By default this feature is disabled. Benchmarks are
run with this setting disabled as well. However, on our WCM rendering scenario we measured a 7.5%
increase in capacity when using this feature.

## How to Set

In the WebSphere Portal Administration Page:
- Manage Pages -> Content Root  <Page(s) to be modified> -> Edit Page Properties
- Open Advanced options -> I want to edit associations
- On the content item enable Use Portal Page Security
- Click OK

[Set Page Level Access Control Delegation for WCM](../../../../images/SetPageLevelAccessforWCM.png)
