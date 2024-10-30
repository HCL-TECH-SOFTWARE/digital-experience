---
title: Exporting a Usage Report Manually
---
# Tracking User Session Consumption and Exporting Usage Reports 

## Overview

With this feature, you can:

- Configure user session tracking DX 9.5 deployments on supported Kubernetes platforms.
- View [DX 9.5 user session](entitlement_checks_scenarios.md#how-to-monitor-user-session-consumption-for-hcl-dx-cloud-native-v95-production-deployments) consumption in DX 9.5 Kubernetes deployments.
- Manually export a report of the number of sessions used in specified time periods. The DX Kubernetes deployment user session usage report presents the data in the form of sessions month in a given date range. See examples in the next sections. 
- Produce a local report from HCL License Manager regardless of which software delivery portal is in use.

!!! note
    User session tracking and reporting support the protection of Personally Identifiable Information (PII) of users. Data such as the User ID and the requestor IP address are not stored in the server logs or presented in user session consumption reports. These reports present only the timestamp and numerical data necessary to show user session counts for the requested time period. 

For information on how user sessions are defined and when they begin and end, see [User Session consumption for HCL DX Cloud Native v9.5 production deployments](entitlement_checks_scenarios.md#how-to-monitor-user-session-consumption-for-hcl-dx-cloud-native-v95-production-deployments).

## Unique Identifier for the HCL DX Deployment Session Usage Report

Optionally, set a unique identifier for the specified HCL DX Kubernetes deployment. This is included in the exported user session data helps to identify from which deployment any given report was produced.

```yaml
configuration:
  licenseManager:
    licenseManualReportUniqueIdentifier: "myUniqueIdentifier-123"
```

If no unique DX Kubernetes deployment identity is set in the helm value, the deployment uses the release name and namespace combination by default. See [Kubernetes Overview](../../../../get_started/plan_deployment/container_deployment/index.md) for deployment and configuration guidance. 

## Exporting the User Session Usage Report in CSV Format

Exporting the report in CSV format is the default option when exporting the usage report to the data table. The report contains the following details:

- `month` column shows the usage of each month.
- `sessions` column shows the total usage of that specific month.
- `gaps` column shows the gaps between the dates, represented by an underscore (_). If there are multiple gaps, they are separated by semicolons (;).
- `environment` column indicates the identity of the environment where the usage occurred.

To export the user session usage report, use the following command and include the start date and end date:

```
kubectl exec -it <release name>-license-manager-0 -n <namespace> -- sh exportUsageReport.sh <YYYY-MM-DD> <YYYY-MM-DD>
```

You can send the result to a file using the following command:

```
kubectl exec -it <release name>-license-manager-0 -n <namespace> -- sh exportUsageReport.sh <YYYY-MM-DD> <YYYY-MM-DD> > /tmp/output.csv
```
!!!note
    The timestamps indicate the time in UTC format.

### Expected result

```
month,sessions,gaps,environment
2023-01,3685341,,UAT-ENV
2023-02,3368446,,UAT-ENV
2023-03,2451073,,UAT-ENV
2023-04,10052,2023-04-01_2023-04-13;2023-04-13_2023-04-30,UAT-ENV
2023-05,2864619,,UAT-ENV
2023-06,3567305,,UAT-ENV
2023-07,3652716,,UAT-ENV
2023-08,2064732,2023-08-01_2023-08-14,UAT-ENV
2023-09,3556301,,UAT-ENV
2023-10,2809467,,UAT-ENV
2023-11,1237243,,UAT-ENV
2023-12,3733002,,UAT-ENV
2024-01,,2024-01-01_2024-01-31,UAT-ENV
2024-02,,2024-02-01_2024-02-29,UAT-ENV
2024-03,1739367,2024-03-15_2024-03-31,UAT-ENV
2024-04,,2024-04-01_2024-04-02,UAT-ENV
```

## Exporting the User Session Usage Report in Human-Readable Format

To export the user session usage report, use the following command and include the start date, end date, and `--pretty` option:

```
kubectl exec -it <release name>-license-manager-0 -n <namespace> -- sh exportUsageReport.sh <YYYY-MM-DD> <YYYY-MM-DD> --pretty
```

The result can be sent to a file using the following command:

```
kubectl exec -it <release name>-license-manager-0 -n <namespace> -- sh exportUsageReport.sh <YYYY-MM-DD> <YYYY-MM-DD> --pretty > /tmp/output.txt
```

!!! note
    The timestamps provided indicate the time in UTC format.

### Expected Result

```
############################################################
Generating Session Usage Report from the Environment: UAT-ENV
This can take a few minutes...
All dates are in the format YYYY-MM-DD
############################################################
Session usage for 2023-01: 3685341
Session usage for 2023-02: 3368446
Session usage for 2023-03: 2451073
Session usage for 2023-04: 10052
Session usage for 2023-05: 2864619
Session usage for 2023-06: 3567305
Session usage for 2023-07: 3652716
Session usage for 2023-08: 2064732
Session usage for 2023-09: 3556301
Session usage for 2023-10: 2809467
Session usage for 2023-11: 1237243
Session usage for 2023-12: 3733002
Session usage for 2024-03: 1739367
Gap between 2023-03-31 and 2023-04-13: 12 day(s)
Gap between 2023-04-13 and 2023-05-01: 17 day(s)
Gap between 2023-07-31 and 2023-08-14: 13 day(s)
Gap between 2023-10-24 and 2023-11-10: 16 day(s)
Gap between 2023-12-31 and 2024-03-01: 60 day(s)
Gap between 2024-03-15 and 2024-04-02: 17 day(s)
############################################################
Total session usage: 34739664
############################################################
```

Optionally, the locally created .txt or .csv file can be imported into a spreadsheet or other reporting tools for visualization and further analysis.
