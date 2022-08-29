# Accessing the portlet session on the anonymous page

View some pointers on handling portlet sessions in situations where portlets are placed on pages that do not require authentication.

**Note:** Authenticated and remembered users must have cookies enabled on their browser. Users can access portal sites without cookies enabled if they are anonymous users. If you turn on session tracking for anonymous users, then anonymous users also require cookies.

Administrators can place your portlet on a page that is presented to anonymous users \(similar to the Welcome page provided by HCL Portal\). By default, when a portlet is placed on a page that does not require authentication and no user is logged in, the portal server does track sessions across subsequent request to the server. Portlets should not create a session using the `request.getSession(true)` call in this case; which results in WebSphere Application Server warning messages similar to:

```xmp
SESN0066E: Response is already commited to client. Session cookie cannot be set. 
```

In this case, a temporary session is created and your session information will be lost in the next request. If you need to enable session tracking across requests for non-authenticated users, you can do so by setting the `public.session` parameter in the portal Navigator service configuration or by setting the `com.ibm.portal.public.session` container run time option in a JSR 286 portlet deployment descriptor. Note that this may result in significantly increased memory consumption. For details about the `com.ibm.portal.public.session` option and a code sample refer to the topic about Deployment descriptors, section about Container run time options. Instead of using these options, portlets that need to maintain interaction state even for non-authenticated users should use render parameters to keep this information instead of the portlet session, as recommended by the Java Portlet Specification.

The portlet may need to present the user with an appropriate message if it requires a valid portlet session to operate correctly. For example:

```xmp

   This content cannot be displayed until you log in.
   Please report this problem to the site administrator.

```

In addition, the administrator will need more helpful information that the portlet can provide in the portlet log:

```xmp

   Unable to locate the portlet session.  
   This portlet requires a session to function.
   Move the portlet to an authenticated page or 
   turn on session tracking for anonymous users.

```

If the portlet does not require a session for critical operation, then perhaps any subfunctions within the portlet require the session can be suppressed to anonymous users. This should be evaluated for each individual portlet.

If `request.getPortletSession()` or `request.getPortletSession(true)` are called when the user is not logged in and HCL Portal is not configured to use a session for anonymous users, each request from each client creates an extraneous `PortletSession` object that is lost and consumes JVM memory. This causes more frequent JVM garbage collection and hurts overall HCL Portal performance.

In order for a portlet to function without a portlet session, you must add this line to the beginning of all portlet JSPs.

```xmp

    <%@ page session="false" %>

```

Without this directive, the JSP page compiler generates code that accesses the session even if you don't use it in your JSP. You also cannot access any beans with scope set to session in any of your JSP pages as shown.

```xmp

    <jsp:useBean ... scope="session" />

```

This will create sessions when you do not want them. Instead, determine whether the session exists, for example:

```xmp

<%
   com.ibm.MyClassName theBeanId = null;
   PortletSession session = request.getPortletSession(false);
   if (session != null) {
      theBeanId = (com.ibm.MyClassName)session.getAttribute("theBeanId");
   }

   // later in your code always check to see if the bean exists before using it
   if (theBeanId != null) {
      // use the bean
   }
%>


```


