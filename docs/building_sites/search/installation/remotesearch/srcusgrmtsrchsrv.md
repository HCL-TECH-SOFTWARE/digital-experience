# Remote search service

You can configure the search portlets for local operation, or you can configure them for remote search service. Depending on your configuration, remote search service might have performance benefits by offloading and balancing system load.

You can provide the remote search service as an EJB. Also, separate HCL Portal environments cannot use the same remote search server. Only multiple HCL Portal servers in the same cell can use the same remote search server.

**Note:** SOAP support for remote search services was deprecated with HCL Digital Experience Version 8.0.

When you want to index and search portal sites, search results are filtered according to the user security credentials. This filtering occurs independently of whether security is enabled on the remote search server or not. However, if security is not enabled, an unauthorized user can connect to the remote server and obtain unfiltered search results. If you want to prevent this issue, you must use EJB and enable security on the remote server. For information about enabling security on the remote search server, read *Preparing security for remote search service in a single sign on domain*.

-   **[Preparing for remote search service](../admin-system/srtprrmtsrchsrv.md)**  
Get an overview of how you prepare your portal system for remote search service. You can provide remote search service by either using EJB or SOAP.
-   **[Installing remote search service by using IBM Installation Manager](../admin-system/installrssim.md)**  
View the steps to install remote search service by using IBM Installation Manager.
-   **[Installing remote search service by using manual steps](../admin-system/installrssman.md)**  
You can install remote search service by using manual steps instead of the IBM Installation Manager.
-   **[Configuring user repositories on the remote search server](../admin-system/config_user_rep_rss.md)**  
The remote search server must have the same user repositories that are configured on the HCL Portal server. For example, if your HCL Portal server is configured to an IBM Directory Server LDAP in a federated repository configuration, then the remote search server must also be configured to the same IBM Directory Server LDAP in a federated repository configuration.
-   **[Creating a single-sign on domain between HCL Portal and the remote search service](../admin-system/sso_portal_rss.md)**  
View the steps to create a single-sign on \(SSO\) domain between HCL Digital Experience and the remote search service. Set up remote search service by using EJB, since SOAP support for remote search services was deprecated with HCL Portal version 8.0.
-   **[Setting the search user ID](../admin-system/srtsttusrid.md)**  
If you work with EJB on a secure server, you need to set the search user ID on the remote search server.
-   **[Removing search collections](../install/rmv_search_coll.md)**  
If you plan to use search in a cluster, you must configure a remote search server. If you created any search collections, you must re-create them on the remote search server. If your search collection has data, export the collection before you delete it. Then, import it to the remote server.
-   **[Configuring a remote search service](../admin-system/srtcfgrmtsrchsrv.md)**  
Configure a remote search service for Portal Search.
-   **[Configuring HTTP for the seedlist servlet](../admin-system/confighttpsservlet.md)**  
Learn how to configure HTTP for the seedlist servlet. The seedlist servlet requires HTTPs by default. Therefore, when you access the servlet through HTTP, WebSphere Application Server redirects you to HTTPs.

**Parent topic:**[Search](../wcm/wcm_dev_search.md)

**Previous topic:**[Redirecting search requests from a custom search form to the Search Center](../admin-system/redirect_search_custom_form.md)

**Next topic:**[Configuring search in a cluster](../config/config_search_clus.md)

**Related information**  


[Search Services](../panel_help/srch_srvs.md)

