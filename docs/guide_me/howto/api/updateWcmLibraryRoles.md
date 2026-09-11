# How to create a JSP to update WCM library roles using WCM API

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Some customers routinely update the WCM library roles/permissions. This can be time-consuming using the WCM Libraries Portlet/UI. Using a JSP can reduce time required for this task. 

## Instructions

???+ info "Disclaimer of warranties"
    The following code sample was created by HCL Corporation. It is provided solely to help you develop your applications. This sample is provided as is, without warranties of any kind. HCL is not liable for any damages that result from your use of this sample, even if HCL has been advised of the possibility of such damages.

Create this JSP File:    `..../(profile root)/installedApps/(Cell Name)/wcm.ear/ilwwcm.war/jsp/html/libraryRoles.jsp`

Paste these contents into the JSP:

```java
<%@ page import="com.ibm.workplace.wcm.api.*"%>
<%@ page import="com.ibm.workplace.wcm.api.exceptions.*"%>
<%@ page import="java.util.*,javax.servlet.jsp.JspWriter,java.io.*"%>

<%
try {
  final javax.naming.Context ctx = new javax.naming.InitialContext();

  WcmLibraryService wcmLibraryService = (WcmLibraryService) ctx.lookup("portal:service/wcm/WcmLibraryService");

  Workspace myWorkspace = WCM_API.getRepository().getSystemWorkspace();
 
  myWorkspace.login();
  
  DocumentLibrary myLibrary = myWorkspace.getDocumentLibrary("jdrLibrary");
    
  DocumentLibraryACL myACL = myLibrary.getLibraryAccess();
 
  //Add user with cn "john doe" to Editor Role on the library
  myACL.addMembers(LibraryMemberRoles.Editor, new String[] {"john doe"});

  myLibrary.setLibraryAccess(myACL);

  wcmLibraryService.saveLibrary(myWorkspace, myLibrary);

  myWorkspace.logout();

  out.println("Set user as editor");
}

catch (Exception e) {
   out.println("Exception " + e.getMessage());
   e.printStackTrace();
}
%>
```

Modify the jsp for a library name and user CN appropriate for your environment then execute the jsp using a url similar to this:

```url
http://host:port/wps/wcm/jsp/html/libraryRoles.jsp
```