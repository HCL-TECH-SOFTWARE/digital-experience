# Implementing rating logging

To implement rating logging, insert a Rating bean into your JSP.

Following is an example that demonstrates implementation of rating logging by inserting a Rating bean in a JSP.

```
<jsp:useBean class="com.ibm.wcp.analysis.beans.Rating" id="pref" scope="session" />

<%
    // Note:  The mediaId, collectionName, and rating were added to the request
    //          by the referring page.
    pref.log( request,
             request.getParameter( "mediaId" ),
             request.getParameter( "collectionName" ),
             request.getParameter( "rating" ));
%>
```
!!! note 
    Web applications implementing preference logging must provide a user interface \(UI\) to enable preference setting. Once retrieved from the UI, the preference settings can be logged with the Rating bean.


