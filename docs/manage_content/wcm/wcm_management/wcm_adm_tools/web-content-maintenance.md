# Web content maintenance

Over time the number of web content items will grow. It is important to clean up from time to time old items that are no longer needed to maintain good performance and make it easier for the content authors to do their daily work. This maintenance is especially important after you migrate from an earlier release.

## Drafts

Draft items can accumulate over time. Review and remove older draft items from your system where applicable.

## Versions

The [Clear Versions tool](../wcm_adm_tools/wcm_admin_clear_versions.md) is used to remove older versions of web content items from your system that are no longer required. You can also adjust the [version control options](../../wcm_content_delivery/cfg_webcontent_auth_env/wcm_config_prop_authoring.md) for your server to disable automatic version creation and allow users decide which versions to keep.

## Expired content

When content expires as part of a workflow you can add an action in the workflow that triggers a deletion of the content as well. Without this additional action, expired content accumulates on your server.

## Published projects

You can delete published projects after their contents are published and the project is no longer required.

## References to users and groups that no longer exist

Use the [Member Fixer tool](../wcm_adm_tools/wcm_member_fixer/index.md) to update or remove references to users or groups that have changed, or have been removed.

## Item history

Use the [item history tool](../wcm_adm_tools/wcm_admin_clear_history.md) to remove older item history details from web content items that are no longer required.

## Deleted items

When web content items are deleted, they are not removed from the server to give users the chance to undo a deletion. Users with manager access or higher to a library can purge deleted items by selecting deleted items in the "All Items" view and then clicking **Purge**. This action removes all occurrences of the selected item, including all versions. You cannot restore purged items.

## Unused items

You can also review for website for content that is no longer relevant and delete and purge these items from your system.


