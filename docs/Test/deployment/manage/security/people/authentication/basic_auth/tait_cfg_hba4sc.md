# Configuring the HTTP Basic Authentication Trust Association Interceptor

To configure the HTTP Basic Authentication Trust Association Interceptor according to your requirements, you set its properties.

Complete the following steps to set the properties of the HTTP Basic Authentication Trust Association Interceptor:

1.  Log on to the WebSphere® Integrated Solutions Console.

2.  Click **Security** \> **Global security**.

3.  Click **Web and SIP security** \> **Trust association**.

4.  Make sure that the **Enable trust association** check box is checked.

5.  Click **OK** and then click **Save** if you checked the **Enable trust association** check box.

6.  Click **Web and SIP security** \> **Trust association** again.

7.  Click **Interceptors** \> **com.ibm.portal.auth.tai.HTTPBasicAuthTAI**.

    !!!tip
        If `com.ibm.portal.auth.tai.HTTPBasicAuthTAI` is not available, run the following task to enable the interceptor: enable-http-basic-auth-tai-sitemgmt. 

8.  Click **Custom properties**.

9.  Click the property you that want to change.

10. Change the value for the property according to your requirements.

11. Click **OK**.

12. Select other properties and change their values as required.

13. Click **OK**.

14. Save your changes.

15. Restart the WebSphere Application Server.



