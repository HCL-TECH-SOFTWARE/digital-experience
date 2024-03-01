# Troubleshooting OIDC Configuration

For troubleshooting OIDC on WebSphere you can use the debug parameters for OpenID Connect (OIDC), OpenID 2.0, and JWT authentication

## Request failing-
- Typically user can not login
- Verify typos in WAS config by collecting websphere TAI config properties
- Verify IDP connections to LDAP or repository server 
- Check for expired IDP certificate (WAS Global Security)

Here are some basic steps for enabling trace on the WebSphere Application Server:

  - OIDC trace string
    *=info:com.ibm.ws.security.oidc.*=all:com.ibm.ws.security.openidconnect.*=all:com.ibm.ws.security.openid20.*=all:com.ibm.ws.security.web.*=all

  - For DX you can use additional trace strings as below
    *=info:com.ibm.wps.engine.Servlet=all:com.ibm.wps.services.puma.*=all:com.ibm.wps.auth.*=all:com.ibm.wps.puma.*=all:com.ibm.wps.um.*=all:com.ibm.wps.sso.*=all:com.ibm.wps.services.authentication.*=all:com.ibm.ws.security.*=all:com.ibm.ws.wim.*=all:com.ibm.websphere.wim.*=all:com.ibm.wsspi.wim.*=all:com.ibm.wps.engine.phases.*=all:com.ibm.wps.vmm.adapter.*=all

  - Enable OIDC trace:
      - In the administrative console, click on Troubleshooting > Logs and trace
      - Click the server that you want to trace.
      - Click on Diagnostic trace > Change log detail levels
      - In the box, enter the trace specification that you want to use
      - Click OK
      
  - Restart the server.


## Additional trace specifications and data collections

- For additional traces and identified errors, navigate to [TroubleShoot: OpenID Connect, WebSphere traditional](https://www.ibm.com/support/pages/node/540247) 
- Navigate to [MustGather: Web Single Sign-on problems with WebSphere Application Server](https://www.ibm.com/support/pages/mustgather-web-single-sign-problems-websphere-application-server)




