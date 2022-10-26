# Customizing the WSRP resource proxy for LTPA token forwarding

The WSRP resource proxy can forward single sign-on cookies (LTPA, LTPA2) from the client requests to resources in the same single sign-on domain.

You can influence the LTPA token forwarding behavior. To do so, proceed as follows:

1.  Set the following property in the HTTP Client Service: wsrp.resourceproxy.sso.domain = Single sign-on domain.

    Use this property to specify the single sign-on domain. If the WSRP resource proxy loads a resource from a host inside this domain and the client request contains LTPA or LTPA2 cookies, these cookies are forwarded to the remote resource.

2.  Restart the portal or the cluster for the new setting to become active.



