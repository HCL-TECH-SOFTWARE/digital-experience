# Delete Items

You cannot always immediately delete items. Sometimes you need to take steps to prepare an item for deletion.

To delete an item:

1.  Select the items that you want to delete from an index view.
2.  Click **Delete**.
3.  If any item cannot be deleted, a dialog opens listing which items need to be fixed before they can be deleted.

## Referential integrity

When you delete items that are referenced by other items, you need to resolve any references that are broken by deleting the item. A dialog opens listing the items that cannot be deleted. For more information about managing references, see [Managing references](references.md).

## Restoring items

You can restore a deleted item by restoring a version of an item. For more information about restoring versions, see *How to manage versions of items*.

## Purging items

Users who are granted manager access or higher to a library can purge deleted items by selecting deleted items in the "All Items" view and then clicking **Purge**. This action removes all occurrences of the selected item, including all versions. You cannot restore purged items.

You can view a list of deleted items in either the **My Items > Deleted** or **All Items Deleted** views.

???+ info "Related information:"
    - [How to manage versions of items](versions.md)
