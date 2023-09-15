# DAM Staging mismatch

DAM Staging helps to Sync items between the publisher and subscriber. During the sync, if there are any failures, it leads to un-even assets between environments. It is difficult to find the differences between the environments by browsing through. A new feature is introduced in [Digital Asset Management](../../index.md) (DAM) which allows you to find the difference between the environments and view them in a detailed report.

## Steps involved to find the DAM Staging mismatch

DX Client commands introduced to trigger the staging mismatch and download the report. Following are the steps the user should follow:

- Find the subscriber ID against which the mismatch needs to be checked. The existing DX Client command can be used to see the [List of subscribers](dam_subscription_staging.md#get-all-subscribers-details-for-dam-staging).
- Trigger the action to find the mismatch between the publisher and subscriber using the [Find staging mismatch](#find-staging-mismatch) command. The hostname will be the publisher host name and the subscriber ID can be found using the step above.
- Once the mismatch is triggered, we can verify the status of the mismatch operation by checking resyncStatus field response (FIND_MISMATCH_START, FIND_MISMATCH_COMPLETED, FIND_MISMATCH_FAILED) by executing the [List of subscribers](dam_subscription_staging.md#get-all-subscribers-details-for-dam-staging) command.
- Once the status is changed to FIND_MISMATCH_COMPLETED, we can [Download the report](#download-mismatch-report) via DX Client. If the status in not FIND_MISMATCH_COMPLETED, still you will be allowed to download the report. But the report will not be accurate.
- If the report is not generated due to un-availability of data, it implies that both the publisher and subscriber are in Sync. If not, the report should contain the detailed information of mismatches found.
  
### Find staging mismatch

Use the `manage-dam-staging find-staging-mismatch` command to trigger staging mismatch between the publisher and subscriber

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

Use the `manage-dam-staging get-staging-mismatch-report` command to download the staging mismatch report

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

    Use this attribute to specify the API version number of DAM of the publisher (default: ""; default port for any Kubernetes environment is 443):

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

    Use this attribute to specify the record type (default: ""). The Other possible values are CREATE, UPDATE, DELETE:
    
    ```
    -recordType <value>
    ```

    Use this attribute to specify the record action (default: ""). The Other possible values are COLLECTION, MEDIA_ITEM, RENDITION, VERSION, FAVORITE, KEYWORD, COLLECTION_MEDIA_RELATION, CUSTOM_URL, MEDIA_TYPE, MEDIA_TYPE_GROUP, RESOURCE, PERMISSION:

     ```
    -recordAction <value>
    ```

    Use this attribute to specify a location **store/folder_name/** that is different from the default location to download report. The default location "report" is **store/outputFiles/**:

     ```
    -reportPath <value>
    ```

    !!! note 
        Optional parameters are `recordType`, `recordAction` and `reportPath`.


-   **Commands:**

    ```
    dxclient manage-dam-staging get-staging-mismatch-report -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion>
    ```

    !!! example

        ```
        dxclient manage-dam-staging find-staging-mismatch -dxProtocol https -hostname dam-staging-publisher.domain.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1
        ```

### Configurations

- [Find staging mismatch](#find-staging-mismatch) compares tables between both publisher and subscriber. The `maxRecordsToCompare` value under `configuration.digitalAssetManagement` in Helm charts is the number of records picked up to compare at a single iteration. This can be tuned for better performance.
### Limitations

- The single point of truth will be always a publisher. Hence report will read from the publisher point of view.
- Finding mismatch will be specific to subscriber (Whereas download can be done for all or specific to subscriber as well)
- If the data is modified or deleted after the find staging mismatch is completed, then the report will not contain the up to date information.
- Find mismatch will not be able to detect items that are being staged currently and hence that could also be a part of mismatch report.
- Download report will be always in fixed CSV format
