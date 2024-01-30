---
title: Export Session Usage Report
---

## Overview

This feature allows for a manual report of the used sessions. It can be necessary for environments that do not allow for the other means of usage tracking and may require a manual export of a usage report as described in this document.

## Unique identifier for Manual session usage report

Optionally set a unique identifier for the deployment. This will be included in the export.

 !!! note
    If no unique identity is set in the helm value, it will default to the release name and namespace combination.

 ```yaml
 configuration:
   licenseManager:
     licenseManualReportUniqueIdentifier: "myUniqueIdentifier-123"
## Procedure to export the session usage report
To export the session usage report, you can use the following command and include the start date and end date:

```
kubectl exec -it <release name>-license-manager-0 -n <namespace> sh exportUsageReport.sh <YYYY-MM-DD> <YYYY-MM-DD>

```
## Expected Output

```
############################################################
Session Usage Report from the Environment: UAT-ENV
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