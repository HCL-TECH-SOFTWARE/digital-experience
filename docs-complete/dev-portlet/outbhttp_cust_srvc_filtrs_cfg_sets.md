# Configuration settings for custom outbound connection filters 

The configuration of a custom outbound connection filter definition includes a metadata section. Developers can use it as a store for filter-specific customization data.

Example: A developer implemented a custom filter named `MyUserAgentRedirectionFilter`. The developer uses the filter to cause a redirect to a different URL if the user agent matches with a user agent pattern. You must define the user agent pattern and the redirection URL in the configuration. The following code snippet illustrates how the filter factory fetches settings for the redirection URL and the user agent patterns from the configuration. The sample code snippet assumes that the configuration setting for the user agent pattern is in a metadata setting with the name `my_user_agent`, and the redirection URL is in a metadata setting with the name `my_redirection_url`.

```
public class MyUserAgentRedirectionFilterFactory implements OutboundServiceFilterFactory {
    
    @Override
    public OutboundServiceFilter newOutboundServiceFilter(URL url,  
                AjaxProxyConfiguration proxyConfig,
                Map<String,String> metadata, 
                Context runtimeCtx) throws IOException {

        // fetch the settings from the filter configuration.
        String redirection_url = metadata.get("my_redirection_url");
        String  ua_pattern = metadata.get("my_user_agent");        
        return new MyCustomFilter(url, ua_patterns);
    }
}
```

The following outbound connection filter code sample checks whether the user agent string of the current outbound connection matches with the pattern that is defined in the configuration:

```
public class MyUserAgentRedirectionFilter implements OutboundServiceFilter {

    private final String redirectionUrl;
    private final String pattern;

    public  MyUserAgentRedirectionFilter(String url, String ua_pattern) {
        redirectionUrl = url;
        patterns = ua_patterns;
    }

    @Override
    public void preConnect(HttpURLConnection conn, FlowControl ctrl) 
    {
        String userAgentString = conn.getRequestProperty("User-Agent");
        if (this.shoudRedirect(userAgentString)) {
            ctrl.setRedirect(redirectionUrl);
        }
    }
    
    @Override
    public void postConnect(HttpURLConnection conn,
                Map<String, List<String>> modifiableResponseHeaders,
                FlowControl ctrl) { }            

    @Override
    public void handleError(ConnectionStatusEvent eventData, 
                FlowControl ctrl) { }


    // helper method: check if this filter should apply.
    // returns true if the given user agent matches with the given pattern

    private boolean shouldRedirect(String ua) {        
        return Pattern.compile(pattern).matcher(ua).matches();
    }
}
```

Finally, you provide the configuration. In the example scenario, you want to use the user agent redirection filter to redirect outbound HTTP requests to the remote host `http://www.my_remote_server.com/` if the client runs on an android device or iPhone device. You want outbound requests that are submitted from android devices to be redirected to `http://android.my_remote_server.com/index.html`, and requests from an iPhone device to be redirected to `http://iphone.my_remote_server.com/index.html`. The following configuration snippet gives an example:

```
<policy url="http://www.my_remote_server.com/*" >
   <actions>
      <method>GET</method>
   </actions>
   <filter-chain>
      <filter-factory>                    
         <classname>sample.test.filters.MyUserAgentRedirectionFilterFactory</classname>
       <meta-data>
            <name>my_redirection_url</name>
            <value>http://iphone.my_remote_server.com/index.html</value>
         </meta-data>
         <meta-data>
            <name>my_user_agents</name>
            <value>.*iPhone.*</value>
         </meta-data>
      </filter-factory>

      <filter-factory>                    
         <classname>sample.test.filters.MyUserAgentRedirectionFilterFactory</classname>
       <meta-data>
            <name>my_redirection_url</name>
            <value>http://android.my_remote_server.com/index.html</value>
         </meta-data>
         <meta-data>
            <name>my_user_agents</name>
            <value>.*Android.*Mobile.*</value>
         </meta-data>
      </filter-factory>
   </filter-chain>
</policy>
```

**Parent topic:**[Custom outbound service filters ](../dev-portlet/outbhttp_cust_srvc_filtrs.md)

