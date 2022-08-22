# Current Request Attributes rule

Use Current Request Attributes to inspect request attributes which can be set on the current JSP.

To use current Request attributes, you must know the name of the request attribute to use it in a rule. This request is the request passed into the content spot executing the rule. For example, you would use the portlet request to set the current Request attribute for portlets. The portlet request is not shared among portlets.

For jsps directly within a Web application, the current Request Attribute is the HTTP request of the Web application. Consider the following code that can be inserted into a JSP to set a request attribute:

```
<%
 request.setAttribute("user", userObject);
%>
where userObject is of any Object type
```

An example rule condition constructed to evaluate the previous example might be:

```
when current Request Attributes.user is equal to rob
```

All data types are supported.


