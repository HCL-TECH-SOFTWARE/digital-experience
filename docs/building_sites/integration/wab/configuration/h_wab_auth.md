---
id: h_wab_auth
title: Content provider policy single sign-on
---
import useBaseUrl from '@docusaurus/useBaseUrl';



When you create a policy for your profile, define the authentication to configure single sign-on between the Web Application Bridge and the secured web application.

## HTTP Basic

HTTP basic authentication provides simple access control to web resources. No cookies, session identifiers, or login pages are necessary. Therefore, this option is not secure unless it is used with an external secure system such as SSL.

Select an existing credential vault slot ID to specify where to pick the authentication credentials.

**Important:** Create the credential vault slot before you configure the policy authentication. Also, make sure that the user, who would access the Web Dock application corresponding to this policy, has access to this credential slot. For more information about how to provide the access to resource in portal, see [Viewing and assigning explicit roles](h_rperm_assign_roles.md).

## HTTP Digest

HTTP digest authentication provides simple, encrypted access control to web resources.

Select an existing credential vault slot ID to specify where to pick the authentication credentials.

**Important:** Create the credential vault slot before you configure the policy authentication. Also, make sure that the user, who would access the Web Dock application corresponding to this policy, has access to this credential slot. For more information about how to provide the access to resource in portal, see [Viewing and assigning explicit roles](h_rperm_assign_roles.md).

## Form-based authentication

Some sites require you to log in with a form before you are allowed to browse the site. You must set up the web application bridge to emulate these steps. This feature is called form-based authentication. The web application bridge supports one type of form-based authentication.

The supported technique assumes that the authentication server sends back one or more cookies in response to a successful authentication attempt. These cookies are then used on all subsequent calls within that Web Dock portlet. That is, it is assumed that the login \(or challenge\) location and the actual URL are separate entities. The first location is used only to authenticate and returns a cookie in a standard HTTP 1.1 2XX response message. The second and all subsequent locations use the cookies from the first response.

Gather the following information before you configure form-based authentication:

-   The URL that is the target of the login submission form
-   The input parameters that are used for the user ID and password
-   Any hidden input fields on the form that might be used during the authentication process.

To locate the target URL of the form submission, look for the `<FORM>` tag on the login page. Browse the source of the page. Then, locate the ACTION attribute. The URL in the ACTION attribute is the URL that you need to specify. Enter this URL as the Login URL value. The **Login method** field specifies the HTTP method \(for example: POST, GET\). The HTTP method is used to make the authentication request to the Login URL. Its value is the Method attribute of the `<FORM>` tag.

Next, find the `<INPUT>` fields for the user ID and password. The values for the NAME attributes are used for the **User name parameter** and **Password parameter** values.

Locate any `<INPUT TYPE="hidden" ...>` elements on the source page. They provide name-value pairs to the system for login and might be important for the process. The web application bridge must also send them. Enter the hidden values in **Login parameter**. Enter these values as a series of comma-separated name-value pairs.

Authenticate with the server one time. Directly access the site and observe the response in a debugger tool. Check the cookies that are returned as part of the authentication request that is sent to the Login URL. Cookies that are returned as part of "Set-Cookie" response headers are session cookies. Specify the session cookies as a comma-separated list.

Select an existing credential vault slot ID to specify where to pick the authentication credentials.

**Important:** Create the credential vault slot before you configure the policy authentication. Also, make sure that the user, who would access the Web Dock application corresponding to this policy, has access to this credential slot. For more information about how to provide the access to resource in portal, see [Viewing and assigning explicit roles](h_rperm_assign_roles.md).

When a user provides the wrong credentials in personalize mode, the user sees the contents because of the session that is associated with the portal in form authentication. The user must log out and clear all the caches. Then, they must log in again. If the user goes back to the form authentication page, the user sees that the page cannot be displayed. The user must return to personalize mode and enter the correct credentials for the application. When they click submit, they can view all the contents in view mode of Web Dock portlet.

## SPNEGO authentication

Select this option to use the Simple and Protected GSS-API Negotiation \(SPNEGO\) as the web authenticator for the application server. SPNEGO support relies on the scenario where IBM® WebSphere® Application Server is already configured for SPNEGO trust association interceptor \(SPNEGO TAI\) web authentication.

The following prerequisites are required for this scenario:

-   You installed HCL Digital Experience on a Windows™ operating system.
-   You are using Microsoft™ Active Directory as your LDAP user registry.
-   SPNEGO TAI is already enabled on WebSphere Application Server.

Complete the following steps to support SPNEGO as an authentication mechanism in the web application bridge:

1.  Complete the following steps to set up delegation:

    -   Open the Active Directory server user properties window.
    -   Go to the **Delegation** tab for the Active Directory server user ID that the application uses.
    -   Select **Trust this user for delegation to any service \(Kerberos only\)**.

        **Note:** Do not set this option for individual client users. Instead, set this option only for the application server ID.

    -   Click **OK**.
    **Windows Server 2000 systems:** Delegation capability is set in the account options list of the account tab. Check the **Account is trusted for delegation** check box.

2.  Enter your user ID and password on the client workstation to log in to the local or trusted remote Windows domain.
3.  Access HCL through a browser either on the local Windows domain or on a trusted remote Windows domain.
4.  Complete the following steps to configure your Firefox browser for SPNEGO:
    1.  Type about:config in the address bar.
    2.  Type auth in the **Filter** field.
    3.  Set the following two items to your SSO domain:
        -   network.negotiate-auth.delegation-uris
        -   network.negotiate-auth.trusted-uris
5.  Complete the following steps to configure your Internet Explorer browser for SPNEGO:
    1.  Go to **Tools** \> **Internet options**.
    2.  Select the **Security** tab.
    3.  Select **Local intranet**.
    4.  Click **Sites**.
    5.  Add the SSO domain.
    6.  Select the **Advanced** tab.
    7.  Verify that the **Enable Integrated Windows Authentication** check box is checked.
    8.  Click **OK**.
    9.  Restart Internet Explorer for your changes to take effect.

## SAML Authentication

Select this option to use the Security Assertion Markup Language \(SAML\) as the web authenticator for the application server. If you plan to use SAML authentication, gather the following information from your SAML administrator:

-   **Identity provider name**: Enter the name of your identity provider. If you do not enter a value, saml is used.
-   **Identity provider URL**: The complete login URL for the identity provider; for example, protocol://host:port/uri.
-   **Identity provider authentication source**: Select either LTPA or Cookies. If you select Cookies, the **Identity provider authentication cookies** field displays. Enter the name of the cookie in the text box and then click **Add**. Add the same cookies to the **HTTP Cookies** section of the **Request** tab. Select the **Block all, except** radio button and then add the SAML cookies.
-   **Authenticated session cookies**: Enter the name of the session cookie in the text box and then click **Add**. If you do not enter a value, SAML20 is used.
-   **Identity provider login parameters**: Click **Add new parameter** and then add the name of the parameter and the value that you want to use.

