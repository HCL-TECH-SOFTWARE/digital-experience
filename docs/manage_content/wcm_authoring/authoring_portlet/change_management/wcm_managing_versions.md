# Manage Item Versions

You can configure your system to either automatically save a version of an item each time it is published, or allow users to select when to save a version of an item. You can restore items individually, or choose to restore a set of items within a library that either have the same label or were versioned at, or before, a specified date and time.

## Item level version control

-   If automatic versioning is enabled, a version is saved each time that you save an item, or if the item is participating in a workflow, each time the item's state changes to published. You cannot save versions of draft items.
-   If manual versioning is enabled, users with editor access or higher can manually save versions of published items. You can restore a version by viewing an item's version history and selecting a version to restore.
-   Any hierarchical relationships to other items are not saved. For example, if you save a version of a site area that has child site areas and you delete the child site areas, the child site areas are not restored if you restore the parent site area.
-   If you have links to external resources within an item, a copy of the external item is not saved when a version is created. If you delete the external resource, you cannot use the web Content Management version feature to restore the external resource.

**Item names:** An item name is independent of version control. For example, changing the name of version 4 also changes the name of all versions of that item.

## Library level version control

-   You cannot choose to save a version of an entire library. Only those items that have versions that are saved by using item level version controls are saved within a library.
-   You can restore a set of items from within a library that either have the same label or were versioned at, or before, a specified date and time.

You can apply a label to the most recent set of saved versions in a library at any time and then restore all the items with the same label later.

!!! note
    Labels that you apply to versions are not syndicated to subscribers.

## Clearing version history

The clear versions tool can be used to clear version histories from items. It is configurable and can be used to clear versions within a specific date range, for specific item-types or libraries, or to keep only some of the most recent versions.

???+ info "Related information:"
    - [Restoring items in a library](../../wcm_artifacts/web_content_library/manage_web_content_lib/wcm_managing_versions_library.md)
    - [How to delete items](../item_management_features/wcm_managing_deleting.md)
