# Remote search service

You can configure the search portlets for local operation, or you can configure them for remote search service. Depending on your configuration, remote search service might have performance benefits by offloading and balancing system load.

You can provide the remote search service as an EJB. Also, separate HCL Portal environments cannot use the same remote search server. Only multiple HCL Portal servers in the same cell or Kubernetes cluster can use the same remote search server.

!!! note
    SOAP support for remote search services was deprecated with HCL Digital Experience Version 8.0.

When you want to index and search portal sites, search results are filtered according to the user security credentials. This filtering occurs independently of whether security is enabled on the remote search server or not. However, if security is not enabled, an unauthorized user can connect to the remote server and obtain unfiltered search results. If you want to prevent this issue, you must use EJB and enable security on the remote server. For information about enabling security on the remote search server, read *Preparing security for remote search service in a single sign on domain*.


-   **[Preparing for remote search service](srtprrmtsrchsrv.md)**  
Get an overview of how you prepare your portal system for remote search service. You can provide remote search service by either using EJB or SOAP.
-   **[Installing remote search service by using IBM Installation Manager](installrssim.md)**  
View the steps to install remote search service by using IBM Installation Manager.
-   **[Installing remote search service by using manual steps](../remotesearch/install_manual/index.md)**  
You can install remote search service by using manual steps instead of the IBM Installation Manager.
-   **[Configuring user repositories on the remote search server](config_user_rep_rss.md)**  
The remote search server must have the same user repositories that are configured on the HCL Portal server. For example, if your HCL Portal server is configured to an IBM Directory Server LDAP in a federated repository configuration, then the remote search server must also be configured to the same IBM Directory Server LDAP in a federated repository configuration.
-   **[Creating a single-sign on domain between HCL Portal and the remote search service](sso_portal_rss.md)**  
View the steps to create a single-sign on \(SSO\) domain between HCL Digital Experience and the remote search service. Set up remote search service by using EJB, since SOAP support for remote search services was deprecated with HCL Portal version 8.0.
-   **[Setting the search user ID](srtsttusrid.md)**  
If you work with EJB on a secure server, you need to set the search user ID on the remote search server.
-   **[Removing search collections](rmv_search_coll.md)**  
If you plan to use search in a cluster, you must configure a remote search server. If you created any search collections, you must re-create them on the remote search server. If your search collection has data, export the collection before you delete it. Then, import it to the remote server.
-   **[Configuring a remote search service](../remotesearch/cfg_remotesearch_service/index.md)**  
Configure a remote search service for Portal Search.
-   **[Configuring HTTP for the seedlist servlet](confighttpsservlet.md)**  
Learn how to configure HTTP for the seedlist servlet. The seedlist servlet requires HTTPs by default. Therefore, when you access the servlet through HTTP, WebSphere Application Server redirects you to HTTPs. 

???+ info "Related information"
    - [Search Services](../manage_search/srch_srvs.md)

