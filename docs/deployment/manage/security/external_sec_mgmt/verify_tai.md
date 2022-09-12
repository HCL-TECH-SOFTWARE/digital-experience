# Verifying Trust Association Interceptors for authentication

After configuring HCL Digital Experience to use an external security manager for authentication, you should verify that the Trust Association Interceptors \(TAI\) are working properly before continuing with any additional configuration tasks.

Complete the following steps to verify that the Trust Association Interceptors are working properly for authentication:

1.  Enter the appropriate URL in the Web browser address bar:

    -   IBM® Security Access Manager: `https://WebSEAL\_hostname:WebSEAL\_port/junction/wps/myportal`
    -   Computer Associates eTrust SiteMinder: `http://SM\_agent\_hostname:SM\_agent\_port/wps/myportal`
2.  Authenticate through the external security managers. After you log in, you should be directed to the secure and personalized `myportal` page. If you are directed to the login page or the public page, there is a problem with the TAI configuration. If you are using the Security Access Manager TAI \(**com.ibm.sec.authn.tai.TAMETai** or **com.ibm.ws.security.web.TAMTrustAssociationInterceptorPlus**\) that HCL Portal set up, ensure that the Security Access Manager authorization server is up and running.



