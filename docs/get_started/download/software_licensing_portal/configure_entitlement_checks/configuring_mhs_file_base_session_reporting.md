---
title: Configuring MHS file-based session reporting
---

My HCLSoftware (MHS) allows you to manually report your session data consumption using a file-based upload method. This approach is available for both Kubernetes and traditional (on-premises) deployments, specifically for customers who cannot or choose not to integrate directly with the MHS metering APIs for automatic online reporting.

In both scenarios, the User Session Reporting Tool is used to export session data in the MHS metric file format—the only format accepted by the MHS portal’s file upload feature. This ensures consistency in license usage reporting across disconnected or non-integrated environments.

## MHS file-based usage reporting for non-Kubernetes deployments

Using the [User Session Reporting Tool](../configure_entitlement_checks/user_session_reporting_tool.md), data from [generated National Center for Supercomputing Applications (NCSA) access log files](../configure_entitlement_checks/user_session_reporting_tool.md#enabling-access-logs) can be exported and converted into an MHS-readable metrics format. This allows you to generate MHS metric files that contain the session data, which you can upload directly to the MHS portal.

### Generating user session data usage in MHS metrics format (traditional deployment)

To generate the user session data usage from NCSA access logs in MHS metrics format, the report must include session data that has been encrypted for each user session. A deployment ID from a [created MHS deployment instance](../configure_entitlement_checks/mhs_license_and_delivery.md#creating-an-mhs-deployment-instance) is needed as a parameter to know which deployment instance the sessions are being reported or recorded to. You can find the `deploymentId` in the MHS portal after clicking the deployment card in the URL. For example, in `https://my.hcltechsw.com/deployments/pzneck8m` the `deploymentID` is `pzneck8m`.

The User Session Reporting Tool is packaged as an executable JAR file. Run the tool using the following parameters:

```cmd
java -jar <jarFilepath> -h
# <jarFilepath> Path to the JAR file
# <filePaths> List of input log files to get session counts
# <excludeIPFile> Path to the file containing IPs (separated by a new line) to exclude from session counts
# <excludeSessionKeyFile> Path to the file containing session keys (separated by a new line) to exclude from session counts
# <excludeIP> IP to exclude from session counts (multiple IPs can be excluded by adding multiple -excludeIP parameters)
# <excludeSessionKey> Session key to exclude from session counts (multiple session keys can be excluded by adding multiple -excludeSessionKey parameters)
# <startDate> Specifies the start date in YYYY-MM-DD format
# <endDate> Specifies the end date in YYYY-MM-DD format
# <deploymentId> String deploymentID from MHS
# <option> Specify "fileOutput" to write usage into an automatically named file. If option is unspecified, the usage metrics are displayed in the terminal and not saved in a file.
# <productFeatureId> Product name (HCL_DX_CloudNative or HCL_DX_Compose)
```

See the sample command for running the User Session Reporting Tool using all the parameters provided:

```cmd
java -jar <jarFilepath> <filePaths...> [-excludeIPFilePath <excludeIPFile>] [-excludeSessionKeyFilePath <excludeSessionKeyFile>] [-excludeIP <excludedIP>] [-excludeSessionKey <excludeSessionKey>] [-productFeatureIdName <productFeatureId>] <startDate> <endDate> <deploymentId> <option> 
```

### Example

Refer to the following sample commands to generate user session data usage in MHS metrics format for non-Kubernetes deployments:

```
# Output in the terminal
java -jar UserSessionReporting.jar input.log -excludeIPFilePath ./excludedIP.txt -excludeSessionKeyFilePath ./excludeSessionKeys1.txt -excludeIP "192.168.243.142" -excludeSessionKey "192.168.243.136 \"axios/1.6.7\" \"-\"" -excludeSessionKey "192.168.243.137 \"axios/1.6.7\" \"-\"" -productFeatureIdName HCL_DX_CloudNative 2022-07-22 2025-07-28 pnkeq6pk   > /tmp/2022-06-24T02-50-00_usage.metrics

# Write Output in file
java -jar UserSessionReporting.jar input.log -excludeIPFilePath ./excludedIPs.txt -excludeSessionKeyFilePath ./excludeSessionKeys1.txt -excludeIP "192.168.243.142" -excludeSessionKey "192.168.243.136 \"axios/1.6.7\" \"-\"" -excludeSessionKey "192.168.243.137 \"axios/1.6.7\" \"-\"" -productFeatureIdName HCL_DX_CloudNative 2022-07-22 2025-07-28 pnkeq6pk fileOutput 
```

See the sample `excludedIPs.txt` file:

```text
192.168.243.142
192.168.243.143
```

See the sample `excludeSessionKeys.txt` file:

```text
192.168.243.139 "python-requests/2.24.0" "-"
192.168.243.137 "axios/1.6.8" "-"
```

### Expected output

Upon running the sample commands, the following output is produced:

```
1,Alpha525634,HCL Digital Experience,v9.5,pnkeq6pk,ebb89d32f30abc4eed049f7afbb8a7299bdc8459fd235d0b8473ca22e9457c65
HCL_DX_CloudNative,2024-07-22T01:00:00.000Z,2024-07-22T23:59:00.000Z,109,569b2e7f63d5d60fc30c725cbefd175c8fee423d796a01966a72425492017725
END,30f0dd458d3ca9463870c1275d344d2361df87d617e32077a5c3c379a7e9e05f413fc1fa491e808b82e1eccc70c1ab4a89d2606904a1d5c64cea50588cca8509
```

The timestamp in the usage metrics file should be earlier than the start date. The timestamp is formatted as `{YYYY-MM-DDTHH-MM-SS UTC}_usage.metrics`. For example, `2024-06-24T02-50-00_usage.metrics`.

After running the command, the system returns the expected session count within the specified start and end date parameters. The tool generates the following files:

- A user session data usage in metrics format. The report includes session data that has been encrypted in file or terminal output.

- A DAT file named `sessionStorage.dat` which serves as the internal storage for saving session data and counts between runs. This file allows the tool to maintain its state, enabling accurate aggregation of session counts over time. You must save this file and store it securely as it will be used by the tool to continue the session count during the next run. Losing or tampering with this file could result in incorrect session data and an inaccurate count.

You can run the User Session Reporting Tool either once for all collected log files or incrementally every X days, hours, or minutes. The tool stores its state between runs and only processes logs generated after the last previously processed timestamp to prevent reprocessing old entries. This ensures that you still get the correct overall result, even when processing logs in multiple stages.

Additionally, if there are logs from multiple deployments belonging to the same system (for example, in Active-Active setups or backups), you must process those logs together in one run because the tool will merge them to provide a comprehensive and accurate session count.

## MHS file-based usage reporting for Kubernetes deployments

For file-based usage reporting on Kubernetes deployments, usage data export is done using the DX License Manager, utilizing the [User Session Reporting Tool](../configure_entitlement_checks/user_session_reporting_tool.md) packaged with it. The User Session Reporting Tool analyzes session data recorded by the license manager through HAProxy and exports it into an MHS-readable metrics file for upload.

### Generating user session data usage in MHS metrics format (Kubernetes deployment)

To generate the user session data usage in metrics format, the report must include the session data encrypted for each user session.

Use the following command to generate usage metrics from the user session data. Make sure to specify the appropriate `startDate`, `endDate` and `deploymentId` values.

```sh
kubectl exec -it <release name>-license-manager-0 -n <namespace> -- java -jar UserSessionReporting.jar GenerateMetricFile <YYYY-MM-DD> <YYYY-MM-DD> <deploymentId>
```

- `startDate`: The start date of the user session in YYYY-MM-DD format.
- `endDate`: The end date of the user session in YYYY-MM-DD format.
- `deploymentId`: The deployment identifier. You can find the `deploymentId` in the MHS portal after clicking the deployment card in the URL. For example, in the URL `https://my.hcltechsw.com/deployments/pzneck8m`, `pzneck8m` is the `deploymentId`.
- `productFeatureId`: The product name (`HCL_DX_CloudNative` or `HCL_DX_Compose`).

To save the generated metrics to a file, use the following command:

```sh
kubectl exec -it <release name>-license-manager-0 -n <namespace> -- java -jar UserSessionReporting.jar GenerateMetricFile <YYYY-MM-DD> <YYYY-MM-DD> <deploymentId> /tmp/{YYYY-MM-DDTHH-MM-SS UTC}_usage.metrics [-productFeatureIdName <productFeatureId>]
```

The timestamp in the usage metrics file should be earlier than the start date. The timestamp is formatted as `{YYYY-MM-DDTHH-MM-SS UTC}_usage.metrics`. For example, `2024-06-24T02-50-00_usage.metrics`.

### Example

Refer to the following sample command to generate user session data usage in MHS metrics format for Kubernetes deployments:

```sh
kubectl exec -it pod/dx-deployment-license-manager-0 -n dxns -- java -jar UserSessionReporting.jar GenerateMetricFile 2022-07-22 2025-07-28 pnkeq6pk > /tmp/2022-06-24T02-50-00_usage.metrics -productFeatureIdName HCL_DX_CloudNative
```

### Expected result

Upon running the sample command, the following output is produced:

```
1,Alpha525634,HCL Digital Experience,v9.5,pnkeq6pk,ebb89d32f30abc4eed049f7afbb8a7299bdc8459fd235d0b8473ca22e9457c65
HCL_DX_CloudNative,2024-10-20T06:49:23.183Z,2024-10-20T06:59:23.183Z,0,7ddd259d3077bca6774a14c005250614b9dec4fc3ac7cd4954c2c4ca0212562d
HCL_DX_CloudNative,2024-10-20T07:00:54.836Z,2024-10-20T07:10:54.836Z,0,0c8210ba2bcb22c29d35df2aae2a7292f74385dc1125dbca634e9d2ba5affcd5
HCL_DX_CloudNative,2024-10-20T07:32:00.618Z,2024-10-20T07:42:00.618Z,1,470a75d9d6eb8553fdd54f873baa85c89935cd4710d7430542e8696c3eda20d8
HCL_DX_CloudNative,2024-10-20T08:00:37.267Z,2024-10-20T08:10:37.267Z,1,e946675c396d99f892c7099e772b776082b2a9a269a1d2670ea9063b61ac43e2
End,370d193fe0be35950d2707026d23ce595ae46054b77efcc944aa2484eab39399976854c58321ba5437b78896908a0b78de6b7ee6db989b0ccd28ce5c58bd9a09
```

## Uploading usage metrics file to MHS

After generating the metrics file (for example, `{YYYY-MM-DDTHH-MM-SS UTC}_usage.metrics`), upload the file to MHS for processing.

1. Go to the **Deployments** section of the MHS portal to review entitlements and user session consumption reports.

    ![](../../software_licensing_portal/_img/upload_usage_metric_file.png)

2. Upload the usage metric file to MHS.
    1. On the **Deployments** page, select the deployment to which you want to upload your metrics file.
    2. Click **Upload new file**.
    3. Select the metrics file you want to upload to the deployment.

3. Wait for the upload to finish. Refer to the following status messages and corresponding actions when uploading metrics files to MHS:

    - If the status is `validating` or `processing`, wait on the page or return to the previous page to observe the status change (`completed`, `failed`, or `rejected`).
    - If the status is `rejected`, check for tampered hash chaining, invalid signatures, or fields not in the required format.. Ensure to upload the valid metrics file.
    - If the status is `failed`, reach out to [MHS support](https://support.hcl-software.com/csm){target="_blank"} through IT operations.
    - If the status is `completed`, the file is validated and the data is processed successfully.
