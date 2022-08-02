# Finding the Identity Provider login URL and the Partner URL \(TFIM\)

In order to establish an SSO connection through Tivoli Federated Identity Manager, you must specify the Identity Provider login URL and the Partner URL. Learn how to find these values from the Tivoli Federated Identity Manager configuration if you do not already know them. If you know these values already, skip this step.

The following values are needed from the Tivoli Federated Identity Manager configuration in order to establish an SSO connection through Tivoli Federated Identity Manager:

-   **The Identity Provider login URL**

    The login URL of the Identity Provider service.

-   **The Partner URL**

    The URL of the federation partner.


The following steps describe how to obtain the Identity Provider login URL and the Partner URL from the Tivoli Federated Identity Manager configuration by using the Tivoli Federated Identity Manager admin console.

1.  Log in to the WebSphere® Integrated Solutions Console of the Tivoli Federated Identity Manager server.

2.  Click **Tivoli Federated Identity Manager** \> **Configure Federated Single Sign-on** \> **Federations**.

    The panel shows a list of Identity Providers.

3.  Select the Identity Provider that you want to use for the SSO connection.

    **Note:** This Identity Provider must have a single sign-on protocol **SAML 2.0** and the role of this federation must be **Identity Provider**.

4.  Click **Properties...**.

5.  Select the value of the field **Single Sign-on Service URL**. Use this value as the Identity Provider service URL for your Tivoli Federated Identity Manager configuration.

6.  Click **Cancel**.

7.  Click **View Partners...**.

8.  Select the Partner that you want to use for the SAML connection.

9.  Click **Properties...**.

10. Select the value of the field **Provider ID**. Use this value as the Partner URL for your Tivoli Federated Identity Manager configuration.

11. Click **Cancel**.


**Parent topic:**[Configuration settings for Tivoli Federated Identity Manager \(TFIM\)](../dev-portlet/outbhttp_auth_est_sso_tfim.md)

