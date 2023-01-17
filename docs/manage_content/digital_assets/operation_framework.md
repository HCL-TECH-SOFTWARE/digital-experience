# DAM - Operations framework

## Introduction

The operations framework inside DAM allows us to create distinct tasks, called operations, that can be created and will be handled by a child task of DAM itself.
This allows for better parallelization, scalability by handling multiple operations in parallel by a configurable amount of workers.

---
## Architectural Overview

The operations framework consists in the core of four key components (Marked **bold** in the text). For storing `operations` we leverage our ` DAM database`. On top of it sits a **`scheduler`** which will look for `operations` that need to be handled and will assign those to **`workers`**. Those **`workers`** receive the `operation` to be handled via inter-process-communication (IPC) from the DAM main process and will return their result after being done via IPC as well. Each operation has the name of the **`triggerFunction`** it is supposed to execute, as well as `inputs` that define attributes and data to work with for handling this `operation`.

![Architectural Overview](.../../../../images/architectural_overview.png)

---
## Start & Stop

The operations framework needs its `scheduler` to be started with the startup of DAM, otherwise newly created `operations` or existing ones that are not done yet will **not** be able to be handled by this DAM instance.
During the startup, the `scheduler` will spawn the configured amount of `workers` and open an IPC channel to each of those `workers`. In this step, `workers` are categorized as `pending workers`, since they did not fully boot up yet and signaled the DAM main process that they are `ready`.

---
## Glossary

### Operation
A specific task that needs to be performed. Will be stored in the the operations repository and be handled by the scheduler.

### Worker
A forked task that will be created by the DAM main process. This `worker` will receive the `operation` from the DAM main process and carry out the work necessary. After the work is done, it will report back to the master. It can only handle one `operation` at a time. A worker has a metadata value called `lastTouched` which is used to determine how long a `worker` is its current state.

### Pre-heating
A implementation used to minimize overhead due to starting and stopping individual worker processes. Instead of launching `workers` on demand, we keep them open and idling. When there are `operations` to be handled, we do not need to wait for them to boot up first.

### StatusUpdate
Will be send by the `workers` to the DAM main process to inform about the result of handling an `operation`.

### Free workers
`Workers` that are ready to handle `operations` but currently have no `operation` assigned.

### Active workers
`Workers` that are ready to handle `operations` and currently have one `operation` assigned.

### Pending workers
`Workers` that are not ready yet to handle `operations` and are being waited for to signal the DAM main process that they are `ready`

### Expired operation
An operation is considered expired if its current status is `PROCESSING` and its metadata value `updated` contains a timestamp older than the configured maximum time for an operation to be PROCESSING. Expired operations will be handled by the housekeeping.

### Expired worker
A `worker` is considered expired if it is a `active worker` and its metadata value `lastTouched` contains a timestamp is older that the configured maximum for a `worker` to be handling one single operation. Expired `workers` will be handled by the housekeeping.

### Scheduler
The `scheduler` is the controlling mechanism of the operations framework. It takes care of creating `workers`, feeding them with `operations` to work on and ensuring `expired operations` and `expired workers` are being cleaned up.

### Scheduler heartbeat
The `scheduler heartbeat` defines the intervals in which the `scheduler` will try to claim `operations` for `workers`. This can be configured.

### Triggerfunction
A `triggerFunction` is the function that executed by a `worker`. It is defined in a `operation` and will be executed by the `worker`. As parameters, it will receive the `inputs` from the `operation`.

### Wait operation
An operation is considered wait if its current status is `WAIT` and its property `updated` contains a timestamp not older than the configured OPERATION_WAIT_INTERVAL for an operation to be PROCESSING.

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