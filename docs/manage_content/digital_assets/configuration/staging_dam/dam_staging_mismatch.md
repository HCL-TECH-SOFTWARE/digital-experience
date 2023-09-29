# DAM Staging Mismatch

DAM Staging helps in syncing items between the publisher and subscriber. If there are any failures during the sync, the sync results to uneven assets between environments. This makes it difficult to find the discrepancies between environments just by browsing through them. A new feature called DAM Staging Mismatch is introduced in [Digital Asset Management](../../index.md) (DAM) to help you find the discrepancies between the environments and view them in a detailed report.

## Finding the DAM Staging mismatch

To trigger the staging mismatch process and download the report, refer to the following steps:

1. Find the subscriber ID against which the mismatch needs to be checked. For the existing DX Client commands that you can use to see subscriber details, refer to [Get all subscribers details for DAM staging](dam_subscription_staging.md#get-all-subscribers-details-for-dam-staging).
2. Trigger the action to find the differences between the publisher and subscriber by using the [Find staging mismatch](#commands-to-trigger-the-identification-of-staging-mismatches) command. 
    - For the **hostname** attribute, use the publisher host name. 
    - For the subscriber ID attribute, retrieve the subscriber ID by following Step 1. 
    
    !!!note
           You can find discrepancies between a publisher and more than one subscriber. However, you can only run the action against one subscriber at a time. 
   
3. Verify the status of the mismatch operation. Check the resyncStatus field response (for example, FIND_MISMATCH_START, FIND_MISMATCH_COMPLETED, FIND_MISMATCH_FAILED) by executing the [List of subscribers](dam_subscription_staging.md#get-all-subscribers-details-for-dam-staging) command.
4. After the status is changed to FIND_MISMATCH_COMPLETED, [download the report](#download-mismatch-report) using DXClient. 

    !!!note
           If the status is not FIND_MISMATCH_COMPLETED, you can still download the report but it is not accurate.
      
If the report is not generated due to unavailability of data, it means that both the publisher and subscriber are in sync. If they are not in sync, the report should contain the detailed information of mismatches found.
  
### Commands to trigger the identification of staging mismatches

Use the `manage-dam-staging find-staging-mismatch` command to trigger staging mismatch between the publisher and subscriber.

-   **Command description**

    You can trigger the staging mismatch between the publisher and the subscriber with the following command:

    ```
    dxclient manage-dam-staging find-staging-mismatch
    ```

-   **Help command**

    The following command shows the help information for `manage-dam-staging find-staging-mismatch` command usage:

    ```
    dxclient manage-dam-staging find-staging-mismatch -h
    ```

-   **Command options**

    Use this attribute to specify the protocol with which to connect to the DX server of the publisher (default: ""):

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the host name of the DX server of the publisher (default: ""):

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating with the DX server of the publisher (default: ""):

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the DX server of the publisher <br/> (default: ""):

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the port number of the DAM server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -damAPIPort <value>
    ```

    Use this attribute to specify the port number of the DX Core API server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -ringAPIPort <value>
    ```

    Use this attribute to specify the API version number of DAM of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -damAPIVersion <value>
    ```

    Use this attribute to specify the API version number of DX Core of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -ringAPIVersion <value>
    ```

    Use this attribute to specify the subscriber ID against which the find mismatch needs to be triggered:
    
    ```
    -subscriberId <value>
    ```

-   **Commands:**

    ```
    dxclient manage-dam-staging find-staging-mismatch -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -subscriberId <subscriberId>
    ```

    !!! example

        ```
        dxclient manage-dam-staging find-staging-mismatch -dxProtocol https -hostname dam-staging-publisher.domain.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1 -subscriberId 8c72ef60-e8d4-425d-903a-232bb8726222
        ```

### Download mismatch report

Use the `manage-dam-staging get-staging-mismatch-report` command to download the staging mismatch report.

-   **Command description**

    You can download the report of staging mismatch with the following command:

    ```
    dxclient manage-dam-staging get-staging-mismatch-report
    ```

-   **Help command**

    The following command shows the help information for `manage-dam-staging get-staging-mismatch-report` command usage:

    ```
    dxclient manage-dam-staging get-staging-mismatch-report -h
    ```

-   **Command options**

    Use this attribute to specify the protocol with which to connect to the DX server of the publisher (default: ""):

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the host name of the DX server of the publisher (default: ""):

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the user name that is required for authenticating with the DX server of the publisher (default: ""):

    ```
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the DX server of the publisher <br/> (default: ""):

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the port number of the DAM server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -damAPIPort <value>
    ```

    Use this attribute to specify the port number of the DX Core API server of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -ringAPIPort <value>
    ```

    Use this attribute to specify the API version number of DAM of the publisher (default: ""; default version is v1):

    ```
    -damAPIVersion <value>
    ```

    Use this attribute to specify the API version number of DX Core of the publisher (default: ""; default port for any Kubernetes environment is 443):

    ```
    -ringAPIVersion <value>
    ```

    Use this attribute to specify the subscriber ID against which the mismatch is found:
    
    ```
    -subscriberId <value>
    ```

    Use this attribute to specify the record type (default: ""). Other possible values are COLLECTION, MEDIA_ITEM, RENDITION, VERSION, FAVORITE, KEYWORD, COLLECTION_MEDIA_RELATION, CUSTOM_URL, MEDIA_TYPE, MEDIA_TYPE_GROUP, RESOURCE, and PERMISSION:
    
    ```
    -recordType <value>
    ```

    Use this attribute to specify the record action (default: ""). Other possible values are CREATE, UPDATE, and DELETE:

    ```
    -recordAction <value>
    ```

    Use this attribute to specify a location **store/folder_name/** that is different from the default location where the report is downloaded. The default location is **store/outputFiles/**:

    ```
    -reportPath <value>
    ```

    !!! note 
        `recordType`, `recordAction`, and `reportPath` are optional parameters.


-   **Commands:**

    ```
    dxclient manage-dam-staging get-staging-mismatch-report -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion>
    ```

    !!! example

        ```
        dxclient manage-dam-staging get-staging-mismatch-report -dxProtocol https -hostname dam-staging-publisher.domain.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1
        ```

### Configuration

- [Find staging mismatch](#find-staging-mismatch) compares tables between both publisher and subscriber. The `maxRecordsToCompare` value under `configuration.digitalAssetManagement` in Helm charts is the number of records picked up to compare at a single iteration. This can be tuned for better performance.

### Limitations

- The single point of truth is always the publisher. The report is read from the publisher's point of view and the details about the mismatch are stored in the publisher environment.
- When the system finds discrepancies against more than one subscriber, the details stored in the publisher contain information about all subscribers. When generating the report, you can choose to download the details specific to one subscriber only or you can download the report containing all information for all subscribers selected. 
- If the data is modified or deleted after the find staging mismatch process is completed, then the report will not contain accurate information.
- When identifying discrepancies, the system cannot detect items that are currently being staged. These items can be a part of the mismatch report.
- Reports are downloaded as CSV files.

    !!!note
           If your `values.yaml` or `custom-values.yaml` file contains the following entries, remove them. The following values can be found under `configuration` of the `digitalAssetManagement` section in `incubator`.
           
           ```
           enableStagingCleanupHeartbeats
           findStagingMismatchHeartbeatIntervalTimeInMinutes
           ```
