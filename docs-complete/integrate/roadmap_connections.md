# Roadmap: Integrating with HCL Connections

This roadmap shows how to integrate your HCL Digital Experience site with HCL Connections.

Integrating your portal site with HCL Connections is a multiple step process. Some steps are required and others are optional. Optional steps depend on the level of integration that you need. This roadmap is intended to provide an overview of the process. Links to detailed instructions are provided from the roadmap.

**Related information**  


[Roadmap: How to work with social rendering ](../social/soc_rendr_roadmap.md)

# Installing HCL Connections and HCL Digital Experience

Before you begin, the following programs must be installed and configured.

Install HCL Connections

-   Documentation resource: [HCL Connections](https://help.hcltechsw.com/connections/v6/index.html)

Install HCL Digital Experience.

-   Documentation resource: [Installing HCL Digital Experience](../install/installing_parent2.md)

Configure portal to use a federated LDAP server.

-   Documentation resource depends on your HCL Digital Experience installation scenario, stand-alone server, or cluster.

**Note:** Do not remove the file system user repository after you federate your LDAP server.

# Configuring your portal to work with HCL Connections

1.  Import the SSL certificate from HCL Connections to your portal server.

2.  Configure the portal Ajax proxy.

    The Ajax proxy is updated for the base Connections URLS during the HCL Connections Portlets installation. If FileNet is used, you must still configure the Ajax proxy manually to update for FileNet. Configure the Ajax proxy so that direct requests that the CCM portlet makes to the FileNet server are allowed to pass through the proxy Server.

3.  Configure single sign-on.

    -   Documentation resource: [Set up single sign-on](../collab/i_coll_t_enable_lcsso.md)
4.  Install and Deploy the Portlets

    **Note:** Before you install the portlets, steps 1-3 must be completed.

    1.  Download the HCL Connections portlets for HCL Digital Experience.

        -   [HCL Connections Portlets for HCL Portal](https://help.hcltechsw.com/connections/v6/index.html)
    2.  Install the portlets.

    3.  Add modules that are needed by the HCL Connections portlets to the portal theme default profile.

5.  Configure a common directory service for the portlets.

6.  Integrate community membership to allow access control administration that is based on community membership.

7.  Enhance the deployment of HCL Connections portlets for HCL Digital Experience with optional configuration steps.

8.  Configure search with the Remote Content Server Search Service Type \(RCSS\), for a portal cluster setup that is integrated with HCL Connections.


