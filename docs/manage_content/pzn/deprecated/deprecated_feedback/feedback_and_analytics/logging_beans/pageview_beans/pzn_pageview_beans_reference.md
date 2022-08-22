# PageView beans reference

Learn about the com.ibm.wcp.analysis.beans.PageView bean log method and instantiation of PageView beans.

The `com.ibm.wcp.analysis.beans.PageView` bean log method signature is:

```
public void log( HttpServletRequest request )
```

The log method creates a new `PageViewEvent` with the request. The `PageViewEvent` is routed to all registered log listeners.

PageView beans should be instantiated as session beans; however, they will not maintain any session data.

**Parent topic:**[PageView beans](../pzn/pzn_pageview_beans.md)

