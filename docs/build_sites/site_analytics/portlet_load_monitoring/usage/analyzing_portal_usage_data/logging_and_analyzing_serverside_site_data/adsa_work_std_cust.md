# Logging custom details of business events for site analysis

From a business point of view, you might want to log custom details of business events.

**Note:** The procedures that are described in the following topic and subtopics work only for standard \(JSR 168 or JSR 286\) portlets.

The following are main components of the site analysis logging framework for standard portlets:

-   **com.ibm.portal.portlet.service.siteanalyzer.PortletSiteAnalyzerLoggingServiceHome**

    This portlet service exposes methods to obtain a logger instance that is specialized on the specified request type. This request type is either an ActionRequest, an EventRequest, a RenderRequest, or a ResourceRequest. Portlets obtain this portlet service through a JNDI lookup.

-   **com.ibm.portal.portlet.service.siteanalyzer.PortletSiteAnalyzerLogger**

    Portlets can retrieve an instance of this logger from the PortletSiteAnalyzerLoggingServiceHome. It is valid for the request for which it was created, and it provides methods to query the logger state - enabled or disabled - and to create a site analysis log entry.

-   **com.ibm.portal.portlet.service.siteanalyzer.ParameterNamesProcessor**

    Request parameter names, in particular render parameter names that are encoded into portal URLs, should be as short in length as possible. This recommendation does not leave much space for meaningful parameter names in site analysis log entries. The ParameterNamesProcessor interface allows portlet developers to provide the PortletSiteAnalyzerLogger with a callback for processing request parameter names. Implementations of this interface are called by the site analytics framework before assembling the query string section of the request URI that is written to the site analysis log file.


To activate and use the portal site analyzer logger for standard portlets, proceed by the following steps:

1.  Activating the site analyzer logger for standard portlets: You enable the site analyzer logger for standard portlets by using the portal configuration service SiteAnalyzerLogService. You set its property in the WebSphere® Integrated Solutions Console through the resource environment provider WP SiteAnalyzerLogService. To do this step, proceed as follows:

    1.  Select the appropriate WebSphere Integrated Solutions Console, depending on your environment:

        -   If your portal runs stand-alone, use the local WebSphere Integrated Solutions Console.
        -   If your portal is installed in a cluster, use the WebSphere Integrated Solutions Console of the Deployment Manager.
    2.  Start the WebSphere Integrated Solutions Console by entering the following URL in the **URL location** field of a web browser:

        ```
        http://your\_server.com:admin\_port/ibm/console
        ```

        where your\_server.com is the name of your server and admin\_port is the port that is assigned to the WebSphere Integrated Solutions Console.

    3.  In the navigation click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    4.  In the **Resource environment providers** page, make the appropriate selection, depending on your version of WebSphere Application Server and your portal environment:

        -   For WebSphere Application Server Version 6.1: Select the appropriate node or cluster from the scopes pull-down list, depending on your portal environment.
        -   For WebSphere Application Server Version 7.0: Select the appropriate node or cluster from the scopes pull-down list, or clear the **Show Scope** selection drop-down check box and select one of the following options, depending on your portal environment:
            -   If your portal runs as a single server, select **Browse Nodes** and select the node.
            -   If your portal is installed in a cluster, select **Browse Clusters** and select the portal cluster.
    5.  In the **Resource environment providers** page, elect the appropriate node or cluster from the scopes pull-down list, or clear the **Show Scope** selection drop-down check box and select one of the following options, depending on your portal environment:

        -   If your portal runs as a single server, select **Browse Nodes** and select the node.
        -   If your portal is installed in a cluster, select **Browse Clusters** and select the portal cluster.
    6.  Select **WP SiteAnalyzerLogService**.

    7.  Click **Custom Properties**.

    8.  Do one of the following:

        -   Select the property **SiteAnalyzerJSRPortletLogger.isLogging** and change its value to true.
        -   Create a new property named SiteAnalyzerJSRPortletLogger.isLogging and set its value to true. Use java.lang.String as the property type.
    9.  When you are done, click **Save** at the start of the page under **Message\(s\)**.

    10. Click **Save** again when prompted to confirm your change.

    11. If your portal runs in a cluster configuration, replicate your changes to the cluster.

    12. Restart the portal to activate the changes.

2.  Implementing a parameter names processor: The following code sample shows an implementation of the ParameterNamesProcessor interface. The sample holds a static mapping of possible request parameter names to a more descriptive expression that you want to be used in site analysis log entries instead. If there is no replacement for a parameter name, the original key is returned to be written to the site analysis log entry as it is. Sample:

    ```
    public class ParameterNamesProcessorSample implements ParameterNamesProcessor
    {
       private static final Hashtable<String, String> PARAM_NAMES_MAP;
    
       static
       {
          PARAM_NAMES_MAP = new Hashtable();
          PARAM_NAMES_MAP.put("ci", "CurrentItem");
       }
    
       public String processParameterName(String paramName)
       {
          // get a replacement for the given parameter name or
          // return the original key if not replacement exists
          if (PARAM_NAMES_MAP.containsKey(paramName))
          {
             return PARAM_NAMES_MAP.get(paramName);
          }
          else
          {
             return paramName;
          }
       }
    }
    ```

3.  Retrieving the portlet site analyzer logging service: The following code sample shows the init method of a portlet class that looks up an instance of the portlet site analyzer logging service. Additionally, it instantiates a sample implementation of the ParameterNamesProcessor interface.

    ```
    private PortletSiteAnalyzerLoggingServiceHome iSALogServiceHome = null;
    
    private ParameterNamesProcessorSample iParamNamesProc = null;
    
    public void init() throws PortletException
    {
      com.ibm.portal.portlet.service.PortletServiceHome psh;
      javax.naming.Context ctx = new javax.naming.InitialContext();
    
      try 
      {
        psh = (PortletServiceHome) ctx
          .lookup(PortletSiteAnalyzerLoggingServiceHome.JNDI_NAME);
      } 
      catch (javax.naming.NameNotFoundException e) {
        // error handling
      }
     
      // obtain the service object 
      PortletSiteAnalyzerLoggingServiceHome iSALogServiceHome = 
        (PortletSiteAnalyzerLoggingServiceHome) psh
          .getPortletService(PortletSiteAnalyzerLoggingServiceHome.class);
    
      // instantiate the sample parameter names processor
      paramNamesProc = new ParameterNamesProcessorSample();
    }
    ```

4.  Retrieving an instance of the portlet site analyzer logger: A logger instance depends on a specific portlet request. Its validity is bound to a single request processing cycle. Therefore, the instantiation of the logger must be performed for each request. The service object that is obtained in the previous step makes various methods available to obtain a logger instance.

    The following code sample shows the retrieval of a logger instance for the current RenderRequest in the doView method of a portlet. The instance of the parameter names processor sample is also passed in to the getLogger method in order to register this callback for the returned logger. Sample:

    ```
    protected void doView(final RenderRequest renderRequest, final RenderResponse 
           renderResponse) throws PortletException, IOException
    {
      final PortletSiteAnalyzerLogger saLogger = iSALogServiceHome.getLogger(renderRequest, 
           renderResponse, iParamNamesProc);
    
      // further request processing
    }
    ```

5.  Logging a business event: When a portlet uses the instance of the PortletSiteAnalyzerLogger, the logger writes a business event to the site analysis log file. Sample:

    ```
    protected void doView(final RenderRequest renderRequest, final RenderResponse 
         renderResponse) throws PortletException, IOException
    {
      // request processing
    
      // check whether the logger is enabled
      if (saLogger.isLogging())
      {
        // create a site analysis log entry
        saLogger.log("A sample business event");
      }
    
      // further request processing
    }
    ```


Understanding the site analysis log for standard portlets: The site analysis log entries that are written by the PortletSiteAnalyzerLogger have the same structure as log entries created by other types of site analyzer loggers that the portal provides. This particular logger also implements the industry standard NCSA Combined.

The following example shows how the URL-encoded representation of the custom business event is written to the request URI section of a log record. Non-ASCII characters are first encoded as sequences of 2 or 3 bytes, by using the UTF-8 algorithm, before they are encoded as %HH escapes. The encoded business event precedes the query fragment, which starts with a question mark. Furthermore, the name of the request parameter ciwas replaced by ParameterNamesProcessorSample and now displays in the query fragment of the request URI section of the log record as CurrentItem.

```
9.37.3.88 - jdoe [22/Nov/2008:22:11:27 +0100] "GET /Portlet/
5_8000CB1A00U6B02NVSPH1G20G1/SamplePortlet/A%20sample%20business%20event
?PortletPID=5_8000CB1A00U6B02NVSPH1G20G1&PortletMode=view&PortletState=normal
&RequestType=render&CurrentItem=9783000216008 HTTP/1.1" 200 -1
"http://myserver.company.com/Page/6_8000CB1A00UR402F0JC25U1O25/SamplePage"
"Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.18) Gecko/20081029
Firefox/2.0.0.18" "JSESSIONID=0000JwIm04xm7btVLwzCj9Qo-uj:-1"
```


