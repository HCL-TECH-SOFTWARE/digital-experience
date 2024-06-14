# Using DAM Indexing

## Initial Indexing

The Initial Indexing process will run when DAM server starts and if there's no DAM indices present in the OpenSearch middleware.

## Reindexing

Currently, there are two ways to trigger the reindexing process:

- DAM API endpoint  
There's a `POST` endpoint named `/reindex` consumers can trigger to start the reindexing process.

- DXClient  
A script was added in DXClient that triggers the reindexing process:  
    ```bash
    dxclient trigger-dam-reindex [options]
    ```

    The following options are available:

    - `dxProtocol`  
    Protocol of the DX Core server.
    - `hostname`  
    Host name of the DX Core server.
    - `dxPort`  
    Port number of the DX Core server.
    - `dxUsername`  
    Username of the DX Core server.
    - `dxPassword`  
    Password of the DX Core server.
    - `damAPIPort`  
    Port number of the DAM API server.
    - `damAPIVersion`  
    API Version number of DAM.
    - `ringAPIPort`  
    Port number of the Ring API server.
    - `ringAPIVersion`  
    API Version number of Ring.
    - `ltpaTokenRefreshTime (optional)`  
    LTPA Token refresh time in minutes.
    - `reportPath (optional)`  
    Location of the file path to download report.
    - `help (optional)`

## Live Indexing

Any changes or events related to DAM assets triggers an indexing immediately, allowing DAM indices to be up to date in near real-time. Creating, Updating, and Deleting assets are considered for live indexing. 
