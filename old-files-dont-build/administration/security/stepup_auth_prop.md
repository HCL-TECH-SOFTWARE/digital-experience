# Step-up authentication properties

After you enable step-up authentication, you might want to adjust the settings to fit your business needs. You can use the WebSphere Integrated Solutions Console to create new properties, if necessary, or update existing properties.

For each additional authentication level you must create at least one properties file according to the following naming convention:

-   The authentication level name.
-   An underline character followed by a language locale. For example, en for English.
-   The string .properties

For example, for an authentication level of yourlevel, you need to create a file such as yourlevel.properties or yourlevel\_en.properties.

This file must be available in class path at com/ibm/portal/auth/sua/nls/.

The file must contain two key value pairs. For example, for the system specified authentication level authenticated, there are two definitions

-   display-name=authenticated
-   description=User authentication using username and password

These two strings are used to select the authentication level in the Administration portlet for configuration.

The following information contains all properties that apply to the appropriate portal configuration service, namely **WP StepUpConfigService**.

Log on to WebSphere® Integrated Solutions Console and then go to **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WP StepUpConfigService** \> **Custom properties** to access the properties.

**Note:** All property changes require that you restart the HCL Portal server in order for the changes to take effect.

-   **com.ibm.portal.SUA\_WPReqURL.set.httponly**

    Use this property to control whether the `HttpOnly` attribute is set on the `SUA_WPReqURL` cookie.

    Default: `true`

    Type: java.lang.Boolean

-   **sua.enable**

    Use this property to enable and disable the step-up authentication mechanism.

    Default: false

    Type: java.lang.Boolean

-   **sua.authLevel.enable**

    Use this property to provide a comma-separated list of authentication level names.

    **Notes:**

    -   If step-up authentication is enabled, the authentication level name must be specified.
    -   If you want to use the **Remember me** cookie, make sure that it is enabled and add the authentication level name for this property.
    Default: authenticated

    Type: java.lang.String

-   **sua.authLevel.auth\_level\_name.strength**

    Use this property to specify the authentication level strength of the authentication level with the name auth\_level\_name. The value is a non-negative integer that expresses the implied strength of a particular authentication method. The step-up authentication framework considers one authentication method to be stronger than another if it has a higher value.

    **Note:** The value 0 is reserved by the step-up authentication engine, and therefore it is not allowed to assign values less than one. It is possible to leave gaps in the sequence of authentication level strengths. It is not possible to assign the same authentication level to multiple authentication level names.

    Default: sua.authLevel.identified.strength =5 sua.authLevel.authenticated.strength =10

    Type: java.lang.Integer

-   **sua.authLevel.auth\_level\_name.required**

    Use this property to specify whether the authentication level with the name auth\_level\_name is optional or required. When a user accesses a resource with an optional authentication level, this resource might be accessed if the first required authentication level is verified. When an authentication level is flagged as required, it can be verified successfully only if all required authentication levels can be verified successfully.

    **Note:** This property must not be set for the authentication level that is identified or authenticated. If one authentication level is set as optional, all previous levels must also be optional.

    Default: true

    Type: java.lang.boolean

-   **sua.authLevel.auth\_level\_name.authLevelVerifier**

    Use this property to specify the fully qualified name of the class that implements the **com.ibm.portal.auth.stepup.AuthLevelVerifier** SPI. It also verifies whether the authentication level of auth\_level\_name is valid for a request.

    **Note:** This property must not be set for the authentication level that is identified or authenticated.

    Default: -

    Type: java.lang.String

-   **sua.authLevel.auth\_level\_name.stepUpAuthHandler**

    Use this property to specify the fully qualified name of the class that implements the **com.ibm.portal.auth.stepup.StepUpAuthHandler** SPI. It also establishes the authentication level of auth\_level\_name.

    **Note:** This property must not be set for the authentication level that is identified or authenticated.

    Default: -

    Type: java.lang.String

-   **sua.authLevel.auth\_level\_name.postRedirectionTargetProtected**

    The step-up authentication handler redirects a user with a certain authentication level to another page. For example, it redirects to a page with a login form. The step-up authentication framework redirects the user to the resource requested before the authentication level enforcement. This property specifies whether the redirection to the originally requested resource point to the public or the protected portal area. The implementation of the authentication level might move the user from an unauthenticated to an authenticated state.

    **Note:** This property must not be set for the authentication level that is identified or authenticated.

    Default: false

    Type: java.lang.Boolean

    Example: true

-   **sua.authLevel.auth\_level\_name.property.property\_name**

    Use this property to specify further properties that are available. The properties are received with their property\_name. The prefix sua.authLevel.auth\_level\_name.property is omitted.

    Default: -

    Type: java.lang.String


**Parent topic:**[Enabling step-up authentication and the Remember me cookie](../security/cfg_auth.md)

