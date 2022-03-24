# Authentication

Authentication requires users to identify themselves to gain access to a system or resources. The combination of a user ID and a password is the most common method of authentication. Users can identify themselves immediately upon entry to the system or the system can prompt users to identify themselves before accessing protected resources. After users successfully authenticate, the system identifies which resources-specific users have sufficient authorization to access.

**Note:** You can have simultaneous, multiple log ins with the same user ID and password. However, this method can result in a non-reliable behavior depending on the client or authentication method. For this reason, HCL Digital Experience does not support simultaneous, multiple log ins.

HCL Portal supports the following methods for login and authentication:

-   **Form-based authentication**

    HCL Portal uses the IBM® WebSphere® Application Server Custom Form-based Authentication mechanism to prompt for identities. Users type their user ID and password in the Login portlet.

-   **SSL client certificate authentication**

    You can configure authentication with certificates that are stored in the browser or on a smart card. The certificates are stored through a Secure Sockets Layer \(SSL\) client certificate authentication. The authentication is done for the users when they access the protected area of the portal.

-   **Third-party authentication**

    You can also configure third-party authentication. An external security manager, such as IBM® Security Access Manager, is an example. With this method the portal trusts that the authentication was done by the third-party product.

-   **Automatic login with the login URL**

    You can use the following URL which includes the user ID and password to log on: `http://server:port/wps/portal/cxml/04_SD9ePMtCP1I800I_KydQvyHFUBADPmuQy?userid=userid&password=password`, where you replace the variables for server,port, userid, and password with the values set for your environment. For example, this method is suitable for automatic logon by a utility program for administrative purposes.

    **Restriction:** This URL is intended only for a single-user login. It is not intended for multiple consecutive user log ins. It is also not intended to replace the Login portlet.


**Parent topic:**[Security and authentication considerations ](../plan/plan_secauth.md)

