# LogEvent class 

The LogEvent class is the base class for all run-time logging events. The methods in this class are used to access all basic HTTP request information.

All run-time log data is accessible through the log event sub classes. These log events are constructed by either a rule trigger or a logging bean. They are then routed to the registered log listeners.

The direct subclasses of the LogEvent class are ActionEvent, CategoryEvent, CustomLogEvent, PageViewEvent, RatingEvent, and RuleEvent.

```
public class com.ibm.wcp.analysis.event.LogEvent extends com.ibm.wcp.analysis.event.Event
                                                 implements Serializable
```

|Method|Explanation|
|------|-----------|
|```
protected LogEvent( HttpServletRequest request )
```

|Constructor|
|```
public Cookie[] getCookies( )
```

|Returns the cookies available with the request for this event.|
|```
public void setCookies( Cookie[] )
```

|Sets the cookies for this event. Can be used by custom listeners in order to replace the cookie data received with the current JSP request.|
|```
public void enableLogCookies( boolean enable )
```

|If enable is true, enables the collection of cookies for this event instance; otherwise, disables the collection of cookies for this event instance. If you want to collect cookie information with the FeedbackListener or a subclassed FeedbackListener, use this method.|
|```
public void enableLogCookies( )
```

|Same as `enableLogCookies( true )`.|
|```
public boolean logCookies( )
```

|Returns true if cookie information should be logged to the Feedback schema for this event; otherwise, returns false.|
|```
public String getIPAddress( )
```

|Returns the Web client IP address.|
|```
public void setIPAddress( String ipAddress )
```

|Sets the IP address for this event. Can be used by custom listeners in order to replace the IP address for the current JSP request.|
|```
public String getMethod( )
```

|Returns the HTTP method used in the current JSP request \(GET, POST\). Note that the method is not stored in the Feedback schema.|
|```
public void setMethod( String method )
```

|Sets the HTTP method for the current JSP request. Can be used by custom listeners in order to replace the method from the current JSP request. Note that the method is not stored in the Feedback schema.|
|```
public String getProtocol( )
```

|Returns the protocol for the current JSP request \(HTTP or HTTPS\).|
|```
public void setProtocol( String protocol )
```

|Sets the protocol for the current JSP request. Can be used by custom listeners in order to replace the protocol from the current JSP request.|
|```
public void enableLogReferralParms( boolean enable )
```

|If enable is true, enables the collection of referral parameters for this event instance; otherwise, disables the collection of referral parameters for this event instance. If you want to collect the referral query string parameters with the FeedbackListener or a subclassed FeedbackListener, use this method.|
|```
public void enableLogReferralParms( )
```

|Same as `enableLogReferralParms( true )`.|
|```
public boolean logReferralParms( )
```

|Returns true if referral parameter information should be logged to the Feedback schema for this event; otherwise, return false.|
|```
public String getRemoteHost( )
```

|Returns the host name of the client machine that issued this JSP request. Note that the remote host name is not stored in the Feedback schema.|
|```
public void setRemoteHost( String hostName )
```

|Sets the host name of the client machine that issued this JSP request. Can be used by custom listeners that perform DNS resolution. Note that the remote host name is not stored in the Feedback schema.|
|```
public String getQueryString( )
```

|Returns the query string parameters for this event.|
|```
public void setQueryString( String queryString )
```

|Sets the query string parameters for this event. Can be used by custom listeners in order to replace the query string parameters for the current JSP request.|
|```
public void enableLogQueryParms( boolean enable )
```

|If enable is true, enables the collection of query parameters for this event instance; otherwise, disables the collection of referral parameters for this event instance. If you want to collect the query string parameters with the FeedbackListener or a subclassed FeedbackListener, use this method.|
|```
public void enableLogQueryParms( )
```

|Same as `enableLogQueryParms( true )`.|
|```
public boolean logQueryParms( )
```

|Returns true if query parameter information should be logged to the Feedback schema for this event; otherwise, return false.|
|```
public String getReferrer( )
```

|Returns the URL of the referral page or null if there was no referrer.|
|```
public void setReferrer( String referrer )
```

|Sets the referral page for this event. Can be used by custom listeners in order to replace the referrer for the current JSP request.|
|```
public String getServerName( )
```

|Returns the host name of the server machine that is processing this JSP request. Note that the server host name is not stored in the Feedback schema.|
|```
public void setServerName( String serverName )
```

|Sets the host name of the server machine that is processing this JSP request. Can be used by custom listeners to set the name of the current server. Note that the server host name is not stored in the Feedback schema.|
|```
public String getSessionId( )
```

|Returns the id of the session for the current JSP request.|
|```
public void setSessionId( String sessionId )
```

|Sets the id of the current user session. Can be used by custom listeners in order to replace the id of the current HttpSession object. This can be useful when an alternative session identification mechanism is used.|
|```
public Date getTimestamp( )
```

|Returns the time that this log event was generated. Note that this timestamp differs slightly from the time the event was received by the IBM® WebSphere® Application Server. Note that if there are multiple logging beans or content spots in a JSP, the timestamps in the generated log events will be the same.|
|```
public void setTimestamp( Date timestamp )
```

|Sets the time for this log event. Can be used by custom listeners in order to replace the timestamp used for this event.|
|```
public String getUrl( )
```

|Returns the URL of the page request encapsulated by this log event.|
|```
public void setUrl( String url )
```

|Sets the URL of the page request for this event. Can be used by custom listeners in order to replace the URL for the current JSP request.|
|```
public String getUser( )
```

|Returns the HTTP authenticated user for the current session.|
|```
public void setUser( String user )
```

|Sets the user for this event. Can be used by custom listeners in order to replace the user for the current JSP request. This can be useful when an alternative authentication mechanism is used.|
|```
public String getUserAgent( )
```

|Returns the browser engine for the current session.|
|```
public void setUserAgent( String userAgent )
```

|Sets the user agent for this event. Can be used by custom listeners in order to replace the user agent from the current JSP request.|
|```
public String toString( )    
```

|Returns a String representation of this event.|

-   **[RuleEvent class ](../pzn/pzn_ruleevent_class.md)**  
A RuleEvent class is constructed whenever a rule is executed. It contains information about the rule that was executed and the resulting resources. It is an implicitly constructed event; a logging bean is not necessary.
-   **[CategoryEvent class ](../pzn/pzn_categoryevent_class.md)**  
The CategoryEvent class is used to access the data logged with a Category bean.
-   **[ActionEvent class ](../pzn/pzn_actionevent_class.md)**  
The ActionEvent class is used to access the data logged with an Action bean.
-   **[CustomLogEvent class ](../pzn/pzn_customlogevent_class.md)**  
Get an overview of the CustomLogEvent class and its methods.
-   **[RatingEvent class ](../pzn/pzn_ratingevent_class.md)**  
The RatingEvent class is used to access the data logged with a Rating bean.
-   **[PageViewEvent class ](../pzn/pzn_pageviewevent_class.md)**  
The PageViewEvent class is used to access data logged by a PageView bean.
-   **[RuleEvent class ](../pzn/pzn_ruleevent_class.md)**  
A RuleEvent class is constructed whenever a rule is executed. It contains information about the rule that was executed and the resulting resources. It is an implicitly constructed event; a logging bean is not necessary.
-   **[CategoryEvent class ](../pzn/pzn_categoryevent_class.md)**  
The CategoryEvent class is used to access the data logged with a Category bean.
-   **[ActionEvent class ](../pzn/pzn_actionevent_class.md)**  
The ActionEvent class is used to access the data logged with an Action bean.
-   **[CustomLogEvent class ](../pzn/pzn_customlogevent_class.md)**  
Get an overview of the CustomLogEvent class and its methods.
-   **[RatingEvent class ](../pzn/pzn_ratingevent_class.md)**  
The RatingEvent class is used to access the data logged with a Rating bean.
-   **[PageViewEvent class ](../pzn/pzn_pageviewevent_class.md)**  
The PageViewEvent class is used to access data logged by a PageView bean.

**Parent topic:**[Classes and APIs for writing custom listeners ](../pzn/pzn_classes_apis_custom_listeners.md)

**Parent topic:**[Classes and APIs for writing custom listeners ](../pzn/pzn_classes_apis_custom_listeners.md)

