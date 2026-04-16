# DAM Soft Delete

The Soft Delete feature provides a safety net for accidental deletions of assets and collections within Digital Asset Management (DAM). Instead of permanently removing items immediately, a soft delete moves them to a **Trash** state. In this state, items are hidden from standard views but remain in the database for a configurable period. Items in the Trash can be restored or permanently deleted by authorized users.

## Soft Delete Lifecycle

### Moving an item to Trash
When a user soft-deletes an asset or collection, the item transitions from **Active** to **Soft Deleted** (Trash). The item is not removed from the database; instead, an `is_deleted` flag is set on the record, accompanied by a deletion timestamp and the identity of the user who initiated the action.

**To move an item to Trash:**

1. Open the overflow menu for the asset or collection.
2. Select **Move to Trash**.
3. Confirm the action in the confirmation dialog.
4. A snackbar notification will confirm the move.

Soft-deleted items are hidden from all standard list, search, and fetch APIs. They remain accessible only through the **Trash** view.

Items in the Trash are permanently deleted after a configurable retention period (default: 30 days). The **Days left until permanent deletion** value is displayed on each asset in the Trash view. For collections, this information is available via the **Info (i)** icon.

### Trash visibility and permissions
Access to the Trash is restricted by role:

| Role | Trash Access |
|---|---|
| **Collection Admin** | Can view, restore, and permanently delete items. Can also clear the entire Trash. |
| **Editor / Standard User** | Cannot view or access the Trash. |

The Trash can be accessed via **Settings**.

---

## Restore Logic and Conflict Handling

### Standard restore
A Collection Admin can restore individual assets or entire collections from the Trash. Restoring a collection restores the container itself; however, it does **not** automatically restore sub-collections that were moved to the Trash independently before the parent was deleted.

### Dependency rules
* **Referenced Items:** Moving referenced items to the Trash renders them unavailable in linked content. Consequently, a dialog box appears to allow the user to review references before confirming the move.
* **Nested Deletions:** If a sub-collection or asset is in the Trash and its parent collection is also in the Trash, restoring the sub-item triggers a dialog box where the user must select a new location for the restoration.
* **Parent Deletion:** If the parent collection no longer exists (i.e., it was permanently deleted), all child items are also permanently deleted and cannot be recovered.

### Name conflict resolution
If a new item with the same name is created in the original location after a soft delete has occurred, a name conflict will arise during restoration. In this scenario, a **Rename and Restore** dialog allows the user to rename the item to resolve the conflict.

---

## Permanent Deletion

### Individual permanent delete
A Collection Admin can permanently delete a specific item from the Trash at any time, bypassing the retention period. This action is irreversible.

### Clear Trash (Empty Trash)
A Collection Admin can clear all items from the Trash for which they have administrative access. This permanently removes those items immediately.

### Automated Trash clearance (Heartbeat)
A background "heartbeat" process runs at a configured interval to automatically purge items whose retention period has expired. This ensures the Trash is maintained without manual intervention.

---

## Download, Preview, and Properties in Trash

Assets in the Trash retain their binary data during the retention period. The following read-only operations are available:
* **Preview:** View the asset content.
* **Download:** Download the original asset file.
* **Properties:** View asset or collection metadata.

> **Note:** These operations are read-only; items in the Trash cannot be edited.

---

## Configuration

Soft Delete and Trash clearance behaviors are controlled via `values.yaml` under the `configuration.digitalAssetManagement` section:

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

## Staging
In a Publisher/Subscriber staging setup, soft delete actions on the Publisher propagate as **hard deletes** to Subscribers.

| Action on Publisher | Impact on Subscriber |
|---|---|
| **Soft Delete** | Item is Hard Deleted immediately |
| **Restore** | Item is Re-created |
| **Permanent Delete** | N/A (already deleted) |

## Limitations
* Search and filtering are not available within the Trash view.
* Multi-select for bulk deletion or restoration is currently unsupported.
* Collections in the Trash are not traversable; their contents cannot be browsed while the collection is in a soft-deleted state.