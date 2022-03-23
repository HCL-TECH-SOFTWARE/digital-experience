# Authentication Service 

The portal Authentication Service contains the configuration properties for portal authentication. Authentication means that users identify themselves to gain access to the system. Usually users access the system by a user ID and password.

In the WebSphere® Integrated Solutions Console, the portal Authentication Service is listed as **WP AuthenticationService**.

-   **authentication.execute.portal.jaas.login = \(false\)**

    Use this property to enable or disable the execution of the portal JAAS login:

    -   **false**

        This value disables the execution of the portal JAAS login. This value is the default value. Disable this property only if you have no JAAS Login Modules defined for the portal application login configuration.

    -   **true**

        This value enables the execution of the portal JAAS login. You can enable this property if you have JAAS Login Modules that are defined for the portal application login configuration.

    This property is related to performance.

-   **authentication.isLoginUrlActive = \(true\)**

    Use this property to enable or disable the automatic login URL in Portal.

    **Note:** This property is a `java.lang.Boolean` property.

    -   **true**

        Enables the automatic login URL. This value is the default value.

    -   **false**

        Disables the automatic login URL


Use the following properties to define the custom filters in the various authentication filter chains in the portal. Each of these properties takes a list of the fully qualified class names of the custom filter implementations, separated by colons \( `:` \) or semicolons \( `;` \). For concept information about authentication filters, read the topic about *Configuring authentication filters*.

-   **login.explicit.filterchain = <none\>**

    Use this property to specify the custom filters for the filter chain that is triggered for an explicit login by user name and password. The classes that are listed in this property must implement the interface `com.ibm.portal.auth.ExplicitLoginFilter`.

-   **login.implicit.filterchain = <none\>**

    Use this property to specify the custom filters for the filter chain that is triggered for an implicit login. Implicit login means that the user is already authenticated to WebSphere® Application Server but has no portal session yet. The classes that are listed in this property must implement the interface `com.ibm.portal.auth.ImplicitLoginFilter`.

-   **logout.explicit.filterchain = <none\>**

    Use this property to specify the custom filters for the filter chain that is triggered for an explicit logout. The classes that are listed in this property must implement the interface `com.ibm.portal.auth.ExplicitLogoutFilter`.

-   **logout.implicit.filterchain = <none\>**

    Use this property to specify the custom filters for the filter chain that is triggered for an implicit logout. An implicit logout occurs when the user session expires. The classes that are listed in this property must implement the `interface com.ibm.portal.auth.ImplicitLogoutFilter`.

-   **sessiontimeout.filterchain = <none\>**

    Use this property to specify the custom filters for the filter chain that is triggered directly after an idle timeout of the session occurred. The classes that are listed in this property must implement the interface `com.ibm.portal.auth.SessionTimeoutFilter`.

-   **sessionvalidation.filterchain = <none\>**

    Use this property to specify the custom filters for the filter chain that is triggered for every request before the action handling and rendering is processed. The classes that are listed in this property must implement the interface `com.ibm.portal.auth.SessionValidationFilter`.

-   **jsessionid.cookie.expire = \(true\)**

    Use this property to determine whether the portal impersonation logout invalidates the HTTP session, but does not expire the session cookie. That cookie is typically the JSESSIONID cookie. Specify one of the following values:

    -   **true**

        If you specify this value, the session cookie expires in the web browser. This value is the default value.

    -   **false**

        If you specify this value, the session cookie does not expire in the web browser. As a result, the impersonation process can remain on a single server when it changes between user IDs.

-   **filterchain.properties = <none\>**

    Use an arbitrary set of properties according to the previous pattern to specify properties for any of your custom filters. The property value is then available to the specified filter class in the `SecurityFilterConfig` object that is passed to its `init` method.

-   **filterchain.properties.com.ibm.wps.auth.impl.ValidateRedirectLoginFilter.blacklist.pattern = <regexp\>**

    When you log in to HCL Portal, a special cookie that is named the **WasReqURL** cookie is used to determine where to send the user after login. This property allows an inspection of the cookie and performs a redirect of **WasReqURL** to a different URL if the **WasReqURL** contains one or more patterns. `<regexp>` is interpreted as a Java regular expression and compared to redirect URL. If, for example, all redirect URLs that end with \*.\* are considered invalid. You can use the following pattern: .\*/\[ˆ/\]\*\[.\]+\[ˆ/\]\*. Also, if the **WasReqURL** cookie contains `/myconnect/`, use the following pattern `.*myconnect.*`. If the pattern matches from this property, the user is sent to the root location of the base portal or virtual portal rather than the location specified in the **WasReqURL**.

    **Pre-requisite:** You must add the value `com.ibm.wps.auth.impl.ValidateRedirectLoginFilter` to either the `login.explicit.filterchain` or the `login.implicit.filterchain` properties for this property to become effective.


**Parent topic:**[Portal Security Services ](../admin-system/srvcfgref_secy.md)

**Related information**  


[Configuring authentication filters ](../admin-system/adauthflt.md)

