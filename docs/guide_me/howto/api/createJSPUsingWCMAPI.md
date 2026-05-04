# How to create a JSP using WCM API queryservice to select content by Authoring Template and range of LastModifiedDates

## Applies to

> HCL Digital Experience 9.5

## Introduction

In many use-cases it is more efficient to use the WCM queryservice api instead of Personalization Rules to select WCM items.

This document provides an example JSP for doing this.

!!!note
    This only works on the base portal and not on a virtual portal.

## Instructions

Create a file named "queryATandDateRange.jsp" at this location on your portal server:

....\WebSphere\(profileRoot)\installedApps\(cellName)\wcm.ear\ilwwcm.war\jsp\html

Copy these contents into the jsp file just created:

```java
<%@ page import="com.ibm.workplace.wcm.api.*"%>
<%@ page import="java.util.*,javax.servlet.jsp.JspWriter,java.io.*,java.text.*"%>
<%@ page import="com.ibm.workplace.wcm.api.query.*"%>

<%

 try {


   Workspace myworkspace = WCM_API.getRepository().getSystemWorkspace();
  
   myworkspace.login();
 
   Library atlib = myworkspace.getDocumentLibrary("Web Content");
   QueryService queryService = myworkspace.getQueryService();

   Query query = queryService.createQuery();
   query.addSelector(Selectors.libraryEquals(atlib));
   query.addSelector(Selectors.typeEquals(AuthoringTemplate.class));
   query.addSelector(Selectors.nameLike("Article"));
   ResultIterator results = queryService.execute(query);

   Identity atid = ((AuthoringTemplate)results.next()).getIdentity();
   out.println("<h3>cmt AT \"" + atid + "\"</h3>");

   Query query2 = queryService.createQuery(Content.class);
   query2.addSelector(Selectors.libraryEquals(atlib));
   query2.addSelector(Selectors.authoringTemplateEquals(atid));

   SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
   Date fromDate = format.parse ( "2020-03-01" );
   Date toDate = format.parse ( "2020-03-03" );

   query2.addSelector(HistorySelectors.modifiedSince(fromDate));
   query2.addSelector(HistorySelectors.modifiedBefore(toDate));

   ResultIterator results2 = queryService.execute(query2);

   while (results2.hasNext())
     {
           Content content = (Content) results2.next();
           out.println("<br>content: " + content.getName());
     }

   myworkspace.logout();

 }

 catch (Exception e) {

   out.println("Exception " + e.getMessage());
   e.printStackTrace();

 }

%>
```
Change the library name, authoring template name, fromDate, toDate per your environment. 

Execute the jsp using a url similar to this:

http://host:port/wps/wcm/jsp/html/queryATandDateRange.jsp

To use the jsp in a Web Content Viewer, create a jsp component (use path \jsp\html\queryATandDateRange.jsp). 

Reference that jsp component in the presentation template rendered in the Web Content Viewer. 

Create the "jsp\html" directory in the Web Content Viewer war and copy the jsp to that location. For example:

....\wp_profile\installedApps\(cell name)\PA_WCMLRingPortJSR286.ear\ilwwcm-localrende.war\jsp\html\queryATandDateRange.jsp

Note if you edit the jsp at this location, you will need to restart portal or restart the PA_WCMLRingPortJSR286 application in the WAS Admin Console. 

To use a query parameter passed in the url, add code similar to this to the jsp:

   String testDate = request.getParameter("testDate");
   out.println("testDate = " + testDate);