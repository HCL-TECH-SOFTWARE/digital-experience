# Configuring Portal to work with HCL Connections

For HCL Portal to work with HCL Connections you must configure the portal Ajax proxy, and set up single sign-on.

-   **[Set up Ajax proxy](../collab/i_coll_t_enable_lcajax.md)**  
The support for community pages uses the Ajax proxy to access the remote server. The Ajax proxy is updated for the base Connections URLS during the HCL Connections Portlets installation. If FileNet is used, you must still configure the Ajax proxy manually to update for FileNet. Configure the Ajax proxy so that direct requests that the CCM portlet makes to the FileNet server are allowed to pass through the proxy Server.
-   **[Set up single sign-on](../collab/i_coll_t_enable_lcsso.md)**  
Site visitors want to sign in one time. Set up single sign-on to ensure that visitors receive only one authentication challenge. The instructions for deploying the HCL Connections portlets include multiple options for configuring authentication for the portlets. If you did not complete the procedures in the HCL Connections documentation, you must configure single sign-on using the applications server. For best results, follow the procedures that are provided in the HCL Connections documentation.
-   **[Configuring common directory service](../config/cfg_cds_ptlts.md)**  
HCL Connections use the common Directory Services to enable directory lookup from HCL Connections in the HCL Portal environment.
-   **[Configuring authentication for the portlets](../config/cfg_auth_ptlts.md)**  
Configure authentication to enable access to the portlets.
-   **[Configuring the HCL Connections integration](../collab/collab_cfg_connect.md)**  
Run the configure-wp-connections-integration task to configure the integration between HCL Connections and HCL Digital Experience.


