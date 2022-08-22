# Implementing PageView logging

To implement Web usage logging, insert a PageView bean in your JSP.

Following is an example of implementing PageView logging:

```
<jsp:useBean class="com.ibm.wcp.analysis.beans.PageView"; id="pageView" scope="session"; />

<%
   pageView.log( request );
%>

```


