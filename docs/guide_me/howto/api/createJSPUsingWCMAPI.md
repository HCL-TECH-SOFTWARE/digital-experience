# How to create a JSP using the WCM `QueryService` API

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

For many use cases, using the Web Content Manager (WCM) `QueryService` API is more efficient than using Personalization Rules to select WCM items. This article provides an example JSP that uses the WCM `QueryService` API to select content based on an authoring template and a specific range of last modified dates.

!!!note
    This procedure only works on the base portal and does not apply to virtual portals.

## Instructions

Perform the following steps to create and configure the JSP file:

### Creating the JSP file

1. Create a file named `queryATandDateRange.jsp` at the following location on your HCL DX server:

    ```text
    <wp_profile>\installedApps\(cellName)\wcm.ear\ilwwcm.war\jsp\html
    ```

2. Copy the following code into the newly created JSP file:

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

    !!!note
        - Modify the library name, authoring template name, `fromDate`, and `toDate` values to match your specific environment requirements.  
        - Execute the JSP using a URL structure similar to the following: `http://<hostname>:<port>/wps/wcm/jsp/html/queryATandDateRange.jsp`

### Configuring the JSP in a Web Content Viewer

To use the JSP in a Web Content Viewer do the following steps:

1. Create a new JSP component and set the path to `\jsp\html\queryATandDateRange.jsp`.
2. Reference the new JSP component within the presentation template rendered by your Web Content Viewer.
3. Create a `jsp\html` directory inside the Web Content Viewer WAR file structure and copy the `queryATandDateRange.jsp` file to that location. For example:

    ```text
    <wp_profile>\installedApps\<cell name>\PA_WCMLRingPortJSR286.ear\ilwwcm-localrende.war\jsp\html\queryATandDateRange.jsp
    ```

    !!!note
        If you modify the JSP file at this location, you must restart the HCL DX server instance or restart the `PA_WCMLRingPortJSR286` application within the WebSphere Application Server (WAS) Integrated Solutions Console to apply the changes.

### Passing query parameters in a URL

To evaluate a query parameter passed within the request URL, append code similar to the following example to your JSP:

```java
String testDate = request.getParameter("testDate");
out.println("testDate = " + testDate);
```
