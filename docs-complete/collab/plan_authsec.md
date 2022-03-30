# Security and user authentication considerations 

Correctly configuring authentication and security includes configuring single sign-on and setting up SSL.

## About security through SSL and other features

Whether your site includes single, dual, or multiple types of user directories, SSL is recommended, and you enable it the same way.

If your site will use IBM® Security Access Manageror Computer Associates eTrust SiteMinder for additional security, set up such protection on servers in the following order: HCL Portal, Sametime, and then Domino® servers. In addition, if you use eTrust SiteMinder, portlets such as Lotus Notes View will be unable to take advantage of features supported by DIIOP.

If your site will use Security Access Manager or another reverse proxy, or a load balancer, when installing Sametime, select the option "Allow HTTP Tunneling on a Sametime server with a single IP address." With this option selected, all Sametime client data, except A/V data, is tunneled to the Sametime server via HTTP on port 80. You also may need to enable this option if Sametime clients must connect to the server through a network that blocks TCP communications on ports 8081 and 1533.

## About user authentication through Single Sign-On \(SSO\)

Single sign-on between the Domino environment and the portal environment allows users to log in to the portal, and then work in any of the collaborative portlets without having to authenticate a second time. Although enabling single sign-on is not required to use all the collaborative portlets, it is strongly recommended as a way of improving the user experience. Lotus Notes View and iNotes require single sign-on support.

To support single sign-on, a Web SSO configuration document must exist for each Domino domain that includes Domino servers. The Web SSO configuration document is a domain-wide configuration document stored in the Domino Directory. This document, which you can replicate to all servers participating in the single sign-on domain, is encrypted for participating servers and administrators, and contains a shared secret key used by servers for authenticating user credentials.

In addition to the Web SSO configuration document for Domino servers, you must create, save, and export an LTPA key from WebSphere® Application Server, and then import that WebSphere LTPA key into the Domino domain or domains. For each Domino domain that is set up for use with the portal, the same WebSphere LTPA key must be imported to support single sign-on. Verify that automatic LTPA key generation is disabled on each node of the single sign-on domain.

A best practice is to install and configure all servers prior to enabling single sign-on. For example, install and configure Sametime before you enable single sign-on.

If you complete the required single sign-on configuration between the Domino environment and portal environment, there is no procedure to disallow automatic login for a specific user. For example, if user A logs in to the portal, user A will always be logged in to the Domino environment.

**Tip:** **Managing Single Sign-On and awareness when there are multiple types of directories.** If there is an LDAP directory server other than Domino in place, for example IBM Directory Server, you could employ several strategies to integrate it with a native Domino Directory and therefore achieve single sign-on \(SSO\) and awareness across any collaborative portlets your organization uses. The Domino Directory Assistance functionality may provide a solution for name mapping across LDAP directories. Even when your organization, as a matter of policy, manages modifications primarily through an existing non-Domino LDAP directory, schema in the non-Domino directory can be customized and then work in concert with Directory Assistance, which can manage the name mapping for collaborative applications. For a number of creative multi-directory solutions, including information on supporting single-sign on for awareness through the Sametime servers if your organization uses it, see [HCL Software Support](https://support.hcltechsw.com/csm) for more information about *Single Sign-on in a Multi-Directory World.*

**Parent topic:**[Planning for collaborative servers and portlets ](../collab/i_domi_c_servers_plan.md)

**Related information**  


[Single Sign-on in a Multi-Directory World](https://support.hcltechsw.com/csm)

