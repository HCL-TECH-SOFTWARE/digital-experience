# Configuring Session Security Integration

IBM WebSphere Application Server protects your session from access by other users.

To use Session Security Integration, you must enable it on both HCL Digital Experience and WebSphere® Application Server functionality as well. WebSphere Application Server will preserve an available security context even if an unprotected URI is accessed.

1.  In the WebSphere Integrated Solutions Console, click **Servers****Server Types****WebSphere Application Servers**.

2.  Select **HCL Portal**.

3.  Expand the **Web Container Settings**. Then click **Web Container**.

4.  Click **Session Management**.

5.  Select **Security Integration**.

6.  Save your changes.

7.  Enable HCL Portal to create Security context on the unprotected URI
8.  Click **Security** \> **Global Security**.

9.  Expand **Web and SIP security**. Then click **General Settings**.

10. Select **Use available authentication data when an unprotected URI is accessed**.

11. Save your changes.


**Parent topic:**[Securing](../security/securing_wp.md)

