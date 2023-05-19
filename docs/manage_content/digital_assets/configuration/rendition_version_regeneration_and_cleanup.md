# Rendition Version Regeneration and Cleanup

This section describes regeneration of missing renditions and versions and clean up of incomplete records which need to be deleted.
The following new hearbeats are introduced. All of these will run on configured interval.

**Validation HeartBeat** : This heartbeat runs every 10 min and validates the media items by checking

- if they are invalid and marks them for cleanup required, 
- if they have broken renditions/versions/thumbnails and marks them for renditions/versions required.

**Rendition or Version Heartbeat**: This heartbeat runs every 1 hour and regenerates renditions and versions for items marked as renditions/versions required.

**CleanUp HeartBeat**: This heartbeat runs once in a day and deletes binary and records of all invalid media which are marked as cleanup required.

**Orphan Data and File Cleanup HeartBeat**: This heartbeat runs once in a day and deletes orphan directories/binaries and orphan media storage records.

Heartbeat intervals and Threshold times can be configured in `values.yaml` under `incubator.configuration.digitalAssetManagement` section.

```Yaml
configuration:
    # Digital asset management configurations
    digitalAssetManagement:
      # Enable or disable the heartbeats (validationHeartBeat, renditionOrVersionHeartbeat, cleanUpHeartBeat, orphanDataAndFileCleanupHeartBeat)
      enableCleanUpOrRenditionVersionHeartBeats: true
      # Interval to run Validation heartbeat
      validationHeartBeatIntervalTimeInMinutes: 10
      # Interval to run Rendition or Version generation heartbeat
      renditionOrVersionHeartbeatIntervalTimeInMinutes: 60
      # Interval to run clean up heartbeat
      cleanUpHeartBeatIntervalTimeInMinutes: 1440
      # Interval to run orphan data and file cleanup heartbeat
      orphanDataAndFileCleanupHeartBeatIntervalTimeInMinutes: 1440
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
    enableCleanUpOrRenditionVersionHeartBeats is `true` by default. This enables all four heartbearts (validationHeartBeat, renditionOrVersionHeartbeat, cleanUpHeartBeat, orphanDataAndFileCleanupHeartBeat). User can turn off heartbeats by setting it to `false` if not required.