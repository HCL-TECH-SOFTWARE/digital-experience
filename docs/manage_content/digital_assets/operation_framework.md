# DAM - Operations framework

## Introduction

The operations framework inside DAM allows us to create distinct tasks, called operations, that can be created and will be handled by a child task of DAM itself.
This allows for better parallelization, scalability by handling multiple operations in parallel by a configurable amount of workers.


**Developer Note**

> Please do keep this document updated all the time. Since the operations framework is a key component of DAM and many application logics rely on it, having an up-to-date documentation is key to ensure smooth operation.

---
## Architectural Overview

The operations framework consists in the core of four key components (Marked **bold** in the text). For storing `operations` we leverage our **existing LB4 datasource**, which to this current time is `postgreSQL`. On top of it sits a **`scheduler`** which will look for `operations` that need to be handled and will assign those to **`workers`**. Those **`workers`** receive the `operation` to be handled via inter-process-communication (IPC) from the DAM main process and will return their result after being done via IPC as well. Each operation has the name of the **`triggerFunction`** it is supposed to execute, as well as `inputs` that define attributes and data to work with for handling this `operation`.

![Architectural Overview](.../../../../images/architectural_overview.png)

---

## Default task

### Failed operations job clean up

Operation table jobs are not cleaned even if operation jobs are in a failure state for a long time.

-   The operation framework will have a new heartbeat for the failed operation called “failureOperationHeartbeat”.
-   This heartbeat will keep on checking the failed operation and delete them from the operation table.

#### What it does

- Failed operation jobs are created before maximum threshold time or threshold limit of records.
- The maximum threshold time and threshold limit of records will configure from the helm.
- Deleted operation job details will be logged.
- Interval of heartbeat every hours configured by - POLL_FAILED_OPERATIONS_INTERVAL.

#### Configuration values from helm

Configured maximum threshold time or threshold limit of records from helm. Failed operation jobs are created before maximum threshold time - FAILED_OPERATION_THRESHOLD_TIME_HOURS(default 24 hours) or threshold limit of records- FAILED_OPERATION_THRESHOLD_LIMIT_RECORDS(default 20000).

#### Maximum threshold time

`failedOperationThresholdTimeHours` determines the maximum threshold time for failed operation jobs  after that failed operation will be deleted. By default, value set is 24 hours. 

```yaml
configuration:
  digitalAssetManagement:
    failedOperationThresholdTimeHours: 24
```

#### Threshold limit of records

`failedOperationThresholdLimitRecords` determines maximum threshold limit of failed operation job records after threshold limit failed operation will be deleted. By default, value set is 20k. 

```yaml
configuration:
  digitalAssetManagement:
    failedOperationThresholdLimitRecords: 20000
```