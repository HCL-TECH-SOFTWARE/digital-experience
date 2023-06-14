# Rendition Version Regeneration and Cleanup

This section discusses the regeneration of missing renditions and versions and the cleanup of incomplete records that must be deleted. The following new heartbeats are introduced:

- **Validation HeartBeat** - This heartbeat runs every 10 minutes and validates the media items by checking the following:
    
    - if they are invalid and then marks them as cleanup required, and
    - if they have broken renditions/versions/thumbnails and then marks them as renditions/versions required.
    
- **Rendition or Version Heartbeat** - This heartbeat runs every one hour and regenerates renditions and versions for items marked as renditions/versions required.
- **CleanUp HeartBeat** - This heartbeat runs once a day and deletes binary and records of all invalid media which are marked as cleanup required.
- **Orphan Data and File Cleanup HeartBeat** - This heartbeat runs once a day and deletes orphan directories/binaries and orphan media storage records.

All of these heartbeats run on a configured interval. Heartbeat intervals and Threshold times can be configured in `values.yaml` under `incubator.configuration.digitalAssetManagement` section.

```Yaml
configuration:
    # Digital asset management configurations
    digitalAssetManagement:
      # Enable or disable the heartbeats (validationHeartbeat, renditionOrVersionHeartbeat, cleanUpHeartbeat, orphanDataAndFileCleanupHeartbeat)
      enableCleanUpOrRenditionVersionHeartbeats: true
      # Interval to run Validation heartbeat
      validationHeartBeatIntervalTimeInMinutes: 10
      # Interval to run Rendition or Version generation heartbeat
      renditionOrVersionHeartbeatIntervalTimeInMinutes: 60
      # Interval to run clean up heartbeat
      cleanUpHeartbeatIntervalTimeInMinutes: 1440
      # Interval to run orphan data and file cleanup heartbeat
      orphanDataAndFileCleanupHeartbeatIntervalTimeInMinutes: 1440
      # A time period based on creation time, after which asset can be validated
      mediaCreationThresholdTimeInMinutes: 1440
      # A time period based on last scan time, after which a valid asset can be re-validated
      lastScanThresholdTimeInMinutes: 360
      # A time period based on creation time, after which orphan directory can be cleaned up
      orphanDirectoryModificationThresholdTimeInMinutes: 1440
      # A time period based on creation time, after which orphan data in database can be cleaned up
      orphanMediaStorageCreationThresholdTimeInMinutes: 1440
      # Maximum number of items to be scanned on each validation heartbeat
      maxValidationProcessingLimit: 100
```

!!! note 
    enableCleanUpOrRenditionVersionHeartbeats is `false` by default. To enable all four heartbeats (validationHeartbeat, renditionOrVersionHeartbeat, cleanUpHeartbeat, orphanDataAndFileCleanupHeartbeat), set enableCleanUpOrRenditionVersionHeartbeats to `true`.

!!! Note
    From cf213, some variable names are changed in order to achieve consistent variable naming. Variables changed are listed below.
    
    1. enableCleanUpOrRenditionVersionHeartbeats
    2. cleanUpHeartBeatIntervalTimeInMinutes
    3. orphanDataAndFileCleanupHeartBeatIntervalTimeInMinutes