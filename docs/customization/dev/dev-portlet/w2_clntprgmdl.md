# The client side portlet programming model

You can use the client side programming model to make use of AJAX techniques in your standard API portlets.

You can use the client side programming model for writing your portlets. You can do everything with the client side programming model that you can do with the server side portlet programming model. Additionally, the client side programming model has the following advantages:

-   The client side portlet programming model works in both client side aggregation \(CSA\) and server side aggregation \(SSA\).
-   Improved user experience by faster response and performance. Portlets that use the clients side programming model render faster, as the portal does not re-render the whole page, but only the aspects of the portlet that change.
-   The client side programming model allows you to handle changes of the portlet mode and window state, preferences, and user customization of user profile locally. This provides a faster response time for the user. A fragment that contains the customization is later sent to the server and saved.
-   Writing portlets to the client side programming model does not require deep Java knowledge. You can write such portlets as HTML code with css style sheets and JavaScript. They have few or no JSPs. Example scenarios for writing client side portlets are:
    -   A user can add some markup to the portlet view by selecting options in a form.
    -   Preference changes that a user makes to the portlet are applied immediately in the browser view without reloading the whole portlet. The preference change is later sent to the server and saved.
    -   Access to the user profile on the client side.
    -   Portlet mode changes are performed entirely on the client. Performance improves as no server-client communication is required.
    -   The portlet can retrieve markup fragments from the server. The user does not notice this, as the ATOM feed format is hidden by the XMLPortletRequest implementation, similar to a XMLHttpRequest \(XHR\).
    -   XSLT and XPath helper functions make it easier to handle XML feeds.

For the full description of the JavaScript interfaces refer to the Web 2.0 Javadoc documentation available on developerWorks.

-   **[Getting started with the client-side programming model for portlets](../dev-portlet/w2_clntprgmd_start.md)**  
Getting started with the client-side programming Model requires a few updates to the portlet JSPs.
-   **[Handling portlet preferences on the client](../dev-portlet/w2_clntprgmd_clntprfs.md)**  
One of the most useful aspects of the client side programming model is the ability to read, modify, and save portlet preferences on the client.
-   **[Changing portlet mode and window state on the client side](../dev-portlet/w2_clntprgmd_pltmdst.md)**  
With the client-side programming model, you can handle portlet mode and window state changes entirely on the client, rather than requiring a full server-client roundtrip.
-   **[JavaScript namespacing - observing good practice](../dev-portlet/w2_clntprgmd_jsnsp.md)**  
The client side context of Web programming requires good namespacing.

**Parent topic:**[Web 2.0 user interface features](../dev-portlet/w2_ovu.md)

