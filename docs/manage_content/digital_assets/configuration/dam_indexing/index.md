# DAM Indexing

You can use Digital Asset Management (DAM) as a datasource of the Search service. Using DAM as a datasource enables you to search DAM assets and images more efficiently with the help of [OpenSearch](../../../../deployment//install/container/helm_deployment/preparation/optional_tasks/optional_install_new_search.md). To make DAM a proper datasource for Search, the following indexing processes are introduced:

- **Initial indexing**: Indexes all existing assets during the startup of the DAM server.
- **Reindexing**: Indexes all existing assets while revalidating stale indexes. You can trigger this process manually through [DXClient](../../../../extend_dx/development_tools/dxclient/index.md) or [DAM API](https://opensource.hcltechsw.com/experience-api-documentation/dam-api/).
- **Live indexing**: Indexes changes made in DAM in near real-time. This allows DAM indexes to be up-to-date.

## Limitation

The contents of the assets are not considered during indexing. For example, text content of a document is not part of the indexing process.

Refer to the following topics for instructions on how to configure and use DAM Indexing.

- **[Configuring DAM Indexing](./configure_dam_indexing.md)**  
Learn how to enable and configure DAM Indexing.

- **[Using DAM Indexing](./using_dam_indexing.md)**  
Know how to use DAM Indexing.


???+ info "Related information"
    - [Installing search based on OpenSearch](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_new_search.md)
    - [Running search queries via REST API](../../../../deployment/manage/container_configuration/configure_opensearch/run_search_queries_api.md)


