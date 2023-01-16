# Re-enabling the SPNEGO TAI

The HCL Digital Experience installation removes the Simple and Protected GSS-API Negotiation Mechanism trust association interceptor (SPNEGO TAI) from the list of available trust association interceptors. For this reason, you need to re-enable the SPNEGO TAI. You do not need to complete this task if you plan to use SPNEGO Web authentication.

1.  Log on to the WebSphere® Integrated Solutions Console.

2.  Click **Security** \> **Global security**.

3.  Click **Trust association** under **Web and SIP security**.

4.  Ensure that the **Enable trust association** check box is checked and then click **Interceptors**.

5.  Click **New** and then type com.ibm.ws.security.spnego.TrustAssociationInterceptorImpl in the **Interceptor class name** text field.

6.  Click **OK** and then click the **Save** link to save changes to the master configuration.



