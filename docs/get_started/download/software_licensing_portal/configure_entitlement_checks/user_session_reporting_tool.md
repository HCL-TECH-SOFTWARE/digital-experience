---
title: User Session Reporting Tool
---
# User Session Reporting Tool

## Overview

### Introduction

The User Session Reporting Tool is a utility designed for HCL Digital Experience (DX) users, initially for those managing on-premises deployments. This tool provides a solution for analyzing and interpreting web traffic data by processing National Center for Supercomputing Applications (NCSA) access log files. Relevant parts of each log are extracted to identify and count unique user sessions. This offers a precise understanding of usage data over specified periods.

### Tool Usage

- **Detects new unique sessions based on parameters such as IP addresses, user-agent strings, and timestamp.** The tool increments the session counter when a session becomes inactive. Inactive is defined as no new requests from the same user for 30 minutes or after a maximum of 4 hours from the start of the session. This ensures accurate session counting, even across extended periods of user activity. It supports custom date range analysis, allowing users to track and report on specific time frames. 

The tool automatically excludes internal requests, ensuring that session data reflects only external user activity. This is crucial for organizations focusing on customer interactions rather than internal maintenance or system-generated traffic. To further ensure its reliability, the User Session Reporting Tool has been rigorously tested with large sets of log files and across different access log formats, demonstrating its capability to handle diverse and extensive data sources without compromising accuracy.

Additionally, the User Session Reporting Tool is designed to handle complex scenarios, such as merging multiple log files without overcounting sessions. This feature is particularly useful in environments where logs are segmented or spread across different servers. Users can manually input and exclude specific IP addresses, allowing for greater flexibility in reporting and ensuring that internal or irrelevant traffic does not skew the session data. The tool also includes support for alternate syntax inputs, making it resilient to potential user errors during setup or configuration.

### Where to get it

Available through `FlexNet`, the User Session Reporting Tool is designed to integrate effortlessly into existing HCL DX deployments, particularly in on-premise deployments. A significant advantage of this tool is its backward compatibility with previous deployment versions. ****Users do not need to upgrade to the latest Cumulative Fix (CF) to utilize the User Session Reporting Tool****, making it accessible to a broader range of deployments without necessitating additional updates or changes to the existing infrastructure.

## Usage Guide

### Enabling Access Logs

To track usage data using the User Session Reporting Tool, we need to leverage NCSA Access Logging to generate log files containing entries about usage data that the tool will interpret.

Enabling NCSA Access Logging can be configured in the IBM WAS console by following these steps:

1. Click Servers > Server Types > WebSphere application servers > server_name (e.g., Websphere_Portal) > Under the Troubleshooting section, click NCSA access and HTTP error logging.
2. Select Enable logging service at server start-up.
3. Ensure that Enable access logging is selected and the file path is set to ${SERVER_LOG_ROOT}/http_access.log. Increase the maximum number of historical files. A suggested number is 3 for better tracking.
!!!note
        -   The number and size of log files are crucial factors to consider and depend on how frequently the tool is run. It is important to either keep enough log files available or run the tool often enough to ensure all requests are processed. If the logs are rolled over too frequently before they are processed by the tool, there is a risk of losing session data, which could lead to incomplete or inaccurate results.
4. Under Application servers > WebSphere_Portal > Container Settings > Web Container settings > click on Web container transport chains.
5. Select the inbound channel to cover (i.e. WCInboundDefaultSecure), and then click on HTTP inbound channel (HTTP_4) under general properties.
6. Under the Logging section, make sure Enable logging is enabled.
7. Expand NCSA Access logging, select Use chain-specific logging, and enter the file path for the log files and maximum file number for historical files.
8. Add a Custom property under Additional Properties.
9. Select New and provide Name: `accessLogFormat` and Value: `[DX_UST] %t %h "%{User-Agent}i" "%{X-Forwarded-For}i" [/DX_UST]`. This will change the format to include essential session data that we need.
!!!note
        -   In cases that a format is already set, the string mentioned above can be added to the already existing value
10. Save and restart the server.


Access log files can be access in side the `wp_profile` directory (i.e. /opt/IBM/WebSphere/wp_profile/logs/WebSphere_Portal/http_access.log). The log could look like this:

```
[DX_UST] [17/Jun/2024:09:47:24 +0000] 192.168.243.142 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" "10.134.209.51" [/DX_UST]
[DX_UST] [17/Jun/2024:09:47:24 +0000] 192.168.243.142 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" "10.134.209.51" [/DX_UST]
[DX_UST] [17/Jun/2024:09:47:24 +0000] 192.168.243.142 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" "10.134.209.51" [/DX_UST]
[DX_UST] [17/Jun/2024:09:47:24 +0000] 192.168.243.142 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" "10.134.209.51" [/DX_UST]
[DX_UST] [17/Jun/2024:09:47:25 +0000] 192.168.243.142 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" "10.134.209.51" [/DX_UST]
```

!!!important
        -   There is a [known issue with WAS fix packs 9.0.5.16 and 9.0.5.17](https://www.ibm.com/docs/en/was/9.0.5?topic=application-enabling-access-logging) where timestamps are broken, rendering the access log files unusable.

### Handling routing setup including reverse proxy servers, load balancers and similar components

For every request, a key is computed based on the requesting IP of the user, combined with the user agent and a forwarding header (`X-Forwarded-For`) for proxy (if a customer uses a proxy in their deployment setup) usage. Subsequent interactions during the same user session period use that key to identify the same user.

If a reverse proxy server, load balancer or similar component is used in the deployment setup, the [`X-Forwarded-For` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) is used to identify the user. This header is a de facto standard for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer. 

Please make sure that the `X-Forwarded-For` header is correctly set in your routing setup.

### Running the Tool

The tool is packaged as an executable JAR file and can be executed directly by using the parameters below:

```cmd
# <jarFilepath> Path to the jar file
# <filePaths> List of input log files to get session counts
# <startDate> Specifies the start date in YYYY-MM-DD format
# <endDate> Specifies the end date in YYYY-MM-DD format
```

Trigger/execute the tool passing the log files and date range parameters

```cmd
java -jar <jarFilepath> <filePaths...> <startDate> <endDate>
```

After executing the tool it should return with the expected session count within the specified start and end date parameters,it will generate the following files:

1. `.csv` file named  `sessionCounts<startDate><endDate>.csv` (i.e. sessionCounts_2024-01-01_2024-12-31.csv) which reports the session counts sorted and categorized by months based on the star and end date parameters.
- An LOG file named `sessionCounts.log` where the incremental session counts are logged
3. A DAT file named `sessionStorage.dat` which serves as the internal storage for saving session data and counts between runs. This file allows the tool to maintain its state, enabling accurate aggregation of session counts over time. It is important to save this file and store it securely, because it will be used by the tool to continue the session count during the next run. Losing or tampering with this file could result in incorrect session data and an inaccurate count.

You can run the User Session Reporting Tool either once for all collected log files or incrementally every X days, hours, or minutes. It stores its state between runs, processing only the logs that are after the last previously processed timestamp to prevent re-processing old entries. This ensures that you still get the correct overall result, even when processing logs in multiple stages. 

Additionally, if there are logs from multiple deployments belonging to the same system (for example, in Active-Active setups or backups), you must process those logs together in one run, because the tool will merge them to provide a comprehensive and accurate session count.

