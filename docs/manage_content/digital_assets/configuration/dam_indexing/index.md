# DAM Indexing

DAM can be a datasource of the Search service which will enable consumers of the service to search DAM assets and images more efficiently with the help of OpenSearch. To make DAM a proper datasource for Search, indexing processes was introduce to DAM:

- Initial Indexing: The process of indexing all existing assets during the startup of the DAM server.
- Reindexing: Indexing all existing assets while revalidating stale indices. This can be triggered manually thru DXClient or via DAM API
- Live Indexing: Indexes changes made in DAM in near real-time. This allows DAM indices to be up to date.


Refer to the following topics for instructions on how to configure and use DAM Indexing.

- **[Configuring DAM Indexing](./configure_dam_indexing.md)**  
Learn how to enable and configure DAM Indexing.

- **[Using DAM Indexing](./using_dam_indexing.md)**  
Know how to use DAM Indexing.

- **[DAM Indexing limitations](../../limitations/index.md)**  
This topic lists the current limitations of DAM Indexing.

