# Configuring HTTP for the seedlist servlet

Learn how to configure HTTP for the seedlist servlet. The seedlist servlet requires HTTPs by default. Therefore, when you access the servlet through HTTP, WebSphere Application Server redirects you to HTTPs.

This is an optional step that can be completed while installing and configuring remote search service.

1.  On the portal server, open the following file with an editor:

    `[PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/search/wp.search.servlets/seedlist/servletEAR/installableApps/wp.search.seedlist.ear/wp.search.servlets.seedlist.war/WEB-INF/web.xml`

    **Cluster note:** In a clustered environment, complete this step on the primary node and all secondary nodes.

2.  Update the following code:

    **Cluster note:** In a clustered environment, complete this step on the primary node and all secondary nodes.

    ```
    <user-data-constraint>     
         <transport-guarantee>CONFIDENTIAL</transport-guarantee>
    </user-data-constraint>
    ```

    Replace it by the following code:

    ```
    <user-data-constraint>     
         <transport-guarantee>NONE</transport-guarantee>
    </user-data-constraint>
    
    ```

3.  Save the file.

    **Cluster note:** In a clustered environment, complete this step on the primary node and all secondary nodes.

4.  Run the following portal ConfigEngine script:

    **Cluster note:** In a clustered environment, complete this step on the primary node only.

    ```
    ./ConfigEngine.sh action-update-ear-wp.search.servlets/seedlist/servletEAR
    ```

5.  Restart all servers in your configuration for your updates to take effect.


Remove any local search collections that are defined in HCL Portal and create new search collections by using the remote search server. For more information about deleting and creating search collections, see the following topics:

-   If your system is operating in a portal farm, continue on to *Configuring search in a portal farm*.
-   If your system is operating in a clustered environment, continue on to *Configuring search in a cluster*.
