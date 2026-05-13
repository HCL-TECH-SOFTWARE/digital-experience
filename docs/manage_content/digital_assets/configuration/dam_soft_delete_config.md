# DAM Soft Delete configuration

Soft delete and Trash clearance behaviors are controlled in `values.yaml` under the `configuration.digitalAssetManagement` section. When enableTrashClearance is set to true, automated trash clearance feature is enabled. This runs a trash clearance heartbeat every trashClearanceHeartbeatInMinutes (by default 60) minutes and permanently deletes assets and collections which are older than a period of trashClearanceTimeInDays (by default 30) in trash.

```yaml
configuration:
  digitalAssetManagement:
    # Enable or disable automatic Trash clearance
    enableTrashClearance: true
    # Number of days before items are permanently deleted
    trashClearanceTimeInDays: 30
    # Interval (in minutes) for the clearance heartbeat
    trashClearanceHeartbeatInMinutes: 60
```

![Automated Trash clearance](../../../images/DAM_trash_grid_view.png)

![Trash List view](../../../images/DAM_trash_list_view.png)