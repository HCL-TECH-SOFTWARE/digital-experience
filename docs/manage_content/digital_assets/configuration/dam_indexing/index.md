# DAM Indexing

You can use Digital Asset Management (DAM) as a datasource of the Search service. Using DAM as a datasource enables you to search DAM assets and images more efficiently with the help of OpenSearch. To make DAM a proper datasource for Search, the following indexing processes are introduced:

- **Initial indexing**: Indexes all existing assets during the startup of the DAM server.
- **Reindexing**: Indexes all existing assets while revalidating stale indexes. You can trigger this process manually through DXClient or DAM API.
- **Live indexing**: Indexes changes made in DAM in near real-time. This allows DAM indexes to be up-to-date.


Refer to the following topics for instructions on how to configure and use DAM Indexing.

- **[Configuring DAM Indexing](./configure_dam_indexing.md)**  
Learn how to enable and configure DAM Indexing.

- **[Using DAM Indexing](./using_dam_indexing.md)**  
Know how to use DAM Indexing.
For limitations of the DAM Indexing feature, see [DAM Indexing limitations](../../limitations/index.md)

