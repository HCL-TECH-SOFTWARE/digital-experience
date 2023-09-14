# DAM Staging mismatch

DAM Staging helps to Sync items between the publisher and subscriber. During the sync, if there are failures which leads to un-even assets between environments, it is difficult to find the differences between the environments. A new feature is introduced in [Digital Asset Management](../../index.md) (DAM) which allows you to find the difference between the environments and view them in a detailed report.


## Steps involved to find the DAM Staging mismatch

DX Client commands introduced to trigger the staging mismatch and also download the report.

Following are the steps the user should follow:

- Find the subscriber ID against which the mismatch needs to be checked. The existing DX Client command can be used to see the [List of subscribers](dam_subscription_staging.md#get-all-subscribers-details-for-dam-staging).
- Trigger the mismatch between the publisher and subscriber using the [Find staging mismatch](#find-staging-mismatch) command. The hostname will be the publisher host name and the subscriber ID can be found using the step above.
- Once the mismatch is triggered, we can verify the status of the mismatch operation by checking resync_status field response (FIND_MISMATCH_START, FIND_MISMATCH_COMPLETED, FIND_MISMATCH_FAILED) by executing the [List of subscribers](dam_subscription_staging.md#get-all-subscribers-details-for-dam-staging) command.
- Once the status is changed to FIND_MISMATCH_COMPLETED, we can [Download the report](#download-mismatch-report) via DX Client using the command below
- If the report is not generated due to un-availability of data, it implies the both publisher and subsriber are in Sync. If not, the report should contain the detailed information of mismatches found.
  
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

    Use this attribute to specify the host name of the target environment of the subscriber:
    
    ```
    -subscriberId <value>
    ```

    Use this attribute to specify the subscriber ID against which the mismatch needs to be triggered:

-   **Commands:**

    ```
    dxclient manage-dam-staging find-staging-mismatch -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -subscriberId <subscriberId>
    ```

    !!! example

        ```
        dxclient manage-dam-staging find-staging-mismatch -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1 -subscriberId 8c72ef60-e8d4-425d-903a-232bb8726222
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

    Use this attribute to specify the host name of the target environment of the subscriber:

-   **Commands:**

    ```
    dxclient manage-dam-staging get-staging-mismatch-report -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion>
    ```

    !!! example

        ```
        dxclient manage-dam-staging find-staging-mismatch -dxProtocol https -hostname native-kube-dam-staging.team-q-dev.com -dxPort 443 -dxUsername xxxx -dxPassword xxxx -damAPIPort 443 -ringAPIPort 443 -damAPIVersion v1 -ringAPIVersion v1
        ```

### Notes

As a pre-requisite,

- There should be already a publisher and a subscriber setup in place.
- The dx client host should be publisher
- The single point of truth will be always a publisher