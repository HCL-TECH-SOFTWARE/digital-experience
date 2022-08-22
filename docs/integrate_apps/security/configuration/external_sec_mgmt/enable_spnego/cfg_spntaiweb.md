# Enabling and configuring single sign-on for HTTP requests using SPNEGO

You can create single sign-on requests for your HTTP server using the Simple and Protected GSS-API Negotiation Mechanism \(SPNEGO\) available in IBM WebSphere Application Server. Creating single sign-on requests using SPNEGO allows HTTP users to log in and authenticate only once and receive automatic authentication from WebSphere Application Server.

To enable SPNEGO Web authentication, complete the steps in the following topic, available in the WebSphere® Application Server documentation, *Enabling and configuring SPNEGO Web authentication using the administrative console*.

For more information about SPNEGO Web authentication, go to the related topics in the WebSphere Application Server documentation.

-   **[Re-enabling the SPNEGO TAI](../config/cfg_spnego.md)**  
The HCL Digital Experience installation removes the Simple and Protected GSS-API Negotiation Mechanism trust association interceptor \(SPNEGO TAI\) from the list of available trust association interceptors. For this reason, you need to re-enable the SPNEGO TAI. You do not need to complete this task if you plan to use SPNEGO Web authentication.


**Related information**  


[WebSphere Application Server Information Center: Configure and enable SPNEGO web authentication using the administrative console on your WebSphere Application Server machine](https://www.ibm.com/docs/en/was)

[WebSphere Application Server Information Center: Single sign-on for HTTP requests using SPNEGO web authentication](https://www.ibm.com/docs/en/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/csec_SPNEGO_explain.html)

