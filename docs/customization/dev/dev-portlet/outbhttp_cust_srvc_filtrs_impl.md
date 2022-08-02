# Implementing a custom outbound connection service filter

Application developers can implement a custom outbound connection service filter.

Custom outbound connection service filters must implement the interface `com.ibm.mashups.proxy.ext.OutboundServiceFilter`. They are instantiated from a factory class `com.ibm.mashups.proxy.ext.OutboundServiceFilterFactory`.

The following listing is an example of a custom outbound service filter:

```
package sample.test.filters;

import com.ibm.mashups.proxy.Context;
import com.ibm.mashups.proxy.configuration.AjaxProxyConfiguration;
import com.ibm.mashups.proxy.ext.ConnectionStatusEvent;
import com.ibm.mashups.proxy.ext.FlowControl;
import com.ibm.mashups.proxy.ext.OutboundServiceFilter;
import com.ibm.mashups.proxy.ext.OutboundServiceFilterFactory;

public class MyFilterFactory implements OutboundServiceFilterFactory {

    /**
      * This method is called whenever an outbound HTTP conenction 
      * is opened for a url for which this custom filter 
      * is defined in its configuration settings. 
      * The method receives the URL of the outbound connection, 
      * the proxy configuration, and the runtime context.
      * The method must return a filter object that implements the  
      * OutboundServiceFilter interface.
      */
      @Override
      public OutboundServiceFilter newOutboundServiceFilter(URL url,  
                        AjaxProxyConfiguration proxyConfig,
                        Map<String,String> metadata, 
                        Context runtimeCtx) throws IOException {
            return new MyCustomFilter();
      }
}

public class MyCustomFilter implements OutboundServiceFilter {
     /*
      * This method is called for outbound HTTP connections 
      * for which this filter has been configured. 
      * The method receives the HttpURLConnection object 
      * that connects against the remote server.
      * The method is called immediately before the connect() method 
      * is called against that HttpURLConnection object. This means that
      * the implementation of this method can retrieve or modify the setup 
      * parameters and the general request properties of this connection objects. 
      * The filter can abend the connection, by invoking errorHandler.setError() 
      * or errorHandler.setRedirect().
      */
      @Override
      public void preConnect(HttpURLConnection urlConnection, 
                           FlowControl errorHandler) 
      {
          // implement your custom code here.
      }
     /*
      * This method is called for outbound HTTP connections for that this  
      * filter has been configured. 
      * The method receives the HttpURLConnection object that has connected 
      * against the remote server.
      * The method is called immediately after connect() method is called 
      * against that HttpURLConnection object, which means, the implementation 
      * of this method is allowed to retrieve or modify the response header 
      * fields and the remote content.
      * The filter can abend the connection, by invoking errorHandler.setError() 
      *or errorHandler.setRedirect().
      */
      @Override
      public void postConnect(HttpURLConnection urlConnection,
      	            Map<String, List<String>> modifiableResponseHeaders,
                    FlowControl errorHandler) {
		
          // implement your custom code here.            	
      }
      
      /**
       * This method is called whenever the outbound connection service ran 
       * into an error. The method receives an eventData object that 
       * contains information about the problem that occurred, such as the name, 
       * the id and the parameter array of a resource bundle that contains the 
       * error message which describes the problem, as well as information about 
       * the failing http connection.       
       * The filter can use this method to override the error handling, by 
       * invoking  by invoking errorHandler.setError() or 
       * errorHandler.setRedirect(). For example, the error handler can 
       * override the error message or override the HTTP status of the 
       * outbound connection.
       */
      @Override
      public void handleError(ConnectionStatusEvent eventData, 
                        FlowControl errorHandler) {
          // implement your custom code here.
      }
```

Make sure that the filter class can be loaded at run time. For example, place the class file in the /WEB-INF/lib directory of the web module that contains the code that establishes the outbound HTTP connection.

**Parent topic:**[Custom outbound service filters](../dev-portlet/outbhttp_cust_srvc_filtrs.md)

