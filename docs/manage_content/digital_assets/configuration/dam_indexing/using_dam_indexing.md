# Using DAM Indexing

This topic provides information about the indexing processes required to make Digital Asset Management (DAM) a data source for the DX Picker.

## Initial indexing

This process indexes all existing assets when the DAM server starts and when no DAM indexes are present in the OpenSearch middleware.

## Reindexing

This process indexes all existing assets and revalidates stale indexes. You can trigger the reindexing process in two ways:

- [DAM API endpoint](https://opensource.hcltechsw.com/experience-api-documentation/dam-api/){target="_blank"}

    To start the reindexing process, trigger the `POST` endpoint named `/dx/api/dam/v1/reindex`.

- [DXClient](../../../../extend_dx/development_tools/dxclient/index.md) 
 
    The following script is available in DXClient to trigger the reindexing process:
    
    ```bash
    dxclient trigger-dam-reindex [options]
    ```

    The following options are available:

- `dxProtocol`: Protocol of the DX Core server  
- `hostname`: Host name of the DX Core server  
- `dxPort`: Port number of the DX Core server  
- `dxUsername`: User name of the DX Core server  
- `dxPassword`: Password of the DX Core server  
- `damAPIPort`: Port number of the DAM API server  
- `damAPIVersion`: Version of the DAM API  
- `ringAPIPort`: Port number of the Ring API server  
- `ringAPIVersion`: Version of the Ring API  
- `ltpaTokenRefreshTime (optional)`: LTPA token refresh time in minutes  
- `reportPath (optional)`: File path to download the report  
- `help (optional)`

## Live indexing

Any changes or events related to DAM assets immediately trigger indexing. The live indexing process ensures that DAM indexes are updated in near real time. Asset creation, updates, and deletions are included in live indexing. 
