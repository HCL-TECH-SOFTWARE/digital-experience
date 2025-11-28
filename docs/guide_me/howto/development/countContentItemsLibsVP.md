# How to count content items of a WCM library on Virtual Portals using Java and JSPs

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

This sample code is used to count the number of content items (except for custom workflows) used in libraries stored on an Virtual Portal. This should work on virtual portals that are defined via URL context and not via hostname.

???+ info "DISCLAIMER OF WARRANTIES"
    The enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting in troubleshooting current issues or developing your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages. Note that debug of custom applications is beyond the scope of the HCL Support Contract.

## Instructions

1. Create the following file on the file system of your HCL DX environment:

    ```shell
    <wp_profile_root>\installedApps\(cell name)\wcm.ear\ilwwcm.war\jsp\html\countVP.jsp
    ```

2. Copy and paste the code below into the file then modify `VirtualPortalName` with the name of your Virtual Portal.  

    ```java
    <%@page session="false" contentType="text/html" pageEncoding="ISO-8859-1" %>

    <%@ page import="com.ibm.workplace.wcm.api.*"%>
    <%@ page import="com.ibm.workplace.wcm.api.exceptions.*"%>
    <%@ page import="java.util.*,javax.servlet.jsp.JspWriter,java.io.*"%>
    <%@ page import="com.ibm.workplace.wcm.api.query.*"%>

    <br>

    If counting a large number of items, you may need to increase the session timeout setting of your server. This can be done using the IBM WebSphere Application Server administration console. Navigate to:

    <br><br>Application Servers > WebSphere_Portal > Container Settings > Web Container Settings > Session Management. 

    <br><br>Check SystemOut.log for a summary report of the counted items.
    <br>
    <br>
    <br>

    <%    
    try {
          final class countVP implements VirtualPortalScopedAction 
          {    
             countVP() {}

             public void run() throws WCMException 
             {
                String tmpString;
                Workspace myworkspace = WCM_API.getRepository().getSystemWorkspace();
                   
                  if ( myworkspace == null )    
                  {
                     System.out.println( "Unable to get a valid workspace.<br/>" );
                  }

                  myworkspace.login();
                    
                  try 
                  {
                    Iterator libraries = myworkspace.getDocumentLibraries();
                    int grandTotal = 0;
                    System.out.println("</BR>" + "This utility will count all items except custom workflow items");

                    while (libraries.hasNext()) 
                    {
                          DocumentLibrary currentlibrary = (DocumentLibrary) libraries.next();
                          myworkspace.setCurrentDocumentLibrary(currentlibrary);

                          System.out.println("</BR></BR>" + "*******************************");
                          System.out.println("</BR>" + "Items for library: " + currentlibrary.getName() + "</BR>");
          
                          DocumentIdIterator docIt;
                          int total = 0;
                          int k;
          
                          System.out.println("</BR>");
                          DocumentType[] types1 = {DocumentTypes.Content};
                          k=0;
                          for(int i=0; i < types1.length; i++) 
                          {
                            docIt = myworkspace.findByType(types1[i]);
                            while (docIt.hasNext()) 
                            {
                               k++;
                               DocumentId docId = docIt.nextId();
                               System.out.println("Content item  = " + docId.getName() + "</BR>");
                            }
                            System.out.println("</BR>" + "Total Content Items  = " + k + "</BR>");
                            total+=k;
                          }
          
                          /*  
                          //Sites no longer supported in V7 but API seems confused so counting sites and presenting as site areas
                          System.out.println("</BR>");
                          DocumentType[] types2 = {DocumentTypes.SiteArea};
                          k=0;
                          for(int i=0; i < types2.length; i++) {
                             docIt = myworkspace.findByType(types2[i]);
                             while (docIt.hasNext()) {
                               k++;
                               DocumentId docId = docIt.nextId();
                               System.out.println("SiteArea item  = " + docId.getName() + "</BR>");
                             }
                             System.out.println("</BR>" + "Total SiteArea Items  = " + k + "</BR>");
                             total+=k;
                          }
                          */

                          System.out.println("</BR>");
                          DocumentType[] types3 = {DocumentTypes.Site};
                          k=0;
                          for(int i=0; i < types3.length; i++) 
                          {
                             docIt = myworkspace.findByType(types3[i]);
                             while (docIt.hasNext()) 
                             {
                                k++;
                                DocumentId docId = docIt.nextId();
                                System.out.println("SiteArea item  = " + docId.getName() + "</BR>");
                             }
                             System.out.println("</BR>" + "Total SiteArea Items  = " + k + "</BR>");
                             total+=k;
                          }
                          System.out.println("</BR>");
                          DocumentType[] types4 = {DocumentTypes.PresentationTemplate};
                          k=0;
                          for(int i=0; i < types4.length; i++) 
                          {
                             docIt = myworkspace.findByType(types4[i]);
                             while (docIt.hasNext()) 
                             {
                                k++;
                                DocumentId docId = docIt.nextId();
                                System.out.println("PresentationTemplate item  = " + docId.getName() + "</BR>");
                             }

                             System.out.println("</BR>" + "Total PresentationTemplate Items  = " + k + "</BR>");
                             total+=k;
                          }
                          System.out.println("</BR>");
                          DocumentType[] types5 = {DocumentTypes.AuthoringTemplate};
                          k=0;

                          for(int i=0; i < types5.length; i++) 
                          {
                             docIt = myworkspace.findByType(types5[i]);
                             while (docIt.hasNext()) 
                             {
                                k++;
                                DocumentId docId = docIt.nextId();
                                System.out.println("AuthoringTemplate item  = " + docId.getName() + "</BR>");
                             }
                             System.out.println("</BR>" + "Total AuthoringTemplate Items  = " + k + "</BR>");
                             total+=k;
                          }
                          System.out.println("</BR>");
                          DocumentType[] types6 = {DocumentTypes.LibraryComponent};
                          k=0;
                          for(int i=0; i < types6.length; i++) 
                          {
                             docIt = myworkspace.findByType(types6[i]);
                             while (docIt.hasNext()) 
                             {
                                k++;
                                DocumentId docId = docIt.nextId();
                                System.out.println("LibraryComponent item  = " + docId.getName() + "</BR>");
                             }

                             System.out.println("</BR>" + "Total LibraryComponent Items  = " + k + "</BR>");
                             total+=k;
                          }
                          System.out.println("</BR>");
                          DocumentType[] types7 = {DocumentTypes.Workflow};
                          k=0;
                          for(int i=0; i < types7.length; i++) 
                          {
                             docIt = myworkspace.findByType(types7[i]);
                             while (docIt.hasNext()) 
                             {
                               k++;
                               DocumentId docId = docIt.nextId();
                               System.out.println("Workflow item  = " + docId.getName() + "</BR>");
                             }
                             System.out.println("</BR>" + "Total Workflow Items  = " + k + "</BR>");
                             total+=k;
                          }

                          System.out.println("</BR>");
                          DocumentType[] types8 = {DocumentTypes.WorkflowStage};
                          k=0;

                          for(int i=0; i < types8.length; i++) 
                          {
                             docIt = myworkspace.findByType(types8[i]);
                             while (docIt.hasNext()) 
                             {
                               k++;
                               DocumentId docId = docIt.nextId();
                               System.out.println("WorkflowStage item  = " + docId.getName() + "</BR>");
                             }
                             System.out.println("</BR>" + "Total WorkflowStage Items  = " + k + "</BR>");
                             total+=k;
                          }

                          System.out.println("</BR>");
                          DocumentType[] types9 = {DocumentTypes.ContentLink};
                          k=0;

                          for(int i=0; i < types9.length; i++) 
                          {
                             docIt = myworkspace.findByType(types9[i]);
                             while (docIt.hasNext()) 
                             {
                                k++;
                                DocumentId docId = docIt.nextId();
                               System.out.println("ContentLink item  = " + docId.getName() + "</BR>");
                             }
                             System.out.println("</BR>" + "Total ContentLink Items  = " + k + "</BR>");
                             total+=k;
                          }
          
                          System.out.println("</BR>");
                          DocumentType[] types10 = {DocumentTypes.Category};
                          k=0;
        
                          for(int i=0; i < types10.length; i++) 
                          {
                             docIt = myworkspace.findByType(types10[i]);
                             while (docIt.hasNext()) 
                             {
                               k++;
                               DocumentId docId = docIt.nextId();
                                System.out.println("Category item  = " + docId.getName() + "</BR>");
                             }
                             System.out.println("</BR>" + "Total Category Items  = " + k + "</BR>");
                             total+=k;
                          }

                          System.out.println("</BR>");
                          DocumentType[] types11 = {DocumentTypes.Taxonomy};
                          k=0;

                          for(int i=0; i < types11.length; i++) 
                          {
                             docIt = myworkspace.findByType(types11[i]);
                             while (docIt.hasNext()) 
                             {
                                k++;
                                DocumentId docId = docIt.nextId();
                                System.out.println("Taxonomy item  = " + docId.getName() + "</BR>");
                             }
                             System.out.println("</BR>" + "Total Taxonomy Items  = " + k + "</BR>");
                             total+=k;
                          }

                          //Seems to be a bug in the API, actions are only returned for some libraries
                          System.out.println("</BR>");
                          DocumentType[] types12 = {DocumentTypes.PublishAction};
                          k=0;
                          for(int i=0; i < types12.length; i++) 
                          {
                             docIt = myworkspace.findByType(types12[i]);
                             while (docIt.hasNext()) 
                             {
                               k++;
                               DocumentId docId = docIt.nextId();
                               System.out.println("Publish Action item  = " + docId.getName() + "</BR>");
                             }
                             System.out.println("</BR>" + "Total Publish-Action Items  = " + k + "</BR>");
                             total+=k;
                          }

                          System.out.println("</BR>");
                          DocumentType[] types13 = {DocumentTypes.ExpireAction};
                          k=0;

                          for(int i=0; i < types13.length; i++) 
                          {
                             docIt = myworkspace.findByType(types13[i]);
                             while (docIt.hasNext()) 
                             {
                                k++;
                                DocumentId docId = docIt.nextId();
                                System.out.println("Expire Action item  = " + docId.getName() + "</BR>");
                             }
                             System.out.println("</BR>" + "Total Expire-Action Items  = " + k + "</BR>");
                             total+=k;
                          }

                          System.out.println("</BR>");
                          DocumentType[] types14 = {DocumentTypes.ScheduledMoveAction};
                          k=0;
                          for(int i=0; i < types14.length; i++) 
                          {
                             docIt = myworkspace.findByType(types14[i]);
                             while (docIt.hasNext()) 
                             {
                                k++;
                                DocumentId docId = docIt.nextId();
                                System.out.println("Scheduled Move Action item  = " + docId.getName() + "</BR>");
                             }
                             System.out.println("</BR>" + "Total Scheduled-Move-Action Items  = " + k + "</BR>");
                             total+=k;
                          }

                          System.out.println("</BR>");
                          DocumentType[] types15 = {DocumentTypes.PortalPage};
                          //DocumentType[] types15 = {com.ibm.workplace.wcm.api.DocumentTypes.PortalPage};
                          k=0;
                          for(int i=0; i < types15.length; i++) 
                          {
                             docIt = myworkspace.findByType(types15[i]);
                             while (docIt.hasNext()) 
                             {
                                k++;
                                DocumentId docId = docIt.nextId();
                                System.out.println("PortalPage item  = " + docId.getName() + "</BR>");
                             }
                             System.out.println("</BR>" + "Total PortalPage Items  = " + k + "</BR>");
                             total+=k;
                          }
                          System.out.println("</BR>" + "Total items for library \"" + currentlibrary.getName() + "\" = " + total);
                          grandTotal+=total;
                    } //end While 
                   System.out.println("</BR></BR>" + "*******************************");
                   System.out.println("</BR>" + "Total items for all libraries = " + grandTotal);
                } //end Try
              catch (Exception e) 
                {
                   System.out.println("<br/><br/>EXCEPTION : " + e.getMessage());
                   e.printStackTrace();
              }

               myworkspace.logout();
            }  //end run
          }  //end class 

          VirtualPortalScopedAction vpsa = new countVP();
          WCM_API.getRepository().executeInVP(WCM_API.getRepository().generateVPContextFromContextPath("VirtualPortalName"), vpsa );
    }
    catch (Exception e) 
    {
       System.out.println("<br/><br/>EXCEPTION : " + e.getMessage());
       e.printStackTrace();
    }
    %>
    ```

3. Invoke the jsp in the web-browser using URL:

    ```url
     https://<hostname>:<port>/wps/wcm/jsp/html/countVP.jsp  
    ```

4. Check the SystemOut.log file for the summary of items counted.  
