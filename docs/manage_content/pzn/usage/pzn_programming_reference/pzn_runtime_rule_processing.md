# How the rules engine works

The rules engine processes and delivers the results of a rule execution to a content spot contained in a web page. The content spot is marked by a content spot bean, which is placed in either a JSP file or a servlet. The JSP file or servlet is then linked to the web page.

At run time, the content spot bean searches for the best rule to fill the spot with personalized data. The best rule to use depends on the campaigns that are set up to run. The rule that is mapped to the content spot in the campaign with the highest priority is run to personalize your web page.

Rule processing results in the return of a set of resources or a profiler. The returned resources or profiler can be used for generating a partial or entire web page. The figure illustrates how a rule is processed.

![rule processing](../images/rules_proc.jpg)

Step A: The process begins when a user requests a JavaServer Page \(JSP\) or servlet in which a content spot bean is embedded. The content spot bean contains the code to find and run the rule. When the web server receives the client request for the JSP or servlet, the web server passes the JSP or servlet request to the IBM® WebSphere® Application Server, which then starts its JSP or servlet processor.

The content spot bean can be embedded in the JSP by using any JSP editor. The following example code demonstrates how to embed and use a content spot bean in a JSP.

**Note:** IBM Rational® Application Developer provides a visual JSP editor \(Page Designer\) that simplifies the development task and generates the JSP scriptlet coding for you.

The bean is embedded by using the JSP useBean tag. The HTTPServletRequest object is passed to the bean within the body of the useBean tag. The content spot bean properties are retrieved in the same manner as retrieving properties for any JavaBeans. The getRuleContent method of the contactsByLocation content spot bean determines the appropriate rule to run. This action is based on campaigns that have a rule that is mapped to the spot, runs the rule, and returns the results. The bean returns an array of Personnel objects.

|```
 <jsp:useBean id="contactsByLocation" class="GetContactsByLocation">
 <% contactsByLocation.setRequest(request); %>
 </jsp:useBean>
 <%
 try {
 Personnel[] contentArray = contactsByLocation.getRuleContent();
 Personnel theContent = contentArray[0]; // throws an exception if empty
 %>
 <TABLE border="1">
 <TBODY> <TR>
 <TD>Last Name</TD>
 <TD>First Name</TD>
 <TD>Role</TD>
 <TD>Site</TD>
 </TR>
 <% for (int _i0 = 0; ; ) { %>
 <TR>
 <TD><%= theContent.getLastName() %></TD>
 <TD><%= theContent.getFirstName() %></TD>
 <TD><%= theContent.getRole() %></TD>
 <TD><%= theContent.getSite() %></TD>
 </TR>
 <% _i0++;
 try {
 theContent = contentArray[_i0];
 }
 catch (java.lang.ArrayIndexOutOfBoundsException _e0) {
 break;
 }
 } %>

 </TBODY>
 </TABLE>
 <% }
 catch (java.lang.ArrayIndexOutOfBoundsException _e0) {
 } %>
 
```

|

**Note:** When you decide to add personalized content to a web page, all that is needed to develop the JSP is the content spot bean. The content spot can display personalized data of a single data type \(for example, Personnel in this example\). The web developer does not need to know where or how the content is retrieved only that personalized content of type Personnel is returned and it has a set of properties to be displayed.

Step B: When the embedded content spot bean is started, the processor passes the HTTP servlet request object to the content spot bean. The client request is used to initialize the RequestContext. The RequestContext provides access to the resources needed for rule processing. Those resources include collections, application objects, requests, and sessions. The RequestContext is applicable for the life of the HTTP request.

Step C: The Personalization rules engine find the appropriate rules in the IBM Java™ Content Repository and runs them

Step D: The rules engine processes the rule to obtain the results of the rules execution.

Step E: The rules engine returns the result of the rule execution to the content spot bean. The result can be a list of valid content from which a user can make a selection, a string, a Boolean value, or no results. The JSP scriptlet or servlet uses the rule result to derive specific web content for use in the generated web page. The web server forwards the page to the client.


