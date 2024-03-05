# Troubleshooting OIDC configuration

This document contains troubleshooting information for OpenID Connect (OIDC) Trust Association Interceptor (TAI) problems in the WebSphere® Application Server traditional and Single Sign-on (SSO).

## Common reasons for failure

The following list enumerates common reasons the OIDC configuration is not working as expected:

- Typos in WebSphere Application Server (WAS) configuration
- Identity Provider (IdP) is unable to connect to the LDAP or the user registry
- Expired IdP certificates

## Enabling trace on WAS

Refer to the following steps to enable OIDC trace on the Websphere Application Server:

1. In the administrative console, go to **Troubleshooting > Logs and trace**.
2. Click the server that you want to trace.
3. Click **Diagnostic trace > Change log detail levels**.
4. In the dialo box, enter the following trace specification:
  ```console
    *=info:com.ibm.wps.engine.Servlet=all:com.ibm.wps.services.puma.*=all:com.ibm.wps.auth.*=all:com.ibm.wps.puma.*=all:com.ibm.wps.um.*=all:com.ibm.wps.sso.*=all:com.ibm.wps.services.authentication.*=all:com.ibm.ws.security.*=all:com.ibm.ws.wim.*=all:com.ibm.websphere.wim.*=all:com.ibm.wsspi.wim.*=all:com.ibm.wps.engine.phases.*=all:com.ibm.wps.vmm.adapter.*=all:com.ibm.ws.security.oidc.*=all:com.ibm.ws.security.openidconnect.*=all:com.ibm.ws.security.openid20.*=all:com.ibm.ws.security.web.*=all
  ```
5. Click **OK**.
6. Restart the server.

## References

- [TroubleShoot: OpenID Connect, WebSphere traditional](https://www.ibm.com/support/pages/node/540247). 
- [MustGather: Web Single Sign-on problems with WebSphere Application Server](https://www.ibm.com/support/pages/mustgather-web-single-sign-problems-websphere-application-server).



