---
title: Configuring My HCL Software API and File based export
---

# Configuring My HCL Software API and File based export

My HCL Software provides seamless access to various customer-facing systems such as Downloads, Software Entitlements, eCommerce, Support, Subscriptions, Account Management, Marketplace, and more.


## Generating and Uploading User Session Data Usage in Metrics Format

To generate the user session data usage in the metrics format, the report should include the session data with encrypted data for a user session.

To generate the usage metrics from user session usage, use the following command with the appropriate `KeyId`, `deploymentId`, `Start date` and `End date`.
```
kubectl exec -it <release name>-license-manager-0 -n <namespace> -- java -cp UserSessionReporting.jar GenerateMetricFile <deploymentId> <KeyId> <YYYY-MM-DD> <YYYY-MM-DD>
```

`deploymentId` The deployment identifier.
`KeyId` The Key ID provided by MHS during registration.
`startDate` Specifies the start date in YYYY-MM-DD format
`endDate` Specifies the end date in YYYY-MM-DD format

To save the generated metrics to a file, use this command:

```
kubectl exec -it <release name>-license-manager-0 -n <namespace> -- java -cp UserSessionReporting.jar GenerateMetricFile <deploymentId> <KeyId> <YYYY-MM-DD> <YYYY-MM-DD> /tmp/{YYYY-MM-DDTHH-MM-SS UTC}_usage.metrics
```
`metricsFileName` The timestamp in the usage metrics file should be earlier than the start date, formatted as {YYYY-MM-DDTHH-MM-SS UTC}_usage.metrics. For example: 2024-06-24T02-50-00_usage.metrics


### Example:

```
kubectl exec -it pod/dx-deployment-license-manager-0 -n dxns -- java -cp UserSessionReporting.jar GenerateMetricFile pnkXXX AlphXXXX 2022-07-22 2025-07-28 > /tmp/2022-06-24T02-50-00_usage.metrics
```

### Expected result

```
1,Alpha525634,HCL X,1.0.0,pnkeq6pk,ebb89d32f30abc4eed049f7afbb8a7299bdc8459fd235d0b8473ca22e9457c65
DXPN_CloudNative_Tier1_500K@9.5,2024-10-20T06:49:23.183Z,2024-10-20T06:59:23.183Z,0,7ddd259d3077bca6774a14c005250614b9dec4fc3ac7cd4954c2c4ca0212562d
DXPN_CloudNative_Tier1_500K@9.5,2024-10-20T07:00:54.836Z,2024-10-20T07:10:54.836Z,0,0c8210ba2bcb22c29d35df2aae2a7292f74385dc1125dbca634e9d2ba5affcd5
DXPN_CloudNative_Tier1_500K@9.5,2024-10-20T07:32:00.618Z,2024-10-20T07:42:00.618Z,1,470a75d9d6eb8553fdd54f873baa85c89935cd4710d7430542e8696c3eda20d8
DXPN_CloudNative_Tier1_500K@9.5,2024-10-20T08:00:37.267Z,2024-10-20T08:10:37.267Z,1,e946675c396d99f892c7099e772b776082b2a9a269a1d2670ea9063b61ac43e2
End,370d193fe0be35950d2707026d23ce595ae46054b77efcc944aa2484eab39399976854c58321ba5437b78896908a0b78de6b7ee6db989b0ccd28ce5c58bd9a09
```
## Upload usage metrics
The generated `{YYYY-MM-DDTHH-MM-SS UTC}usage. metrics` file should then be uploaded to the MHS portal for processing.