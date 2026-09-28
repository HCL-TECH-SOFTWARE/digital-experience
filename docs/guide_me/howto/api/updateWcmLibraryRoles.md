# How to create a JSP to update WCM library roles using WCM API

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

You can streamline the Web Content Manager (WCM) library role updates by using a JavaServer Pages (JSP) file instead of manually modifying permissions through the user interface. This article describes how to create and execute a JSP file to update WCM library roles using the WCM API in HCL Digital Experience (DX).

## Instructions

To update WCM library roles using a JSP file, perform the following steps:

1. Create a JSP file named `libraryRoles.jsp` in `<wp_profile_root>/installedApps/<cell name>/wcm.ear/ilwwcm.war/jsp/html/`.
2. Paste the following sample code into the JSP file:

    ???+ info "Disclaimer of warranties"
        The following code sample was created by HCL Corporation. It is provided solely to help you develop your applications. This sample is provided as is, without warranties of any kind. HCL is not liable for any damages that result from your use of this sample, even if HCL has been advised of the possibility of such damages.

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

3. In the JSP file, replace the placeholder target library name (`jdrLibrary`) and user Common Name (CN) (`john doe`) with the values for your environment.

4. Execute the JSP using a URL similar to this:

    ```URL
    http://<dx_host>:<port>/wps/wcm/jsp/html/libraryRoles.jsp
    ```
