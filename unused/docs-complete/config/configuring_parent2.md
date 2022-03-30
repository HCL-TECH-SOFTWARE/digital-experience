# Configuring 

Run the following tasks after you install and deploy HCL Digital Experience. They address tasks that are typically run one time and have a global effect. Some configuration changes are made more frequently or do not have a global effect. These tasks are addressed in the Administering section.

Review the [HCL Digital Experience Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411) to tune your stand-alone or clustered environment. Even if you have a clustered environment, review the Base Portal Tuning scenarios and the Tuning a cluster environment chapter. In addition, the tuning guide provides information about caches for HCL Digital Experience.

-   **[Configuration Wizard ](../config/cw_overview.md)**  
Use the Configuration Wizard to set up stand-alone servers and new deployments, create clusters, migrate and update to new versions, and add new capabilities to existing deployments.
-   **[Setting up a stand-alone server ](../config/config_standalone.md)**  
Use the Configuration Wizard to set up a stand-alone server. A stand-alone server is useful for different environments, such as a content authoring environment, test environment, and more.
-   **[Setting up a cluster ](../config/config_cluster.md)**  
Use the Configuration Wizard to set up either a dynamic or static horizontal cluster.
-   **[Tune your environment ](../install/tune_servers.md)**  
HCL Digital Experience is not tuned for a production environment by default. Complete the steps in the Performance Tuning Guide to optimize performance.
-   **[Web servers ](../config/config_webservers.md)**  
HCL Digital Experience uses the internal HTTP transport within IBM WebSphere Application Server to handle requests. However, because WebSphere Application Server also supports the use of an external web server, you can access HCL Portal from your web server. You can use a local web server on the same server as HCL Portal or you can use a remote web server on a different server. A remote web server is typical for a production environment or other high-traffic configuration and is also typically placed in DMZ outside a firewall to protect portal ports.
-   **[HCL Portal](../config/config_portal.md)**  
First, finish your HCL Digital Experience deployment with the Configuration Wizard. Then, you can configure your environment further. For example, you can tune your servers to improve performance. You can change the default context root.
-   **[HCL Web Content Manager ](../wcm/wcm_install_cfg.md)**  
 Set up a content server by installing HCL Web Content Manager in various deployments to provide robust and flexible environments for web content development and delivery. After you install the content server, more configuration steps must be completed according to the role that the server plays in your web content environment.
-   **[Syndication](../wcm/wcm_administering.md)**  
Use syndication to replicate web content library data from one server to another server. Syndication is based on a syndicator and subscriber relationship. The syndicator has the current data. The subscriber received the current data from the syndicator.
-   **[Database Management Systems ](../config/config_dbms.md)**  
Configure the connection between HCL Digital Experience and your database management system. The Database Transfer configuration option in the Configuration Wizard assigns users and permissions, creates databases, obtains support for database collation, and transfers your database.
-   **[User registry ](../config/config_user_registry.md)**  
User information is stored in your user registry. You can enable LDAP referrals, configure HCL Digital Experience to use dynamic groups, update your user registry, or delete your user registry configurations.
-   **[Search ](../wcm/wcm_dev_search.md)**  
You use Portal Search to search for text that is displayed in websites that are created by HCL Web Content Manager.
-   **[Document Conversion Services ](../admin-system/dcs_info.md)**  
Document Conversion Services are used when you work with the Common Mail Portlet, HCL Web Content Manager authoring and previewing, and search.
-   **[Setting up a remote spell checker ](../config/doc_pap_spellchk.md)**  
Using a local spell checker is not supported. You cannot run spell checker on 64-bit systems. Instead, you must install and configure spell checker on a remote application server and access that server from the local HCL Portal server.
-   **[HCL Connections ](../config/ibmconnections.md)**  
HCL Connections portlets give the HCL Digital Experience users access to more collaboration and social networking features such as activities, blogs, and bookmarks.
-   **[Reference: Configuration properties ](../properties/properties.md)**  
For your convenience, the properties files that are used to configure HCL Digital Experience are included in the product documentation. Information that is specified in the properties files is used to configure databases, LDAP integration, security, including external security managers, and more.

**Parent topic:**[HCL Digital Experience 9.5 Product Documentation](../welcome/wp95_welcome.md)

**Related information**  


[Managing the user population for virtual portals](../admin-system/advppln_mgupop.md)

[Portal configuration tasks for administering virtual portals ](../admin-system/advp_cfgtsk.md)

