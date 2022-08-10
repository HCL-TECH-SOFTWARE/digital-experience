# Planning names for servers and users in a Domino site

While installing and integrating Domino and collaboration products, you must decide on a naming scheme for your servers, plan for and create several important administrative users, and create passwords for those users. Learn about server naming and a table of identities you can use while installing and configuring servers, with recommendations for which names need to match for better performance.

**About server naming:**

When your portal site contains multiple IBM® Domino® servers, their names should be reasonably short and should contain no spaces. The server names will be seen by your users, so make them descriptive when possible. If the Domino server name is not the same as the physical server name, you must make sure that the name is resolvable through DNS. For example, you could name a hub server in Chicago `acmehub`, which, combined with the server's domain, could yield a fully qualified host name of `acmehub.chicago.acme.com`. You would configure an entry in DNS for `acmehub.chicago.acme.com` to point to the physical IP address of the server. It is not a requirement to make the Domino server name the same as the physical server name, but if it is not, Server Connection documents are required in all other Domino servers and the Lotus Notes or Domino Administrator client software running on them.

## Table of user identities

Some names in the following table are specified during the Domino Server Setup procedure you perform after installing the Domino LDAP server for the first time. If you later perform an upgrade installation, configuration choices from the first-time Server Setup will be used; you will not see screens presenting these choices again.

|Identity|Description|Recommendation|
|--------|-----------|--------------|
|Organization name for a Domino LDAP server|This name is specified during the Domino Server Setup procedure.|See *About server naming*.

Example: `dom_hub/chicago/renovationscorp`

|
|Administrator of a Domino LDAP server|This administrative user identity is created during the Domino Server Setup procedure.|**Tip:** For convenience, you could make this the same as the user name of an administrator in HCL Portal \(PortalAdminId in the wkplc.properties file\)

Example: `wpsadmin`|
|Bind user OR IBM WebSphere® Application Server administrator OR both|This identity is used by HCL Digital Experience to access the LDAP directory. Both LDAP directory and security configuration for HCL Portal involve modifying values in the `wkplc.properties` file.

This user identity is created during the Server Setup procedure.

|Should be the same as the user ID of an administrator for the WebSphere Application Server \(WasUserID in the wkplc.properties file\)

Example: wpsbindFor information on how to create the Bind user or Admin user, use Search to find the topic on preparing a Domino Directory server on <platform\> \(for example, Preparing a Domino Directory server on Windows™\).

|
|HCL Portal administrators group|You should manually edit the group `wpsadmins` to `wpsadmins/yourorgname`. This edit creates a fully distinguished LDAP name of `cn=wpsadmins/o=yourorgname`. This change must made when using a Domino LDAP directory, because Domino does not store groups in the hierarchical format that HCL Portal expects.|Should be the same as the group name of an administrator for all administrators for the HCL Portal server \(PortalAdminGroupId in the wkplc.properties file\)

Example: `wpsadmins/renovationscorp`**Note:** In the ACL of the Domino Directory this group should have Author or Editor access, and the Role Types. These settings allow the administrator group to write and edit Person documents in the Domino Directory; these are necessary tasks in a portal that uses subscriber management.

|
|Sametime server administrator|This user name has administrative access to the Sametime server and can modify Web pages on the server.|Example: stadmin|
|Sametime Web Conferencing administrator|This user name is created in the Domino Directory \(names.nsf\) on the Sametime Web Conferencing server and is used only for integration of Sametime.**Note:** In the ACL of the `STConfig.nsf` database, this user name is a Person/Manager, and has, at minimum, role\(s\) equivalent to those specified for the servlet entry of the meeting API in the `servlets.properties` file on the Domino server.

|Example: `st_webconf_admin`Recommended: At least the \[SametimeAdmin\] role

|

**Parent topic:**[Planning for collaborative servers and portlets](../collab/i_domi_c_servers_plan.md)

**Related information**  


[Domino Administrator Help, Server document - Security tab](https://help.hcltechsw.com/domino/10.0.1/othr_serverdocumentsecuritytab_r.html)

[Domino Administrator Help, Server registration](https://help.hcltechsw.com/domino/10.0.1/admin/inst_dominoserverregistration_c.html)

[Preparing a Domino Directory server](../install/prep_dom.md)

