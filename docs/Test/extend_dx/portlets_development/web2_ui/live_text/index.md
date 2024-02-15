# Live text for click-to-action

HCL Digital Experience supports a live text API for user controlled data transfer between components. With live text, a component on a page can declare sources and targets for data transfer. For example, this can be a portlet or a navigation element. When the user clicks on a source element, the portal displays a menu listing targets that match the selected source. When a menu item is selected, the portal invokes the corresponding target passing it the source data. This process is called Click-to-Action \(C2A\).

Both sources and targets are specified by HTML markup that apply live text elements. This means that the HTML markup contains special attributes that marks the HTML fragment as a click-to-action tag.

-   Sources of click-to-action menus provide a data item that is potentially relevant for other components on the page. The data item has an associated type name that is used to determine the targets that can handle this data item.
-   Targets specify the type name that they are interested in and a display title for the click-to-action menu item that represents the target entry. They provide a handler for the received data either as JavaScript code or as a server-side URL to which the data is sent when the menu item is selected.

As both sources and targets are defined by live text elements, all components that contribute HTML markup to a page can provide sources and targets. This includes HCL portlets, JSR standard portlets, and theme and skin components, as well as WCM content or Web clippings. Portlets can register their portlet action or render URLs as server-side targets, but you can also define targets within one portal page that point to another page or even to a Common Gateway Interface \(CGI\) handler outside the portal.

Click-to-action treats all source data as unstructured text. You can encode any information in the source value, but the target handler is responsible for decoding the received data appropriately.

Click-to-action also integrates with the server side portlet communication programming model: If a portlet provides the following server side communication targets, they will automatically be made available for click-to-action on all pages that contain the portlet:

-   Portlet events declared by a JSR 286 portlet in `portlet.xml` with a payload type of `java.lang.String`.
-   Cooperative portlet actions declared by JSR 168 portlets in a WSDL deployment descriptor with an input property of class `java.lang.String`.

Therefore portlets that use these declarations do not need to generate semantic tagging markup for click-to-action targets.

Administrators can turn off the automatic generation of click-to-action targets by specifying a portlet preference `com.ibm.portal.c2a.target.generation = false`.

-   **[Live text formats](w2_smtg_refrmt.md)**  
Application of live text elements to sources and targets is based on special HTML classes that are attached to elements of the HTML markup.
-   **[Integrating click-to-action targets with the person menu](w2_smtg_int_c2atpm.md)**  
Target actions for live text based click-to-action can also integrate with the person menus that are generated for hCard microformats found in the page markup.
-   **[Relation to cooperative portlet wiring](w2_smtg_ref_wire.md)**  
You can use both live text elements and cooperative portlet wires to exchange data between portlets on a page.
-   **[Comparison of the new features with click-to-action in HCL Digital Experience portlets](w2_smtg_ref_compr.md)**  
The user experience of live text elements based click-to-action is similar to that of the click-to-action JSP tags that are available for IBM portlets.


