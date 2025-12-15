# How to count content items of a WCM library on Virtual Portals using Java and JSPs

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

This sample code counts the number of content items (excluding custom workflows) used in libraries stored on a Virtual Portal. This utility supports virtual portals defined via a URL context, but not those defined via a hostname.

!!! warning "Disclaimer"
    HCL Corporation created this sample code to help you troubleshoot issues or develop applications. It is provided "AS IS," without warranty of any kind. HCL is not liable for any damages arising from your use of the sample code, even if HCL has been advised of the possibility of such damages. Debugging custom applications is beyond the scope of the HCL Support Contract.

## Instructions

### Creating the JSP file

Create a file named `countVP.jsp` in the following directory:

```text
<wp_profile_root>\installedApps\(cell name)\wcm.ear\ilwwcm.war\jsp\html\countVP.jsp
```

### Adding the JSP code

1. Copy the following code into the `countVP.jsp` file.  
2. Replace `VirtualPortalName` with the name of your virtual portal.

```jsp
<%@page session="false" contentType="text/html" pageEncoding="ISO-8859-1" %>

<%@ page import="com.ibm.workplace.wcm.api.*"%>
<%@ page import="com.ibm.workplace.wcm.api.exceptions.*"%>
<%@ page import="java.util.*,javax.servlet.jsp.JspWriter,java.io.*"%>
<%@ page import="com.ibm.workplace.wcm.api.query.*"%>
```
To count a large number of items, you might need to increase the server session timeout setting. Use the IBM WebSphere Application Server administration console to go to:
**Application Servers > WebSphere_Portal > Container Settings > Web Container Settings > Session Management**

```jsp
<%
try {
    final class countVP implements VirtualPortalScopedAction {

        countVP() {}

        public void run() throws WCMException {
            Workspace myworkspace = WCM_API.getRepository().getSystemWorkspace();

            if (myworkspace == null) {
                System.out.println("Unable to get a valid workspace.<br/>");
                return;
            }

            myworkspace.login();

            try {
                Iterator libraries = myworkspace.getDocumentLibraries();
                int grandTotal = 0;

                System.out.println("</BR>This utility counts all items except custom workflow items");

                while (libraries.hasNext()) {
                    DocumentLibrary currentlibrary =
                        (DocumentLibrary) libraries.next();
                    myworkspace.setCurrentDocumentLibrary(currentlibrary);

                    System.out.println("</BR></BR>*******************************");
                    System.out.println("</BR>Items for library: "
                        + currentlibrary.getName() + "</BR>");

                    int total = 0;
                    int k;

                    DocumentType[] types1 = {DocumentTypes.Content};
                    k = 0;
                    DocumentIdIterator docIt = myworkspace.findByType(types1[0]);
                    while (docIt.hasNext()) {
                        k++;
                        DocumentId docId = docIt.nextId();
                        System.out.println("Content item = " + docId.getName() + "</BR>");
                    }

                    System.out.println("</BR>Total Content Items = " + k);
                    total += k;

                    System.out.println("</BR>Total items for library \"" 
                        + currentlibrary.getName() + "\" = " + total);
                    grandTotal += total;
                }

                System.out.println("</BR></BR>*******************************");
                System.out.println("</BR>Total items for all libraries = " + grandTotal);

            } catch (Exception e) {
                System.out.println("<br/><br/>EXCEPTION : " + e.getMessage());
                e.printStackTrace();
            } finally {
                myworkspace.logout();
            }
        }
    }

    VirtualPortalScopedAction vpsa = new countVP();
    WCM_API.getRepository().executeInVP(
        WCM_API.getRepository().generateVPContextFromContextPath("VirtualPortalName"),
        vpsa
    );

} catch (Exception e) {
    System.out.println("EXCEPTION : " + e.getMessage());
    e.printStackTrace();
}
%>
```
### Runing the JSP

Open the JSP in a web browser:
`https://<hostname>:<port>/wps/wcm/jsp/html/countVP.jsp`

### Viewing the results
Review the `SystemOut.log` file for a summary of the counted items.