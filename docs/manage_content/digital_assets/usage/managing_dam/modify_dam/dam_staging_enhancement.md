# DAM Staging enhancements

The Digital Asset Management (DAM) Staging enables efficient replication of content between multiple DX environments. To enhance the reliability and robustness of the staging process, particularly in handling authentication scenarios, the following features have been added (available from CF238 onward):

- New API endpoint to [verify](https://opensource.hcltechsw.com/experience-api-documentation/dam-api/#tag/SubscriberInterfaceController) bidirectional connections between publishers and subscribers.
- Heartbeat verification for detecting connectivity issues and automatically disabling/enabling subscribers after secret rotation.
- Staging process will be paused for disabled subscriber.

## Heartbeat configuration

The heartbeat interval can be configured via Helm to match your environment's requirements:

```
# Verify subscribers heartbeat interval in minutes (configurable)
verifySubscribersIntervalInMinutes: 10
```

!!! note
    If a subscriber was manually disabled (status: `MANUAL`), it will not be automatically re-enabled. You must manually re-enable it using DXClient after verifying the configuration is correct.

## The dxclient command to get subscribers now returns reason and message if disabled by heartbeat

### Active subscriber

```json
{
    "id": "8b75a89b-7430-462d-9897-690d9f2d30a5",
    "targetHost": "publisher-host.com",
    "syncStatus": "Successful",
    "lastSyncTime": "2026-08-28T11:23:23.099Z",
    "resyncStatus": null,
    "lastResyncTime": null,
    "cycleLength": "2 mins",
    "status": "enabled",
    "completedSyncTime": null,
    "disabledReason": null,
    "message": null
}
```

### Manually disabled subscriber

```json
{
    "id": "8b75a89b-7430-462d-9897-690d9f2d30a5",
    "targetHost": "publisher-host.com",
    "syncStatus": "Successful",
    "lastSyncTime": "2026-08-28T11:24:13.166Z",
    "resyncStatus": null,
    "lastResyncTime": null,
    "cycleLength": "2 mins",
    "status": "disabled",
    "completedSyncTime": "2026-08-28T11:23:54.870Z",
    "disabledReason": "MANUAL",
    "message": null
}
```

### Disabled by heartbeat

```json
{
    "id": "8b75a89b-7430-462d-9897-690d9f2d30a5",
    "targetHost": "publisher-host.com",
    "syncStatus": "Failed",
    "lastSyncTime": "2026-08-28T11:23:54.870Z",
    "resyncStatus": null,
    "lastResyncTime": null,
    "cycleLength": "2 mins",
    "status": "disabled",
    "completedSyncTime": "2026-08-28T11:23:54.870Z",
    "disabledReason": "AUTH_FAILURE",
    "message": "Authentication failed because of invalid secrets/credentials"
}
```

