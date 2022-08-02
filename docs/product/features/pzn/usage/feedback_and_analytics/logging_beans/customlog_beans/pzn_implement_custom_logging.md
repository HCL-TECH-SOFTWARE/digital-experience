# Implementing custom logging

To implement custom logging, insert a CustomLog bean into your JSP.

The following code provides an example:

```
<jsp:useBean class="com.ibm.wcp.analysis.beans.CustomLog" id="custom" scope="session" />
  
<% custom.log( request, "version", "1.0" ); %>
```

You can also log multiple values. For example:

```
<jsp:useBean class="com.ibm.wcp.analysis.beans.CustomLog" id="custom" scope="session" />

<%
   Hashtable customInfo = new Hashtable();
   customInfo.put( "version", "1.0" );
   customInfo.put( "custLevel", new String[] { "gold", "preferred" } );
   customInfo.put( "custRegion", "West" );
   custom.log( request, customInfo );
%>
```

**Parent topic:**[CustomLog beans](../pzn/pzn_customlog_beans.md)

**Parent topic:**[CustomLog beans](../pzn/pzn_customlog_beans.md)

