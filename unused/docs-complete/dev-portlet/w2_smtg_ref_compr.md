# Comparison of the new features with click-to-action in HCL Digital Experience portlets 

The user experience of live text elements based click-to-action is similar to that of the click-to-action JSP tags that are available for IBM portlets.

However, the underlying technologies are different, and the functional possibilities of live text go beyond click-to-action JSP tags. This results in important distinctions:

| |New: Live text for click-to-action|Click-to-action JSP tags for HCL portets|
|--|----------------------------------|----------------------------------------|
|How sources and targets are declared.|Sources and targets can be declared by any HTML fragment on a page, including portlets, theme components or simple HTML clippings. JSR portlet actions declared in a cooperative portlet WSDL are automatically registered as targets.|Sources and targets can only be declared within HCL portlets. Sources are declared by using JSP tags and targets are declared with a cooperative portlet WSDL.|
|How targets are handled|Targets can register client side \(JavaScript\) or server side \(FORM submission\) handlers for click-to-action.|Target actions are always handled with a server call.|
|Where menu contents are computed|Menu contents are computed on the client when the user clicks on a source. This results in improved performance and smaller markup size.|Menu contents are computed on the server when the JSP tags are rendered.|
|Whether menus can be customized|Menu appearance can be customized for each source by specifying a HTML menu head.|Menu appearance cannot be customized.|
|Whether cross-page actions are possible|Sources and targets must be defined on the same page. Target URLs can lead to a different page in the portal when they are selected.|Cross-page actions can be selected from sources on all pages.|
|Whether multiple targets are allowed|Only a single target is available for one user action.|Source data can be distributed to multiple targets with a single click.|
|Whether portlet wiring is supported|No wiring support is available.|Users can automate actions by pressing **Ctrl** and clicking on a menu item.|

**Parent topic:**[Live text for click-to-action ](../dev-portlet/w2_smtg.md)

**Related information**  


[Portlet communication ](../dev-portlet/pltcom_ptlt_com.md)

