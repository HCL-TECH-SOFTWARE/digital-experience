---
title: User session reporting tool for non kubernetes
---
# User Session Reporting Tool for Non Kubernetes

This topic describes how you can use the User Session Reporting Tool to count and report user sessions.

The User Session Reporting Tool is a utility designed for HCL Digital Experience (DX) users managing on-premises deployments. This tool provides a solution for analyzing and interpreting web traffic data by processing National Center for Supercomputing Applications (NCSA) access log files. Relevant parts of each log are extracted to identify and count unique user sessions. This tool will generate the user session data usage in metrics format, the report include session data that has been encrypted that will uploaded the My HCLSoftware. This offers a precise understanding of usage data over specified periods.

## Functionalities

This section provides information about the functionalities and use cases of the User Session Reporting Tool.

- **Detects new unique sessions based on parameters such as Internet Protocol (IP) addresses, user-agent strings, and timestamp.** The tool increments the session counter when a session becomes inactive. Inactive is defined as no new requests from the same user for 30 minutes or after a maximum of 4 hours from the start of the session. This ensures accurate session counting, even across extended periods of user activity. It supports custom date range analysis, allowing users to track and report on specific time frames. 

- **Allows manual exclusion of internal requests.** The tool filters out internal requests, ensuring that session data only reflects external user activity. You can exclude specific IPs or [session keys](./user_session_reporting_tool.md#running-the-user-session-reporting-tool) (which consists of the remote host, User-Agent, and X-Forwarded-For headers) by either passing them as command-line parameters or listing them within text files. This feature is crucial for organizations that focus on customer interactions rather than internal maintenance or system-generated traffic. The User Session Reporting Tool has also been rigorously tested with large sets of log files and across different access log formats. This ensures its reliability in handling diverse and extensive data sources without compromising accuracy.

- **Handles complex scenarios such as merging multiple log files without overcounting sessions.** This feature is useful in environments where logs are segmented or spread across different servers. You can manually input and exclude specific IP addresses for greater flexibility in reporting and ensuring that internal or irrelevant traffic does not skew the session data. The tool also supports alternate syntax inputs to avoid potential user errors during setup or configuration.

## Availability and system compatibility

The User Session Reporting Tool (UserSessionReporting_v1.0.x.zip) is available in the [HCL DX Core offering](../../software_licensing_portal/index.md) you have purchased entitlements to in the [HCL Software License Portal](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/logon.do){target="_blank"}. For example:

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

## Prerequisites

- Make sure that a Java Development Kit (JDK) is installed. The recommended version is at least Java 8.

- Complete the following prerequisites before running the User Session Reporting Tool.

    - [Enable access logs.](#enabling-access-logs)
    - [(Optional) Handle the routing setup.](#optional-handling-the-routing-setup)

-   Create a deployment in [My HCLSoftware](../../software_licensing_portal/configure_entitlement_checks/create_deplyment_mhs_ui.md).


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
            In cases where a format is already set, you can add the string mentioned in the **Value** field to the already existing value.
          
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

## Running the User Session Reporting Tool

### Generating and uploading user session data usage in metrics format
To generate the user session data usage in metrics format, the report must include session data that has been encrypted for each user session. The `deploymentId` can be found in the My HCLSoftware Portal after clicking the deployment card in the URL; for example, https://my.hcltechsw.com/deployments/pzneck8m. In this case, `pzneck8m` represents the `deploymentId` as illustrated in the example URL.

The tool is packaged as an executable JAR file. Execute the tool by using the following parameters:

```cmd
java -jar <jarFilepath> -h

# <jarFilepath> Path to the jar file
# <filePaths> List of input log files to get session counts
# <excludeIPFile> Path to the file containing IPs (separated by a new line) to exclude from session counts
# <excludeSessionKeyFile> Path to the file containing session keys (separated by a new line) to exclude from session counts
# <excludeIPs> List of IPs (separated by space) to exclude from session counts
# <excludeSessionKeys> List of session keys (separated by space) to exclude from session counts
# <startDate> Specifies the start date in YYYY-MM-DD format
# <endDate> Specifies the end date in YYYY-MM-DD format
# <deploymentId> String deploymentID from MHS
# <option> Specifies the "fileOutput" to write usage into the file. By default, it displays the usage metrics.
```

The following is a sample command for running the User Session Reporting Tool using all the parameters provided:

```cmd
java -jar <jarFilepath> <filePaths...> -excludeIPFilePath <excludeIPFile> -excludeSessionKeyFilePath <excludeSessionKeyFile> -excludeIPs <excludedIPs...> -excludeSessionKeys <excludeSessionKeys ...> <startDate> <endDate> <deploymentId> <option>
```
### Example
```
# Output in the terminal
java -jar UserSessionReporting.jar input.log -excludeIPFilePath ./excludedIPs.txt -excludeSessionKeyFilePath ./excludeSessionKeys1.txt -excludeIPs "192.168.243.142" -excludeSessionKeys "192.168.243.136 \"axios/1.6.7\" \"-\"" "192.168.243.137 \"axios/1.6.7\" \"-\"" 2022-07-22 2025-07-28 pnkeq6pk > /tmp/2022-06-24T02-50-00_usage.metrics

# Write Output in file
java -jar UserSessionReporting.jar input.log -excludeIPFilePath ./excludedIPs.txt -excludeSessionKeyFilePath ./excludeSessionKeys1.txt -excludeIPs "192.168.243.142" -excludeSessionKeys "192.168.243.136 \"axios/1.6.7\" \"-\"" "192.168.243.137 \"axios/1.6.7\" \"-\"" 2022-07-22 2025-07-28 pnkeq6pk fileOutput

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

### Expected Output

```
1,Alpha525634,HCL X,1.0.0,pnkeq6pk,ebb89d32f30abc4eed049f7afbb8a7299bdc8459fd235d0b8473ca22e9457c65
DXPN_CloudNative_Tier1_500K@9.5,2024-07-22T01:00:00.000Z,2024-07-22T23:59:00.000Z,109,569b2e7f63d5d60fc30c725cbefd175c8fee423d796a01966a72425492017725
END,30f0dd458d3ca9463870c1275d344d2361df87d617e32077a5c3c379a7e9e05f413fc1fa491e808b82e1eccc70c1ab4a89d2606904a1d5c64cea50588cca8509
```

The timestamp in the usage metrics file should be earlier than the start date, formatted as {YYYY-MM-DDTHH-MM-SS UTC}_usage.metrics. For example: `2024-06-24T02-50-00_usage.metrics`

After execution, the system returns the expected session count within the specified start and end date parameters. The tool generates the following files:

- A generate the user session data usage in metrics format, the report include session data that has been encrypted in file or terminal output.

- A DAT file named `sessionStorage.dat` which serves as the internal storage for saving session data and counts between runs. This file allows the tool to maintain its state, enabling accurate aggregation of session counts over time. It is important to save this file and store it securely because it will be used by the tool to continue the session count during the next run. Losing or tampering with this file could result in incorrect session data and an inaccurate count.

You can run the User Session Reporting Tool either once for all collected log files or incrementally every X days, hours, or minutes. It stores its state between runs, processing only the logs that are after the last previously processed timestamp to prevent reprocessing old entries. This ensures that you still get the correct overall result, even when processing logs in multiple stages. 

Additionally, if there are logs from multiple deployments belonging to the same system (for example, in Active-Active setups or backups), you must process those logs together in one run, because the tool will merge them to provide a comprehensive and accurate session count.

### Upload usage metrics
The generated `{YYYY-MM-DDTHH-MM-SS UTC}usage.metrics` file should then be uploaded to the [My HCLSoftware](../../software_licensing_portal/configure_entitlement_checks/mhs_upload_usage_metrics.md) portal for processing.