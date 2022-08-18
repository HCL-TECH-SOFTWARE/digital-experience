# Configuring user repositories on the remote search server

The remote search server must have the same user repositories that are configured on the HCL Portal server. For example, if your HCL Portal server is configured to an IBM Directory Server LDAP in a federated repository configuration, then the remote search server must also be configured to the same IBM Directory Server LDAP in a federated repository configuration.

After the user repositories are configured the same between the HCL Portal server and the remote search server, it is possible to configure a dedicated search user from the repository as described in *Setting the search user ID*.

Follow the WebSphere® Application Server product documentation *Configuring Lightweight Directory Access Protocol in a federated repository configuration* to configure LDAP settings on the remote search server.

After configuring user repositories on the remote search server, you must enable single-sign on \(SSO\) between HCL Portal and the remote search server. For details about how to do this step, refer to *Creating a single-sign on domain between HCL Portal and the remote search service*.

**Parent topic:**[Remote search service](../admin-system/srcusgrmtsrchsrv.md)

