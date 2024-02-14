---
title: Exporting a usage report manually
---
# Exporting a usage report manually

## Overview

With this feature, you can manually export a report of your used sessions. This is helpful for environments that do not allow other means of usage tracking and may require a manual export of a usage report.

## Unique identifier for the session usage report

Optionally, set a unique identifier for the deployment. This is included in the export.

!!! note
    If no unique identity is set in the helm value, the deployment uses the release name and namespace combination by default.

```yaml
configuration:
  licenseManager:
    licenseManualReportUniqueIdentifier: "myUniqueIdentifier-123"
```

## Exporting the session usage report

To export the session usage report, use the following command and include the start date and end date:

```
kubectl exec -it <release name>-license-manager-0 -n <namespace> sh exportUsageReport.sh <YYYY-MM-DD> <YYYY-MM-DD>
```

The result can be sent to a file using:

```
kubectl exec -it <release name>-license-manager-0 -n <namespace> sh exportUsageReport.sh <YYYY-MM-DD> <YYYY-MM-DD> > /tmp/output.txt
```

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
