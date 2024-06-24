# Using DAM Indexing

This topic provides information about the indexing processes to make Digital Asset Management (DAM) a datasource for Search.

## Initial indexing

This process indexes all existing assets when the DAM server starts and if there are no DAM indexes present in the OpenSearch middleware.

## Reindexing

This process indexes all existing assets while revalidating stale indexes. There are two ways to trigger the reindexing process:

- [DAM API endpoint](https://opensource.hcltechsw.com/experience-api-documentation/dam-api/)

    To start the reindexing process, trigger the `POST` endpoint named `/reindex`.

- [DXClient](../../../../extend_dx/development_tools/dxclient/index.md) 
 
    The following script is added in DXClient that triggers the reindexing process:
    
        ```bash
        dxclient trigger-dam-reindex [options]
        ```

    The following options are available:

    - `dxProtocol` - Protocol of the DX Core server.
    - `hostname` - Host name of the DX Core server.
    - `dxPort` - Port number of the DX Core server.
    - `dxUsername` - Username of the DX Core server.
    - `dxPassword` - Password of the DX Core server.
    - `damAPIPort` - Port number of the DAM API server.
    - `damAPIVersion` - API Version number of DAM.
    - `ringAPIPort` - Port number of the Ring API server.
    - `ringAPIVersion` - API Version number of Ring.
    - `ltpaTokenRefreshTime (optional)` - LTPA Token refresh time in minutes.
    - `reportPath (optional)` - Location of the file path to download report.
    - `help (optional)`

## Live indexing

Any changes or events related to DAM assets trigger an indexing immediately. The live indexing process makes sure that DAM indexes are updated in near real-time. Creating, updating, and deleting assets are considered for live indexing. 
