# The programming model for the outbound HTTP connection service

The outbound HTTP connection service can be used from the context of a servlet request service or from the context of a portlet request service. Here are some code examples.

The following example shows how to obtain the outbound HTTP connection service from the context of a portlet:

```
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.portlet.PortletRequest;
import javax.portlet.PortletResponse;
import com.ibm.portal.outbound.service.OutboundConnectionService;
import com.ibm.portal.outbound.service.OutboundConnectionServiceHome;
import com.ibm.portal.outbound.service.OutboundConnectionServiceException;

// obtain an Outbound HTTP connection service object (portlet context)

private OutboundConnectionService getService (PortletRequest p_request,
					      PortletResponse p_response) 
	throws  OutboundConnectionServiceException, NamingException
{

	Context ctx = new InitialContext();
	final OutboundConnectionServiceHome home = (OutboundConnectionServiceHome) 
           ctx.lookup(OutboundConnectionServiceHome.JNDI_NAME);
      final OutboundConnectionService service = 
        		home.getOutboundConnectionService(p_request, p_response); 
	return service;
}
```

In a different scenario, the code that calls the outbound HTTP connection service is part of a servlet. In this case, the method `getOutboundConnectionService ()` receives the servlet request and servlet response variable. See the following example:

```
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.ibm.portal.outbound.service.OutboundConnectionService;
import com.ibm.portal.outbound.service.OutboundConnectionServiceHome;
import com.ibm.portal.outbound.service.OutboundConnectionServiceException;
…

// obtain an Outbound HTTP connection service object  (servlet context)
private OutboundConnectionService getService ( HttpServletRequest s_request,
					  HttpServletResponse s_response) 
	throws OutboundConnectionServiceException, NamingException
{

	Context ctx = new InitialContext();
	final OutboundConnectionServiceHome home = (OutboundConnectionServiceHome) 
           ctx.lookup(OutboundConnectionServiceHome.JNDI_NAME);
      final OutboundConnectionService service = 
        		home.getOutboundConnectionService(s_request, s_response); 
	return service;
}
```

Applications use the `createConnection()` method of the outbound HTTP connection service to open an outbound HTTP connection. The following code snippet connects to a URL resource through outbound HTTP connections and reads the content of the web page and writes it to a byte array output stream. See the following example:

```
import java.io.IOException;
import java.io.InputStream;
import java.io.ByteArrayOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import com.ibm.portal.outbound.service.OutboundConnectionService;

...
/**
 * usage sample for GET requests using Outbound HTTP Connections
 * @param service the outbound HTTP connection service
 * @param theURL the remote URL
 * @param bos An object that receives the content of the GET request.
 * @return the HTTP status
 **/
private int doGet (OutboundConnectionService service, 
                   URL theURL,
                   ByteArrayOutputStream bos) 
    throws OutboundConnectionServiceException, IOException
{
    // obtain a connection object 
    HttpURLConnection connection = createConnection(theURL);
    try {
       // Submit the URL connection to the remote host.
       connection.connect();

       // read the returned content:
       InputStream is = (InputStream)connection.getContent();
       int byt = is.read();
       while (byt >= 0) {
          bos.write(byt);
          byt = is.read();
       }   
	 int status = connection.getStatus(); 
       return status;
    } finally {
       connection.disconnect();
       bos.close();
    }
}
```

The following code snippet connects to a URL resource through outbound HTTP connections and submits a POST request:

```
import java.io.IOException;
import java.io.InputStream;
import java.io.ByteArrayOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import com.ibm.portal.outbound.service.OutboundConnectionService;

...
/**
 * usage sample for POST requests using Outbound HTTP Connections
 * @param service the outbound HTTP connection service
 * @param theURL the remote URL
 * @param postData the POST data.
 * @param bos An object that receives the content of the GET request.
 * @return the HTTP status
 **/
private int doPost (OutboundConnectionService service, 
                    URL theURL,
                    byte[] postData,
                    ByteArrayOutputStream bos) 
    throws OutboundConnectionServiceException, IOException
{
    // obtain a connection object 
    HttpURLConnection connection = createConnection(theURL);
    try {
       // write the POST data
       OutputStream os = connection.getOutputStream();
       os.write(postData, 0, postData.length);
       os.close();

       // Submit the URL connection to the remote host.
       connection.connect();	 

       // read the returned content:
       InputStream is = (InputStream)connection.getContent();
       int byt = is.read();
       while (byt >= 0) {
          bos.write(byt);
          byt = is.read();
       }   
	 int status = connection.getStatus(); 
       return status;
    } finally {
       connection.disconnect();
       bos.close();
    }
}
```

The following code snippet obtains an outbound connection service and requests the content of the URL `www.ibm.com`:

```
ByteArrayOutputStrream bos = new ByteArrayOutputStream();

OutboundConnectionService ocs = getService (request, response);
int status = doGet(ocs, new URL("http.//www.ibm.com"), bos);
if (status >= 400) {
    System.err.println("Remote connection failed with HTTP status "+status);
} else {
    byte[] da = bos.toByteArray();
    String first = da.length > 10 ? new String(da,0,da.length) : new String(da);
    System.out.println("The content starts with "+first);
}
```

**Parent topic:**[Outbound HTTP connection](../dev-portlet/outbound_http.md)

**Related information**  


[Description of the outbound HTTP connection configuration script](../dev-portlet/outbhttp_cfg_descript.md)

