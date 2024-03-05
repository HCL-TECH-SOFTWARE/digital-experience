# Troubleshooting OIDC configuration

This document contains troubleshooting information for OpenID Connect (OIDC) Trust Association Interceptor (TAI) problems in the WebSphere® Application Server traditional and Single Sign-on (SSO).

## Common reasons for failure

Here are some common reason for OIDC configuration not working as expected

- Typos in WebSphere Application Server (WAS) configuration
- Identity Provider (IdP) is unable to connect to the LDAP or the user registry
- Expired IdP certificates

## Enabling trace

- In the administrative console, click Troubleshooting > Logs and trace
- Click the server that you want to trace.
- Click Diagnostic trace > Change log detail levels
- In the box, enter the trace specification specified below:
  ```console
    *=info:com.ibm.wps.engine.Servlet=all:com.ibm.wps.services.puma.*=all:com.ibm.wps.auth.*=all:com.ibm.wps.puma.*=all:com.ibm.wps.um.*=all:com.ibm.wps.sso.*=all:com.ibm.wps.services.authentication.*=all:com.ibm.ws.security.*=all:com.ibm.ws.wim.*=all:com.ibm.websphere.wim.*=all:com.ibm.wsspi.wim.*=all:com.ibm.wps.engine.phases.*=all:com.ibm.wps.vmm.adapter.*=all:com.ibm.ws.security.oidc.*=all:com.ibm.ws.security.openidconnect.*=all:com.ibm.ws.security.openid20.*=all:com.ibm.ws.security.web.*=all
  ```
- Click OK
- Restart the server

## References

- [TroubleShoot: OpenID Connect, WebSphere traditional](https://www.ibm.com/support/pages/node/540247). 
- [MustGather: Web Single Sign-on problems with WebSphere Application Server](https://www.ibm.com/support/pages/mustgather-web-single-sign-problems-websphere-application-server).



