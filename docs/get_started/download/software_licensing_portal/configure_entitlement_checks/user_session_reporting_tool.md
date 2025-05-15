---
title: User Session Reporting Tool
---
# User Session Reporting Tool

This topic describes how you can use the User Session Reporting Tool to count and report user sessions.

The User Session Reporting Tool is a utility designed for HCL Digital Experience (DX) users managing on-premises deployments. This tool provides a solution for analyzing and interpreting web traffic data by processing National Center for Supercomputing Applications (NCSA) access log files. Relevant parts of each log are extracted to identify and count unique user sessions. This offers a precise understanding of usage data over specified periods.

## Functionalities

This section provides information about the functionalities and use cases of the User Session Reporting Tool.

- **Detects new unique sessions based on parameters such as Internet Protocol (IP) addresses, user-agent strings, and timestamp.** The tool increments the session counter when a session becomes inactive. Inactive is defined as no new requests from the same user for 30 minutes or after a maximum of 4 hours from the start of the session. This ensures accurate session counting, even across extended periods of user activity. It supports custom date range analysis, allowing users to track and report on specific time frames. 

- **Allows manual exclusion of internal requests.** The tool filters out internal requests, ensuring that session data only reflects external user activity. You can exclude specific IPs or [session keys](./user_session_reporting_tool.md#running-the-user-session-reporting-tool) (which consists of the remote host, User-Agent, and X-Forwarded-For headers) by either passing them as command-line parameters or listing them within text files. This feature is crucial for organizations that focus on customer interactions rather than internal maintenance or system-generated traffic. The User Session Reporting Tool has also been rigorously tested with large sets of log files and across different access log formats. This ensures its reliability in handling diverse and extensive data sources without compromising accuracy.

- **Handles complex scenarios such as merging multiple log files without overcounting sessions.** This feature is useful in environments where logs are segmented or spread across different servers. You can manually input and exclude specific IP addresses for greater flexibility in reporting and ensuring that internal or irrelevant traffic does not skew the session data. The tool also supports alternate syntax inputs to avoid potential user errors during setup or configuration.

## Availability and system compatibility

The User Session Reporting Tool (UserSessionReporting-v1.2.0.zip and later) is available in the [HCL DX Core offering](../../software_licensing_portal/index.md) you have purchased entitlements to in the [HCL Software License Portal](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/logon.do){target="_blank"}. For example:

- HCL Portal Server 9.5
- HCL Web Content Manager 9.5
- HCL Digital Experience Manager 9.5
- HCL Digital Experience Cloud Native 9.5.1 or later
- HCL Portal Extend 9.5
- HCL Portal Enable 9.5
- HCL Portal Express 9.5
- HCL Customer Experience Suite 9.5
- HCL Employee Experience Suite 9.5

The tool is designed to integrate effortlessly into existing HCL DX deployments, particularly in on-premises deployments. It is backward compatible with previous deployment versions. You do not need to upgrade to the latest Cumulative Fix (CF) to utilize the User Session Reporting Tool, making it accessible to a broader range of deployments without requiring additional updates or changes to the existing infrastructure.

## Deployment Scenarios

Please note the following deployment scenarios with their use cases when using the tool:

1. **Manual Usage Reporting to the Product Team (On-Premises)** - For traditional/on-premises deployments, you can use the User Session Reporting Tool as a standalone utility to analyze access logs and calculate session consumption over a specified date range. The tool outputs a human-readable CSV report and a log file summarizing session activity. These files can be manually submitted to the HCL DX product management team for internal analysis and feedback purposes.

2. **Disconnected/File-Based Usage Reporting to My HCLSoftware (On-Premises)** - In disconnected on-premises deployments (i.e., those not integrated with My HCLSoftware APIs) who intend to report usage to MHS, usage data can still be reported manually. This involves using the User Session Reporting Tool to process NCSA access logs and export the data into the MHS metric file format. The generated metrics file can then be uploaded manually to the My HCLSoftware portal via the file-based reporting feature. See [MHS File Based Usage Reporting for Non-Kubernetes Deployments](../configuring_mfs_file_base_session_reporting.md#mhs-file-based-usage-reporting-for-non-kubernetes-deployments) for more information.

3. **Disconnected/File-Based Usage Reporting to My HCLSoftware (Kubernetes)** - For Kubernetes-based deployments that are not connected to My HCLSoftware (e.g., disconnected environments where the Helm chart was not configured for online reporting), you can also generate and submit session usage data manually. The HCL DX License Manager (deployed with HAProxy) records usage, and the included User Session Reporting Tool can convert this data into the MHS metric file format. This file can then be uploaded manually to the My HCLSoftware portal using the file-based reporting option. See [MHS File Based Usage Reporting for Kubernetes Deployments](../configuring_mfs_file_base_session_reporting.md#mhs-file-based-usage-reporting-for-kubernetes-deployments) for more information.

## Prerequisites

- Make sure that a Java Development Kit (JDK) is installed. The recommended version is at least Java 8.

- Complete the following prerequisites before running the User Session Reporting Tool.

    - [Enable access logs.](#enabling-access-logs)
    - [(Optional) Handle the routing setup.](#optional-handling-the-routing-setup)


### Enabling access logs

To track usage data using the User Session Reporting Tool, you must use the National Center for Supercomputing Applications (NCSA) access logging to generate log files containing usage data entries that the tool will interpret.

Refer to the following steps to enable and configure NCSA access logging:

1. Click **Servers > Server Types > WebSphere application servers > server_name (for example, Websphere_Portal)**. Under the **Troubleshooting** section, click **NCSA access and HTTP error logging**.
2. Select **Enable logging service at server start-up**.
3. Ensure that **Enable access logging** is selected and the file path is set to `${SERVER_LOG_ROOT}/http_access.log`. 
4.  In **Maximum number of historical files**, enter the maximum file number for historical files. For better tracking, the recommended number is 3.

    !!! note
        The number and size of log files are crucial factors to consider when configuring access logs. They depend on how frequently the tool is run. It is important to either keep enough log files available or run the tool often enough to ensure all requests are processed. If the logs are rolled over too frequently before they are processed by the tool, there is a risk of losing session data, which could lead to incomplete or inaccurate results.

5. Go to **Application servers > WebSphere_Portal > Container Settings > Web Container settings**. Click **Web container transport chains**.
6. Select the inbound channel to cover (for example, WCInboundDefaultSecure), and then click **HTTP inbound channel (HTTP_4)** under general properties.
7. Under the **Logging** section, make sure **Enable logging** is enabled.
8. Expand **NCSA Access logging** and select **Use chain-specific logging**.
9. In **Access log file path**, enter the file path for the log files.
10. In **Maximum number of historical files**, enter the maximum file number for historical files.
11. Add a custom property under **Additional Properties**.
    1. Click **New**. 
    2. In the **Name** field, enter `accessLogFormat`.
    3. In the **Value** field, enter `[DX_UST] %t %h "%{User-Agent}i" "%{X-Forwarded-For}i" [/DX_UST]`. This changes the format to include essential session data.

        !!! note
            In cases where a format is already set, you can add the string mentioned in the **Value** field to the already existing value. It is important that the format mentioned above (`[DX_UST] %t %h "%{User-Agent}i" "%{X-Forwarded-For}i" [/DX_UST]`) is included (and format is retained) in the value field for the tool to count the request. 
          
12. Save and restart the server.

You can obtain access log files inside the `wp_profile` directory (`/opt/IBM/WebSphere/wp_profile/logs/WebSphere_Portal/http_access.log`). The following is an example of a log:

```
[DX_UST] [17/Jun/2024:09:47:24 +0000] 192.168.243.142 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" "10.134.209.51" [/DX_UST]
[DX_UST] [17/Jun/2024:09:47:24 +0000] 192.168.243.142 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" "10.134.209.51" [/DX_UST]
[DX_UST] [17/Jun/2024:09:47:24 +0000] 192.168.243.142 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" "10.134.209.51" [/DX_UST]
[DX_UST] [17/Jun/2024:09:47:24 +0000] 192.168.243.142 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" "10.134.209.51" [/DX_UST]
[DX_UST] [17/Jun/2024:09:47:25 +0000] 192.168.243.142 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" "10.134.209.51" [/DX_UST]
```

!!!important
    There is a [known issue with WAS fix packs 9.0.5.16 and 9.0.5.17](https://www.ibm.com/docs/en/was/9.0.5?topic=application-enabling-access-logging){target="_blank"} where timestamps are broken, making the access log files unusable.

### (Optional) Handling the routing setup

If you are not using a proxy server, you do not have to follow the routing setup in this section.

For every request, a key is computed based on the requesting IP address of the user. If you are using a proxy server in your deployment setup, this key is combined with the user agent and a forwarding header (`X-Forwarded-For`) for proxy usage. The next interactions during the same user session period use that key to identify the same user.

If a reverse proxy server, load balancer, or a similar component is used in the deployment setup, the [X-Forwarded-For header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For){target="_blank"} is used to identify the user. This header is the standard for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer. Make sure that the `X-Forwarded-For` header is correctly configured in your routing setup.

### Analyzing Access Logs

Once the access logs are extracted, the next step is to understand how the tool processes them to identify and count unique user sessions. The tool determines session uniqueness based on the following criteria:

**Sample Access Logs**

```
[DX_UST] [17/Jun/2024:09:47:25 +0000] 192.168.243.142 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" "10.134.209.51" [/DX_UST]
```

| **Field**            | **Example Value**                                                                                              | **Description**                                      |
|----------------------|---------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Timestamp (`%t`)      | `[17/Jun/2024:09:47:25 +0000]`                                                                                 | session duration are counted based on the condition mentioned [here](index.md#monitoring-user-session-consumption-for-hcl-dx-cloud-native-v95-production-deployments), this validates if the session is counted for 1 session count                            |
| Client IP (`%h`)      | `192.168.243.142`                                                                                              | IP seen by the server        |
| User-Agent            | `"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"` | Contains the browser info  of the request                  |
| X-Forwarded-For       | `"10.134.209.51"`                                                                                              | Actual client IP passed by a proxy/load balancer    |

In some cases, certain log entries—such as internal service calls, monitoring probes, or other non-user requests—need to be excluded from session counting. These should be distinguished from valid user or API requests, which are typically included by default. Users must evaluate their specific environment to identify which requests (based on attributes like IP address or User-Agent) represent internal or automated activity and configure the tool to exclude them accordingly.

**Example of a Monitoring Probe Request**

```
[DX_UST] [17/Jun/2024:10:12:45 +0000] 192.168.243.139 "python-requests/2.24.0" "10.134.209.51" [/DX_UST]
```
| **Field**           | **Value**                           | **Notes**                                                              |
|---------------------|-------------------------------------|------------------------------------------------------------------------|
| Timestamp           | [17/Jun/2024:10:12:45 +0000]        | Time the request was made                                              |
| Client IP           | 192.168.243.139                     | Internal server or probe IP (likely the monitoring agent)              |
| User-Agent          | "python-requests/2.24.0"            | Identifies it as a scripted call, not from a browser                   |
| X-Forwarded-For     | "10.134.209.51"                     | IP of the original client, if routed through a proxy/load balancer     |


Once the IP addresses or session keys to be excluded have been identified, users can configure the exclusion parameters when running the tool to ensure those entries are omitted from the session count. See [Excluding Specific Request](#excluding-specific-request) for more information.


## Running the user session reporting tool

### Tool Parameters

The tool is packaged as an executable JAR file. Execute the tool by using the following parameters:

```cmd
java -jar <jarFilepath> -h

# <jarFilepath> Path to the jar file
# <filePaths> List of input log files to get session counts
# <excludeIPFile> Path to the file containing IPs (separated by a new line) to exclude from session counts
# <excludeSessionKeyFile> Path to the file containing session keys (separated by a new line) to exclude from session counts
# <excludeIP> IP to exclude from session counts (Multiple IPs can be excluded by adding multiple -excludeIP parameters)
# <excludeSessionKey> Session key to exclude from session counts (Multiple session keys can be excluded by adding multiple -excludeSessionKey parameters)
# <startDate> Specifies the start date in YYYY-MM-DD format
# <endDate> Specifies the end date in YYYY-MM-DD format
```
```cmd
# Sample command to run the tool with the access log files and the date range of the sessions intend to be counted
java -jar <jarFilepath> <filePaths...> <startDate> <endDate>
```

### Excluding Specific Request

The tool also includes exclusion capabilities, allowing users to omit specific logs or requests from the session count. Users can exclude traffic based on IP addresses and/or session keys by specifying them directly as command-line arguments or by providing a file path that lists the IPs or session keys to exclude. Any request matching the provided exclusion criteria will be omitted from the final session count.

The following is a sample command for running the User Session Reporting Tool using all the parameters provided:

```cmd
java -jar <jarFilepath> <filePaths...> [-excludeIPFilePath <excludeIPFile>] [-excludeSessionKeyFilePath <excludeSessionKeyFile>] [-excludeIP <excludedIP>] [-excludeSessionKey <excludeSessionKey>] <startDate> <endDate>

# Example
java -jar input.log -excludeIPFilePath ./excludedIPs.txt -excludeSessionKeyFilePath ./excludeSessionKeys1.txt -excludeIP "192.168.243.142" -excludeSessionKey "192.168.243.136 \"axios/1.6.7\" \"-\"" -productFeatureIdName HCL_DX_CloudNative 2022-07-22 2025-07-28 

# Example for multiple exludeIP and excludeSessionKey
java -jar input.log -excludeIPFilePath ./excludedIPs.txt -excludeSessionKeyFilePath ./excludeSessionKeys1.txt -excludeIP "192.168.243.142" -excludeIP "192.168.245.143" -excludeSessionKey "192.168.243.136 \"axios/1.6.7\" \"-\"" -excludeSessionKey "192.168.243.137 \"axios/1.6.7\" \"-\"" -productFeatureIdName HCL_DX_CloudNative 2022-07-22 2025-07-28 

```

See the following sample of an `excludedIPs.txt` file:

```text
192.168.243.142
192.168.243.143
```

See the following sample of an `excludeSessionKeys.txt` file:

```text
192.168.243.139 "python-requests/2.24.0" "-"
192.168.243.137 "axios/1.6.8" "-"
```

### Output Files

After execution, the system returns the expected session count within the specified start and end date parameters. The tool generates the following files:

- A CSV file named  `sessionCounts<startDate><endDate>.csv` (for example, sessionCounts_2024-01-01_2024-12-31.csv) which reports the session counts sorted and categorized by months based on the start and end date parameters.
- An LOG file named `sessionCounts.log` where the incremental session counts are logged.
- A DAT file named `sessionStorage.dat` which serves as the internal storage for saving session data and counts between runs. This file allows the tool to maintain its state, enabling accurate aggregation of session counts over time.

!!! note 
    It is important to save the .DAT file and store it securely because it will be used by the tool to continue the session count during the next run. Losing or tampering with this file could result in incorrect session data and an inaccurate count.

### Additional Use Cases

- You can run the User Session Reporting Tool either once for all collected log files or incrementally every X days, hours, or minutes. It stores its state between runs, processing only the logs that are after the last previously processed timestamp to prevent reprocessing old entries. This ensures that you still get the correct overall result, even when processing logs in multiple stages. 

- Additionally, if there are logs from multiple deployments belonging to the same system (for example, in Active-Active setups or backups), you must process those logs together in one run, because the tool will merge them to provide a comprehensive and accurate session count.

## HCLSoftware U learning materials

To learn how to monitor, troubleshoot, and contact Support about issues you encounter with DX, go to [Monitoring and Troubleshooting](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3436){target="_blank”}. You can try it out using the [Monitoring and Troubleshooting Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Monitoring_and_Troubleshooting_Lab.pdf){target="_blank”} and corresponding [Monitoring and Troubleshooting Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Monitoring_and_Troubleshooting_Lab_Resources.zip){target="_blank”}.
