# Implementing action logging

To implement action logging, insert an Action bean into your JSP. To log additional application data associated with the action, add key/value pair information to the log method call.

To implement action logging, insert an Action bean into your JSP, for example:

```
<jsp:useBean class="com.ibm.wcp.analysis.beans.Action" id="action" scope="session"/>


<%
   // Note: Both the resource id and collection name were added to the request 
   // by the referral page.
   action.log( request,
               request.getParameter( "resourceId" ),
               request.getParameter( "collectionName" ),
               "ItemView" );
%>
```

To log additional application data associated with the action, add key/value pair information to the log method call in. For example:

```
<jsp:useBean class="com.ibm.wcm.analysis.beans.Action" id="action" scope="session"/>

<jsp:useBean class="ShoppingCart" id="cart" scope="session"></jsp:useBean>

<%
   // Log last item added to shopping cart with quantity and size data.
   Hashtable actionInfo = new Hashtable();
   Product[] cartItems = cart.getItems();
   actionInfo.put( "quantity",
                   new String( cartItems[cartItems.length - 1].getQuantity() ));
   actionInfo.put( "size", cartItems[cartItems.length - 1].getSize() );
   action.log( request,
               cartItems[cartItems.length - 1].getId(),
               null,
               "Shopping Cart Insert",
               actionInfo );
%>
```

**Parent topic:**[Action beans](../pzn/pzn_action_beans.md)

