---
title: Exporting a usage report manually
---
# Tracking user session consumption and exporting usage reports 

## Overview

With this feature, you can:

- Configure user session tracking DX 9.5 deployments on supported Kubernetes platforms.
- View [DX 9.5 user session](entitlement_checks_scenarios.md#how-to-monitor-user-session-consumption-for-hcl-dx-cloud-native-v95-production-deployments) consumption in DX 9.5 Kubernetes deployments.
- Manually export a report of the number of sessions used in specified time periods. The DX Kubernetes deployment user session usage report presents the data in the form of sessions month in a given date range. See examples in the next sections. 

!!!note
    User session tracking and reporting support the protection of the Personally Identifiable Information (PII) of users. Data such as the User ID and the IP Address are not stored in the server logs or presented in user session consumption reports. These reports present the timestamp and number data to report the user session counts for the requested time period. 

For information on how user sessions are defined and when they begin and end, see [User Session consumption for HCL DX Cloud Native v9.5 production deployments](entitlement_checks_scenarios.md#how-to-monitor-user-session-consumption-for-hcl-dx-cloud-native-v95-production-deployments).

## Unique identifier for the DX deployment session usage report

Optionally, set a unique identifier for the specified DX Kubernetes deployment. This is included in the exported user session data.

```yaml
configuration:
  licenseManager:
    licenseManualReportUniqueIdentifier: "myUniqueIdentifier-123"
```

If no unique DX Kubernetes deployment identity is set in the helm value, the deployment uses the release name and namespace combination by default. See [Kubernetes Overview](../../../../get_started/plan_deployment/container_deployment/index.md) for deployment and configuration guidance. 

## Exporting the user session usage report

To export the user session usage report, use the following command and include the start date and end date:

```
kubectl exec -it <release name>-license-manager-0 -n <namespace> sh exportUsageReport.sh <YYYY-MM-DD> <YYYY-MM-DD>
```

The result can be sent to a file using the following command:

```
kubectl exec -it <release name>-license-manager-0 -n <namespace> sh exportUsageReport.sh <YYYY-MM-DD> <YYYY-MM-DD> > /tmp/output.txt
```
!!!note
    The timestamps provided indicate the time in UTC format.

### Expected result

```
############################################################
Session Usage Report from the Environment: UAT-ENV
This can take a few minutes...
All dates are in the format YYYY-MM-DD
############################################################
Session usage for 10-2023: 70
Session usage for 12-2023: 45
Session usage for 01-2024: 70
Gap between 2023-10-09 and 2023-12-15: 66 day(s)
Gap between 2023-12-15 and 2023-12-30: 14 day(s)
Gap between 2024-01-03 and 2024-01-15: 11 day(s)
Gap between 2024-01-15 and 2024-01-30: 14 day(s)
############################################################
Total session usage: 185
############################################################
```

Optionally, you can import the local .txt file to a spreadsheet or other reporting tools for viewing and further analysis.

