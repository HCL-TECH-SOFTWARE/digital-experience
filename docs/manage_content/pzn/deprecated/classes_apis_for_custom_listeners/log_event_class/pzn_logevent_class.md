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
|<br><pr>\``` <br>protected LogEvent( HttpServletRequest request ) <br>```|Constructor|
|<br><pr>\``` <br>public Cookie[] getCookies( )<br>```|Returns the cookies available with the request for this event.|
|<br><pr>\``` <br>public void setCookies( Cookie[] )<br>```|Sets the cookies for this event. Can be used by custom listeners in order to replace the cookie data received with the current JSP request.|
|<br><pr>\``` <br>public void enableLogCookies( boolean enable )<br>```|If enable is true, enables the collection of cookies for this event instance; otherwise, disables the collection of cookies for this event instance. If you want to collect cookie information with the FeedbackListener or a subclassed FeedbackListener, use this method.|
|<br><pr>\``` <br>public void enableLogCookies( )<br>```| Same as `enableLogCookies( true )`.|
|<br><pr>\``` <br>public boolean logCookies( )<br>```|Returns true if cookie information should be logged to the Feedback schema for this event; otherwise, returns false.|
|<br><pr>\``` <br>public String getIPAddress( )<br>```|Returns the Web client IP address.|
|<br><pr>\``` <br>public void setIPAddress( String ipAddress )<br>```|Sets the IP address for this event. Can be used by custom listeners in order to replace the IP address for the current JSP request.|
|<br><pr>\``` <br>public String getMethod( )<br>```|Returns the HTTP method used in the current JSP request \(GET, POST\). Note that the method is not stored in the Feedback schema.|
|<br><pr>\``` <br>public void setMethod( String method )<br>```|Sets the HTTP method for the current JSP request. Can be used by custom listeners in order to replace the method from the current JSP request. Note that the method is not stored in the Feedback schema.|
|<br><pr>\``` <br>public String getProtocol( )<br>```|Returns the protocol for the current JSP request \(HTTP or HTTPS\).|
|<br><pr>\``` <br>public void setProtocol( String protocol )<br>```|Sets the protocol for the current JSP request. Can be used by custom listeners in order to replace the protocol from the current JSP request.|
|<br><pr>\``` <br>public void enableLogReferralParms( boolean enable )<br>```|If enable is true, enables the collection of referral parameters for this event instance; otherwise, disables the collection of referral parameters for this event instance. If you want to collect the referral query string parameters with the FeedbackListener or a subclassed FeedbackListener, use this method.|
|<br><pr>\``` <br>public void enableLogReferralParms( )<br>```| Same as `enableLogReferralParms( true )`.|
|<br><pr>\``` <br>public boolean logReferralParms( )<br>```|Returns true if referral parameter information should be logged to the Feedback schema for this event; otherwise, return false.|
|<br><pr>\``` <br>public String getRemoteHost( )<br>```|Returns the host name of the client machine that issued this JSP request. Note that the remote host name is not stored in the Feedback schema.|
|<br><pr>\``` <br>public void setRemoteHost( String hostName )<br>```|Sets the host name of the client machine that issued this JSP request. Can be used by custom listeners that perform DNS resolution. Note that the remote host name is not stored in the Feedback schema.|
|<br><pr>\``` <br>public String getQueryString( )<br>```|Returns the query string parameters for this event.|
|<br><pr>\``` <br>public void setQueryString( String queryString )<br>```|Sets the query string parameters for this event. Can be used by custom listeners in order to replace the query string parameters for the current JSP request.|
|<br><pr>\``` <br>public void enableLogQueryParms( boolean enable )<br>```|If enable is true, enables the collection of query parameters for this event instance; otherwise, disables the collection of referral parameters for this event instance. If you want to collect the query string parameters with the FeedbackListener or a subclassed FeedbackListener, use this method.|
|<br><pr>\``` <br>public void enableLogQueryParms( )<br>```|Same as `enableLogQueryParms( true )`.|
|<br><pr>\``` <br>public boolean logQueryParms( )<br>```|Returns true if query parameter information should be logged to the Feedback schema for this event; otherwise, return false.|
|<br><pr>\``` <br>public String getReferrer( )<br>```|Returns the URL of the referral page or null if there was no referrer.|
|<br><pr>\``` <br>public void setReferrer( String referrer )<br>```|Sets the referral page for this event. Can be used by custom listeners in order to replace the referrer for the current JSP request.|
|<br><pr>\``` <br>public String getServerName( )<br>```|Returns the host name of the server machine that is processing this JSP request. Note that the server host name is not stored in the Feedback schema.|
|<br><pr>\``` <br>public void setServerName( String serverName )<br>```|Sets the host name of the server machine that is processing this JSP request. Can be used by custom listeners to set the name of the current server. Note that the server host name is not stored in the Feedback schema.|
|<br><pr>\``` <br>public String getSessionId( )<br>```|Returns the id of the session for the current JSP request.|
|<br><pr>\``` <br>public void setSessionId( String sessionId )<br>```|Sets the id of the current user session. Can be used by custom listeners in order to replace the id of the current HttpSession object. This can be useful when an alternative session identification mechanism is used.|
|<br><pr>\``` <br>public Date getTimestamp( )<br>```|Returns the time that this log event was generated. Note that this timestamp differs slightly from the time the event was received by the IBM® WebSphere® Application Server. Note that if there are multiple logging beans or content spots in a JSP, the timestamps in the generated log events will be the same.|
|<br><pr>\``` <br>public void setTimestamp( Date timestamp )<br>```|Sets the time for this log event. Can be used by custom listeners in order to replace the timestamp used for this event.|
|<br><pr>\``` <br>public String getUrl( )<br>```|Returns the URL of the page request encapsulated by this log event.|
|<br><pr>\``` <br>public void setUrl( String url )<br>```|Sets the URL of the page request for this event. Can be used by custom listeners in order to replace the URL for the current JSP request.|
|<br><pr>\``` <br>public String getUser( )<br>```|Returns the HTTP authenticated user for the current session.|
|<br><pr>\``` <br>public void setUser( String user )<br>```|Sets the user for this event. Can be used by custom listeners in order to replace the user for the current JSP request. This can be useful when an alternative authentication mechanism is used.|
|<br><pr>\``` <br>public String getUserAgent( )<br>```|Returns the browser engine for the current session.|
|<br><pr>\``` <br>public void setUserAgent( String userAgent )<br>```|Sets the user agent for this event. Can be used by custom listeners in order to replace the user agent from the current JSP request.|
|<br><pr>\``` <br>public String toString( )    <br>```|Returns a String representation of this event.|

-   **[RuleEvent class](pzn_ruleevent_class.md)**  
A RuleEvent class is constructed whenever a rule is executed. It contains information about the rule that was executed and the resulting resources. It is an implicitly constructed event; a logging bean is not necessary.
-   **[CategoryEvent class](pzn_categoryevent_class.md)**  
The CategoryEvent class is used to access the data logged with a Category bean.
-   **[ActionEvent class](pzn_actionevent_class.md)**  
The ActionEvent class is used to access the data logged with an Action bean.
-   **[CustomLogEvent class](pzn_customlogevent_class.md)**  
Get an overview of the CustomLogEvent class and its methods.
-   **[RatingEvent class](pzn_ratingevent_class.md)**  
The RatingEvent class is used to access the data logged with a Rating bean.
-   **[PageViewEvent class](pzn_pageviewevent_class.md)**  
The PageViewEvent class is used to access data logged by a PageView bean.
-   **[RuleEvent class](pzn_ruleevent_class.md)**  
A RuleEvent class is constructed whenever a rule is executed. It contains information about the rule that was executed and the resulting resources. It is an implicitly constructed event; a logging bean is not necessary.
-   **[CategoryEvent class](pzn_categoryevent_class.md)**  
The CategoryEvent class is used to access the data logged with a Category bean.
-   **[ActionEvent class](pzn_actionevent_class.md)**  
The ActionEvent class is used to access the data logged with an Action bean.
-   **[CustomLogEvent class](pzn_customlogevent_class.md)**  
Get an overview of the CustomLogEvent class and its methods.
-   **[RatingEvent class](pzn_ratingevent_class.md)**  
The RatingEvent class is used to access the data logged with a Rating bean.
-   **[PageViewEvent class](pzn_pageviewevent_class.md)**  
The PageViewEvent class is used to access data logged by a PageView bean.


