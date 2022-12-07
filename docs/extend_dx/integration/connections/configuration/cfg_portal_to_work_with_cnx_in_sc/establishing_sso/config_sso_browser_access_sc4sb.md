# Configuring single sign-on (SSO) for browser-based access to HCL Connections in SmartCloud for Social Business

Single sign-on (SSO) for browser-based access to HCL Connections in SmartCloud for Social Business is enabled by using Service Provider Initiated Authentication Flow. You can enable SSO for all links, including external URLs, custom markup, search results, and social portlets.

By default, if an unauthenticated user is working within an HCL Connections Integration Asset, such as a social rendering list, and clicks a URL that points to the web user interface for HCL Connections in SmartCloud for Social Business, the user is redirected to the HCL Connections login screen. This redirect to the HCL Connections login screen occurs if the user is not authenticated or if their authentication expired. Enabling Service Provider Initiated Authentication Flow prevents this redirect to the HCL Connections login screen. Instead, the user is authenticated by using the Tivoli Federated Identity Manager server.

1.  Contact SmartCloud for Social Business support. Go to [HCL Sametime](https://www.hcltechsw.com/products/sametime) for more information.

2.  In your email, request to have Service Provider Initiated Authentication Flow enabled for your system.


If you enable a Service Provider Initiated Authentication Flow, the following scenario occurs the first time that a user clicks a URL that points to the web user interface for HCL Connections in SmartCloud for Social Business:

!!! note
    The user is not yet authenticated with HCL Connections in SmartCloud for Social Business.

1.  In the prompt that opens, the user selects **Use My Organization's Login Page**.
2.  The user specifies their email address.
3.  The user is redirected to the local Tivoli Federated Identity Manager server and then back to the HCL Connections in SmartCloud for Social Business web user interface without any further user interaction.
4.  The user is asked if they want to be remembered. The user specifies yes.
5.  The requested content displays for the user.

If the user specifies that they want to be remembered and does not clear their browser's cookies, the following scenario occurs the next time that the user clicks a URL that points to the web user interface for HCL Connections in SmartCloud for Social Business:

!!! note
    The user is not yet authenticated with HCL Connections in SmartCloud for Social Business.

1.  The user is redirected to the local Tivoli Federated Identity Manager server and then back to the HCL Connections in SmartCloud for Social Business web user interface without any further user interaction.
2.  The requested content displays for the user.

The automatic redirect to the local Tivoli Federated Identity Manager server and back to HCL Connections in SmartCloud for Social Business occurs because the portal server and the local Tivoli Federated Identity Manager server are in a single sign-on domain. Therefore, the Tivoli Federated Identity Manager server knows the user and can directly initiate a redirect back to the HCL Connections in SmartCloud for Social Business page without any user interaction.


