# DAM Indexing 

You can use Digital Asset Management (DAM) as a data source of the DX Picker. Using DAM as a data source enables you to search DAM assets and images more efficiently with the help of [OpenSearch](../../../../deployment//install/container/helm_deployment/preparation/optional_tasks/optional_install_new_search.md). To make DAM a prsupported data source for DX Picker, the following indexing processes are introduced:

- **Initial indexing**: Indexes all existing assets when the DAM server starts of the DAM server.
- **Reindexing**: Indexes all existing assets and revalidates stale indexes. You can trigger this process manually by using [DXClient](../../../../extend_dx/development_tools/dxclient/index.md) or the [DAM API](https://opensource.hcltechsw.com/experience-api-documentation/dam-api/).
- **Live indexing**: Indexes changes made in DAM in near real-time. This allows DAM indexes to be up-to-date.

## Limitation

Asset contents are not included in indexing. For example, the text content of a document is not indexed.

For instructions on how to configure and use DAM indexing, see the following topics:

- **[Configure DAM indexing](./configure_dam_indexing.md)**  
  Learn how to enable and configure DAM indexing.

- **[Use DAM indexing](./using_dam_indexing.md)**  
  Learn how to use DAM indexing.

> **Related information**
>
> - [Install search based on OpenSearch](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_new_search.md)  
> - [Run search queries by using the REST API](../../../../deployment/manage/container_configuration/configure_opensearch/run_search_queries_api.md)  


