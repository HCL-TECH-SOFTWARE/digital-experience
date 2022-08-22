# Implementing category logging

To implement category logging, insert a Category bean into your JSP.

Consider the following code for inserting a category bean in your JSP.

```
<jsp:useBean class="com.ibm.wcp.analysis.beans.Category" id="category" scope="session"/>
<% category.log( request, "Sports" ); %>
```

You can also pass an object to a JSP and implicitly log the content category. For example:

```
<jsp:useBean class="com.ibm.wcp.analysis.beans.Category" id="category" scope="session"/>

<%
   NewsManager newsManager = new NewsManager();
   News news = newsManager.findById( request.getParameter( "newsId" ), null );
   category.log( request, news );
%>
```

In the previous example, the category bean logs the news category by querying the `LoggableResource` interface to get the category.

**Parent topic:**[Category beans](../pzn/pzn_category_beans.md)

