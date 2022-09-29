# Web Content Library Management APIs

You can perform various web content library functions by using the Web content API.

-   Create a library
-   Delete a library
-   Copy a library
-   Import a library
-   Export a library

!!! note
   Drafts are not copied or exported when using the API to copy or export libraries.

See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/Javadoc/spi_docs/com/ibm/workplace/wcm` directory.

## Invoking web content library API methods asynchronously

Although Web content library API functions can be invoked synchronously, if you run these against web content libraries containing large amounts of data, they may take extremely long to complete execution. For example, if these methods are invoked from a JSP page, this may result in the JSP page being invalidated due to a session timeout.

WebSphere® Application Server uses a mechanism known as asynchronous beans. An asynchronous bean is a Java object that can be run asynchronously. The "Work object" asynchronous bean is used to invoke web content library API methods asynchronously.

A Work object \(which is represented by the interface `com.ibm.websphere.asynchbeans.Work`\) extends `java.lang.Runnable` It is used to run a block of code as an independent thread. WebSphere Application Server maintains a pool of independent threads that can be assigned to run code encapsulated in Work instances. This pool of threads is managed by the `WorkManager`. This is used to spawn threads to run Work objects and to monitor them. WebSphere Application Server maintains default Work Managers for each of the application servers that are contained on a particular node. The sample in this topic makes use of the default Work Manager \(`wm/wpsWorkManager`\) for the HCL Portal application server. This maintains a pool of 300 threads. It is possible to create new Work manager instances with customized thread pools. This is done using the WebSphere Integrated Solutions Console for the HCL Portal server.

The example uses the `DeleteWork` class to implement the Work interface:

```
package deletesample;

import com.ibm.workplace.wcm.api.*;
import javax.naming.*;

public class DeleteWork implements com.ibm.websphere.asynchbeans.Work
{
   private String m_username = null;
   
   private String m_password = null;
   
   private String m_libraryToDelete = null;

   public DeleteWork(String username, String password, String library)
   {
      m_username = username;
      m_password = password;
      m_libraryToDelete = library;
   }
   
   public void release()
   {
   }     

   public void run()
   {
	      try
	      {
		// Construct and inital Context
	    	InitialContext ctx = new InitialContext();

		// Retrieve WebContentService and WebContentLibraryService using JNDI name
		WebContentService webContentService = (WebContentService) 
     ctx.lookup("portal:service/wcm/WebContentService");
		WebContentLibraryService webContentLibraryService = (WebContentLibraryService) 
    ctx.lookup("portal:service/wcm/WebContentLibraryService");

		Workspace ws = webContentService.getRepository().getWorkspace(m_username, m_password);
		DocumentLibrary docLib = ws.getDocumentLibrary(m_libraryToDelete);
		LibraryTaskResult res = webContentLibraryService.deleteLibrary(ws, docLib);

		// Once you get the result object back, print status to StandardOut
		if (res.getResultType() == ResultTypes.OPERATION_SUCCESS)
		{
			System.out.println("Successfully Deleted Library " + m_libraryToDelete);
		}
		else
		{
			System.out.println("Failed To Delete Library " + m_libraryToDelete);
		}
	      }
	      catch (Exception e)
	      {
	                e.printStackTrace();
	      }
   }
}
```

The run method is what is required in order to implement this interface. This is where you wrap the library method that you want to run in a thread separate from the calling thread. In the previous example, `DeleteWork` is instantiated passing in credentials as well as the library to be deleted. In `run()`, the repository is logged into and a Workspace instance is obtained as is a `DocumentLibrary` corresponding to the library that is to be deleted. `deleteLibrary()` is then called to perform the actual deletion. Once this method is completed, the Result object can be queried to determine the status of the deletion. This can then be logged or processed as required.

The following JSP file is used to invoke the `DeleteWork` object:

```
<%@ page import="java.util.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.lang.*" %>
<%@ page import="com.ibm.workplace.wcm.api.*" %>
<%@ page import="com.aptrix.identity.*" %>
<%@ page import="com.ibm.workplace.wcm.services.library.*" %>
<%@ page import="com.ibm.workplace.wcm.services.*" %>
<%@ page import="com.ibm.workplace.wcm.services.repository.*" %>
<%@ page import="com.ibm.websphere.asynchbeans.*" %> 
<%@ page import="javax.naming.*" %> 
<%@ page import="deletesample.DeleteWork" %> 



<%
/*
 *  JSP Sample to demonstrate how to delete a WCM Library 
 *  making use of the WebSphere Application Server
 *  Work asynchronous bean. 
 */

try 
{
   //obtain a work manager instance - the work manager manages a pool of threads 
   //which can be used to invoke the functionality encapsulated
   // within a work instance
   InitialContext ctx  = new InitialContext();
   com.ibm.websphere.asynchbeans.WorkManager wm  =
   (com.ibm.websphere.asynchbeans.WorkManager)
	       ctx.lookup("wm/wpsWorkManager");

   //create a new work instance
   DeleteWork workItem = new DeleteWork(request.getParameter("username"), request.getParameter("password"), 
   request.getParameter("library")); 
   //spawn a thread to run the create work instance
   wm.startWork(workItem);
    
     
		
} 
catch (Exception e)  
{
%>  <%= e.toString() %><%
}%>

```

In order to run a Work object, it is necessary to do a JNDI lookup to obtain the default HCL Portal Server Work Manager instance. Once this is done, the `DeleteWork` class can be instantiated. To run `DeleteWork` on a separate thread, call `startWork()` on the `WorkManager` passing in the `DeleteWork` instance. For example, `wm.startWork(workItem);` The `System.out` log can be checked to see when `DeleteWork` finishes.


