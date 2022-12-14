# Planning for external security managers

By default, IBM WebSphere Application Server controls authentication to HCL Digital Experience and HCL Digital Experience controls authorization (access control) to resources.

!!!note
    When setting up security to use an external security manager in a cluster environment and across mixed nodes, there are additional considerations. For example, you should configure your external security manager after completing all other setup tasks, including ensuring that the cluster is functional.

-   **[WebSphere Trust Association Interceptors](../planning_esm/sec_ws_tai.md)**  
Security Access Manager and Computer Associates eTrust SiteMinder provide Trust Association Interceptors (TAIs) that are used only as an authentication service.
-   **[External authorization](../planning_esm/sec_ext_auth.md)**  
HCL Digital Experience always determines the permissions that are associated with each role, whether the role is externalized or not.
-   **[Planning considerations for WebSEAL junctions](../planning_esm/sec_permission_webseal.md)**  
A junction acts as a single point of access into a web application network.
-   **[Security Access Manager Permissions](../planning_esm/sec_tam_permission.md)**  
In many installations, WebSEAL is behind Portal between the portlets and the back-end servers they access.



