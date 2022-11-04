# Set up single sign-on

Site visitors want to sign in one time. Set up single sign-on to ensure that visitors receive only one authentication challenge. The instructions for deploying the HCL Connections portlets include multiple options for configuring authentication for the portlets. If you did not complete the procedures in the HCL Connections documentation, you must configure single sign-on using the applications server. For best results, follow the procedures that are provided in the HCL Connections documentation.

You can configure single sign-on using IBM® WebSphere® Application Server or by using IBM Security Access Manager. This procedure uses WebSphere Application Server. Instructions for using Security Access Manager are included in the HCL Connections documentation.

1.  Retrieve the LTPA token from the WebSphere Application Server where your portal is installed.

2.  Import the LTPA token into the HCL Connections server.

3.  Enable single sign-on on the HCL Connections server.



???+ info "Related information"
    - [WebSphere Application Server: Single sign-on for authentication](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/csec_ssovo.html?cp=SSAW57_8.5.5)

