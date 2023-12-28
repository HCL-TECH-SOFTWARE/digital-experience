# Portal environments

## Standalone Portal environment

If you only have a single node of Portal, then you are almost done. By installing DX, you have already set up and configured the local DX Search:

- The default search service is configured and active.
- There is a standard set of search collections available and running.
- The default search collection includes content sources for the DX site and WCM libraries.
- JCRCollection1 is already created. This is required to support search in the WCM Authoring environment.
- The schedules for each of the crawlers are also set along with the search user.  

!!!note
    For load-balancing and performance reasons, you may still want to set up a remote search service on a different server for the following reasons: 

      - For the processing of documents (for example, PDF and DOC files) which require document conversions
      - For multiple search collections with a larger number of crawlers running on frequent schedules

There is no strict rule dictating when a standalone server needs a remote search service to enhance performance. If the 'search' service takes up significant system resources and lessens HCL DX's performance, it is recommended to set up a remote search service to reduce the load on the local DX server.

## Clustered Portal environment

For clustered Portal environments, remote search service is required. 

Using the default search service for this environment will result to duplicate search collections, data integrity issues with the search collections, a set of identical crawlers hitting the backend servers either too often or at the same time, and, critically, it means DX search administrators must administer each service service separately. Using the remote search service is the recommended path to administering and coordinating DX Search for a clustered environment.

For information on how to install the remote search server, refer to [Remote search service](..remotesearch/index.md). It is recommended to install remote search with the [installation manager](../remotesearch/installrssim.md). You can also install the service [manually](../remotesearch/install_manual/index.md).

There is also a [video guide](https://www.youtube.com/watch?v=WldILSgwvBI) for installing and configuring remote search. 

Set up the remote search server to use the same LDAP repositories as your Portal cluster. You must also set up SSO between your Portal cluster and remote search. 

After setting up the remote search service, the local (default) search service and collections are no longer required. Delete both as described in the references mentioned either using the script or manually. In order to prevent the default search service and its collections to be recreated after a portal server restart, set the following property `search.service.suppress_automatic_creation=true` in the application server **Resource Environment Providers > WP ConfigService**.
