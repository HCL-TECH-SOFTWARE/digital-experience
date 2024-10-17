---
title: Configuring My HCL Software API and File based export
---

# Configuring My HCL Software API and File based export

My HCL Software provides seamless access to various customer-facing systems such as Downloads, Software Entitlements, eCommerce, Support, Subscriptions, Account Management, Marketplace, and more.


## MHS file based export

Retrieve the MHS format from either the sessionCount.log file or the .csv files, which are categorized by month based on the start and end date parameters, located in the /mnt/licenseData/manualReport/ directory.

```
# <fileName> Java class name to generate the metric. The timestamp in the usage metrics file should be earlier than the start date, formatted as {YYYY-MM-DDTHH-MM-SS UTC}_usage.metrics. For example: 2024-06-24T02-50-00_usage.metrics
# <deploymentId> String deploymentID from MHS
# <KeyId> String KeyId from MHS
# <startDate> Specifies the start date in YYYY-MM-DD format
# <endDate> Specifies the end date in YYYY-MM-DD format
# <option> Specifies the "fileOutput" to write usage into the file. By default, it displays the usage metrics.

# By default
java -cp UserSessionReporting-VERSION-PLACEHOLDER.jar GenerateMetricFile <deploymentId> <KeyId> <startDate> <endDate> <option>
e.g by default
java -cp UserSessionReporting-VERSION-PLACEHOLDER.jar GenerateMetricFile pnkeq6pk Alpha525634 2022-07-22 2025-07-28
e.g with option
java -cp UserSessionReporting-VERSION-PLACEHOLDER.jar GenerateMetricFile pnkeq6pk Alpha525634 2022-07-22 2025-07-28 > /tmp/2022-06-24T02-50-00_usage.metrics
```

Use the following command to open a shell to generater the MHS Usage report:
```
kubectl exec -it <release name>-license-manager-0 -n <namespace> -- java -cp UserSessionReporting.jar GenerateMetricFile <deploymentId> <KeyId> <YYYY-MM-DD> <YYYY-MM-DD>

e.g
kubectl exec -it pod/dx-deployment-license-manager-0 -n dxns -- java -cp UserSessionReporting.jar GenerateMetricFile pnkXXX AlphXXXX 2022-07-22 2025-07-28 > /tmp/2022-06-24T02-50-00_usage.metrics
```