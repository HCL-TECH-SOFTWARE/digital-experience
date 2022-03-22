# Configuring authentication filters

The portal authentication filters are a set of plug-in points. You can use them to intercept or extend the portal login, logout, session timeout, and request processing by custom code, for example to redirect users to a specific URL.

## The authentication filter chain concept

The authentication filters in the portal use the same pattern as defined by the J2EE servlet filter facility. For more information, see [The Essentials of Filters](http://www.oracle.com/technetwork/java/filters-137243.md). The following example shows how this pattern is applied to the authentication filters.

```
Trigger of filter chain, |                        |
   for example explicit  |   CustomFilter1        |
   login or logout      ---> next(..., chain){    |                         |
                         |   // do something #1a  |   CustomFilter2         |
                         |   chain.next(...)     ---> next(..., chain){     |
                         |                        |   // do something #2a   |   DefaultFilter
                         |                        |   chain.next(...)      ---> next(..., chain){
                         |                        |                         |   // Execute the
                         |                        |                         |      default logic
                         |                        |   // do something #2b <---  }
                         |  // do something #1b <---  }                     |  
Redirect, exception,   <--- }                     |  
   or continue           | 
```

A default filter performs the default logic for a particular use case, for example, login. You can chain a set of custom filters to be run before that default filter. When the filter chain is started, it calls the first element in the chain \(in the example `CustomFilter1`\) and passes a chain object as an argument to the call. The filter implementation can then perform some operations that it calls the appropriate method on the chain object to trigger the next element in the chain \(`CustomFilter2`\). This filter again can implement some individual logic that is run before it calls the next element. The last element of the chain is the predefined `DefaultFilter` that makes sure that the default logic for the respective use case is run.

After a filter is run or if an exception is thrown, each filter returns to the one that calls it, so it is possible to implement a customized exception handling or perform more operations after it calls the successor. Now you can chain a custom set of filters. Each custom filter can perform operations before and after the following element\(s\) in the chain. You can specify the order and the fully qualified class names of the custom filters by portal configuration properties. For details see the topic about the portal WP Authentication Service. The portal provides only the DefaultFilter implementations and enforces that they are always the last element in the chains; if there are no custom login filters defined, the default filters are the only element.

## Available authentication filter chains

The filter chain concept that is described in the previous section is applied to six types of events that concern the flows of Portal login, logout, and session handling. This provides a flexible approach to plug custom logic to each of those flows. In particular, there are filter chains for the following events:

-   Explicit login: This is a login by user name and password as represented by the interface `com.ibm.portal.auth.ExplicitLoginFilter`. For example, this can be a login by using the login portlet or the login URL.
-   Implicit login: For example, this can be when a user is already authenticated by WAS, but not yet to Portal. This is represented by the interface `com.ibm.portal.auth.ImplicitLoginFilter`.
-   Explicit logout: This means that the user triggers a logout action directly, for example by clicking **Logout** in the user interface, `interface com.ibm.portal.auth.ExplicitLogoutFilter`.
-   Implicit logout: For example, this can be after a session timeout, or if an authenticated user accesses a public page, or if the user navigates to a virtual portal without being member of the associated user realm. This is represented by the interface `com.ibm.portal.auth.ImplicitLogoutFilter`.
-   Session Timeout: This is called immediately after an idle timeout of the user session occurred. This is represented by the interface `com.ibm.portal.auth.SessionTimeoutFilter`.
-   Session Validation: This is called for every request before actions are triggered and the page is rendered. This is represented by the interface `com.ibm.portal.auth.SessionValidationFilter`.

Other than the session timeout filter, each of the previous filters has access to the HTTP request and response objects. A special context object can be used to share information between filters and set redirects that are run after the filter chain is processed. For more detailed information about each of the filter and the filter chain interfaces, see the documentation for both HCL Portal and the API JavaDoc. For a filter chain example, see the topic with the Example of a custom authentication filter.

## Configuring the filter chains

You can specify the order of filters for each filter chain by setting the following properties in the portal WP Authentication Service:

```
login.explicit.filterchain    = colon or semicolon-separated list of fully qualified class names
login.implicit.filterchain    = colon or semicolon-separated list of fully qualified class names
logout.explicit.filterchain   = colon or semicolon-separated list of fully qualified class names
logout.implicit.filterchain   = colon or semicolon-separated list of fully qualified class names
sessiontimeout.filterchain    = colon or semicolon-separated list of fully qualified class names
sessionvalidation.filterchain = colon or semicolon-separated list of fully qualified class names

```

**Note:** Use the properties to specify only the custom filter elements, as the default filter implementation is added implicitly by the Portal infrastructure. Thus, by default no value is set for the properties.

In addition, you can set properties in the portal WP Authentication Service according to the following pattern:

```
filterchain.properties.fully qualified class name of the filter implementation.property name
```

This makes the value of this property available in the filter configuration object of the specified class by using the key `property name`.

For details about setting portal configuration properties see the topic about Setting service configuration properties.

## Example of a custom authentication filter

The following gives an example of a custom filter plugged into the filter chain for the explicit Portal login. The custom filter holds properties that define particular redirect URLs for particular user IDs and triggers the corresponding redirect if one of those users who are logged in successfully. To implement such an example, proceed by the following steps:

1.  Implement the **com.ibm.portal.auth.ExplicitLoginFilter** interface and make your class available to the portal class path. See the topic [Extending HCL Portal class path](../dev/ext_wp_classpath.md) for where to place your compiled custom code on the Portal filesystem. Refer to the following sample code as an example to implement the methods of the interface:

    ```
    package com.ibm.portal.example;
    
    public class UserRedirectLoginFilter implements ExplicitLoginFilter {
    	
        // hash map to store the mappings from user id to redirect URL
           private java.util.Map userToRedirectURLs = new java.util.HashMap();
    
    public void init(SecurityFilterConfig filterConfig)
           throws SecurityFilterInitException {
        // iterate the list of init parameters and store 
           the mappings of user to redirect urls for 
           (java.util.Iterator it = filterConfig.getInitParameterNames(); it.hasNext(); ) {
               String currentParameter = (String)it.next();
               userToRedirectURLs.put(currentParameter, 
               filterConfig.getInitParameter(currentParameter));
            }
        }
    
        public void login(HttpServletRequest req, HttpServletResponse resp,
                    String userID, char[] password,
                    FilterChainContext portalLoginContext, Subject subject,
                    String realm, ExplicitLoginFilterChain chain)
                    throws LoginException, WSSecurityException,
                    PasswordInvalidException, UserIDInvalidException,
                    AuthenticationFailedException, AuthenticationException,
                    SystemLoginException, com.ibm.portal.auth.exceptions.LoginException {
            // call the next element in the filter chain to trigger the default login
               chain.login(req, resp, userID, password, portalLoginContext, subject, realm);
    		
            // if no exception occured, the login was successful
               if (userToRedirectURLs.containsKey(userID)) {
            // set the redirect url for the user if we have an entry
               portalLoginContext.setRedirectURL((String)userToRedirectURLs.get(userID));
            }
        }
    
        public void destroy() {
               // nothing to do here
        }
     }
    
    ```

2.  Specify the class name of the custom filter in the WP Authentication Service properties:

    ```
    login.explicit.filterchain=com.ibm.portal.example.UserRedirectLoginFilter
    ```

3.  To define the redirect URLs for individual user IDs, specify your custom set of properties for this class accordingly. Example:

    ```
    filterchain.properties.com.ibm.portal.example.UserRedirectLoginFilter.alice=/wps/myportal/pageA
    filterchain.properties.com.ibm.portal.example.UserRedirectLoginFilter.bob=/wps/myportal/pageB
    ```

4.  Restart the portal.

The new filter for the explicit login is now available. Users who are defined in the properties will be redirected to the specified URL after they log in through the login portlet or login URL.

