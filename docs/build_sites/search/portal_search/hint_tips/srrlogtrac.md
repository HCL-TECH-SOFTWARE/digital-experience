# Portal Search trace and log files

Portal Search provides logging and tracing so that you can get additional information for resolving possible problems.

Portal Search has the following trace strings:

-   **com.ibm.portal.search**

    Use to turn on **all** Portal Search messages.

-   **com.ibm.portal.search.notIndexed**

    Enable to obtain messages about URLs that are discovered by the crawler but could not be fetched and indexed for different reasons.

-   **com.ibm.portal.search.crawler**

    Enable to obtain messages about the crawling process.

-   **com.ibm.portal.search.crawler.failure**

    Enable to obtain messages about failures that happen during a crawl.

-   **com.ibm.portal.search.index**

    Enable to obtain messages about the indexing process.

-   **com.ibm.portal.search.index.failure**

    Enable to obtain messages about failures that happen during the indexing process.


## Enabling logging for a remote search configuration

If you have set up Portal Search in a remote configuration on a WebSphere® Application Server server, the log messages are filtered and printed out according to the WebSphere Application Server logging and tracing configuration. In this case refer to the WebSphere Application Server Help Center.


???+ info "Related information"
    -   [Logging and tracing](../../../deployment/manage/troubleshooting/logging_and_tracing/index.md)