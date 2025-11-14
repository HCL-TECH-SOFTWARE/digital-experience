# How to use the WCM API to search for pages in the Portal site library

## Applies to

> HCL Digital Experience 9.5

## Introduction

Normal WCM Authoring search doesn’t work for pages in the Portal site library.

The page title appears as regular text, but the page name is displayed as an object ID.

## Instructions

The following JSP sample code displays the page name and path when you enter the page title.

???+ info "Disclaimer of warranties"
    The following code sample was created by HCL Corporation. It is provided solely to help you develop your applications. This sample is provided as is, without warranties of any kind. HCL is not liable for any damages that result from your use of this sample, even if HCL has been advised of the possibility of such damages.

```java
  <%@page session="false" contentType="text/html" pageEncoding="ISO-8859-1" %>  
  <%@ page import="java.util.*" %>  
  <%@ page import="java.io.*" %>  
  <%@ page import="com.ibm.workplace.wcm.api.*"%>  
 
  <H2>  
  LOOKUP PAGE NAME IN PORTAL SITE LIBRARY BY PAGE TITLE  
  </H2>  
 
  <form action="findPage.jsp" method="GET">  
    Enter page title to search:  
    <br>  
    <input type="text" name="pageName" />  
    <br>  
    <input type="submit" style="display:none">  
  </form>  
  </div>  
 
  <%  
  String pageName = (String) request.getParameter("pageName");  
 
  if(pageName !=  null) {  
    Workspace myworkspace = WCM_API.getRepository().getSystemWorkspace();  
    DocumentLibrary docLibrary = myworkspace.getDocumentLibrary("Portal Site");  
    myworkspace.setCurrentDocumentLibrary(docLibrary);  
    DocumentIdIterator docIt;  
    DocumentType[] types15 = {DocumentTypes.PortalPage};  
    String title =  null;  
 
    docIt = myworkspace.findByType(types15[0]);  
    Document doc = null;  
    Document doc1 = null;  
    DocumentIdIterator doctmp = null;  
    DocumentId docId = null;  
    String path =  "empty";  
    String initialPath = null;  
    String tmpPath[] = null;  
    String tmp =  "Portal Site";  
    int length = 0;  
 
    while (docIt.hasNext()) {  
      docId = docIt.nextId();  
      doc = myworkspace.getById(docId);  
      title = doc.getTitle();  

      if (title.toLowerCase().contains(pageName.toLowerCase())) {  
         initialPath = myworkspace.getPathById(docId,true,true);  
         tmpPath = initialPath.split("/");  
         for( int i = 0; i < tmpPath.length - 1; i++) {  
           if(i>0) {  
                      doctmp = myworkspace.findByName(DocumentTypes.PortalPage, tmpPath[i]);  
                      docId = doctmp.nextId();  
                      doc1 = myworkspace.getById(docId);  
                      tmp = tmp.concat("/");  
                      tmp = tmp.concat(doc1.getTitle());  
                   }  
         }  
        out.println("<br><br>Page Title: " + title + "<br>Page Name: " + doc.getName() + "<br>"  + "Path: " + tmp);  
       }              
     }                
  }  
  %>
 
  <br>  
  <a href="http://server.domain:10039/wps/wcm/jsp/html/findPage.jsp">Search Again</a>  
```
