# Implementing a custom cookie transformation filter

Application developers can implement a custom cookie transformation filter.

To do so, they must provide an implementation of the interfaces `com.ibm.mashups.proxy.ext.CookieTransformer` and `com.ibm.mashups.proxy.ext.CookieTransformerFactory`. The factory class creates and returns an instance of the cookie transformer object. The following sample code uses the cookie transformation filter to write the name and value of a certain cookie to a log. The sample code uses `System.err` as a `Writer` object.

```
package test.sample;
import com.ibm.mashups.proxy.ext.CookieTransformer;
import com.ibm.mashups.proxy.ext.CookieTransformerFactory;

public class SampleCookieXformerFactory implements CookieTransformerFactory {
	/**
	 * Produce and return a new CookieTransformer instance. 
	 * @param url is the URL for which the cookie transformer is to be opened.
       * @param the metadata that are associated with the transformer object.
       * @return CookieTransformer the custom cookie transformation handler.  
         * Must not be null.
         */
	@Override
	public CookieTransformer newCookieTransformer(URL url, 
                                  Map<String, String> metadata) { 
	    return new SampleCookieTransformer (url); 
	}
}


package test.sample;
import com.ibm.mashups.proxy.ext.CookieTransformer;
import com.ibm.mashups.proxy.ext.CookieTransformerFactory;
/**
 * The custom cookie transformation handler logs ingoing and outgoing 
 * cookies, for which the cookie transformer handler was defined.
 *
 */
public class SampleCookieTransformer implements CookieTransformer (

	// sample code: use System.err as output stream.
	private PrintStream getWriter () {
           return System.err;
	}

	private URL theURL;

        /**
         * Initialize a sample cookie transformation handler. 
         * @param url the URL for which the outbound connection was opened.
         **/
        public SampleCookieTransformer (URL url) {
	    this.theURL = url;
        }
  
    /**
     * Process an outgoing cookie.
     * This method is called before the outbound HTTP connection is submitted
     * to the remote host. 
     * The sample code writes the name and value of the cookie and the URL
     * to which the connection was submitted to a PrintStream writer.
     * @param cookie the cookie instance. 
     */
	@Override
	public void transformOutbound(HttpCookie cookie) { 
            getWriter().println (Cookie "+cookie.getName() +" sent to URL  
                                 "+theURL+". value="+cookie.getValue());
        }

  
    /**
     * Process an ingoing cookie.
     * This method is called after an HTTP response header was read. 
     * The response header contains a Set-Cookie statement for a cookie
     * to which this connection handler applies. 
     * The sample code writes the name and value of the affected cookie
     * and the URL from where the cookie was set to a PrintStream writer.
     * @param cookie the cookie instance. 
     */
	@Override
	public void transformInbound(HttpCookie cookie) { 
	    getWriter().println (Cookie "+cookie.getName() +" received from URL 
                               "+theURL+". value="+cookie.getValue());
        }
   
}
```

A custom cookie transformation handler is an extension of the outbound HTTP connection service. Therefore, the extension handler code must be accessible by the class loader of the WebSphere® Application Server on which HCL Portal runs. See the topic Extending [HCL Portal class path](../dev/ext_wp_classpath.md) for where to place your compiled custom code on the Portal filesystem.


