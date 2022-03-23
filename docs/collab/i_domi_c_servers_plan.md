# Planning for collaborative servers and portlets 

Setting up a site with HCL Domino integration requires decisions about user directories, security, authentication, and performance. View some use cases that may help you make decisions leading to a successful Domino integration.

## Performance considerations

When integrating Domino® into your portal environment, consider performance when deciding how many and which servers you need.

For example, to use a Domino LDAP server as the user directory \(repository\) for the portal, install portal on a separate machine from the Domino LDAP server configured to support collaborative features in the portlets. The Domino LDAP server for the portal user directory should reside on a machine that is dedicated to serving the portal environment and all its users.

IBM® i: It is recommended that a specific Domino server be created to run the collaborative components, and that it should reside on the same IBM i server as HCL Portal.

-   **[Domino server installation and server setup reference ](../collab/i_domi_r_sv_dom_install.md)**  
View a roadmap to instructions for installation and first set up of an IBM Domino server, including installation of the Domino Administrator client software that you can use to administer the server.
-   **[Planning names for servers and users in a Domino site ](../collab/i_domi_c_identities.md)**  
While installing and integrating Domino and collaboration products, you must decide on a naming scheme for your servers, plan for and create several important administrative users, and create passwords for those users. Learn about server naming and a table of identities you can use while installing and configuring servers, with recommendations for which names need to match for better performance.
-   **[Determining the needs of your portal site ](../collab/plan_portal_site.md)**  
The following general use cases are intended only to provide some recommendations for your decisions about directories when integrating collaboration product.
-   **[Platform and user directory considerations ](../collab/plan_platformldap.md)**  
There are unique considerations for operating systems that you should be aware of before you proceed with integrating collaboration software with HCL Portal. Also, in the context of collaboration integration, there are two types of user directories, Domino directory and then all other supported user directories.
-   **[Security and user authentication considerations ](../collab/plan_authsec.md)**  
Correctly configuring authentication and security includes configuring single sign-on and setting up SSL.

**Parent topic:**[Integrate with collaboration software](../collab/cfg_collab_intro.md)

**Related information**  


[Member Manager and People Finder ](../collab/i_coll_r_porcc_pfnd_wmm.md)

