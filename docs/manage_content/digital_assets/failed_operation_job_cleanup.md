# Failed operations job clean up

Operation table jobs are not cleaned even if operation jobs are in a failure state for a long time.

-   The operation framework will have a new heartbeat for the failed operation called “failureOperationHeartbeat”.
-   This heartbeat will keep on checking the failed operation and delete them from the operation table.

## What it does

- Failed operation jobs are created before maximum threshold time or threshold limit of records.
- The maximum threshold time and threshold limit of records will configure from the helm.
- Deleted operation job details will be logged.
- Interval of heartbeat every hours configured by - POLL_FAILED_OPERATIONS_INTERVAL.

## Configuration values from helm

Configured maximum threshold time or threshold limit of records from helm. Failed operation jobs are created before maximum threshold time - FAILED_OPERATION_THRESHOLD_TIME_HOURS(default 24 hours) or threshold limit of records- FAILED_OPERATION_THRESHOLD_LIMIT_RECORDS(default 20000).

### Maximum threshold time

`failedOperationThresholdTimeHours` determines the maximum threshold time for failed operation jobs  after that failed operation will be deleted. By default, value set is 24 hours. 

```yaml
configuration:
  digitalAssetManagement:
    failedOperationThresholdTimeHours: 24
```

### Threshold limit of records

`failedOperationThresholdLimitRecords` determines maximum threshold limit of failed operation job records after threshold limit failed operation will be deleted. By default, value set is 20k. 

```yaml
configuration:
  digitalAssetManagement:
    failedOperationThresholdLimitRecords: 20000
```
