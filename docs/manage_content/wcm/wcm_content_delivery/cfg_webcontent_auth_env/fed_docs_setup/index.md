# Setting up support for federated documents

Before you can access metadata from federated documents, you need to configure access to the remote servers that contain the documents and specify information about the feeds or service documents that are used to retrieve the documents. You can also tune the cache settings that are used with the federated documents feature.

**Authentication requirement:** Before you can use the federated documents feature, you must complete one of the following steps:

-   Enable single sign-on \(SSO\) in IBM® WebSphere® Application Server between the portal server and the content management system.
-   Use a content management system that supports HTTP basic authentication, and enable a credential vault slot that stores the credentials to authenticate with the remote server.

-   **[Configuring access to remote systems for federated documents](../wcm/wcm_dev_feddocs_cfgcoll.md)**  
To retrieve metadata information for documents on remote content management systems, configure the federated documents feature with information about the remote system and the settings that are used to handle communication with the system.
-   **[Configuring the federated documents feature](../wcm/wcm_dev_feddocs_cfgfeddocs.md)**  
Configure the federated documents feature to specify information about the source servers for the documents that are available to users.
-   **[Cache tuning for federated documents](../wcm/wcm_dev_feddocs_cache.md)**  
The federated documents feature uses the document list cache, the document data cache, and the feed type cache to manage information about the list of documents, the document data, and the types of feeds a server provides.


