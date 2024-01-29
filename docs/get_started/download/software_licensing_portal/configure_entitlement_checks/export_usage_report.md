---
title: Export Session Usage Report
---

## Overview

It seems like there is no straightforward way for customers to obtain session reports and send them to us using a solution from AWS Marketplace. It would be much more convenient for customers if they could simply export the usage report, which would simplify the process of submitting their usage reports.

## Procedure to export the session usage report
You can run the below command to export the session usage report.

```
kubectl exec -it pod/dx-deployment-license-manager-0 -n <namespace> sh exportUsageReport.sh

```
