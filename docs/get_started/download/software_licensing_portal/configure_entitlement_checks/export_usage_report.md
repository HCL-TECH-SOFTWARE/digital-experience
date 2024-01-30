---
title: Export Session Usage Report
---

## Overview

It seems that in cases where obtaining session usage reports is not straightforward, such as in AWS Marketplace, it may be necessary to export a manual report as described in a document.

## Unique identifier for Manual session usage report
Set Unique identifier in helm values yaml in source environment:

 ```yaml
 configuration:
   licenseManager:
     licenseManualReportUniqueIdentifier: <UAT-ENVIRONMENT>
 ```
 !!! note
     The usage report will identify the source uniquely. If no unique identity is set in the helm value, it will default to the release name and namespace combination.
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