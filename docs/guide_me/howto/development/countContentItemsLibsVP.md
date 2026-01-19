# How to count WCM library content items on virtual portals using Java and JSPs

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

This sample code counts the number of content items (excluding custom workflows) used in libraries stored on a virtual portal. This utility only supports virtual portals defined using a URL context, not virtual portals defined using a hostname.

!!! warning "Disclaimer"
    HCL Corporation created this sample code to help you troubleshoot issues or develop applications. It is provided "AS IS," without warranty of any kind. HCL is not liable for any damages arising from your use of the sample code, even if HCL has been advised of the possibility of such damages. Debugging custom applications is beyond the scope of the HCL Support Contract.

## Instructions

1. Create a file named `countVP.jsp` in the following directory:

    ```text
    <wp_profile_root>\installedApps\(cell name)\wcm.ear\ilwwcm.war\jsp\html\countVP.jsp
    ```

2. Copy the following code into the `countVP.jsp` file. Ensure to replace `VirtualPortalName` with the name of your virtual portal.

    ```jsp
    <%@page session="false" contentType="text/html" pageEncoding="ISO-8859-1" %>  
    <%@ page import="com.ibm.workplace.wcm.api.*"%>  
    <%@ page import="com.ibm.workplace.wcm.api.exceptions.*"%>  
    <%@ page import="java.util.*,javax.servlet.jsp.JspWriter,java.io.*"%>  
    <%@ page import="com.ibm.workplace.wcm.api.query.*"%>  
    <%  
    try {  
            final class countVP implements VirtualPortalScopedAction 
            {  
                countVP() {}  

                public void run() throws WCMException 
                {  
                    Workspace myworkspace = WCM_API.getRepository().getSystemWorkspace();  

                    if (myworkspace == null) 
                    {  
                        System.out.println("Unable to get a valid workspace.<br/>");  
                        return;  
                    }  

                    myworkspace.login();  

                    try {  
                            Iterator libraries = myworkspace.getDocumentLibraries();  
                            int grandTotal = 0;  
                            System.out.println("</BR>This utility counts all items except custom workflow items");  

                            while (libraries.hasNext())  
                            {  
                                DocumentLibrary currentlibrary =  (DocumentLibrary) libraries.next();  
                                myworkspace.setCurrentDocumentLibrary(currentlibrary);  

                                System.out.println("</BR></BR>*******************************");  
                                System.out.println("</BR>Items for library: "  + currentlibrary.getName() + "</BR>");  

                                int total = 0;  
                                int k;  

                                DocumentType[] types1 = {DocumentTypes.Content};  
                                k = 0;  
                                DocumentIdIterator docIt = myworkspace.findByType(types1[0]);  

                                while (docIt.hasNext()) 
                                {  
                                    k++;  
                                    DocumentId docId = docIt.nextId();  
                                    System.out.println("Content item = " + docId.getName() + "</BR>");  
                                }  

                                System.out.println("</BR>Total Content Items = " + k);  
                                total += k;  

                                System.out.println("</BR>Total items for library \"" + currentlibrary.getName() + "\" = " + total);  
                                grandTotal += total;  
                            }  

                            System.out.println("</BR></BR>*******************************");  
                            System.out.println("</BR>Total items for all libraries = " + grandTotal);  

                        } catch (Exception e) 
                        {  
                            System.out.println("<br/><br/>EXCEPTION : " + e.getMessage());  
                            e.printStackTrace();  
                        } finally { myworkspace.logout(); }  
                }  
            }  
  
            VirtualPortalScopedAction vpsa = new countVP();  
            WCM_API.getRepository().executeInVP(  
            WCM_API.getRepository().generateVPContextFromContextPath("VirtualPortalName"), vpsa);

        } catch (Exception e) 
        {
            System.out.println("EXCEPTION : " + e.getMessage());
            e.printStackTrace();
        }
    %>  
    ```  

    !!!note
        To count a large number of items, you may need to increase the server session timeout setting. Open the IBM WebSphere Application Server administration console and go to
        **Application Servers > WebSphere_Portal > Container Settings > Web Container Settings > Session Management** to adjust the session timeout.

3. Open the JSP in a web browser. For example:

    ```url
    https://<hostname>:<port>/wps/wcm/jsp/html/countVP.jsp
    ```

4. Review the `SystemOut.log` file for a summary of the counted items.
